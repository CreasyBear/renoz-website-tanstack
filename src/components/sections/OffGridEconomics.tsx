import { motion } from "framer-motion";
import { Flame, Fuel, Sun, Wallet, Zap } from "lucide-react";

export function OffGridEconomics() {
	return (
		<section className="py-24 bg-[var(--black)] text-white relative overflow-hidden">
			{/* Background Noise/Texture */}
			<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">
						The Cost of Power
					</span>
					<h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
						Burn Cash or <br className="hidden md:block" />
						<span className="text-gray-500">Harvest It.</span>
					</h2>
					<p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
						Stop paying for diesel deliveries that eat into your margins. Switch
						to quiet, reliable, free energy from the sun.
					</p>
				</motion.div>

				{/* The Split Card - Off Grid Focus */}
				<div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
					{/* The Liability (Diesel) */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative overflow-hidden rounded-[32px] group bg-[#0A0A0A] border border-white/10 h-[500px] flex flex-col justify-between p-8 md:p-12"
					>
						{/* Background */}
						<div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-black opacity-80" />

						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center border border-orange-500/30">
									<Fuel className="w-5 h-5 text-orange-500" />
								</div>
								<span className="font-bold text-sm uppercase tracking-wider text-orange-600">
									Diesel Generator
								</span>
							</div>

							<h3 className="text-4xl md:text-5xl font-bold mb-4">
								<span className="text-3xl align-top text-gray-500">$</span>
								2.20
								<span className="text-2xl text-gray-500 ml-1">/L</span>
							</h3>
							<ul className="space-y-4 text-gray-400 font-medium">
								<li className="flex items-center gap-3">
									<Flame className="w-4 h-4 text-orange-600" />
									~50c - 90c per kWh
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
									Noise & Fumes
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
									Logistics Headaches
								</li>
							</ul>
						</div>

						{/* Visual Graphic: Fuel Gauge Emptying */}
						<div className="relative z-10 mt-8">
							<div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden mb-2">
								<motion.div
									initial={{ width: "100%" }}
									whileInView={{ width: "20%" }}
									transition={{ duration: 2, ease: "easeInOut" }}
									className="h-full bg-orange-600"
								/>
							</div>
							<p className="text-right text-xs text-orange-500 font-mono">
								FUEL LOW
							</p>
						</div>
					</motion.div>

					{/* The Asset (Solar + BESS) */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="relative overflow-hidden rounded-[32px] group h-[500px] flex flex-col justify-between p-8 md:p-12"
					>
						{/* Active Background */}
						<div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-[#0A0A0A] to-orange-900/10" />
						<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[100px] opacity-10 pointer-events-none" />
						<div className="absolute inset-0 border border-yellow-500/30 rounded-[32px]" />

						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
									<Sun className="w-5 h-5 text-yellow-400" />
								</div>
								<span className="font-bold text-sm uppercase tracking-wider text-yellow-400 shadow-glow">
									RENOZ Hybrid
								</span>
							</div>

							<h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
								<span className="text-3xl align-top text-gray-500">$</span>
								0.00
								<span className="text-2xl text-gray-500 ml-1">/L</span>
							</h3>
							<ul className="space-y-4 text-gray-300 font-medium">
								<li className="flex items-center gap-3">
									<Zap className="w-4 h-4 text-yellow-500" />
									~8c - 12c per kWh (LCOE)
								</li>
								<li className="flex items-center gap-3">
									<Wallet className="w-4 h-4 text-yellow-500" />
									Fixed Energy Cost for 15 Years
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
									Silent Operation
								</li>
							</ul>
						</div>

						{/* Visual Graphic: Sun / Battery Full */}
						<div className="relative z-10 mt-8">
							<div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden mb-2 border border-yellow-500/20">
								<motion.div
									initial={{ width: "20%" }}
									whileInView={{ width: "100%" }}
									transition={{ duration: 2, ease: "easeInOut" }}
									className="h-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
								/>
							</div>
							<p className="text-right text-xs text-yellow-500 font-mono">
								BATTERY FULL
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
