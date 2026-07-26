type GuideIntroProps = {
	intro: string[];
};

export function GuideIntro({ intro }: GuideIntroProps) {
	return (
		<div className="mb-10 space-y-4 text-lg md:text-xl leading-relaxed text-gray-800">
			{intro.map((paragraph) => (
				<p key={paragraph.slice(0, 64)}>{paragraph}</p>
			))}
		</div>
	);
}
