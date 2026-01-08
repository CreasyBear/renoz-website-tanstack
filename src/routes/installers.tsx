import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	ArrowRight,
	CheckCircle2,
	HardHat,
	PhoneCall,
	TrendingUp,
	Warehouse,
	Zap,
} from "lucide-react";
import AccordionSteps from "../components/ui/AccordionSteps";
import { Button } from "../components/ui/Button";
import Image from "../components/ui/Image";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/installers")({
	head: () => ({
		meta: [
			{ title: "Installer Partnership - RENOZ Energy" },
			{
				name: "description",
				content:
					"Join WA's leading battery OEM network. Local stock, direct engineer support, and competitive wholesale pricing for certified installers.",
			},
			{ property: "og:title", content: "Installer Partnership - RENOZ Energy" },
			{
				property: "og:description",
				content:
					"Join WA's leading battery OEM network. Local stock, direct engineer support, and competitive wholesale pricing.",
			},
			{ property: "og:url", content: `${baseUrl}/installers` },
			{
				name: "twitter:title",
				content: "Installer Partnership - RENOZ Energy",
			},
			{
				name: "twitter:description",
				content:
					"Join WA's leading battery OEM network. Local stock, direct engineer support, and competitive wholesale pricing.",
			},
		],
	}),
	component: InstallersPage,
});

