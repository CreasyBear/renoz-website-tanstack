import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "best-off-grid-battery-australia",
	title: "Best Off-Grid Battery in Australia 2026: An Evidence-Led Shortlist",
	description:
		"What is the best off grid battery in Australia? An evidence-led 2026 shortlist of 48V rack, modular LV and AU-made systems by spec, standards and support.",
	primaryKeyword: "best off grid battery australia",
	h1: "Best off-grid battery in Australia: an evidence-led shortlist",
	updated: "2026-09-01",
	claimsPending: false,
	newsletter: true,
	eyebrow: "Comparison guide · Off-grid · Australia 2026",
	intro: [
		
		"The best off-grid battery in Australia is not one product: it is the best battery-and-inverter architecture for the site. Off-grid batteries in 2026 sort into four architecture classes — 48V-family rack modules, modular low-voltage stacks, integrated packaged systems, and external inverter-charger ecosystems — and the class decides your inverter choice, expansion path, cabling and support. This guide is that 2026 shortlist, built from published specifications, standards and support evidence rather than review scores.",
		"There is no single best off-grid battery in Australia. The best off grid battery australia for a given site is an architecture, not a brand: the exact battery-and-inverter combination that matches its energy duty, power spikes, expansion plans, installers and standards obligations. Any list that crowns one winner is marketing, not engineering.",
		"So this page does three honest things: it classifies the 2026 field into four architecture paths, it names the models that matter on each path with their published figures, and it anchors every buying decision to the [CEC approved-products list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries), AS/NZS standards, and the installers and suppliers who will actually design, commission and warrant the system. RENOZ supplies one of the four paths, so we declare that and let the evidence carry the comparison.",
	],
	expertise: {
		heading: "How we shortlist without crowning a winner",
		body: [
			"RENOZ builds and supplies one of the four paths on this page — the LV-5KWH100AH 48V-family module, stocked and supported from Perth. We state where we sit, then let published figures do the talking: no invented scores, no “best” badges, no volumes or prices beyond observed sources.",
			"Every model claim here traces to the manufacturer's own published data or the observed SERP evidence, and every decision ends the same way: verify the exact model on the live CEC approved list and with a qualified installer before you commit.",
		],
	},
	decisionHeading: "Off-grid battery shortlist: architecture comparison",
	decisionRowLabels: [
		"Architecture",
		"Capacity / usable range",
		"Chemistry & usable depth",
		"Inverter path",
		"Expansion model",
		"Support & sourcing angle",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "PowerPlus LiFe + Selectronic",
			cells: [
				"AU-made 48V rack modules + external inverter-charger (Selectronic SP PRO)",
				"LiFe4851: 3RU 48V rack module; up to 16 modules in parallel (published limit)",
				"LFP; UL9540A and UL1973-tested, 10-year warranty",
				"Selectronic SP PRO or other STA016-listed inverters; managed or self-managed CANBus",
				"Add rack modules up to the published parallel limit",
				"Australian manufacturer with local engineering and support",
				"You want AU-made hardware and an installer-led premium ecosystem",
			],
		},
		{
			name: "BYD Battery-Box Premium LVS",
			cells: [
				"Modular low-voltage stack (51.2V) for an external inverter",
				"4–24 kWh usable per pack (1–6 LVS modules); up to 256 kWh across 16 packs",
				"LFP; modular stack with published usable capacity",
				"External inverter required — confirm the exact model on BYD's inverter list",
				"Add LVS modules, or parallel towers of 1–4 modules",
				"Globally deployed brand with an AU distributor and installer channel",
				"You want a proven modular LV stack with a global track record",
			],
		},
		{
			name: "Pylontech US5000",
			cells: [
				"48V rack module, value tier",
				"4.8 kWh nominal / 4.56 kWh usable per module; parallel banks",
				"LFP; ~95% usable depth per manufacturer specs",
				"External inverter with CANBus pairing — installer-supported",
				"Parallel modules raise kWh and current within published limits",
				"High-volume global module installed by many AU off-grid integrators",
				"You want proven, widely integrated 48V modules at value pricing",
			],
		},
		{
			name: "RENOZ LV-5KWH100AH",
			highlight: true,
			cells: [
				"Perth-supplied 48V-family modular (51.2V nominal) + chosen inverter",
				"[5.12 kWh nominal / 4.61 kWh usable per module](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf) per the RENOZ technical specification; approved 8- or 10-module towers",
				"LFP; ~90% usable per module (4.61 / 5.12 kWh)",
				"Victron / Selectronic / Deye / GoodWe / Sungrow — matched to the site",
				"Add 5.12 kWh modules; towers paralleled as the engineered design requires",
				"WA OEM: Perth stock, engineering and support from O'Connor",
				"You want modular kWh, inverter choice and WA-local support",
			],
		},
	],
	sections: [
		{
			heading: "Why page one has no answer to give you",
			body: [
				"The money query — best off-grid battery Australia — returns manufacturer spec pages and authority lists, not independent comparison. That means the models above are the observed field, but nobody has classified them for the buyer.",
				"The “reviews” variant of the query returns brand-level review claims with little model-level evidence. That is the vacuum this page fills: an architecture-classified, CEC-anchored, 2026-dated shortlist you can actually cite and check.",
			],
		},
		{
			heading: "Four architecture classes, not four brands",
			body: [
				"Off-grid batteries in 2026 sort into four system paths, and the path matters more than the brand badge: 48V-family rack modules with a separately chosen inverter; modular low-voltage stacks (51.2V-class) that behave like a battery box; integrated packaged systems where the battery and power conversion are sold as one box; and external inverter-charger ecosystems where an AU-made inverter like the Selectronic SP PRO is the design centre.",
				"Each path changes your inverter choice, your expansion options, your cabling and protection design, and who you call when something fails. The full 48V versus high-voltage reasoning lives in its own [guide](/guides/48v-vs-high-voltage-battery-system) — here we classify, not re-litigate.",
			],
		},
		{
			heading: "The 2026 model-level shortlist, by the numbers",
			body: [
				"RENOZ LV-5KWH100AH — 51.2V nominal, 40–57.6V operating range, 5.12 kWh nominal and 4.61 kWh recommended usable per module. Approved towers run 8 or 10 modules; external modules are parallel-only and the enclosure is IP40 indoor. Expansion is by adding modules or paralleling towers within the engineered system design.",
				"BYD Battery-Box Premium LVS — LFP, 51.2V-class modular stack for an external inverter. One pack holds 1–6 modules for [4–24 kWh usable](https://www.bydbatterybox.com/); up to 16 packs connect in parallel to [256 kWh](https://www.bydbatterybox.com/). BYD's published expansion path is adding modules or parallel towers of 1–4 modules.",
				"Pylontech US5000 — 48V rack module at a value price point. Pylontech publishes [4.8 kWh nominal and 4.56 kWh usable per module (95% depth of discharge)](https://en.pylontech.com.cn/products/us5000), with parallel banks raising capacity and current. It is the default 48V module for a large share of AU off-grid integrators.",
				"PowerPlus LiFe4851 (+ LiFe4838P) with Selectronic SP PRO — Australian-made 3RU 48V rack modules tested to UL9540A and UL1973, with a [10-year warranty](https://www.powerplus-energy.com.au/products/life4851/) and up to 16 modules in parallel under the published limits. Paired with the Selectronic SP PRO inverter-charger, this is the premium AU-made route — confirm the exact pairing on the current approved battery list.",
				"Compare usable figures, not nominal ones, across all four. Usable capacity is what your BMS lets you draw — for RENOZ that is 4.61 kWh of the 5.12 kWh module — and it is the number your autonomy design, rebate paperwork and expectations should be built on.",
			],
		},
		{
			heading: "Capacity versus power: size the job before you pick the battery",
			body: [
				"An off-grid battery must cover two different numbers: energy (kWh) for the daily load and autonomy target, and power (kW) for the surges — pumps, compressors, workshop tools, appliances starting. A bank can hold plenty of kWh yet stall on a locked-rotor surge if the inverter-charger and battery current limits don't match the load.",
				"The right order is load assessment, energy and power sizing, then architecture. We cover the sizing maths in the [dedicated sizing guide](/guides/battery-sizing-off-grid-wa); this shortlist assumes the job has been sized and you are choosing hardware against it.",
			],
		},
		{
			heading: "Chemistry: LFP versus lead-acid in real off-grid service",
			body: [
				"Lithium iron phosphate (LFP) dominates new off-grid installations in Australia for a measurable reason: [roughly 90% of the rated capacity is usable](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf), versus about 50% for lead-acid in practical off-grid duty. That alone halves the installed capacity a given site must buy, and LFP's cycle life across partial states of charge compounds the advantage.",
				"Lead-acid still has narrow niches — small seasonal systems, temperature-tolerant roles, or budgets that cannot stretch to lithium. For serious year-round off-grid duty in 2026, LFP is the baseline and the four shortlisted paths above are all LFP.",
			],
		},
		{
			heading: "Standards: AS/NZS 4509.1, 5139, 4777.1 and the CEC list",
			body: [
				"Genuinely off-grid power systems are designed under AS/NZS 4509.1 (stand-alone power systems), battery installation carries the electrical-safety obligations of [AS/NZS 5139](https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector), and any grid-connecting inverter must meet AS/NZS 4777.1. State regulators hold installers to these: [Energy Safe Victoria](https://www.energysafe.vic.gov.au/battery-storage), for example, requires BESS installation and inspection by appropriately licensed workers under Victorian regulations and the relevant Australian Standards.",
				"Fire safety is layered risk reduction — siting, enclosure, protection, commissioning and maintenance — never a guarantee. The essentials are covered in our [fire-suppression guide](/guides/battery-fire-suppression-essential); standards and installation practice are the installer's scope, not something a model number settles.",
			],
		},
		{
			heading: "The CEC approved-products list is the real gate",
			body: [
				"The Clean Energy Council approved-products lists are the practical entry ticket for batteries in Australia: network schemes and government programs (including SRES and state rebates) require batteries from the list, and the list is the closest thing the industry has to an independent technical gate. At 31 July 2026 the [CEC lists held 3,435 products](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries).",
				"The list is dynamic — products are added, expire and are de-listed, and in January 2026 the expiry dates for [more than 700 products were brought forward](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries/new-expiry-dates-batteries-ts5398) as part of the transition to SA TS 5398 — the successor specification to the CEC's Best Practice Guide for battery product assessment. That is why this page makes no standing CEC-approval claim for any exact model, RENOZ included: verify the exact model numbers on your quote against the live list, and confirm listing status in writing with your installer.",
			],
		},
		{
			heading: "Rebates for genuinely off-grid systems",
			body: [
				"Off-grid status changes rebate eligibility in a way most listicles miss. The federal [Cheaper Home Batteries Program (CHBP)](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries) is available to off-grid systems — grid connection is not a condition, and there is no VPP participation condition for the program. The WA Residential Battery Scheme (WARBS) is grid-connected only and typically requires enrolment in a virtual power plant (VPP) — a network of batteries coordinated to export or shift power on demand — so many truly off-grid properties in WA qualify for CHBP but not WARBS.",
				"We deliberately publish no rebate rates or caps here: they change, they are scheme- and model-specific, and eligibility sits with live official lists. The current checks live in our [WA battery rebates checklist](/guides/wa-battery-rebates-cec).",
			],
		},
		{
			heading: "Perth and WA: where local supply actually matters",
			body: [
				"Off-grid systems in WA fail on logistics before they fail on chemistry: summer heat, fringe-of-grid voltage behaviour, remote site access, and spare-parts lead times that run through international supply chains. A Perth-supplied 48V-family module like the RENOZ LV-5KWH100AH shortens that chain — stock and engineering support from O'Connor rather than a container away — which is why the WA angle is part of this national shortlist rather than a footnote.",
				"What local supply does not change is site responsibility: accredited installer and EPC partners own site-specific design, approvals, protection and commissioning. The battery is a component of a stand-alone power system; the system is engineered here, installed by qualified people, and commissioned against the standards above.",
			],
		},
	],
	architectureExamples: {
		heading: "Current products follow four different system paths",
		intro:
			"These are model examples, not a brand league table. Classify the exact battery, inverter and controller together before anything else — the architecture is the decision; the brand badge is not.",
		categories: [
			{
				label: "48V-family rack · open inverter choice",
				summary: "Separate inverter choice · higher-current DC path",
				architecture:
					"Battery modules expose a nominal low-voltage DC bus (48V / 51.2V-class) to a separately selected inverter-charger, with model-specific voltage, current and communications limits.",
				buyerConsequence:
					"The hardware is modular and the inverter is chosen for the site, but only a documented battery, inverter, firmware, BMS and protection combination is supportable.",
				products: [
					{
						name: "RENOZ LV-5KWH100AH",
						detail:
							"51.2V nominal, 40–57.6V operating range, 5.12kWh nominal and 4.61kWh recommended usable per module. Approved towers are 8 or 10 modules; additional towers are paralleled as the engineered system design requires. External modules are parallel only and the enclosure is IP40 indoor.",
						categoryTag: "48V family · 5.12kWh",
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
							"48V rack module with 4.8 kWh nominal and 4.56 kWh usable (95% depth of discharge), parallel banks raising capacity and current within the published limits. Widely integrated by AU off-grid installers.",
						categoryTag: "48V rack · value tier",
						source: {
							label: "Pylontech US5000 product page",
							url: "https://en.pylontech.com.cn/products/us5000",
						},
						caveat:
							"Confirm the permitted parallel count and inverter pairing for your exact US5000 revision in the current installation manual.",
					},
					{
						name: "PowerPlus LiFe4851",
						detail:
							"Australian-made 3RU 48V LFP rack battery, UL9540A and UL1973-tested, up to 16 modules in parallel under the published product limits, with managed (CANBus) or self-managed operation.",
						categoryTag: "48V rack · AU-made",
						source: {
							label: "PowerPlus LiFe4851 product page",
							url: "https://www.powerplus-energy.com.au/products/life4851/",
						},
						caveat:
							"STA016 v1.0 names exact Selectronic, SMA, Deye, Solis and SunSynk models; confirm your inverter is on the current declaration.",
					},
				],
			},
			{
				label: "Modular low-voltage stack · external inverter required",
				summary: "Power-wall form factor · external PCE",
				architecture:
					"A 51.2V-class stack built from modules in a dedicated enclosure, connected to a separately purchased external inverter; the battery has no integrated power conversion.",
				buyerConsequence:
					"You get a proven modular stack with a strong global track record, but the inverter pairing and BMS communications must be confirmed model-by-model before purchase.",
				products: [
					{
						name: "BYD Battery-Box Premium LVS",
						detail:
							"LFP, 51.2V modular stack: 1–6 LVS modules per pack for 4–24 kWh usable, and up to 16 packs in parallel for a maximum of 256 kWh. Expansion by adding modules or parallel towers of 1–4 modules.",
						categoryTag: "Modular LV · 4–24 kWh per pack",
						source: {
							label: "BYD Battery-Box Premium LVS",
							url: "https://www.bydbatterybox.com/",
						},
						caveat:
							"LVS is a battery only — an external inverter is required, and the exact inverter model must appear on BYD's current compatibility list.",
					},
				],
			},
			{
				label: "External inverter-charger ecosystem · AU-made premium",
				summary: "Inverter-led design · approved battery list",
				architecture:
					"An Australian-made inverter-charger (Selectronic SP PRO) is the design centre of the system, with the battery chosen from its current approved battery list and tuned via managed or self-managed settings.",
				buyerConsequence:
					"This is the premium AU-made route: outstanding supportability and inverter-led design, but the battery choice is bounded by the approved list and installer skill matters more than anywhere else.",
				products: [
					{
						name: "Selectronic SP PRO + PowerPlus LiFe4838P / LiFe4851",
						detail:
							"Selectronic SP PRO hybrid inverter-charger paired with PowerPlus 48V LFP rack modules (LiFe4851: UL9540A/UL1973-tested, up to 16 modules in parallel). The pairing must sit on the current approved battery list.",
						categoryTag: "Inverter-led ecosystem",
						source: {
							label: "Selectronic approved battery list",
							url: "https://www.selectronic.com.au/kits/approvedbatteries.html",
						},
						caveat:
							"Self-managed means installer-entered manufacturer settings, not plug-and-play. Confirm SP PRO firmware, battery parameters and grid-connection status for your exact configuration.",
					},
				],
			},
			{
				label: "Integrated packaged system · battery and PCE in one box",
				summary: "Packaged platform · simpler procurement, closed inverter path",
				architecture:
					"The battery, power conversion and controller are sold as one platform. The internal DC architecture still matters to designers, but it is not an open battery-to-inverter choice for the buyer.",
				buyerConsequence:
					"Simpler procurement and a well-known support brand, at the price of inverter flexibility and, usually, chunkier expansion. Suits straightforward sites more than heavy off-grid duty.",
				products: [
					{
						name: "Tesla Powerwall 3",
						detail:
							"Integrated packaged system with 13.5 kWh usable storage and an integrated inverter. One-box simplicity with the inverter path fixed at purchase.",
						categoryTag: "Integrated packaged",
						source: {
							label: "Tesla Powerwall (AU)",
							url: "https://www.tesla.com/en_au/powerwall",
						},
						caveat:
							"The integrated inverter path is not an open battery choice, and expansion means adding whole units. See our [RENOZ vs Powerwall head-to-head](/guides/renoz-vs-powerwall-sigenergy) for the WA detail.",
					},
				],
			},
		],
	},
	proofLinks: [
		{
			label: "CEC approved batteries list",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			external: true,
		},
		{
			label: "CEC — new expiry dates for batteries (SA TS 5398 transition)",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries/new-expiry-dates-batteries-ts5398",
			external: true,
		},
		{
			label: "CEC — battery storage guide for consumers",
			href: "https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf",
			external: true,
		},
		{
			label: "CEC — battery specs change: transitioning to SA TS 5398",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries/battery-specs-change-transitioning-to-ts-5398",
			external: true,
		},
		{
			label: "Cheaper Home Batteries Program",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "PowerPlus LiFe4851 product page",
			href: "https://www.powerplus-energy.com.au/products/life4851/",
			external: true,
		},
		{
			label: "PowerPlus STA016 compatibility declaration",
			href: "https://www.powerplus-energy.com.au/resources/life4851-compatible-inverter-declaration.pdf",
			external: true,
		},
		{
			label: "Selectronic approved battery list",
			href: "https://www.selectronic.com.au/kits/approvedbatteries.html",
			external: true,
		},
		{
			label: "BYD Battery-Box Premium LVS",
			href: "https://www.bydbatterybox.com/",
			external: true,
		},
		{
			label: "Pylontech US5000 product page",
			href: "https://en.pylontech.com.cn/products/us5000",
			external: true,
		},
		{
			label: "Energy Safe Victoria — battery energy storage systems",
			href: "https://www.energysafe.vic.gov.au/battery-storage",
			external: true,
		},
		{
			label: "Standards Australia — AS/NZS 5139:2019 announcement",
			href: "https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector",
			external: true,
		},
		{
			label: "RENOZ LV-5KWH100AH technical specifications",
			href: "/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf",
		},
		{
			label: "Battery sizing for off-grid WA",
			href: "/guides/battery-sizing-off-grid-wa",
		},
		{
			label: "48V vs high-voltage battery systems",
			href: "/guides/48v-vs-high-voltage-battery-system",
		},
		{
			label: "Off-grid battery systems for Perth and WA",
			href: "/guides/off-grid-battery-systems-perth",
		},
		{
			label: "Battery fire suppression essentials",
			href: "/guides/battery-fire-suppression-essential",
		},
		{
			label: "WA battery rebates and CEC checklist",
			href: "/guides/wa-battery-rebates-cec",
		},
	],
	faqHeading: "Off-grid battery questions that deserve straight answers",
	faqs: [
		{
			question: "What is the best off-grid battery in Australia?",
			answer:
				"There isn't one. The right battery is the exact battery-and-inverter configuration that fits your site's energy duty, power spikes, expansion plan, budget and the installer who will design, commission and warrant it. The four paths on this page — 48V rack modules, modular low-voltage stacks, AU-made inverter-charger ecosystems, and integrated packaged systems — each win for different sites. Any list that crowns a single winner is marketing, not engineering.",
		},
		{
			question: "Why does usable kWh matter more than nominal?",
			answer:
				"Nominal kWh is the cell-stack rating; usable kWh is what the BMS lets you draw before the battery stops. The difference is material: RENOZ's LV-5KWH100AH module is [5.12 kWh nominal and 4.61 kWh usable (~90%)](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf), and Pylontech's US5000 is [4.8 kWh nominal and 4.56 kWh usable (95%)](https://en.pylontech.com.cn/products/us5000). Compare usable figures when you size autonomy, check rebate paperwork or compare quotes, or you will overestimate what a system delivers.",
		},
		{
			question: "LFP or lead-acid for an off-grid battery?",
			answer:
				"Lithium iron phosphate (LFP) reaches [roughly 90% usable capacity](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf) versus about 50% for lead-acid in practical off-grid service, with far better cycle life across partial states of charge. That halves the installed capacity a site needs to buy and changes the cost comparison decisively. Lead-acid survives in small, seasonal or temperature-tolerant roles; for serious year-round off-grid duty in 2026, LFP is the baseline.",
		},
		{
			question: "Can a home battery work fully off-grid?",
			answer:
				"Yes, when the system is designed as a stand-alone power system: battery plus inverter-charger sized for the loads, generation and autonomy, designed under AS/NZS 4509.1. Not every “home battery” will do it — many grid-tied units shut down without a grid reference. Confirm the inverter-charger is a multiple-mode unit rated for islanded operation, and that the exact battery-inverter pairing is documented. Our [off-grid systems guide](/guides/off-grid-battery-systems-perth) walks through how these systems actually work.",
		},
		{
			question: "Do I still need a generator with an off-grid battery?",
			answer:
				"For most Australian sites, yes. Batteries reduce generator runtime — often dramatically — but weeks of cloud, winter autonomy or very large surges can still call for diesel- or petrol-assist. The generator decision belongs to the system design: autonomy targets and generator sizing are engineering trade-offs between battery cost and fuel, not something a shortlist resolves.",
		},
		{
			question: "Are there rebates for off-grid batteries?",
			answer:
				"Yes, with an important WA nuance. The federal [Cheaper Home Batteries Program (CHBP)](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries) is available to off-grid systems — grid connection is not a condition, and there is no VPP participation condition for the program. The WA Residential Battery Scheme (WARBS) is grid-connected only and typically requires VPP enrolment, so many truly off-grid properties qualify for CHBP but not WARBS. We deliberately publish no rates or caps — they change and are model-specific — so check the [WA battery rebates checklist](/guides/wa-battery-rebates-cec) and the live program pages before you plan around any figure.",
		},
		{
			question: "Is the RENOZ battery on the CEC approved list?",
			answer:
				"We don't publish a standing approval claim for exact RENOZ models, and you shouldn't trust one from anyone: the CEC list is dynamic, products are added and de-listed, and in January 2026 the expiry dates for [more than 700 products were brought forward](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries/new-expiry-dates-batteries-ts5398). Check the live [CEC approved-batteries list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) for the exact model numbers on your quote, and ask your installer to confirm listing status in writing before you rely on it for rebates or network approval.",
		},
		{
			question: "Which inverter do I pair with a 48V off-grid battery?",
			answer:
				"The inverter-charger is the ecosystem for a 48V-family battery: Selectronic SP PRO and Victron-class multiple-mode units are the common premium paths, with other hybrids pairing where communications and firmware support the exact battery model. The battery must sit on the inverter maker's current approved battery list with firmware and CAN mapping matched. The architecture decision — low voltage versus high voltage — is the thing to settle first, and it has its own [guide](/guides/48v-vs-high-voltage-battery-system).",
		},
	],
	closing: {
		heading: "Shortlist on architecture, verify on paper",
		body: "Pick the architecture path that fits your site's energy and power duty first, then verify the exact models against the live CEC list, the inverter maker's approved battery list, and your installer's scope. Confident off-grid design is boring on purpose: documented configurations, qualified installers, and commissioning against the standards.",
	},
	cta: {
		primaryLabel: "Get a RENOZ system design for your site",
		primaryTo: "/contact",
		secondaryLabel: "See rural & off-grid storage",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};