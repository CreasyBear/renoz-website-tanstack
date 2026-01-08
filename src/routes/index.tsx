import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowRight,
	Building,
	Home,
	MapPin,
	Quote,
	Shield,
	Star,
	Tractor,
	Zap,
} from "lucide-react";
import { useRef } from "react";
import { InverterMarquee } from "../components/InverterMarquee";
import { FAQ } from "../components/sections/FAQ";
import { SolarEconomics } from "../components/sections/SolarEconomics";
import { UrgencyBanner } from "../components/sections/UrgencyBanner";
import AccordionSteps from "../components/ui/AccordionSteps";
import { Button } from "../components/ui/Button";
import ExpandingCards from "../components/ui/ExpandingCards";
import Image from "../components/ui/Image";
import MasonryGallery from "../components/ui/MasonryGallery";
import { getCaseStudySubset } from "../data/case-study-images";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Perth's Battery OEM - RENOZ Energy" },
			{
				name: "description",
				content:
					"OEM battery systems engineered for Australian conditions. Residential, rural, and commercial energy storage from Perth's own OEM.",
			},
			{
				name: "keywords",
				content:
					"battery storage Perth, home battery backup WA, solar battery Western Australia, off-grid battery system, RENOZ Energy, lithium battery Perth, energy storage Australia, residential battery, rural battery, commercial battery",
			},
			{
				property: "og:title",
				content: "Perth's Battery OEM - RENOZ Energy",
			},
			{
				property: "og:description",
				content:
					"OEM battery systems engineered for Australian conditions. Residential, rural, and commercial energy storage from Perth's own OEM.",
			},
			{ property: "og:url", content: baseUrl },
			{ property: "og:type", content: "website" },
			{
				name: "twitter:title",
				content: "Perth's Battery OEM - RENOZ Energy",
			},
			{
				name: "twitter:description",
				content:
					"OEM battery systems engineered for Australian conditions. Residential, rural, and commercial energy storage.",
			},
			{ name: "geo.region", content: "AU-WA" },
			{ name: "geo.placename", content: "Perth" },
			{ name: "geo.position", content: "-32.0501;115.7997" },
		],
		scripts: [
			// AggregateRating Schema for SEO (shows stars in Google)
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "RENOZ Energy",
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: "5.0",
						reviewCount: "45",
						bestRating: "5",
						worstRating: "1",
					},
				}),
			},
		],
	}),
	component: HomePage,
});

