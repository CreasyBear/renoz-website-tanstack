import { Link } from "@tanstack/react-router";

import { getGuidesBySlugs } from "@/data/guides";

type GuideRelatedStripProps = {
	slugs: readonly string[];
	title?: string;
};

export function GuideRelatedStrip({
	slugs,
	title = "Technical guides",
}: GuideRelatedStripProps) {
	const related = getGuidesBySlugs(slugs);
	if (related.length === 0) return null;

	return (
		<section className="py-12 md:py-16 text-[var(--black)]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<p className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3 text-[var(--renoz-green-dark)]">
					{title}
				</p>
				<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{related.map((guide) => (
						<li key={guide.slug}>
							<Link
								to="/guides/$slug"
								params={{ slug: guide.slug }}
								className="block border border-black/15 px-4 py-3 transition-colors hover:border-[var(--renoz-green)] hover:bg-white"
							>
								<span className="font-semibold text-sm md:text-base leading-snug">
									{guide.h1}
								</span>
								<span className="mt-1 block text-sm leading-relaxed text-gray-600">
									{guide.description}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
