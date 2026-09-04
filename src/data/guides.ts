/**
 * Decision guides — listed via /guides, sitemap, llms.txt, and JSON-LD.
 * One file per guide in ./guide-content; shared types in ./guide-types.
 */

import { guide as batteryVoltageArchitecture } from "./guide-content/48v-vs-high-voltage-battery-system";
import { guide as activeBalancingBatteryPacks } from "./guide-content/active-balancing-battery-packs";
import { guide as batteryFireSuppressionEssential } from "./guide-content/battery-fire-suppression-essential";
import { guide as batterySizingOffGridWa } from "./guide-content/battery-sizing-off-grid-wa";
import { guide as batteryStateOfHealth } from "./guide-content/battery-state-of-health";
import { guide as bestOffGridBatteryAustralia } from "./guide-content/best-off-grid-battery-australia";
import { guide as bestOffGridBatteryPerth } from "./guide-content/best-off-grid-battery-perth";
import { guide as bestSolarBatteryAustralia } from "./guide-content/best-solar-battery-australia";
import { guide as commercialBess50200kwhWa } from "./guide-content/commercial-bess-50-200kwh-wa";
import { guide as dieselToBatteryWaFarms } from "./guide-content/diesel-to-battery-wa-farms";
import { guide as fringeOfGridBatteryWa } from "./guide-content/fringe-of-grid-battery-wa";
import { guide as generatorRunningCostsWa } from "./guide-content/generator-running-costs-wa";
import { guide as generatorVsSolarBatteryFarmWa } from "./guide-content/generator-vs-solar-battery-farm-wa";
import { guide as gridConnectionVsOffGridWa } from "./guide-content/grid-connection-vs-off-grid-wa";
import { guide as isItWorthGoingOffGridWa } from "./guide-content/is-it-worth-going-off-grid-wa";
import { guide as livingWithAGeneratorWa } from "./guide-content/living-with-a-generator-wa";
import { guide as offGridBatterySystemsPerth } from "./guide-content/off-grid-battery-systems-perth";
import { guide as offGridGeneratorHybridSizing } from "./guide-content/off-grid-generator-hybrid-sizing";
import { guide as offGridPackagesDecoder } from "./guide-content/off-grid-packages-decoder";
import { guide as offGridPowerShedWa } from "./guide-content/off-grid-power-shed-wa";
import { guide as offGridPowerWheatbeltWa } from "./guide-content/off-grid-power-wheatbelt-wa";
import { guide as offGridSolarGreatSouthernWa } from "./guide-content/off-grid-solar-great-southern-wa";
import { guide as offGridSolarPerthHills } from "./guide-content/off-grid-solar-perth-hills";
import { guide as offGridSolarSouthWestWa } from "./guide-content/off-grid-solar-south-west-wa";
import { guide as offGridSystemCostWa } from "./guide-content/off-grid-system-cost-wa";
import { guide as offGridVsHybridPerth } from "./guide-content/off-grid-vs-hybrid-perth";
import { guide as packLevelBmsIntegration } from "./guide-content/pack-level-bms-integration";
import { guide as perthBatteryOem } from "./guide-content/perth-battery-oem";
import { guide as renozVsGenz } from "./guide-content/renoz-vs-genz";
import { guide as renozVsPowerplus } from "./guide-content/renoz-vs-powerplus";
import { guide as renozVsPowerwallSigenergy } from "./guide-content/renoz-vs-powerwall-sigenergy";
import { guide as renozWithDeye } from "./guide-content/renoz-with-deye";
import { guide as renozWithGoodweSungrow } from "./guide-content/renoz-with-goodwe-sungrow";
import { guide as renozWithSelectronic } from "./guide-content/renoz-with-selectronic";
import { guide as renozWithVictron } from "./guide-content/renoz-with-victron";
import { guide as solarColdRoomsPackSheds } from "./guide-content/solar-cold-rooms-pack-sheds";
import { guide as solarDairyFarms } from "./guide-content/solar-dairy-farms";
import { guide as solarWineryVineyardOffGrid } from "./guide-content/solar-winery-vineyard-off-grid";
import { guide as standAlonePowerSystemWa } from "./guide-content/stand-alone-power-system-wa";
import { guide as waBatteryRebatesCec } from "./guide-content/wa-battery-rebates-cec";
import { guide as westernPowerConnectionCosts } from "./guide-content/western-power-connection-costs";
import type { Guide } from "./guide-types";

export * from "./guide-types";

export const guides: Guide[] = [
	gridConnectionVsOffGridWa,
	generatorRunningCostsWa,
	offGridPowerShedWa,
	standAlonePowerSystemWa,
	isItWorthGoingOffGridWa,
	livingWithAGeneratorWa,
	generatorVsSolarBatteryFarmWa,
	offGridBatterySystemsPerth,
	offGridGeneratorHybridSizing,
	offGridPackagesDecoder,
	offGridSystemCostWa,
	waBatteryRebatesCec,
	batterySizingOffGridWa,
	offGridVsHybridPerth,
	renozVsGenz,
	renozVsPowerplus,
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
	batteryVoltageArchitecture,
	activeBalancingBatteryPacks,
	packLevelBmsIntegration,
	batteryStateOfHealth,
	bestOffGridBatteryAustralia,
	bestOffGridBatteryPerth,
	bestSolarBatteryAustralia,
	solarColdRoomsPackSheds,
	solarDairyFarms,
	solarWineryVineyardOffGrid,
	westernPowerConnectionCosts,
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

export { guidePath } from "./guide-links";
