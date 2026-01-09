import { render } from "@react-email/components";
import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";
import { createElement } from "react";
import { Resend } from "resend";
import { z } from "zod";
import { WarrantyHomeownerConfirmationEmail } from "../emails/warranty-homeowner-confirmation";
import { WarrantyInstallerConfirmationEmail } from "../emails/warranty-installer-confirmation";
import { WarrantySupportEmail } from "../emails/warranty-support";

// Simple in-memory rate limiting cache (production should use Redis)
const submissionsCache = new Map<string, number[]>();

// Server-side Supabase client
const supabaseUrl =
	process.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey =
	process.env.VITE_SUPABASE_ANON_KEY ||
	import.meta.env.VITE_SUPABASE_ANON_KEY ||
	"";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const resend = new Resend(
	process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY,
);

const submitWarrantySchema = z.object({
	warrantyId: z.string(),
	submissionId: z.string().optional(), // For deduplication
	turnstileToken: z.string(),

	// Installer
	installerName: z.string(),
	installerEmail: z.string(),
	installerPhone: z.string(),
	companyName: z.string().optional(),
	electricalLicence: z.string().optional(),

	// Installation Address
	installStreet: z.string(),
	installSuburb: z.string(),
	installPostcode: z.string(),

	// Homeowner (optional)
	onBehalfOfHomeowner: z.boolean(),
	homeownerName: z.string().optional(),
	homeownerEmail: z.string().optional(),
	homeownerPhone: z.string().optional(),
	homeownerAddress: z.string().optional(),

	// System
	batteryModel: z.string(),
	serialNumbers: z.array(z.string()),
	phases: z.string(),
	gridStatus: z.string(),
	pvSystem: z.boolean(),
	backupGenset: z.boolean(),
	inverterBrand: z.string().optional(),
	inverterModel: z.string().optional(),
	inverterSerial: z.string().optional(),

	// Dates
	installDate: z.string(), // ISO date string
	commissioningDate: z.string(), // ISO date string

	// Purchase Info
	retailer: z.string().optional(),
	purchaseDate: z.string().optional(), // ISO date string

	// Notes
	installationNotes: z.string().optional(),

	// Files
	evidenceFiles: z.array(
		z.object({
			url: z.string(),
			name: z.string(),
			type: z.string(),
		}),
	),

	// Declarations
	installationDeclaration: z.boolean(),
	marketingPermission: z.boolean(),
});

