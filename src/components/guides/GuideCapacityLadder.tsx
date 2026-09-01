import { LV_PLATFORM, lvTowerKwh } from "@/data/guides";

type GuideCapacityLadderProps = {
	partnerName?: string;
};

const minTowerKwh = lvTowerKwh(LV_PLATFORM.approvedModulesPerTower[0]);
const maxTowerKwh = lvTowerKwh(LV_PLATFORM.approvedModulesPerTower[1]);

const ladderItems = [
	{
		label: "Module",
		value: `${LV_PLATFORM.moduleKwh}`,
		unit: "kWh",
		note: "LV-5KWH100AH base",
	},
	{
		label: "One tower",
		value: "8 or 10",
		unit: "modules",
		note: `≈${minTowerKwh}–${maxTowerKwh} kWh stacked`,
	},
	{
		label: "Parallel",
		value: "Multi",
		unit: "tower",
		note: "Paralleled as the system design requires",
	},
];

export function GuideCapacityLadder({ partnerName }: GuideCapacityLadderProps) {
	return (
		<section
			aria-label="RENOZ LV capacity ladder"
			className="section-standard border-y border-[var(--border-strong)] bg-[var(--surface-inverse)] text-[var(--text-inverse)]"
		>
			<div className="px-4 sm:px-6">
				<p className="text-label mb-3 text-[var(--accent)]">
					LV platform
					{partnerName ? ` · pairs with ${partnerName}` : null}
				</p>
				<p className="mb-7 max-w-[68ch] text-sm leading-[var(--leading-body)] text-[var(--text-inverse-muted)] md:text-base">
					Modular 48 V LiFePO₄ building blocks — size the battery to the
					inverter and the load, then grow without ripping out the tower.

				</p>
				<div className="grid border-t border-[color-mix(in_srgb,var(--text-inverse)_20%,transparent)] sm:grid-cols-3 sm:border-b">
					{ladderItems.map((item, index) => (
						<div
							key={item.label}
							className={`px-4 py-5 sm:px-5 ${
								index < ladderItems.length - 1
									? "border-b border-[color-mix(in_srgb,var(--text-inverse)_20%,transparent)] sm:border-b-0"
									: ""
							} ${
								index > 0
									? "sm:border-l sm:border-[color-mix(in_srgb,var(--text-inverse)_20%,transparent)]"
									: ""
							}`}
						>
							<p className="text-label mb-2 text-[var(--text-inverse-muted)]">
								{item.label}
							</p>
							<p className="text-3xl font-bold tracking-[var(--tracking-display)] tabular-nums md:text-4xl">
								{item.value}
								<span className="ml-1 text-sm font-medium text-[var(--accent)]">
									{item.unit}
								</span>
							</p>
							<p className="mt-2 text-xs text-[var(--text-inverse-muted)]">
								{item.note}
							</p>
						</div>
					))}
				</div>
				<p className="mt-5 text-xs tracking-wide text-[var(--text-inverse-muted)]">
					8 or 10 modules per tower · towers paralleled as engineered
				</p>
			</div>
		</section>
	);
}