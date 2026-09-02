import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "stand-alone-power-system-wa",
	title: "Stand Alone Power System WA: How SPS Works and What It Costs 2026",
	description:
		"Stand alone power systems (SPS) in Western Australia explained: the Western Power and Horizon Power programs, what a utility SPS costs, what a private SPS costs, and how to decide.",
	primaryKeyword: "stand alone power system wa",
	h1: "What is a stand alone power system (SPS) in WA, and what does one cost?",
	updated: "2026-09-02",
	claimsPending: false,
	newsletter: true,
	eyebrow: "Pillar guide · Stand-alone power systems · Western Australia 2026",
	intro: [
		"A stand alone power system (SPS) in Western Australia is a self-contained electricity supply: solar panels, a battery bank, an inverter-charger and usually a backup generator, installed where the overhead grid is expensive or unreliable to run. In WA the term covers two very different things. The utilities build utility-owned SPS units that cost roughly $200,000 to $230,000 per property to install, according to Western Power public descriptions and Economic Regulation Authority review figures. A privately owned SPS for a typical rural home runs $40,000 to $65,000 installed, before the federal [Cheaper Home Batteries Program](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries) takes roughly 30% off the battery component.",
		"The phrase matters more than it looks. Stand alone power system wa is the term WA suppliers and the utilities themselves use, and it is the search that surfaces actual providers rather than generic content. 'Off grid solar' mostly returns national brand pages, while SPS points at the two WA programs and the installers who quote private systems.",
		"This guide covers the full picture: what AS/NZS 4509.1 actually requires, how the Western Power and Horizon Power SPS programs work and who pays, what a utility SPS costs versus a private one, and an honest account of where each path succeeds and where it has failed. RENOZ supplies battery platforms for private SPS builds, so we declare that interest here and let the published numbers do the comparing.",
	],
	expertise: {
		heading:
			"Written from the supplier side, with the utility story told straight",
		body: [
			"RENOZ Energy is a Perth battery OEM. We supply LiFePO4 battery platforms that accredited installers design private stand-alone power systems around, so we have a commercial interest in the private path. What we do not do is utility SPS work; Western Power and Horizon Power own and maintain theirs.",
			"Because the utilities' own program is the reference point for the term SPS in WA, this guide reports their published figures alongside the critical reporting. The sceptic material matters as much as the brochure material: farmers in WA's south have documented outages and maintenance problems on utility SPS units, and that record is part of any honest answer.",
		],
	},
	decisionHeading: "Utility SPS vs private SPS at a glance",
	decisionRowLabels: [
		"Ownership",
		"Indicative cost",
		"How you get one",
		"System size",
		"Rebates",
		"Maintenance",
		"Grid connection",
	],
	decisionColumns: [
		{
			name: "Utility SPS (Western Power / Horizon)",
			highlight: false,
			cells: [
				"Utility owns and maintains it",
				"~$200,000-$230,000 to the utility, not the landowner",
				"Cannot apply; utility selects properties",
				"5-25 kW; 10-50 kWh (largest ~72 kW / ~86 kWh)",
				"None to the customer; utility capital",
				"Utility's; reported slow response at remote sites",
				"Grid connection usually permanently removed",
			],
		},
		{
			name: "Private SPS (owner-commissioned)",
			highlight: true,
			cells: [
				"You own it; installer designs and commissions",
				"$15,000-$30,000 weekender; $40,000-$65,000 3-bed home; $70,000-$120,000+ farm",
				"Quotes any time from SAA-accredited installers",
				"Sized to audited loads; modular expansion",
				"CHBP: roughly 30% off the battery, off-grid eligible",
				"Yours to maintain; plan remote support and spares",
				"Choice: connect to the grid, or never build the line at all",
			],
		},
	],
	sections: [
		{
			heading:
				"What is a stand alone power system? The AS/NZS 4509.1 definition",
			body: [
				"A stand alone power system is an electricity supply that operates without connection to a main electricity grid. The governing Australian standard, AS/NZS 4509.1, requires the designer to analyse the site's actual energy use, usage habits and peak demand in detail, then size the generation array, the inverter-charger and the battery bank against those figures. It is an installation and safety standard, used alongside AS/NZS 3000 wiring rules, and it is the reason a proper SPS quote starts with a load audit rather than a catalogue.",
				"In practice, a stand alone power system has four parts. Solar panels generate the energy. A battery bank, almost always LiFePO4 chemistry in current Australian designs, stores it for night and cloudy weather. An inverter-charger converts battery DC into 230 V AC household supply and manages charging. A backup generator, usually diesel, covers extended overcast periods and fault recovery. Depth of discharge matters here: LiFePO4 banks are designed for around 80% usable capacity, so a 25 kWh gross bank delivers roughly 20 kWh usable.",
				"The term SPS is not marketing language. It appears in the standard, in Western Power's program documentation and in WA energy policy, which is why suppliers use it and why it is the phrase to search when you want WA providers rather than overseas content.",
			],
		},
		{
			heading: "How the Western Power SPS program works",
			body: [
				"[Western Power's stand-alone power system program](https://www.westernpower.com.au/resources-education/faqs/stand-alone-power-systems/) replaces selected long, remote overhead network connections in its South West Interconnected System with utility-owned SPS units. Each unit combines solar panels, battery storage and a backup diesel generator with monitoring and control equipment. The utility pays for site investigations, installation, ongoing operation and maintenance, faults and eventual system replacement. As an ABC News investigation reported in July 2026, 498 standalone units had been installed across regional WA by that date, with 100 in the Shire of Cranbrook alone.",
				"The economics only work because of what the program removes. Maintaining kilometres of single-phase overhead line to serve one or two properties is expensive and creates bushfire and reliability risk, so in the right locations a utility-grade SPS is cheaper over its life than the poles and wires it replaces. The [Economic Regulation Authority's review material](https://www.erawa.com.au/cproot/22862/2/Engevity---Attachments---Redacted.PDF) records average capital costs of about $287,000 per SPS in Round 1 and about $229,000 in Round 2, and Western Power has publicly described the cost as roughly $200,000 per system.",
				"That figure is a program cost, not a bill. Properties selected for the program do not pay the $200,000. Customers keep paying their electricity retailer under normal tariff arrangements, and Western Power remains responsible for faults, maintenance and replacement. The trade is that the old grid connection is usually permanently removed, which is exactly where the program has run into trouble.",
			],
		},
		{
			heading: "Horizon Power's SPS program in regional WA",
			body: [
				"Horizon Power, which serves regional and remote WA outside the South West Interconnected System, runs an equivalent [standalone power systems program](https://www.horizonpower.com.au/your-community/getting-future-ready/renew-the-regions/standalone-power-systems/). The [WA Government committed in November 2022](https://www.wa.gov.au/government/media-statements/McGowan%20Labor%20Government/Standalone-power-systems-roll-out-in-regional-Western-Australia-20221128) to 1,000 SPS units across the state over five years, with a $45.8 million Horizon tranche originally targeting 150 systems. By the 2025-26 budget that Horizon commitment had been adjusted to 94 funded systems, reflecting higher delivery costs and Building and Energy compliance issues, and Horizon's 2024-25 annual report recorded 84 hybrid renewable systems delivered. Concentrations sit around Esperance, Hopetoun, Exmouth and Carnarvon.",
				"Horizon's standard designs supply an equivalent level of service to the removed network connection: around 16-24 kW for properties previously supplied by 10-25 kVA transformers. The state budget papers describe the fleet as ranging from roughly 5-25 kW output with 10-50 kWh of battery storage in older or smaller units, up to about 72 kW output and 86 kWh of battery in the newest systems. Around 80% of the energy those systems delivered came from renewables, and average backup-generator runtime across the fleet in 2024-25 was about 22 hours per month.",
				"Like Western Power, Horizon does not offer SPS installation as a general application program. It identifies candidate properties through asset-management planning and contacts customers directly. You cannot ring Horizon and order an SPS for your block; you can only be selected.",
			],
		},
		{
			heading: "What a utility SPS costs, and who pays",
			body: [
				"The most specific published figures come from the Economic Regulation Authority's review material: average capital cost of roughly $287,000 per system in Round 1 of the program and $229,389 in Round 2, excluding risk and escalation allowances. Western Power has described the cost as approximately $200,000 per system in public statements, and [ABC News questioned value for money on those figures in March 2024](https://www.abc.net.au/news/2024-03-12/farmers-question-western-power-push-standalone-regional-units/103549708).",
				"Those figures cover utility-grade scope: engineered design, redundant backup generation, monitoring, remote control, installation at remote sites, and in many cases decommissioning of the overhead line. That is why they dwarf the cost of a private off-grid system with similar headline capacity. The utility unit carries program overheads, network-grade procurement and 20-plus-year maintenance obligations that a private owner never signs up for.",
				"For the landowner the honest summary is: a utility SPS costs you nothing upfront, keeps you on a normal tariff, and hands maintenance to the utility. What it can cost you is control. The ABC's 2026 reporting documented farmers moved onto SPS units without landowner consent being required under WA legislation, and the old grid connection removed in the process. If the system underperforms for a high-load farm, restoring the connection is not a simple ask; one Tenterden farmer's request to go back on the grid was rejected.",
			],
		},
		{
			heading: "What a private stand alone power system costs in WA",
			body: [
				"A privately commissioned SPS is priced from your load audit, but WA market pricing gives stable bands. A small weekender or bush-block system runs $15,000-$30,000 installed including solar, inverter and battery. A standard three-bedroom rural home with refrigeration, pumping and normal household loads typically lands at $40,000-$65,000. Farm and high-load sites with bore pumps, cold rooms or workshops run $70,000-$120,000 and beyond, with batteries typically 40-50% of system cost.",
				"The federal [Cheaper Home Batteries Program](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries) applies to these private off-grid systems: roughly 30% off the battery cost at point of sale via STCs, with no grid connection required, as confirmed by DCCEEW. The WA Residential Battery Scheme does not apply, because it requires VPP enrolment on the Synergy or Horizon grid. Requirements for the federal rebate are a CEC-approved battery and an SAA-accredited installer; our [WA rebate and CEC approval guide](/guides/wa-battery-rebates-cec) explains how to check both.",
				"For context on scale, the [Harvey farm case study](/case-studies/harvey-farm) in WA is a private system: 35.8 kWh of gross battery, 21 kWp of solar, a Selectronic SPMC482 with Fronius Primo AC coupling, installed after the owner received a $200,000 grid connection quote. That single quote is the hinge point most private SPS decisions swing on. For the full cost breakdown by system class, see [what an off-grid system costs in WA](/guides/off-grid-system-cost-wa).",
			],
		},
		{
			heading: "Utility SPS vs private SPS: who is each one for?",
			body: [
				"A utility SPS suits a property the network itself no longer wants to serve: an existing grid customer at the end of a long, fault-prone single-phase spur, with household-scale loads and no plans to expand them. If Western Power or Horizon Power selects your property, you get utility-grade equipment, someone else's maintenance problem, and your existing tariff. You give up the grid connection and, with it, headroom for a workshop, big pumps or future sheds.",
				"A private SPS suits the property the network never reached, or reaches only at a price that makes no sense. If you are facing a connection quote in the tens of thousands of dollars, or your block sits more than 1 km from the grid, the federal battery rebate and the economics of private off-grid are in your favour. The CER's off-grid rebate eligibility rule hinges on being more than 1 km from the grid or facing a connection cost above $30,000, so verify your distance and your quote before you decide anything.",
				"The farmers the ABC interviewed who struggled with utility SPS units had one thing in common: loads and expectations bigger than the system was sized for. Capacity limits, automatic shutdowns on high draw, and generator noise near living areas were the recurring complaints. A private system sized to your actual load audit avoids exactly that failure mode, at the price of owning the maintenance yourself.",
			],
		},
		{
			heading: "What the sceptics say, and what they get right",
			body: [
				"The strongest sceptical reporting on WA's SPS program is the ABC's July 2026 investigation. [Farmers described roughly 70 power outages](https://www.abc.net.au/news/2026-07-05/maintenance-issues-in-wa-standalone-power-systems/106807116) on one system since its 2022 installation against three or four a year on the old grid, generator noise audibly close to bedrooms, and years-long waits for remediation on early units. A Cranbrook shire chief executive described an 85-year-old resident told her power was being cut off only when crews arrived on her property, because WA legislation does not require landowner consent.",
				"Western Power's response to that reporting was that the program is delivering strong outcomes, with 96% of users experiencing better reliability since installation, and that some initial units required remediation and upgrades as the utility learned more about individual customer needs. Both things can be true: most customers get better reliability than a failing overhead line, and the customers at the margin, particularly high-load farms, have worn real disruption.",
				"The transferable lesson for private buyers is about design authority and local support, not about whether SPS works. Systems fail when loads are not audited honestly, when the generator is undersized or badly located, and when the service response is measured in days of travel time. Those are procurement decisions you control on a private build.",
			],
		},
		{
			heading: "How you actually get an SPS in WA",
			body: [
				"If your property is already grid-connected and Western Power or Horizon Power approaches you about an SPS, the utility drives the process: energy audit, site inspection, agreement, design, installation, cutover, and removal of the redundant line. Ask specifically about sized headroom for future loads, generator location relative to bedrooms, automatic reset capability, and what happens to your tariff and consumer protections. Horizon commits to the same tariff and protections as network customers; get any promise in writing.",
				"If you are not yet connected, or you are holding a connection quote you cannot justify, the private path starts with a load audit and ends with quotes from SAA-accredited off-grid installers. There is no application to the utility and no waiting for asset planning to select you. The design obligations under AS/NZS 4509.1 sit with your installer, and the battery must be CEC-approved to qualify for the federal rebate.",
				"The middle case matters too: a grid connection that exists but fails regularly. Before accepting a utility SPS replacement or paying for private off-grid, price three things: the utility's own repair record on your line, what a private system sized to your loads would cost, and what a generator-only interim would cost you. Our [fringe-of-the-grid guide for WA](/guides/fringe-of-grid-battery-wa) walks through that decision.",
			],
		},
		{
			heading: "Sizing a private SPS: the load audit comes first",
			body: [
				"Every credible SPS design starts from daily kilowatt-hours, not from panel or battery branding. Walk through every appliance, note its wattage and hours of use, total the daily kWh, then multiply by your target days of autonomy and divide by 0.8 for LiFePO4 depth of discharge. A 3-bed rural WA home at 18 kWh per day with 2.5 days of autonomy needs about 56 kWh gross, which is 11 RENOZ 5.12 kWh modules. Our [WA battery sizing guide](/guides/battery-sizing-off-grid-wa) runs the full method with worked examples.",
				"Two loads break casual sizing assumptions. Motor loads such as bore pumps draw 4-8 times their running current at startup, which sizes the inverter in kVA rather than the battery in kWh. And generator runtime is the hidden operating cost: a private SPS that leans on its genset every overcast day carries fuel, servicing and noise that a bigger solar array would have avoided. Horizon's own fleet averaged about 22 generator hours per month in 2024-25, which is a useful public benchmark for a well-run system.",
				"Design the generator as an emergency backstop, not a daily participant. Oversize the solar array before the battery in WA's climate, keep high-draw jobs like pumping and welding in daylight hours, and the generator becomes the 2-hours-every-few-days machine it should be. Our [guide on moving a WA farm from diesel to battery](/guides/diesel-to-battery-wa-farms) covers that transition in detail.",
			],
		},
	],
	proofLinks: [
		{
			label: "Western Power stand-alone power systems FAQ",
			href: "https://www.westernpower.com.au/resources-education/faqs/stand-alone-power-systems/",
			external: true,
		},
		{
			label: "Western Power SPS network technology",
			href: "https://www.westernpower.com.au/resources-education/our-network-the-grid/grid-technology/stand-alone-power-system/",
			external: true,
		},
		{
			label:
				"ABC News: maintenance issues, outages plague WA standalone power systems (Jul 2026)",
			href: "https://www.abc.net.au/news/2026-07-05/maintenance-issues-in-wa-standalone-power-systems/106807116",
			external: true,
		},
		{
			label:
				"ABC News: farmers question value for money of SPS push (Mar 2024)",
			href: "https://www.abc.net.au/news/2024-03-12/farmers-question-western-power-push-standalone-regional-units/103549708",
			external: true,
		},
		{
			label: "Horizon Power standalone power systems",
			href: "https://www.horizonpower.com.au/your-community/getting-future-ready/renew-the-regions/standalone-power-systems/",
			external: true,
		},
		{
			label: "WA Government: SPS roll-out media statement (Nov 2022)",
			href: "https://www.wa.gov.au/government/media-statements/McGowan%20Labor%20Government/Standalone-power-systems-roll-out-in-regional-Western-Australia-20221128",
			external: true,
		},
		{
			label: "Federal CHBP: off-grid eligibility confirmed",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "Harvey farm case study",
			href: "/case-studies/harvey-farm",
			external: false,
		},
	],
	faqHeading: "Stand alone power system questions WA buyers actually ask",
	faqs: [
		{
			question: "What does a stand alone power system cost in WA?",
			answer:
				"It depends who builds it. A utility-owned SPS from Western Power or Horizon Power costs roughly $200,000-$230,000 per property to install, according to Western Power public descriptions and Economic Regulation Authority review figures, but selected customers pay nothing upfront and stay on their normal tariff. A privately commissioned SPS runs $15,000-$30,000 for a weekender, $40,000-$65,000 for a 3-bed rural home and $70,000-$120,000+ for a farm-scale site, with roughly 30% off the battery via the federal CHBP.",
		},
		{
			question: "Can I apply for a Western Power or Horizon SPS?",
			answer:
				"No. Both utilities run SPS as an asset-planning program, not a customer application. They identify properties where replacing long overhead connections with an SPS is cheaper than maintaining the line, then contact the customer. You can ask about your situation, but you cannot order a utility SPS. If you need off-grid power now, the private path with an SAA-accredited installer is the one you control.",
		},
		{
			question: "Is a stand alone power system the same as off-grid solar?",
			answer:
				"Functionally yes: both combine solar, battery storage, an inverter-charger and usually a backup generator with no grid connection. SPS is the term used in AS/NZS 4509.1, in WA energy policy and by the utilities themselves. Searching SPS in WA surfaces the utilities' programs and local suppliers; searching off-grid solar mostly surfaces generic national content. The engineering is the same either way, which is why a load audit governs both.",
		},
		{
			question:
				"Do stand alone power systems qualify for the federal battery rebate?",
			answer:
				"Privately owned off-grid systems do. The federal Cheaper Home Batteries Program is available off-grid, with no grid-connection condition and no VPP condition, delivering roughly 30% off the battery at point of sale. The battery must be CEC-approved and the installer SAA-accredited. The WA Residential Battery Scheme does not apply to off-grid systems because it requires VPP enrolment via the Synergy or Horizon grid. The CER's off-grid rule hinges on being more than 1 km from the grid or facing a connection cost above $30,000.",
		},
		{
			question: "Are the utility SPS units reliable?",
			answer:
				"The record is mixed and worth reading in full. Western Power says 96% of users have experienced better reliability since installation. But the ABC reported in July 2026 that farmers in WA's south had experienced repeated outages and maintenance delays on some units, including roughly 70 outages since 2022 on one Tenterden farm, and Western Power has acknowledged some initial units required remediation. High-load farm operations were the most affected. Ask for local references before forming a view on your area.",
		},
		{
			question: "Should I take a utility SPS or build my own?",
			answer:
				"Take the utility SPS if you are offered one, your loads are household-scale, and you have no expansion plans: it is utility-grade equipment at no upfront cost with maintenance handled for you. Build private if your loads are large or growing, if you want sized headroom for a workshop or pumps, or if you are unconnected and facing a six-figure connection quote. On a $200,000+ connection quote, a private system at $40,000-$120,000 leaves substantial change even after allowing for battery replacement and generator fuel.",
		},
	],
	closing: {
		heading: "Know which SPS conversation you are in",
		body: "If the utilities have selected your property, ask hard questions about headroom, reset behaviour and response times before agreeing. If you are unconnected and staring at a connection quote, get a load audit done and price a private system against it before you sign anything.",
	},
	cta: {
		primaryLabel: "Spec a private off-grid system",
		primaryTo: "/products/rural",
		secondaryLabel: "Talk to the RENOZ team",
		secondaryTo: "/contact",
	},
	relatedProductPaths: ["/products/rural"],
};
