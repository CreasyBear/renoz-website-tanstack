import { z } from "zod";

export const INQUIRY_TYPES = [
	"general",
	"residential",
	"commercial",
	"partnership",
	"game-on",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

const inquiryTypeAliases: Record<string, InquiryType> = {
	general: "general",
	contact: "general",
	home: "residential",
	homeowner: "residential",
	residential: "residential",
	commercial: "commercial",
	business: "commercial",
	consultation: "commercial",
	farm: "commercial",
	offgrid: "commercial",
	"off-grid": "commercial",
	developer: "partnership",
	distributor: "partnership",
	installer: "partnership",
	partner: "partnership",
	partnership: "partnership",
	trade: "partnership",
	"game-on": "game-on",
};

function normalizeInquiryToken(value: unknown): string {
	return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function sanitizeInquiryText(value: string): string {
	return value
		.replace(/[<>]/g, "")
		.replace(/javascript:/gi, "")
		.replace(/on\w+=/gi, "");
}

export function normalizeInquiryType(
	value: unknown,
	fallback: InquiryType = "general",
): InquiryType {
	return inquiryTypeAliases[normalizeInquiryToken(value)] ?? fallback;
}

const requiredText = (
	label: string,
	maxLength: number,
	minLength: number = 1,
	minMessage: string = `${label} is required`,
) =>
	z
		.string({ required_error: `${label} is required` })
		.transform((value) => sanitizeInquiryText(value).trim())
		.pipe(
			z
				.string()
				.min(minLength, minMessage)
				.max(maxLength, `${label} is too long`),
		);

const optionalText = (maxLength: number) =>
	z
		.string()
		.optional()
		.transform((value) =>
			value ? sanitizeInquiryText(value).trim() || undefined : undefined,
		)
		.refine(
			(value) => value === undefined || value.length <= maxLength,
			"This field is too long",
		);

export const inquiryPayloadSchema = z.object({
	name: requiredText("Name", 100),
	email: z
		.string({ required_error: "Email is required" })
		.trim()
		.toLowerCase()
		.min(5, "Email is too short")
		.max(254, "Email is too long")
		.email("Invalid email format")
		.refine((value) => !/[\r\n]/.test(value), "Invalid email format"),
	company: optionalText(100),
	inquiry_type: z
		.string()
		.transform((value) => normalizeInquiryType(value, "general")),
	message: requiredText(
		"Message",
		2000,
		10,
		"Please provide more details about your energy needs",
	),
	turnstileToken: z.string(),
	phone: optionalText(40),
	role: optionalText(80),
	sport: optionalText(80),
	suburb: optionalText(80),
	nfp_status: optionalText(40),
	facility: optionalText(40),
	interests: z.array(z.string()).optional(),
});
