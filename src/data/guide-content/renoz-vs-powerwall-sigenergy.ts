import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "renoz-vs-powerwall-sigenergy",
	title: "RENOZ vs Tesla Powerwall vs Sigenergy Perth 2026",
	description:
		"Honest 2026 comparison of Powerwall 3, Sigenergy SigenStor, and RENOZ modular LV for WA homes — cost, rebates, expandability, and local support.",
	h1: "RENOZ vs Tesla Powerwall vs Sigenergy: WA home battery comparison 2026",
	updated: "2026-07-23",
	claimsPending: false,
	directAnswer:
		"For Perth homes in 2026: Powerwall 3 typically installs at $14,000–$15,000 (13.5 kWh, integrated HV all-in-one). Sigenergy SigenStor is a modular all-in-one stack, brand-ecosystem expansion. RENOZ is a low-voltage modular OEM (5.12 kWh modules, inverter-agnostic, Perth-based support from O\'Connor). Both federal CHBP (~30% upfront discount) and the WA Residential Battery Scheme ($130/kWh Synergy, $380/kWh Horizon, grid-connected only) are active — eligibility depends on CEC listing and retailer lists, not brand name. Verify before signing.",
	decisionRowLabels: [
		"Architecture",
		"Capacity style",
		"Typical installed cost",
		"Inverter path",
		"Rebate path notes",
		"Expandability",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Tesla Powerwall 3",
			cells: [
				"All-in-one HV (integrated inverter + battery)",
				"13.5 kWh fixed; add whole units",
				"~$14k–$15k installed (WA typical)",
				"Integrated — no inverter choice",
				"CEC-listed; verify Synergy/Horizon SSL",
				"Add another Powerwall unit; HV coupling",
				"You want one-box brand simplicity, single-phase",
			],
		},
		{
			name: "Sigenergy SigenStor",
			cells: [
				"All-in-one modular stack (brand ecosystem)",
				"Stack brand modules; 3-phase/EV options",
				"Varies; obtain WA installer quote",
				"Integrated / brand inverter stack",
				"Verify CEC + Synergy/Horizon SSL for package",
				"Add brand modules within the ecosystem",
				"You want modular all-in-one + EV integration",
			],
		},
		{
			name: "RENOZ",
			highlight: true,
			cells: [
				"Modular LV OEM battery + chosen hybrid inverter",
				"5.12 kWh modules; ≤8/tower; ≤6 towers parallel",
				"Varies with inverter + kWh selected",
				"Victron / Selectronic / Deye / GoodWe / Sungrow",
				"Verify CEC + SSL per full package; off-grid eligible for federal CHBP",
				"Add 5.12 kWh modules; tower or parallel expansion",
				"You want modular OEM kWh, inverter choice, Perth support",
			],
		},
	],
	sections: [
		{
			heading: "Architecture: all-in-one vs modular OEM",
			body: [
				"Tesla Powerwall 3 and Sigenergy SigenStor are all-in-one designs: power conversion and storage are integrated into one product family. That simplifies purchasing when the brand stack fits your home and you are happy with a fixed inverter path. The trade-off is that the inverter and battery are tied together — replacing or upgrading one often means rethinking the other.",
				"RENOZ takes a different approach. As a Perth-based battery OEM, RENOZ supplies low-voltage LiFePO4 modules (5.12 kWh each, model LV-5KWH100AH) that pair with a separately chosen hybrid inverter. Victron, Selectronic, Deye, GoodWe, and Sungrow are all compatible paths — the inverter is matched to the site\'s electrical needs rather than forced by the battery brand.",
				"Neither architecture is universally better. Match the choice to your phase configuration, expansion timeline, EV plans, and how important inverter flexibility is to you.",
			],
		},
		{
			heading: "Cost: what WA buyers are actually paying in 2026",
			body: [
				"Tesla Powerwall 3 typically lands at $14,000–$15,000 installed in WA (13.5 kWh, integrated inverter included). That is a reasonable benchmark for a complete single-phase solution but leaves limited room to grow capacity cheaply without adding another whole unit.",
				"Sigenergy installed pricing varies by configuration and installer — get a current WA quote; generic national figures don\'t reflect Perth labour and logistics. RENOZ pricing depends on module count and inverter selection, which is the point: you can start at one tower and expand later without replacing the inverter.",
				"Across the market, battery storage costs fell roughly 12% year-on-year into 2026. Grid-tied battery systems in Perth in the 10–13 kWh range typically sit at $12,000–$16,000 before rebates, equating to roughly $664–$1,490 per kWh installed depending on system size — smaller systems cost more per kWh.",
			],
		},
		{
			heading: "Federal rebate: Cheaper Home Batteries Program",
			body: [
				"The federal Cheaper Home Batteries Program (CHBP) delivers roughly 30% off eligible batteries via Small-scale Technology Certificates (STCs) applied at point of sale — no application needed, not means-tested. In mid-2026, that equates to approximately $252–$272 per usable kWh, or around $2,500–$2,700 off a 10 kWh battery. The program runs to 31 December 2030; STC value steps down every six months from January 2027, so earlier installation locks a larger discount.",
				"Critically, off-grid systems are eligible for the federal CHBP — grid connection is not required. This is confirmed by DCCEEW and is relevant for rural WA buyers considering RENOZ for off-grid setups. Eligible battery size is 5–100 kWh; from 1 May 2026 the STC factor is tiered (100% for 0–14 kWh, 60% for 14–28 kWh, 15% for 28–50 kWh).",
				"All three products — Powerwall, Sigenergy, and RENOZ — can potentially access CHBP, but eligibility requires CEC-approved battery and SAA-accredited installer for the exact products on the quote. Verify the live CEC register; do not rely on brand marketing claims.",
			],
		},
		{
			heading: "WA Residential Battery Scheme: grid-connected only",
			body: [
				"The WA Residential Battery Scheme (WARBS) is available to Synergy customers ($130 per usable kWh, capped at $1,300 for 10 kWh) and Horizon Power customers ($380/kWh, capped at $3,800). Stacking federal CHBP and the WA scheme on a 10 kWh system can reach up to $5,000 off in the Synergy area or $7,500 in the Horizon area.",
				"The WA scheme requires mandatory VPP enrolment (Synergy Battery Rewards or Horizon Community Wave, minimum two years). This means fully off-grid systems do not qualify for WARBS — federal CHBP is the only rebate available to them. The battery and inverter solution must also appear on the relevant Supported Solutions List; an accredited Plenti vendor applies on your behalf.",
				"Before assuming any of the three products qualifies for the WA scheme, check the live Synergy or Horizon Supported Solutions List for the exact battery model and inverter combination on your quote. SSL status changes; marketing copy does not.",
			],
		},
		{
			heading: "Expandability: start small, grow later",
			body: [
				"Powerwall 3 expansion means adding another complete Powerwall unit — that works well if your budget grows in Powerwall-sized chunks. Sigenergy uses branded module stacking within its own ecosystem. Both paths keep you in the same product family for hardware.",
				"RENOZ modular architecture separates the expansion decision from the inverter. You begin with one or more 5.12 kWh modules (up to 8 in a single tower, roughly 40.96 kWh), and parallel up to 6 towers for larger sites. Critically, the inverter you chose at install day is not replaced when you add capacity — provided the design was engineered with growth in mind from the start.",
				"If you expect to add an EV, a workshop, a bore pump, or a granny flat in the next few years, the capacity expansion path and its cost are worth asking about before you sign any quote.",
			],
		},
		{
			heading: "Local support: what Perth OEM actually means",
			body: [
				"Tesla has a large global installer network and a brand support model that relies on certified Tesla Energy installers. Sigenergy operates through the AU distributor and installer channel. Both can deliver good outcomes, but fault diagnosis and warranty fulfilment paths are managed remotely.",
				"RENOZ is headquartered at Unit 4/8 Murphy Street, O\'Connor WA — engineering and support are Perth-based. For WA homes and farms dealing with summer heat, fringe-of-grid voltage behaviour, or remote sites, local OEM proximity means shorter technical support loops. That promise is only as good as the actual support path — ask for warranty claim response times and spare parts availability before committing.",
			],
		},
		{
			heading: "Serviceability and heat performance",
			body: [
				"Western Australian summer temperatures place real demands on battery thermal management. LiFePO4 chemistry (used by all three systems) tolerates heat better than NMC, but operating temperature limits and cycle-life curves vary by product design. Ask for the manufacturer\'s ambient temperature rating and de-rating table, not just the headline cycle count.",
				"Spare parts logistics also matter in WA. For an imported all-in-one, a failed inverter board means waiting for an international supply chain. RENOZ modules are designed for local serviceability — but verify spare module availability and turnaround from the O\'Connor facility before you rely on that as a deciding factor.",
			],
		},
		{
			heading: "When each product is genuinely the better pick",
			body: [
				"Powerwall 3 is a strong choice when you want a polished single-phase all-in-one with strong brand recognition, a well-supported installer network, and no interest in choosing an inverter. It suits inner-metro Perth homes with relatively straightforward loads and a preference for brand simplicity over expandability.",
				"Sigenergy SigenStor suits buyers who want a modular stacking story within an integrated ecosystem, particularly for three-phase homes or households planning EV integration through the same product family. Confirm WA installer availability and SSL eligibility before committing.",
				"RENOZ is the rational pick when you want inverter choice (especially for off-grid, diesel-assist, or three-phase sites with heavy loads), when you expect to grow capacity incrementally, or when Perth-based OEM support and local engineering matter for your site. It also suits off-grid WA buyers who want federal CHBP eligibility without the VPP requirements of the WA state scheme.",
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
			label: "DCCEEW — off-grid CHBP eligibility",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA Residential Battery Scheme (wa.gov.au)",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "Plenti WA scheme administration",
			href: "https://www.plenti.com.au/wa-residential-battery-scheme",
			external: true,
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
			question: "How much does a Powerwall 3 cost installed in Perth?",
			answer:
				"Typical WA installed pricing for a Powerwall 3 (13.5 kWh, inverter integrated) is around $14,000–$15,000. That is a benchmark range based on 2025–26 WA pricing data; get a current quote from a Tesla-certified installer as pricing moves. Federal CHBP (~30% discount) can apply if CEC requirements are met.",
		},
		{
			question: "Can I claim WA battery rebate on a RENOZ system?",
			answer:
				"Yes, if the system is grid-connected and the battery model and inverter combination appears on Synergy or Horizon\'s Supported Solutions List, and a Plenti-accredited vendor installs it. Off-grid RENOZ systems do not qualify for WARBS but are eligible for the federal CHBP (~30% upfront discount, no VPP required). Verify on live official lists before signing.",
		},
		{
			question: "Is the federal CHBP rebate available for off-grid batteries?",
			answer:
				"Yes. DCCEEW has confirmed that off-grid systems are eligible for the Cheaper Home Batteries Program — no VPP enrolment or grid connection required. The rebate delivers approximately $252–$272 per usable kWh at point of sale via STCs, on batteries sized 5–100 kWh, through to 31 December 2030.",
		},
		{
			question: "Which is better for a three-phase Perth home?",
			answer:
				"Sigenergy has a strong three-phase all-in-one story with EV module integration. Powerwall 3 is typically positioned for single-phase simplicity. RENOZ pairs with three-phase-capable hybrids (Victron Quattro-class, Deye three-phase, Sungrow SH-T series) — confirm the full package with your installer to ensure backup and load behaviour match your needs.",
		},
		{
			question: "Can I start with one RENOZ module and expand later?",
			answer:
				"Yes. The modular LV platform starts at 5.12 kWh and stacks up to 8 modules in a single tower. Expansion does not require replacing the inverter, provided the original system design allowed for growth. Up to 6 towers can be paralleled for larger sites. Confirm the expansion path is specified in your initial quote.",
		},
		{
			question: "Do all three qualify for the WA Residential Battery Scheme?",
			answer:
				"Only if the exact battery model and inverter solution appear on the Synergy or Horizon Supported Solutions List and the install goes through a Plenti-accredited vendor. CEC listing is necessary but not sufficient. Check the live SSL for your retailer\'s network — do not rely on any brand\'s marketing claiming scheme eligibility.",
		},
		{
			question: "What makes RENOZ different from a battery reseller?",
			answer:
				"RENOZ is a Perth-based OEM: the company designs, engineers, and supports the modular LV battery platform locally from O\'Connor WA. Battery resellers and installers sell imported products. The practical difference is technical support proximity, spare parts availability, and engineering input on system design — relevant for WA\'s climate and grid conditions.",
		},
		{
			question: "How do battery storage costs compare per kWh in WA?",
			answer:
				"Installed cost per kWh in Perth runs roughly $664–$1,490 depending on system size — smaller systems cost more per kWh. A 10–13 kWh grid-tied system typically sits at $12,000–$16,000 before rebates, or around $7,600 after stacking federal CHBP and WARBS in the Synergy area. Prices fell ~12% year-on-year into 2026.",
		},
	],
	cta: {
		primaryLabel: "Get a RENOZ system design for your WA home",
		primaryTo: "/contact",
		secondaryLabel: "See residential storage options",
		secondaryTo: "/products/residential",
	},
	relatedProductPaths: ["/products/residential"],
};
