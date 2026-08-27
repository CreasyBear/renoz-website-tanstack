import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "wa-battery-rebates-cec",
	title: "WA Battery Rebate 2026: CHBP + WA Scheme Explained",
	description:
		"How to stack the federal Cheaper Home Batteries Program and WA Residential Battery Scheme for up to $7,500 off a 10 kWh battery in Perth and regional WA.",
	primaryKeyword: "battery rebate western australia",
	h1: "How battery rebates work in Western Australia",
	updated: "2026-07-23",
	claimsPending: false,
	intro: [
		"In 2026, WA homeowners can stack two rebates on a grid-connected battery. The federal Cheaper Home Batteries Program (CHBP) provides roughly $2,500–$2,700 off a 10 kWh battery via upfront STCs — no application required. The WA Residential Battery Scheme adds $1,300 (Synergy area) or $3,800 (Horizon Power area) on top, for a combined saving of around $3,800–$4,000 (Synergy) or up to $6,500–$7,500 (Horizon) on a 10 kWh system. Off-grid systems qualify for the federal CHBP but not the WA scheme, which requires VPP enrolment on the grid.",
		"If you are comparing quotes for a battery rebate western australia pathway, treat every dollar figure and “eligible” claim as date-stamped. Verify live listings and amounts on government sources before you sign.",
		"This page is the stacking checklist homeowners and installers can send with a quote — so missing CEC strings, SSL pairs, or vendor accreditation show up before money moves.",
	],
	expertise: {
		heading: "Why a Perth OEM publishes rebate checklists",
		body: [
			"RENOZ engineers modular low-voltage storage in Perth and works with installers who quote against live CEC registers and retailer Supported Solutions Lists — not brochure eligibility.",
			"Rebate confusion kills deals. Our job is keeping model strings, inverter pairs, and vendor pathways honest so a quote survives due diligence. We will not invent eligibility for a RENOZ package on this page.",
		],
	},
	decisionHeading: "Federal CHBP vs WA scheme pathways",
	decisionRowLabels: [
		"Who administers",
		"Grid connection required?",
		"Rebate on 10 kWh (indicative)",
		"Battery requirement",
		"Application process",
		"VPP enrolment",
		"Expires",
	],
	decisionColumns: [
		{
			name: "Federal CHBP",
			cells: [
				"Clean Energy Regulator / installer",
				"No — off-grid eligible",
				"~$2,500–$2,700 via STCs",
				"CEC-approved battery; SAA-accredited installer",
				"No application — discount at point of sale",
				"Not required",
				"31 Dec 2030 (STC value steps down from Jan 2027)",
			],
		},
		{
			name: "WA Scheme — Synergy",
			highlight: true,
			cells: [
				"Energy Policy WA / Plenti",
				"Yes — grid-connected only",
				"$1,300 (capped at $130/kWh × 10 kWh)",
				"Battery + inverter on Synergy Supported Solutions List",
				"Accredited Plenti vendor applies on your behalf",
				"Mandatory — Synergy Battery Rewards, min 2 years",
				"~2027 (100,000 rebates cap; rates decrease annually)",
			],
		},
		{
			name: "WA Scheme — Horizon",
			cells: [
				"Energy Policy WA / Plenti",
				"Yes — grid-connected only",
				"$3,800 (capped at $380/kWh × 10 kWh)",
				"Battery + inverter on Horizon Supported Solutions List",
				"Accredited Plenti vendor applies on your behalf",
				"Mandatory — Horizon Community Wave, min 2 years",
				"~2027 (100,000 rebates cap; rates decrease annually)",
			],
		},
	],
	sections: [
		{
			heading: "What the federal Cheaper Home Batteries Program actually is",
			body: [
				"The CHBP is a federal rebate delivered as Small-scale Technology Certificates (STCs) at the point of sale — you do not lodge an application and wait for a cheque. The discount is built into the installer quote. As of 2026, the program generates roughly $252–$272 per usable kWh of battery capacity, which works out to approximately $2,500–$2,700 off a 10 kWh system. Because the value is passed through by the installer, always ask for the quote to show the STC discount as a line item.",
				"The program runs to 31 December 2030 and was expanded from $2.3 billion to $7.2 billion in December 2025. Battery size eligibility spans 5–100 kWh usable capacity, with the full STC rate applying to the first 14 kWh. From 1 May 2026, a tiered structure applies: 100% STC factor for 0–14 kWh, 60% for 14–28 kWh, and 15% for 28–50 kWh. The STC value also steps down every six months from 1 January 2027, so installing earlier locks in a larger discount.",
				"Eligibility requires a CEC-approved battery model and an SAA-accredited installer. The program is not means-tested. There is no income cap and no requirement to connect to a virtual power plant — which is precisely why off-grid systems are eligible when grid-tied schemes are not.",
			],
		},
		{
			heading: "WA Residential Battery Scheme: Synergy vs Horizon customers",
			body: [
				"The WA Residential Battery Scheme (WARBS) is administered alongside Plenti and pays $130 per usable kWh for Synergy customers (capped at $1,300 for a 10 kWh battery) and $380 per usable kWh for Horizon Power customers (capped at $3,800). The difference reflects Horizon's regional supply cost premium and the higher value of grid-connected storage in areas with constrained infrastructure.",
				"Unlike the federal CHBP, you do not apply directly. An accredited Plenti vendor submits the rebate claim on your behalf after you accept a quote for an eligible system. This means the vendor and the products they quote must sit on the relevant approved lists — a battery that is CEC-approved nationally may still be ineligible for the WA scheme if the full solution (battery model, inverter, and installation pathway) does not appear on Synergy's or Horizon's Supported Solutions List.",
				"The scheme also includes an optional no-interest Plenti loan: $2,001–$10,000, available over 3–10 year terms, with a household income threshold of under $210,000. Credit checks apply. The loan can cover the inverter and solar panels installed as part of the same job, not just the battery alone.",
			],
		},
		{
			heading: "Stacking the rebates: a 10 kWh worked example",
			body: [
				"For a Synergy customer in Perth installing a 10 kWh grid-connected battery in mid-2026, the combined saving looks like this: the federal CHBP delivers roughly $2,500–$2,700 off at the point of sale, and the WA scheme adds $1,300, bringing the total rebate to approximately $3,800–$4,000. Against a typical installed cost of $12,000–$16,000 for a 10–13 kWh grid-tied system in Perth, the net out-of-pocket sits around $8,000–$12,200 depending on the exact system size and quote.",
				"Horizon Power customers in regional WA do substantially better on the state side. The $3,800 Horizon rebate plus the federal ~$2,700 CHBP totals roughly $6,500–$7,500 off the same 10 kWh example — a meaningful reduction for regional homes where grid supply costs are already elevated. Typical installed costs are broadly similar to Perth metro or may run higher depending on site access and travel.",
				"These figures are indicative and date-stamped to July 2026. STC values move with the deeming period and policy settings; WA scheme rates decrease annually through to 2030. Before accepting a quote, ask the installer to itemise the STC discount and confirm the current WA rebate amount with the Plenti vendor portal.",
			],
		},
		{
			heading: "The mandatory VPP requirement — and why off-grid misses out",
			body: [
				"The WA Residential Battery Scheme requires every participating battery to enrol in a virtual power plant (VPP) for a minimum of two years. Synergy customers join the Synergy Battery Rewards VPP; Horizon customers join the Horizon Community Wave program. During VPP activation events (up to 30 per year on the Synergy network), the operator may draw on your battery. In return, Synergy Battery Rewards pays 70 cents per kWh dispatched during events.",
				"This VPP requirement is why fully off-grid systems cannot access the WA scheme. A property with no grid connection has no metered export path and cannot participate in a grid VPP, so it fails the fundamental eligibility condition regardless of battery quality or installer credentials. Off-grid buyers still qualify for the federal CHBP — that program has no VPP requirement and was explicitly confirmed by DCCEEW as eligible for off-grid systems. The practical outcome is that off-grid buyers receive the ~30% federal discount but forgo the additional WA top-up.",
			],
		},
		{
			heading: "May 2026 Synergy technical rule changes",
			body: [
				"From 1 May 2026, new batteries connecting to the South West Interconnected System (SWIS) under Synergy must comply with AS/NZS 4777.2:2020 and support CSIP-AUS communications, or accept a 1.5 kW export cap. The aggregate inverter capacity cap for most residential connections was also raised to 30 kVA. Systems installed before 1 May 2026 are grandfathered under the previous settings.",
				"For buyers, this means inverter and battery combinations quoted after May 2026 need to meet the updated standard or have an export cap applied. Ask your installer which pathway the quote uses and confirm that the solution on the Synergy Supported Solutions List reflects the post-May 2026 requirements. A battery that was on the list before these changes may have had its entry updated or may require a firmware revision.",
				"The Synergy feed-in context is worth understanding as well. The Distributed Energy Buyback Scheme (DEBS) currently pays 2.25 cents per kWh off-peak and 10 cents per kWh in the 3–9 pm peak window. Retail power in Perth runs roughly 28–35 cents per kWh, so the core value of a battery on Synergy remains self-consumption and backup rather than export arbitrage — the VPP activation rate of 70 cents per kWh is the exception, not the rule.",
			],
		},
		{
			heading: "The three-layer eligibility checklist",
			body: [
				"Rebate-eligible battery installations in WA need to clear three distinct layers before any scheme payment can be made. Layer one is the CEC approved batteries list: the exact brand and model string on your quote must appear on the Clean Energy Council register. This is a national product listing covering safety and quality — it is necessary but not sufficient for the WA scheme.",
				"Layer two is the Synergy or Horizon Supported Solutions List (SSL): the full solution — battery, inverter, and inverter settings — must appear on the list relevant to your network area. CEC approval does not automatically place a product on the SSL, and the SSL can change. Check the live list for the exact system on your quote, not just the battery brand name.",
				"Layer three is the Plenti vendor pathway: the installer or vendor submitting the rebate must be on the Plenti accredited vendor directory. An excellent electrician who is not a Plenti vendor cannot process the WA scheme rebate, even if the products are fully eligible. Confirm all three layers are in place before signing a contract.",
			],
		},
		{
			heading: "How to check the CEC register for a specific model",
			body: [
				"The CEC approved batteries list is publicly searchable at the Clean Energy Council website. When checking, use the exact model string from the product datasheet or the quote — not the brand name or a shortened marketing label. Manufacturers sometimes list multiple firmware or capacity variants as separate entries, and only the exact listed string qualifies. If the string on your quote does not appear verbatim, ask the supplier to clarify before proceeding.",
				"The Synergy Supported Solutions List is published on the Synergy website and updated as products are added or removed. Similarly, Horizon Power maintains its own list for regional WA customers. Both lists are the primary source of truth for grid-tied scheme eligibility; the RENOZ resources page links to the relevant declarations and compatibility documentation for products RENOZ supplies.",
			],
		},
		{
			heading: "Off-grid WA: federal CHBP is your rebate pathway",
			body: [
				"For rural and remote WA properties without a grid connection, the Cheaper Home Batteries Program is the only rebate available — but it is a meaningful one. The ~30% upfront discount via STCs applies to off-grid batteries in the same way as grid-tied systems: the STC value is calculated from usable kWh and the installer passes it through at point of sale. No VPP, no network connection, and no Plenti vendor are required.",
				"Off-grid installed costs in WA reflect the full system requirement rather than just a battery add-on: a standard three-bedroom rural home typically involves $40,000–$65,000 all-in for a solar and battery system, with the battery representing 40–50% of that total. The federal rebate reduces the battery portion meaningfully, but the overall investment is still substantially larger than a metro grid-tied installation. Compare it against the alternative: a Western Power line extension that runs $20,000–$50,000 per kilometre and still leaves the property reliant on grid supply quality.",
			],
		},
		{
			heading: "RENOZ and rebate-ready systems",
			body: [
				"RENOZ is a Perth-based battery OEM supplying modular LiFePO4 storage (LV-5KWH100AH, 5.12 kWh modules) that pairs with Victron, Selectronic, Deye, GoodWe, and Sungrow inverters. CEC listing status and any Synergy or Horizon SSL pathway for specific RENOZ-plus-inverter combinations should be confirmed against the live official lists before any claim of rebate eligibility is made for a particular quote.",
				"For off-grid applications — where RENOZ products are well suited given the inverter pairing options and modular capacity — the federal CHBP pathway applies without VPP or grid requirements. Ask RENOZ or a Plenti-accredited partner to confirm the exact CEC model strings and any SSL pairs relevant to the proposed system before signing. The resources page holds current datasheets and compatibility declarations.",
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
			label: "CHBP — DCCEEW program detail",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
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
			label: "Synergy — battery scheme and VPP detail",
			href: "https://www.synergy.net.au",
			external: true,
		},
		{
			label: "RENOZ resources and compatibility declarations",
			href: "/resources",
		},
		{
			label: "Residential battery products",
			href: "/products/residential",
		},
		{
			label: "Tesla Powerwall alternative comparison",
			href: "/guides/renoz-vs-powerwall-sigenergy",
		},
		{
			label: "Deye hybrid retrofit pairing",
			href: "/guides/renoz-with-deye",
		},
	],
	faqHeading: "Common questions about WA battery rebates",
	faqs: [
		{
			question: "How much is the WA battery rebate in 2026?",
			answer:
				"Synergy customers receive $130 per usable kWh, capped at $1,300 for a 10 kWh battery. Horizon Power customers receive $380 per usable kWh, capped at $3,800. Stack that with the federal CHBP (~$2,500–$2,700 on 10 kWh) and the total saving is roughly $3,800–$4,000 in Synergy areas or $6,500–$7,500 in Horizon areas. Figures are current as at July 2026; rates decrease annually through 2030.",
		},
		{
			question: "Do off-grid batteries qualify for the WA battery rebate?",
			answer:
				"No — the WA Residential Battery Scheme requires grid connection and mandatory VPP enrolment. Fully off-grid systems cannot participate. However, off-grid systems do qualify for the federal Cheaper Home Batteries Program, which provides roughly $2,500–$2,700 off a 10 kWh battery via STCs at point of sale. DCCEEW has confirmed off-grid eligibility for the federal scheme.",
		},
		{
			question: "Do I apply for the WA battery rebate myself?",
			answer:
				"No. An accredited Plenti vendor applies on your behalf after you accept a quote for an eligible system. Your job is to confirm that the vendor is on the Plenti directory, the products are on the Synergy or Horizon Supported Solutions List, and the battery model appears on the CEC approved batteries register. Do not sign a contract based on a rebate promise until you have verified all three layers.",
		},
		{
			question: "What is the Plenti loan and who qualifies?",
			answer:
				"The optional no-interest Plenti loan covers $2,001–$10,000 over 3–10 year terms and can include the inverter and solar panels installed at the same time as the battery. Household income must be under $210,000 and credit checks apply. It is available through the WA Residential Battery Scheme accredited vendor process — not a separate application.",
		},
		{
			question:
				"Is a CEC-approved battery automatically eligible for the WA scheme?",
			answer:
				"No. CEC approval is necessary but not sufficient. The full solution — battery model plus inverter — must also appear on Synergy's or Horizon's Supported Solutions List for your network area, and installation must go through an accredited Plenti vendor. Always check the live Supported Solutions List for the exact model string on your quote, not just the brand.",
		},
		{
			question: "What size battery do I need to maximise the WA rebate?",
			answer:
				"The WA rebate is capped at 10 kWh usable capacity ($1,300 Synergy / $3,800 Horizon). The federal CHBP applies the full STC rate to the first 14 kWh, dropping to 60% for 14–28 kWh. Installing 10 kWh captures the full WA cap and most of the federal value. Going larger still attracts some federal benefit but no additional WA rebate.",
		},
		{
			question: "When does the federal rebate reduce?",
			answer:
				"The CHBP STC value steps down every six months from 1 January 2027. The program itself runs to 31 December 2030. Batteries installed in 2026 lock in the highest available discount. If your installer quotes a dollar figure more than a few months in the future, ask them to confirm which deeming period they are using.",
		},
		{
			question: "What changed with Synergy rules in May 2026?",
			answer:
				"From 1 May 2026, new SWIS-connected batteries must comply with AS/NZS 4777.2:2020 and support CSIP-AUS communications, or accept a 1.5 kW export cap. The aggregate inverter cap was raised to 30 kVA. Pre-May 2026 installations are grandfathered. Ask your installer which compliance pathway the quoted system uses.",
		},
	],
	closing: {
		heading: "Before you sign",
		body: "Send this checklist with every quote. If a vendor cannot show live CEC and SSL evidence for the exact models on the paperwork, pause — then talk to RENOZ or a Plenti-accredited partner about a package you can actually verify.",
	},
	cta: {
		primaryLabel: "Check rebate eligibility for a RENOZ system",
		primaryTo: "/contact",
		secondaryLabel: "Browse residential battery products",
		secondaryTo: "/products/residential",
	},
	relatedProductPaths: ["/products/residential", "/products/rural"],
};
