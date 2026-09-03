import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { guideGroups } from "@/data/guide-links";
import { getGuide, guides } from "@/data/guides";

export const Route = createLazyFileRoute("/guides/")({
	component: GuidesIndexPage,
});

const GUIDE_DATE_FORMATTER = new Intl.DateTimeFormat("en-AU", {
	day: "numeric",
	month: "short",
	year: "numeric",
	timeZone: "Australia/Perth",
});

function formatGuideDate(value: string) {
	return GUIDE_DATE_FORMATTER.format(new Date(`${value}T00:00:00+08:00`));
}

function GuidesIndexPage() {
	let runningIndex = 0;

	return (
		<div className="editorial min-h-screen bg-[var(--surface-canvas)] text-[var(--text-strong)]">
			<header className="bg-[var(--surface-inverse)] text-[var(--text-inverse)]">
				<div className="layout-container pb-14 pt-32 md:pb-16 md:pt-40">
					<div className="max-w-[var(--measure-reading)]">
						<p className="text-label text-[var(--accent)]">
							Field guides · Perth &amp; Western Australia
						</p>
						<h1 className="mt-4 max-w-[18ch] text-3xl font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-display)] text-balance md:text-4xl lg:text-5xl">
							<span className="block">The WA battery</span>{" "}
							<span className="block">decision guides.</span>
						</h1>
						<p className="mt-5 max-w-[var(--measure-reading)] text-base leading-[var(--leading-body)] text-[var(--text-inverse-muted)] md:text-lg">
							Evidence-led guidance on off-grid systems, 2026 rebates, costs,
							sizing and exact inverter pairings. Figures are dated and traced
							to their source.
						</p>
						<p className="mt-6 border-t border-[color-mix(in_srgb,var(--text-inverse)_18%,transparent)] pt-4 text-sm text-[var(--text-inverse-muted)]">
							{guides.length} guides · updated for 2026 rebate and Synergy rule
							changes
						</p>
					</div>
				</div>
			</header>

			<div className="layout-container section-standard">
				{guideGroups.map((group, groupIndex) => {
					const groupNumber = String(groupIndex + 1).padStart(2, "0");
					const headingId = `guide-group-${groupIndex + 1}`;

					return (
						<section
							key={group.title}
							aria-labelledby={headingId}
							className="grid gap-6 border-t border-[var(--border-strong)] py-10 first:border-t-0 first:pt-0 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10 md:py-14 lg:grid-cols-[14rem_minmax(0,1fr)]"
						>
							<header className="md:pr-4">
								<div className="flex items-baseline justify-between gap-4 md:block">
									<p className="text-sm font-semibold tabular-nums text-[var(--text-muted)]">
										{groupNumber}
									</p>
									<p className="text-sm text-[var(--text-muted)] md:mt-3">
										{group.slugs.length}{" "}
										{group.slugs.length === 1 ? "guide" : "guides"}
									</p>
								</div>
								<h2
									id={headingId}
									className="mt-2 text-xl font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-display)] md:mt-5"
								>
									{group.title}
								</h2>
								<p className="mt-2 max-w-md text-sm leading-[var(--leading-body)] text-[var(--text-body)]">
									{group.blurb}
								</p>
							</header>

							<ul className="border-t border-[var(--border-strong)]">
								{group.slugs.map((slug, guideIndex) => {
									const guide = getGuide(slug);
									if (!guide) return null;

									runningIndex += 1;
									const number = String(runningIndex).padStart(2, "0");
									const isLead = guideIndex === 0;

									return (
										<li
											key={slug}
											className="border-b border-[var(--border-subtle)]"
										>
											<Link
												to="/guides/$slug"
												params={{ slug }}
												className="group grid min-h-11 grid-cols-[2rem_minmax(0,1fr)_1rem] gap-3 py-5 outline-none transition-colors hover:bg-[var(--surface-subtle)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring)] sm:grid-cols-[2.5rem_minmax(0,1fr)_1rem] sm:py-6"
											>
												<span
													aria-hidden="true"
													className="pt-0.5 text-sm tabular-nums text-[var(--text-muted)]"
												>
													{number}
												</span>

												<div className="min-w-0">
													<h3
														className={`font-semibold leading-snug tracking-[-0.02em] transition-colors group-hover:text-[var(--accent-strong)] ${
															isLead
																? "text-xl sm:text-2xl"
																: "text-base sm:text-lg"
														}`}
													>
														{guide.title}
													</h3>
													<p className="mt-2 max-w-2xl text-sm leading-[var(--leading-body)] text-[var(--text-body)]">
														{guide.description}
													</p>
													<p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--text-muted)]">
														<span>
															Updated{" "}
															<time dateTime={guide.updated}>
																{formatGuideDate(guide.updated)}
															</time>
														</span>
														{guide.pairingPartner ? (
															<span>{guide.pairingPartner} pairing</span>
														) : null}
													</p>
												</div>

												<ArrowRight
													aria-hidden="true"
													className="mt-1 size-4 shrink-0 text-[var(--accent-strong)] transition-transform group-hover:translate-x-1"
												/>
											</Link>
										</li>
									);
								})}
							</ul>
						</section>
					);
				})}

				<section className="mt-3 border-y border-[var(--border-strong)] bg-[var(--surface-inverse)] px-6 py-9 text-[var(--text-inverse)] md:px-10 md:py-10">
					<div className="gap-8 md:flex md:items-center md:justify-between">
						<div>
							<h2 className="text-2xl font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-display)]">
								Need a system-level answer?
							</h2>
							<p className="mt-2 max-w-xl leading-[var(--leading-body)] text-[var(--text-inverse-muted)]">
								Share your block, loads and inverter. We’ll help define the
								right system and rebate pathway.
							</p>
						</div>
						<Link
							to="/contact"
							className="mt-6 inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[var(--accent-interactive)] px-7 py-3 font-semibold text-[var(--text-on-accent)] outline-none transition-colors hover:bg-[var(--accent-hover)] focus-visible:ring-2 focus-visible:ring-[var(--text-inverse)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-inverse)] sm:w-auto md:mt-0"
						>
							Talk to RENOZ
							<ArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
}
