import { describe, expect, it } from "vitest";
import { getGuide, guidePath, guideSlugs, guides, LV_PLATFORM } from "./guides";

const EXPECTED_SLUGS = [
	"off-grid-battery-systems-perth",
	"off-grid-system-cost-wa",
	"wa-battery-rebates-cec",
	"battery-sizing-off-grid-wa",
	"off-grid-vs-hybrid-perth",
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
	"active-balancing-battery-packs",
	"pack-level-bms-integration",
	"battery-state-of-health",
] as const;

describe("guides registry", () => {
	it("includes the full FIND + pairing guide set", () => {
		expect(guideSlugs).toEqual([...EXPECTED_SLUGS]);
		expect(guides).toHaveLength(EXPECTED_SLUGS.length);
	});

	it("documents the LV capacity ladder", () => {
		expect(LV_PLATFORM).toEqual({
			moduleKwh: 5.12,
			maxModulesPerTower: 8,
			maxTowersParallel: 6,
			model: "LV-5KWH100AH",
		});
	});

	it("resolves known slugs and rejects unknown", () => {
		expect(getGuide("wa-battery-rebates-cec")?.title).toContain("WA Battery");
		expect(getGuide("renoz-with-victron")?.pairingPartner).toBe("Victron");
		expect(getGuide("perth-battery-oem")?.title).toContain("OEM");
		expect(getGuide("not-a-real-guide")).toBeUndefined();
		expect(guidePath("wa-battery-rebates-cec")).toBe(
			"/guides/wa-battery-rebates-cec",
		);
	});

	it("keeps claim status explicit and proof links source-facing", () => {
		for (const guide of guides) {
			expect(typeof guide.claimsPending).toBe("boolean");
			expect(guide.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
			if (!guide.claimsPending) {
				expect(guide.proofLinks.some((link) => link.external)).toBe(true);
			}
			for (const link of guide.proofLinks) {
				expect(link.href.startsWith("/guides/")).toBe(false);
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
			expect(guide?.directAnswer).toContain("5.12");
		}
	});
});
