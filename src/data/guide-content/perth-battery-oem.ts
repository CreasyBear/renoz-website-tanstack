import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "perth-battery-oem",
	title: "LiFePO4 Battery Perth OEM: What Local Actually Means (2026)",
	description:
		"What makes RENOZ a LiFePO4 battery OEM in Perth vs an importer or installer — WA engineering, O'Connor support, modular design, and rebate pathways.",
	h1: "LiFePO4 battery manufacturer Perth: OEM vs importer vs installer",
	updated: "2026-07-23",
	claimsPending: false,
	eyebrow: "OEM guide · Perth WA · LiFePO4",
	directAnswer:
		"RENOZ Energy is a Perth-based LiFePO4 battery OEM operating from O'Connor WA — designing, assembling, testing, and supporting modular low-voltage storage locally. Each LV-5KWH100AH module is 5.12 kWh; towers stack up to 8 modules (~41 kWh); up to 6 towers can run in parallel. Off-grid systems qualify for the federal Cheaper Home Batteries Program (~30% upfront discount via STCs), worth roughly $2,500–$2,700 off a 10 kWh battery. WA grid-connected systems can stack that with the WA Residential Battery Scheme (up to ~$5,000–$7,500 combined in Synergy and Horizon areas respectively).",
	decisionRowLabels: [
		"Primary role",
		"What they own",
		"Engineering location",
		"Support path",
		"Spare parts",
		"Typical buyer fit",
		"Claim boundary",
	],
	decisionColumns: [
		{
			name: "OEM (RENOZ)",
			highlight: true,
			cells: [
				"Designs and supplies the battery platform",
				"Product specs, warranty pathway, BMS documentation",
				"O'Connor, Perth WA",
				"Perth technical team via partner installers",
				"Module-level replacement from WA stock",
				"Modular capacity, inverter choice, rural and fringe sites",
				"State assembly, design, and support honestly; cell origin global",
			],
		},
		{
			name: "Importer / brand stack",
			cells: [
				"Sells a global brand into the Australian market",
				"AU distribution, brand ecosystem, some local warranty admin",
				"Offshore (Asia, US, Europe)",
				"National call centre or distributor network",
				"Whole-unit swap typical; module swap varies by brand",
				"Consumer one-box simplicity; brand familiarity",
				'"Australian" label needs boundary disclosure',
			],
		},
		{
			name: "Installer / reseller",
			cells: [
				"Designs and commissions the system at your site",
				"Installation quality, network paperwork, aftercare",
				"Your suburb or region",
				"Local electrician or solar company",
				"Sourced from OEM or importer; no independent stock",
				"Anyone needing a commissioned, grid-ready system",
				"Should not be marketed as the battery manufacturer",
			],
		},
	],
	sections: [
		{
			heading: "OEM, importer, or installer: why the distinction matters",
			body: [
				"An OEM — original equipment manufacturer — designs the product and owns the engineering decisions behind it. An importer selects a product made offshore, brands or relabels it, and distributes it locally. An installer designs and commissions systems at your property. All three roles are necessary; none is inferior by definition. The problem is when the roles blur in marketing: an installer claiming to manufacture, or an importer claiming local engineering without local engineering staff.",
				"RENOZ sits in the OEM column: product design, BMS configuration, assembly, and test happen in Perth. Partner electricians and solar contractors handle site commissioning. Rebate and network paperwork flows through accredited installers. Knowing who does what lets you hold the right party to account when something needs attention.",
				"For buyers in remote WA — Wheatbelt, Great Southern, Pilbara fringe — the OEM vs importer distinction has practical weight. If a module fails at a site two hours from Perth, you want an OEM that can ship a replacement module, not a model that requires a whole-unit swap through a global distributor queue.",
			],
		},
		{
			heading: "What local OEM engineering actually delivers in WA",
			body: [
				"Western Australia puts batteries through conditions that temperate-climate test labs underweight. Sustained summer ambient temperatures in the Perth metro regularly reach 38–42°C; rooftop plant rooms and enclosed battery bays add further thermal load. LiFePO4 chemistry has intrinsically better thermal stability than NMC or NCA, but derating for heat — reducing usable capacity and charge rate at high temperatures — is still an engineering decision that must be calibrated for WA, not for a European or East Coast reference climate.",
				"Dust is a second WA-specific variable. Red-soil stations, grain belt farms, and construction sites generate fine particulate that finds its way into enclosures not rated and sealed for the environment. An OEM that has designed for WA conditions specifies IP ratings and enclosure materials from first principles, not as an afterthought import note.",
				"Transport to remote sites compounds everything. A modular platform — where each 5.12 kWh unit ships independently and stacks at site — reduces the logistics difficulty of getting storage to a station 400 km from Perth compared with monolithic units requiring crane or specialist freight. Module-level replaceability means a fault three years into service does not require decommissioning the whole bank.",
			],
		},
		{
			heading: "LiFePO4 chemistry: why RENOZ chose it",
			body: [
				"LiFePO4 (lithium iron phosphate) trades peak energy density against safety, cycle life, and thermal stability. For stationary storage in Western Australia those trade-offs point clearly toward LiFePO4: a chemistry that does not produce oxygen during thermal runaway, withstands higher ambient temperatures without aggressive degradation, and delivers 3,000–6,000+ charge cycles at relevant depths of discharge.",
				"Energy density matters for electric vehicles where mass and volume are constrained. For a battery tower bolted to a wall in an O'Connor warehouse or a Merredin woolshed, the extra volume of LiFePO4 cells versus NMC is not a practical penalty. What matters is that the chemistry will still deliver usable capacity in year eight — in a Perth summer — without the fire-risk profile that has caused building code responses to NMC installations in some jurisdictions.",
				"RENOZ publishes LV-5KWH100AH modules built on LiFePO4 cell chemistry. The BMS manages cell balancing, temperature monitoring, and communication to the inverter. Chemistry choice and BMS design together determine whether the marketing claim of 10-year useful life translates to actual capacity at year ten — which is why datasheets and commissioning documentation matter more than brand names.",
			],
		},
		{
			heading: "Module-level replaceability vs sealed packs",
			body: [
				"Many imported all-in-one batteries are sealed units: when a cell group fails, the entire unit goes back to the distributor or is scrapped. For a residential buyer in the suburbs with a good installer network, that may be acceptable — warranty replacement via a national service centre works within a fortnight. For a pastoral property, a three-week turnaround on a whole-unit swap means three weeks without solar storage in summer.",
				"RENOZ's modular architecture addresses this directly. Each LV-5KWH100AH module is an independently replaceable unit. If one module in a tower fails, that module is swapped; the remaining modules continue operating. O'Connor holds stock close to the WA market, reducing lead times compared with dispatching replacement units from an eastern-states warehouse or overseas factory.",
				"Module-level replaceability also changes the economics of system expansion. You start with the kWh you need now, commission the system, and add modules to the same tower — or add a parallel tower — as load grows. This matters for farm expansions, EV charging additions, and workshop equipment upgrades where load growth is certain but timing is not.",
			],
		},
		{
			heading: "The RENOZ platform: capacity ladder and inverter pairing",
			body: [
				"The LV-5KWH100AH module is RENOZ's stackable building block: 5.12 kWh per module, up to 8 modules per tower (~40.96 kWh), and up to 6 towers in parallel for larger sites. That architectural ceiling — roughly 245 kWh before other design constraints — spans the distance from a suburban home with 10 kWh evening loads to a mid-scale commercial or farm system requiring multi-day autonomy.",
				"The low-voltage 48 V architecture means RENOZ pairs with the most common class of serious hybrid and off-grid inverter-chargers in Australia: Victron MultiPlus and Quattro for off-grid and diesel-assist, Selectronic SP PRO for Australian off-grid tradition, Deye and GoodWe/Sungrow class hybrids for grid-tied residential and rural hybrid installs. Battery modularity and inverter choice are independent — you choose the inverter appropriate to your load profile, phase, and generator situation, then size RENOZ kWh from measured consumption.",
				"Inverter compatibility is documented per model and firmware revision, not asserted generically. The RENOZ compatibility declaration on /resources is the authoritative reference. Confirm the exact inverter model on your quote against that document before signing.",
			],
		},
		{
			heading: "Spares and warranty service from O'Connor",
			body: [
				"RENOZ operates from Unit 4/8 Murphy Street, O'Connor WA — a Perth suburb with good freight links to regional WA. For buyers in the metro area, that is a local support address. For buyers in Bunbury, Albany, or Geraldton, it is a West Australian depot rather than a Sydney or Melbourne distribution centre that runs eastern-states courier timelines to the west.",
				"Warranty service for a Perth-based OEM means warranty claims stay in WA jurisdiction and logistics. A faulty module ships to O'Connor; a replacement module ships from O'Connor. Diagnosis happens by engineers who designed the product, not a call centre reading a flow chart built for a different market. Ask any battery vendor — local OEM or importer — for their written warranty claim pathway: who you call, who diagnoses, who ships, and what the maximum replacement timeline commitment is.",
			],
		},
		{
			heading: "Rebate eligibility: federal and WA state",
			body: [
				"The federal Cheaper Home Batteries Program (CHBP) delivers approximately 30% upfront discount via STCs at point of sale — no application required, not means-tested. The Department of Climate Change, Energy, the Environment and Water has confirmed off-grid systems are eligible. A 10 kWh battery attracts roughly $2,500–$2,700 in STC discount at current rates. The program runs to 31 December 2030, with funding expanded to $7.2 billion in December 2025; STC values step down every six months from January 2027, so earlier installation captures a larger discount.",
				"The WA Residential Battery Scheme (WARBS) adds a state rebate for grid-connected systems: $130 per usable kWh capped at $1,300 for Synergy customers, and $380 per kWh capped at $3,800 for Horizon Power customers. Stacking CHBP and WARBS on a 10 kWh battery produces roughly $5,000 combined in Synergy territory and roughly $7,500 in Horizon territory. WARBS requires VPP enrolment and a grid connection — fully off-grid systems receive federal CHBP only, not WARBS.",
				"Rebate eligibility depends on CEC approval of the specific battery model and inverter/solution appearing on the Synergy or Horizon Supported Solutions List for your network. These lists are live documents. Verify CEC model strings and SSL entries against official sources before signing a quote — not against marketing copy or this page.",
			],
		},
		{
			heading: "Who should buy a Perth LiFePO4 OEM battery",
			body: [
				"Buyers whose primary drivers are expandable modular capacity, inverter independence, and WA-based technical support. This includes rural and fringe-of-grid properties where module replaceability and local spares matter; off-grid systems where the off-grid CHBP eligibility is meaningful and WARBS VPP requirements are not viable; and installers building systems that need to grow with their clients over a decade rather than arrive at a fixed capacity ceiling.",
				"Buyers who want the simplest possible suburban one-box installation from a global consumer brand may be better served by Tesla Powerwall or Sigenergy SigenStor class products — the comparison guide for those sits separately. The honest answer is that local OEM and global brand serve different needs; the choice should be made on architecture, support model, and site specifics rather than on patriotism or brand prestige.",
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
			label: "CHBP off-grid eligibility (dcceew.gov.au)",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "WA Residential Battery Scheme (wa.gov.au)",
			href: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "WARBS via Plenti (plenti.com.au)",
			href: "https://www.plenti.com.au/wa-residential-battery-scheme",
			external: true,
		},
		{
			label: "About RENOZ / O'Connor",
			href: "/about",
		},
		{
			label: "Technical resources and compatibility declarations",
			href: "/resources",
		},
		{
			label: "Capability statement",
			href: "/partners/capability-statement",
		},
	],
	faqs: [
		{
			question: "Does off-grid qualify for the 2026 battery rebate in WA?",
			answer:
				"Yes for the federal Cheaper Home Batteries Program — DCCEEW has confirmed off-grid systems are eligible for the ~30% STC upfront discount (roughly $2,500–$2,700 off a 10 kWh battery). No for the WA Residential Battery Scheme: WARBS requires a grid connection and VPP enrolment, so fully off-grid systems are excluded from the state rebate. Verify amounts on energy.gov.au and wa.gov.au before quoting.",
		},
		{
			question: "What does a 10 kWh Perth battery cost in 2026 after rebates?",
			answer:
				"A grid-tied 10–13 kWh battery system in Perth typically costs $12,000–$16,000 installed before rebates. Stacking the federal CHBP and WA WARBS (Synergy area) brings that down to around $7,600; in Horizon Power territory the combined rebate is larger, producing a lower net cost. Off-grid systems receive the federal rebate only. All figures are indicative WA pricing from 2025–26 data — verify with your installer.",
		},
		{
			question: "Can I add modules later if my energy needs grow?",
			answer:
				"Yes. Each RENOZ tower accepts up to 8 × 5.12 kWh modules (~40.96 kWh per tower), and up to 6 towers can be paralleled. You commission the modules you need now and add to the same tower as your load grows — or add a parallel tower for larger sites. Module-level expansion is a core reason to choose a modular OEM platform over a sealed fixed-capacity pack.",
		},
		{
			question: "Which inverter brands work with RENOZ LiFePO4 modules?",
			answer:
				"RENOZ modules pair with Victron MultiPlus and Quattro class, Selectronic SP PRO, Deye 48 V hybrids, and GoodWe and Sungrow 48 V hybrids. Compatibility is documented per inverter model and firmware revision on /resources — confirm the exact model on your quote against the published declaration before ordering. Do not assume all SKUs of a brand are compatible without checking.",
		},
		{
			question: "What happens if a module fails on a remote WA property?",
			answer:
				"The failed module is replaced independently; the remaining modules in the tower continue operating. RENOZ operates from O'Connor WA, which reduces logistics lead times compared with eastern-states or offshore distribution. Ask RENOZ for the written warranty claim pathway — who diagnoses, who ships, and the maximum replacement timeline — before purchasing.",
		},
		{
			question:
				"Is RENOZ CEC-approved and on the Synergy Supported Solutions List?",
			answer:
				"CEC listing status and any SSL pathway must be verified on live official lists before claiming rebate eligibility for a specific RENOZ and inverter combination. Contact RENOZ or a Plenti-accredited installer to confirm current CEC model strings and SSL entries for the exact package on your quote. Do not rely on marketing copy or this page for live list status.",
		},
		{
			question:
				"How does LiFePO4 perform in Perth heat compared with NMC batteries?",
			answer:
				"LiFePO4 has intrinsically better thermal stability than NMC or NCA chemistry — it does not produce oxygen during thermal events and degrades more slowly at sustained high ambient temperatures. For WA summers where battery enclosures can reach well above 40°C, LiFePO4 is the chemistry most commonly specified by engineers designing for Australian conditions. Any battery still requires derating at high temperatures; ask for the thermal derating curve in the datasheet.",
		},
		{
			question:
				"Can RENOZ batteries go on fringe-of-grid or weak-feeder sites?",
			answer:
				"Yes. Modular LV storage paired with an appropriate hybrid inverter-charger (Victron or Selectronic class for heavy loads; Deye or GoodWe/Sungrow for most residential hybrids) is well suited to fringe-of-grid WA properties. Size for worst simultaneous loads and target backup hours — not for bill-shifting alone. The modular platform lets you grow kWh as loads expand.",
		},
	],
	cta: {
		primaryLabel: "Talk to the Perth OEM team",
		primaryTo: "/contact",
		secondaryLabel: "Read the capability statement",
		secondaryTo: "/partners/capability-statement",
	},
	relatedProductPaths: ["/products/residential", "/products/rural"],
};
