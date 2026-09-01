/**
 * AI-citation-readiness heuristic, vendored into the typed Guide system.
 *
 * Ported from AgriciDaniel/claude-blog's scripts/ai_citation_score.py (MIT):
 * each "engine" (AI Overview / Perplexity / ChatGPT) receives a 0-100
 * readiness score from observable editorial + technical signals. Scores are
 * not calibrated probabilities; overall is a weighted blend
 * (ai_overview .40 / perplexity .35 / chatgpt .25).
 *
 * RENOZ port differences from upstream:
 *  - Input is the typed `Guide` (src/data/guide-types.ts), not an analyzed
 *    markdown file. `renderGuideMarkdown` produces the same markdown
 *    equivalence the guide page serves so the signal extraction mirrors the
 *    upstream analyzer.
 *  - Tier-1 source authority is AU-aware: .gov / .gov.au / .edu.au / .org.au,
 *    google.com, plus named AU authorities (cleanenergycouncil.org.au,
 *    dcceew.gov.au, wa.gov.au, energysafe.vic.gov.au, sunwiz.com.au,
 *    selectronic.com.au, choice.com.au, csiro.au). The upstream list was
 *    US-centric and scored cleanenergycouncil.org.au as tier 3.
 *  - Authority tiers are credited only to inline citations living in prose
 *    (intro + expertise + sections + closing + FAQ answers). The footer
 *    proofLinks list still counts toward citation count/diversity, but
 *    does not claim "near the claim" authority — matching the placement
 *    lesson that footer evidence earns no inline-credit.
 *
 * Pure module: safe to import from tests, route heads, and scripts.
 */

import type { Guide } from "../data/guide-types";
import { inlineLinkUrls } from "./markdown-links";

export const ENGINE_WEIGHTS = {
	ai_overview: 0.4,
	perplexity: 0.35,
	chatgpt: 0.25,
} as const;

export type EngineName = keyof typeof ENGINE_WEIGHTS;

/**
 * AU-aware tier-1 authority domains. Entries match the host exactly or as a
 * registered subdomain (host === d or host.endsWith("." + d)); the bare
 * "gov" entry therefore covers *.gov exactly, not *.gov.au — .gov.au is its
 * own entry, as are the named AU authorities.
 */
export const TIER_1_AUTHORITY: readonly string[] = [
	"google.com",
	"gov",
	"gov.au",
	"edu.au",
	"org.au",
	"cleanenergycouncil.org.au",
	"dcceew.gov.au",
	"wa.gov.au",
	"energysafe.vic.gov.au",
	"sunwiz.com.au",
	"selectronic.com.au",
	"choice.com.au",
	"csiro.au",
];

/** Commercial / industry registrations (manufacturer and vendor domains). */
const TIER_2_LABELS = ["com", "net", "co", "biz", "info"] as const;

export type SourceTier = 1 | 2 | 3;

export type Factor = {
	points: number;
	max_points: number;
	signal: Record<string, unknown>;
};

export type EngineResult = {
	score: number;
	weight: number;
	readiness_score: number;
	factors: Record<string, Factor>;
};

export type ScoreResult = {
	slug: string;
	engines: Record<EngineName, EngineResult>;
	overall: number;
};

// ---------------------------------------------------------------------------
// Tier classification
// ---------------------------------------------------------------------------

