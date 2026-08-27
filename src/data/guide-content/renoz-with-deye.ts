import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "renoz-with-deye",
	title: "Deye Hybrid Inverter Battery Perth: RENOZ Pairing Guide 2026",
	description:
		"How RENOZ 5.12 kWh LV modules pair with Deye 48V hybrids in Perth — retrofit, CSIP-AUS rules, surge limits, and when to step up.",
	primaryKeyword: "deye hybrid battery retrofit",
	h1: "Adding a modular battery to a Deye hybrid",
	updated: "2026-07-23",
	claimsPending: false,
	pairingPartner: "Deye",
	eyebrow: "48V pairing guide · Hybrid & retrofit · Perth / WA",
	showCapacityLadder: true,
	intro: [
		"RENOZ LV modules (5.12 kWh each, 8 or 10 per tower, depending on the approved configuration, multiple towers in parallel as required by the engineered system design) pair with Deye 48 V hybrid inverters for Perth retrofits and new hybrid builds. Deye offers a wide model range at competitive price points — a sensible budget hybrid path for many WA homes. From 1 May 2026, new grid-tied Deye installs in Synergy territory must meet AS/NZS 4777.2:2020 plus CSIP-AUS or accept a 1.5 kW export cap. Verify BMS communication, CEC listing, and any Synergy Supported Solutions List entry against live official sources before claiming compatibility or rebate eligibility.",
		"A deye hybrid battery retrofit is the most common conversation: the inverter is already on the wall, and the question is proprietary pack versus modular OEM storage that can grow.",
		"Confirm BMS communication, CSIP-AUS status for post-May 2026 Synergy installs, and any rebate-list entries against live sources before promising compatibility or dollars.",
	],
	expertise: {
		heading: "Why a Perth OEM writes retrofit checklists",
		body: [
			"RENOZ supplies modular 48 V LiFePO4 that pairs with Deye hybrids when the BMS path and cable design are correct — and we say so only after those checks.",
			"Budget hybrid installs fail when surge limits and rebate gates are hand-waved. This page is the honest retrofit frame for Perth homes.",
		],
	},
	decisionHeading: "Deye + RENOZ vs stepping up the inverter",
	decisionRowLabels: [
		"Best for",
		"Inverter type",
		"Motor / surge",
		"Grid-tied rule (post May 2026)",
		"Capacity ladder",
		"When to step up",
	],
	decisionColumns: [
		{
			name: "Deye HF hybrid + RENOZ",
			highlight: true,
			cells: [
				"Budget hybrid retrofits; solar self-consumption; partial backup",
				"High-frequency; wide model range",
				"Adequate for small appliances; add soft-start for motors",
				"CSIP-AUS required or 1.5 kW export cap applies",
				"5.12 kWh · approved 8- or 10-module towers · parallel as designed",
				"Heavy motors, diesel-assist, true off-grid",
			],
		},
		{
			name: "Victron / Selectronic + RENOZ",
			cells: [
				"Off-grid, diesel-assist, industrial surge loads",
				"Low-frequency; transformer-based; heavier",
				"Strong sustained surge; handles DOL bore pumps better",
				"Applies to any grid-tied inverter from May 2026",
				"Same RENOZ 5.12 kWh module ladder",
				"When Deye surge window is insufficient",
			],
		},
		{
			name: "All-in-one (Powerwall / Sigenergy)",
			cells: [
				"Single-brand suburban simplicity",
				"Integrated inverter + battery",
				"Brand-dependent; fixed expansion",
				"Brand handles CSIP-AUS compliance internally",
				"Fixed SKU increments",
				"When you want one-box and no inverter choice",
			],
		},
	],
	sections: [
		{
			heading: "Why Deye suits many Perth hybrid builds",
			body: [
				"Deye has earned its place in the installer channel across Australia. The model range covers single-phase and three-phase hybrids, the pricing is competitive, and most Perth solar companies can source and support them. For grid-tied homes chasing solar self-consumption and partial backup — the majority of Perth residential installs — a Deye hybrid is a pragmatic choice rather than a compromise.",
				"Pairing Deye with RENOZ LV modules gives the customer a modular OEM battery instead of a proprietary imported pack locked to the inverter brand. When the house eventually needs more energy storage, the customer adds RENOZ modules rather than renegotiating an entire system. That expandability is the core reason to keep inverter and battery as separate choices.",
				"RENOZ modules (LV-5KWH100AH, 5.12 kWh each) speak the same 48 V language as Deye's battery port. Confirm closed-loop BMS communication for the specific Deye model on the quote — not every Deye SKU supports every communication protocol. Use the RENOZ inverter compatibility declaration on /resources and write the exact model strings on the install documents.",
			],
		},
		{
			heading:
				"High-frequency honesty: what Deye does well and where it has limits",
			body: [
				"Most Deye hybrids are high-frequency (HF) designs. That is not a flaw — HF electronics are lighter, cheaper, and efficient at their intended job of grid-tied solar arbitrage and domestic backup. Perth homes running lights, fridges, televisions, and moderate appliances overnight are well within Deye's capability.",
				'Where HF designs can struggle is sustained high-inrush loads. Motor start current (Locked Rotor Amps) on bore pumps, compressors, and pool pumps can exceed what the HF inverter holds for longer than a few milliseconds. If those loads are critical, measure the actual LRA, check the Deye model\'s surge spec carefully, and specify a soft-starter or VFD on any motor above roughly 1 kW DOL. Do not assume a quoted "2× surge" rating covers long motor acceleration ramps.',
				"If your site has a diesel generator for backup, the genset interaction story also differs from low-frequency (LF) inverter-chargers like Victron MultiPlus or Selectronic SP PRO. LF units have transformer-based assist and pass-through that tolerates rougher genset quality. For a pure grid-tied Perth home with no generator, this distinction is mostly academic — but for rural sites or fringe-of-grid properties running occasional diesel, it matters. Step up to Victron or Selectronic when diesel-assist and industrial surge loads are central to the design.",
			],
		},
		{
			heading: "May 2026 Synergy CSIP-AUS rules for grid-tied Deye installs",
			body: [
				"From 1 May 2026, new grid-connected battery systems in the Synergy SWIS area must meet AS/NZS 4777.2:2020 plus CSIP-AUS, or they will be limited to a 1.5 kW export cap. CSIP-AUS is the smart inverter communications protocol that lets Synergy remotely manage export during grid stress events. Systems installed before 1 May 2026 are grandfathered under the old rules.",
				"For a new Deye install in Perth today, the practical question is whether the specific Deye model and firmware supports CSIP-AUS out of the box or whether a 1.5 kW cap is acceptable for the customer's solar size. Many Deye models are being updated for CSIP-AUS compliance — confirm with the installer and Synergy's current Supported Solutions List, not with marketing copy from the importer.",
				"The same rules apply regardless of battery brand: CSIP-AUS is a grid interconnection requirement on the inverter, not on the battery. RENOZ modules sit on the DC side and are not themselves subject to CSIP-AUS, but the inverter they pair with must comply. If the site also intends to claim the WA Residential Battery Scheme rebate, the full solution (inverter and battery) must appear on the Synergy Supported Solutions List and use a Plenti-accredited installer.",
			],
		},
		{
			heading: "Retrofit path: adding RENOZ to an existing Deye hybrid",
			body: [
				"Retrofit is the most common Deye + RENOZ conversation. The Deye hybrid is already on the wall, the customer wants to add storage, and the question is whether to buy the Deye-branded battery pack or an OEM modular alternative. Modular RENOZ storage wins when the customer expects capacity to grow — adding one module at a time 8 or 10 per tower, depending on the approved configuration — rather than buying a fixed all-in-one pack.",
				"The retrofit checklist is short but non-negotiable: confirm the Deye model's battery port voltage range matches RENOZ nominal operating voltage; confirm BMS communication protocol (CAN, RS485, or proprietary) is supported; confirm DC cable sizing and fuse rating for the combined module count; and write those details into the commissioning record. An installer who says 'lithium is lithium' on a 48 V Deye should be questioned on all three points.",
				"If the customer is on a Synergy feed-in tariff and the current Deye system was installed before 1 May 2026, the grandfathering rule covers the existing inverter but may not extend to new equipment or a system modification that triggers a new connection application. Check with Synergy's technical team before modifying a pre-May-2026 install.",
			],
		},
		{
			heading: "Rebates: what applies and what does not",
			body: [
				"Two rebate pools are available in WA. The federal Cheaper Home Batteries Program (CHBP) delivers roughly 30% upfront via STCs at point of sale — currently around $252–$272 per usable kWh (approximately $2,500–$2,700 off a 10 kWh battery). Off-grid systems qualify for the federal scheme; no VPP or grid connection is required. The program runs to 31 December 2030 and the STC value steps down from 1 January 2027, so earlier installs lock in a bigger discount. These numbers come from DCCEEW program documentation and should be verified on the federal program page before quoting.",
				"The WA Residential Battery Scheme (WARBS) adds a further $130 per usable kWh for Synergy customers (capped at $1,300 on 10 kWh) on top of the federal program — potentially around $5,000 combined on a 10 kWh system in Synergy territory. WARBS requires grid connection, mandatory VPP enrolment in Synergy Battery Rewards for a minimum of two years, a Plenti-accredited vendor, and the inverter/battery solution on Synergy's Supported Solutions List. Off-grid systems do not qualify for WARBS.",
				"Stacking both rebates requires the full solution — Deye model, RENOZ modules, and installer — to meet all conditions simultaneously. Do not infer eligibility from a competitor's rebate marketing. Verify the exact CEC battery listing for the RENOZ model on the quote and the current Synergy SSL for the Deye model before promising a customer any rebate dollar figure.",
			],
		},
		{
			heading: "Capacity planning: the 5.12 kWh module ladder",
			body: [
				"Size storage from loads, not from inverter marketing. For a typical Perth three-bedroom home, evening self-consumption typically runs 8–15 kWh depending on AC use, hot water, and pool pumps. One RENOZ tower of two to three modules (10–15 kWh) covers that range; four modules adds a comfortable partial backup buffer. Start with measured consumption from Synergy's usage portal or a clip-on logger rather than guessing.",
				"The RENOZ LV module is 5.12 kWh (LV-5KWH100AH). A single tower holds 8 or 10 modules, depending on the approved configuration. Sites needing more energy — large homes, small farms, rural properties — can parallel towers as required by the engineered system design. That ceiling exists in the platform architecture; what any specific Deye model can actually handle depends on its battery port current limit and the cabling design. Confirm the upper limit for the exact Deye model before selling a multi-tower system on that inverter.",
				"The usable kWh you get in practice also depends on depth of discharge settings in the BMS and inverter configuration. A 10 kWh nominal installation at 90% DoD delivers 9 kWh usable; tighter DoD settings protect cycle life but reduce effective capacity. This is worth explaining to customers comparing nominal kWh across different brands.",
			],
		},
		{
			heading: "When to step up from Deye to Victron or Selectronic",
			body: [
				"Deye is the right inverter for a lot of Perth homes. It is not the right inverter for every site. The clearest signals that a step-up is warranted: a diesel or petrol generator that must charge the battery and share the AC bus reliably; bore pumps or compressors above roughly 1–1.5 kW where a soft-start is not feasible; a site that needs true off-grid autonomy across multiple cloudy days; or a rural property where the installer expects to need inverter-level diagnostics remotely.",
				"Victron MultiPlus and Quattro-class inverter-chargers are low-frequency transformer-based units with published genset assist, UPS switching, and long surge windows that match the demands of those sites. Selectronic SP PRO carries the same logic in Australian off-grid tradition. Both pair with the same RENOZ 5.12 kWh module ladder — so the battery investment does not change if the customer starts with Deye and later upgrades the inverter. That is worth noting on the quote.",
				"The honest conversation with a budget-conscious customer is: Deye delivers strong value for a grid-tied suburban hybrid; if your site needs generator assist and motor surge performance, the inverter upgrade adds cost but is not optional. Size the inverter for the actual electrical job first; then pick the battery ladder.",
			],
		},
		{
			heading: "What to confirm before the install proceeds",
			body: [
				"A short pre-install checklist prevents the problems that generate warranty calls. Confirm the Deye model and firmware on the quote match the BMS communication protocol in the RENOZ compatibility declaration. Confirm DC cable sizing (cross-section, fuse, and run length) for the number of modules proposed. Confirm CSIP-AUS status of the Deye model for any new grid-tied install in Synergy territory from May 2026. Confirm CEC battery listing for the RENOZ model string on the quote — not the product family, the exact string.",
				"If VPP enrolment is part of the WARBS rebate path, confirm that the Deye model is on Synergy's current Supported Solutions List and that the customer understands the two-year minimum VPP obligation before signing. Write all confirmation points into the commissioning sheet, not just the invoice. A completed commissioning record is also the installer's protection when a customer later questions the configuration.",
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
			label: "DCCEEW — Cheaper Home Batteries detail",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA Residential Battery Scheme (wa.gov.au)",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "Synergy — SWIS grid rules and SSL",
			href: "https://www.synergy.net.au",
			external: true,
		},
		{
			label: "RENOZ resources / compatibility declarations",
			href: "/resources",
		},
		{
			label: "Residential LV products",
			href: "/products/residential",
		},
		{
			label: "Rural products",
			href: "/products/rural",
		},
		{
			label: "WA battery rebate checklist",
			href: "/guides/wa-battery-rebates-cec",
		},
		{
			label: "Powerwall alternative comparison",
			href: "/guides/renoz-vs-powerwall-sigenergy",
		},
	],
	faqHeading: "Retrofit questions before modules arrive",
	faqs: [
		{
			question: "Can I add RENOZ modules to an existing Deye hybrid inverter?",
			answer:
				"Often yes — that is the most common Deye + RENOZ conversation. Confirm the Deye model supports RENOZ's BMS communication protocol (CAN or RS485 depending on model), that DC cable sizing suits the module count, and that the voltage range matches. Use the RENOZ compatibility declaration on /resources and get those model strings on the commissioning document before any modules arrive on site.",
		},
		{
			question: "Does my Deye install need CSIP-AUS after May 2026?",
			answer:
				"Yes for new grid-tied installations in the Synergy SWIS area from 1 May 2026 — the inverter must meet AS/NZS 4777.2:2020 plus CSIP-AUS or accept a 1.5 kW export cap. Systems installed before that date are grandfathered. CSIP-AUS is an inverter requirement; it does not apply directly to the RENOZ battery modules on the DC side. Confirm CSIP-AUS support with your Deye supplier for the specific model on the quote.",
		},
		{
			question: "How much rebate can I get on a Deye + RENOZ system in Perth?",
			answer:
				"For Synergy customers with an eligible 10 kWh system, stacking federal CHBP (roughly $252–$272 per usable kWh) and WARBS ($130/kWh, capped at $1,300) can reach around $5,000 combined. The federal program runs off-grid too; WARBS is grid-tied and VPP-enrolled only. All figures from DCCEEW and wa.gov.au — verify before quoting because program details change.",
		},
		{
			question: "Is Deye good enough for a bore pump or compressor?",
			answer:
				"Depends on the pump size and Deye model's surge spec. High-frequency Deye hybrids handle small appliances and lighting reliably. For sustained motor inrush above about 1 kW DOL, check actual LRA against the inverter's surge rating and duration. A soft-starter or VFD on the motor is often the practical fix. For heavy bore pumps or compressors central to the site, consider stepping up to a Victron or Selectronic inverter-charger.",
		},
		{
			question: "Do off-grid Deye systems qualify for the battery rebate?",
			answer:
				"The federal Cheaper Home Batteries Program applies to off-grid systems — no VPP or grid connection required, confirmed by DCCEEW. The WA Residential Battery Scheme (WARBS) does not apply to off-grid; it requires a Synergy or Horizon grid connection and mandatory VPP enrolment. An off-grid Deye + RENOZ system can still claim the federal rebate if the battery is CEC-listed and installed by an SAA-accredited installer.",
		},
		{
			question:
				"How many RENOZ modules suit a typical Perth home on a Deye hybrid?",
			answer:
				"Most Perth three-bedroom homes run 8–15 kWh of evening consumption depending on AC use, pool pumps, and hot water. Two to three RENOZ modules (10–15 kWh) covers that range; four modules adds backup headroom. Measure actual consumption from your Synergy usage portal rather than guessing. The platform supports 8 or 10 modules per tower, depending on the approved configuration — but confirm the specific Deye model's battery port limit before specifying more than a single tower.",
		},
		{
			question: "When should I use Victron instead of Deye with RENOZ?",
			answer:
				"Choose Victron MultiPlus or Quattro (or Selectronic SP PRO) when the site needs reliable diesel-generator assist, sustained motor surge for bore pumps or compressors, or true off-grid autonomy. Deye is better suited to grid-tied suburban hybrids and partial backup. The RENOZ 5.12 kWh module ladder is compatible with both inverter families, so the battery investment is not lost if you later upgrade the inverter.",
		},
		{
			question:
				"What does the WA battery rebate require beyond buying the right brand?",
			answer:
				"Three things: the battery must be CEC-approved (exact model string on the CEC register); the full solution (inverter + battery) must appear on Synergy's Supported Solutions List; and the installer must be a Plenti-accredited vendor who applies the rebate on your behalf. You must also enrol in the Synergy Battery Rewards VPP for a minimum two years. Confirm all three gates for the specific Deye model and RENOZ modules on your quote — not the product families in general.",
		},
	],
	closing: {
		heading: "Confirm the three gates, then size modules",
		body: "BMS protocol, DC cable design, and Synergy rules come before module count. Talk to RENOZ when you want modular capacity on a Deye hybrid that already fits the site.",
	},
	cta: {
		primaryLabel: "Confirm a Deye + RENOZ package for your Perth home",
		primaryTo: "/contact",
		secondaryLabel: "Browse technical resources and compatibility",
		secondaryTo: "/resources",
	},
	relatedProductPaths: ["/products/residential", "/products/rural"],
};
