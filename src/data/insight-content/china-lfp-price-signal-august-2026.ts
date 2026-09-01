import { audPerTonne, FX_NOTE } from "../insight-fx";
import type {
	Insight,
	InsightBarChartBlock,
	InsightTableBlock,
} from "../insight-types";
import { marianaMaterialPriceTable } from "../insights-mariana";

const SDIC_SLUG = "sdic-china-lithium-supply-demand-2026";

const BULLETIN_PRODUCTS = [
	"Lithium iron phosphate (energy-storage grade)",
	"Lithium iron phosphate (power grade)",
	"Lithium carbonate (99.5% battery grade/domestic)",
	"Lithium hydroxide (56.5% battery-grade coarse particles/domestic)",
	"Lithium hydroxide (56.5% battery-grade micronized/domestic)",
	"Spodumene concentrate (6%, CIF China)",
] as const;

function marianaRow(product: string) {
	for (const section of marianaMaterialPriceTable.sections) {
		const row = section.rows.find((item) => item.product === product);
		if (row) return row;
	}
	throw new Error(`Mariana bulletin is missing ${product}`);
}

const selectedRows = BULLETIN_PRODUCTS.map(marianaRow);

function audAverage(row: (typeof selectedRows)[number]) {
	if (row.unit !== "CNY/t") return "-";
	const cny = Number(row.average.replace(/,/g, ""));
	if (!Number.isFinite(cny)) return "-";
	return audPerTonne(cny);
}

const spotTable: InsightTableBlock = {
	kind: "table",
	title: "China LFP and lithium chemicals, 12 August 2026",
	columns: [
		"Material",
		"Average (CNY)",
		"Average (AUD)",
		"7-day change",
		"Unit",
	],
	rows: selectedRows.map((row) => [
		row.product,
		row.average,
		audAverage(row),
		row.sevenDayChange,
		row.unit,
	]),
	note: `Source: ${marianaMaterialPriceTable.publisher}, ${marianaMaterialPriceTable.asOf}. Spot quotations; sampling method not published. ${FX_NOTE} Spodumene is already in US dollars CIF China. Not an executable offer and not an Australian installed-system price.`,
};

const sevenDayMovesBarChart: InsightBarChartBlock = {
	kind: "chart",
	chart: "bars",
	title: "Seven-day move in the 12 August print",
	unit: "%",
	bars: [
		{ label: "Lithium hydroxide (coarse)", value: 6.25 },
		{ label: "Lithium hydroxide (micronized)", value: 5.97 },
		{ label: "LFP - storage grade", value: 5.56 },
		{ label: "LFP - power grade", value: 5.45 },
		{ label: "Battery-grade lithium carbonate", value: 5.0 },
		{ label: "Spodumene 6% CIF China", value: 0.98 },
	],
	note: "Lithium chemicals and both LFP grades moved together. Spodumene barely moved. That is a refined-lithium print, not a mine-gate print.",
};

