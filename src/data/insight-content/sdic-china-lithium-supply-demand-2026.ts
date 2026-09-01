import type {
	Insight,
	InsightLineChartBlock,
	InsightTableBlock,
} from "../insight-types";
import { sdicForecastTables } from "../insights-sdic";

const LFP_SLUG = "china-lfp-price-signal-august-2026";
const balanceTableSource = sdicForecastTables.find((table) =>
	table.title.includes("supply-demand balance"),
);

if (!balanceTableSource) {
	throw new Error("SDIC supply-demand balance table is missing");
}

const SDIC_URL = balanceTableSource.sourceUrl;

function formatSdicCell(cell: string): string {
	if (cell === "-" || cell.includes("%")) return cell;
	const wrapped = cell.startsWith("(") && cell.endsWith(")");
	const raw = wrapped ? cell.slice(1, -1) : cell;
	const n = Number(raw);
	if (!Number.isFinite(n)) return cell;
	const formatted = n.toLocaleString("en-AU");
	return wrapped ? `(${formatted})` : formatted;
}

const supplyDemandLineChart: InsightLineChartBlock = {
	kind: "chart",
	chart: "line",
	title: "China lithium-carbonate supply vs demand",
	xLabels: ["2023", "2024", "2025", "2026E"],
	series: [
		{
			label: "Supply",
			color: "#64748b",
			values: [609_251, 906_637, 1_208_104, 1_724_818],
		},
		{
			label: "Demand",
			color: "#16a34a",
			values: [585_762, 845_780, 1_229_684, 1_771_600],
		},
	],
	unit: "t",
	note: "SDIC Securities Research forecast, 12 August 2026. 2023-2025 are the report's historical series; 2026E is an estimate, not an observed outcome. The 2026 gap is 46,782 tonnes, about 2.6% of that year's demand. Note: SDIC's printed balance column does not exactly equal supply minus demand for 2023-2025 (23,487 vs 23,489; 61,149 vs 60,857; 21,581 vs 21,580). We do not smooth these discrepancies: the report's own numbers disagree at the single-tonne level.",
};

const balanceTable: InsightTableBlock = {
	kind: "table",
	title: "China lithium-carbonate supply-demand balance",
	columns: balanceTableSource.columns,
	rows: balanceTableSource.rows.map((row) => [
		row.label,
		...row.cells.map(formatSdicCell),
	]),
	note: `Source: ${balanceTableSource.publisher}. ${balanceTableSource.sourceNote ?? ""} 2026E supply is production plus imports minus exports (1,393,781 + 336,022 - 4,985 = 1,724,818). Demand for 2030E and 2035E is given; supply is not. The note stops balancing after 2026.`.trim(),
};

const discrepancyTable: InsightTableBlock = {
	kind: "table",
	title: "2026 storage-battery lithium-carbonate demand: internal discrepancy",
	columns: ["Place in the SDIC note", "As printed", "In tonnes"],
	rows: [
		["Table 9 (Chinese 10,000-tonne unit)", "52.5 × 10,000 t", "525,000"],
		[
			"Same table, from the 0.7 kg/kWh identity",
			"750 GWh × 0.7 kg/kWh",
			"525,000",
		],
		["Capacity-coverage discussion", "-", "528,500"],
	],
	note: "Both 525,000 and 528,500 appear in the 12 August 2026 SDIC Securities note. RENOZ does not choose one. The 3,500-tonne gap is 0.7% of the table-9 line, and it sits on a line that feeds the 2026 balance.",
};

const identityTable: InsightTableBlock = {
	kind: "table",
	title: "How table 9 reaches 525,000 tonnes",
	columns: ["Step", "Figure"],
	rows: [
		["2026E storage-cell capacity growth", "750 GWh"],
		["SDIC's stated conversion ratio", "0.7 kg lithium carbonate per kWh"],
		["750 GWh × 0.7 kg/kWh", "525,000 t"],
		["Table 9 as printed (10,000-tonne units)", "52.5 × 10,000 t = 525,000 t"],
	],
	note: "The 0.7 kg/kWh ratio is SDIC's, attributed to a 2024-2035 lithium supply-demand paper the note cites. It is not a RENOZ cell design. 528,500 tonnes would be about 755 GWh at the same ratio, or 0.705 kg/kWh on 750 GWh. The report does not say which.",
};

