import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "off-grid-solar-perth-hills",
	title: "Off Grid Solar Perth Hills: Backup & Battery Guide 2026",
	description:
		"Off grid solar and battery backup for Perth Hills — Mundaring, Kalamunda, Chidlow, Gidgegannup, Parkerville. Costs, rebates, hybrid vs full off-grid. Updated 2026.",
	primaryKeyword: "off grid solar perth hills",
	h1: "Off grid solar Perth Hills: battery backup, costs, and the hybrid vs off-grid choice 2026",
	updated: "2026-07-23",
	claimsPending: true,
	eyebrow: "Region guide · Perth Hills · Off-grid & hybrid backup",
	intro: [
		"Perth Hills homeowners in Mundaring, Kalamunda, Chidlow, Gidgegannup, and Parkerville face long end-of-line Western Power feeders with storm and fire-season outage risk. A correctly configured battery backup or off-grid system can carry nominated loads when the network is unavailable. RENOZ engineers and designs 5.12 kWh LV LiFePO4 battery systems in Perth, with local technical and warranty support coordinated through O'Connor.",
		"Off grid solar perth hills conversations usually start with storm and fire-season outages on long Western Power feeders — then branch into hybrid backup versus full autonomy.",
		"Size storage from nominated critical loads and outage length, and verify any rebate pathway against live lists for the exact package.",
	],
	expertise: {
		heading: "Hills sites need local engineering, not a metro template",
		body: [
			"RENOZ supports Perth Hills and peri-urban installs where feeder behaviour and bushfire-season resilience dominate the brief.",
			"This guide keeps hybrid backup and true off-grid as separate decisions so quotes do not blur them.",
		],
	},
	decisionHeading: "Backup hybrid vs full off-grid in the Hills",
	decisionRowLabels: [
		"Best for",
		"Grid connection kept?",
		"Upfront cost (indicative)",
		"Rebate access",
		"Outage cover",
		"Fire-season resilience",
		"Who it suits",
	],
	decisionColumns: [
		{
			name: "Full off-grid",
			cells: [
				"Acreage with no nearby line or costly extension",
				"No — grid connection abandoned or never built",
				"$40k–$65k installed, typical 3-bed rural WA home",
				"Federal CHBP only (~30% off battery)",
				"Complete — no grid dependency",
				"Highest: no feeder exposure during Total Fire Ban events",
				"Large blocks, Chidlow / Gidgegannup, new builds in remote pockets",
			],
		},
		{
			name: "Hybrid backup",
			highlight: true,
			cells: [
				"Established homes on grid where outages are the problem",
				"Yes — grid stays as backup or export path",
				"$12k–$16k battery + inverter before rebates",
				"Federal CHBP + WA WARBS if Synergy-connected (up to ~$5,000 combined)",
				"Hours to days depending on bank size",
				"Good: system islands during outages including fire-threat days",
				"Kalamunda, Mundaring, Parkerville, Lesmurdie — existing homes on Synergy network",
			],
		},
		{
			name: "Generator only",
			cells: [
				"Temporary cover or shed / irrigation pump",
				"Yes, or none",
				"$2k–$8k unit cost; ongoing fuel and maintenance",
				"None",
				"Limited by fuel and noise constraints",
				"Poor: fuel access during fire events may be cut",
				"Short outages only; not a long-term resilience solution",
			],
		},
	],
	sections: [
		{
			heading: "Why Perth Hills has different solar and battery needs",
			body: [
				"Mundaring, Kalamunda, Chidlow, Gidgegannup, and Parkerville sit at the end of long radial feeders that run out from the main Western Power network into the Darling Range. End-of-line feeders are more vulnerable to storm damage, vegetation contact, and planned de-energisation during Total Fire Ban days than suburban reticulated networks. Outages that last minutes in Morley or Dianella can last days in Chidlow or Gidgegannup.",
				"Block sizes in the Hills also differ from the coastal suburbs: lots of one to ten hectares are common, often with water bores, sheds, water tanks with pump systems, and sometimes small orchards or livestock. Those loads add up, and the cost of running cable to a second building from the meter box can push the economics of a separate battery system rather than a single larger one.",
				"Winter shading is a genuine design factor in valley blocks below the ridge line. A property at the base of a Kalamunda gully may lose two to three peak solar hours per winter day compared to a cleared ridge-top site a kilometre away. Designers who have not visited Hills sites often undersize winter generation by modelling Perth metropolitan averages. Ask for seasonal generation estimates, not just annual.",
			],
		},
		{
			heading:
				"The case for battery backup on the Synergy network in the Hills",
			body: [
				"Many Hills residents remain grid-connected via Synergy but experience multiple multi-hour outages per year, clustered around winter storms and summer fire-weather events. A hybrid inverter and battery system that islands automatically during a grid outage restores power to the house within milliseconds — no transfer switch, no generator start, no fuel. For households on tank water with an electric pump, that continuity matters the moment the mains go down.",
				"A grid-connected battery system in the Synergy network also qualifies for both the federal Cheaper Home Batteries Program (roughly 30% off the battery cost via STCs at point of sale) and the WA Residential Battery Scheme (WARBS), which adds $130 per usable kWh up to $1,300 for Synergy customers. Stacked, those rebates reduce a 10 kWh battery install by up to approximately $5,000 before interest. WARBS requires enrolment in the Synergy Battery Rewards VPP program for a minimum of two years.",
				"The Synergy feed-in rate under DEBS is 2.25c/kWh off-peak and 10c/kWh during the peak window (3–9 pm). With retail power at roughly 28–35c/kWh, the financial case for a battery in the Hills rests primarily on outage resilience and self-consumption shifting rather than feed-in arbitrage. Factor that into your expected payback when reviewing installer quotes.",
			],
		},
		{
			heading: "When full off-grid makes sense in the Perth Hills",
			body: [
				"Full off-grid becomes financially rational when the cost of a Western Power line extension to a new block or remote building exceeds roughly $25,000–$30,000. Line extensions in WA typically run $20,000–$50,000 per kilometre, and many Hills properties outside the existing reticulated area will face quotes well above that threshold. In those cases, a complete off-grid solar and battery system is cheaper than the connection before a single kilowatt-hour is consumed.",
				"Properties in fire-prone zones also have a resilience argument for going fully off-grid. A grid-connected home with a battery still loses power if Western Power de-energises the feeder as a fire precaution. A genuinely off-grid system has no feeder exposure: it runs on its own generation and storage regardless of what the network is doing. That independence is not a small thing during a Total Fire Ban with active fire fronts in the Darling Range.",
				"Off-grid systems in the Hills typically use a battery bank sized for two to three days of autonomy without generation, paired with a diesel or LPG generator for extended low-sun periods in winter. The generator run-time is generally low — a well-designed system in Perth's climate may need generator assist for fewer than twenty days per year. A correctly specified system for a three-bed Hills home falls in the $40,000–$65,000 installed range (indicative 2025–26 WA pricing), with batteries representing roughly 40–50% of total system cost.",
			],
		},
		{
			heading:
				"Federal rebate eligibility: off-grid systems in the Hills qualify",
			body: [
				"The federal Cheaper Home Batteries Program (CHBP) provides approximately $252–$272 per usable kWh as an upfront STC discount at point of sale — no application form and not means-tested. The DCCEEW has confirmed that off-grid systems are eligible: no VPP enrolment or grid connection is required. This is directly relevant to Hills residents on new rural blocks, on properties with no connection, or on existing grid-connected systems that choose to abandon the connection.",
				"From 1 May 2026 the STC factor is tiered: 100% on the first 14 kWh of usable capacity, 60% on 14–28 kWh, and 15% on 28–50 kWh. STC values step down every six months from 1 January 2027, so systems installed earlier lock in a larger per-kWh discount. The program runs to 31 December 2030. Requirements are a CEC-approved battery and an SAA-accredited installer.",
				"The WA Residential Battery Scheme (WARBS) is available only to Synergy or Horizon Power grid-connected customers who enrol in the VPP program. Fully off-grid Hills properties are excluded from WARBS. If your Hills property is on the Synergy network and you are installing a grid-connected hybrid, you can stack CHBP and WARBS for a combined discount of up to approximately $5,000 on a 10 kWh battery. Verify current figures on wa.gov.au and synergy.net.au before accepting a quote.",
			],
		},
		{
			heading: "Sizing solar and battery for a Perth Hills home",
			body: [
				"Start with loads, not array size. List the appliances that matter during an outage: the bore pump, the chest freezer, a laptop, LED lighting, and a phone charger add up to very different overnight energy than a reverse-cycle air conditioner, an electric oven, and a clothes dryer. For a grid-connected backup system, size the battery for critical-load hours per outage event, not for 100% of normal consumption. For a full off-grid system, model the worst-case winter week in the Hills — June and July bring short days and valley shading.",
				"RENOZ LV modules are 5.12 kWh each (LV-5KWH100AH). Approved towers hold 8 or 10 modules, and towers can be paralleled where the engineered system design requires more capacity. Hills systems must be sized from measured loads, winter solar production, outage objectives, inverter limits, and any bore-pump or workshop surge requirements.",
				"Winter shading from valley ridges and deciduous trees on many Hills blocks can reduce effective generation by 20–30% below Perth metro averages for three to four months of the year. Account for this in array sizing: a system designed for summer generation that barely breaks even in winter will undersupply in exactly the period when Hills outage risk from storms is also highest. Ask your designer for monthly generation estimates, not just annual averages.",
			],
		},
		{
			heading:
				"Fire-season resilience: what a battery system can and cannot do",
			body: [
				"During a Total Fire Ban, Western Power may de-energise high-risk feeders including end-of-line circuits in the Darling Range and Hills foothills. A grid-connected hybrid system loses its grid supply in that event; whether the system then islands on battery depends on the inverter's islanding and blackout response settings. Most modern hybrid inverters sold in WA will island automatically — confirm this with your installer before commissioning, as not all configurations do it by default.",
				"A full off-grid system has no feeder exposure: it operates regardless of network status. However, fire-season resilience also depends on the physical installation — panel mounting that does not trap debris, battery enclosures that meet bushfire construction standards where applicable, and conduit and cabling that does not create ignition risk. RENOZ modules are LiFePO4 chemistry, which is substantially more thermally stable than earlier lithium chemistries and does not vent flammable gases under normal fault conditions.",
				"Battery storage does not protect a home from fire. What it does is maintain power to water pump systems, communications equipment, and lighting during the hours before, during, and after a fire threat when the grid may be unavailable. For Hills residents in Bushfire Attack Level rated zones, discuss the BAL requirements for your specific installation location with your designer and local shire before committing to a system layout.",
			],
		},
		{
			heading: "RENOZ service proximity to Perth Hills",
			body: [
				"RENOZ engineering, technical support, and warranty coordination operate from Unit 4/8 Murphy Street, O'Connor WA. For Hills residents and installers, that provides a Perth-based escalation path for configuration review, diagnostics, parts coordination, and warranty assessment.",
				"As a Perth-based OEM rather than a reseller, RENOZ holds stock rather than waiting for an import shipment when a module needs replacement. For rural and Hills systems where a failed battery bank means no power rather than just a higher power bill, local parts availability and local technical accountability are not marketing points — they are practical factors in choosing a supplier.",
			],
		},
		{
			heading: "Hybrid vs off-grid: a straightforward decision guide",
			body: [
				"If your Hills property is already Synergy-connected and your primary concern is outage resilience rather than eliminating the electricity bill, a hybrid system with two to four RENOZ modules and a quality hybrid inverter is almost always the more cost-effective path. You keep the grid as backstop for extended cloudy periods, access both rebates where eligible, and avoid the generator dependency of a full off-grid system. The total installed cost is substantially lower than going off-grid.",
				"If you are on a new rural lot with no connection, in a fire-prone zone where feeder de-energisation is a regular occurrence, or facing a Western Power line extension quote above $25,000–$30,000, full off-grid is worth modelling in detail. Get a seasonal generation report for your specific site — valley shading, tree canopy, and roof orientation all affect the numbers more in the Hills than in flat coastal suburbs. RENOZ can support the battery specification side of that model; work with a CEC-accredited designer for the full system design.",
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
			label: "Synergy Battery Rewards VPP — synergy.net.au",
			href: "https://www.synergy.net.au",
			external: true,
		},
		{
			label: "RENOZ rural and off-grid products",
			href: "/products/rural",
		},
		{
			label: "RENOZ residential battery products",
			href: "/products/residential",
		},
		{
			label: "Technical resources and compatibility",
			href: "/resources",
		},
	],
	faqHeading: "Perth Hills power questions",
	faqs: [
		{
			question:
				"Do off-grid solar systems in Perth Hills qualify for the 2026 federal rebate?",
			answer:
				"Yes. DCCEEW has confirmed that off-grid systems are eligible for the federal Cheaper Home Batteries Program — no grid connection or VPP enrolment required. The current rate is approximately $252–$272 per usable kWh, equivalent to roughly $2,500–$2,700 off a 10 kWh battery. Requirements are a CEC-approved battery and an SAA-accredited installer. The program runs to 31 December 2030; STC values step down from 1 January 2027, so earlier installs lock in a larger discount.",
		},
		{
			question:
				"Can I get the WA state battery rebate on a Perth Hills off-grid system?",
			answer:
				"No. The WA Residential Battery Scheme (WARBS) requires mandatory VPP enrolment and a Synergy or Horizon Power grid connection. Fully off-grid Hills properties are excluded. If your property is Synergy-connected and you install a hybrid (grid-tied) system, you can stack WARBS ($130/kWh, capped at $1,300) with the federal CHBP, reaching up to approximately $5,000 combined on a 10 kWh battery. Verify current amounts on wa.gov.au.",
		},
		{
			question:
				"What does a full off-grid solar system cost in the Perth Hills in 2026?",
			answer:
				"A typical off-grid system for a three-bedroom Hills home falls in the $40,000–$65,000 installed range, with batteries representing roughly 40–50% of total cost. These are indicative 2025–26 WA figures; actual quotes depend on site access, array size, battery capacity, generator requirements, and cable runs to sheds or bores. The federal CHBP rebate (~30% off the battery component) applies on eligible installs and reduces the battery portion meaningfully.",
		},
		{
			question:
				"How does valley shading in Kalamunda or Mundaring affect solar system sizing?",
			answer:
				"Valley and ridge shading in the Hills can reduce effective solar generation by 20–30% below Perth metro averages during winter months when the sun is low. A system designed on Perth coastal averages will undersupply on a south-facing block below a ridge line. Ask your designer for monthly generation estimates for your specific orientation and shading profile, not just an annual average. This matters more for full off-grid systems relying on winter autonomy.",
		},
		{
			question:
				"Will my battery system keep power on if Western Power de-energises the feeder during a fire risk day?",
			answer:
				"A full off-grid system is unaffected by feeder de-energisation — it runs independently. A grid-connected hybrid system will island on battery if the inverter is configured to do so; most modern hybrid inverters sold in WA support automatic islanding, but confirm this with your installer. Battery storage does not protect a home from fire — it maintains power to pumps, communications, and lighting when the grid is unavailable. Discuss BAL zone requirements with your designer.",
		},
		{
			question:
				"Which battery chemistry is safest for a bushfire-prone Hills property?",
			answer:
				"LiFePO4 (lithium iron phosphate) is the most thermally stable of the common lithium battery chemistries. It does not vent flammable gases or enter thermal runaway under normal fault conditions the way NMC chemistry can. RENOZ LV modules use LiFePO4. Battery placement, enclosure specification, and compliance with AS 5139 installation standards matter as much as chemistry — discuss BAL-rated installation requirements with your designer if your block carries a Bushfire Attack Level rating.",
		},
		{
			question:
				"How far is RENOZ from Mundaring or Kalamunda for service and warranty calls?",
			answer:
				"RENOZ engineering, technical support, and warranty coordination operate from O'Connor WA. For Hills properties where a battery fault can interrupt essential loads, ask the installer to document local parts availability, diagnostic escalation, temporary-power planning, and the warranty assessment process.",
		},
		{
			question:
				"How many RENOZ modules do I need for a Hills home with a bore pump and shed?",
			answer:
				"Size from overnight loads and target autonomy, not from panel count. A three-bed Hills home with a bore pump and basic shed loads typically needs 15–25 kWh of usable storage for two days of autonomy — that is three to five RENOZ 5.12 kWh modules. A property with a larger shed, orchard irrigation, or cold storage will need more. Model the bore pump start current separately: pump start events can be the binding constraint on inverter sizing, not average load.",
		},
	],
	closing: {
		heading: "Map critical loads to outage hours",
		body: "List what must stay on during a multi-hour feeder fault, then talk to RENOZ about modular storage sized to that list.",
	},
	cta: {
		primaryLabel: "Talk to RENOZ about a Perth Hills battery system",
		primaryTo: "/contact",
		secondaryLabel: "See rural and off-grid products",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural", "/products/residential"],
};
