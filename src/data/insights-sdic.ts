export type SdicForecastTableRow = {
	label: string;
	cells: string[];
};

export type SdicForecastTable = {
	title: string;
	unit: string;
	publisher: string;
	sourceUrl: string;
	columns: string[];
	rows: SdicForecastTableRow[];
	sourceNote?: string;
};

const SDIC_PUBLISHER = "SDIC Securities";
const SDIC_SOURCE_URL = "https://mp.weixin.qq.com/s/84AYIAe9WSgCYG0X1g6wng";

export const sdicForecastTables: SdicForecastTable[] = [
	{
		title: "Table 9: Storage-battery-sector lithium consumption forecast",
		unit: "GW·h; 10,000 tonnes",
		publisher: SDIC_PUBLISHER,
		sourceUrl: SDIC_SOURCE_URL,
		columns: [
			"Time",
			"Storage-battery cell capacity growth (GW·h)",
			"Lithium-carbonate consumption (10,000 tonnes)",
		],
		rows: [
			{ label: "2026E", cells: ["750", "52.5"] },
			{ label: "2030E", cells: ["1200", "84"] },
			{ label: "2035E", cells: ["1600", "112"] },
		],
		sourceNote:
			'Sources: iFind; Zhang Zhaozhi et al., "Analysis of China\'s lithium supply-demand trends for 2024—2035 based on lithium mines and resource endowment"; SDIC Securities Research forecast. Note: The conversion ratio between storage-battery capacity growth and lithium-carbonate consumption is based on the same study; the actual conversion ratio is 0.7 kg lithium carbonate/(kWh).',
	},
	{
		title: "Table 10: Consumer-battery-sector lithium consumption forecast",
		unit: "100 million units; GW·h; 10,000 tonnes",
		publisher: SDIC_PUBLISHER,
		sourceUrl: SDIC_SOURCE_URL,
		columns: [
			"Time",
			"Smartphones (100 million units)",
			"Notebooks/desktop computers (100 million units)",
			"Tablet computers (100 million units)",
			"Consumer-battery cell capacity growth (GW·h)",
			"Lithium-carbonate consumption (10,000 tonnes)",
		],
		rows: [
			{ label: "2026E", cells: ["12", "0.7", "0.6", "70", "49"] },
			{ label: "2030E", cells: ["13", "0.8", "0.7", "73", "51.1"] },
			{ label: "2035E", cells: ["14", "0.9", "0.8", "76", "53.2"] },
		],
		sourceNote:
			'Sources: iFind; Zhang Zhaozhi et al., "Analysis of China\'s lithium supply-demand trends for 2024—2035 based on lithium mines and resource endowment"; SDIC Securities Research forecast. Note: The conversion ratio between consumer-battery capacity growth and lithium-carbonate consumption is based on the same study; the actual conversion ratio is 0.7 kg lithium carbonate/(kWh).',
	},
	{
		title:
			"Table 11: Glass-ceramics, lubricating-grease, and other-sector lithium consumption forecast",
		unit: "10,000 tonnes LCE",
		publisher: SDIC_PUBLISHER,
		sourceUrl: SDIC_SOURCE_URL,
		columns: [
			"Time",
			"Glass-ceramics lithium demand (10,000 tonnes LCE)",
			"Lubricating-grease lithium demand (10,000 tonnes LCE)",
			"Total (10,000 tonnes LCE)",
		],
		rows: [
			{ label: "2026E", cells: ["1.65", "4.01", "5.66"] },
			{ label: "2030E", cells: ["1.67", "4.23", "5.90"] },
			{ label: "2035E", cells: ["1.68", "4.66", "6.34"] },
		],
		sourceNote:
			'Sources: iFind; Zhang Zhaozhi et al., "Analysis of China\'s lithium supply-demand trends for 2024—2035 based on lithium mines and resource endowment"; Omdia; SDIC Securities Research forecast. Note: The lubricating-grease demand uses the method for lithium-based grease and its preparation; the actual conversion ratio is 0.22 kg lithium carbonate per tonne of lubricating grease.',
	},
	{
		title:
			"Table 12: China lithium-carbonate supply-demand balance and forecast",
		unit: "Physical tonnes",
		publisher: SDIC_PUBLISHER,
		sourceUrl: SDIC_SOURCE_URL,
		columns: ["", "2023", "2024", "2025", "2026E", "2030E", "2035E"],
		rows: [
			{
				label: "Production",
				cells: ["460095", "675744", "970425", "1393781", "—", "—"],
			},
			{
				label: "Imports",
				cells: ["158748", "234722", "242969", "336022", "—", "—"],
			},
			{
				label: "Exports",
				cells: ["(9592)", "(3829)", "(5290)", "(4985)", "—", "—"],
			},
			{
				label: "Total supply",
				cells: ["609251", "906637", "1208104", "1724818", "—", "—"],
			},
			{
				label: "Total demand",
				cells: ["585762", "845780", "1229684", "1771600", "2348700", "2871100"],
			},
			{
				label: "YoY and CAGR",
				cells: ["—", "44.39%", "45.39%", "44.07%", "7.30%", "4.10%"],
			},
			{
				label: "Supply-demand balance",
				cells: ["23487", "61149", "(21581)", "(46782)", "—", "—"],
			},
		],
		sourceNote:
			"Source: SMM; SDIC Securities Research Institute. Note: 2026-2030E CAGR=7.3%, 2030E-2035E CAGR=4.1%; 2026 import and export volumes are forecast data.",
	},
];
