type GuideDirectAnswerProps = {
	answer: string;
};

export function GuideDirectAnswer({ answer }: GuideDirectAnswerProps) {
	return (
		<section className="mb-12 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
			<div className="h-1.5 bg-[var(--renoz-green)]" aria-hidden />
			<div className="p-6 md:p-8">
				<span className="block text-[var(--renoz-green-dark)] font-bold tracking-widest uppercase text-xs mb-3">
					The short answer
				</span>
				<p className="text-lg md:text-xl leading-relaxed text-gray-800">
					{answer}
				</p>
			</div>
		</section>
	);
}
