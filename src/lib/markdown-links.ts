/**
 * Shared inline-link parsing for `[label](url)` tokens used by the guide
 * citation seam (src/lib/inline-content.tsx) and the AI-citation scorer
 * (src/lib/ai-citation-score.ts). One source of truth so the renderer and
 * the scorer always agree on what counts as a link.
 *
 * Rule: a token opens at `[`, closes at the LAST `)` before whitespace.
 * That handles URLs containing parentheses (e.g. `Battery_(electricity)`)
 * where the final `)` both closes the paren group and the token.
 */

export type InlineLink = { label: string; url: string };
export type InlineSegment = string | InlineLink;

const WHITESPACE = /[\s]/;

export function splitInlineText(text: string): InlineSegment[] {
	const segments: InlineSegment[] = [];
	let i = 0;
	while (i < text.length) {
		const open = text.indexOf("[", i);
		if (open === -1) {
			if (i < text.length) segments.push(text.slice(i));
			break;
		}
		const close = text.indexOf("]", open + 1);
		if (close === -1 || text[close + 1] !== "(") {
			if (open > i) segments.push(text.slice(i, open));
			i = open + 1;
			continue;
		}
		// consume to the last ")" before whitespace
		let end = close + 2;
		let lastClose = -1;
		while (end < text.length && !WHITESPACE.test(text[end])) {
			if (text[end] === ")") lastClose = end;
			end++;
		}
		const tokenEnd = lastClose === -1 ? close + 2 : lastClose + 1;
		const label = text.slice(open + 1, close).trim();
		const url = lastClose === -1 ? "" : text.slice(close + 2, lastClose).trim();
		if (label.length > 0 && url.length > 0) {
			if (open > i) segments.push(text.slice(i, open));
			segments.push({ label, url });
			i = tokenEnd;
		} else {
			// invalid token → render the literal source text
			if (open > i) segments.push(text.slice(i, open));
			segments.push(text.slice(open, tokenEnd));
			i = tokenEnd;
		}
	}
	return segments;
}

/** All link URLs in a text, in order. */
export function inlineLinkUrls(text: string): string[] {
	return splitInlineText(text)
		.filter((s): s is InlineLink => typeof s !== "string")
		.map((s) => s.url);
}
