import { createFileRoute } from "@tanstack/react-router";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/warranty")({
	head: () => ({
		meta: [
			{ title: "Register Your Warranty - RENOZ Energy" },
			{
				name: "description",
				content:
					"Register your RENOZ battery system warranty. Get official documentation and faster warranty service. Upload photos of your installation for faster approval.",
			},
			{
				property: "og:title",
				content: "Register Your Warranty - RENOZ Energy",
			},
			{
				property: "og:description",
				content:
					"Register your RENOZ battery system warranty. Get official documentation and faster warranty service.",
			},
			{ property: "og:url", content: `${baseUrl}/warranty` },
			{
				name: "twitter:title",
				content: "Register Your Warranty - RENOZ Energy",
			},
			{
				name: "twitter:description",
				content:
					"Register your RENOZ battery system warranty. Get official documentation and faster warranty service.",
			},
		],
	}),
});
