import { createLazyFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowRight,
	Check,
	ChevronDown,
	Download,
	Shield,
	Thermometer,
	Zap,
} from "lucide-react";
import { useRef } from "react";
import { InverterMarquee } from "../../components/InverterMarquee";
import { Button } from "../../components/ui/Button";
import MasonryGallery from "../../components/ui/MasonryGallery";


export const Route = createLazyFileRoute("/products/residential")({
	component: ResidentialProductsPage,
});

export function ResidentialProductsPage() {
	// Parallax ref
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end start"],
	});

	const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

	return (
		<div
			className="min-h-screen bg-[var(--white-warm)] font-sans text-[var(--black)]"
			ref={targetRef}
		>
			{/* 1. Immersive Hero Section - "Peace of Mind" */}
			<section className="relative h-screen min-h-[800px] flex flex-col justify-center items-center text-center overflow-hidden">
				<motion.div
					className="absolute inset-0 z-0"
					style={{ opacity: heroOpacity, scale: heroScale }}
				>
					<img
						src="/images/stock/garage-renoz-1.webp"
						alt="RENOZ Home Battery System"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/40" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--white-warm)]" />
				</motion.div>

				<div className="relative z-10 max-w-4xl px-4 mt-[-5vh]">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
					>
						<span className="w-2 h-2 rounded-full bg-[var(--renoz-green)] animate-pulse" />
						<span className="text-white text-sm font-medium tracking-wide">
							Engineered in Western Australia
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
						className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg"
					>
						Genuine <br />
						<span className="text-[var(--renoz-green)]">Security.</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
						className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md"
					>
						The safest, most reliable energy storage for your home.
						<br className="hidden md:block" />
						Keep your lights on when the grid goes down.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
					>
						<Button
							variant="primary"
							size="lg"
							to="/contact"
							search={{ type: "homeowner" }}
							className="rounded-full px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
						>
							Get a Quote
						</Button>
						<Button
							variant="outline"
							size="lg"
							to="/installers"
							className="rounded-full px-12 py-6 text-lg bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-black"
						>
							Find Installer
						</Button>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2, duration: 1 }}
					className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
				>
					<span className="text-white/50 text-xs tracking-widest uppercase">
						Scroll
					</span>
					<ChevronDown className="w-6 h-6 text-white/50" />
				</motion.div>
			</section>

			{/* 2. Compatibility Carousel - Installer Confidence */}
			<div className="bg-white border-b border-gray-100 py-12 overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 mb-8 text-center">
					<p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
						Works with your preferred inverter
					</p>
				</div>
				<div className="relative flex overflow-x-hidden group">
					<InverterMarquee className="px-12 pr-24 md:pr-32" />
				</div>
			</div>

			{/* 3. "Why RENOZ?" Bento Grid - Homeowner Trust */}
			<section className="py-24 px-4 max-w-7xl mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
						Safe. Simple. Proven.
					</h2>
					<p className="text-xl text-[var(--text-muted)] leading-relaxed">
						We don't overcomplicate things. We build batteries that handle the
						brutal Australian heat, deliver reliable performance, and last for a decade.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
					{/* Card 1: Safety (Large) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="md:col-span-2 bg-[var(--black)] text-white rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden group"
					>
						<div className="relative z-10">
							<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
								<Shield className="w-6 h-6 text-[var(--renoz-green)]" />
							</div>
							<h3 className="text-3xl font-bold mb-4">LFP Chemistry</h3>
							<p className="text-gray-400 text-lg max-w-md">
								We use Lithium Iron Phosphate (LFP) chemistry - the safest and most
								stable lithium technology available. Proven in mission-critical applications
								with exceptional thermal stability.
							</p>
						</div>
						<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[var(--renoz-green)]/10 to-transparent" />
						<Shield className="absolute -bottom-8 -right-8 w-64 h-64 text-[var(--renoz-green)]/5 group-hover:text-[var(--renoz-green)]/10 transition-colors duration-700" />
					</motion.div>

					{/* Card 2: Heat */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-soft flex flex-col relative overflow-hidden"
					>
						<div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
							<Thermometer className="w-6 h-6 text-orange-500" />
						</div>
						<h3 className="text-2xl font-bold mb-3">Rated to 55°C</h3>
						<p className="text-[var(--text-muted)] leading-relaxed">
							While others derate at 40°C, we keep running. Built for 45°C+
							summer days in the Pilbara and Perth Hills.
						</p>
					</motion.div>

					{/* Card 3: Scalability */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-soft flex flex-col relative overflow-hidden"
					>
						<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
							<Zap className="w-6 h-6 text-blue-500" />
						</div>
						<h3 className="text-2xl font-bold mb-3">Modular Scale</h3>
						<p className="text-[var(--text-muted)] leading-relaxed">
							Start with 5kWh. Add more modules later. No need to replace your
							inverter or rewire your house.
						</p>
					</motion.div>

					{/* Card 4: Local Support (Large) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="md:col-span-2 bg-gray-50 rounded-[32px] p-10 border border-gray-100 flex flex-col md:flex-row items-center gap-8"
					>
						<div className="flex-1">
							<div className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
								Local Support
							</div>
							<h3 className="text-3xl font-bold mb-4">We're right here.</h3>
							<p className="text-[var(--text-muted)] text-lg">
								Headquartered in O'Connor, WA. When you call support, you speak
								to the engineers who designed the system, not a call centre
								overseas.
							</p>
						</div>
						<div className="w-full md:w-1/3 aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
							<img
								src="/images/stock/renoz-ccs.webp"
								alt="Renoz Warehouse Team"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Installation Gallery - Exclusive to Residential */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<MasonryGallery
						title="Installation Gallery"
						showRating={true}
						images={[
							{
								src: "/images/case-studies/Simon-Oeij-HV60kWh.webp",
								alt: "Luxury Home Installation",
								caption: "60kWh HV System for Large Estate",
								location: "Perth Hills",
							},
							{
								src: "/images/case-studies/M-Singh-30kWh.webp",
								alt: "Singh Residence",
								caption: "30kWh Retrofit System",
								location: "Southern River",
							},
							{
								src: "/images/case-studies/J-Doss-LV35kWh.webp",
								alt: "Doss Residence",
								caption: "35kWh Modular Setup",
								location: "Canning Vale",
							},
							{
								src: "/images/case-studies/K-Fairman 15kWh.webp",
								alt: "Fairman Residence",
								caption: "15kWh Essential Backup",
								location: "Perth Metro",
							},
							{
								src: "/images/case-studies/H-Collins-LV-25kWh.webp",
								alt: "Collins Residence",
								caption: "25kWh Hybrid System",
								location: "Perth Metro",
							},
							{
								src: "/images/case-studies/R-Woon-LV20kWh.webp",
								alt: "Woon Residence",
								caption: "20kWh Compact Installation",
								location: "Canning Vale",
							},
						]}
					/>
				</div>
			</section>

			{/* 4. Technical Specifications - Clear & Scannable */}
			<section className="py-24 bg-[var(--black)] text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<h2 className="text-4xl font-bold mb-8">Technical Specs</h2>
							<p className="text-gray-400 text-lg mb-12 max-w-md">
								Designed for easy installation and maximum lifespan.
							</p>

							<div className="grid grid-cols-2 gap-y-10 gap-x-8">
								{[
									{ label: "Nominal Voltage", value: "51.2 V" },
									{ label: "Usable Capacity", value: "5.12 kWh" },
									{ label: "Max Charge/Discharge", value: "100 A (1C)" },
									{ label: "Depth of Discharge", value: "100%" },
									{ label: "Cycle Life", value: "6,000+ Cycles" },
									{ label: "Communication", value: "CAN / RS1485" },
								].map((item, i) => (
									<div key={i}>
										<div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
											{item.label}
										</div>
										<div className="text-2xl md:text-3xl font-bold text-white">
											{item.value}
										</div>
									</div>
								))}
							</div>

							<div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
								<h4 className="font-bold mb-2 flex items-center gap-2">
									<Check className="w-5 h-5 text-[var(--renoz-green)]" />
									Warranty
								</h4>
								<p className="text-gray-400 text-sm">
									10 Year Product Warranty (T&Cs apply).Guaranteed to retain
									&gt;80% capacity after 6,000 cycles.
								</p>
							</div>
						</div>

						<div className="bg-white text-[var(--black)] rounded-[32px] p-8 md:p-12 shadow-2xl">
							<h3 className="text-2xl font-bold mb-8">Resources</h3>
							<div className="space-y-4">
								{[
									{ name: "Datasheet (LV Series)", size: "2.4 MB" },
									{ name: "Installation Manual", size: "4.8 MB" },
									{ name: "Warranty Policy", size: "1.1 MB" },
									{ name: "Inverter Compatibility List", size: "0.5 MB" },
								].map((doc, i) => (
									<button
										key={i}
										className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all group text-left"
									>
										<div className="flex items-center gap-4">
											<div className="w-10 h-10 bg-[var(--renoz-green)]/10 rounded-lg flex items-center justify-center text-[var(--renoz-green)] group-hover:scale-110 transition-transform">
												<Download className="w-5 h-5" />
											</div>
											<div>
												<div className="font-bold">{doc.name}</div>
												<div className="text-xs text-gray-500">{doc.size}</div>
											</div>
										</div>
										<ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[var(--black)] transition-colors" />
									</button>
								))}
							</div>
							<div className="mt-8 pt-8 border-t border-gray-100 text-center">
								<p className="text-sm text-gray-500 mb-4">
									Are you an installer?
								</p>
								<Button variant="outline" to="/installers" className="w-full">
									Access Partner Portal
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 5. Final CTA */}
			<section className="py-32 text-center bg-white">
				<div className="max-w-2xl mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--black)]">
						Ready to switch?
					</h2>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							variant="primary"
							size="lg"
							to="/contact"
							className="rounded-full px-12 py-6 text-lg shadow-xl"
						>
							Request a Quote
						</Button>
						<Button
							variant="outline"
							size="lg"
							to="/installers"
							className="rounded-full px-12 py-6 text-lg"
						>
							Find Installer
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
