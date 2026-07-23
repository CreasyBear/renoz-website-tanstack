import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "off-grid-system-cost-wa",
	title: "Off Grid Solar System Cost WA 2026: Full Price Guide",
	description:
		"Typical installed costs for off-grid solar in WA 2026 — cabin $15k–$30k, 3-bed home $40k–$65k, farm $70k–$120k+. Perth pricing, rebate effects, and break-even vs grid connection.",
	h1: "Off grid solar system cost WA 2026: what to budget",
	updated: "2026-07-23",
	claimsPending: true,
	directAnswer:
		"Off-grid solar system costs in WA typically range from $15,000–$30,000 for a small cabin up to $70,000–$120,000+ for a working farm, based on 2025–26 WA installed pricing. A standard 3-bedroom rural home lands at $40,000–$65,000 installed. Batteries represent 40–50% of total system cost. The federal Cheaper Home Batteries Program provides approximately 30% upfront off the battery — confirmed eligible for off-grid systems with no grid connection required. Grid extension in WA runs $20,000–$50,000 per km; going off-grid is generally cheaper once extension cost exceeds $25,000–$30,000.",
	decisionRowLabels: [
		"Scenario",
		"Typical installed cost",
		"Solar array",
		"Battery storage",
		"Inverter type",
		"Federal rebate effect",
		"Generator needed?",
	],
	decisionColumns: [
		{
			name: "3-bed rural home",
			highlight: true,
			cells: [
				"Permanent family residence, rural WA",
				"$40,000–$65,000",
				"6–12 kW",
				"10–20 kWh usable (2–4 modules)",
				"5–8 kVA Quattro or MultiPlus-II",
				"~$2,500–$2,700 off a 10 kWh battery (tiered above 14 kWh)",
				"Recommended for winter backup",
			],
		},
		{
			name: "Cabin / small block",
			cells: [
				"Weekend cabin, small weekender, water pump",
				"$15,000–$30,000",
				"2–4 kW",
				"5–10 kWh usable (1–2 modules)",
				"3–5 kVA hybrid or basic inverter",
				"~30% off battery (~$252–$272/usable kWh at current STC rates)",
				"Often optional",
			],
		},
		{
			name: "Farm / high-load",
			cells: [
				"Bores, cold rooms, sheds, staff quarters",
				"$70,000–$120,000+",
				"15–30 kW+",
				"30–80 kWh usable (6–16 modules)",
				"Three-phase Quattro stack or SP PRO",
				"~30% off battery portion; tiered STC factors apply above 14 kWh — ask installer for exact figure",
				"Standard — sized for peak demand",
			],
		},
	],
	sections: [
		{
			heading: "What does an off-grid solar system cost in WA in 2026?",
			body: [
				"Installed costs for off-grid solar systems in Western Australia vary widely depending on load, autonomy requirements, and site access. Based on 2025–26 WA pricing, a small cabin or weekender typically falls between $15,000 and $30,000 all-in. A standard three-bedroom rural home — the most common brief — sits in the $40,000 to $65,000 range. A 10 kW system engineered for consistent daily demand lands at $45,000 to $70,000. Working farms with bores, cold rooms, and staff quarters typically reach $70,000 to $120,000 or more.",
				"These ranges assume full installation including solar panels, mounting, inverter-charger, battery bank, DC and AC cabling, switchboard work, and commissioning. They do not include structural upgrades, long conduit runs across large properties, or generator procurement. Prices in WA fell approximately 12% year-on-year into 2026, driven by lower battery cell costs, so quoted figures from 2024 may no longer reflect the market.",
				"The federal Cheaper Home Batteries Program (CHBP) reduces the battery portion of these costs by approximately 30% at point of sale via Small-scale Technology Certificates — no application required. For a 10 kWh battery, that equates to roughly $2,500 to $2,700 off the installed price. DCCEEW has confirmed off-grid systems are eligible: no grid connection or VPP enrolment is needed to access the federal discount.",
			],
		},
		{
			heading: "Why batteries are 40–50% of your system cost",
			body: [
				"Battery storage consistently makes up 40–50% of a complete off-grid system's installed cost. That proportion holds whether you are buying a $20,000 cabin system or a $100,000 farm microgrid — the chemistry, BMS, and cabling overhead scale with kilowatt-hours, not with inverter size alone. This is the single most important cost lever you control: every extra day of autonomy you design in adds another bank of modules.",
				"The battery's job in an off-grid system is different from a grid-tied hybrid. There is no grid to fall back on overnight. The battery must cover the full overnight load, the morning demand before generation picks up, and any consecutive low-generation days you want to bridge before a generator is needed. Specifying too little capacity means the generator runs more often — which costs fuel, engine hours, and maintenance. Specifying too much adds upfront capital that may never be cycled.",
				"LiFePO4 chemistry, which RENOZ uses in its LV-5KWH100AH modules, is better matched to WA heat and deep cycling than earlier lithium types. At 48V and 100Ah per module (5.12 kWh), the modules stack within a single tower up to eight units, giving up to approximately 40.96 kWh per tower. That modular approach means you can start with two or three modules and add capacity as loads or occupancy grow, avoiding the upfront cost of over-specifying for a future load that may never arrive.",
			],
		},
		{
			heading:
				"What drives cost up: autonomy, surge loads, and generator sizing",
			body: [
				"Autonomy days — how many consecutive low-sun days the battery bank must cover without generator assistance — are the primary driver of battery bank size and therefore system cost. Designing for two days of autonomy at 80% depth of discharge might require 15–20 kWh of usable storage for a modest home. Extending to four days doubles that requirement and adds roughly $10,000–$20,000 to the battery line item before rebates. Most WA residential off-grid designs target two to three days, with a generator as the backstop for extended winter cloudy periods.",
				"Surge loads from bore pumps, compressors, cold rooms, and workshop tools require the inverter to deliver two to four times the running current at start. An undersized inverter will fault on motor start even if the battery bank has plenty of energy stored. This pushes inverter kVA up, which adds cost and also increases the minimum battery bank size needed to support the inverter at surge current without BMS overcurrent disconnection. Identifying inductive loads early in the design process — before specifying anything — prevents this cost from being discovered at commissioning.",
				"Generator sizing in a hybrid off-grid system affects cost in two ways: the generator purchase price, and the fuel and maintenance cost over the system's life. An oversized generator running at low load burns fuel inefficiently and wears engine components faster. A well-designed system sizes the generator to provide full charge current to the battery bank at a reasonable load percentage, typically 60–80% of rated output. For WA off-grid sites, electronic governor diesel generators are preferred because they maintain the frequency stability that quality inverter-chargers require during charge cycles.",
			],
		},
		{
			heading: "Off-grid vs grid-tied: cost comparison and break-even",
			body: [
				"A grid-tied battery system in Perth — adding 10–13 kWh of storage to an existing or new solar array — typically costs $12,000–$16,000 installed before rebates. After stacking the federal CHBP with the WA Residential Battery Scheme (WARBS), a Synergy-area customer can reduce that to roughly $7,600 net; a Horizon Power customer to roughly $5,100 net. These are significantly lower upfront numbers than any off-grid system, because you are buying storage only — the grid provides the backup generation.",
				"The comparison shifts when Western Power requires a line extension to serve the property. WA line extensions typically cost $20,000–$50,000 per kilometre depending on terrain, vegetation, and required infrastructure. Once the extension quote exceeds approximately $25,000–$30,000, an off-grid system becomes cost-competitive on a whole-of-life basis even before factoring in ongoing network tariff savings. Properties more than a few kilometres from the nearest feeder often face extension quotes well above that threshold.",
				"The honest comparison also accounts for ongoing costs: off-grid systems require periodic generator servicing, battery monitoring, and occasional module replacement over a 15–20 year horizon, whereas grid-connected customers pay Synergy network charges of roughly 28–35c/kWh on top of any battery arbitrage return. Run the numbers for your specific site, extension quote if applicable, and load profile — a generic payback calculator will not reflect WA-specific conditions accurately.",
			],
		},
		{
			heading: "The 2026 federal rebate and off-grid eligibility",
			body: [
				"The Cheaper Home Batteries Program provides approximately 30% upfront discount on eligible batteries via STCs at point of sale. The current rate is approximately $252–$272 per usable kWh — roughly $2,500 to $2,700 off a 10 kWh battery. The program runs to 31 December 2030, with STC values stepping down every six months from 1 January 2027. Systems commissioned before that step-down lock in the higher current rate. Eligible battery size is 5–100 kWh; tiered STC factors apply from 1 May 2026 (100% on the first 14 kWh, 60% on 14–28 kWh, 15% on 28–50 kWh).",
				"DCCEEW has confirmed off-grid systems are eligible for the federal CHBP — no VPP enrolment and no grid connection is required. This is a material saving for WA buyers whose properties will never connect to the Western Power or Horizon Power network. Requirements are a CEC-approved battery and an SAA-accredited installer.",
				"The WA Residential Battery Scheme (WARBS) is a separate state rebate administered via Plenti, paying $130 per usable kWh (Synergy customers, capped at $1,300) or $380 per kWh (Horizon Power customers, capped at $3,800). WARBS requires mandatory VPP enrolment and a live grid connection — fully off-grid systems do not qualify. Grid-connected hybrid builds in Synergy or Horizon Power areas can stack both federal and state rebates, reaching up to approximately $5,000 combined (Synergy area) or $7,500 (Horizon area) on a 10 kWh battery.",
			],
		},
		{
			heading: "10 kW system cost: what you get and what you pay",
			body: [
				"A 10 kW off-grid solar system in WA typically includes a 10 kW PV array, a quality inverter-charger rated for that generation level, a battery bank sized for the load (not just the array), switchboard and protection gear, and commissioning. Installed, this system type typically costs $45,000–$70,000. The lower end reflects a simpler single-phase residential site with modest overnight load and an existing shed for equipment. The upper end reflects a larger property, three-phase requirements, substantial cable runs, or higher autonomy targets.",
				"At these system sizes, the federal CHBP rebate becomes significant. A 20 kWh battery bank (four RENOZ modules at 5.12 kWh each) would attract approximately $5,000–$5,400 in upfront STC discount at current rates on the first 14 kWh, with the 14–20 kWh portion eligible at the 60% STC factor. Exact dollar values depend on prevailing STC spot price at the time of installation — your accredited installer calculates this and applies it to the invoice.",
				"Not all 10 kW systems are equivalent. An array sized at 10 kW peak does not produce 10 kW continuously or uniformly across all WA regions and seasons. Perth enjoys high solar irradiance; properties in the South West and Great Southern face lower winter generation. Sizing the battery bank for a Perth site and installing it 300 km south without adjustment is a design error, not a cost saving.",
			],
		},
		{
			heading: "Regional WA cost variations",
			body: [
				"Perth metropolitan fringe sites — Perth Hills, Serpentine, and the outer Chittering Valley — benefit from strong solar irradiance and relatively accessible installation teams, which keeps labour costs close to the metro rate. Off-grid systems here are typically chosen because subdivision lot sizes or lot conditions make connection impractical, rather than because the grid is absent. Western Power line extension costs in these corridors vary significantly by council and terrain.",
				"The Wheatbelt, Great Southern, and South West tend to face higher labour and freight costs for regional installations — typically adding $2,000–$8,000 to system cost compared with metro equivalents, depending on distance and access. Generator procurement and freight also adds to the budget for sites more than 200 km from Perth. Some regional councils and shire areas have local installer networks that reduce mobilisation costs; ask your supplier whether installers are based locally or travelling from Perth.",
				"Remote and pastoral properties in the Mid-West and beyond operate outside the Western Power network entirely, making off-grid the default rather than a choice. These sites typically have higher load profiles (bore pumps, shearing sheds, refrigeration for produce) and require larger systems in the $70,000–$120,000+ range. Access difficulties, helicopter or charter freight for heavy equipment, and longer commissioning travel times contribute to the upper end of those ranges.",
			],
		},
		{
			heading: "How to get an accurate quote",
			body: [
				"Off-grid system pricing varies enough between sites that online calculators produce rough orientations, not budgets. An accurate quote requires a load audit — a written list of every appliance, its rated wattage, and hours of daily use — plus an assessment of the installation site, cable run lengths, and any surge loads from pumps or equipment. Provide this to your installer before asking for numbers. Quotes built from vague briefs are not comparable to each other and are frequently under-specified.",
				"Ask each supplier to break the quote into solar PV, inverter-charger, battery, switchboard and protection, cable and conduit, generator allowance if included, and commissioning. A transparent line-item quote lets you compare like with like and identify where one supplier has cut corners versus another. The cheapest total price without a line-item breakdown should prompt questions, not confidence.",
				"Check that the battery in the quote is CEC-approved if you intend to claim the federal CHBP rebate, and that the installer is SAA-accredited. Both are non-negotiable requirements for the rebate. Ask the supplier to confirm the rebate calculation at time of quoting, as STC prices fluctuate and the dollar figure they show you today may differ from what appears on the final invoice.",
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
			label: "WARBS via Plenti",
			href: "https://www.plenti.com.au/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "RENOZ rural and off-grid products",
			href: "/products/rural",
		},
		{
			label: "RENOZ residential products",
			href: "/products/residential",
		},
		{
			label: "Technical resources and compatibility declarations",
			href: "/resources",
		},
	],
	faqs: [
		{
			question: "How much does an off-grid solar system cost in WA in 2026?",
			answer:
				"Typical installed costs in WA are $15,000–$30,000 for a small cabin, $40,000–$65,000 for a standard three-bedroom rural home, $45,000–$70,000 for a 10 kW system, and $70,000–$120,000+ for a farm with high loads. Batteries represent roughly 40–50% of total system cost. Prices fell approximately 12% year-on-year into 2026. These are indicative 2025–26 WA ranges; get a line-item site-specific quote before budgeting.",
		},
		{
			question:
				"Does the 2026 federal battery rebate apply to off-grid systems?",
			answer:
				"Yes. DCCEEW has confirmed that off-grid systems are eligible for the Cheaper Home Batteries Program. No grid connection or VPP enrolment is required. The rebate provides approximately 30% upfront via STCs — roughly $2,500–$2,700 off a 10 kWh battery at current rates (~$252–$272/usable kWh). Requirements are a CEC-approved battery and SAA-accredited installer. Verify current rates on energy.gov.au before signing a quote.",
		},
		{
			question: "Does the WA state battery rebate (WARBS) apply off-grid?",
			answer:
				"No. The WA Residential Battery Scheme requires mandatory VPP enrolment and a live grid connection — fully off-grid systems are excluded. Off-grid buyers in WA can access the federal CHBP only. Grid-connected hybrid systems in Synergy or Horizon Power areas can stack both schemes, reaching up to $5,000 (Synergy) or $7,500 (Horizon) combined on a 10 kWh battery.",
		},
		{
			question:
				"At what point is going off-grid cheaper than extending the grid?",
			answer:
				"Western Power line extensions in WA typically cost $20,000–$50,000 per kilometre. Once the extension quote exceeds approximately $25,000–$30,000, an off-grid system generally becomes cost-competitive on a whole-of-life basis. Properties more than a few kilometres from an existing feeder frequently face extension costs well above that threshold. Always get the Western Power extension estimate before comparing options.",
		},
		{
			question:
				"Why do batteries make up such a large share of the system cost?",
			answer:
				"Batteries represent 40–50% of a complete off-grid system because the battery must cover the full overnight load plus any consecutive low-sun days without grid backup. Every additional day of autonomy adds another bank of modules. Chemistry, BMS, cabling, and installation overhead scale with kilowatt-hours. The federal CHBP rebate targets this portion directly, reducing it by approximately 30%.",
		},
		{
			question: "What size battery do I need for a 3-bed off-grid home in WA?",
			answer:
				"A typical three-bedroom rural WA home targeting two to three days of autonomy at 80% depth of discharge typically needs 10–20 kWh of usable battery storage — two to four RENOZ LV modules at 5.12 kWh each. Actual sizing depends on your specific appliance loads, particularly overnight loads and any inductive equipment. Measure appliance watts and hours of use before accepting any module count from a supplier.",
		},
		{
			question: "Can I add more battery capacity later if my needs grow?",
			answer:
				"Yes, if the system is designed with expansion in mind. RENOZ LV modules stack up to eight per tower and up to six towers in parallel. Starting with two or three modules and adding more as loads grow is a common approach to managing upfront cost. Confirm with your installer that the inverter, BMS, and cabling are sized to support the target maximum capacity, not just the day-one installation.",
		},
		{
			question: "Does the off-grid system cost include a generator?",
			answer:
				"Not always — ask your supplier to specify. Many quotes price the solar, battery, and inverter only, with generator supply listed separately or omitted. For a permanent rural WA residence, a diesel or LPG generator as backup for extended low-sun periods is strongly recommended and should be budgeted. Generator cost varies from $3,000–$5,000 for a residential petrol unit to $15,000+ for a quality diesel with electronic governor suited to hybrid off-grid operation.",
		},
	],
	cta: {
		primaryLabel: "Get an off-grid system quote for your WA property",
		primaryTo: "/contact",
		secondaryLabel: "View rural off-grid products",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural", "/products/residential"],
};
