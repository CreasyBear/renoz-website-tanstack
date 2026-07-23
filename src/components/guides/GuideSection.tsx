type GuideSectionProps = {
	heading: string;
	body: string[];
};

export function GuideSection({ heading, body }: GuideSectionProps) {
	return (
		<section className="mb-12">
			<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5 flex items-baseline gap-3">
				<span
					aria-hidden
					className="inline-block w-6 shrink-0 self-center h-[3px] rounded-full bg-[var(--renoz-green)]"
				/>
				{heading}
			</h2>
			<div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
				{body.map((paragraph) => (
					<p key={paragraph.slice(0, 48)}>{paragraph}</p>
				))}
			</div>
		</section>
	);
}
