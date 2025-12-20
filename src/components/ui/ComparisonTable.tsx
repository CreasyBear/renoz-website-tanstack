import { Check, X } from "lucide-react";

interface Product {
	name: string;
	features: (string | boolean)[]; // true = check, false = cross, string = value
	highlight?: boolean;
}

interface ComparisonTableProps {
	products: Product[];
	features: string[];
	title?: string;
}

export default function ComparisonTable({
	products,
	features,
	title,
}: ComparisonTableProps) {
	return (
		<div className="w-full overflow-x-auto py-12">
			{title && (
				<h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
			)}

			<div className="min-w-[800px] lg:min-w-0">
				<div className="grid grid-cols-[1.5fr_repeat(3,1fr)] gap-4">
					{/* Header Row */}
					<div className="p-4"></div> {/* Empty corner */}
					{products.map((product, i) => (
						<div
							key={i}
							className={`text-center p-6 rounded-t-2xl ${
								product.highlight
									? "bg-[var(--black)] text-white relative -top-4 pt-10 shadow-lg"
									: "bg-transparent text-[var(--black)]"
							}`}
						>
							{product.highlight && (
								<span className="absolute top-0 left-1/2 -translate-x-1/2 bg-[var(--renoz-green)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-lg">
									Most Popular
								</span>
							)}
							<h3 className="font-bold text-xl">{product.name}</h3>
						</div>
					))}
					{/* Feature Rows */}
					{features.map((feature, featIndex) => (
						<div key={featIndex} className="contents group">
							{/* Feature Name */}
							<div className="p-4 flex items-center font-medium text-[var(--text-muted)] border-b border-gray-100 group-last:border-0">
								{feature}
							</div>

							{/* Product Values */}
							{products.map((product, prodIndex) => {
								const value = product.features[featIndex];
								const isHighlight = product.highlight;

								return (
									<div
										key={prodIndex}
										className={`p-4 flex items-center justify-center border-b ${
											isHighlight
												? "bg-gray-50 border-gray-200"
												: "bg-transparent border-gray-100"
										} group-last:border-0 ${
											// Add bottom corners to last row
											featIndex === features.length - 1
												? isHighlight
													? "rounded-b-2xl"
													: ""
												: ""
										}`}
									>
										{value === true ? (
											<div className="w-6 h-6 rounded-full bg-[var(--renoz-green)] text-white flex items-center justify-center">
												<Check className="w-3 h-3" strokeWidth={3} />
											</div>
										) : value === false ? (
											<X className="w-5 h-5 text-gray-300" />
										) : (
											<span
												className={`font-bold ${isHighlight ? "text-[var(--black)]" : "text-gray-600"}`}
											>
												{value}
											</span>
										)}
									</div>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
