import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "fringe-of-grid-battery-wa",
	title: "Battery Backup for Perth Hills & Fringe-of-Grid WA 2026",
	description:
		"Battery backup for Perth Hills and fringe-of-grid WA homes on end-of-line SWIS feeders — sizing, hybrid vs off-grid, and rebates.",
	primaryKeyword: "battery backup perth hills",
	h1: "Battery backup for Perth Hills and fringe-of-grid WA homes",
	updated: "2026-07-26",
	claimsPending: true,
	eyebrow: "Resilience guide · Perth Hills & peri-urban SWIS",
	showCapacityLadder: true,
	intro: [
		"For fringe-of-grid homes in Perth Hills, the Wheatbelt, and other end-of-line SWIS feeders, battery storage is primarily a resilience tool rather than a bill-shaving exercise. Outage-prone long rural feeders need larger usable kWh and a hybrid inverter that can island cleanly during supply interruptions. Western Power line extensions typically cost $20,000–$50,000 per km, and off-grid economics often win once an extension quote exceeds roughly $25,000–$30,000. Federal Cheaper Home Batteries rebates apply to both grid-tied and off-grid systems; the WA state scheme is grid-connected only.",
		"Good battery backup perth hills design is about islanding cleanly and covering nominated loads — not shaving a few cents off a Synergy bill.",
		"Size usable kWh and hybrid behaviour from outage history and critical loads, then decide whether hybrid backup or full off-grid is the honest path.",
	],
	expertise: {
		heading: "Why a Perth OEM cares about weak feeders",
		body: [
			"RENOZ supports WA installers on hills and rural SWIS feeders where voltage sag and outage length matter more than app cosmetics.",
			"We publish this frame so resilience quotes start from feeder behaviour and load lists, not a suburban self-consumption template.",
		],
	},
	decisionHeading: "Hybrid backup vs going off-grid",
	decisionRowLabels: [
		"Situation",
		"Best architecture",
		"Typical capacity",
		"Rebate access",
		"Key risk if undersized",
		"When to go full off-grid",
	],
	decisionColumns: [
		{
			name: "Hybrid battery backup",
			highlight: true,
			cells: [
				"Connected to SWIS but outage-prone long feeder",
				"Hybrid inverter-charger + modular LV battery",
				"10–25 kWh+ for multi-hour resilience",
				"Federal CHBP + WA WARBS if grid-connected",
				"Battery empties mid-outage; inverter trips on surge",
				"When connection cost is manageable and VPP suits",
			],
		},
		{
			name: "Full off-grid",
			cells: [
				"No grid or extension quote >$25k–$30k",
				"Off-grid inverter-charger + large battery + solar + gen",
				"Multi-day autonomy; 20–60+ kWh common",
				"Federal CHBP only (no VPP requirement)",
				"Generator runtime if solar and battery undersized",
				"When extension CapEx exceeds off-grid system cost",
			],
		},
		{
			name: "Inner-metro hybrid",
			cells: [
				"Strong stable Synergy feed; bill-shaving focus",
				"All-in-one or small hybrid",
				"5–13.5 kWh typical",
				"Federal CHBP + WA WARBS stack well",
				"Missed savings window; still has reliable grid",
				"Rarely makes sense — grid is reliable",
			],
		},
	],
	sections: [
		{
			heading: "What makes fringe-of-grid different",
			body: [
				"Fringe-of-grid means you are still connected to the Western Power SWIS network, but your feeder is long, shared, and often end-of-line. That combination produces voltage sag during peak demand, slower fault restoration times, and extended outages during storms or bushfire season. A battery sized only for evening bill-shaving can exhaust itself well before the grid comes back.",
				"Perth Hills suburbs — Kalamunda, Mundaring, Chittering, Serpentine, Byford fringes — and the outer Wheatbelt corridor see exactly this profile: adequate power most days, but brutal reliability gaps when events occur. Designing for resilience hours, not just kilowatt-hours of cheap off-peak storage, changes how you size and configure a system.",
				'The right question for a fringe-of-grid buyer is not "how many kWh to shift my evening load" but "how many hours of critical loads do I need to cover during a realistic outage, and how often does my feeder actually go down?" Outage history from Western Power is the best starting data point.',
			],
		},
		{
			heading: "Hybrid battery backup vs full off-grid",
			body: [
				"Hybrid backup keeps your Western Power connection and uses a battery to island the house when the grid fails. You still draw from the grid on normal days, export solar if the inverter is export-capable, and stay eligible for both the federal Cheaper Home Batteries Program and — critically — the WA Residential Battery Scheme, which requires a live grid connection and VPP enrolment.",
				"Full off-grid severs or never establishes that connection. You size for multi-day autonomy with solar and a generator as the fallback. Federal CHBP rebates do apply to off-grid batteries — the program confirmed off-grid eligibility explicitly, so the roughly 30% upfront discount via STCs is available regardless of VPP or grid connection. The WA state scheme, which offers $130/kWh (Synergy) or $380/kWh (Horizon Power) up to a cap, does not apply to off-grid systems because it mandates VPP participation.",
				"Choose hybrid if your feeder is outage-prone but the connection itself has value — for VPP revenue, for backup-of-last-resort on extended bad-weather periods, and for the WA rebate stack. Choose off-grid when the Western Power line extension quote to reach or improve your connection exceeds the cost of a properly sized off-grid system, typically once quotes push past roughly $25,000–$30,000 per km of required works.",
			],
		},
		{
			heading: "Western Power line extension economics",
			body: [
				"Western Power charges for new or upgraded connections on a cost-reflective basis. Line extensions in rural and peri-urban WA typically run $20,000–$50,000 per kilometre depending on terrain, pole density, conductor, and whether switchgear is required. A property two kilometres from the nearest reliable feeder can face a $40,000–$100,000 connection quote before a single solar panel or battery is considered.",
				"At that level, a full off-grid system — solar, modular battery storage, hybrid inverter-charger, and a diesel or LPG generator for backup — is often significantly cheaper over a five- to ten-year horizon when fuel and maintenance are included. The economic crossover for most rural WA sites sits around a $25,000–$30,000 connection cost, above which off-grid CapEx tends to win. These are indicative industry figures; get actual quotes from both Western Power and a system designer before making the decision.",
				"For fringe-of-grid properties that already have a connection but face reliability problems, the calculation is different: you are not paying for a new line, you are deciding whether a larger battery bank and better inverter is worth more than hoping Western Power improves the feeder. In most outage-prone suburbs, the battery payback improves significantly once you include outage disruption and the value of uninterrupted power during bushfire season.",
			],
		},
		{
			heading: "Bushfire season and critical load backup",
			body: [
				"Western Australian bushfire season runs roughly from November through April, coinciding with the period when SWIS feeders in forested and semi-rural corridors are most vulnerable to unplanned outages. A battery system that can island the home — run water pumps, lights, communications, and at least one refrigerator — for 12–48 hours covers most supply restoration windows for suburban fringes. Longer rural properties may need 48–72 hours of autonomy or a generator as backup of last resort.",
				"Sizing for bushfire-season resilience is not the same as sizing for overnight self-consumption. You need to account for daytime loads running without grid top-up, potential PV output reduction from smoke haze, and the pump surge current that most whole-of-home backup scenarios require. Design to the worst likely simultaneous load, not average nightly consumption.",
				"Emergency Planning Considerations: if your property is in a Bushfire Attack Level (BAL) rated zone, your energy system design should be discussed with your installer and local fire authority. A properly islanded battery and solar system can reduce generator use and the associated fire risk of refuelling during a fire event, but system placement and cable management also matter.",
			],
		},
		{
			heading: "Sizing for fringe-of-grid resilience",
			body: [
				"Start from an honest load audit: which circuits must run during an outage, for how many hours, and what is the worst simultaneous demand? A typical 3-bedroom home on a fringe property running a bore pump, fridge-freezer, a few lights, and communications might need 3–5 kW continuous with occasional 8–10 kW pump start surges. A hybrid inverter must handle that start surge cleanly; a battery must hold enough usable energy to sustain the runtime target.",
				"RENOZ LV modules are 5.12 kWh each (LV-5KWH100AH). A single tower holds 8 or 10 modules, depending on the approved configuration, which is approximately 41 kWh of installed capacity before accounting for usable depth of discharge. Most fringe-of-grid homes land somewhere between one and three towers depending on loads, outage targets, and budget. Multiple towers can be paralleled for larger sites or properties with workshops, irrigation, or multi-dwelling loads.",
				"Do not size from the rebate ceiling downward. The WA WARBS rebate caps at 10 kWh (capped rebate of $1,300 for Synergy customers), which reflects the minimum viable rebate-driven installation — not what a fringe-of-grid home with real resilience needs actually requires. Size from your load audit and outage targets first, then calculate rebates on the resulting system.",
			],
		},
		{
			heading: "Inverter choice for weak and islanded feeders",
			body: [
				"Not all hybrid inverters behave equally on a weak feeder or during islanding. A high-frequency all-in-one that performs well as a grid-tied solar optimizer can struggle when voltage sag hits the incoming supply or when it must sustain a motor surge load in island mode. Fringe-of-grid properties often benefit from inverter-charger architectures — Victron MultiPlus/Quattro or Selectronic SP PRO-class — that are designed around generator assist, voltage-ride-through, and sustained inductive load capability.",
				"For properties with modest loads and no heavy motors, a well-chosen hybrid from Deye, GoodWe, or Sungrow may be sufficient for island and backup functions — and will often pair more easily with the standard rebate pathway if the inverter appears on the Synergy/Horizon Supported Solutions List. The tradeoff is surge headroom and diesel-assist behaviour if a generator forms part of the design.",
				"RENOZ modular LV batteries pair with all of these inverter families. The battery architecture is inverter-agnostic at the LV level, which means you choose the inverter for its electrical job — not because the battery forces you into a closed brand ecosystem. Confirm the specific inverter model and RENOZ BMS communication path with the RENOZ compatibility declaration before ordering.",
			],
		},
		{
			heading: "Rebates available for fringe-of-grid properties",
			body: [
				"The federal Cheaper Home Batteries Program offers approximately 30% off the battery cost upfront via STCs at point of sale — no application required, not means-tested. It applies to batteries of 5–100 kWh (tiered rate above 14 kWh from 1 May 2026) and runs to 31 December 2030. Crucially, off-grid systems are explicitly eligible. The discount is approximately $252–$272 per usable kWh on the qualifying portion, roughly $2,500–$2,700 off a 10 kWh battery. The STC value steps down from 1 January 2027, so earlier installation locks a larger discount.",
				"The WA Residential Battery Scheme (WARBS) is open only to grid-connected systems with mandatory VPP enrolment. Synergy customers receive $130 per usable kWh, capped at $1,300 for a 10 kWh system; Horizon Power customers in the regional network receive $380/kWh, capped at $3,800. Combined federal plus state rebates on a 10 kWh grid-tied system can reach approximately $5,000 in the Synergy area or $7,500 in the Horizon area. Off-grid systems cannot access WARBS.",
				"Verify all dollar figures and eligibility criteria on official government sources before signing a quote. Rebate rates, scheme caps, and approved product lists change, and undated marketing figures can be months out of date by the time a system is installed.",
			],
		},
		{
			heading: "RENOZ rural battery for fringe-of-grid sites",
			body: [
				"RENOZ is a Perth-based battery OEM at O'Connor, WA — not an installer or importer. The modular LV platform (LV-5KWH100AH, 5.12 kWh modules) was engineered for Australian conditions, including the heat, voltage behaviour, and distance-to-support realities of WA fringe and rural sites. That local engineering and support path is genuinely different from ordering a globally-branded battery through a national distributor.",
				"For fringe-of-grid and rural buyers, the expandability of the modular platform matters practically: you can start with a tower sized for current loads and add modules as loads grow — a new bore pump, a workshop, an EV charger — without replacing the battery bank. RENOZ uses 5.12 kWh modules in approved 8- or 10-module towers, with parallel towers designed as required for larger sites.",
				"Ask for a site-specific design conversation rather than a standard residential package. Fringe-of-grid properties have individual feeder histories, load profiles, and bushfire risk ratings that make off-the-shelf sizing unreliable. RENOZ and accredited installer partners can work from load audit data and Western Power connection information to model hybrid versus off-grid options before you commit.",
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
			label: "Off-grid CHBP eligibility confirmed (dcceew.gov.au)",
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
			label: "ESS News — regional resilience (Jul 2026)",
			href: "https://www.ess-news.com/2026/07/14/battery-storage-supports-energy-resilience-in-regional-australia/",
			external: true,
		},
		{
			label: "Rural products",
			href: "/products/rural",
		},
		{
			label: "Grid connection quote vs going off-grid",
			href: "/guides/grid-connection-vs-off-grid-wa",
		},
		{
			label: "Technical resources",
			href: "/resources",
		},
	],
	faqHeading: "Fringe-of-grid questions from WA sites",
	faqs: [
		{
			question:
				"Does the federal battery rebate apply to fringe-of-grid or off-grid homes?",
			answer:
				"Yes. The federal Cheaper Home Batteries Program explicitly covers off-grid systems — no VPP or grid connection is required. The approximately 30% upfront discount via STCs applies to eligible batteries of 5–100 kWh installed by an SAA-accredited installer, whether the system is grid-tied, hybrid, or fully off-grid. Verify current rates on energy.gov.au before signing a quote.",
		},
		{
			question:
				"Does the WA state battery rebate apply to off-grid properties?",
			answer:
				"No. The WA Residential Battery Scheme (WARBS) requires mandatory VPP enrolment through Synergy Battery Rewards or Horizon Community Wave for a minimum of two years. Fully off-grid systems cannot participate in a VPP and therefore cannot access WARBS. Off-grid properties are limited to the federal CHBP rebate only.",
		},
		{
			question: "What does a Western Power line extension typically cost?",
			answer:
				"Western Power line extensions in rural and peri-urban WA typically cost $20,000–$50,000 per kilometre, depending on terrain, poles, conductor type, and switchgear. At those rates, a two-kilometre extension can cost $40,000–$100,000 before any solar or battery is considered. Off-grid economics generally win once the connection quote exceeds roughly $25,000–$30,000. Get an actual Western Power quote and compare it to an off-grid system design.",
		},
		{
			question: "How many kWh do I need for bushfire-season outage backup?",
			answer:
				"It depends on which loads you need to run and for how long. A fringe property running communications, a bore pump, refrigeration, and lights for 12–24 hours might need 15–25 kWh of usable storage, plus an inverter sized for pump start surge. Properties in high-BAL zones or with longer restoration times should model 48–72 hours or include a generator as backup. Start from your actual critical load list, not a standard residential average.",
		},
		{
			question: "Can I add a generator to a hybrid battery system?",
			answer:
				"Yes, and for most fringe-of-grid properties it is sensible insurance. Victron and Selectronic inverter-chargers are particularly capable at managing generator charge and assist workflows. Deye, GoodWe, and Sungrow-class hybrids also support generator input on most models, though generator quality sensitivity varies. A generator removes the single-point-of-failure risk if an outage outlasts your battery autonomy or a string of cloudy days reduces solar recharge.",
		},
		{
			question: "Which inverter brand suits fringe-of-grid homes best?",
			answer:
				"For properties with bore pumps, large AC loads, or generator-hybrid requirements, Victron MultiPlus/Quattro or Selectronic SP PRO-class inverter-chargers offer strong surge and generator-assist behaviour. For properties with modest loads and a clear rebate pathway, Deye, GoodWe, or Sungrow hybrids can work well and may appear on retailer Supported Solutions Lists. RENOZ LV batteries pair with all these platforms — choose the inverter for its electrical job, then confirm the specific model against the RENOZ compatibility declaration.",
		},
		{
			question: "Is fringe-of-grid the same as off-grid?",
			answer:
				"No. Fringe-of-grid means you still have a Western Power network connection, but it may be long, end-of-line, or reliability-impaired. Off-grid means no grid connection at all. The two situations call for different system designs, different rebate pathways, and different autonomy targets. Fringe-of-grid buyers often start with hybrid backup and may consider going off-grid only if the economics of a connection improvement are poor.",
		},
		{
			question: "Can I start with one tower and add more modules later?",
			answer:
				"Yes. The RENOZ LV platform is modular: each LV-5KWH100AH module is 5.12 kWh, and a tower holds 8 or 10 modules, depending on the approved configuration. Additional modules can be added to an existing tower as loads grow, and multiple towers can be paralleled as required by the engineered system design for larger sites. The system must be re-commissioned and electrically verified with each addition — this is a designed expansion path, not a plug-and-play swap.",
		},
	],
	closing: {
		heading: "Start from outages, then size storage",
		body: "Bring feeder history and critical load lists to the design conversation — then talk to RENOZ about modular capacity that matches how long you actually need to island.",
	},
	cta: {
		primaryLabel: "Design a fringe-of-grid system with RENOZ",
		primaryTo: "/contact",
		secondaryLabel: "See rural battery products",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural", "/products/residential"],
};
