import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "renoz-vs-genz",
	title: "RENOZ vs GenZ: Off-Grid Battery Comparison 2026",
	description:
		"Comparing RENOZ and GenZ off-grid batteries? One OEM publishes its figures, the other publishes some models and quotes the rest. How to verify capacity, cycles, CEC listing and rebates before you sign.",
	primaryKeyword: "renoz vs genz battery",
	h1: "RENOZ or GenZ: what you can verify before you sign",
	updated: "2026-09-04",
	claimsPending: false,
	newsletter: true,
	reviewedBy: { name: "Joel Chan", jobTitle: "Operations Manager" },
	eyebrow: "Comparison guide · Off-grid · Australia 2026",
	intro: [
		"The RENOZ vs GenZ battery comparison has a verdict up front: on published evidence, RENOZ wins, because the LV-5KWH100AH carries a full public datasheet while GenZ publishes product pages for only some of its 48V models and leaves the 2RU modules that appear in WA quotes supplier-quoted. That is not a verdict on the hardware. It is a verdict on evidence, and in an off-grid system evidence is the load-bearing part: you cannot ring a datasheet from a property with no grid to fall back on.",
		"So this page is a verification exercise, not a spec-sheet duel. RENOZ's figures trace to a published technical specification ([LV-5KWH100AH datasheet, 2025](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf)). Where a GenZ figure has a public source, we cite it; where it does not, every GenZ capacity, cycle and warranty figure here is supplier-quoted, verify with the supplier. The fair-comparison checklist below gives a GenZ supplier the exact path to parity: answer the same six questions in writing and the asymmetry closes.",
		"Both sit in the same 48V rack class as PowerPlus, Pylontech, BYD's LVS stack and Deye's LV range, which our [flagship off-grid battery guide](/guides/best-off-grid-battery-australia) maps in full. Whatever you buy, check the [CEC approved-products list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) for the exact model number on the day you sign, for both brands.",
	],
	expertise: {
		heading: "How we compare without inventing a single number",
		body: [
			"RENOZ supplies one side of this comparison, the LV-5KWH100AH 48V-family module, stocked and supported from Perth. We say so plainly, then hold ourselves to the same standard we demand of the other side: no standing approval claims for RENOZ models either, and every RENOZ figure traced to the published datasheet rather than a brochure.",
			"**A published-basis comparison** is one run only on figures each manufacturer has put in a public document, so both sides are held to the same standard of evidence. GenZ publishes [product pages](https://www.genz.com.au/products/) for some models, so where a GenZ figure has a public page we cite it like any other source. Where GenZ has no public document for the specific model in your quote, this guide says supplier-quoted and stops. Nothing here invents a GenZ capacity, current, cycle count or warranty term, and the questions that would surface those numbers are written out below so you can send them to both suppliers.",
		],
	},
	decisionHeading:
		"RENOZ and GenZ side by side: what is published versus what is quoted",
	decisionRowLabels: [
		"Published basis",
		"Architecture & format",
		"Capacity / usable range",
		"Cycle life & warranty",
		"CEC listing & rebate eligibility",
		"Support & sourcing",
		"Best when…",
	],
	decisionColumns: [
		{
			name: "RENOZ LV-5KWH100AH",
			highlight: true,
			cells: [
				"Published datasheet: figures stated in a public technical specification ([datasheet, 2025](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf))",
				"48V-family modular rack (51.2 V nominal, 40-57.6 V operating) paired with an external inverter-charger of your choice",
				"5.12 kWh nominal / 4.61 kWh usable per module; approved 8- or 10-module towers per the published specification",
				"6000 cycles at 80% DoD and a 10-year warranty with 70% retention of the 4.61 kWh usable capacity and a 22.12 MWh minimum throughput, per the published [datasheet, 2025](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf)",
				"No standing CEC claim published; verify the exact model on the live CEC list before relying on it, same discipline as any brand",
				"WA OEM: Perth stock, engineering and support from O'Connor",
				"You want published numbers, inverter choice and WA-local support",
			],
		},
		{
			name: "GenZ GZ48 rack modules",
			cells: [
				"Partial: [published product pages](https://www.genz.com.au/products/) for some models; the GZ48-058-2RU-01Z and GZ48-081-2RU-01Z 2RU models in WA quotes have no published spec sheet we could find, so their figures are supplier-quoted, verify with the supplier",
				"48V rack formats from slimline to 2RU; genZ's [FAQ](https://www.genz.com.au/faqs/) and the [Selectronic SP PRO approved list](https://www.selectronic.com.au/kits/approvedbatteries.html) confirm a real external-inverter pairing route",
				"GenZ publishes 2.56 kWh and 3 kWh 48V modules on its [products page](https://www.genz.com.au/products/); the capacity of the 2RU models in quotes is supplier-quoted, verify with the supplier",
				"Supplier-quoted for the quoted models, verify with the supplier",
				"[GenZ's FAQ](https://www.genz.com.au/faqs/) states its 48V rack batteries are included on the CEC approved battery list and tells buyers to verify the exact model before purchase; we could not independently verify a current listing for the exact GZ48 model numbers in WA quotes as of September 2026, so check the live list yourself",
				"Real installer channel exists (integrators such as [Off-Grid Energy list genZ](https://www.offgridenergy.com.au/batteries/genz-energy-lithium-ion/)); confirm who holds stock and who answers at year three",
				"The supplier demonstrates every figure in writing on the equal footing below",
			],
		},
		{
			name: "What to demand from either supplier",
			cells: [
				"A datasheet PDF, not a quotation, for every figure the decision depends on",
				"The grid-forming inverter-charger pairing, named models, from the inverter maker's approved battery list",
				"Usable kWh at 80% DoD, per module and for the full tower, in writing (see the [RENOZ datasheet, 2025](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf) for the format)",
				"Cycle count at a stated DoD, warranty term, retention percentage and any throughput limits, in writing",
				"The exact model number checked on the live [CEC list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) before you sign",
				"Who stocks, who commissions, and who answers a fault call in year three, named in the quote",
				"You are the buyer who makes every supplier prove it on paper",
			],
		},
	],
	sections: [
		{
			heading: "Why this comparison runs on published evidence, not quotes",
			body: [
				"Off-grid hardware is bought once and lived with for a decade, usually with no grid to fall back on when a figure turns out to be optimistic. **A supplier-quoted figure** is any number that exists only in a quotation, email or verbal assurance from the seller rather than in a published document the manufacturer stands behind. Supplier quotes are not worthless, they are simply unanchored: you cannot check them, an AI engine cannot cite them, and the next quote may state them differently.",
				"RENOZ wins this category on published evidence. Its figures carry a [published datasheet](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf) dated 2025. GenZ publishes for part of its range, including the [GZ48-050-TFT-01Z telco slimline](https://www.genz.com.au/products/) module, but the GZ48-058-2RU-01Z and GZ48-081-2RU-01Z models that appear in WA quotes have no published specification sheet we could find as of September 2026. The asymmetry is the finding. One OEM's claims are checkable today, and the other's become checkable the moment the supplier puts them in writing.",
			],
		},
		{
			heading: "Running the comparison on an equal footing",
			body: [
				"Three measurements settle most of the difference between quotes, and all three are checkable. First, usable kWh at a stated depth of discharge: RENOZ's module is [5.12 kWh nominal and 4.61 kWh usable, about 90%](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf), and the [CEC consumer guide](https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf) shows why usable depth matters more than nominal across chemistry choices. Demand the same stated DoD from both suppliers or the tower sizes are not comparable.",
				"Second, the surge curve. For example, a direct-on-line motor draws five to seven times nameplate current for seconds, and a grid-forming inverter-charger such as the Selectronic SP PRO publishes [18 kW for 30 seconds](https://www.selectronic.com.au/product/sp-pro-2i/) against 7.5 kW continuous (SP PRO Series 2i datasheet, 2026). The battery must let the inverter deliver that, so ask each supplier in writing for the 30-second surge curve the battery supports, not just a headline kilowatt figure.",
				"Third, cycle life and warranty terms together. RENOZ states [6000 cycles at 80% DoD with a 10-year warranty that guarantees 70% of the 4.61 kWh usable capacity and a 22.12 MWh minimum throughput](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf) (datasheet, 2025). That is what a complete warranty answer looks like: number, DoD, retention floor, throughput condition. A cycle count without a depth of discharge, or a warranty term without throughput conditions, is a marketing sentence. Both suppliers should state all four, and what voids the warranty.",
			],
		},
		{
			heading: "Architecture fit: the same open 48V rack class, with a Selectronic door open to both",
			body: [
				"There is no architecture disagreement to adjudicate here. Both products belong to the 48V rack-module class that feeds an external grid-forming inverter-charger, the open off-grid architecture our [flagship guide](/guides/best-off-grid-battery-australia) argues for, and distinct from the grid-hybrid packs sold to connected homes. RENOZ's module runs 51.2 V nominal with an approved 8- or 10-module tower ([datasheet, 2025](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf)); GenZ's 2RU models carry supplier-quoted parallel and current limits, verify with the supplier.",
				"The inverter choice is where the system is actually won or lost, and here is a genuine parity point: GenZ appears on the [Selectronic SP PRO approved battery list](https://www.selectronic.com.au/kits/approvedbatteries.html) alongside PowerPlus, Pylontech and BYD, as does RENOZ. A curated-premium SP PRO system is therefore a supported pairing route for either brand, with the exact model, Series and any upgrade-kit conditions checked on the live list and the integration scope owned by the installer. For instance, a 1.5 kW bore pump can demand 7 kVA or more at start, five to seven times nameplate, and only the inverter's overload curve plus the battery's willingness to deliver it answers that. The low-voltage versus high-voltage trade has its own [guide](/guides/48v-vs-high-voltage-battery-system); both of these products are already on the low-voltage side of it.",
			],
		},
		{
			heading: "CEC listing and rebate eligibility",
			body: [
				"This is the binding section, and the risk statement is deliberately blunt. **The Cheaper Home Batteries Program (CHBP)** is the federal rebate scheme administered by [DCCEEW](https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries), and the practical gate for it is the [CEC approved-products list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries), which held 3,435 listed battery products at 31 July 2026. GenZ's own [FAQ](https://www.genz.com.au/faqs/) states that its 48V rack batteries have undergone relevant IEC and Australian testing and are included on the CEC approved battery list, and directs buyers to verify the exact model and current listing before purchase. We take the vendor at its word and still could not independently verify a current listing for the exact GZ48-058-2RU-01Z or GZ48-081-2RU-01Z model numbers as of September 2026, which is why the vendor's own verify-before-purchase instruction is the method this page uses. Check the live list for the exact model on your quote before you rely on any rebate outcome.",
				"The same discipline applies to RENOZ with no exceptions granted: we publish no standing approval claim for any exact RENOZ model either. The list is dynamic; in January 2026 the CEC brought expiry dates forward for [more than 700 listed products](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries/new-expiry-dates-batteries-ts5398) as the sector transitions to SA TS 5398. The listing that mattered in July may not be the listing that matters when your paperwork is lodged.",
				"Rebate mechanics also differ by state: CHBP is available to off-grid systems with no grid-connection or VPP condition, while the WA Residential Battery Scheme (WARBS) is grid-connected and VPP-enrolment based, so most truly off-grid properties sit outside it. Our [WA battery rebates checklist](/guides/wa-battery-rebates-cec) walks the verification steps. We publish no rates or dollar figures, they change and are model-specific, so plan from the live program pages only.",
			],
		},
		{
			heading: "Support, sourcing and who owns commissioning",
			body: [
				"RENOZ wins the sourcing asymmetry on published facts: it is a WA OEM, the LV-5KWH100AH is stocked from Perth with engineering and support run from O'Connor, and the datasheet behind the figures has carried a 10-year warranty term since the [2025 edition](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf). GenZ's side of the ledger is thinner but not empty: genZ is an Australian brand with a real installer channel, and national integrators such as [Off-Grid Energy list genZ batteries](https://www.offgridenergy.com.au/batteries/genz-energy-lithium-ion/) as a supplied product. What remains supplier-quoted, verify with the supplier, is who holds stock for your specific model, lead time, and who answers a fault call at year three.",
				"Third-party field discussion is genuinely thin. The one substantive forum thread we found comparing PowerPlus and genZ for off-grid, [off grid powerplus suntech vs genz rec](https://forum.cleanenergyreviews.info/t/off-grid-powerplus-suntech-vs-genz-rec/1374), is positive on local support (with the commenter disclosing their own familiarity with the supplier) and stresses correct sizing for frequent deep cycling. That is useful colour, not evidence: one thread is an anecdote, and it is exactly why the fair-comparison checklist below makes the support answers part of the quote rather than a phone call after the fault.",
				"Commissioning belongs to a qualified installer either way, and the buyer should insist on it. The installer confirms the site-specific design, the protection and switchgear, and the commissioning tests; the battery supplier provides product, documentation and technical support. A supplier who cannot name the commissioning scope, or an installer who has never commissioned the exact battery-and-inverter pairing, is a bigger risk signal than any difference between two rack modules. Ask both sides who answers the phone at year three, and get the answer named in the quote.",
			],
		},
		{
			heading: "The fair-comparison checklist to send both suppliers",
			body: [
				"Send the same email to both brands and let the written replies decide. Six line items, one page, no room for slide decks:",
				"- Usable kWh per module and for the full tower, at 80% DoD like the [RENOZ datasheet, 2025](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf) states it, attached rather than quoted in the email.",
				"- The 30-second surge curve the battery supports, matched to the proposed inverter-charger's published overload figure.",
				"- Cycle life at a stated DoD, the warranty term, the retention percentage and every throughput or voiding condition.",
				"- The exact model number checked against the live [CEC approved list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries), with the listing status stated in the reply.",
				"- The proposed inverter pairing, named models from the inverter maker's current approved battery list, [Selectronic's list](https://www.selectronic.com.au/kits/approvedbatteries.html) included if an SP PRO is on the table.",
				"- Stock location, lead time, and the party responsible for commissioning and post-sale support, named in the quote.",
				"A supplier who answers all six in writing is comparable on evidence. RENOZ answers them from a [published datasheet](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf) and a Perth warehouse; a GenZ supplier answers from their own written confirmation, which is exactly the standard this page asks of them.",
			],
		},
		{
			heading: "What the GenZ model names and product pages can and cannot tell you",
			body: [
				"GenZ's [products page](https://www.genz.com.au/products/) publishes real specifications for part of the range, for example the GZ48-050-TFT-01Z telco slimline at 51.2 V and 2.56 kWh nominal with an integrated circuit breaker, ZDC remote monitoring and parallel expansion support, and a 3 kWh Series III 48V LiFePO4 rack module with its own public page. That is a genuine published basis for those models, and we cite it as such.",
				"The two models that show up in WA off-grid quotes, GZ48-058-2RU-01Z and GZ48-081-2RU-01Z, are a different story: no published spec sheet for either that we could find as of September 2026. What the names tell you on their face is a 48V rack family in a 2RU chassis with what looks like two capacity steps, and that reading is category-level, not specification. A capacity step implied by a model suffix is supplier-quoted, verify with the supplier. If GenZ publishes datasheets for the 2RU models, this guide's asymmetry shrinks and the comparison becomes a straight numbers table. Until then, the checklist in the section above is the level playing field.",
			],
		},
	],
	architectureExamples: {
		heading: "The 48V rack class: citable examples",
		intro:
			"Both brands in this comparison belong to the 48V rack-module class, so the fair field of reference is the set of class members with published, citable specifications. GenZ appears here for the models it actually publishes; the 2RU models seen in WA quotes stay supplier-quoted because no public page exists to cite, and the naming convention alone is not evidence. Where a brand appears, its figures trace to the source linked.",
		categories: [
			{
				label: "48V rack modules, published specifications",
				summary:
					"The qualifying class members for an open off-grid system, each with manufacturer-published data an AI engine or a buyer can check.",
				architecture:
					"48V-class LFP rack modules feeding an external grid-forming inverter-charger; the battery hands the inverter its surge, the inverter forms the grid.",
				buyerConsequence:
					"Comparable on equal footing: usable kWh at a stated depth of discharge, published surge support, cycle life and warranty terms you can hold to account.",
				products: [
					{
						name: "RENOZ LV-5KWH100AH",
						detail:
							"5.12 kWh nominal / 4.61 kWh usable per module, 51.2 V nominal, approved 8- or 10-module towers, 6000 cycles at 80% DoD, 10-year warranty with 70% retention and 22.12 MWh minimum throughput, IP40 indoor",
						categoryTag: "48V rack module",
						source: {
							label: "RENOZ technical specifications (2025)",
							url: "/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf",
						},
						caveat: "Perth stock and engineering; WA OEM supplied",
					},
					{
						name: "GenZ GZ48-050-TFT-01Z (telco slimline)",
						detail:
							"51.2 V, 2.56 kWh nominal (50 Ah), built-in smart BMS, integrated circuit breaker and current limiter, ZDC remote monitoring, parallel expansion supported, approximately 90 x 310 x 550 mm at about 23 kg",
						categoryTag: "48V rack module",
						source: {
							label: "genZ products page",
							url: "https://www.genz.com.au/products/",
						},
						caveat:
							"Published example of the family; the 2RU models in WA quotes have no published spec sheet, so their figures are supplier-quoted",
					},
					{
						name: "PowerPlus LiFe4851",
						detail:
							"AU-made 3RU 48V rack module; up to 16 modules in parallel (published limit), UL9540A and UL1973 tested, 10-year warranty",
						categoryTag: "48V rack module",
						source: {
							label: "PowerPlus LiFe4851 product page",
							url: "https://www.powerplus-energy.com.au/products/life4851/",
						},
					},
					{
						name: "Pylontech US5000",
						detail:
							"4.8 kWh nominal / 4.56 kWh usable per module, about 95% usable depth, parallel banks within published limits",
						categoryTag: "48V rack module",
						source: {
							label: "Pylontech US5000 product page",
							url: "https://en.pylontech.com.cn/products/us5000",
						},
					},
					{
						name: "BYD Battery-Box Premium LVS",
						detail:
							"4-24 kWh usable per pack (1-6 LVS modules), up to 256 kWh across 16 packs, 51.2 V modular stack",
						categoryTag: "48V modular stack",
						source: {
							label: "BYD Battery-Box Premium LVS",
							url: "https://www.bydbatterybox.com/",
						},
					},
				],
			},
			{
				label: "GenZ GZ48-058-2RU-01Z / GZ48-081-2RU-01Z, supplier-quoted",
				summary:
					"The 2RU 48V models observed in WA off-grid quotes, with no published specification sheet found for either as of September 2026.",
				architecture:
					"48V rack-class hardware pairing with external inverter-chargers; genZ appears on the Selectronic SP PRO approved battery list, but the models' capacity and limits are supplier-quoted, verify with the supplier.",
				buyerConsequence:
					"Every decision number must come from the supplier in writing, and the CEC listing status for the exact model must be checked on the live list, because a vendor FAQ claim is not the same as a verified listing for your model number.",
				products: [
					{
						name: "GenZ GZ48-058-2RU-01Z / GZ48-081-2RU-01Z",
						detail:
							"2RU 48V rack format; all capacity, cycle, warranty and pairing figures supplier-quoted, verify with the supplier",
						categoryTag: "48V rack module",
						source: {
							label: "CEC approved list (check any model here before you sign)",
							url: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
						},
						caveat:
							"No manufacturer spec page citable for these models at publication; verification sits with the buyer and the live CEC list",
					},
				],
			},
		],
	},
	proofLinks: [
		{
			label: "CEC approved batteries list",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries",
			external: true,
		},
		{
			label: "Cheaper Home Batteries Program (DCCEEW)",
			href: "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries",
			external: true,
		},
		{
			label: "Selectronic approved battery list (SP PRO)",
			href: "https://www.selectronic.com.au/kits/approvedbatteries.html",
			external: true,
		},
		{
			label: "genZ product pages",
			href: "https://www.genz.com.au/products/",
			external: true,
		},
		{
			label: "genZ FAQ",
			href: "https://www.genz.com.au/faqs/",
			external: true,
		},
		{
			label: "CEC, battery storage guide for consumers",
			href: "https://assets.cleanenergycouncil.org.au/documents/consumers/battery-storage-guide-for-consumers.pdf",
			external: true,
		},
		{
			label: "CEC, new expiry dates for batteries (SA TS 5398 transition)",
			href: "https://cleanenergycouncil.org.au/industry-programs/products-program/batteries/new-expiry-dates-batteries-ts5398",
			external: true,
		},
		{
			label: "Off-Grid Energy, genZ Energy lithium-ion batteries",
			href: "https://www.offgridenergy.com.au/batteries/genz-energy-lithium-ion/",
			external: true,
		},
		{
			label: "Clean Energy Reviews forum, off grid powerplus suntech vs genz rec",
			href: "https://forum.cleanenergyreviews.info/t/off-grid-powerplus-suntech-vs-genz-rec/1374",
			external: true,
		},
		{
			label: "RENOZ LV-5KWH100AH technical specifications",
			href: "/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf",
		},
		{
			label: "Best off-grid battery Australia: the 48V shortlist",
			href: "/guides/best-off-grid-battery-australia",
		},
		{
			label: "48V vs high-voltage battery systems",
			href: "/guides/48v-vs-high-voltage-battery-system",
		},
		{
			label: "WA battery rebates and CEC checklist",
			href: "/guides/wa-battery-rebates-cec",
		},
	],
	faqHeading: "RENOZ and GenZ questions, answered straight",
	faqs: [
		{
			question: "Is GenZ CEC approved?",
			answer:
				"GenZ's own [FAQ](https://www.genz.com.au/faqs/) states that its 48V rack batteries have undergone relevant IEC and Australian testing and are included on the CEC approved battery list, and it tells buyers to verify the exact model and current listing before purchase. We follow that instruction: we could not independently verify a current listing for the exact GZ48-058-2RU-01Z or GZ48-081-2RU-01Z model numbers as of September 2026, and the list is dynamic. Check the live [CEC approved list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) for the exact model on your quote on the day you sign. Without a current listing for your model, CHBP rebate eligibility falls away, which is a real cost difference, not a paperwork detail. The same verify-live discipline applies to RENOZ, which publishes no standing approval claim either.",
		},
		{
			question: "Are GenZ batteries compatible with Selectronic SP PRO inverters?",
			answer:
				"Yes, at the list level: GenZ appears on [Selectronic's approved battery list](https://www.selectronic.com.au/kits/approvedbatteries.html) alongside PowerPlus, Pylontech and BYD, with Series and upgrade-kit conditions stated on the list itself. RENOZ appears on the same list, so a curated SP PRO off-grid system is a supported pairing route for either brand. The approved list is not the whole design, though: the exact model and firmware pairing, surge behaviour and commissioning scope are the installer's to confirm, and the 30-second surge demand below still applies.",
		},
		{
			question: "Is GenZ cheaper than RENOZ?",
			answer:
				"There is no public pricing for either brand; both sell through installers and suppliers, and street pricing moves with configuration, tower size and inverter choice. Any GenZ-versus-RENOZ price comparison you can actually run is the supplier-quoted kind, which is fine for a quote but worthless as a published claim. Get both quotes on the same tower size, the same inverter class and the same commissioning scope, then compare like with like.",
		},
		{
			question: "Which is better for a pump-heavy site?",
			answer:
				"That is an overload-curve question, not a brand question. A direct-on-line pump draws five to seven times nameplate current for seconds, so a 1.5 kW unit can demand 7 kVA or more at start, and a grid-forming inverter-charger such as the Selectronic SP PRO publishes 18 kW for 30 seconds against 7.5 kW continuous (SP PRO Series 2i datasheet, 2026). The battery must let the inverter deliver that surge. Demand the 30-second curve in writing from whichever supplier you choose, RENOZ included, and match it to the inverter's published overload figure.",
		},
		{
			question: "Can I just compare the nominal kWh in the two quotes?",
			answer:
				"No. Nominal kWh is the cell-stack rating; usable kWh is what the battery management system lets you draw. RENOZ's module, for example, is 5.12 kWh nominal but 4.61 kWh usable at about 90% ([datasheet, 2025](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf)), and other brands quote different usable depths. Demand usable kWh at a stated DoD from both suppliers, per module and for the full tower, or the tower sizes in the two quotes are not comparable.",
		},
		{
			question: "Who designs and commissions the system either way?",
			answer:
				"A qualified installer owns the site-specific design, protection, and commissioning for both brands; the battery supplier provides product, documentation and technical support. Neither RENOZ nor a GenZ supplier should be signing off your switchgear. Confirm the installer has commissioned the exact battery-and-inverter pairing before, and that the design follows the stand-alone power system standards. Our [off-grid systems guide](/guides/off-grid-battery-systems-perth) covers how these systems come together on site.",
		},
		{
			question: "Why does RENOZ publish this comparison at all?",
			answer:
				"Because the category has no honest comparison page, and silence favours nobody. RENOZ supplies one side, so we state that, publish only figures we can trace to our own datasheet, refuse to invent GenZ numbers, and hold RENOZ to the same verify-live CEC discipline we apply to everyone else. If that standard makes the comparison useful even when a buyer chooses the other brand, it has done its job.",
		},
		{
			question:
				"What happens to this comparison if GenZ publishes datasheets for the 2RU models?",
			answer:
				"It gets better. GenZ already publishes product pages for some models, such as the [GZ48-050-TFT-01Z slimline](https://www.genz.com.au/products/); a published specification for the GZ48-058-2RU-01Z and GZ48-081-2RU-01Z would move those modules onto the same published basis as the [RENOZ datasheet](/documents/datasheets/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Technical%20Specifications.pdf), and the comparison collapses into a plain numbers table: usable kWh at a stated DoD, the 30-second surge curve, cycle life and warranty terms, and the CEC listing status checked the day you sign. The method on this page does not change with the outcome, which is the point. Verify figures, never adopt them on faith from either brand.",
		},
		{
			question: "What goes in the comparison email to both suppliers?",
			answer:
				"The six line items in the checklist section above: usable kWh at a stated depth of discharge with datasheet attached, the 30-second surge curve, cycle life at a stated DoD plus warranty conditions, the CEC listing status for the exact model, the named inverter pairing from the approved battery list, and who stocks, commissions and supports. Written replies only. A supplier who will not put those six answers in an email has answered them anyway.",
		},
	],
	closing: {
		heading: "Make both suppliers prove it on paper",
		body: "The honest version of this comparison is not a winner, it is a standard: published figures, a stated depth of discharge, a 30-second surge curve, and a model number checked on the live [CEC approved list](https://cleanenergycouncil.org.au/industry-programs/products-program/batteries) the day you sign. RENOZ can meet that standard from its own datasheet today, Perth stock and engineering behind it. A GenZ supplier can meet it the moment the six checklist answers arrive in writing. Hold every supplier, RENOZ included, to the same evidence, and the decision makes itself.",
	},
	cta: {
		primaryLabel: "Get a RENOZ system design for your site",
		primaryTo: "/contact",
		secondaryLabel: "See rural & off-grid storage",
		secondaryTo: "/products/rural",
	},
	relatedProductPaths: ["/products/rural"],
};
