import type {
	Insight,
	InsightBarChartBlock,
	InsightTableBlock,
} from "../insight-types";

const LFP_SLUG = "china-lfp-price-signal-august-2026";

const SOURCE_URL = "https://mp.weixin.qq.com/s/rRuk6xkqs3tObMsloGcFYA";

const identityTable: InsightTableBlock = {
	kind: "table",
	title: "Cell-level CAM identity, before yield",
	columns: ["Material", "mAh/g", "V", "Wh/kg", "t/GWh"],
	rows: [
		["NCM 9-series", "210", "3.60", "756", "1,323"],
		["NCM811", "200", "3.70", "740", "1,351"],
		["NCM523", "165", "3.70", "610.5", "1,638"],
		["LFP gen-4", "160", "3.20", "512", "1,953"],
		["LFP gen-3", "155", "3.20", "496", "2,016"],
		["NFM (sodium, O3 layered)", "125", "3.00", "375", "2,667"],
		["NFS (sodium, alluaudite)", "95", "3.50", "332.5", "3,008"],
		["NFPP (sodium, polyanion)", "98", "3.00", "294", "3,401"],
	],
	note: "Tonnes per GWh = 1,000,000 ÷ (practical mAh/g × full-cell volts). Anchor checks: NCM811, 1,000,000 ÷ 740 = 1,351; LFP gen-3, 1,000,000 ÷ 496 = 2,016; NFPP, 1,000,000 ÷ 294 = 3,401. Practical capacity is half-cell reversible capacity; voltage is full-cell working voltage against graphite (lithium) or hard carbon (sodium), not the half-cell potential versus the metal.",
};

const yieldTable: InsightTableBlock = {
	kind: "table",
	title: "After a 96% manufacturing-yield scenario",
	columns: ["Material", "t/GWh", "GWh per 10,000 t"],
	rows: [
		["NCM 9-series", "1,378", "7.3"],
		["NCM811", "1,408", "7.1"],
		["NCM523", "1,706", "5.9"],
		["LFP gen-4", "2,035", "4.9"],
		["LFP gen-3", "2,100", "4.8"],
		["NFM", "2,778", "3.6"],
		["NFS", "3,133", "3.2"],
		["NFPP", "3,543", "2.8"],
	],
	note: "Yield-adjusted tonnes per GWh = chemistry-layer tonnes per GWh ÷ 0.96; gigawatt-hours from 10,000 tonnes are multiplied by 0.96. NFPP's exact chain is 129 × 0.76 ≈ 98.04 mAh/g, × 3.0 V ≈ 294.1 Wh/kg, giving 3,400 t/GWh before yield and 3,542 after; the table uses the rounded 98 × 3.0 = 294 identity (3,401 / 3,543). The last digit is a rounding check, not claimed precision.",
};

const theoreticalTable: InsightTableBlock = {
	kind: "table",
	title: "Theoretical specific capacity",
	columns: ["Material", "mAh/g", "Practical efficiency in the note"],
	rows: [
		["LFP", "170", "Gen-3 about 91%"],
		["NCM523", "278", "-"],
		["NFPP", "129", "About 76% (98 mAh/g)"],
		["NFM", "240", "-"],
		["NFS", "121", "-"],
	],
	note: "C_theory = nF / (3.6 × M), with F = 96,485 C/mol. Practical capacity is theoretical capacity times a realised efficiency. NCM811 is given in the note as about 73% (200 mAh/g practical). These are stoichiometric ceilings, not cell designs.",
};

const yieldSensitivityTable: InsightTableBlock = {
	kind: "table",
	title: "Yield sensitivity on tonnes per GWh",
	columns: ["Yield", "Multiplier on chemistry-layer t/GWh"],
	rows: [
		["95%", "× 1.0526"],
		["96%", "× 1.0417"],
		["97%", "× 1.0309"],
		["98%", "× 1.0204"],
	],
	note: "Each percentage point of yield moves tonnes per GWh by about 1%. The 96% case is a scenario, not a measured factory yield.",
};

