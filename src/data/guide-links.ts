/**
 * Light guide link metadata (slugs, titles, paths only).
 *
 * Bundle-size seam: the full guide corpus (./guides.ts) imports every
 * guide-content file (~740KB source). Components that only render links to
 * guides must import from THIS file so those pages do not download the entire
 * corpus. Keep titles in sync with guide-content — guides.test.ts guards it.
 */

/** Canonical public path for a guide page. */
export function guidePath(slug: string) {
	return `/guides/${slug}`;
}

export const GUIDE_LINK_SETS = {
	home: [
		"wa-battery-rebates-cec",
		"off-grid-system-cost-wa",
		"off-grid-power-wheatbelt-wa",
		"off-grid-solar-great-southern-wa",
		"diesel-to-battery-wa-farms",
		"battery-state-of-health",
	],
	residential: [
		"wa-battery-rebates-cec",
		"off-grid-vs-hybrid-perth",
		"renoz-vs-powerwall-sigenergy",
		"48v-vs-high-voltage-battery-system",
		"battery-state-of-health",
		"renoz-with-deye",
		"renoz-with-goodwe-sungrow",
	],
	regional: [
		"off-grid-solar-perth-hills",
		"off-grid-power-wheatbelt-wa",
		"off-grid-solar-south-west-wa",
		"off-grid-solar-great-southern-wa",
	],
	commercial: [
		"commercial-bess-50-200kwh-wa",
		"battery-fire-suppression-essential",
		"fringe-of-grid-battery-wa",
		"48v-vs-high-voltage-battery-system",
		"battery-state-of-health",
		"active-balancing-battery-packs",
		"pack-level-bms-integration",
		"solar-winery-vineyard-off-grid",
		"solar-cold-rooms-pack-sheds",
	],
	oem: [
		"perth-battery-oem",
		"renoz-vs-powerwall-sigenergy",
		"renoz-vs-powerplus",
		"renoz-vs-genz",
		"wa-battery-rebates-cec",
	],
	rural: [
		"off-grid-battery-systems-perth",
		"diesel-to-battery-wa-farms",
		"48v-vs-high-voltage-battery-system",
		"battery-state-of-health",
		"active-balancing-battery-packs",
		"pack-level-bms-integration",
		"renoz-with-victron",
		"renoz-with-selectronic",
		"off-grid-power-wheatbelt-wa",
		"off-grid-generator-hybrid-sizing",
		"off-grid-packages-decoder",
		"solar-dairy-farms",
	],
	resources: [
		"battery-fire-suppression-essential",
		"48v-vs-high-voltage-battery-system",
		"battery-state-of-health",
		"active-balancing-battery-packs",
		"pack-level-bms-integration",
		"renoz-with-victron",
		"renoz-with-selectronic",
		"renoz-with-deye",
		"renoz-with-goodwe-sungrow",
	],
	partners: [
		"perth-battery-oem",
		"commercial-bess-50-200kwh-wa",
		"renoz-with-selectronic",
	],
	caseStudies: [
		"off-grid-battery-systems-perth",
		"diesel-to-battery-wa-farms",
		"renoz-with-selectronic",
	],
	harvey: ["diesel-to-battery-wa-farms", "renoz-with-selectronic"],
} as const;

