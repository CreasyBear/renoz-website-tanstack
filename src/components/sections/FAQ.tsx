import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { homeFaqs } from "../../data/faqs";
import { cn } from "../../lib/utils";

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="py-24 bg-[var(--white-warm)] border-t border-gray-200">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
						Why Choose Renoz
					</span>
					<h2 className="text-3xl md:text-5xl font-bold text-[var(--black)] tracking-tight">
						Built for WA, <br /> Backed by WA.
					</h2>
				</div>

				<div className="space-y-4">
					{homeFaqs.map((faq, index) => (
						<div
							key={index}
							className={cn(
								"bg-white border rounded-2xl transition-all duration-300 overflow-hidden",
								openIndex === index
									? "border-[var(--renoz-green)] shadow-md"
									: "border-gray-200 hover:border-gray-300",
							)}
						>
							<button
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
							>
								<span
									className={cn(
										"text-lg md:text-xl font-bold transition-colors pr-8",
										openIndex === index
											? "text-[var(--black)]"
											: "text-gray-600 group-hover:text-gray-900",
									)}
								>
									{faq.question}
								</span>
								<div
									className={cn(
										"flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
										openIndex === index
											? "bg-[var(--renoz-green)] border-[var(--renoz-green)] text-white rotate-180"
											: "border-gray-200 text-gray-400 group-hover:border-gray-300",
									)}
								>
									<ChevronDown className="w-5 h-5" />
								</div>
							</button>

							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
									>
										<div className="px-6 md:px-8 pb-8 pt-0">
											<div className="w-full h-px bg-gray-100 mb-6" />
											<p className="text-[var(--text-muted)] text-lg leading-relaxed">
												{faq.answer}
											</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
