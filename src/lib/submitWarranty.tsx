import { render } from "@react-email/components";
import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";
import { WarrantyHomeownerConfirmationEmail } from "../emails/warranty-homeowner-confirmation";
import { WarrantyInstallerConfirmationEmail } from "../emails/warranty-installer-confirmation";
import { WarrantySupportEmail } from "../emails/warranty-support";

// import { createElement } from 'react' // No longer needed with JSX

// Server-side Supabase client
const supabaseUrl =
	process.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey =
	process.env.VITE_SUPABASE_ANON_KEY ||
	import.meta.env.VITE_SUPABASE_ANON_KEY ||
	"";

// SECURITY: Ensure we have the required keys for server operations
if (!supabaseUrl) {
	throw new Error("VITE_SUPABASE_URL is required for server operations");
}

if (!supabaseAnonKey) {
	throw new Error("VITE_SUPABASE_ANON_KEY is required for server operations");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const resend = new Resend(
	process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY,
);

// Comprehensive Zod validation schema for warranty registration
const submitWarrantySchema = z.object({
	warrantyId: z.string().min(1, "Warranty ID is required"),
	turnstileToken: z.string().min(1, "Security verification is required"),

	// Installer Information
	installerName: z.string().min(2, "Installer name must be at least 2 characters"),
	installerEmail: z.string().email("Valid installer email is required"),
	installerPhone: z.string().min(10, "Valid phone number is required"),
	companyName: z.string().optional(),
	electricalLicence: z.string().optional(),

	// Installation Address
	installStreet: z.string().min(5, "Street address must be at least 5 characters"),
	installSuburb: z.string().min(2, "Suburb is required"),
	installPostcode: z.string().regex(/^\d{4}$/, "Valid Australian postcode required"),

	// Homeowner (optional)
	onBehalfOfHomeowner: z.boolean(),
	homeownerName: z.string().optional(),
	homeownerEmail: z.string().email().optional().or(z.literal("")),
	homeownerPhone: z.string().optional(),
	homeownerAddress: z.string().optional(),

	// System Information
	batteryModel: z.string().min(1, "Battery model is required"),
	serialNumbers: z.array(z.string().min(1, "Serial number cannot be empty")).min(1, "At least one serial number required"),
	phases: z.string().min(1, "Phase configuration is required"),
	gridStatus: z.string().min(1, "Grid connection status is required"),
	pvSystem: z.boolean(),
	backupGenset: z.boolean(),
	inverterBrand: z.string().optional(),
	inverterModel: z.string().optional(),
	inverterSerial: z.string().optional(),

	// Dates (ISO string validation)
	installDate: z.string().refine((date) => !Number.isNaN(Date.parse(date)), "Valid installation date required"),
	commissioningDate: z.string().refine((date) => !Number.isNaN(Date.parse(date)), "Valid commissioning date required"),

	// Purchase Information
	retailer: z.string().optional(),
	purchaseDate: z.string().refine((date) => !Number.isNaN(Date.parse(date)), "Valid purchase date required").optional(),

	// Notes
	installationNotes: z.string().optional(),

	// Files
	evidenceFiles: z.array(z.object({
		url: z.string().url(),
		name: z.string().min(1),
		type: z.string().regex(/^image\/(jpeg|jpg|png)|application\/pdf$/, "Only JPEG, PNG, or PDF files allowed")
	})).max(10, "Maximum 10 files allowed"),

	// Declarations
	installationDeclaration: z.boolean().refine(val => val === true, "Installation declaration is required"),
	marketingPermission: z.boolean(),
}).refine((data) => {
	// If registering on behalf of homeowner, homeowner details are required
	if (data.onBehalfOfHomeowner) {
		return data.homeownerName && data.homeownerEmail && data.homeownerPhone;
	}
	return true;
}, {
	message: "Homeowner details are required when registering on their behalf",
	path: ["onBehalfOfHomeowner"]
});

interface SubmitWarrantyData {
	warrantyId: string;
	turnstileToken: string;

	// Installer
	installerName: string;
	installerEmail: string;
	installerPhone: string;
	companyName?: string;
	electricalLicence?: string;

	// Installation Address
	installStreet: string;
	installSuburb: string;
	installPostcode: string;

	// Homeowner (optional)
	onBehalfOfHomeowner: boolean;
	homeownerName?: string;
	homeownerEmail?: string;
	homeownerPhone?: string;
	homeownerAddress?: string;

	// System
	batteryModel: string;
	serialNumbers: string[];
	phases: string;
	gridStatus: string;
	pvSystem: boolean;
	backupGenset: boolean;
	inverterBrand?: string;
	inverterModel?: string;
	inverterSerial?: string;

	// Dates
	installDate: string; // ISO date string
	commissioningDate: string; // ISO date string

	// Purchase Info
	retailer?: string;
	purchaseDate?: string; // ISO date string

	// Notes
	installationNotes?: string;

	// Files
	evidenceFiles: Array<{
		url: string;
		name: string;
		type: string;
	}>;

	// Declarations
	installationDeclaration: boolean;
	marketingPermission: boolean;
}

export const submitWarranty = createServerFn({
	method: "POST",
})
	.inputValidator(submitWarrantySchema)
	.handler(async ({ data }: { data: SubmitWarrantyData }) => {
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
	} = data as SubmitWarrantyData;

	// Validate Turnstile token
	if (!turnstileToken) {
		return { success: false, error: "Turnstile verification required" };
	}

	// Bypass for dev testing
	if (turnstileToken === "mock-token") {
		console.warn("⚠️ Skipping Turnstile verification (mock token provided)");
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

	// Calculate capacity
	const batteryCount = serialNumbers.filter((s) => s.trim()).length;
	const nominalCapacity = batteryCount * 5.12;
	const usableCapacity = nominalCapacity * 0.9;

	// Save to Supabase
	const { error: dbError, data: warrantyData } = await supabase
		.from("warranty_registrations")
		.insert([
			{
				warranty_id: warrantyId,
				installer_name: installerName,
				installer_email: installerEmail,
				installer_phone: installerPhone,
				company_name: companyName || null,
				electrical_licence: electricalLicence || null,
				install_street: installStreet,
				install_suburb: installSuburb,
				install_postcode: installPostcode,
				on_behalf_of_homeowner: onBehalfOfHomeowner,
				homeowner_name: homeownerName || null,
				homeowner_email: homeownerEmail || null,
				homeowner_phone: homeownerPhone || null,
				homeowner_address: homeownerAddress || null,
				battery_model: batteryModel,
				serial_numbers: serialNumbers.filter((s) => s.trim()),
				phases,
				grid_status: gridStatus,
				pv_system: pvSystem,
				backup_genset: backupGenset,
				inverter_brand: inverterBrand || null,
				inverter_model: inverterModel || null,
				inverter_serial: inverterSerial || null,
				install_date: installDate,
				commissioning_date: commissioningDate,
				retailer: retailer || null,
				purchase_date: purchaseDate || null,
				installation_notes: installationNotes || null,
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

	// Prepare email payload
	const emailPayload = {
		warrantyId,
		installer: {
			technicianName: installerName,
			company: companyName,
			licence: electricalLicence,
			email: installerEmail,
			phone: installerPhone,
		},
		customer: {
			name:
				onBehalfOfHomeowner && homeownerName ? homeownerName : installerName,
			email:
				onBehalfOfHomeowner && homeownerEmail ? homeownerEmail : installerEmail,
			phone:
				onBehalfOfHomeowner && homeownerPhone ? homeownerPhone : installerPhone,
			address: {
				street: installStreet,
				suburb: installSuburb,
				state: "WA",
				postcode: installPostcode,
			},
		},
		system: {
			model: batteryModel,
			installDate,
			commissioningDate,
			serials: serialNumbers.filter((s) => s.trim()),
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
		thumbnails: evidenceFiles.map((file) => ({
			dataUrl: file.url,
			name: file.name,
		})),
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
			// const supportEmailHtml = await render(createElement(WarrantySupportEmail, { payload: emailPayload }))
			const supportEmailHtml = await render(
				<WarrantySupportEmail payload={emailPayload} />,
			);

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
			// const installerEmailHtml = await render(
			//   createElement(WarrantyInstallerConfirmationEmail, {
			//     warrantyId,
			//     installerName,
			//     installerEmail,
			//     installerPhone,
			//     companyName,
			//     batteryModel,
			//     serialNumbers: serialNumbers.filter((s) => s.trim()),
			//     installDate,
			//   })
			// )
			const installerEmailHtml = await render(
				<WarrantyInstallerConfirmationEmail
					warrantyId={warrantyId}
					installerName={installerName}
					installerEmail={installerEmail}
					installerPhone={installerPhone}
					companyName={companyName}
					batteryModel={batteryModel}
					serialNumbers={serialNumbers.filter((s) => s.trim())}
					installDate={installDate}
				/>,
			);

			await resend.emails.send({
				from: warrantyFromEmail,
				to: [installerEmail],
				replyTo: warrantyToEmail,
				subject: `Warranty Registration Confirmed - ${warrantyId}`,
				html: installerEmailHtml,
			});

			// 3. Send confirmation to homeowner (if applicable)
			if (onBehalfOfHomeowner && homeownerEmail && homeownerName) {
				// const homeownerEmailHtml = await render(
				//   createElement(WarrantyHomeownerConfirmationEmail, {
				//     warrantyId,
				//     homeownerName,
				//     homeownerEmail,
				//     installerName,
				//     installerCompany: companyName,
				//     batteryModel,
				//     serialNumbers: serialNumbers.filter((s) => s.trim()),
				//     installDate,
				//   })
				// )
				const homeownerEmailHtml = await render(
					<WarrantyHomeownerConfirmationEmail
						warrantyId={warrantyId}
						homeownerName={homeownerName}
						homeownerEmail={homeownerEmail}
						installerName={installerName}
						installerCompany={companyName}
						batteryModel={batteryModel}
						serialNumbers={serialNumbers.filter((s) => s.trim())}
						installDate={installDate}
					/>,
				);

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
