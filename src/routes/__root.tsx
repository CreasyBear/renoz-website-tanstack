import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "../components/GoogleAnalytics";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { SkipLinks } from "../components/layout/SkipLinks";
import { ErrorBoundary } from "../components/ui/ErrorBoundary";
import WebVitals from "../components/WebVitals";

// Import styles directly to ensure Tailwind processing
import "../styles.css";

const baseUrl = "https://renoz.energy";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes",
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "default",
			},
			{
				name: "apple-mobile-web-app-title",
				content: "RENOZ Energy",
			},
			{
				title: "RENOZ Energy - Perth's Own Battery Manufacturer",
			},
			{
				name: "description",
				content:
					"Building Western Australia's Battery Capability. Perth-based OEM of residential and commercial battery systems.",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:site_name",
				content: "RENOZ Energy",
			},
			{
				property: "og:title",
				content: "RENOZ Energy - Perth's Own Battery Manufacturer",
			},
			{
				property: "og:description",
				content:
					"Building Western Australia's Battery Capability. Perth-based OEM of residential and commercial battery systems.",
			},
			{
				property: "og:image",
				content: `${baseUrl}/images/optimized/og-image.webp`,
			},
			{
				property: "og:url",
				content: baseUrl,
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: "RENOZ Energy - Perth's Own Battery Manufacturer",
			},
			{
				name: "twitter:description",
				content:
					"Building Western Australia's Battery Capability. Perth-based OEM of residential and commercial battery systems.",
			},
			{
				name: "twitter:image",
				content: `${baseUrl}/images/optimized/twitter-card.jpg`,
			},
			{
				name: "theme-color",
				content: "#00B140",
			},
			{
				name: "robots",
				content:
					"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
			},
			{
				name: "googlebot",
				content:
					"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
			},
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/images/optimized/apple-icon.webp",
			},
			{
				rel: "apple-touch-icon",
				sizes: "152x152",
				href: "/images/optimized/logo-renoz-ios.webp",
			},
			{
				rel: "apple-touch-icon",
				sizes: "120x120",
				href: "/images/optimized/logo-renoz-ios.webp",
			},
			{
				rel: "alternate",
				type: "text/plain",
				href: "/llms.txt",
				title: "LLM-friendly company information",
			},
		],
		scripts: [
			// Plausible Analytics (Privacy-focused, GDPR compliant, no cookies)
			{
				src: "https://plausible.io/js/script.js",
				defer: true,
				"data-domain": "renoz.energy",
			},
			// Structured Data - LocalBusiness (better for local SEO than Organization)
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					"@id": baseUrl,
					name: "RENOZ Energy",
					alternateName: "RENOZ Energy Pty Ltd",
					url: baseUrl,
					logo: `${baseUrl}/images/optimized/logo-renoz.webp`,
					image: `${baseUrl}/images/optimized/og-image.webp`,
					description:
						"Perth-based OEM of residential and commercial battery energy storage systems",
					priceRange: "$$",
					telephone: "+611800736693",
					email: "sales@renoz.energy",
					address: {
						"@type": "PostalAddress",
						streetAddress: "Unit 4, 8 Murphy Street",
						addressLocality: "O'Connor",
						addressRegion: "WA",
						postalCode: "6163",
						addressCountry: "AU",
					},
					geo: {
						"@type": "GeoCoordinates",
						latitude: -32.0501,
						longitude: 115.7997,
					},
					openingHoursSpecification: [
						{
							"@type": "OpeningHoursSpecification",
							dayOfWeek: [
								"Monday",
								"Tuesday",
								"Wednesday",
								"Thursday",
								"Friday",
							],
							opens: "08:00",
							closes: "17:00",
						},
					],
					sameAs: [
						"https://www.linkedin.com/company/renoz-energy",
						"https://www.facebook.com/renozenergy",
						"https://www.instagram.com/renozenergy",
					],
					areaServed: {
						"@type": "State",
						name: "Western Australia",
					},
					hasOfferCatalog: {
						"@type": "OfferCatalog",
						name: "Battery Energy Storage Systems",
						itemListElement: [
							{
								"@type": "Offer",
								itemOffered: {
									"@type": "Product",
									name: "Residential Battery Systems",
									description: "10-50kWh lithium battery systems for homes",
								},
							},
							{
								"@type": "Offer",
								itemOffered: {
									"@type": "Product",
									name: "Rural Battery Systems",
									description:
										"50-200kWh battery systems for farms and off-grid properties",
								},
							},
							{
								"@type": "Offer",
								itemOffered: {
									"@type": "Product",
									name: "Commercial Battery Systems",
									description:
										"200kWh+ battery systems for businesses and industry",
								},
							},
						],
					},
				}),
			},
			// Structured data for organization
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "RENOZ Energy",
					description:
						"Perth-based Battery OEM of residential and commercial battery systems",
					url: baseUrl,
					logo: `${baseUrl}/images/optimized/logo-renoz.webp`,
					image: `${baseUrl}/images/optimized/og-image.webp`,
					address: {
						"@type": "PostalAddress",
						streetAddress: "Unit 4, 8 Murphy Street",
						addressLocality: "O'Connor",
						addressRegion: "WA",
						postalCode: "6163",
						addressCountry: "AU",
					},
					contactPoint: {
						"@type": "ContactPoint",
						telephone: "+61-8-7366-9393",
						contactType: "customer service",
						availableLanguage: "English",
						contactOption: "TollFree",
					},
					foundingDate: "2024",
					founders: [
						{
							"@type": "Person",
							name: "Simon Chan",
							jobTitle: "CEO",
						},
					],
					knowsAbout: [
						"Renewable Energy",
						"Battery Storage Systems",
						"Solar Energy",
						"Energy Storage",
						"Clean Energy Technology",
					],
					sameAs: [
						"https://www.linkedin.com/company/renoz-energy",
						"https://www.facebook.com/renozenergy",
					],
				}),
			},
			// Structured data for website
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: "RENOZ Energy",
					url: baseUrl,
					description:
						"Perth-based Battery OEM of residential and commercial battery systems",
					publisher: {
						"@type": "Organization",
						name: "RENOZ Energy",
					},
					potentialAction: {
						"@type": "SearchAction",
						target: {
							"@type": "EntryPoint",
							urlTemplate: `${baseUrl}/search?q={search_term_string}`,
						},
						"query-input": "required name=search_term_string",
					},
				}),
			},
		],
	}),

	notFoundComponent: NotFoundComponent,
	shellComponent: RootDocument,
});

