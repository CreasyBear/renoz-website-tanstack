import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "commercial-bess-50-200kwh-wa",
	title: "Commercial Battery Storage WA 2026: 50–200 kWh Sizing & Pricing",
	description:
		"Mid-scale commercial BESS in Perth and WA: indicative C&I pricing, peak shaving, demand charge reduction, 3-phase backup, and modular expansion to ~245 kWh.",
	h1: "Commercial battery storage WA 2026: sizing and pricing for 50–200 kWh business systems",
	updated: "2026-07-23",
	claimsPending: true,
	showCapacityLadder: true,
	directAnswer:
		"Mid-scale commercial and industrial battery storage in WA — typically 50 to 200 kWh — is used to reduce peak demand charges, shift solar generation into evening tariff windows, and provide 3-phase backup for critical loads. Indicative supply pricing runs roughly $280–$580 per kWh depending on capacity, chemistry, and integration complexity; installed costs are higher once switchgear, commissioning, and network compliance are included. RENOZ LV-5KWH100AH modules stack to approximately 245 kWh across six parallel towers, giving Perth businesses a locally supported, scalable platform without importing a proprietary cabinet system.",
	decisionRowLabels: [
		"Primary commercial driver",
		"Typical system size",
		"Indicative supply price range",
		"3-phase support",
		"Modular expansion path",
		"Key proof to bring to design",
	],
	decisionColumns: [
		{
			name: "Peak demand reduction",
			cells: [
				"Demand charge on maximum kVA/kW in billing period",
				"50–100 kWh depending on peak duration and magnitude",
				"~$280–$580/kWh supply (indicative C&I range)",
				"Yes — requires compatible 3-phase inverter or parallel inverter stack",
				"Add modules or towers within BMS limits as loads grow",
				"12-month interval meter data showing demand peaks by time of day",
			],
		},
		{
			name: "Solar self-consumption + tariff shift",
			highlight: true,
			cells: [
				"Excess midday solar otherwise exported at low feed-in rate",
				"50–150 kWh matched to overnight and evening load profile",
				"~$280–$580/kWh supply (indicative C&I range)",
				"Yes — matched to inverter platform and site switchgear",
				"5.12 kWh modules × up to 8 × up to 6 towers ≈ 245 kWh max",
				"Solar generation logs, half-hourly consumption, tariff schedule",
			],
		},
		{
			name: "Critical load backup",
			cells: [
				"Unplanned outages affecting production, cold chain, or data",
				"100–200 kWh for multi-hour backup of critical loads",
				"~$280–$580/kWh supply (indicative C&I range)",
				"Yes — essential for commercial UPS-style or islanding use cases",
				"Plan final capacity at design stage; inverter headroom is the binding limit",
				"Critical load list in kW, required autonomy hours, outage history",
			],
		},
	],
	sections: [
		{
			heading: "Why mid-scale commercial storage is gaining traction in WA",
			body: [
				"Western Australian commercial electricity tariffs — particularly demand charges levied on the highest 15- or 30-minute kW or kVA recorded in a billing period — create a structure where a single peak load event can add hundreds or thousands of dollars to a monthly bill. A battery system that clips those peaks even modestly can deliver measurable bill reductions without requiring a full behind-the-meter solar array first.",
				"The economics have shifted as battery supply pricing has come down. The C&I supply range of roughly $280–$580 per kWh is wide because it reflects genuinely different products: rack-mounted cabinet systems at the lower end of that range typically carry proprietary BMS and limited serviceability; open-architecture modular platforms with local support are positioned differently. Installed cost including switchgear, protection relays, commissioning, and metering adds further margin above supply price — get itemised quotes rather than per-kWh rules of thumb.",
				"Solar penetration on WA commercial rooftops has created a secondary driver: midday generation that exceeds building load is exported at low feed-in rates. A 50–100 kWh BESS can absorb that excess and shift it into the 3–9 pm window where Synergy's DEBS peak rate of 10 cents per kWh applies, or simply reduce evening grid draw to cut consumption charges.",
			],
		},
		{
			heading: "Indicative C&I pricing: what $280–$580 per kWh actually covers",
			body: [
				"The $280–$580 per kWh range cited in commercial energy market analysis reflects battery supply — cells, BMS, enclosure, and basic protection — before installation. At the lower end of that range you are typically looking at Chinese-manufactured LFP cabinet systems with limited local support, sold through distribution channels. At the upper end are engineered platforms with configurable BMS, proven integration with commercial inverter brands, and local technical support. RENOZ modules sit within this range as a Perth-manufactured product with O'Connor-based warranty service.",
				"Installation sits on top of supply cost and varies materially with site conditions: existing switchgear condition, network protection requirements, metering upgrades, civil works for outdoor enclosures, and commissioning and testing against the inverter platform. Complex sites — multi-tenant buildings, sites requiring AS/NZS 4777.2:2020 compliance with CSIP-AUS, or sites needing a metering coordinator change — sit at the higher end.",
				"These figures are indicative and based on 2025–26 market conditions. Prices have been falling approximately 12% year-on-year into 2026 according to industry cost data. Do not use this page as a substitute for a scoped quote — installed totals for the same nameplate capacity can vary widely with scope.",
			],
		},
		{
			heading:
				"Peak shaving and demand charge reduction: how it works in practice",
			body: [
				"Demand charges on WA commercial tariffs are triggered by the highest measured interval — often 15 or 30 minutes — within a billing period. If your manufacturing line, HVAC start-up sequence, or EV charging cluster creates a 200 kW peak for 20 minutes on one afternoon in the month, you pay the demand rate on that 200 kW for the entire billing period. A battery system configured to detect a rising demand signal and discharge immediately can cap that peak at a lower threshold.",
				"Effective demand management requires accurate measurement and fast response. The battery control system needs half-hourly or sub-interval meter data — either from the site metering or from a dedicated demand controller — and must discharge ahead of the peak, not reactively after the interval has already been measured. Systems that rely on a simple time-of-use schedule without demand sensing will miss short-duration peaks entirely.",
				"Before sizing a BESS for demand reduction, pull 12 months of interval meter data and identify when your top 5–10 demand peaks occur, how long they last, and whether they are predictable (shift start, HVAC pre-cooling) or random (process anomalies). That analysis determines the kWh you need to hold in reserve for peak shaving — and it may be less than you expect, or it may rule out battery demand management as the primary use case.",
			],
		},
		{
			heading: "Modular scale: 5.12 kWh blocks to ~245 kWh",
			body: [
				"RENOZ LV-5KWH100AH modules are 5.12 kWh each. A single tower accommodates up to 8 modules, giving approximately 40.96 kWh gross per tower. Up to 6 towers can be connected in parallel — a maximum configuration of 48 modules totalling approximately 245.76 kWh gross before derating for depth of discharge and ambient temperature effects. That ceiling comfortably covers most mid-scale commercial applications in the 50–200 kWh range.",
				"The modular architecture means a business can start with a smaller capacity — say 2 towers at roughly 82 kWh — and expand incrementally as the commercial case is proven or as new loads are added. Expansion must be engineered: adding modules or towers changes the BMS configuration, may require re-commissioning of protection settings, and must remain within the inverter platform's rated input capacity. Plan the final intended capacity during initial design so the inverter and switchgear are not undersized for where you want to end up.",
				"For commercial applications above 100 kWh, the inverter platform is often the limiting design decision rather than the battery architecture. Large commercial sites require 3-phase balanced output, transfer switch or islanding capability, and sometimes synchronisation with an embedded network or generator. Engage a qualified system designer who has commissioned commercial-scale BESS projects, not a residential installer scaling up.",
			],
		},
		{
			heading: "3-phase commercial sites: what changes compared to residential",
			body: [
				"The majority of commercial premises in Perth operate on 3-phase supply. A BESS for a 3-phase site must either use a 3-phase inverter natively, or a stack of single-phase inverters balanced across phases with coordinated control. Neither approach is inherently superior — the choice depends on load balance, available protection equipment, and the inverter platform already on-site.",
				"3-phase BESS installations require more complex protection design than single-phase residential systems. Anti-islanding, neutral earthing, and fault-level coordination need to be reviewed against the site's existing switchboard and the network operator's requirements. For sites on Synergy's SWIS network, the AS/NZS 4777.2:2020 standard with CSIP-AUS (or the 1.5 kW export cap alternative) applies to new battery installations from 1 May 2026.",
				"If the primary use case is backup or islanding — keeping production lines or cold chain running through a grid outage — the design must address load transfer time (is an uninterruptible transfer required?), phase balance during backup mode, and how the system reconnects to the grid safely after an outage. These are engineering questions with real consequences for equipment and process continuity, not marketing checkbox items.",
			],
		},
		{
			heading: "Synergy network rules from 1 May 2026",
			body: [
				"Commercial BESS installations on the Synergy SWIS network are subject to updated technical requirements from 1 May 2026. New batteries must comply with AS/NZS 4777.2:2020 plus CSIP-AUS communication standards, or accept a 1.5 kW export cap. The aggregate inverter cap on a connection has been raised to 30 kVA. Installations completed before 1 May 2026 are grandfathered under previous rules.",
				"CSIP-AUS requires the battery system to respond to grid signals — including curtailment requests from the network operator — which has implications for demand management strategies that depend on uninterrupted discharge authority. Commercial system designs should account for this in their control logic, particularly if the BESS is being sized to guarantee a demand cap.",
				"Synergy's DEBS feed-in tariff pays 2.25 cents per kWh off-peak and 10 cents per kWh during the peak window of 3–9 pm. For commercial sites that export to the grid, the 10 cents peak rate creates an incentive to discharge into the grid during that window rather than solely self-consume — but commercial tariff structures vary, and the arbitrage value depends on your specific tariff schedule and export entitlement. Confirm with your energy retailer before building a financial model on grid export revenue.",
			],
		},
		{
			heading: "Does the federal battery rebate apply to commercial BESS?",
			body: [
				"The Cheaper Home Batteries Program is a residential and small business scheme. Its eligibility criteria and the battery size cap of 5–100 kWh usable are oriented toward household and small commercial applications. For mid-scale commercial systems in the 50–200 kWh range, federal CHBP support is available on the first eligible kWh of capacity, but the programme structure, CEC battery approval list, and installer accreditation requirements must be verified against the specific configuration.",
				"The WA Residential Battery Scheme (WARBS) is for residential customers only and does not apply to commercial premises. Commercial businesses should assess eligibility for the federal CHBP on a system-by-system basis through an accredited installer rather than assuming either residential rebate applies.",
				"Some commercial operators in WA access other state or federal incentives through the Safeguard Mechanism, the Capacity Investment Scheme for larger projects, or Australian Renewable Energy Agency grant rounds — none of which are within scope of this guide. For projects above $500,000 in CapEx, engage a commercial energy consultant who works with C&I incentive programmes, not a residential solar retailer.",
			],
		},
		{
			heading: "Preparing for a commercial system design conversation",
			body: [
				"The most useful document you can bring to a commercial BESS design conversation is 12 months of half-hourly interval meter data from your network service provider. That data reveals actual demand peaks by time of day and season, the shape of your solar export curve if you have an existing array, and how load varies through the week. Without it, any sizing recommendation is guesswork dressed as engineering.",
				"Also prepare: your current electricity tariff schedule (demand rates, consumption rates, peak windows, network charges), a list of critical loads and their kW ratings, your target outcome (demand cost reduction, solar self-consumption, backup autonomy, or a combination), and any known expansion plans for the next three years. A credible commercial system designer will build a financial model using your actual tariff and meter data — not a generic rule-of-thumb payback period.",
				"RENOZ offers a capability statement for procurement processes and tendered commercial projects. If you are assessing RENOZ BESS modules for a commercial installation and need technical specifications, warranty terms, or a supplier capability document, request one through the contact page.",
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
			label: "Synergy DEBS tariff and Battery Rewards",
			href: "https://www.synergy.net.au",
			external: true,
		},
		{
			label: "Commercial products — RENOZ",
			href: "/products/commercial",
		},
		{
			label: "RENOZ capability statement",
			href: "/partners/capability-statement",
		},
		{
			label: "Technical resources",
			href: "/resources",
		},
	],
	faqs: [
		{
			question: "What does a 100 kWh commercial BESS cost installed in Perth?",
			answer:
				"Indicative supply pricing for commercial LFP battery systems runs roughly $280–$580 per kWh depending on the platform and integration. For a 100 kWh system, supply alone is broadly $28,000–$58,000; installed cost adds switchgear, metering, commissioning, and site works on top, and varies widely with site complexity. These are indicative 2025–26 ranges — actual costs depend on site complexity, tariff class, inverter selection, and network compliance requirements. Get itemised quotes from accredited commercial installers.",
		},
		{
			question: "How does peak demand charge reduction work with a BESS?",
			answer:
				"Demand charges are set by the highest kW or kVA measured in a billing interval — often 15 or 30 minutes. A BESS configured with a demand controller discharges when site demand approaches a target threshold, clipping the peak and reducing the demand charge for the entire billing period. The battery must hold sufficient charge in reserve at peak times, which means the control strategy must account for predictable peaks. Pull 12 months of half-hourly interval meter data before sizing.",
		},
		{
			question: "How large can a RENOZ commercial BESS get?",
			answer:
				"RENOZ LV-5KWH100AH modules are 5.12 kWh each. Up to 8 modules per tower and up to 6 towers in parallel gives a maximum of approximately 245 kWh gross capacity. Usable capacity is lower after derating for depth of discharge and temperature. For applications requiring more than 245 kWh, a multi-string or segmented design with additional inverter blocks is required — discuss with a commercial system designer.",
		},
		{
			question:
				"Does the federal CHBP rebate apply to commercial battery storage?",
			answer:
				"The Cheaper Home Batteries Program is primarily a residential and small business programme. Eligibility for commercial systems depends on the specific configuration, CEC battery approval, and accredited installer. The WA Residential Battery Scheme (WARBS) does not apply to commercial premises. Commercial operators considering larger projects should also assess Capacity Investment Scheme or ARENA funding pathways, which are separate programmes with different eligibility criteria.",
		},
		{
			question:
				"What are the Synergy network rules for commercial BESS from May 2026?",
			answer:
				"From 1 May 2026, new battery systems on the Synergy SWIS network must comply with AS/NZS 4777.2:2020 plus CSIP-AUS communication standards, or accept a 1.5 kW export cap. The aggregate inverter cap per connection has been raised to 30 kVA. Installations completed before 1 May 2026 are grandfathered. CSIP-AUS requires battery systems to respond to network curtailment signals, which affects demand management control strategies.",
		},
		{
			question: "Can we add more battery capacity later as the business grows?",
			answer:
				"Yes, within engineering limits. RENOZ LV modules allow capacity to be added by installing additional modules per tower (up to 8) or paralleling additional towers (up to 6 total). Expansion requires re-commissioning within the inverter and BMS limits of the original design. The best approach is to plan the target final capacity at initial design time so the inverter, switchgear, and protection equipment are sized for the end state, not just the first stage.",
		},
		{
			question: "What inverter platforms work with RENOZ commercial BESS?",
			answer:
				"RENOZ LV modules are compatible with Victron, Selectronic, Deye, GoodWe, and Sungrow inverter platforms. For mid-scale commercial 3-phase applications, Victron Quattro and Selectronic SP PRO-class systems are well suited to demanding load profiles — motor loads, UPS-style transfer, and generator integration. Deye and GoodWe/Sungrow hybrids cover solar self-consumption and tariff shift applications at lower integration complexity. Inverter selection must be matched to the specific load profile and site requirements.",
		},
		{
			question: "Is a RENOZ commercial BESS suitable for 3-phase premises?",
			answer:
				"Yes. Commercial 3-phase configurations are supported through compatible inverter platforms. The BESS itself is inverter-agnostic; the system designer selects the inverter architecture — native 3-phase unit or balanced single-phase stack — based on site load balance, protection requirements, and network operator rules. 3-phase commercial installations require more detailed protection engineering than residential systems, including anti-islanding, neutral earthing, and fault-level coordination.",
		},
	],
	cta: {
		primaryLabel: "Request a commercial system design",
		primaryTo: "/products/commercial",
		secondaryLabel: "Download capability statement",
		secondaryTo: "/partners/capability-statement",
	},
	relatedProductPaths: ["/products/commercial"],
};
