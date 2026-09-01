import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const newsletterPayloadSchema = z.object({
	email: z.string().trim().email("Invalid email format"),
});

export const submitNewsletter = createServerFn({
	method: "POST",
})
	.validator(newsletterPayloadSchema)
	.handler(async ({ data }) => {
		const resendApiKey =
			process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
		const audienceId =
			process.env.RESEND_NEWSLETTER_AUDIENCE_ID ||
			import.meta.env.RESEND_NEWSLETTER_AUDIENCE_ID;

		if (!resendApiKey || !audienceId) {
			console.warn(
				"RESEND_API_KEY or RESEND_NEWSLETTER_AUDIENCE_ID not configured - newsletter signup unavailable",
			);
			return { success: false, error: "Newsletter temporarily unavailable" };
		}

		try {
			const resend = new Resend(resendApiKey);
			await resend.contacts.create({
				email: data.email,
				audienceId,
			});
			return { success: true };
		} catch (error) {
			console.error("[submitNewsletter] contact create failed:", error);
			return {
				success: false,
				error: "Newsletter temporarily unavailable",
			};
		}
	});