import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { getGuideLinksBySlugs } from "@/data/guide-links";
import { cn } from "@/lib/utils";

type GuideRelatedStripProps = {
	slugs: readonly string[];
	title?: string;
	showHubLink?: boolean;
	className?: string;
};

export function GuideRelatedStrip({
	slugs,
	title = "Technical guides",
	showHubLink = true,
	className,
}: GuideRelatedStripProps) {
	const related = getGuideLinksBySlugs(slugs);
	if (related.length === 0) return null;

	return (
		<section
			className={cn(
				"border-t border-zinc-200 bg-zinc-50 py-12 md:py-16",
				className,
			)}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-6 flex items-baseline justify-between gap-4">
					<p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
						{title}
					</p>
					{showHubLink ? (
						<Link
							to="/guides"
							className="shrink-0 text-sm text-zinc-500 transition-colors duration-150 hover:text-[var(--renoz-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--renoz-green)]"
						>
							All guides
						</Link>
					) : null}
				</div>
				<ul className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
					{related.map((guide) => (
						<li key={guide.slug}>
							<Link
								to="/guides/$slug"
								params={{ slug: guide.slug }}
								className="group flex min-h-11 items-center gap-2 border-b border-zinc-200 py-3 text-sm font-medium leading-snug text-zinc-900 transition-colors duration-150 hover:text-[var(--renoz-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--renoz-green)]"
							>
								<span className="min-w-0">{guide.title}</span>
								<ArrowRight
									aria-hidden="true"
									className="size-3.5 shrink-0 text-[var(--renoz-green)] opacity-0 transition-opacity duration-150 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100"
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
