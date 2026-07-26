import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "battery-state-of-health",
	title:
		"Battery State of Health (SoH): What It Means and How to Verify It (2026)",
	description:
		"What battery State of Health really measures, why displayed SoH figures are often estimates, how to run a real capacity test, what warranty capacity-retention clauses actually promise, and how WA heat affects long-term degradation.",
	primaryKeyword: "battery state of health",
	h1: "Battery State of Health: what your display is telling you — and what it isn’t",
	updated: "2026-07-23",
	claimsPending: true,
	eyebrow: "Buyer’s guide · LiFePO4 · Perth WA",
	intro: [
		"State of Health (SoH) is the ratio of your battery’s current usable capacity to its rated new capacity, expressed as a percentage. A battery warranted to retain 70% SoH at end of life means it must still deliver at least 70% of its nameplate kWh under defined test conditions. Most displayed SoH figures are estimates derived from coulomb counting or voltage inference — not measured capacity. To know the real SoH, you need a full charge-discharge cycle at a defined C-rate and temperature. In Perth, where summer ambient temperatures can exceed 40°C, heat is the dominant degradation driver buyers should understand before they sign.",
		"Battery state of health is a capacity ratio against new — not a single app colour — and warranty SoH clauses define how it is measured.",
		"Read the test conditions behind any SoH number before you treat a display percentage as a legal claim.",
	],
	expertise: {
		heading: "How an OEM talks about ageing honestly",
		body: [
			"RENOZ documents modular LiFePO4 capacity and warranty terms from Perth engineering — SoH language has to match those documents.",
			"This guide helps owners and installers separate display estimates from warranty measurement methods.",
		],
	},
	decisionHeading: "What SoH does and does not tell you",
	decisionRowLabels: [
		"What is measured or displayed",
		"Accuracy",
		"Test conditions required",
		"Degradation driver",
		"Warranty implication",
		"WA heat relevance",
		"How to verify",
	],
	decisionColumns: [
		{
			name: "What cheap or unverified systems do",
			cells: [
				"Show a SoH percentage derived from software estimation alone",
				"Can be 5–15 percentage points optimistic after coulomb counting drift accumulates",
				"No documented C-rate or temperature reference for the displayed figure",
				"Often ignores heat exposure history in degradation model",
				"Warranty language vague on test protocol; hard to dispute a claim",
				"Thermal derating not disclosed; outdoor cabinets in Perth sun unaddressed",
				"Cannot be independently verified without full discharge at rated conditions",
			],
		},
		{
			name: "What to demand",
			highlight: true,
			cells: [
				"Datasheet-referenced SoH definition with explicit capacity test protocol",
				"SoH traceable to a full capacity test at documented C-rate and temperature",
				"Warranty states the C-rate, temperature range, and DoD for the retention claim",
				"Degradation model accounts for temperature, DoD, and time at high SoC",
				"Warranty capacity-retention clause specifies test method and dispute pathway",
				"Thermal derating curve published; outdoor cabinet IP rating and shading requirements stated",
				"Full charge-discharge cycle logged at commissioning as a baseline record",
			],
		},
		{
			name: "How to verify",
			cells: [
				"Read the datasheet definition of SoH, not just the app display",
				"Commission a baseline full capacity test and retain the log",
				"Read the warranty document: locate the capacity retention clause and its test protocol",
				"Ask for the temperature-vs-capacity derating curve in the product datasheet",
				"Request a written warranty claim pathway with maximum replacement timeline",
				"Check cabinet IP rating and ask for a shading or ventilation specification",
				"Repeat a capacity test annually or after any significant thermal event",
			],
		},
	],
	sections: [
		{
			heading: "SoH vs SoC: two very different numbers",
			body: [
				"State of Charge (SoC) tells you how full the battery is right now — like the fuel gauge in a car. State of Health (SoH) tells you how large the tank has become relative to when it was new. A battery showing 80% SoC and 85% SoH is 80% full of a tank that is now only 85% of its original size. The distinction matters because a battery’s BMS and inverter display are almost always showing SoC, not SoH — and SoH is the number that determines whether your system still delivers the energy autonomy you paid for.",
				"SoH degrades over time. Every lithium battery loses some capacity with each charge-discharge cycle and with cumulative calendar ageing regardless of cycling. The engineering question is how fast that degradation happens, what drives it, and what the floor is at end of warranted life. A battery warranted to 3,000 cycles at 80% SoH means it must retain at least 80% of its nameplate capacity after 3,000 cycles under the conditions defined in the warranty document. Those conditions are the part buyers routinely skip reading.",
			],
		},
		{
			heading: "Why displayed SoH is often an estimate",
			body: [
				"Most battery management systems estimate SoH using coulomb counting — integrating current in and out over time. Coulomb counting accumulates error. A small measurement offset, self-discharge, or incomplete full cycle compounds over months into a figure that can be several percentage points optimistic. Some BMS implementations re-anchor the estimate each time the battery reaches a full-charge resting voltage, but LiFePO4 has an extremely flat charge-voltage curve in the middle of its range, which means the BMS cannot always distinguish 50% SoC from 60% SoC by voltage alone.",
				"The flat voltage plateau of LiFePO4 is one of the chemistry’s genuine advantages for cycle life and thermal stability, but it is a challenge for voltage-based SoH inference. An NMC battery has a more sloped voltage curve, which makes voltage-based capacity estimation more tractable. For LiFePO4, the only reliable SoH measurement is a full capacity test: charge to 100%, rest, discharge to the defined cut-off voltage at a known constant current (C-rate), measure total kWh delivered, compare to rated capacity. Everything else is an estimate.",
				"This does not mean the BMS display is useless — it tracks relative SoC well enough for daily operation. It means that if you want to know whether your battery is still delivering what the warranty promises, you need a logged full discharge test, not a reading from the app.",
			],
		},
		{
			heading: "What drives LiFePO4 degradation",
			body: [
				"Three factors dominate lithium battery degradation: heat, depth of discharge (DoD), and time spent at high SoC. Heat accelerates the electrochemical reactions that cause capacity fade and internal resistance growth. Depth of discharge determines the mechanical stress on electrode structures during expansion and contraction. Time at high SoC causes lithium plating and electrolyte oxidation that are not recovered by cycling. All three interact: a hot battery held at 100% SoC is more damaging than either condition alone.",
				"In Western Australia, heat is the variable buyers most often underestimate. Perth metropolitan summers regularly produce ambient temperatures of 38–42°C. An outdoor battery cabinet in direct sun can experience internal temperatures well above ambient. Every battery chemistry has a temperature-vs-degradation relationship — ask for the derating curve in the datasheet before committing to a location and enclosure specification. AS/NZS 5139 sets requirements for the siting and installation of battery energy storage systems, including ventilation and separation requirements, but the specific thermal management of the cabinet is a product design decision that varies by manufacturer.",
				"Time at high SoC is controllable through inverter or BMS settings. Many systems can be configured to charge to 90% rather than 100% for daily operation, reserving a full charge for specific events. This is a practical step that extends cycle life meaningfully without requiring hardware changes. Ask your installer to document the charge limit setting at commissioning and explain the trade-off between daily usable capacity and long-term cycle life.",
			],
		},
		{
			heading: "How to run a real capacity test",
			body: [
				"A capacity test requires four things: a known starting SoC (fully charged, rested), a constant discharge current at the rated C-rate specified in the datasheet, a defined discharge cut-off voltage, and logging of total energy delivered. The C-rate matters because capacity varies with discharge speed — a battery may deliver more kWh at a slow C/10 rate than at C/2. Warranty retention claims must specify which C-rate applies; if the warranty document does not state this, ask for clarification before signing.",
				"Temperature must be documented during the test. LiFePO4 capacity decreases at low temperatures and is usually rated at 25°C. In WA conditions a summer test at 35°C ambient may actually show slightly higher capacity than the rated figure; a winter test at 10°C ambient may show lower capacity. Neither result is a warranty failure unless the warranty explicitly references a temperature. The datasheet’s temperature derating curve tells you what the manufacturer claims is normal across the operating range.",
				"The most valuable step a buyer can take is to commission a baseline capacity test at installation, retain the log, and repeat it at regular intervals. This gives you a documented record of actual degradation over time — the only way to evaluate a warranty claim objectively. An installer who cannot or will not provide a commissioning capacity log should be asked why not.",
			],
		},
		{
			heading: "Reading a capacity-retention warranty",
			body: [
				"Capacity-retention warranties typically promise a minimum SoH percentage after a specified number of cycles or years, whichever comes first. A common structure is something like “70% capacity retention after 6,000 cycles or 10 years.” The number that matters most for most buyers is the years figure: few residential systems cycle more than once per day, so a 6,000-cycle warranty on a once-daily system is a 16-year cycle warranty. The calendar limit of 10 years is likely to bind first.",
				"The test protocol referenced in the warranty defines what “capacity” means for the claim. If the warranty is silent on C-rate, temperature, and DoD, it is difficult to dispute a manufacturer’s determination that the battery is performing within specification. Before purchasing, identify the specific clause in the warranty document that describes the capacity-retention test and ask: at what C-rate, at what temperature, and at what depth of discharge. If the document does not answer all three, request a written clarification from the supplier.",
				"Prorated warranties reduce the manufacturer’s replacement obligation proportionally as the battery ages. A warranty that pays 100% in year one and 50% in year five may mean you bear significant cost for a replacement in the middle of the warranted period. Read the remedy clause as carefully as the retention clause.",
			],
		},
		{
			heading: "WA heat: outdoor cabinets, derating, and shading",
			body: [
				"Battery cabinets installed outdoors in Perth’s climate face radiant heat loads that go well beyond ambient air temperature. A dark-coloured metal cabinet in direct afternoon sun can reach internal temperatures that trigger thermal derating — where the BMS reduces available charge and discharge current to protect the cells. Derating is not a failure; it is a protection mechanism. But it means your battery delivers less power during exactly the peak-heat periods when your cooling load is highest and you most want the stored energy.",
				"AS/NZS 5139 specifies siting requirements for battery energy storage systems including clearances, ventilation, and separation from ignition sources. The standard does not mandate shading, but thermal engineering best practice for WA conditions points toward shaded or north-facing-away-from-sun cabinet placement, or an indoor installation in a ventilated room. Ask your installer for the datasheet’s maximum recommended ambient temperature and confirm the proposed installation location stays within it across WA summer conditions.",
				"IP rating governs ingress of dust and water, not heat. An IP65-rated outdoor cabinet in direct Perth sun is protected against dust and water jets but may still overheat if the ventilation design assumes a cooler climate. Ask specifically for the cabinet’s maximum ambient operating temperature, the thermal management method (passive ventilation, active ventilation, or sealed with internal thermal management), and any manufacturer shading requirement that affects warranty validity.",
			],
		},
		{
			heading: "Baselining and tracking SoH from day one",
			body: [
				"The buyers who are best placed to make warranty claims are the ones who documented their system from commissioning. Request a commissioning report that includes: initial capacity test result (kWh delivered at the rated C-rate), ambient temperature during the test, BMS firmware version, charge limit setting, and the installer’s contact details. File this alongside your warranty document.",
				"Track SoH annually by repeating a capacity test under similar conditions to the commissioning baseline. Many modern inverter-charger platforms log cumulative energy throughput and can generate a capacity test report with installer assistance. If your BMS shows a SoH percentage, note it alongside each capacity test result so you can calibrate how accurate the BMS estimate is for your specific unit over time.",
				"When you engage RENOZ or any local battery OEM, ask what SoH documentation they provide at commissioning and what the warranty claim process looks like in practice. A Perth-based OEM can be engaged directly — not through a call centre — which simplifies the conversation when a warranty question arises years into service.",
			],
		},
	],
	proofLinks: [
		{
			label: "AS/NZS 5139 battery installation standard (standards.org.au)",
			href: "https://www.standards.org.au/standards-catalogue/sa-snz/electrotechnology/el-042/as-slash-nzs--5139-colon-2019",
			external: true,
		},
		{
			label:
				"Clean Energy Council battery buyer resources (cleanenergycouncil.org.au)",
			href: "https://www.cleanenergycouncil.org.au/consumers/battery-storage",
			external: true,
		},
		{
			label: "Battery safety and standards overview (energy.gov.au)",
			href: "https://www.energy.gov.au/households/batteries",
			external: true,
		},
		{
			label: "RENOZ technical resources and datasheets",
			href: "/resources",
		},
		{
			label: "Residential battery systems",
			href: "/products/residential",
		},
		{
			label: "Warranty registration and documentation",
			href: "/warranty",
		},
	],
	faqHeading: "State-of-health questions owners ask",
	faqs: [
		{
			question: "What is battery State of Health?",
			answer:
				"State of Health (SoH) is the ratio of your battery’s current usable capacity to its original rated capacity, expressed as a percentage. A new battery starts at 100% SoH and degrades over time. A battery showing 80% SoH still delivers 80% of its nameplate kWh under test conditions — but those test conditions (C-rate, temperature, DoD) must be stated in the warranty to be meaningful.",
		},
		{
			question:
				"Why does my battery app show a high SoH when the system feels weaker?",
			answer:
				"Displayed SoH is almost always an estimate, not a measurement. BMS software uses coulomb counting and voltage inference to calculate SoH, and both methods accumulate error over time. The flat voltage curve of LiFePO4 makes voltage-based estimation particularly imprecise. The only way to verify real SoH is a full charge-discharge capacity test at a known C-rate and temperature, with the result logged.",
		},
		{
			question:
				"What does ‘70% capacity retention after 10 years’ actually mean?",
			answer:
				"It means the manufacturer warrants that the battery will deliver at least 70% of its nameplate kWh under the test conditions defined in the warranty document after 10 years (or the cycle count limit, whichever comes first). The key words are ‘test conditions defined in the warranty’ — if the document does not specify C-rate, temperature, and DoD for the retention test, the clause is difficult to enforce. Always read the remedy provisions too: prorated warranties reduce reimbursement as the battery ages.",
		},
		{
			question: "How does Perth heat affect battery degradation?",
			answer:
				"Heat is the dominant degradation accelerator for lithium batteries. Sustained high ambient temperatures, combined with time at high SoC, accelerate capacity fade and internal resistance growth. In Perth, where summer ambients regularly exceed 38°C and outdoor cabinets in direct sun can be significantly hotter, siting and shading decisions at installation have a measurable impact on 10-year SoH. Ask for the temperature derating curve in the product datasheet and confirm the proposed cabinet location stays within the manufacturer’s maximum ambient temperature specification.",
		},
		{
			question: "What is thermal derating and when does it happen?",
			answer:
				"Thermal derating is when the BMS reduces available charge or discharge current in response to high cell or ambient temperature. It is a protection mechanism, not a fault. The derating threshold and curve vary by product and must be stated in the datasheet. In WA conditions, an outdoor battery in direct afternoon sun may derate during the hours you most want to draw on it. Shading or indoor installation can prevent derating events that would otherwise recur daily through summer.",
		},
		{
			question: "How do I run a capacity test on my battery?",
			answer:
				"Start with a full charge and a resting period, then discharge at the C-rate specified in the datasheet to the defined cut-off voltage, logging total kWh delivered. Temperature during the test should be recorded and compared to the rated test temperature (typically 25°C). Many inverter-charger platforms can assist with this via their logging or test functions. Ask your installer to perform and document a capacity test at commissioning so you have a baseline for future comparison.",
		},
		{
			question: "Does AS/NZS 5139 cover battery SoH or testing?",
			answer:
				"AS/NZS 5139 is an installation standard covering siting, separation, ventilation, and safety requirements for battery energy storage systems. It does not specify SoH test protocols or warranty requirements — those are product-level matters set by the manufacturer’s datasheet and warranty document. AS/NZS 5139 is nonetheless relevant because its siting requirements (ventilation, separation, enclosure) influence thermal conditions and therefore long-term degradation.",
		},
		{
			question:
				"Can I ask RENOZ directly about SoH documentation for their batteries?",
			answer:
				"Yes. RENOZ is a Perth-based OEM, which means you can engage their technical team directly rather than through a distributor or call centre. Ask for the commissioning capacity test procedure, the warranty capacity-retention clause and its referenced test protocol, and the thermal derating curve for the specific module. A local OEM should be able to answer these questions without directing you to a global support queue.",
		},
	],
	closing: {
		heading: "Match the display to the warranty clause",
		body: "If SoH matters to a claim, ask how it is measured under the warranty — then talk to RENOZ for documentation on the modular platform you own or are specifying.",
	},
	cta: {
		primaryLabel: "Ask RENOZ about SoH documentation",
		primaryTo: "/contact",
		secondaryLabel: "View residential battery systems",
		secondaryTo: "/products/residential",
	},
	relatedProductPaths: ["/products/residential", "/products/rural"],
};
