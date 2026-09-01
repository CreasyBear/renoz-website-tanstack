import { AUD_PER_CNY, audFromCny, audPerTonne, FX_NOTE } from "../insight-fx";
import type {
	Insight,
	InsightBarChartBlock,
	InsightTableBlock,
} from "../insight-types";

const LFP_SLUG = "china-lfp-price-signal-august-2026";
const SDIC_SLUG = "sdic-china-lithium-supply-demand-2026";
const SOURCE_URL = "https://mp.weixin.qq.com/s/pkxEdoO1YtBfebguFtVvXw";

const cycleTable: InsightTableBlock = {
	kind: "table",
	title: "Three China lithium-materials cycles",
	columns: [
		"Episode",
		"Window",
		"Battery-grade lithium carbonate",
		"What broke the last price",
	],
	rows: [
		[
			"First cycle",
			"2015-2019",
			`50,000 → 170,000 → 40,000 CNY/t (${audPerTonne(50_000)} → ${audPerTonne(170_000)} → ${audPerTonne(40_000)}; −76% from the peak)`,
			"NEV subsidy phase-down plus Australian mine releases, including Greenbushes, after the March 2015 Atacama flood had tightened brine supply.",
		],
		[
			"Supercycle",
			"2020-2022",
			`40,000 (August 2020) → 600,000 CNY/t (${audPerTonne(40_000)} → ${audPerTonne(600_000)}; +1,400%)`,
			"NEV demand jumped while the previous capex drought, then Covid delays, left mines and brines short.",
		],
		[
			"Bear market",
			"2023 - H1 2025",
			`600,000 → 60,000 CNY/t by mid-2025 (${audPerTonne(600_000)} → ${audPerTonne(60_000)}; −90%)`,
			"Cell plans of 1.2 TWh against 294.6 GWh installed in 2022; 156 midstream expansion projects; Chinese lepidolite and African mine tonnes arriving together.",
		],
		[
			"Third cycle, so far",
			"H2 2025 -",
			`73,000 → ~120,000 in 2025; 200,000 in May 2026; ~145,000 after (${audPerTonne(73_000)} → ${audPerTonne(200_000)} → ${audPerTonne(145_000)})`,
			"Association discipline, cancelled expansions, and storage demand. Not yet a test of whether midstream can hold price once supply catches up.",
		],
	],
	note: `${FX_NOTE} Waypoints as compiled by Twenty-Four Tide. They are not a monthly index.`,
};

const h1ProfitTable: InsightTableBlock = {
	kind: "table",
	title: "Selected H1 2026 profit pre-announcements",
	columns: [
		"Who",
		"What they are",
		"H1 2026 net profit",
		"What the number is doing",
	],
	rows: [
		[
			"Eleven listed materials names",
			"Lithium salts, ternary precursors, cathode, anode, separator, electrolyte, not cell makers",
			`${audFromCny(21.4e9)}-${audFromCny(24.2e9)} (CNY 21.4-24.2 billion)`,
			"+295% to +348%. Forecast bands, not audited results.",
		],
		[
			"Ganfeng Lithium",
			"Integrated miner and lithium-chemical converter; led the eleven-name tally on yuan profit",
			`${audFromCny(3.65e9)}-${audFromCny(4.6e9)} (CNY 3.65-4.60 billion)`,
			"Largest profit inside that materials set.",
		],
		[
			"Tianqi Lithium",
			"Converter with a large Greenbushes exposure; led the same set on growth, not on yuan profit",
			"Yuan profit not given",
			"+3,276% to +4,935% from a loss-making base. A growth ranking, not a size ranking.",
		],
		[
			"Qinghai Salt Lake",
			"Salt-lake industrial group (potash plus lithium); cited separately from the eleven-name tally",
			`${audFromCny(6.0e9)}-${audFromCny(6.3e9)} (CNY 6.0-6.3 billion)`,
			"+1.31× to +1.43×. Headline profit is larger than Ganfeng's; it is not a like-for-like materials print.",
		],
		[
			"Yahua Group",
			"Lithium-chemical converter; cited as a per-tonne margin beneficiary, not as a cell maker",
			`${audFromCny(1.1e9)}-${audFromCny(1.3e9)} (CNY 1.1-1.3 billion)`,
			"+7.1× to +8.57×. That is a trough-to-bounce multiple, not a new franchise.",
		],
	],
	note: `${FX_NOTE} Ranges are the companies' own forecast bands.`,
};

