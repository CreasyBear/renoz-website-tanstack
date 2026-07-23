import { Link, createFileRoute } from "@tanstack/react-router";

import { getGuide, guideGroups, guidePath, guides } from "@/data/guides";
import {
	breadcrumbSchema,
	canonicalLink,
	jsonLd,
	pageMeta,
	siteUrl,
} from "@/lib/seo";

const PAGE_TITLE = "Battery & Off-Grid Guides for Perth & WA | RENOZ Energy";
const PAGE_DESCRIPTION =
	"Plain-spoken guides to off-grid battery systems, 2026 WA rebates, costs, sizing, and inverter pairing — written by Perth's battery OEM for WA conditions.";

function guidesItemListSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: PAGE_TITLE,
		description: PAGE_DESCRIPTION,
		url: siteUrl("/guides"),
		mainEntity: {
			"@type": "ItemList",
			itemListElement: guides.map((guide, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: guide.title,
				url: siteUrl(guidePath(guide.slug)),
			})),
		},
	};
}

export const Route = createFileRoute("/guides/")({
	head: () => ({
		meta: [
			...pageMeta({
				title: PAGE_TITLE,
				description: PAGE_DESCRIPTION,
				path: "/guides",
			}),
		],
		links: [canonicalLink("/guides")],
		scripts: [
			jsonLd(guidesItemListSchema()),
			jsonLd(breadcrumbSchema("/guides", { guides: "Guides" })),
		],
	}),
	component: GuidesIndexPage,
});

function GuidesIndexPage() {
	let runningIndex = 0;

	return (
		<div className="min-h-screen bg-[var(--cream)] text-[var(--black)]">
			{/* Hero */}
			<section className="relative overflow-hidden bg-[var(--black)] text-white">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(ellipse 60% 55% at 85% 0%, color-mix(in oklab, var(--renoz-green) 22%, transparent), transparent 65%), radial-gradient(ellipse 45% 40% at 0% 100%, color-mix(in oklab, var(--renoz-green) 10%, transparent), transparent 60%)",
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 opacity-[0.06]"
					style={{
						backgroundImage:
							"linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
					}}
				/>
				<div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-36 pb-16 md:pt-44 md:pb-24">
					<p className="guide-reveal text-xs font-bold uppercase tracking-[0.25em] text-[var(--renoz-green)]">
						Field guides · Perth &amp; Western Australia
					</p>
					<h1
						className="guide-reveal mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
						style={{ animationDelay: "80ms" }}
					>
						The WA battery
						<br />
						decision guides.
					</h1>
					<p
						className="guide-reveal mt-6 max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed"
						style={{ animationDelay: "160ms" }}
					>
						Off-grid systems, 2026 rebates, real costs, sizing maths, and
						inverter pairing — written from the workshop floor in O’Connor, not
						a marketing desk. Every figure is dated and traced to a source.
					</p>
					<p
						className="guide-reveal mt-8 text-sm text-gray-400"
						style={{ animationDelay: "240ms" }}
					>
						{guides.length} guides · updated for 2026 rebate and Synergy rule
						changes
					</p>
				</div>
			</section>

			{/* Groups */}
			<div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
				{guideGroups.map((group) => (
					<section
						key={group.title}
						className="grid md:grid-cols-[16rem_1fr] gap-6 md:gap-10 py-10 md:py-14 border-t border-black/10 first:border-t-0 first:pt-0"
					>
						<div>
							<h2 className="text-lg font-semibold tracking-tight">
								{group.title}
							</h2>
							<p className="mt-2 text-sm text-gray-600 leading-relaxed">
								{group.blurb}
							</p>
						</div>
						<ul className="space-y-3">
							{group.slugs.map((slug) => {
								const guide = getGuide(slug);
								if (!guide) return null;
								runningIndex += 1;
								const number = String(runningIndex).padStart(2, "0");
								return (
									<li key={slug}>
										<Link
											to="/guides/$slug"
											params={{ slug }}
											className="group block rounded-xl border border-black/10 bg-[var(--white-warm)] px-5 py-4 transition-all duration-200 hover:border-[var(--renoz-green)] hover:shadow-[0_6px_24px_-12px_rgba(0,177,64,0.45)] hover:-translate-y-0.5"
										>
											<div className="flex items-baseline gap-4">
												<span className="text-xs font-mono text-gray-400 group-hover:text-[var(--renoz-green)] transition-colors">
													{number}
												</span>
												<div className="min-w-0 flex-1">
													<h3 className="font-medium leading-snug group-hover:text-[var(--renoz-green-dark)] transition-colors">
														{guide.title}
													</h3>
													<p className="mt-1 text-sm text-gray-600 leading-relaxed line-clamp-2">
														{guide.description}
													</p>
													<p className="mt-2 flex flex-wrap items-center gap-x-3 text-xs text-gray-400">
														<span>
															Updated{" "}
															<time dateTime={guide.updated}>
																{guide.updated}
															</time>
														</span>
														{guide.pairingPartner ? (
															<span className="text-[var(--renoz-green-dark)]">
																{guide.pairingPartner} pairing
															</span>
														) : null}
													</p>
												</div>
												<span
													aria-hidden
													className="self-center text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--renoz-green)]"
												>
													→
												</span>
											</div>
										</Link>
									</li>
								);
							})}
						</ul>
					</section>
				))}

				{/* CTA band */}
				<div className="mt-6 rounded-2xl bg-[var(--black)] text-white px-6 py-10 md:px-12 md:py-12 relative overflow-hidden">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0"
						style={{
							backgroundImage:
								"radial-gradient(ellipse 50% 80% at 100% 50%, color-mix(in oklab, var(--renoz-green) 20%, transparent), transparent 70%)",
						}}
					/>
					<div className="relative md:flex items-center justify-between gap-8">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight">
								Can’t find your situation?
							</h2>
							<p className="mt-2 text-gray-300 max-w-xl">
								Tell us your block, loads, and inverter — we’ll size a system
								and point you at the right rebate pathway.
							</p>
						</div>
						<Link
							to="/contact"
							className="mt-6 md:mt-0 inline-block shrink-0 rounded-full bg-[var(--renoz-green)] px-7 py-3 font-semibold text-[var(--black)] transition-transform hover:scale-[1.03]"
						>
							Talk to RENOZ
						</Link>
					</div>
				</div>
			</div>

			<style>{`
				.guide-reveal {
					opacity: 0;
					animation: guideReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
				}
				@keyframes guideReveal {
					from { opacity: 0; transform: translateY(14px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@media (prefers-reduced-motion: reduce) {
					.guide-reveal { animation: none; opacity: 1; }
				}
			`}</style>
		</div>
	);
}
