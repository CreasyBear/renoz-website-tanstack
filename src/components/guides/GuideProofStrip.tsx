import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import type { GuideProofLink } from "@/data/guides";

type GuideProofStripProps = {
	links: GuideProofLink[];
};

function InternalProofLink({ link }: { link: GuideProofLink }) {
	const guideMatch = link.href.match(/^\/guides\/([^/]+)$/);
	if (guideMatch) {
		return (
			<Link
				to="/guides/$slug"
				params={{ slug: guideMatch[1] }}
				className="font-medium text-[var(--text-strong)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
			>
				{link.label}
			</Link>
		);
	}

	return (
		<Link
			to={link.href}
			className="font-medium text-[var(--text-strong)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
		>
			{link.label}
		</Link>
	);
}

export function GuideProofStrip({ links }: GuideProofStripProps) {
	if (links.length === 0) return null;
	const externalLinks = links.filter((link) => link.external);
	const internalLinks = links.filter((link) => !link.external);

	return (
		<section className="section-standard max-w-[var(--measure-reading)] border-y border-[var(--border-strong)]">
			<h2 className="mb-7 text-2xl font-bold tracking-[var(--tracking-display)]">
				Evidence and next reading
			</h2>
			<div className="grid gap-10 md:grid-cols-2">
				{externalLinks.length > 0 ? (
					<div>
						<h3 className="text-label mb-3 text-[var(--text-muted)]">
							External evidence
						</h3>
						<ul className="space-y-3 text-base">
							{externalLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-start gap-2 font-medium leading-[var(--leading-body)] text-[var(--text-strong)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
									>
										<span>{link.label}</span>
										<ExternalLink
											aria-hidden
											className="mt-1 size-4 shrink-0 text-[var(--accent-strong)]"
										/>
										<span className="sr-only">(opens in a new tab)</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				) : null}

				{internalLinks.length > 0 ? (
					<div>
						<h3 className="text-label mb-3 text-[var(--text-muted)]">
							Continue reading
						</h3>
						<ul className="space-y-3 text-base leading-[var(--leading-body)]">
							{internalLinks.map((link) => (
								<li key={link.href}>
									<InternalProofLink link={link} />
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</section>
	);
}
