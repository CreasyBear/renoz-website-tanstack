import { createFileRoute, notFound } from "@tanstack/react-router";
import { caseStudies } from "../../data/case-studies";
import {
	breadcrumbSchema,
	canonicalLink,
	caseStudySchema,
	jsonLd,
	pageMeta,
	siteUrl,
} from "../../lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
	loader: ({ params }) => {
		const study = caseStudies.find((s) => s.slug === params.slug);
		if (!study) {
			throw notFound();
		}
		return { study };
	},
	head: ({ loaderData }) => {
		const study = loaderData?.study;
		if (!study) return {};
		const path = `/case-studies/${study.slug}`;
		const schema = caseStudySchema(study.slug);
		return {
			meta: [
				...pageMeta({
					title: `${study.title} | RENOZ Energy Case Study`,
					description: study.summary,
					path,
					image: siteUrl(study.image),
					type: "article",
				}),
			],
			links: [canonicalLink(path)],
			scripts: [
				...(schema ? [jsonLd(schema)] : []),
				jsonLd(
					breadcrumbSchema(path, {
						"/case-studies": "Case Studies",
						[path]: study.title,
					}),
				),
			],
		};
	},
});
