import type { GuideDecisionColumn } from "@/data/guides";

type GuideDecisionTableProps = {
	heading: string;
	rowLabels: string[];
	columns: GuideDecisionColumn[];
};

export function GuideDecisionTable({
	heading,
	rowLabels,
	columns,
}: GuideDecisionTableProps) {
	return (
		<section className="mb-14">
			<span className="block text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-3">
				Compare your options
			</span>
			<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
				{heading}
			</h2>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
				<table className="w-full min-w-[40rem] text-left text-sm">
					<thead className="bg-[var(--black)] text-white">
						<tr>
							<th scope="col" className="px-5 py-4 font-semibold tracking-wide">
								Criterion
							</th>
							{columns.map((column) => (
								<th
									key={column.name}
									scope="col"
									className={`px-5 py-4 font-semibold tracking-wide ${
										column.highlight ? "bg-[var(--renoz-green)]" : ""
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
								className="border-t border-gray-100 odd:bg-white even:bg-gray-50/60"
							>
								<th
									scope="row"
									className="px-5 py-4 align-top font-semibold text-gray-900"
								>
									{label}
								</th>
								{columns.map((column) => (
									<td
										key={`${column.name}-${label}`}
										className={`px-5 py-4 align-top text-gray-700 leading-relaxed ${
											column.highlight ? "bg-[var(--renoz-green)]/5" : ""
										}`}
									>
										{column.cells[rowIndex] ?? "—"}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
