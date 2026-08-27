import { Link } from "@tanstack/react-router";

import type { GuideCta as GuideCtaData } from "@/data/guides";

type GuideCtaProps = {
	cta: GuideCtaData;
};

const secondaryLinkClass =
	"inline-flex min-h-11 items-center rounded-[var(--radius-control)] border border-[color-mix(in_srgb,var(--text-inverse)_30%,transparent)] px-6 py-3 font-semibold text-[var(--text-inverse)] transition-colors hover:border-[var(--text-inverse-muted)] hover:bg-[var(--surface-inverse-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]";

export function GuideCta({ cta }: GuideCtaProps) {
	return (
		<section className="section-closure max-w-[var(--measure-reading)] border-y border-[var(--border-strong)] bg-[var(--surface-inverse)] px-5 text-[var(--text-inverse)] sm:px-8 md:px-10">
			<span className="text-label mb-3 block text-[var(--text-inverse-muted)]">
				Next step
			</span>
			<h2 className="text-2xl font-bold tracking-[-0.03em] md:text-3xl">
				Plan your battery system
			</h2>
			<p className="mt-3 max-w-[68ch] leading-[var(--leading-body)] text-[var(--text-inverse-muted)]">
				Share your site, loads and priorities. We will help you identify the
				right system and the evidence to confirm before purchase.
			</p>
			<div className="mt-7 flex flex-wrap gap-3">
				<Link
					to={cta.primaryTo}
					className="inline-flex min-h-11 items-center rounded-[var(--radius-control)] bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--text-on-accent)] transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
				>
					{cta.primaryLabel}
				</Link>
				{cta.secondaryTo && cta.secondaryLabel ? (
					cta.secondaryTo === "/case-studies/harvey-farm" ? (
						<Link
							to="/case-studies/$slug"
							params={{ slug: "harvey-farm" }}
							className={secondaryLinkClass}
						>
							{cta.secondaryLabel}
						</Link>
					) : (
						<Link to={cta.secondaryTo} className={secondaryLinkClass}>
							{cta.secondaryLabel}
						</Link>
					)
				) : null}
			</div>
		</section>
	);
}
