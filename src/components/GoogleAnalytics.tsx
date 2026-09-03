import { useEffect } from "react";

declare global {
	interface Window {
		gtag: (...args: unknown[]) => void;
		dataLayer: unknown[];
	}
}

interface GoogleAnalyticsProps {
	measurementId?: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
	useEffect(() => {
		if (!measurementId || typeof window === "undefined") return;

		// Official gtag.js stub semantics: push the Arguments object, not an
		// array — gtag.js's command processor only recognises arguments-object
		// entries, and array pushes are silently never processed (no page_view,
		// no collect hit).
		if (!window.gtag) {
			window.dataLayer = window.dataLayer || [];
			window.gtag = function gtag() {
				window.dataLayer.push(arguments);
			};
		}
		window.gtag("js", new Date());

		// Configure GA4
		window.gtag("config", measurementId, {
			anonymize_ip: true,
			allow_google_signals: false,
			allow_ad_features: false,
		});

		// Load Google Analytics script
		const script = document.createElement("script");
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
		document.head.appendChild(script);

		return () => {
			// Cleanup on unmount
			const existingScript = document.querySelector(
				`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`,
			);
			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		};
	}, [measurementId]);

	return null;
}
