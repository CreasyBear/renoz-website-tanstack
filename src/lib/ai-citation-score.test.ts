import { describe, expect, it } from "vitest";

import { guide as bestOffGridBatteryAustralia } from "../data/guide-content/best-off-grid-battery-australia";
import type { Guide } from "../data/guide-types";
import {
	classifySourceTier,
	scoreGuide,
	TIER_1_AUTHORITY,
} from "./ai-citation-score";

/** Minimal valid Guide fixture — prose only, no inline links, no stats. */
function fixtureGuide(overrides: Partial<Guide> = {}): Guide {
	return {
		slug: "fixture-guide",
		title: "Fixture Guide",
		description: "A minimal guide used to unit-test the scoring core.",
		primaryKeyword: "fixture guide",
		h1: "Fixture guide",
		updated: "2026-09-01",
		claimsPending: false,
		intro: ["This fixture explains the fixture topic plainly."],
		expertise: {
			heading: "How this fixture is built",
			body: ["The fixture body is deliberately free of citations."],
		},
		decisionHeading: "Fixture comparison",
		decisionRowLabels: ["Row one"],
		decisionColumns: [
			{
				name: "Fixture column",
				cells: ["Fixture cell one"],
			},
		],
		sections: [
			{
				heading: "The fixture section",
				body: ["A body paragraph for the fixture."],
			},
		],
		proofLinks: [
			{
				label: "Clean Energy Council batteries list",
				href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
				external: true,
			},
		],
		faqHeading: "Fixture questions",
		faqs: [
			{
				question: "What is a fixture?",
				answer: "A fixture is a controlled test input.",
			},
		],
		closing: { heading: "Fixture close", body: "The fixture closes here." },
		cta: {
			primaryLabel: "Get a system design",
			primaryTo: "/contact",
		},
		relatedProductPaths: ["/products/rural"],
		...overrides,
	};
}

describe("classifySourceTier", () => {
	it("classifies AU government and authority domains as tier 1", () => {
		expect(
			classifySourceTier(
				"https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			),
		).toBe(1);
		expect(
			classifySourceTier("https://www.energysafe.vic.gov.au/battery-storage"),
		).toBe(1);
		expect(classifySourceTier("https://www.dcceew.gov.au/")).toBe(1);
		expect(classifySourceTier("https://www.wa.gov.au/")).toBe(1);
		expect(
			classifySourceTier(
				"https://www.selectronic.com.au/kits/approvedbatteries.html",
			),
		).toBe(1);
	});

	it("classifies manufacturer and industry domains as tier 2", () => {
		expect(
			classifySourceTier(
				"https://www.powerplus-energy.com.au/products/life4851/",
			),
		).toBe(2);
		expect(classifySourceTier("https://www.bydbatterybox.com/")).toBe(2);
		expect(
			classifySourceTier("https://en.pylontech.com.cn/products/us5000"),
		).toBe(2);
	});

	it("covers the documented tier-1 authority list", () => {
		expect(TIER_1_AUTHORITY).toContain("cleanenergycouncil.org.au");
		expect(TIER_1_AUTHORITY).toContain("energysafe.vic.gov.au");
		expect(TIER_1_AUTHORITY).toContain("gov.au");
		expect(TIER_1_AUTHORITY).toContain("org.au");
	});
});

describe("scoreGuide on the shipped best-off-grid guide", () => {
	const result = scoreGuide(bestOffGridBatteryAustralia);

	it("reproduces the calibration baseline within tolerance", () => {
		expect(result.engines.ai_overview.score).toBeGreaterThanOrEqual(64);
		expect(result.engines.ai_overview.score).toBeLessThanOrEqual(76);
		expect(result.engines.chatgpt.score).toBeGreaterThanOrEqual(84);
		expect(result.engines.chatgpt.score).toBeLessThanOrEqual(96);
		expect(result.engines.perplexity.score).toBeGreaterThanOrEqual(79);
		expect(result.engines.perplexity.score).toBeLessThanOrEqual(91);
	});

	it("keeps the weighted overall tie to the baseline", () => {
		// 70 * .40 + 85 * .35 + 90 * .25 = 79.75 → 80
		expect(result.overall).toBeGreaterThanOrEqual(74);
		expect(result.overall).toBeLessThanOrEqual(86);
	});
});

describe("inline citations earn source-fidelity credit", () => {
	it("raises AI Overview source_fidelity over a no-inline baseline", () => {
		const base = scoreGuide(fixtureGuide());
		const withInline = scoreGuide(
			fixtureGuide({
				sections: [
					{
						heading: "The fixture section",
						body: [
							"The CEC approved-products list is the practical entry ticket for batteries in Australia. See [the Clean Energy Council approved batteries list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) and [the RENOZ technical specifications](/documents/datasheets/lv-5kwh100ah.pdf).",
						],
					},
				],
			}),
		);
		const baseFidelity =
			base.engines.ai_overview.factors.source_fidelity.points;
		const inlineFidelity =
			withInline.engines.ai_overview.factors.source_fidelity.points;
		expect(inlineFidelity).toBeGreaterThan(baseFidelity);
	});

	it("lets Perplexity source_authority earn points on an AU authority inline cite", () => {
		const withAuCite = scoreGuide(
			fixtureGuide({
				sections: [
					{
						heading: "The fixture section",
						body: [
							"Check the live [Clean Energy Council approved batteries list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) before committing.",
						],
					},
				],
			}),
		);
		expect(
			withAuCite.engines.perplexity.factors.source_authority.points,
		).toBeGreaterThan(0);
	});
});
