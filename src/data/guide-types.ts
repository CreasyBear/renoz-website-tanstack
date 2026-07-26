/** Shared LV stackable platform facts (quote these; verify inverter/BMS limits per design). */
export const LV_PLATFORM = {
	moduleKwh: 5.12,
	maxModulesPerTower: 8,
	maxTowersParallel: 6,
	model: "LV-5KWH100AH",
} as const;

/** Published Harvey farm scorecard (site case study + press narrative). */
export const HARVEY_SCORECARD = {
	location: "Harvey, WA",
	usableKwh: "35.8 kWh",
	modules: 7,
	solarKwp: "21 kWp",
	inverter: "Selectronic SPMC482 + Fronius Primo (AC-coupled)",
	gridQuoteAvoided: "$200,000",
	generatorRuntime: "Reduced by 95% (case study)",
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
