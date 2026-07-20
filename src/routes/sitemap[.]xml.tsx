import { createFileRoute } from "@tanstack/react-router";
import { buildStaticSitemapXml } from "../lib/seo";

/**
 * Canonical sitemap for crawlers. File name uses `[.]` so the path is
 * `/sitemap.xml` (not `/sitemap/xml`). Robots.txt points here.
 */
export const Route = createFileRoute("/sitemap.xml")({
	server: {
		handlers: {
			GET: async () => {
				return new Response(buildStaticSitemapXml(), {
					headers: {
						"Content-Type": "application/xml; charset=utf-8",
						"Cache-Control": "public, max-age=3600",
					},
				});
			},
		},
	},
});
