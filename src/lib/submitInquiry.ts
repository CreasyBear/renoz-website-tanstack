import { render } from "@react-email/components";
import { createServerFn } from "@tanstack/react-start";
import * as React from "react";
import { Resend } from "resend";
import { ContactNotificationEmail } from "../emails/contact-notification";
import { inquiryPayloadSchema } from "./inquiry";
import { createServerSupabaseClient } from "./serverSupabase";

export const submitInquiry = createServerFn({
	method: "POST",
})
	.validator(inquiryPayloadSchema)
	.handler(async ({ data }) => {
		const { name, email, company, inquiry_type, message, turnstileToken } =
			data;

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

		const { error: dbError } = await supabaseConnection.client
			.from("inquiries")
			.insert([
				{
					name,
					email,
					company: company || null,
					inquiry_type,
					message,
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
			const resend = new Resend(resendApiKey);
			try {
				const emailHtml = await render(
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
					subject: `New ${inquiry_type.toUpperCase()} Inquiry from ${name}`,
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