function hostnameOf(url: string): string {
	try {
		return new URL(url).hostname.toLowerCase();
	} catch {
		const match = /^[a-z][a-z0-9+.-]*:\/\/([^/?#]+)/i.exec(url);
		return match ? match[1].toLowerCase() : "";
	}
}

/** Classify a source URL into tier 1 (authority), 2 (industry), or 3. */
export function classifySourceTier(url: string): SourceTier {
	const host = hostnameOf(url);
	if (!host) return 3;
	for (const domain of TIER_1_AUTHORITY) {
		if (host === domain || host.endsWith(`.${domain}`)) return 1;
	}
	const labels = host.split(".");
	if (labels.some((label) => (TIER_2_LABELS as readonly string[]).includes(label))) {
		return 2;
	}
	return 3;
}

// ---------------------------------------------------------------------------
// Markdown equivalence — mirrors what the guide page serves
// ---------------------------------------------------------------------------

/**
 * Render a guide to the markdown equivalence the page serves: frontmatter,
 * h1 + intro, expertise, numbered sections, the decision table, FAQs, the
 * external proof links as inline citations, and the Article/FAQ/Breadcrumb
 * JSON-LD emitted by src/routes/guides/$slug.tsx.
 */
export function renderGuideMarkdown(guide: Guide): string {
	const md: string[] = [];
	md.push("---");
	md.push(`title: "${guide.title}"`);
	md.push(`description: "${guide.description}"`);
	md.push(`author: "RENOZ Energy"`);
	md.push(`date: "${guide.updated}"`);
	md.push(`keyword: "${guide.primaryKeyword}"`);
	md.push(`slug: ${guide.slug}`);
	md.push("---");
	md.push("");
	md.push(`# ${guide.h1}`);
	md.push("");
	md.push(...guide.intro.map((p) => `${p}\n`));
	md.push("");
	md.push(`## ${guide.expertise.heading}`);
	md.push("");
	md.push(...guide.expertise.body.map((p) => `${p}\n`));
	md.push("");
	guide.sections.forEach((section, i) => {
		md.push(`## ${i + 1}. ${section.heading}`);
		md.push("");
		md.push(...section.body.map((p) => `${p}\n`));
		md.push("");
	});
	if (guide.decisionRowLabels.length && guide.decisionColumns.length) {
		md.push(`## ${guide.decisionHeading}`);
		md.push("");
		md.push(`| ${guide.decisionColumns.map((c) => c.name).join(" | ")} |`);
		md.push(`|${guide.decisionColumns.map(() => " --- ").join("|")}|`);
		guide.decisionRowLabels.forEach((_label, r) => {
			md.push(`| ${guide.decisionColumns.map((c) => c.cells[r]).join(" | ")} |`);
		});
		md.push("");
	}
	md.push(`## ${guide.faqHeading}`);
	md.push("");
	for (const faq of guide.faqs) {
		md.push(`### ${faq.question}`);
		md.push("");
		md.push(faq.answer);
		md.push("");
	}
	const external = guide.proofLinks.filter((l) => l.external);
	md.push("## Sources");
	md.push("");
	for (const link of external) {
		md.push(`- [${link.label}](${link.href})`);
	}
	md.push("");
	md.push('<script type="application/ld+json">');
	md.push(
		JSON.stringify(
			[
				{
					"@context": "https://schema.org",
					"@type": "Article",
					headline: guide.title,
					datePublished: guide.updated,
					author: { "@type": "Organization", name: "RENOZ Energy" },
					about: ["Battery energy storage", "Western Australia"],
				},
				{
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: guide.faqs.map((faq) => ({
						"@type": "Question",
						name: faq.question,
						acceptedAnswer: { "@type": "Answer", text: faq.answer },
					})),
				},
				{
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Guides",
							item: "https://www.renoz.energy/guides",
						},
						{
							"@type": "ListItem",
							position: 2,
							name: guide.title,
							item: `https://www.renoz.energy/guides/${guide.slug}`,
						},
					],
				},
			],
			null,
			0,
		),
	);
	md.push("</script>");
	return md.join("\n");
}

// ---------------------------------------------------------------------------
// Signal extraction (ported from analyze_blog.py over the rendered markdown)
// ---------------------------------------------------------------------------

const PAREN_YEAR = /\([^)]*20\d{2}[^)]*\)/;
const STAT_PATTERN = /\d+\.?\d*%/g;
const DEFINITION_PATTERN = /\*\*[^*]+\*\*\s*(?:is|are|refers to|means)/i;
const ACRONYM_DEFINITION_PATTERN = /[A-Za-z][^.)]{1,60}?\s+\(([A-Z]{2,})\)\s+(?:is|are|refers to|means)/i;
const EVIDENCE_MARKER = /(?:ORIGINAL DATA|PERSONAL EXPERIENCE|UNIQUE INSIGHT)/i;
const SPECIFIC_SUPPORT = /\b\d+(?:\.\d+)?%?\b/;
const EXAMPLE_PATTERNS = [
	/for example/i,
	/for instance/i,
	/such as/i,
	/consider/i,
	/let's say/i,
	/imagine/i,
	/here's (?:an|a) example/i,
];

type Citations = {
	inline_citations: number;
	paren_citations: number;
	sourced_statistics: number;
	unsourced_statistics: number;
	unique_sources: number;
	tier_counts: Record<SourceTier, number>;
};

type Readiness = {
	purpose_statement: boolean;
	entity_definitions: number;
	self_contained_sections: number;
	evidence_backed_sections: number;
	table_count: number;
	list_count: number;
};

