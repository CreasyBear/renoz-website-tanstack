import { useEffect, useRef, useState } from "react";
import type { GuideDecisionColumn } from "@/data/guides";
import { InlineText } from "@/lib/inline-content";

type GuideDecisionTableProps = {
	heading: string;
	rowLabels: string[];
	columns: GuideDecisionColumn[];
	eyebrow?: string | null;
	rowHeader?: string;
};

export function GuideDecisionTable({
	heading,
	rowLabels,
	columns,
	eyebrow = "Compare your options",
	rowHeader = "Criterion",
}: GuideDecisionTableProps) {
	const scrollerRef = useRef<HTMLDivElement>(null);
	const [overflows, setOverflows] = useState(false);

	useEffect(() => {
		const scroller = scrollerRef.current;
		if (!scroller) return;
		const check = () => {
			// Subpixel scrollbars can report a 1px scrollWidth delta without true
			// overflow, so require a clear margin.
			setOverflows(scroller.scrollWidth - scroller.clientWidth > 4);
		};
		check();
		const observer = new ResizeObserver(check);
		observer.observe(scroller);
		return () => observer.disconnect();
	}, []);

	return (
		<section className="section-standard">
			<div className="max-w-[68ch]">
				{eyebrow ? (
					<span className="text-label mb-3 block text-[var(--text-muted)]">
						{eyebrow}
					</span>
				) : null}
				<h2 className="mb-7 text-2xl font-bold tracking-[var(--tracking-display)] md:text-3xl">
					{heading}
				</h2>
			</div>

			<div
				ref={scrollerRef}
				className="relative overflow-x-auto rounded-[var(--radius-control)] border border-[var(--border-strong)] bg-[var(--surface-raised)]"
			>
				{overflows ? (
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 rounded-r-[var(--radius-control)] bg-gradient-to-l from-[var(--surface-raised)]/80 to-transparent"
					/>
				) : null}
				<table className="w-full min-w-[48rem] table-fixed text-left text-sm">
					<thead className="bg-[var(--surface-inverse)] text-[var(--text-inverse)]">
						<tr>
							<th
								scope="col"
								className="sticky left-0 z-20 border-r border-[color-mix(in_srgb,var(--text-inverse)_25%,transparent)] bg-[var(--surface-inverse)] px-5 py-4 font-semibold tracking-wide"
							>
								{rowHeader}
							</th>
							{columns.map((column) => (
								<th
									key={column.name}
									scope="col"
									className={`px-5 py-4 font-semibold tracking-wide ${
										column.highlight
											? "bg-[var(--accent-interactive)] text-[var(--text-on-accent)]"
											: ""
									}`}
								>
									{column.name}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rowLabels.map((label, rowIndex) => (
							<tr
								key={label}
								className="border-t border-[var(--border-subtle)] even:bg-[var(--surface-subtle)]"
							>
								<th
									scope="row"
									className={`sticky left-0 z-10 border-r border-[var(--border-strong)] px-5 py-4 align-top font-semibold text-[var(--text-strong)] ${
										rowIndex % 2 === 1
											? "bg-[var(--surface-subtle)]"
											: "bg-[var(--surface-raised)]"
									}`}
								>
									{label}
								</th>
								{columns.map((column) => (
									<td
										key={`${column.name}-${label}`}
										className={`px-5 py-4 align-top leading-[var(--leading-body)] text-[var(--text-body)] ${
											column.highlight ? "bg-[var(--accent-soft)]" : ""
										}`}
									>
										<InlineText text={column.cells[rowIndex] ?? "—"} />
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{overflows ? (
				<p className="mt-2 max-w-[68ch] text-xs text-[var(--text-muted)] md:hidden">
					Scroll for more columns
				</p>
			) : null}
		</section>
	);
}
