import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink, pageMeta } from "../lib/seo";

export const Route = createFileRoute("/warranty")({
	head: () => ({
		meta: [
			...pageMeta({
				title: "Register Your Warranty - RENOZ Energy",
				description:
					"Register your RENOZ battery system warranty. Get official documentation and faster warranty service. Upload photos of your installation for faster approval.",
				path: "/warranty",
			}),
		],
		links: [canonicalLink("/warranty")],
	}),
});
