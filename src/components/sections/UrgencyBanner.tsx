import { motion } from "framer-motion";
import { ArrowRight, Flame, Sun, Timer } from "lucide-react";
import { Button } from "../ui/Button";

export function UrgencyBanner() {
	return (
		<section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 border-y border-orange-200 overflow-hidden relative">
			{/* Ambient Background */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-2xl"
					>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-200/50 text-orange-800 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-300">
							<Flame className="w-3 h-3 fill-orange-600 text-orange-600" />
							Summer is here
						</div>

						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
							Don't waste another <br />
							<span className="text-orange-600">sun-soaked day.</span>
						</h2>

						<p className="text-xl text-gray-700 leading-relaxed max-w-xl mb-8">
							Every single day this summer, your panels are generating peak
							power. Without a battery, that value is evaporating.
							<br />
							<br />
							<span className="font-semibold text-gray-900">
								Households lose up to $2,500 per summer* in potential savings.
							</span>
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								variant="primary"
								size="lg"
								to="/contact"
								className="bg-orange-600 hover:bg-orange-700 border-none shadow-lg shadow-orange-500/30 text-lg px-8 py-6 rounded-full"
							>
								Get a Quote Today <ArrowRight className="ml-2 w-5 h-5" />
							</Button>

							<div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 font-medium bg-white/50 rounded-full backdrop-blur-sm border border-white/40">
								<Timer className="w-4 h-4 text-orange-600" />
								<span>Installations available for Feb '26</span>
							</div>
						</div>
						<p className="text-xs text-gray-500 mt-4">
							*Based on 10kW system exporting 40kWh/day at 5c vs offsetting 30c
							usage.
						</p>
					</motion.div>

					{/* Visual/Card */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/3]"
					>
						<div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/50">
							{/* Simple Calendar/Savings concept */}
							<div className="p-8 h-full flex flex-col justify-between bg-gradient-to-b from-white to-orange-50/50">
								<div>
									<h3 className="text-gray-900 font-bold text-2xl mb-2">
										Summer Savings
									</h3>
									<p className="text-gray-500">Dec - Feb Potential</p>
								</div>

								<div className="space-y-4">
									<div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
												<Sun className="w-5 h-5 text-green-600" />
											</div>
											<div>
												<div className="font-bold text-gray-900">
													Stored Energy
												</div>
												<div className="text-xs text-gray-500">
													Self-consumption
												</div>
											</div>
										</div>
										<div className="font-bold text-green-600 text-xl">
											+$2,100
										</div>
									</div>

									<div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-gray-100 opacity-50 grayscale">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
												<ArrowRight className="w-5 h-5 text-gray-400 rotate-[-45deg]" />
											</div>
											<div>
												<div className="font-bold text-gray-900">
													Grid Exports
												</div>
												<div className="text-xs text-gray-500">
													Feed-in Tariff (5c)
												</div>
											</div>
										</div>
										<div className="font-bold text-gray-400 text-xl">+$350</div>
									</div>
								</div>

								<div className="pt-6 border-t border-gray-100">
									<div className="flex justify-between items-end">
										<div className="text-sm font-medium text-gray-500">
											Missed Opportunity
										</div>
										<div className="text-3xl font-bold text-gray-900">
											$1,750+
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