const officialCheckTable: InsightTableBlock = {
	kind: "table",
	title: "Listed-company figures against the two-layer identity",
	columns: ["Disclosure", "Chemistry", "Stated t/GWh", "Model"],
	rows: [
		[
			"Dangsheng, 13 Sep 2021",
			"Ternary, unspecified",
			"1,500-1,800",
			"523: 1,706; 622: ~1,683 (both with yield)",
		],
		[
			"Dynanonic investor platform",
			"LFP",
			"2,200-2,500",
			"Gen-3 with yield: 2,100",
		],
		[
			"Xiangtan Electrochemical",
			"LFP (attribution unverified)",
			"Compared with 2,016 chemistry-layer",
			"Excluded from the cross-check",
		],
	],
	note: "Official replies quote cell-level consumption, tonnes of cathode per GWh of cells. None states whether manufacturing loss is inside the number, and none publishes a single 1,600. Dangsheng's band covers the yield-adjusted 523 and 622 back-calculations. Dynanonic's floor is 4.8% above generation-3 LFP; the ceiling is 19% above, which the note reads as a possible specific-capacity margin. Xiangtan's core business is not LFP. Hunan Yuneng, an associate, is the LFP name. That line is recorded and then dropped.",
};

const statusTable: InsightTableBlock = {
	kind: "table",
	title: "Where the eight materials sit commercially",
	columns: ["Material", "Status"],
	rows: [
		[
			"NCM523",
			"Mature, declining. Five-series automotive share is falling quickly.",
		],
		[
			"NCM811",
			"Mature workhorse. 2025 share slipped; absolute volume remains large.",
		],
		[
			"NCM 9-series",
			"In production cars. SMM, a Shanghai metals-price house: about 14% of 2025 premium EV installations.",
		],
		["LFP gen-3", "The bulk of the 77.4% LFP shipment share."],
		[
			"LFP gen-4",
			"Ramping. Dynanonic 2025 H1: high-compaction gen-4 20-30% of mix; gen-5 in pilot.",
		],
		[
			"NFPP",
			"Industrialised. Polyanion about 70% of sodium-ion cathode; 2025 global sodium cathode shipments about 20,000 t.",
		],
		[
			"NFM",
			"Commercialising in two-wheelers and traction. CATL's sodium-ion traction cell, sold as Naxin, is the reference product.",
		],
		[
			"NFS",
			"First production year. Zhongna Energy, a sodium-ion materials and pack company, started a 10,000 t-class Meishan plant in January 2026 (phase 1: 10,000 t/y cathode and 2 GWh of packs).",
		],
	],
};

const gwhPerTenKtChart: InsightBarChartBlock = {
	kind: "chart",
	chart: "bars",
	title: "GWh of cells from 10,000 tonnes, after 96% yield",
	unit: "GWh",
	bars: [
		{ label: "NCM 9-series", value: 7.3 },
		{ label: "NCM811", value: 7.1 },
		{ label: "NCM523", value: 5.9 },
		{ label: "LFP gen-4", value: 4.9 },
		{ label: "LFP gen-3", value: 4.8 },
		{ label: "NFM", value: 3.6 },
		{ label: "NFS", value: 3.2 },
		{ label: "NFPP", value: 2.8 },
	],
	note: "A flat 1,600 t/GWh coefficient would print 6.25 GWh on every bar. The 9-series bar is about 2.6 times the NFPP bar.",
};

