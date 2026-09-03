import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contactFaqs, homeFaqs } from "../data/faqs";
import { GUIDE_LINK_SETS, guideSlugs, guides } from "../data/guides";
import { insights } from "../data/insights";
import { NAV_CTA, PRIMARY_NAV } from "../data/nav";
import { PRODUCT_SEGMENTS } from "../data/product-catalog";
import { Route as AboutRoute } from "../routes/about";
import { Route as CaseStudiesRoute } from "../routes/case-studies/index";
import { Route as HomeownersRoute } from "../routes/homeowners";
import { Route as HomepageRoute } from "../routes/index";
import { Route as PartnersRoute } from "../routes/partners";
import { Route as CommercialRoute } from "../routes/products/commercial";
import { Route as ResidentialRoute } from "../routes/products/residential";
import { Route as RuralRoute } from "../routes/products/rural";
import {
	ARTICLE_IMAGE_PATHS,
	articleImageUrl,
	breadcrumbSchema,
	buildStaticSitemapXml,
	canonicalLink,
	caseStudySchema,
	faqPageSchema,
	guideArticleSchema,
	insightArticleSchema,
	jsonLd,
	pageMeta,
	productSchema,
	SITE_URL,
	serializeJsonLd,
	sitemapLoc,
	siteUrl,
	staticSitemapEntries,
} from "./seo";

const root = process.cwd();

function readPublic(path: string) {
	return readFileSync(join(root, "public", path), "utf8");
}
type RouteHeadOutput = {
	meta?: readonly Record<string, unknown>[];
	links?: readonly Record<string, unknown>[];
};

type RouteHead = {
	options: {
		head?: () => RouteHeadOutput;
	};
};

function routeHead(route: unknown): RouteHeadOutput {
	const head = (route as RouteHead).options.head;
	return head ? head() : {};
}

function metaValue(head: RouteHeadOutput, key: "title" | "description") {
	for (const entry of head.meta ?? []) {
		if (key === "title" && "title" in entry) return entry.title;
		if (key === "description" && entry.name === "description") {
			return entry.content;
		}
	}
	return undefined;
}

function readSrc(path: string) {
	return readFileSync(join(root, "src", path), "utf8");
}

