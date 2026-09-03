/**
 * GA4 event tracking helper. gtag is only defined when GA4 is enabled
 * (VITE_GA_MEASUREMENT_ID set and the GoogleAnalytics component mounted) —
 * every call site must guard, so this centralises the guard pattern used in
 * src/routes/contact.tsx. Fire-and-forget: never blocks navigation.
 */
export function trackEvent(
	event: string,
	params: Record<string, unknown> = {},
): void {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", event, params);
	}
}
