import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "single-phase-three-phase-upgrade-cost",
	title: "Single Phase to Three Phase Upgrade Cost: WA Guide 2026",
	description:
		"What a single phase to three phase upgrade costs in WA, who lodges the Western Power application, how long it takes, and when a battery system makes the upgrade unnecessary.",
	primaryKeyword: "single phase to three phase upgrade cost",
	h1: "Single phase to three phase upgrade cost: WA guide 2026",
	updated: "2026-09-04",
	claimsPending: false,
	newsletter: true,
	eyebrow: "Connection guide · WA 2026",
	intro: [
		"A Perth homeowner on r/perth asked the network for a three-phase upgrade so they could install a bigger solar system, and the thread filled with numbers that did not agree: $2,000 in one reply, $20,000 in another, timelines from six weeks to eighteen months. That spread is not people being careless. It is two different Western Power jobs hiding behind one search phrase, and most pages about the single phase to three phase upgrade cost never separate them.",
		"The two jobs are a phase conversion, where the network re-terminates your existing supply across three phases at a fixed fee around $586 to $853 (Western Power fee schedule, 2026), and a supply-capacity upgrade, where the site needs more power than the network can currently deliver and enters a design-and-quote path that can run three to thirteen months (Western Power, 2026). The cost stack is also lopsided: the network fee is the minority, and the private electrical works, consumer mains, switchboard and trenching, are where owner-reported money actually goes.",
		"There is a third answer most pages have not caught up with. From 1 May 2026 a single-phase connection in WA can carry up to 15 kW of generation (Western Power, 2026), which flips the default answer for solar and battery buyers to no, you probably do not need the upgrade. This page decodes the costs, maps the process, and gives you an honest decision tree that includes not spending the money, including the storage path where a [solar and battery system](/guides/best-off-grid-battery-australia) carries a heavy load without touching the poles and wires.",
	],
	expertise: {
		heading: "How this page handles numbers nobody agrees on",
		body: [
			"Every published figure here traces to the Western Power fee schedule and connection rulings, dated 2025 or 2026. Every owner-reported figure is labelled owner-reported with the year it was posted, and where two forum threads disagree, both ranges are presented rather than averaged. We publish no fees, timelines or allowances beyond those sources.",
			"RENOZ supplies battery systems, so we have a visible position: for most solar and battery buyers the 2026 single-phase allowance removes the reason for the upgrade, and for one-heavy-load sites storage is often the cheaper wire. We show the arithmetic and let you check it against your own load list with a licensed electrician.",
		],
	},
	decisionHeading: "Three paths behind one search phrase",
	decisionRowLabels: [
		"What the job actually is",
		"Network-side cost shape",
		"Private works involved",
		"Timeline",
		"Who lodges it",
		"Typical trigger",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Stay single phase, add storage",
			highlight: true,
			cells: [
				"No network job at all; the existing single-phase supply stays and a battery-and-inverter system reshapes when loads run and how much they draw.",
				"Zero. Nothing is lodged with the network for the battery itself beyond standard distributed energy resource approval for the solar.",
				"Consumer mains and switchboard usually stay as-is if the supply capacity already covers the running loads.",
				"Weeks, driven by installation scheduling rather than network queues.",
				"Your installer; network approval for the solar and battery is routine.",
				"One heavy load (EV charger, ducted AC, workshop machine) or a bigger inverter you were told needs three phases.",
				"The trigger is load shaping or a capacity ceiling, not genuinely three-phase machinery across the site.",
			],
		},
		{
			name: "Phase conversion",
			cells: [
				"The network re-terminates the same supply capacity across three phases at your point of connection.",
				"Fixed network fee around $586 to $853 (Western Power fee schedule, 2026); it is the minority of the bill.",
				"Consumer mains re-run for three phases, switchboard rework, new circuit protection; trenching if the connection route needs it.",
				"About 5 to 7 weeks (Western Power, 2026).",
				"Your licensed electrician typically lodges the application with Western Power.",
				"Three-phase machinery on site (lathe, mill, large compressor, some bore pumps), not just one appliance.",
				"Multiple three-phase loads run regularly and the supply capacity itself is already adequate.",
			],
		},
		{
			name: "Supply-capacity upgrade",
			cells: [
				"The site asks the network for more power than the existing connection delivers; the phases may change too, but capacity is the job.",
				"Quote-based, not a fixed fee; the design-and-quote assessment drives the number.",
				"Whatever the design finds: bigger consumer mains, switchboard replacement, trenching, sometimes a private pole or transformer contributions.",
				"Three to thirteen months for most projects (Western Power, 2026); owner-reported waits of around 18 months where network works are needed (owner-reported, 2025).",
				"Your electrician lodges; Western Power runs the connection assessment and issues the quote.",
				"The loads genuinely exceed the available supply, commonly on SWER or fringe-of-grid connections.",
				"The load list cannot be met by any combination of storage, load management and a right-sized inverter.",
			],
		},
	],
	sections: [
		{
			heading:
				"How much does a single phase to three phase upgrade cost in WA?",
			body: [
				"Answer first: the network fee is the minority of the bill. Western Power's phase conversion carries a fixed network fee around [$586 to $853](https://www.westernpower.com.au) (Western Power fee schedule, 2026). The owner-reported all-up spread runs $2,000 to $8,000 in simple cases (owner-reported, r/perth, 2025) and $4,000 to $20,000 where network capacity works are needed (owner-reported, r/perth, 2025). Read those two ranges as the same cost stack with and without the network works, not as a contradiction.",
				"The full stack, itemised: the network application fee above; the design tier if the job is a capacity upgrade rather than a conversion; the private electrician's works, which are quoted per site; consumer mains re-run or upsized for three phases; switchboard rework or replacement; protection and metering changes; and trenching where the connection route needs new cable. Of those, only the first two are the network's. The rest are private works, and they are where the $2,000-versus-$20,000 spread lives.",
				"That is why no page can give you a single honest number: two quotes for the same street can differ by an order of magnitude depending on whether the switchboard must be replaced and whether the trench is five metres or fifty. The durable move is to itemise the stack on paper before you accept any single lump-sum figure, and to read the full connection-cost picture in our [Western Power connection costs guide](/guides/western-power-connection-costs).",
			],
		},
		{
			heading: "How long does a three phase upgrade take?",
			body: [
				"Answer first: about 5 to 7 weeks for a phase conversion (Western Power, 2026), and three to thirteen months for a supply-capacity upgrade (Western Power, 2026), with owner-reported waits of around 18 months where network works are needed (owner-reported, 2025). The distinction in the last section is a timeline distinction as much as a cost distinction.",
				"The sequence runs: your electrician assesses the site and lodges the application with Western Power; the network assesses the connection, either as a straightforward conversion on the fixed fee or through the design-and-quote path if capacity is involved; works are scheduled, network side and private side; and the new connection is commissioned and metered. Your electrician typically lodges, not you, so the quality of the load schedule and single-line diagram they submit is a real variable in how the assessment lands.",
				"What speeds it up: a complete load list with running and starting currents, a clear statement of whether you are asking for the same capacity across three phases or genuinely more capacity, and an electrician who has run Western Power applications before. What slows it down: asking for capacity the site's load list does not justify, and site works (trenching, switchboard replacement) left unscoped until after the network has issued its requirements.",
			],
		},
		{
			heading: "Do I actually need three phase? (the EV charger question)",
			body: [
				"Usually no, and the EV charger is the clearest case. A 7 kW single-phase EV charger replenishes roughly 400 km of range overnight, which covers almost every real driving day in Australia. The three-phase benefit is 22 kW AC charging (public EV charger specifications, 2026), and that is a convenience for fleets and high-mileage drivers, not a requirement for a home charging a car while it sleeps.",
				"The same pattern holds for the other common triggers. Ducted air conditioning, pool pumps and most workshop machinery run on single phase; a single three-phase machine in a shed is the classic case for a phase converter or variable frequency drive (VFD), a device that synthesises three phases for one machine, rather than a network conversion. A VFD on one lathe costs hundreds, not thousands, and needs no application, no trench and no queue.",
				"The honest test is across the board versus one-off. If the site runs multiple three-phase machines for hours at a time, every day, the conversion buys real capability. If the trigger is one appliance, or a bigger charger, or a bigger inverter, the answers are a VFD, patience, or a battery system that reshapes the load. Write the load list first; the phrase you came here with, single phase to three phase upgrade cost, only becomes a decision after that list exists.",
			],
		},
		{
			heading: "Can I get a 10kW solar inverter on single phase in WA?",
			body: [
				"Yes, and the ceiling moved twice recently. Before 2025 the practical single-phase inverter limit was 5 kW; from 1 July 2025 Western Power moved it to 10 kVA (Western Power, 2025); and from 1 May 2026 a single-phase connection can carry up to 15 kW of generation (Western Power, 2026). The r/perth homeowner who requested a three-phase upgrade for a larger solar system was, under the current rules, likely asking for something they no longer need.",
				"One nuance matters for sizing: generation and export are different numbers. The allowance above is for generation capacity on the connection; how much you may export back to the network is assessed separately, and export limits can still bind before generation limits do. For a self-consumption design, solar charging a battery and carrying the house, the generation allowance is the one that matters, and it is generous.",
				"For solar and battery buyers this is the page's centrepiece: the [1 May 2026 allowance](https://www.westernpower.com.au) means a 10 kW inverter plus a battery system is a single-phase conversation in WA now. Design the system around your load list, verify the inverter and battery models on the live [CEC approved list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries), and treat any quote that opens with a mandatory three-phase upgrade as a quote worth re-examining.",
			],
		},
		{
			heading: "When the upgrade is the right call, and the alternative",
			body: [
				"Answer first: upgrade when the site genuinely needs three-phase machinery capacity across the board, and consider storage when the trigger is one heavy load or a bigger inverter. Between those poles sits the arithmetic worth doing before you commit $4,000 to $20,000 (owner-reported, 2025).",
				"The storage alternative works because a hybrid inverter and battery carry heavy start loads on a single-phase supply. A direct-on-line motor draws five to seven times its nameplate current for seconds, so a 1.5 kW pump can demand 7 kVA or more at start, and an inverter with a real overload curve rides through it: the Selectronic SP PRO SPMC482-AU is rated 7.5 kW continuous and 18 kW for 30 seconds (SP PRO Series 2i datasheet), while typical grid-hybrid inverters manage about 1.2 to 1.4 times rated output for 5 to 10 seconds (manufacturer datasheets, 2026). Paired with adequate storage, for example the RENOZ LV-5KWH100AH module at 5.12 kWh nominal per module in towers up to 10 modules (LV-5KWH100AH datasheet, 2025), that architecture carries heavy single loads and shifts demand off peak without any network job.",
				"For regional sites where the real problem is that the network cannot deliver more capacity at any price on any timeline, the comparison is not three phases versus single phase, it is grid versus independence. The [grid connection versus off-grid decision guide](/guides/grid-connection-vs-off-grid-wa), the [off-grid sizing method](/guides/battery-sizing-off-grid-wa) and the [generator-hybrid sizing guide](/guides/off-grid-generator-hybrid-sizing) cover that path; a case where a WA farm avoided an approximately $200,000 grid-connection quote altogether is documented in the [Harvey farm case study](/case-studies/harvey-farm).",
			],
		},
		{
			heading: "The private half: switchboard and consumer mains",
			body: [
				"Answer first: the network fee is the minority, and the switchboard replacement and consumer mains are where owner-reported money goes. Whatever the network charges, the private works are quoted per site and routinely dominate the invoice (owner-reported, 2025).",
				"A three-phase connection usually means re-running or upsizing consumer mains, the cable between the street supply point and your switchboard, and reworking the switchboard itself: new three-phase main switch, redistributed circuits across phases, updated protection and metering. In older Perth homes the existing switchboard often cannot take three phases at all, which makes full replacement the realistic scope, and that single line item can exceed the network fee several times over.",
				"All of it is licensed electrical work: in WA, electrical installing work must be carried out by a licensed electrical worker under the [Electricity (Licensing) Regulations 1991](https://www.legislation.wa.gov.au) (wa.gov.au). That is not a formality to shop around: the licensing requirement is why the private side is quoted rather than priced, and why the quote should itemise mains, switchboard, protection and trenching separately so you can see which part is driving the spread. Our [off-grid system cost guide](/guides/off-grid-system-cost-wa) applies the same itemisation discipline to storage quotes if you are comparing the two paths.",
			],
		},
	],
	proofLinks: [
		{
			label: "Western Power connections and fees",
			href: "https://www.westernpower.com.au",
			external: true,
		},
		{
			label: "CEC approved battery products list",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			external: true,
		},
		{
			label: "WA Electricity (Licensing) Regulations 1991",
			href: "https://www.legislation.wa.gov.au",
			external: true,
		},
		{
			label: "Cheaper Home Batteries Program",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "r/perth three-phase upgrade threads (owner-reported)",
			href: "https://www.reddit.com/r/perth/comments/1kb6odc/",
			external: true,
		},
		{
			label: "Western Power connection costs guide",
			href: "/guides/western-power-connection-costs",
		},
		{
			label: "Grid connection vs off-grid decision guide",
			href: "/guides/grid-connection-vs-off-grid-wa",
		},
		{
			label: "Off-grid battery sizing guide",
			href: "/guides/battery-sizing-off-grid-wa",
		},
	],
	faqHeading: "Three-phase upgrade questions, answered straight",
	faqs: [
		{
			question:
				"How much does a single phase to three phase upgrade cost in Perth?",
			answer:
				"The network fee for a phase conversion is around $586 to $853 (Western Power fee schedule, 2026), but that is the minority of the bill. Owner-reported all-up costs run $2,000 to $8,000 in simple cases (owner-reported, 2025) and $4,000 to $20,000 where network capacity works, switchboard replacement or trenching are involved (owner-reported, 2025). Get the private half itemised before you compare any quote.",
		},
		{
			question: "How long does a three phase upgrade take with Western Power?",
			answer:
				"A phase conversion runs about 5 to 7 weeks (Western Power, 2026). A supply-capacity upgrade takes three to thirteen months for most projects (Western Power, 2026), and owners have reported around 18 months where network works are required (owner-reported, 2025). Which job you are buying determines the timeline more than anything your electrician does.",
		},
		{
			question: "Do I need three phase power for an EV charger?",
			answer:
				"Almost never. A 7 kW single-phase charger adds roughly 400 km of range overnight; 22 kW AC charging on three phase (public charger specifications, 2026) is a convenience for fleets, not a home requirement. The unanimous practical answer on the forums matches: single phase covers overnight home charging.",
		},
		{
			question: "Can an existing house be converted to three phase in WA?",
			answer:
				"Yes, where the network and the site works allow it. The conversion itself is the 5 to 7 week, fixed-fee job (Western Power, 2026); the catch is the private half, consumer mains and a switchboard that can physically accept three phases. In older homes that usually means full switchboard replacement, which is where the cost concentrates.",
		},
		{
			question: "Can I get a 10kW solar inverter on single phase in WA?",
			answer:
				"Yes. The single-phase inverter limit rose to 10 kVA on 1 July 2025 (Western Power, 2025), and from 1 May 2026 a single-phase connection can carry up to 15 kW of generation (Western Power, 2026). Export limits are assessed separately from generation, so confirm both with your installer, but a 10 kW inverter plus battery is a single-phase design now.",
		},
		{
			question: "Who lodges the Western Power phase conversion application?",
			answer:
				"Your licensed electrician typically lodges it. The application quality matters: a complete load list with running and starting currents, and a clear statement of whether you want the same capacity across three phases or more capacity, decide whether you land on the fixed-fee conversion path or the multi-month design-and-quote path.",
		},
		{
			question: "Will my switchboard need replacing for three phase?",
			answer:
				"Often yes in older homes. Three phase means a new three-phase main switch, circuits redistributed across phases and updated protection, and many existing boards cannot take it. Switchboard replacement plus consumer mains re-run is where owner-reported costs climb from the network fee into the thousands (owner-reported, 2025).",
		},
		{
			question: "Can I run a three-phase machine without upgrading the supply?",
			answer:
				"For one machine, usually yes: a phase converter or a variable frequency drive (VFD) synthesises three phases for a single machine at a cost of hundreds rather than thousands, with no application and no trench. It is the standard answer for a shed with one lathe, mill or compressor. Multiple three-phase machines running for hours daily is when the conversion earns its cost.",
		},
	],
	closing: {
		heading: "Name the job before you pay for it",
		body: "Check the 2026 single-phase allowance before paying for an upgrade, because for most solar and battery buyers it removes the reason. If the loads genuinely need three phases, know which of the two Western Power jobs you are buying and put the same load list to both the upgrade quote and a storage quote. The path that survives an honest load list is the right one.",
	},
	cta: {
		primaryLabel: "Get a load-list comparison for your site",
		primaryTo: "/contact",
		secondaryLabel: "See rural & off-grid storage",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};