describe("SEO helpers", () => {
	it("normalizes canonical site URLs on the www host", () => {
		expect(SITE_URL).toBe("https://www.renoz.energy");
		expect(siteUrl("/")).toBe("https://www.renoz.energy");
		expect(siteUrl("products/residential/")).toBe(
			"https://www.renoz.energy/products/residential",
		);
		expect(canonicalLink("/about")).toEqual({
			rel: "canonical",
			href: "https://www.renoz.energy/about",
		});
		expect(sitemapLoc("/")).toBe("https://www.renoz.energy/");
	});

	it("emits parseable JSON-LD scripts", () => {
		const script = jsonLd(productSchema("residential"));
		expect(script.type).toBe("application/ld+json");
		expect(JSON.parse(script.children)).toMatchObject({
			"@type": "Product",
			name: "RENOZ Residential Battery Storage",
		});
	});

	it("unicode-escapes JSON-LD so markup cannot close the script tag", () => {
		const payload = {
			name: "Evil</script><img src=x onerror=alert(1)>",
			note: "Ben & Jerry",
		};
		const serialized = serializeJsonLd(payload);
		expect(serialized).not.toContain("</script");
		expect(serialized).not.toContain("<img");
		expect(serialized).not.toContain("<!--");
		expect(serialized).toContain("\\u003c");
		expect(serialized).toContain("\\u0026");
		expect(JSON.parse(serialized)).toEqual(payload);
		expect(jsonLd(payload).children).toBe(serialized);
	});

	it("lets pageMeta own robots so noindex pages are not also tagged index", () => {
		const indexed = pageMeta({
			title: "Indexed",
			description: "Public page",
			path: "/",
		});
		const hidden = pageMeta({
			title: "Cookies",
			description: "Policy",
			path: "/cookies",
			noindex: true,
		});
		expect(indexed.find((entry) => entry.name === "robots")?.content).toContain(
			"index, follow",
		);
		expect(hidden.find((entry) => entry.name === "robots")?.content).toBe(
			"noindex, follow",
		);
		expect(readSrc("routes/__root.tsx")).not.toContain("index, follow");
		expect(readSrc("routes/__root.tsx")).not.toContain('name: "robots"');
	});

	it("builds breadcrumb positions from the URL hierarchy", () => {
		const schema = breadcrumbSchema("/products/residential", {
			"/products": "Products",
			"/products/residential": "Residential Battery Storage",
		});
		expect(schema.itemListElement.map((item) => item.position)).toEqual([
			1, 2, 3,
		]);
		expect(schema.itemListElement.at(-1)?.name).toBe(
			"Residential Battery Storage",
		);
	});

	it("generates FAQ schema from visible FAQ data", () => {
		const homeSchema = faqPageSchema(homeFaqs, "/");
		const contactSchema = faqPageSchema(contactFaqs, "/contact");
		expect(homeSchema.mainEntity).toHaveLength(homeFaqs.length);
		expect(contactSchema.mainEntity).toHaveLength(contactFaqs.length);
		expect(homeSchema.mainEntity[0].acceptedAnswer.text).toBe(
			homeFaqs[0].answer,
		);
	});

	it("builds Article schema for Wave 1 guides", () => {
		const guide = guides[0];
		expect(guideArticleSchema(guide)).toMatchObject({
			"@type": "Article",
			headline: guide.title,
			image: articleImageUrl(guide.slug),
			dateModified: guide.updated,
		});

		const insight = insights[0];
		expect(insightArticleSchema(insight)).toMatchObject({
			"@type": "Article",
			headline: insight.title,
			image: articleImageUrl(insight.slug),
		});
	});

	it("gives every editorial article a representative public image", () => {
		for (const article of [...guides, ...insights]) {
			const imagePath = ARTICLE_IMAGE_PATHS[article.slug];
			expect(imagePath, article.slug).toBeTruthy();
			expect(existsSync(join(root, "public", imagePath)), imagePath).toBe(true);
			expect(articleImageUrl(article.slug)).toBe(siteUrl(imagePath));
		}
	});
});

