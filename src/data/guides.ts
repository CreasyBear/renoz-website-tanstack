/**
 * Unlisted decision guides.
 * Discoverable via sitemap + llms.txt + JSON-LD — not via Header/Footer/homepage.
 */

/** Shared LV stackable platform facts (quote these; verify inverter/BMS limits per design). */
export const LV_PLATFORM = {
	moduleKwh: 5.12,
	maxModulesPerTower: 8,
	maxTowersParallel: 6,
	model: "LV-5KWH100AH",
} as const;

export type GuideFaq = {
	question: string;
	answer: string;
};

export type GuideSection = {
	heading: string;
	body: string[];
};

export type GuideDecisionColumn = {
	name: string;
	highlight?: boolean;
	cells: string[];
};

export type GuideCta = {
	primaryLabel: string;
	primaryTo:
		| "/contact"
		| "/resources"
		| "/products/residential"
		| "/products/rural"
		| "/products/commercial";
	secondaryLabel?: string;
	secondaryTo?:
		| "/contact"
		| "/resources"
		| "/products/residential"
		| "/products/rural"
		| "/products/commercial"
		| "/case-studies/harvey-farm"
		| "/partners"
		| "/partners/capability-statement"
		| "/about";
};

export type GuideProofLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type Guide = {
	slug: string;
	title: string;
	description: string;
	h1: string;
	updated: string;
	claimsPending: boolean;
	directAnswer: string;
	decisionRowLabels: string[];
	decisionColumns: GuideDecisionColumn[];
	sections: GuideSection[];
	proofLinks: GuideProofLink[];
	faqs: GuideFaq[];
	cta: GuideCta;
	/** Product paths for schema/about only — never rendered as guide-to-guide nav */
	relatedProductPaths: string[];
	/** When set, page shows pairing chrome + LV capacity ladder */
	pairingPartner?: "Victron" | "Selectronic" | "Deye" | "GoodWe / Sungrow";
	eyebrow?: string;
	showCapacityLadder?: boolean;
};