export const insight: Insight = {
	slug: "sdic-china-lithium-supply-demand-2026",
	title: "SDIC’s 2026 China lithium supply–demand note",
	description:
		"SDIC Securities, a mainland broker, forecasts 2026 China lithium-carbonate supply at 1.72 Mt and demand at 1.77 Mt. The 46,782-tonne shortfall is about 2.6% of that demand. The same note disagrees with itself on the storage line that feeds the balance.",
	eyebrow: "Broker note · SDIC Securities",
	published: "2026-08-14",
	updated: "2026-08-27",
	readTime: "8 min",
	about: [
		"China lithium supply demand",
		"Lithium carbonate forecast",
		"SDIC Securities",
		"China battery materials",
	],
	relatedSlugs: [LFP_SLUG],
	keyFigures: [
		{
			label: "2026E supply-demand balance",
			value: "(46,782)",
			unit: "t",
			change: "About 2.6% of 2026E demand; 21,581 t deficit in 2025",
			source: "SDIC Securities, 12 August 2026",
		},
		{
			label: "2026E China lithium-carbonate demand",
			value: "1,771,600",
			unit: "t",
			change: "+44.07% year on year, forecast",
			source: "SDIC Securities, 12 August 2026",
		},
		{
			label: "2026E China lithium-carbonate supply",
			value: "1,724,818",
			unit: "t",
			change: "production + imports - exports; forecast",
			source: "SDIC Securities, 12 August 2026",
		},
	],
	sources: [
		{
			publisher: "SDIC Securities",
			title: "Lithium-market report, 12 August 2026",
			published: "2026-08-12",
			accessed: "2026-08-14",
			url: SDIC_URL,
			note: "Chinese-language WeChat-hosted broker note from SDIC Securities, the research arm of China State Development & Investment Corporation, a central state-owned investment group. Supply, demand, and balance figures are SDIC forecasts unless labelled as history. The note is not a ministry census and not a price.",
		},
	],
	closing: {
		heading: "A 2.6% gap is a forecast, not a squeeze",
		body: "The 46,782-tonne shortfall is SDIC's arithmetic on SDIC's estimates, on a 1.77-million-tonne demand line. A miss on imports, utilisation or the storage conversion ratio can close it. The 525,000 vs 528,500-tonne gap is left visible because the report did not reconcile a line that feeds that balance. This is not a verified 2026 outcome, a RENOZ forecast, or a China-spot price.",
	},
	blocks: [
		{
			kind: "prose",
			paragraphs: [
				"The number that travels from a Chinese broker note into English is usually the rounded shortfall. On 12 August 2026, SDIC Securities published a lithium-market note on WeChat. SDIC Securities is the brokerage and research arm of China State Development & Investment Corporation, a central state-owned investment group. Table 12 of that note puts 2026 China lithium-carbonate supply at 1,724,818 tonnes and demand at 1,771,600 tonnes. The quoted balance is a 46,782-tonne shortfall. That is about 2.6% of the demand line. It is a sell-side forecast, not a census, and not a price.",
				"The same table already tells a sequence. Through 2024 it shows a surplus: 23,487 tonnes in 2023 and 61,149 in 2024. In 2025 it flips to a 21,581-tonne deficit, about 1.8% of that year's demand. The 2026 shortfall is the report's next step in that sequence, not an independent measurement. Supply in the 2026 column is still growing fast: production 1,393,781 tonnes plus imports 336,022 tonnes, minus 4,985 tonnes of exports. Demand is still a little ahead. SDIC's own year-on-year figure on the demand line is 44.07% for 2026E. A market that cannot quite balance at that rate of supply growth is the claim. It is a claim inside a broker note.",
				"This briefing keeps those tonnes, explains the Chinese 10,000-tonne unit on the storage line, and flags an internal discrepancy instead of smoothing it away. It does not turn 46,782 tonnes into an Australian-dollar bill of materials. That would mash a 2026 forecast onto a one-day China spot print.",
			],
		},
		supplyDemandLineChart,
		{
			kind: "prose",
			heading: "The 525,000 vs 528,500-tonne gap",
			paragraphs: [
				"Chinese broker tables often print lithium in units of 10,000 tonnes. Table 9 of the same note forecasts 2026 storage-battery lithium-carbonate consumption at 52.5 of those units. That is 525,000 tonnes, not 52.5 tonnes. The identity underneath is stated in the note: 750 GWh of storage-battery cell-capacity growth, times 0.7 kg of lithium carbonate per kilowatt-hour. 750 gigawatt-hours × 0.7 kg/kWh is 525,000 tonnes. The ratio is SDIC's, attributed to a 2024-2035 lithium supply-demand paper the note cites. It is not a measurement of RENOZ cells.",
				"Elsewhere the note discusses storage demand as 528,500 tonnes. That is a 3,500-tonne internal discrepancy, about 0.7% of the table-9 line. At the same 0.7 kg/kWh it would be about 755 GWh rather than 750; on 750 GWh it would be about 0.705 kg/kWh. The report does not say which. RENOZ does not pick a winner. The useful fact is that the report disagrees with itself on a line that feeds the 2026 balance. Treat 46,782 tonnes as SDIC's published arithmetic, not as a number that survived an audit.",
			],
		},
		identityTable,
		discrepancyTable,
		balanceTable,
		{
			kind: "prose",
			heading: "The same day's spot print",
			paragraphs: [
				"This note is a 2026 forecast. The Mariana Lithium bulletin published the same day is a 12 August China LFP and lithium-chemical spot print. That is a separate briefing. A tight 2026 balance sheet does not, on its own, explain a one-week cathode move, and a one-week cathode move does not prove the 2026 shortfall. Demand for 2030 and 2035 is given in table 12; supply is not. The note stops balancing after 2026, which is another reason not to read the 46,782-tonne line as a decade-long squeeze.",
			],
		},
		{ kind: "sources" },
	],
};