type GuideAnalysis = {
	frontmatter_title: string;
	headings: { h2_count: number; hierarchy_clean: boolean };
	citations: Citations;
	readiness: Readiness;
	structured: {
		table_count: number;
		ordered_list_items: number;
		unordered_list_items: number;
	};
	schema: {
		has_blogposting: boolean;
		has_person: boolean;
		has_organization: boolean;
		has_breadcrumblist: boolean;
		schema_count: number;
	};
	engagement: { example_count: number };
	media: { count: number; without_alt_text: number };
	crawlable: boolean;
};

/** Prose regions of the guide — inline links here earn tier authority. */
function guideProse(guide: Guide): string {
	return [
		guide.intro.join("\n"),
		guide.expertise.heading,
		guide.expertise.body.join("\n"),
		guide.sections.map((s) => s.body.join("\n")).join("\n"),
		guide.decisionColumns.flatMap((c) => c.cells).join("\n"),
		...(guide.architectureExamples?.categories.flatMap((cat) => [
			cat.summary,
			cat.architecture,
			cat.buyerConsequence,
			...cat.products.flatMap((p) => [p.detail, p.caveat ?? ""]),
		]) ?? []),
		guide.closing.heading,
		guide.closing.body,
		guide.faqs.map((f) => f.answer).join("\n"),
	].join("\n");
}

/** Split the markdown into body text under each `## ` (h2) section. */
function h2SectionBodies(md: string): string[] {
	const bodies: string[][] = [];
	let current: string[] | null = null;
	for (const line of md.split("\n")) {
		if (/^##\s+/.test(line)) {
			current = [];
			bodies.push(current);
		} else if (current) {
			current.push(line);
		}
	}
	return bodies.map((lines) => lines.join("\n"));
}

function analyzeGuide(guide: Guide): GuideAnalysis {
	const md = renderGuideMarkdown(guide);
	const prose = guideProse(guide);

	// --- headings ---
	const headings = [...md.matchAll(/^(#{1,6})\s+(.+)$/gm)];
	const h2Count = headings.filter((h) => h[1].length === 2).length;
	let hierarchyClean = true;
	let prevLevel = 0;
	for (const h of headings) {
		const level = h[1].length;
		if (level > prevLevel + 1 && prevLevel > 0) hierarchyClean = false;
		prevLevel = level;
	}

	// --- citations ---
	const inlineUrls = inlineLinkUrls(md);
	const statValues = [...md.matchAll(STAT_PATTERN)].map((m) => m[0]);
	const tierCounts: Record<SourceTier, number> = { 1: 0, 2: 0, 3: 0 };
	for (const url of inlineLinkUrls(prose)) {
		tierCounts[classifySourceTier(url)] += 1;
	}
	let sourcedStatistics = 0;
	let unsourcedStatistics = 0;
	for (const value of statValues) {
		// Check EVERY occurrence, not just the first: a stat that first appears
		// in an uncited decision table but is inline-cited later in a section
		// must be credited as sourced.
		let sourced = false;
		let offset = 0;
		for (;;) {
			const pos = md.indexOf(value, offset);
			if (pos === -1) break;
			const context = md.slice(pos, pos + 200);
			if (inlineLinkUrls(context).length > 0 || PAREN_YEAR.test(context)) {
				sourced = true;
				break;
			}
			offset = pos + value.length;
		}
		if (sourced) {
			sourcedStatistics += 1;
		} else {
			unsourcedStatistics += 1;
		}
	}
	const citations: Citations = {
		inline_citations: inlineUrls.length,
		paren_citations: md.match(/\([^)]*20\d{2}[^)]*\)/g)?.length ?? 0,
		sourced_statistics: sourcedStatistics,
		unsourced_statistics: unsourcedStatistics,
		unique_sources: new Set(inlineUrls.map((u) => u.toLowerCase())).size,
		tier_counts: tierCounts,
	};

	// --- ai citation readiness ---
	const sectionBodies = h2SectionBodies(md);
	let evidenceBackedSections = 0;
	let selfContainedSections = 0;
	for (const body of sectionBodies) {
		const hasSource = inlineLinkUrls(body).length > 0;
		const hasEvidenceMarker = EVIDENCE_MARKER.test(body);
		const hasDefinition = DEFINITION_PATTERN.test(body);
		const hasSpecificSupport = SPECIFIC_SUPPORT.test(body);
		if (hasSource || hasEvidenceMarker) evidenceBackedSections += 1;
		if (
			body.trim() !== "" &&
			(hasSource || hasEvidenceMarker || hasDefinition) &&
			(hasSpecificSupport || hasDefinition)
		) {
			selfContainedSections += 1;
		}
	}
	const introText = md.split(/^##\s+/m, 1)[0];
	const readiness: Readiness = {
		purpose_statement: /[A-Za-z]{3,}/.test(introText),
		entity_definitions:
			(md.match(DEFINITION_PATTERN)?.length ?? 0) +
			(md.match(ACRONYM_DEFINITION_PATTERN)?.length ?? 0),
		self_contained_sections: selfContainedSections,
		evidence_backed_sections: evidenceBackedSections,
		table_count: md.match(/^\|[-:| ]+\|$/gm)?.length ?? 0,
		list_count: md.match(/^[\s]*[-*+]\s/gm)?.length ?? 0,
	};

	// --- structured data ---
	const structured = {
		table_count: md.match(/^\|[-:| ]+\|$/gm)?.length ?? 0,
		ordered_list_items: md.match(/^[\s]*\d+\.\s/gm)?.length ?? 0,
		unordered_list_items: md.match(/^[\s]*[-*+]\s/gm)?.length ?? 0,
	};

	// --- schema types present in the emitted JSON-LD ---
	const schemaTypes = [...md.matchAll(/"@type":\s*"([^"]+)"/g)].map((m) => m[1]);
	const schema = {
		has_blogposting: schemaTypes.includes("BlogPosting") || schemaTypes.includes("Article"),
		has_person: schemaTypes.includes("Person"),
		has_organization: schemaTypes.includes("Organization"),
		has_breadcrumblist: schemaTypes.includes("BreadcrumbList"),
		schema_count: schemaTypes.length,
	};

	// --- engagement ---
	const engagement = {
		example_count: EXAMPLE_PATTERNS.reduce(
			(sum, pattern) => sum + (md.match(pattern)?.length ?? 0),
			0,
		),
	};

	// --- media ---
	const inlineImages = md.match(/!\[[^\]]+\]\([^)]+\)/g)?.length ?? 0;
	const elementMedia = md.match(/<(?:img|figure|svg)\b/gi)?.length ?? 0;
	const media = {
		count: inlineImages + elementMedia,
		without_alt_text: 0,
	};

	return {
		frontmatter_title: guide.title,
		headings: { h2_count: h2Count, hierarchy_clean: hierarchyClean },
		citations,
		readiness,
		structured,
		schema,
		engagement,
		media,
		crawlable: !/noindex|noai/i.test(md),
	};
}

