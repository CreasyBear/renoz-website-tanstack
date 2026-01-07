/**
 * SEO Utilities for RENOZ Energy Website
 * Based on Supabase and TanStack documentation best practices
 */

import { supabase } from "./supabase";

// SEO Data Types
interface SitemapUrl {
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

interface SEOData {
	sitemap?: SitemapUrl[];
	breadcrumbs?: Array<{
		name: string;
		url: string;
	}>;
	[key: string]: unknown;
}

// Generate dynamic meta tags from database
export async function generateProductMeta(slug: string) {
	const { data: product } = await supabase
		.from("website_products")
		.select("name, description, images")
		.eq("slug", slug)
		.single();

	if (!product) return null;

	return {
		title: `${product.name} - RENOZ Energy`,
		description: product.description?.substring(0, 160),
		image: product.images?.[0],
		structuredData: {
			"@context": "https://schema.org",
			"@type": "Product",
			name: product.name,
			description: product.description,
			manufacturer: {
				"@type": "Organization",
				name: "RENOZ Energy",
				address: {
					"@type": "PostalAddress",
					addressLocality: "O'Connor",
					addressRegion: "WA",
					addressCountry: "AU",
				},
			},
		},
	};
}

// Generate sitemap from database (Supabase docs recommendation)
export async function generateSitemap() {
	const [products, posts] = await Promise.all([
		supabase.from("website_products").select("slug, updated_at").eq("featured", true),
		supabase.from("posts").select("slug, updated_at").eq("published", true),
	]);

	const urls = [
		{ url: "/", priority: 1.0, changefreq: "weekly" },
		{ url: "/about", priority: 0.9, changefreq: "monthly" },
		{ url: "/contact", priority: 0.8, changefreq: "monthly" },
		{ url: "/products", priority: 0.9, changefreq: "weekly" },
		{ url: "/products/residential", priority: 0.8, changefreq: "weekly" },
		{ url: "/products/rural", priority: 0.8, changefreq: "weekly" },
		{ url: "/products/commercial", priority: 0.8, changefreq: "weekly" },
		{ url: "/case-studies", priority: 0.8, changefreq: "weekly" },
		{ url: "/resources", priority: 0.7, changefreq: "weekly" },
		{ url: "/homeowners", priority: 0.7, changefreq: "monthly" },
		{ url: "/installers", priority: 0.7, changefreq: "monthly" },
		{ url: "/warranty", priority: 0.6, changefreq: "monthly" },
		{ url: "/privacy", priority: 0.3, changefreq: "yearly" },
		{ url: "/terms", priority: 0.3, changefreq: "yearly" },
		{ url: "/cookies", priority: 0.3, changefreq: "yearly" },
		...(products.data?.map((p) => ({
			url: `/products/${p.slug}`,
			priority: 0.8,
			changefreq: "weekly" as const,
			lastmod: p.updated_at,
		})) || []),
		...(posts.data?.map((p) => ({
			url: `/blog/${p.slug}`,
			priority: 0.7,
			changefreq: "monthly" as const,
			lastmod: p.updated_at,
		})) || []),
	];

	return urls;
}

// Cache SEO data (TanStack Start optimization)
const seoCache = new Map<string, SEOData>();

export async function getCachedSEO<T extends SEOData>(
	key: string,
	fetcher: () => Promise<T>,
): Promise<T> {
	if (seoCache.has(key)) {
		return seoCache.get(key) as T;
	}

	const result = await fetcher();
	seoCache.set(key, result);

	// Cache for 5 minutes
	setTimeout(() => seoCache.delete(key), 5 * 60 * 1000);

	return result;
}

// Generate breadcrumbs structured data (Supabase SEO best practice)
export function generateBreadcrumbs(pathname: string) {
	const segments = pathname.split("/").filter(Boolean);
	const breadcrumbs = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: "https://renoz.energy",
		},
	];

	let currentPath = "";
	segments.forEach((segment, index) => {
		currentPath += `/${segment}`;
		breadcrumbs.push({
			"@type": "ListItem",
			position: index + 2,
			name:
				segment.charAt(0).toUpperCase() + segment.slice(1).replace("-", " "),
			item: `https://renoz.energy${currentPath}`,
		});
	});

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs,
	};
}

// TanStack Start ISR utility for SEO content
export function createISRLoader<T>(
	fetcher: () => Promise<T>,
	options: {
		staleTime?: number;
		cacheKey?: string;
	} = {},
) {
	const { staleTime = 1000 * 60 * 5, cacheKey } = options; // 5 minutes default

	return async () => {
		const data = await fetcher();

		// Add ISR metadata for TanStack Start
		return {
			...data,
			_isr: {
				staleTime,
				cacheKey: cacheKey || "default",
			},
		};
	};
}

/*
USAGE EXAMPLES:

// 1. Dynamic Product Meta Tags (src/routes/products/$slug.tsx)
export const Route = createFileRoute('/products/$slug')({
  loader: async ({ params }) => {
    const productMeta = await getCachedSEO(
      `product-${params.slug}`,
      () => generateProductMeta(params.slug)
    );
    return productMeta;
  },
  meta: ({ loaderData }) => [
    { title: loaderData?.title },
    { name: 'description', content: loaderData?.description },
    { property: 'og:image', content: loaderData?.image },
    // Structured data for rich snippets
    {
      type: 'application/ld+json',
      children: JSON.stringify(loaderData?.structuredData)
    }
  ]
});

// 2. ISR for Blog Posts (src/routes/blog/$slug.tsx)
export const Route = createFileRoute('/blog/$slug')({
  loader: createISRLoader(
    async ({ params }) => {
      return await supabase
        .from('posts')
        .select('*')
        .eq('slug', params.slug)
        .eq('published', true)
        .single();
    },
    { staleTime: 1000 * 60 * 60 } // 1 hour
  ),
  meta: ({ loaderData }) => [
    { title: loaderData?.title },
    { name: 'description', content: loaderData?.excerpt },
    { name: 'author', content: loaderData?.author }
  ]
});
*/

// Optimize images for SEO (WebP conversion with fallbacks)
export function optimizeImageUrl(
	originalUrl: string,
	options: {
		width?: number;
		height?: number;
		quality?: number;
	} = {},
) {
	if (!originalUrl) return originalUrl;

	// Convert to WebP if not already
	const webpUrl = originalUrl.replace(/\.(jpg|jpeg|png)$/i, ".webp");

	// Add Supabase image transformation parameters
	const params = new URLSearchParams();
	if (options.width) params.set("width", options.width.toString());
	if (options.height) params.set("height", options.height.toString());
	if (options.quality) params.set("quality", options.quality.toString());

	const queryString = params.toString();
	return queryString ? `${webpUrl}?${queryString}` : webpUrl;
}
