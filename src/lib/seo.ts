/**
 * SEO/GEO utilities for RENOZ Energy.
 *
 * Keep this module safe to import from route head() functions: no top-level
 * browser-only or database clients. The live sitemap is buildStaticSitemapXml.
 */

import { caseStudies } from "../data/case-studies";
import { documents } from "../data/documents";
import { type Guide, guidePath, guides } from "../data/guides";
import {
	INSIGHTS_PATH,
	type Insight,
	insightPath,
	insights,
} from "../data/insights";
import { PRODUCT_SEGMENTS } from "../data/product-catalog";

/** Canonical public host. Must match the live Vercel primary domain (www). */
export const SITE_URL = "https://www.renoz.energy";
export const SITE_NAME = "RENOZ Energy";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/optimized/og-image.webp`;

/** Representative social and structured-data images for editorial pages. */
export const ARTICLE_IMAGE_PATHS: Readonly<Record<string, string>> = {
	"living-with-a-generator-wa":
		"/images/stock/shed-with-solar-wheat-field-2.webp",
	"generator-vs-solar-battery-farm-wa": "/images/stock/wheat-field.webp",
	"grid-connection-vs-off-grid-wa": "/images/stock/homestead-rural.webp",
	"generator-running-costs-wa":
		"/images/stock/shed-with-solar-wheat-field.webp",
	"off-grid-power-shed-wa": "/images/stock/garage-renoz-1.webp",
	"stand-alone-power-system-wa":
		"/images/stock/solar-microgrid-bess-drone-shot.webp",
	"is-it-worth-going-off-grid-wa":
		"/images/stock/long-exposure-homestead-night-lights-rural.webp",
	"off-grid-battery-systems-perth":
		"/images/stock/long-exposure-homestead-night-lights-rural-2.webp",
	"off-grid-system-cost-wa": "/images/stock/homestead-rural.webp",
	"wa-battery-rebates-cec": "/images/stock/corner-street-house-lights-on.webp",
	"battery-sizing-off-grid-wa":
		"/images/stock/solar-microgrid-bess-drone-shot.webp",
	"off-grid-vs-hybrid-perth": "/images/stock/coastal-home-1.webp",
	"renoz-vs-powerwall-sigenergy": "/images/stock/home-tesla-night.webp",
	"perth-battery-oem": "/images/about/team-warehouse.webp",
	"renoz-with-victron": "/images/stock/renoz-stacking.webp",
	"renoz-with-selectronic": "/images/case-studies/Harvey-35kWh.webp",
	"renoz-with-deye": "/images/stock/garage-renoz-1.webp",
	"renoz-with-goodwe-sungrow": "/images/stock/garage-renoz-2.webp",
	"off-grid-solar-perth-hills":
		"/images/stock/cinematic-wheat-landscape-storm.webp",
	"off-grid-power-wheatbelt-wa": "/images/stock/wheat-field.webp",
	"off-grid-solar-south-west-wa": "/images/stock/coastal-home-2.webp",
	"off-grid-solar-great-southern-wa": "/images/stock/coastal-home-storm-1.webp",
	"fringe-of-grid-battery-wa":
		"/images/stock/long-exposure-homestead-night-lights-rural.webp",
	"diesel-to-battery-wa-farms":
		"/images/stock/shed-with-solar-wheat-field.webp",
	"commercial-bess-50-200kwh-wa": "/images/stock/winery-bess-1.webp",
	"battery-fire-suppression-essential":
		"/images/products/commercial/Brill-Power-System-Detail.webp",
	"48v-vs-high-voltage-battery-system":
		"/images/products/LV-Stackable-White.webp",
	"active-balancing-battery-packs":
		"/images/products/commercial/cell-production-line.webp",
	"pack-level-bms-integration":
		"/images/products/commercial/Brill-Power-System.webp",
	"battery-state-of-health": "/images/stock/renoz-ccs.webp",
	"best-off-grid-battery-australia":
		"/images/stock/long-exposure-homestead-night-lights-rural.webp",
	"best-off-grid-battery-perth": "/images/stock/garage-renoz-2.webp",
	"best-solar-battery-australia": "/images/stock/coastal-home-1.webp",
	"china-lithium-materials-third-cycle":
		"/images/products/commercial/cell-production-line.webp",
	"cathode-tonnes-per-gwh-lfp-ncm-sodium":
		"/images/products/commercial/Brill-Power-System-Detail.webp",
	"china-lfp-price-signal-august-2026":
		"/images/products/commercial/IMG_1993.JPEG",
	"sdic-china-lithium-supply-demand-2026":
		"/images/products/commercial/Brill-Power-System.webp",
};

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
		name: PRODUCT_SEGMENTS.residential.name,
		path: PRODUCT_SEGMENTS.residential.path,
		category: PRODUCT_SEGMENTS.residential.category,
		capacity: PRODUCT_SEGMENTS.residential.capacitySeo,
		description: PRODUCT_SEGMENTS.residential.description,
		keyFacts: PRODUCT_SEGMENTS.residential.keyFacts,
		image: `${SITE_URL}${PRODUCT_SEGMENTS.residential.imagePath}`,
	},
	rural: {
		name: PRODUCT_SEGMENTS.rural.name,
		path: PRODUCT_SEGMENTS.rural.path,
		category: PRODUCT_SEGMENTS.rural.category,
		capacity: PRODUCT_SEGMENTS.rural.capacitySeo,
		description: PRODUCT_SEGMENTS.rural.description,
		keyFacts: PRODUCT_SEGMENTS.rural.keyFacts,
		image: `${SITE_URL}${PRODUCT_SEGMENTS.rural.imagePath}`,
	},
	commercial: {
		name: PRODUCT_SEGMENTS.commercial.name,
		path: PRODUCT_SEGMENTS.commercial.path,
		category: PRODUCT_SEGMENTS.commercial.category,
		capacity: PRODUCT_SEGMENTS.commercial.capacitySeo,
		description: PRODUCT_SEGMENTS.commercial.description,
		keyFacts: PRODUCT_SEGMENTS.commercial.keyFacts,
		image: `${SITE_URL}${PRODUCT_SEGMENTS.commercial.imagePath}`,
	},
} as const;

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

export function siteUrl(path = "/") {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	const cleanPath =
		normalizedPath.length > 1 ? normalizedPath.replace(/\/+$/, "") : "/";
	return cleanPath === "/" ? SITE_URL : `${SITE_URL}${cleanPath}`;
}

export function articleImageUrl(slug: string) {
	const imagePath = ARTICLE_IMAGE_PATHS[slug];
	return imagePath ? siteUrl(imagePath) : DEFAULT_OG_IMAGE;
}

/** Sitemap `<loc>` for a path. Homepage uses a trailing slash. */
export function sitemapLoc(path = "/") {
	return path === "/" ? `${SITE_URL}/` : siteUrl(path);
}

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

export function canonicalLink(path = "/") {
	return {
		rel: "canonical",
		href: siteUrl(path),
	};
}

const JSON_LD_HTML_ESCAPES: Record<string, string> = {
	"<": "\\u003c",
	">": "\\u003e",
	"&": "\\u0026",
};

export function serializeJsonLd(data: unknown): string {
	return JSON.stringify(data).replace(
		/[<>&]/g,
		(character) => JSON_LD_HTML_ESCAPES[character] ?? character,
	);
}

export function jsonLd(data: unknown) {
	return {
		type: "application/ld+json",
		children: serializeJsonLd(data),
	};
}

export function pageMeta({
	title,
	description,
	path,
	image = DEFAULT_OG_IMAGE,
	type = "website",
	noindex = false,
}: {
	title: string;
	description: string;
	path: string;
	image?: string;
	type?: "website" | "article" | "product";
	/** Legal/utility pages that should stay reachable but out of the index */
	noindex?: boolean;
}) {
	const url = siteUrl(path);
	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "robots",
			content: noindex
				? "noindex, follow"
				: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
		},
		{
			name: "googlebot",
			content: noindex
				? "noindex, follow"
				: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
		},
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:type", content: type },
		{ property: "og:locale", content: "en_AU" },
		{ property: "og:image", content: image },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:image:alt", content: title },
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
		image: articleImageUrl(guide.slug),
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
export function insightsCollectionSchema(items: Insight[]) {
	const path = INSIGHTS_PATH;
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"@id": `${siteUrl(path)}#collection`,
		name: "China battery materials notes",
		description:
			"English briefings of Chinese battery-material sources — conversion identities, spot prints, broker notes and cycle reports behind WeChat — with original links attached.",
		url: siteUrl(path),
		mainEntity: {
			"@type": "ItemList",
			itemListElement: items.map((item, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: item.title,
				url: siteUrl(insightPath(item.slug)),
				description: item.description,
			})),
		},
	};
}

export function insightArticleSchema(insight: Insight) {
	const path = insightPath(insight.slug);
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${siteUrl(path)}#article`,
		headline: insight.title,
		description: insight.description,
		image: articleImageUrl(insight.slug),
		datePublished: insight.published,
		dateModified: insight.updated,
		articleSection: "China battery materials",
		isAccessibleForFree: true,
		author: { "@id": `${SITE_URL}/#organization` },
		publisher: { "@id": `${SITE_URL}/#organization` },
		mainEntityOfPage: siteUrl(path),
		about: insight.about,
		citation: insight.sources.map((source) => source.url),
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
