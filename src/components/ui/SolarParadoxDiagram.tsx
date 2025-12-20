import { motion } from "framer-motion";
import { Battery, Moon, Sun, TrendingUp, Zap } from "lucide-react";

export default function SolarParadoxDiagram() {
	return (
		<div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[40px] overflow-hidden p-8 flex flex-col justify-between">
			{/* Background Grid */}
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage:
						"radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
					backgroundSize: "24px 24px",
				}}
			></div>

			{/* Header */}
			<div className="relative z-10 flex justify-between items-start">
				<div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
					<div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">
						Grid Reality
					</div>
					<div className="text-white font-bold text-lg">The Price Gap</div>
				</div>
				<div className="flex gap-2">
					<div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
					<div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
				</div>
			</div>

			{/* The Diagram Content */}
			<div className="relative z-10 flex-grow flex items-center justify-center py-8">
				<div className="w-full max-w-lg grid grid-cols-3 gap-4 items-center relative">
					{/* Connecting Lines (Absolute) */}
					<svg
						className="absolute inset-0 w-full h-full pointer-events-none z-0"
						overflow="visible"
					>
						{/* Sun to Grid */}
						<motion.path
							d="M 80 60 Q 150 20 250 60"
							fill="none"
							stroke="url(#grad1)"
							strokeWidth="4"
							strokeDasharray="8 4"
							initial={{ strokeDashoffset: 100 }}
							animate={{ strokeDashoffset: 0 }}
							transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
						/>
						{/* Grid to Home */}
						<motion.path
							d="M 280 60 Q 380 100 450 60"
							fill="none"
							stroke="url(#grad2)"
							strokeWidth="4"
							strokeDasharray="8 4"
							initial={{ strokeDashoffset: 100 }}
							animate={{ strokeDashoffset: 0 }}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "linear",
								delay: 0.5,
							}}
						/>
						<defs>
							<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#F59E0B" />
								<stop offset="100%" stopColor="#EF4444" />
							</linearGradient>
							<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#EF4444" />
								<stop offset="100%" stopColor="#3B82F6" />
							</linearGradient>
						</defs>
					</svg>

					{/* Left: Solar Export */}
					<div className="flex flex-col items-center text-center z-10">
						<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-orange-500/20">
							<Sun className="w-8 h-8 text-orange-500" />
						</div>
						<div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 w-full">
							<div className="text-orange-400 font-bold text-sm">Selling</div>
							<div className="text-white font-bold text-xl">
								5c
								<span className="text-xs font-normal text-gray-400">/kWh</span>
							</div>
						</div>
					</div>

					{/* Middle: The Grid */}
					<div className="flex flex-col items-center text-center z-10 pt-12">
						<div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 shadow-2xl border border-gray-700 relative">
							<Zap className="w-10 h-10 text-gray-400" />
							<div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-4 border-gray-900">
								<TrendingUp className="w-4 h-4 text-white" />
							</div>
						</div>
						<div className="text-gray-400 text-xs font-bold uppercase tracking-wider">
							The Grid
						</div>
						<div className="mt-2 text-red-400 text-xs font-bold bg-red-500/10 px-2 py-1 rounded">
							Markup: 600%
						</div>
					</div>

					{/* Right: Night Import */}
					<div className="flex flex-col items-center text-center z-10">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-blue-500/20">
							<Moon className="w-8 h-8 text-blue-600" />
						</div>
						<div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 w-full">
							<div className="text-blue-400 font-bold text-sm">Buying</div>
							<div className="text-white font-bold text-xl">
								30c
								<span className="text-xs font-normal text-gray-400">/kWh</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer / Solution Hint */}
			<div className="relative z-10 bg-[var(--renoz-green)]/10 border border-[var(--renoz-green)]/20 rounded-2xl p-4 flex items-center gap-4">
				<div className="w-10 h-10 bg-[var(--renoz-green)] rounded-full flex items-center justify-center shrink-0">
					<Battery className="w-5 h-5 text-white" />
				</div>
				<div>
					<div className="text-[var(--renoz-green)] font-bold text-sm">
						The RENOZ Fix
					</div>
					<div className="text-white/80 text-xs">
						Store your 5c power. Use it when it's worth 30c.
					</div>
				</div>
			</div>
		</div>
	);
}
