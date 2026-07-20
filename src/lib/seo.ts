/**
 * SEO/GEO utilities for RENOZ Energy.
 *
 * Keep this module safe to import from route head() functions: no top-level
 * browser-only or database clients. Dynamic data helpers import Supabase lazily.
 */

import { caseStudies } from "../data/case-studies";
import { documents } from "../data/documents";
import { type Guide, guidePath, guides } from "../data/guides";

/** Canonical public host. Must match the live Vercel primary domain (www). */
export const SITE_URL = "https://www.renoz.energy";
export const SITE_NAME = "RENOZ Energy";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/optimized/og-image.webp`;
export const SITEMAP_DEFAULT_LASTMOD = "2026-07-20";

export const companyFacts = {
	name: SITE_NAME,
	legalName: "RENOZ Energy Pty Ltd",
	abn: "56 674 982 408",
	acn: "674 982 408",
	phone: "1800 736 693",
	phoneInternational: "+611800736693",
	email: "sales@renoz.energy",
	supportEmail: "support@renoz.energy",
	warrantyEmail: "warranty@renoz.energy",
	address: {
		streetAddress: "Unit 4, 8 Murphy Street",
		addressLocality: "O'Connor",
		addressRegion: "WA",
		postalCode: "6163",
		addressCountry: "AU",
	},
	geo: {
		latitude: -32.0501,
		longitude: 115.7997,
	},
	serviceArea: "Western Australia",
	foundingDate: "2024",
	description:
		"Perth-based battery OEM of residential, rural, and commercial battery energy storage systems engineered for Australian conditions.",
	sameAs: [
		"https://www.linkedin.com/company/renoz-energy",
		"https://www.facebook.com/renozenergy",
		"https://www.youtube.com/@renozenergysolutions",
	],
	recognition: [
		"Smart Energy Council Gold Member",
		"GreenTech Hub 2025 finalist",
		"IEC 62619 compliant LV battery platform",
	],
};

export const productFacts = {
	residential: {
		name: "RENOZ Residential Battery Storage",
		path: "/products/residential",
		category: "Residential battery energy storage system",
		capacity: "10-50kWh",
		description:
			"Modular 10-50kWh LiFePO4 home battery systems for solar self-consumption, backup power, and Western Australian homes.",
		keyFacts: [
			"5.12kWh LV-5KWH100AH base module",
			"6,000 cycles at 80% depth of discharge",
			"Operates from -10°C to 55°C",
			"10-year replacement warranty",
			"Compatible with major inverter brands",
		],
		image: `${SITE_URL}/images/products/RENOZ Energy Garage Render.webp`,
	},
	rural: {
		name: "RENOZ Rural and Off-Grid Battery Storage",
		path: "/products/rural",
		category: "Rural battery energy storage system",
		capacity: "50-200kWh+",
		description:
			"Rural and off-grid battery systems for farms, remote properties, pumps, workshops, and diesel generator displacement.",
		keyFacts: [
			"Designed for grid-edge and off-grid properties",
			"Hybrid solar, battery, and generator integration",
			"High-surge agricultural load support",
			"Remote monitoring and WA installer support",
			"Typical 50-200kWh project range",
		],
		image: `${SITE_URL}/images/stock/homestead-rural.webp`,
	},
	commercial: {
		name: "RENOZ Commercial Battery Storage",
		path: "/products/commercial",
		category: "Commercial and industrial battery energy storage system",
		capacity: "100kWh to multi-MW",
		description:
			"Commercial and industrial BESS for peak demand management, microgrids, critical backup, and energy market participation.",
		keyFacts: [
			"100kWh to multi-MW project range",
			"Commercial, industrial, microgrid, and remote applications",
			"SCADA-ready control pathways",
			"Thermal management for harsh Australian heat",
			"WA-based project and lifecycle support",
		],
		image: `${SITE_URL}/images/stock/solar-microgrid-bess-drone-shot.webp`,
	},
} as const;

export const answerBlocks = [
	{
		id: "what-is-renoz-energy",
		question: "What is RENOZ Energy?",
		answer:
			"RENOZ Energy is a Perth-based battery OEM building residential, rural, and commercial battery energy storage systems for Australian conditions. The company is headquartered in O'Connor, Western Australia, and focuses on LiFePO4 battery systems, local technical support, installer enablement, and project pathways for homes, farms, remote properties, and commercial energy users. RENOZ positions itself as a local alternative to imported battery brands by combining Western Australian support with published technical documentation, warranty pathways, and evidence from installed systems across the state.",
		sourcePath: "/about",
	},
	{
		id: "is-renoz-australian-made",
		question: "Is RENOZ Australian-made?",
		answer:
			"RENOZ Energy is a Western Australian battery OEM headquartered in Perth. Its products are engineered, configured, tested, documented, and supported locally, with a roadmap toward deeper local manufacturing capability. The current proposition is best described as Perth-based battery OEM capability rather than a generic import-only reseller: RENOZ maintains local technical support, published compliance documents, partner enablement, warranty processing, and product evidence for Western Australian installers and customers.",
		sourcePath: "/about",
	},
	{
		id: "how-much-does-a-renoz-battery-cost",
		question: "How much does a RENOZ battery cost?",
		answer:
			"RENOZ battery pricing depends on capacity, inverter pathway, site requirements, and installation scope. Residential battery projects commonly sit in the 10-30kWh range, while rural and commercial systems are priced from project requirements such as surge loads, backup expectations, generator integration, and three-phase needs. RENOZ publishes indicative ranges in its AI-readable company briefing, but customers should treat those as guidance only and request a current quote through RENOZ or a certified installer because network approvals, site works, and state incentives can materially change installed cost.",
		sourcePath: "/contact",
	},
	{
		id: "what-warranty-does-renoz-offer",
		question: "What warranty does RENOZ offer?",
		answer:
			"RENOZ supports its battery systems with published warranty documentation and an online warranty registration pathway. The LV platform is positioned around a 10-year replacement warranty and capacity-retention coverage, supported by Perth-based warranty processing and installer coordination. Customers should register their installed system through the warranty portal and refer to the current product warranty PDF for exact eligibility, exclusions, required evidence, and claim process details.",
		sourcePath: "/warranty",
	},
	{
		id: "can-renoz-batteries-work-off-grid",
		question: "Can RENOZ batteries work off-grid?",
		answer:
			"Yes. RENOZ battery systems are designed for both grid-connected and off-grid use cases, especially Western Australian farms, remote properties, and weak-grid sites. Rural projects can combine solar, RENOZ battery storage, inverter control, and automated generator backup so the generator runs only when needed. Case studies such as the Harvey and Bally Bally installations show how RENOZ systems can reduce generator dependence, avoid expensive grid connection work, and provide quiet, reliable power for homes and farm operations.",
		sourcePath: "/products/rural",
	},
	{
		id: "renoz-vs-tesla-powerwall",
		question: "How does RENOZ compare with Tesla Powerwall?",
		answer:
			"RENOZ and Tesla Powerwall solve overlapping home battery problems, but they are optimized for different buying criteria. Tesla has very high brand recognition and a polished consumer ecosystem. RENOZ emphasizes larger modular capacity, local Perth support, installer relationships, published technical evidence, and fit for Western Australian heat, rural, and off-grid conditions. For buyers comparing options, the practical question is not only brand recognition; it is whether the system capacity, inverter pathway, warranty support, local service model, and site conditions match the job.",
		sourcePath: "/products/residential",
	},
];

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
	const { supabase } = await import("./supabase");
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
	const { supabase } = await import("./supabase");
	const [products, posts] = await Promise.all([
		supabase
			.from("website_products")
			.select("slug, updated_at")
			.eq("featured", true),
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
		{ url: "/partners", priority: 0.7, changefreq: "monthly" },
		{
			url: "/partners/capability-statement",
			priority: 0.7,
			changefreq: "monthly",
		},
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
	{ url: "/game-on", priority: 0.7, changefreq: "weekly" },
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
	{ url: "/cookies", priority: 0.3, changefreq: "yearly" },
];

export function siteUrl(path = "/") {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	const cleanPath =
		normalizedPath.length > 1 ? normalizedPath.replace(/\/+$/, "") : "/";
	return cleanPath === "/" ? SITE_URL : `${SITE_URL}${cleanPath}`;
}

/** Sitemap `<loc>` for a path. Homepage uses a trailing slash. */
export function sitemapLoc(path = "/") {
	return path === "/" ? `${SITE_URL}/` : siteUrl(path);
}

export function buildStaticSitemapXml(
	entries: SitemapUrl[] = staticSitemapEntries,
	defaultLastmod = SITEMAP_DEFAULT_LASTMOD,
) {
	const body = entries
		.map((entry) => {
			const lastmod = entry.lastmod || defaultLastmod;
			const changefreq = entry.changefreq || "monthly";
			const priority = entry.priority ?? 0.5;
			return `  <url>
    <loc>${sitemapLoc(entry.url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
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

export function canonicalLink(path = "/") {
	return {
		rel: "canonical",
		href: siteUrl(path),
	};
}

export function jsonLd(data: unknown) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(data),
	};
}

