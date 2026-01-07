import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Fan, Ruler, Sun, Tractor } from "lucide-react";
import { Button } from "../../components/ui/Button";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/products/rural")({
	head: () => ({
		meta: [
			{ title: "Rural Batteries - RENOZ Energy" },
			{
				name: "description",
				content:
					"50-200kWh off-grid and rural battery systems. Silent alternative to diesel generators. Built for farms, sheds, and properties at the grid edge.",
			},
			{ property: "og:title", content: "Rural Batteries - RENOZ Energy" },
			{
				property: "og:description",
				content:
					"50-200kWh off-grid and rural battery systems. Silent alternative to diesel generators. Built for farms, sheds, and properties at the grid edge.",
			},
			{ property: "og:url", content: `${baseUrl}/products/rural` },
			{ name: "twitter:title", content: "Rural Batteries - RENOZ Energy" },
			{
				name: "twitter:description",
				content:
					"50-200kWh off-grid and rural battery systems. Silent alternative to diesel generators.",
			},
		],
	}),
	component: RuralProductsPage,
});

function RuralProductsPage() {
	return (
		<div className="min-h-screen bg-[var(--cream)]">
			{/* Product Hero - Warm Beige Theme for "Land/Earth" feel */}
			<section className="relative pt-32 pb-20 overflow-hidden bg-[#F2F0EB] rounded-b-[40px] shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase mb-6">
								<Tractor className="w-3 h-3" />
								Rural Series
							</div>
							<h1 className="text-4xl md:text-7xl font-bold mb-6 text-[var(--black)] leading-tight tracking-tight">
								Silence the <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
									Generator.
								</span>
							</h1>
							<p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed max-w-lg">
								The RENOZ Rural Series (50-200kWh) delivers true independence
								for properties at the grid edge. A rugged, silent alternative to
								diesel that pays for itself.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									variant="primary"
									size="lg"
									to="/contact"
									className="rounded-full px-8 bg-orange-600 hover:bg-orange-700 shadow-orange-600/20"
								>
									Get a Farm Quote
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="rounded-full px-8 border-gray-300 text-[var(--black)] hover:bg-white"
								>
									<Download className="w-4 h-4 mr-2" />
									Datasheet
								</Button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative bg-white rounded-[40px] aspect-square overflow-hidden shadow-2xl ring-1 ring-black/5"
						>
							<img
								src="/images/stock/homestead-rural.webp"
								alt="RENOZ Rural Battery"
								className="absolute inset-0 w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
								<div className="text-white">
									<p className="font-bold text-lg">Wheatbelt Energy</p>
									<p className="text-sm opacity-80">Off-Grid Independence</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Key Features Grid */}
			<section className="py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Sun,
								title: "Solar Soaking",
								desc: "Store excess solar during the day to power irrigation pumps and sheds at night.",
							},
							{
								icon: Fan,
								title: "Dust Proof",
								desc: "IP55/65 rated enclosures designed specifically for dusty agricultural environments.",
							},
							{
								icon: Ruler,
								title: "Scaleable",
								desc: "Start with what you need and add modules as you expand your operations.",
							},
						].map((feat, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-[32px] shadow-soft border border-gray-100/50 hover:border-orange-200 transition-colors group"
							>
								<div className="w-12 h-12 bg-orange-50 rounded-[16px] flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
									<feat.icon className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold mb-3">{feat.title}</h3>
								<p className="text-[var(--text-muted)] leading-relaxed">
									{feat.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Technical Specs */}
			<section className="py-24 bg-[#2C2420] text-white relative overflow-hidden">
				{/* Abstract topographic lines could go here */}

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-16">
						<div>
							<h2 className="text-4xl font-bold mb-6 text-orange-50">
								Built for the Bush
							</h2>
							<p className="text-orange-100/60 text-lg mb-12">
								Diesel is expensive, noisy, and requires constant maintenance.
								Our Rural Series provides a set-and-forget solution.
							</p>

							<div className="grid grid-cols-2 gap-6">
								{[
									{ label: "Nominal Energy", value: "50 - 200 kWh" },
									{ label: "Output Voltage", value: "400V 3-Phase" },
									{ label: "Operating Temp", value: "-10°C to 55°C" },
									{ label: "Cooling", value: "Active Liquid/Air" },
									{ label: "Enclosure", value: "C4/C5 Marine Grade" },
									{ label: "Monitoring", value: "4G / Satellite" },
								].map((spec, i) => (
									<div key={i} className="border-b border-orange-900/50 pb-4">
										<div className="text-orange-200/50 text-sm mb-1">
											{spec.label}
										</div>
										<div className="text-xl font-medium text-orange-50">
											{spec.value}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="bg-[#3A312C] rounded-[32px] p-8 md:p-12 border border-orange-900/30">
							<h3 className="text-2xl font-bold mb-8 text-orange-50">
								Popular Configurations
							</h3>
							<div className="space-y-6">
								{[
									{
										model: "RENOZ-R50",
										cap: "51.2 kWh",
										app: "Large Homestead / Sheds",
									},
									{
										model: "RENOZ-R100",
										cap: "102.4 kWh",
										app: "Irrigation / Light Industrial",
									},
									{
										model: "RENOZ-R200",
										cap: "204.8 kWh",
										app: "Whole Farm / Off-Grid",
									},
								].map((conf, i) => (
									<div
										key={i}
										className="flex items-center justify-between p-4 bg-[#2C2420] rounded-[20px] border border-orange-900/30 hover:border-orange-500/50 transition-colors cursor-default group"
									>
										<div>
											<div className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors">
												{conf.model}
											</div>
											<div className="text-gray-400 text-sm">{conf.app}</div>
										</div>
										<div className="text-xl font-bold text-orange-100">
											{conf.cap}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 text-center">
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-6">
						Calculate your diesel savings
					</h2>
					<p className="text-[var(--text-muted)] mb-8">
						Our team can model your exact ROI based on your current diesel
						consumption and solar capacity.
					</p>
					<Button
						variant="primary"
						size="lg"
						to="/contact"
						className="rounded-full bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20"
					>
						Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
					</Button>
				</div>
			</section>
		</div>
	);
}
