import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "solar-winery-vineyard-off-grid",
	title: "Solar for Wineries & Vineyards: Off-Grid + Microgrid Guide 2026",
	description:
		"Winery loads are refrigeration and vintage spikes. How microgrid vs off-grid decisions work, sizing from interval data, and what the exemplar projects prove.",
	primaryKeyword: "solar for wineries",
	h1: "Solar for wineries and vineyards: the off-grid and microgrid guide",
	updated: "2026-09-04",
	claimsPending: false,
	newsletter: true,
	eyebrow: "Agri energy guide · WA 2026",
	intro: [
		"A winery's electricity problem is not the annual bill, it is the shape of the load. Refrigeration and barrel-room cooling run all year, then vintage compresses a year of fruit into six frantic weeks of crush, fermentation chilling and irrigation, right when the grid connection at the end of a rural line is least able to help. Search interest in solar for wineries is growing for exactly this reason: operators are not chasing a green badge, they are trying to remove a wire that throttles the business.",
		"The honest starting point is that wineries are one of the most electricity-intensive food businesses there is. In California, winemaking uses over [400 GWh per year, the second-largest electricity-consuming food industry in the state](https://research.engineering.ucdavis.edu/greentech/bwf-microgrid/) (LBNL estimate, cited by the UC Davis winery microgrid study). Australian wineries run the same load classes on a smaller map: crushing, chilling, cold storage, cellar door, events, pumping.",
		"This guide covers the full decision: what a winery actually loads, when grid-tie is enough versus a hybrid microgrid versus full off-grid, how to size from interval data instead of averages, what the published exemplar projects in Australia and California prove, and the WA region and connection reality. RENOZ manufactures and supplies commercial battery cabinets, so we declare that interest up front and anchor every number to a published source.",
	],
	expertise: {
		heading: "How this guide was built",
		body: [
			"Every figure on this page comes from a published source: a university or government study, a trade-press case study, a national broadcaster report or a manufacturer datasheet, each linked inline. Projects in the United States and France are labelled as such, they are evidence for what works, not RENOZ projects. Australian exemplars are labelled with their state. Nothing here is a substitute for a site-specific design by an accredited installer, which is who owns sizing, protection and commissioning on every project.",
			"We also hold ourselves to the same verify-live discipline we recommend: no standing approval claims for any exact battery model, RENOZ included. Scheme eligibility and product listing status change, so confirm the exact model numbers on any quote against the current [CEC approved-products list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) before signing.",
		],
	},
	decisionHeading:
		"Winery energy architecture: grid-tie, hybrid microgrid, full off-grid",
	decisionRowLabels: [
		"Grid relationship",
		"Vintage crush coverage",
		"Refrigeration security",
		"Storage role",
		"Generator role",
		"Brand story value",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "Grid-tie solar",
			cells: [
				"Grid stays the primary supply; solar offsets daytime import and export is credited where allowed",
				"Crush spikes still hit the grid connection; capacity limits and demand charges apply as before",
				"Refrigeration drops out in any outage; a standard grid-tie inverter shuts down when the grid does",
				"No battery, or a small grid-hybrid pack for bill optimisation only",
				"None, outages mean loss of chilling and cold storage",
				"Modest; solar without storage is now the industry default and reads as baseline compliance",
				"The connection is healthy, the load is daytime-weighted and vintage fits inside the grid capacity",
			],
		},
		{
			name: "Hybrid microgrid",
			highlight: true,
			cells: [
				"Grid-connected but able to island: solar, battery and controls run the site when the wire fails or caps out",
				"Battery shaves the crush peak so vintage fits inside the connection; export caps stop being the ceiling",
				"Fermentation and barrel-room cooling ride through outages on stored energy",
				"Battery is the workhorse: peak shaving daily, backup automatically, generator support when needed",
				"Optional genset becomes backup for multi-day events instead of a daily habit",
				"Strong; a microgrid is a story cellar door can tell and press covers it",
				"The grid works but caps, demand charges or outage risk cost the business every vintage",
			],
		},
		{
			name: "Full off-grid",
			cells: [
				"No grid connection at all; the site generates, stores and manages its own supply permanently",
				"The system must carry the entire crush: chilling, press, pumps, events, everything",
				"Refrigeration is designed into the autonomy budget, not hoped for",
				"Large LFP battery bank sized for worst-month days of autonomy; the [RENOZ HC cabinet platform](/products/commercial) scales from one cabinet to eight",
				"Genset is standard insurance for long cloudy stretches, sized and exercised like any plant item",
				"Maximum; Lowe Wines in Mudgee generated national press coverage (ABC, 2025) for going fully off-grid",
				"The connection quote is absurd, the line is unreliable, or the site is simply beyond the wire",
			],
		},
	],
	sections: [
		{
			heading: "What a winery actually loads",
			body: [
				"Winery electricity splits into four blocks. First, refrigeration: fermentation chilling during vintage, then barrel-room and tank temperature control all year, which is why refrigeration dominates the load profile in the UC Davis analysis of winery microgrids (2023). Second, the crush spike: presses, destemmers, pumps and cleaning run hard for six to eight weeks while fermentation chilling adds a round-the-clock demand block on top.",
				"Third, hospitality: cellar door, restaurants and weddings, which is exactly how the Lowe Wines system in Mudgee is loaded, a winery plus cellar door plus restaurant plus [160-guest weddings on a fully off-grid site](https://www.abc.net.au/news/2025-10-30/mudgee-off-electricity-grid-winery-lowe-wines/105941576) (ABC, 2025). Fourth, irrigation: bore and surface pumps, and here the off-grid physics bites, a direct-on-line motor start draws five to seven times nameplate current for seconds, so the inverter's overload curve matters more than its continuous rating. That curve is the core argument of our [off-grid battery guide](/guides/best-off-grid-battery-australia).",
				"A practical example of how the blocks interact: a winery that hosts weddings runs its biggest event loads on summer weekends, which is also when a weak rural feeder sags and when bore irrigation competes for the same supply. The UC Davis analysis of winery energy use notes refrigeration as the dominant load (2023), but the operational risk concentrates where those blocks overlap, and that overlap window is what the storage design has to carry.",
				"**Crush** is the vintage harvest period when fruit arrives, is pressed, and fermentation begins, and it is the single worst load event a winery connection faces each year. Any solar design that averages the year and ignores the crush will fail exactly when it matters.",
				"Here is the framing that most crush-led thinking misses: the crush is a power problem, the other forty-six weeks are an energy problem, and the energy problem is where the annual bill actually accumulates. Barrel rooms and tank farms hold temperature 365 days a year. Case-goods warehouses, offices, tasting rooms that trade every weekend, yard and cellar-door lighting, bore pumps, wastewater treatment, compressed air for bottling lines: none of it is glamorous, all of it is always on, and together it usually outweighs the six frantic weeks of crush in annual kilowatt-hours. That baseload is also the easiest money on the site: it is daytime-weighted, predictable, and a plain grid-tie array offsets it without any storage drama. The honest sequencing is therefore baseload first, then storage for the crush and the outage risk, not the other way round; get the year-round offset wrong and you have bought a resilience toy that never pays for itself.",
			],
		},
		{
			heading:
				"Grid-tie, hybrid microgrid, or full off-grid: the architecture decision",
			body: [
				"**A winery microgrid** is a site-level power system where solar, battery storage, controls and optionally a generator can operate together and separate from the grid when needed. It is not a marketing term here, it is a specific architecture: the battery and inverter must be able to form their own grid, which is what separates a microgrid from ordinary grid-tie solar.",
				"Grid-tie solar remains the right answer where the connection is healthy and the load is daytime-weighted; the US evidence bears this out, with the Korbel winery in California offsetting [90% of its average bill with 852 kW of PV and 360 kW / 798 kWh of storage](https://www.energytoolbase.com/) driven mainly by demand charges up to $22/kW (EnergyToolBase case study, 2022). But every US case study of this class is grid-tied, which is the gap Australian operators with weak rural connections face: if the wire is the problem, grid-tie does not solve it.",
				"Full off-grid removes the wire entirely and inherits the whole duty. Hybrid microgrid sits between and is where most commercial agri sites land: keep the grid where it is usable, let the battery carry crush peaks and outages. The battery-versus-inverter architecture underneath this choice, 48V rack modules on a grid-forming inverter-charger versus closed high-voltage grid-hybrid sets, is covered in our [48V versus high-voltage guide](/guides/48v-vs-high-voltage-battery-system); the same open-versus-closed logic applies at winery scale.",
				"A caution from the field: closed grid-hybrid battery sets sold for residential self-consumption are usually grid-referenced, with backup as an event rather than permanent duty, and their published backup overload runs roughly 1.2 to 1.4 times rated output for 5 to 10 seconds (manufacturer backup datasheets). For a site with direct-on-line pump and compressor starts, that gap is exactly why the 48V open architecture argument in our [off-grid battery guide](/guides/best-off-grid-battery-australia) carries over to winery scale. Ask any quoting installer to put the overload curve and the generator plan in writing.",
				"For comparison shopping across the 48V-class field, PowerPlus publishes its [LiFe4851 rack module details](https://www.powerplus-energy.com.au/products/life4851/) and BYD publishes the [Battery-Box Premium LVS range](https://www.bydbatterybox.com/); both are peer vendors to RENOZ in the open 48V architecture, and the same verify-exact-model discipline applies to all three.",
			],
		},
		{
			heading: "Sizing from interval data, not averages",
			body: [
				"**A demand charge** is a network charge based on the highest power draw in a billing period, not the energy used, and it is why a six-week crush can distort twelve months of bills. Korbel's economics were driven by demand charges up to $22/kW (EnergyToolBase case study, 2022), and Australian network tariffs for commercial and industrial customers use the same mechanism under different names.",
				"The sizing method is boring and non-negotiable. Pull 15-minute interval data for at least a full year so the last vintage is in the record. Separate running loads from starting loads, because motors that start direct-on-line demand five to seven times nameplate for seconds. Size PV to the worst month, not the annual average, and size battery autonomy for the outage or grid-limit scenario the business actually fears: one night of fermentation chilling is a different bank to three days of full crush.",
				"One sizing trap deserves its own paragraph: interval data shows running load, not starting load. For instance, a 1.5 kW bore pump starting direct-on-line can demand 7 kVA or more for seconds (locked-rotor current, five to seven times nameplate), which is why the inverter-charger overload curve, not the battery kWh figure, decides whether pumps start on a cold morning. Consider sizing the worst-case simultaneous start before anything else, then work back to energy.",
				"For bore pumping, US extension and vendor methods size PV at roughly 1.25 times the pump wattage and stack multipliers for inverter efficiency, temperature and depth of discharge, with two to three days of autonomy typical and up to five or more for remote sites (US extension sizing method). Our [WA battery sizing guide](/guides/battery-sizing-off-grid-wa) works the same arithmetic step by step for WA conditions.",
			],
		},
		{
			heading: "What the exemplar projects prove",
			body: [
				"Lowe Wines, Mudgee NSW, is the Australian proof that full off-grid works at production scale: [265 kW of solar across 414 panels and 1.2 MWh of battery](https://www.abc.net.au/news/2025-10-30/mudgee-off-electricity-grid-winery-lowe-wines/105941576) carrying the winery, cellar door, restaurant and events with no grid connection (ABC, 2025). As stated arithmetic against RENOZ's published platform, 1.2 MWh is about five HC-125K-261-02B cabinets at 125 kW / 261.25 kWh each ([RENOZ commercial platform](/products/commercial)); Lowe is a non-RENOZ project and that comparison is scale arithmetic, not a claim about their hardware.",
				"Henschke in the Eden Valley, SA, took the hybrid path: [47 kW of existing solar plus 50 kW added, a battery and diesel backup](https://tandem.energy/henschke-exceptional-wines-from-sustainable-vineyards/) as a winery microgrid (Tandem Energy case study). Note the generator stayed, hybrid does not mean generator-free, it means the generator becomes an occasional insurance policy instead of the backbone.",
				"The California evidence supplies the economics. Domaine Carneros in Napa runs [427 kW of solar, a 250 kVA battery and a generator](https://www.microgridknowledge.com/commercial-microgrids/article/55271720/domaine-carneros-microgrid) and supplied 70-80% of site load in 2024 (Microgrid Knowledge); their stated motivation was resilience, lose power at harvest and fruit overripens. A California Energy Commission demonstration of [200 kW PV with 280 kWh storage across two winery buildings achieved up to 39% peak reduction and about $12,000 per year in savings](https://www.energy.ca.gov/publications/2022/demonstration-community-scale-low-cost-highly-efficient-photovoltaic-and-energy) (CEC-500-2022-006, 2022). Every one of these is a non-RENOZ, non-WA project; they prove the architecture, not the vendor.",
				"Domaine Carneros also supplies a lesson the glossy case studies skip: their microgrid took about six months of controls fine-tuning before it behaved the way the design intended (Microgrid Knowledge). A winery microgrid is software and commissioning as much as hardware, so ask any quoting installer how the islanding, load-shedding and generator-start sequences get tuned and tested on your site, not just what the cabinets cost.",
			],
		},
		{
			heading: "WA wine regions and connection reality",
			body: [
				"WA's wine map splits into two connection stories. The Swan Valley and Geographe sit close to the metro network, where the constraint is more often tariff structure and demand charges than raw capacity. Margaret River, the Great Southern (Mount Barker, Porongurup, Frankland River) and Pemberton sit at the end of rural feeders, where end-of-line supply, three-phase availability and capacity caps are the lived reality, and where the microgrid and off-grid options earn their keep.",
				"The **South West Interconnected System (SWIS)** is the main electricity network covering Perth and WA's South West, and much of the state's wine country sits on its rural fringes or beyond it on stand-alone feeders. Away from the SWIS, stand-alone systems are designed under AS/NZS 4509 ([Standards Australia](https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector)), the same standards regime our flagship [off-grid battery guide](/guides/best-off-grid-battery-australia) walks through.",
				"We deliberately publish no specific SWIS capacity or kVA figures here: connection limits are site-specific and only a Western Power connection assessment for your actual address settles them. What we can say generically is that the further a property sits from a strong feeder, the more a battery-backed system changes the conversation, because it converts a connection-capacity problem into a design problem the installer can solve. If an off-grid or hybrid outcome is on the table, our [off-grid system cost guide](/guides/off-grid-system-cost-wa) covers what the money actually buys and our [generator-hybrid sizing guide](/guides/off-grid-generator-hybrid-sizing) covers keeping a genset in the design honestly.",
			],
		},
		{
			heading: "Costs and payback honesty",
			body: [
				"Here is the honest part: there is no published, verified installed-price-per-kWh table for Australian winery solar-plus-storage, and anyone quoting one precise payback for your site is guessing. What the public record supports is directional. The California CEC demonstration returned about $12,000 per year on a 200 kW / 280 kWh system (CEC-500-2022-006, 2022). Korbel offset 90% of its average bill (EnergyToolBase case study, 2022). Domaine Carneros modelled roughly a ten-year return (Microgrid Knowledge). Adjacent Australian evidence from dairy case studies of 30-100 kW solar with about 200 kWh of storage quotes paybacks in the 5.9 to 7.9 year range (AU case studies, [Dairy Australia](https://www.dairyaustralia.com.au)); treat those as class-mates, not winery quotes.",
				"Two levers move the answer more than panel price. First, tariff structure: a system that shaves the demand charge and fits the crush inside an existing connection cap is worth more than raw kWh offset. Second, avoided cost: Lowe Wines' off-grid decision removed a grid connection entirely (ABC, 2025), and our Harvey farm case study avoided about $200,000 in a grid-connection quote at residential-farm scale, the same mechanism at winery scale. Get a real quote against your interval data; that is the only payback that counts.",
				"A winery-grade quote should itemise what the cheap quotes hide: the load audit it is based on, the overload and fault currents the inverter-charger will actually deliver, battery module-level expansion limits, generator start and charge integration, monitoring and telemetry, and who owns commissioning and warranty service in your region. If a quote is a single line with a kW figure, it has not been engineered against a crush.",
			],
		},
		{
			heading: "The brand story: off-grid as wine marketing",
			body: [
				"The Lowe Wines off-grid project generated national media coverage, with owner David Lowe describing the shift from being captive to the grid as being in control (ABC, 2025). That is the pattern: energy architecture at a winery is a cellar-door story, a wedding-venue story and a sustainability-submission story, not just an engineering line item.",
				"In the vineyard itself, agrivoltaics is the emerging adjacent story, and the research verdict is genuinely interesting rather than hyped. **Agrivoltaics** is the co-location of solar panels above or between crops so the same land produces both food and electricity. A six-year Sun'Agri/INRAE dynamic agrivoltaic trial on vines at Piolenc, France (2019-2024) found shading delayed veraison by 2-5 days and harvest by up to 7 days while retaining acidity at similar sugar levels ([IVES Open Science](https://ives-openscience.eu/55101/)). For a warming climate that is a potential adaptation tool, and for a winery it is a marketing story with published data behind it. It is not yet an energy product with an Australian supply chain, treat it as research-grade.",
			],
		},
	],
	proofLinks: [
		{
			label: "UC Davis winery microgrid study (LBNL 400 GWh framing)",
			href: "https://research.engineering.ucdavis.edu/greentech/bwf-microgrid/",
			external: true,
		},
		{
			label: "Microgrid Knowledge: Domaine Carneros winery microgrid",
			href: "https://www.microgridknowledge.com/commercial-microgrids/article/55271720/domaine-carneros-microgrid",
			external: true,
		},
		{
			label: "EnergyToolBase: Korbel winery solar + storage case study",
			href: "https://www.energytoolbase.com/",
			external: true,
		},
		{
			label: "CEC-500-2022-006: winery PV + storage demonstration",
			href: "https://www.energy.ca.gov/publications/2022/demonstration-community-scale-low-cost-highly-efficient-photovoltaic-and-energy",
			external: true,
		},
		{
			label: "ABC News: Lowe Wines goes fully off-grid (Oct 2025)",
			href: "https://www.abc.net.au/news/2025-10-30/mudgee-off-electricity-grid-winery-lowe-wines/105941576",
			external: true,
		},
		{
			label: "Tandem Energy: Henschke winery microgrid case study",
			href: "https://tandem.energy/henschke-exceptional-wines-from-sustainable-vineyards/",
			external: true,
		},
		{
			label: "IVES Open Science: Sun'Agri/INRAE vitivoltaics trial",
			href: "https://ives-openscience.eu/55101/",
			external: true,
		},
		{
			label: "Best off-grid battery Australia: the 48V shortlist",
			href: "/guides/best-off-grid-battery-australia",
		},
		{
			label: "Off-grid solar with generator backup: sizing the hybrid",
			href: "/guides/off-grid-generator-hybrid-sizing",
		},
		{
			label: "Battery sizing for off-grid WA properties",
			href: "/guides/battery-sizing-off-grid-wa",
		},
		{
			label: "Off-grid system cost in WA",
			href: "/guides/off-grid-system-cost-wa",
		},
	],
	faqHeading: "Winery solar and microgrid questions, answered plainly",
	faqs: [
		{
			question: "Can solar run a winery during vintage?",
			answer:
				"Yes, with the right architecture. Vintage is a power problem before it is an energy problem: presses and pumps start hard and fermentation chilling runs around the clock. A grid-tie array alone leaves crush peaks on the grid; a battery-backed hybrid or off-grid system shaves the peak and carries the chilling. The published exemplars say it works: Lowe Wines runs an entire winery, restaurant and wedding venue off-grid on 265 kW of solar and 1.2 MWh of battery (ABC, 2025).",
		},
		{
			question: "What is a winery microgrid?",
			answer:
				"A winery microgrid is a site-level power system where solar, battery storage, controls and optionally a generator can run the winery together and island from the grid when it fails or caps out. The test is simple: if the grid goes down and fermentation cooling keeps running, you have a microgrid; if everything stops, you have grid-tie solar.",
		},
		{
			question: "How much solar does a vineyard need?",
			answer:
				"Enough to cover the worst-month interval data, not the annual average. Pull 15-minute interval data for a full year, find the vintage peak, and size against that. The exemplars range from Henschke's 97 kW of combined solar (Tandem Energy case study) to Lowe Wines' 265 kW (ABC, 2025) to Korbel's 852 kW in California (EnergyToolBase case study, 2022). The right number for your site comes from your load audit, our [battery sizing guide](/guides/battery-sizing-off-grid-wa) shows the method.",
		},
		{
			question: "Do agrivoltaics work over vines?",
			answer:
				"The research says the effect is real and manageable. A six-year Sun'Agri/INRAE trial in France (2019-2024) measured veraison delayed 2-5 days and harvest delayed up to 7 days under dynamic panels, with acidity retained at similar sugar ([IVES Open Science](https://ives-openscience.eu/55101/)). That is a climate-adaptation finding with marketing upside, not a mature commercial product in Australia yet.",
		},
		{
			question: "What happens to fermentation in a blackout?",
			answer:
				"On grid-tie solar, everything stops: the inverter shuts down with the grid and fermentation chilling, tank temperature control and barrel rooms go unconditioned. On a hybrid microgrid or off-grid system the battery islands the site and the chilling keeps running, which is precisely the resilience Domaine Carneros built for, lose power at harvest and fruit overripens (Microgrid Knowledge). Sizing the battery for at least the critical-chilling load overnight is the design floor.",
		},
		{
			question: "Are there rebates for winery solar plus battery?",
			answer:
				"Possibly, but verify by size and class. The federal [Cheaper Home Batteries Program](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries) is available to off-grid systems with no grid-connection or VPP condition, however scheme eligibility depends on system size and class, so commercial-scale systems must verify the current rules live before counting on anything. The WA Residential Battery Scheme is grid-connected and VPP-based. Batteries must be on the [CEC approved list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) for scheme eligibility; we publish no rebate rates or caps, our [rebates checklist](/guides/wa-battery-rebates-cec) tracks the current detail.",
		},
		{
			question: "Which WA wine regions does this suit?",
			answer:
				"Any region where the connection is weak, expensive or unreliable: Margaret River's rural fringes, the Great Southern around Mount Barker, Porongurup and Frankland River, Pemberton and Geographe all fit the profile, and the Swan Valley gains more from tariff and demand-charge management than connection escape. The only way to know for your block is a Western Power connection assessment plus an interval-data load audit.",
		},
		{
			question: "Do we still need a generator?",
			answer:
				"In hybrid and off-grid designs, usually yes as insurance. Henschke kept diesel backup in its winery microgrid (Tandem Energy case study) and Domaine Carneros runs a generator alongside 427 kW of solar and a 250 kVA battery (Microgrid Knowledge). The battery reduces generator runtime from a daily habit to an occasional event; sizing that relationship honestly is covered in our [generator-hybrid guide](/guides/off-grid-generator-hybrid-sizing).",
		},
	],
	closing: {
		heading: "Next step: size the crush, then choose the architecture",
		body: "The sequence that works: pull your interval data, name the outage or capacity scenario the business actually fears, and let that decide grid-tie versus hybrid versus off-grid. RENOZ supplies commercial battery cabinets from one to eight HC units (about 200 kWh to 2 MWh) with Perth-based engineering and support, and accredited installer partners own the site design and commissioning. Start with a winery energy assessment and we will bring the numbers, not the slogans.",
	},
	cta: {
		primaryLabel: "Get a winery energy assessment",
		primaryTo: "/contact",
		secondaryLabel: "See commercial storage",
		secondaryTo: "/products/commercial",
	},
	relatedProductPaths: ["/products/commercial", "/products/rural"],
};