export const insight: Insight = {
	slug: "cathode-tonnes-per-gwh-lfp-ncm-sodium",
	title: "How many GWh from 10,000 tonnes of cathode?",
	description:
		"The 1,600 t/GWh rule is a 2021 nickel-manganese-cobalt coefficient, not a physical constant. Lina's 15 August handbook, a Chinese cathode-materials note, puts eight powders on one cell-level identity: 10,000 tonnes of NCM811 make about 7.1 GWh of cells; generation-3 LFP about 4.8; NFPP about 2.8.",
	eyebrow: "Technical note · 15 August 2026",
	published: "2026-08-27",
	updated: "2026-08-27",
	readTime: "16 min",
	about: [
		"Cathode tonnes per GWh",
		"LFP cathode conversion",
		"NCM 1600 tonnes per GWh",
		"Sodium-ion cathode NFPP",
		"China battery materials",
	],
	relatedSlugs: [LFP_SLUG],
	keyFigures: [
		{
			label: "LFP gen-3, after yield",
			value: "4.8",
			unit: "GWh / 10,000 t",
			change: "2,100 t/GWh",
			source: "Cell-level CAM, 96% yield scenario",
		},
		{
			label: "NCM811, after yield",
			value: "7.1",
			unit: "GWh / 10,000 t",
			change: "1,408 t/GWh",
			source: "Cell-level CAM, 96% yield scenario",
		},
		{
			label: "NFPP, after yield",
			value: "2.8",
			unit: "GWh / 10,000 t",
			change: "3,543 t/GWh",
			source: "Cell-level CAM, 96% yield scenario",
		},
	],
	sources: [
		{
			publisher: "Lina",
			title:
				"How many GWh from 10,000 tonnes of cathode? Eight-material conversion handbook",
			published: "2026-08-15",
			accessed: "2026-08-27",
			url: SOURCE_URL,
			note: "WeChat engineering note by Lina, a Chinese cathode-materials writer. Figures are the author's cell-level estimates from public parameters, not laboratory measurements and not a RENOZ cell design. Listed-company replies (Dangsheng Technology, a ternary-cathode producer; Dynanonic, an LFP-cathode producer; Sunwoda; Tesla's 4680 yield letter; Ford and GM pack labels; Zhongna Energy's Meishan announcement) sit behind the official-order checks. Industry and academic citations include GGII (2025 shipment mix), SMM (9-series installation share), Kim et al., Electrochimica Acta (2015) on N/P via anode thickness, Yamada (2014) on NFS, and the NFS@C@CNTs full-cell voltage. A research-house 1.54 kg/kWh figure for NCM622 could not be verified online and is used only as a magnitude check. Trade-press voltage for NFPP (about 3.0 V at 0.2C, 2.0-4.0 V window) is weaker evidence than the papers.",
		},
	],
	closing: {
		heading: "The coefficient is a mixing problem",
		body: "Ten thousand tonnes convert to about 7.3, 4.8 or 2.8 GWh of cells once the powder is named. The 1,600 t/GWh figure is the right number for the 5-series and 6-series market that produced it. For a tonnes-to-GWh conversion now, use the matching row, on a cell-level CAM basis, and replace the 96% yield if the plant in front of you is different.",
	},
	blocks: [
		{
			kind: "prose",
			paragraphs: [
				"The number still used in much English-language materials arithmetic is 1,600 tonnes of cathode per gigawatt-hour of cells. It described nickel-cobalt-manganese cells in 2021. It is not a physical constant. Lina, a Chinese cathode-materials writer, published a WeChat handbook on 15 August 2026 that reconstructs the coefficient from the listed-company disclosure that created it, then places eight commercial cathode powders on a single cell-level identity. After a 96% manufacturing-yield scenario, 10,000 tonnes of NCM811, a high-nickel ternary powder, make about 7.1 GWh of cells. The same mass of sodium iron pyrophosphate (NFPP), a polyanion sodium cathode, makes about 2.8 GWh. Generation-3 lithium iron phosphate, which accounted for the bulk of China's cathode shipments in 2025, sits in between at about 4.8 GWh.",
				"Against that LFP row the old coefficient understates cathode mass by about 31%. Against NCM811 it overstates it. Against NFPP, 1,600 t/GWh is only about 45% of the yield-adjusted 3,543 t/GWh. That is an understatement of roughly 55%. The conversion is determinate only once the powder is named, and only on one basis: cell-level cathode active material, with a stated voltage and a stated yield.",
				"This briefing is an English reading of that handbook. The identities, the worked NCM811 example, the official-order cross-checks and the caveats are Lina's. RENOZ has not re-measured the cells.",
			],
		},
		gwhPerTenKtChart,
		{
			kind: "prose",
			heading: "Where 1,600 tonnes per GWh came from",
			paragraphs: [
				"The round number has a dated source. On 13 September 2021, Dangsheng Technology, a listed Chinese ternary-cathode producer, answered an investor-platform question: about 1,500-1,800 tonnes of ternary cathode per gigawatt-hour of ternary lithium cells, not split by 523, 622 or 811. 1,600 sits inside that band. Through September-November 2021, as lithium-carbonate prices spiked, Dangsheng, Dynanonic (a listed LFP-cathode producer) and other listed materials companies were asked the same question in public. Industry media kept the round number and dropped the chemistry.",
				"A coincidence then made the figure look more universal than it was. On published parameters, NCM622 lands at about 1,600 t/GWh: a research compilation gives 1,616; another house estimate of 1.54 kg/kWh is about 1,540 t/GWh, which Lina could not verify online and treats only as a magnitude check. 2020-2022 was a 5-series and 6-series shipment market. The coefficient was checked, repeatedly, on the cells it described.",
				"A circulating claim that 1,600 is a rounding between NCM523's 1,638 t/GWh and generation-3 LFP's 2,016 t/GWh does not survive the arithmetic. 1,600 is below 1,638, so it is not in that interval. Lina sets the claim aside. The chemistry-layer 1,638 and 2,016 figures are useful; they are not the origin of the folklore.",
				"The hard evidence that the coefficient has travelled is in the mix. GGII, a Chinese battery-industry statistics house, put 2025 China cathode shipments at 5.025 million tonnes, up 50%. Lithium iron phosphate was about 3.89 million tonnes, 77.4% of the total and up 58%. Ternary was 830,000 tonnes, 16.5%. Inside ternary, 6-series still led; 8-series and 9-series lost share; 5-series fell quickly. The market that validated 1,600 t/GWh is not the market that now ships the powder.",
			],
		},
		{
			kind: "prose",
			heading: "Cell-level CAM, and the voltage that belongs with it",
			paragraphs: [
				"Every tonnes-per-GWh figure in the note is cell-level cathode active material: the powder that stores the alkali ion, excluding conductive additive, binder and current collector. That is also the shipment basis in listed-company reports and in the industry statistics. Mixing a materials-level voltage into a cell-level mass will understate tonnes per GWh in a systematic way.",
				"Voltage is full-cell working voltage against the anode the cell actually uses. For the lithium powders that is graphite: 3.7 V or 3.6 V for NCM, 3.2 V for LFP. For the sodium powders it is hard carbon: 3.0 V for NFPP, 3.0 V for NFM, 3.5 V for NFS. The table does not use the half-cell average potential versus lithium or sodium metal, which is higher. Half-cell reversible capacity is used for the engineering estimate; the gap between that number and the usable cathode capacity in a formed production cell is noted, and then left alone.",
			],
		},
		{
			kind: "prose",
			heading: "Practical capacity times average voltage",
			paragraphs: [
				"Tonnes of CAM per GWh = 1,000,000 ÷ (practical mAh/g × average volts). The product of those two terms is watt-hours per kilogram of active material. One gigawatt-hour is 10^9 watt-hours; divide by the specific energy and convert kilograms to tonnes. Inverted, gigawatt-hours from 10,000 tonnes = 0.01 × practical capacity × average voltage, before yield.",
				"This is a first-order identity. Strictly, practical capacity and average voltage should come from the same full cell, on the same discharge window, rate and temperature. Public data do not provide that pair. The note therefore takes reversible capacity from material half-cells (the usual paper and supplier number) and voltage from the full-cell working voltage of the matching anode. The combination is an engineering estimate. Read it as a range. It is not a claim to single-digit precision.",
				"NCM811, worked once. 200 mAh/g × 3.70 V = 740 Wh/kg. 10^9 Wh ÷ 740 Wh/kg = 1,351,000 kg, or 1,351 t/GWh, which is 7.4 GWh from 10,000 tonnes before any manufacturing yield. That 1,351 is the chemistry layer. It is not yet a factory number.",
				"Practical specific capacity is reversible capacity, below the stoichiometric ceiling. Theoretical capacity is C = nF / (3.6 × M), with F = 96,485 C/mol. The note's ceilings are 170 mAh/g for LFP, 278 for NCM523, 129 for NFPP, 240 for NFM and 121 for NFS. Practical capacity is that ceiling times a realised efficiency: about 73% for NCM811, about 91% for generation-3 LFP. First-cycle efficiency, state-of-charge window and rate all move the production-cell number relative to the half-cell. The chemistry layer takes the half-cell figure and does not deduct formation loss a second time.",
				"Average voltage is the capacity-weighted integral of the discharge curve, ∫V(Q) dQ / Q, not the plateau voltage and not the median. On a flat LFP curve the three almost coincide. On a sloping sodium curve they do not, and the integral is the quantity that belongs in the identity.",
			],
		},
		theoreticalTable,
		identityTable,
		{
			kind: "prose",
			heading: "Manufacturing yield is a scenario, not a measurement",
			paragraphs: [
				"The chemistry layer is an idealised cell. Between powder and a saleable cell sits coating, assembly, formation and grading, and the cells that are downgraded or scrapped. The note applies a yield of 96%, inside a 95-97% band, as a scenario. Tonnes per GWh are divided by that yield; gigawatt-hours from 10,000 tonnes are multiplied by it. It is not an industry standard, and the author asks the reader to replace it.",
				"Public yield figures cannot be averaged into one utilisation rate. Their denominators differ. Tesla has discussed 4680 dry-electrode yield above 90%. Mature chemistries are often quoted above 98% on a comprehensive basis. After formation, the share of cells below A-grade is sometimes put below 10%. A 20 GWh plant improving yield by three percentage points is a different object again. None of these is a measurement of CAM mass that survives into a GWh of graded cells, so none of them sets the 96% scenario.",
				"Formation and grading are the last screen before a cell is warehoused. Lina notes that they account for about 15% of lithium-battery equipment investment and about 40% of line energy, which is why end-of-line rejects are easy to undercount. Those rejects sit in the yield layer. They are not a second deduction from practical capacity.",
				"Each percentage point of yield moves tonnes per GWh by about 1%. At 95, 96, 97 and 98%, the chemistry-layer figure is scaled by 1.0526, 1.0417, 1.0309 and 1.0204. That is, divided by the yield.",
			],
		},
		yieldSensitivityTable,
		yieldTable,
		{
			kind: "prose",
			heading: "What the eight rows are saying",
			paragraphs: [
				"On the same 10,000 tonnes, 9-series NCM at 7.3 GWh is about 2.6 times NFPP at 2.8 GWh. Phosphate cathodes are systematically heavier per gigawatt-hour than ternary: generation-3 LFP at 2,100 t/GWh, NFPP at 3,543. That is voltage and capacity together, not a process gap between plants.",
				'Generation-3 and generation-4 LFP almost coincide (4.8 and 4.9 GWh). The LFP "generation" story in the Chinese cathode market is largely compaction density, not a 30% jump in CAM-mass efficiency. High-nickel NCM moves the other way, which is why 1,600 t/GWh is already high for 811 and 9-series.',
				"The 9-series voltage is taken conservatively at 3.60 V. Average voltage on Ni90 falls slightly as nickel rises; the literature range is 3.6-3.8 V, and ±0.1 V is about ±3% on the result. Practical capacity of 210 mAh/g is an estimate from an NCM90-Zr2 paper (215.5 mAh/g reversible at a 4.5 V cut-off), stepped down to a production window.",
				"NFS is sodium iron sulfate, Na2Fe2(SO4)3, the alluaudite structure first reported by Yamada in 2014. Full-cell voltage against hard carbon is about 3.5 V. The feedstocks are ferrous sulfate and sodium sulfate, chemical by-products. That is the point of the route: iron-based polyanion, high voltage, low materials cost. NFM is O3 NaNi1/3Fe1/3Mn1/3O2. Full-cell voltage is an engineering 3.0 V (2.9-3.1): Sigma-Aldrich's material-level 3.1 V less about 0.1 V for the hard-carbon anode. An MTI NFMO-plus-hard-carbon 7 Ah pouch, window 1.5-4.0 V, is cited as corroboration. NFPP's 3.0 V is a full-cell working voltage at 0.2C in a 2.0-4.0 V, 100% depth-of-discharge window, from trade press rather than a paper.",
				"None of that chemistry is the conversion. Phosphate powders are heavier per gigawatt-hour than the nickel-manganese-cobalt market that produced 1,600 t/GWh, and sodium powders are heavier still. Naming the powder is the conversion. Averaging them is how the folklore survives.",
			],
		},
		statusTable,
		{
			kind: "prose",
			heading: "Pack buffers and the N/P ratio do not belong in the chain",
			paragraphs: [
				"The kilowatt-hours on a vehicle window sticker are usually larger than the energy a driver is allowed to use, not smaller. In the sample Lina takes, Ford Mustang Mach-E, GM Bolt and Tesla, usable energy is 88.5-98.5% of nominal. Mach-E is the transparent case: 68 kWh usable on a 76.8 kWh pack, a 10-11% buffer, and Ford publishes the usable number. Bolt is 65 / 66 kWh, a 1.5% buffer. Tesla is about 4.5%. Pack-level usable energy is a depth-of-discharge window. It does not change how much cathode powder went into a gigawatt-hour of cells.",
				"The N/P ratio is not a multiplier on this identity. It is anode capacity over cathode capacity, typically 1.05-1.2. It is set by anode thickness at a fixed anode compaction. Kim et al. (Electrochimica Acta, 2015) hold compaction density and move thickness from 124 to 135 to 146 micrometres to obtain N/P of 1.10, 1.20 and 1.30; the cathode side does not move. In a first-order model that already fixes usable cathode capacity, N/P is not an independent factor. In a real cell it still matters, indirectly, through first-cycle efficiency and the state-of-charge window.",
			],
		},
		{
			kind: "prose",
			heading: "Official figures as a magnitude check",
			paragraphs: [
				"Listed-company replies are treated as an order-of-magnitude check on the two-layer identity, not as a calibration. None of the disclosures states whether manufacturing loss sits inside the tonnes-per-GWh number. Five such figures sit in the same band as the back-calculations. Numerical differences of 0.6-4.8% are inside the estimate's claimed precision and are not treated as a test of it.",
				"Dangsheng's 1,500-1,800 t/GWh band covers the yield-adjusted 523 and 622 back-calculations (1,706 and about 1,683). The 622 back-calculation is 172 mAh/g × 3.6 V, 1,616 t/GWh before yield, 1,616 ÷ 0.96 ≈ 1,683 after, and is the same identity as the 1,616 compilation figure. Dynanonic's LFP range of 2,200-2,500 t/GWh is 4.8% above generation-3 at the floor and 19% above at the ceiling. Lina reads the ceiling as a possible allowance for specific-capacity shrinkage. Xiangtan Electrochemical's LFP reply is compared with the uncorrected 2,016 t/GWh and then set aside: Xiangtan's main business is graphite electrodes, not LFP, and the LFP name in that group is the associate Hunan Yuneng, a large LFP-cathode supplier.",
				"No listed-company reply in the set uses a single 1,600. The two-layer identity and the official-order figures are the same kind of object: cell-level cathode consumption per gigawatt-hour of cells, with an unstated attitude to yield.",
			],
		},
		officialCheckTable,
		{ kind: "sources" },
	],
};
