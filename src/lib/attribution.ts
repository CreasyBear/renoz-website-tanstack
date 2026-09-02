/**
 * AI-referral attribution: captures UTM parameters and the referring
 * hostname so we can see which AI assistants and channels send traffic
 * (ChatGPT, Perplexity, Google AI Overviews, etc.).
 */

export type Attribution = {
	utm_source?: string;
	utm_medium?: string;
	utm_campaign?: string;
	referrer?: string;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

const MAX_ATTRIBUTION_LENGTH = 100;

/** Strip control characters, markup delimiters and javascript: schemes. */
function sanitizeAttributionValue(value: string): string {
	return value
		.slice(0, MAX_ATTRIBUTION_LENGTH)
		.replace(/[\x00-\x1f\x7f]/g, "")
		.replace(/[<>]/g, "")
		.replace(/javascript:/gi, "")
		.trim()
		.slice(0, MAX_ATTRIBUTION_LENGTH);
}

/** Read known UTM parameters from a search string (e.g. window.location.search). */
export function readAttributionFromUrl(search?: string): Attribution {
	const params = new URLSearchParams(search ?? "");
	const attribution: Attribution = {};
	for (const key of UTM_KEYS) {
		const raw = params.get(key);
		if (!raw) continue;
		const cleaned = sanitizeAttributionValue(raw);
		if (cleaned) attribution[key] = cleaned;
	}
	return attribution;
}

/** Read the referring site hostname only (document.referrer may include a path). */
export function readReferrer(): string | undefined {
	if (typeof window === "undefined") return undefined;
	const referrer = window.document.referrer;
	if (!referrer) return undefined;
	try {
		const hostname = new URL(referrer).hostname.replace(/^www\./, "");
		return sanitizeAttributionValue(hostname) || undefined;
	} catch {
		return undefined;
	}
}

/** Combined attribution from the current URL + referring hostname. */
export function captureAttribution(): Attribution {
	if (typeof window === "undefined") return {};
	return {
		...readAttributionFromUrl(window.location.search),
		referrer: readReferrer(),
	};
}

/** Append present UTM params to a route path, preserving any existing query. */
export function withAttribution(
	path: string,
	attribution: Attribution,
): string {
	const params = new URLSearchParams();
	for (const key of UTM_KEYS) {
		const value = attribution[key];
		if (value?.trim()) params.set(key, value);
	}
	const query = params.toString();
	if (!query) return path;
	return `${path}${path.includes("?") ? "&" : "?"}${query}`;
}