export const submitWarranty = createServerFn({
	method: "POST",
})
	.inputValidator(submitWarrantySchema)
	.handler(async ({ data }) => {
		const {
			warrantyId,
			turnstileToken,
			installerName,
			installerEmail,
			installerPhone,
			companyName,
			electricalLicence,
			installStreet,
			installSuburb,
			installPostcode,
			onBehalfOfHomeowner,
			homeownerName,
			homeownerEmail,
			homeownerPhone,
			homeownerAddress,
			batteryModel,
			serialNumbers,
			phases,
			gridStatus,
			pvSystem,
			backupGenset,
			inverterBrand,
			inverterModel,
			inverterSerial,
			installDate,
			commissioningDate,
			retailer,
			purchaseDate,
			installationNotes,
			evidenceFiles,
			installationDeclaration,
			marketingPermission,
		} = data;

		// Basic request validation - relaxed for evidence collection
		if (evidenceFiles.length > 20) {
			return { success: false, error: "Too many files uploaded (maximum 20)" };
		}

		const totalFileSize = evidenceFiles.reduce((total, file) => {
			// Estimate base64 size (base64 is ~33% larger than binary)
			const base64Size = file.url ? file.url.length * 0.75 : 0;
			return total + base64Size;
		}, 0);

		if (totalFileSize > 100 * 1024 * 1024) {
			// Increased to 100MB total for comprehensive evidence
			return {
				success: false,
				error: "Total file size too large (maximum 100MB)",
			};
		}

		// Sanitize all text inputs
		const sanitizeText = (text: string | undefined): string | undefined => {
			if (!text) return text;
			return text
				.replace(/[<>]/g, "") // Remove angle brackets
				.replace(/javascript:/gi, "") // Remove javascript protocol
				.replace(/on\w+=/gi, "") // Remove event handlers
				.trim();
		};

		const sanitizedData = {
			installerName: sanitizeText(installerName),
			installerEmail: installerEmail?.toLowerCase().trim(),
			installerPhone: sanitizeText(installerPhone),
			companyName: sanitizeText(companyName),
			electricalLicence: sanitizeText(electricalLicence),
			installStreet: sanitizeText(installStreet),
			installSuburb: sanitizeText(installSuburb),
			installPostcode: installPostcode,
			homeownerName: sanitizeText(homeownerName),
			homeownerEmail: homeownerEmail?.toLowerCase().trim(),
			homeownerPhone: sanitizeText(homeownerPhone),
			homeownerAddress: sanitizeText(homeownerAddress),
			batteryModel,
			serialNumbers: serialNumbers.map((s) => sanitizeText(s) || ""),
			phases,
			gridStatus,
			pvSystem,
			backupGenset,
			inverterBrand: sanitizeText(inverterBrand),
			inverterModel: sanitizeText(inverterModel),
			inverterSerial: sanitizeText(inverterSerial),
			installDate,
			commissioningDate,
			retailer: sanitizeText(retailer),
			purchaseDate,
			installationNotes: sanitizeText(installationNotes),
			evidenceFiles,
			installationDeclaration,
			marketingPermission,
		};

		// Validate Turnstile token
		if (!turnstileToken) {
			return { success: false, error: "Turnstile verification required" };
		}

		// Rate limiting check (server-side)
		const rateLimitKey = `warranty-submit-${installerEmail}`;
		const now = Date.now();
		const windowMs = 15 * 60 * 1000; // 15 minutes
		const maxAttempts = 3;

		// Check recent submissions (this would ideally be in Redis/database)
		// For now, we'll use a simple in-memory check
		const recentSubmissions = submissionsCache.get(rateLimitKey) || [];
		const validSubmissions = recentSubmissions.filter(
			(time) => now - time < windowMs,
		);

		if (validSubmissions.length >= maxAttempts) {
			return {
				success: false,
				error:
					"Too many submissions. Please wait 15 minutes before trying again.",
			};
		}

		validSubmissions.push(now);
		submissionsCache.set(rateLimitKey, validSubmissions);

		// Bypass for dev testing
		if (turnstileToken === "mock-token") {
			console.warn("⚠️ Skipping Turnstile verification (mock token provided)");
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

		// Calculate capacity
		const batteryCount = serialNumbers.filter((s: string) => s.trim()).length;
		const nominalCapacity = batteryCount * 5.12;
		const usableCapacity = nominalCapacity * 0.9;

		// Save to Supabase with sanitized data
		const { error: dbError, data: warrantyData } = await supabase
			.from("warranty_registrations")
			.insert([
				{
					warranty_id: warrantyId,
					installer_name: sanitizedData.installerName,
					installer_email: sanitizedData.installerEmail,
					installer_phone: sanitizedData.installerPhone,
					company_name: sanitizedData.companyName || null,
					electrical_licence: sanitizedData.electricalLicence || null,
					install_street: sanitizedData.installStreet,
					install_suburb: sanitizedData.installSuburb,
					install_postcode: sanitizedData.installPostcode,
					on_behalf_of_homeowner: onBehalfOfHomeowner,
					homeowner_name: sanitizedData.homeownerName || null,
					homeowner_email: sanitizedData.homeownerEmail || null,
					homeowner_phone: sanitizedData.homeownerPhone || null,
					homeowner_address: sanitizedData.homeownerAddress || null,
					battery_model: batteryModel,
					serial_numbers: sanitizedData.serialNumbers.filter((s: string) =>
						s.trim(),
					),
					phases,
					grid_status: gridStatus,
					pv_system: pvSystem,
					backup_genset: backupGenset,
					inverter_brand: sanitizedData.inverterBrand || null,
					inverter_model: sanitizedData.inverterModel || null,
					inverter_serial: sanitizedData.inverterSerial || null,
					install_date: installDate,
					commissioning_date: commissioningDate,
					retailer: sanitizedData.retailer || null,
					purchase_date: purchaseDate || null,
					installation_notes: sanitizedData.installationNotes || null,
					evidence_files: evidenceFiles,
					installation_declaration: installationDeclaration,
					marketing_permission: marketingPermission,
				},
			]);

		if (dbError) {
			console.error("Database error:", dbError);
			return {
				success: false,
				error: "Failed to save warranty registration. Please try again.",
			};
		}

		// Prepare email payload with sanitized data
		const emailPayload = {
			warrantyId,
			installer: {
				technicianName: sanitizedData.installerName,
				company: sanitizedData.companyName,
				licence: sanitizedData.electricalLicence,
				email: sanitizedData.installerEmail,
				phone: sanitizedData.installerPhone,
			},
			customer: {
				name:
					onBehalfOfHomeowner && sanitizedData.homeownerName
						? sanitizedData.homeownerName
						: sanitizedData.installerName,
				email:
					onBehalfOfHomeowner && sanitizedData.homeownerEmail
						? sanitizedData.homeownerEmail
						: sanitizedData.installerEmail,
				phone:
					onBehalfOfHomeowner && sanitizedData.homeownerPhone
						? sanitizedData.homeownerPhone
						: sanitizedData.installerPhone,
				address: {
					street: sanitizedData.installStreet,
					suburb: sanitizedData.installSuburb,
					state: "WA",
					postcode: sanitizedData.installPostcode,
				},
			},
			system: {
				model: batteryModel,
				installDate,
				commissioningDate,
				serials: serialNumbers.filter((s: string) => s.trim()),
				capacity: `${nominalCapacity.toFixed(2)} kWh nominal / ${usableCapacity.toFixed(2)} kWh usable`,
				phases,
				gridStatus,
				pvSystem,
				backupGenset,
				inverter: {
					brand: inverterBrand || "Not specified",
					model: inverterModel || "Not specified",
					serial: inverterSerial || "Not specified",
				},
				retailer,
				purchaseDate,
			},
			notes: `Installation Notes: ${onBehalfOfHomeowner ? "Registration on behalf of homeowner. " : ""}System Details: ${batteryModel} - Nominal: ${nominalCapacity.toFixed(2)} kWh, Usable: ${usableCapacity.toFixed(2)} kWh - ${phases} phase${pvSystem ? " with PV system" : ""}${backupGenset ? " with backup generator" : ""}. Purchase: ${retailer || "Not specified"}${purchaseDate ? ` on ${new Date(purchaseDate).toLocaleDateString()}` : ""}`,
			installationNotes,
			thumbnails: evidenceFiles.map(
				(file: { url: string; name: string; type: string }) => ({
					dataUrl: file.url,
					name: file.name,
				}),
			),
		};

		// Email configuration
		const warrantyToEmail =
			process.env.WARRANTY_TO_EMAIL ||
			import.meta.env.WARRANTY_TO_EMAIL ||
			"support@renoz.energy";
		const warrantyFromEmail =
			process.env.WARRANTY_FROM_EMAIL ||
			import.meta.env.WARRANTY_FROM_EMAIL ||
			"RENOZ Energy <noreply@renoz.energy>";
		const resendApiKey =
			process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;

		if (resendApiKey) {
			try {
				// 1. Send to support team (full details)
				const supportEmailHtml = await render(
					createElement(WarrantySupportEmail, { payload: emailPayload }),
				);
				// const supportEmailHtml = await render(<WarrantySupportEmail payload={emailPayload} />)

				console.log(`📧 Generating Support Email for ${warrantyId}`);
				console.log(`Email HTML length: ${supportEmailHtml.length}`);
				if (supportEmailHtml.length < 100) {
					console.error(
						"⚠️ Generated HTML is suspiciously short:",
						supportEmailHtml,
					);
				}

				await resend.emails.send({
					from: warrantyFromEmail,
					to: [warrantyToEmail],
					replyTo: installerEmail,
					subject: `New Warranty Registration: ${warrantyId}`,
					html: supportEmailHtml,
				});

				// 2. Send confirmation to installer
				const installerEmailHtml = await render(
					createElement(WarrantyInstallerConfirmationEmail, {
						warrantyId,
						installerName,
						installerEmail,
						installerPhone,
						companyName,
						batteryModel,
						serialNumbers: serialNumbers.filter((s: string) => s.trim()),
						installDate,
					}),
				);
				// const installerEmailHtml = await render(
				//   <WarrantyInstallerConfirmationEmail
				//     warrantyId={warrantyId}
				//     installerName={installerName}
				//     installerEmail={installerEmail}
				//     installerPhone={installerPhone}
				//     companyName={companyName}
				//     batteryModel={batteryModel}
				//     serialNumbers={serialNumbers.filter((s: string) => s.trim())}
				//     installDate={installDate}
				//   />
				// )

				await resend.emails.send({
					from: warrantyFromEmail,
					to: [installerEmail],
					replyTo: warrantyToEmail,
					subject: `Warranty Registration Confirmed - ${warrantyId}`,
					html: installerEmailHtml,
				});

				// 3. Send confirmation to homeowner (if applicable)
				if (onBehalfOfHomeowner && homeownerEmail && homeownerName) {
					const homeownerEmailHtml = await render(
						createElement(WarrantyHomeownerConfirmationEmail, {
							warrantyId,
							homeownerName,
							homeownerEmail,
							installerName,
							installerCompany: companyName,
							batteryModel,
							serialNumbers: serialNumbers.filter((s: string) => s.trim()),
							installDate,
						}),
					);
					// const homeownerEmailHtml = await render(
					//   <WarrantyHomeownerConfirmationEmail
					//     warrantyId={warrantyId}
					//     homeownerName={homeownerName}
					//     homeownerEmail={homeownerEmail}
					//     installerName={installerName}
					//     installerCompany={companyName}
					//     batteryModel={batteryModel}
					//     serialNumbers={serialNumbers.filter((s: string) => s.trim())}
					//     installDate={installDate}
					//   />
					// )

					await resend.emails.send({
						from: warrantyFromEmail,
						to: [homeownerEmail],
						replyTo: warrantyToEmail,
						subject: `Your RENOZ Battery Warranty Has Been Registered - ${warrantyId}`,
						html: homeownerEmailHtml,
					});
				}
			} catch (emailError) {
				console.error("Email error:", emailError);
				// Don't fail the request if email fails - warranty is still saved
			}
		} else {
			console.warn(
				"RESEND_API_KEY not configured - skipping email notifications",
			);
		}

		return { success: true, data: warrantyData };
	});
