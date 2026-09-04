import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "off-grid-generator-hybrid-sizing",
	title: "Off-Grid Solar with Generator Backup: Sizing the Hybrid",
	description:
		"How to size an off grid power system with generator backup: load audit, autonomy days, surge kW, genset duty cycle and AC-coupled generator control, from a Perth OEM.",
	primaryKeyword: "off grid power systems with generator",
	h1: "Sizing off-grid solar with generator backup",
	updated: "2026-09-04",
	claimsPending: false,
	newsletter: true,
	eyebrow: "Sizing guide · Off-grid · WA 2026",
	intro: [
		"A generator in an off-grid system is not a failure of the solar array. Used properly it is the component that buys the array down to a sane size, covers the week of rain in July, and starts the pump no inverter can. Used badly it becomes the most expensive part of the system to own, running hundreds of hours a year at a fraction of its rated load. The difference is sizing order and control wiring, and both are decided on paper before anyone quotes.",
		"Off grid power systems with generator backup are sized in a strict sequence: load audit first, daily kilowatt-hours second, autonomy days third, surge kilowatts fourth, and only then the genset. Reverse the order and you get the classic farm system failure: a battery sized by feel, an inverter that trips on pump start, and a generator running twelve hours a day to cover both mistakes. [Selectronic's SP PRO Series 2i datasheet](https://www.selectronic.com.au/sp-pro-series-2i-spmc482-au/) publishes the overload behaviour that makes the sizing order matter, and the arithmetic in this guide uses published figures only.",
		"This page is written for WA farms and stations deciding what role the generator plays in a hybrid system. The full battery-sizing maths lives in the [off-grid battery sizing guide](/guides/battery-sizing-off-grid-wa), so this page covers the sequence, the genset's coupling and control, duty-cycle economics, and one worked WA example. RENOZ supplies the battery platform in these architectures, so we say so and keep every figure traceable.",
	],
	expertise: {
		heading: "How this guide is built",
		body: [
			"RENOZ supplies the 48V lithium platform in the hybrid architectures described here, stocked and supported from Perth. Every number in this guide is either a published datasheet figure, a figure already published in one of our guides or case studies, or arithmetic stated as arithmetic. Nothing about any generator brand is invented here; where generator specifics matter we point to the guides that own them.",
			"Every system ends the same way: verify exact models on the live [CEC approved-products list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries), and let an accredited installer own the site-specific design. That is not a hedge, it is how AS/NZS 4509 compliant off-grid systems are actually delivered.",
		],
	},
	decisionHeading: "Four roles a generator can play in a hybrid system",
	decisionRowLabels: [
		"Runs when",
		"Sized against",
		"Battery kWh role",
		"Inverter requirement",
		"Fuel logistics",
		"Control wiring",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Backup only",
			cells: [
				"Waits for a low state of charge threshold, typically a few hours a year",
				"Covering the array's worst week, not the average day",
				"Sized for the array's bad-season shortfall plus a reserve margin",
				"Any grid-forming unit; genset only feeds it, never loads it directly",
				"Stored months at a time, so fuel condition and starting need a maintenance schedule",
				"Two-wire start wired to the inverter-charger's generator control output",
				"You already have a big array and good solar resource, and the genset is insurance",
			],
		},
		{
			name: "Bridge / peak-shaver",
			highlight: true,
			cells: [
				"Regular duty: poor solar spells plus surge cover for pump and compressor starts",
				"Charger acceptance plus daytime load combined, so it runs near rated output",
				"Smaller stack is viable because the genset carries multi-day shortfalls",
				"Needs published overload headroom; the [SP PRO](https://www.selectronic.com.au/sp-pro-series-2i-spmc482-au/) figure of 2.4 times rated for 30 seconds is the class reference",
				"On-site fuel storage with delivery logistics worked out before winter, not during it",
				"Two-wire start plus inverter-charger genset management (warm-up, load ramp, stop on charge)",
				"Pump-heavy sites where array upsizing to cover every surge is uneconomic",
			],
		},
		{
			name: "Diesel transition",
			cells: [
				"Starts as a workhorse, hours shrink every year as solar and storage grow",
				"Phase one against existing diesel run hours; re-evaluate after each storage expansion",
				"Each battery expansion directly cuts genset hours; track it in the [run-cost maths](/guides/generator-running-costs-wa)",
				"Grid-forming inverter-charger that takes the genset on AC-in and charges while supplying loads",
				"Existing farm fuel infrastructure carries over during the transition",
				"Inverter-charger generator management from day one, so later phases need no rewire",
				"You are displacing an established diesel supply system rather than starting fresh",
			],
		},
		{
			name: "Genset-led (retrofit start)",
			cells: [
				"Generator runs daily today; solar and battery arrive around it",
				"Current fuel burn and run hours, which is the business case for the retrofit",
				"Starts modest; the [sizing maths](/guides/battery-sizing-off-grid-wa) grows the stack as hours fall",
				"Genset must couple through the inverter-charger's AC-in, not straight to the loads, or storage never charges cleanly",
				"Fuel supply is already solved, which is the one advantage of starting here",
				"Retrofit control wiring: two-wire start added to the existing genset panel",
				"A working property already running the genset daily, adding solar and storage to cut its hours",
			],
		},
	],
	sections: [
		{
			heading: "The sizing order: loads, kWh, autonomy, surge, then genset",
			body: [
				"Off-grid design has one correct sequence. Step one is a load audit: list every circuit, its wattage, its daily run pattern, and whether it starts direct-on-line. Step two converts that to daily kilowatt-hours, winter-day figures, not annual averages. Step three sets autonomy days. **Autonomy days** is the number of consecutive low-solar days the battery alone must carry the full load before the generator is asked for anything. Step four sizes the surge: every direct-on-line motor multiplies its nameplate by five to seven times for seconds at start, so a 1.5 kW bore pump can demand more than 7 kVA when it kicks in. Step five, and only step five, sizes the genset.",
				"Why does the genset come last? Because its size is a consequence, not an input. A genset must cover charger acceptance plus whatever loads run while it charges. Get the battery and inverter wrong and no genset size fixes the system; get them right and the genset often shrinks dramatically. For example, a site that reduces its winter shortfall by adding one battery module may drop its genset from an eight-hour daily run to a two-hour top-up, without touching the genset at all. The full step-by-step maths, with worked examples, lives in the [battery sizing guide for off-grid WA](/guides/battery-sizing-off-grid-wa).",
				"Surge is where the sequence bites hardest. The overload curve decides whether the pump starts on the inverter or on the genset, and that is its own decision below, not something you paper over with a bigger genset.",
				"Every number in that sequence traces to a published source. The five-to-seven-times locked-rotor multiple is standard motor physics referenced across our [48V off-grid shortlist](/guides/best-off-grid-battery-australia); the CEC's consumer [battery storage guide](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf) frames how usable capacity, chemistry and depth of discharge feed the autonomy maths; and the inverter datasheets supply the surge numbers. A design built in this order documents each step, which is what an accredited installer needs to certify the system under AS/NZS 4509 without guesswork.",
			],
		},
		{
			heading: "Battery kilowatt-hours and autonomy on the 48V platform",
			body: [
				"Usable kilowatt-hours are the only number that matters in autonomy maths. The RENOZ LV-5KWH100AH module publishes 5.12 kWh nominal and 4.61 kWh usable per module ([LV-5KWH100AH datasheet, 2025](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf)), with approved towers of 8 or 10 modules. Stated as arithmetic: a 10-module tower holds 46.1 kWh usable, and two towers hold 92.2 kWh. A site with a 25 kWh/day winter load and one autonomy day of design margin is looking at roughly a two-tower system before surge and depth-of-discharge reserve, and the sizing guide's tables work the exact figures.",
				"Autonomy days is the lever that trades battery capital against genset run hours. One autonomy day with a responsive genset is a common farm posture because the genset covers the second bad day cheaply. Three or more autonomy days pushes the battery stack large enough that the genset barely runs, which suits sites where fuel logistics are painful, think barge or long-haul delivery, and where a genset visit is a project rather than a chore. Neither is wrong; the fuel economics section below gives you the comparison frame.",
				"Lithium iron phosphate chemistry is what makes modest autonomy stacks credible: the [CEC battery storage guide](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf) notes LFP delivers roughly 90% of rated capacity in duty versus about 50% for lead-acid (CEC battery storage guide, 2026), so a lead-acid site converting to LFP effectively doubles its usable stack without adding a single module. For the complete sizing tables, see the [off-grid battery sizing guide](/guides/battery-sizing-off-grid-wa) rather than re-deriving them here.",
			],
		},
		{
			heading: "Why the overload curve decides who starts the pump",
			body: [
				"Every sizing conversation on a farm eventually arrives at one question: when the bore pump kicks in, does the inverter carry it or does the generator? The answer is arithmetic, not brand loyalty. A direct-on-line motor draws five to seven times nameplate current for seconds at start. The inverter either has a published overload envelope that absorbs that, or it trips and the system falls back to the genset, every single morning.",
				"The published contrast is stark. The Selectronic SP PRO SPMC482-AU is rated 7.5 kW continuous with 18 kW available for 30 seconds and 11.25 kW for 30 minutes ([SP PRO Series 2i datasheet, 2026](https://www.selectronic.com.au/sp-pro-series-2i-spmc482-au/)), which is 2.4 times continuous for the surge window. The grid-hybrid backup class, the residential all-in-ones built around grid connection, publishes roughly 1.2 to 1.4 times rated output for five to ten seconds: the Sungrow SH10RS manages 13.68 kVA for 10 seconds on a 10 kW unit, and the Fronius Symo GEN24 10.0 Full Backup holds 12.4 kVA for 5 seconds before backup operation terminates on sustained overload. Those are fine numbers for household fridges. They are not pump-start numbers on a farm.",
				"The contrast matters when you read a rural quote. A grid-hybrid unit publishing 1.37 times its rating for 10 seconds looks respectable on a spec sheet until you price a 1.5 kW bore pump against it: 7 kVA of demand versus an envelope that holds 13.68 kVA for 10 seconds on the class flagship (Sungrow SH10RS datasheet, 2026) and less elsewhere. The [SP PRO](https://www.selectronic.com.au/sp-pro-series-2i-spmc482-au/) holds 18 kW for 30 seconds, which is the difference between the pump starting on the battery and the generator waking up every morning to do it.",
				"The practical consequence for hybrid sizing: if the overload curve cannot carry the pump fleet, the generator becomes the pump starter by default, which inflates genset run hours regardless of how big the battery is. If the curve can carry the starts, the genset retreats to a low-SoC backup role and its hours collapse. Our [48V off-grid battery guide](/guides/best-off-grid-battery-australia) compares the published curves across the whole 2026 field, and they are the single most important datasheet line on a rural quote.",
			],
		},
		{
			heading: "Genset sizing and AC coupling",
			body: [
				"Genset kilowatts are sized against two concurrent demands: charger acceptance and whatever loads run while the genset is on. Stated as arithmetic: a 100 A charge stage at 48 V is about 4.8 kW, so a genset supplying that charge plus, say, 5 kW of daytime workshop and pumping load needs to cover about 10 kW of combined demand. A genset much larger than charger-plus-load wastes fuel in two ways: it runs at low load factor, and its surplus capacity does nothing the charger cannot absorb. A 30 kVA genset feeding a 4.8 kW charge stage and a 2 kW house is burning diesel to spin.",
				"Coupling is where many retrofits go wrong. The generator connects to the inverter-charger's AC-in terminals, never directly to the loads, so the inverter-charger remains the grid-forming master, the genset is a source it manages. This is what lets the inverter charge the battery from the genset while simultaneously supplying loads, and it is what enables clean changeover protection rather than a manual transfer switch and crossed fingers. AS/NZS 4509 (the stand-alone power system standard, see [Standards Australia](https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector)) expects exactly this managed relationship.",
				"Control wiring is the other half. Two-wire start is the industry standard generator start signal: a simple closed contact from the inverter-charger's generator control output that tells the genset to run, and opens to stop it. The inverter-charger then manages warm-up, load acceptance and stop conditions. The Selectronic SP PRO and Victron MultiPlus/Quattro ranges both implement full genset management over two-wire start; our [SP PRO pairing guide](/guides/renoz-with-selectronic) and [Victron pairing guide](/guides/renoz-with-victron) cover each implementation in detail. For instance, a properly configured genset management setup will not start the genset for a 30-second pump surge if the overload curve already covers it, which is exactly the behaviour that saves fuel.",
				"A note on genset quality for the record: this guide deliberately publishes no generator brand specifications, because the numbers that matter (prime rating, load-acceptance behaviour, fuel consumption curves) are brand and model specific and we will not guess them. What the inverter-charger needs from any genset is well defined though: a stable output frequency for the AC-in input, a two-wire start terminal, and a rating sized to the charger-plus-load arithmetic above. Any reputable farm genset that meets those three requirements works with the architectures in the pairing guides.",
			],
		},
		{
			heading: "Duty cycle and fuel economics",
			body: [
				"Run hours times load factor is the whole fuel story. A genset rated 20 kVA running at 4 kW output is at a 20% load factor (arithmetic, stated per the [generator running costs guide](/guides/generator-running-costs-wa)), and every litre of diesel in that regime is doing a fraction of the work it could. Running a genset at low load is false economy twice over: more litres per kilowatt-hour delivered, and wet-stacking and glazing issues that shorten engine life. The fix is never a smaller genset alone; it is sizing the genset to run near its rating when it runs at all, which loops back to the charger-plus-load arithmetic in the previous section.",
				"The comparison that matters on a WA farm is genset kilowatt-hour cost versus solar-and-storage kilowatt-hour cost over the system life, and it is not close in most daylight-rich months. But the honest answer includes the bad weeks, the winter fog, the array that iced over in July, which is precisely why the hybrid exists: the genset is the component you pay to NOT run most of the time. The dedicated cost tables, litres-per-hour regimes and diesel price sensitivity live in the [generator running costs guide](/guides/generator-running-costs-wa); the day-to-day operating realities, noise, servicing, fuel quality, are in [living with a generator](/guides/living-with-a-generator-wa); and the full farm economics comparison is in the [generator versus solar and battery guide](/guides/generator-vs-solar-battery-farm-wa). We link rather than repeat them, so this page stays a sizing page.",
				"Consider the transition framing instead: track genset run hours every month from day one. In a diesel-transition architecture, every battery expansion should show up as a visible drop in those hours. If it does not, something in the sizing or control wiring is wrong, and the run-cost guide will usually name it.",
			],
		},
		{
			heading: "Worked WA example: the Harvey farm hybrid",
			body: [
				"The clearest published WA example of the hybrid posture is the [Harvey farm case study](/case-studies/harvey-farm). The system carries a 35.8 kWh gross battery stack of 7 modules with 21 kWp of solar, on a Selectronic SPMC482 with a Fronius Primo AC-coupled, and the grid-connection quote it avoided was about $200,000. That is the bridge architecture from the decision table above in the field: the inverter's published 2.4-times-for-30-seconds overload envelope carries the pump starts, so the generator is held for genuinely poor solar spells instead of being the daily pump starter.",
				"Read the numbers through this guide's sequence. The stack is modest by station standards because autonomy was set deliberately short and the genset covers multi-day shortfalls. The 21 kWp array is sized against the winter-day load, not the annual average. And the SPMC482 was chosen for the overload curve first, continuous rating second, which is the correct priority order for any farm with direct-on-line motors. The case study records the genset duty shrinking accordingly.",
				"Stated as arithmetic for readers modelling their own site: 46.1 kWh usable from a 10-module tower against a 25 kWh/day winter load gives under two autonomy days on the battery alone, which is exactly the regime where a properly controlled genset earns its keep as a bridge rather than a crutch. Site-specific design, protection and commissioning remain the accredited installer's scope, as always.",
				"The transferable lesson is not the brand stack, it is the posture. Solar sized on winter days, battery sized on one to two autonomy days, inverter chosen on the overload curve, and the generator positioned as the bridge for what remains. Every hybrid that follows that order gets simpler to run as storage is added, because each expansion removes genset hours instead of adding battery that never gets used.",
			],
		},
		{
			heading: "Commissioning, standards and changeover protection",
			body: [
				"AS/NZS 4509.1 is the stand-alone power system standard that scopes off-grid design in Australia: load assessment, array and storage sizing, and the system's safety architecture, including how a generator integrates. It is an installer-designer document, not a buyer's checklist, but buyers should expect the design documentation to reference it. [Standards Australia's battery storage work](https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector) continues alongside the CEC's product program, and the [CEC approved battery list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) is the practical eligibility gate for any rebate conversation.",
				"On rebates, the discipline is the same as everywhere on this site: we publish no fixed rates, caps or dollar figures. The Cheaper Home Batteries Program (CHBP) is administered by the federal energy department ([DCCEEW](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries)) and applies to off-grid systems, with no grid-connection condition and no VPP condition. The WA Residential Battery Scheme (WARBS) is grid-connected and VPP-enrolment based. Verify the exact model on the live CEC list and the current scheme rules with your installer at quote time, because neither this guide nor any static page can carry those numbers responsibly.",
				"Changeover protection is the last commissioning item and the one with safety consequences. The genset's connection through the inverter-charger's AC-in, the two-wire start circuit, and any changeover switching must be designed and certified by the installer, not improvised on-farm. A hybrid system commissioned against AS/NZS 4509.1 with a properly managed generator start circuit is boring in the best possible way: it starts the pump, tops the battery, and goes back to sleep.",
			],
		},
	],
	proofLinks: [
		{
			label: "Selectronic SP PRO SPMC482-AU (overload and generator control)",
			href: "https://www.selectronic.com.au/sp-pro-series-2i-spmc482-au/",
			external: true,
		},
		{
			label: "DCCEEW: Cheaper Home Batteries Program",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "CEC approved battery list",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			external: true,
		},
		{
			label: "Standards Australia: battery storage standard",
			href: "https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector",
			external: true,
		},
		{
			label: "Best off-grid battery Australia: the 48V shortlist",
			href: "/guides/best-off-grid-battery-australia",
		},
		{
			label: "Off-grid battery sizing for WA properties",
			href: "/guides/battery-sizing-off-grid-wa",
		},
		{
			label: "RENOZ with Selectronic SP PRO",
			href: "/guides/renoz-with-selectronic",
		},
		{
			label: "Generator running costs in WA",
			href: "/guides/generator-running-costs-wa",
		},
	],
	faqHeading: "Generator hybrid questions, answered plainly",
	faqs: [
		{
			question: "How big should my generator be with a battery?",
			answer:
				"Size it against charger acceptance plus the loads that run while it charges, not against the whole property. Stated as arithmetic: a 100 A charge stage at 48 V is about 4.8 kW, so a genset covering that plus a few kilowatts of daytime load lands around 8 to 12 kW for many farms. A genset much larger than that combination runs at poor load factor and burns fuel for nothing.",
		},
		{
			question: "How many days of autonomy do I need?",
			answer:
				"Autonomy days is the number of consecutive low-solar days the battery alone must carry the full load. One autonomy day with a responsive, well-controlled genset is a common and economic farm posture. Three or more suits remote sites where fuel delivery is painful. There is no universal right answer; the trade is battery capital versus genset run hours, and the sizing guide works the maths.",
		},
		{
			question: "Can the generator charge the battery directly?",
			answer:
				"Through the inverter-charger, yes, and that is the correct topology. The genset connects to the inverter-charger's AC-in, and the inverter-charger rectifies its output to charge the battery while simultaneously supplying loads. Connecting a genset directly to a battery bank without the inverter-charger's managed charge control is how batteries get cooked. The inverter-charger also manages start, warm-up and stop over the two-wire start circuit.",
		},
		{
			question: "Does the generator still start big pumps?",
			answer:
				"Only if the inverter's overload curve cannot. Direct-on-line motors draw five to seven times nameplate current for seconds at start, so a 1.5 kW pump can demand 7+ kVA. A grid-forming inverter-charger in the SP PRO class publishes 2.4 times continuous for 30 seconds and carries those starts itself, while the grid-hybrid backup class at roughly 1.2 to 1.4 times for 5 to 10 seconds usually cannot. If the curve carries the pump, the genset does not have to be awake for every start, which is where the run-hour savings come from.",
		},
		{
			question: "What size solar works with generator backup?",
			answer:
				"Size the array against the winter-day load, not the annual average, because the genset's job is to cover the gap the array cannot in bad weather. In WA's solar resource, many farms find that an array sized for the winter day plus one to two autonomy days of battery keeps genset run hours modest. If the array is undersized, the genset quietly becomes a daily generator again, which is the failure mode this whole page exists to prevent.",
		},
		{
			question: "Do I still need a generator if I have a big battery?",
			answer:
				"Usually yes, but its role changes. A battery large enough to cover every contingency is expensive and mostly idle; a hybrid uses the genset as insurance for the worst week of the year. The question is not whether to have one but which role it plays, backup only, bridge, or transition workhorse, and the decision table above is that choice.",
		},
		{
			question: "Who designs and commissions the generator integration?",
			answer:
				"An accredited installer owns the site-specific design, changeover protection and commissioning against AS/NZS 4509.1. The two-wire start wiring, the AC-in connection and the protection scheme are all certified work, not farm improvisation. RENOZ supplies the battery platform and Perth-based specification support; the installer owns the design and sign-off.",
		},
		{
			question: "What does AC-coupled mean for a generator or solar inverter?",
			answer:
				"AC coupling means the extra source, a Fronius Primo solar inverter or a genset, feeds the system on the AC side and the grid-forming inverter-charger manages it, rather than connecting on the DC battery bus. On the Harvey farm system the Selectronic SPMC482 runs with a Fronius Primo AC-coupled, which is the same pattern the genset follows on AC-in. The grid-forming unit stays the master; everything else is a managed source.",
		},
		{
			question: "Can I add a generator to an off-grid system later?",
			answer:
				"Yes, provided the inverter-charger has generator control inputs, which is one reason the grid-forming 48V architecture is the retrofit-friendly path. The work is adding the two-wire start circuit to the genset panel and connecting the genset to the AC-in terminals under the installer's design. Systems whose inverter cannot manage a genset end up with manual changeover switches and none of the charge-management behaviour that makes a hybrid economical.",
		},
	],
	closing: {
		heading: "Size in sequence, let the genset shrink",
		body: "Load audit, daily kilowatt-hours, autonomy days, surge kilowatts, and only then the genset. Respect that order and the generator becomes the cheapest component in the system to own: small, rarely running, and perfectly timed when it does. Verify every model against the live CEC list, hand the design and commissioning to an accredited installer, and track genset run hours from day one so every battery expansion shows up where it should.",
	},
	cta: {
		primaryLabel: "Get a hybrid system design for your site",
		primaryTo: "/contact",
		secondaryLabel: "See rural & off-grid storage",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};