export const insight: Insight = {
	slug: "china-lfp-price-signal-august-2026",
	title: "China storage-grade LFP price, 12 August 2026",
	description:
		"Mariana Lithium's 12 August 2026 China spot print: storage-grade LFP at 57,000 CNY/t, about A$12,000/t, up 5.56% over seven days. The move is in refined lithium and LFP powder, not in spodumene.",
	eyebrow: "Spot bulletin · Mariana Lithium",
	published: "2026-08-14",
	updated: "2026-08-27",
	readTime: "5 min",
	about: [
		"China LFP price",
		"Lithium iron phosphate",
		"Battery-grade lithium carbonate",
		"China battery materials",
	],
	relatedSlugs: [SDIC_SLUG],
	keyFigures: [
		{
			label: "Storage-grade LFP - average",
			value: "57,000",
			unit: "CNY/t",
			change: `${audPerTonne(57_000)}; +5.56% over seven days`,
			source: "Mariana Lithium, 12 August 2026",
		},
		{
			label: "Power-grade LFP - average",
			value: "58,000",
			unit: "CNY/t",
			change: `${audPerTonne(58_000)}; +5.45% over seven days`,
			source: "Mariana Lithium, 12 August 2026",
		},
		{
			label: "Battery-grade lithium carbonate - average",
			value: "147,000",
			unit: "CNY/t",
			change: `${audPerTonne(147_000)}; +5.00% over seven days`,
			source: "Mariana Lithium, 12 August 2026",
		},
	],
	sources: [
		{
			publisher: marianaMaterialPriceTable.publisher,
			title: marianaMaterialPriceTable.title,
			published: marianaMaterialPriceTable.asOf,
			accessed: "2026-08-14",
			url: marianaMaterialPriceTable.sourceUrl,
			note: `Chinese-language WeChat bulletin. Sampling method for the high/low/average quotations is not published. ${FX_NOTE}`,
		},
	],
	closing: {
		heading: "A China powder print is not a WA pack price",
		body: "The 12 August observation is a China-spot average for cathode powder and lithium salts, not a tradable offer and not a map onto an installed battery in Western Australia. The useful fact is the cross-section: LFP and refined lithium moved; the ore did not.",
	},
	blocks: [
		{
			kind: "prose",
			paragraphs: [
				"The information in Mariana Lithium's 12 August WeChat bulletin is in the cross-section, not in any single average. Storage-grade LFP is the iron-phosphate cathode powder specified for energy-storage cells. It averaged 57,000 CNY/t, about A$12,000/t, up 1,000 CNY on the day and 5.56% over seven days. Power-grade LFP, the higher-rate cousin, averaged 58,000 CNY/t, about A$12,200/t, up 5.45%. A 5.45-5.56% week in a cathode powder is a move. It is not, by itself, a market index. The bulletin does not say how the high, low and average are sampled.",
				"Refined lithium moved with it. Battery-grade lithium carbonate (99.5%) averaged 147,000 CNY/t, about A$30,900/t, up 5.00% over seven days. Battery-grade lithium hydroxide, the salt high-nickel cathode prefers, was up 6.25% (coarse) and 5.97% (micronized). Six-percent spodumene concentrate on a cost, insurance and freight (CIF) China basis, the mine-gate product Western Australia actually ships, rose 0.98% to US$2,070/t. Hydroxide and carbonate are the chemicals. Spodumene is the rock. This print is tight in the chemicals and in LFP powder. It is not tight at the mine gate.",
				"This briefing keeps those lines and converts the yuan at a late-August 2026 mid-market rate so the scale is readable in Australian dollars. It stops before treating the averages as an executable offer or an installed-system price in Western Australia.",
			],
		},
		sevenDayMovesBarChart,
		{
			kind: "prose",
			heading: "How to read a China LFP spot print",
			paragraphs: [
				'Storage-grade and power-grade LFP are different products, 1,000 CNY/t apart on this average, about A$210/t. Storage-grade is the energy-storage line; power-grade is specified for higher-rate use. They moved together this week. Collapsing them into one "China LFP price" throws away the only product distinction the bulletin bothers to make.',
				"The bulletin gives a low, a high, and an average. It does not say how those three numbers are sampled, how many producers they cover, or whether they are offers, deals, or assessments. Read 57,000 CNY/t, about A$12,000/t, as the direction and rough size of the 12 August observation, not as a clearing price.",
				"LFP contains lithium. It does not contain cobalt. Cobalt lines in the same bulletin fell. That is a different metal market, and it is not this page.",
			],
		},
		spotTable,
		{
			kind: "prose",
			heading: "The same day's broker note",
			paragraphs: [
				"This bulletin is a one-day China spot print. The SDIC Securities note published the same day is a 2026 supply-demand forecast for lithium carbonate, with a quoted shortfall and an internal discrepancy on storage demand. A tight 2026 balance sheet does not, on its own, explain a one-week cathode move. A one-week cathode move does not prove the 2026 shortfall.",
			],
		},
		{ kind: "sources" },
	],
};
