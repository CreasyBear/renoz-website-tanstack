/** Shared LV stackable platform facts (quote these; verify inverter/BMS limits per design). */
export const LV_PLATFORM = {
	moduleKwh: 5.12,
	maxModulesPerTower: 8,
	maxTowersParallel: 6,
	model: "LV-5KWH100AH",
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
	h1: string;
	updated: string;
	claimsPending: boolean;
	directAnswer: string;
	decisionRowLabels: string[];
	decisionColumns: GuideDecisionColumn[];
	sections: GuideSection[];
	proofLinks: GuideProofLink[];
	faqs: GuideFaq[];
	cta: GuideCta;
	/** Product paths for schema/about only — never rendered as guide-to-guide nav */
	relatedProductPaths: string[];
	/** When set, page shows pairing chrome + LV capacity ladder */
	pairingPartner?: "Victron" | "Selectronic" | "Deye" | "GoodWe / Sungrow";
	eyebrow?: string;
	showCapacityLadder?: boolean;
};