export function pageMeta({
	title,
	description,
	path,
	image = DEFAULT_OG_IMAGE,
	type = "website",
}: {
	title: string;
	description: string;
	path: string;
	image?: string;
	type?: "website" | "article" | "product";
}) {
	const url = siteUrl(path);
	return [
		{ title },
		{ name: "description", content: description },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:type", content: type },
		{ property: "og:image", content: image },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
	];
}

export function breadcrumbSchema(
	pathname: string,
	labels: Record<string, string> = {},
) {
	const segments = pathname.split("/").filter(Boolean);
	const itemListElement = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: SITE_URL,
		},
		...segments.map((segment, index) => {
			const currentPath = `/${segments.slice(0, index + 1).join("/")}`;
			return {
				"@type": "ListItem",
				position: index + 2,
				name:
					labels[currentPath] ||
					segment
						.split("-")
						.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
						.join(" "),
				item: siteUrl(currentPath),
			};
		}),
	];

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement,
	};
}

export function organizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: companyFacts.name,
		legalName: companyFacts.legalName,
		description: companyFacts.description,
		url: SITE_URL,
		logo: `${SITE_URL}/images/optimized/logo-renoz.webp`,
		image: DEFAULT_OG_IMAGE,
		address: {
			"@type": "PostalAddress",
			...companyFacts.address,
		},
		contactPoint: {
			"@type": "ContactPoint",
			telephone: companyFacts.phoneInternational,
			contactType: "customer service",
			availableLanguage: "English",
			areaServed: "AU",
		},
		foundingDate: companyFacts.foundingDate,
		founder: {
			"@type": "Person",
			name: "Simon Chan",
			jobTitle: "Chief Executive Officer",
		},
		knowsAbout: [
			"Battery energy storage systems",
			"LiFePO4 batteries",
			"Solar battery storage",
			"Off-grid power systems",
			"Commercial BESS",
		],
		sameAs: companyFacts.sameAs,
	};
}

