import { createFileRoute } from "@tanstack/react-router";

import { InsightsIndexPage } from "@/components/insights/InsightsIndexPage";
import { insights } from "@/data/insights";
import {
	breadcrumbSchema,
	canonicalLink,
	insightsCollectionSchema,
	jsonLd,
	pageMeta,
} from "@/lib/seo";

const PAGE_TITLE = "China Battery Materials Notes | RENOZ Energy";
const PAGE_DESCRIPTION =
	"English briefings of Chinese battery-material sources — conversion identities, spot prints, broker notes and cycle reports behind WeChat — with original links attached.";

export const Route = createFileRoute("/insights/")({
	head: () => ({
		meta: [
			...pageMeta({
				title: PAGE_TITLE,
				description: PAGE_DESCRIPTION,
				path: "/insights",
			}),
		],
		links: [canonicalLink("/insights")],
		scripts: [
			jsonLd(insightsCollectionSchema(insights)),
			jsonLd(
				breadcrumbSchema("/insights", {
					insights: "China battery materials",
				}),
			),
		],
	}),
	component: InsightsIndexPage,
});
