import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { canonicalLink, pageMeta } from "../lib/seo";

type PressItem = {
	/** date parts for the stacked masthead column: small top line + large main line */
	dateTop: string;
	dateMain: string;
	/** ISO date for <time> */
	date: string;
	publication: string;
	title: string;
	note?: string;
	/** feature = marquee coverage; standard = editorial article; listing = program/directory page */
	kind: "feature" | "standard" | "listing";
	badge?: string;
	url: string;
};

const PRESS_2026: PressItem[] = [
	{
		dateTop: "JUL",
		dateMain: "14",
		date: "2026-07-14",
		publication: "pv magazine Australia",
		title:
			"Batteries helping solve energy security challenges in semi-rural settings",
		note: "Feature on a Perth Hills installation, with comment from RENOZ CEO Simon Chan on why regional sites choose battery-first power.",
		kind: "feature",
		badge: "Feature",
		url: "https://www.pv-magazine-australia.com/2026/07/14/batteries-helping-solve-energy-security-challenges-in-semi-rural-settings/",
	},
	{
		dateTop: "JUL",
		dateMain: "14",
		date: "2026-07-14",
		publication: "ESS News",
		title: "Battery storage supports energy resilience in regional Australia",
		note: "Syndicated edition of the pv magazine Australia feature.",
		kind: "standard",
		url: "https://www.ess-news.com/2026/07/14/battery-storage-supports-energy-resilience-in-regional-australia/",
	},
	{
		dateTop: "APR",
		dateMain: "16",
		date: "2026-04-16",
		publication: "pv magazine Australia",
		title: "9 startups building Australia's battery future from the ground up",
		note: "RENOZ profiled among nine Australian battery startups; the same profile runs on the EnergyLab blog.",
		kind: "standard",
		url: "https://www.pv-magazine-australia.com/press-releases/9-startups-building-australias-battery-future-from-the-ground-up/",
	},
	{
		dateTop: "APR",
		dateMain: "2026",
		date: "2026-04-01",
		publication: "EnergyLab",
		title:
			"Pitching Australia's battery future: the second Supercharge Australia incubator cohort takes the stage",
		kind: "listing",
		url: "https://energylab.org.au/blog/pitching-australias-battery-future-the-second-supercharge-australia-incubator-cohort-takes-the-stage/",
	},
	{
		dateTop: "MAR",
		dateMain: "2026",
		date: "2026-03-01",
		publication: "EnergyLab",
		title: "Supercharge Australia Incubator #2 Pitch Day",
		kind: "listing",
		url: "https://energylab.org.au/events/supercharge-australia-incubator-2-pitch-day/",
	},
	{
		dateTop: "FEB",
		dateMain: "2026",
		date: "2026-02-20",
		publication: "GreenTech Hub WA",
		title: "RENOZ Energy participant profile",
		kind: "listing",
		url: "https://greentechwa.com/renoz-energy/",
	},
];

