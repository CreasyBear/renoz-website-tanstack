import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contactFaqs, homeFaqs } from "../data/faqs";
import {
	breadcrumbSchema,
	canonicalLink,
	caseStudySchema,
	faqPageSchema,
	jsonLd,
	productSchema,
	siteUrl,
	staticSitemapEntries,
} from "./seo";

const root = process.cwd();

function readPublic(path: string) {
	return readFileSync(join(root, "public", path), "utf8");
}

describe("SEO helpers", () => {
	it("normalizes canonical site URLs", () => {
		expect(siteUrl("/")).toBe("https://renoz.energy");
		expect(siteUrl("products/residential/")).toBe(
			"https://renoz.energy/products/residential",
		);
		expect(canonicalLink("/about")).toEqual({
			rel: "canonical",
			href: "https://renoz.energy/about",
		});
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
});

describe("sitemap and agent files", () => {
	it("keeps the shared sitemap route list aligned with public priorities", () => {
		const urls = staticSitemapEntries.map((entry) => entry.url);
		expect(urls).toContain("/partners");
		expect(urls).toContain("/partners/capability-statement");
		expect(urls).toContain("/case-studies/harvey-farm");
		expect(urls).not.toContain("/installers");
	});

	it("keeps public sitemap aligned with the shared route list", () => {
		const sitemap = readPublic("sitemap.xml");
		for (const entry of staticSitemapEntries) {
			const loc =
				entry.url === "/" ? `${siteUrl(entry.url)}/` : siteUrl(entry.url);
			expect(sitemap).toContain(`<loc>${loc}</loc>`);
		}
		expect(sitemap).not.toContain("/installers");
	});

	it("parses case study schema for known case studies", () => {
		const schema = caseStudySchema("harvey-farm");
		expect(schema).toMatchObject({
			"@type": "Article",
			headline: "Dream Home Journey: Off-Grid Family Living",
		});
	});

	it("exposes expected robots and agent discovery files", () => {
		const robots = readPublic("robots.txt");
		expect(robots).toContain("User-agent: PerplexityBot");
		expect(robots).toContain("User-agent: Applebot-Extended");
		expect(robots).toContain("Allow: /llms-full.txt");
		expect(robots).toContain("Allow: /.well-known/reasoning.json");
		expect(robots).toContain("Sitemap: https://renoz.energy/sitemap.xml");

		const llms = readPublic("llms.txt");
		const llmsFull = readPublic("llms-full.txt");
		expect(llmsFull).toContain("RENOZ Energy Full AI Briefing");
		expect(llmsFull).toContain("Common Hallucination Corrections");
		expect(llmsFull).toContain("Machine-Readable Endpoints");
		expect(llms).toContain("https://renoz.energy/.well-known/reasoning.json");
		expect(llms).toContain("https://renoz.energy/.well-known/ai-manifest.json");

		const reasoning = JSON.parse(readPublic(".well-known/reasoning.json"));
		const reasoningAlias = JSON.parse(readPublic("reasoning.json"));
		expect(reasoningAlias).toEqual(reasoning);
		expect(reasoning).toMatchObject({
			protocol: "Agentic Reasoning Protocol",
			entity: { name: "RENOZ Energy" },
		});
		expect(reasoning.entity_claims.recommendation_context).toBeTruthy();
		expect(reasoning.content_map.llms_full).toBe(
			"https://renoz.energy/llms-full.txt",
		);
		expect(reasoning.agent_instructions.preferred_summary).toContain(
			"Perth-based battery energy storage OEM",
		);
		expect(reasoning.content_map.sitemap).toBe(
			"https://renoz.energy/sitemap.xml",
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