const pricePathTable: InsightTableBlock = {
	kind: "table",
	title: "How the 2025-26 price path travelled, by material",
	columns: ["Material", "What it is", "Path in the note", "AUD scale"],
	rows: [
		[
			"Battery-grade lithium carbonate",
			"The refined lithium salt that sets the rest of the chain",
			"73,000 → ~120,000 in 2025; 119,000 to 152,500 in January 2026; 200,000 in May; ~145,000 after",
			`${audPerTonne(73_000)} trough to ${audPerTonne(200_000)} May high, then ${audPerTonne(145_000)}`,
		],
		[
			"Lithium hexafluorophosphate (LiPF6)",
			"The fluorine salt dissolved in electrolyte; costed off carbonate",
			"51,700 in H1 2025; 180,000 end-2025; 165,000 start-2026; 96,000 end-April; ~110,000 when written",
			`About ${audPerTonne(51_700)} trough to ${audPerTonne(180_000)} high, holding near ${audPerTonne(110_000)}`,
		],
		[
			"Electrolyte",
			"Solvent plus LiPF6; sold as ternary-power or LFP grades",
			"2025 low 10,000-20,000; later ~32,000 ternary-power and ~31,000 LFP-type",
			`From about ${audPerTonne(15_000)} at the low to about ${audPerTonne(32_000)}`,
		],
		[
			"LFP cathode powder",
			"Carbonate plus iron-phosphate processing; not a finished pack",
			"Period low 45,000; period high 66,000",
			`${audPerTonne(45_000)} to ${audPerTonne(66_000)}`,
		],
		[
			"Separator film",
			"Polyethylene (wet) or polypropylene (dry), priced per square metre",
			"H1 2026: dry-process ~0.7 CNY/m²; wet-process ~1.1 CNY/m²",
			`About A$${(0.7 * AUD_PER_CNY).toFixed(2)}/m² dry; A$${(1.1 * AUD_PER_CNY).toFixed(2)}/m² wet`,
		],
	],
	note: `${FX_NOTE} A machine reading of the WeChat page as "million yuan per square metre" is a unit error. When carbonate was 200,000 CNY/t, the note puts LiPF6 cash cost at about 100,000 CNY/t (${audPerTonne(100_000)}).`,
};

const cancelledCapexTable: InsightTableBlock = {
	kind: "table",
	title: "Materials expansions terminated or suspended since August 2025",
	columns: ["Company", "What they make", "Project", "Scale"],
	rows: [
		[
			"Eight projects (incomplete tally)",
			"Across materials",
			"Terminated or suspended",
			`${audFromCny(29.53e9)} of planned investment (CNY 29.53 billion)`,
		],
		[
			"Shenzhen Senior Technology",
			"Wet-process separator film (listed as Enjie)",
			"Malaysia separator line",
			`About ${audFromCny(2e9)} (CNY 2 billion)`,
		],
		[
			"Dynanonic",
			"LFP cathode powder",
			"Qujing and Huize plants",
			`440,000 t/y; about ${audFromCny(10e9)} (CNY 10 billion)`,
		],
		[
			"Hunan Zhongke Electric",
			"Graphite anode",
			"Three anode projects",
			`330,000 t/y; ${audFromCny(10.3e9)} (CNY 10.3 billion)`,
		],
		[
			"Yongtai Tech",
			"Electrolyte",
			"Shaowu plant",
			`200,000 t; ${audFromCny(0.95e9)} (CNY 950 million)`,
		],
	],
	note: "2025 added almost no large new materials capacity. Inefficient plants were also leaving on cost, environmental compliance and energy-intensity.",
};

