import type { GuideDecisionColumn } from "@/data/guides";

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
	return (
		<section className="section-standard">
			<div className="max-w-[68ch]">
				{eyebrow ? (
					<span className="text-label mb-3 block text-[var(--text-muted)]">
						{eyebrow}
					</span>
				) : null}
				<h2 className="mb-7 text-2xl font-bold tracking-[-0.03em] md:text-3xl">
					{heading}
				</h2>
			</div>

			<section
				className="overflow-x-auto rounded-[var(--radius-control)] border border-[var(--border-strong)] bg-[var(--surface-raised)]"
				aria-label={heading}
			>
				<table className="w-full min-w-[48rem] table-fixed text-left text-sm">
					<thead className="bg-[var(--surface-inverse)] text-[var(--text-inverse)]">
						<tr>
							<th scope="col" className="px-5 py-4 font-semibold tracking-wide">
								{rowHeader}
							</th>
							{columns.map((column) => (
								<th
									key={column.name}
									scope="col"
									className={`px-5 py-4 font-semibold tracking-wide ${
										column.highlight
											? "bg-[var(--accent)] text-[var(--text-on-accent)]"
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
									className="px-5 py-4 align-top font-semibold text-[var(--text-strong)]"
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
										{column.cells[rowIndex] ?? "—"}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</section>
	);
}
