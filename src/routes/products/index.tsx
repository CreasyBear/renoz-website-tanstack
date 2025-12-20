import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Battery,
	Boxes,
	Building,
	Check,
	Home,
	Settings2,
	Shield,
	Tractor,
	Zap,
} from "lucide-react";
import { Button } from "../../components/ui/Button";

// ComparisonTable removed

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/products/")({
	head: () => ({
		meta: [
			{ title: "Battery Systems - RENOZ Energy" },
			{
				name: "description",
				content:
					"Residential, rural, and commercial battery energy storage systems. From 10kWh home systems to multi-megawatt industrial solutions.",
			},
			{ property: "og:title", content: "Battery Systems - RENOZ Energy" },
			{
				property: "og:description",
				content:
					"Residential, rural, and commercial battery energy storage systems. From 10kWh home systems to multi-megawatt industrial solutions.",
			},
			{ property: "og:url", content: `${baseUrl}/products` },
			{ name: "twitter:title", content: "Battery Systems - RENOZ Energy" },
			{
				name: "twitter:description",
				content:
					"Residential, rural, and commercial battery energy storage systems. From 10kWh home systems to multi-megawatt industrial solutions.",
			},
		],
	}),
	component: ProductsPage,
});

function ProductsPage() {
	return (
		<div className="min-h-screen bg-[var(--cream)]">
			{/* Hero */}
			<section className="relative pt-32 pb-20 overflow-hidden">
				<div className="absolute inset-0 z-0 opacity-10">
					{/* Abstract grid pattern */}
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className="inline-block py-1 px-3 rounded-full bg-[var(--renoz-green)]/10 text-[var(--renoz-green)] text-xs font-bold tracking-widest uppercase mb-6">
							Our Systems
						</span>
						<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-[var(--black)] tracking-tight">
							Energy Storage, <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--renoz-green)] to-[var(--renoz-green-light)]">
								Engineered for WA.
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
							From compact residential units to megawatt-scale industrial power
							plants.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Product Showcases */}
			<div className="space-y-8 pb-32">
				{/* Residential */}
				<section className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="bg-white rounded-[40px] overflow-hidden shadow-soft border border-gray-100 grid lg:grid-cols-2 gap-0"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8 }}
						>
							<div className="p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
								<div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
									<Home className="w-8 h-8 text-orange-600" />
								</div>
								<h2 className="text-4xl font-bold text-[var(--black)] mb-4">
									Residential Series
								</h2>
								<div className="text-2xl font-bold text-[var(--renoz-green)] mb-6">
									10 - 50 kWh
								</div>
								<p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
									Genuine security for your home. Our residential systems are
									designed to power your entire household, not just the
									essentials, keeping your lights on and air conditioning
									running during blackouts.
								</p>

								<ul className="space-y-4 mb-10">
									{[
										"Full home backup capability",
										"Silent operation",
										"App-based monitoring",
										"10-year warranty",
									].map((item, i) => (
										<li key={i} className="flex items-center gap-3">
											<div className="w-6 h-6 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center">
												<Check className="w-3 h-3 text-[var(--renoz-green)]" />
											</div>
											<span className="font-medium text-gray-700">{item}</span>
										</li>
									))}
								</ul>

								<Button
									variant="primary"
									to="/products/residential"
									className="self-start"
								>
									View Specifications
								</Button>
							</div>
							<div className="relative h-[400px] lg:h-auto bg-gray-100 order-1 lg:order-2">
								<img
									src="/images/products/RENOZ%20Energy%20Garage%20Render.webp"
									alt="Residential Battery System"
									className="absolute inset-0 w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:from-transparent" />
							</div>
						</motion.div>
					</div>
				</section>

				{/* Rural */}
				<section className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="bg-[var(--black)] text-white rounded-[40px] overflow-hidden shadow-2xl grid lg:grid-cols-2 gap-0"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8 }}
						>
							<div className="relative h-[400px] lg:h-auto bg-gray-900">
								<img
									src="/images/stock/winery-bess-1.webp" // Updated Image
									alt="Rural Battery System"
									className="absolute inset-0 w-full h-full object-cover opacity-80"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 lg:to-transparent lg:from-transparent" />
							</div>

							<div className="p-12 lg:p-20 flex flex-col justify-center">
								<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
									<Tractor className="w-8 h-8 text-[var(--renoz-green)]" />
								</div>
								<h2 className="text-4xl font-bold text-white mb-4">
									Rural Series
								</h2>
								<div className="text-2xl font-bold text-[var(--renoz-green)] mb-6">
									50 - 200 kWh
								</div>
								<p className="text-lg text-gray-300 mb-8 leading-relaxed">
									True energy independence. A rugged, silent alternative to
									diesel generators for properties at the edge of the grid.
									Built to withstand heat, dust, and isolation.
								</p>

								<div className="grid grid-cols-2 gap-6 mb-10">
									<div className="bg-white/5 p-4 rounded-xl border border-white/10">
										<Shield className="w-6 h-6 text-[var(--renoz-green)] mb-2" />
										<div className="font-bold">IP65 Rated</div>
										<div className="text-sm text-gray-400">
											Dust & Water Proof
										</div>
									</div>
									<div className="bg-white/5 p-4 rounded-xl border border-white/10">
										<Zap className="w-6 h-6 text-[var(--renoz-green)] mb-2" />
										<div className="font-bold">3-Phase</div>
										<div className="text-sm text-gray-400">
											High Output Power
										</div>
									</div>
								</div>

								<Button
									variant="outline"
									to="/products/rural"
									className="self-start border-white text-white hover:bg-white hover:text-black"
								>
									View Specifications
								</Button>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Commercial */}
				<section className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="bg-white rounded-[40px] overflow-hidden shadow-soft border border-gray-100 grid lg:grid-cols-2 gap-0"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8 }}
						>
							<div className="p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
								<div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
									<Building className="w-8 h-8 text-blue-600" />
								</div>
								<h2 className="text-4xl font-bold text-[var(--black)] mb-4">
									Commercial Series
								</h2>
								<div className="text-2xl font-bold text-[var(--renoz-green)] mb-6">
									200+ kWh
								</div>
								<p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
									Total control over your energy costs. Turn energy into a
									managed asset, stabilise operational costs, and secure your
									business against grid outages.
								</p>

								<ul className="space-y-4 mb-10">
									{[
										"Peak shaving capability",
										"Grid support services",
										"Modular scalability",
										"Remote fleet management",
									].map((item, i) => (
										<li key={i} className="flex items-center gap-3">
											<div className="w-6 h-6 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center">
												<Check className="w-3 h-3 text-[var(--renoz-green)]" />
											</div>
											<span className="font-medium text-gray-700">{item}</span>
										</li>
									))}
								</ul>

								<Button
									variant="primary"
									to="/products/commercial"
									className="self-start"
								>
									View Specifications
								</Button>
							</div>
							<div className="relative h-[400px] lg:h-auto bg-gray-100 order-1 lg:order-2">
								<img
									src="/images/stock/solar-microgrid-bess-drone-shot.webp" // Updated Image
									alt="Commercial Battery System"
									className="absolute inset-0 w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:from-transparent" />
							</div>
						</motion.div>
					</div>
				</section>
			</div>

			{/* Visual System Selector (Replaces Table) */}
			<section className="py-24 bg-[var(--white-warm)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4">Choose your power.</h2>
						<p className="text-[var(--text-muted)]">
							Select the system that fits your project scale.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{/* 1. Residential Card */}
						<motion.div
							whileHover={{ y: -8 }}
							className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
						>
							<div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-orange-600">
								<Home className="w-6 h-6" />
							</div>
							<h3 className="text-2xl font-bold mb-2">Residential</h3>
							<p className="text-[var(--text-muted)] mb-8 text-sm h-12">
								For homes and small businesses needing backup &
								self-consumption.
							</p>

							<div className="space-y-4 mb-8 flex-1">
								<div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Battery className="w-4 h-4" /> Capacity
									</span>
									<span className="font-bold">10 - 50 kWh</span>
								</div>
								<div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Zap className="w-4 h-4" /> Voltage
									</span>
									<span className="font-bold">LV (48V)</span>
								</div>
								<div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Boxes className="w-4 h-4" /> Install
									</span>
									<span className="font-bold">Modular</span>
								</div>
							</div>

							<Button
								variant="outline"
								to="/products/residential"
								className="w-full justify-between group"
							>
								Specs{" "}
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</Button>
						</motion.div>

						{/* 2. Rural Card */}
						<motion.div
							whileHover={{ y: -8 }}
							className="bg-[var(--black)] text-white rounded-3xl p-8 shadow-xl flex flex-col h-full relative overflow-hidden"
						>
							<div className="absolute top-0 right-0 p-3 bg-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest rounded-bl-2xl">
								Most Popular
							</div>
							<div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[var(--renoz-green)] backdrop-blur-sm">
								<Tractor className="w-6 h-6" />
							</div>
							<h3 className="text-2xl font-bold mb-2">Rural</h3>
							<p className="text-gray-400 mb-8 text-sm h-12">
								For farms and properties at the edge of the grid requiring
								3-phase power.
							</p>

							<div className="space-y-4 mb-8 flex-1">
								<div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Battery className="w-4 h-4" /> Capacity
									</span>
									<span className="font-bold text-[var(--renoz-green)]">
										50 - 200 kWh
									</span>
								</div>
								<div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Zap className="w-4 h-4" /> Voltage
									</span>
									<span className="font-bold">HV (High Voltage)</span>
								</div>
								<div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Settings2 className="w-4 h-4" /> Type
									</span>
									<span className="font-bold">3-Phase Outdoor</span>
								</div>
							</div>

							<Button
								variant="primary"
								to="/products/rural"
								className="w-full justify-between group"
							>
								Specs{" "}
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</Button>
						</motion.div>

						{/* 3. Commercial Card */}
						<motion.div
							whileHover={{ y: -8 }}
							className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
						>
							<div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-blue-600">
								<Building className="w-6 h-6" />
							</div>
							<h3 className="text-2xl font-bold mb-2">Commercial</h3>
							<p className="text-[var(--text-muted)] mb-8 text-sm h-12">
								For industrial applications, microgrids, and large-scale backup.
							</p>

							<div className="space-y-4 mb-8 flex-1">
								<div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Battery className="w-4 h-4" /> Capacity
									</span>
									<span className="font-bold">200+ kWh</span>
								</div>
								<div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Zap className="w-4 h-4" /> Voltage
									</span>
									<span className="font-bold">HV (High Voltage)</span>
								</div>
								<div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
									<span className="text-gray-400 flex items-center gap-2">
										<Boxes className="w-4 h-4" /> Install
									</span>
									<span className="font-bold">Containerised</span>
								</div>
							</div>

							<Button
								variant="outline"
								to="/products/commercial"
								className="w-full justify-between group"
							>
								Specs{" "}
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</Button>
						</motion.div>
					</div>

					<div className="mt-16 text-center max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold mb-6">Still unsure?</h2>
						<p className="text-[var(--text-muted)] mb-10">
							Our engineering team can help model your energy usage to determine
							the optimal system size and configuration.
						</p>
						<Button variant="outline" size="lg" to="/contact">
							Request a Sizing Consultation
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