// ---------------------------------------------------------------------------
// Scoring (ported 1:1 from ai_citation_score.py)
// ---------------------------------------------------------------------------

function clampScore(value: number): number {
	return Math.max(0, Math.min(100, Math.round(value)));
}

function factor(points: number, maxPoints: number, signal: Record<string, unknown>): Factor {
	const clamped = Math.max(0, Math.min(maxPoints, points));
	return { points: clamped, max_points: maxPoints, signal };
}

function countPoints(count: number, bands: ReadonlyArray<readonly [number, number]>): number {
	let score = 0;
	for (const [threshold, points] of bands) {
		if (count >= threshold) score = points;
	}
	return score;
}

function scoreAiOverview(analysis: GuideAnalysis): Omit<EngineResult, "weight"> {
	const { citations, readiness, structured, schema, engagement, media, headings } = analysis;

	let sourcePoints = countPoints(citations.inline_citations, [
		[1, 8],
		[2, 12],
		[3, 15],
	]);
	if (citations.sourced_statistics > 0 && citations.unsourced_statistics === 0) {
		sourcePoints += 10;
	} else if (citations.sourced_statistics > 0) {
		sourcePoints += 5;
	} else if (citations.unsourced_statistics === 0) {
		sourcePoints += 5;
	}
	sourcePoints = Math.max(
		0,
		Math.min(25, sourcePoints - Math.min(10, citations.unsourced_statistics * 2)),
	);

	let purposePoints = 0;
	if (analysis.frontmatter_title) purposePoints += 5;
	if (readiness.purpose_statement) purposePoints += 5;
	if (headings.hierarchy_clean) purposePoints += 4;
	if (headings.h2_count >= 1) purposePoints += 2;
	purposePoints += countPoints(readiness.entity_definitions, [
		[1, 2],
		[2, 4],
	]);
	purposePoints = Math.min(20, purposePoints);

	let usefulnessPoints = countPoints(readiness.self_contained_sections, [
		[1, 6],
		[2, 10],
		[3, 12],
	]);
	usefulnessPoints += countPoints(engagement.example_count, [
		[1, 4],
		[2, 6],
	]);
	const structures =
		structured.table_count + structured.ordered_list_items + structured.unordered_list_items;
	usefulnessPoints += countPoints(structures, [
		[1, 1],
		[3, 2],
	]);
	usefulnessPoints = Math.min(20, usefulnessPoints);

	let schemaPoints = 0;
	if (schema.has_blogposting) schemaPoints += 10;
	if (schema.has_person) schemaPoints += 3;
	if (schema.has_organization || schema.has_breadcrumblist) schemaPoints += 2;
	schemaPoints = Math.min(15, schemaPoints);

	const crawlPoints = analysis.crawlable ? 10 : 0;
	const mediaCount = media.count;
	const mediaPoints = countPoints(mediaCount, [
		[1, 5],
		[2, 8],
		[3, 10],
	]);

	const factors = {
		source_fidelity: factor(sourcePoints, 25, {
			inline_citations: citations.inline_citations,
			sourced_statistics: citations.sourced_statistics,
			unsourced_statistics: citations.unsourced_statistics,
		}),
		purpose_and_entity_clarity: factor(purposePoints, 20, {
			has_title: Boolean(analysis.frontmatter_title),
			purpose_statement: readiness.purpose_statement,
			hierarchy_clean: headings.hierarchy_clean,
			entity_definitions: readiness.entity_definitions,
		}),
		reader_usefulness: factor(usefulnessPoints, 20, {
			self_contained_sections: readiness.self_contained_sections,
			examples: engagement.example_count,
			useful_structures: structures,
		}),
		article_schema: factor(schemaPoints, 15, {
			has_blogposting_or_article: schema.has_blogposting,
			has_person: schema.has_person,
			has_organization: schema.has_organization,
			has_breadcrumblist: schema.has_breadcrumblist,
			schema_count: schema.schema_count,
		}),
		crawlability: factor(crawlPoints, 10, {
			has_robots_restriction: !analysis.crawlable,
		}),
		relevant_media: factor(mediaPoints, 10, {
			media_count: mediaCount,
			images_without_alt: media.without_alt_text,
		}),
	};

	const score = clampScore(
		Object.values(factors).reduce((sum, f) => sum + f.points, 0),
	);
	return { score, readiness_score: score, factors };
}

