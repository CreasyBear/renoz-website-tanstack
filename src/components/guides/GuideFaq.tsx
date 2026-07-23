import { AnimatePresence, motion } from "framer-motion";
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
		<section className="mb-14" aria-labelledby={headingId}>
			<span className="block text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-3">
				Common questions
			</span>
			<h2
				id={headingId}
				className="text-2xl md:text-3xl font-bold tracking-tight mb-6"
			>
				Frequently asked questions
			</h2>
			<div className="space-y-4">
				{faqs.map((faq, index) => {
					const isOpen = openIndex === index;
					return (
						<div
							key={faq.question}
							className={cn(
								"bg-white border rounded-2xl transition-all duration-300 overflow-hidden",
								isOpen
									? "border-[var(--renoz-green)] shadow-md"
									: "border-gray-200 hover:border-gray-300",
							)}
						>
							<button
								type="button"
								aria-expanded={isOpen}
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
							>
								<span
									className={cn(
										"text-base md:text-lg font-bold transition-colors pr-4",
										isOpen
											? "text-[var(--black)]"
											: "text-gray-600 group-hover:text-gray-900",
									)}
								>
									{faq.question}
								</span>
								<div
									className={cn(
										"flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
										isOpen
											? "bg-[var(--renoz-green)] border-[var(--renoz-green)] text-white rotate-180"
											: "border-gray-200 text-gray-400 group-hover:border-gray-300",
									)}
								>
									<ChevronDown className="w-5 h-5" />
								</div>
							</button>
							<AnimatePresence>
								{isOpen && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
									>
										<div className="px-5 md:px-6 pb-6 pt-0">
											<div className="w-full h-px bg-gray-100 mb-5" />
											<p className="text-base leading-relaxed text-gray-700">
												{faq.answer}
											</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					);
				})}
			</div>
		</section>
	);
}
