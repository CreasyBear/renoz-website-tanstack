import { render } from "@react-email/components";
import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";
import * as React from "react";
import { Resend } from "resend";
import { ContactNotificationEmail } from "../emails/contact-notification";
import { z } from "zod";

// Server-side Supabase client
const supabaseUrl =
	process.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL || "";
// Use Service Role Key if available to bypass RLS, otherwise fall back to Anon Key
const supabaseKey =
	process.env.SUPABASE_SERVICE_ROLE_KEY ||
	process.env.VITE_SUPABASE_ANON_KEY ||
	import.meta.env.VITE_SUPABASE_ANON_KEY ||
	"";

const supabase = createClient(supabaseUrl, supabaseKey);

const resend = new Resend(
	process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY,
);

const submitInquirySchema = z.object({
	name: z.string(),
	email: z.string(),
	company: z.string().optional(),
	inquiry_type: z.string(),
	message: z.string(),
	turnstileToken: z.string(),
});

export const submitInquiry = createServerFn({
	method: "POST",
}).inputValidator(submitInquirySchema).handler(async ({ data }) => {
	const { name, email, company, inquiry_type, message, turnstileToken } = data;

	// Validate Turnstile token
	if (!turnstileToken && process.env.VITE_DISABLE_TURNSTILE !== "true") {
		return { success: false, error: "Turnstile verification required" };
	}

	// Bypass for dev testing
	if (
		turnstileToken === "mock-token" ||
		process.env.VITE_DISABLE_TURNSTILE === "true"
	) {
		// console.warn('⚠️ Skipping Turnstile verification (mock token provided or disabled)')
	} else {
		const turnstileSecret =
			process.env.TURNSTILE_SECRET_KEY || import.meta.env.TURNSTILE_SECRET_KEY;
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

	// Save to Supabase
	const { error: dbError, data: inquiryData } = await supabase
		.from("inquiries")
		.insert([
			{
				name,
				email,
				company: company || null,
				inquiry_type,
				message,
			},
		])
		.select()
		.single();

	if (dbError) {
		console.error("Database error:", dbError);
		// Return error so client knows something went wrong
		return {
			success: false,
			error: "Failed to save inquiry. Please try again.",
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
		} catch (emailError) {
			console.error("Email error:", emailError);
		}
	} else {
		console.warn("RESEND_API_KEY not configured - skipping email notification");
	}

	return { success: true, data: inquiryData };
});
