import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, X, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import MasonryGallery from "../../components/ui/MasonryGallery";
import { caseStudies } from "../../data/case-studies";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/case-studies/")({
	head: () => ({
		meta: [
			{ title: "Case Studies - RENOZ Energy" },
			{
				name: "description",
				content:
					"Real results from real installations across Western Australia. See how RENOZ battery systems are powering homes, farms, and businesses.",
			},
			{ property: "og:title", content: "Case Studies - RENOZ Energy" },
			{
				property: "og:description",
				content:
					"Real results from real installations across Western Australia. See how RENOZ battery systems are powering homes, farms, and businesses.",
			},
			{ property: "og:url", content: `${baseUrl}/case-studies` },
			{ name: "twitter:title", content: "Case Studies - RENOZ Energy" },
			{
				name: "twitter:description",
				content:
					"Real results from real installations across Western Australia.",
			},
		],
	}),
	component: CaseStudiesIndexPage,
});

function CaseStudiesIndexPage() {
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
								alt="Waroona Reporter Feature Article"
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
						<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
							Real Results.
						</h1>
						<p className="text-xl text-gray-400 leading-relaxed">
							From the Wheatbelt to the Perth Hills, see how RENOZ systems are
							powering Western Australia.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Featured Case Studies */}
			<section className="py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
							Featured Stories
						</span>
						<h2 className="text-4xl font-bold text-[var(--black)]">
							In-Depth Case Studies
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{caseStudies.map((study, index) => (
							<motion.div
								key={study.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Link
									to={`/case-studies/${study.slug}` as any}
									className="block h-full group"
								>
									<Card className="h-full p-0 overflow-hidden border-none shadow-soft hover:shadow-2xl transition-all duration-500 bg-white">
										<div className="relative aspect-[4/3] overflow-hidden">
											<img
												src={study.image}
												alt={study.title}
												className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

											<div className="absolute top-4 left-4">
												<span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[var(--black)] shadow-sm">
													<Zap className="w-3 h-3 mr-1 text-[var(--renoz-green)]" />
													{study.systemSize}
												</span>
											</div>
										</div>

										<div className="p-8">
											<div className="flex items-center text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
												<MapPin className="w-3 h-3 mr-1" />
												{study.location}
											</div>
											<h3 className="text-2xl font-bold text-[var(--black)] mb-3 group-hover:text-[var(--renoz-green)] transition-colors">
												{study.title}
											</h3>
											<p className="text-[var(--text-muted)] line-clamp-3 mb-6 leading-relaxed">
												{study.summary}
											</p>

											<div className="flex items-center text-[var(--renoz-green)] font-bold text-sm group-hover:translate-x-2 transition-transform">
												Read Story <ArrowRight className="ml-2 w-4 h-4" />
											</div>
										</div>
									</Card>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* In The News - Waroona Feature */}
			<section className="py-24 bg-[var(--black)] text-white relative overflow-hidden">
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
							<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
								Empowering Regional <br />
								<span className="text-[var(--renoz-green)]">Communities.</span>
							</h2>
							<p className="text-xl text-gray-300 mb-8 leading-relaxed">
								Our installation in Waroona isn't just about saving money; it's
								about energy security for the entire region. Featured in the
								Waroona Reporter, this project highlights how local manufacturing
								is solving local grid challenges.
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
								alt="Waroona Reporter Feature Article"
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
			<section className="py-24 bg-[var(--cream)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
							Our Work
						</span>
						<h2 className="text-4xl font-bold text-[var(--black)] mb-4">
							Installation Gallery
						</h2>
						<p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
							Every system we install is built to last. Browse real
							installations across Western Australia.
						</p>
					</div>
					<MasonryGallery
						showRating={true}
						images={[
							{
								src: "/images/case-studies/Harvey-35kWh.webp",
								alt: "Harvey Farm Installation",
								caption: "35kWh Rural System",
								location: "Harvey",
							},
							{
								src: "/images/case-studies/Bally-Bally-LV30kWH.webp",
								alt: "Bally Bally Homestead Installation",
								caption: "30kWh LV System",
								location: "Bally Bally",
							},
							{
								src: "/images/case-studies/Simon-Oeij-HV60kWh.webp",
								alt: "Perth Hills Residence Installation",
								caption: "60kWh High Voltage",
								location: "Perth Hills",
							},
							{
								src: "/images/case-studies/M-Singh-30kWh.webp",
								alt: "Singh Residence Installation",
								caption: "30kWh Residential System",
								location: "Southern River",
							},
							{
								src: "/images/case-studies/R-Woon-LV20kWh.webp",
								alt: "Woon Residence Installation",
								caption: "20kWh Compact Setup",
								location: "Canning Vale",
							},
							{
								src: "/images/case-studies/J-Doss-LV35kWh.webp",
								alt: "Doss Residence Installation",
								caption: "35kWh LV System",
								location: "Perth Metro",
							},
							{
								src: "/images/case-studies/K-Fairman 15kWh.webp",
								alt: "Fairman Residence Installation",
								caption: "15kWh Compact System",
								location: "Perth Metro",
							},
							{
								src: "/images/case-studies/H-Collins-LV-25kWh.webp",
								alt: "Collins Residence Installation",
								caption: "25kWh LV System",
								location: "Perth Metro",
							},
						]}
					/>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-white text-center">
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
