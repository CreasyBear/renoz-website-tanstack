import { createLazyFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowRight,
	BarChart3,
	Check,
	Download,
	Lock,
	Server,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "../../components/ui/Button";

export const Route = createLazyFileRoute("/products/commercial")({
	component: CommercialProductsPage,
});

export function CommercialProductsPage() {
	const targetRef = useRef<HTMLDivElement>(null);
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
			{/* 1. Immersive Hero Section - "C-Suite / Corporate" */}
			<section className="relative h-screen min-h-[800px] flex flex-col justify-center items-center text-center overflow-hidden">
				<motion.div
					className="absolute inset-0 z-0"
					style={{ opacity: heroOpacity, scale: heroScale }}
				>
					<img
						src="/images/stock/solar-microgrid-bess-drone-shot.webp"
						alt="RENOZ Commercial Battery System"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/40" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--white-warm)]" />
				</motion.div>

				<div className="relative z-10 max-w-5xl px-4 mt-[-5vh]">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
					>
						<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
						<span className="text-white text-sm font-medium tracking-wide">
							Industrial Grade Intelligence
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
						className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg"
					>
						Turn Energy into a <br />
						<span className="text-blue-500">Managed Asset.</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
						className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md"
					>
						Stabilise costs, peak-shave, and secure operations against grid
						failure.
						<br className="hidden md:block" />
						Commercial Series (200kWh - 5MWh).
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
							className="rounded-full px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all bg-blue-700 hover:bg-blue-800 border-none"
						>
							Consult an Engineer
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="rounded-full px-12 py-6 text-lg backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white hover:text-black transition-all"
						>
							View Datasheets
						</Button>
					</motion.div>
				</div>
			</section>

			{/* 2. Bento Grid Features - "Why RENOZ?" */}
			<section className="py-24 px-4 max-w-7xl mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
						The ROI Engine.
					</h2>
					<p className="text-xl text-[var(--text-muted)] leading-relaxed">
						Stop treating energy as a fixed cost. A RENOZ BESS transforms your
						grid connection into a dynamic financial tool.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
					{/* Card 1: Peak Shaving (Large) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="md:col-span-2 bg-[var(--black)] text-white rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden group"
					>
						<div className="relative z-10">
							<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
								<BarChart3 className="w-6 h-6 text-blue-500" />
							</div>
							<h3 className="text-3xl font-bold mb-4">Peak Shaving</h3>
							<p className="text-gray-400 text-lg max-w-md">
								Automatically discharge during peak tariff periods to
								drastically reduce your demand charges. The system pays for
								itself by flattening your energy curve.
							</p>
						</div>
						<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent" />
						<BarChart3 className="absolute -bottom-8 -right-8 w-64 h-64 text-blue-500/5 group-hover:text-blue-500/10 transition-colors duration-700" />
					</motion.div>

					{/* Card 2: UPS */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-soft flex flex-col relative overflow-hidden"
					>
						<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
							<Lock className="w-6 h-6 text-blue-600" />
						</div>
						<h3 className="text-2xl font-bold mb-3">UPS Capability</h3>
						<p className="text-[var(--text-muted)] leading-relaxed">
							&lt;10ms switchover time ensures critical IT infrastructure,
							servers, and machinery never stop during brownouts.
						</p>
					</motion.div>

					{/* Card 3: EMS Integration */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-soft flex flex-col relative overflow-hidden"
					>
						<div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
							<Server className="w-6 h-6 text-indigo-500" />
						</div>
						<h3 className="text-2xl font-bold mb-3">Modbus / API</h3>
						<p className="text-[var(--text-muted)] leading-relaxed">
							Seamlessly integrates with existing Building Management Systems
							(BMS) for full visibility and control.
						</p>
					</motion.div>

					{/* Card 4: Palmer Tech (Large) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="md:col-span-2 bg-gray-50 rounded-[32px] p-10 border border-gray-100 flex flex-col md:flex-row items-center gap-8"
					>
						<div className="flex-1">
							<div className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
								Strategic Partner
							</div>
							<h3 className="text-3xl font-bold mb-4">Powered by Palmer.</h3>
							<p className="text-[var(--text-muted)] text-lg">
								Deployed in partnership with Palmer Energy Technology for
								advanced grid modeling and FCAS market access.
							</p>
						</div>
						<div className="w-full md:w-1/3 aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
							<img
								src="/images/stock/winery-bess-1.webp"
								alt="Commercial BESS"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* 3. Technical Specifications - Dark Mode */}
			<section className="py-24 bg-[var(--black)] text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<h2 className="text-4xl font-bold mb-8">Technical Specs</h2>
							<p className="text-gray-400 text-lg mb-12 max-w-md">
								Containerised solutions designed for rapid deployment.
							</p>

							<div className="grid grid-cols-2 gap-y-10 gap-x-8">
								{[
									{ label: "Energy Capacity", value: "200kWh - 5MWh" },
									{ label: "Cell Technology", value: "314Ah LFP" },
									{ label: "Cycle Life", value: "8,000+ Cycles" },
									{ label: "Thermal Mgmt", value: "Liquid Cooling" },
									{ label: "Safety", value: "Gas + Water" },
									{ label: "Service Life", value: "20 Years" },
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
									<Check className="w-5 h-5 text-blue-500" />
									Compliance
								</h4>
								<p className="text-gray-400 text-sm">
									Full AS/NZS compliance. Grid connection application handling
									included in project scope.
								</p>
							</div>
						</div>

						<div className="bg-white text-[var(--black)] rounded-[32px] p-8 md:p-12 shadow-2xl">
							<h3 className="text-2xl font-bold mb-8">Documents</h3>
							<div className="space-y-4">
								{[
									{ name: "Datasheet (Commercial)", size: "3.1 MB" },
									{ name: "Installation Guide", size: "5.2 MB" },
									{ name: "Warranty Policy", size: "1.1 MB" },
									{ name: "Case Study: Microgrid", size: "2.5 MB" },
								].map((doc, i) => (
									<button
										key={i}
										className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all group text-left"
									>
										<div className="flex items-center gap-4">
											<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
												<Download className="w-5 h-5" />
											</div>
											<div>
												<div className="font-bold">{doc.name}</div>
												<div className="text-xs text-gray-400 text-uppercase tracking-wider font-bold">
													PDF • {doc.size}
												</div>
											</div>
										</div>
										<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[var(--black)] group-hover:border-[var(--black)] transition-colors">
											<Download className="w-4 h-4 text-gray-400 group-hover:text-white" />
										</div>
									</button>
								))}
							</div>

							<div className="mt-8 pt-8 border-t border-gray-100">
								<h4 className="font-bold mb-4">Typical Applications</h4>
								<div className="space-y-3">
									<div className="flex justify-between items-center text-sm">
										<span className="text-[var(--text-muted)]">
											Commercial Real Estate
										</span>
										<span className="font-bold bg-gray-100 px-2 py-1 rounded">
											Embedded Networks
										</span>
									</div>
									<div className="flex justify-between items-center text-sm">
										<span className="text-[var(--text-muted)]">
											Mining Camps
										</span>
										<span className="font-bold bg-gray-100 px-2 py-1 rounded">
											Diesel Hybrid
										</span>
									</div>
									<div className="flex justify-between items-center text-sm">
										<span className="text-[var(--text-muted)]">
											Manufacturing
										</span>
										<span className="font-bold bg-gray-100 px-2 py-1 rounded">
											UPS + Peak Shave
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 text-center">
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-6">
						Engineering led. <br /> Data driven.
					</h2>
					<p className="text-[var(--text-muted)] mb-10 text-lg">
						Deploy a system that is financially modelled before it's even built.
					</p>
					<Button
						variant="primary"
						size="lg"
						to="/contact"
						className="rounded-full px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all bg-blue-700 hover:bg-blue-800 border-none"
					>
						Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
					</Button>
				</div>
			</section>
		</div>
	);
}
