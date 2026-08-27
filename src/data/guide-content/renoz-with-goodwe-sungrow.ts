import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "renoz-with-goodwe-sungrow",
	title: "Adding a Modular Battery to a GoodWe or Sungrow Hybrid 2026",
	description:
		"How to add a modular RENOZ battery to a GoodWe or Sungrow hybrid in Perth — SSL verify, rebate stacking, backup expectations, and retrofit paths.",
	primaryKeyword: "goodwe hybrid battery retrofit",
	h1: "Adding a modular battery to a GoodWe or Sungrow hybrid",
	updated: "2026-07-26",
	claimsPending: false,
	pairingPartner: "GoodWe / Sungrow",
	eyebrow: "Hybrid pairing guide · Grid-tied & new builds",
	showCapacityLadder: true,
	intro: [
		"GoodWe and Sungrow hybrids are among the most common inverters on Perth rooftops. RENOZ LV modules (5.12 kWh each, 8 or 10 per tower, depending on the approved configuration, multiple towers in parallel as required by the engineered system design) give that inverter pathway a modular WA OEM battery rather than a locked import pack. In the Synergy area, stacking the federal Cheaper Home Batteries Program (~$252–$272 per usable kWh) with the WA Residential Battery Scheme ($130/kWh, capped at $1,300) can reduce a 10 kWh grid-tied system cost by roughly $5,000. Both rebates require the battery and inverter/solution to appear on current approved lists — verify the exact GoodWe or Sungrow model pair before signing.",
		"A goodwe hybrid battery retrofit — and the same path on many Sungrow installs — keeps the inverter you already trust and adds modular OEM capacity that can grow with the home.",
		"Confirm BMS communication, cable sizing, and any CEC or Synergy SSL entries for the exact models on the quote before ordering.",
	],
	expertise: {
		heading: "Perth OEM storage on common rooftop hybrids",
		body: [
			"RENOZ engineers modular LV modules in Perth for installers who already standardise on GoodWe or Sungrow hybrids.",
			"We publish pairing notes so retrofit quotes name protocols and model strings — not “lithium is lithium.”",
		],
	},
	decisionHeading: "GoodWe / Sungrow + RENOZ decision frame",
	decisionRowLabels: [
		"Best for",
		"Battery story",
		"SSL / VPP path",
		"Federal rebate",
		"WA state rebate",
		"Watch-outs",
	],
	decisionColumns: [
		{
			name: "GoodWe/Sungrow + RENOZ",
			highlight: true,
			cells: [
				"New builds and retrofits keeping the hybrid inverter",
				"Modular WA OEM; grow kWh independently",
				"Verify pair on Synergy/Horizon SSL; enrol in VPP",
				"~$252–$272/kWh off via CHBP if CEC-listed",
				"$130/kWh Synergy; $380/kWh Horizon (cap applies)",
				"Confirm exact model + BMS compat before ordering",
			],
		},
		{
			name: "Inverter brand battery pack",
			cells: [
				"Single-brand SKU quote, simple logistics",
				"Locked to brand pack sizes",
				"May or may not be on SSL — still verify",
				"Same CHBP rules; check CEC listing",
				"Same WA rules apply",
				"Limited expansion beyond brand steps",
			],
		},
		{
			name: "All-in-one replacement",
			cells: [
				"Want one-box consumer simplicity",
				"Integrated battery; replace working hybrid",
				"Brand-dependent; may need SSL check",
				"Same CHBP rules apply",
				"Same WA rules apply",
				"Compare CapEx vs keeping existing inverter",
			],
		},
	],
	sections: [
		{
			heading: "Why GoodWe and Sungrow dominate Perth hybrid quotes",
			body: [
				"GoodWe and Sungrow have built large Australian installer bases through competitive pricing, wide model ladders, and reasonable grid-tied hybrid behaviour. Most Synergy-connected homes getting solar-plus-battery quotes in 2026 will see at least one of these brands on the proposal. That installer familiarity has a real benefit: commissioning, firmware updates, and warranty claim paths are well-trodden.",
				"The flip side is that brand familiarity does not automatically mean the inverter is on Synergy or Horizon Power's Supported Solutions List for a given battery pairing. The SSL is a live document — models are added and removed, and a solution that qualified under one firmware may require re-verification under another. Always check the current list for your network before accepting that a quote is 'rebate ready'.",
				"RENOZ sits alongside these inverters as the battery OEM. You keep the hybrid inverter you or your installer has chosen; RENOZ supplies the modular LiFePO4 capacity with Perth engineering support behind it. That split matters for expandability: you can grow the RENOZ bank without replacing the inverter, and you have a local OEM to call if the battery needs attention.",
			],
		},
		{
			heading: "Supported Solutions Lists and VPP enrolment",
			body: [
				"The WA Residential Battery Scheme requires both the battery and the inverter solution to appear on either the Synergy or Horizon Power Supported Solutions List, depending on your network. Entry on that list is granted per tested and approved combination — not per brand in general. A GoodWe or Sungrow model that appears on the list paired with one battery may not be listed for a different battery.",
				"Mandatory VPP enrolment is a condition of the WA scheme: Synergy customers join Battery Rewards, Horizon customers join Community Wave, with a minimum two-year commitment. VPP dispatch events are capped at roughly 30 per year under Battery Rewards, with a payment of 70 cents per kWh during activation. That participation requirement also means fully off-grid systems cannot access the WA scheme — off-grid buyers can still claim the federal Cheaper Home Batteries Program, which does not require VPP or grid connection.",
				"To confirm whether a specific RENOZ plus GoodWe or Sungrow pair is on the relevant SSL, check the live Synergy or Horizon list for your address, and ask RENOZ or a Plenti-accredited installer to verify the exact model strings on the quote. Do not rely on a marketing page — lists update and the scheme is administered with Plenti through accredited vendors.",
			],
		},
		{
			heading: "Rebate stacking for grid-tied Perth homes",
			body: [
				"Grid-tied homes in the Synergy network area can currently stack two rebates. The federal Cheaper Home Batteries Program delivers approximately $252–$272 per usable kWh as an upfront discount through Small-scale Technology Certificates at point of sale — no application, not means-tested. From 1 May 2026 the STC factor is tiered: 100% on the first 14 kWh, 60% on 14–28 kWh, and 15% on 28–50 kWh. The program runs to 31 December 2030, but the STC value steps down every six months from January 2027, so installing sooner locks a larger discount.",
				"On top of that, eligible Synergy customers receive $130 per usable kWh under the WA Residential Battery Scheme, capped at $1,300 for a 10 kWh system. Horizon Power customers in regional WA receive $380 per kWh, capped at $3,800. Combined, that stacking can reduce the net cost of a 10 kWh grid-tied install by roughly $5,000 in the Synergy area or roughly $7,500 in the Horizon area, before any no-interest Plenti loan.",
				"Typical installed cost for a 10–13 kWh grid-tied Perth system runs $12,000–$16,000 before rebates, giving a net range of roughly $7,600 in the Synergy area and $5,100 in the Horizon area after stacking. These are indicative 2025–26 ranges — always get a current itemised quote and verify rebate amounts on official government sources at time of purchase.",
			],
		},
		{
			heading: "Hybrid backup expectations",
			body: [
				"GoodWe and Sungrow hybrid inverters offer backup behaviour, but the quality varies by model and configuration. In a grid-tied hybrid, backup is typically limited to circuits wired through a 'backup' or 'essential loads' port on the inverter — the whole house does not island unless the system is designed for it. Check the switchover time, the load rating of the backup port, and which circuits are included before assuming the battery covers the whole home.",
				"Motor loads — bore pumps, pool pumps, air conditioning compressors — are the usual stress test. Many high-frequency hybrid inverters cope well with residential air conditioning; large bore pumps and compressors with high locked-rotor amps may need a soft-start device or an inverter model with a declared sustained surge rating. RENOZ provides the kWh storage behind the inverter — it cannot compensate for an inverter undersized for the startup loads of your site.",
				"For sites where true whole-home off-grid capability, generator assist, or heavy motor loads are the primary requirement, Victron or Selectronic inverter-chargers paired with the same RENOZ LV modules may be a better match. This guide is aimed at the majority of Perth grid-tied homes where GoodWe or Sungrow hybrid backup is sufficient for essential circuits and overnight self-consumption.",
			],
		},
		{
			heading: "Retrofit vs new build: two different conversations",
			body: [
				"A retrofit adds battery storage to an existing GoodWe or Sungrow hybrid that was originally installed solar-only. That is often straightforward if the inverter has an available battery port and supports the communication protocol RENOZ requires — but 'available port' on a product page is not the same as a commissioned, BMS-integrated pair. Use the RENOZ inverter compatibility declaration on /resources, confirm the specific model and firmware version with your installer, and record both on the quote.",
				"A new build is a cleaner conversation: choose the inverter for the grid behaviour, phase, export limit compliance, and backup story you want; then size RENOZ modules for evening loads and your target backup hours. From 1 May 2026, new batteries on the Synergy network must comply with AS/NZS 4777.2:2020 and support CSIP-AUS or accept a 1.5 kW export cap. Confirm with your installer which Synergy technical requirements apply to the package they are quoting.",
				"In both cases, the DEBS feed-in rate on Synergy is currently 2.25 cents per kWh off-peak and 10 cents per kWh peak (3–9 pm), against a retail tariff of roughly 28–35 cents per kWh. Self-consumption through the battery is almost always more valuable than exporting, which is why evening-sized kWh matters more than simply maximising solar export.",
			],
		},
		{
			heading: "Sizing RENOZ modules for a GoodWe or Sungrow hybrid",
			body: [
				"Each RENOZ LV module is 5.12 kWh (LV-5KWH100AH). Approved towers hold 8 or 10 modules, and towers can be paralleled where required by the engineered system design. Most Perth grid-tied homes use a smaller single-tower configuration matched to measured evening loads and backup requirements.",
				"Size from measured loads, not marketing. If evening consumption is 10–15 kWh and you want a buffer for backup, a three-module tower (15.36 kWh) is a sensible starting point; a two-module pair (10.24 kWh) covers many households that are already moderately efficient. The modular architecture means you can add a module later rather than over-investing up front — provided the inverter's battery bank voltage and current limits accommodate the added capacity.",
				"The federal rebate tiers (100% STC factor on first 14 kWh; 60% on 14–28 kWh) make sizing near the 14 kWh mark worth discussing with your installer: three modules at 15.36 kWh crosses that tier, so the marginal rebate value on the third module drops slightly. That arithmetic changes as STC values step down from January 2027 — model the economics on current rates from the program page, not an old brochure.",
			],
		},
		{
			heading: "Compatibility and BMS discipline",
			body: [
				"'Works with GoodWe' and 'works with Sungrow' are inverter-model and firmware specific claims. The BMS communication between RENOZ modules and the inverter must be set up correctly at commissioning — wrong protocol settings, incorrect cell chemistry profile, or an incompatible firmware revision can cause the inverter to reject or mismanage the battery bank. This is not a RENOZ-specific concern; it applies to any third-party battery paired with any hybrid inverter.",
				"Require the installer to document: the exact GoodWe or Sungrow model number, firmware version at installation, the RENOZ module count and serial numbers, the BMS communication mode used, and the charge/discharge parameters programmed. That commissioning sheet is also what you need if either party has a warranty claim later.",
				"Compatibility declarations are on /resources. If your installer cannot confirm the pair against a current declaration before ordering, pause. A battery returned after installation because the inverter rejects it is a cost and disruption that no rebate offsets.",
			],
		},
		{
			heading: "When to choose a different inverter or architecture",
			body: [
				"Choose Victron or Selectronic if: the site is off-grid or diesel-hybrid, motor loads are heavy and inductive, or generator assist with controlled charging is central to the design. RENOZ LV modules pair with all of those inverter platforms — the guide exists separately for each.",
				"Choose an all-in-one (Powerwall, Sigenergy, or similar) if: the buyer wants a single-brand experience with integrated inverter and battery, is not constrained by an existing hybrid, and the all-in-one's capacity steps match the site. Compare SSL status, CEC listing, and support paths rather than brand sentiment.",
				"Stay with GoodWe or Sungrow plus RENOZ if: the inverter is already installed and healthy, the battery must grow independently of the inverter brand ecosystem, and you want Perth OEM support on the storage side. That combination covers a large share of Perth new-build and retrofit inquiries in 2026.",
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
			label: "WA Residential Battery Scheme (wa.gov.au)",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "WA scheme — Plenti administration",
			href: "https://www.plenti.com.au/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "DCCEEW — off-grid CHBP eligibility",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "RENOZ compatibility declarations",
			href: "/resources",
		},
		{
			label: "Residential LV products",
			href: "/products/residential",
		},
		{
			label: "Contact RENOZ",
			href: "/contact",
		},
	],
	faqHeading: "Questions before a rooftop hybrid retrofit",
	faqs: [
		{
			question: "Is RENOZ compatible with my GoodWe hybrid inverter?",
			answer:
				"Compatibility is model and firmware specific. Use the RENOZ inverter compatibility declaration on /resources and provide your exact GoodWe model number to confirm. Do not assume a generic 'lithium battery' profile will work correctly — BMS communication must be confirmed and documented at commissioning.",
		},
		{
			question:
				"Is my Sungrow inverter on the Synergy Supported Solutions List?",
			answer:
				"The SSL is a live document — check the current Synergy list for your network address. The pair (inverter model plus battery solution) must appear together; being a recognised brand is not sufficient. A Plenti-accredited installer or RENOZ can help confirm whether the proposed package qualifies before you sign.",
		},
		{
			question: "How much can I save with rebates on a 10 kWh Perth battery?",
			answer:
				"Stacking federal and WA state rebates on a 10 kWh grid-tied system, Synergy customers can reduce costs by roughly $5,000; Horizon Power customers by roughly $7,500. The federal Cheaper Home Batteries Program currently delivers approximately $252–$272 per usable kWh; the WA scheme adds $130/kWh capped at $1,300 (Synergy) or $380/kWh capped at $3,800 (Horizon). Verify current amounts on wa.gov.au and energy.gov.au before budgeting.",
		},
		{
			question: "Does an off-grid system qualify for WA battery rebates?",
			answer:
				"No — the WA Residential Battery Scheme requires grid connection and mandatory VPP enrolment (minimum two years). Off-grid systems are ineligible for the WA scheme. They can still access the federal Cheaper Home Batteries Program, which does not require grid connection or VPP participation, confirmed by DCCEEW.",
		},
		{
			question: "What is the Synergy VPP Battery Rewards scheme?",
			answer:
				"Battery Rewards is Synergy's VPP programme, mandatory for WA scheme participants. Synergy can dispatch your battery during high-demand events, capped at roughly 30 events per year. The payment rate is 70 cents per kWh during activation. Enrolment is a minimum two-year commitment — factor this into your decision if you want full control over battery dispatch.",
		},
		{
			question: "How many RENOZ modules do I need for a typical Perth home?",
			answer:
				"Most Perth grid-tied homes land in a two-to-four module range (10.24–20.48 kWh), depending on evening consumption and backup ambition. Use measured load data rather than a generic rule. The 5.12 kWh module ladder lets you start appropriately and add capacity later, within the inverter and BMS limits of your chosen GoodWe or Sungrow model.",
		},
		{
			question:
				"Can I add RENOZ modules to an existing GoodWe/Sungrow system later?",
			answer:
				"Often yes — that is a key reason to choose a modular OEM battery over a fixed-size pack. Adding modules requires the inverter to support the increased bank size, correct BMS settings, and a reassessment of cable and protection ratings. Plan the expansion path at initial installation so cabling and switchboard space are ready.",
		},
		{
			question: "Will my GoodWe or Sungrow hybrid back up the whole house?",
			answer:
				"Most GoodWe and Sungrow hybrids back up circuits connected to their essential-loads output — not automatically the whole house. Check the model's backup port rating, switchover time, and which circuits your installer will wire to it. Whole-home backup typically requires additional design and switchboard work; confirm scope with your installer before assuming full coverage.",
		},
	],
	closing: {
		heading: "Match the inverter you have, then grow kWh",
		body: "Write the BMS path and model strings into the commissioning sheet, then talk to RENOZ about module count for evening self-consumption and backup.",
	},
	cta: {
		primaryLabel: "Confirm a GoodWe / Sungrow + RENOZ package",
		primaryTo: "/contact",
		secondaryLabel: "Browse technical resources",
		secondaryTo: "/resources",
	},
	relatedProductPaths: ["/products/residential"],
};
