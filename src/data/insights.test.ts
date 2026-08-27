import { describe, expect, it } from "vitest";
import { getInsight, getInsightsBySlugs, insights } from "./insights";

const CONVERSION_SLUG = "cathode-tonnes-per-gwh-lfp-ncm-sodium";
const CYCLE_SLUG = "china-lithium-materials-third-cycle";
const LFP_SLUG = "china-lfp-price-signal-august-2026";
const SDIC_SLUG = "sdic-china-lithium-supply-demand-2026";

const CONVERSION_URL = "https://mp.weixin.qq.com/s/rRuk6xkqs3tObMsloGcFYA";
const CYCLE_URL = "https://mp.weixin.qq.com/s/pkxEdoO1YtBfebguFtVvXw";
const MARIANA_URL = "https://mp.weixin.qq.com/s/wc_nPEyedIRcIYXv7x4kXQ";
const SDIC_URL = "https://mp.weixin.qq.com/s/84AYIAe9WSgCYG0X1g6wng";

function insightProse(slug: string) {
	const insight = getInsight(slug);
	if (!insight) throw new Error(`Missing insight ${slug}`);
	return [
		insight.title,
		insight.description,
		insight.eyebrow,
		insight.closing.heading,
		insight.closing.body,
		...insight.about,
		...insight.blocks.flatMap((block) => {
			if (block.kind === "prose") {
				return [block.heading ?? "", ...block.paragraphs];
			}
			if (block.kind === "table") {
				return [block.title, block.note ?? "", ...block.rows.flat()];
			}
			if (block.kind === "chart") {
				return [block.title, block.note ?? ""];
			}
			return [];
		}),
	].join("\n");
}

