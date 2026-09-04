import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "solar-dairy-farms",
	title: "Solar for Dairy Farms: Milk Cooling, Vats & Off-Grid 2026",
	description:
		"Dairy loads run twice a day, every day. Sizing solar and battery for milk cooling, vat refrigeration and outage protection, with Australian payback evidence and WA off-grid reality.",
	primaryKeyword: "solar for dairy farms",
	h1: "Solar for dairy farms: milk cooling, vats and going off-grid",
	updated: "2026-09-04",
	claimsPending: false,
	newsletter: true,
	eyebrow: "Agri energy guide · WA 2026",
	intro: [
		"A dairy is not a house with cows. The load runs to a schedule you do not choose: milking twice a day, every day of the year, with refrigeration that has to hold a vat cold whether the sun is up or not. That is why solar for dairy farms is a sizing question with a different shape to residential solar, the load peaks before dawn and again in the afternoon, exactly when PV alone delivers nothing.",
		"The physics is unforgiving. Milk leaves the cow at about 37 degrees and must reach about 3 degrees fast enough to hold quality, and cooling can be 30 to 40 percent of a dairy's electricity in US extension framing (re-verify against your own interval data for Australian herds, 2026). Get the sizing wrong in either direction and you pay for it: a PV-only system shaves the day bill but does nothing for the 4 am vacuum pump, and a battery that is sized for the average rather than the vat puts milk quality on the line during an outage.",
		"This page works the problem in the order that pays: what the load actually is, efficiency first (a plate cooler can cut milk-cooling cost up to 60 percent, eXtension Farm Energy), then solar, then battery sized to the milk, then the decision between grid-tie, backup and a fully off-grid dairy. RENOZ supplies the battery platform in the third and fourth paths and passes installation to accredited partners, so where we sit is stated, and the figures are sourced.",
	],
	expertise: {
		heading: "How this guide was built and what we cannot promise",
		body: [
			"The load-shape framing, efficiency figures and outage playbook here draw on US extension literature (eXtension Farm Energy, Iowa State, Penn State) because Australian dairy-specific solar-plus-battery content barely exists; that gap is exactly why this page does. Every Australian payback figure is hedged and anchored to [Dairy Australia](https://www.dairyaustralia.com.au) case-study material rather than invented. RENOZ builds and supplies the battery hardware in the backup and off-grid paths, stocked and supported from Perth, and we say so plainly.",
			"Site-specific design, network applications, electrical work and commissioning belong to accredited installer and EPC partners. Nothing here replaces an audit of your own 12 months of bills and interval data, and every rebate or scheme claim ends with a check against the live program rules.",
		],
	},
	decisionHeading: "Dairy power decision: which architecture fits your shed",
	decisionRowLabels: [
		"Grid relationship",
		"What runs when",
		"Vat temperature safety",
		"Outage behaviour",
		"Sizing basis",
		"Generator role",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Efficiency-first grid-tie",
			cells: [
				"Stays connected; exports or offsets daytime load",
				"Day load offset by PV; 4 am milking still on the grid",
				"Vat cooling runs on grid whenever the sun is down",
				"Grid outage stops the shed; no protection from solar alone",
				"12 months of bills plus demand charges; efficiency audit first",
				"None planned; a portable genset is the fallback",
				"The grid is reliable and the goal is cutting the day bill",
			],
		},
		{
			name: "Solar + battery backup",
			highlight: true,
			cells: [
				"Grid-connected with an islanded backup layer",
				"Milking, vat and hot water ride through outages on battery",
				"Vat holds temperature through faults; hauler coordination intact",
				"Battery carries the critical loads; shed keeps milking",
				"Interval data for the critical-load subset plus autonomy days",
				"Optional; genset becomes a rarely used backstop",
				"Outages cost you dumped milk or missed pickups",
			],
		},
		{
			name: "Full off-grid dairy",
			highlight: true,
			cells: [
				"No connection; a stand-alone power system is the grid",
				"Everything, every milking, engineered to run islanded permanently",
				"Vat safety is a design input: autonomy days and thermal mass",
				"Business as usual; the shed never notices",
				"Worst-month insolation plus 2-3 autonomy days (US extension/vendor method, 2026)",
				"Sized into the system for extended cloud or a fault",
				"The connection quote is absurd or the line cannot carry the load",
			],
		},
	],
	sections: [
		{
			heading: "The load is the schedule",
			body: [
				"A dairy runs two hard sessions a day, 365 days a year: the vacuum pump for milking, the vat compressor after each session, hot water for washing, and the plate cooler in between. **Milk-cooling load** is the share of dairy electricity used to bring milk from body temperature to storage temperature, and US extension literature puts cooling at 30 to 40 percent of dairy electricity (eXtension Farm Energy framing; treat as a hypothesis to check against your own data, 2026). The point is not the exact percentage, it is that the biggest single load is refrigeration on a clock.",
				"The non-obvious part is what runs when milking is over. The milking session is two to four hours; the vat then holds that milk cold around the clock until the processor collects, typically every second day, and the compressor cycles through all of that holding time whether the shed is staffed or not. Around it sit the loads nobody photographs: wash-water heating, the milk-house, yard lighting, bore and reticulation pumps running stock water all year. The milking event gets the attention, but the holding and the always-on layer are what smash the annual consumption, and the holding is the load that cannot be rescheduled, because milk quality does not wait for a pickup window.",
				"**Plate cooler** is a heat exchanger that pre-chills milk using well or bore water before the vat compressor takes over, and a well-matched one cuts milk-cooling cost up to 60 percent (eXtension Farm Energy / UW-Madison). Milk arrives at about 37 degrees and must reach about 3 degrees, so every degree the water removes is a degree the compressor and your electricity bill never see. This is why the honest order of operations for solar for dairy farms is efficiency first: a 40 percent smaller cooling load is a 40 percent smaller solar and battery bill for the same outcome.",
				"There is a schedule trap worth naming: annual-offset PV does not remove grid dependence for concentrated milking and cooling loads (Northeast Farm Energy IQ sizing workflow). The kilowatt-hours can balance on paper for the year while every single morning session imports from the grid. Size against the load shape, not the annual total.",
			],
		},
		{
			heading: "Efficiency first, then solar",
			body: [
				"Three efficiency moves change the sizing maths before a panel is mounted. First, the plate cooler: up to 60 percent off milk-cooling cost where well water is available (eXtension Farm Energy). Second, a **variable-speed drive (VSD)** vacuum pump, which is a drive that matches pump speed to the vacuum demand instead of running flat out, and Iowa State's PM 2089X example shows it roughly halving milking-drive energy on an 18,396 kWh per year benchmark. Third, scroll compressors run 15 to 20 percent more efficiently than reciprocating units in refrigeration duty (US extension comparisons, 2026).",
				"Run these in the audit before sizing anything. For example, a shed that halves its vacuum-pump energy and pre-cools with bore water may find that a solar array sized for the residual load costs substantially less than one bolted onto the unimproved load, and the battery behind it shrinks the same way. US extension guidance is blunt about the sequencing: efficiency first, then generation.",
				"One caution from the same literature: a heat-recovery unit and a plate cooler compete for the same heat, so audit before you buy both. Sizing solar for a load you are about to halve is the most expensive way to buy a smaller system.",
			],
		},
		{
			heading: "Sizing solar and battery for the milk",
			body: [
				"Off-grid and backup sizing follows the US extension and vendor method, which is more disciplined than the residential rule of thumb: a load audit with running and starting watts for every motor; worst-month insolation rather than the annual average; two to three days of autonomy as the typical starting point, up to five or more for remote sites; and multipliers on the battery for inverter efficiency, temperature and depth of discharge. For bore pumping specifically, PV is sized about 1.25 times the pump wattage to cover start and drive losses. The full arithmetic, with WA worked examples, lives in our [battery sizing guide](/guides/battery-sizing-off-grid-wa).",
				"Motors are the reason power matters as much as energy. A direct-on-line motor start draws locked-rotor current, five to seven times nameplate, for seconds (published motor physics; see our [off-grid battery guide](/guides/best-off-grid-battery-australia) for the datasheet contrast). A Selectronic SP PRO SPMC482-AU publishes 18 kW for 30 seconds against a 7.5 kW continuous rating (SP PRO Series 2i datasheet, 2026), which is the class of overload curve that starts a vat compressor and vacuum pump without ceremony. A battery-and-inverter pair quoted on continuous kilowatts alone is the wrong instrument for a milking shed.",
				"Autonomy here is measured in milk, not hours. Vat refrigeration is a thermal-mass load: an insulated bulk tank with pre-chilled milk holds temperature for a long time without active cooling, which is why a battery sized to run the compressor periodically plus the vacuum pump can bridge an outage of many hours. For generator displacement, the question is not whether a genset helps, it is how much fuel and runtime the battery removes; our [generator hybrid sizing guide](/guides/off-grid-generator-hybrid-sizing) works that trade-off, and our [generator running costs guide](/guides/generator-running-costs-wa) prices the fuel side.",
			],
		},
		{
			heading: "What Australian case studies pay back",
			body: [
				"Australian dairy solar case studies, the class of material Dairy Australia and state agriculture departments publish, quote paybacks in the range of 5.9 to 7.9 years for systems in the 30 to 100 kW class with roughly 200 kWh of storage (AU case studies, hedged; see [Dairy Australia](https://www.dairyaustralia.com.au) and your state department for the underlying examples). Treat the range as indicative, not a quote: payback moves with the tariff, the herd size, the efficiency work done first and whether the system displaces diesel or grid import.",
				"Two honesty rules apply. First, no two dairies share a load: herd size, vat volume, plate-cooler water temperature and washing hot water all move the numbers, which is why every credible case study is a worked example rather than a promise. Second, beware incentive maths imported from elsewhere; US federal grant programs and their percentages simply do not transfer to Australian schemes.",
				"For Australian scheme eligibility, the federal [Cheaper Home Batteries Program (CHBP)](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries) is available to off-grid systems with no grid-connection condition and no VPP condition, while the WA Residential Battery Scheme (WARBS) is grid-connected and VPP-enrolment based. Scheme eligibility can also depend on system size and class, so at commercial dairy scale verify live rules before planning around any figure. We publish no rebate rates or caps, and the practical gate is the [CEC approved-products list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries): verify the exact model on your quote against the live list.",
			],
		},
		{
			heading: "Outage risk and milk safety",
			body: [
				"An outage in a dairy is not an inconvenience, it is a product-loss event. The US disaster-guidance sequence is explicit: the vacuum pump stops so you cannot milk, the bulk tank loses active cooling, and warm milk added during an outage accelerates spoilage of what is already in the vat. The prescription carries over directly: separate the critical loads, know which circuits the backup must carry, and coordinate with your milk hauler before storm season rather than during it (extension disaster guides, 2026).",
				"**Dumped milk** is milk a processor rejects after a cold-chain break, and it is the number that makes backup arithmetic easy: one rejected pickup can cost more than the battery layer that would have prevented it. Milk never ships after an outage-affected period without sign-off, so the real cost of an outage is the pickup plus the milk plus the processor relationship, not just the milk.",
				"Sizing for this is a subset problem, not a whole-shed problem. The battery carries the vat compressor, the vacuum pump, the plate-cooler water pump and controls, and defers everything else. That subset, sized with autonomy days against worst-month insolation, is almost always cheaper than a whole-property backup, and it is the framing our [hybrid sizing guide](/guides/off-grid-generator-hybrid-sizing) uses.",
			],
		},
		{
			heading: "Off-grid dairy and the WA reality",
			body: [
				"WA dairy country sits exactly where the grid is weakest: the South West milk belt around Brunswick, Boyanup and Scott River, and the south coast around Denmark, often on single-wire-earth-return (SWER) or fringe-of-network lines where a connection upgrade is either refused or quoted prohibitively. We deliberately cite no network figures here; whether a line can carry your load is a [Western Power connection assessment](https://www.wa.gov.au) question, and the answer is site-specific. Where the answer is no, or the quote is absurd, a stand-alone power system is not a lifestyle choice, it is the way the shed gets power at all.",
				"An off-grid dairy is a 48V-class LFP battery feeding a grid-forming inverter-charger, PV sized to worst-month insolation, two to three days of autonomy as the baseline, and a generator for the tail. LFP is the baseline chemistry for that duty because roughly 90 percent of rated capacity is usable versus about 50 percent for lead-acid in practical off-grid service (CEC battery storage guide). The architecture reasoning, and why grid-hybrid packs are the wrong class for permanent islanded duty, is in our [48V versus high-voltage guide](/guides/48v-vs-high-voltage-battery-system).",
				"The RENOZ platform at this scale is the LV-5KWH100AH module: 5.12 kWh nominal and 4.61 kWh usable per module in approved 8- or 10-module towers (LV-5KWH100AH datasheet, 2025), with larger commercial sites served by the HC-125K-261-02B cabinet at 125 kW and 261.25 kWh per cabinet, scalable one to eight cabinets (about 200 kWh to 2 MWh). For instance, a 200 kWh-class backup bank is single-cabinet territory, and a fully off-grid dairy with several days of autonomy typically lands in the one-to-three-cabinet range. Installation, protection and commissioning belong to our accredited partners; standards compliance sits under [AS/NZS battery installation requirements](https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector).",
			],
		},
		{
			heading: "A worked sizing sketch, stated as arithmetic",
			body: [
				"Consider a mid-size shed with a 12 kW vacuum-pump-plus-plate-cooler milking window of about two hours per session and a vat compressor averaging 3 kW across the remaining day. Daily energy lands near 100 kWh before hot water. With two days of autonomy and LFP's usable depth, the battery target is roughly 200 to 250 kWh of installed capacity, single-cabinet territory on the HC platform, and the inverter-charger must carry the milking window's starting surges, not just its running load.",
				"Check that sketch against your own interval data rather than trusting it: the point of the example is the method, bills, starting watts, worst month, autonomy days, then hardware. Sunwiz maintains [system pricing benchmarks](https://www.sunwiz.com.au) if you want a market reference for what installed solar-plus-storage costs per kilowatt-hour in Australia, and a choice.com.au-level sanity check on any sales pitch never hurts either.",
			],
		},
	],
	proofLinks: [
		{
			label: "Dairy Australia",
			href: "https://www.dairyaustralia.com.au",
			external: true,
		},
		{
			label: "eXtension Farm Energy, milk cooling and precooling",
			href: "https://farm-energy.extension.org",
			external: true,
		},
		{
			label: "Clean Energy Council approved batteries list",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			external: true,
		},
		{
			label: "CEC battery storage guide for consumers",
			href: "https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf",
			external: true,
		},
		{
			label: "Cheaper Home Batteries Program",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "Selectronic approved battery list",
			href: "https://www.selectronic.com.au/kits/approvedbatteries.html",
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
			label: "Off-grid solar with generator backup",
			href: "/guides/off-grid-generator-hybrid-sizing",
		},
		{
			label: "Generator running costs WA",
			href: "/guides/generator-running-costs-wa",
		},
		{
			label: "Best off-grid battery Australia: the 48V shortlist",
			href: "/guides/best-off-grid-battery-australia",
		},
	],
	faqHeading: "Dairy solar questions that deserve straight answers",
	faqs: [
		{
			question: "Can solar run a milking shed?",
			answer:
				"Yes, but not PV alone. Milking happens before dawn and again in the afternoon, when panels produce little or nothing, so solar runs the shed as part of a system: PV generates across the day, a battery carries the morning session, and either the grid or a generator fills the tail. A PV-only grid-tie system offsets the daytime bill while every 4 am session still imports. If the goal is the shed running on solar, the honest answer is solar plus storage, sized from interval data.",
		},
		{
			question: "What size solar system does a dairy need?",
			answer:
				"Whatever your load audit says, which is why no honest page prints a single number. The method: 12 months of bills, running and starting watts for every motor, worst-month insolation rather than annual averages, efficiency work first (a plate cooler cuts milk-cooling cost up to 60 percent, eXtension Farm Energy), then array and battery sized to the residual load. Australian case studies in the 30 to 100 kW class with about 200 kWh of storage quote 5.9 to 7.9 year paybacks (AU case studies, hedged), which tells you the class of system dairies actually install.",
		},
		{
			question: "What happens to the milk in a blackout?",
			answer:
				"Without backup: the vacuum pump stops so you cannot milk, the vat loses active cooling, and warm milk added to the tank accelerates spoilage of the whole pickup. Milk affected by an outage does not ship without processor sign-off, so the loss is the pickup plus the milk plus the relationship. With a battery backup layer sized to the vat, compressor and vacuum pump, the shed rides through typical faults with no product loss. Coordination with your hauler before storm season is part of the design, not an afterthought.",
		},
		{
			question: "How long can a battery keep milk cool?",
			answer:
				"Longer than most people expect, because the vat is thermal mass, not an open load. An insulated bulk tank of pre-chilled milk drifts slowly without active cooling, so the battery's real job is running the compressor periodically plus the vacuum pump for milking. Sized that way, a battery bank with two to three days of autonomy covers multi-hour outages comfortably; the exact hours depend on tank volume, milk volume and ambient temperature, so treat any fixed-hours claim with suspicion and size from your own loads.",
		},
		{
			question: "Are there rebates for dairy solar and batteries?",
			answer:
				"Possibly, with verification. The federal Cheaper Home Batteries Program (CHBP) is available to off-grid systems with no grid-connection or VPP condition, while the WA Residential Battery Scheme (WARBS) is grid-connected and VPP-enrolment based. Scheme eligibility can depend on system size and class, so at commercial dairy scale check the live program rules, and confirm the exact battery model on your quote against the current [CEC approved-products list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) before planning around any figure. We publish no rates or caps because they change.",
		},
		{
			question: "Off-grid or grid-tie for a dairy?",
			answer:
				"Let the connection answer decide. If the grid is reliable and affordable, an efficiency-first grid-tie system with optional battery backup is usually the cheapest path to a lower bill. If the line is SWER or fringe-of-network and the upgrade quote is prohibitive or the answer is no, a full off-grid stand-alone power system is the way the shed gets power, and Australian dairy country has plenty of both. The decision table near the top of this page maps the trade-offs.",
		},
		{
			question: "What pays back first?",
			answer:
				"Efficiency, almost always. A well-matched plate cooler (up to 60 percent off milk-cooling cost, eXtension Farm Energy), a VSD vacuum pump (roughly halving milking-drive energy, Iowa State PM 2089X) and scroll compressors (15 to 20 percent over reciprocating) shrink the load before you buy hardware against it. Solar pays back next under Australian tariffs, and the battery earns its keep in outage protection and tariff shifting. Sequencing matters: buy generation for the load you will actually have.",
		},
	],
	closing: {
		heading: "Size to the milk, verify the hardware",
		body: "Audit the load, do the efficiency work first, then size solar and battery against the milking schedule and the vat, not the annual average. Whether you land on grid-tie, backup or full off-grid, verify the exact battery model on the live CEC list and put the overload curve, autonomy target and generator plan in writing with your installer before you sign. That is the whole discipline.",
	},
	cta: {
		primaryLabel: "Get a dairy energy assessment",
		primaryTo: "/contact",
		secondaryLabel: "See rural storage",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};