export function localBusinessSchema() {
	return {
		...organizationSchema(),
		"@type": "LocalBusiness",
		"@id": `${SITE_URL}/#localbusiness`,
		priceRange: "$$",
		telephone: companyFacts.phoneInternational,
		email: companyFacts.email,
		geo: {
			"@type": "GeoCoordinates",
			...companyFacts.geo,
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "08:00",
				closes: "17:00",
			},
		],
		areaServed: {
			"@type": "State",
			name: companyFacts.serviceArea,
		},
	};
}

export function websiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		name: SITE_NAME,
		url: SITE_URL,
		description: companyFacts.description,
		publisher: { "@id": `${SITE_URL}/#organization` },
	};
}

export function productSchema(key: keyof typeof productFacts) {
	const product = productFacts[key];
	return {
		"@context": "https://schema.org",
		"@type": "Product",
		"@id": `${siteUrl(product.path)}#product`,
		name: product.name,
		category: product.category,
		description: product.description,
		image: product.image,
		brand: {
			"@type": "Brand",
			name: SITE_NAME,
		},
		manufacturer: { "@id": `${SITE_URL}/#organization` },
		additionalProperty: [
			{
				"@type": "PropertyValue",
				name: "Capacity range",
				value: product.capacity,
			},
			...product.keyFacts.map((fact) => ({
				"@type": "PropertyValue",
				name: "Evidence point",
				value: fact,
			})),
		],
	};
}

export function faqPageSchema(
	faqs: Array<{ question: string; answer: string }>,
	path: string,
) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"@id": `${siteUrl(path)}#faq`,
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}

/** Article JSON-LD for unlisted decision guides (no Guides hub breadcrumb). */
export function guideArticleSchema(guide: Guide) {
	const path = guidePath(guide.slug);
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${siteUrl(path)}#article`,
		headline: guide.title,
		description: guide.description,
		datePublished: guide.updated,
		dateModified: guide.updated,
		author: { "@id": `${SITE_URL}/#organization` },
		publisher: { "@id": `${SITE_URL}/#organization` },
		mainEntityOfPage: siteUrl(path),
		about: [
			"Battery energy storage",
			"Western Australia",
			...guide.relatedProductPaths.map((productPath) => siteUrl(productPath)),
		],
	};
}

export function caseStudySchema(slug: string) {
	const study = caseStudies.find((item) => item.slug === slug);
	if (!study) return null;
	const path = `/case-studies/${study.slug}`;
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${siteUrl(path)}#case-study`,
		headline: study.title,
		description: study.summary,
		image: siteUrl(study.image),
		datePublished: study.date,
		dateModified: study.date,
		author: { "@id": `${SITE_URL}/#organization` },
		publisher: { "@id": `${SITE_URL}/#organization` },
		mainEntityOfPage: siteUrl(path),
		about: [
			"Battery energy storage",
			"Solar battery installation",
			study.location,
			study.systemSize,
		],
		locationCreated: {
			"@type": "Place",
			name: study.location,
			address: {
				"@type": "PostalAddress",
				addressRegion: "WA",
				addressCountry: "AU",
			},
		},
	};
}

export function resourcesSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"@id": `${siteUrl("/resources")}#documents`,
		name: "RENOZ Energy technical evidence pack",
		description:
			"Datasheets, installation manuals, warranty documents, compliance declarations, and technical documents for RENOZ battery systems.",
		itemListElement: documents.map((doc, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "DigitalDocument",
				name: doc.title,
				encodingFormat: "application/pdf",
				datePublished: doc.date,
				url: siteUrl(doc.filename),
				about: doc.category,
			},
		})),
	};
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
