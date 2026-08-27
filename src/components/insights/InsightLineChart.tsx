"use client";

import { Liveline, type LivelinePoint, type LivelineSeries } from "liveline";
import { useEffect, useMemo, useState } from "react";

import type { InsightLineChartBlock } from "@/data/insight-types";

const SNAPSHOT_END = Math.floor(Date.now() / 1000);
const POINT_GAP_SECONDS = 6;

function makePoints(values: number[]): LivelinePoint[] {
	return values.map((value, i) => ({
		time: SNAPSHOT_END - (values.length - 1 - i) * POINT_GAP_SECONDS,
		value,
	}));
}

function formatTonnes(value: number) {
	return `${Math.round(value).toLocaleString("en-AU")} t`;
}

export function InsightLineChart({
	block,
	index,
}: {
	block: InsightLineChartBlock;
	index: number;
}) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	const series: LivelineSeries[] = useMemo(
		() =>
			block.series.map((item) => {
				const points = makePoints(item.values);
				return {
					id: item.label,
					label: item.label,
					data: points,
					value: points[points.length - 1]?.value ?? 0,
					color: item.color,
				};
			}),
		[block.series],
	);

	const windowSeconds =
		POINT_GAP_SECONDS * (block.xLabels.length - 1) * 2 || POINT_GAP_SECONDS;

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

				<div className="overflow-hidden rounded-[var(--radius-control)] border border-[var(--border-subtle)] bg-[var(--surface-raised)]">
					{mounted ? (
						<div className="h-[220px] w-full">
							<Liveline
								data={[]}
								value={0}
								series={series}
								theme="light"
								grid={false}
								pulse={false}
								paused
								scrub={false}
								window={windowSeconds}
								lineWidth={2.25}
								padding={{ top: 16, right: 4, bottom: 24, left: 4 }}
								formatValue={formatTonnes}
							/>
						</div>
					) : (
						<div
							aria-hidden="true"
							className="h-[220px] w-full bg-[var(--surface-subtle)] motion-safe:animate-pulse"
						/>
					)}
				</div>

				<div className="mt-2 flex justify-between px-1 text-xs text-[var(--text-muted)]">
					{block.xLabels.map((label) => (
						<span key={label} className="tabular-nums">
							{label}
						</span>
					))}
				</div>
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
									className="px-4 py-3 text-left font-semibold text-[var(--text-muted)]"
								>
									{block.title}
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
							{block.xLabels.map((label, labelIndex) => (
								<tr
									key={label}
									className="border-b border-[var(--border-subtle)] last:border-b-0"
								>
									<th
										scope="row"
										className="px-4 py-3 text-left font-medium tabular-nums text-[var(--text-strong)]"
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
														{value} {block.unit}
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
