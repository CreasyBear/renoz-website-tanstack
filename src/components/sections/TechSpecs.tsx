import { Download } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Button } from "../ui/Button";

export interface SpecItem {
	label: string;
	value: string;
	subtext?: string;
}

interface TechSpecsProps {
	id?: string;
	title?: string;
	description?: string;
	specs: SpecItem[];
	downloadLink?: string;
	downloadText?: string;
}

export function TechSpecs({
	id,
	title = "Technical Specifications",
	description = "Engineered for performance and reliability.",
	specs,
	downloadLink,
	downloadText = "Download Datasheet",
}: TechSpecsProps) {
	return (
		<section
			id={id}
			className={`py-24 bg-zinc-950 text-white border-t border-white/5${id ? " scroll-mt-28" : ""}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-3 gap-16 items-start">
					<div className="lg:col-span-1">
						<h2 className="text-3xl font-bold mb-6 tracking-tight text-white">
							{title}
						</h2>
						<p className="text-zinc-400 text-lg mb-10 leading-relaxed">
							{description}
						</p>

						{downloadLink && (
							<Button
								variant="outline"
								to={downloadLink}
								onClick={() =>
									trackEvent("document_download", {
										filename: downloadLink.split("/").pop() || downloadLink,
									})
								}
								className="w-full sm:w-auto flex items-center gap-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all"
							>
								<Download className="w-4 h-4" />
								{downloadText}
							</Button>
						)}
					</div>

					<div className="lg:col-span-2">
						{/* Mobile: Swipe Carousel */}
						<div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-4 hide-scrollbar">
							{specs.map((item, i) => (
								<div
									key={i}
									className="snap-start shrink-0 w-[200px] p-6 bg-white/5 border border-white/10 rounded-2xl"
								>
									<div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
										<div className="w-1.5 h-1.5 rounded-full bg-[var(--renoz-green)]" />
										{item.label}
									</div>
									<div className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-4 mb-2">
										{item.value}
									</div>
									{item.subtext && (
										<div className="text-xs text-zinc-500">{item.subtext}</div>
									)}
								</div>
							))}
						</div>

						{/* Desktop: Grid */}
						<div className="hidden md:grid sm:grid-cols-2 gap-x-12 gap-y-12">
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
