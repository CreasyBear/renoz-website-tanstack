import { ChevronDown, ExternalLink } from "lucide-react";

import type { GuideArchitectureExamples } from "@/data/guides";

type GuideProductMatrixProps = GuideArchitectureExamples & {
	id?: string;
};

export function GuideProductMatrix({
	heading,
	intro,
	categories,
	id = "system-paths",
}: GuideProductMatrixProps) {
	if (categories.length === 0) return null;

	return (
		<section
			id={id}
			className="section-standard scroll-mt-28"
			aria-labelledby={`${id}-heading`}
		>
			<div className="mb-7 border-b border-[var(--border-strong)] pb-6 md:grid md:grid-cols-[minmax(0,1fr)_minmax(16rem,28rem)] md:items-end md:gap-10">
				<div>
					<p className="text-label mb-2 text-[var(--text-muted)]">
						System paths
					</p>
					<h2
						id={`${id}-heading`}
						className="text-2xl font-bold tracking-[-0.03em] text-balance md:text-3xl"
					>
						{heading}
					</h2>
				</div>
				<p className="mt-4 max-w-[68ch] text-base leading-[var(--leading-body)] text-[var(--text-body)] md:mt-0">
					{intro}
				</p>
			</div>

			<div className="border-y border-[var(--border-strong)] bg-[var(--surface-raised)]">
				{categories.map((category, categoryIndex) => (
					<details
						key={category.label}
						className={`group/category ${
							categoryIndex > 0 ? "border-t border-[var(--border-strong)]" : ""
						}`}
					>
						<summary className="grid min-h-20 cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-[var(--surface-inverse)] px-4 py-4 text-[var(--text-inverse)] marker:content-none sm:px-5 md:px-6 md:py-5">
							<div className="min-w-0">
								<h3 className="text-xl font-bold tracking-[-0.03em]">
									{category.label}
								</h3>
								<p className="mt-1 text-xs font-semibold leading-snug text-[var(--text-inverse-muted)]">
									{category.summary}
								</p>
							</div>
							<span className="flex items-center gap-2 justify-self-end">
								<span className="text-right text-xs font-semibold text-[var(--text-inverse-muted)]">
									{category.products.length} examples
								</span>
								<span className="flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-[color-mix(in_srgb,var(--text-inverse)_25%,transparent)] text-[var(--text-inverse)] transition-opacity group-open/category:opacity-60 motion-reduce:transition-none">
									<ChevronDown aria-hidden="true" className="size-5" />
								</span>
							</span>
						</summary>

						<ul aria-label={`${category.label} examples`}>
							<li className="grid gap-3 border-t border-[var(--border-subtle)] bg-[var(--surface-subtle)] px-4 py-4 text-sm leading-[var(--leading-body)] text-[var(--text-body)] sm:grid-cols-2 sm:gap-6 sm:px-5 md:px-6">
								<p>{category.architecture}</p>
								<p>
									<span className="font-semibold text-[var(--text-strong)]">
										Buyer consequence:{" "}
									</span>
									{category.buyerConsequence}
								</p>
							</li>
							{category.products.map((product) => {
								const external = /^https?:\/\//.test(product.source.url);
								return (
									<li
										key={product.name}
										className="grid gap-4 border-t border-[var(--border-subtle)] px-4 py-5 sm:px-5 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:gap-10 md:px-6"
									>
										<div>
											<span className="text-label inline-flex border border-[var(--border-strong)] bg-[var(--surface-subtle)] px-2 py-1 text-[var(--text-muted)]">
												{product.categoryTag}
											</span>
											<h4 className="mt-2 text-base font-bold leading-snug text-[var(--text-strong)]">
												{product.name}
											</h4>
										</div>
										<div className="min-w-0">
											<p className="max-w-[68ch] text-sm leading-[var(--leading-body)] text-[var(--text-body)] md:text-base">
												{product.detail}
											</p>
											{product.caveat ? (
												<p className="mt-2 max-w-[68ch] text-sm leading-[var(--leading-body)] text-[var(--text-muted)]">
													<span className="font-semibold text-[var(--text-strong)]">
														Scope:{" "}
													</span>
													{product.caveat}
												</p>
											) : null}
											<a
												href={product.source.url}
												target={external ? "_blank" : undefined}
												rel={external ? "noopener noreferrer" : undefined}
												className="mt-3 inline-flex min-h-11 items-center gap-1.5 py-2 text-sm font-semibold text-[var(--text-strong)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]"
											>
												{product.source.label}
												{external ? (
													<>
														<ExternalLink
															className="size-3.5"
															aria-hidden="true"
														/>
														<span className="sr-only">
															{" "}
															(opens in a new tab)
														</span>
													</>
												) : null}
											</a>
										</div>
									</li>
								);
							})}
						</ul>
					</details>
				))}
			</div>
		</section>
	);
}
