import { Download } from "lucide-react";
import { Button } from "../ui/Button";

export interface SpecItem {
	label: string;
	value: string;
	subtext?: string;
}

interface TechSpecsProps {
	title?: string;
	description?: string;
	specs: SpecItem[];
	downloadLink?: string;
	downloadText?: string;
}

export function TechSpecs({
	title = "Technical Specifications",
	description = "Engineered for performance and reliability.",
	specs,
	downloadLink,
	downloadText = "Download Datasheet",
}: TechSpecsProps) {
	return (
		<section className="py-24 bg-zinc-950 text-white border-t border-white/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-3 gap-16 items-start">
					<div className="lg:col-span-1">
						<h2 className="text-3xl font-bold mb-6 tracking-tight text-white">{title}</h2>
						<p className="text-zinc-400 text-lg mb-10 leading-relaxed">
							{description}
						</p>

						{downloadLink && (
							<Button
								variant="outline"
								to={downloadLink}
								className="w-full sm:w-auto flex items-center gap-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all"
							>
								<Download className="w-4 h-4" />
								{downloadText}
							</Button>
						)}
					</div>

					<div className="lg:col-span-2">
						<div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
							{specs.map((item, i) => (
								<div key={i} className="group">
									<div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2 group-hover:text-zinc-400 transition-colors">
										<div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[var(--renoz-green)] transition-colors" />
										{item.label}
									</div>
									<div className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 group-hover:border-white/20 transition-colors">
										{item.value}
									</div>
									{item.subtext && (
										<div className="mt-2 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
											{item.subtext}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
