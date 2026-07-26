type GuideClosingProps = {
	heading: string;
	body: string;
};

export function GuideClosing({ heading, body }: GuideClosingProps) {
	return (
		<section className="mb-10">
			<h3 className="text-xl font-bold tracking-tight mb-3">{heading}</h3>
			<p className="text-base leading-relaxed text-gray-800">{body}</p>
		</section>
	);
}
