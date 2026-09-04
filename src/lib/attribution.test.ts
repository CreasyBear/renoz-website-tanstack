import { describe, expect, it } from "vitest";
import { readAttributionFromUrl, withAttribution } from "./attribution";

describe("readAttributionFromUrl", () => {
	it("parses known utm params", () => {
		expect(
			readAttributionFromUrl(
				"?utm_source=chatgpt&utm_medium=referral&utm_campaign=off-grid-best",
			),
		).toEqual({
			utm_source: "chatgpt",
			utm_medium: "referral",
			utm_campaign: "off-grid-best",
		});
	});

	it("ignores unknown params", () => {
		expect(
			readAttributionFromUrl("?type=homeowner&foo=bar&utm_source=perplexity"),
		).toEqual({ utm_source: "perplexity" });
	});

	it("returns an empty object for missing or empty search", () => {
		expect(readAttributionFromUrl()).toEqual({});
		expect(readAttributionFromUrl("")).toEqual({});
		expect(readAttributionFromUrl("?utm_source=")).toEqual({});
	});

	it("removes control characters, angle brackets and javascript: schemes", () => {
		expect(
			readAttributionFromUrl(
				"?utm_source=foo%00bar&utm_medium=javascript%3Aalert(1)&utm_campaign=%3Cb%3Ebold%3C/b%3E",
			),
		).toEqual({
			utm_source: "foobar",
			utm_medium: "alert(1)",
			utm_campaign: "bbold/b",
		});
	});

	it("truncates values over 100 characters", () => {
		expect(readAttributionFromUrl(`?utm_campaign=${"a".repeat(150)}`)).toEqual({
			utm_campaign: "a".repeat(100),
		});
	});
});

describe("withAttribution", () => {
	it("appends only the utm params that are present", () => {
		expect(
			withAttribution("/contact", {
				utm_source: "chatgpt",
				utm_campaign: "off-grid-best",
			}),
		).toBe("/contact?utm_source=chatgpt&utm_campaign=off-grid-best");
	});

	it("preserves existing query params", () => {
		expect(
			withAttribution("/contact?type=homeowner", { utm_source: "chatgpt" }),
		).toBe("/contact?type=homeowner&utm_source=chatgpt");
	});

	it("returns the path unchanged when no utm params are present", () => {
		expect(withAttribution("/contact", { referrer: "chatgpt.com" })).toBe(
			"/contact",
		);
		expect(withAttribution("/contact", {})).toBe("/contact");
		expect(
			withAttribution("/contact?type=homeowner", { referrer: "chatgpt.com" }),
		).toBe("/contact?type=homeowner");
	});
});
