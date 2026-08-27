/**
 * Insights — listed via /insights, sitemap, and JSON-LD.
 * One file per briefing in ./insight-content; shared types in ./insight-types.
 * Add a new briefing by creating ./insight-content/<slug>.ts and appending it here.
 */

import { insight as cathodeTonnesPerGwh } from "./insight-content/cathode-tonnes-per-gwh-lfp-ncm-sodium";
import { insight as chinaLfpPriceSignal } from "./insight-content/china-lfp-price-signal-august-2026";
import { insight as chinaLithiumMaterialsThirdCycle } from "./insight-content/china-lithium-materials-third-cycle";
import { insight as sdicChinaLithiumSupplyDemand } from "./insight-content/sdic-china-lithium-supply-demand-2026";
import type { Insight } from "./insight-types";

export * from "./insight-types";

export const INSIGHTS_PATH = "/insights";

export function insightPath(slug: string) {
	return `${INSIGHTS_PATH}/${slug}`;
}

export const insights: Insight[] = [
	chinaLithiumMaterialsThirdCycle,
	cathodeTonnesPerGwh,
	chinaLfpPriceSignal,
	sdicChinaLithiumSupplyDemand,
];

export function getInsight(slug: string): Insight | undefined {
	return insights.find((insight) => insight.slug === slug);
}

export function getInsightsBySlugs(slugs: readonly string[]): Insight[] {
	return slugs.flatMap((slug) => {
		const insight = getInsight(slug);
		return insight ? [insight] : [];
	});
}