function scorePerplexity(analysis: GuideAnalysis): Omit<EngineResult, "weight"> {
	const { citations, readiness, engagement } = analysis;

	const totalCitations = citations.inline_citations + citations.paren_citations;
	const citationPoints = countPoints(totalCitations, [
		[1, 8],
		[2, 15],
		[3, 22],
		[5, 30],
	]);

	let authorityPoints = 0;
	if (citations.tier_counts[1] >= 2) authorityPoints += 18;
	else if (citations.tier_counts[1] === 1) authorityPoints += 14;
	if (citations.tier_counts[2] >= 2) authorityPoints += 7;
	else if (citations.tier_counts[2] === 1) authorityPoints += 4;
	authorityPoints = Math.min(25, authorityPoints);

	let statisticPoints: number;
	if (
		citations.sourced_statistics === 0 &&
		citations.unsourced_statistics === 0
	) {
		statisticPoints = 15;
	} else {
		statisticPoints = countPoints(citations.sourced_statistics, [
			[1, 10],
			[2, 16],
			[3, 21],
			[4, 25],
		]);
	}
	statisticPoints = Math.max(
		0,
		statisticPoints - Math.min(10, citations.unsourced_statistics * 3),
	);

	const diversityPoints = countPoints(citations.unique_sources, [
		[1, 3],
		[2, 6],
		[3, 10],
	]);
	let usefulnessPoints = countPoints(readiness.evidence_backed_sections, [
		[1, 4],
		[2, 7],
		[3, 8],
	]);
	usefulnessPoints += countPoints(engagement.example_count, [
		[1, 1],
		[2, 2],
	]);
	usefulnessPoints = Math.min(10, usefulnessPoints);

	const factors = {
		source_citations: factor(citationPoints, 30, {
			inline_citations: citations.inline_citations,
			parenthetical_citations: citations.paren_citations,
			total_citations: totalCitations,
		}),
		source_authority: factor(authorityPoints, 25, {
			tier_1_sources: citations.tier_counts[1],
			tier_2_sources: citations.tier_counts[2],
		}),
		sourced_statistics: factor(statisticPoints, 25, {
			sourced_statistics: citations.sourced_statistics,
			unsourced_statistics: citations.unsourced_statistics,
		}),
		citation_diversity: factor(diversityPoints, 10, {
			unique_sources: citations.unique_sources,
		}),
		reader_usefulness: factor(usefulnessPoints, 10, {
			evidence_backed_sections: readiness.evidence_backed_sections,
			examples: engagement.example_count,
		}),
	};

	const score = clampScore(
		Object.values(factors).reduce((sum, f) => sum + f.points, 0),
	);
	return { score, readiness_score: score, factors };
}

