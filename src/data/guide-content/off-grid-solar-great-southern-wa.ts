import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "off-grid-solar-great-southern-wa",
	title: "Off Grid Solar Great Southern WA: Albany & Denmark 2026",
	description:
		"Off grid solar for Albany, Denmark and Mount Barker in WA's Great Southern. Battery sizing, costs, rebates and salt-air considerations. Updated 2026.",
	h1: "Off grid solar in the Great Southern: Albany, Denmark, Mount Barker 2026",
	updated: "2026-07-23",
	claimsPending: false,
	eyebrow: "Regional guide · Great Southern WA",
	directAnswer:
		"Off-grid solar in WA's Great Southern — Albany, Denmark, and Mount Barker — must be designed around winter solar production, measured loads, target autonomy, and generator policy. Eligible off-grid batteries can access the federal Cheaper Home Batteries Program without a grid connection, subject to the current product, installer, and scheme requirements.",
	decisionRowLabels: [
		"Typical site type",
		"Battery capacity",
		"PV array size",
		"Generator need",
		"Rebate access",
		"Key watch-out",
		"Installed cost range",
	],
	decisionColumns: [
		{
			name: "Great Southern off-grid",
			highlight: true,
			cells: [
				"Rural block, hobby farm, coastal lifestyle block",
				"20.48–40.96 kWh gross (4–8 RENOZ modules); usable capacity depends on settings",
				"8–15 kW facing north, tilt optimised for winter",
				"Diesel or LPG — expect to run it June–August",
				"Federal CHBP only (no grid, no WARBS)",
				"Salt-air enclosure rating + winter autonomy days",
				"$40k–$65k for 3-bed home; cabins from $15k",
			],
		},
		{
			name: "Perth Hills off-grid",
			cells: [
				"Bushfire zone acreage, semi-rural hobby farm",
				"10–25 kWh usable typical",
				"6–12 kW north-facing",
				"Standby generator recommended",
				"Federal CHBP; WARBS if grid-connected hybrid",
				"Fire risk zone install compliance",
				"$40k–$65k for 3-bed home",
			],
		},
		{
			name: "Grid-connected Albany home",
			cells: [
				"Town lot, Synergy network",
				"10–13 kWh typical hybrid battery",
				"6–10 kW rooftop",
				"Grid as backup — no generator needed",
				"Federal CHBP + WARBS ($130/kWh, cap $1,300)",
				"Synergy AS/NZS 4777.2:2020 compliance from May 2026",
				"$12k–$16k before rebates (~$7.6k after stacking)",
			],
		},
	],
	sections: [
		{
			heading:
				"Why the Great Southern is WA's hardest off-grid environment for settled areas",
			body: [
				"Albany sits at 34° south and records some of the cloudiest, wettest winters in the settled parts of WA. June and July average fewer solar peak hours per day than almost anywhere in the state outside the South West coast, and those days come in runs — not single interruptions. A system sized for Perth summer sun will run short of energy from June through August in Albany without a generator or a much larger battery bank.",
				"Denmark and Mount Barker are inland and at elevation, which improves radiation slightly, but the Great Southern as a whole demands what off-grid engineers call high autonomy days: the number of overcast days the battery can cover at normal household load without any generation. A minimum of three days is the accepted floor in the region; five to seven days is more appropriate for families unwilling to run a generator frequently.",
				"This is the single biggest sizing difference between a Great Southern off-grid build and a Wheatbelt or Pilbara build. Perth Hills and Wheatbelt systems can sometimes get away with two days of autonomy because sun returns reliably within that window. In the Great Southern, a two-day battery that meets your summer loads may leave you on generator for weeks each winter.",
			],
		},
		{
			heading: "Battery sizing for coastal and inland Great Southern sites",
			body: [
				"Start from overnight and low-generation loads, not from solar array size. A typical three-bedroom home in the Albany or Denmark area uses 8–14 kWh per day in winter once heating, hot water, and cooking are accounted for. At five days of autonomy and 80% depth of discharge, that means 50–87 kWh of nameplate capacity — two to three RENOZ towers of four to five modules each.",
				"A more practical approach for most families is to accept a generator and size for three days of autonomy, which brings capacity down to 30–52 kWh nameplate. That is roughly six to ten RENOZ LV-5KWH100AH modules (5.12 kWh each, up to eight per tower). The generator then runs only during extended winter low-sun periods, not as a daily necessity. Budget and site access usually determine which approach is right.",
				"Coastal sites near Albany also tend to run more domestic cooling loads in summer, which can catch owners by surprise — a system sized purely for winter survival may need slightly more capacity to handle peak summer afternoon loads before the battery is fully recharged. Model both seasons and use the larger figure.",
			],
		},
		{
			heading: "Salt-air corrosion: what it means for your equipment choices",
			body: [
				"Properties within a few kilometres of the Albany coast — Middleton Beach, Emu Point, Frenchman Bay Road, anywhere with regular sea breeze — are in a salt-laden air environment that accelerates corrosion on electrical enclosures, cable terminations, and mounting hardware. This is a real engineering consideration, not a theoretical risk. Poorly rated enclosures develop pitting around cable glands and busbar connections within a few seasons.",
				"Specify IP54 or higher-rated enclosures for battery cabinets and inverter housings wherever possible. Request marine-grade stainless hardware on mounting frames and cable trays. Ask your installer to confirm the thermal management and ventilation design keeps enclosures free of condensation, which accelerates corrosion more than direct salt exposure alone.",
				"RENOZ LV modules are designed for a Perth industrial environment, and the battery assembly approach allows integrators to specify the external enclosure independently of the module itself. For Great Southern coastal sites, discuss the enclosure specification with your installer before the equipment order is placed — upgrading after installation is expensive and disruptive.",
			],
		},
		{
			heading: "Grid connection costs for rural Great Southern blocks",
			body: [
				"Western Power line extensions in the Great Southern typically run at $20,000–$50,000 per kilometre, which means a block just two kilometres from the nearest pole can face a $40,000–$100,000 connection quote before a single panel is installed. Off-grid solar becomes financially straightforward to justify once connection costs exceed roughly $25,000–$30,000, which occurs on many rural lifestyle blocks in the Denmark and Mount Barker hinterlands.",
				"Blocks serviced by Horizon Power rather than Western Power may have different network economics, and Horizon customers who do connect and install a battery can access a substantially higher state rebate — $380 per usable kWh, capped at $3,800 — compared to the Synergy area rate of $130 per usable kWh capped at $1,300. However, this state rebate requires grid connection and VPP enrolment, so it does not apply to fully off-grid systems.",
				"If you are on the fence between connecting to the grid and going off-grid, ask Western Power for a formal connection quote first. The quote is free and gives you the actual extension cost for your property. Compare that against an off-grid system quote from an SAA-accredited installer, remembering to include the federal CHBP rebate on the battery component of the off-grid option.",
			],
		},
		{
			heading: "Generator sizing and fuel choice for Great Southern winters",
			body: [
				"A diesel generator sized at 50–70% of peak site load is the standard approach for Great Southern off-grid homes. Run times of one to three hours per day during winter low-sun periods are typical when the battery has three to five days of autonomy. Smaller generators run longer and burn more fuel per useful kilowatt-hour than a correctly sized unit.",
				"LPG generators are a practical alternative where diesel delivery to remote blocks is difficult or expensive. LPG tanks can be filled in Albany and Denmark by standard LPG tankers, and tank sizing can be matched to expected winter run hours. LPG generators generally have lower maintenance requirements than diesel and produce fewer particulates — relevant if the property is used for lifestyle farming with animals nearby.",
				"Electronic governor is not optional in the Great Southern climate. Temperature swings between winter night and day affect diesel fuel viscosity and governor response in older mechanical-governor units, causing frequency excursions that some inverter-chargers reject. Specify an electronically governed generator from the outset, particularly if you are using a Victron or Selectronic inverter-charger in PowerAssist or generator-charge mode.",
			],
		},
		{
			heading:
				"Federal Cheaper Home Batteries Program: what Great Southern off-grid buyers get",
			body: [
				"The federal Cheaper Home Batteries Program (CHBP) provides an upfront discount of approximately 30% via STCs at point of sale — no application, not means-tested. DCCEEW has confirmed off-grid systems are fully eligible: no grid connection or VPP enrolment is required. For Great Southern buyers who will never connect to Western Power, this is the only rebate available, but it is a real and substantial one.",
				"Current rates sit at approximately $252–$272 per usable kWh, equating to roughly $2,500–$2,700 off a 10 kWh battery. From 1 May 2026, tiered factors apply: 100% on the first 14 kWh of usable capacity, 60% on 14–28 kWh, and 15% on 28–50 kWh. A 20 kWh system would attract approximately $4,400–$4,800 off the battery cost (14 kWh at full rate, 6 kWh at 60%). STC values step down every six months from 1 January 2027 — commissioning before that date locks in the current rate.",
				"Requirements are a CEC-approved battery and an SAA-accredited installer. WARBS — the WA state battery rebate — requires mandatory VPP enrolment and grid connection, so fully off-grid Great Southern systems do not qualify. Grid-connected hybrid systems in Synergy or Horizon Power areas can stack both schemes, but that is a different product category from what most Great Southern rural buyers are considering.",
			],
		},
		{
			heading: "Inverter choices for Great Southern off-grid",
			body: [
				"Victron MultiPlus-II and Quattro inverter-chargers are well-suited to Great Southern off-grid builds where generator assist is a winter necessity. The Quattro's dual AC input allows automatic switching between solar-battery mode and generator charge mode without a manual changeover switch — a practical advantage when the generator may run in the early morning before you are awake. Victron's VRM remote monitoring is also useful on rural Great Southern properties where a technical call-out from Perth costs real money.",
				"Selectronic SP PRO-class inverter-chargers carry strong installer familiarity in the WA off-grid market, particularly among installers based in Albany and the South West. If your accredited installer has Selectronic commissioning experience and service relationships, that is a meaningful advantage in a region where support response time matters. The RENOZ LV module ladder is equally compatible with Selectronic; the BMS settings differ but the module hardware is the same.",
				"Three-phase configurations are occasionally needed on Great Southern hobby farms with three-phase irrigation or workshop equipment. Both Victron and Selectronic support three-phase via stacked units. Confirm the phase topology before specifying battery capacity — three-phase systems have different daytime and overnight load profiles that affect the battery sizing calculation.",
			],
		},
		{
			heading:
				"What to ask your installer before committing to a Great Southern off-grid system",
			body: [
				"Request a winter-month load analysis, not just an annual average. An installer who sizes your system from annual average daily consumption in the Great Southern will likely undersize the battery bank for June and July. Ask to see the worst-month solar resource figure for Albany or Denmark specifically — not a Perth or south-west WA regional average.",
				"Ask for the enclosure IP rating and the hardware specification for any equipment within 3 km of the coast. Salt-air corrosion is a predictable failure mode and a professional installer will have a documented response to it. If the quote does not specify enclosure rating or marine hardware, ask before signing.",
				"Confirm that the battery specified is CEC-approved and that the installer is SAA-accredited — both are required for the federal CHBP rebate. Ask for the rebate to be passed through as a point-of-sale discount, which is how the CHBP is designed to work. You should not need to apply separately or wait for a reimbursement.",
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
			label: "Plenti — WARBS administration",
			href: "https://www.plenti.com.au/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "RENOZ rural and off-grid products",
			href: "/products/rural",
		},
		{
			label: "Technical resources and compatibility",
			href: "/resources",
		},
		{
			label: "Harvey farm case study",
			href: "/case-studies/harvey-farm",
		},
	],
	faqs: [
		{
			question:
				"Does an off-grid system in Albany qualify for any battery rebate in 2026?",
			answer:
				"Yes — the federal Cheaper Home Batteries Program applies to off-grid systems anywhere in Australia, including Albany. DCCEEW has confirmed no grid connection or VPP enrolment is required. The current rate is approximately $252–$272 per usable kWh, roughly $2,500–$2,700 off a 10 kWh battery. The WA state battery scheme (WARBS) requires grid connection and is not available to fully off-grid systems.",
		},
		{
			question:
				"How much battery storage do I need for a three-bedroom home in Denmark or Albany?",
			answer:
				"For a three-bedroom home aiming at three days of winter autonomy, expect to need 20–40 kWh of usable storage. At 80% depth of discharge, that is four to eight RENOZ 5.12 kWh modules. Size from your actual winter daily load, not summer figures — the Great Southern has some of WA's worst winter solar resource among settled areas, and undersized systems run the generator far more often than expected.",
		},
		{
			question:
				"Do I need a generator for off-grid solar in the Great Southern?",
			answer:
				"For most households, yes. Albany and Denmark experience extended cloud cover in June and July that can exceed five to seven consecutive low-sun days. Without a generator, the battery bank required to cover that period becomes very large and expensive. Most practical off-grid systems in the region use a diesel or LPG generator as a winter backup, sized to run one to three hours per day during the worst weeks.",
		},
		{
			question:
				"What does an off-grid solar system cost in the Albany or Denmark area in 2026?",
			answer:
				"A standard three-bedroom rural home off-grid system in WA typically falls in the $40,000–$65,000 installed range, with batteries representing roughly 40–50% of system cost. Small cabin or weekender systems start from approximately $15,000–$30,000. These are indicative 2025–26 WA figures; Great Southern sites with long cable runs or coastal enclosure requirements may sit at the upper end. Apply the federal CHBP rebate (~30% off battery cost) to reduce the battery component.",
		},
		{
			question:
				"How far from Albany before going off-grid beats connecting to the grid?",
			answer:
				"Off-grid generally makes financial sense once the Western Power line extension cost exceeds roughly $25,000–$30,000. Line extensions in WA typically run $20,000–$50,000 per kilometre, so a block just one to two kilometres from the nearest connection point can reach that threshold quickly. Get a formal Western Power connection quote — it is free — and compare it against an off-grid system quote inclusive of the federal CHBP rebate on the battery.",
		},
		{
			question: "Does salt air near Albany damage solar and battery equipment?",
			answer:
				"Salt-laden air accelerates corrosion on electrical enclosures, cable terminations, and mounting hardware. Properties within a few kilometres of the coast should specify IP54 or higher-rated enclosures and marine-grade stainless hardware on mounting frames. Ask your installer to confirm the enclosure IP rating in writing before the equipment order. This is a known, manageable risk — not a reason to avoid off-grid solar — but it needs to be specified upfront.",
		},
		{
			question: "Which inverter brand suits a Great Southern off-grid build?",
			answer:
				"Victron MultiPlus-II or Quattro suits sites needing automatic generator switchover, remote monitoring via VRM, or precise generator frequency management — all relevant in the Great Southern. Selectronic SP PRO is equally capable and has strong installer familiarity in regional WA. Choose the brand your accredited installer has commissioning experience and service access for, since Great Southern service call-outs from Perth carry real travel cost and time.",
		},
		{
			question:
				"Can RENOZ batteries be stacked for larger Great Southern systems?",
			answer:
				"Yes. Each RENOZ LV-5KWH100AH module is 5.12 kWh. Approved towers hold 8 or 10 modules, and towers can be paralleled where the engineered design requires more capacity. The exact configuration must be matched to overnight demand, inverter limits, BMS communication, cabling, protection, and the commissioning plan.",
		},
	],
	cta: {
		primaryLabel: "Talk through a Great Southern off-grid design",
		primaryTo: "/contact",
		secondaryLabel: "Rural and off-grid products",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural", "/products/residential"],
};
