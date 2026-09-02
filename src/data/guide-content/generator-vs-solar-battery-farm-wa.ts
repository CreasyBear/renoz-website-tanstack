import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "generator-vs-solar-battery-farm-wa",
	title: "Generator vs Solar Battery for WA Farms: Cost Decision 2026",
	description:
		"Generator vs solar battery for a WA farm, compared at real farm scale: runtime hours versus CapEx, bore pump and coolroom surge, CHBP rebate off-grid, and where the diesel keeps its job. Updated September 2026.",
	primaryKeyword: "generator vs solar battery farm",
	h1: "Generator vs solar and battery for your WA farm: which one is worth it?",
	updated: "2026-09-02",
	claimsPending: false,
	eyebrow: "Decision guide · Farm scale · WA 2026",
	intro: [
		"For a WA farm, the generator vs solar battery farm question comes down to runtime hours. If your genset runs under an hour a day, keep it. At 4 hours a day through winter you are burning roughly $22 in diesel daily before servicing, about $2,600 over a 120-day season, and whether a solar plus battery system in the 30 to 60 kWh class pays that back depends on your runtime hours and diesel prices, with worked ranges in [our generator running cost guide](/guides/generator-running-costs-wa). Both our real WA farm installs, Harvey and Bally Bally, kept the generator as backup.",
		"Search this comparison and you mostly get megawatt-scale studies from CSIRO and AEMO about the national grid. That is not your problem. Your problem is a bore pump, a coolroom, maybe a shearing shed, and a diesel bill that grows every winter. This guide works the decision at the 30 to 200 kWh scale farms actually live at, with WA numbers and an honest account of when staying diesel-only is the rational answer.",
		"RENOZ builds modular battery storage in Perth for exactly this scale, and we will tell you when the economics do not stack up.",
	],
	expertise: {
		heading: "Two real WA farm installs back this guide",
		body: [
			"RENOZ supplies modular LV battery storage to WA farms through accredited installers, and both published case studies on this site kept the diesel generator as backup after conversion.",
			"Harvey: 35.8 kWh gross battery with 21 kWp of solar, chosen because a grid connection was quoted around $200,000. Bally Bally: a remote hobby farm with a 30 kWh system whose driver was connection fees plus diesel cost. We present both with their scorecards, not adjectives.",
		],
	},
	decisionHeading: "Runtime hours per day decide the answer",
	decisionRowLabels: [
		"What that runtime means on the ground",
		"Diesel cost signal per season",
		"Recommended path",
		"Federal CHBP rebate?",
		"Where the generator ends up",
		"First step",
	],
	decisionColumns: [
		{
			name: "Under 1 hour per day",
			cells: [
				"Occasional bulk charges after cloud; genset mostly sits",
				"A few hundred dollars a year; noise is an event, not a habit",
				"Stay as you are, or add a small solar array to cut even that",
				"A small off-grid battery can qualify, but payback is usually slow",
				"Still the primary backup, running under 50 hours a year",
				"Log your runtime for a month before spending anything",
			],
		},
		{
			name: "1 to 3 hours per day",
			highlight: true,
			cells: [
				"Regular winter charging, genset is part of the routine",
				"Roughly $1,000 to $2,500 a season in fuel plus servicing",
				"Solar plus battery sized from load logs, genset kept for recovery days",
				"Yes, off-grid systems qualify with no grid-connection condition",
				"Backup only: low-sun weeks, maintenance, out-of-season spikes",
				"Battery sizing guide, then an installer load audit",
			],
		},
		{
			name: "4 or more hours per day",
			cells: [
				"The genset is your power station; you live by fuel runs and service intervals",
				"$2,600+ per 120-day winter; $8,000 to $10,000 year-round",
				"Hybrid solar plus battery conversion; the fuel and service bill funds it",
				"Yes, and at 4+ hours of daily runtime the offset is material",
				"Emergency backup, 10 to 50 hours a year instead of 1,400",
				"Compare quotes against your measured diesel spend",
			],
		},
	],
	sections: [
		{
			heading: "Why farm-scale comparisons are missing from the internet",
			body: [
				"Ask about a generator versus solar and battery on a farm and the results give you national-grid studies in megawatts, industrial genset spec sheets, or American content priced in gallons. Somewhere between those poles sits the actual WA farm, running 30 to 200 kWh of storage behind a hybrid inverter with a genset tucked in the shed. Nobody was writing for that reader, so this guide is.",
				"A farm-scale system means something specific here: solar array, a battery bank big enough for two to three days of cloudy autonomy, an inverter-charger that can start a bore pump, and the existing genset wired in as backup. It is a system decision, not a panel-versus-fuel argument. The battery does the daily work, the generator handles the rare bad week.",
				"Every figure in this guide traces to a published spec sheet, a government program page, or a real case study on this site. Where we use community-posted figures from forums, we say so.",
			],
		},
		{
			heading:
				"The decision frame: what diesel costs versus what storage costs",
			body: [
				"The honest comparison has three diesel lines on one side: fuel at the bowser plus cartage, servicing on roughly 250-hour intervals, and the hours of your own time spent refuelling and listening to it run. On the other side sits the amortised CapEx of solar plus battery over its design life. The crossover point is different for every farm, which is why no single payback claim deserves your trust.",
				"Our [generator running cost guide for WA](/guides/generator-running-costs-wa) does the per-day maths in detail: at WA diesel around $2.50 per litre, an 8 kVA genset at 4 hours a day burns about $22 daily, and every kWh the genset delivers costs roughly $0.75 to $1.00 once engine efficiency is counted. Grid power costs a fraction of that. Solar and battery, once installed, deliver daytime energy at nearly zero marginal cost.",
				"So the question is arithmetic, not ideology. Total your annual litres and service invoices. If that figure exceeds what a properly sized system costs per year over its life, the conversion pays. If it does not, run the genset and sleep well.",
			],
		},
		{
			heading: "What your farm loads are actually asking for",
			body: [
				"Farm loads are not house loads. A bore pump pulls 3 to 7 kW running and two to three times that for the seconds it takes to spin up. A coolroom compressor cycles all night. A shearing shed draws hard for a few weeks a year. These three behaviours size different parts of the system, and any quote that treats them as one generic number will disappoint you.",
				"Daily energy in kWh sizes the battery. Startup surge sizes the inverter, and motor-heavy sites generally want low-frequency inverter-chargers such as Victron or Selectronic platforms rather than light-duty hybrids. Our [off-grid battery sizing guide for WA](/guides/battery-sizing-off-grid-wa) walks the calculation: stack each load's daily kWh, apply two to three days of autonomy for your cloud history, divide by usable depth of discharge.",
				"Get a load audit before quotes. It is the single document that stops a designer selling you either too little battery or an inverter that trips every time the pump starts.",
			],
		},
		{
			heading: "How long can a generator legally and mechanically run?",
			body: [
				"Generators are rated by duty cycle under [ISO 8528, and Cummins' selection guidance](https://www.cummins.com/sites/default/files/2021-08/considerations_for_generator_set_selection_presentation.pdf) is explicit: standby ratings assume up to about 200 hours a year at an average load near 70%, while prime ratings allow unlimited annual hours on the same load discipline. [Caterpillar notes prime units take a 10% overload for one hour in twelve](https://www.cat.com/en_US/by-industry/electric-power/Articles/ep-news/ep-news-data-center-design-considerations.html), and [Kohler ties the ratings to thermal and wear-life limits](https://techcomm.kohler.com/techcomm/pdf/ISO%208528-5%20and%20Generator%20Transient%20Performance_WP.pdf).",
				"The practical read for a farm: a genset that runs 4 hours every day is in prime duty, not the standby duty most backup gensets were bought for. A site running its genset as the primary power source is racking up 1,400-plus hours a year against an engine rated for a few hundred. That is why daily-run gensets need oversized capacity, strict load discipline, and religious servicing.",
				"This mechanical reality is half the case for storage before any money is counted. Batteries do not have service intervals measured in weeks.",
			],
		},
		{
			heading: "The costs forums talk about and brochures skip",
			body: [
				"Even a well-canopied genset is audible. [Eniquest publishes 59 dB(A) at 7 metres full load for its 7 kVA Ranger](https://eniquest.com.au/generators/ranger-7000-diesel-generator/), and larger enclosed units from [Eniquest's 13 kVA](https://eniquest.com.au/generators/ranger-13000-diesel-generator/) and [Powerlite's Enermax Perkins range](https://www.powerlite.com.au/1500-1800-rpm/series-enermax/enermax-perkins/) sit at 65 to 68 dB(A) at 7 metres. On a quiet property that sound carries, and families describe evening runs as the thing they notice most.",
				"Then the logistics. Diesel carted in drums from 80 km away, fuel going stale in the tank between uses, oil changes every ten weeks on a daily-run engine, and the standing mental load of checking the tank before a cold snap. Community posts on [Reddit's off-grid communities](https://www.reddit.com/r/OffGrid/comments/1pr5lxp/how_do_you_decide_when_to_run_your_generator/) describe winter use of one to two hours a day, which sounds manageable until you are the one out there in July.",
				"Our number for all-in generator living is 20 to 40% above the fuel bill. Compare solar plus battery against that, not against the bowser receipt alone.",
			],
		},
		{
			heading: "Where the generator stays, and why we say so plainly",
			body: [
				"Here is the part most solar marketing will not tell you: on both real WA farm conversions we have published, the generator stayed. Harvey kept its genset for conditions outside the solar and battery design. Bally Bally commissioned a 30 kWh system with diesel backup and remote monitoring. Backup retention is not a compromise; it is good engineering.",
				"What changes is the generator's job description. Instead of 4 hours a night it runs 10 to 50 hours a year: extended low-sun spells, a maintenance window, a genuine emergency, or a load event nobody predicted. Modern inverter-chargers from Selectronic and Victron start the genset automatically when battery state of charge drops to a threshold, bulk-charge fast, and shut it down again.",
				"A generator that runs 40 hours a year costs almost nothing to own and buys you absolute certainty. A generator that runs 1,400 hours a year costs a fortune. The whole conversion is about moving your site from the first number to the second, not about deleting diesel from the property.",
			],
		},
		{
			heading: "Does the battery rebate apply to an off-grid farm?",
			body: [
				"Off-grid farms can claim the federal Cheaper Home Batteries Program. Through Small-scale Technology Certificates it delivers roughly 30% off at point of sale, and it attaches no grid-connection condition and no VPP condition, as set out on the [DCCEEW program page](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries). Requirements are a CEC-approved battery and an SAA-accredited installer. Do not budget from fixed dollar figures; the value steps down over time, so check the program page when you quote.",
				"The Clean Energy Regulator's eligibility rule has two branches: a property more than 1 km from the grid qualifies off-grid outright, while a property closer than 1 km needs either a VPP-capable system or written evidence that connecting to the grid would cost more than $30,000. Batteries must serve buildings people live in; a bank powering only an unmanned shed is not eligible.",
				"The WA Residential Battery Scheme does not apply to off-grid farms at all, because it requires VPP enrolment on the Synergy or Horizon network. For an off-grid property, CHBP is the only rebate path.",
			],
		},
		{
			heading: "What WA farms have actually done",
			body: [
				"The [Harvey farm case study](/case-studies/harvey-farm) is the anchor: a 35.8 kWh gross battery of seven RENOZ LV modules with 21 kWp of solar, on a Selectronic SPMC482 with a Fronius Primo AC-coupled. The trigger was a grid connection quoted around $200,000. The case study reports reduced generator runtime, with backup retained, and the full scorecard is published on the page.",
				"The [Bally Bally case study](/case-studies/bally-bally) covers a remote hobby farm where significant connection fees and high diesel costs created financial and operational strain. The install was a 30 kWh gross LV stackable system integrating existing solar, diesel backup with remote monitoring, commissioned by a WA-certified installer. Results again report reduced generator runtime rather than a quantified saving, which is how we prefer to publish it.",
				"Neither install is a template for yours. Both are evidence that the hybrid pattern, solar plus battery with genset retained, is the working answer on WA farms, and both were sized from load data rather than brochure rules.",
			],
		},
		{
			heading: "Worked comparison: the winter genset habit versus a conversion",
			body: [
				"Take a Great Southern farm running an 8 kVA genset 4 hours daily through a 120-day winter, plus scattered summer use. Using the figures in [our generator cost guide](/guides/generator-running-costs-wa), that is about $2,600 of fuel for the season and $8,000 to $10,000 a year if the pattern holds year-round, before servicing. Over ten years the diesel habit is a five-figure sum with nothing to show for it but hours on an engine.",
				"A 40 kWh class solar plus battery system, before any rebate, sits in the tens of thousands installed. With CHBP taking roughly 30% off the battery at point of sale and the diesel and service spend redirected, the payback window depends on your runtime hours and diesel prices; [our generator cost guide](/guides/generator-running-costs-wa) works the ranges, and the system keeps producing for a decade or more after that. Our [diesel-to-battery guide for WA farms](/guides/diesel-to-battery-wa-farms) sets out the full method including surge sizing.",
				"Run this comparison with your own litres, not ours. The point is not that solar always wins; it is that the numbers decide, and the numbers need your fuel invoices.",
			],
		},
		{
			heading: "When staying diesel-only is the rational answer",
			body: [
				"We sell batteries, and there are farms where we would tell you not to buy one. If the genset runs under an hour a day, the fuel bill is a rounding error and no storage system repays itself in your lifetime. If the property is leased or you plan to sell within a few years, capital that does not follow you is capital wasted.",
				"Some loads argue for diesel directly. A big three-phase machine that runs a few hours weekly can be cheaper on fuel than on battery cycling built around it. Seasonal blocks that sit empty most of the year rarely justify storage. And if the household simply wants grid-equivalent behaviour with zero thought, price the connection: our [grid connection versus off-grid guide](/guides/grid-connection-vs-off-grid-wa) covers that fork, including the [$30,000 threshold where the federal rebate rules favour going off-grid](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries).",
				"For everyone between those poles, the honest next step is a month of runtime logging and a load audit. Bring us both and we will tell you which side of the line you are on, including when the answer is keep the genset and spend the money on fencing instead.",
			],
		},
	],
	proofLinks: [
		{
			label: "Cheaper Home Batteries Program, DCCEEW",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA Residential Battery Scheme (wa.gov.au)",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "Cummins generator set selection guidance (ISO 8528 ratings)",
			href: "https://www.cummins.com/sites/default/files/2021-08/considerations_for_generator_set_selection_presentation.pdf",
			external: true,
		},
		{
			label: "Harvey farm case study",
			href: "/case-studies/harvey-farm",
		},
		{
			label: "Bally Bally remote farm case study",
			href: "/case-studies/bally-bally",
		},
		{
			label: "What a generator costs per day in WA",
			href: "/guides/generator-running-costs-wa",
		},
		{
			label: "Diesel to battery for WA farms",
			href: "/guides/diesel-to-battery-wa-farms",
		},
		{
			label: "Off-grid battery sizing for WA",
			href: "/guides/battery-sizing-off-grid-wa",
		},
		{
			label: "Rural products",
			href: "/products/rural",
		},
	],
	faqHeading: "Farm comparison questions we hear first",
	faqs: [
		{
			question:
				"Is solar plus battery really cheaper than a generator for a farm?",
			answer:
				"It depends almost entirely on runtime hours. Under an hour of genset use a day, no: the diesel bill is too small to fund a conversion. At 4 or more hours daily, yes: fuel alone runs about $2,600 per 120-day winter, and year-round dependence approaches $8,000 to $10,000 before servicing, which comfortably exceeds the annualised cost of a right-sized system. Work the comparison with your own fuel invoices and service records.",
		},
		{
			question: "Do I have to get rid of the generator?",
			answer:
				"No, and we advise against it for most farms. Both published RENOZ WA farm case studies, Harvey and Bally Bally, kept the generator as backup. The conversion changes its role from nightly workhorse to an emergency and recovery-day asset running 10 to 50 hours a year, started automatically by the inverter-charger when battery charge runs low.",
		},
		{
			question:
				"Does the federal battery rebate apply if the farm is off-grid?",
			answer:
				"Yes. Off-grid farms qualify: the Cheaper Home Batteries Program takes roughly 30% off at point of sale and carries no grid-connection condition and no VPP condition. Properties more than 1 km from the grid qualify outright; closer properties need a VPP-capable system or written evidence that connection would exceed $30,000. Batteries must serve lived-in buildings. The WA Residential Battery Scheme does not apply off-grid because it requires VPP enrolment.",
		},
		{
			question: "How big a battery does a WA farm need?",
			answer:
				"There is no standard farm number. Published WA installs on this site landed at 30 kWh gross (Bally Bally) and 35.8 kWh gross (Harvey) for farm and residence loads. The correct figure comes from stacking each load's daily kWh, bore pump hours, coolroom cycling, shed season, plus two to three days of cloudy autonomy. See our battery sizing guide for the worked method.",
		},
		{
			question: "Will the system start my bore pump and coolroom?",
			answer:
				"Yes if the inverter is specified for it. Bore pumps and compressor motors draw two to three times their running current at startup, and that locked-rotor surge, not daily kWh, sizes the inverter. Farm sites with serious motor loads typically use low-frequency inverter-chargers such as Selectronic or Victron platforms. Always measure or estimate the worst motor's startup surge before signing any quote.",
		},
		{
			question: "What happens during a week of overcast days?",
			answer:
				"This is the overcast days problem, and it is exactly what the retained generator is for. A well-sized system carries two to three days of autonomy from the battery, then the genset runs a recovery charge when the bank gets low, bulk-charging in a few hours and shutting off. Your diesel use concentrates into a handful of bad weeks each winter instead of spreading across every night.",
		},
		{
			question:
				"Is this comparison the same as the CSIRO studies I keep finding?",
			answer:
				"No. Those studies examine megawatt-scale generation for the national grid. This guide is about the 30 to 200 kWh of storage behind a typical WA farm's switchboard, where the comparison is one genset's fuel and servicing bill against one solar array and battery bank. The physics differ and so do the economics.",
		},
		{
			question: "When should a farm just keep the diesel generator?",
			answer:
				"Keep diesel-only when runtime is genuinely low, under an hour a day; when the land is leased or you plan to sell soon; when one large machine dominates loads that run briefly and weekly; or when the property sits empty most of the year. Those are rational answers, not failures. The mistake is running a standby-rated genset 4 hours a day and calling it a plan.",
		},
	],
	closing: {
		heading: "Bring the litres, we will bring the arithmetic",
		body: "Fuel invoices, runtime logs, and your worst-motor surge figure decide this comparison in an afternoon. Request a rural system design and we will size the hybrid honestly, including the case for keeping your genset exactly as it is.",
	},
	cta: {
		primaryLabel: "Request a rural system design",
		primaryTo: "/products/rural",
		secondaryLabel: "Read the Harvey farm case study",
		secondaryTo: "/case-studies/harvey-farm",
	},
	relatedProductPaths: ["/products/rural"],
};
