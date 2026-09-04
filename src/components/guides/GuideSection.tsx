import { InlineText } from "@/lib/inline-content";

type GuideSectionProps = {
	heading: string;
	body: string[];
	id?: string;
	index?: number;
};

export function GuideSection({ heading, body, id, index }: GuideSectionProps) {
	return (
		<section
			id={id}
			className="section-narrative scroll-mt-28 border-t border-[var(--border-strong)]"
		>
			<div className="max-w-[var(--measure-reading)]">
				<h2 className="mb-6 grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 text-2xl font-bold tracking-[var(--tracking-display)] md:text-3xl">
					{index !== undefined ? (
						<span
							aria-hidden
							className="text-label mt-1 border-t-2 border-[var(--accent)] pt-2 text-[var(--accent-strong)] tabular-nums"
						>
							{String(index).padStart(2, "0")}
						</span>
					) : (
						<span
							aria-hidden
							className="mt-1 border-t-2 border-[var(--accent)]"
						/>
					)}
					<span>{heading}</span>
				</h2>
				<div className="space-y-5 text-base leading-[var(--leading-body)] text-[var(--text-body)] md:text-lg">
					{body.map((paragraph) => (
						<p key={paragraph.slice(0, 48)}>
							<InlineText text={paragraph} />
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
