import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "diesel-to-battery-wa-farms",
	title: "Replace Diesel Generators with Farm Battery Storage WA 2026",
	description:
		"How WA farms cut diesel generator costs with solar + battery storage — sizing for bore pumps, coolrooms and sheds, CHBP rebate applies off-grid.",
	h1: "Farm battery storage WA: replacing diesel generators with solar + battery in 2026",
	updated: "2026-07-23",
	claimsPending: true,
	showCapacityLadder: true,
	directAnswer:
		"Solar plus battery storage beats diesel generation on WA farms when annual fuel and servicing costs exceed the amortised CapEx of a properly sized hybrid system — or when a Western Power line extension quotes above roughly $25,000–$30,000. The federal Cheaper Home Batteries Program applies to off-grid systems, giving eligible farms approximately 30% off the battery cost with no grid connection required. Keep diesel as backup unless the site is explicitly designed for daytime hydrocarbons-off operation. Size from real load logs — bore pumps, coolrooms, and sheds together — not a brochure rule.",
	decisionRowLabels: [
		"Primary trigger",
		"Diesel role after conversion",
		"Typical system building blocks",
		"Federal rebate (CHBP)?",
		"Proof to bring to a design conversation",
		"Next step",
	],
	decisionColumns: [
		{
			name: "High diesel running cost",
			cells: [
				"Fuel + service + labour to refuel remote sites",
				"Backup only — generator starts on low sun or high load",
				"Solar array + RENOZ modular BESS + hybrid inverter-charger",
				"Yes — off-grid systems eligible; no grid connection required",
				"Fuel litres/year, service invoices, runtime logs",
				"Rural system design with load data",
			],
		},
		{
			name: "Costly grid connection",
			highlight: true,
			cells: [
				"Western Power line extension quote exceeding ~$25k–$30k",
				"Optional backup generator or retained diesel",
				"Off-grid or hybrid microgrid sized for full autonomy",
				"Yes — CHBP does not require grid connection",
				"Network connection quote vs BESS + solar CapEx comparison",
				"Site assessment with autonomy targets",
			],
		},
		{
			name: "Resilience / fringe-of-grid station",
			cells: [
				"Outage risk on long rural feeder or weak Horizon network",
				"As required by outage history and load criticality",
				"Larger usable kWh bank + hybrid inverter + optional diesel",
				"Yes if off-grid; grid-tied also eligible for federal program",
				"Outage history + critical load list + feeder voltage data",
				"Rural or commercial consult",
			],
		},
	],
	sections: [
		{
			heading: "The real diesel running-cost calculation",
			body: [
				"Diesel generators on WA farms carry costs that rarely appear on a single invoice: fuel at the bowser plus freight to a remote site, scheduled oil and filter changes, annual or biennial overhauls, unplanned breakdowns during harvest or summer peak, and the labour cost of someone driving out to refuel or restart. When you add those together over a year and compare against the amortised CapEx and OPEX of a solar plus battery system, the crossover point arrives sooner than most farm owners expect.",
				"A simple starting calculation: take your annual litres of diesel consumed for generation, multiply by the delivered price per litre at your gate, add an honest service budget, and compare that annual figure to (system CapEx divided by design life in years) plus any ongoing BESS maintenance. That comparison — not a generic payback claim — is what a good rural system designer should show you before you sign anything.",
				"Noise and emissions are real considerations too, particularly near staff accommodation, shearing sheds, and horticultural operations where dust or fumes affect working conditions. A BESS running silently from solar is a different working environment, not just a different electricity bill.",
			],
		},
		{
			heading: "When the grid connection quote changes everything",
			body: [
				"Western Power line extensions in rural WA typically run $20,000–$50,000 per kilometre, and the cost falls on the connecting customer in most cases. When a quote for a modest run of line comes back above $25,000–$30,000, a solar plus battery microgrid becomes the rational CapEx comparison — not just an environmental preference.",
				"The federal Cheaper Home Batteries Program applies to off-grid systems with no grid connection required, confirmed by the Department of Climate Change, Energy, the Environment and Water. That means a farm that never intends to connect to the grid can still receive the approximately 30% upfront discount via Small-scale Technology Certificates at point of sale — with no application process and no means test. Verify current dollar amounts on the program pages before budgeting, as rates step down from 1 January 2027.",
				"Horizon Power customers in the Midwest, Pilbara, and south-west regions who are grid-connected may also be eligible for the WA Residential Battery Scheme at $380 per usable kWh (capped at $3,800), but that scheme requires VPP enrolment — so fully off-grid properties cannot access it. The federal CHBP is the rebate path for off-grid farms.",
			],
		},
		{
			heading: "Sizing for bore pumps, coolrooms, and sheds",
			body: [
				"Farm loads are not domestic loads. A bore pump drawing 3–7 kW at startup with a locked-rotor current spike of two to three times its running current is a fundamentally different challenge from a suburban air conditioner. A coolroom compressor cycling overnight, a shearing shed requiring sustained high current for several weeks a year, or an irrigation pump running long duty cycles during summer — these define the battery and inverter specifications, not the house.",
				"Size battery kWh from overnight and low-sun energy demand: how many hours does the bore pump run per day, what is the coolroom's average draw across a 24-hour cycle, what does the shed consume during its operating season? Stack those loads and apply your target depth of discharge to get usable kWh required. Then add headroom for cloudy-day autonomy — two to three days is a common rural design target but must be validated against your location's solar resource data.",
				"RENOZ LV modules are 5.12 kWh each. A single tower accommodates up to 8 modules (approximately 41 kWh usable before derating). Up to 6 towers can be paralleled for larger sites. That modular structure means capacity can grow as the farm adds infrastructure — a new coolroom or additional pumping plant — without replacing the core inverter and control system.",
			],
		},
		{
			heading: "Choosing the right inverter-charger for agricultural loads",
			body: [
				"Not all hybrid inverters handle agricultural loads well. High-frequency designs with small magnetic cores can suffer under long inductive motor inrush — the surge window may be milliseconds when a bore pump needs several seconds of elevated current to spin up. For WA farm applications with serious pumping or compressor loads, low-frequency inverter-chargers — Victron MultiPlus and Quattro, or Selectronic SP PRO-class systems — are the architectures that handle generator assist, motor surge, and diesel backup integration most reliably.",
				"RENOZ LV modules pair particularly well with Victron and Selectronic platforms because those inverters treat battery management as a proper engineered integration: charge profiles, contactor behaviour, and communication settings are configurable rather than assumed. Deye-class hybrids are a viable path for lighter farm loads and hybrid grid-tie applications, but confirm the specific model's surge capability against the worst motor load on the site before specifying.",
				"Always measure or estimate Locked Rotor Amps on bore pumps and compressors before finalising the inverter specification. A soft-starter or variable frequency drive on a large DOL pump often costs less than stepping up an entire inverter, and protects the motor at the same time.",
			],
		},
		{
			heading: "Keeping diesel as intelligent backup",
			body: [
				"Removing diesel entirely is appealing on paper but requires careful engineering. The practical approach for most WA farms is to retain the generator as backup for extended low-sun periods, maintenance windows, or unusually high-load events — and configure the system so the generator only starts automatically when battery state of charge drops below a defined threshold.",
				"Victron and Selectronic inverter-chargers have mature generator-start and PowerAssist workflows built in: the generator charges the battery bank and powers critical loads when solar cannot keep up, then hands back to battery and solar when conditions recover. That hybrid diesel-BESS design gives you the running-cost savings of solar on most days while retaining the unconditional availability of a generator for rare edge cases.",
				"Full hydrocarbons-off daytime operation is achievable on well-designed large solar arrays with sufficient battery capacity, but it must be explicitly engineered — load shedding controls, battery SoC monitoring, and clear manual override procedures for staff. Do not assume it will happen by default if you just install a big enough array.",
			],
		},
		{
			heading: "Harvey farm: what a real WA conversion looks like",
			body: [
				"The Harvey farm case study on this site gives before-and-after context for a WA agricultural property transitioning from diesel-heavy generation to a solar plus battery hybrid. Metrics, load context, and installer details are disclosed on the case study page — use those figures rather than generic industry averages when quoting performance to a lender or board.",
				"If a system designer or installer cannot point you to a named, located case study with disclosed load data and outcomes, treat their payback claims with caution. Real agricultural projects vary too widely by crop type, pumping duty, seasonal load profile, and location to support generic rules like 'a farm battery pays back in five years.'",
			],
		},
		{
			heading: "Federal CHBP rebate for off-grid farms: what to verify",
			body: [
				"The Cheaper Home Batteries Program runs to 31 December 2030 and was expanded from $2.3 billion to $7.2 billion in December 2025. The current discount is approximately $252–$272 per usable kWh — roughly $2,500–$2,700 off a 10 kWh battery — applied at point of sale via Small-scale Technology Certificates with no application required by the customer.",
				"Off-grid systems are explicitly eligible, confirmed by the Department of Climate Change, Energy, the Environment and Water. Requirements are a CEC-approved battery and installation by an SAA-accredited installer. The full rate applies on the first 14 kWh; from 1 May 2026 a tiered structure reduces the rate above 14 kWh. The STC value steps down every six months from 1 January 2027, so earlier installations lock in a larger discount.",
				"For farm-scale systems requiring 40 kWh or more, the tiered structure means the effective rebate per dollar of battery CapEx is lower than for residential-sized systems, but it remains a meaningful offset. Always verify current rates and tier thresholds on the official program pages before building a financial model — do not use marketing copy or undated online summaries.",
			],
		},
		{
			heading: "Planning the conversation with a system designer",
			body: [
				"Come to a rural system design conversation with: annual diesel litres consumed for generation, any Western Power or Horizon Power connection quotes you have received, a list of critical loads with their rated kW and estimated daily hours, your location and the distance to the nearest distribution line, and any expansion plans for the next five years (new coolrooms, more pumping, staff accommodation).",
				"A credible designer will give you a load-based sizing recommendation with sensitivity tables — what happens if you add the coolroom, or if you have three consecutive cloudy days in winter — not a single 'standard farm package.' Ask to see the assumptions behind any payback calculation, and ask specifically what happens to the economics if diesel prices change by 20% in either direction.",
			],
		},
	],
	proofLinks: [
		{
			label: "Cheaper Home Batteries Program (energy.gov.au)",
			href: "https://www.energy.gov.au/rebates/cheaper-home-batteries-program",
			external: true,
		},
		{
			label: "CHBP off-grid eligibility — DCCEEW",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA Residential Battery Scheme (wa.gov.au)",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "Harvey farm case study",
			href: "/case-studies/harvey-farm",
		},
		{
			label: "Rural products",
			href: "/products/rural",
		},
		{
			label: "Technical resources",
			href: "/resources",
		},
	],
	faqs: [
		{
			question: "Does the federal battery rebate apply to off-grid WA farms?",
			answer:
				"Yes. The Cheaper Home Batteries Program explicitly covers off-grid systems — no grid connection or VPP enrolment is required. The discount is approximately $252–$272 per usable kWh at point of sale via Small-scale Technology Certificates. Requirements are a CEC-approved battery and an SAA-accredited installer. Verify current rates on the DCCEEW program pages before budgeting, as rates tier from 1 May 2026 and step down from 1 January 2027.",
		},
		{
			question: "Can off-grid farms also access the WA battery rebate?",
			answer:
				"No. The WA Residential Battery Scheme requires VPP enrolment with Synergy or Horizon Power, which means fully off-grid properties do not qualify. Off-grid farms can only access the federal CHBP. Grid-connected Horizon Power customers in eligible regional areas can access the WA scheme at $380 per usable kWh (capped at $3,800) stacked on top of the federal discount.",
		},
		{
			question: "What size battery does a WA farm typically need?",
			answer:
				"There is no standard farm package. Bore pumps, coolrooms, shearing sheds, and staff accommodation vary widely. Start from measured or estimated daily kWh consumption per load, target two to three days of cloudy-day autonomy for your climate zone, and apply your design depth of discharge to get required usable kWh. RENOZ 5.12 kWh modules can be stacked up to 8 per tower (approximately 41 kWh) and up to 6 towers in parallel for larger sites.",
		},
		{
			question: "Should we remove the diesel generator entirely?",
			answer:
				"Most WA farm designs retain diesel as backup for extended low-sun periods and maintenance windows. Full daytime hydrocarbons-off operation is achievable but must be explicitly engineered with load-shedding controls and generator start thresholds. Removing diesel entirely without that engineering risks critical load loss during a bad winter week.",
		},
		{
			question: "What inverter is best for bore pumps and coolrooms?",
			answer:
				"Agricultural loads with high inductive startup current — bore pumps and compressors — are best served by low-frequency inverter-chargers such as Victron MultiPlus/Quattro or Selectronic SP PRO class. These handle motor surge and generator-assist workflows reliably. High-frequency hybrids can work for lighter loads but confirm the specific model's surge duration against your worst motor's locked-rotor current before specifying.",
		},
		{
			question:
				"How does the cost of a solar + battery system compare to a grid connection?",
			answer:
				"Western Power line extensions typically run $20,000–$50,000 per kilometre, paid by the connecting customer. When a connection quote exceeds roughly $25,000–$30,000, a solar plus battery off-grid or hybrid system is commonly the more rational CapEx. The comparison should include solar array, battery, inverter, and any retained generator against the connection cost plus ongoing network tariffs.",
		},
		{
			question: "How much does a farm-scale BESS system cost in WA?",
			answer:
				"Farm and high-load off-grid systems in WA typically run $70,000–$120,000 or more installed, with batteries representing roughly 40–50% of total system cost. These are indicative ranges from 2025–26 market data — actual costs depend on load profile, location, inverter selection, generator integration, and site access. Get itemised quotes from accredited installers; pricing has been falling approximately 12% year-on-year into 2026.",
		},
		{
			question: "Can we expand the battery system later if the farm grows?",
			answer:
				"Yes — that is one of the practical advantages of modular LV architecture. RENOZ LV modules (5.12 kWh each) can be added to an existing tower up to 8 modules, and additional towers paralleled up to 6 in total. Expansion must still be engineered within the inverter and BMS limits of the original design, so plan for future loads at system design time rather than retrofitting controls later.",
		},
	],
	cta: {
		primaryLabel: "Request a rural system design",
		primaryTo: "/products/rural",
		secondaryLabel: "Read the Harvey farm case study",
		secondaryTo: "/case-studies/harvey-farm",
	},
	relatedProductPaths: ["/products/rural"],
};
