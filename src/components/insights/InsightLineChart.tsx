import { xAxisLabel } from "@/data/insight-fx";
import type { InsightLineChartBlock } from "@/data/insight-types";

const CHART_WIDTH = 720;
const CHART_HEIGHT = 220;
const PAD = { top: 16, right: 24, bottom: 34, left: 56 };
const PLOT_WIDTH = CHART_WIDTH - PAD.left - PAD.right;
const PLOT_HEIGHT = CHART_HEIGHT - PAD.top - PAD.bottom;
const YEAR_LABEL_Y = CHART_HEIGHT - 10;
const GRID_LINES = 4;

/**
 * Compact, unit-aware plot value: "609k t", "1.77M t". The unit always
 * comes from the block, never hardcoded.
 */
function formatPlotValue(value: number, unit: string): string {
	const abs = Math.abs(value);
	const body =
		abs >= 1_000_000
			? `${(value / 1_000_000)
					.toFixed(value >= 10_000_000 ? 1 : 2)
					.replace(/\.?0+$/, "")}M`
			: abs >= 1_000
				? `${Math.round(value / 1_000).toLocaleString("en-AU")}k`
				: Math.round(value).toLocaleString("en-AU");
	const trimmedUnit = unit.trim();
	return trimmedUnit ? `${body} ${trimmedUnit}` : body;
}

export function InsightLineChart({
	block,
	index,
}: {
	block: InsightLineChartBlock;
	index: number;
}) {
	const labels = block.xLabels;
	const values = block.series.flatMap((item) => item.values);
	const dataMin = Math.min(...values);
	const dataMax = Math.max(...values);
	const dataSpan = dataMax - dataMin || 1;
	const padRatio = 0.08;
	const yMin = dataMin - dataSpan * padRatio;
	const yMax = dataMax + dataSpan * padRatio;

	const xFor = (i: number) =>
		labels.length > 1
			? PAD.left + (i * PLOT_WIDTH) / (labels.length - 1)
			: PAD.left + PLOT_WIDTH / 2;
	const yFor = (value: number) =>
		PAD.top + (1 - (value - yMin) / (yMax - yMin)) * PLOT_HEIGHT;

	const gridlineValues = Array.from(
		{ length: GRID_LINES },
		(_, k) => yMin + ((yMax - yMin) * k) / (GRID_LINES - 1),
	);

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

			<div aria-hidden="true">
				<div className="mb-3 flex flex-wrap items-center gap-x-6 gap-y-1">
					{block.series.map((item) => (
						<span
							key={item.label}
							className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]"
						>
							<span
								className="inline-block size-2.5 rounded-full"
								style={{ backgroundColor: item.color }}
							/>
							{item.label}{" "}
							<span className="tabular-nums font-medium text-[var(--text-strong)]">
								{item.values[item.values.length - 1]?.toLocaleString("en-AU")}{" "}
								{block.unit}
							</span>
						</span>
					))}
				</div>

				<svg
					viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
					className="w-full rounded-[var(--radius-control)] border border-[var(--border-subtle)] bg-[var(--surface-raised)]"
				>
					{gridlineValues.map((value) => {
						const y = yFor(value);
						return (
							<g key={value}>
								<line
									x1={PAD.left}
									x2={CHART_WIDTH - PAD.right}
									y1={y}
									y2={y}
									stroke="var(--border-subtle)"
									strokeDasharray="3 3"
								/>
								<text
									x={PAD.left - 6}
									y={y + 3.5}
									textAnchor="end"
									className="fill-[var(--text-muted)] text-[10px] tabular-nums"
								>
									{formatPlotValue(value, block.unit)}
								</text>
							</g>
						);
					})}

					{block.series.map((item) => {
						const points = item.values
							.map((value, i) => `${xFor(i)},${yFor(value)}`)
							.join(" ");
						return (
							<g key={item.label}>
								<polyline
									points={points}
									fill="none"
									stroke={item.color}
									strokeWidth={2.25}
									strokeLinejoin="round"
									strokeLinecap="round"
								/>
								{item.values.map((value, i) => (
									<circle
										key={`${item.label}-${i}`}
										cx={xFor(i)}
										cy={yFor(value)}
										r={3}
										fill={item.color}
									/>
								))}
							</g>
						);
					})}

					{labels.map((label, i) => (
						<text
							key={label}
							x={xFor(i)}
							y={YEAR_LABEL_Y}
							textAnchor="middle"
							className="fill-[var(--text-muted)] text-xs tabular-nums"
						>
							{label}
						</text>
					))}
				</svg>
			</div>

			<details className="mt-4 overflow-hidden rounded-[var(--radius-control)] border border-[var(--border-subtle)] bg-[var(--surface-raised)]">
				<summary className="flex min-h-11 cursor-pointer items-center px-4 py-2 text-sm font-medium text-[var(--text-strong)]">
					View chart data
				</summary>
				<p className="px-4 pt-3 text-xs text-[var(--text-muted)] sm:hidden">
					Scroll horizontally to view all columns.
				</p>
				<div className="overflow-x-auto border-t border-[var(--border-subtle)]">
					<table className="w-full min-w-[32rem] border-collapse text-sm">
						<caption className="sr-only">{block.title}</caption>
						<thead>
							<tr className="border-b border-[var(--border-strong)]">
								<th
									scope="col"
									className="sticky left-0 z-10 bg-[var(--surface-raised)] px-4 py-3 text-left font-semibold text-[var(--text-muted)] shadow-[8px_0_8px_-8px_rgba(27,29,31,0.2)]"
								>
									{xAxisLabel(labels)}
								</th>
								{block.series.map((item) => (
									<th
										key={item.label}
										scope="col"
										className="px-4 py-3 text-right font-semibold text-[var(--text-muted)]"
									>
										{item.label}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{labels.map((label, labelIndex) => (
								<tr
									key={label}
									className="border-b border-[var(--border-subtle)] last:border-b-0"
								>
									<th
										scope="row"
										className="sticky left-0 z-10 bg-[var(--surface-raised)] px-4 py-3 text-left font-medium tabular-nums text-[var(--text-strong)] shadow-[8px_0_8px_-8px_rgba(27,29,31,0.2)]"
									>
										{label}
									</th>
									{block.series.map((item) => {
										const value = item.values[labelIndex];
										return (
											<td
												key={item.label}
												className="px-4 py-3 text-right tabular-nums text-[var(--text-body)]"
											>
												{value === undefined ? null : (
													<>
														{value.toLocaleString("en-AU")} {block.unit}
													</>
												)}
											</td>
										);
									})}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</details>

			{block.note ? (
				<p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
					{block.note}
				</p>
			) : null}
		</figure>
	);
}