export const guides: Guide[] = [
	{
		slug: "wa-battery-rebates-cec",
		title: "WA Battery Rebates and CEC Approval: How RENOZ Fits",
		description:
			"How CEC listing, Synergy/Horizon supported solutions, and the WA Residential Battery Scheme interact — and what to verify before you buy.",
		h1: "Battery rebates in WA: CEC, Synergy/Horizon, and what to check",
		updated: "2026-07-20",
		claimsPending: true,
		directAnswer:
			"In Western Australia, rebate-ready home batteries sit on three layers: (1) the battery must appear on the Clean Energy Council approved batteries list, (2) the inverter/solution must sit on your retailer’s Supported Solutions List (Synergy or Horizon) for VPP participation, and (3) installation must go through a Plenti-accredited vendor under the WA Residential Battery Scheme. Federal Cheaper Home Batteries sits alongside, not instead of, those WA gates. Always verify live listings and dollar amounts on government sources before signing a quote — do not rely on marketing copy alone.",
		decisionRowLabels: [
			"What it covers",
			"Who applies",
			"Battery requirement",
			"Inverter / solution requirement",
			"Verify before signing",
		],
		decisionColumns: [
			{
				name: "CEC approved batteries",
				cells: [
					"National product safety/quality listing",
					"N/A — product must already be listed",
					"Exact brand/model string on CEC register",
					"Inverters have separate CEC lists",
					"Search CEC register for exact model",
				],
			},
			{
				name: "Synergy / Horizon SSL",
				highlight: true,
				cells: [
					"Retailer VPP / scheme technical pathway",
					"Vendor confirms compatibility",
					"Modules CEC-listed; solution on SSL",
					"Inverter must be on retailer SSL for your network",
					"Check live Synergy or Horizon list for your address",
				],
			},
			{
				name: "Plenti WA scheme vendor",
				cells: [
					"WA rebate / no-interest loan administration",
					"Accredited vendor applies on your behalf",
					"Scheme-eligible goods via approved vendor",
					"Vendor ensures compatible package",
					"Confirm vendor is on Plenti directory",
				],
			},
		],
		sections: [
			{
				heading: "Federal Cheaper Home Batteries",
				body: [
					"The federal program reduces upfront cost for eligible CEC-approved home batteries installed by accredited installers. Rates, tiers, and size caps change — treat any dollar figure as date-stamped and verify on Clean Energy Regulator / program pages before quoting.",
					"Federal support does not replace WA scheme rules. A system can be federally eligible and still miss Synergy/Horizon SSL or Plenti vendor requirements.",
				],
			},
			{
				heading: "WA Residential Battery Scheme",
				body: [
					"The WA scheme is administered with Plenti. Households do not typically lodge the rebate application themselves — an accredited vendor does. Synergy and Horizon customers face different rebate ceilings; confirm current amounts on wa.gov.au.",
					"Expect VPP participation and ongoing internet connectivity requirements. Inverters must appear on the relevant Supported Solutions List; battery modules must be CEC-approved.",
				],
			},
			{
				heading: "Where RENOZ fits",
				body: [
					"RENOZ publishes modular LV stackable storage engineered in Perth. CEC listing status and any Synergy/Horizon SSL pathway must be confirmed on live official lists before anyone claims “rebate eligible” for a specific RENOZ + inverter package.",
					"Use /resources for datasheets and declarations, and ask RENOZ or a Plenti-accredited partner to confirm the exact CEC model strings and SSL pairs for your quote.",
				],
			},
			{
				heading: "Checklist before signing a quote",
				body: [
					"Exact CEC battery model string matches the quote.",
					"Inverter/solution appears on Synergy or Horizon SSL for your network.",
					"Installer/vendor is on the Plenti WA scheme directory.",
					"Federal and WA dollar amounts are dated and linked to gov sources.",
					"VPP and internet requirements are explained in writing.",
				],
			},
		],
		proofLinks: [
			{
				label: "WA Residential Battery Scheme (wa.gov.au)",
				href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
				external: true,
			},
			{
				label: "CEC approved batteries",
				href: "https://www.cleanenergycouncil.org.au/industry-programs/products-program/batteries",
				external: true,
			},
			{
				label: "RENOZ resources / evidence pack",
				href: "/resources",
			},
			{
				label: "Residential products",
				href: "/products/residential",
			},
		],
		faqs: [
			{
				question: "Do I apply for the WA battery rebate myself?",
				answer:
					"Usually no. Under the WA Residential Battery Scheme, an accredited Plenti vendor applies on your behalf after you accept a quote for an eligible system.",
			},
			{
				question: "Is CEC listing enough for the WA scheme?",
				answer:
					"No. The battery must be CEC-approved, and the inverter/solution must appear on Synergy or Horizon Supported Solutions Lists for your network, with installation via an accredited vendor.",
			},
			{
				question: "Is RENOZ rebate-eligible?",
				answer:
					"Only claim eligibility after verifying live CEC model strings and any required SSL pairs for the proposed package. Ask RENOZ or your installer to confirm against current official lists.",
			},
			{
				question: "Where do I verify dollar amounts?",
				answer:
					"Use wa.gov.au for WA scheme amounts and federal program pages for Cheaper Home Batteries. Ignore undated marketing figures.",
			},
		],
		cta: {
			primaryLabel: "Talk to RENOZ about a verified pathway",
			primaryTo: "/contact",
			secondaryLabel: "Browse technical resources",
			secondaryTo: "/resources",
		},
		relatedProductPaths: ["/products/residential"],
	},
	{
		slug: "renoz-vs-powerwall-sigenergy",
		title: "RENOZ vs Tesla Powerwall vs Sigenergy for WA Homes",
		description:
			"Honest WA comparison of modular OEM storage vs Powerwall 3 and SigenStor — capacity, inverter path, local support, rebates, and who each fits.",
		h1: "RENOZ vs Powerwall vs Sigenergy: which fits a WA home?",
		updated: "2026-07-20",
		claimsPending: true,
		directAnswer:
			"Tesla Powerwall and Sigenergy SigenStor are all-in-one architectures (inverter + battery in one product family). RENOZ is a modular low-voltage battery OEM: you pair capacity with a chosen hybrid inverter path and local engineering support from Perth. Choose Powerwall for single-phase simplicity and brand ecosystem; Sigenergy for modular all-in-one stacking and three-phase/EV-oriented packages; RENOZ when you want expandable modular storage, inverter choice (including retrofit paths), and a Western Australian OEM support model. Rebate eligibility still depends on CEC + retailer lists — verify before purchase.",
		decisionRowLabels: [
			"Architecture",
			"Capacity style",
			"Inverter path",
			"Phase / backup fit",
			"Local OEM support",
			"Best when…",
		],
		decisionColumns: [
			{
				name: "Tesla Powerwall",
				cells: [
					"All-in-one",
					"Fixed increments (e.g. 13.5 kWh class)",
					"Integrated",
					"Strong single-phase simplicity",
					"Global brand; installer network",
					"You want one-box brand simplicity",
				],
			},
			{
				name: "Sigenergy SigenStor",
				cells: [
					"All-in-one modular stack",
					"Stack modules in brand ecosystem",
					"Integrated / brand stack",
					"Strong 3-phase / EV module story",
					"Global brand; dense installer SEO",
					"You want modular all-in-one + EV options",
				],
			},
			{
				name: "RENOZ",
				highlight: true,
				cells: [
					"Modular LV OEM + chosen inverter",
					"5.12 kWh modules; ≤8/tower; ≤6 towers parallel",
					"Victron / Selectronic / Deye (+ GoodWe, Sungrow)",
					"Flexible with inverter selection",
					"Perth OEM engineering support",
					"You want modular OEM + local support",
				],
			},
		],
		sections: [
			{
				heading: "Architecture difference",
				body: [
					"All-in-ones bundle power conversion and storage. That simplifies purchasing when the brand stack fits your home. Modular OEM storage separates the battery from the inverter choice — useful for retrofits and for sites that need capacity ladders beyond a single SKU mindset.",
					"Neither approach is universally “best.” Match architecture to phase, expansion plans, EV plans, and who you want on the phone when something fails.",
				],
			},
			{
				heading: "WA heat and support",
				body: [
					"Western Australian heat, fringe-of-grid feeders, and distance to support change the decision. A Perth-based OEM can put engineering closer to the install — that is a different promise than a global call centre, but it must be backed by real response paths, not slogans.",
					"Ask every quote for warranty claim path, spare parts path, and who diagnoses inverter vs battery faults.",
				],
			},
			{
				heading: "Rebates and lists",
				body: [
					"Federal and WA rebates care about CEC listings and retailer supported solutions — not brand fame. See the WA rebates / CEC guide for the three-layer checklist. Do not assume any brand is scheme-eligible without checking live lists for the exact models on the quote.",
				],
			},
		],
		proofLinks: [
			{
				label: "Residential products",
				href: "/products/residential",
			},
			{
				label: "Technical resources",
				href: "/resources",
			},
			{
				label: "Case studies",
				href: "/case-studies",
			},
			{
				label: "WA Residential Battery Scheme (wa.gov.au)",
				href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
				external: true,
			},
		],
		faqs: [
			{
				question: "Can I retrofit a battery to existing solar?",
				answer:
					"Often yes, via AC-coupled or compatible hybrid paths — or by moving to an all-in-one. Compatibility depends on your current inverter. RENOZ publishes inverter compatibility resources; verify models before ordering.",
			},
			{
				question: "Which is better for three-phase Perth homes?",
				answer:
					"It depends on backup and inverter design. Many Perth comparisons favour Sigenergy for native three-phase all-in-one backup stories; Powerwall is often framed for single-phase simplicity. RENOZ pairs with three-phase-capable hybrids — confirm the full package with your installer.",
			},
			{
				question: "Do all three qualify for rebates?",
				answer:
					"Only if the exact products and inverter solutions meet CEC and Synergy/Horizon requirements and are installed via an eligible pathway. Verify per quote.",
			},
		],
		cta: {
			primaryLabel: "Get a system design conversation",
			primaryTo: "/contact",
			secondaryLabel: "See residential storage",
			secondaryTo: "/products/residential",
		},
		relatedProductPaths: ["/products/residential"],
	},
	{
		slug: "diesel-to-battery-wa-farms",
		title: "Replace Diesel Generators with Solar + Battery on WA Farms",
		description:
			"When solar + BESS beats diesel or expensive grid connection for WA farms and stations — with real RENOZ project context.",
		h1: "Diesel vs solar + battery for WA farms",
		updated: "2026-07-20",
		claimsPending: true,
		directAnswer:
			"Solar + battery energy storage wins on WA farms when diesel litres, maintenance, noise, and logistics cost more than a properly sized hybrid system — or when a Western Power connection quote is so high that a microgrid is the rational CapEx. Keep diesel as backup for edge cases unless the site is designed for hydrocarbons-off daytime operation. RENOZ rural modular storage is aimed at farms, stations, and fringe-of-grid properties that need local engineering support and expandable kWh — validate economics with site load data and published case metrics, not generic payback claims.",
		decisionRowLabels: [
			"Primary driver",
			"Keep diesel?",
			"Typical building blocks",
			"Proof to demand",
			"Next step",
		],
		decisionColumns: [
			{
				name: "High diesel spend",
				cells: [
					"Fuel + service cost",
					"Often as backup only",
					"Solar + BESS + charger/inverter",
					"Litres/year and runtime logs",
					"Rural system design",
				],
			},
			{
				name: "Grid quote shock",
				highlight: true,
				cells: [
					"Connection CapEx avoidance",
					"Optional backup gen",
					"Off-grid or hybrid microgrid",
					"Quote vs BESS CapEx comparison",
					"Site assessment",
				],
			},
			{
				name: "Resilience / fringe-of-grid",
				cells: [
					"Outages / weak feeder",
					"As required",
					"Larger usable kWh + hybrid",
					"Outage history + load profile",
					"Rural / residential consult",
				],
			},
		],
		sections: [
			{
				heading: "When BESS beats diesel",
				body: [
					"Compare annual diesel litres and maintenance against solar + battery CapEx and OPEX. Include generator hire/replacement risk and labour to refuel remote sites. Noise and emissions matter for dwellings and staff accommodation.",
					"If the alternative is a six-figure grid connection, model BESS + solar against that quote with realistic autonomy days — not brochure payback alone.",
				],
			},
			{
				heading: "System building blocks",
				body: [
					"Most farm hybrids combine PV, modular 48 V battery kWh, a hybrid inverter/charger, and optionally a diesel generator for backup. RENOZ LV modules (5.12 kWh) pair especially well with Victron, Selectronic, and Deye-class 48 V inverter-chargers — the class that handles genset assist and motor surge better when sized correctly.",
					"Capacity ladder: up to 8 modules in one tower (~41 kWh) and up to 6 towers in parallel for larger sites. Sizing must still cover pumps, cold rooms, workshops, and overnight depth-of-discharge — exact kWh is site-specific.",
				],
			},
			{
				heading: "Case proof",
				body: [
					"Use published RENOZ case studies (for example Harvey farm) for before/after narrative and any disclosed metrics. Prefer scorecards with location, kWh, and installer quotes over marketing adjectives.",
					"External corroboration of regional resilience demand includes trade press coverage of peri-urban and regional storage — cite named articles, don’t invent statistics.",
				],
			},
		],
		proofLinks: [
			{
				label: "Harvey farm case study",
				href: "/case-studies/harvey-farm",
			},
			{
				label: "Rural products",
				href: "/products/rural",
			},
			{
				label: "ESS News — regional resilience (Jul 2026)",
				href: "https://www.ess-news.com/2026/07/14/battery-storage-supports-energy-resilience-in-regional-australia/",
				external: true,
			},
			{
				label: "Contact rural design",
				href: "/contact",
			},
		],
		faqs: [
			{
				question: "Should we remove the diesel generator entirely?",
				answer:
					"Many sites keep diesel as backup for low-sun or maintenance windows. Full hydrocarbons-off daytime operation needs careful sizing and controls — design it explicitly rather than assuming.",
			},
			{
				question: "What if our grid connection quote is very high?",
				answer:
					"Compare the connection CapEx to a solar + BESS hybrid with optional generator. Ask for a site assessment with load logs and autonomy targets.",
			},
			{
				question: "What size battery do farms need?",
				answer:
					"It depends on pumps, cold storage, workshop loads, and overnight coverage. Start from measured loads, not a single “standard” kWh. Rural RENOZ systems are modular so capacity can grow.",
			},
		],
		cta: {
			primaryLabel: "Request a rural system design",
			primaryTo: "/contact",
			secondaryLabel: "Read Harvey farm case",
			secondaryTo: "/case-studies/harvey-farm",
		},
		relatedProductPaths: ["/products/rural"],
	},
	{
		slug: "renoz-with-victron",
		title: "RENOZ Batteries with Victron 48V Inverter-Chargers",
		description:
			"How RENOZ 5.12 kWh LV modules pair with Victron MultiPlus / Quattro systems for off-grid, diesel-assist, and high-surge WA sites.",
		h1: "RENOZ + Victron: modular LV storage for serious 48V systems",
		updated: "2026-07-20",
		claimsPending: true,
		pairingPartner: "Victron",
		eyebrow: "48V pairing guide · Off-grid & diesel-assist",
		showCapacityLadder: true,
		directAnswer:
			"RENOZ LV stackable modules (5.12 kWh each) are a natural partner for Victron 48 V inverter-chargers — MultiPlus, Quattro, and related Cerbo-managed systems. Victron brings proven genset assist, transfer, and surge behaviour; RENOZ brings Perth-built modular capacity you can grow: up to 8 modules in one tower and up to 6 towers in parallel. Use this path when pumps, workshops, fringe-of-grid homes, or diesel reduction need a battery that scales independently of the inverter brand ecosystem. Always verify the exact Victron model, firmware, and RENOZ BMS communication path with the published compatibility declaration before ordering.",
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
					"Off-grid, marine-grade reliability mindset, diesel-assist",
					"48 V inverter-charger + modular LV battery",
					"Strong when LF MultiPlus/Quattro sized for LRA",
					"Native assist / charge / pass-through workflows",
					"5.12 kWh modules → ≤8/tower → ≤6 parallel",
					"Confirm BMS protocol + DC cable/BMS surge amps",
				],
			},
			{
				name: "All-in-one brand stack",
				cells: [
					"Simple suburban one-box purchase",
					"Inverter + battery locked to one brand",
					"Depends on brand soft-start story",
					"Often weaker diesel-hybrid story",
					"Fixed SKU ladders",
					"Harder to keep inverter when expanding kWh",
				],
			},
			{
				name: "Cheap HF AIO alone",
				cells: [
					"Budget grid-tied hybrid",
					"High-frequency electronics + small magnetics",
					"Often weak sustained motor surge",
					"Generator quality sensitive",
					"Marketing “2× surge” may be milliseconds",
					"May need soft-start or oversize heavily",
				],
			},
		],
		sections: [
			{
				heading: "Why this pairing works",
				body: [
					"Victron’s MultiPlus / Quattro class is built around inverter-charger workflows: island, assist a weak AC source, charge from a generator, and survive inductive starts when the DC path is healthy. RENOZ supplies the modular 48 V energy store those workflows need — without forcing you into a closed battery SKU from the inverter brand.",
					"For WA farms and fringe sites, that separation matters. You can size Victron for continuous power and surge, then grow RENOZ kWh as loads (pumps, cold rooms, EV, workshops) expand.",
				],
			},
			{
				heading: "Capacity ladder (quote this)",
				body: [
					"Each RENOZ LV module is 5.12 kWh (LV-5KWH100AH class). Stack up to 8 modules in one tower (≈40.96 kWh). Parallel up to 6 towers for larger systems (design ceiling ≈245.8 kWh before other limits).",
					"Never exceed what the Victron unit, BMS, and cable set can deliver on surge — a MultiPlus that “should” start a pump will still fail if the battery bank or lugs sag under Locked Rotor Amps.",
				],
			},
			{
				heading: "Design checklist",
				body: [
					"Nameplate continuous and surge ratings for the Victron model vs pump/compressor LRA.",
					"48 V bus cable size, fuse, and voltage drop under start current.",
					"BMS communication / contactor behaviour per RENOZ compatibility statement.",
					"Generator size and frequency stability if using charge + PowerAssist-style assist.",
					"Soft-start or VFD for large DOL pumps if surge window is tight.",
					"CEC / retailer list checks if any rebate pathway applies — do not invent eligibility.",
				],
			},
			{
				heading: "When to choose something else",
				body: [
					"If you want a single suburban SKU with integrated backup and no diesel story, an all-in-one (Powerwall / Sigenergy class) can be simpler.",
					"If your site is already locked to Selectronic or Deye hardware, pair RENOZ with that inverter instead of forcing a Victron swap — see the dedicated pairing guides for those platforms.",
				],
			},
		],
		proofLinks: [
			{
				label: "Inverter compatibility declaration",
				href: "/resources",
			},
			{
				label: "Residential LV products",
				href: "/products/residential",
			},
			{
				label: "Rural / off-grid products",
				href: "/products/rural",
			},
			{
				label: "Harvey farm case study",
				href: "/case-studies/harvey-farm",
			},
			{
				label: "Victron inverter/charger overview (vendor)",
				href: "https://www.victronenergy.com/inverters-chargers/help-me-choose",
				external: true,
			},
		],
		faqs: [
			{
				question: "Are RENOZ batteries “Victron approved”?",
				answer:
					"Treat approval as model-and-firmware specific. Use the RENOZ inverter compatibility declaration on /resources and confirm the exact MultiPlus/Quattro model with your installer before claiming a supported pair.",
			},
			{
				question: "How many modules do I need for a Victron 5 kVA system?",
				answer:
					"Size kWh from overnight loads and autonomy, not from inverter VA alone. Start from measured loads, then pick a tower of 5.12 kWh modules (max 8 per tower). Parallel towers only when energy — not just power — requires it.",
			},
			{
				question: "Will Victron + RENOZ start my bore pump?",
				answer:
					"Maybe — if surge duration, LRA, DC cabling, and BMS limits all clear. Soft-start pumps or soft starters often decide success more than brand names. Clamp-measure start current when possible.",
			},
			{
				question: "Can I keep my diesel generator?",
				answer:
					"Yes in many designs: Victron inverter-chargers are commonly used to charge from and assist generators while RENOZ covers daily cycling. Keep diesel as backup unless the site is designed for hydrocarbons-off daytime operation.",
			},
		],
		cta: {
			primaryLabel: "Talk through a Victron + RENOZ design",
			primaryTo: "/contact",
			secondaryLabel: "Download technical pack",
			secondaryTo: "/resources",
		},
		relatedProductPaths: ["/products/residential", "/products/rural"],
	},
	{
		slug: "renoz-with-selectronic",
		title: "RENOZ Batteries with Selectronic Off-Grid Inverters",
		description:
			"Pair Perth-built RENOZ 5.12 kWh LV modules with Selectronic SP PRO-class systems for Australian off-grid and hybrid sites.",
		h1: "RENOZ + Selectronic: Australian off-grid battery pairing",
		updated: "2026-07-20",
		claimsPending: true,
		pairingPartner: "Selectronic",
		eyebrow: "48V pairing guide · Australian off-grid",
		showCapacityLadder: true,
		directAnswer:
			"Selectronic has long been the Australian language of serious off-grid and hybrid control — SP PRO-class inverter-chargers, generator integration, and installer-familiar commissioning. RENOZ LV modules (5.12 kWh) give that ecosystem a modular, Perth-engineered 48 V battery: stack up to 8 modules per tower and parallel up to 6 towers when the site needs more kWh. Choose this pairing when you want an Australian inverter culture plus a local OEM battery, not an imported all-in-one. Verify the exact Selectronic model and RENOZ BMS settings against the live compatibility declaration — do not assume every firmware revision matches.",
		decisionRowLabels: [
			"Best for",
			"Why Selectronic",
			"Why RENOZ",
			"Capacity",
			"Diesel / hybrid",
			"Proof to demand",
		],
		decisionColumns: [
			{
				name: "Selectronic + RENOZ",
				highlight: true,
				cells: [
					"AU off-grid homes, farms, hybrid with generator",
					"Local installer literacy + off-grid control heritage",
					"Modular WA OEM battery with local engineering support",
					"5.12 kWh · ≤8/tower · ≤6 parallel",
					"Mature genset / hybrid workflows",
					"Compat declaration + site load logs + case studies",
				],
			},
			{
				name: "Imported all-in-one",
				cells: [
					"Simple metro installs",
					"Brand ecosystem & app",
					"Battery locked to inverter brand",
					"Fixed capacity steps",
					"Weaker AU off-grid tradition",
					"Installer brand pages dominate SERPs",
				],
			},
			{
				name: "Generic HF hybrid",
				cells: [
					"Budget grid-tied storage",
					"Low upfront hardware cost",
					"Commodity battery pairing",
					"Often underspec’d for motors",
					"Generator interaction varies",
					"Short surge windows common",
				],
			},
		],
		sections: [
			{
				heading: "The Australian off-grid pattern",
				body: [
					"Selectronic systems show up wherever installers have been doing true off-grid and generator-hybrid work for years. The control philosophy — manage AC sources, protect batteries, survive ugly loads — is why the brand sticks on stations and rural homes.",
					"RENOZ fits that pattern as the battery layer: LiFePO₄ modules engineered in Perth, documented for installers, and expandable without replacing the Selectronic brain of the system.",
				],
			},
			{
				heading: "Sizing the RENOZ side",
				body: [
					"Quote the ladder clearly: 5.12 kWh modules; maximum 8 in one tower; maximum 6 towers in parallel. That is the architectural ceiling — your Selectronic continuous rating, BMS, and switchboard still govern what you may legally and safely install.",
					"For pumping and workshop sites, energy (kWh) and power (kW/surge) are different problems. Selectronic handles conversion and source control; RENOZ must hold enough usable kWh at the depth of discharge your design allows.",
				],
			},
			{
				heading: "Commissioning discipline",
				body: [
					"Charge voltages, contactor behaviour, and communication settings must match RENOZ documentation — not a generic “LiFePO₄ 48 V” profile copied from another brand.",
					"Ask for a commissioning sheet: Selectronic model/firmware, RENOZ module count and serials, cable sizes, generator make, and measured pump start current if pumps are critical loads.",
				],
			},
			{
				heading: "When Selectronic is not the answer",
				body: [
					"Metro homes chasing rebate-driven all-in-ones may be better on a retailer-listed hybrid path — verify CEC and Synergy/Horizon lists separately.",
					"If the site already standardises on Victron or Deye, keep the inverter ecosystem consistent and pair RENOZ there instead of mixing control brands without a reason.",
				],
			},
		],
		proofLinks: [
			{
				label: "Technical resources & declarations",
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
				label: "Case studies",
				href: "/case-studies",
			},
			{
				label: "Partners / capability",
				href: "/partners",
			},
		],
		faqs: [
			{
				question: "Is Selectronic still relevant vs modern hybrids?",
				answer:
					"For many Australian off-grid and generator-hybrid sites, yes — installer familiarity and control behaviour matter more than trendy all-in-one marketing. For pure suburban rebate installs, other hybrids may win on simplicity and lists.",
			},
			{
				question: "How big can a RENOZ bank get on Selectronic?",
				answer:
					"Architecturally: 5.12 kWh modules, up to 8 per tower, up to 6 towers in parallel. Practically: whatever the Selectronic model, BMS, and electrical design allow. Design from loads upward.",
			},
			{
				question: "Can we AC-couple existing solar?",
				answer:
					"Often yes on hybrid/off-grid architectures, but coupling mode depends on the Selectronic configuration and existing inverters. Treat it as a design question, not a checkbox.",
			},
			{
				question: "Where do I verify compatibility?",
				answer:
					"Start with the RENOZ inverter compatibility declaration on /resources, then confirm with RENOZ or an accredited installer for the exact Selectronic model and firmware on the quote.",
			},
		],
		cta: {
			primaryLabel: "Plan a Selectronic + RENOZ system",
			primaryTo: "/contact",
			secondaryLabel: "Partner pathways",
			secondaryTo: "/partners",
		},
		relatedProductPaths: ["/products/rural", "/products/residential"],
	},
	{
		slug: "renoz-with-deye",
		title: "RENOZ Batteries with Deye 48V Hybrid Inverters",
		description:
			"How modular RENOZ LV storage works with Deye-class 48V hybrids for WA retrofits, new builds, and expandable home/farm batteries.",
		h1: "RENOZ + Deye: expandable 48V hybrid storage",
		updated: "2026-07-20",
		claimsPending: true,
		pairingPartner: "Deye",
		eyebrow: "48V pairing guide · Hybrid & retrofit",
		showCapacityLadder: true,
		directAnswer:
			"Deye-class 48 V hybrid inverters are everywhere in the installer channel: capable hybrids, competitive pricing, and a wide model ladder. RENOZ LV modules (5.12 kWh) give that platform a modular WA OEM battery instead of a locked imported pack — stack up to 8 modules in a tower and parallel up to 6 towers when the site needs more energy. Use this pairing for new hybrids and many retrofit conversations where the inverter stays Deye and the battery must grow with the house or farm. Confirm closed-loop BMS support and CEC/list status for the exact Deye model before anyone markets “compatible” or “rebate ready.”",
		decisionRowLabels: [
			"Best for",
			"Battery freedom",
			"Surge reality",
			"Retrofit path",
			"Capacity ladder",
			"Do this before signing",
		],
		decisionColumns: [
			{
				name: "Deye + RENOZ",
				highlight: true,
				cells: [
					"Hybrid homes/farms wanting expandable OEM kWh",
					"Keep Deye inverter; grow RENOZ modules",
					"Check model surge window; soft-start big motors",
					"Common when Deye already on the wall",
					"5.12 kWh · ≤8/tower · ≤6 parallel",
					"Compat declaration + CEC/SSL if claiming rebates",
				],
			},
			{
				name: "Deye + brand pack",
				cells: [
					"Fast quote with OEM pack SKU",
					"Battery tied to inverter brand pack",
					"As per pack datasheet",
					"Simple SKU logistics",
					"Fixed pack sizes",
					"Still verify lists for rebates",
				],
			},
			{
				name: "All-in-one swap",
				cells: [
					"Rip-and-replace whole system",
					"Single brand stack",
					"Brand-dependent",
					"May discard working hybrid",
					"Brand capacity steps",
					"Compare total CapEx vs keeping Deye",
				],
			},
		],
		sections: [
			{
				heading: "What “pairs well” actually means",
				body: [
					"It means a practical 48 V architecture: Deye handles PV hybrid conversion and grid/backup behaviour; RENOZ supplies modular LiFePO₄ capacity with local documentation and support. It does not mean every Deye SKU worldwide is pre-certified with every RENOZ firmware — that is why the compatibility declaration exists.",
					"Installers like this split when customers already own a Deye hybrid or want hybrid features without moving to Tesla/Sigenergy all-in-ones.",
				],
			},
			{
				heading: "Motors, pumps, and HF honesty",
				body: [
					"Many popular hybrids are high-frequency designs. They can be excellent grid hybrids and still struggle with long motor inrush if undersized or if surge is only milliseconds. For bore pumps and compressors, measure LRA, consider soft-start, and size the Deye model for real surge duration — or step up to a Victron/Selectronic-class inverter-charger when diesel-assist and industrial loads dominate.",
					"RENOZ cannot fix an undersized inverter. It can give you the kWh ladder once power conversion is correctly chosen.",
				],
			},
			{
				heading: "Capacity planning with 5.12 kWh modules",
				body: [
					"Plan in modules clients understand: one module = 5.12 kWh. A full tower is up to 8 modules (≈40.96 kWh). Larger sites may parallel up to 6 towers. Show that ladder on the quote so expansion is obvious.",
					"Match usable kWh to evening/morning loads and backup hours; match inverter kW to simultaneous loads and motor starts.",
				],
			},
			{
				heading: "Rebate and list discipline",
				body: [
					"If the sale depends on federal or WA incentives, verify CEC battery listing and any Synergy/Horizon supported solution requirements for the full package — inverter + battery + installer pathway. Modular OEM pairs are not automatically scheme-eligible because the brands “work together” electrically.",
				],
			},
		],
		proofLinks: [
			{
				label: "Resources / compatibility PDFs",
				href: "/resources",
			},
			{
				label: "Residential products",
				href: "/products/residential",
			},
			{
				label: "Rural products",
				href: "/products/rural",
			},
			{
				label: "Contact design desk",
				href: "/contact",
			},
		],
		faqs: [
			{
				question: "Can I add RENOZ to an existing Deye hybrid?",
				answer:
					"Often that is the point of a modular 48 V battery — but only if the specific Deye model supports the battery communication/settings RENOZ requires. Check the compatibility declaration and installer guidance before buying modules.",
			},
			{
				question: "How many modules for a typical Perth home?",
				answer:
					"Many homes land in a multi-module tower rather than a single 5 kWh pack — commonly aiming at evening coverage and backup. Use load data; the platform allows up to 8 modules per tower if the inverter and switchboard allow.",
			},
			{
				question: "Deye vs Victron with RENOZ — which should I pick?",
				answer:
					"Deye-class hybrids excel at grid-tied hybrid and many residential/farm hybrids. Victron (and Selectronic) often win when generator assist, off-grid discipline, and heavy inductive loads are central. Pick the inverter for the electrical job; pick RENOZ for modular WA OEM capacity.",
			},
			{
				question: "Is parallel of 6 towers common?",
				answer:
					"It is the architectural maximum, not a typical home install. Most residential systems stay within one tower. Parallel towers appear on larger rural, commercial-leaning, or multi-building sites — always engineered.",
			},
		],
		cta: {
			primaryLabel: "Confirm a Deye + RENOZ package",
			primaryTo: "/contact",
			secondaryLabel: "See residential storage",
			secondaryTo: "/products/residential",
		},
		relatedProductPaths: ["/products/residential", "/products/rural"],
	},
	{
		slug: "renoz-with-goodwe-sungrow",
		title: "RENOZ Batteries with GoodWe or Sungrow Inverters",
		description:
			"How modular RENOZ 5.12 kWh LV storage works with common GoodWe and Sungrow hybrids — retrofit path, new builds, and when an all-in-one is simpler.",
		h1: "RENOZ + GoodWe / Sungrow: retrofit and new-build paths",
		updated: "2026-07-20",
		claimsPending: true,
		pairingPartner: "GoodWe / Sungrow",
		eyebrow: "48V pairing guide · Hybrid retrofit",
		showCapacityLadder: true,
		directAnswer:
			"GoodWe and Sungrow hybrids dominate installer quotes across Australia. RENOZ LV modules (5.12 kWh) let you keep that inverter pathway and still grow capacity like an OEM: up to 8 modules in one tower and up to 6 towers in parallel. Use this for new hybrid builds and many retrofits where the hybrid stays and the battery must expand with the home. Always verify the exact GoodWe or Sungrow model against the RENOZ compatibility declaration and any CEC / retailer lists before claiming a supported or rebate-ready package.",
		decisionRowLabels: [
			"Best for",
			"Keep inverter?",
			"Battery story",
			"Capacity ladder",
			"vs all-in-one",
			"Verify before signing",
		],
		decisionColumns: [
			{
				name: "GoodWe/Sungrow + RENOZ",
				highlight: true,
				cells: [
					"Homes/farms with hybrid already chosen or installed",
					"Yes — pair modular LV battery",
					"WA OEM modules; local engineering support",
					"5.12 kWh · ≤8/tower · ≤6 parallel",
					"Keep hybrid freedom; expand kWh independently",
					"Compat PDF + CEC/SSL if rebates matter",
				],
			},
			{
				name: "Brand battery pack",
				cells: [
					"Fast SKU quote with inverter brand pack",
					"Yes — locked to brand pack",
					"Importer pack sizes",
					"Fixed pack steps",
					"Simpler logistics; less OEM choice",
					"Still check lists for rebates",
				],
			},
			{
				name: "Rip-and-replace all-in-one",
				cells: [
					"Want one-brand stack (Powerwall/Sigenergy class)",
					"No — replace hybrid path",
					"Integrated battery",
					"Brand capacity steps",
					"Simplest consumer story",
					"Compare CapEx vs keeping working hybrid",
				],
			},
		],
		sections: [
			{
				heading: "Retrofit vs new build",
				body: [
					"Retrofit: if a GoodWe or Sungrow hybrid is already on the wall and healthy, adding a modular 48 V battery can beat ripping the system out for an all-in-one — provided communication settings and electrical limits match.",
					"New build: choose the hybrid for PV/grid behaviour you want, then size RENOZ modules for evening loads and backup hours. Do not size the battery from inverter marketing alone.",
				],
			},
			{
				heading: "Compatibility discipline",
				body: [
					"“Works with GoodWe/Sungrow” is not a blank cheque. Use the published inverter compatibility declaration on /resources, confirm firmware and BMS mode with the installer, and write the exact model strings on the quote.",
					"If federal or WA rebates are part of the sale, verify CEC battery listing and any Synergy/Horizon supported-solution requirements for the full package.",
				],
			},
			{
				heading:
					"When to choose Victron, Selectronic, or an all-in-one instead",
				body: [
					"Heavy diesel-assist, true off-grid, or nasty motor starts often favour Victron or Selectronic inverter-chargers with the same RENOZ LV bank.",
					"Buyers who want one-box suburban simplicity may prefer Powerwall or Sigenergy — compare architecture, not slogans.",
				],
			},
		],
		proofLinks: [
			{
				label: "Resources / compatibility PDFs",
				href: "/resources",
			},
			{
				label: "Residential products",
				href: "/products/residential",
			},
			{
				label: "Partners",
				href: "/partners",
			},
			{
				label: "Contact",
				href: "/contact",
			},
		],
		faqs: [
			{
				question: "Can I add RENOZ to my existing GoodWe or Sungrow hybrid?",
				answer:
					"Often yes on 48 V hybrid architectures, but only after confirming the exact model and BMS settings against the RENOZ compatibility declaration. Treat it as an engineered pair, not a generic lithium pack.",
			},
			{
				question: "How big can I expand later?",
				answer:
					"Architecturally: 5.12 kWh modules, up to 8 per tower, up to 6 towers in parallel — limited by inverter, BMS, and switchboard design. Most homes stay within one tower.",
			},
			{
				question: "Is this better than buying the inverter brand’s battery?",
				answer:
					"It depends on whether you value modular WA OEM capacity and local support versus a single-brand SKU. Compare capacity steps, support paths, and list eligibility — not brand noise.",
			},
		],
		cta: {
			primaryLabel: "Confirm a GoodWe/Sungrow + RENOZ path",
			primaryTo: "/contact",
			secondaryLabel: "Browse technical resources",
			secondaryTo: "/resources",
		},
		relatedProductPaths: ["/products/residential"],
	},
	{
		slug: "perth-battery-oem",
		title: "Perth’s Battery OEM: What “Local” Actually Means",
		description:
			"How a Western Australian battery OEM differs from imported all-in-ones — design, support, claim boundaries, and who it’s for.",
		h1: "What a Perth battery OEM is (and isn’t)",
		updated: "2026-07-20",
		claimsPending: true,
		eyebrow: "Entity guide · WA OEM honesty",
		directAnswer:
			"A battery OEM designs and stands behind the storage product; an installer commissions systems; an importer sells someone else’s stack. RENOZ Energy is a Perth-based battery energy storage OEM headquartered in O’Connor — modular 48 V LiFePO₄ (5.12 kWh modules, up to 8 per tower, up to 6 towers in parallel) engineered for Australian conditions with local technical support. “Local” here means design proximity, support path, and documentation — not a claim that every cell or silicon die is mined and fabbed in WA. Buy a local OEM when heat, weak-grid behaviour, expandability, and who answers the phone matter more than a global consumer brand.",
		decisionRowLabels: [
			"Role",
			"What they own",
			"Support model",
			"Typical buyer fit",
			"Claim risk",
		],
		decisionColumns: [
			{
				name: "OEM (e.g. RENOZ)",
				highlight: true,
				cells: [
					"Designs / supplies the battery platform",
					"Product, docs, warranty pathway, engineering support",
					"Perth technical team + partner installers",
					"Modular capacity, rural/fringe, inverter choice",
					"Must state assembly vs cell origin honestly",
				],
			},
			{
				name: "Installer",
				cells: [
					"Designs and commissions the site",
					"Installation quality, network paperwork, aftercare",
					"Local electrician / solar company",
					"Anyone needing a complete system",
					"Should not be marketed as the manufacturer",
				],
			},
			{
				name: "Importer / brand stack",
				cells: [
					"Sells global product into AU",
					"Brand ecosystem + AU distribution",
					"National call centre / partner network",
					"One-box consumer simplicity",
					"“Australian” claims need boundary tables",
				],
			},
		],
		sections: [
			{
				heading: "Manufacturing honesty (claim boundary)",
				body: [
					"Serious AU OEMs publish what is designed, assembled, tested, and supported locally — and what is sourced globally (cells, many semiconductors). Prefer that honesty over giga-factory theatre.",
					"For RENOZ, treat public wording on assembly, design, and support as the source of truth; do not invent “100% made in Australia” language. Verify any manufacturing claim against About, resources, and signed declarations before quoting.",
				],
			},
			{
				heading: "Why WA conditions change the product",
				body: [
					"Heat, fringe-of-grid voltage behaviour, distance to parts, and diesel-hybrid farms are everyday Western Australian realities. A Perth OEM can put engineering closer to those failure modes than an offshore ticket queue — if the support path is real.",
					"Ask for warranty claim pathway, spare module path, and who diagnoses inverter vs battery faults.",
				],
			},
			{
				heading: "Who should buy a local OEM",
				body: [
					"Buyers who want expandable modular kWh, inverter choice (Victron, Selectronic, Deye, GoodWe, Sungrow class), and WA-facing support.",
					"Buyers who only want the simplest suburban one-box brand may still choose an imported all-in-one — compare on architecture and lists, not patriotism alone.",
				],
			},
		],
		proofLinks: [
			{
				label: "About RENOZ / O’Connor",
				href: "/about",
			},
			{
				label: "Capability statement",
				href: "/partners/capability-statement",
			},
			{
				label: "Technical resources",
				href: "/resources",
			},
			{
				label: "Case studies",
				href: "/case-studies",
			},
			{
				label: "WA GreenTech Hub finalists (wa.gov.au)",
				href: "https://www.wa.gov.au/government/announcements/greentech-hub-energy-storage-challenge-finalists-announced",
				external: true,
			},
			{
				label: "ESS News regional resilience (Jul 2026)",
				href: "https://www.ess-news.com/2026/07/14/battery-storage-supports-energy-resilience-in-regional-australia/",
				external: true,
			},
		],
		faqs: [
			{
				question: "Is RENOZ a solar installer?",
				answer:
					"No. RENOZ is a battery energy storage OEM. Installers and electrical contractors design and commission systems using RENOZ products and compatible inverters.",
			},
			{
				question: "What does “Perth OEM” guarantee?",
				answer:
					"Proximity of engineering and support, plus a modular product platform designed for AU conditions — not that every component is fabricated in Western Australia. Read claim boundaries on About and resources.",
			},
			{
				question: "How does RENOZ compare to PowerPlus or genZ?",
				answer:
					"All compete in the Australian OEM / rack / support arena rather than Tesla mass awareness. Compare capacity modularity, documentation, distribution, case proof, and support SLAs — not slogan volume.",
			},
		],
		cta: {
			primaryLabel: "Talk to the Perth OEM team",
			primaryTo: "/contact",
			secondaryLabel: "Read about RENOZ",
			secondaryTo: "/about",
		},
		relatedProductPaths: [
			"/products/residential",
			"/products/rural",
			"/products/commercial",
		],
	},
	{
		slug: "fringe-of-grid-battery-wa",
		title: "Fringe-of-Grid Battery Storage in WA",
		description:
			"Why peri-urban and edge-of-grid WA properties are moving to larger BESS — resilience, weak feeders, and expandable modular capacity.",
		h1: "Why fringe-of-grid WA homes want bigger batteries",
		updated: "2026-07-20",
		claimsPending: true,
		eyebrow: "Resilience guide · Peri-urban & hills",
		showCapacityLadder: true,
		directAnswer:
			"On the fringe of the Western Power network — hills, lifestyle blocks, peri-urban edges — batteries are not only about shaving bills. Weak feeders, longer outages, and larger household loads push systems toward more usable kWh and better inverter behaviour under voltage stress. RENOZ modular LV storage (5.12 kWh modules; up to 8 per tower; up to 6 towers in parallel) is built for that expansion path with Perth OEM support. Size for resilience hours and simultaneous loads first; treat rebate dollars as a secondary check against live government sources.",
		decisionRowLabels: [
			"Primary driver",
			"Failure if undersized",
			"Typical capacity mindset",
			"Inverter notes",
			"Next proof",
		],
		decisionColumns: [
			{
				name: "Fringe / peri-urban",
				highlight: true,
				cells: [
					"Resilience + self-consumption on weak feeders",
					"Lights flicker; backup dies mid-outage; inverter trips",
					"Larger modular kWh than inner-metro defaults",
					"Hybrid or inverter-charger sized for surge + ride-through",
					"Case studies + site outage history",
				],
			},
			{
				name: "Inner metro",
				cells: [
					"Bill arbitrage / rebate-led",
					"Missed savings; still has strong grid",
					"Often smaller packs",
					"All-in-one or hybrid SKU common",
					"Rebate checklist",
				],
			},
			{
				name: "True off-grid",
				cells: [
					"Autonomy + diesel reduction",
					"Generator runtime / load shed",
					"Multi-day energy + generator assist",
					"Victron/Selectronic-class common",
					"Load logs + autonomy design",
				],
			},
		],
		sections: [
			{
				heading: "Failure modes of small batteries on weak feeders",
				body: [
					"A pack sized only for mild evening shifting can collapse when the grid dips and the house wants oven + AC + pump at once. Undersized inverters trip; undersized batteries hit low-SoC cutoffs during outages.",
					"Design for worst simultaneous loads and target backup hours — then pick a modular ladder you can grow.",
				],
			},
			{
				heading: "What larger average system sizes mean",
				body: [
					"Trade press has highlighted regional and peri-urban demand for larger storage. Treat any “average kWh” figures as company- or journalist-reported snapshots, not a sizing rule. Your feeder and loads decide.",
					"RENOZ public positioning and case work emphasise expandable modular capacity for WA conditions — verify numbers on case study pages before quoting.",
				],
			},
			{
				heading: "Architecture that fits the fringe",
				body: [
					"Modular OEM battery + chosen hybrid or inverter-charger (Deye/GoodWe/Sungrow for many hybrids; Victron/Selectronic when generator assist and heavy motors dominate).",
					"Pair with soft-start pumps where DOL motors would otherwise dictate an oversized inverter.",
				],
			},
		],
		proofLinks: [
			{
				label: "Case studies",
				href: "/case-studies",
			},
			{
				label: "Residential products",
				href: "/products/residential",
			},
			{
				label: "Rural products",
				href: "/products/rural",
			},
			{
				label: "ESS News — regional resilience (Jul 2026)",
				href: "https://www.ess-news.com/2026/07/14/battery-storage-supports-energy-resilience-in-regional-australia/",
				external: true,
			},
			{
				label: "Contact",
				href: "/contact",
			},
		],
		faqs: [
			{
				question: "Is fringe-of-grid the same as off-grid?",
				answer:
					"No. Fringe-of-grid usually still has a network connection, but it may be weak, long, or outage-prone. Off-grid means no network — different autonomy and generator rules.",
			},
			{
				question: "How many kWh do hills homes need?",
				answer:
					"Enough usable energy for your critical loads across the outages you actually experience — plus headroom. Start from measured loads and outage history; use the 5.12 kWh module ladder to grow.",
			},
			{
				question: "Will a small Powerwall-class pack be enough?",
				answer:
					"Sometimes for mild bill shifting. For multi-hour resilience with pumps and HVAC, many fringe sites need more modular kWh or a different architecture. Compare on hours and surge, not brand.",
			},
		],
		cta: {
			primaryLabel: "Design a fringe-of-grid system",
			primaryTo: "/contact",
			secondaryLabel: "See residential storage",
			secondaryTo: "/products/residential",
		},
		relatedProductPaths: ["/products/residential", "/products/rural"],
	},
	{
		slug: "commercial-bess-50-200kwh-wa",
		title: "Commercial Battery Storage 50–200 kWh in WA",
		description:
			"Mid-scale BESS for WA businesses — peak demand, backup, and microgrid pathways without jumping straight to container MW.",
		h1: "Who 50–200 kWh commercial BESS is for in WA",
		updated: "2026-07-20",
		claimsPending: true,
		eyebrow: "Commercial guide · Mid-scale BESS",
		showCapacityLadder: true,
		directAnswer:
			"Fifty to two hundred kilowatt-hours sits between home batteries and containerised MW projects: enough for many SME peak-demand, backup, agribusiness, and light EV-depot use cases without a utility-scale procurement. RENOZ commercial pathways use modular LV architecture — 5.12 kWh modules, up to 8 per tower, up to 6 towers in parallel — paired with appropriate hybrid or industrial inverter controls. Start from load profiles and tariff drivers; use the capability statement for project process; verify any incentive or network claim on primary sources before budgeting.",
		decisionRowLabels: [
			"Use case",
			"Why 50–200 kWh",
			"Architecture notes",
			"Proof to demand",
			"Next step",
		],
		decisionColumns: [
			{
				name: "Peak demand / tariff",
				highlight: true,
				cells: [
					"Shave demand charges / shift energy",
					"Enough energy for peaks without MW CapEx",
					"Modular towers + commercial inverter path",
					"Interval data + tariff schedule",
					"Capability / contact",
				],
			},
			{
				name: "Backup / resilience",
				cells: [
					"Keep critical loads through outages",
					"Hours of autonomy for defined circuits",
					"Clear critical-load board + surge sizing",
					"Outage history + load list",
					"Site assessment",
				],
			},
			{
				name: "Agri / light industrial",
				cells: [
					"Pumps, cold rooms, workshops",
					"Grow kWh with modular towers",
					"Often diesel-assist hybrids",
					"Case studies + duty cycles",
					"Rural/commercial consult",
				],
			},
		],
		sections: [
			{
				heading: "Architecture options",
				body: [
					"Modular OEM battery + commercial/hybrid inverter stack; sometimes multiple towers paralleled under engineering control. Keep diesel or generator assist where resilience requires it.",
					"Do not jump to container MW because a brochure shows one — size to measured peaks and autonomy first.",
				],
			},
			{
				heading: "What to bring to a design conversation",
				body: [
					"Interval meter data, single-line diagram, critical vs deferrable loads, tariff structure, and any network connection constraints.",
					"RENOZ partners and capability materials outline how mid-scale projects are scoped — treat them as process evidence, not a substitute for site design.",
				],
			},
			{
				heading: "Proof and honesty",
				body: [
					"Link commercial interest to published case studies and the capability statement. Avoid invented ROI percentages. Claims pending verification stay visible until project scorecards are published.",
				],
			},
		],
		proofLinks: [
			{
				label: "Commercial products",
				href: "/products/commercial",
			},
			{
				label: "Capability statement",
				href: "/partners/capability-statement",
			},
			{
				label: "Case studies",
				href: "/case-studies",
			},
			{
				label: "Contact project desk",
				href: "/contact",
			},
		],
		faqs: [
			{
				question: "Is 100 kWh “commercial”?",
				answer:
					"Often yes for SME and agribusiness mid-scale — large enough to matter on peaks or backup, small enough to avoid container MW procurement. Exact fit depends on loads and tariffs.",
			},
			{
				question: "Can we start smaller and expand?",
				answer:
					"That is the point of modular towers: begin with measured need, then add 5.12 kWh modules or parallel towers within design limits (≤8 modules/tower, ≤6 towers).",
			},
			{
				question: "Do we need a microgrid?",
				answer:
					"Only if islanding, multiple generators, or complex controls are required. Many sites start with hybrid peak-shave/backup and grow controls later.",
			},
		],
		cta: {
			primaryLabel: "Start a commercial BESS conversation",
			primaryTo: "/contact",
			secondaryLabel: "Read capability statement",
			secondaryTo: "/partners/capability-statement",
		},
		relatedProductPaths: ["/products/commercial"],
	},
];

export const guideSlugs = guides.map((g) => g.slug);

export function getGuide(slug: string): Guide | undefined {
	return guides.find((g) => g.slug === slug);
}

export function guidePath(slug: string) {
	return `/guides/${slug}`;
}
