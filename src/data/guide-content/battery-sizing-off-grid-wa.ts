import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "battery-sizing-off-grid-wa",
	title: "Off Grid Battery Sizing WA: How Much kWh Do You Need? 2026",
	description:
		"Practical guide to sizing your off-grid battery bank in Western Australia — daily load audit, WA climate zones, autonomy days, and worked examples. Updated July 2026.",
	h1: "What size battery do I need off grid in WA? A practical sizing guide 2026",
	updated: "2026-07-23",
	claimsPending: false,
	showCapacityLadder: true,
	directAnswer:
		"For most off-grid homes in Western Australia, battery capacity falls between 10 kWh (small weekender) and 60 kWh+ (farm with pumps and refrigeration). The core method is: total your daily kWh use, multiply by your target days of autonomy (typically 2–3 days for sunny WA coastal areas, 4–5 days for cloudy inland winters), then divide by usable depth of discharge (0.8 for LiFePO4). Off-grid batteries are eligible for the federal Cheaper Home Batteries Program — roughly 30% off at point of sale — with no grid connection required, as confirmed by DCCEEW.",
	decisionRowLabels: [
		"Typical daily load",
		"Days of autonomy",
		"Gross kWh needed",
		"RENOZ modules",
		"System cost range",
		"Best for",
	],
	decisionColumns: [
		{
			name: "Weekender / cabin",
			cells: [
				"5–8 kWh/day",
				"2 days",
				"~12–20 kWh gross",
				"2–4 × 5.12 kWh",
				"$15k–$30k installed",
				"Holiday blocks, shacks, small retreats",
			],
		},
		{
			name: "Family home (3–4 bed)",
			highlight: true,
			cells: [
				"12–20 kWh/day",
				"2–3 days",
				"~30–75 kWh gross",
				"6–15 × 5.12 kWh (1–2 towers)",
				"$40k–$65k installed",
				"Permanent rural WA residence",
			],
		},
		{
			name: "Farm / high-load",
			cells: [
				"30–80 kWh/day",
				"3–5 days",
				"~110–500 kWh gross",
				"12–40+ × 5.12 kWh (multi-tower)",
				"$70k–$120k+ installed",
				"Bores, cold rooms, workshops, irrigation",
			],
		},
	],
	sections: [
		{
			heading: "Start with a daily kWh audit",
			body: [
				"Before specifying any battery, you need an honest picture of what your site actually consumes each day. The simplest method is to walk through every appliance, note its wattage from the rating plate or spec sheet, estimate hours of daily use, and multiply. A 200 W fridge running 12 hours adds 2.4 kWh. A 500 W television watched 4 hours adds 2 kWh. A 2,400 W kettle used for 10 minutes adds 0.4 kWh. Add those up across everything you plan to run and you have your baseline daily energy figure.",
				"Common appliances and typical WA daily loads: lighting (LED, whole house) 0.5–1.5 kWh; refrigerator (400 L) 1–2 kWh; chest freezer 0.8–1.5 kWh; washing machine (3–4 cycles per week average daily) 0.3–0.6 kWh; television 0.2–0.8 kWh; laptop or computer 0.1–0.5 kWh; ceiling fans 0.2–0.6 kWh; phone and small device charging 0.1–0.3 kWh. Add your specific loads — workshop tools, water pump cycles, electric hot water — and you have a site total.",
				"Add a 10–15% buffer to your audit total to account for inverter conversion losses (typically 3–8%), cabling losses, and appliances that draw slightly more than their rated figure under load. If you are planning for electric hot water, an air conditioner, or EV charging, treat each as a separate category and decide at design time whether to run them from solar only during the day or to draw from battery storage overnight.",
			],
		},
		{
			heading: "Days of autonomy for WA climate zones",
			body: [
				"Days of autonomy is the number of consecutive overcast or low-solar days your battery should carry the house without the solar array contributing meaningfully. It is the largest single multiplier in your sizing calculation, so getting it right for your region matters more than optimising battery chemistry or brand.",
				"Perth coastal and south-west: WA coastal areas receive among the highest solar irradiance in the world, averaging 5–6 peak sun hours per day even in winter. Two days of autonomy is a common design target here. Wheatbelt and inland: winter cloud events are shorter, but frost can affect performance at the extremes. Two to three days is a reasonable target. Great Southern and South West corner: the south-west corner of WA has the cloudiest winters in the state, with winter averages dropping toward 3–4 peak sun hours. Three to four days of autonomy is prudent for year-round reliability. High-reliability farms or medical equipment: design for four to five days regardless of zone.",
				"The trade-off between solar array size and battery autonomy is real. A larger array recovers faster after a cloud event, meaning you can sometimes hold autonomy targets with less battery. A larger battery costs more upfront but buys insurance against the worst-case week. Most WA off-grid designers lean toward more solar and moderate battery rather than very large battery with minimal solar, because solar panels have fallen in price faster than batteries historically.",
			],
		},
		{
			heading: "Depth of discharge and why LiFePO4 changes the maths",
			body: [
				"Battery capacity is stated as gross kWh but you can only access a fraction of that without damaging the cells. The usable fraction is set by the depth of discharge (DoD) limit. Lead-acid batteries are typically rated at 50% DoD — a 20 kWh bank gives you 10 kWh of usable energy. LiFePO4 batteries, including RENOZ LV modules, are designed for 80% DoD and can tolerate occasional deeper discharge without significant calendar life impact.",
				"The practical effect: for a target of 20 kWh of usable energy, you need 25 kWh gross LiFePO4 (20 ÷ 0.8) versus 40 kWh gross lead-acid (20 ÷ 0.5). That difference almost always closes the LiFePO4 price premium when you compare total usable storage, not nameplate capacity. LiFePO4 also tolerates partial state-of-charge operation well, which matters in WA climates where the battery may spend summer days at high SoC and absorb less solar than planned.",
				"For sizing purposes, use 0.8 as your DoD divisor for LiFePO4. Your gross battery size = (daily kWh × days of autonomy) ÷ 0.8. Round up to the next whole RENOZ module (5.12 kWh each). For example, a 15 kWh daily load with 2 days autonomy requires (15 × 2) ÷ 0.8 = 37.5 kWh gross, which rounds up to 8 modules (40.96 kWh).",
			],
		},
		{
			heading: "Surge sizing: bore pumps, welders, and air conditioners",
			body: [
				"Starting current (inrush or locked-rotor amperage, LRA) for motor loads can be 4–8 times the running current. A bore pump rated at 1.5 kW running may demand 6–12 kW for the first half-second of every start. An inverter that cannot supply that peak will stall the pump, trip on overcurrent, or damage the motor's start capacitor. Surge sizing is separate from energy sizing — it determines the inverter kVA, not the battery kWh.",
				"Air conditioners with fixed-speed compressors have similar inrush behaviour. Inverter-type (variable-speed) air conditioners start more gently but still draw 2–3× running current at startup. For sites with multiple motor loads that could start simultaneously — a bore pump starting while the fridge compressor kicks in — add the individual LRA figures and design the inverter for that combined peak.",
				"Battery capacity influences surge indirectly: a battery bank that is near full (high SoC) can supply surge current more readily than a deeply discharged bank whose BMS may be limiting output. For high-inrush sites, avoid designing a system where the battery routinely reaches 15–20% SoC before the next solar day — the headroom matters for motor reliability as much as the inverter kVA rating.",
			],
		},
		{
			heading: "Worked example: weekender (~10 kWh)",
			body: [
				"A typical WA weekender or bush block runs LED lighting, a small bar fridge, a phone charger, a laptop, and a ceiling fan. Total daily load: roughly 4–6 kWh on occupied days. Autonomy target: 2 days (coastal or south-west WA). Gross battery needed: (5 kWh × 2) ÷ 0.8 = 12.5 kWh. Two RENOZ LV-5KWH100AH modules give 10.24 kWh gross (8.2 kWh usable). Three modules give 15.36 kWh gross (12.3 kWh usable) and provide genuine headroom for an occasional additional load.",
				"For a weekender that is unoccupied most of the week, parasitic loads from the inverter, BMS, and any monitoring equipment matter. A typical off-grid inverter draws 30–100 W idle. Over five unoccupied days that is 3.6–12 kWh — material against a small bank. Either program the inverter to hibernate when unoccupied, or size the battery to cover both parasitic drain and the occupied weekend.",
				"Typical installed cost for a small off-grid weekender system in WA runs $15,000–$30,000 including solar, inverter, and battery. Federal CHBP rebate applies, reducing the battery component cost by roughly 30% at point of sale.",
			],
		},
		{
			heading: "Worked example: family home (~20–30 kWh)",
			body: [
				"A permanent 3–4 bedroom WA rural home with refrigeration, washing machine, lights, ceiling fans, and occasional power tool use typically consumes 12–20 kWh per day. Add a modest bore pump running 1 hour daily (1 kW pump = 1 kWh) and you land at 13–21 kWh. Using 18 kWh as a mid-range figure, 2.5 days autonomy, and 0.8 DoD: gross need is (18 × 2.5) ÷ 0.8 = 56.25 kWh. That is 11 RENOZ modules (56.32 kWh gross, 45 kWh usable), typically arranged as one tower of 8 and a second of 3, or two towers of 6 within a single parallel bank.",
				"Adding a reverse-cycle air conditioner to a rural WA home changes the calculus significantly. A 2.5 kW split system running 6 hours in summer adds 15 kWh per day. At that point you are sizing for 30+ kWh daily and the battery bank grows accordingly. The practical advice most WA off-grid designers give is: oversise the solar array before oversising the battery. Extra solar panels recover the battery faster on partially cloudy days and cost less per extra kWh of daily generation than extra battery cells.",
				"Installed cost for a standard 3-bed off-grid rural WA home typically runs $40,000–$65,000. These are indicative ranges sourced from published WA off-grid system pricing; your installer will quote based on actual loads, cabling distances, and site conditions.",
			],
		},
		{
			heading: "Worked example: farm or high-load site (~30–60 kWh+)",
			body: [
				"Farm and high-load sites introduce loads that dwarf domestic consumption: submersible bore pumps (2–5 kW, running hours per day), cold rooms or walk-in freezers (3–10 kWh/day each), workshop equipment, irrigation control, and potentially a three-phase supply to sheds. Daily energy at a working farm commonly reaches 40–100 kWh when all loads are counted. Bore pump runtime and cold room duty cycle are the two figures most often underestimated at the design stage.",
				"At 50 kWh/day with 3 days autonomy: gross need is (50 × 3) ÷ 0.8 = 187.5 kWh. That is approximately 37 RENOZ modules across multiple towers. The platform supports up to 8 modules per tower and up to 6 towers in parallel, giving a maximum of 245.76 kWh gross (196.6 kWh usable) in a single bank — adequate for most farm sites. Very high-energy sites above that threshold may require a second independent battery bank and system design review.",
				"At this scale, oversising solar and using daytime-only operation for high-draw loads (cold room pull-down, bore pump top-up, welder) is almost always the right strategy. Battery storage covers overnight loads and buffer against cloud. Diesel backup — even a well-maintained genset running 2 hours every 4–5 cloudy days — is a cost-effective reliability backstop for remote WA farms rather than an admission of defeat. Installed costs for farm systems in WA typically run $70,000–$120,000+ depending on load and distance.",
			],
		},
		{
			heading: "Solar-to-battery ratio and oversising solar",
			body: [
				"The ratio of solar array size to battery capacity is one of the most debated design parameters in off-grid engineering. A common starting point is that the solar array should be able to recharge the battery from 20% SoC to 80% SoC in a single good solar day. If your battery is 30 kWh usable and you want to restore 60% SoC (18 kWh) in 5 peak sun hours, you need at minimum 3.6 kW of effective array output after losses — in practice 4–5 kW of installed panels accounting for temperature derating, dust, and cable losses.",
				"Adding more solar panels ahead of adding more battery is usually the better value decision in WA's climate. Panels have continued to fall in price and WA's high irradiance means additional panels contribute meaningfully through winter without increasing storage cost. A well-sized solar array on a moderately sized battery typically outperforms a large battery with a minimal array because it recovers faster after cloud events and makes surplus energy available for daytime loads at no additional battery cycling cost.",
				"The exception is sites where cloud events routinely run beyond 3 days — southern coastal WA in June and July, or densely shaded rural blocks. There, additional battery autonomy days are the reliable fix, and no amount of extra solar compensates for days of minimal generation. Work through the worst-case historical cloud sequences for your specific location with your installer before finalising the battery-to-solar ratio.",
			],
		},
		{
			heading: "Federal rebate for off-grid systems",
			body: [
				"Off-grid batteries are eligible for the federal Cheaper Home Batteries Program (CHBP). This delivers roughly 30% off the battery cost upfront via Small-scale Technology Certificates (STCs) applied at point of sale — no application required and the scheme is not means-tested. DCCEEW has confirmed that grid connection is not required for eligibility.",
				"The full STC rate applies to the first 14 kWh of usable battery capacity. From 1 May 2026, capacity between 14 kWh and 28 kWh attracts 60% of the STC value, and 28–50 kWh attracts 15%. For large off-grid farm batteries, this means the rebate is proportionally smaller on a per-kWh basis but still material on the 0–14 kWh tranche. The STC discount steps down every 6 months from 1 January 2027 — systems installed sooner lock in a larger discount.",
				"The WA Residential Battery Scheme (WARBS) requires VPP enrolment via the Synergy or Horizon grid and does not apply to fully off-grid systems. Off-grid buyers therefore rely on the federal CHBP only. Requirements: the battery must be CEC-approved and the installer must be SAA-accredited. Confirm RENOZ LV-5KWH100AH CEC listing with your installer before contracting.",
			],
		},
	],
	proofLinks: [
		{
			label: "Federal CHBP — energy.gov.au",
			href: "https://www.energy.gov.au/rebates/cheaper-home-batteries-program",
			external: true,
		},
		{
			label: "DCCEEW CHBP — off-grid eligibility confirmed",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA Residential Battery Scheme — wa.gov.au",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "WARBS via Plenti",
			href: "https://www.plenti.com.au/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "RENOZ rural off-grid battery products",
			href: "/products/rural",
			external: false,
		},
		{
			label: "Off-grid battery systems Perth — overview guide",
			href: "/resources",
			external: false,
		},
		{
			label: "Harvey Farm case study",
			href: "/case-studies/harvey-farm",
			external: false,
		},
	],
	faqs: [
		{
			question:
				"What size battery do I need for a 3-bedroom off-grid house in WA?",
			answer:
				"A 3-bedroom rural WA home typically consumes 12–20 kWh per day. With 2–3 days of autonomy and LiFePO4's 80% usable depth, you need roughly 30–75 kWh of gross battery capacity — that is 6–15 RENOZ 5.12 kWh modules. The exact figure depends on your bore pump, hot water system, and whether you run air conditioning. A load audit before specifying is essential.",
		},
		{
			question: "Do off-grid batteries qualify for the 2026 federal rebate?",
			answer:
				"Yes. The federal Cheaper Home Batteries Program applies to off-grid systems — no grid connection required, confirmed by DCCEEW. The rebate is approximately 30% off the battery cost via STCs at point of sale, with no application needed. The WA Residential Battery Scheme (WARBS) does not apply to off-grid systems because it requires VPP enrolment on the Synergy or Horizon grid.",
		},
		{
			question: "How many days of autonomy should I design for in rural WA?",
			answer:
				"Perth coastal and most inland WA: 2–3 days is standard. The south-west corner (Margaret River, Albany, Denmark area) has cloudier winters and 3–4 days is prudent for a year-round residence. High-reliability sites — bore pumps, medical equipment, cold rooms — should design for 4–5 days regardless of location. A larger solar array reduces the autonomy days you need by recovering faster after cloud events.",
		},
		{
			question: "What depth of discharge should I use for LiFePO4 sizing?",
			answer:
				"Design to 80% depth of discharge (0.8 DoD) for LiFePO4 batteries including RENOZ LV modules. That means a 25 kWh gross battery delivers 20 kWh usable. This is significantly better than lead-acid, which is typically rated to 50% DoD — you need 40 kWh gross lead-acid to access the same 20 kWh usable. The difference closes the LiFePO4 price premium when comparing usable storage.",
		},
		{
			question: "How do bore pumps affect battery sizing?",
			answer:
				"Bore pumps have two impacts: energy (kWh per day of runtime) and surge (startup inrush current). A 1.5 kW pump running 2 hours adds 3 kWh daily — straightforward to add to your load audit. The startup surge, typically 4–8× running current, determines inverter kVA rather than battery kWh. However, a battery at low state of charge has reduced surge capacity, so avoid designs where the battery routinely hits 15–20% SoC before solar recovery.",
		},
		{
			question: "What does an off-grid system cost in WA?",
			answer:
				"Indicative installed costs for WA off-grid systems: cabin or small block $15,000–$30,000; standard 3-bed rural home $40,000–$65,000; farm and high-load sites $70,000–$120,000+. Batteries are typically 40–50% of system cost. Off-grid becomes cost-competitive with a Western Power line extension once the extension exceeds roughly $25,000–$30,000 (extensions typically run $20,000–$50,000 per km). All figures are indicative based on published WA market pricing.",
		},
		{
			question:
				"How many RENOZ modules do I need for a 20 kWh off-grid system?",
			answer:
				"For 20 kWh of usable energy with LiFePO4 at 80% DoD, you need 25 kWh gross. Each RENOZ LV-5KWH100AH module is 5.12 kWh gross. Five modules give 25.6 kWh gross (20.5 kWh usable) — the minimum to hit the target. Six modules (30.72 kWh gross, 24.6 kWh usable) add a comfortable buffer for a heavy-use day. Stack up to 8 per tower; up to 6 towers in parallel.",
		},
		{
			question:
				"Is it better to oversize solar or oversize the battery for WA off-grid?",
			answer:
				"In most of WA, oversising solar is the better first move. WA's high irradiance means extra panels contribute meaningfully year-round and recover the battery faster after cloud events. Additional battery capacity makes more sense for sites that experience multi-day cloud sequences — principally the south-west corner in winter — or sites with very high overnight loads that cannot be shifted to daytime. Talk through your worst-case cloud history with your installer before finalising the ratio.",
		},
	],
	cta: {
		primaryLabel: "Spec a rural off-grid system",
		primaryTo: "/products/rural",
		secondaryLabel: "Talk to the RENOZ team",
		secondaryTo: "/contact",
	},
	relatedProductPaths: ["/products/rural", "/products/residential"],
};
