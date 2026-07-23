import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

import type { GuideProofLink } from "@/data/guides";

type GuideProofStripProps = {
	links: GuideProofLink[];
};

const cardClass =
	"group flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:border-[var(--renoz-green)] hover:text-[var(--renoz-green-dark)] hover:-translate-y-0.5";

export function GuideProofStrip({ links }: GuideProofStripProps) {
	if (links.length === 0) return null;

	return (
		<section className="mb-14">
			<span className="block text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-3">
				Sources &amp; documents
			</span>
			<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
				Evidence and next steps
			</h2>
			<div className="grid sm:grid-cols-2 gap-3">
				{links.map((link) =>
					link.external ? (
						<a
							key={link.href}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className={cardClass}
						>
							<span className="min-w-0">{link.label}</span>
							<ExternalLink className="w-4 h-4 shrink-0 text-gray-400 transition-colors group-hover:text-[var(--renoz-green)]" />
						</a>
					) : (
						<Link key={link.href} to={link.href} className={cardClass}>
							<span className="min-w-0">{link.label}</span>
							<ArrowRight className="w-4 h-4 shrink-0 text-gray-400 transition-all group-hover:translate-x-0.5 group-hover:text-[var(--renoz-green)]" />
						</Link>
					),
				)}
			</div>
		</section>
	);
}