describe("sitemap and agent files", () => {
	it("keeps the shared sitemap route list aligned with public priorities", () => {
		const urls = staticSitemapEntries.map((entry) => entry.url);
		expect(urls).toContain("/partners");
		expect(urls).toContain("/partners/capability-statement");
		expect(urls).toContain("/case-studies/harvey-farm");
		expect(urls).not.toContain("/game-on");
		expect(urls).not.toContain("/installers");
		for (const slug of guideSlugs) {
			expect(urls).toContain(`/guides/${slug}`);
		}
		expect(urls).toContain("/insights");
		expect(urls).toContain("/insights/china-lithium-materials-third-cycle");
		expect(urls).toContain("/insights/china-lfp-price-signal-august-2026");
		expect(urls).toContain("/insights/sdic-china-lithium-supply-demand-2026");
		expect(urls).toContain("/insights/cathode-tonnes-per-gwh-lfp-ncm-sodium");
	});

	it("builds sitemap XML from the shared route list with www locs", () => {
		const sitemap = buildStaticSitemapXml();
		for (const entry of staticSitemapEntries) {
			expect(sitemap).toContain(`<loc>${sitemapLoc(entry.url)}</loc>`);
		}
		expect(sitemap).not.toContain("/game-on");
		expect(sitemap).toContain(
			"<loc>https://www.renoz.energy/guides/wa-battery-rebates-cec</loc>",
		);
		expect(sitemap).not.toContain("/installers");
		expect(sitemap).not.toContain("https://renoz.energy/");
	});

	it("only emits sitemap lastmod values backed by a content date", () => {
		const sitemap = buildStaticSitemapXml();
		const homepage = sitemap.match(
			/<url>\s*<loc>https:\/\/www\.renoz\.energy\/<\/loc>[\s\S]*?<\/url>/,
		)?.[0];
		const guide = guides[0];
		const guideEntry = sitemap.match(
			new RegExp(
				`<url>\\s*<loc>${siteUrl(`/guides/${guide.slug}`)}<\\/loc>[\\s\\S]*?<\\/url>`,
			),
		)?.[0];

		expect(homepage).not.toContain("<lastmod>");
		expect(guideEntry).toContain(`<lastmod>${guide.updated}</lastmod>`);
	});

	it("does not ship a static public/sitemap.xml (dynamic route is SoT)", () => {
		expect(() => readPublic("sitemap.xml")).toThrow();
	});

	it("parses case study schema for known case studies", () => {
		const schema = caseStudySchema("harvey-farm");
		expect(schema).toMatchObject({
			"@type": "Article",
			headline: "Dream Home Journey: Off-Grid Family Living",
		});
	});

	it("lists decision guides in llms discovery files", () => {
		const llms = readPublic("llms.txt");
		const llmsFull = readPublic("llms-full.txt");
		expect(llms).toContain("Decision guides");
		expect(llmsFull).toContain("Decision guides");
		for (const slug of guideSlugs) {
			expect(llms).toContain(`/guides/${slug}`);
			expect(llmsFull).toContain(`/guides/${slug}`);
		}
		expect(llms).toContain("/insights/china-lithium-materials-third-cycle");
		expect(llms).toContain("/insights/china-lfp-price-signal-august-2026");
		expect(llms).toContain("/insights/sdic-china-lithium-supply-demand-2026");
		expect(llms).toContain("/insights/cathode-tonnes-per-gwh-lfp-ncm-sodium");
		expect(llmsFull).toContain(
			"/insights/sdic-china-lithium-supply-demand-2026",
		);
		expect(llms).not.toContain("5.0/5.0 (Google Reviews)");
		expect(llms).not.toContain("4.9/5");
		expect(llms).not.toContain("30-40% more affordable");
		expect(llms).not.toContain("no thermal runaway risk");
		expect(llms).not.toContain("5-50 kWh");
		expect(llms).toContain("10–50 kWh");
		expect(llms).toContain("HC-125K-261-02B");
	});

	it("exposes the public guide hub in primary and secondary navigation", () => {
		expect(readSrc("data/nav.ts")).toContain('/guides"');
		expect(readSrc("components/layout/Footer.tsx")).toContain("/guides");
		expect(readSrc("routes/index.lazy.tsx")).toContain('to="/guides"');
	});

	it("keeps primary navigation to four destinations plus a contact CTA", () => {
		expect(PRIMARY_NAV.map((item) => item.label)).toEqual([
			"Products",
			"Partners",
			"Learn",
			"About",
		]);
		expect(NAV_CTA).toEqual({ to: "/contact", label: "Talk to us" });
		const learn = PRIMARY_NAV.find((item) => item.label === "Learn");
		expect(learn?.children?.some((child) => child.to === "/guides")).toBe(true);
	});

	it("keeps the cookie policy reachable but out of the crawl set", () => {
		const sitemap = buildStaticSitemapXml();
		expect(sitemap).not.toContain("/cookies");
		expect(readPublic("robots.txt")).toContain("Disallow: /cookies");
		expect(readSrc("routes/cookies.tsx")).toContain("noindex: true");
	});

	it("keeps route metadata distinct and canonical", () => {
		const routes = [
			[
				"/",
				HomepageRoute,
				"RENOZ Energy | Perth Battery OEM",
				"Residential, rural, and commercial battery systems engineered for Australian conditions, with Perth-based engineering, supply, and support.",
			],
			[
				"/homeowners",
				HomeownersRoute,
				"Solar Battery Decisions for Perth Homeowners | RENOZ Energy",
				"A clear path from solar savings and backup needs to battery sizing, rebate checks, and a qualified installer for your Western Australian home.",
			],
			[
				"/products/residential",
				ResidentialRoute,
				"Home Battery Storage Perth | RENOZ Energy",
				"Modular 10-50kWh home battery systems for solar self-consumption, backup, and Western Australian homes. Review specifications, compatibility pathways, and support.",
			],
			[
				"/products/rural",
				RuralRoute,
				"Farm & Rural Battery Storage WA | RENOZ Energy",
				PRODUCT_SEGMENTS.rural.seoDescription,
			],
			[
				"/products/commercial",
				CommercialRoute,
				"Commercial Battery Storage Perth | RENOZ Energy",
				PRODUCT_SEGMENTS.commercial.seoDescription,
			],
			[
				"/about",
				AboutRoute,
				"About RENOZ Energy | WA Battery Engineering",
				"Meet the Perth team engineering, supplying, and supporting battery energy storage systems for Western Australian homes, farms, and businesses.",
			],
			[
				"/partners",
				PartnersRoute,
				"RENOZ Partner Program | Installers, Distributors & Developers",
				"Trade partners can access RENOZ battery supply, engineering support, local stock, and project pathways across Western Australia.",
			],
			[
				"/case-studies",
				CaseStudiesRoute,
				"RENOZ Battery Case Studies | WA Installations",
				"Documented RENOZ battery installations across Western Australia, with project context for homes, farms, and businesses.",
			],
		] as const;

		const titles = routes.map(([, route]) =>
			metaValue(routeHead(route), "title"),
		);
		expect(new Set(titles).size).toBe(routes.length);

		for (const [path, route, title, description] of routes) {
			const head = routeHead(route);
			expect(metaValue(head, "title")).toBe(title);
			expect(metaValue(head, "description")).toBe(description);
			expect(head.links).toContainEqual(canonicalLink(path));
		}
	});

	it("keeps guide strips and proof links on their intended paths", () => {
		expect(GUIDE_LINK_SETS.home).toEqual([
			"wa-battery-rebates-cec",
			"off-grid-system-cost-wa",
			"off-grid-power-wheatbelt-wa",
			"off-grid-solar-great-southern-wa",
			"diesel-to-battery-wa-farms",
			"battery-state-of-health",
		]);
		expect(GUIDE_LINK_SETS.residential).toEqual([
			"wa-battery-rebates-cec",
			"off-grid-vs-hybrid-perth",
			"renoz-vs-powerwall-sigenergy",
			"48v-vs-high-voltage-battery-system",
			"battery-state-of-health",
			"renoz-with-deye",
			"renoz-with-goodwe-sungrow",
		]);
		expect(GUIDE_LINK_SETS.rural).toEqual([
			"off-grid-battery-systems-perth",
			"diesel-to-battery-wa-farms",
			"48v-vs-high-voltage-battery-system",
			"battery-state-of-health",
			"active-balancing-battery-packs",
			"pack-level-bms-integration",
			"renoz-with-victron",
			"renoz-with-selectronic",
			"off-grid-power-wheatbelt-wa",
		]);
		expect(GUIDE_LINK_SETS.commercial).toEqual([
			"commercial-bess-50-200kwh-wa",
			"battery-fire-suppression-essential",
			"fringe-of-grid-battery-wa",
			"48v-vs-high-voltage-battery-system",
			"battery-state-of-health",
			"active-balancing-battery-packs",
			"pack-level-bms-integration",
		]);
		expect(GUIDE_LINK_SETS.resources).toEqual([
			"battery-fire-suppression-essential",
			"48v-vs-high-voltage-battery-system",
			"battery-state-of-health",
			"active-balancing-battery-packs",
			"pack-level-bms-integration",
			"renoz-with-victron",
			"renoz-with-selectronic",
			"renoz-with-deye",
			"renoz-with-goodwe-sungrow",
		]);
		expect(GUIDE_LINK_SETS.partners).toEqual([
			"perth-battery-oem",
			"commercial-bess-50-200kwh-wa",
			"renoz-with-selectronic",
		]);
		expect(GUIDE_LINK_SETS.caseStudies).toEqual([
			"off-grid-battery-systems-perth",
			"diesel-to-battery-wa-farms",
			"renoz-with-selectronic",
		]);

		const offGridGuide = guides.find(
			(guide) => guide.slug === "off-grid-battery-systems-perth",
		);
		expect(offGridGuide?.proofLinks).toContainEqual({
			label: "Rural and off-grid battery systems",
			href: "/products/rural",
		});
	});

	it("exposes expected robots and agent discovery files", () => {
		const robots = readPublic("robots.txt");
		expect(robots.match(/^User-agent: .*$/gm)).toEqual(["User-agent: *"]);
		expect(robots).toContain("Disallow: /api/");
		expect(robots).toContain("Allow: /llms-full.txt");
		expect(robots).toContain("Allow: /.well-known/reasoning.json");
		expect(robots).toContain("Sitemap: https://www.renoz.energy/sitemap.xml");
		expect(robots).not.toContain("Crawl-delay");

		const llms = readPublic("llms.txt");
		const llmsFull = readPublic("llms-full.txt");
		expect(llmsFull).toContain("RENOZ Energy Full AI Briefing");
		expect(llmsFull).toContain("Common Hallucination Corrections");
		expect(llmsFull).toContain("Machine-Readable Endpoints");
		expect(llms).toContain(
			"https://www.renoz.energy/.well-known/reasoning.json",
		);
		expect(llms).toContain(
			"https://www.renoz.energy/.well-known/ai-manifest.json",
		);

		const reasoning = JSON.parse(readPublic(".well-known/reasoning.json"));
		const reasoningAlias = JSON.parse(readPublic("reasoning.json"));
		expect(reasoningAlias).toEqual(reasoning);
		expect(reasoning).toMatchObject({
			protocol: "Agentic Reasoning Protocol",
			entity: { name: "RENOZ Energy" },
		});
		expect(reasoning.entity_claims.recommendation_context).toBeTruthy();
		expect(reasoning.content_map.llms_full).toBe(
			"https://www.renoz.energy/llms-full.txt",
		);
		expect(reasoning.agent_instructions.preferred_summary).toContain(
			"Perth-based battery energy storage OEM",
		);
		expect(reasoning.content_map.sitemap).toBe(
			"https://www.renoz.energy/sitemap.xml",
		);

		const manifest = JSON.parse(readPublic(".well-known/ai-manifest.json"));
		expect(manifest.ai_access).toMatchObject({
			llms_txt: "/llms.txt",
			llms_full: "/llms-full.txt",
			reasoning_json: "/.well-known/reasoning.json",
			sitemap: "/sitemap.xml",
		});
		expect(manifest.citation_markers).toContain(
			"Perth-based battery OEM for Western Australian energy resilience",
		);
	});

	it("keeps one semantic h1 in the capability statement", () => {
		const capabilityStatement = readSrc(
			"routes/partners_.capability-statement.tsx",
		);
		expect(capabilityStatement.match(/<h1\b/g)).toHaveLength(1);
		expect(capabilityStatement).toContain("capability-print-brand");
	});
});

