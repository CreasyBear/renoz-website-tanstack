import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import type { GuideFaq as GuideFaqItem } from "@/data/guides";
import { cn } from "@/lib/utils";

type GuideFaqProps = {
	faqs: GuideFaqItem[];
};

export function GuideFaq({ faqs }: GuideFaqProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	const headingId = useId();

	if (faqs.length === 0) return null;

	return (
		<section className="mb-12" aria-labelledby={headingId}>
			<h2 id={headingId} className="text-2xl font-bold tracking-tight mb-4">
				Frequently asked questions
			</h2>
			<div className="border-t border-black/10">
				{faqs.map((faq, index) => {
					const isOpen = openIndex === index;
					return (
						<div key={faq.question} className="border-b border-black/10">
							<button
								type="button"
								aria-expanded={isOpen}
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className="w-full flex items-center justify-between gap-4 py-4 text-left"
							>
								<span className="text-base font-semibold text-[var(--black)]">
									{faq.question}
								</span>
								<ChevronDown
									className={cn(
										"size-5 shrink-0 text-gray-500 transition-transform",
										isOpen && "rotate-180",
									)}
								/>
							</button>
							{isOpen ? (
								<p className="pb-4 text-base leading-relaxed text-gray-800">
									{faq.answer}
								</p>
							) : null}
						</div>
					);
				})}
			</div>
		</section>
	);
}
