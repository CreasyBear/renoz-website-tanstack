import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { type InlineLink, splitInlineText } from "./markdown-links";

/**
 * Link token shared by inline guide citations and the proof strip: site-native
 * underline style, green accent mark, hover to accent-strong, visible focus ring.
 */
const INLINE_LINK_CLASSNAME =
	"font-medium text-[var(--text-strong)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]";

function renderNodes(text: string): ReactNode[] {
	const segments = splitInlineText(text);
	const nodes: ReactNode[] = [];

	for (let i = 0; i < segments.length; i++) {
		const segment = segments[i];
		if (typeof segment === "string") {
			if (segment.length > 0) nodes.push(segment);
			continue;
		}

		const { label, url } = segment as InlineLink;

		if (url.startsWith("https://")) {
			nodes.push(
				<a
					key={i}
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className={`${INLINE_LINK_CLASSNAME} inline-flex items-center gap-1`}
				>
					<span>{label}</span>
					<ExternalLink aria-hidden="true" className="size-3.5 shrink-0" />
					<span className="sr-only">(opens in a new tab)</span>
				</a>,
			);
			continue;
		}

		if (url.startsWith("/")) {
			// Internal paths keep any ?query — TanStack Router parses the
			// search part of the `to` string itself.
			nodes.push(
				<Link key={i} to={url} className={INLINE_LINK_CLASSNAME}>
					{label}
				</Link>,
			);
			continue;
		}

		// URL outside the whitelist renders the literal source text.
		nodes.push(`[${label}](${url})`);
	}

	return nodes;
}

type InlineTextProps = {
	text: string;
	className?: string;
};

/**
 * Renders guide prose with `[label](url)` citation links. Only `https://`
 * and internal `/` URLs become links; everything else stays plain text.
 */
export function InlineText({ text, className }: InlineTextProps) {
	const content = renderNodes(text);

	if (className) {
		return <span className={className}>{content}</span>;
	}

	return <>{content}</>;
}
