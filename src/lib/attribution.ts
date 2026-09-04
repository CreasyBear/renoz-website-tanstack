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
	return (
		value
			.slice(0, MAX_ATTRIBUTION_LENGTH)
			// biome-ignore lint/suspicious/noControlCharactersInRegex: stripping C0/DEL control characters from user-supplied attribution input is the purpose of this sanitizer
			.replace(/[\x00-\x1f\x7f]/g, "")
			.replace(/[<>]/g, "")
			.replace(/javascript:/gi, "")
			.trim()
			.slice(0, MAX_ATTRIBUTION_LENGTH)
	);
}

const UTM_STORAGE_KEY = "renoz_attribution_utm";

/**
 * First page load: remember campaign UTMs for the whole session so events
 * fired after in-site navigation (which drops the query string) still carry
 * acquisition context. GA4's own session source/medium still works from the
 * landing URL regardless — this only backs our first-party event params.
 */
if (typeof window !== "undefined") {
	const utms = readAttributionFromUrl(window.location.search);
	if (Object.keys(utms).length > 0) {
		try {
			window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
		} catch {
			// sessionStorage unavailable (privacy mode/quota): attribution degrades gracefully
		}
	}
}

function readStoredUtms(): Attribution {
	if (typeof window === "undefined") return {};
	try {
		const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
		if (!raw) return {};
		const parsed: unknown = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object") return {};
		const stored: Attribution = {};
		for (const key of UTM_KEYS) {
			const value = (parsed as Record<string, unknown>)[key];
			if (typeof value === "string" && value) {
				const cleaned = sanitizeAttributionValue(value);
				if (cleaned) stored[key] = cleaned;
			}
		}
		return stored;
	} catch {
		return {};
	}
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
/** Combined attribution from the current URL + referring hostname.
 * Falls back to session-stored UTMs when the current URL has none
 * (e.g. the visitor navigated internally after landing on a campaign URL).
 */
export function captureAttribution(): Attribution {
	if (typeof window === "undefined") return {};
	const fromUrl = readAttributionFromUrl(window.location.search);
	if (Object.keys(fromUrl).length > 0) {
		return { ...fromUrl, referrer: readReferrer() };
	}
	return { ...readStoredUtms(), referrer: readReferrer() };
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