function scoreChatgpt(analysis: GuideAnalysis): Omit<EngineResult, "weight"> {
	const { citations, readiness, structured, engagement, headings } = analysis;

	let sourcePoints = countPoints(citations.inline_citations, [
		[1, 8],
		[2, 15],
		[3, 20],
	]);
	if (citations.unsourced_statistics === 0) sourcePoints += 5;
	sourcePoints = Math.min(25, sourcePoints);

	let purposePoints = 0;
	if (analysis.frontmatter_title) purposePoints += 5;
	if (readiness.purpose_statement) purposePoints += 5;
	if (headings.hierarchy_clean) purposePoints += 5;
	if (headings.h2_count >= 1) purposePoints += 5;

	let utilityPoints = countPoints(readiness.self_contained_sections, [
		[1, 7],
		[2, 12],
		[3, 15],
	]);
	utilityPoints += countPoints(engagement.example_count, [
		[1, 3],
		[2, 5],
	]);
	utilityPoints = Math.min(20, utilityPoints);

	const entityPoints = countPoints(readiness.entity_definitions, [
		[1, 7],
		[2, 12],
		[3, 15],
	]);

	const tableCount = Math.max(readiness.table_count, structured.table_count);
	const listItems =
		readiness.list_count +
		structured.unordered_list_items +
		structured.ordered_list_items;
	const extractPoints = Math.min(
		10,
		tableCount * 4 + countPoints(listItems, [
			[3, 3],
			[6, 6],
		]),
	);

	const crawlPoints = analysis.crawlable ? 10 : 0;

	const factors = {
		source_fidelity: factor(sourcePoints, 25, {
			inline_citations: citations.inline_citations,
			unsourced_statistics: citations.unsourced_statistics,
		}),
		purpose_clarity: factor(purposePoints, 20, {
			has_title: Boolean(analysis.frontmatter_title),
			purpose_statement: readiness.purpose_statement,
			hierarchy_clean: headings.hierarchy_clean,
		}),
		reader_utility: factor(utilityPoints, 20, {
			self_contained_sections: readiness.self_contained_sections,
			examples: engagement.example_count,
		}),
		entity_definitions: factor(entityPoints, 15, {
			entity_definitions: readiness.entity_definitions,
		}),
		extractable_lists_tables: factor(extractPoints, 10, {
			table_count: tableCount,
			list_items: listItems,
		}),
		crawlability: factor(crawlPoints, 10, {
			has_robots_restriction: !analysis.crawlable,
		}),
	};

	const score = clampScore(
		Object.values(factors).reduce((sum, f) => sum + f.points, 0),
	);
	return { score, readiness_score: score, factors };
}

/**
 * Score a guide's AI-citation readiness. Returns per-engine 0-100 readiness
 * scores with a factor breakdown, plus the weighted overall score.
 */
export function scoreGuide(guide: Guide): ScoreResult {
	const analysis = analyzeGuide(guide);
	const scored = {
		ai_overview: scoreAiOverview(analysis),
		perplexity: scorePerplexity(analysis),
		chatgpt: scoreChatgpt(analysis),
	} as Record<EngineName, Omit<EngineResult, "weight">>;
	const engines = {} as Record<EngineName, EngineResult>;
	for (const name of Object.keys(ENGINE_WEIGHTS) as EngineName[]) {
		engines[name] = {
			...scored[name],
			weight: ENGINE_WEIGHTS[name],
			readiness_score: scored[name].score,
		};
	}
	const overall = clampScore(
		(Object.keys(ENGINE_WEIGHTS) as EngineName[]).reduce(
			(sum, name) => sum + engines[name].score * ENGINE_WEIGHTS[name],
			0,
		),
	);
	return { slug: guide.slug, engines, overall };
}