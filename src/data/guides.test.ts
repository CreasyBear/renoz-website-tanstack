import { describe, expect, it } from "vitest";
import { GUIDE_LINK_SETS, GUIDE_LINKS } from "./guide-links";
import {
	getGuide,
	getGuidesBySlugs,
	guidePath,
	guideSlugs,
	guides,
	HARVEY_SCORECARD,
	LV_PLATFORM,
} from "./guides";

const EXPECTED_SLUGS = [
	"grid-connection-vs-off-grid-wa",
	"generator-running-costs-wa",
	"off-grid-power-shed-wa",
	"stand-alone-power-system-wa",
	"is-it-worth-going-off-grid-wa",
	"living-with-a-generator-wa",
	"generator-vs-solar-battery-farm-wa",
	"off-grid-battery-systems-perth",
	"off-grid-generator-hybrid-sizing",
	"off-grid-packages-decoder",
	"off-grid-system-cost-wa",
	"wa-battery-rebates-cec",
	"battery-sizing-off-grid-wa",
	"off-grid-vs-hybrid-perth",
	"renoz-vs-genz",
	"renoz-vs-powerplus",
	"renoz-vs-powerwall-sigenergy",
	"perth-battery-oem",
	"renoz-with-victron",
	"renoz-with-selectronic",
	"renoz-with-deye",
	"renoz-with-goodwe-sungrow",
	"off-grid-solar-perth-hills",
	"off-grid-power-wheatbelt-wa",
	"off-grid-solar-south-west-wa",
	"off-grid-solar-great-southern-wa",
	"fringe-of-grid-battery-wa",
	"diesel-to-battery-wa-farms",
	"commercial-bess-50-200kwh-wa",
	"battery-fire-suppression-essential",
	"48v-vs-high-voltage-battery-system",
	"active-balancing-battery-packs",
	"pack-level-bms-integration",
	"battery-state-of-health",
	"best-off-grid-battery-australia",
	"best-off-grid-battery-perth",
	"best-solar-battery-australia",
	"solar-cold-rooms-pack-sheds",
	"solar-dairy-farms",
	"solar-winery-vineyard-off-grid",
	"western-power-connection-costs",
] as const;

function containsKeyword(haystack: string, keyword: string) {
	return haystack.toLowerCase().includes(keyword.toLowerCase());
}

function guideProse(guide: (typeof guides)[number]) {
	return [
		...guide.intro,
		guide.expertise.heading,
		...guide.expertise.body,
		...guide.sections.flatMap((section) => [section.heading, ...section.body]),
		guide.closing.heading,
		guide.closing.body,
	].join("\n");
}

