import { Link } from "@tanstack/react-router";

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
				className="text-[var(--renoz-green-dark)] underline underline-offset-2 hover:text-[var(--black)]"
			>
				{link.label}
			</Link>
		);
	}

	return (
		<Link
			to={link.href}
			className="text-[var(--renoz-green-dark)] underline underline-offset-2 hover:text-[var(--black)]"
		>
			{link.label}
		</Link>
	);
}

export function GuideProofStrip({ links }: GuideProofStripProps) {
	if (links.length === 0) return null;

	return (
		<section className="mb-12">
			<h2 className="text-2xl font-bold tracking-tight mb-4">
				Evidence and next steps
			</h2>
			<ul className="space-y-2 text-base">
				{links.map((link) => (
					<li key={link.href}>
						{link.external ? (
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--renoz-green-dark)] underline underline-offset-2 hover:text-[var(--black)]"
							>
								{link.label}
							</a>
						) : (
							<InternalProofLink link={link} />
						)}
					</li>
				))}
			</ul>
		</section>
	);
}
