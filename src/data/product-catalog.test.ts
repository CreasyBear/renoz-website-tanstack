import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contactFaqs, homeFaqs } from "./faqs";
import { HARVEY_SCORECARD, LV_PLATFORM } from "./guides";
import { HC_PLATFORM, lvTowerKwh, PRODUCT_SEGMENTS } from "./product-catalog";

const root = process.cwd();

function readSrc(path: string) {
	return readFileSync(join(root, "src", path), "utf8");
}

describe("product catalog", () => {
	it("publishes the approved LV, rural, and HC product ladder", () => {
		expect(LV_PLATFORM.approvedModulesPerTower).toEqual([8, 10]);
		expect(lvTowerKwh(8)).toBe(40.96);
		expect(lvTowerKwh(10)).toBe(51.2);
		expect(PRODUCT_SEGMENTS.residential.capacityLabel).toBe("10–50 kWh");
		expect(PRODUCT_SEGMENTS.rural.capacityLabel).toBe("50–200 kWh+");
		expect(PRODUCT_SEGMENTS.rural.architectureLabel).toBe("LV multi-tower");
		expect(PRODUCT_SEGMENTS.commercial.capacityLabel).toBe("~200 kWh–2 MWh");
		expect(HC_PLATFORM.model).toBe("HC-125K-261-02B");
		expect(HC_PLATFORM.cabinetMax).toBe(8);
		expect(HARVEY_SCORECARD.usableKwh).toBe("35.8 kWh gross");
		expect(HARVEY_SCORECARD.generatorRuntime).not.toMatch(/95%/);
	});

	it("keeps product surfaces off obsolete topology and Palmer feature copy", () => {
		const surfaces = [
			"routes/products/commercial.tsx",
			"routes/products/residential.tsx",
			"routes/products/rural.tsx",
			"routes/products/index.tsx",
			"routes/index.tsx",
			"components/guides/GuideCapacityLadder.tsx",
			"data/guide-types.ts",
			"data/guide-content/48v-vs-high-voltage-battery-system.ts",
			"data/guide-content/diesel-to-battery-wa-farms.ts",
			"data/guide-content/off-grid-power-wheatbelt-wa.ts",
			"data/faqs.ts",
		];
		const haystack = surfaces.map(readSrc).join("\n");
		expect(haystack).not.toContain("Palmer Giga-Series");
		expect(haystack).not.toContain("Giga-Series Container");
		expect(haystack).not.toContain("HV (High Voltage)");
		expect(haystack).not.toContain("200+ kWh");
		expect(haystack).not.toContain("100kWh to multi-MW");
		expect(haystack).not.toContain("maxTowersParallel");
		expect(haystack).not.toContain("2 towers per system");
		expect(haystack).not.toContain("up to 6 in total");
		expect(haystack).not.toContain("50-100kWh+");
	});

	it("distinguishes LV and HC warranty documents in public FAQs", () => {
		const warrantyCopy = [...homeFaqs, ...contactFaqs]
			.map((item) => item.answer)
			.join("\n");
		expect(warrantyCopy).toContain("LV-5KWH100AH");
		expect(warrantyCopy).toContain("HC-125K-261-02B");
	});
});
