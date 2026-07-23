import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "renoz-with-selectronic",
	title: "Selectronic SP PRO Compatible Battery Perth 2026",
	description:
		"RENOZ 5.12 kWh LV modules paired with Selectronic SP PRO for WA off-grid, hybrid, and rural sites — Perth OEM battery, Australian inverter.",
	h1: "RENOZ + Selectronic SP PRO: Perth OEM battery for Australian off-grid systems",
	updated: "2026-07-23",
	claimsPending: false,
	pairingPartner: "Selectronic",
	eyebrow: "SP PRO pairing guide · Australian off-grid & rural WA",
	showCapacityLadder: true,
	directAnswer:
		"The Selectronic SP PRO is Australia's most installer-familiar off-grid and hybrid inverter-charger, engineered here and trusted on stations, rural homes, and complex hybrid sites across WA. RENOZ LV-5KWH100AH modules — 5.12 kWh each, up to 8 per tower, up to 6 towers in parallel — give that platform a Perth-built modular battery that scales independently of inverter capacity. Off-grid systems using this pairing qualify for the federal Cheaper Home Batteries Program (~30% upfront discount via STCs), confirmed eligible regardless of grid connection. Verify the exact SP PRO model, firmware, and RENOZ BMS settings against the live compatibility declaration before ordering.",
	decisionRowLabels: [
		"Best for",
		"Why Selectronic SP PRO",
		"Why RENOZ LV modules",
		"Capacity ceiling",
		"Diesel / genset story",
		"Federal rebate eligibility",
	],
	decisionColumns: [
		{
			name: "SP PRO + RENOZ",
			highlight: true,
			cells: [
				"AU off-grid homes, rural stations, generator-hybrid sites, high-surge loads",
				"Australian-made inverter-charger; deep installer literacy; mature AC-coupled control",
				"Perth OEM modular LV battery; local engineering support; expandable without inverter swap",
				"5.12 kWh · ≤8/tower · ≤6 towers parallel",
				"Native multi-source AC management; genset assist and charge built in",
				"Eligible via federal CHBP (~30% off battery); off-grid confirmed eligible",
			],
		},
		{
			name: "Imported all-in-one",
			cells: [
				"Simple metro installs; rebate-first purchases",
				"Brand app ecosystem; single-box logistics",
				"Battery locked to inverter brand; fixed capacity steps",
				"Brand-fixed SKU sizes",
				"Often weaker or absent genset-hybrid story",
				"Eligible only if on CEC + Synergy/Horizon lists; check per model",
			],
		},
		{
			name: "Generic HF hybrid",
			cells: [
				"Budget grid-tied storage; mid-density residential",
				"Low upfront hardware cost; wide installer base",
				"Commodity battery pairing; less OEM documentation",
				"Manufacturer-capped pack stacks",
				"Generator interaction varies; quality-sensitive frequency",
				"Check CEC and SSL per model; not automatic",
			],
		},
	],
	sections: [
		{
			heading: "Why Selectronic SP PRO and RENOZ belong together",
			body: [
				"Selectronic has been making inverter-chargers in Australia since the 1990s. The SP PRO platform earns its reputation not from marketing spend but from installer familiarity: certified partners across WA know how to commission it, read its logs, and integrate generator control for sites that genuinely need it. That depth of local knowledge is rare in a market increasingly dominated by imported hardware with thin AU support trails.",
				"RENOZ is the battery-side equivalent of that thinking — a Perth OEM engineering modular LiFePO4 storage for Australian conditions rather than importing a fixed pack. Together they form an all-Australian control and storage pairing: the SP PRO manages energy sources, the RENOZ bank holds the energy, and local teams on both sides can diagnose faults without an offshore ticket queue.",
				"For rural WA properties — stations in the Wheatbelt, homes in the Great Southern, lifestyle blocks in the South West — that local accountability is not a marketing story. It is what gets the system running again when something fails 300 km from Perth.",
			],
		},
		{
			heading: "AC-coupled architectures and managed source control",
			body: [
				"The SP PRO is built for AC-coupled and multi-source architectures: it can accept PV from a grid-tie inverter on the AC bus, manage a diesel or LPG generator as an AC source, and control battery charge from either. This is different from simple hybrid inverters that manage one PV string on a DC bus — the AC-coupled path lets existing grid-tie PV panels stay in service when a site moves off-grid or upgrades its storage.",
				"RENOZ modular LV modules sit on the DC bus of the SP PRO system. The SP PRO sees a 48 V battery bank; the RENOZ BMS manages cell balancing, protection, and communicates state-of-charge and fault data to the inverter. Sizing the battery bank is therefore independent of the SP PRO model: you choose the inverter for continuous power, surge capacity, and AC source management, then add RENOZ kWh for energy storage depth.",
				"AC coupling introduces one important design rule: the grid-tie inverter on the AC bus must respond correctly to SP PRO frequency-shift curtailment when the battery is full. Selectronic-certified installers understand this. It is not a reason to avoid AC coupling — it is a reason to use a certified partner who commissions the whole system, not just the battery.",
			],
		},
		{
			heading:
				"High-surge rural loads: what the SP PRO handles that others don't",
			body: [
				"Bore pumps, irrigation stations, cold rooms, and workshop compressors define off-grid WA load profiles. Many budget hybrids quote generous surge numbers in marketing materials, but those figures often refer to millisecond peaks rather than sustained Locked Rotor Amps (LRA) that a pump needs to spin up fully. The SP PRO's iron-core transformer design — a low-frequency architecture — gives it a sustained surge capability that high-frequency designs typically cannot match under real motor starting conditions.",
				"RENOZ modules must supply the DC current behind that surge. Cable sizing, fuse ratings, and BMS peak discharge limits all need to be verified for the specific motor loads on site. A well-engineered SP PRO system with adequate RENOZ kWh and correct cable gauge will start loads that cheaper pairings refuse — but the engineering must actually be done, not assumed.",
				"If soft-start controllers are available for the pump, use them anyway. They extend motor life, reduce surge current demand, and allow a smaller inverter to do the same job — good outcomes regardless of inverter brand.",
			],
		},
		{
			heading: "Federal rebate: off-grid systems are eligible",
			body: [
				"The federal Cheaper Home Batteries Program delivers approximately 30% off the battery cost as an upfront STC discount at point of sale — no application, not means-tested, and confirmed eligible for off-grid systems with no VPP or grid connection required. At current rates that equates to roughly $252–$272 per usable kWh, or approximately $2,500–$2,700 off a 10 kWh battery. Funding was expanded to $7.2 billion in December 2025 and the program runs to 31 December 2030, though the STC value steps down every six months from 1 January 2027.",
				"This is the pairing's biggest rebate story. Most off-grid WA buyers are ineligible for the WA Residential Battery Scheme (WARBS), which requires grid connection and mandatory VPP enrolment under Synergy Battery Rewards or Horizon Community Wave. The federal program has no such requirement. An SP PRO + RENOZ off-grid system can still receive the federal ~30% discount, provided the battery is CEC-approved and the installer is SAA-accredited.",
				"Requirements: CEC-approved battery model, SAA-accredited installer. Verify the exact RENOZ model string on the CEC register and confirm installer accreditation before signing a quote. STC rates and tier thresholds (0–14 kWh full rate; 14–28 kWh 60%; 28–50 kWh 15% from 1 May 2026) are confirmed on DCCEEW program pages — not marketing materials.",
			],
		},
		{
			heading: "The capacity ladder for SP PRO sites",
			body: [
				"Each RENOZ LV-5KWH100AH module is 5.12 kWh. Stack up to 8 modules in one tower — approximately 40.96 kWh usable before depth-of-discharge limits. Parallel up to 6 towers for larger rural or commercial-scale sites. That is the architectural ceiling of the RENOZ platform; the SP PRO model, BMS settings, and electrical design govern what is safe and legal for the specific installation.",
				"For a typical off-grid rural home in WA, most systems land between two and five modules — enough to cover overnight loads and morning demand without a generator run except in extended low-sun periods. Workshop sites with compressors, cold rooms, or EV charging often need a larger bank to avoid generator cycling on cloud days. Size from measured loads and target autonomy days, not from a single indicative kWh figure.",
				"Expanding later is straightforward on modular platforms: add modules within the tower limit before adding a second tower. That predictability matters for properties where loads grow over time — new sheds, additional dwellings, irrigation expansion.",
			],
		},
		{
			heading: "Certified partner installs and what to verify",
			body: [
				"Selectronic trains and certifies installers on SP PRO commissioning. RENOZ partners with accredited electrical contractors across WA. For this pairing, the install team should understand both: SP PRO parameter setting, AC coupling rules, generator configuration, and RENOZ BMS communication and charge profile requirements.",
				"Ask for a commissioning sheet before sign-off. It should include the SP PRO model and firmware version, RENOZ module count and serial numbers, cable sizes and fuse ratings, generator make and kVA, and measured start current for any motor loads on site. A commissioning sheet is not bureaucracy — it is the document that diagnoses the system correctly in three years when the original installer is unavailable.",
				"Verify the RENOZ inverter compatibility declaration on the resources page for the exact SP PRO model on the quote. Do not assume compatibility between generic LiFePO4 battery settings and RENOZ-specific BMS parameters — they are not the same profile.",
			],
		},
		{
			heading: "When this pairing is not the right choice",
			body: [
				"Grid-connected metro Perth homes pursuing the WA Residential Battery Scheme (WARBS) need a battery and inverter on Synergy or Horizon's Supported Solutions List, plus a Plenti-accredited vendor. The SP PRO + RENOZ path is not optimised for that rebate pathway. For suburban homes where VPP participation, Synergy Battery Rewards, and a simpler all-in-one purchase is the goal, a Synergy-SSL-listed hybrid with integrated battery is a more direct route.",
				"If a site already standardises on Victron or Deye hardware and those inverters are performing well, there is no engineering reason to introduce a second inverter brand. Pair RENOZ with the existing inverter ecosystem instead — see the dedicated Victron and Deye pairing guides. Selectronic makes most sense as a deliberate choice for its control philosophy and Australian heritage, not as a default or fallback.",
			],
		},
	],
	proofLinks: [
		{
			label: "Cheaper Home Batteries Program (energy.gov.au)",
			href: "https://www.energy.gov.au/rebates/cheaper-home-batteries-program",
			external: true,
		},
		{
			label: "CHBP off-grid eligibility (DCCEEW)",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA Residential Battery Scheme (wa.gov.au)",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "RENOZ technical resources & compatibility declarations",
			href: "/resources",
		},
		{
			label: "Rural products",
			href: "/products/rural",
		},
		{
			label: "Residential products",
			href: "/products/residential",
		},
		{
			label: "Partner network",
			href: "/partners",
		},
	],
	faqs: [
		{
			question:
				"Does an SP PRO off-grid system qualify for the federal battery rebate?",
			answer:
				"Yes. The federal Cheaper Home Batteries Program is confirmed eligible for off-grid systems — no VPP or grid connection required. At current rates the discount is approximately $252–$272 per usable kWh (~$2,500–$2,700 off a 10 kWh battery) via STCs at point of sale. The battery must be CEC-approved and the installer SAA-accredited. Verify live rates on energy.gov.au before signing a quote.",
		},
		{
			question: "Can an SP PRO + RENOZ system get the WA state rebate too?",
			answer:
				"Not for off-grid systems. The WA Residential Battery Scheme requires grid connection, mandatory VPP enrolment (Synergy Battery Rewards or Horizon Community Wave), and the battery/inverter on the relevant Supported Solutions List. Fully off-grid SP PRO systems are excluded from WARBS. The federal CHBP is the applicable incentive.",
		},
		{
			question: "How much does an SP PRO + RENOZ off-grid system cost in WA?",
			answer:
				"A standard 3-bedroom rural WA home off-grid system typically runs $40,000–$65,000 installed, with batteries representing roughly 40–50% of total system cost. The federal ~30% battery rebate reduces that component. All figures are typical WA ranges for 2025–26; get site-specific quotes for your load profile and location.",
		},
		{
			question: "What size RENOZ battery bank do I need with an SP PRO?",
			answer:
				"Size from your measured loads and target autonomy days — not from inverter kVA. Most rural off-grid WA homes land between 10 and 25 kWh usable (two to five 5.12 kWh RENOZ modules). Workshop, irrigation, and multi-dwelling sites may need more. The platform allows up to 8 modules per tower and up to 6 towers in parallel.",
		},
		{
			question: "Is Selectronic SP PRO compatible with RENOZ LV modules?",
			answer:
				"Compatibility is model- and firmware-specific. Use the RENOZ inverter compatibility declaration on /resources and confirm the exact SP PRO model and firmware version with your installer before ordering. Do not apply generic LiFePO4 48 V profiles — RENOZ BMS parameters are specific.",
		},
		{
			question:
				"Can we AC-couple existing solar PV to an SP PRO + RENOZ system?",
			answer:
				"Often yes. The SP PRO is designed for AC-coupled architectures and can accept output from a compatible grid-tie inverter on the AC bus. The grid-tie inverter must respond correctly to SP PRO frequency-shift curtailment. This is a design question for a Selectronic-certified installer — confirm the existing inverter model and firmware before committing.",
		},
		{
			question:
				"Will the SP PRO + RENOZ pairing start bore pumps and compressors?",
			answer:
				"The SP PRO's low-frequency iron-core design handles sustained motor inrush better than most high-frequency hybrids. Success still depends on cable sizing, BMS peak discharge limits, and the specific motor's LRA. Soft-start controllers help regardless of inverter brand. Have an installer measure start current for critical pump loads before finalising design.",
		},
		{
			question: "Do we need to be near Perth to use RENOZ?",
			answer:
				"No. RENOZ operates from O'Connor, Perth but supplies and supports systems across regional WA through its partner installer network. Regional distance is precisely where local OEM support matters — verify the partner's coverage area and warranty response path for your location.",
		},
	],
	cta: {
		primaryLabel: "Plan an SP PRO + RENOZ system",
		primaryTo: "/contact",
		secondaryLabel: "View rural products",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural", "/products/residential"],
};
