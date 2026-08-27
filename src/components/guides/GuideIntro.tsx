type GuideIntroProps = {
	intro: string[];
};

export function GuideIntro({ intro }: GuideIntroProps) {
	return (
		<div className="mb-12 max-w-[var(--measure-reading)] space-y-5 text-lg leading-[var(--leading-body)] text-[var(--text-body)] md:text-xl">
			{intro.map((paragraph) => (
				<p key={paragraph.slice(0, 64)}>{paragraph}</p>
			))}
		</div>
	);
}
