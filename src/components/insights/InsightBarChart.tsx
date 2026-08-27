import type { InsightBarChartBlock } from "@/data/insight-types";
import { cn } from "@/lib/utils";

function formatBarValue(value: number, signed: boolean) {
	const body = String(Math.abs(value));
	if (!signed) return body;
	if (value > 0) return `+${body}`;
	if (value < 0) return `-${body}`;
	return body;
}

export function InsightBarChart({
	block,
	index,
}: {
	block: InsightBarChartBlock;
	index: number;
}) {
	const maxAbs = Math.max(...block.bars.map((bar) => Math.abs(bar.value)), 0);
	const signed = block.bars.some((bar) => bar.value < 0);
	const unit = block.unit.trim();

	return (
		<figure className="section-narrative">
			<figcaption className="mb-5 max-w-[var(--measure-reading)]">
				<p className="text-label text-[var(--accent-strong)]">
					Exhibit {index}
				</p>
				<h2 className="mt-2 text-xl font-semibold tracking-[var(--tracking-display)] text-[var(--text-strong)] md:text-2xl">
					{block.title}
				</h2>
			</figcaption>

			<ul className="space-y-4">
				{block.bars.map((bar) => {
					const positive = bar.value >= 0;
					const width = maxAbs > 0 ? (Math.abs(bar.value) / maxAbs) * 100 : 0;

					return (
						<li key={bar.label}>
							<div className="mb-1.5 flex items-baseline justify-between gap-3">
								<span className="min-w-0 text-sm leading-snug text-[var(--text-body)]">
									{bar.label}
								</span>
								<span
									className={cn(
										"shrink-0 text-sm font-medium tabular-nums",
										signed
											? positive
												? "text-[var(--accent-strong)]"
												: "text-[var(--destructive)]"
											: "text-[var(--text-strong)]",
									)}
								>
									{formatBarValue(bar.value, signed)}
									{unit ? ` ${unit}` : ""}
								</span>
							</div>
							<div className="h-2 overflow-hidden rounded-[var(--radius-control)] bg-[var(--surface-subtle)]">
								<div
									className={cn(
										"h-full rounded-[var(--radius-control)]",
										!signed || positive
											? "bg-[var(--accent)]"
											: "bg-[var(--destructive)]",
									)}
									style={{ width: `${width}%` }}
								/>
							</div>
						</li>
					);
				})}
			</ul>

			{block.note ? (
				<p className="mt-4 max-w-[var(--measure-reading)] text-sm leading-[var(--leading-body)] text-[var(--text-muted)]">
					{block.note}
				</p>
			) : null}
		</figure>
	);
}
