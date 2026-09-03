/**
 * Static sitemap entry list and XML builder.
 *
 * Lives apart from seo.ts because it imports the full guide corpus
 * (../data/guides) and must stay out of the shared page bundle that seo.ts is
 * in. Consumers: /sitemap.xml route, scripts, tests.
 */

import { caseStudies } from "../data/case-studies";
import { guidePath, guides } from "../data/guides";
import { INSIGHTS_PATH, insightPath, insights } from "../data/insights";
import { sitemapLoc } from "./seo";

export interface SitemapUrl {
	url: string;
	lastmod?: string;
	changefreq:
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "yearly"
		| "never";
	priority: number;
}

export const staticSitemapEntries: SitemapUrl[] = [
	{ url: "/", priority: 1.0, changefreq: "weekly" },
	{ url: "/homeowners", priority: 0.9, changefreq: "monthly" },
	{ url: "/partners", priority: 0.8, changefreq: "monthly" },
	{
		url: "/partners/capability-statement",
		priority: 0.7,
		changefreq: "monthly",
	},
	{ url: "/products", priority: 0.9, changefreq: "weekly" },
	{ url: "/products/residential", priority: 0.8, changefreq: "weekly" },
	{ url: "/products/rural", priority: 0.8, changefreq: "weekly" },
	{ url: "/products/commercial", priority: 0.8, changefreq: "weekly" },
	{ url: "/about", priority: 0.8, changefreq: "monthly" },
	{ url: "/contact", priority: 0.7, changefreq: "monthly" },
	{ url: "/warranty", priority: 0.6, changefreq: "monthly" },
	{ url: "/resources", priority: 0.7, changefreq: "monthly" },
	{ url: "/case-studies", priority: 0.7, changefreq: "monthly" },
	{ url: "/news", priority: 0.6, changefreq: "monthly" },
	{ url: "/guides", priority: 0.8, changefreq: "weekly" },
	{
		url: INSIGHTS_PATH,
		priority: 0.8,
		changefreq: "weekly",
		lastmod: "2026-08-27",
	},
	...insights.map((insight) => ({
		url: insightPath(insight.slug),
		priority: 0.7,
		changefreq: "weekly" as const,
		lastmod: insight.updated,
	})),
	...caseStudies.map((study) => ({
		url: `/case-studies/${study.slug}`,
		priority: 0.7,
		changefreq: "monthly" as const,
		lastmod: study.date,
	})),
	...guides.map((guide) => ({
		url: guidePath(guide.slug),
		priority: 0.6,
		changefreq: "monthly" as const,
		lastmod: guide.updated,
	})),
	{ url: "/privacy", priority: 0.3, changefreq: "yearly" },
	{ url: "/terms", priority: 0.3, changefreq: "yearly" },
];

export function buildStaticSitemapXml(
	entries: SitemapUrl[] = staticSitemapEntries,
) {
	const body = entries
		.map((entry) => {
			const changefreq = entry.changefreq || "monthly";
			const priority = entry.priority ?? 0.5;
			return `  <url>
    <loc>${sitemapLoc(entry.url)}</loc>
${entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>\n` : ""}    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
		})
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
