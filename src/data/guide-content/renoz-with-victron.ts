import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "renoz-with-victron",
	title: "Victron Compatible Battery Perth: RENOZ + Victron 48V Guide 2026",
	description:
		"How RENOZ 5.12 kWh LV modules pair with Victron MultiPlus-II and Quattro for off-grid and diesel-assist WA homes and farms. Updated July 2026.",
	h1: "RENOZ + Victron: deep pairing guide for off-grid WA 2026",
	updated: "2026-07-23",
	claimsPending: true,
	pairingPartner: "Victron",
	eyebrow: "48V pairing guide · Off-grid WA & diesel-assist",
	showCapacityLadder: true,
	directAnswer:
		"RENOZ LV stackable modules (5.12 kWh each, LV-5KWH100AH) pair directly with Victron MultiPlus-II and Quattro 48V inverter-chargers for Perth and regional WA off-grid systems. Off-grid batteries qualify for the federal Cheaper Home Batteries Program (~30% upfront discount via STCs, confirmed by DCCEEW) — no grid connection required. Stack up to 8 modules per tower and up to 6 towers in parallel. Always verify the exact Victron model, firmware, and RENOZ BMS communication settings against the published compatibility declaration before ordering.",
	decisionRowLabels: [
		"Best for",
		"Architecture",
		"Surge / motors",
		"Diesel / genset",
		"Capacity story",
		"Watch-outs",
	],
	decisionColumns: [
		{
			name: "Victron + RENOZ",
			highlight: true,
			cells: [
				"Off-grid WA homes, farms, diesel-assist, marine-grade reliability",
				"48V inverter-charger + modular LV OEM battery",
				"Strong when LF MultiPlus-II/Quattro sized for LRA",
				"Native PowerAssist, charge, pass-through workflows",
				"5.12 kWh modules · ≤8/tower · ≤6 parallel",
				"Confirm BMS CAN protocol + DC cable surge ratings",
			],
		},
		{
			name: "Selectronic + RENOZ",
			cells: [
				"AU off-grid culture, generator-hybrid, installer-familiar control",
				"SP PRO-class inverter-charger + RENOZ LV modules",
				"Mature motor and genset management",
				"Mature AU genset-hybrid workflow",
				"Same RENOZ ladder; different control brain",
				"Selectronic-specific BMS settings required",
			],
		},
		{
			name: "Cheap HF AIO alone",
			cells: [
				"Budget grid-tied suburban hybrid",
				"High-frequency electronics + small magnetics",
				"Often weak sustained motor inrush",
				"Generator quality-sensitive; weak assist story",
				"Fixed brand capacity steps",
				'"2× surge" may be milliseconds only',
			],
		},
	],
	sections: [
		{
			heading: "Why Victron and RENOZ suit WA off-grid",
			body: [
				"Victron MultiPlus-II and Quattro inverter-chargers are built around inverter-charger workflows that matter on remote WA sites: island from the grid, assist a weak or undersized generator, absorb inductive starts from pumps and compressors, and maintain stable frequency under variable load. Those behaviours are designed in at the firmware level — not afterthoughts bolted onto a grid-tied hybrid.",
				"RENOZ supplies the 48V energy store those workflows rely on, without forcing you into Victron's own battery ecosystem. For WA farms, fringe-of-grid homes, and diesel-reduction projects, that separation is useful: size the Victron unit for continuous power and surge, then grow RENOZ kilowatt-hours as loads — pumps, cold rooms, workshops, EV chargers — expand over time.",
				"Perth's ambient temperatures and the long distances between service calls are genuine design inputs, not marketing copy. LiFePO4 chemistry tolerates heat cycles better than earlier lithium chemistries, and a Perth-based OEM can put spare modules closer to the install than an offshore call centre.",
			],
		},
		{
			heading: "MultiPlus-II vs Quattro: which for your WA site",
			body: [
				"The MultiPlus-II has a single AC input and a single AC output — adequate for most residential off-grid and hybrid installations where one AC source (grid or generator) is present at a time. The Quattro adds a second AC input, allowing the inverter to automatically select between grid and generator without a manual changeover switch. For WA farms and off-grid homes that keep a diesel generator as backup, the Quattro's dual-input design removes a common failure point.",
				"Both units are available in single-phase and three-phase configurations via parallel or three-phase stacking. Three-phase MultiPlus-II or Quattro stacks are common on larger WA rural properties and workshops where three-phase motors or irrigation systems are present. Confirm phase topology, kVA rating, and firmware revision with your installer before selecting RENOZ module count.",
				"Power ratings run from 3 kVA to 15 kVA per unit for the Quattro range; the MultiPlus-II peaks at 12 kVA in common AU configurations. Larger loads or three-phase sites typically stack units. The kVA rating governs simultaneous load capacity and surge window — do not size modules until the inverter decision is finalised.",
			],
		},
		{
			heading: "GX device and BMS communications (CAN bus)",
			body: [
				"Victron's GX ecosystem — Cerbo GX, Venus GX, and equivalent devices — provides system monitoring, battery state-of-charge visibility, and BMS integration via VE.Bus, VE.Direct, and CAN bus. For third-party batteries like RENOZ LV modules, CAN bus communication between the BMS and the GX device allows charge parameters, cell temperatures, and state-of-charge data to flow to the Victron control layer, enabling proper charge voltage management and low-SoC warnings.",
				"Without a working CAN or VE.Bus BMS link, the Victron system falls back to generic charge profiles, which may not correctly match RENOZ cell chemistry limits. Always verify the specific CAN profile and any required BMS adapter against the RENOZ compatibility declaration on /resources before commissioning. Installers should document the exact GX firmware, BMS firmware, and cable assembly on the commissioning sheet.",
				"A Cerbo GX with a Touch 70 display also provides remote monitoring via VRM — Victron Remote Management — which is a practical advantage on remote WA sites where a technician visit costs real travel time and money. Confirm VRM connectivity requirements (SIM card or Wi-Fi) are met at the install location.",
			],
		},
		{
			heading: "Cable sizing, soft-start, and generator frequency stability",
			body: [
				"At 48V, high discharge currents under motor start events mean DC cable sizing is not cosmetic. Voltage drop across undersized lugs or cable runs during Locked Rotor Ampere events can cause the BMS to disconnect under overcurrent before the motor finishes starting — a common commissioning failure that looks like a battery fault but is actually a cable or fuse issue. Size DC cables, fuses, and busbars from the calculated LRA and surge duration, not from inverter nameplate alone.",
				"Soft-start devices or Variable Frequency Drives on large bore pumps and compressors are often the difference between a system that starts loads reliably and one that needs an oversized inverter to compensate. If a pump draws 60A LRA at 415V three-phase, the reflected 48V DC demand during a hard DOL start is substantial. Add soft-start before oversizing the battery bank or the inverter.",
				"Generator frequency stability matters when the Victron unit is in PowerAssist or generator-charge mode. A poorly governed generator with frequency excursions outside 47–53 Hz can cause the MultiPlus or Quattro to reject the AC input repeatedly, falling back to battery-only during what should be a charge cycle. Specify a generator with electronic governor for sites that rely on generator assist. Diesel genset fuel quality and service intervals in remote WA also affect governor stability.",
			],
		},
		{
			heading: "WA off-grid system topologies",
			body: [
				"A typical three-bed off-grid WA home in the Wheatbelt or South West uses a single-phase Quattro (5–8 kVA), a PV array of 6–12 kW, and enough RENOZ battery capacity for two to three days of autonomy at 80% depth of discharge — commonly two to four modules in a single tower (10–20 kWh usable). A diesel or LPG generator covers extended low-sun periods. Total installed cost for that topology typically sits in the $40,000–$65,000 range (typical 2025–26 WA pricing), with batteries representing roughly 40–50% of system cost.",
				"Larger rural properties — sheds, bore pumps, cold rooms, staff quarters — often use a three-phase Quattro stack or parallel MultiPlus-II units, with a larger RENOZ bank of four to eight modules per tower. Some sites run two parallel towers where overnight energy demand from refrigeration and pumping would exhaust a single tower. Always model overnight load separately from daytime generation surplus before specifying tower count.",
				"Farm microgrid topologies with multiple buildings sometimes use Victron's ESS (Energy Storage System) software on a Cerbo GX to manage AC-coupled PV from a separate MPPT string inverter alongside the RENOZ battery bank. This AC-coupling approach allows larger PV arrays than the inverter's internal MPPT can handle. Confirm AC-coupling frequency-shift behaviour and any site-specific grid code compliance with the installer.",
			],
		},
		{
			heading: "Federal rebate eligibility for off-grid systems",
			body: [
				"The federal Cheaper Home Batteries Program (CHBP) provides approximately 30% upfront discount via STCs at point of sale — no application process and not means-tested. Critically, DCCEEW has confirmed that off-grid systems are eligible: no VPP enrolment or grid connection is required. This makes the federal rebate directly relevant to Victron + RENOZ off-grid builds in the Wheatbelt, South West, and Great Southern where most customers will never connect to the Western Power network.",
				"The current rebate rate is approximately $252–$272 per usable kWh, equivalent to roughly $2,500–$2,700 off a 10 kWh battery, running to 31 December 2030. From 1 May 2026, tiered STC factors apply: 100% on the first 14 kWh of usable capacity, 60% on 14–28 kWh, and 15% on 28–50 kWh. STC values step down every six months from 1 January 2027, so systems commissioned earlier lock in a larger discount. Requirements are a CEC-approved battery and an SAA-accredited installer.",
				"The WA Residential Battery Scheme (WARBS) requires mandatory VPP enrolment and grid connection — fully off-grid Victron + RENOZ systems do not qualify for WARBS. Grid-connected hybrid builds in Synergy or Horizon Power areas can stack federal CHBP with WARBS, reaching up to approximately $5,000 combined discount in Synergy territory or up to $7,500 in Horizon Power areas on a 10 kWh battery. Verify current amounts on wa.gov.au before quoting.",
			],
		},
		{
			heading: "Capacity ladder and sizing guidance",
			body: [
				"Each RENOZ LV module is 5.12 kWh (LV-5KWH100AH). A single tower holds up to 8 modules, giving a maximum of approximately 40.96 kWh per tower. Up to 6 towers may be paralleled under engineering design, giving a platform ceiling of approximately 245.8 kWh before inverter, BMS, and electrical limits apply. Most residential and small farm systems land within one or two towers — the parallel capability serves larger rural properties, commercial-leaning sites, and multi-building microgrid designs.",
				"Size in this order: measure overnight critical loads in kWh, add morning load before generation picks up, multiply by your target autonomy days, then divide by allowable depth of discharge (typically 80–90% for LiFePO4 in a well-managed system). That gives usable kWh required. Divide by 5.12 to get module count. Do not size modules from inverter kVA alone — energy and power are separate problems.",
			],
		},
		{
			heading: "When to choose Selectronic or Deye instead",
			body: [
				"Selectronic SP PRO-class inverter-chargers carry strong installer familiarity in the Australian off-grid and generator-hybrid market. If your installer is accredited and experienced with Selectronic, and the site does not require Victron's Remote Management or GX ecosystem, Selectronic + RENOZ is an equally valid path. The RENOZ module ladder and BMS are the same; the control brain differs. Do not force a Victron installation if the installer's diagnostic and commissioning expertise sits with Selectronic.",
				"Deye-class 48V hybrids are common on residential and light-farm hybrid sites where the primary driver is grid-tied self-consumption rather than off-grid autonomy. Deye works well with RENOZ for those use cases, but generator assist behaviour and heavy motor start management are generally weaker than MultiPlus-II or Quattro-class designs. If the site is genuinely off-grid or relies on a diesel generator for more than occasional backup, Victron or Selectronic is the more conservative choice. If the site is grid-connected and the main goal is bill arbitrage, Deye + RENOZ can be more cost-effective on the inverter side.",
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
			label: "Victron inverter-charger selector (vendor)",
			href: "https://www.victronenergy.com/inverters-chargers/help-me-choose",
			external: true,
		},
		{
			label: "RENOZ inverter compatibility declaration",
			href: "/resources",
		},
		{
			label: "Rural / off-grid products",
			href: "/products/rural",
		},
		{
			label: "Harvey farm case study",
			href: "/case-studies/harvey-farm",
		},
	],
	faqs: [
		{
			question:
				"Does a Victron + RENOZ off-grid system qualify for the 2026 federal rebate?",
			answer:
				"Yes. DCCEEW has confirmed that off-grid systems are eligible for the federal Cheaper Home Batteries Program — no grid connection or VPP enrolment required. The current rate is approximately $252–$272 per usable kWh (roughly $2,500–$2,700 off a 10 kWh battery). Requirements are a CEC-approved battery and SAA-accredited installer. Verify current rates on energy.gov.au before signing a quote.",
		},
		{
			question:
				"Do off-grid Victron systems qualify for the WA Residential Battery Scheme?",
			answer:
				"No. WARBS requires mandatory VPP enrolment and a grid connection — fully off-grid systems are excluded. Off-grid builds in WA can access the federal CHBP only. Grid-connected hybrid builds in Synergy or Horizon Power areas can stack both schemes, reaching up to approximately $5,000 (Synergy) or $7,500 (Horizon Power) combined on a 10 kWh battery. Confirm current amounts on wa.gov.au.",
		},
		{
			question:
				"MultiPlus-II or Quattro — which do I need for a WA farm with a diesel generator?",
			answer:
				"If you want automatic switchover between mains (or solar input) and generator without a manual changeover switch, choose the Quattro — it has two AC inputs. The MultiPlus-II has one AC input and suits sites where generator and grid are never present simultaneously, or where a manual transfer switch is already in place. For most rural WA off-grid diesel-assist setups, the Quattro is the safer design choice.",
		},
		{
			question:
				"How many RENOZ modules do I need for a Victron 5 kVA off-grid system?",
			answer:
				"Size from overnight loads and autonomy target, not from inverter kVA. A typical off-grid three-bed WA home might need 10–20 kWh usable (2–4 RENOZ modules at 5.12 kWh each) for one to two days' autonomy. Measure actual loads; do not use a rule-of-thumb. Each tower holds up to 8 modules (approximately 40.96 kWh). Parallel towers when energy — not just power — requires it.",
		},
		{
			question: "Will a Victron MultiPlus-II start a bore pump reliably?",
			answer:
				"It depends on the pump's Locked Rotor Amps, the inverter kVA rating, DC cable sizing, and BMS surge tolerance. A correctly sized MultiPlus-II or Quattro with a well-cabled 48V bank can start moderate pumps. For large DOL pumps, a soft-start device often resolves the problem more cost-effectively than oversizing the inverter and battery. Clamp-measure start current where possible.",
		},
		{
			question:
				"What BMS communication does Victron require with RENOZ batteries?",
			answer:
				"Victron GX devices support third-party BMS integration via CAN bus using published BMS profiles. RENOZ publishes the required CAN settings and any adapter details in the inverter compatibility declaration at /resources. Do not use a generic LiFePO4 48V profile — confirm the exact GX firmware version and BMS firmware against the RENOZ declaration before commissioning.",
		},
		{
			question:
				"What does a complete Victron + RENOZ off-grid system cost in WA?",
			answer:
				"A standard off-grid three-bed rural WA home system typically falls in the $40,000–$65,000 installed range, with batteries representing roughly 40–50% of system cost. These are indicative 2025–26 WA figures; actual quotes vary by site, load, and cable run. The federal CHBP rebate (~30% off the battery component) applies on eligible installs.",
		},
		{
			question: "Should I use Victron or Selectronic for a WA off-grid build?",
			answer:
				"Both are valid with RENOZ LV modules. Victron suits sites where remote monitoring via VRM, GX ecosystem integration, or specific generator-frequency management features are priorities. Selectronic suits sites where AU installer familiarity and SP PRO commissioning workflows are the preference. Choose the inverter brand your accredited installer knows best and has support access for in regional WA.",
		},
	],
	cta: {
		primaryLabel: "Talk through a Victron + RENOZ off-grid design",
		primaryTo: "/contact",
		secondaryLabel: "Download technical pack",
		secondaryTo: "/resources",
	},
	relatedProductPaths: ["/products/rural", "/products/residential"],
};
