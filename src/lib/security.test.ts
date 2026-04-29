import { describe, expect, it } from "vitest";
import { sanitizeText, sanitizeTextForEditing } from "./security";

describe("text sanitization", () => {
	it("preserves in-progress spaces while editing controlled inputs", () => {
		expect(sanitizeTextForEditing("John ")).toBe("John ");
		expect(sanitizeTextForEditing("John Doe")).toBe("John Doe");
	});

	it("still trims text during submit-time sanitization", () => {
		expect(sanitizeText(" John Doe ")).toBe("John Doe");
	});

	it("removes dangerous text without collapsing ordinary name spacing", () => {
		expect(sanitizeTextForEditing("John <script> Doe")).toBe(
			"John script Doe",
		);
		expect(sanitizeTextForEditing("John javascript: Doe")).toBe("John  Doe");
	});
});
