import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "horizon-power-connection-costs",
	title: "Horizon Power Connection Costs: Fees & Timelines WA 2026",
	description:
		"Horizon Power connection costs decoded: meter, design tiers, the $5,654 pole-to-pillar conditions, DER study fees, timelines, and when off-grid is cheaper.",
	primaryKeyword: "horizon power connection cost",
	h1: "Horizon Power connection costs: fees, timelines and the off-grid comparison",
	updated: "2026-09-04",
	claimsPending: false,
	newsletter: true,
	eyebrow: "WA connection guide · Regional WA 2026",
	intro: [
		"No power on the block, a quote that reads like a civil works project, and a fee schedule spread across tabs and a PDF: that is the Horizon Power connection moment for most regional WA landowners. The published numbers are knowable, but they are scattered, and the biggest part of the job, the extension beyond the subsidised package, arrives only as a bespoke quote. Meanwhile the stand-alone power system program looks like an option until you discover Horizon selects the candidates, not you.",
		"This page decodes every published Horizon Power fee with dates and links, names the private line items the fee schedule never mentions, walks the timeline in its three official stages, and then does what the utility never does: it runs the horizon power connection cost against the off-grid alternative honestly, because regional WA is exactly where every metre of wire costs the most and the arithmetic gets decisive.",
		"Here is the short version. The meter is $1,039 and design runs $1,390 to $6,103; the subsidised pole-to-pillar connection is $5,654 with eligibility conditions; construction beyond that is quote-only, and owner-reported remote-extension totals run to the tens of thousands. If your quote is huge and you were not selected for Horizon's stand-alone program, a private stand-alone system is the competing bid, and at 100 kWh or more it is a commercial-cabinet conversation.",
	],
	expertise: {
		heading: "How this page was built, and what it is not",
		body: [
			"Every Horizon figure here comes from Horizon Power's own published 2026-27 fee material and program pages, linked in place. The big numbers that are not published, the remote extension quotes, come from WA owners reporting their real quotes on Whirlpool, Reddit and HomeOne, and they are labelled owner-reported with the year. None of them are benchmarks; they are evidence of range.",
			"RENOZ supplies batteries and coordinates accredited installer partners; we do not build network infrastructure and we do not issue connection quotes. What we add is the comparison the network will never run for you: the extension quote versus a stand-alone system designed for the same load list, which is a decision we walk regional WA owners through regularly.",
		],
	},
	decisionHeading: "Three regional connection paths and what each really costs",
	decisionRowLabels: [
		"Published Horizon fees",
		"Private works you also pay",
		"Realistic timeline",
		"Where costs blow out",
		"Off-grid comparison point",
		"Watch for",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Pole-to-pillar connection",
			cells: [
				"$5,654 including GST for the subsidised underground connection, up to 3 dwellings, where eligibility conditions and the 60-metre rule are met (Horizon Power, 1 Jul 2026)",
				"Consumer mains from the pillar to the switchboard, meter box upgrades, trenching on your side of the point",
				"Weeks to a few months once the assessment passes",
				"Missing a condition: distance beyond 60 m, more than 3 dwellings, non-standard lots lose the subsidy and drop into quote-only",
				"Almost never relevant: this is the cheap, subsidised case",
				"Assuming the subsidised price applies to your block without checking the conditions in writing",
				"The pole is close, the lot is standard, and you qualify for the subsidy",
			],
		},
		{
			name: "Design plus quoted extension",
			cells: [
				"New meter $1,039; design tiers $1,390, $3,052 or $6,103 by complexity; construction quoted per job after design (Horizon Power fee schedule, 2026-27)",
				"Poles, trenching, cable, road crossings, easements; owner-reported remote extensions run from the low tens of thousands to around $100,000 (owner-reported, 2024-2025)",
				"Months: a 3-step assessment, design and works process (Horizon Power connection page, 2026), with regional contractor scheduling the tail",
				"Distance, rock, crossings, and the design fee arriving before the real quote",
				"This is the decisive band: every pole buys wire, not kilowatt-hours",
				"Paying the design fee before anyone will tell you what the build costs",
				"You need the grid anyway and the extension is measured in hundreds of metres, not kilometres",
			],
		},
		{
			name: "Stand-alone power system path",
			cells: [
				"Horizon's SPS program is invitation-only: Horizon identifies roughly 50 candidate sites from its asset planning and contacts you; there is no published per-unit cost (Horizon Power SPS page, 2026)",
				"A private stand-alone system: solar array, battery, grid-forming inverter-charger, generator for the tail; priced by your load list, not by distance",
				"Weeks: procurement and install rather than a network queue (private system, owner-arranged)",
				"Undersizing the battery or ignoring motor-start loads; both are solved by a load audit before purchase",
				"Past a distance threshold this wins outright, and the same load list should price both paths",
				"Assuming you can apply for Horizon's SPS: you cannot self-nominate",
				"The extension quote is huge, you were not selected, and the sun is on your block",
			],
		},
	],
	sections: [
		{
			heading: "How much does it cost to connect power in regional WA?",
			body: [
				"The published answer starts small and ends in quotes. The new meter is $1,039 (Horizon Power fee schedule, 2026-27). Design is tiered by complexity: $1,390 for a standard design, $3,052 for detailed, $6,103 for complex (Horizon Power fee schedule, 2026-27). For eligible cases, the subsidised underground pole-to-pillar connection is $5,654 including GST, covering up to three dwellings where the conditions hold, including a 60-metre rule (Horizon Power, 1 Jul 2026). Beyond those fixed prices, construction for anything longer or harder is quote-only, which is where regional totals stop being published and start being personal.",
				"There is a second published fee line that surprises solar-and-storage applicants: a distributed energy resource system impact study, $4,000 to $14,385 depending on scope (Horizon Power fee brochure, 2026-27). If you are connecting and bringing significant generation or storage with you, that study can apply, so ask before you budget around it.",
				"On rural properties you may also meet **Supply Extension Scheme (SES)** charges, which are Horizon's framework for pricing the extension of network assets to your property; the published schedule covers the fixed fees, and SES extension works are quoted against your specific request. The honest summary: the knowable part of a horizon power connection cost is the meter, the design tier and the subsidised connection; the extension itself is a quote you get after paying for the design that produces it.",
			],
		},
		{
			heading: "What is a green dome, and what is NOT in the fee schedule?",
			body: [
				"A **green dome** is the above-ground connection pillar that marks where Horizon's network hands over to your private installation. On a new regional frontage, the meter and the connection point sit there; everything from the dome to your switchboard is yours. The fee schedule prices Horizon's side. Your side includes consumer mains priced by distance and cable size, trenching, a meter box meeting current standards, and the switchboard, none of which appear in the fee table.",
				"This is the gap that generates quote shock on regional blocks. On a battle-axe or long-frontage lot, the position of the point of incidence alone can add tens of metres of consumer mains before the house is even wired, and owner-reported private-works line items on regional jobs run into the thousands on their own (owner-reported, 2024-2025). Before you commit a house position, check where the dome or pillar sits relative to your building envelope; every metre between them is a private cost.",
				"All fixed electrical work on your side must be done by licensed electrical workers under [WA Government electrical safety requirements](https://www.wa.gov.au/government/multi-step-guides/electrical-safety-home/having-electrical-work-done). For instance, an owner who arranges trenching for the consumer mains still needs the cable installed and connected by a licensed contractor, and the network will not energise a non-compliant private install.",
			],
		},
		{
			heading: "Quote Autopsy: a regional extension quote, line by line",
			body: [
				"Consider a composite of the quotes regional WA owners describe on forums (owner-reported, 2024-2025): a block 800 metres from the nearest three-phase line, quote total in the high tens of thousands, one owner anecdote around $100,000. Annotated, the lines split three ways. Horizon's fees: the $1,039 meter and a $3,052 or $6,103 design tier (Horizon Power fee schedule, 2026-27). Horizon's quoted works: poles, conductors, possibly a transformer, priced per job after design. Your private works: consumer mains, trenching, meter box, switchboard.",
				"The negotiable line is the one most owners never notice: the capacity request. As with any capacity-priced network job, the maximum demand you declare scales the assessment and the works scope. For instance, a cautious applicant who declares 30 kVA when the site's real worst-month demand is 12 kVA has paid for network capacity it will never draw. A load audit that separates running load from motor-start load, the same audit that drives a stand-alone design, is the tool for getting this number honest.",
				"The autopsy verdict most regional quotes earn: the Horizon fees are the smallest lines on the page. The quoted extension works and the private works together are the real price, and they are priced by distance and ground, which is exactly what a stand-alone system is not.",
			],
		},
		{
			heading: "How long does a Horizon Power connection take?",
			body: [
				"Horizon runs a 3-step process: assessment, design, works (Horizon Power connection page, 2026). Simple cases move in weeks once approved; the tail is regional. Every stage has a queue, regional contractor availability is thinner than the metro networks, and complex designs iterate. Owner-reported regional timelines stretch to 12 months and beyond on extension jobs (owner-reported, 2024-2025). If your build programme depends on energisation, the connection is on the critical path from the day you settle.",
				"What speeds it up: a complete application, a site plan that shows the building envelope and driveway clearly, an honest maximum-demand figure, and knowing where the nearest network asset actually is (the nearest intersection is a common reference point Horizon asks about). What slows it: easements, third-party land crossings, capacity requests that trigger network works, and design revisions after the first site visit.",
				"For the build window itself, temporary supply is the standard answer, and it is a line item to budget: ask Horizon about a temporary supply for construction, priced per job, while the permanent design and works run their course (Horizon Power connection process, 2026). Builder-set builds usually have this handled; owner-builders are regularly surprised it exists and that it is separate from the permanent connection.",
			],
		},
		{
			heading: "Can you apply for Horizon's stand-alone power system?",
			body: [
				"No, and this is the asymmetry most articles miss. Horizon's stand-alone power system (SPS) program is real: utility-grade solar-battery-generator units serving properties where running the grid is uneconomic, with a program of around 50 units (Horizon Power SPS page, 2026). The published specifications are worth reading closely, because they validate the class: Horizon's standard SPS designs deliver [16 to 60 kW of power and 16 to 200 kWh of storage](https://www.horizonpower.com.au/your-community/getting-future-ready/renew-the-regions/standalone-power-systems/) (Horizon Power SPS page, 2026), which is exactly the range a regional homestead or small operating property needs. But Horizon identifies candidates through its own asset-management planning and contacts you. There is no application form, no self-nomination, and no published per-unit cost, because from Horizon's side it is a network-investment decision, not a product you buy.",
				"That leaves the unaddressed case: the owner with a five- or six-figure extension quote who was not selected and never will be, because Horizon's SPS targets places where the extension Horizon is avoiding is its own. If your quote is huge, you are exactly the person the program's economics were built for, and exactly the person it will not serve.",
				"The path nobody explains is the private version of the same thing: a stand-alone system procured like any other infrastructure, not granted like a program. Solar array, battery storage, a grid-forming inverter-charger and usually a generator for the tail, designed for your worst month. The difference from Horizon's unit is who chose it and who owns it: you, sized from your load list, on your timeline. Treat it as a procurement decision and get it priced against the same load list as the extension quote, which is what our [grid connection versus off-grid guide](/guides/grid-connection-vs-off-grid-wa) walks through line by line.",
			],
		},
		{
			heading: "Is off-grid solar cheaper than a new power connection?",
			body: [
				"Past a distance threshold, yes, and the reasoning is simple: every pole buys wire, not kilowatt-hours. The connection's cost driver is distance from the network; the stand-alone system's cost driver is your load. On a remote block with a large quote, the two curves cross, and regional WA is where they cross earliest because the wire is longest and every metre costs the most.",
				"Run the same load list both ways. Connection path: meter $1,039, design $1,390 to $6,103, subsidised $5,654 if you qualify, quoted extension works otherwise, plus private consumer mains and switchboard (Horizon Power fee schedule, 2026-27). Stand-alone path: a system sized for the worst month. At homestead scale that is 48V lithium iron phosphate modules on a grid-forming inverter-charger; the physics that matters is motor starting, where a direct-on-line pump draws five to seven times nameplate for seconds, which is why the [flagship off-grid battery guide](/guides/best-off-grid-battery-australia) spends its time on inverter overload curves rather than headline kilowatts.",
				"At 100 kWh or more, think commercial cabinets: RENOZ's commercial platform runs 125 kW / 261.25 kWh per cabinet ([RENOZ commercial platform](/products/commercial)), so a 1.2 MWh-class stand-alone is about five cabinets, stated as arithmetic. For sizing method and autonomy-day decisions, our [battery sizing guide](/guides/battery-sizing-off-grid-wa) and [off-grid system cost guide](/guides/off-grid-system-cost-wa) carry the numbers framework. On rebates: never accept a fixed figure from anyone including us. The Cheaper Home Batteries Program (CHBP) is available to off-grid systems with no grid-connection or VPP condition, but eligibility depends on the exact product and configuration, so verify the exact model on the live [Clean Energy Council approved battery list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) and with the supplier before counting any rebate money.",
			],
		},
		{
			heading: "Who is my network provider, Western Power or Horizon?",
			body: [
				"The obligation-to-connect map decides, and it changes every number on this page. The South West Interconnected System (SWIS) covers the south west corner, Perth down through the South West and Great Southern margins, and that is Western Power's network. Everything else, the north west, the Pilbara, the Kimberley, the Gascoyne, most of the Wheatbelt and Goldfields, is Horizon Power. A block 200 metres inside the SWIS boundary and a block 200 metres outside it face entirely different fee schedules, processes and timelines.",
				"Check before you buy land, not after: the WA Government's [energy policy pages](https://www.wa.gov.au/organisation/energy-policy-wa) carry the network split, and each network's own site confirms which addresses it serves. For the SWIS half of the state, our [Western Power connection cost decoder](/guides/western-power-connection-costs) is the twin page: same fee-autopsy method, different schedule, including the DLVCS per-kVA pricing Western Power uses for capacity-based connections.",
				"The practical consequence for a regional buyer: Horizon's footprint is where the grid is farthest from the most people, which is why Horizon runs the SPS program at all. It is also where extension quotes bite hardest, so the connection-versus-off-grid comparison in this guide is not a metro curiosity; it is the standard financial decision for regional WA land.",
			],
		},
	],
	proofLinks: [
		{
			label: "Horizon Power, new power supply fees and fee schedule",
			href: "https://www.horizonpower.com.au/contractors-installers/new-power-supply/",
			external: true,
		},
		{
			label:
				"Horizon Power, building or renovating (connections for new builds)",
			href: "https://www.horizonpower.com.au/for-home/building-or-renovating/",
			external: true,
		},
		{
			label: "Horizon Power, stand-alone power systems program",
			href: "https://www.horizonpower.com.au/your-community/getting-future-ready/renew-the-regions/standalone-power-systems/",
			external: true,
		},
		{
			label: "WA Government, electrical safety and licensed electrical work",
			href: "https://www.wa.gov.au/government/multi-step-guides/electrical-safety-home/having-electrical-work-done",
			external: true,
		},
		{
			label: "Clean Energy Council, approved battery list",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			external: true,
		},
		{
			label: "Western Power connection costs: the SWIS twin decoder",
			href: "/guides/western-power-connection-costs",
		},
		{
			label: "Grid connection vs off-grid WA: the decision guide",
			href: "/guides/grid-connection-vs-off-grid-wa",
		},
		{
			label: "Off grid solar system cost WA",
			href: "/guides/off-grid-system-cost-wa",
		},
		{
			label: "Best off-grid battery Australia: the 48V shortlist",
			href: "/guides/best-off-grid-battery-australia",
		},
	],
	faqHeading: "Horizon Power connection questions WA owners ask",
	faqs: [
		{
			question:
				"How much does it cost to get power connected to a rural property in WA?",
			answer:
				"The published part is knowable: meter $1,039 and design tiers $1,390, $3,052 or $6,103 by complexity (Horizon Power fee schedule, 2026-27), plus $5,654 for the subsidised pole-to-pillar connection where you meet the conditions. Beyond that, extension construction is quote-only, and owner-reported rural totals run from the low tens of thousands to around $100,000 for remote blocks (owner-reported, 2024-2025). The only honest answer for your block is the design-then-quote sequence, which is why the design fee arrives before the real number.",
		},
		{
			question:
				"How long does it take to get a new connection from Horizon Power?",
			answer:
				"Horizon describes a 3-step assessment, design and works process (Horizon Power connection page, 2026). Simple connections move in weeks to a few months once approved. Regional extension jobs carry the long tail: contractor scheduling, easements and design iterations push owner-reported timelines past 12 months (owner-reported, 2024-2025). Budget temporary construction supply for the build window, priced per job, because the permanent connection will not arrive on your build schedule.",
		},
		{
			question:
				"Do I qualify for the subsidised underground (pole to pillar) connection?",
			answer:
				"The published headline is $5,654 including GST for up to three dwellings with a 60-metre rule (Horizon Power, 1 Jul 2026), but eligibility conditions decide, and they are checked at assessment, not over the phone. Distance beyond the limit, more dwellings than covered, or a non-standard lot drop you into the quote-only path. Get the eligibility confirmation in writing before you budget the subsidised number.",
		},
		{
			question:
				"Can I apply for a Horizon Power stand-alone power system, or do they contact you?",
			answer:
				"They contact you. Horizon identifies SPS candidates through its own asset-management planning and runs a program of around 50 units, with no self-nomination and no published per-unit cost (Horizon Power SPS page, 2026). If you have a big extension quote and were not selected, the private stand-alone market is the open path: the same architecture, procured against your load list rather than granted by the network.",
		},
		{
			question:
				"Is off-grid solar cheaper than paying for a new power connection?",
			answer:
				"Past a distance threshold, usually yes, because the connection's cost scales with metres of wire while a stand-alone system's cost scales with your load. The honest method is one load list priced both ways: connection (fees, quoted works, private mains, timeline risk) versus a stand-alone system designed for your worst month. Our [grid connection versus off-grid guide](/guides/grid-connection-vs-off-grid-wa) carries the full decision method.",
		},
		{
			question:
				"What are Supply Extension Scheme (SES) charges on a rural property?",
			answer:
				"SES charges are Horizon's framework for pricing the extension of its network to your property. The fixed fees on the schedule are the meter and design; SES extension works are quoted against your specific request after design, and the quote scales with distance, terrain and any network reinforcement your capacity request triggers. **Supply Extension Scheme (SES)** is the term to search for in your quote so you can tell Horizon's works from your electrician's.",
		},
		{
			question: "Who is my network provider, Western Power or Horizon Power?",
			answer:
				"The SWIS decides: the south west corner of WA, including Perth and its fringes down through the South West, is Western Power. Almost everything else, regional and remote WA, is Horizon Power. The split changes every fee, process and timeline, so confirm on the WA Government network pages before you buy a block. For SWIS blocks, see our [Western Power connection cost decoder](/guides/western-power-connection-costs).",
		},
		{
			question:
				"What is a green dome or service pillar, and do I still need one?",
			answer:
				"A green dome is the above-ground pillar marking where the network hands over to your private installation. If your connection includes one, it is built as part of the works; you do not supply it. What you do supply is everything from the dome to the switchboard: consumer mains, trenching and a compliant meter box. Do I still need one: yes, if you are connecting; it is the supply point, not an optional extra. On a stand-alone system there is no dome at all, because there is no network handover.",
		},
	],
	closing: {
		heading: "Know your network, then price both paths",
		body: "Three takeaways before you sign anything. First, know your network: the obligation-to-connect map decides whether this page or our Western Power decoder applies to your block. Second, assemble the whole fee picture, Horizon's published fees and the private works, before you compare quotes, because the fee schedule is only the visible half. Third, treat Horizon's stand-alone program as one-way: if you were not selected, the private stand-alone system is the open path, and it deserves the same load-list pricing as the extension. At a certain distance from the wire, the arithmetic stops being close, and regional WA is where that distance arrives first.",
	},
	cta: {
		primaryLabel: "Get a regional off-grid comparison for your block",
		primaryTo: "/contact",
		secondaryLabel: "See rural & off-grid storage",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};
