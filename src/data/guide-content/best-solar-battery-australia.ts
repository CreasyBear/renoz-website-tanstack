import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "best-solar-battery-australia",
	title:
		"Best Solar Battery in Australia 2026: Architecture-Classified Comparison",
	description:
		"Architecture-based comparison of Australia's 2026 solar batteries — Tesla Powerwall 3, Sungrow SBR, BYD HVS/HVM, Enphase IQ 5P, Sigenergy, sonnen, and RENOZ.",
	primaryKeyword: "best solar battery australia",
	h1: "Best solar battery in Australia: an architecture-classified comparison",
	updated: "2026-09-01",
	claimsPending: false,
	eyebrow: "Comparison guide · Battery architecture · Australia",
	newsletter: true,
	intro: [
		"The best solar battery in Australia is not a single product: it is the best system architecture for the home. Australian solar batteries in 2026 sort into four architecture classes — all-in-one integrated systems, modular high-voltage stacks, 48V low-voltage modular platforms, and AC-coupled batteries — and the class decides what you can buy, expand, and fix. Compare the system path before you compare the badge.",
		"There is no single best solar battery australia. There is only the best battery-and-inverter architecture for a given home: the exact combination that matches its solar system, load, expansion plans, installer and standards obligations. Any list that crowns one winner is marketing, not engineering.",
		"This page compares the 2026 field by architecture rather than brand: usable energy instead of nameplate figures; exact model families (HVS, HVM, HVL and LVS are different systems); and installed-cost figures treated as observed brackets from real quotes, not price promises. Australia also splits its incentive picture in two — the federal Cheaper Home Batteries Program and WA's own Residential Battery Scheme — and the two are not the same. RENOZ supplies one of the four paths, so we declare that and let the evidence carry the comparison.",
	],
	expertise: {
		heading: "How this comparison stays honest in a brand-led search",
		body: [
			"RENOZ is one of the products in the decision table below: a Perth-based OEM supplying a modular low-voltage platform (model LV-5KWH100AH). Because we are a participant, this guide classifies architectures and cites observed sources instead of ranking brands — the supplier with the biggest marketing budget is not automatically the best fit for your site.",
			"The facts here are dated 1 September 2026. Usable capacity, installed-cost brackets, warranty terms and rebate eligibility all move with product revisions and program updates — verify the exact model and current rules on your quote before signing.",
		],
	},
	decisionHeading: "Seven products across four system paths",
	decisionRowLabels: [
		"Architecture",
		"Capacity style",
		"Usable vs nominal",
		"Inverter path",
		"Typical installed cost",
		"Expandability",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Tesla Powerwall 3",
			cells: [
				"All-in-one integrated (inverter + battery in one unit)",
				"13.5 kWh usable, fixed unit",
				"13.5 kWh usable per Tesla's AU spec",
				"Integrated inverter — no separate battery inverter",
				"~$14k–$15k installed; inside CHOICE's $11–15k 15 kWh bracket",
				"Add whole Powerwall units",
				"You want one-box brand simplicity and a strong installer network",
			],
		},
		{
			name: "Sungrow SBR",
			cells: [
				"Modular high-voltage rack — external inverter path",
				"~6.4–25.6 kWh across module counts",
				"Confirm usable kWh on the exact stack; don't convert from nominal",
				"External hybrid inverter (Sungrow or approved partner)",
				"Value tier; CHOICE observes $7–11k (10 kWh) / $11–15k (15 kWh) installed",
				"Add modules within the approved stack range",
				"You want HV modular value without an integrated brand box",
			],
		},
		{
			name: "BYD Battery-Box HVS/HVM",
			cells: [
				"Modular high-voltage series towers — external inverter path",
				"8.1–22.08 kWh usable across HVS/HVM configurations",
				"~96% round-trip efficiency; usable figures published per configuration",
				"Requires an external inverter — no integrated inverter",
				"CHOICE observes $7–11k (10 kWh) / $11–15k (15 kWh) / $14–19k (20 kWh) installed",
				"Add series modules or parallel identical towers within BYD's limits",
				"You already plan an external inverter and want HV modular storage",
			],
		},
		{
			name: "Enphase IQ 5P",
			cells: [
				"AC-coupled battery with integrated microinverter per unit",
				"5 kWh per unit; multiple units per system",
				"5 kWh usable per unit in the AU spec",
				"Integrated microinverter — AC-coupled, no separate battery inverter",
				"CHOICE observes $7–11k (10 kWh) installed (about two 5P units)",
				"Add IQ 5P units within the approved system limits",
				"You want granular AC-coupled storage and a 15-yr AU warranty",
			],
		},
		{
			name: "Sigenergy SigenStor",
			cells: [
				"All-in-one integrated stack (brand ecosystem)",
				"Modular stack; EV integration angle",
				"Check usable versus nominal on the exact controller + module count",
				"Integrated / brand inverter stack",
				"No reliable AU bracket observed — obtain an exact installer quote",
				"Add brand modules within the ecosystem",
				"You want integrated all-in-one with EV plans in the same family",
			],
		},
		{
			name: "sonnen",
			cells: [
				"All-in-one integrated (sonnenBatterie 12 / Evo)",
				"Fixed units — e.g. Evo 10 kWh usable",
				"Usable figures published per model (Evo: 10 kWh usable)",
				"Integrated inverter and power electronics",
				"Premium tier; no published AU installed price — get a current quote",
				"Scalable within the brand range; confirm the approved configuration",
				"You want a premium integrated system with virtual power plant (VPP) potential",
			],
		},
		{
			name: "RENOZ LV-5KWH100AH",
			highlight: true,
			cells: [
				"Modular 48V low-voltage platform — external inverter path",
				"5.12 kWh modules; approved 8- or 10-module towers; parallel as designed",
				"4.61 kWh usable per module published (5.12 kWh nominal)",
				"Victron / Selectronic / Deye / GoodWe / Sungrow paths",
				"Quote-dependent (module count + inverter) — request a system design",
				"Add 5.12 kWh modules; tower or parallel expansion",
				"You want expandable modular kWh, inverter choice, and Perth-based OEM support",
			],
		},
	],
	architectureExamples: {
		heading: "Current products follow four different system paths",
		intro:
			"These are model examples, not a brand league table. The same brand name can sit in different architectures (BYD alone spans HVS, HVM, HVL and LVS), so classify the exact battery, inverter and controller together.",
		categories: [
			{
				label: "All-in-one integrated · packaged system path",
				summary: "Whole package · simpler procurement, closed ecosystem",
				architecture:
					"The battery, inverter and control are sold as one platform. The internal DC architecture still matters to designers, but it is not an open battery-to-inverter choice for the buyer.",
				buyerConsequence:
					"Procurement and commissioning can be simpler, while expansion, replacement and third-party integration stay inside the manufacturer's rules.",
				products: [
					{
						name: "Tesla Powerwall 3",
						detail:
							"Tesla's AU datasheet describes Powerwall 3 as a fully integrated solar and battery system with 13.5 kWh usable energy, its own inverter and Backup Gateway 2.",
						categoryTag: "Integrated · 13.5 kWh",
						source: {
							label: "Tesla Powerwall 3 AU datasheet",
							url: "https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-au/Powerwall-3-Datasheet-AU-EN.pdf",
						},
						caveat:
							"Eligible AC-coupled solar is possible under Tesla's design limits, but third-party batteries are not supported. On three-phase homes Tesla's guidance limits backup output to around 5 kW.",
					},
					{
						name: "Sigenergy SigenStor",
						detail:
							"An integrated high-voltage system combining battery modules with a SigenStor controller; official support material describes 1–6 battery modules per controller, with an EV integration angle.",
						categoryTag: "Integrated · high voltage",
						source: {
							label: "Sigenergy SigenStor official support file",
							url: "https://www.sigenergy.com/en/support/files/359",
						},
						caveat:
							"[SolarQuotes reports it is monitoring overheating and recall reports](https://www.solarquotes.com.au/blog/sigenergys-terminal-problem-burnt-plugs-throttled-inverters/) affecting some single-phase units. Confirm the exact model, serial range and current notices with the supplier before committing.",
					},
					{
						name: "sonnenBatterie 12 / Evo",
						detail:
							"sonnen's Australian range is all-in-one LFP storage: the sonnenBatterie 12 is a scalable hybrid with integrated backup, and the Evo is an AC-coupled unit with 10 kWh usable capacity, 5 kW continuous / 7 kW surge backup.",
						categoryTag: "Integrated · premium",
						source: {
							label: "sonnen Australia — home battery storage",
							url: "https://www.sonnen.com.au/home-battery-storage",
						},
						caveat:
							"sonnen does not publish a standard Australian installed price; quote through an accredited installer. VPP participation depends on program availability and eligibility under the live rules.",
					},
				],
			},
			{
				label: "Modular high-voltage · external inverter path",
				summary: "Series towers · lower-current DC bus · named controller",
				architecture:
					"Series-connected modules operate across a product-defined high-voltage window with a separately selected hybrid inverter or controller. Some products also permit approved parallel towers.",
				buyerConsequence:
					"Lower DC current can help a high-power cable route, but module count, inverter, commissioning and future expansion stay inside the documented ecosystem.",
				products: [
					{
						name: "Sungrow SBR",
						detail:
							"A modular high-voltage residential rack family spanning roughly 6.4–25.6 kWh by module count. SBR is a battery, not a 48V product — it needs an external hybrid inverter path (Sungrow or approved partner).",
						categoryTag: "High voltage · value tier",
						source: {
							label: "Sungrow Australia — residential ESS",
							url: "https://aus.sungrowpower.com/",
						},
						caveat:
							"Confirm the exact SBR model, module count, usable energy and the approved inverter pairing from current Australian documents; do not transfer specs across SBR generations.",
					},
					{
						name: "BYD Battery-Box Premium HVS / HVM",
						detail:
							"HVS uses 2–5 series modules for 204.8–512 V towers; HVM uses 3–8 for 153.6–409.6 V. Published usable energy spans 8.1–22.08 kWh at around 96% round-trip efficiency, with an external inverter required.",
						categoryTag: "High voltage · series towers",
						source: {
							label: "BYD HVS / HVM Australian datasheet",
							url: "https://bydbatterybox.com/uploads/downloads/Datasheet%20HVS%20%26%20HVM%20V1.1_AU-652ce7e1cd83b.pdf",
						},
						caveat:
							"HVS and HVM cannot be mixed, and parallel towers need equal module counts. Use BYD's current exact-model inverter list.",
					},
				],
			},
			{
				label: "48V low-voltage modular · external inverter path",
				summary: "Separate inverter choice · higher-current DC path",
				architecture:
					"Battery modules expose a nominal low-voltage DC bus to a separately selected inverter-charger or hybrid inverter, with model-specific voltage, current and communications limits.",
				buyerConsequence:
					"The hardware can be modular and the inverter may be separately selected, but only a documented battery, inverter, firmware, BMS and protection combination is supportable.",
				products: [
					{
						name: "RENOZ LV-5KWH100AH",
						detail:
							"51.2 V nominal, 40–57.6 V operating range, 5.12 kWh nominal and 4.61 kWh recommended usable per module. Approved towers are 8 or 10 modules; additional towers are paralleled as the engineered system design requires. External modules are parallel only and the enclosure is IP40 indoor.",
						categoryTag: "48V family · 5.12 kWh",
						source: {
							label: "RENOZ technical specifications · 1 August 2025",
							url: "/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf",
						},
						caveat:
							"Confirm the current manual and signed compatibility statement for the exact inverter model, interface version and pin mapping before design or expansion.",
					},
					{
						name: "Pylontech US5000",
						detail:
							"A 48 V rack battery family that is widely installer-supported in Australia, commonly paired with external inverter-charger platforms under a tested integration path.",
						categoryTag: "48V family · rack module",
						source: {
							label: "Victron tested Pylontech integration",
							url: "https://www.victronenergy.com/live/battery_compatibility:pylontech_phantom",
						},
						caveat:
							"Compatibility is an exact-model, firmware, settings and BMS contract. Confirm the specific inverter pairing and the warranty support position before relying on any brand-level claim.",
					},
				],
			},
			{
				label: "AC-coupled battery · per-unit microinverter path",
				summary:
					"Adds storage to existing solar · System Controller for backup",
				architecture:
					"Each battery unit carries its own embedded microinverter and connects on the AC side, which lets storage be added to an existing solar system without replacing the solar inverter.",
				buyerConsequence:
					"Retrofit can be straightforward and capacity granular, but backup operation requires the manufacturer's controller equipment and a defined protected-load design.",
				products: [
					{
						name: "Enphase IQ Battery 5P",
						detail:
							"A lithium iron phosphate (LFP) AC-coupled battery with 5.0 kWh usable capacity, up to 3.84 kW continuous output and six embedded IQ8D-BAT microinverters per unit. Multiple units scale the system, and backup runs through the IQ System Controller.",
						categoryTag: "AC-coupled · 5 kWh units",
						source: {
							label: "Enphase IQ Battery 5P — Australia / New Zealand",
							url: "https://enphase.com/en-au/download/iq-battery-5p-anz",
						},
						caveat:
							"Backup requires the appropriate Enphase System Controller and a configured load design. Confirm the single- or three-phase configuration and the exact protected circuits with the installer.",
					},
				],
			},
		],
	},
	sections: [
		{
			heading: "Why architecture beats brand in a 'best battery' search",
			body: [
				"Ask what the best solar battery australia is and most search results compare brands. But the products on page one do not play the same game: Powerwall 3 and SigenStor are integrated systems, Sungrow SBR and BYD's Battery-Box are modular high-voltage racks that need an external inverter, Enphase's IQ 5P is an AC-coupled battery, and RENOZ plus Pylontech sit in the 48V low-voltage modular family. Comparing them as brands hides the decisions that actually change your cost, expandability and service path.",
				"This guide classifies every candidate by architecture, compares usable energy rather than nameplate figures, and names exact model families so you don't transfer specs between different systems. The right answer depends on your site, inverter plan and load — not on which brand has the most marketing.",
				"For the full engineering reasoning behind 48V versus high voltage, see the [48V vs high-voltage battery systems guide](/guides/48v-vs-high-voltage-battery-system). For a RENOZ-versus-brand head-to-head on the Powerwall 3 and SigenStor specifically, see the [RENOZ vs Powerwall vs Sigenergy guide](/guides/renoz-vs-powerwall-sigenergy) — this page keeps the category view.",
			],
		},
		{
			heading: "Four system paths behind every Australian shortlist",
			body: [
				"All-in-one integrated systems package battery, inverter and control into one product family. Procurement and commissioning are simpler, and the ecosystem is closed: expansion, replacement and third-party integration follow the manufacturer's rules. Powerwall 3, SigenStor and sonnen take this path.",
				"Modular high-voltage systems connect series modules into a product-defined voltage window and pair with a separately selected hybrid inverter or controller. Lower DC current can ease a high-power cable route, but the inverter, module count and commissioning stay inside the documented ecosystem. Sungrow SBR and BYD HVS/HVM take this path.",
				"48V low-voltage modular systems expose a nominal low-voltage DC bus to a separately chosen inverter-charger or hybrid. Current is higher at the same power, which makes conductors, protection and voltage drop decisive — but the inverter stays a free choice and capacity grows by modules or parallel banks. RENOZ and Pylontech take this path. AC-coupled batteries add storage to existing solar on the AC side, one unit at a time, with backup running through the manufacturer's controller — Enphase IQ 5P takes this path.",
			],
		},
		{
			heading: "Usable versus nominal energy: the spec-sheet trap",
			body: [
				"A battery's nameplate capacity is not the energy you can draw daily. LiFePO4 systems are typically designed around [roughly 90% usable depth of discharge](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf) to preserve cycle life; the published RENOZ LV-5KWH100AH module, for example, is rated 5.12 kWh nominal and 4.61 kWh recommended usable per module.",
				"Some products publish usable figures directly — Powerwall 3's 13.5 kWh usable, BYD's 8.1–22.08 kWh usable range across HVS/HVM, Enphase's 5 kWh usable per 5P unit. Others publish nominal and depend on inverter and BMS settings. Ask every quote for usable kWh at your site's temperature range and cycle plan, and size on that number — it is what your loads actually draw from.",
			],
		},
		{
			heading:
				"Model-number discipline: HVS, HVM, HVL and LVS are different systems",
			body: [
				"BYD's Battery-Box naming is the clearest warning in the market: HVS, HVM, HVL and LVS are separate systems, not variants of one battery. HVS and HVM are high-voltage series towers with different voltage windows and module counts — HVS uses 2–5 modules for 204.8–512 V, HVM uses 3–8 modules for 153.6–409.6 V — and the two cannot be mixed. LVS is BYD's low-voltage 48V-family system, a different external-bus architecture altogether; HVL is a separate high-voltage product line.",
				"Sungrow's SBR is a high-voltage battery, not a 48V product — a common conflation in comparison content. Treat each model number as its own product with its own datasheet, inverter list and expansion rules, and never transfer specs between them. The decision table in this guide names exact model families for this reason.",
			],
		},
		{
			heading: "Chemistry: why LFP dominates Australian home storage",
			body: [
				"Every product in the decision table uses lithium iron phosphate (LFP), the dominant chemistry in Clean Energy Council-listed Australian home batteries. LFP cells contain no cobalt, are well suited to daily cycling when operated inside the manufacturer's temperature and depth-of-discharge limits, and have a flat discharge curve that suits household storage.",
				"Chemistry is a baseline, not a differentiator: rated cycles, ambient temperature limits and de-rating behaviour vary by product design. Ask for the manufacturer's cycle-life curve at your site's operating temperature rather than accepting a headline cycle count, and check the battery's approved operating range against your climate.",
			],
		},
		{
			heading:
				"Backup in blackouts: selected circuits versus whole-home design",
			body: [
				"Backup is a designed function, not a battery spec. Whole-home backup means the inverter and battery are sized to carry your entire measured load through an outage; selected-circuit backup keeps a defined sub-panel — lights, fridge, internet, one appliance circuit — running for a designed duration.",
				"The architecture shapes what is possible. Powerwall 3 supports whole-home backup on single-phase installations; on three-phase homes Tesla's guidance limits backup output to around 5 kW, which effectively means a portion of the home. Enphase's IQ 5P backs up protected circuits through its System Controller. Modular systems depend on the chosen external inverter's backup design and the engineering of the load side.",
				"Ask every quote to name which circuits stay powered during an outage and for how long at your measured load. If the answer is not written down, it is not part of the design.",
			],
		},
		{
			heading: "Installed cost in 2026: what CHOICE actually observes",
			body: [
				"CHOICE's battery storage buying guide reports typical Australian installed costs — including basic installation, after the federal battery rebate — of roughly $7,000–$11,000 for a 10 kWh system, $11,000–$15,000 for 15 kWh, and $14,000–$19,000 for 20 kWh. Treat these as observed brackets from real quotes, useful for budgeting, not as a price promise for your site.",
				"A Powerwall 3's 13.5 kWh unit typically lands inside the 15 kWh bracket — around $14k–$15k installed — while a two-unit Enphase 5P install sits in the 10 kWh bracket. Complex wiring, switchboard upgrades, backup protection and access all push a quote upward, which is why CHOICE recommends getting at least three installer quotes. The cost of a modular system like RENOZ follows the module count and inverter you select, which is exactly why the quote matters more than the bracket.",
			],
		},
		{
			heading: "Rebates: WA's scheme is not the federal one",
			body: [
				"Two programs matter for Australian buyers in 2026, and they are not interchangeable. The federal Cheaper Home Batteries Program (CHBP) started 1 July 2025 and discounts eligible batteries by [up to roughly 30%](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries) at point of sale, subject to the current eligibility rules. CHBP is available to off-grid systems — grid connection is not a condition, and there is no VPP participation condition for the program. WA runs its own Residential Battery Scheme separately: it is grid-connected only, with VPP participation and Supported Solutions List conditions, which means genuinely off-grid properties often do not qualify.",
				"No fixed rates are published here on purpose: rebate values depend on the live program, the exact CEC-listed battery and inverter on your quote, the installer and your retailer. Use the [WA battery rebate checklist](/guides/wa-battery-rebates-cec) for the current position, and confirm the exact eligibility of your proposed system with a live check before signing.",
			],
		},
		{
			heading: "Warranty, support, and the local-support question",
			body: [
				"Warranty terms vary widely across the field. Powerwall 3 carries a [10-year warranty](https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Warranty/en-au/Powerwall-Warranty-AU-NZ-EN.pdf); Enphase's IQ 5P carries a [15-year / 6,000-cycle warranty for Australia](https://enphase.com/en-au/download/enphase-energy-limited-warranty-iq-battery-5p); Sigenergy's battery is covered for [10 years](https://www.sigenergy.com/uploads/au_download/1750303856783384.pdf); sonnen's Australian range is covered for [10 years or 10,000 cycles](https://www.sonnen.com.au/faq/home-energy-storage). Compare the exact terms — duration, cycle count, labour, throughput and who administers the claim — not just the headline number.",
				"Support path is architectural. Imported integrated systems route fault diagnosis through a brand installer network and the Australian distributor; modular systems lean on the supplying installer and distributor for the inverter and battery sides. RENOZ is the Perth-based OEM in this set, with warranty administration and engineering support provided locally through its installer channel — relevant for WA buyers, though local support is only as good as the actual response and parts path written into your quote.",
			],
		},
	],
	proofLinks: [
		{
			label: "SolarQuotes — battery comparison table",
			href: "https://www.solarquotes.com.au/battery-storage/comparison-table/",
			external: true,
		},
		{
			label:
				"SolarQuotes — Sigenergy's terminal problem: burnt plugs & throttled inverters",
			href: "https://www.solarquotes.com.au/blog/sigenergys-terminal-problem-burnt-plugs-throttled-inverters/",
			external: true,
		},
		{
			label: "Cheaper Home Batteries Program",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "Tesla Powerwall warranty — Australia and New Zealand",
			href: "https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Warranty/en-au/Powerwall-Warranty-AU-NZ-EN.pdf",
			external: true,
		},
		{
			label:
				"Enphase IQ Battery 5P limited warranty — Australia and New Zealand",
			href: "https://enphase.com/en-au/download/enphase-energy-limited-warranty-iq-battery-5p",
			external: true,
		},
		{
			label: "Sigenergy SigenStor warranty — Australia / New Zealand",
			href: "https://www.sigenergy.com/uploads/au_download/1750303856783384.pdf",
			external: true,
		},
		{
			label: "sonnen — home energy storage warranty",
			href: "https://www.sonnen.com.au/faq/home-energy-storage",
			external: true,
		},
		{
			label: "CEC — battery storage guide for consumers",
			href: "https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf",
			external: true,
		},
		{
			label: "WhySolar — best solar batteries Australia",
			href: "https://www.whysolar.com.au/",
			external: true,
		},
		{
			label: "CHOICE — solar battery storage buying guide",
			href: "https://www.choice.com.au/home-improvement/energy-saving/solar/buying-guides/battery-storage-buying-guide",
			external: true,
		},
		{
			label: "Clean Energy Council — approved battery products",
			href: "https://cleanenergycouncil.org.au/",
			external: true,
		},
		{
			label: "Tesla Powerwall — Australia",
			href: "https://www.tesla.com/en_au/powerwall",
			external: true,
		},
		{
			label: "BYD Battery-Box Australia",
			href: "https://bydbatterybox.com/",
			external: true,
		},
		{
			label: "Enphase IQ Battery 5P — Australia / New Zealand",
			href: "https://enphase.com/en-au/download/iq-battery-5p-anz",
			external: true,
		},
		{
			label: "WA battery rebate checklist",
			href: "/guides/wa-battery-rebates-cec",
		},
		{
			label: "48V vs high-voltage battery systems",
			href: "/guides/48v-vs-high-voltage-battery-system",
		},
		{
			label: "RENOZ vs Powerwall vs Sigenergy",
			href: "/guides/renoz-vs-powerwall-sigenergy",
		},
		{
			label: "Home battery storage Perth",
			href: "/products/residential",
		},
		{
			label: "RENOZ technical resources",
			href: "/resources",
		},
	],
	faqHeading: "Solar battery questions buyers actually ask",
	faqs: [
		{
			question: "What is the best solar battery in Australia?",
			answer:
				"There is no single best battery. The right pick is the architecture that fits your site: an integrated all-in-one (Powerwall 3, SigenStor, sonnen) for one-box simplicity; a modular high-voltage rack (Sungrow SBR, BYD HVS/HVM) when you already plan an external inverter; a 48V low-voltage modular platform (RENOZ, Pylontech) for expandable inverter-agnostic storage; or an AC-coupled battery (Enphase IQ 5P) to add storage to existing solar. Compare usable kWh, inverter path, expansion and support on exact models.",
		},
		{
			question: "Is the Tesla Powerwall the best solar battery?",
			answer:
				"Powerwall 3 is the strongest all-in-one for many single-phase homes: 13.5 kWh usable, integrated inverter, 10-year warranty and whole-home backup on single-phase. It is not universally best. On three-phase homes Tesla's guidance limits backup output to around 5 kW, the inverter path is closed, and expansion means adding whole units. Compare it against modular paths before assuming it fits.",
		},
		{
			question:
				"What's the difference between BYD Battery-Box HVS, HVM, HVL and LVS?",
			answer:
				"They are separate systems. HVS and HVM are high-voltage series towers with different voltage windows and module counts — HVS uses 2–5 modules for 204.8–512 V, HVM uses 3–8 modules for 153.6–409.6 V — and the two cannot be mixed. LVS is BYD's low-voltage 48V-family system; HVL is a separate high-voltage product line. Treat each model as its own product with its own datasheet, inverter list and expansion rules, and never transfer specs between them.",
		},
		{
			question: "Should I choose a 48V or high-voltage battery for home?",
			answer:
				"The 48V versus HV decision is an engineering choice about DC bus, current, cabling, inverter path, expansion and service — not a quality ranking. 48V-family systems run a nominal low-voltage bus at higher current; HV systems run a higher-voltage bus at lower current behind a named controller or inverter. See the [48V vs high-voltage battery systems guide](/guides/48v-vs-high-voltage-battery-system) for the full reasoning, then match the architecture to your inverter plan and load.",
		},
		{
			question: "Why does usable capacity matter more than nominal?",
			answer:
				"Because usable capacity is the energy you can actually draw daily. A LiFePO4 battery is typically designed around [roughly 90% usable depth of discharge](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf); the RENOZ LV-5KWH100AH module, for example, is rated 5.12 kWh nominal and 4.61 kWh usable per module. Size on usable kWh at your site's conditions, not the nameplate figure.",
		},
		{
			question: "Will my battery keep the whole home running in a blackout?",
			answer:
				"Only if the inverter and battery are designed and sized for it. Integrated systems can support whole-home backup within their limits — Powerwall 3 does on single-phase, while on three-phase homes Tesla's guidance limits output to around 5 kW. Modular systems depend on the chosen external inverter's backup design. Many installs protect selected circuits such as lights, fridge and internet on a controlled sub-panel. Ask the quote to name which circuits stay powered and for how long at your measured load.",
		},
		{
			question: "Can I get a rebate on a solar battery in 2026?",
			answer:
				"Possibly. The federal Cheaper Home Batteries Program (CHBP), started 1 July 2025, discounts eligible batteries by [up to roughly 30%](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries) at point of sale and is available to off-grid systems — grid connection is not a condition and there is no VPP participation condition for the program. WA runs its own Residential Battery Scheme, which is grid-connected only with VPP and Supported Solutions List conditions. Eligibility depends on the live program rules, CEC listing, installer and retailer lists. No fixed rates are published here — use the [WA battery rebate checklist](/guides/wa-battery-rebates-cec) and verify your exact system before signing.",
		},
		{
			question: "Can I expand my battery later?",
			answer:
				"That depends on the architecture. Modular high-voltage racks grow by adding approved modules to the stack or paralleling identical towers; 48V modular platforms grow by adding modules or parallel banks within the engineered design; integrated systems usually grow by adding whole units within the brand ecosystem. Expansion only works if the original inverter, BMS, cabling and protection were sized for it — confirm the expansion path in your initial quote.",
		},
	],
	closing: {
		heading: "Choose the system path, then verify the exact package",
		body: "No brand is best for every home. Classify the architecture, compare usable kWh on exact models, and verify the inverter path, expansion, rebate eligibility and support on your quote — then design the system that fits your site.",
	},
	cta: {
		primaryLabel: "Get a RENOZ system design for your home",
		primaryTo: "/contact",
		secondaryLabel: "Residential storage options",
		secondaryTo: "/products/residential",
	},
	relatedProductPaths: ["/products/residential"],
};
