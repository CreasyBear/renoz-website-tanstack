import type { InsightBarChartBlock } from "@/data/insight-types";
import { formatDelta } from "@/data/insight-fx";
import { cn } from "@/lib/utils";

// Darkened destructive: passes AA on the editorial surfaces where the raw
// --destructive (4.15:1) does not.
const NEGATIVE_TEXT =
	"text-[color-mix(in_oklab,var(--destructive)_70%,var(--surface-inverse))]";
const NEGATIVE_FILL =
	"bg-[color-mix(in_oklab,var(--destructive)_70%,var(--surface-inverse))]";

function formatBarValue(value: number, unit: string, signed: boolean): string {
	if (unit === "%") {
		// Signed delta charts use the shared convention; whole-number percent
		// charts (shares, yields) stay unsigned but share the no-space form.
		return signed ? formatDelta(value) : formatDelta(value).replace(/^[+-]/, "");
	}
	const sign = value > 0 ? "+" : value < 0 ? "-" : "";
	const fixed = Math.abs(value).toFixed(2);
	const body = fixed.includes(".")
		? fixed.replace(/0+$/, "").replace(/\.$/, "")
		: fixed;
	return `${signed ? sign : ""}${body}${unit ? ` ${unit}` : ""}`;
}

export function InsightBarChart({
	block,
	index,
}: {
	block: InsightBarChartBlock;
	index: number;
}) {
	const maxAbs = Math.max(...block.bars.map((bar) => Math.abs(bar.value)), 0);
	const unit = block.unit.trim();
	const hasNegative = block.bars.some((bar) => bar.value < 0);
	const isPercent = unit === "%";
	// Change charts (e.g. "Seven-day move") carry fractional or negative
	// values; whole-number percent charts are shares/levels, not deltas.
	const isDeltaChart =
		isPercent &&
		(hasNegative || block.bars.some((bar) => !Number.isInteger(bar.value)));
	const signed = isDeltaChart || hasNegative;

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
												: NEGATIVE_TEXT
											: "text-[var(--text-strong)]",
									)}
								>
									{formatBarValue(bar.value, unit, signed)}
								</span>
							</div>
							<div className="h-2 overflow-hidden rounded-[var(--radius-control)] bg-[var(--surface-subtle)]">
								<div
									className={cn(
										"h-full rounded-[var(--radius-control)]",
										!signed || positive
											? "bg-[var(--accent)]"
											: NEGATIVE_FILL,
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