const putailaiTable: InsightTableBlock = {
	kind: "table",
	title: "Putailai's 2026 additions, expanding while others cancelled",
	columns: ["Date", "Project", "Investment"],
	rows: [
		[
			"March 2026",
			"Malaysia anode, 50,000 t (graphite, not a cell plant)",
			`About ${audFromCny(2.051e9)} (CNY 2.051 billion)`,
		],
		[
			"May 2026, Sichuan separator phase 1",
			"3.2 billion m² of film",
			`${audFromCny(2.6e9)} (CNY 2.6 billion)`,
		],
		[
			"May 2026, Sichuan separator phase 2",
			"4.0 billion m² of film",
			`${audFromCny(3.0e9)} (CNY 3.0 billion)`,
		],
	],
	note: `The two separator phases are one 7.2 billion m² plan, ${audFromCny(5.6e9)} (CNY 5.6 billion) in total. Putailai (603659.SH) makes anode materials and separator film, which are midstream products, not cells. Twenty-Four Tide flags it as the named exception to 2025 self-discipline.`,
};

const profitShiftTable: InsightTableBlock = {
	kind: "table",
	title: "Where chain profit sat, midstream materials vs cell makers",
	columns: [
		"Period",
		"Midstream materials net profit",
		"Share of the chain",
		"Cell-maker net profit",
	],
	rows: [
		[
			"H1 2022",
			`${audFromCny(31.167e9)} (CNY 31.167 billion)`,
			"About 90%",
			"Not given",
		],
		[
			"H1 2025",
			`${audFromCny(4.941e9)} (CNY 4.941 billion)`,
			"About 10%",
			`${audFromCny(36.51e9)} (CNY 36.51 billion; 76.9% of the chain)`,
		],
	],
	note: `${FX_NOTE} Twenty-Four Tide uses Shenwan Hongyuan's "battery chemicals" industry tag for midstream materials (cathode, anode, electrolyte, separator), not the mines. The 2022 cell-maker total is not in the note.`,
};

const storageTable: InsightTableBlock = {
	kind: "table",
	title: "Storage-cell capacity versus the demand the note cites",
	columns: ["Source in the note", "What it actually counts", "Figure"],
	rows: [
		[
			"Beijing Institute of Green Finance, 2014-2025",
			"Primary-market financings of Chinese storage companies, not installed GWh",
			`3,557 events; about ${audFromCny(325.1e9)} disclosed (CNY 325.1 billion)`,
		],
		[
			"Energy Storage Toutiao, 2025",
			"New or SOE-funded storage entities; registered capital, not revenue",
			`392 entities; registered capital above ${audFromCny(50e9)} (CNY 50 billion)`,
		],
		[
			"Twenty-Four Tide",
			'Private "unicorn" valuations, combined, not a capacity figure',
			`About 23 firms; valuations above ${audFromCny(500e9)} (CNY 500 billion)`,
		],
		[
			"China Investment Industry Research Institute, 2025",
			"Planned domestic storage-battery capacity versus a global demand estimate",
			"Above 1 TWh planned in China, against global 2026 demand of about 450 GWh",
		],
		[
			"GGII, H1 2026",
			"Chinese storage projects started, not cells already in the field",
			`Nearly 20 projects; planned capacity above 500 GWh; investment above ${audFromCny(47e9)} (CNY 47 billion, +110% yoy)`,
		],
		[
			"Zhongyuan Securities",
			"2026 new storage lithium-ion capacity, then year-end domestic stock",
			"New capacity above 500 GWh; domestic stock above 1,200 GWh by end-2026",
		],
	],
	note: "Planned capacity, financed capacity and demand are different objects. The 1 TWh / 450 GWh pairing is China plans against a global demand figure, not a China-only balance. Zhongyuan names Chuneng New Energy, CATL, Hithium, Envision, EVE Energy, REPT Battero and CALB among the 2026 additions.",
};

const profitShareChart: InsightBarChartBlock = {
	kind: "chart",
	chart: "bars",
	title: "Midstream materials' share of chain profit",
	unit: "%",
	bars: [
		{ label: "H1 2022", value: 90 },
		{ label: "H1 2025", value: 10 },
	],
	note: 'Shenwan "battery chemicals" net profit as a share of the chain. The 2022 figure is "nearly 90%"; the 2025 figure is "about one-tenth". That is the structure the 2026 bounce has not reversed.',
};

