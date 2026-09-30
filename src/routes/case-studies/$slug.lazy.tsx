import { createLazyFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { GuideRelatedStrip } from "../../components/guides/GuideRelatedStrip";
import { Button } from "../../components/ui/Button";
import { GUIDE_LINK_SETS } from "../../data/guide-links";

export const Route = createLazyFileRoute("/case-studies/$slug")({
	component: CaseStudyDetailPage,
});

function CaseStudyDetailPage() {
	const { study } = Route.useLoaderData();

	return (
		<div className="min-h-screen bg-[var(--white-warm)]">
			<section className="pt-28 pb-12 md:pt-32 md:pb-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div>
							<p className="mb-3 text-sm font-medium text-zinc-600">
								{study.location} · {study.systemSize}
							</p>
							<h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-5">
								{study.title}
							</h1>
							<p className="text-lg leading-relaxed text-zinc-700">
								{study.summary}
							</p>
							<div className="mt-6">
								<Button
									variant="primary"
									size="lg"
									to="/contact"
									search={{ type: "residential" }}
									hash="enquiry"
									className="w-full sm:w-auto"
								>
									Discuss my home or block
								</Button>
								<p className="mt-3 text-sm leading-relaxed text-zinc-600">
									Tell us your location, connection issue and what you need to
									power.
								</p>
							</div>
							{study.installer ? (
								<p className="mt-5 text-sm text-zinc-600">
									System designed and installed by{" "}
									<a
										href={study.installer.url}
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-4 hover:text-zinc-900"
									>
										{study.installer.name}
									</a>
								</p>
							) : null}
							{study.coverage ? (
								<p className="mt-2 text-sm text-zinc-600">
									<a
										href={study.coverage.href}
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-4 hover:text-zinc-900"
									>
										{study.coverage.label}
									</a>
								</p>
							) : null}
						</div>
						<img
							src={study.image}
							alt={study.title}
							className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl"
						/>
					</div>
				</div>
			</section>

			<section className="bg-white py-10 md:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-semibold mb-6">Project results</h2>
					<dl className="grid md:grid-cols-3 gap-6 md:gap-10">
						{study.results.map((result) => (
							<div key={result.label}>
								<dt className="text-sm font-medium text-zinc-600 mb-2">
									{result.label}
								</dt>
								<dd className="text-2xl md:text-3xl font-semibold leading-snug text-[var(--black)]">
									{result.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
				<section>
					<h2 className="text-2xl font-semibold mb-4">The challenge</h2>
					<p className="text-lg text-zinc-700 leading-relaxed">
						{study.story.challenge}
					</p>
				</section>
				<blockquote className="border-l-4 border-[var(--renoz-green)] pl-5 text-xl md:text-2xl leading-relaxed text-[var(--black)]">
					“{study.quote}”
				</blockquote>
				<section>
					<h2 className="text-2xl font-semibold mb-4">The solution</h2>
					<p className="text-lg text-zinc-700 leading-relaxed">
						{study.story.solution}
					</p>
				</section>
				<section>
					<h2 className="text-2xl font-semibold mb-4">System configuration</h2>
					<ul className="list-disc pl-5 space-y-3 text-zinc-700 leading-relaxed">
						{study.solution.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>
			</div>

			<section className="bg-white py-12 md:py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Have a similar project?
					</h2>
					<p className="text-lg text-zinc-600 mb-6 leading-relaxed">
						Discuss your property and energy needs with our team.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							variant="primary"
							size="lg"
							to="/contact"
							search={{ type: "residential" }}
							hash="enquiry"
						>
							Discuss my home or block
						</Button>
						<Button variant="outline" size="lg" to="/case-studies">
							<ArrowLeft className="w-4 h-4" aria-hidden="true" />
							All case studies
						</Button>
					</div>
				</div>
			</section>

			{study.slug === "harvey-farm" ? (
				<GuideRelatedStrip
					slugs={GUIDE_LINK_SETS.harvey}
					title="Related farm & Selectronic guides"
				/>
			) : null}
		</div>
	);
}
