type GuideSectionProps = {
	heading: string;
	body: string[];
};

export function GuideSection({ heading, body }: GuideSectionProps) {
	return (
		<section className="mb-10">
			<h2 className="text-2xl font-bold tracking-tight mb-4">{heading}</h2>
			<div className="space-y-4 text-base leading-relaxed text-gray-800">
				{body.map((paragraph) => (
					<p key={paragraph.slice(0, 48)}>{paragraph}</p>
				))}
			</div>
		</section>
	);
}
