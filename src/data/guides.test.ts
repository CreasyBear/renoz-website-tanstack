import { describe, expect, it } from "vitest";
import { getGuide, guidePath, guideSlugs, guides, LV_PLATFORM } from "./guides";

describe("guides registry", () => {
	it("includes Wave 1 and inverter pairing slugs", () => {
		expect(guideSlugs).toEqual([
			"wa-battery-rebates-cec",
			"renoz-vs-powerwall-sigenergy",
			"diesel-to-battery-wa-farms",
			"renoz-with-victron",
			"renoz-with-selectronic",
			"renoz-with-deye",
		]);
		expect(guides).toHaveLength(6);
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
		] as const) {
			const guide = getGuide(slug);
			expect(guide?.showCapacityLadder).toBe(true);
			expect(guide?.pairingPartner).toBeTruthy();
			expect(guide?.directAnswer).toContain("5.12");
			expect(guide?.directAnswer.toLowerCase()).toContain("8");
			expect(guide?.directAnswer.toLowerCase()).toContain("6");
		}
	});
});
