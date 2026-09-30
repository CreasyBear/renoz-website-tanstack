import { createLazyFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Quote } from "lucide-react";
import { GuideRelatedStrip } from "../../components/guides/GuideRelatedStrip";
import { ProductHero } from "../../components/sections/ProductHero";
import { TechSpecs } from "../../components/sections/TechSpecs";
import { Button } from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import MasonryGallery from "../../components/ui/MasonryGallery";
import { caseStudies } from "../../data/case-studies";
import { GUIDE_LINK_SETS } from "../../data/guide-links";

export const Route = createLazyFileRoute("/case-studies/$slug")({
	component: CaseStudyDetailPage,
});

function CaseStudyDetailPage() {
	const { study } = Route.useLoaderData();

	return (
		<div className="min-h-screen bg-[var(--white-warm)] text-[var(--black)]">
			<ProductHero
				className="pt-32 pb-28 md:py-36"
				title={
					<span className="block text-4xl md:text-6xl lg:text-7xl">
						{study.title}
					</span>
				}
				description={study.summary}
				badgeText={`${study.location} · ${study.systemSize}`}
				imageSrc={study.image}
				primaryCtaText="Discuss my home or block"
				primaryCtaLink="/contact?type=residential#enquiry"
				secondaryCtaText="Explore this system"
				secondaryCtaLink={`/case-studies/${study.slug}#system`}
			/>

			<section className="section-spacing">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
						<Card variant="cream" className="p-8 md:p-12">
							<p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">
								The challenge
							</p>
							<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
								Before the battery.
							</h2>
							<p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
								{study.story.challenge}
							</p>
						</Card>
						<Card variant="dark" className="p-8 md:p-12">
							<p className="text-xs font-bold uppercase tracking-widest text-[var(--renoz-green)] mb-4">
								The solution
							</p>
							<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
								Power for this property.
							</h2>
							<p className="text-lg md:text-xl text-gray-300 leading-relaxed">
								{study.story.solution}
							</p>
						</Card>
					</div>
					<Card variant="green" className="mt-8 p-8 md:p-12 text-center">
						<Quote
							className="size-10 text-[var(--renoz-green)] mx-auto mb-6"
							aria-hidden="true"
						/>
						<blockquote className="max-w-4xl mx-auto text-2xl md:text-3xl font-medium leading-relaxed tracking-tight">
							“{study.quote}”
						</blockquote>
					</Card>
				</div>
			</section>

			<TechSpecs
				title="Project results"
				description={`${study.location} · ${study.systemSize} RENOZ battery system`}
				specs={study.results}
			/>

			{/* biome-ignore lint/correctness/useUniqueElementIds: one route-level hash target */}
			<section id="system" className="section-spacing scroll-mt-28 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
						<Card variant="cream" className="p-8 md:p-12">
							<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
								System configuration.
							</h2>
							<ul className="space-y-6">
								{study.solution.map((item) => (
									<li
										key={item}
										className="flex items-start gap-4 text-lg leading-relaxed"
									>
										<Check
											className="size-6 shrink-0 mt-1 text-[var(--renoz-green-dark)]"
											aria-hidden="true"
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</Card>
						<div className="lg:py-8">
							<p className="text-xs font-bold uppercase tracking-widest text-[var(--renoz-green-dark)] mb-4">
								The outcome
							</p>
							<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
								Built around real life.
							</h2>
							<p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-8">
								{study.outcome}
							</p>
							{study.installer ? (
								<p className="text-sm text-[var(--text-muted)] mb-3">
									System designed and installed by{" "}
									<a
										href={study.installer.url}
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-4 hover:text-[var(--renoz-green-dark)]"
									>
										{study.installer.name}
									</a>
								</p>
							) : null}
							{study.coverage ? (
								<p className="text-sm text-[var(--text-muted)] mb-3">
									<a
										href={study.coverage.href}
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-4 hover:text-[var(--renoz-green-dark)]"
									>
										{study.coverage.label}
									</a>
								</p>
							) : null}
						</div>
					</div>
				</div>
			</section>

			<section className="section-spacing">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Card variant="dark" className="p-8 md:p-16 text-center">
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
							Have a similar{" "}
							<span className="text-[var(--renoz-green)]">project?</span>
						</h2>
						<p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
							Tell us your property location, connection issue and what you need
							to power.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button
								variant="primary"
								size="lg"
								to="/contact"
								search={{ type: "residential" }}
								hash="enquiry"
								className="rounded-full"
							>
								Discuss my home or block
								<ArrowRight aria-hidden="true" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								to="/case-studies"
								className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-[var(--black)]"
							>
								<ArrowLeft aria-hidden="true" />
								All case studies
							</Button>
						</div>
					</Card>
					<MasonryGallery
						title="More WA installations"
						images={caseStudies
							.filter((item) => item.slug !== study.slug)
							.map((item) => ({
								src: item.image,
								alt: item.title,
								caption: item.title,
								location: item.location,
								link: `/case-studies/${item.slug}`,
							}))}
					/>
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