/** slug → title for every published guide. */
export const GUIDE_LINKS: Record<string, string> = {
	"grid-connection-vs-off-grid-wa":
		"Cost to Run Power to My Block WA: Grid vs Off-Grid 2026",
	"generator-running-costs-wa":
		"Diesel Generator Running Costs WA: Cost Per Day & Per kWh 2026",
	"off-grid-power-shed-wa":
		"Off Grid Power for Shed WA: Costs, Sizing and the Rebate Trap 2026",
	"stand-alone-power-system-wa":
		"Stand Alone Power System WA: How SPS Works and What It Costs 2026",
	"is-it-worth-going-off-grid-wa":
		"Is It Worth Going Off-Grid in WA? An Honest Break-Even 2026",
	"living-with-a-generator-wa":
		"How Long Can You Run a Generator Continuously? WA Off-Grid Guide 2026",
	"generator-vs-solar-battery-farm-wa":
		"Generator vs Solar Battery for WA Farms: Cost Decision 2026",
	"off-grid-battery-systems-perth":
		"Off-Grid Battery Systems Perth & WA: Design for the Difficult Day",
	"off-grid-generator-hybrid-sizing":
		"Off-Grid Solar with Generator Backup: Sizing the Hybrid",
	"off-grid-packages-decoder":
		"Off-Grid Solar Packages with Batteries: What's in the Box",
	"off-grid-system-cost-wa":
		"Off Grid Solar System Cost WA 2026: Full Price Guide",
	"wa-battery-rebates-cec":
		"WA Battery Rebate 2026: CHBP + WA Scheme Explained",
	"battery-sizing-off-grid-wa":
		"Off Grid Battery Sizing WA: How Much kWh Do You Need? 2026",
	"off-grid-vs-hybrid-perth":
		"Off-Grid vs Hybrid Solar Perth: Which Path Is Right? 2026",
	"renoz-vs-genz": "RENOZ vs GenZ: Off-Grid Battery Comparison 2026",
	"renoz-vs-powerplus":
		"RENOZ vs PowerPlus Energy: 48V Off-Grid Battery Comparison 2026",
	"renoz-vs-powerwall-sigenergy":
		"RENOZ vs Tesla Powerwall vs Sigenergy Perth 2026",
	"perth-battery-oem":
		"LiFePO4 Battery in Perth: OEM vs Importer vs Installer (2026)",
	"renoz-with-victron":
		"Victron Compatible Battery Perth: RENOZ + Victron 48V Guide 2026",
	"renoz-with-selectronic": "Selectronic SP PRO Compatible Battery Perth 2026",
	"renoz-with-deye":
		"Deye Hybrid Inverter Battery Perth: RENOZ Pairing Guide 2026",
	"renoz-with-goodwe-sungrow":
		"Adding a Modular Battery to a GoodWe or Sungrow Hybrid 2026",
	"off-grid-solar-perth-hills":
		"Perth Hills Off-Grid Solar: Backup, Costs & Hybrid Guide 2026",
	"off-grid-power-wheatbelt-wa":
		"Wheatbelt Off-Grid Solar for Wagin, Northam & WA Farms 2026",
	"off-grid-solar-south-west-wa":
		"Off-Grid Solar around Margaret River, Busselton & Bunbury 2026",
	"off-grid-solar-great-southern-wa":
		"Albany & Great Southern Off-Grid Solar Guide 2026",
	"fringe-of-grid-battery-wa":
		"Battery Backup for Perth Hills & Fringe-of-Grid WA 2026",
	"diesel-to-battery-wa-farms":
		"Replace Diesel Generators with Farm Battery Storage WA 2026",
	"commercial-bess-50-200kwh-wa":
		"Commercial Battery Storage in Perth: 50–200 kWh Sizing 2026",
	"battery-fire-suppression-essential":
		"Battery Fire Suppression: What Every WA Buyer Must Demand (2026)",
	"48v-vs-high-voltage-battery-system":
		"48V vs High-Voltage Battery Systems: Which Is Right for Your Site?",
	"active-balancing-battery-packs":
		"Active vs Passive Cell Balancing in LiFePO4 Batteries",
	"pack-level-bms-integration":
		"Pack-Level BMS Integration: What to Demand Before You Buy a Lithium Battery (2026)",
	"battery-state-of-health":
		"LiFePO4 Battery Pack SoH: What the Percentage Actually Proves",
	"best-off-grid-battery-australia":
		"Best Off-Grid Battery Australia 2026: The 48V Shortlist",
	"best-off-grid-battery-perth":
		"Best Off-Grid Battery for Perth & WA: Local Supply, Specs and Standards",
	"best-solar-battery-australia":
		"Best Solar Battery in Australia 2026: Architecture-Classified Comparison",
	"solar-cold-rooms-pack-sheds":
		"Cold Rooms & Pack Sheds: Solar + Battery Sizing 2026",
	"solar-dairy-farms":
		"Solar for Dairy Farms: Milk Cooling, Vats & Off-Grid 2026",
	"solar-winery-vineyard-off-grid":
		"Solar for Wineries & Vineyards: Off-Grid + Microgrid Guide 2026",
};

export type GuideLink = { slug: string; title: string };

/** Guides for the given slugs, in slug order, skipping unknown slugs. */
export function getGuideLinksBySlugs(slugs: readonly string[]): GuideLink[] {
	return slugs
		.map((slug) =>
			GUIDE_LINKS[slug] ? { slug, title: GUIDE_LINKS[slug] } : undefined,
		)
		.filter((link): link is GuideLink => link !== undefined);
}

/** Guide hub grouping metadata (titles, blurbs, slug order). */
export const guideGroups: { title: string; blurb: string; slugs: string[] }[] =
	[
		{
			title: "Before you connect",
			blurb:
				"The power decisions that come before solar: connection quotes, generator costs, sheds, and whether going off-grid is worth it.",
			slugs: [
				"grid-connection-vs-off-grid-wa",
				"generator-running-costs-wa",
				"off-grid-power-shed-wa",
				"stand-alone-power-system-wa",
				"is-it-worth-going-off-grid-wa",
				"living-with-a-generator-wa",
				"generator-vs-solar-battery-farm-wa",
				"off-grid-generator-hybrid-sizing",
			],
		},
		{
			title: "Start here",
			blurb:
				"The core decisions: what an off-grid system involves, what it costs, and which path fits your block.",
			slugs: [
				"off-grid-battery-systems-perth",
				"off-grid-system-cost-wa",
				"off-grid-packages-decoder",
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
				"renoz-vs-powerplus",
				"renoz-vs-genz",
				"perth-battery-oem",
				"best-off-grid-battery-australia",
				"best-off-grid-battery-perth",
				"best-solar-battery-australia",
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
				"48v-vs-high-voltage-battery-system",
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
		{
			title: "Farm & agri energy",
			blurb:
				"Solar and battery for wineries, dairies, cold rooms and pack sheds.",
			slugs: [
				"solar-winery-vineyard-off-grid",
				"solar-dairy-farms",
				"solar-cold-rooms-pack-sheds",
			],
		},
	];