describe("insights registry", () => {
	it("publishes a cycle note, a conversion note, a spot bulletin, and a broker note", () => {
		expect(insights.map((insight) => insight.slug)).toEqual([
			CYCLE_SLUG,
			CONVERSION_SLUG,
			LFP_SLUG,
			SDIC_SLUG,
		]);
		expect(getInsight(CYCLE_SLUG)?.title).toBe(
			"China lithium-battery materials: the third cycle",
		);
		expect(getInsight(CONVERSION_SLUG)?.title).toBe(
			"How many GWh from 10,000 tonnes of cathode?",
		);
		expect(getInsight(LFP_SLUG)?.title).toBe(
			"China storage-grade LFP price, 12 August 2026",
		);
		expect(getInsight(SDIC_SLUG)?.title).toBe(
			"SDIC’s 2026 China lithium supply–demand note",
		);
		expect(getInsight("not-a-real-insight")).toBeUndefined();
	});

	it("keeps each briefing on a single WeChat source", () => {
		const cycle = getInsight(CYCLE_SLUG);
		const conversion = getInsight(CONVERSION_SLUG);
		const lfp = getInsight(LFP_SLUG);
		const sdic = getInsight(SDIC_SLUG);
		expect(cycle?.sources).toHaveLength(1);
		expect(conversion?.sources).toHaveLength(1);
		expect(lfp?.sources).toHaveLength(1);
		expect(sdic?.sources).toHaveLength(1);
		expect(cycle?.sources[0]?.url).toBe(CYCLE_URL);
		expect(conversion?.sources[0]?.url).toBe(CONVERSION_URL);
		expect(lfp?.sources[0]?.url).toBe(MARIANA_URL);
		expect(sdic?.sources[0]?.url).toBe(SDIC_URL);
		expect(cycle?.relatedSlugs).toEqual([LFP_SLUG, SDIC_SLUG]);
		expect(lfp?.relatedSlugs).toEqual([SDIC_SLUG]);
		expect(sdic?.relatedSlugs).toEqual([LFP_SLUG]);
		expect(conversion?.relatedSlugs).toEqual([LFP_SLUG]);
		expect(
			getInsightsBySlugs(lfp?.relatedSlugs ?? []).map((item) => item.slug),
		).toEqual([SDIC_SLUG]);
	});

	it("does not promise a weekly cadence or mix the four jobs", () => {
		const haystack = insights
			.map((insight) =>
				[
					insight.title,
					insight.description,
					insight.eyebrow,
					insight.closing.body,
				].join("\n"),
			)
			.join("\n");
		expect(haystack).not.toMatch(/weekly notes/i);
		expect(insightProse(CONVERSION_SLUG)).toMatch(/1,600/);
		expect(insightProse(CONVERSION_SLUG)).toMatch(/2,100/);
		expect(insightProse(CONVERSION_SLUG)).toMatch(/1,351/);
		expect(insightProse(CONVERSION_SLUG)).toMatch(/3,543/);
		expect(insightProse(CONVERSION_SLUG)).toMatch(/77\.4%/);
		expect(insightProse(CONVERSION_SLUG)).toMatch(/N\/P/);
		expect(insightProse(CONVERSION_SLUG)).toMatch(/Dangsheng/);
		expect(insightProse(CONVERSION_SLUG)).not.toMatch(/57,000/);
		expect(insightProse(CONVERSION_SLUG)).not.toMatch(/46,782/);
		expect(insightProse(CONVERSION_SLUG)).not.toMatch(/21\.4/);
		expect(insightProse(LFP_SLUG)).toMatch(/57,000/);
		expect(insightProse(LFP_SLUG)).toMatch(/storage-grade/);
		expect(insightProse(LFP_SLUG)).not.toMatch(/46,782/);
		expect(insightProse(SDIC_SLUG)).toMatch(/46,782/);
		expect(insightProse(SDIC_SLUG)).toMatch(/528,500/);
		expect(insightProse(SDIC_SLUG)).toMatch(/525,000/);
		expect(insightProse(SDIC_SLUG)).toMatch(/2\.6%/);
		expect(insightProse(SDIC_SLUG)).toMatch(/State Development/);
		expect(insightProse(SDIC_SLUG)).not.toMatch(/57,000/);
		expect(insightProse(CONVERSION_SLUG)).toMatch(
			/Lina, a Chinese cathode-materials writer/,
		);
		expect(insightProse(CONVERSION_SLUG)).toMatch(/ternary-cathode producer/);
		expect(insightProse(CYCLE_SLUG)).toMatch(/21\.4/);
		expect(insightProse(CYCLE_SLUG)).toMatch(/A\$/);
		expect(insightProse(CYCLE_SLUG)).toMatch(/72\.2/);
		expect(insightProse(CYCLE_SLUG)).toMatch(/1,200/);
		expect(insightProse(CYCLE_SLUG)).toMatch(
			/Ganfeng Lithium is an integrated/,
		);
		expect(insightProse(CYCLE_SLUG)).not.toMatch(/1,600/);
		expect(insightProse(CYCLE_SLUG)).not.toMatch(/57,000/);
		expect(insightProse(CYCLE_SLUG)).not.toMatch(/46,782/);
	});

	it("keeps published insight copy in English", () => {
		const haystack = insights
			.flatMap((insight) => [
				insight.title,
				insight.description,
				insight.eyebrow,
				insight.closing.heading,
				insight.closing.body,
				...insight.about,
				...insight.sources.flatMap((source) => [
					source.publisher,
					source.title,
					source.note ?? "",
				]),
			])
			.join("\n");
		expect(haystack).not.toMatch(/\p{Script=Han}/u);
		expect(insightProse(CONVERSION_SLUG)).not.toMatch(/\p{Script=Han}/u);
		expect(insightProse(CYCLE_SLUG)).not.toMatch(/\p{Script=Han}/u);
		expect(insightProse(LFP_SLUG)).not.toMatch(/\p{Script=Han}/u);
		expect(insightProse(SDIC_SLUG)).not.toMatch(/\p{Script=Han}/u);
	});
});
