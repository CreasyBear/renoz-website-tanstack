export type InsightSource = {
	publisher: string;
	title: string;
	published: string; // ISO date YYYY-MM-DD
	accessed: string; // ISO date YYYY-MM-DD
	url: string;
	note?: string;
};

export type InsightKeyFigure = {
	label: string;
	value: string;
	unit: string;
	change?: string;
	source?: string;
};

export type InsightTableBlock = {
	kind: "table";
	title: string;
	columns: string[]; // first column is the row-label column
	rows: string[][]; // each row: [label, ...cells]
	note?: string;
};

export type InsightProseBlock = {
	kind: "prose";
	heading?: string;
	paragraphs: string[];
};

export type InsightSourcesBlock = {
	kind: "sources";
};

export type InsightLineChartBlock = {
	kind: "chart";
	chart: "line";
	title: string;
	xLabels: string[];
	series: { label: string; color: string; values: number[] }[];
	unit: string;
	note?: string;
};

export type InsightBarChartBlock = {
	kind: "chart";
	chart: "bars";
	title: string;
	unit: string;
	bars: { label: string; value: number }[];
	note?: string;
};

export type InsightChartBlock = InsightLineChartBlock | InsightBarChartBlock;

export type InsightBlock =
	| InsightTableBlock
	| InsightProseBlock
	| InsightSourcesBlock
	| InsightChartBlock;

export type Insight = {
	slug: string;
	title: string;
	description: string;
	eyebrow: string;
	published: string;
	updated: string;
	readTime: string;
	about: string[];
	relatedSlugs?: readonly string[];
	keyFigures?: InsightKeyFigure[];
	sources: InsightSource[];
	closing: {
		heading: string;
		body: string;
	};
	blocks: InsightBlock[];
};
