export { LV_PLATFORM, lvTowerKwh } from "./product-catalog";

/** Published Harvey farm scorecard (site case study + press narrative). */
export const HARVEY_SCORECARD = {
	location: "Harvey, WA",
	usableKwh: "35.8 kWh gross",
	modules: 7,
	solarKwp: "21 kWp",
	inverter: "Selectronic SPMC482 + Fronius Primo (AC-coupled)",
	gridQuoteAvoided: "$200,000",
	generatorRuntime: "Reduced (case study)",
	casePath: "/case-studies/harvey-farm",
	date: "2025-08-01",
} as const;

export type GuideFaq = {
	question: string;
	answer: string;
};

export type GuideSection = {
	heading: string;
	body: string[];
};

export type GuideDecisionColumn = {
	name: string;
	highlight?: boolean;
	cells: string[];
};

export type GuideCta = {
	primaryLabel: string;
	primaryTo:
		| "/contact"
		| "/resources"
		| "/products/residential"
		| "/products/rural"
		| "/products/commercial";
	secondaryLabel?: string;
	secondaryTo?:
		| "/contact"
		| "/resources"
		| "/products/residential"
		| "/products/rural"
		| "/products/commercial"
		| "/case-studies/harvey-farm"
		| "/partners"
		| "/partners/capability-statement"
		| "/about";
};

export type GuideProofLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type GuideArchitectureProduct = {
	name: string;
	detail: string;
	categoryTag: string;
	source: {
		label: string;
		url: string;
	};
	caveat?: string;
};

export type GuideArchitectureCategory = {
	label: string;
	summary: string;
	architecture: string;
	buyerConsequence: string;
	products: GuideArchitectureProduct[];
};

export type GuideArchitectureExamples = {
	heading: string;
	intro: string;
	categories: GuideArchitectureCategory[];
};

export type Guide = {
	slug: string;
	title: string;
	description: string;
	/** Searchable demand phrase — plant once in intro; do not echo into every heading */
	primaryKeyword: string;
	h1: string;
	updated: string;
	claimsPending: boolean;
	intro: string[];
	expertise: GuideSection;
	decisionHeading: string;
	decisionRowLabels: string[];
	decisionColumns: GuideDecisionColumn[];
	sections: GuideSection[];
	proofLinks: GuideProofLink[];
	architectureExamples?: GuideArchitectureExamples;
	faqHeading: string;
	faqs: GuideFaq[];
	closing: { heading: string; body: string };
	cta: GuideCta;
	/** Product paths for schema/about only — never rendered as guide-to-guide nav */
	relatedProductPaths: string[];
	/** When set, page shows pairing chrome + LV capacity ladder */
	pairingPartner?: "Victron" | "Selectronic" | "Deye" | "GoodWe / Sungrow";
	eyebrow?: string;
	showCapacityLadder?: boolean;
};
