import { useId } from "react";

import { normalizePercentCell } from "@/data/insight-fx";
import { cn } from "@/lib/utils";

type InsightDataTableProps = {
	index: number;
	title: string;
	columns: string[]; // first column is the row-label column
	rows: string[][]; // each row: [label, ...cells]
	note?: string;
	showHeader?: boolean;
};

const STICKY_LABEL_COLUMN =
	"sticky left-0 z-10 bg-[var(--surface-canvas)] shadow-[8px_0_8px_-8px_rgba(27,29,31,0.2)]";
const LABEL_MIN_WIDTH = "min-w-40";

// Only change/move columns adopt the signed delta convention; level columns
// (yields, shares, averages) keep their source strings untouched.
const CHANGE_HEADER_PATTERN = /change|move|diff|delta|Δ/i;

export function InsightDataTable({
	index,
	title,
	columns,
	rows,
	note,
	showHeader = true,
}: InsightDataTableProps) {
	const [labelColumn, ...dataColumns] = columns;
	const tableId = useId();
	const noteId = `${tableId}-note`;
	const changeColumns = dataColumns.map((column) =>
		CHANGE_HEADER_PATTERN.test(column),
	);

	return (
		<section className={showHeader ? "section-narrative" : undefined}>
			{showHeader ? (
				<header className="mb-5 max-w-[var(--measure-reading)]">
					<p className="text-label text-[var(--accent-strong)]">
						Table {index}
					</p>
					<h2 className="mt-2 text-xl font-semibold tracking-[var(--tracking-display)] text-[var(--text-strong)] md:text-2xl">
						{title}
					</h2>
				</header>
			) : null}

			<ul className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-strong)] md:hidden">
				{rows.map((row, rowIndex) => (
					<li key={rowIndex} className="py-4">
						<p className="font-semibold text-[var(--text-strong)]">{row[0]}</p>
						<dl className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 text-sm">
							{dataColumns.map((column, columnIndex) => (
								<div key={`${rowIndex}-${columnIndex}`} className="contents">
									<dt className="text-[var(--text-muted)]">
										{column || labelColumn}
									</dt>
									<dd className="text-right tabular-nums text-[var(--text-body)]">
										{changeColumns[columnIndex]
											? normalizePercentCell(row[columnIndex + 1])
											: row[columnIndex + 1]}
									</dd>
								</div>
							))}
						</dl>
					</li>
				))}
			</ul>

			<div className="hidden overflow-x-auto overscroll-x-contain md:block">
				<table
					aria-describedby={note ? noteId : undefined}
					className="w-full border-collapse text-sm"
				>
					<caption className="sr-only">{title}</caption>
					<thead>
						<tr className="border-y border-[var(--border-strong)]">
							<th
								scope="col"
								id={`${tableId}-column-0`}
								className={cn(
									STICKY_LABEL_COLUMN,
									LABEL_MIN_WIDTH,
									"py-3 pr-4 text-left align-bottom text-xs font-semibold text-[var(--text-muted)]",
								)}
							>
								{labelColumn}
							</th>
							{dataColumns.map((column, columnIndex) => (
								<th
									key={columnIndex}
									scope="col"
									id={`${tableId}-column-${columnIndex + 1}`}
									className="px-3 py-3 text-right align-bottom text-xs font-semibold text-[var(--text-muted)]"
								>
									{column}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows.map((row, rowIndex) => (
							<tr
								key={rowIndex}
								className={cn(
									"border-b border-[var(--border-subtle)]",
									rowIndex === rows.length - 1 &&
										"border-b border-[var(--border-strong)]",
								)}
							>
								<th
									scope="row"
									id={`${tableId}-row-${rowIndex}`}
									headers={`${tableId}-column-0`}
									className={cn(
										STICKY_LABEL_COLUMN,
										LABEL_MIN_WIDTH,
										"py-2.5 pr-4 text-left align-top font-medium text-[var(--text-strong)]",
									)}
								>
									{row[0]}
								</th>
								{row.slice(1).map((cell, cellIndex) => (
									<td
										key={cellIndex}
										headers={`${tableId}-row-${rowIndex} ${tableId}-column-${cellIndex + 1}`}
										className="px-3 py-2.5 text-right align-top tabular-nums text-[var(--text-body)]"
									>
										{changeColumns[cellIndex]
											? normalizePercentCell(cell)
											: cell}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{note ? (
				<p
					id={noteId}
					className="mt-3 max-w-[var(--measure-reading)] text-sm leading-[var(--leading-body)] text-[var(--text-muted)]"
				>
					{note}
				</p>
			) : null}
		</section>
	);
}