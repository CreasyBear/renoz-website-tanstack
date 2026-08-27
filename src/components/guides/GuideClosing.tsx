type GuideClosingProps = {
	heading: string;
	body: string;
};

export function GuideClosing({ heading, body }: GuideClosingProps) {
	return (
		<section className="section-closure max-w-[var(--measure-reading)] border-t border-[var(--border-strong)]">
			<h2 className="mb-3 text-xl font-bold tracking-[-0.03em]">{heading}</h2>
			<p className="text-base leading-[var(--leading-body)] text-[var(--text-body)]">
				{body}
			</p>
		</section>
	);
}
