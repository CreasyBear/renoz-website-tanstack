import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "solar-cold-rooms-pack-sheds",
	title: "Cold Rooms & Pack Sheds: Solar + Battery Sizing 2026",
	description:
		"Sizing cold room solar power and pack shed battery backup: pack-run load shapes, spoilage risk, generator displacement and thermal mass levers, from a WA battery OEM.",
	primaryKeyword: "cold room solar power",
	h1: "Cold rooms and pack sheds: solar and battery that survives the pack run",
	updated: "2026-09-04",
	claimsPending: false,
	newsletter: true,
	eyebrow: "Agri energy guide · Cold chain · WA 2026",
	intro: [
		"A pack shed fails in a specific way: the season compresses everything into a few frantic weeks, the cold room runs around the clock, and one outage during the pack run turns standing inventory into a write-off. That is why cold room solar power is not a generic farm-solar question. The load is peaky, refrigeration is continuous, and the value of storage is measured against product loss, not against a power bill.",
		"Most cold-chain solar sold into horticulture is grid-tied and exports its way to a payback. It does nothing when the wire drops or the connection assessment caps what you can draw. The alternative is solar with a battery sized for the pack run, plus a generator for long events, sized from interval data rather than an annual average. A US demonstration project combining 200 kW of PV with 280 kWh of second-life EV storage at a community scale site cut peak demand by up to 39% and saved about $12,000 per year (California Energy Commission publication CEC-500-2022-006, 2022), which is the pattern cold-chain operators care about: shaving the peak, not just harvesting sunlight.",
		"This guide covers the pack-run load shape, what an outage actually costs, how to size solar and battery around refrigeration duty and thermal mass, WA cold-chain geography, and the monitoring that makes the system auditable. For the underlying battery architecture, start with our [off-grid battery thesis](/guides/best-off-grid-battery-australia); for generator economics, see the [WA generator running-cost guide](/guides/generator-running-costs-wa).",
	],
	expertise: {
		heading: "How we approach pack shed energy, and what we do not claim",
		body: [
			"RENOZ supplies the battery platform in these systems; accredited installer and EPC partners own the site-specific design, protection, approvals and commissioning. We write from the OEM side of a pack shed project: what the load looks like, what the battery must survive, and where the numbers in a quote should be challenged.",
			"We publish no rebate rates or dollar caps anywhere on this page, they change and are scheme- and model-specific. Figures from overseas projects are labelled as non-RENOZ, non-AU evidence. Where a number depends on your site, we say so and point to the measurement that settles it.",
			"We extend the same verify-live discipline to every brand, ours included: no standing CEC approval claims for any exact model. Check the live list, in writing, for the exact model numbers on your quote before relying on them for rebates or approvals.",
		],
	},
	decisionHeading:
		"Cold chain power paths: grid-tie, battery backup, or full off-grid",
	decisionRowLabels: [
		"Grid relationship",
		"Pack-run coverage",
		"Spoilage risk",
		"Storage sizing basis",
		"Generator role",
		"Expansion",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Grid-tie + export",
			cells: [
				"Connected; export or self-consumption only",
				"Daytime loads offset; no outage cover",
				"Unchanged: an outage still stops the cold room",
				"No battery, or residential-scale token storage",
				"Portable gensets rolled out in an emergency",
				"Add panels within inverter and connection limits",
				"The grid is reliable, connection capacity is ample, and payback comes from bill savings",
			],
		},
		{
			name: "Solar + battery backup",
			highlight: true,
			cells: [
				"Connected where allowed, but islanded operation designed in",
				"Solar carries daytime pack loads; battery bridges nights and outages",
				"Reduced materially: rides through short events, generator for the long tail",
				"Interval data: pack-run peak, overnight refrigeration base, autonomy target",
				"Sized genset auto-starts on sustained low state of charge",
				"Add cabinets or modules as the pack line grows",
				"Outages are plausible but not constant, and inventory value justifies storage",
			],
		},
		{
			name: "Full off-grid pack shed",
			cells: [
				"No network connection; system is the sole supply",
				"System sized for worst-month pack duty plus 24/7 refrigeration base",
				"Managed by design: autonomy, generator coupling and alarms are engineered",
				"Worst-month insolation, multi-day autonomy, motor inrush and DoD multipliers",
				"Integrated into the design as the firm capacity backstop",
				"Add battery cabinets and PV strings as capacity grows",
				"The connection is refused, uneconomic, or capped below the pack-run peak",
			],
		},
	],
	sections: [
		{
			heading: "The pack run defines the load",
			body: [
				"A **pack shed** is the shed where picked produce is graded, packed and cooled before it leaves the farm, and its electricity profile is unlike any other agricultural building. Harvest compresses a year of production into weeks. Picking starts pre-dawn, so washers, graders, forklift charging and pre-cooling all land in the same early-morning window, at exactly the time solar has not yet started producing.",
				"Around that spike sits a flat, unforgiving base load: the **cold room** compressor cycles day and night because product temperature is a food-safety and shelf-life parameter, not a comfort preference. Pulp-temperature and shelf-life requirements mean refrigeration does not pause for the weekend or a cloudy week. Keep the two loads separate in your head, because they are different problems: the base runs 365 days a year and is what your annual consumption is actually made of, which makes it the payback engine for plain solar; the pack run is a power spike on top, which is what storage and generator capacity are for. This is why cold room solar power sizing starts with two numbers from interval data, the pack-run peak and the overnight refrigeration base, and not with a single annual kWh figure that blends them.",
				"Pre-cooling deserves its own line on the load audit. Forced-air or hydro cooling pulls field heat out of produce in hours, and that burst can be the single largest controllable load of the day, arriving exactly when the schedule is already crowded. Because it is schedulable, pre-cooling is the load you shift into the solar window first, and the load an ice bank or slightly oversized room absorbs best.",
			],
		},
		{
			heading: "An outage is product loss, not inconvenience",
			body: [
				"Most solar customers compare bills. Cold-chain operators should compare write-offs. A **thermal mass** is the stored cooling already in the product and the room: packed fruit, the room's own insulated envelope, and in some designs an **ice bank**, a tank of frozen water charged when power is cheap or plentiful and melted to carry cooling later. Thermal mass buys hours, not days, and it is the single cheapest lever in the whole system: an oversized room and a well-charged ice bank stretch every battery kWh further.",
				"Beyond thermal mass, the question is bridge autonomy. A battery keeps compressors running through a feeder fault, a storm-day outage, or a network switch event, and a genset takes over if the outage outlasts the bridge. That layered design is the price-inelastic case for storage: the battery is not competing with the grid tariff, it is competing with a loaded tray or a softened stone-fruit pallet.",
				"Generator displacement is the measurable half of this. Running a diesel genset through every brief interruption, and cold-starting it for every cloud, costs fuel, service hours and starting failures at exactly the wrong moment. Our [off-grid generator hybrid sizing guide](/guides/off-grid-generator-hybrid-sizing) covers autonomy days and duty cycles; the [generator running costs guide](/guides/generator-running-costs-wa) puts dollars on runtime. The pattern that works: battery for seconds-to-hours, generator for the rare multi-day event, sized together rather than bought separately.",
				"The commercial reality is also contractual. Buyers increasingly require temperature records with delivery, insurers want to know what happens in an outage, and a hauler will not wait while you hand-carry ice. Deciding in advance what an outage means, what gets dispatched, what gets written off, and who makes the call, is worth more than any single piece of hardware on the wall.",
			],
		},
		{
			heading: "Sizing for the pack run, not the average",
			body: [
				"Three sizing steps, in order. First the load audit: list every motor, compressor, conveyor and cooler with running and starting watts, because a direct-on-line compressor draws five to seven times nameplate current for seconds (locked-rotor inrush, 2026), and the inverter, not the battery energy, is usually what trips. A 7.5 kW compressor can demand 45 kVA or more at start unless a soft starter or variable-speed drive tames it.",
				"Second, the energy audit from interval data, using worst-month insolation rather than an annual average, because the pack run lands in the season your solar resource is most stressed by weather and heat. Third, the autonomy decision: typical US extension and vendor practice for remote sites is two to three days of autonomy, up to five to twenty for sites where a genset run is genuinely hard (US extension sizing method, 2026), adjusted for temperature and depth-of-discharge multipliers. For pack sheds with a genset backstop, one to two bridge days plus auto-start is usually the economic point.",
				"The multiplier physics matters for refrigeration above all else: lithium iron phosphate (LFP) delivers roughly 90% of rated capacity in off-grid duty versus about 50% for lead-acid ([CEC battery storage guide, 2026](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf)), which halves the room you need to find for the same usable kWh. For the worked arithmetic of array, battery and inverter sizing, use our [battery sizing for off-grid WA guide](/guides/battery-sizing-off-grid-wa) rather than re-deriving it here.",
				"Verification closes the loop: battery system design and installation in Australia sit under AS/NZS 5139 (Standards Australia, 2019), and the exact battery-inverter pairing must be documented, not assumed. For why the 48V class with a grid-forming inverter-charger handles motor inrush better than grid-hybrid hardware, see [48V versus high-voltage battery systems](/guides/48v-vs-high-voltage-battery-system).",
			],
		},
		{
			heading: "What commercial-scale storage looks like",
			body: [
				"Pack sheds sit in the 100 kW to multi-hundred-kW class once grading lines, forklifts and multiple rooms run together. RENOZ's commercial platform is the HC-125K-261-02B cabinet: 125 kW and 261.25 kWh per cabinet, paralleling one to eight cabinets for roughly 200 kWh to 2 MWh (RENOZ commercial cabinet datasheet, 2026). As stated arithmetic: a site with a 500 kWh overnight bridge target sits at about two cabinets, and a large mixed enterprise at five or more.",
				"The overseas evidence for this class is labelled as such: Korbel in California runs 852 kW of PV with 360 kW / 798 kWh of storage and reports demand charges up to $22/kW offset by about 90% average bill reduction (EnergyToolBase case study, 2026), and the California Energy Commission demonstration above hit up to 39% peak reduction with 200 kW PV plus 280 kWh storage (CEC-500-2022-006, 2022). These are non-RENOZ, non-AU projects; they establish the load-shaping effect, not WA pricing. Domestically, see our [50-200 kWh commercial BESS guide](/guides/commercial-bess-50-200kwh-wa) for the WA procurement angle, and treat any exact battery model's scheme eligibility as a question for the live [CEC approved-products list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries), not a quote assumption.",
				"One design note specific to refrigeration: compressors tolerate staged starting. Sequencing rooms and chillers, so motors start seconds apart instead of together, is a control setting that can save a whole inverter size step. Ask any bidder how their load-management scheme staggers starts before you compare inverter headline kilowatts.",
				"Siting and enclosure questions belong in the design conversation too: refrigeration plant is noisy, warm and wet, battery and power electronics want conditioned, protected spaces with their own clearances, and a genset needs airflow and acoustic treatment the neighbours can live with. Ask bidders where each component physically goes and what that does to the shed's workflow before comparing datasheets.",
			],
		},
		{
			heading: "WA cold-chain geography and connection reality",
			body: [
				"Western Australia's cold chain is scattered across exactly the places the grid is thinnest. Manjimup anchors truffle washing and the southern vegetable pack-out; Pemberton and the surrounding southern forests carry cool stores for stone fruit and berries; Gingin's growers feed Perth's market; Carnarvon runs banana and vegetable packing a long way from the SWIS with long weak feeders in between. The further the shed sits from a strong feeder, the more likely a Western Power connection assessment returns a cap below the pack-run peak, and the more attractive a system that does not lean on the wire at all.",
				"We deliberately give no specific kVA figures for SWIS or SWER connections: they are assessed site by site and change with network upgrades. What we can say generically: where the assessment caps supply below the pack-run peak, the choice is staged load management, a costly supply upgrade, or generating your own firm capacity. Plenty of WA growers discovered this mid-planting a new room. For the wider WA context, see our [off-grid system cost guide](/guides/off-grid-system-cost-wa) and the state energy pages at [wa.gov.au](https://www.wa.gov.au).",
				"The seasonal arithmetic makes it sharper. Carnarvon's banana and vegetable season peaks through the warmest months, when compressor duty and line losses are at their worst and a long rural feeder sags hardest. Manjimup's truffle wash season lands in winter, when solar resource is at its annual floor and a diesel-only shed burns the most fuel for the least daylight help. A pack shed's worst month defines the system, and the two crops just named have nearly opposite worst months, which is exactly why there is no standard package.",
				"Three questions to put to your network before you quote anything, and to any bidder who claims the connection will be fine: what supply capacity will the assessment actually grant at this point of connection, what is the timeline and cost if the answer is less than the pack-run peak, and what happens to an existing supply when new refrigeration load is added. The answers decide the architecture more than any solar brochure will.",
				"The WA precedent is instructive: at Harvey, a grower avoided a grid-connection quote of about $200,000 by building a 21 kWp solar array with a 35.8 kWh battery stack and a Selectronic SP PRO inverter-charger instead (case study, 2026). A pack shed weighing a supply upgrade should run the same comparison honestly; [see the Harvey farm case study](/case-studies/harvey-farm) for what the standing system looks like. The numbers will differ, the method does not.",
			],
		},
		{
			heading: "Monitoring and alarms: the cheap half of cold-chain power",
			body: [
				"A battery system for a cold room earns its keep twice: once in energy, once in information. Remote telemetry on state of charge, generator auto-start events and room temperature logging turns an outage from a morning discovery into a 2 am SMS. Temperature logging is also your evidence trail with buyers and auditors, proving the chain never broke.",
				"Design the alarm layer with the pack shed, not after it: low state-of-charge thresholds that fire before compressors lock out, temperature alarms per room rather than per site, and a written escalation path for who gets called. Systems without an outage alarm strategy are the ones that find the spoilage in the morning. The [battery fire suppression essentials guide](/guides/battery-fire-suppression-essential) covers the safety and monitoring layer for the battery room itself.",
				"Commissioning should include a failure rehearsal: during a quiet pack week, open the main breaker on purpose and watch what the system does. Confirm the rooms ride through on the battery, the generator starts and transfers cleanly, alarms reach the right phones, and the changeover back to solar or grid is tidy. A backup design that has never been switched off is a hypothesis, not a system.",
			],
		},
	],
	proofLinks: [
		{
			label:
				"California Energy Commission, community-scale PV and second-life EV storage demonstration (CEC-500-2022-006)",
			href: "https://www.energy.ca.gov/publications/2022/demonstration-community-scale-low-cost-highly-efficient-photovoltaic-and-energy",
			external: true,
		},
		{
			label: "EnergyToolBase, Korbel California case study",
			href: "https://www.energytoolbase.com/",
			external: true,
		},
		{
			label: "CEC approved batteries list",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			external: true,
		},
		{
			label: "Cheaper Home Batteries Program",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA government energy pages",
			href: "https://www.wa.gov.au",
			external: true,
		},
		{
			label: "RENOZ off-grid battery thesis (flagship guide)",
			href: "/guides/best-off-grid-battery-australia",
		},
		{
			label: "Off-grid generator hybrid sizing",
			href: "/guides/off-grid-generator-hybrid-sizing",
		},
		{
			label: "Battery sizing for off-grid WA",
			href: "/guides/battery-sizing-off-grid-wa",
		},
		{
			label: "Generator running costs WA",
			href: "/guides/generator-running-costs-wa",
		},
		{
			label: "Commercial BESS 50-200 kWh WA",
			href: "/guides/commercial-bess-50-200kwh-wa",
		},
		{
			label: "Off-grid system cost WA",
			href: "/guides/off-grid-system-cost-wa",
		},
		{
			label: "Standards Australia, AS/NZS 5139:2019 announcement",
			href: "https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector",
			external: true,
		},
		{
			label: "CEC, battery storage guide for consumers",
			href: "https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf",
			external: true,
		},
		{
			label: "Harvey farm case study: grid quote avoided",
			href: "/case-studies/harvey-farm",
		},
		{
			label: "WA battery rebates and CEC checklist",
			href: "/guides/wa-battery-rebates-cec",
		},
		{
			label: "48V vs high-voltage battery systems",
			href: "/guides/48v-vs-high-voltage-battery-system",
		},
	],
	faqHeading: "Cold chain power questions, answered plainly",
	faqs: [
		{
			question: "Can solar run a cold room?",
			answer:
				"Yes, with the design done properly. Solar carries the daytime energy, but refrigeration runs around the clock and compressors have hard starting demands, so a cold room needs solar plus storage plus a firm backstop rather than solar alone. The system must start direct-on-line compressors, ride through nights, and hand over to a generator on long outages. Compare overload curves and autonomy, not headline kilowatts.",
		},
		{
			question: "What size battery does a pack shed need?",
			answer:
				"Whatever your interval data says, not what a package says. The sizing inputs are the overnight refrigeration base load, the bridge autonomy you want before the generator starts, and the compressor starting case, which fixes the inverter rather than the kWh. A shed holding 15 kW of rooms overnight with a one-day bridge wants roughly 360 kWh of usable storage before depth-of-discharge and temperature adjustments. Derive it from metered 15-minute data across your worst pack week; our [battery sizing guide](/guides/battery-sizing-off-grid-wa) shows the arithmetic.",
		},
		{
			question: "What happens to cold storage in a blackout?",
			answer:
				"It depends on thermal mass and time. A closed, insulated cold room full of chilled product drifts slowly; hours are usually survivable, days are not, and frozen goods behave differently from chilled. Insulation quality, door discipline and product loading all matter, so treat any single-figure holdover claim as marketing. The engineering answer is layered: thermal mass buys hours, the battery buys bridge time, the generator covers the rest.",
		},
		{
			question: "Is off-grid viable for a pack shed?",
			answer:
				"Where a connection is refused, capped below the pack-run peak, or priced beyond reason, yes, it is the standard engineering answer, and WA has more of those sites than most states. The design basis is the same stack: PV sized on worst-month insolation, multi-day autonomy, generator coupling, and grid-forming inverters that survive motor inrush. The architecture, a 48V-class battery with a grid-forming inverter-charger, is explained in our [off-grid battery guide](/guides/best-off-grid-battery-australia).",
		},
		{
			question: "Are there rebates for solar and batteries on pack sheds?",
			answer:
				"Rebate eligibility at commercial scale is a live question, not an assumption. The federal Cheaper Home Batteries Program (CHBP) is open to off-grid systems with no grid-connection or VPP condition, and the WA Residential Battery Scheme (WARBS) is grid-connected and VPP-based. But scheme eligibility also depends on system size and class, and commercial-scale systems must verify current program rules before designing around any figure. We publish no rates or caps; start at the [WA rebates checklist](/guides/wa-battery-rebates-cec) and the live program pages.",
		},
		{
			question: "Solar or generator for cold storage?",
			answer:
				"It is not either or. Solar with a battery carries the daily energy and the short outages at the lowest running cost, and the generator remains the firm backstop for multi-day events and worst-week recharge. A genset-only cold room pays for every kWh in fuel and service; a solar-battery system with a right-sized genset pays for the outliers only. Size them together from interval data and a stated autonomy target.",
		},
		{
			question: "Do ice banks and thermal mass really reduce the battery size?",
			answer:
				"They reduce the battery's job, which can reduce its size or extend its autonomy. Charging an ice bank when solar is abundant shifts cooling out of the battery-limited hours, and a well-loaded room holds temperature longer than a near-empty one. The catch is that ice banks are extra plant with their own maintenance, and the savings only appear if the control scheme actually prioritises charging them. Model the interaction with real compressor data rather than assuming it.",
		},
	],
	closing: {
		heading: "Size from the pack run, layer the firm capacity",
		body: "Start with interval data from your worst pack week, not an annual average. Layer thermal mass, battery bridge and generator backstop deliberately, verify the inverter against your hardest compressor start, and treat every outage-cover promise as something to test against a real load audit.",
	},
	cta: {
		primaryLabel: "Get a pack shed energy assessment",
		primaryTo: "/contact",
		secondaryLabel: "See commercial storage",
		secondaryTo: "/products/commercial",
	},
	relatedProductPaths: ["/products/commercial"],
};