const PRESS_2025: PressItem[] = [
	{
		dateTop: "DEC",
		dateMain: "08",
		date: "2025-12-08",
		publication: "WA Government",
		title: "GreenTech Hub energy storage challenge finalists announced",
		note: "RENOZ named among 12 finalists in the inaugural Long Game Energy Storage Innovation Challenge, recognised for a chemistry-agnostic platform built on Brill Power's battery intelligence system.",
		kind: "standard",
		url: "https://www.wa.gov.au/government/announcements/greentech-hub-energy-storage-challenge-finalists-announced",
	},
	{
		dateTop: "DEC",
		dateMain: "08",
		date: "2025-12-08",
		publication: "Mirage News",
		title: "GreenTech Hub energy challenge finalists announced",
		note: "Independent publication of the WA Government media statement naming RENOZ among the 12 finalists.",
		kind: "standard",
		url: "https://www.miragenews.com/greentech-hub-energy-challenge-finalists-1585123/",
	},
	{
		dateTop: "OCT",
		dateMain: "01",
		date: "2025-10-01",
		publication: "Harvey-Waroona Reporter",
		title:
			"Harvey homeowner happy with shift to off-grid system after shocking grid connection cost",
		note: "The Brad Jones off-grid feature ran on the front page in print, then syndicated across the South Western Times and The West Australian.",
		kind: "standard",
		badge: "Print + online",
		url: "https://www.harveyreporter.com.au/news/regional/harvey-homeowner-happy-with-shift-to-off-grid-system-after-shocking-grid-connection-cost--c-20077865",
	},
	{
		dateTop: "OCT",
		dateMain: "2025",
		date: "2025-10-30",
		publication: "Techboard",
		title: "RENOZ Energy company profile",
		kind: "listing",
		url: "https://techboard.com.au/company-profile/renoz-energy/",
	},
	{
		dateTop: "JUL",
		dateMain: "25",
		date: "2025-07-25",
		publication: "Green Review",
		title:
			"Reimagining WA's energy future: local batteries for a vast frontier",
		note: "Business insight feature on WA's distributed energy gap, built around RENOZ CEO Simon Chan's case for local battery manufacturing.",
		kind: "standard",
		url: "https://greenreview.com.au/business_insight/reimagining-was-energy-future-local-batteries-for-a-vast-frontier/",
	},
	{
		dateTop: "2025",
		dateMain: "",
		date: "2025-01-01",
		publication: "CB Insights",
		title: "RENOZ Energy analyst profile",
		kind: "listing",
		url: "https://www.cbinsights.com/company/renoz-energy",
	},
];

const PRESS_YEARS: { year: string; items: PressItem[] }[] = [
	{ year: "2026", items: PRESS_2026 },
	{ year: "2025", items: PRESS_2025 },
];

const TOTAL_STORIES = PRESS_2026.length + PRESS_2025.length;

const titleClass: Record<PressItem["kind"], string> = {
	feature: "text-2xl md:text-[2rem] leading-tight font-bold",
	standard: "text-base md:text-lg font-semibold",
	listing: "text-base font-medium",
};

function DateColumn({ item }: { item: PressItem }) {
	return (
		<time
			dateTime={item.date}
			className="hidden md:flex flex-col gap-0.5 leading-none"
		>
			{item.dateMain ? (
				<>
					<span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
						{item.dateTop}
					</span>
					<span className="text-2xl font-bold tabular-nums text-zinc-500">
						{item.dateMain}
					</span>
				</>
			) : (
				<span className="text-2xl font-bold tabular-nums text-zinc-500">
					{item.dateTop}
				</span>
			)}
		</time>
	);
}

