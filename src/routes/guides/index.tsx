import { createFileRoute } from "@tanstack/react-router";

import { GUIDE_LINKS, guidePath } from "@/data/guide-links";
import {
	breadcrumbSchema,
	canonicalLink,
	jsonLd,
	pageMeta,
	siteUrl,
} from "@/lib/seo";

const PAGE_TITLE = "Battery & Off-Grid Guides for Perth & WA | RENOZ Energy";
const PAGE_DESCRIPTION =
	"Plain-spoken guides to off-grid battery systems, 2026 WA rebates, costs, sizing, and inverter pairing — written by Perth's battery OEM for WA conditions.";

function guidesItemListSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: PAGE_TITLE,
		description: PAGE_DESCRIPTION,
		url: siteUrl("/guides"),
		mainEntity: {
			"@type": "ItemList",
			itemListElement: Object.entries(GUIDE_LINKS).map(
				([slug, title], index) => ({
					"@type": "ListItem",
					position: index + 1,
					name: title,
					url: siteUrl(guidePath(slug)),
				}),
			),
		},
	};
}

export const Route = createFileRoute("/guides/")({
	head: () => ({
		meta: [
			...pageMeta({
				title: PAGE_TITLE,
				description: PAGE_DESCRIPTION,
				path: "/guides",
			}),
		],
		links: [canonicalLink("/guides")],
		scripts: [
			jsonLd(guidesItemListSchema()),
			jsonLd(breadcrumbSchema("/guides", { guides: "Guides" })),
		],
	}),
});
