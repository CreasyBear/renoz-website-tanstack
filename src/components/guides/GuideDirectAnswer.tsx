type GuideDirectAnswerProps = {
	h1: string;
	answer: string;
	eyebrow?: string;
};

export function GuideDirectAnswer({
	h1,
	answer,
	eyebrow,
}: GuideDirectAnswerProps) {
	return (
		<header className="mb-10">
			{eyebrow ? (
				<p className="text-[11px] uppercase tracking-[0.22em] text-[var(--renoz-green-dark)] mb-4 font-semibold">
					{eyebrow}
				</p>
			) : null}
			<h1 className="text-3xl md:text-[2.65rem] font-bold tracking-tight mb-6 text-balance leading-[1.1]">
				{h1}
			</h1>
			<p className="text-lg md:text-xl leading-relaxed text-gray-800 border-l-4 border-[var(--renoz-green)] pl-5">
				{answer}
			</p>
		</header>
	);
}
