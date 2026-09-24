import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "off-grid-batteries-not-holding-charge-wa",
	title: "Off-Grid Batteries Not Holding Charge? A WA Fault Guide",
	description:
		"Off-grid batteries flat by morning or the generator running more often? Work out whether to repair charging, replace the bank, or upgrade the system.",
	primaryKeyword: "off grid batteries not holding charge",
	h1: "Off-grid batteries not holding charge? Find the cause first",
	updated: "2026-09-24",
	claimsPending: false,
	reviewedBy: { name: "Joel Chan", jobTitle: "Operations Manager" },
	eyebrow: "Existing off-grid systems · Farms and larger WA sites",
	intro: [
		"Off grid batteries not holding charge? The bank might be ageing. It might also be receiving less energy than it used to, or supplying a larger load. Those three problems need different fixes. Replacing a bank before checking the solar charger, inverter, generator charging and recent load changes can leave the original fault in place.",
		"This guide is for existing off-grid homes with substantial loads, farms, sheds and light-commercial sites in Western Australia. It helps you prepare for an installer diagnosis; it is not a procedure for opening a battery, changing live settings or working on DC wiring. Record what the system is doing and ask a qualified installer to inspect the equipment.",
	],
	expertise: {
		heading: "Why the symptom alone does not identify a failed battery",
		body: [
			"The [Australian Government's solar guidance](https://www.energy.gov.au/solar/use-your-solar-system/replace-and-recycle-your-solar-system) says reduced system performance does not necessarily mean a component must be replaced. An accredited installer can check whether the fault is in generation, charging, storage or another part of the system.",
			"[Victron's MPPT troubleshooting guidance](https://www.victronenergy.com/media/pg/Manual_BlueSolar_MPPT_75-10_up_to_100-20/en/troubleshooting.html) documents causes of inadequate charging that include insufficient PV input, charger settings and electrical faults. That is a reason to inspect the whole charging path before ordering a new battery. The exact checks depend on the installed equipment.",
		],
	},
	decisionHeading: "What should the installer check first?",
	decisionRowLabels: [
		"What you notice",
		"Possible cause to test",
		"Evidence to collect",
		"Likely decision after diagnosis",
	],
	decisionColumns: [
		{
			name: "Flat by morning",
			highlight: true,
			cells: [
				"The battery reaches a reported full charge but usable overnight energy has fallen",
				"Ageing or imbalanced storage, a changed overnight load, or inaccurate state-of-charge reporting",
				"Several days of charge, discharge and load history; battery age and model",
				"Capacity assessment, load correction or a bank replacement design",
			],
		},
		{
			name: "Never fills by sunset",
			cells: [
				"The bank begins the night partly charged even on reasonable solar days",
				"PV output, shade, charger configuration, generator charging or a new daytime load",
				"PV and charger logs, fault codes, recent equipment or load changes",
				"Repair or reconfigure the charging path before judging bank capacity",
			],
		},
		{
			name: "Generator starts more often",
			cells: [
				"Diesel runtime rises or starts move earlier in the night",
				"Less usable storage, less solar input, higher consumption or changed auto-start thresholds",
				"Generator hours, fuel use, start triggers and seasonal load history",
				"Compare repair, battery replacement and system resizing",
			],
		},
	],
	sections: [
		{
			heading: "Why is my off-grid battery flat by morning?",
			body: [
				"Start with the pattern. A bank that reaches a genuine full charge, then supplies fewer overnight kilowatt-hours than it used to, may be losing usable capacity. But a new coolroom, bore schedule, staff accommodation or other overnight load can produce the same symptom. Ask the installer to compare measured energy into and out of the bank with historical load data, not just a voltage reading or a dashboard percentage.",
				"If the bank is lead acid, its nameplate amp-hours are not the same as usable daily energy. Age and previous depth of discharge also matter. If it is lithium, the BMS may be limiting current or disconnecting for a fault. Neither case can be diagnosed from an online calculator. The [off-grid battery sizing guide](/guides/battery-sizing-off-grid-wa) explains how daily loads and autonomy determine the replacement capacity.",
			],
		},
		{
			heading: "Why does the generator now run every day?",
			body: [
				"Generator starts are a useful early warning, but their cause may be storage, solar production, seasonal demand or the inverter's start settings. Capture the start time, state of charge, running hours and fuel use for a few representative weeks. Note any new pumps, refrigeration or workshop equipment and compare with the same season in prior years if records exist.",
				"The [WA diesel-to-battery farm guide](/guides/diesel-to-battery-wa-farms) shows how to compare ongoing generator cost with a properly sized solar and battery design. A replacement bank can reduce generator use only if the charging supply and energy budget support it. Retain the generator as backup unless a designer has engineered a different arrangement.",
			],
		},
		{
			heading: "Repair charging, replace the bank, or upgrade the system?",
			body: [
				"**Repair or reconfigure** when a healthy bank is being undercharged by a PV, generator or charger fault, or when control settings no longer match the installed equipment. **Replace the bank** when measured usable capacity or battery faults make it uneconomic to keep, while the inverter-charger and other plant remain suitable. **Upgrade more of the system** when loads have grown beyond the existing inverter or charging architecture, or the proposed battery is not approved for that inverter.",
				"Ask for an itemised scope for each credible option. The [WA off-grid system cost guide](/guides/off-grid-system-cost-wa) now separates a replacement-bank quote from a whole-system quote. Do not compare a battery-only price with a proposal that also includes inverter, PV, generator controls, switchboard changes and removal of the old bank.",
			],
		},
		{
			heading: "Can the old inverter stay with a new lithium bank?",
			body: [
				"Possibly. The installer must check the exact inverter-charger model and firmware, supported battery communication or approved operating mode, voltage and current limits, all charge sources, protection and commissioning requirements. A shared 48V label does not establish compatibility. The [48V lead-acid replacement guide](/guides/lead-acid-battery-replacement-wa) lists the checks for a candidate RENOZ retrofit.",
				"SMA says Sunny Island supports selected lithium batteries and off-grid retrofits, but the published RENOZ LV datasheet we reviewed does not list SMA. Do not quote RENOZ as a Sunny Island replacement without written approval for the exact models and firmware. If you are comparing a PowerPlus battery alternative, the [RENOZ–PowerPlus guide](/guides/renoz-vs-powerplus) covers the published products and the support questions to put in writing.",
			],
		},
		{
			heading: "What should a WA site send for a useful first assessment?",
			body: [
				"Send the site postcode and use case; photos of the inverter, battery and charger labels; battery age and chemistry; recent energy or fault logs; generator hours; and a list of major loads. For a farm, include pump and compressor start requirements if known. This lets RENOZ or the installer distinguish a charging repair from a bank replacement, and a battery-only retrofit from a larger system design.",
				"RENOZ's rural range is aimed at larger WA sites, including the Wheatbelt and Geraldton-area Midwest. Location, installer availability and service scope need confirming for a particular property. The [rural battery page](/products/rural) and diesel guide explain the farm use cases; a small vehicle or portable battery fault calls for a different supplier.",
			],
		},
	],
	proofLinks: [
		{
			label:
				"Australian Government: replace and recycle a solar or battery system",
			href: "https://www.energy.gov.au/solar/use-your-solar-system/replace-and-recycle-your-solar-system",
			external: true,
		},
		{
			label: "Victron: MPPT solar charger troubleshooting",
			href: "https://www.victronenergy.com/media/pg/Manual_BlueSolar_MPPT_75-10_up_to_100-20/en/troubleshooting.html",
			external: true,
		},
		{
			label: "SMA: Sunny Island retrofit and battery information",
			href: "https://www.sma-australia.com.au/products/battery-inverters/sunny-island-44m-60h-80h",
			external: true,
		},
		{
			label: "RENOZ: 48V lead-acid battery replacement in WA",
			href: "/guides/lead-acid-battery-replacement-wa",
		},
	],
	faqHeading: "Questions before you replace an off-grid battery",
	faqs: [
		{
			question: "How do I know if my off-grid batteries need replacing?",
			answer:
				"Have an installer compare measured usable energy and fault history with the site's load and charging data. Being flat by morning is a symptom, not proof of a failed bank; inadequate charging or higher loads can look the same.",
		},
		{
			question: "Do I need a new inverter when replacing lead-acid batteries?",
			answer:
				"Not automatically. Some inverter-chargers can be recommissioned for a manufacturer-approved lithium battery. Others cannot. Exact model, firmware, BMS communication, charge settings and protection must be checked before a battery-only quote is credible.",
		},
		{
			question: "What does an off-grid battery replacement cost in WA?",
			answer:
				"There is no reliable price from the old bank's Ah rating alone. A quote needs measured daily kWh, usable capacity, inverter compatibility, access, electrical and protection work, commissioning and old-bank disposal. Compare battery-only and battery-plus-inverter scopes separately.",
		},
		{
			question: "Can RENOZ assess an off-grid system near Geraldton?",
			answer:
				"Geraldton-area farms are within RENOZ's stated rural WA market, but site-specific delivery, installer and service arrangements must be confirmed by postcode. Send the equipment details and load or generator logs for an initial assessment.",
		},
	],
	closing: {
		heading: "Diagnose the system before buying the battery",
		body: "Send the inverter and battery labels, recent logs, major loads and postcode. RENOZ can help frame the battery option and the checks an installer needs to complete before quoting.",
	},
	cta: {
		primaryLabel: "Ask about your off-grid system",
		primaryTo: "/contact",
		secondaryLabel: "See rural battery systems",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};