const storageChart: InsightBarChartBlock = {
	kind: "chart",
	chart: "bars",
	title: "Storage-battery capacity plans versus cited 2026 demand",
	unit: "GWh",
	bars: [
		{ label: "China planned capacity, 2025", value: 1000 },
		{ label: "Global demand, 2026E", value: 450 },
	],
	note: "China Investment Industry Research Institute via Twenty-Four Tide. The 1 TWh planned figure is 1,000 GWh. Demand is a global estimate. The comparison is mixed on purpose: it is the note's warning, not a closed China balance sheet.",
};

export const insight: Insight = {
	slug: "china-lithium-materials-third-cycle",
	title: "China lithium-battery materials: the third cycle",
	description:
		"Eleven listed materials companies guided to CNY 21.4-24.2 billion of H1 2026 profit, about A$4.5-5.1 billion, up 295-348%. That is a carbonate-price bounce. It is not evidence that midstream recaptured pricing power from the cell makers.",
	eyebrow: "Cycle note · Twenty-Four Tide",
	published: "2026-08-27",
	updated: "2026-08-27",
	readTime: "16 min",
	about: [
		"China lithium battery materials cycle",
		"Lithium carbonate price cycle",
		"CATL materials pricing power",
		"China energy storage capacity",
		"China battery materials",
	],
	relatedSlugs: [LFP_SLUG, SDIC_SLUG],
	keyFigures: [
		{
			label: "Eleven materials names, H1 2026",
			value: "4.5-5.1",
			unit: "bn AUD",
			change: "CNY 21.4-24.2 billion, +295% to +348%",
			source: "Twenty-Four Tide tally of listed-company forecasts",
		},
		{
			label: "Midstream share of chain profit",
			value: "10",
			unit: "% in H1 2025",
			change: "About 90% in H1 2022",
			source: "Shenwan battery-chemicals tag, via Twenty-Four Tide",
		},
		{
			label: "China share of battery materials",
			value: ">90",
			unit: "% of world output",
			change: "The argument is domestic structure, not import substitution",
			source: "Twenty-Four Tide",
		},
	],
	sources: [
		{
			publisher: "Twenty-Four Tide",
			title: "A new global cycle of lithium-battery-materials competition",
			published: "2026-08-27",
			accessed: "2026-08-27",
			url: SOURCE_URL,
			note: `WeChat cycle note from the Twenty-Four Tide Industry Research Institute (TTIR). The accessible snapshot did not yield a reliable WeChat timestamp; dates and figures are those stated in the article. Profit numbers are listed-company forecast bands, not audited H1 results. ${FX_NOTE} Secondary tallies inside the piece include GGII, Zhongyuan Securities, the China Investment Industry Research Institute, the Beijing Institute of Green Finance and Sustainable Development, and Energy Storage Toutiao.`,
		},
	],
	closing: {
		heading: "A bounce is not pricing power",
		body: "The first-half profit recovery is what a carbonate rebound looks like when it leaks into hexafluorophosphate, electrolyte, LFP powder and separator film. The 2022-25 reallocation of chain profit toward cell makers is the structure that rebound has not changed. Storage demand can extend the upswing. The same storage-cell pipeline can also rebuild the overhang that ended the last one.",
	},
	blocks: [
		{
			kind: "prose",
			paragraphs: [
				"The first-half 2026 numbers look like a boom if you read only the percentages. Twenty-Four Tide, a Chinese industry desk, toted up eleven listed materials companies: lithium salts, ternary precursors, cathode and anode powders, separator film and electrolyte, not the cell makers. It got combined net-profit guidance of CNY 21.4-24.2 billion, about A$4.5-5.1 billion, up 295-348% year on year. That is a forecast-band tally, not an audited universe. China already makes more than 90% of the world's battery materials. The interesting claim in the note is not that share. It is that a half-year of rising prices is being mistaken for a change in who captures the profit.",
				"Two lithium names dominate the telling, and they are doing different jobs. Ganfeng Lithium is an integrated miner and converter; it led the eleven-name set on yuan profit, at CNY 3.65-4.60 billion (about A$770-970 million). Tianqi Lithium, the converter with a large stake in Greenbushes in Western Australia, led the same set on growth, plus 3,276% to 4,935%, because it was coming off a loss. The note does not give Tianqi's yuan profit. Qinghai Salt Lake, a potash-and-lithium industrial group cited separately, guided to CNY 6.0-6.3 billion (about A$1.3 billion), which is larger than Ganfeng's print and is not proof that Ganfeng is the largest lithium company in China. Yahua, a converter, guided to CNY 1.1-1.3 billion (about A$230-270 million), seven to eight times the year before: a trough multiple, not a new franchise.",
				"Listed lithium-battery revenue had already turned in 2025: first-half sales were up about 15% after a 20% decline a year earlier. That is the start of a cycle bounce. It is not, by itself, evidence that midstream plants recaptured pricing power from CATL and the other cell makers. This briefing is an English reading of that argument. RENOZ has not re-audited the filings.",
			],
		},
		profitShareChart,
		{
			kind: "prose",
			heading: "The bounce is a carbonate bounce",
			paragraphs: [
				"Every processing margin in the note moves after lithium carbonate moves. In 2025 the refined salt, the product that actually goes into cathode plants, traced a U: a low near 73,000 CNY/t (about A$15,000/t), then a rebound to about 120,000 (about A$25,000/t). January 2026 added 28% in a month, from 119,000 to 152,500. A Zimbabwe concentrate-export ban and Jiangxi lepidolite licence renewals, supply scares, not a demand census, then took the print to 200,000 CNY/t in May, about A$42,000/t, before it settled around 145,000 (about A$30,000/t). That is the price that pays the converters. It is also the price that, a year earlier, had been 60,000.",
				"Hexafluorophosphate is the next rung, not a separate boom. It is the fluorine salt dissolved in battery electrolyte, and its cash cost is mostly carbonate plus fluorine processing. The note puts that cost near 100,000 CNY/t (about A$21,000/t) when carbonate was 200,000. LiPF6 itself ran from 51,700 CNY/t in the first half of 2025 (about A$11,000/t) to 180,000 by year-end, then back to about 110,000 (about A$23,000/t) when the note was written. At that level Do-Fluoride and Tinci, two listed LiPF6 and electrolyte names, are described as having left the trough because the salt is in the money, not because they acquired pricing power over CATL. Electrolyte is mostly solvent plus that salt: a mid-price of about 32,000 CNY/t for ternary-power grade and 31,000 for LFP-type, more than 50% above the 2025 low, then a plateau.",
				'LFP cathode powder is the same story one step further downstream: carbonate plus iron-phosphate processing, between 45,000 and 66,000 CNY/t (about A$9,500 to A$14,000/t) in the period covered. Separator film is the exception that proves the mechanism. It contains no lithium. It is polyethylene or polypropylene, sold by the square metre, and it firmed because wet-process lines take about eighteen months to build, not because carbonate rose. Senior Technology (Enjie) and Sinoma Science are separator companies. A mine can be restarted faster than a wet-process line can be commissioned. That is a different tightness from a salt shortage, and it should not be folded into one "materials boom."',
			],
		},
		h1ProfitTable,
		pricePathTable,
		{
			kind: "prose",
			heading: "2015-2019: subsidy, flood, Greenbushes",
			paragraphs: [
				"Twenty-Four Tide's use of the 2026 bounce is to ask how long it can last. The last decade gives a blunt answer: lithium-materials cycles are violent because the supply response is slow on the way up and indiscriminate on the way down. The first cycle, 2015-2019, was a policy impulse meeting a physical accident. China put a subsidy architecture under new-energy vehicles; demand came off a standing start; carbonate rose from 50,000 CNY/t to 170,000 (about A$11,000/t to A$36,000/t at today's rate), a 240% move. In March 2015 Chile's Atacama salt lake flooded. Brine tonnes that the market had been counting on did not arrive.",
				"The unwind was Australian. By 2017 the subsidy was being phased down just as new mine capacity arrived together, in particular the expansion at Greenbushes, in Western Australia, the hard-rock deposit that still sits behind a large share of seaborne spodumene. Inventories built. Carbonate fell from 170,000 CNY/t to 40,000 by the end of 2019 (about A$8,400/t), a 76% decline. The template is already visible: a demand impulse, a supply scare, a capex response, a glut. Greenbushes is not a cameo. It is the reason a Perth reader already lives inside this cycle.",
			],
		},
		{
			kind: "prose",
			heading: "2020-2022: a starved supply base",
			paragraphs: [
				"August 2020 was the cycle low, at 40,000 CNY/t (about A$8,400/t). The next two years produced a 1,400% rise to 600,000 (about A$126,000/t). That is the move the note calls rare in any bulk commodity, and the arithmetic is ordinary: Chinese NEV sales were 3.52 million in 2021 and 6.89 million in 2022, eleven times and twenty-one times the 2015 level, arriving on a supply base that the previous crash had starved of capital and that Covid then delayed. The mismatch was the entire story. Demand did not have to be infinite. Supply only had to be late.",
				"The surplus accrued upstream. LiPF6 went from 70,000 CNY/t in 2020 to nearly 600,000 at the start of 2022. Tianqi reported CNY 24.1 billion of net profit that year (about A$5.1 billion), an eleven-fold rise, on an 85% gross margin. Hunan Yuneng, then as now a large LFP cathode supplier, saw revenue rise six-fold and profit three-fold. A womenswear issuer, Nikbo Fashion, entered the trade and renamed itself Puyuan Materials. That is not a curiosity. It is what late cycle capital looks like when the margin is sitting in the mine and the salt plant rather than in the cell.",
			],
		},
		{
			kind: "prose",
			heading: "2023 to mid-2025: planned tonnes, not a demand collapse",
			paragraphs: [
				"The crash did not require electric-vehicle sales to fall. It required planned capacity to arrive faster than sales were still growing. The Ministry of Industry and Information Technology's incomplete 2022 count was more than forty cell projects, more than 1.2 TWh of capacity, CNY 430 billion of investment (about A$90 billion). Domestic planned cell capacity that year was more than four times 2022 installations of 294.6 GWh. Midstream, 156 expansion projects across cathode, anode, separator and electrolyte carried more than CNY 500 billion of planned investment (about A$105 billion). Chinese lepidolite and African mines then arrived together. NEV sales growth slowed from above 50% to around 40%, still growth. Cell makers, the note says, still wanted the incremental share, so capacity overshot on the way down as well as on the way up.",
				"Battery-grade lithium carbonate fell from 600,000 CNY/t to 60,000 by mid-2025 (about A$126,000/t to A$13,000/t), a 90% decline. LFP cathode powder fell from 173,000 CNY/t to 34,000 (about A$36,000/t to A$7,100/t), −80.2%. The note puts the industry in loss for more than thirty-six consecutive months. Electrolyte nameplate reached 3.5 million tonnes against demand of 1.2 million; global utilisation was below 40%. Tianqi lost nearly CNY 8 billion in 2024 (about A$1.7 billion). Dynanonic, the LFP cathode name, lost money in each year from 2023. Tinci's net profit shrank from CNY 5.7 billion in 2022 (about A$1.2 billion) to less than 500 million in 2024 (about A$110 million). The 2026 bounce is a recovery from that compression. Percentage rises from those bases will look heroic. They are supposed to.",
			],
		},
		cycleTable,
		{
			kind: "prose",
			heading: "What has actually tightened",
			paragraphs: [
				"From the second half of 2025 the note dates a third cycle, and it does not attribute the tightness only to storage demand. The visible half is cancelled capex and association discipline: a coordinated attempt to stop selling film, powder and salt at cash cost. In June 2025 the China Battery Industry Association and the plastics-processing association asked members to compete on quality rather than price. In August the lithium branch of the Nonferrous Metals Industry Association warned against ruinous competition. Separator producers agreed to slower release of output and a pause in inefficient expansion. In January 2026 four central agencies, industry, planning, market regulation and energy, held a session on competitive order in traction and storage cells. That is an administered pause, not a merger wave.",
				"The cancellations give the pause a tonne count. Since August 2025, on an incomplete tally, at least eight large materials expansions have been stopped, covering CNY 29.53 billion of planned investment (about A$6.2 billion). Senior Technology cancelled a Malaysian separator line of about CNY 2 billion (about A$420 million). Dynanonic cancelled LFP cathode plants at Qujing and Huize, 440,000 tonnes a year, about CNY 10 billion (about A$2.1 billion). Zhongke Electric halted three graphite-anode projects, 330,000 tonnes a year, CNY 10.3 billion (about A$2.2 billion). Yongtai cancelled a 200,000-tonne electrolyte line at Shaowu, CNY 950 million (about A$200 million). Tail plants also left on cost, environmental compliance and energy-intensity. Effective supply is tighter. The industry is not more concentrated. The next profitable quarter can restart the same race.",
			],
		},
		cancelledCapexTable,
		{
			kind: "prose",
			heading: "Profit moved downstream, and stayed there",
			paragraphs: [
				"A materials plant buys from mines and sells to cell makers. In a squeeze it has no end to push. Twenty-Four Tide's structural exhibit is a Shenwan Hongyuan industry tag, \"battery chemicals,\" meaning midstream materials, not the mines. In the first half of 2022 that tag booked CNY 31.167 billion of net profit (about A$6.5 billion) and about 90% of the chain. By the first half of 2025 the same tag was down to CNY 4.941 billion (about A$1.0 billion), about a tenth. Cell makers booked CNY 36.51 billion (about A$7.7 billion), 76.9%. The 2026 materials bounce is a recovery from that compression. It is not, in the note's reading, a reversal of who sits in the middle.",
				"CATL is the reason the split is sticky. Its 2025 net profit was CNY 72.2 billion (about A$15.2 billion), more than thirteen A-share automakers combined. The note puts the cell sector at about 90% of new-energy-industry profit, and that 90% as concentrated: CATL at 40% of global traction cells and 30.4% of 2025 storage-cell shipments, a fifth consecutive year at the top of storage. A purchasing decision there sets the materials price. Midstream leaders are generally below 30% share. Hunan Yuneng, a CATL cathode supplier, is cited at 28.2% globally, large for a powder plant, still a supplier. In the first half of 2026 CATL's gross margin is given as 24%; Ronbay, which sells high-nickel cathode into that system, below 10%. That gap is the oligopoly. It does not close because carbonate had a good May.",
				"Capacity constraint and a demand surprise can still make a materials year. Once supply and demand rebalance, the same plants are squeezed from both ends. That is the claim H1 2026 has not yet been asked to answer.",
			],
		},
		profitShiftTable,
		{
			kind: "prose",
			heading: "Storage is the swing factor, and it is being built twice",
			paragraphs: [
				"The optimistic reading is limited new materials capacity, traction and storage both pulling, a tighter balance. The note's reservation is that midstream is still scattered, so private expansions restart as soon as profits look real. Putailai is the named case because it makes the two midstream products, graphite anode and separator film, that the rest of the industry had just agreed to stop overbuilding. In March 2026 it planned about CNY 2.051 billion (about A$430 million) for a 50,000-tonne anode plant in Malaysia. In May it announced CNY 5.6 billion (about A$1.2 billion) for 7.2 billion square metres of separator capacity in Sichuan. Self-discipline is not a capacity cap. It is a gentlemen's agreement in a fragmented industry.",
				'Storage demand is the other half of the 2026 bounce, and it is being financed as if the constraint will last. From 2014 to 2025 China\'s primary market recorded 3,557 storage financings and about CNY 325.1 billion of disclosed proceeds (about A$68 billion). In 2025, central state-owned enterprises set up or funded 392 storage-related firms with registered capital above CNY 50 billion (about A$11 billion). About twenty-three storage "unicorns" are given a combined valuation above CNY 500 billion (about A$105 billion). Those are claims on future cells, not cells. China Investment Industry Research Institute put 2025 planned domestic storage-battery capacity above 1 TWh, against a global 2026 demand figure of about 450 GWh. The comparison mixes a China plan with a world demand number. That is the tell, not a slip: if even part of the pipeline is built, the materials upswing is co-financing the next glut in the product the upswing is counting on.',
				"GGII counted nearly twenty Chinese storage projects in the first half of 2026, more than 500 GWh of planned capacity and more than CNY 47 billion of investment (about A$9.9 billion), up 110% year on year. Zhongyuan Securities expects more than 500 GWh of new storage lithium-ion capacity in 2026 and more than 1,200 GWh of domestic stock by year-end, naming Chuneng, CATL, Hithium, Envision, EVE, REPT and CALB. Planned tonnes, financed tonnes and demand tonnes are different objects. Treating them as one number is how the last cycle was sold.",
			],
		},
		putailaiTable,
		storageChart,
		storageTable,
		{ kind: "sources" },
	],
};
