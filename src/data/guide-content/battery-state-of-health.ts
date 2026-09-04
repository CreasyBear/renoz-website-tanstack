import type { Guide } from "../guide-types";

export const guide: Guide = {
	slug: "battery-state-of-health",
	title: "LiFePO4 Battery Pack SoH: What the Percentage Actually Proves",
	description:
		"How to read LiFePO4 battery pack State of Health on a Perth-built system — capacity evidence, BMS estimates, and warranty records, not a generic glossary of SoH.",
	primaryKeyword: "battery state of health",
	h1: "LiFePO4 battery pack SoH: what the percentage actually proves",
	updated: "2026-08-27",
	claimsPending: true,
	eyebrow: "Buyer’s guide · Battery evidence · Perth WA",
	intro: [
		"On a LiFePO4 pack, battery state of health is a capacity claim for that pack, not a dictionary entry. A Perth OEM publishes this page so buyers can request controlled capacity evidence, interpret BMS estimates, and read warranty records. SoH and State of Charge answer different questions: SoH compares available capacity with a documented new or reference condition, while SoC describes how full the pack is now. A displayed percentage is an estimate unless its method is documented, and it is not a capacity test.",
		"For a buyer or owner, the useful question is not whether an app shows a reassuring number. It is what records, test conditions, cut-offs, and warranty terms sit behind that number. Use this guide to request comparable evidence without bypassing BMS or inverter protections.",
	],
	expertise: {
		heading: "A displayed percentage is not a capacity test.",
		body: [
			"A BMS can show a practical operating estimate while the battery has never been put through a controlled capacity assessment. That estimate may support day-to-day monitoring, but it cannot by itself establish delivered kWh, warranty compliance, or a replacement decision.",
			"The evidence standard is straightforward: define the reference capacity, operating conditions, measured output, and relevant warranty clause. Keep product-specific assumptions separate from what the records actually show.",
		],
	},
	decisionHeading: "What proves battery health — and what does not",
	decisionRowLabels: ["Useful for", "Does not prove"],
	decisionColumns: [
		{
			name: "Dashboard SoH",
			cells: [
				"Trend monitoring and spotting a change that warrants questions",
				"The battery’s measured usable capacity or compliance with a warranty threshold",
			],
		},
		{
			name: "SoC history",
			cells: [
				"Seeing charge and discharge behaviour and whether the system reaches its configured operating limits",
				"How much energy the battery can deliver from full to the documented end condition",
			],
		},
		{
			name: "Cell-voltage logs",
			cells: [
				"Finding cell spread, protective events, and signs that imbalance may limit usable output",
				"A complete pack capacity result or the cause of every low-delivery event",
			],
		},
		{
			name: "Controlled capacity or warranty test",
			highlight: true,
			cells: [
				"Comparing measured output with the documented original usable capacity under stated conditions",
				"Any result outside its specified conditions, or a universal replacement rule for every battery",
			],
		},
	],
	sections: [
		{
			heading: "What battery State of Health means",
			body: [
				"SoH is a comparison between a battery’s present capacity and a documented new or reference capacity. The reference may be nominal, recommended usable, or another definition in the product documents, so the label alone is incomplete. A percentage without its reference capacity and conditions cannot be compared responsibly with another system.",
				"Capacity is only one part of health. Resistance, temperature behaviour, cell balance, protective events, and available power can affect what a system delivers. A lower-than-expected result should therefore be investigated with operating records and a qualified assessment, not inferred from one dashboard tile.",
			],
		},
		{
			heading: "SoH versus SoC",
			body: [
				"SoC answers “how full is it now?” SoH answers “how much capacity remains relative to the documented new reference?” A battery can show high SoC because it is near full while still delivering less total energy than when new; a low SoC reading does not indicate degradation.",
				"Keep the terms separate in requests and reports. Ask whether each percentage is SoC or SoH, what reference capacity is used, and whether it is measured or estimated. The distinction matters when assessing performance, planning, or a warranty claim.",
			],
		},
		{
			heading: "How the BMS estimates SoH",
			body: [
				"Technical estimation methods can integrate current over time (coulomb counting) and reconcile that estimate against voltage and current response using a battery model. A published NREL and JPL study on graphite/LiFePO4 cells used particle filtering for SoC and slower statistical capacity estimation because capacity and SoC are interdependent and neither is directly measurable. It also found that a flat open-circuit-voltage relationship makes capacity estimation from partial-discharge data more difficult. That is one research method, not the algorithm inside every BMS.",
				"The exact inputs, model assumptions, temperature compensation, and recalibration events vary by product. Ask for the product’s SoH definition, data inputs, calibration conditions, firmware or reporting notes, and records available for the specific system. Do not turn a generic estimation method into a product-specific accuracy claim.",
			],
		},
		{
			heading: "What controlled capacity-test evidence should include",
			body: [
				"A controlled capacity assessment should identify, at minimum: starting SoC and how charge completion was confirmed; the rest period; temperature; discharge power or current; BMS and inverter cut-offs; Ah and kWh delivered; auxiliary consumption; the documented original usable capacity used for comparison; the end condition; and repeatability under comparable conditions. The record should also identify the battery, firmware or configuration where relevant, date, instruments, and operator.",
				"Capacity evidence is only meaningful when conditions are explicit. Compare delivered energy with the same reference definition used by the product documents or warranty, and separate pack output from auxiliary loads so the result is not overstated or understated.",
				"Owners must not bypass BMS or inverter controls, force unsafe cut-offs, or improvise a discharge sequence. Use a qualified installer or technician to choose safe conditions, run the assessment, and document the result. Do not assume a capacity test was performed at commissioning unless a dated record exists.",
			],
		},
		{
			heading: "How cell imbalance can affect apparent capacity",
			body: [
				"Cell imbalance can make a pack reach a protective voltage limit before the other cells have used their available capacity. The system may then stop charging or discharging early, so the observed output can look lower than the pack’s reference capacity. Temperature, current, wiring, sensor behaviour, configuration, and other faults can produce similar symptoms.",
				"Use cell-voltage logs, temperature data, protective-event history, and charge or discharge records to investigate the pattern. A dashboard SoH percentage does not identify balancing topology or current, and no balancing claim should be inferred without current product documentation. Keep any balancing assessment product-neutral and have a qualified technician interpret logs.",
			],
		},
		{
			heading: "How to interpret SoH and replacement thresholds",
			body: [
				"There is no universal percentage at which every battery should be replaced. A meaningful decision compares the measured result, documented original usable capacity, system symptoms, safety events, operating conditions, and the applicable warranty language. A display threshold can flag a question; it cannot decide a replacement on its own.",
				"Investigate when delivered energy or power is inconsistent with the system’s documented configuration, when protective cut-offs recur, when cell-voltage spread or temperature behaviour changes, or when the BMS reports a fault. A qualified installer or technician should distinguish capacity loss from inverter limits, loads, auxiliary consumption, imbalance, or a configuration issue.",
				"Replacement follows the applicable warranty remedy, safety assessment, and engineering judgement. Do not apply a blanket “80% replace” rule.",
			],
		},
		{
			heading: "Warranty and claim evidence",
			body: [
				"Read the warranty’s definitions before interpreting a retention number: model, reference capacity, test conditions, throughput or cycle limit, calendar term, exclusions, claimant responsibilities, and remedy. Keep the purchase record, serial numbers, commissioning or configuration records, BMS and inverter logs, fault history, and any qualified test report together.",
				"For the RENOZ LV-5KWH100AH, the 1 August 2025 LV warranty states 5.12 kWh nominal capacity and 4.61 kWh recommended usable capacity. Its performance warranty states 70% of recommended usable capacity at 10 years and lists minimum throughput energy of 22.12 MWh and 6,000 cycles at 80% depth of discharge, with the earlier limit applying. It specifies measurement at the total system’s AC output and remains subject to the document’s conditions.",
				"For a comparison under that warranty, use its recommended usable capacity and total-system AC-output boundary rather than nominal capacity or an unqualified battery-side Ah or DC result. The clause does not create a universal SoH formula or replacement threshold. The voluntary warranty also operates alongside rights under the Australian Consumer Law, which it does not exclude, restrict, or limit.",
			],
		},
	],
	proofLinks: [
		{
			label: "RENOZ LV-5KWH100AH Product Warranty (1 August 2025)",
			href: "/documents/warranty/%5B250801%5D%20-%20RENOZ%20Energy%20LV-5KWH100AH%20Product%20Warranty.pdf",
		},
		{
			label: "RENOZ technical resources",
			href: "/resources",
		},
		{
			label: "Active balancing battery packs",
			href: "/guides/active-balancing-battery-packs",
		},
		{
			label: "Pack-level BMS integration",
			href: "/guides/pack-level-bms-integration",
		},
		{
			label: "CSIRO–ACCC lithium-ion battery safety report",
			href: "https://www.productsafety.gov.au/system/files/CSIRO-ACCCLithiumIonBatteries.pdf",
			external: true,
		},
		{
			label: "NREL and JPL: LiFePO4 battery capacity estimation study",
			href: "https://doi.org/10.36001/ijphm.2012.v3i2.1366",
			external: true,
		},
	],
	faqHeading: "Battery State of Health questions owners ask",
	faqs: [
		{
			question: "Is this page about SoH meaning in business?",
			answer:
				"No. This page is about battery State of Health on LiFePO4 packs — present capacity relative to a documented reference, BMS estimates, and warranty evidence. It is not a glossary of business jargon such as “statement of health” or generic “SoH meaning”.",
		},
		{
			question: "What does battery State of Health mean on a battery test?",
			answer:
				"On a battery test report, battery State of Health (SoH) compares the battery's present measured capacity with a documented new or reference capacity, expressed as a percentage. The number only has meaning when the reference, test conditions, and measurement method are known: a tester that reports SoH without stating the discharge rate, temperature and cutoff voltage is giving you an estimate, not a measured result.",
		},
		{
			question: "What is the difference between SoH and SoC?",
			answer:
				"SoH describes capacity relative to a documented new reference. SoC describes how full the battery is now. A battery can be near full and show high SoC while having less available capacity than when new, so the two percentages should not be substituted for each other.",
		},
		{
			question: "How is battery SoH calculated?",
			answer:
				"There is no single universal SoH formula for every battery. A system may estimate it from current, voltage, temperature, history, and model parameters. A controlled capacity result instead compares measured Ah or kWh with the documented original usable capacity under stated conditions. Ask for the product’s definition and method before comparing percentages.",
		},
		{
			question: "Can a 90% SoH battery be restored to 100%?",
			answer:
				"Usually no. True State of Health loss reflects physical ageing in the cells, such as loss of cyclable lithium and electrode degradation, and no charging routine reverses that. What can look like restoration is recalibration: a battery management system that has drifted can report a low SoH, then recover a few points after a full controlled charge and discharge cycle resets its reference. Treat a claimed jump back to 100% with suspicion, ask for a controlled capacity test before and after, and judge the battery against the warranty threshold in your documented terms rather than against the as-new number.",
		},
		{
			question: "How can I check my battery’s SoH?",
			answer:
				"First confirm whether the dashboard value is SoH or SoC and whether it is measured or estimated. Then request the BMS documentation, relevant logs, reference capacity, cut-offs, and operating conditions. For a capacity-based assessment, use a qualified installer or technician to conduct and document a controlled test rather than improvising a discharge or bypassing system controls.",
		},
		{
			question: "Why can my battery show high SoH but deliver less energy?",
			answer:
				"A displayed SoH can remain high while the system stops early because of cell imbalance, temperature limits, inverter settings, protective cut-offs, auxiliary consumption, or a configuration issue. The display may also be an estimate rather than a capacity measurement. Compare delivered Ah or kWh, cell-voltage and temperature logs, cut-off events, and the documented reference capacity.",
		},
		{
			question: "What is a good battery SoH percentage?",
			answer:
				"There is no universal good percentage that applies across products. Compare the figure with the named product’s documented reference capacity, baseline records, test conditions, operating symptoms, and warranty terms. A higher display number is not proof of higher usable capacity, and a lower number is not by itself a replacement instruction.",
		},
		{
			question: "When should I investigate or replace a battery?",
			answer:
				"Investigate when delivered energy or power changes, protective cut-offs recur, cell-voltage or temperature behaviour shifts, or the BMS reports a fault. A qualified installer or technician can separate capacity loss from inverter limits, loads, auxiliary consumption, imbalance, and configuration. A safety or engineering replacement decision follows qualified assessment. For a claim, assess the voluntary warranty alongside your Australian Consumer Law rights; the warranty does not exclude, restrict, or limit those rights.",
		},
		{
			question: "What evidence do I need for a battery warranty claim?",
			answer:
				"Keep the warranty, purchase and serial records, documented original usable capacity, system configuration, BMS and inverter logs, fault history, and a qualified capacity assessment that records its conditions and delivered energy. For the RENOZ LV-5KWH100AH, the 1 August 2025 warranty uses 4.61 kWh recommended usable capacity, a total-system AC-output measurement boundary, 22.12 MWh minimum throughput energy, and a stated 70% retention term, subject to the document’s conditions.",
		},
	],
	closing: {
		heading: "Build the evidence trail before you judge the percentage",
		body: "For a RENOZ warranty question, contact RENOZ with the named model, purchase and serial records, configuration, logs, fault history, and any qualified test report so the applicable warranty clause and claim documents can be identified.",
	},
	cta: {
		primaryLabel: "Ask for the evidence behind a battery’s SoH figure",
		primaryTo: "/contact",
		secondaryLabel: "Review RENOZ technical resources",
		secondaryTo: "/resources",
	},
	relatedProductPaths: [
		"/products/residential",
		"/products/rural",
		"/products/commercial",
	],
};
