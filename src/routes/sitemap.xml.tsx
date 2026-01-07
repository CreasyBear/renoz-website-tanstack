import { createFileRoute } from "@tanstack/react-router";
import { generateSitemap } from "../lib/seo";

export const Route = createFileRoute("/sitemap/xml")({
	server: {
		handlers: {
			GET: async () => {
				// Server-side data fetching (TanStack Start)
				const sitemapData = await generateSitemap();

				const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData
	.map(
		(entry: {
			url: string;
			lastmod?: string;
			changefreq: string;
			priority: number;
		}) => `  <url>
    <loc>${entry.url.startsWith("http") ? entry.url : `https://renoz.energy${entry.url}`}</loc>
    <lastmod>${entry.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${entry.changefreq || "monthly"}</changefreq>
    <priority>${entry.priority || 0.5}</priority>
  </url>`,
	)
	.join("\n")}
</urlset>`;

				return new Response(sitemapXml, {
					headers: {
						"Content-Type": "application/xml",
						"Cache-Control": "public, max-age=3600", // Cache for 1 hour
					},
				});
			},
		},
	},
});
