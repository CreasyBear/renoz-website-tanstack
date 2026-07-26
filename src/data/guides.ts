/**
 * Decision guides — listed via /guides, sitemap, llms.txt, and JSON-LD.
 * One file per guide in ./guide-content; shared types in ./guide-types.
 */

import { guide as activeBalancingBatteryPacks } from "./guide-content/active-balancing-battery-packs";
import { guide as batteryFireSuppressionEssential } from "./guide-content/battery-fire-suppression-essential";
import { guide as batterySizingOffGridWa } from "./guide-content/battery-sizing-off-grid-wa";
import { guide as batteryStateOfHealth } from "./guide-content/battery-state-of-health";
import { guide as commercialBess50200kwhWa } from "./guide-content/commercial-bess-50-200kwh-wa";
import { guide as dieselToBatteryWaFarms } from "./guide-content/diesel-to-battery-wa-farms";
import { guide as fringeOfGridBatteryWa } from "./guide-content/fringe-of-grid-battery-wa";
import { guide as offGridBatterySystemsPerth } from "./guide-content/off-grid-battery-systems-perth";
import { guide as offGridPowerWheatbeltWa } from "./guide-content/off-grid-power-wheatbelt-wa";
import { guide as offGridSolarGreatSouthernWa } from "./guide-content/off-grid-solar-great-southern-wa";
import { guide as offGridSolarPerthHills } from "./guide-content/off-grid-solar-perth-hills";
import { guide as offGridSolarSouthWestWa } from "./guide-content/off-grid-solar-south-west-wa";
import { guide as offGridSystemCostWa } from "./guide-content/off-grid-system-cost-wa";
import { guide as offGridVsHybridPerth } from "./guide-content/off-grid-vs-hybrid-perth";
import { guide as packLevelBmsIntegration } from "./guide-content/pack-level-bms-integration";
import { guide as perthBatteryOem } from "./guide-content/perth-battery-oem";
import { guide as renozVsPowerwallSigenergy } from "./guide-content/renoz-vs-powerwall-sigenergy";
import { guide as renozWithDeye } from "./guide-content/renoz-with-deye";
import { guide as renozWithGoodweSungrow } from "./guide-content/renoz-with-goodwe-sungrow";
import { guide as renozWithSelectronic } from "./guide-content/renoz-with-selectronic";
import { guide as renozWithVictron } from "./guide-content/renoz-with-victron";
import { guide as waBatteryRebatesCec } from "./guide-content/wa-battery-rebates-cec";
import type { Guide } from "./guide-types";

export * from "./guide-types";

export const GUIDE_LINK_SETS = {
	residential: [
		"wa-battery-rebates-cec",
		"renoz-vs-powerwall-sigenergy",
		"renoz-with-deye",
	],
	rural: [
		"diesel-to-battery-wa-farms",
		"renoz-with-victron",
		"renoz-with-selectronic",
	],
	resources: [
		"renoz-with-victron",
		"renoz-with-selectronic",
		"renoz-with-deye",
		"wa-battery-rebates-cec",
	],
	partners: ["wa-battery-rebates-cec", "renoz-vs-powerwall-sigenergy"],
	caseStudies: ["diesel-to-battery-wa-farms", "renoz-with-selectronic"],
	harvey: ["diesel-to-battery-wa-farms", "renoz-with-selectronic"],
} as const;

export const guides: Guide[] = [
	offGridBatterySystemsPerth,
	offGridSystemCostWa,
	waBatteryRebatesCec,
	batterySizingOffGridWa,
	offGridVsHybridPerth,
	renozVsPowerwallSigenergy,
	perthBatteryOem,
	renozWithVictron,
	renozWithSelectronic,
	renozWithDeye,
	renozWithGoodweSungrow,
	offGridSolarPerthHills,
	offGridPowerWheatbeltWa,
	offGridSolarSouthWestWa,
	offGridSolarGreatSouthernWa,
	fringeOfGridBatteryWa,
	dieselToBatteryWaFarms,
	commercialBess50200kwhWa,
	batteryFireSuppressionEssential,
	activeBalancingBatteryPacks,
	packLevelBmsIntegration,
	batteryStateOfHealth,
];

/** Slug groupings for the /guides index page. */
export const guideGroups: { title: string; blurb: string; slugs: string[] }[] =
	[
		{
			title: "Start here",
			blurb:
				"The core decisions: what an off-grid system involves, what it costs, and which path fits your block.",
			slugs: [
				"off-grid-battery-systems-perth",
				"off-grid-system-cost-wa",
				"battery-sizing-off-grid-wa",
				"off-grid-vs-hybrid-perth",
			],
		},
		{
			title: "Rebates & comparisons",
			blurb:
				"2026 rebate rules, and how RENOZ stacks up against the big-name batteries.",
			slugs: [
				"wa-battery-rebates-cec",
				"renoz-vs-powerwall-sigenergy",
				"perth-battery-oem",
			],
		},
		{
			title: "Inverter pairing",
			blurb:
				"RENOZ LV storage with the inverter platforms WA installers actually use.",
			slugs: [
				"renoz-with-victron",
				"renoz-with-selectronic",
				"renoz-with-deye",
				"renoz-with-goodwe-sungrow",
			],
		},
		{
			title: "Regions of WA",
			blurb:
				"Grounded guidance for the conditions, feeders, and loads of your part of the state.",
			slugs: [
				"off-grid-solar-perth-hills",
				"off-grid-power-wheatbelt-wa",
				"off-grid-solar-south-west-wa",
				"off-grid-solar-great-southern-wa",
				"fringe-of-grid-battery-wa",
			],
		},
		{
			title: "Battery engineering",
			blurb:
				"What to demand before you buy — the engineering that separates a safe, long-lived battery from a cheap cabinet of cells.",
			slugs: [
				"battery-fire-suppression-essential",
				"active-balancing-battery-packs",
				"pack-level-bms-integration",
				"battery-state-of-health",
			],
		},
		{
			title: "Farms & business",
			blurb: "Diesel displacement and mid-scale commercial storage.",
			slugs: ["diesel-to-battery-wa-farms", "commercial-bess-50-200kwh-wa"],
		},
	];

export const guideSlugs = guides.map((g) => g.slug);

export function getGuide(slug: string): Guide | undefined {
	return guides.find((g) => g.slug === slug);
}

export function getGuidesBySlugs(slugs: readonly string[]): Guide[] {
	return slugs
		.map((slug) => getGuide(slug))
		.filter((guide): guide is Guide => guide !== undefined);
}

export function guidePath(slug: string) {
	return `/guides/${slug}`;
}
