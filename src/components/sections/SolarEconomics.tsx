import { motion } from "framer-motion";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SolarEconomics() {
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
					<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
						The Problem
					</span>
					<h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
						The Solar Math <br className="hidden md:block" />
						<span className="text-gray-500">Doesn't Add Up.</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						You're selling your power for pennies and buying it back for dollars.
					</p>
				</motion.div>

				{/* The Split Card */}
				<div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
					{/* Day Side */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative overflow-hidden rounded-[32px] group"
					>
						{/* Active Background with Gradient & Texture */}
						<div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100/50" />
						<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-multiply" />

						{/* Lighting Effect - God Ray */}
						<div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-300/40 to-orange-500/0 blur-[60px] rounded-full mix-blend-overlay pointer-events-none group-hover:scale-110 transition-transform duration-700" />

						<div className="relative z-10 p-8 md:p-12 h-[450px] flex flex-col justify-between">
							<div>
								<div className="flex items-center gap-3 mb-6">
									<div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center border border-yellow-500/30">
										<Sun className="w-5 h-5 text-yellow-600" />
									</div>
									<span className="font-bold text-sm uppercase tracking-wider text-yellow-700">
										Day Time
									</span>
								</div>

								<div className="flex items-baseline gap-2">
									<h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900">
										5c
									</h3>
									<span className="text-xl font-bold text-gray-400">/kWh</span>
								</div>
								<p className="font-medium text-yellow-700/80 mt-2">Export Rate</p>

								{/* Visual Bar - Small */}
								<div className="mt-8 h-4 w-1/6 bg-yellow-400 rounded-full shadow-inner" />
							</div>

							<div className="pt-8 border-t border-yellow-900/5">
								<p className="text-lg leading-relaxed text-gray-600 font-medium">
									"You're giving away your gold for dust."
								</p>
								<p className="text-sm text-gray-500 mt-2 leading-relaxed">
									Solar peaks when you aren't home. This energy is fed to the grid for pennies.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Night Side */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="relative overflow-hidden rounded-[32px] group bg-[#0A0A0A] border border-white/10"
					>
						{/* Deep Night Gradient */}
						<div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black opacity-80" />
						<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />

						{/* Lighting Effect - Cold Glow */}
						<div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full pointer-events-none" />

						<div className="relative z-10 p-8 md:p-12 h-[450px] flex flex-col justify-between text-white">
							<div>
								<div className="flex items-center gap-3 mb-6">
									<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
										<Moon className="w-5 h-5 text-blue-300" />
									</div>
									<span className="font-bold text-sm uppercase tracking-wider text-blue-300 shadow-glow">
										Night Time
									</span>
								</div>

								<div className="flex items-baseline gap-2">
									<h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
										30c
									</h3>
									<span className="text-xl font-bold text-gray-600">/kWh</span>
								</div>
								<p className="font-medium text-red-400 mt-2 flex items-center gap-2">
									Import Rate
									<span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30">
										+600% Mark-up
									</span>
								</p>

								{/* Visual Bar - Large and Glowing */}
								<div className="mt-8 h-4 w-full bg-gradient-to-r from-red-500 to-orange-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)] relative overflow-hidden">
									<div className="absolute inset-0 bg-white/20 animate-pulse" />
								</div>
							</div>

							<div className="pt-8 border-t border-white/10">
								<p className="text-lg leading-relaxed text-gray-200 font-medium">
									"You're buying back your own power."
								</p>
								<p className="text-sm text-gray-400 mt-2 leading-relaxed">
									When the sun sets, you pay peak rates for the electricity you generated hours ago.
								</p>
							</div>
						</div>
					</motion.div>
				</div>

				{/* The "Fix" Banner */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="max-w-5xl mx-auto mt-8"
				>
					<div className="bg-[var(--renoz-green)] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-[0_0_50px_rgba(0,255,100,0.2)]">
						<div>
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
								Stop renting your own power.
							</h3>
							<p className="text-[#0a3f25] font-medium text-lg">
								Store your 5c energy. Use it when it's worth 30c.
							</p>
						</div>
						<Link
							to="/case-studies"
							className="inline-flex items-center px-6 py-3 bg-white text-[var(--renoz-green)] rounded-full font-bold transition-transform hover:scale-105"
						>
							See how others did it <ArrowRight className="w-4 h-4 ml-2" />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
