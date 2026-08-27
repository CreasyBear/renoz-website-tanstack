import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { insights } from "@/data/insights";

function formatDate(value: string) {
	return new Intl.DateTimeFormat("en-AU", {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "Australia/Perth",
	}).format(new Date(`${value}T00:00:00+08:00`));
}

export function InsightsIndexPage() {
	return (
		<div className="editorial min-h-screen bg-[var(--surface-canvas)] text-[var(--text-strong)]">
			<section className="relative overflow-hidden bg-[var(--surface-inverse)] text-[var(--text-inverse)]">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(ellipse 60% 60% at 85% 0%, color-mix(in oklab, var(--renoz-green) 24%, transparent), transparent 65%), radial-gradient(ellipse 40% 45% at 0% 100%, color-mix(in oklab, var(--renoz-green) 10%, transparent), transparent 60%)",
					}}
				/>
				<div className="relative layout-container pt-32 pb-14 md:pt-40 md:pb-20">
					<span className="text-label mb-5 block text-[var(--accent)]">
						China battery materials
					</span>
					<h1 className="max-w-[var(--measure-reading)] text-3xl font-bold tracking-[var(--tracking-display)] leading-[var(--leading-heading)] text-balance md:text-5xl">
						China battery materials, in English
					</h1>
					<p className="mt-6 max-w-[var(--measure-reading)] text-lg leading-[var(--leading-body)] text-[var(--text-inverse-muted)]">
						English readings of Chinese conversion identities, spot prints,
						broker notes and cycle reports that sit behind WeChat. Sources
						attached. Not a price index, and not an Australian installed-system
						quote.
					</p>
				</div>
			</section>

			<section className="layout-container py-12 md:py-16">
				<div className="mx-auto grid max-w-3xl gap-6">
					{insights.map((insight) => {
						const lead = insight.keyFigures?.[0];
						return (
							<Card key={insight.slug} variant="default" className="p-6 md:p-8">
								<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
									<div className="min-w-0">
										<p className="text-label text-[var(--accent-strong)]">
											{insight.eyebrow}
										</p>
										<h2 className="mt-3 text-2xl font-bold tracking-tight">
											{insight.title}
										</h2>
										<p className="mt-3 leading-relaxed text-[var(--text-body)]">
											{insight.description}
										</p>
										<p className="mt-4 text-sm text-[var(--text-muted)]">
											Published{" "}
											<time dateTime={insight.published}>
												{formatDate(insight.published)}
											</time>{" "}
											· {insight.readTime}
										</p>
									</div>
									{lead ? (
										<div className="shrink-0 border-t border-[var(--border-subtle)] pt-4 md:w-44 md:border-l md:border-t-0 md:pl-6 md:pt-0">
											<p className="text-label text-[var(--text-muted)]">
												{lead.label}
											</p>
											<p className="mt-2 text-3xl font-semibold tracking-[var(--tracking-display)] tabular-nums text-[var(--text-strong)]">
												{lead.value}
											</p>
											<p className="mt-1 text-sm text-[var(--text-muted)]">
												{lead.unit}
											</p>
										</div>
									) : null}
								</div>
								<div className="mt-6">
									<Button
										to="/insights/$slug"
										params={{ slug: insight.slug }}
										variant="primary"
										size="lg"
									>
										Read the briefing <ArrowRight aria-hidden="true" />
									</Button>
								</div>
							</Card>
						);
					})}
				</div>

				<p className="mx-auto mt-10 max-w-3xl text-sm leading-[var(--leading-body)] text-[var(--text-muted)]">
					Each briefing is tied to a named Chinese source. RENOZ translates and
					interprets. It does not republish source scans, and it does not treat
					upstream quotations as Australian installed-system prices.
				</p>
			</section>
		</div>
	);
}
