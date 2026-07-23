import { Link } from "@tanstack/react-router";

import type { GuideCta as GuideCtaData } from "@/data/guides";

type GuideCtaProps = {
	cta: GuideCtaData;
};

const secondaryLinkClass =
	"inline-flex items-center rounded-full border border-white/25 bg-white/5 px-7 py-3 font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10";

export function GuideCta({ cta }: GuideCtaProps) {
	return (
		<section className="mt-4 mb-10 relative overflow-hidden rounded-2xl bg-[var(--black)] text-white px-6 py-10 md:px-10 md:py-12">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(ellipse 55% 90% at 100% 50%, color-mix(in oklab, var(--renoz-green) 22%, transparent), transparent 70%)",
				}}
			/>
			<div className="relative md:flex items-center justify-between gap-8">
				<div>
					<span className="block text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-3">
						Next step
					</span>
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">
						Ready to talk specifics?
					</h2>
					<p className="mt-2 text-gray-300 max-w-xl leading-relaxed">
						Perth-based OEM support — sizing, pairing, and rebate pathways for
						your site.
					</p>
				</div>
				<div className="mt-6 md:mt-0 flex flex-wrap gap-3 shrink-0">
					<Link
						to={cta.primaryTo}
						className="inline-flex items-center rounded-full bg-[var(--renoz-green)] px-7 py-3 font-semibold text-white shadow-md transition-all hover:bg-[var(--renoz-green-dark)] hover:shadow-lg"
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
			</div>
		</section>
	);
}
