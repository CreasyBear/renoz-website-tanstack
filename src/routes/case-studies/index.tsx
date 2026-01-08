import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import MasonryGallery from "../../components/ui/MasonryGallery";
import { caseStudies } from "../../data/case-studies";
import { caseStudyImages } from "../../data/case-study-images";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/case-studies/")({
	head: () => ({
		meta: [
			{ title: "Case Studies - RENOZ Energy Installations" },
			{
				name: "description",
				content:
					"Real results from real installations across Western Australia. See how RENOZ battery systems are powering homes, farms, and businesses.",
			},
			{
				name: "keywords",
				content:
					"battery case studies Perth, energy storage installations WA, solar battery examples, RENOZ Energy projects, lithium battery installations Australia",
			},
			{
				property: "og:title",
				content: "Case Studies - RENOZ Energy Installations",
			},
			{
				property: "og:description",
				content:
					"Real results from real installations across Western Australia. See how RENOZ battery systems are powering homes, farms, and businesses.",
			},
			{ property: "og:url", content: `${baseUrl}/case-studies` },
			{ property: "og:type", content: "website" },
			{
				name: "twitter:title",
				content: "Case Studies - RENOZ Energy Installations",
			},
			{
				name: "twitter:description",
				content:
					"Real results from real installations across Western Australia. RENOZ battery systems powering homes, farms, and businesses.",
			},
		],
	}),
	component: CaseStudiesIndexPage,
});

export function CaseStudiesIndexPage() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="min-h-screen bg-[var(--white)]">
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsExpanded(false)}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm cursor-zoom-out"
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative max-w-7xl max-h-full"
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image wrapper (optional, but clicking image should prob close too? Let's leave it to wrapper close)
						>
							<button
								type="button"
								onClick={() => setIsExpanded(false)}
								className="absolute -top-12 right-0 text-white hover:text-[var(--renoz-green)] transition-colors"
							>
								<X className="w-8 h-8" />
							</button>
							<img
								src="/images/case-studies/Waroona Reporter.webp"
								alt="Harvey-Waroona Reporter newspaper featuring RENOZ energy installation project"
								className="w-full h-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Header */}
			<section className="bg-[var(--black)] text-white pt-32 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center max-w-3xl mx-auto"
					>
						<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
							Provenance
						</span>
						<h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
							Real Results.
						</h1>
						<p className="text-xl text-gray-300 leading-relaxed">
							From the Wheatbelt to the Perth Hills, see how RENOZ systems are
							powering Western Australia.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Featured Case Studies */}
			<section className="section-spacing">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 md:mb-14 lg:mb-16">
						<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
							Featured Stories
						</span>
						<h2 className="text-4xl font-bold text-[var(--black)]">
							In-Depth Case Studies
						</h2>
					</div>
					<MasonryGallery
						title=""
						showRating={false}
						images={caseStudies.map((study) => ({
							src: study.image,
							alt: study.title,
							caption: study.title,
							location: study.location,
							link: `/case-studies/${study.slug}`,
						}))}
					/>
				</div>
			</section>

			{/* In The News - Harvey-Waroona Feature */}
			<section className="section-spacing bg-[var(--black)] text-white relative overflow-hidden">
				{/* Background decoration */}
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--renoz-green)]/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<span className="inline-block px-3 py-1 bg-[var(--renoz-green)]/20 border border-[var(--renoz-green)]/30 text-[var(--renoz-green)] rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
								In the News
							</span>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
								Empowering Regional <br />
								<span className="text-[var(--renoz-green)]">Communities.</span>
							</h2>
							<p className="text-xl text-gray-300 mb-8 leading-relaxed">
								When connecting to the grid would have cost $200,000, Harvey
								homeowner Brad Jones chose a smarter path—going fully off-grid
								with RENOZ batteries. Featured in the South Western Times, his
								story shows what's possible when you cut the cord.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									variant="secondary"
									size="lg"
									to="/contact"
									className="bg-white text-[var(--black)] hover:bg-gray-100 border-none rounded-full"
								>
									Get a Quote
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-zoom-in"
							onClick={() => setIsExpanded(true)}
						>
							<img
								src="/images/case-studies/Waroona Reporter.webp"
								alt="Waroona Reporter newspaper featuring RENOZ energy installation project"
								className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-transparent to-transparent opacity-60" />
							<div className="absolute bottom-6 left-6 right-6">
								<p className="text-white/80 text-sm font-medium uppercase tracking-widest">
									Featured Article
								</p>
								<p className="text-white text-lg font-bold">Waroona Reporter</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Installation Gallery - All Projects */}
			<section className="section-spacing bg-[var(--cream)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 md:mb-14 lg:mb-16">
						<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
							Our Work
						</span>
						<h2 className="text-4xl font-bold text-[var(--black)] mb-4">
							Installation Gallery
						</h2>
						<p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
							Every RENOZ system is built to last. Browse real installations by
							our certified partners across Western Australia.
						</p>
					</div>
					<MasonryGallery
						showRating={true}
						images={caseStudyImages.slice(0, 6)}
					/>
				</div>
			</section>

			{/* CTA */}
			<section className="section-spacing text-center">
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-6">Have a similar project?</h2>
					<Button
						variant="primary"
						size="lg"
						to="/contact"
						className="rounded-full"
					>
						Talk to an Engineer
					</Button>
				</div>
			</section>
		</div>
	);
}
// Export for lazy loading
