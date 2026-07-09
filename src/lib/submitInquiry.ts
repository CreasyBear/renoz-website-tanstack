import { render } from "@react-email/components";
import { createServerFn } from "@tanstack/react-start";
import * as React from "react";
import { Resend } from "resend";
import { ContactNotificationEmail } from "../emails/contact-notification";
import { GameOnNotificationEmail } from "../emails/game-on-notification";
import { inquiryPayloadSchema } from "./inquiry";
import { createServerSupabaseClient } from "./serverSupabase";

export const submitInquiry = createServerFn({
	method: "POST",
})
	.inputValidator(inquiryPayloadSchema)
	.handler(async ({ data }) => {
		const { name, email, company, inquiry_type, message, turnstileToken } =
			data;

		const gameOnFields =
			inquiry_type === "game-on"
				? {
						phone: (data as Record<string, unknown>).phone as
							| string
							| undefined,
						role: (data as Record<string, unknown>).role as string | undefined,
						sport: (data as Record<string, unknown>).sport as
							| string
							| undefined,
						suburb: (data as Record<string, unknown>).suburb as
							| string
							| undefined,
						nfp_status: (data as Record<string, unknown>).nfp_status as
							| string
							| undefined,
						facility: (data as Record<string, unknown>).facility as
							| string
							| undefined,
						interests: (Array.isArray(
							(data as Record<string, unknown>).interests,
						)
							? ((data as Record<string, unknown>).interests as string[])
							: []) as string[],
					}
				: null;

		// Validate Turnstile token
		const isTurnstileDisabled = process.env.VITE_DISABLE_TURNSTILE === "true";
		if (!turnstileToken && !isTurnstileDisabled) {
			return { success: false, error: "Turnstile verification required" };
		}

		// Bypass Turnstile only when explicitly disabled (dev/testing)
		if (isTurnstileDisabled) {
			// Skip verification when VITE_DISABLE_TURNSTILE=true (local dev only)
		} else if (!turnstileToken || turnstileToken === "mock-token") {
			return {
				success: false,
				error: "Spam verification required. Please complete the check.",
			};
		} else {
			const turnstileSecret =
				process.env.TURNSTILE_SECRET_KEY ||
				import.meta.env.TURNSTILE_SECRET_KEY;
			if (!turnstileSecret) {
				console.error("TURNSTILE_SECRET_KEY not configured");
				return { success: false, error: "Server configuration error" };
			}

			// Verify Turnstile token with Cloudflare
			const turnstileResponse = await fetch(
				"https://challenges.cloudflare.com/turnstile/v0/siteverify",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						secret: turnstileSecret,
						response: turnstileToken,
					}),
				},
			);

			const turnstileResult = await turnstileResponse.json();
			if (!turnstileResult.success) {
				return {
					success: false,
					error: "Spam verification failed. Please try again.",
				};
			}
		}

		const supabaseConnection = createServerSupabaseClient();

		if (!supabaseConnection) {
			console.error("Missing Supabase configuration");
			return { success: false, error: "Server configuration error" };
		}

		if (!supabaseConnection.config.usesServiceRoleKey) {
			console.warn(
				"SUPABASE_SERVICE_ROLE_KEY is not configured; inquiry inserts will depend on public RLS policies.",
			);
		}

		// Create Resend client inside handler
		const resend = new Resend(
			process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY,
		);

		const dbMessage =
			inquiry_type === "game-on" && gameOnFields
				? [
						message,
						"",
						gameOnFields.phone ? `Phone: ${gameOnFields.phone}` : null,
						gameOnFields.role ? `Role: ${gameOnFields.role}` : null,
						gameOnFields.sport ? `Sport: ${gameOnFields.sport}` : null,
						gameOnFields.suburb ? `Suburb: ${gameOnFields.suburb}` : null,
						gameOnFields.nfp_status ? `NFP: ${gameOnFields.nfp_status}` : null,
						gameOnFields.facility ? `Facility: ${gameOnFields.facility}` : null,
						gameOnFields.interests.length > 0
							? `Interests: ${gameOnFields.interests.join(", ")}`
							: null,
					]
						.filter((l) => l !== null)
						.join("\n")
				: message;

		// Skip DB insert for game-on (check constraint not yet updated)
		if (inquiry_type !== "game-on") {
			const { error: dbError } = await supabaseConnection.client
				.from("inquiries")
				.insert([
					{
						name,
						email,
						company: company || null,
						inquiry_type,
						message: dbMessage,
					},
				]);

			if (dbError) {
				const errMsg = dbError.message || "Unknown database error";
				console.error("[submitInquiry] DB insert failed:", errMsg, dbError);
				return {
					success: false,
					error: `Failed to save inquiry: ${errMsg}`,
				};
			}
		}

		// Send email notification via Resend
		const recipientEmail =
			process.env.CONTACT_FORM_TO_EMAIL ||
			import.meta.env.CONTACT_FORM_TO_EMAIL ||
			"sales@renoz.energy";
		const fromEmail =
			process.env.CONTACT_FORM_FROM_EMAIL ||
			import.meta.env.CONTACT_FORM_FROM_EMAIL ||
			"RENOZ Energy <noreply@renoz.energy>";
		const resendApiKey =
			process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;

		if (resendApiKey) {
			try {
				const isGameOn = inquiry_type === "game-on";
				const emailHtml = isGameOn
					? await render(
							React.createElement(GameOnNotificationEmail, {
								name,
								email,
								club_name: (company as string) ?? "",
								phone: gameOnFields?.phone,
								role: gameOnFields?.role,
								sport: gameOnFields?.sport,
								suburb: gameOnFields?.suburb,
								nfp_status: gameOnFields?.nfp_status,
								facility: gameOnFields?.facility,
								interests: gameOnFields?.interests ?? [],
								message,
							}),
						)
					: await render(
							React.createElement(ContactNotificationEmail, {
								inquiry_type,
								name,
								email,
								company,
								message,
							}),
						);

				await resend.emails.send({
					from: fromEmail,
					to: [recipientEmail],
					replyTo: email,
					subject: isGameOn
						? `Game On: ${(company as string) ?? name}`
						: `New ${inquiry_type.toUpperCase()} Inquiry from ${name}`,
					html: emailHtml,
				});
				return { success: true, notificationStatus: "sent" as const };
			} catch (emailError) {
				console.error(
					"[submitInquiry] Email notification failed (inquiry saved to DB):",
					emailError,
				);
				return { success: true, notificationStatus: "failed" as const };
			}
		} else {
			console.warn(
				"RESEND_API_KEY not configured - skipping email notification",
			);
			return { success: true, notificationStatus: "skipped" as const };
		}
	});