describe("coverage recovery", () => {
	const mapped404Redirects = {
		"/installers": "/partners",
		"/installer": "/partners",
		"/products/installers": "/partners",
		"/distributors": "/partners",
		"/distributor": "/partners",
		"/blog": "/guides",
		"/blog/:path*": "/guides",
		"/capability-statement": "/partners/capability-statement",
		"/capability": "/partners/capability-statement",
		"/game-on": "/",
		"/gameon": "/",
	} as const;

	const indexWatchlist = [
		"/guides/wa-battery-rebates-cec",
		"/guides/off-grid-power-wheatbelt-wa",
		"/guides/off-grid-solar-great-southern-wa",
		"/guides/diesel-to-battery-wa-farms",
		"/guides/battery-state-of-health",
		"/guides/off-grid-battery-systems-perth",
		"/products/rural",
	] as const;

	it("301s mapped 404 leftovers and keeps a single live sitemap", () => {
		const vercel = JSON.parse(
			readFileSync(join(root, "vercel.json"), "utf8"),
		) as {
			redirects: Array<{
				source: string;
				destination: string;
				permanent: boolean;
			}>;
		};
		const bySource = Object.fromEntries(
			vercel.redirects.map((redirect) => [redirect.source, redirect]),
		);
		for (const [source, destination] of Object.entries(mapped404Redirects)) {
			expect(bySource[source]).toMatchObject({
				destination,
				permanent: true,
			});
		}

		const seoSource = readSrc("lib/seo.ts");
		expect(seoSource).not.toContain("export async function generateSitemap");
		expect(seoSource).not.toContain("export function generateBreadcrumbs");
		expect(seoSource).not.toContain("/blog/${");
		expect(seoSource).not.toContain("https://renoz.energy");
	});

	it("wires crawlable homepage links to the coverage watchlist", () => {
		const homepage = readSrc("routes/index.lazy.tsx");
		expect(homepage).toContain("GUIDE_LINK_SETS.home");
		expect(homepage).toContain("GuideRelatedStrip");
		expect(readSrc("routes/cookies.tsx")).toContain(
			"Last updated: 20 July 2026",
		);

		const sitemapUrls = staticSitemapEntries.map((entry) => entry.url);
		for (const path of indexWatchlist) {
			expect(sitemapUrls).toContain(path);
		}

		const wheatbelt = guides.find(
			(guide) => guide.slug === "off-grid-power-wheatbelt-wa",
		);
		const albany = guides.find(
			(guide) => guide.slug === "off-grid-solar-great-southern-wa",
		);
		const diesel = guides.find(
			(guide) => guide.slug === "diesel-to-battery-wa-farms",
		);
		const soh = guides.find(
			(guide) => guide.slug === "battery-state-of-health",
		);
		const perthOffGrid = guides.find(
			(guide) => guide.slug === "off-grid-battery-systems-perth",
		);
		expect(wheatbelt?.title).toContain("Wagin");
		expect(wheatbelt?.description).toContain("Wagin");
		expect(albany?.description).toContain("battery systems");
		expect(
			diesel?.sections.some((section) => section.heading.includes("Geraldton")),
		).toBe(true);
		expect(soh?.title).toContain("LiFePO4");
		expect(soh?.intro[0]).toContain("Perth");
		expect(perthOffGrid?.sections[0]?.body.join(" ")).toContain("Armadale");
		expect(readSrc("routes/products/rural.tsx")).toContain("Geraldton");
	});

	it("defines the editorial reading layout that guide pages already call", () => {
		const css = readSrc("styles.css");
		expect(css).toContain(".layout-container");
		expect(css).toContain(".exhibit-container");
		expect(css).toContain(".section-standard");
		expect(css).toContain("--measure-reading: 68ch");
		expect(css).toContain("--accent: oklch(0.97 0 0)");
		expect(css).toMatch(
			/\.editorial\s*\{[\s\S]*--accent:\s*var\(--renoz-green\)/,
		);
		expect(readSrc("components/guides/GuideShell.tsx")).toContain(
			'className="editorial min-h-screen',
		);
	});

	it("quotes product-catalog facts in product JSON-LD", () => {
		expect(productSchema("residential").description).toBe(
			PRODUCT_SEGMENTS.residential.description,
		);
		expect(productSchema("rural").description).toBe(
			PRODUCT_SEGMENTS.rural.description,
		);
		expect(productSchema("commercial").description).toBe(
			PRODUCT_SEGMENTS.commercial.description,
		);
	});
});
