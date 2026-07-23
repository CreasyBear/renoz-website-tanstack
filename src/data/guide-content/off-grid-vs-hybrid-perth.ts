import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "off-grid-vs-hybrid-perth",
	title: "Off-Grid vs Hybrid Solar Perth: Which Path Is Right? 2026",
	description:
		"Off-grid vs hybrid solar Perth: compare costs, rebates, and grid rules to decide. Covers DEBS rates, May 2026 export rules, and WA rebate eligibility. Updated July 2026.",
	h1: "Off-grid vs hybrid solar Perth: an honest 2026 comparison",
	updated: "2026-07-23",
	claimsPending: false,
	directAnswer:
		"For most Perth metro and regional town homeowners, a grid-connected hybrid battery is the better financial choice in 2026: you keep access to WA rebates worth up to $5,000 (Synergy) or $7,500 (Horizon Power) on a 10 kWh battery, plus VPP income of up to 70c/kWh during activation events, while using the grid as a free backup. Full off-grid makes sense when a Western Power line extension would cost $25,000–$30,000 or more — typically rural blocks further than one kilometre from the existing network.",
	decisionRowLabels: [
		"Best for",
		"WA state rebate (WARBS)",
		"Federal rebate (CHBP)",
		"VPP / export income",
		"Grid backup available",
		"Typical installed cost (10 kWh battery)",
		"Generator required",
	],
	decisionColumns: [
		{
			name: "Hybrid — Synergy area",
			highlight: true,
			cells: [
				"Perth metro, South West, most SWIS grid towns",
				"$130/kWh up to $1,300 — requires VPP enrolment",
				"~30% off battery via STCs; ~$2,500–$2,700 on 10 kWh",
				"Synergy Battery Rewards: 70c/kWh during activation events",
				"Yes — grid is live backup at no ongoing cost",
				"~$7,600 after stacking Synergy WARBS + CHBP",
				"No — grid covers low-sun periods",
			],
		},
		{
			name: "Hybrid — Horizon area",
			cells: [
				"Geraldton, Kalgoorlie, Esperance, regional Horizon towns",
				"$380/kWh up to $3,800 — requires VPP enrolment",
				"~30% off battery via STCs; ~$2,500–$2,700 on 10 kWh",
				"Horizon Community Wave VPP (check current rates with Horizon)",
				"Yes — Horizon grid is live backup",
				"~$5,100 after stacking Horizon WARBS + CHBP",
				"No — grid covers low-sun periods",
			],
		},
		{
			name: "Full off-grid",
			cells: [
				"Rural blocks, farms, remote lots where grid extension costs $25k+",
				"Not eligible — VPP enrolment and grid connection required",
				"~30% off battery via STCs — no grid connection required",
				"None — no grid export",
				"No — diesel or LPG generator typically required",
				"$40,000–$65,000 full system (3-bed rural WA home)",
				"Yes — for extended low-sun cover",
			],
		},
	],
	sections: [
		{
			heading: "How to frame the decision",
			body: [
				"The off-grid versus hybrid question is really a question about what the grid is worth to you. In the Synergy or Horizon Power network areas, the grid provides three things that are genuinely difficult to replicate: a no-cost backup supply during poor solar periods, participation in rebate schemes that require a metered connection, and access to VPP dispatch income that can meaningfully offset battery payback time. If all three of those have real value at your address, staying connected is almost always the better financial starting point.",
				"The calculation shifts when the grid is not within practical reach. Western Power line extensions typically run $20,000–$50,000 per kilometre; DCCEEW cost guidance puts the break-even threshold at roughly $25,000–$30,000 for a connection quote. At that level, a properly sized off-grid system — sized for your actual loads and backed by a generator for extended low-sun periods — can cost less over a ten to fifteen year horizon than paying Western Power to extend the network to your gate.",
				"Neither path is inherently superior. The honest answer depends on your connection quote, your loads, and which part of the WA network your property sits in. The sections below cover each factor in detail so you can apply them to your specific situation.",
			],
		},
		{
			heading: "WA rebates: what you keep (and lose) by going off-grid",
			body: [
				"The WA Residential Battery Scheme (WARBS) pays $130 per usable kWh (capped at $1,300) for Synergy customers, and $380 per usable kWh (capped at $3,800) for Horizon Power customers. Administered via Plenti, the scheme requires mandatory enrolment in a VPP — Synergy Battery Rewards or Horizon Community Wave — for a minimum of two years. Because VPP participation requires a live metered grid connection, fully off-grid systems do not qualify for WARBS at all.",
				"The federal Cheaper Home Batteries Program (CHBP) applies to both grid-connected and off-grid systems. DCCEEW has confirmed that no grid connection or VPP enrolment is required. The current rate is approximately $252–$272 per usable kWh — roughly $2,500–$2,700 off a 10 kWh battery — delivered as an upfront STC discount at point of sale. The scheme runs to 31 December 2030, with STC values stepping down every six months from 1 January 2027. Installing sooner locks a larger discount.",
				"Stacking both schemes on a grid-connected system — which requires meeting the WARBS eligibility rules including a Supported Solutions List battery, an SAA-accredited installer, and VPP enrolment — can reduce the net cost of a 10 kWh battery to approximately $7,600 in Synergy territory or approximately $5,100 in Horizon Power territory. An off-grid buyer accessing only the federal CHBP saves roughly $2,500–$2,700 on the same battery. The gap is significant and is the primary financial argument for staying grid-connected if the connection cost is reasonable.",
			],
		},
		{
			heading: "DEBS feed-in rates and VPP income in 2026",
			body: [
				"Synergy's Distributed Energy Buyback Scheme (DEBS) pays 2.25c/kWh for off-peak solar export and 10c/kWh during the peak window of 3 pm to 9 pm. Against a retail tariff of roughly 28–35c/kWh, direct self-consumption is considerably more valuable than export at the off-peak DEBS rate. A hybrid battery shifts daytime generation into the evening peak, improving self-consumption and capturing the higher DEBS rate on any remaining export during those hours.",
				"Synergy Battery Rewards VPP events add another layer. During grid stress events — up to 30 per year — Synergy can dispatch enrolled batteries and pays 70c/kWh for energy dispatched. The number of events and dispatch volumes vary by year, but even a handful of events per season at 70c/kWh materially improves battery payback relative to DEBS arbitrage alone. From 1 May 2026, new batteries must meet AS/NZS 4777.2:2020 plus CSIP-AUS, or accept a 1.5 kW export cap — confirm your chosen battery and inverter combination meets the current standard.",
				"Off-grid systems earn none of this income. Their financial case rests entirely on avoided grid electricity costs (including avoided connection or extension costs) and the federal CHBP rebate on the battery. For remote rural sites where the grid option is genuinely expensive or unavailable, that is a sound financial case. For suburban or town-connected properties, the accumulated VPP and DEBS income over five to ten years typically tips the balance toward hybrid.",
			],
		},
		{
			heading: "May 2026 export rule changes: what hybrid buyers need to know",
			body: [
				"From 1 May 2026, new inverters and batteries connected to the Synergy / SWIS grid must satisfy AS/NZS 4777.2:2020 and support CSIP-AUS communications, or else accept a 1.5 kW export limit enforced at the meter. CSIP-AUS allows Synergy to dynamically manage export from behind-the-meter inverters in real time — it is the technical backbone that makes VPP participation and dynamic export curtailment possible. Installs completed before May 2026 are grandfathered under the previous rules.",
				"In practice, this means the battery and inverter you select need to be on the Synergy Supported Solutions List and the inverter must support CSIP-AUS if you want unrestricted export. Most major inverter platforms shipping in 2026 include CSIP-AUS firmware. Verify with your installer that the specific model and firmware revision meet the current standard before signing a contract — a non-compliant install will be capped at 1.5 kW export, limiting DEBS income and potentially VPP participation.",
				"The aggregate inverter cap on the SWIS has also been raised to 30 kVA, which removes a previous constraint for larger residential and small commercial systems. For most residential hybrid builds — typically 6–15 kW of inverter capacity — the new aggregate cap is not the binding constraint. It matters more for larger properties or businesses with multiple inverters on a single connection point.",
			],
		},
		{
			heading: "When off-grid wins: the line extension break-even",
			body: [
				"If Western Power requires a line extension to reach your property, the connection quote becomes the most important number in the off-grid versus hybrid comparison. Extensions typically cost $20,000–$50,000 per kilometre, and DCCEEW cost guidance identifies approximately $25,000–$30,000 as the point at which an off-grid system begins to compete with a grid connection on total cost. If your quote exceeds that threshold, the case for off-grid strengthens considerably — you are effectively funding the grid rather than your own energy independence.",
				"A standard off-grid system for a three-bedroom rural WA home — sized for two to three days of autonomy with a diesel or LPG generator for extended low-sun cover — typically costs $40,000–$65,000 installed. That range reflects genuine 2025–26 WA pricing based on DCCEEW-sourced guidance; exact quotes vary with load, array size, battery capacity, cable runs, and site access. Batteries represent roughly 40–50% of that figure. Add the federal CHBP rebate (approximately 30% off the battery component) and the effective system cost reduces meaningfully.",
				"Remote blocks in the Wheatbelt, Great Southern, and northern WA often face connection quotes well above the break-even threshold — sometimes by a wide margin. For those properties, the off-grid decision is largely made by geography, not preference. The question then becomes how to size and specify the system correctly, rather than whether to go off-grid at all.",
			],
		},
		{
			heading: "Generator requirements and autonomy planning",
			body: [
				"A hybrid grid-connected system uses the grid as its low-sun backstop. An off-grid system needs an equivalent fallback — in most WA applications that is a diesel or LPG generator, sized to cover extended periods of low irradiance such as a winter overcast week in the South West or the Great Southern. Excluding a generator from an off-grid design is possible on very high-solar-yield sites with sufficient battery depth, but it typically leads to either undersupply events or significant battery bank oversizing to cover worst-case weeks.",
				"Generator fuel, maintenance, and replacement costs are real ongoing expenses that often go unquantified in off-grid cost comparisons. A typical diesel generator serviced regularly might cost $500–$1,500 per year in fuel and maintenance depending on usage, with major overhaul costs every five to eight years. These figures are indicative; actual costs depend on generator size, run hours, and fuel prices at the site. Factor them into any ten-year cost comparison against a hybrid system that avoids generator use entirely.",
				"Battery autonomy sizing for off-grid should start from measured overnight loads, not rules of thumb. Size for one to three days of autonomy at 80–90% depth of discharge for LiFePO4 — the lower end for sites with reliable generator backup, the upper end for remote locations where generator start is inconvenient or expensive. Match PV array size to ensure the battery refills from solar under average winter conditions at the site's latitude.",
			],
		},
		{
			heading: "Cost comparison: hybrid versus off-grid in WA today",
			body: [
				"A grid-connected hybrid system with 10–13 kWh of battery storage typically costs $12,000–$16,000 before rebates in the Perth metro and regional town market. After stacking the federal CHBP and Synergy WARBS, net cost in Synergy territory falls to approximately $7,600 on a 10 kWh battery; in Horizon Power territory the stacked rebates bring it to approximately $5,100. These figures use verified 2025–26 WA pricing from DCCEEW and WA Government sources.",
				"A full off-grid system for a three-bedroom rural WA home sits in the $40,000–$65,000 installed range. The federal CHBP reduces the battery component by approximately 30% — on a $20,000–$30,000 battery bank that is a meaningful saving, but the overall system investment is substantially larger than a hybrid. The correct comparison is not battery cost alone but total energy cost over the system lifetime, factoring in connection costs avoided, generator costs incurred, and any lost rebate or VPP income.",
				"Both sets of figures reflect 2025–26 pricing. Battery prices have fallen roughly 12% year-on-year into 2026, so quotes from prior years will overstate current installed costs. Request fresh quotes from accredited WA installers and confirm they reflect the current STC value before making a decision.",
			],
		},
		{
			heading: "Which inverter suits each path",
			body: [
				"For grid-connected hybrid systems in Synergy territory, inverters with CSIP-AUS support and a current Synergy Supported Solutions List entry are the practical requirement from May 2026 onwards. Deye, GoodWe, and Sungrow hybrid inverters are common in the Perth residential market and pair with RENOZ LV modules for grid-tied self-consumption and VPP participation. Confirm CSIP-AUS firmware on the specific model before ordering.",
				"For off-grid systems, inverter-charger platforms that handle generator integration, inductive motor starts, and island-mode frequency stability are the appropriate choice. Victron MultiPlus-II, Victron Quattro, and Selectronic SP PRO-class units are established in the WA market for those workflows. The Quattro suits sites with automatic generator switchover; the Selectronic suits installers with SP PRO commissioning experience. RENOZ LV modules are compatible with both platforms — verify BMS communication settings against the RENOZ compatibility declaration at /resources.",
				"The inverter decision should be made before finalising battery capacity. Power (inverter kVA) and energy (battery kWh) are separate sizing problems. An undersized inverter will limit motor starts and simultaneous loads regardless of how many battery modules are installed; an undersized battery bank will exhaust overnight regardless of inverter quality. Size the inverter for your peak load and surge requirements first, then size the battery bank from overnight load and autonomy targets.",
			],
		},
	],
	proofLinks: [
		{
			label: "Cheaper Home Batteries Program — energy.gov.au",
			href: "https://www.energy.gov.au/rebates/cheaper-home-batteries-program",
			external: true,
		},
		{
			label: "DCCEEW CHBP — off-grid eligibility confirmed",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA Residential Battery Scheme — wa.gov.au",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "Plenti — WARBS administered scheme",
			href: "https://www.plenti.com.au/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "Synergy — DEBS and Battery Rewards",
			href: "https://www.synergy.net.au",
			external: true,
		},
		{
			label: "RENOZ inverter compatibility and resources",
			href: "/resources",
		},
		{
			label: "Rural and off-grid products",
			href: "/products/rural",
		},
	],
	faqs: [
		{
			question:
				"Does an off-grid system qualify for the WA battery rebate in 2026?",
			answer:
				"No. The WA Residential Battery Scheme (WARBS) requires mandatory VPP enrolment and a live grid connection — fully off-grid systems are not eligible. Off-grid buyers in WA can access the federal Cheaper Home Batteries Program only, which provides approximately 30% off the battery (roughly $2,500–$2,700 on a 10 kWh battery) via STCs at point of sale. No grid connection is required for the federal scheme. Verify current rates on energy.gov.au before signing a quote.",
		},
		{
			question:
				"What is the 70c/kWh VPP payment and do I need a hybrid to access it?",
			answer:
				"Yes, you need a grid-connected hybrid battery. Synergy Battery Rewards pays 70c/kWh when Synergy dispatches enrolled batteries during grid stress events — up to 30 events per year. To participate you must be a Synergy customer, have a battery on the Supported Solutions List, and be enrolled in the VPP for a minimum two years (a WARBS requirement). Off-grid systems cannot participate as they have no grid connection to discharge into.",
		},
		{
			question:
				"At what connection cost does off-grid become cheaper than staying on the grid?",
			answer:
				"DCCEEW cost guidance identifies approximately $25,000–$30,000 as the break-even point for a Western Power line extension versus an off-grid system. Extensions typically run $20,000–$50,000 per kilometre. If your connection quote exceeds $25,000–$30,000, a full off-grid system — $40,000–$65,000 installed for a standard three-bed rural WA home — can compete on total ten-year cost, particularly after the federal CHBP rebate reduces the battery component.",
		},
		{
			question: "Can I stack the federal and WA rebates on a hybrid system?",
			answer:
				"Yes, if you meet both schemes' eligibility rules. A grid-connected hybrid battery in Synergy territory can receive approximately $2,500–$2,700 from the federal CHBP plus up to $1,300 from WARBS on a 10 kWh battery, for a combined saving of approximately $3,800–$5,000. In Horizon Power territory, WARBS pays up to $3,800 on a 10 kWh battery, giving a combined saving of approximately $6,300–$7,500. Both require a CEC-approved battery, an SAA-accredited installer, and WARBS requires VPP enrolment.",
		},
		{
			question: "What changed with Synergy export rules in May 2026?",
			answer:
				"From 1 May 2026, new inverters on the Synergy/SWIS grid must meet AS/NZS 4777.2:2020 and support CSIP-AUS communications, or accept a 1.5 kW export cap enforced at the meter. CSIP-AUS allows Synergy to dynamically manage export and is the technical requirement for unrestricted export and VPP participation. Installs before May 2026 are grandfathered. Confirm your chosen inverter and firmware are compliant before installation.",
		},
		{
			question:
				"Do I need a generator with an off-grid system in Perth or regional WA?",
			answer:
				"In most WA applications, yes. A diesel or LPG generator covers extended low-sun periods — a winter overcast week in the South West or Great Southern can run for many consecutive days with limited solar yield. Excluding a generator is possible on very high-yield sites with a large battery bank, but it typically means significant battery oversizing to cover worst-case weeks. Generator fuel and maintenance add real ongoing costs; factor them into any ten-year comparison with a hybrid system.",
		},
		{
			question:
				"Which battery brands work with both hybrid and off-grid inverters in WA?",
			answer:
				"RENOZ LV stackable modules (LV-5KWH100AH, 5.12 kWh each) are compatible with off-grid inverter-charger platforms including Victron MultiPlus-II, Victron Quattro, and Selectronic SP PRO-class units, as well as hybrid inverters including Deye, GoodWe, and Sungrow. The same module works across both paths — BMS communication settings differ by inverter platform. Verify the specific model combination against the RENOZ compatibility declaration at /resources before ordering.",
		},
		{
			question:
				"How much does a hybrid battery system cost in Perth after rebates in 2026?",
			answer:
				"A 10–13 kWh grid-connected hybrid battery system in the Perth area typically costs $12,000–$16,000 before rebates. After stacking the federal CHBP and Synergy WARBS on a 10 kWh battery, net cost falls to approximately $7,600 in Synergy territory. In Horizon Power areas the combined rebate is larger, bringing net cost to approximately $5,100. These are indicative 2025–26 WA figures from DCCEEW and WA Government sources; confirm current rebate amounts before signing.",
		},
	],
	cta: {
		primaryLabel: "Talk through hybrid vs off-grid for your property",
		primaryTo: "/contact",
		secondaryLabel: "Rural and off-grid products",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural", "/products/residential"],
};
