import { motion } from "framer-motion";

import { LV_PLATFORM } from "@/data/guides";

type GuideCapacityLadderProps = {
	partnerName?: string;
};

const towerKwh = LV_PLATFORM.moduleKwh * LV_PLATFORM.maxModulesPerTower;
const maxKwh =
	LV_PLATFORM.moduleKwh *
	LV_PLATFORM.maxModulesPerTower *
	LV_PLATFORM.maxTowersParallel;

export function GuideCapacityLadder({ partnerName }: GuideCapacityLadderProps) {
	return (
		<section
			aria-label="RENOZ LV capacity ladder"
			className="mb-12 relative overflow-hidden rounded-2xl border border-black/15 bg-[var(--black)] text-white shadow-sm"
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"radial-gradient(ellipse 80% 60% at 100% 0%, color-mix(in oklab, var(--renoz-green) 45%, transparent), transparent 55%), repeating-linear-gradient(90deg, transparent, transparent 23px, rgba(255,255,255,0.04) 24px)",
				}}
			/>
			<div className="relative p-6 md:p-8">
				<p className="text-[10px] uppercase tracking-[0.22em] text-[var(--renoz-green)] mb-3">
					LV platform
					{partnerName ? ` · pairs with ${partnerName}` : null}
				</p>
				<p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl leading-relaxed">
					Modular 48 V LiFePO₄ building blocks — size the battery to the
					inverter and the load, then grow without ripping out the tower.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
					{[
						{
							label: "Module",
							value: `${LV_PLATFORM.moduleKwh}`,
							unit: "kWh",
							note: "LV-5KWH100AH base",
						},
						{
							label: "One tower",
							value: `≤${LV_PLATFORM.maxModulesPerTower}`,
							unit: "modules",
							note: `≈${towerKwh.toFixed(2)} kWh stacked`,
						},
						{
							label: "Parallel",
							value: `≤${LV_PLATFORM.maxTowersParallel}`,
							unit: "towers",
							note: `≈${maxKwh.toFixed(1)} kWh system ceiling`,
						},
					].map((card, index) => (
						<motion.div
							key={card.label}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.45, delay: 0.08 * index }}
							className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-5"
						>
							<p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-2">
								{card.label}
							</p>
							<p className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums">
								{card.value}
								<span className="ml-1 text-sm font-medium text-[var(--renoz-green)]">
									{card.unit}
								</span>
							</p>
							<p className="mt-2 text-xs text-gray-400">{card.note}</p>
						</motion.div>
					))}
				</div>
				<div className="mt-6 flex items-end gap-1 h-10" aria-hidden>
					{Array.from({ length: LV_PLATFORM.maxModulesPerTower }).map(
						(_, i) => (
							<motion.span
								key={`mod-${i}`}
								initial={{ scaleY: 0 }}
								animate={{ scaleY: 1 }}
								transition={{ duration: 0.35, delay: 0.05 * i }}
								className="flex-1 origin-bottom bg-[var(--renoz-green)]/80"
								style={{ height: `${28 + i * 4}%` }}
							/>
						),
					)}
					<span className="mx-1 w-px self-stretch bg-white/20" />
					{Array.from({ length: LV_PLATFORM.maxTowersParallel }).map((_, i) => (
						<span
							key={`tw-${i}`}
							className="w-2 self-stretch bg-white/25"
							style={{ opacity: 0.35 + i * 0.1 }}
						/>
					))}
				</div>
				<p className="mt-3 text-[11px] text-gray-500 tracking-wide">
					8 modules in tower · 6 towers in parallel · confirm BMS/inverter
					limits per design
				</p>
			</div>
		</section>
	);
}
