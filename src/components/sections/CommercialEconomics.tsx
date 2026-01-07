import { motion } from "framer-motion";
import { Coins, TrendingDown, TrendingUp, Zap } from "lucide-react";

export function CommercialEconomics() {
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
					<span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">
						The Financial Reality
					</span>
					<h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
						Liability vs <br className="hidden md:block" />
						<span className="text-gray-500">Asset.</span>
					</h2>
					<p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
						Is your grid connection a fixed cost dragging down your bottom line, or
						a tradable asset generating revenue?
					</p>
				</motion.div>

				{/* The Split Card - B2B Focus */}
				<div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
					{/* The Liability (Grid Only) */}
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
								<div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
									<TrendingDown className="w-5 h-5 text-red-500" />
								</div>
								<span className="font-bold text-sm uppercase tracking-wider text-red-500">
									Status Quo
								</span>
							</div>

							<h3 className="text-4xl md:text-5xl font-bold mb-4">
								Sunk Cost.
							</h3>
							<ul className="space-y-4 text-gray-400 font-medium">
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-red-500" />
									Unpredictable Spot Prices
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-red-500" />
									Peak Demand Charges
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-red-500" />
									Zero Backup Protection
								</li>
							</ul>
						</div>

						{/* Visual Graphic: Red Chart Going Down */}
						<div className="relative z-10 w-full h-32 mt-8 opacity-50 group-hover:opacity-100 transition-opacity">
                             <div className="absolute bottom-0 left-0 w-full flex items-end gap-1 h-full">
                               {[40, 60, 30, 80, 20, 90, 40].map((h, i) => (
                                   <div key={i} className="flex-1 bg-red-900/40 rounded-t-sm relative overflow-hidden group-hover:bg-red-500/20 transition-colors" style={{ height: `${h}%` }}>
                                   </div>
                               ))}
                             </div>
                             <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-red-500/30" />
						</div>
					</motion.div>

					{/* The Asset (RENOZ BESS) */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="relative overflow-hidden rounded-[32px] group h-[500px] flex flex-col justify-between p-8 md:p-12"
					>
                        {/* Active Background */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0A0A0A] to-blue-900/20" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
                        <div className="absolute inset-0 border border-blue-500/30 rounded-[32px]" />

						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
									<TrendingUp className="w-5 h-5 text-blue-400" />
								</div>
								<span className="font-bold text-sm uppercase tracking-wider text-blue-400 shadow-glow">
									RENOZ BESS
								</span>
							</div>

							<h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
								Managed Asset.
							</h3>
                            <ul className="space-y-4 text-gray-300 font-medium">
								<li className="flex items-center gap-3">
									<Zap className="w-4 h-4 text-blue-400" />
									Arbitrage Energy Markets
								</li>
								<li className="flex items-center gap-3">
									<Coins className="w-4 h-4 text-blue-400" />
									Flatten Demand Peaks
								</li>
								<li className="flex items-center gap-3">
									<TrendingUp className="w-4 h-4 text-blue-400" />
									FCAS Revenue Streams
								</li>
							</ul>
						</div>

                         {/* Visual Graphic: Blue Chart Going Up */}
						<div className="relative z-10 w-full h-32 mt-8">
                           <div className="absolute bottom-0 left-0 w-full flex items-end gap-1 h-full">
                               {[20, 30, 45, 60, 75, 85, 100].map((h, i) => (
                                   <div key={i}
                                   className="flex-1 bg-gradient-to-t from-blue-900 to-blue-500 rounded-t-sm relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                   style={{ height: `${h}%` }}
                                   >
                                       <div className="absolute inset-0 bg-white/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                                   </div>
                               ))}
                             </div>
						</div>
					</motion.div>
				</div>

                 {/* Footer Info */}
                <div className="max-w-5xl mx-auto mt-8 text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                        ROI typically 3-5 years for commercial systems &gt; 200kWh
                    </p>
                </div>
			</div>
		</section>
	);
}
