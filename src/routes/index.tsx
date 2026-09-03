import { createFileRoute } from "@tanstack/react-router";
import { homeFaqs } from "../data/faqs";
import { canonicalLink, faqPageSchema, jsonLd, pageMeta } from "../lib/seo";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			...pageMeta({
				title: "RENOZ Energy | Perth Battery OEM",
				description:
					"Residential, rural, and commercial battery systems engineered for Australian conditions, with Perth-based engineering, supply, and support.",
				path: "/",
			}),
			{
				name: "keywords",
				content:
					"battery storage Perth, home battery backup WA, solar battery Western Australia, off-grid battery system, RENOZ Energy, lithium battery Perth, energy storage Australia, residential battery, rural battery, commercial battery",
			},
			{ name: "geo.region", content: "AU-WA" },
			{ name: "geo.placename", content: "Perth" },
			{ name: "geo.position", content: "-32.0501;115.7997" },
		],
		links: [
			{
				rel: "preload",
				as: "image",
				href: "/images/about/perth-skyline-kingspark-stylized.webp",
				fetchPriority: "high",
			},
			canonicalLink("/"),
		],
		scripts: [jsonLd(faqPageSchema(homeFaqs, "/"))],
	}),
});