function InstallersPage() {
	return (
		<div className="min-h-screen bg-[var(--cream)] font-sans">
			{/* 1. High Agency Hero: Immersive & Direct */}
			<section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[var(--black)] text-white">
				{/* Background Layer with Parallax-like feel */}
				{/* Background Layer with Parallax-like feel */}
				<motion.div
					className="absolute inset-0 z-0"
					initial={{ scale: 1.15 }}
					animate={{ scale: 1 }}
					transition={{ duration: 15, ease: "easeOut" }}
				>
					<Image
						src="/images/about/team-warehouse.webp"
						alt="RENOZ Team in Warehouse"
						className="w-full h-full object-cover opacity-50"
						width={1920}
						height={1080}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--black)]" />
				</motion.div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="flex flex-col items-center"
					>
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--renoz-green)]/10 border border-[var(--renoz-green)]/20 text-[var(--renoz-green)] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
							<HardHat className="w-3 h-3" />
							For Licensed Electricians
						</div>

						<h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-none text-white">
							Your partner, <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--renoz-green)] to-emerald-400">
								not just a supplier.
							</span>
						</h1>

						<p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
							We cut out the distributor to give you better margins, direct
							access to stock, and engineering support that actually picks up
							the phone.
						</p>

						<div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
							<Button
								variant="primary"
								size="lg"
								to="/contact?type=installer"
								className="rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-[var(--renoz-green)]/20 transition-all"
							>
								Apply for Trade Account
							</Button>
							<Button
								variant="outline"
								size="lg"
								to="/products/residential"
								className="rounded-full px-10 py-7 text-lg bg-transparent text-white border-white/20 hover:bg-white hover:text-[var(--black)] backdrop-blur-sm"
							>
								View Product Range
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* 2. Value Props: The "No Bullshit" Grid */}
			<section className="py-32 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-20">
						<h2 className="text-4xl font-bold mb-4 text-[var(--black)]">
							The RENOZ Difference.
						</h2>
						<p className="text-[var(--text-muted)] text-xl">
							Why WA sparkies are making the switch.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
						{[
							{
								icon: TrendingUp,
								title: "Better Margins",
								desc: "We design the product and sell direct to you. No distributor markup means more profit in your pocket on every job.",
							},
							{
								icon: PhoneCall,
								title: "Real Support",
								desc: "Stuck on site? Call us. You'll speak to an engineer in O'Connor, not a call center overseas. We know our product inside out.",
							},
							{
								icon: Warehouse,
								title: "Local Stock",
								desc: "We hold significant stock in our WA warehouse. Short lead times and local warranty swaps keep your projects moving.",
							},
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
							>
								<div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-[var(--renoz-green)] group-hover:scale-110 transition-transform duration-300">
									<item.icon className="w-8 h-8" strokeWidth={1.5} />
								</div>
								<h3 className="text-2xl font-bold mb-4">{item.title}</h3>
								<p className="text-[var(--text-muted)] leading-relaxed text-lg">
									{item.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* 3. Tech Specs: Dark Mode Blueprint Style */}
			<section className="py-32 bg-[var(--black)] text-white overflow-hidden relative">
				{/* Abstract Background Element */}
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--renoz-green)]/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
						<div>
							<div className="text-[var(--renoz-green)] font-bold tracking-widest uppercase mb-4">
								Technical Superiority
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
								Engineered for the <br />
								<span className="text-gray-300">Trade Professional.</span>
							</h2>
							<p className="text-gray-300 text-lg mb-10 leading-relaxed">
								We know you don't care about marketing fluff. You want specs
								that work, connections that don't strip, and protocols that talk
								to everything.
							</p>

							<ul className="space-y-6">
								{[
									"100A Continuous Discharge (Real Rating)",
									"Solid Brass M8 Terminals (No plastic caps)",
									"Pre-configured CAN/RS485 for Deye/Victron",
									"Self-Stacking Alignment Pins (No racking)",
									"IP65 Rated Enclosure",
								].map((feature, i) => (
									<li key={i} className="flex items-center gap-4">
										<CheckCircle2 className="w-6 h-6 text-[var(--renoz-green)] shrink-0" />
										<span className="text-lg">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="grid grid-cols-2 gap-4">
							{[
								{
									label: "Nominal Voltage",
									value: "51.2V",
									sub: "16S Architecture",
								},
								{ label: "Capacity", value: "5.12kWh", sub: "100Ah" },
								{ label: "Max Discharge", value: "100A", sub: "1C Rating" },
								{ label: "Cycle Life", value: "6000+", sub: "@ 80% DoD" },
							].map((spec, i) => (
								<motion.div
									key={i}
									whileHover={{ scale: 1.02 }}
									className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
								>
									<div className="text-[var(--renoz-green)] text-sm uppercase tracking-widest font-medium mb-2">
										{spec.label}
									</div>
									<div className="text-4xl font-bold text-white mb-1">
										{spec.value}
									</div>
									<div className="text-[var(--renoz-green)] text-sm font-mono">
										{spec.sub}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 4. Partner Process: Step by Step */}
			<section className="py-32 bg-[var(--white-warm)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AccordionSteps
						title="How to Partner"
						steps={[
							{
								title: "Apply Online",
								content:
									"Fill out the trade application below. We verify your EC license and ABN to ensure we only sell to qualified professionals. Approval takes less than 24 hours.",
								image: "/images/stock/renoz-stacking.webp",
							},
							{
								title: "Get Onboarded",
								content:
									"We'll send you our wholesale price list and invite you to the O'Connor facility. Come have a coffee, meet the engineers, and see our workshop.",
								image: "/images/about/unpacking-container.webp",
							},
							{
								title: "Start Installing",
								content:
									"Once certified, you get direct access to wholesale pricing and priority ordering via your dedicated account manager. We'll also list you on our 'Find an Installer' map to drive local leads your way.",
								image: "/images/case-studies/Harvey-35kWh.webp",
							},
						]}
					/>
				</div>
			</section>

			{/* 5. Commercial Capability */}
			<section className="py-24 bg-white border-y border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-[var(--black)] rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative">
						<div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<div className="inline-flex items-center gap-2 mb-6 text-[var(--renoz-green)] font-bold uppercase tracking-widest">
									<Zap className="w-5 h-5" />
									Beyond Residential
								</div>
								<h2 className="text-4xl md:text-5xl font-bold mb-6">
									Commercial & HV Systems.
								</h2>
								<p className="text-gray-300 text-lg mb-8 leading-relaxed">
									From residential retrofits to megawatt-scale commercial
									projects, we have the hardware and the engineering chops to
									back you up. Access our commercial range (50kWh - 2MWh) for
									your larger clients.
								</p>
								<Button
									variant="primary"
									size="lg"
									to="/products/commercial"
									className="rounded-full px-8 py-4"
								>
									View Commercial Specs
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
							</div>
							<div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/20">
								<Image
									src="/images/case-studies/Simon-Oeij-HV60kWh.webp"
									alt="Commercial Installation"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 6. Final CTA */}
			<section className="py-32 text-center bg-[var(--cream)]">
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--black)]">
						Ready to switch?
					</h2>
					<p className="text-[var(--text-muted)] mb-10 text-xl">
						Join the network of WA installers who are backing local engineering.
					</p>
					<div className="flex justify-center">
						<Button
							variant="primary"
							size="lg"
							to="/contact?type=installer"
							className="rounded-full px-16 py-6 text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
						>
							Apply for Trade Account
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
