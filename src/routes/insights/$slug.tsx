import { createFileRoute, notFound } from "@tanstack/react-router";

import { InsightPostPage } from "@/components/insights/InsightPostPage";
import { getInsight, insightPath } from "@/data/insights";
import {
	articleImageUrl,
	breadcrumbSchema,
	canonicalLink,
	insightArticleSchema,
	jsonLd,
	pageMeta,
} from "@/lib/seo";

export const Route = createFileRoute("/insights/$slug")({
	loader: ({ params }) => {
		const insight = getInsight(params.slug);
		if (!insight) {
			throw notFound();
		}
		return { insight };
	},
	head: ({ loaderData }) => {
		const insight = loaderData?.insight;
		if (!insight) return {};
		const path = insightPath(insight.slug);
		return {
			meta: [
				...pageMeta({
					title: `${insight.title} | RENOZ Energy`,
					description: insight.description,
					path,
					image: articleImageUrl(insight.slug),
					type: "article",
				}),
			],
			links: [canonicalLink(path)],
			scripts: [
				jsonLd(insightArticleSchema(insight)),
				jsonLd(
					breadcrumbSchema(path, {
						insights: "China battery materials",
						[path]: insight.title,
					}),
				),
			],
		};
	},
	component: InsightPage,
});

function InsightPage() {
	const { insight } = Route.useLoaderData();
	return <InsightPostPage insight={insight} />;
}