function PressRow({ item }: { item: PressItem }) {
	const isListing = item.kind === "listing";

	const labelRow = (
		<span className="flex flex-wrap items-center gap-x-3 gap-y-1">
			<span
				className={
					isListing
						? "text-[13px] font-medium text-zinc-500"
						: "text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500"
				}
			>
				{item.publication}
			</span>
			{item.badge && (
				<span
					className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
						item.badge === "Feature"
							? "bg-[var(--renoz-green)]/10 text-[var(--renoz-green)]"
							: "border border-zinc-200 bg-zinc-100 text-zinc-600"
					}`}
				>
					{item.badge}
				</span>
			)}
			<time
				dateTime={item.date}
				className="text-xs text-zinc-400 tabular-nums md:hidden"
			>
				{item.dateMain ? `${item.dateTop} ${item.dateMain}` : item.dateTop}
			</time>
		</span>
	);

	const titleBlock = (
		<>
			{labelRow}
			<span
				className={`mt-2 block text-[var(--black)] leading-snug group-hover:text-[var(--renoz-green)] transition-colors ${titleClass[item.kind]}`}
			>
				{item.title}
			</span>
			{item.note && (
				<span className="mt-1.5 block text-sm text-zinc-600 leading-relaxed max-w-2xl">
					{item.note}
				</span>
			)}
			<span className="sr-only"> (opens in a new tab)</span>
		</>
	);

	return (
		<article
			className={`group relative border-b border-zinc-200 transition-colors hover:bg-[var(--cream)]/60 ${
				item.kind === "feature"
					? "border-l-[3px] border-l-[var(--renoz-green)] bg-[var(--renoz-green)]/[0.03]"
					: ""
			}`}
		>
			<div className="grid grid-cols-1 md:grid-cols-[5rem_1fr_1.5rem] gap-2 md:gap-8 py-6 md:py-7 items-start pl-4 md:pl-6">
				<DateColumn item={item} />
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--renoz-green)]"
				>
					{titleBlock}
				</a>
				<ArrowUpRight
					aria-hidden="true"
					className="hidden md:block w-5 h-5 self-start pt-1 text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:text-[var(--renoz-green)] transition-all"
				/>
			</div>
		</article>
	);
}

export const Route = createFileRoute("/news")({
	head: () => ({
		meta: pageMeta({
			title: "News & Media Coverage | RENOZ Energy",
			description:
				"Independent coverage of RENOZ Energy: trade press, regional media, government announcements, and incubator features.",
			path: "/news",
		}),
		links: [canonicalLink("/news")],
	}),
	component: NewsPage,
});

export function NewsPage() {
	const reduceMotion = useReducedMotion();

	return (
		<div className="min-h-screen bg-[var(--white)]">
			{/* Masthead hero */}
			<section className="bg-[var(--black)] text-white pt-28 pb-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<div className="flex items-baseline justify-between gap-6 border-b border-white/15 pb-4">
							<span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--renoz-green)]">
								Newsroom
							</span>
							<span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 tabular-nums">
								{TOTAL_STORIES} stories · 2025–2026
							</span>
						</div>
						<div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 items-end pt-10 pb-2">
							<div>
								<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
									Press
								</h1>
								<p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
									Independent coverage of RENOZ Energy: trade press, regional
									newspapers, government announcements, and the programs backing
									WA battery manufacturing. Every story linked to its source.
								</p>
							</div>
							<a
								href="https://www.harveyreporter.com.au/news/regional/harvey-homeowner-happy-with-shift-to-off-grid-system-after-shocking-grid-connection-cost--c-20077865"
								target="_blank"
								rel="noopener noreferrer"
								className="group/artifact block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--renoz-green)]"
							>
								<div className="rounded-lg overflow-hidden border border-white/15">
									<img
										src="/images/case-studies/waroona-reporter.webp"
										alt="Harvey-Waroona Reporter newspaper front page featuring a RENOZ installation"
										className="w-full h-auto object-cover"
									/>
								</div>
								<p className="mt-3 text-xs text-white/50 uppercase tracking-widest">
									Front page, 1 Oct 2025
									<span className="sr-only"> (opens in a new tab)</span>
								</p>
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Press ledger */}
			<section className="section-spacing">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					{PRESS_YEARS.map(({ year, items }) => (
						<div key={year} className="mb-16 md:mb-20 last:mb-0">
							<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--black)] tabular-nums pb-3 border-b-2 border-[var(--black)]">
								{year}
							</h2>
							{items.map((item) => (
								<PressRow
									key={`${item.publication}-${item.date}`}
									item={item}
								/>
							))}
						</div>
					))}

					{/* Media enquiries */}
					<div className="mt-20 border-t-2 border-[var(--black)] pt-10 grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8">
						<h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 leading-none pt-1">
							Media
							<br />
							Enquiries
						</h2>
						<div>
							<p className="text-zinc-600 leading-relaxed max-w-2xl">
								For interviews, site visits, or background on RENOZ systems, get
								in touch. Company background and milestones live on{" "}
								<Link
									to="/about"
									className="font-semibold text-[var(--black)] underline decoration-[var(--renoz-green)] underline-offset-4 hover:text-[var(--renoz-green)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--renoz-green)]"
								>
									our about page
								</Link>
								.
							</p>
							<a
								href="mailto:sales@renoz.energy?subject=Media%20enquiry"
								className="mt-5 inline-flex items-center gap-2 text-xl font-semibold text-[var(--black)] hover:text-[var(--renoz-green)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--renoz-green)]"
							>
								sales@renoz.energy
								<ArrowUpRight aria-hidden="true" className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
