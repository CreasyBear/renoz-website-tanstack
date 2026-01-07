import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface FAQItem {
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		question: "Why choose Renoz over imported battery systems?",
		answer:
			"We're Perth's own battery OEM, designing and engineering systems specifically for Australian conditions. Unlike overseas manufacturers, we understand WA's heat, dust, and isolation challenges. Our systems are built to last in the harshest environments, with local support you can actually reach.",
	},
	{
		question: "How do you support customers after installation?",
		answer:
			"Our Perth-based engineering team provides direct support throughout your system's lifetime. We don't outsource to call centers overseas. Every Renoz customer gets access to our local expertise, firmware updates, and performance monitoring. We're invested in your system's success because we're building WA's energy future.",
	},
	{
		question: "Can you work with my existing solar setup?",
		answer:
			"Absolutely. We offer both AC-coupled and DC-coupled battery solutions, giving us unparalleled flexibility to integrate with any solar inverter (SMA, Fronius, Sungrow, Victron, and more). We'll recommend the best approach for your specific system - whether that's keeping your current inverter or designing a fully integrated DC-coupled solution for maximum efficiency.",
	},
	{
		question: "What happens if something goes wrong?",
		answer:
			"Our 10-year warranty is backed by our Perth headquarters, not an overseas entity. We stand behind every system we install. If an issue arises, our engineers will work directly with your installer to resolve it quickly. We're not just selling batteries - we're building long-term relationships with WA households and businesses.",
	},
	{
		question:
			"How do you ensure system reliability in WA's extreme conditions?",
		answer:
			"We use tier-one Lithium Iron Phosphate (LFP) battery cells rated for 6000+ cycles at 80% depth of discharge. Our enclosures are tested to 55°C ambient temperatures and designed to withstand WA's dust and corrosion. Every system includes comprehensive monitoring, automatic fault detection, and remote diagnostics so we can proactively maintain your investment.",
	},
	{
		question: "What's your approach to system design and installation?",
		answer:
			"We treat every installation as a custom engineering project. Our process starts with understanding your energy usage patterns, solar production, and backup needs. We then design a system that maximizes your savings while providing the reliability you deserve. Every installation is performed by certified electricians trained specifically on Renoz systems, ensuring flawless integration and optimal performance.",
	},
];

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
					{faqs.map((faq, index) => (
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
