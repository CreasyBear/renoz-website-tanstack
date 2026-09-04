import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "off-grid-packages-decoder",
	title: "Off-Grid Solar Packages with Batteries: What's in the Box",
	description:
		"What an off-grid solar package with batteries actually includes: line items, four package archetypes, the quote traps, and how to compare quotes on dollars per usable kWh.",
	primaryKeyword: "off grid solar system packages with batteries australia",
	h1: "Off-grid solar packages with batteries: what's actually in the box",
	updated: "2026-09-04",
	claimsPending: false,
	newsletter: true,
	eyebrow: "Buyer's guide · Off-grid packages · Australia 2026",
	intro: [
		"Type off grid solar system packages with batteries australia into a search bar and you get bundles with confident names and one number: the price. The bundle is not the product. What you are actually buying is a small power station: a solar array, an inverter that turns DC into household AC, a battery bank, the wiring and protection between them, and the labour to design, install and commission the lot. The package label tells you none of the things that decide whether it works on your block: which architecture the inverter and battery follow, what happens when the bore pump starts, and whether a generator can ever plug in.",
		"This page decodes the box. We itemise what a package should include, line by line. We sort the market into four archetypes so you can tell a grid-hybrid kit from a genuine stand-alone system. We list the traps that show up in packaged quotes, then give you the arithmetic to normalise two quotes to dollars per usable kWh. We supply hardware for one of the four archetypes and say so up front; the decoding works the same either way.",
	],
	expertise: {
		heading: "How we decoded the packages",
		body: [
			"RENOZ supplies the 48V modular archetype from Perth: LV-5KWH100AH modules with 5.12 kWh nominal and 4.61 kWh usable each (datasheet, 2025), paired with a separately chosen inverter-charger. We declare that interest and hold every archetype to the same test: published figures, live lists, installer-owned commissioning.",
			"Nothing here is a price guide. Package prices move with panels, freight and labour; the thing that survives comparison is configuration. Verify every model on the live CEC list before money changes hands, whoever supplies it.",
		],
	},
	decisionHeading: "Package archetypes compared",
	decisionRowLabels: [
		"What the battery line includes",
		"What the inverter line includes",
		"What's often missing",
		"Motor and pump readiness",
		"Generator readiness",
		"Expansion",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Grid-hybrid packaged kit",
			cells: [
				"A matched high-voltage pack sold with its own hybrid inverter as one product",
				"The manufacturer's hybrid inverter, grid-referenced, backup as an event",
				"Generator input and changeover, the 30-second overload rating, the expansion ceiling",
				"Limited: published backup overload runs about 1.2 to 1.4 times rated output for 5 to 10 seconds (manufacturer datasheets, 2026), so direct-on-line pump starts trip",
				"Poor: many hybrid inverters have no genset input or start control",
				"Same-brand pack modules only, closed ecosystem",
				"You are grid-connected and want self-consumption with short backup events",
			],
		},
		{
			name: "48V modular + grid-forming",
			cells: [
				"48V-family rack modules with published usable figures, for example 5.12 kWh nominal and 4.61 kWh usable per module (LV-5KWH100AH datasheet, 2025)",
				"A separately chosen grid-forming inverter-charger such as the Selectronic SP PRO, 7.5 kW continuous and 18 kW for 30 seconds (SP PRO Series 2i datasheet, 2026)",
				"Nothing structural if the installer specifies it: genset AC-in, surge maths and current limits are design items",
				"Strong: the overload curve is published and built for locked-rotor starts",
				"Strong: AC-coupled genset on AC-in with two-wire start is standard design practice",
				"Add modules or parallel towers within the engineered design",
				"You want pump-heavy, generator-ready off-grid duty",
			],
		},
		{
			name: "Integrated all-in-one",
			cells: [
				"Battery and power conversion sealed in one factory box",
				"Not separately specifiable: the box is the inverter",
				"Serviceability, expansion beyond the enclosure, generator coupling",
				"Check the published 30-second curve, not the headline kilowatts",
				"Model-dependent: some boxes accept a genset, some do not",
				"Fixed by the enclosure",
				"You want a compact, standardised system and your loads are light",
			],
		},
		{
			name: "Component-specified system",
			cells: [
				"Whatever the site needs: modules, current limits and protection specified per line",
				"Chosen for the site: grid-forming class, charger acceptance, generator control",
				"Nothing if the installer is genuine; everything if the quote is one line",
				"Strong, because surge is engineered against a load list rather than inherited",
				"Strong: two-wire start and charger sizing are design inputs",
				"Bounded only by the standards and the site",
				"You have a real installer and a load list worth engineering around",
			],
		},
	],
	sections: [
		{
			heading: "What's actually in the box",
			body: [
				"A package bundles seven things: the solar array, the inverter, the battery bank, the balance of system, monitoring, and the labour to install and commission. **Balance of system (BOS)** is everything between the big three: mounting, DC and AC cabling, fuses and breakers, surge protection, labels and enclosures. BOS is where cheap packages fail first, because it is the easiest line to thin out without changing the headline number.",
				"**Usable capacity** is what the battery management system lets you draw before the battery stops, and it is the only figure that sizes autonomy. For example, a module rated 5.12 kWh nominal delivers 4.61 kWh usable at its recommended depth (LV-5KWH100AH datasheet, 2025), so a 10-module tower is about 46 kWh usable rather than 51.2, plain arithmetic on the published figures. If a quote says 10 kWh battery, ask nominal or usable, and ask for the datasheet.",
			],
		},
		{
			heading: "Four archetypes, four different systems",
			body: [
				"The market sorts into four package shapes, and the shape is the decision. A grid-hybrid kit is engineered for a connected home with backup as an occasional event. A 48V modular package pairs rack modules with a grid-forming inverter-charger built to be the grid. An integrated all-in-one seals battery and conversion into one enclosure. A component-specified system engineers every line item against a load list. The full classification, with the model-level shortlist, lives in the [flagship off-grid guide](/guides/best-off-grid-battery-australia).",
				"The practical difference is the overload curve. A Selectronic SP PRO SPMC482-AU publishes 7.5 kW continuous and 18 kW for 30 seconds (SP PRO Series 2i datasheet, 2026). A Fronius GEN24 in Full Backup publishes 12.4 kVA for 5 seconds and terminates backup operation if the overload persists (Fronius backup power solution sheet, 2025). Grid-hybrid packs sit at about 1.2 to 1.4 times rated output for 5 to 10 seconds (manufacturer backup datasheets, 2026). A direct-on-line pump drawing several times its nameplate at start only forgives the first curve. Why that gap decides pumps and compressors is covered in the [48V versus high-voltage guide](/guides/48v-vs-high-voltage-battery-system).",
			],
		},
		{
			heading: "The quote traps",
			body: [
				"Panel-heavy, battery-light. Arrays look impressive and cost little per watt, so packaged quotes pad the array and thin the bank. Compare usable kWh against your load list, not panel count.",
				"Overload never stated. If the quote carries no 30-second overload figure for the inverter, ask for it with the datasheet attached. For instance, the gap between 1.3 times for 10 seconds and 2.4 times for 30 seconds (SP PRO Series 2i datasheet, 2026) is exactly the gap between a stalled pump and a started one.",
				"Nominal dressed as usable. Pylontech publishes 4.8 kWh nominal and 4.56 kWh usable per US5000 module (manufacturer page, 2026); RENOZ publishes 5.12 and 4.61 (datasheet, 2025). Both are honest because both say usable. A quote that says 5 kWh and stops is hiding the number you need.",
				"Single-line pricing. One number with no current limits, no BOS detail and no commissioning scope means you are buying a price, not a system. Demand the line items; a genuine supplier produces them the same day.",
				"Generator port missing. If the site will ever carry a genset, the inverter needs an AC input for it and the control to start and stop it. Retrofitting is possible; specifying it up front is cheaper.",
			],
		},
		{
			heading: "How to normalise two quotes",
			body: [
				"Bring both quotes down to three numbers: dollars per usable kWh, surge headroom in kilowatts at 30 seconds, and autonomy days at your winter load. Dollars per usable kWh is quoted price divided by usable kWh: an 18 kWh usable bank quoted at $30,000 is about $1,667 per usable kWh, and the same arithmetic on the second quote usually reveals the better buy. The full sizing method, autonomy targets included, lives in the [battery sizing guide](/guides/battery-sizing-off-grid-wa).",
				"Consider what the headline number hides: a larger nominal bank inside a closed ecosystem can cost more per usable kWh over five years than a smaller modular one that grows with the load, because expansion reuses the inverter you already paid for.",
			],
		},
		{
			heading: "Rebates and the CEC gate",
			body: [
				"The federal Cheaper Home Batteries Program (CHBP) is available to off-grid systems: there is no grid-connection condition and no virtual power plant condition ([DCCEEW program page](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries)). The WA Residential Battery Scheme (WARBS) is grid-connected and VPP-enrolment based, so most genuinely off-grid properties chase CHBP only. We publish no rates or caps; they change and are model-specific.",
				"Eligibility runs through the Clean Energy Council approved list, because schemes require batteries from the list, and the list is dynamic: in January 2026 the expiry dates for [more than 700 products were brought forward](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries/new-expiry-dates-batteries-ts5398) in the transition to SA TS 5398. No standing approval claims appear on this page for any model, RENOZ included: check the exact model numbers on your quote against the [live CEC list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries). The [WA rebates checklist](/guides/wa-battery-rebates-cec) keeps the current checks in one place.",
			],
		},
		{
			heading: "WA logistics and who owns what",
			body: [
				"Stand-alone systems are designed under AS/NZS 4509.1, battery installs carry the electrical-safety obligations of AS/NZS 5139 (Standards Australia, 2019), and grid-interfacing inverters are certified to AS/NZS 4777.1. Regulators enforce these: [Energy Safe Victoria](https://www.energysafe.vic.gov.au/battery-storage), for example, requires battery systems installed and inspected by appropriately licensed workers.",
				"The roles are fixed: the OEM supplies hardware, documentation and support; the accredited installer owns site-specific design, protection, approvals and commissioning. What a Perth-stocked package changes is logistics: spares and engineering a phone call away rather than a container away. Cost ranges by system size live in the [off-grid cost guide](/guides/off-grid-system-cost-wa), so we will not repeat them here.",
			],
		},
		{
			heading: "The checklist to send with any package quote",
			body: [
				"The 30-second overload figure for the inverter, in kilowatts or multiples of rating, with the datasheet attached.",
				"Battery usable kWh per module and per bank, at the stated depth of discharge, from the manufacturer's datasheet rather than the bundle flyer.",
				"Battery current limits and how they meet the inverter's charge and discharge stages; a 100 A charge stage at 48 V is about 4.8 kW, plain arithmetic from the published limits (datasheet, 2025).",
				"Generator provision: the AC input rating, two-wire start support, and who programs the start-stop logic. How to size the hybrid end-to-end is in the [generator hybrid guide](/guides/off-grid-generator-hybrid-sizing).",
				"Expansion: what adding 10 kWh costs later, and what the inverter allows before it runs out of channels.",
				"CEC listing status for the exact model numbers on the quote, checked against the live list, plus who signs the commissioning paperwork against AS/NZS 4509.1.",
			],
		},
	],
	proofLinks: [
		{
			label: "CEC approved batteries list",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			external: true,
		},
		{
			label: "CEC, new expiry dates for batteries (SA TS 5398 transition)",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries/new-expiry-dates-batteries-ts5398",
			external: true,
		},
		{
			label: "CEC, battery storage guide for consumers",
			href: "https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf",
			external: true,
		},
		{
			label: "Cheaper Home Batteries Program",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "Standards Australia, AS/NZS 5139:2019 announcement",
			href: "https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector",
			external: true,
		},
		{
			label: "Energy Safe Victoria, battery energy storage systems",
			href: "https://www.energysafe.vic.gov.au/battery-storage",
			external: true,
		},
		{
			label: "Pylontech US5000 product page",
			href: "https://en.pylontech.com.cn/products/us5000",
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
			label: "Off-grid battery sizing WA",
			href: "/guides/battery-sizing-off-grid-wa",
		},
		{
			label: "Off grid solar system cost WA",
			href: "/guides/off-grid-system-cost-wa",
		},
		{
			label: "WA battery rebates and CEC checklist",
			href: "/guides/wa-battery-rebates-cec",
		},
		{
			label: "Off-grid solar with generator backup: sizing the hybrid",
			href: "/guides/off-grid-generator-hybrid-sizing",
		},
	],
	faqHeading: "Package questions worth asking before you pay",
	faqs: [
		{
			question: "What should be included in an off-grid solar package?",
			answer:
				"Seven things, each itemised: the solar array sized to your load and recharge target, the inverter-charger with a published overload curve, the battery bank quoted in usable kWh, the balance of system (mounting, cabling, fuses, surge protection, enclosures), monitoring, the installation itself, and commissioning against AS/NZS 4509.1 with paperwork. If any of the seven is a single line or missing, that is the risk you are being asked to carry. Sizing starts with a load audit: the method is in the [battery sizing guide](/guides/battery-sizing-off-grid-wa).",
		},
		{
			question: "Why is usable kWh different from nominal?",
			answer:
				"Nominal kWh is the cell-stack rating; usable kWh is what the BMS lets you draw before the battery stops. The gap is material: RENOZ's LV-5KWH100AH module is [5.12 kWh nominal and 4.61 kWh usable (~90%)](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf), and Pylontech's US5000 is [4.8 kWh nominal and 4.56 kWh usable (95%)](https://en.pylontech.com.cn/products/us5000). Size autonomy, compare quotes and sign rebate paperwork on usable figures, or you will overestimate what the system delivers by up to a tenth or more.",
		},
		{
			question: "Do off-grid packages come with a generator?",
			answer:
				"Usually not. The genset is specified separately in most genuine off-grid designs. What the package must include is the provision: an AC input rated for the genset, two-wire start or equivalent control, and a charger stage matched to the genset's realistic output. A 100 A charge stage at 48 V is about 4.8 kW, so a genset far larger than the charger plus daytime load wastes fuel. How the pieces size against each other is the subject of our [generator hybrid guide](/guides/off-grid-generator-hybrid-sizing).",
		},
		{
			question: "Can I get the battery rebate on an off-grid package?",
			answer:
				"Often yes, through the federal [Cheaper Home Batteries Program (CHBP)](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries), which has no grid-connection condition and no VPP condition. The WA Residential Battery Scheme (WARBS) is grid-connected and VPP-based, so most truly off-grid properties qualify for CHBP but not WARBS. Eligibility runs through the CEC approved list for the exact model, and we publish no rates or caps because they change: the [WA rebates checklist](/guides/wa-battery-rebates-cec) holds the current checks.",
		},
		{
			question: "Why does a package cost less than the sum of its parts?",
			answer:
				"Bulk buying, standardised design and labour efficiency are real savings, and some packages pass them on honestly. The risk is that standardisation suits the vendor's stock rather than your loads: the array is padded because panels are cheap per watt, while the battery, the BOS and the commissioning scope are thinned. Compare on dollars per usable kWh, surge headroom and autonomy days, then read the line items.",
		},
		{
			question: "Can I add battery capacity later?",
			answer:
				"Depends on the archetype. Modular 48V systems add rack modules or parallel towers within the engineered design, which is the cheapest expansion path. Grid-hybrid kits expand only with same-brand modules inside the closed ecosystem. Integrated all-in-one boxes are fixed by the enclosure. Ask the expansion question before you buy, because it changes the five-year cost per usable kWh more than the initial price does.",
		},
		{
			question: "Will a package run my bore pump?",
			answer:
				"Only if the inverter's overload curve says so. A direct-on-line motor draws five to seven times its nameplate current for the first seconds, so a 1.5 kW pump can demand 7 kVA or more at start. Ask for the 30-second figure in kilowatts: a grid-forming inverter-charger publishing 18 kW for 30 seconds (SP PRO Series 2i datasheet, 2026) starts pumps that a 1.3-times hybrid trips on. The full physics is in the [flagship off-grid guide](/guides/best-off-grid-battery-australia), and a soft starter or VFD is the fallback fix either way.",
		},
		{
			question: "What warranty comes with a package?",
			answer:
				"Three warranties, not one: the panels' performance warranty, the battery's product and cycle warranty, and the inverter's warranty. The RENOZ LV platform carries a 10-year product warranty per the current document on the [resources library](/resources). Verify each document exists and names the exact model on your quote, and keep the commissioning records: they are what a warranty claim actually runs on.",
		},
	],
	closing: {
		heading: "Read the line items, then ask the two questions",
		body: "A package can be a fair way to buy a stand-alone system, provided the line items survive daylight. Ask the two questions every quote must answer: what is the 30-second overload curve, and what is the generator plan. Then verify the exact models on the live CEC list and let the installer sign commissioning against the standards. Boring on purpose, and it is the difference between buying a system and buying a price.",
	},
	cta: {
		primaryLabel: "Get a RENOZ system design for your site",
		primaryTo: "/contact",
		secondaryLabel: "See rural & off-grid storage",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};
