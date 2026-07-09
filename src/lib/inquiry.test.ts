import { describe, expect, it } from "vitest";
import { inquiryPayloadSchema, normalizeInquiryType } from "./inquiry";

describe("inquiry type normalization", () => {
	it.each([
		["homeowner", "residential"],
		["residential", "residential"],
		["installer", "partnership"],
		["distributor", "partnership"],
		["developer", "partnership"],
		["partner", "partnership"],
		["partnership", "partnership"],
		["consultation", "commercial"],
		["commercial", "commercial"],
		["general", "general"],
	])("maps %s contact links to %s inquiries", (input, expected) => {
		expect(normalizeInquiryType(input)).toBe(expected);
	});

	it("uses the provided fallback for unknown contact types", () => {
		expect(normalizeInquiryType("unexpected", "residential")).toBe(
			"residential",
		);
		expect(normalizeInquiryType(undefined, "general")).toBe("general");
	});
});

describe("inquiry payload validation", () => {
	it("accepts ordinary business punctuation in legitimate contact requests", () => {
		const payload = inquiryPayloadSchema.parse({
			name: "Sam O'Connor",
			email: " SAM@example.com ",
			company: "R&D Solar & Storage",
			inquiry_type: "installer",
			message: "I'm interested in RENOZ systems for solar & battery projects.",
			turnstileToken: "token",
		});

		expect(payload).toMatchObject({
			name: "Sam O'Connor",
			email: "sam@example.com",
			company: "R&D Solar & Storage",
			inquiry_type: "partnership",
			message: "I'm interested in RENOZ systems for solar & battery projects.",
		});
	});

	it("sanitizes unsafe markup before the inquiry reaches storage or email", () => {
		const payload = inquiryPayloadSchema.parse({
			name: "Sam <script>",
			email: "sam@example.com",
			company: "Solar <b>Team</b>",
			inquiry_type: "general",
			message: "Please contact me about javascript: battery options.",
			turnstileToken: "token",
		});

		expect(payload.name).toBe("Sam script");
		expect(payload.company).toBe("Solar bTeam/b");
		expect(payload.message).toBe("Please contact me about  battery options.");
	});
});
