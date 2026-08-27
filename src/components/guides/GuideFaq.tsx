import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import type { GuideFaq as GuideFaqItem } from "@/data/guides";

type GuideFaqProps = {
	heading: string;
	faqs: GuideFaqItem[];
};

export function GuideFaq({ heading, faqs }: GuideFaqProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	const headingId = useId();

	if (faqs.length === 0) return null;

	return (
		<section
			className="section-standard max-w-[68ch]"
			aria-labelledby={headingId}
		>
			<span className="text-label mb-3 block text-[var(--text-muted)]">
				Common questions
			</span>
			<h2
				id={headingId}
				className="mb-7 text-2xl font-bold tracking-[-0.03em] md:text-3xl"
			>
				{heading}
			</h2>
			<div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-strong)]">
				{faqs.map((faq, index) => {
					const isOpen = openIndex === index;
					const buttonId = `${headingId}-button-${index}`;
					const panelId = `${headingId}-panel-${index}`;
					return (
						<div key={faq.question}>
							<h3>
								<button
									id={buttonId}
									type="button"
									aria-expanded={isOpen}
									aria-controls={panelId}
									onClick={() => setOpenIndex(isOpen ? null : index)}
									className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]"
								>
									<span className="pr-4 text-base font-bold text-[var(--text-strong)] transition-colors group-hover:text-[var(--accent-strong)] md:text-lg">
										{faq.question}
									</span>
									<span
										className={`flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-control)] border transition-colors ${
											isOpen
												? "border-[var(--accent-strong)] bg-[var(--accent-soft)] text-[var(--accent-strong)]"
												: "border-[var(--border-strong)] text-[var(--text-muted)] group-hover:border-[var(--accent-strong)]"
										}`}
									>
										<ChevronDown className="size-5" aria-hidden />
									</span>
								</button>
							</h3>
							<section
								id={panelId}
								aria-labelledby={buttonId}
								hidden={!isOpen}
								className="pb-6"
							>
								<p className="text-base leading-[var(--leading-body)] text-[var(--text-body)]">
									{faq.answer}
								</p>
							</section>
						</div>
					);
				})}
			</div>
		</section>
	);
}
