import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	ArrowRight,
	BarChart3,
	Building,
	Lock,
	Server,
} from "lucide-react";
import { Button } from "../../components/ui/Button";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/products/commercial")({
	head: () => ({
		meta: [
			{ title: "Commercial Batteries - RENOZ Energy" },
			{
				name: "description",
				content:
					"200+ kWh industrial-scale energy storage. Peak shaving, UPS capability, and grid support for businesses. Containerised or cabinet-based solutions.",
			},
			{ property: "og:title", content: "Commercial Batteries - RENOZ Energy" },
			{
				property: "og:description",
				content:
					"200+ kWh industrial-scale energy storage. Peak shaving, UPS capability, and grid support for businesses.",
			},
			{ property: "og:url", content: `${baseUrl}/products/commercial` },
			{ name: "twitter:title", content: "Commercial Batteries - RENOZ Energy" },
			{
				name: "twitter:description",
				content:
					"200+ kWh industrial-scale energy storage. Peak shaving, UPS capability, and grid support for businesses.",
			},
		],
	}),
	component: CommercialProductsPage,
});

function CommercialProductsPage() {
	return (
		<div className="min-h-screen bg-[var(--cream)]">
			{/* Product Hero - Cool Blue/Slate Theme for "Corporate/Tech" feel */}
			<section className="relative pt-32 pb-20 overflow-hidden bg-[#E8EEF2] rounded-b-[40px] shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
								<Building className="w-3 h-3" />
								Commercial Series
							</div>
							<h1 className="text-4xl md:text-7xl font-bold mb-6 text-[var(--black)] leading-tight tracking-tight">
								Turn Energy into a{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
									Managed Asset.
								</span>
							</h1>
							<p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
								The RENOZ Commercial Series (200kWh - 5MWh) allows businesses to
								stabilise costs, peak-shave, and secure operations against
								costly grid failures.
							</p>

							{/* Strategic Partnership Tag */}
							<div className="mb-8 p-4 bg-white rounded-2xl border border-blue-100 shadow-sm inline-block">
								<p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
									Strategic Partnership
								</p>
								<div className="flex items-center gap-2">
									<span className="font-bold text-slate-900">Powered by</span>
									<span className="font-bold text-blue-900">
										Palmer Energy Technology
									</span>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									variant="primary"
									size="lg"
									to="/contact"
									className="rounded-full px-8 bg-blue-700 hover:bg-blue-800 shadow-blue-700/20"
								>
									Get in Touch
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
								src="/images/stock/solar-microgrid-bess-drone-shot.webp"
								alt="RENOZ Commercial Battery"
								className="absolute inset-0 w-full h-full object-cover"
							/>
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
								icon: BarChart3,
								title: "Peak Shaving",
								desc: "Automatically discharge during peak tariff periods to drastically reduce demand charges.",
							},
							{
								icon: Lock,
								title: "UPS Capability",
								desc: "<10ms switchover time ensures critical IT infrastructure and machinery never stops.",
							},
							{
								icon: Server,
								title: "EMS Integration",
								desc: "Seamlessly integrates with existing Building Management Systems (BMS) via Modbus TCP.",
							},
						].map((feat, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-[32px] shadow-soft border border-gray-100/50 hover:border-blue-200 transition-colors group"
							>
								<div className="w-12 h-12 bg-blue-50 rounded-[16px] flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
									<feat.icon className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold mb-3">{feat.title}</h3>
								<p className="text-slate-600 leading-relaxed">{feat.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Industry Applications Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
							Verticals
						</span>
						<h2 className="text-4xl font-bold text-[var(--black)] mb-4">
							Engineered for WA Industries
						</h2>
						<p className="text-slate-600 text-lg max-w-2xl mx-auto">
							From the Pilbara to the Wheatbelt, our systems are built to tackle
							the unique energy challenges of Western Australian business.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								title: "Mining & Resources",
								desc: "Displace expensive diesel generation and ensure power quality for sensitive processing equipment in remote off-grid camps.",
								image: "/images/stock/solar-microgrid-bess-drone-shot.webp",
							},
							{
								title: "Agriculture",
								desc: "Solve 'End-of-Grid' voltage rise issues and manage peak pumping loads without costly network augmentation.",
								image: "/images/stock/shed-with-solar-wheat-field-2.webp",
							},
							{
								title: "Commercial Property",
								desc: "Unlock new revenue streams through embedded networks and tenant energy arbitrage in diverse strata complexes.",
								image: "/images/stock/winery-bess-1.webp",
							},
							{
								title: "EV Fleet Depots",
								desc: "Buffer high-power charging demands to avoid site capacity upgrades and demand charges as you electrify your fleet.",
								image: "/images/stock/renoz-ccs.webp",
							},
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
							>
								<img
									src={item.image}
									alt={item.title}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
								<div className="absolute inset-0 flex flex-col justify-end p-6 text-white pb-6">
									<p className="text-sm text-gray-300 leading-relaxed max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mb-2">
										{item.desc}
									</p>
									<h3 className="text-xl font-bold">{item.title}</h3>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* The Business Case - Strategic Focus */}
			<section className="py-24 bg-slate-50 border-y border-slate-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
								Strategy
							</span>
							<h2 className="text-4xl md:text-5xl font-bold text-[var(--black)] mb-6 leading-tight max-w-lg">
								Turn Energy into a{" "}
								<span className="text-blue-600">Managed Financial Asset.</span>
							</h2>
							<p className="text-xl text-slate-600 mb-8 leading-relaxed">
								Don't just consume energy—manage it. A RENOZ BESS transforms your
								grid connection from a liability into a dynamic tool for cost
								control and revenue generation.
							</p>

							<div className="space-y-8">
								{[
									{
										title: "Unlock Revenue Streams (FCAS)",
										desc: "Participate in the Frequency Control Ancillary Services market. Get paid to support grid stability without disrupting your daily operations.",
									},
									{
										title: "Operational Resilience",
										desc: "Protect critical infrastructure with industrial-grade UPS capabilities. Eliminate downtime costs from grid brownouts or failures.",
									},
									{
										title: "Future-Proofing",
										desc: "Ready for VPP (Virtual Power Plant) integration and evolving carbon reporting standards (Scope 1 & 2 reductions).",
									},
								].map((item, i) => (
									<div key={i} className="flex gap-4">
										<div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-center shrink-0 text-blue-600 font-bold">
											{i + 1}
										</div>
										<div>
											<h4 className="font-bold text-lg text-slate-900 mb-2">
												{item.title}
											</h4>
											<p className="text-slate-600 leading-relaxed">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100">
							<h3 className="text-2xl font-bold mb-8 text-slate-900">
								The Value Stack
							</h3>
							<div className="space-y-6">
								<div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
									<p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
										Defensive Value
									</p>
									<p className="text-lg font-bold text-slate-900">
										Bill Stabilisation & Risk Mitigation
									</p>
									<p className="text-slate-600 mt-2">
										Insulate your balance sheet from volatile spot prices and
										punitive demand charges.
									</p>
								</div>

								<div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 hover:border-blue-300 transition-colors">
									<p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
										Offensive Revenue
									</p>
									<p className="text-lg font-bold text-slate-900">
										Market Participation
									</p>
									<p className="text-slate-600 mt-2">
										Leverage your capacity to bid into wholesale markets during
										price signals.
									</p>
								</div>

								<div className="mt-8 pt-8 border-t border-slate-100">
									<Button
										variant="outline"
										className="w-full justify-between group text-slate-600 hover:text-blue-700 hover:border-blue-200"
										to="/contact"
									>
										Enquire Now
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technical Specs */}
			<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-16">
						<div>
							<h2 className="text-4xl font-bold mb-6 text-white">
								Industrial Grade
							</h2>
							<p className="text-slate-400 text-lg mb-12">
								Containerised or cabinet-based solutions designed for rapid
								deployment and minimal site disturbance.
							</p>

							<div className="grid grid-cols-2 gap-6">
								{[
									{ label: "Energy Capacity", value: "2.5MWh - 5MWh" },
									{ label: "Cell Technology", value: "314Ah LFP" },
									{ label: "Cycle Life", value: "8,000+ Cycles" },
									{ label: "Thermal Mgmt", value: "Liquid Cooling" },
									{ label: "Safety", value: "Gas + Water Suppression" },
									{ label: "Service Life", value: "20 Years" },
								].map((spec, i) => (
									<div key={i} className="border-b border-slate-700 pb-4">
										<div className="text-slate-500 text-sm mb-1">
											{spec.label}
										</div>
										<div className="text-xl font-medium text-white">
											{spec.value}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="bg-slate-800 rounded-[32px] p-8 md:p-12 border border-slate-700">
							<h3 className="text-2xl font-bold mb-8 text-white">
								System Tiers
							</h3>
							<div className="space-y-6">
								{[
									{
										model: "RENOZ-C200",
										cap: "215 kWh",
										type: "Indoor Cabinet Cluster",
									},
									{
										model: "PALMER GIGA 2.5",
										cap: "2.508 MWh",
										type: "20ft All-in-One Container",
									},
									{
										model: "PALMER GIGA 5.0",
										cap: "5.016 MWh",
										type: "20ft DC Block (External PCS)",
									},
								].map((conf, i) => (
									<div
										key={i}
										className="flex items-center justify-between p-4 bg-slate-900 rounded-[20px] border border-slate-700 hover:border-blue-500 transition-colors cursor-default group"
									>
										<div>
											<div className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
												{conf.model}
											</div>
											<div className="text-slate-400 text-sm">{conf.type}</div>
										</div>
										<div className="text-xl font-bold text-white">
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
					<h2 className="text-3xl font-bold mb-6">Partner with Perth's OEM</h2>
					<p className="text-slate-600 mb-8">
						From sizing and simulation to commissioning and lifecycle maintenance,
						we're here to support your project.
					</p>
					<Button
						variant="primary"
						size="lg"
						to="/contact"
						className="rounded-full bg-blue-700 hover:bg-blue-800 shadow-lg shadow-blue-700/20"
					>
						Contact Commercial Team <ArrowRight className="ml-2 w-4 h-4" />
					</Button>
				</div>
			</section>
		</div>
	);
}
