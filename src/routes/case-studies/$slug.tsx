import { createFileRoute, notFound } from "@tanstack/react-router";
import { caseStudies } from "../../data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
	loader: ({ params }) => {
		const study = caseStudies.find((s) => s.slug === params.slug);
		if (!study) {
			throw notFound();
		}
		return { study };
	},
});
