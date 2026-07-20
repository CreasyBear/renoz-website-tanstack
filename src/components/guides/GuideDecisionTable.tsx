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
		<section className="mb-12">
			<h2 className="text-2xl font-bold tracking-tight mb-4">{heading}</h2>
			<div className="overflow-x-auto border border-black/15">
				<table className="w-full min-w-[40rem] text-left text-sm">
					<thead className="bg-[var(--black)] text-white">
						<tr>
							<th scope="col" className="px-4 py-3 font-semibold tracking-wide">
								Criterion
							</th>
							{columns.map((column) => (
								<th
									key={column.name}
									scope="col"
									className={`px-4 py-3 font-semibold tracking-wide ${
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
								className="border-t border-black/10 odd:bg-white even:bg-black/[0.03]"
							>
								<th
									scope="row"
									className="px-4 py-3 align-top font-medium text-gray-900"
								>
									{label}
								</th>
								{columns.map((column) => (
									<td
										key={`${column.name}-${label}`}
										className={`px-4 py-3 align-top text-gray-800 ${
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