function HomePage() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	return (
		<div
			className="min-h-screen bg-[var(--cream)] font-sans selection:bg-[var(--renoz-green)] selection:text-white"
			ref={containerRef}
		>
			{/* Hero Section */}
			<section className="relative h-[100svh] md:h-screen min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden">
				{/* Background Image with Parallax & Ken Burns */}
				<motion.div className="absolute inset-0 z-0" style={{ y }}>
					<motion.div
						className="absolute inset-0 z-0"
						initial={{ scale: 1.15 }}
						animate={{ scale: 1 }}
						transition={{ duration: 15, ease: "easeOut" }}
					>
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{
								backgroundImage: "url('/images/about/wa-roots.webp')",
							}}
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
					</motion.div>
				</motion.div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-20 md:pt-24">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
							className="max-w-3xl"
						>
							{/* Identity: WHO we are */}
							<div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
								<span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[var(--renoz-green)]/40 text-[var(--renoz-green)] text-xs font-bold tracking-widest uppercase bg-[var(--renoz-green)]/10 backdrop-blur-md shadow-glow">
									<span className="w-2 h-2 rounded-full bg-[var(--renoz-green)] mr-2 animate-pulse"></span>
									Perth's Battery OEM
								</span>
								<span className="text-white/90 text-sm font-medium tracking-wide">
									Building WA's battery capability
								</span>
							</div>

							{/* Value Proposition: WHAT you get */}
							<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 md:mb-10 text-white leading-[0.9]">
								Your solar makes power. <br />
								<span className="text-[var(--renoz-green)] drop-shadow-[0_0_15px_rgba(0,177,64,0.3)]">
									Now keep it.
								</span>
							</h1>

							{/* Explanation: WHY it matters */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
								className="glass-dark p-6 md:p-8 rounded-2xl mb-8 md:mb-12 max-w-lg border-l-4 border-[var(--renoz-green)] shadow-2xl"
							>
								<p className="text-lg md:text-xl text-zinc-100 leading-relaxed font-light">
									Most WA homes{" "}
									<span className="text-white font-medium">
										lose 70% of their solar
									</span>{" "}
									back to the grid for cents. Our batteries let you store it and
									use it when power costs the most.
								</p>
							</motion.div>

							{/* CTAs: WHAT to do next */}
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
								<Button
									variant="primary"
									size="lg"
									to="/products"
									className="group text-lg px-8 py-6 rounded-full w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(0,177,64,0.2)] hover:shadow-[0_0_30px_rgba(0,177,64,0.4)] transition-all duration-300"
								>
									Explore Our Batteries
									<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Button>
								<Button
									variant="outline"
									size="lg"
									to="/case-studies"
									className="text-lg px-8 py-6 rounded-full backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white hover:text-black transition-all w-full sm:w-auto justify-center"
								>
									See Real Installations
								</Button>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Floating Stats - Proof Points */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.8 }}
					className="absolute bottom-6 left-4 right-4 md:bottom-12 md:left-auto md:right-12 flex flex-row md:flex-row gap-3 md:gap-4 z-20 justify-center md:justify-end"
				>
					<div className="glass-dark p-4 md:p-6 rounded-2xl flex-1 md:flex-none md:min-w-[180px] text-center md:text-left hover:bg-black/40 transition-colors duration-300">
						<div className="text-2xl md:text-3xl font-bold text-white mb-0.5">
							WA-Based
						</div>
						<div className="text-[10px] md:text-xs text-[var(--renoz-green)] uppercase tracking-widest font-bold">
							Local OEM
						</div>
					</div>
					<div className="glass-dark p-4 md:p-6 rounded-2xl flex-1 md:flex-none md:min-w-[180px] text-center md:text-left hover:bg-black/40 transition-colors duration-300">
						<div className="text-2xl md:text-3xl font-bold text-white mb-0.5">
							10 Year
						</div>
						<div className="text-[10px] md:text-xs text-[var(--renoz-green)] uppercase tracking-widest font-bold">
							Replacement Warranty
						</div>
					</div>
				</motion.div>
			</section>

			{/* Solar Economics - THE PROBLEM */}
			<SolarEconomics />

			{/* Feature Panels - WHO WE ARE / THE ANSWER */}
			<section className="section-spacing px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="mb-8 md:mb-12 lg:mb-16 text-center md:text-left"
				>
					<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
						The Solution
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--black)] tracking-tight">
						Don't Rent Your Power. <br className="hidden md:block" />
						Own It.
					</h2>
					<p className="text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed">
						The only way to solve the Solar Paradox is storage. But to store
						energy reliably in WA, you need a battery built for the heat.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px] mb-20">
					{/* Main Large Card */}
					<motion.div
						className="lg:col-span-8 h-[400px] lg:h-full relative rounded-[32px] overflow-hidden group shadow-soft"
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="absolute inset-0">
							<Image
								src="/images/about/wa-roots.webp"
								alt="WA roots"
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
						</div>
						<div className="absolute bottom-0 left-0 p-8 md:p-12">
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--renoz-green)] text-white text-xs font-bold uppercase tracking-wider mb-4">
								<MapPin className="w-3 h-3" />
								Designed in WA
							</div>
							<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
								Engineered for the heat.
							</h3>
							<p className="text-zinc-200 text-lg max-w-md leading-relaxed font-normal">
								Western Australia demands resilience. Our systems are built to
								withstand dust, isolation, and extreme temperatures.
							</p>
						</div>
					</motion.div>

					{/* Side Cards Stack */}
					<div className="lg:col-span-4 flex flex-col gap-6 h-full">
						<motion.div
							className="flex-1 bg-[var(--black)] rounded-[32px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-soft group"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className="absolute top-0 right-0 w-32 h-32 bg-[var(--renoz-green)]/20 rounded-full blur-[60px] pointer-events-none" />
							<Shield className="w-12 h-12 text-[var(--renoz-green)] mb-6 group-hover:scale-110 transition-transform duration-300" />
							<h3 className="text-2xl font-bold text-white mb-2">
								10-Year Warranty
							</h3>
							<p className="text-[var(--text-secondary)]">
								Local support means real security. We stand behind every system.
							</p>
						</motion.div>

						<motion.div
							className="flex-1 bg-white rounded-[32px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-soft border border-white/50"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<Zap className="w-12 h-12 text-[var(--black)] mb-6" />
							<h3 className="text-2xl font-bold text-[var(--black)] mb-2">
								High Efficiency
							</h3>
							<p className="text-[var(--text-muted)]">
								6000+ Cycles at 80% Depth of Discharge for maximum longevity.
							</p>
						</motion.div>
					</div>
				</div>

				{/* Inverter Compatibility - Marquee */}
				<div className="border-t border-gray-100 pt-12">
					<p className="text-center text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-8">
						Compatible with your existing solar
					</p>
					<InverterMarquee />
				</div>
			</section>

			{/* Product Segments - EXPANDING CARDS */}
			<section className="section-spacing bg-[var(--white-warm)] relative overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 lg:mb-20 gap-8">
						<div className="max-w-2xl">
							<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
								Product Range
							</span>
							<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--black)] tracking-tight leading-none">
								Scalable Power.
							</h2>
						</div>
						<p className="text-xl text-[var(--text-muted)] max-w-sm leading-relaxed text-right md:text-left">
							From residential homes to industrial complexes, we have a system
							that fits.
						</p>
					</div>

					<ExpandingCards
						items={[
							{
								id: "residential",
								title: "Residential",
								kwh: "10-50 kWh",
								description:
									"Power your entire household with genuine security. Keep lights, fridges, and air conditioning running during outages.",
								image: "/images/stock/garage-renoz-1.webp",
								link: "/products/residential",
								icon: Home,
							},
							{
								id: "rural",
								title: "Rural",
								kwh: "50-200 kWh",
								description:
									"Rugged independence for properties at the grid edge. Replace diesel generators with silent, reliable stored energy.",
								image: "/images/stock/homestead-rural-2.webp", // Updated Image
								link: "/products/rural",
								icon: Tractor,
							},
							{
								id: "commercial",
								title: "Commercial",
								kwh: "200+ kWh",
								description:
									"Stabilise operational costs and secure your business assets against grid instability and peak demand charges.",
								image: "/images/stock/solar-microgrid-bess-drone-shot.webp", // Updated Image
								link: "/products/commercial",
								icon: Building,
							},
						]}
					/>
				</div>
			</section>

			{/* Social Proof Section */}
			<section className="section-spacing bg-[var(--black)] text-white overflow-hidden relative">
				<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					{/* Section Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12 md:mb-16 lg:mb-20"
					>
						<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
							Social Proof
						</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight">
							Trusted by Western Australians.
						</h2>
						<p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
							Real installations. Real results. Real reviews from real
							customers.
						</p>
					</motion.div>

					{/* Google Reviews & Testimonial */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="mb-12 md:mb-16 lg:mb-20"
					>
						<div className="max-w-4xl mx-auto">
							{/* Google Rating */}
							<div className="flex justify-center items-center gap-6 mb-12">
								<div className="flex items-center gap-2">
									<div className="flex text-yellow-400">
										{[1, 2, 3, 4, 5].map((i) => (
											<Star key={i} className="w-6 h-6 fill-current" />
										))}
									</div>
									<span className="text-2xl font-bold text-white ml-2">
										5.0
									</span>
								</div>
								<div className="h-8 w-px bg-gray-700"></div>
								<div className="text-[var(--text-secondary)]">
									<div className="font-bold text-white text-lg">
										Google Reviews
									</div>
									<div className="text-sm">From verified customers</div>
								</div>
							</div>

							{/* Featured Testimonial - Press Coverage */}
							<div className="glass-dark p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
								<Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--renoz-green)] opacity-20" />

								{/* Press Badge */}
								<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--renoz-green)]/10 border border-[var(--renoz-green)]/20 mb-6">
									<div className="w-2 h-2 rounded-full bg-[var(--renoz-green)] animate-pulse"></div>
									<span className="text-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest">
										Featured in Press
									</span>
								</div>

								<blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-gray-100">
									"When Brad Jones learnt it could cost up to $200,000 to have
									his property connected to the power grid, he decided to look
									at different options... Mr Jones' property is now powered by
									batteries engineered and made in WA by RENOZ Energy."
								</blockquote>

								<div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/5">
									<p className="text-gray-300 italic mb-4">
										"I look at it as an investment, not as just paying for power
										but as an investment in the property. His system only
										depletes 30% overnight and is fully charged the next
										morning."
									</p>
									<p className="text-sm text-[var(--text-secondary)]">
										— Brad Jones, Harvey homeowner
									</p>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<div className="font-bold text-white">
											South Western Times
										</div>
										<div className="text-sm text-[var(--text-secondary)]">
											October 2, 2025
										</div>
									</div>
									<div className="text-right">
										<div className="text-2xl font-bold text-[var(--renoz-green)]">
											$200k
										</div>
										<div className="text-xs text-[var(--text-secondary)]">
											Grid Connection Saved
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Installer Rating */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-center mb-8 md:mb-12 lg:mb-16"
					>
						<div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
							<div className="flex text-yellow-400">
								{[1, 2, 3, 4, 5].map((i) => (
									<Star key={i} className="w-4 h-4 fill-current" />
								))}
							</div>
							<span className="font-bold text-sm text-white">
								4.9/5 from Local Installers
							</span>
						</div>
					</motion.div>

					{/* Masonry Gallery - The Component Handles Mobile Layout */}
					<MasonryGallery
						title="Provenance."
						showRating={false}
						images={getCaseStudySubset(6)}
					/>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mt-16 text-center"
					>
						<p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto mb-8">
							See all our installations and read more customer stories.
						</p>
						<Button
							variant="primary"
							size="lg"
							to="/case-studies"
							className="rounded-full px-10 shadow-glow"
						>
							View All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Segmentation Section: Choose Your Path */}
			<section className="py-20 bg-[var(--white-warm)] border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-8">
						{/* Homeowners Card */}
						<div className="relative group rounded-[32px] overflow-hidden aspect-[4/3] md:aspect-[21/9] lg:aspect-[21/9] shadow-soft cursor-pointer">
							<Link to="/homeowners" className="absolute inset-0 z-20">
								<span className="sr-only">For Homeowners</span>
							</Link>
							<div className="absolute inset-0">
								<Image
									src="/images/stock/garage-renoz-2.webp"
									alt="Homeowners"
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
							</div>
							<div className="absolute bottom-0 left-0 p-8 md:p-12 flex flex-col items-start z-10 w-full">
								<div className="flex items-center justify-between w-full mb-2">
									<h3 className="text-3xl md:text-4xl font-bold text-white">
										For Homeowners
									</h3>
									<div className="bg-white/20 backdrop-blur-md p-2 rounded-full group-hover:bg-[var(--renoz-green)] transition-colors duration-300">
										<ArrowRight className="text-white w-6 h-6" />
									</div>
								</div>
								<p className="text-[var(--text-muted)] text-lg max-w-md">
									Secure your home with energy independence.
								</p>
							</div>
						</div>

						{/* Installers Card */}
						<div className="relative group rounded-[32px] overflow-hidden aspect-[4/3] md:aspect-[21/9] lg:aspect-[21/9] shadow-soft cursor-pointer">
							<Link to="/partners" className="absolute inset-0 z-20">
								<span className="sr-only">For Installers</span>
							</Link>
							<div className="absolute inset-0">
								<Image
									src="/images/stock/renoz-stacking.webp"
									alt="Installers"
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
							</div>
							<div className="absolute bottom-0 left-0 p-8 md:p-12 flex flex-col items-start z-10 w-full">
								<div className="flex items-center justify-between w-full mb-2">
									<h3 className="text-3xl md:text-4xl font-bold text-white">
										For Installers
									</h3>
									<div className="bg-white/20 backdrop-blur-md p-2 rounded-full group-hover:bg-[var(--renoz-green)] transition-colors duration-300">
										<ArrowRight className="text-white w-6 h-6" />
									</div>
								</div>
								<p className="text-[var(--text-muted)] text-lg max-w-md">
									Partner with WA's Own Battery OEM.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works - Accordion Section */}
			<section className="section-spacing px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
				<div className="max-w-7xl mx-auto mt-20">
					<AccordionSteps
						title="Getting secure power is simple."
						steps={[
							{
								title: "Contact us for a sizing",
								content:
									"Send us a photo of your switchboard and current solar setup. Our engineers will determine which RENOZ configuration is best for your specific load profile.",
								image: "/images/stock/renoz-ccs.webp",
							},
							{
								title: "Connect with a partner",
								content:
									"We'll introduce you to a certified installer in your local area. No call centers, just experienced tradespeople who know our systems inside out.",
								image: "/images/stock/renoz-stacking.webp",
							},
							{
								title: "Install & Stay Protected",
								content:
									"Installation typically takes one day. Once active, your system automatically manages your power—saving you money daily and keeping the lights on during blackouts.",
								image: "/images/stock/garage-renoz-2.webp",
							},
						]}
					/>
				</div>
			</section>

			{/* Urgency Banner - IMMEDIATE ACTION */}
			<UrgencyBanner />

			{/* FAQ Section */}
			<FAQ />

			{/* Minimal CTA */}
			<section className="section-spacing bg-[var(--cream)] relative overflow-hidden flex items-center justify-center">
				<div className="text-center relative z-10 max-w-4xl px-4">
					<h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--black)] mb-6 md:mb-8 tracking-tighter">
						Ready to secure <br /> your energy?
					</h2>
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<Button
							variant="primary"
							size="lg"
							to="/contact"
							className="text-lg px-12 py-6 rounded-full shadow-glow"
						>
							Get in Touch
						</Button>
						<p className="text-[var(--text-muted)] text-sm font-medium uppercase tracking-widest mt-4 sm:mt-0 sm:ml-4">
							Talk to our Perth team
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
