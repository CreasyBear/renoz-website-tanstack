import { describe, expect, it } from "vitest";
import { getGuide, guidePath, guideSlugs, guides, LV_PLATFORM } from "./guides";

const EXPECTED_SLUGS = [
	"wa-battery-rebates-cec",
	"renoz-vs-powerwall-sigenergy",
	"diesel-to-battery-wa-farms",
	"renoz-with-victron",
	"renoz-with-selectronic",
	"renoz-with-deye",
	"renoz-with-goodwe-sungrow",
	"perth-battery-oem",
	"fringe-of-grid-battery-wa",
	"commercial-bess-50-200kwh-wa",
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

	it("marks claims pending and avoids guide-to-guide proof links", () => {
		for (const guide of guides) {
			expect(guide.claimsPending).toBe(true);
			expect(guide.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
			for (const link of guide.proofLinks) {
				expect(link.href.startsWith("/guides/")).toBe(false);
			}
			expect(guide.cta.primaryTo).toBe("/contact");
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