function NotFoundComponent() {
	return (
		<div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-4">
			<div className="text-center max-w-md">
				<h1 className="text-6xl font-bold text-[var(--black)] mb-4">404</h1>
				<h2 className="text-2xl font-bold text-[var(--black)] mb-4">
					Page Not Found
				</h2>
				<p className="text-[var(--text-muted)] mb-8">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<a
					href="/"
					className="inline-block px-8 py-3 bg-[var(--renoz-green)] text-white font-bold rounded-full hover:bg-[var(--renoz-green-dark)] transition-colors"
				>
					Return Home
				</a>
			</div>
		</div>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	// Polyfill AsyncLocalStorage for browser compatibility
	if (typeof window !== "undefined") {
		// @ts-expect-error
		if (!globalThis.AsyncLocalStorage) {
			// @ts-expect-error
			globalThis.AsyncLocalStorage = class AsyncLocalStorage {
				run(callback: () => unknown) {
					return callback();
				}
				getStore() {
					return null;
				}
				enterWith() {}
				exit() {}
			};
		}
	}

	// Register service worker in production
	if (typeof window !== "undefined" && !import.meta.env.DEV) {
		if ("serviceWorker" in navigator) {
			window.addEventListener("load", () => {
				navigator.serviceWorker.register("/sw.js").catch(() => {
					// Silently fail - PWA is an enhancement, not a requirement
				});
			});
		}
	}

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<WebVitals />
				<SkipLinks />
				<header>
					<Header />
				</header>
				<ErrorBoundary>
					<main>{children}</main>
				</ErrorBoundary>
				<footer>
					<Footer />
				</footer>
				<GoogleAnalytics
					measurementId={import.meta.env.VITE_GA_MEASUREMENT_ID}
				/>
				<Analytics />
				{/* {import.meta.env.DEV && (
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
				)} */}
				<Scripts />
			</body>
		</html>
	);
}
