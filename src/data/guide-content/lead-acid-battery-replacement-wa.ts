import type { Guide } from "../guide-types";

/** Retrofit claims checked against the RENOZ LV-5KWH100AH V2.0 datasheet, CEC consumer guide, and inverter-maker guidance. Exact inverter compatibility remains a site-specific check. */
export const guide: Guide = {
	slug: "lead-acid-battery-replacement-wa",
	title: "48V Lead-Acid Battery Replacement WA",
	description:
		"Replacing an ageing 48V lead-acid bank? Compare usable kWh, check your inverter and charging settings, and assess a RENOZ LFP retrofit in WA.",
	primaryKeyword: "48V lead-acid battery replacement",
	h1: "48V lead-acid battery replacement for WA off-grid sites",
	updated: "2026-09-24",
	claimsPending: false,
	reviewedBy: { name: "Joel Chan", jobTitle: "Operations Manager" },
	eyebrow: "Retrofit guide · Off-grid · Western Australia",
	intro: [
		"A 48V lead-acid battery replacement can be a sensible way to extend the life of a working off-grid system without rebuilding everything around it. The battery bank may be tired while the solar array, generator and inverter-charger still have useful years left. RENOZ's 51.2V LFP modules are a candidate for that job, but shared voltage does not make them a universal drop-in replacement.",
		"First establish that the battery is the fault; the [off-grid battery diagnosis guide](/guides/off-grid-batteries-not-holding-charge-wa) separates worn storage from charging and load problems. Then ask whether your existing inverter-charger can be commissioned for the exact lithium battery, firmware and protection design. A qualified installer should answer that before anyone prices modules. This guide is for larger off-grid homes, farms, sheds and light-commercial sites in WA with an existing battery system, not 12V vehicle or small appliance batteries.",
	],
	expertise: {
		heading: "What we checked, and what still needs a site visit",
		body: [
			"The capacity, voltage, current and enclosure figures below come from the [RENOZ LV-5KWH100AH technical specification](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf), version 2.0 dated 1 August 2025. The [Clean Energy Council consumer guide](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf) supplies the typical lead-acid depth-of-discharge range. Inverter behavior is checked against manufacturer documentation, not inferred from a 48V label.",
			"We cannot certify a retrofit from a web page. Your installer needs the inverter model and firmware, existing bank voltage, all charging sources, load and generator data, switchgear, cable sizes, battery location and the current inverter compatibility statement. RENOZ's published compatible-brand list does not include SMA; an SMA Sunny Island retrofit therefore requires written model-specific confirmation before RENOZ is proposed.",
		],
	},
	decisionHeading: "Which parts of an old 48V system can stay?",
	decisionRowLabels: [
		"Existing equipment",
		"First check",
		"Possible outcome",
		"Do not assume",
	],
	decisionColumns: [
		{
			name: "Keep the inverter-charger",
			highlight: true,
			cells: [
				"A serviceable 48V-class inverter-charger and compatible solar or generator charging sources",
				"Exact model, firmware, supported battery mode and BMS communication; then voltage window and charge/discharge current limits",
				"Installer reconfigures and recommissions the system for the approved lithium bank",
				"That a lead-acid charge profile, equalisation cycle or temperature compensation can stay enabled",
			],
		},
		{
			name: "Replace the inverter-charger too",
			cells: [
				"An ageing or unsupported inverter, or a charging system that cannot meet the battery maker's requirements",
				"Written compatibility response from both equipment suppliers and a whole-system design",
				"Retain suitable PV and generator assets while replacing the incompatible battery-side equipment",
				"That changing the battery alone preserves approvals, warranties or safe protection behavior",
			],
		},
	],
	sections: [
		{
			heading:
				"Size the replacement by usable kWh, not by the old bank's Ah label",
			body: [
				"A common comparison error is to treat a 48V, 1,000Ah lead-acid bank as 48 kWh of daily energy. That is its approximate nominal energy. The [CEC consumer guide](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf) says lead-acid systems typically use about 30–50% depth of discharge, so the planning range is roughly 14–24 kWh usable before allowing for age, temperature and conversion losses. Measure actual site demand rather than assuming the old bank still delivers its nameplate capacity.",
				"Each RENOZ LV-5KWH100AH module is 5.12 kWh nominal and 4.61 kWh usable at up to 90% depth of discharge, according to its 2025 datasheet. Four modules would therefore total 18.44 kWh of published usable capacity. That is a capacity illustration, not a retrofit design: final module count also depends on continuous and starting loads, autonomy days, current limits, generator duty and the manufacturer's approved configuration. The [off-grid sizing guide](/guides/battery-sizing-off-grid-wa) walks through that demand assessment.",
			],
		},
		{
			heading: "The five checks before anyone calls it a drop-in replacement",
			body: [
				"**1. Inverter compatibility.** Match the exact inverter-charger model and firmware to RENOZ's current inverter compatibility statement. The LV datasheet names Selectronic, Victron, Deye, GoodWe and other brands, but brand-level inclusion is not approval for every model. Confirm whether the pairing is managed over CAN/RS485 or must use manufacturer-approved settings. [Selectronic's battery compatibility guidance](https://www.selectronic.com.au/kits/approvedbatteries.html) explicitly leaves parameter selection and fitness for purpose with the installer.",
				"**2. Charging profile.** Audit the inverter, MPPT controllers and generator charger. Lead-acid equalisation and temperature-compensated charging cannot simply carry over to LFP. [Victron's charger guidance](https://www.victronenergy.com/media/pg/VEConfigure_Manual/en/charger-settings.html) provides a separate lithium mode; [Selectronic's SP PRO manual](https://www.selectronic.com.au/manuals/OI0003_47%20004122%20SP%20PRO%20Manual.pdf) documents equalisation as a lead-acid charging stage. Set every source to the battery maker's approved voltage and current limits before energising the new bank.",
				"**3. Battery protection and current.** The RENOZ module datasheet specifies a 40–57.6V operating window, a BMS and 100A maximum continuous charge and discharge current per module. The installer must size the bank, cables, fuses, isolation and fault protection around the inverter's real current demand, including motor starts. The BMS is a protection layer, not a substitute for correctly configured charging equipment.",
				"**4. Space and conditions.** The RENOZ stack is IP40 for indoor use. A damp lead-acid shed is not automatically a suitable LFP location. Check weather exposure, heat, access, floor loading and the applicable battery installation rules before reusing the room.",
				"**5. Commissioning and disposal.** The installer should document the old bank's safe removal and recycling, the new charge settings, BMS link, protection tests, generator behavior and the system's measured usable energy. Do not parallel an ageing lead-acid bank directly with the new lithium bank as a shortcut.",
			],
		},
		{
			heading: "What if the old system has SMA Sunny Island?",
			body: [
				"SMA says its [Sunny Island](https://www.sma-australia.com.au/products/battery-inverters/sunny-island-44m-60h-80h) can use lead-acid and selected lithium batteries, and can be used for off-grid retrofits. That makes the inverter family a plausible starting point for a lithium conversion; it does not establish RENOZ compatibility. SMA is absent from the compatible-brand list in the RENOZ LV datasheet we reviewed. For an SMA site, request written confirmation for the exact Sunny Island model, firmware and battery communication method from RENOZ and SMA or the installer. If that cannot be obtained, specify a supported battery or include an inverter change in the quote.",
			],
		},
		{
			heading: "A WA retrofit quote should make the decision easy",
			body: [
				"Ask for two options: battery-only retrofit if the existing inverter is supported, and a battery-plus-inverter design if it is not. Each quote should state usable kWh, maximum continuous output, pump or compressor start performance, generator charging behavior, exact equipment models, expected work on existing PV and switchgear, disposal of the lead-acid bank, warranty responsibility and commissioning evidence.",
				"If you are comparing PowerPlus as another 48V-class option, the [RENOZ versus PowerPlus guide](/guides/renoz-vs-powerplus) compares published specifications and WA support questions. Brand preference comes after fit: the safest choice is the battery your installer can document and support with the existing inverter, or with a properly scoped inverter replacement.",
			],
		},
	],
	proofLinks: [
		{
			label: "RENOZ LV-5KWH100AH technical specification V2.0",
			href: "/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf",
		},
		{
			label: "CEC guide to installing a household battery",
			href: "https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf",
			external: true,
		},
		{
			label: "Selectronic battery compatibility and installer guidance",
			href: "https://www.selectronic.com.au/kits/approvedbatteries.html",
			external: true,
		},
		{
			label: "SMA Sunny Island product and retrofit guidance",
			href: "https://www.sma-australia.com.au/products/battery-inverters/sunny-island-44m-60h-80h",
			external: true,
		},
		{
			label: "RENOZ versus PowerPlus 48V comparison",
			href: "/guides/renoz-vs-powerplus",
		},
	],
	faqHeading: "Lead-acid replacement questions",
	faqs: [
		{
			question:
				"Can I replace a 48V lead-acid bank with RENOZ lithium batteries?",
			answer:
				"Possibly, if the exact inverter and firmware support the RENOZ battery's voltage, charge settings, current and BMS requirements and the installer recommissions the whole system. 48V alone is not proof of compatibility.",
		},
		{
			question: "Is RENOZ a drop-in replacement for lead acid?",
			answer:
				"Not as a blanket claim. Some sites may retain their inverter-charger after approved reconfiguration; others need a new inverter or charging equipment. Obtain written compatibility for the exact models before ordering.",
		},
		{
			question: "Will RENOZ batteries work with my SMA Sunny Island?",
			answer:
				"RENOZ's published LV datasheet does not list SMA among compatible brands. Sunny Island supports selected lithium batteries, but a RENOZ pairing needs written model- and firmware-specific confirmation. Do not assume support from matching voltage alone.",
		},
		{
			question: "How many lithium modules replace my old lead-acid bank?",
			answer:
				"Use measured daily consumption and required autonomy, then size for usable kWh and maximum current. RENOZ publishes 4.61 kWh usable per LV-5KWH100AH module; the number of modules must be checked against the approved bank configuration and your inverter's limits.",
		},
	],
	closing: {
		heading: "Retire the lead-acid bank on a documented design",
		body: "Send RENOZ the inverter model and firmware, photos of the battery and charger labels, your last year of generator hours if available, and a rough list of major loads. We can assess whether the 48V LV platform is a credible candidate and tell you what an installer must verify before quoting a retrofit.",
	},
	cta: {
		primaryLabel: "Ask about a 48V battery retrofit",
		primaryTo: "/contact",
		secondaryLabel: "Explore rural battery systems",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};
