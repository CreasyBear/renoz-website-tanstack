import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contactFaqs, homeFaqs } from "../data/faqs";
import { guideSlugs, guides } from "../data/guides";
import {
	breadcrumbSchema,
	buildStaticSitemapXml,
	canonicalLink,
	caseStudySchema,
	faqPageSchema,
	guideArticleSchema,
	jsonLd,
	productSchema,
	SITE_URL,
	sitemapLoc,
	siteUrl,
	staticSitemapEntries,
} from "./seo";

const root = process.cwd();

function readPublic(path: string) {
	return readFileSync(join(root, "public", path), "utf8");
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
			dateModified: guide.updated,
		});
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
		expect(llms).not.toContain("5.0/5.0 (Google Reviews)");
	});

	it("exposes the public guide hub in secondary navigation", () => {
		expect(readSrc("components/layout/Header.tsx")).not.toContain("/guides");
		expect(readSrc("components/layout/Footer.tsx")).toContain("/guides");
	});

	it("exposes typed contextual guide links on BOFU pages", () => {
		for (const [path, slug] of [
			["routes/homeowners.tsx", "wa-battery-rebates-cec"],
			["routes/products/residential.tsx", "renoz-vs-powerwall-sigenergy"],
			["routes/products/rural.tsx", "diesel-to-battery-wa-farms"],
			["routes/case-studies/index.tsx", "diesel-to-battery-wa-farms"],
			["routes/resources.tsx", "wa-battery-rebates-cec"],
		] as const) {
			const source = readSrc(path);
			expect(source).toContain('to="/guides/$slug"');
			expect(source).toContain(`slug: "${slug}"`);
		}
	});

	it("exposes expected robots and agent discovery files", () => {
		const robots = readPublic("robots.txt");
		expect(robots).toContain("User-agent: PerplexityBot");
		expect(robots).toContain("User-agent: Applebot-Extended");
		expect(robots).toContain("Allow: /llms-full.txt");
		expect(robots).toContain("Allow: /.well-known/reasoning.json");
		expect(robots).toContain("Sitemap: https://www.renoz.energy/sitemap.xml");

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
});