describe("guides registry", () => {
	it("includes the full FIND + pairing guide set", () => {
		expect(guideSlugs).toEqual([...EXPECTED_SLUGS]);
		expect(guides).toHaveLength(EXPECTED_SLUGS.length);
	});

	it("documents the published LV capacity boundary and Harvey scorecard", () => {
		expect(LV_PLATFORM).toEqual({
			moduleKwh: 5.12,
			usableKwhPerModule: 4.61,
			approvedModulesPerTower: [8, 10],
			model: "LV-5KWH100AH",
			voltageNominal: "51.2 V",
		});
		expect(HARVEY_SCORECARD.usableKwh).toContain("35.8");
		expect(HARVEY_SCORECARD.usableKwh).toContain("gross");
		expect(HARVEY_SCORECARD.gridQuoteAvoided).toBe("$200,000");
	});

	it("resolves known slugs and rejects unknown", () => {
		expect(getGuide("wa-battery-rebates-cec")?.title).toContain("WA Battery");
		expect(getGuide("48v-vs-high-voltage-battery-system")?.title).toBe(
			"48V vs High-Voltage Battery Systems: Which Is Right for Your Site?",
		);
		expect(getGuide("renoz-with-victron")?.pairingPartner).toBe("Victron");
		expect(getGuide("perth-battery-oem")?.title).toContain("OEM");
		expect(getGuide("not-a-real-guide")).toBeUndefined();
		expect(guidePath("wa-battery-rebates-cec")).toBe(
			"/guides/wa-battery-rebates-cec",
		);
		expect(getGuidesBySlugs(["renoz-with-deye", "missing"])).toHaveLength(1);
		expect(GUIDE_LINK_SETS.residential.length).toBeGreaterThan(0);
	});

	it("keeps the canonical battery engineering guides distinct and discoverable", () => {
		const engineeringSlugs = [
			"battery-state-of-health",
			"active-balancing-battery-packs",
			"pack-level-bms-integration",
		] as const;

		for (const linkSet of [
			GUIDE_LINK_SETS.rural,
			GUIDE_LINK_SETS.commercial,
			GUIDE_LINK_SETS.resources,
		]) {
			for (const slug of engineeringSlugs) {
				expect(linkSet.filter((candidate) => candidate === slug)).toHaveLength(
					1,
				);
			}
		}
		const voltageArchitecture = getGuide("48v-vs-high-voltage-battery-system");
		expect(voltageArchitecture?.sections).toHaveLength(5);
		expect(voltageArchitecture?.faqs).toHaveLength(6);
		expect(voltageArchitecture?.decisionRowLabels).toHaveLength(6);
		const architectureExamples = voltageArchitecture?.architectureExamples;
		expect(architectureExamples?.categories).toHaveLength(4);
		expect(
			architectureExamples?.categories.flatMap((category) =>
				category.products.map((product) => product.name),
			),
		).toEqual(
			expect.arrayContaining([
				"RENOZ LV-5KWH100AH",
				"GenZ GZ48-058-2RU-01Z / GZ48-081-2RU-01Z",
				"GoodWe Lynx U G3",
				"BYD Battery-Box Premium HVS / HVM",
				"Fronius Reserva",
				"Tesla Powerwall 3",
				"Victron MultiPlus-II",
				"Selectronic SP PRO Series 2i",
			]),
		);
		for (const linkSet of [
			GUIDE_LINK_SETS.residential,
			GUIDE_LINK_SETS.rural,
			GUIDE_LINK_SETS.commercial,
			GUIDE_LINK_SETS.resources,
		]) {
			expect(
				linkSet.filter((slug) => slug === "48v-vs-high-voltage-battery-system"),
			).toHaveLength(1);
		}

		const stateOfHealth = getGuide("battery-state-of-health");
		const balancing = getGuide("active-balancing-battery-packs");
		expect(stateOfHealth?.sections).toHaveLength(7);
		expect(stateOfHealth?.faqs).toHaveLength(9);
		expect(balancing?.sections).toHaveLength(7);
		expect(balancing?.faqs).toHaveLength(8);
	});

	it("keeps decision-table columns aligned with their row labels", () => {
		for (const guide of guides) {
			for (const column of guide.decisionColumns) {
				expect(column.cells).toHaveLength(guide.decisionRowLabels.length);
			}
		}
	});

	it("keeps claim status explicit and proof links source-facing", () => {
		for (const guide of guides) {
			expect(typeof guide.claimsPending).toBe("boolean");
			expect(guide.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
			if (!guide.claimsPending) {
				expect(guide.proofLinks.some((link) => link.external)).toBe(true);
			}
			expect([
				"/contact",
				"/resources",
				"/products/residential",
				"/products/rural",
				"/products/commercial",
			]).toContain(guide.cta.primaryTo);
		}
	});

	it("follows SEO spine rules without stuffing closings", () => {
		for (const guide of guides) {
			expect(guide.intro.length).toBeGreaterThanOrEqual(2);
			expect(guide.intro.length).toBeLessThanOrEqual(3);
			expect(guide.primaryKeyword.length).toBeGreaterThan(0);
			expect(guide.h1.length).toBeGreaterThan(20);
			expect(
				guide.intro.some((paragraph) =>
					containsKeyword(paragraph, guide.primaryKeyword),
				),
			).toBe(true);
			expect(containsKeyword(guide.closing.heading, guide.primaryKeyword)).toBe(
				false,
			);
			expect(guide.faqHeading.length).toBeGreaterThan(0);
			expect(guide.decisionHeading.length).toBeGreaterThan(0);
			expect(guide.expertise.body.length).toBeGreaterThan(0);
			expect(guide.faqs.length).toBeGreaterThan(0);
		}
	});

	it("keeps pairing guides on the capacity ladder", () => {
		for (const slug of [
			"renoz-with-victron",
			"renoz-with-selectronic",
			"renoz-with-deye",
			"renoz-with-goodwe-sungrow",
		] as const) {
			const guide = getGuide(slug);
			expect(guide?.showCapacityLadder).toBe(true);
			expect(guide?.pairingPartner).toBeTruthy();
			const prose = guide ? guideProse(guide) : "";
			expect(prose).toContain("5.12");
		}
	});

	it("puts Harvey scorecard numbers on the diesel farm guide", () => {
		const guide = getGuide("diesel-to-battery-wa-farms");
		const prose = guide ? guideProse(guide) : "";
		expect(prose).toContain("35.8");
		expect(prose).toContain("$200,000");
		expect(prose).toContain("Selectronic");
	});
});

describe("guide link metadata", () => {
	it("keeps light link metadata in sync with the corpus", () => {
		// guide-links.ts duplicates titles on purpose (bundle seam); this test is
		// the sync guard: exact titles both ways, plus link-set slug validity.
		const titleBySlug: Record<string, string> = {};
		for (const guide of guides) titleBySlug[guide.slug] = guide.title;
		expect(Object.keys(GUIDE_LINKS).length).toBe(guides.length);
		for (const [slug, title] of Object.entries(GUIDE_LINKS)) {
			expect(titleBySlug[slug], `unknown link slug: ${slug}`).toBe(title);
		}
		for (const [slug, title] of Object.entries(titleBySlug)) {
			expect(GUIDE_LINKS[slug], `missing link metadata: ${slug}`).toBe(title);
		}
		for (const set of Object.values(GUIDE_LINK_SETS)) {
			for (const slug of set) {
				expect(
					GUIDE_LINKS[slug],
					`link set references unknown slug: ${slug}`,
				).toBeDefined();
			}
		}
	});
});
