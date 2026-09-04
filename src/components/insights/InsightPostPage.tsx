import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { GuideClosing } from "@/components/guides/GuideClosing";
import { GuideIntro } from "@/components/guides/GuideIntro";
import { GuideSection } from "@/components/guides/GuideSection";
import { NewsletterSignup } from "@/components/guides/NewsletterSignup";
import { normalizePercentCell } from "@/data/insight-fx";
import {
	getInsightsBySlugs,
	INSIGHTS_PATH,
	type Insight,
	type InsightBlock,
} from "@/data/insights";
import { InsightBarChart } from "./InsightBarChart";
import { InsightDataTable } from "./InsightDataTable";
import { InsightLineChart } from "./InsightLineChart";

function formatDate(value: string) {
	return new Intl.DateTimeFormat("en-AU", {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "Australia/Perth",
	}).format(new Date(`${value}T00:00:00+08:00`));
}

function formatShortDate(value: string) {
	return new Intl.DateTimeFormat("en-AU", {
		day: "numeric",
		month: "short",
		timeZone: "Australia/Perth",
	}).format(new Date(`${value}T00:00:00+08:00`));
}

function renderBlock(
	block: InsightBlock,
	insight: Insight,
	index: number,
	counters: { exhibit: number; table: number },
) {
	switch (block.kind) {
		case "prose":
			return block.heading ? (
				<GuideSection
					key={index}
					heading={block.heading}
					body={block.paragraphs}
				/>
			) : (
				<GuideIntro key={index} intro={block.paragraphs} />
			);
		case "chart": {
			counters.exhibit += 1;
			switch (block.chart) {
				case "line":
					return (
						<InsightLineChart
							key={index}
							block={block}
							index={counters.exhibit}
						/>
					);
				case "bars":
					return (
						<InsightBarChart
							key={index}
							block={block}
							index={counters.exhibit}
						/>
					);
				default: {
					const _never: never = block;
					return _never;
				}
			}
		}
		case "table": {
			counters.table += 1;
			return (
				<InsightDataTable
					key={index}
					index={counters.table}
					title={block.title}
					columns={block.columns}
					rows={block.rows}
					note={block.note}
				/>
			);
		}
		case "sources":
			return (
				<section
					key={index}
					className="section-closure border-t border-[var(--border-strong)]"
				>
					<h2 className="text-lg font-semibold tracking-[var(--tracking-display)] text-[var(--text-strong)]">
						Source
					</h2>
					<ol className="mt-4 space-y-4">
						{insight.sources.map((source) => (
							<li
								key={source.url}
								className="text-sm leading-[var(--leading-body)] text-[var(--text-body)]"
							>
								<a
									href={source.url}
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-[var(--accent-strong)] underline decoration-[var(--accent)] decoration-2 underline-offset-2 transition-colors hover:text-[var(--text-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
								>
									{source.publisher}
								</a>
								<span className="text-[var(--text-muted)]">
									{" "}
									— {source.title}. Published {formatDate(source.published)},
									accessed {formatDate(source.accessed)}.
								</span>
								{source.note ? (
									<p className="mt-1 text-[var(--text-muted)]">{source.note}</p>
								) : null}
							</li>
						))}
					</ol>
				</section>
			);
		default: {
			const _never: never = block;
			return _never;
		}
	}
}

export function InsightPostPage({ insight }: { insight: Insight }) {
	const counters = { exhibit: 0, table: 0 };
	const related = getInsightsBySlugs(insight.relatedSlugs ?? []);
	const keyFigures = insight.keyFigures ?? [];
	const hasUpdate = insight.updated !== insight.published;

	return (
		<div className="editorial min-h-screen bg-[var(--surface-canvas)] text-[var(--text-strong)]">
			<section className="bg-[var(--surface-inverse)] text-[var(--text-inverse)]">
				<div className="layout-container pb-14 pt-32 md:pb-20 md:pt-40">
					<div className="max-w-[var(--measure-reading)]">
						<nav
							aria-label="Breadcrumb"
							className="mb-6 text-xs font-semibold text-[var(--text-inverse-muted)]"
						>
							<ol className="flex flex-wrap items-center gap-2">
								<li>
									<Link
										to={INSIGHTS_PATH}
										activeOptions={{ exact: true }}
										className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--text-inverse)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]"
									>
										China battery materials
									</Link>
								</li>
							</ol>
						</nav>
						<span className="text-label mb-4 block text-[var(--accent)]">
							{insight.eyebrow}
						</span>
						<h1 className="max-w-[var(--measure-reading)] text-3xl font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-display)] text-balance md:text-5xl">
							{insight.title}
						</h1>
						{insight.description ? (
							<p className="mt-5 max-w-[var(--measure-reading)] text-base leading-[var(--leading-body)] text-[var(--text-inverse-muted)] md:text-lg">
								{insight.description}
							</p>
						) : null}
						<div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-[color-mix(in_srgb,var(--text-inverse)_18%,transparent)] pt-4 text-xs text-[var(--text-inverse-muted)]">
							<span>
								Published{" "}
								<time dateTime={insight.published}>
									{formatShortDate(insight.published)}
								</time>
							</span>
							{hasUpdate ? (
								<span>
									{" "}
									· Updated{" "}
									<time dateTime={insight.updated}>
										{formatShortDate(insight.updated)}
									</time>
								</span>
							) : null}
							<span> · {insight.readTime} read</span>
						</div>
					</div>
				</div>
			</section>

			<article className="exhibit-container section-standard">
				<div className="mx-auto w-full max-w-[var(--measure-reading)]">
					{keyFigures.length > 0 ? (
						<section className="section-compact grid border-y border-[var(--border-strong)] sm:grid-cols-3">
							{keyFigures.map((figure, index) => (
								<div
									key={figure.label}
									className={`border-b border-[var(--border-subtle)] py-5 last:border-b-0 sm:border-b-0 sm:py-6 ${
										index === 0
											? "sm:pr-5"
											: "sm:border-l sm:border-[var(--border-subtle)] sm:px-5"
									} ${index === keyFigures.length - 1 ? "sm:pr-0" : ""}`}
								>
									<p className="text-label text-[var(--text-muted)]">
										{figure.label}
									</p>
									<p className="mt-2 text-3xl font-semibold tracking-[var(--tracking-display)] tabular-nums text-[var(--text-strong)]">
										{figure.value}
										<span className="ml-1.5 text-sm font-medium text-[var(--text-muted)]">
											{figure.unit}
										</span>
									</p>
									{figure.change ? (
										<p className="mt-1 text-sm text-[var(--text-body)]">
											{figure.change.replace(
												/([+-]?\d+(?:\.\d+)?%)/g,
												(match) => normalizePercentCell(match),
											)}
										</p>
									) : null}
									{figure.source ? (
										<p className="mt-2 text-xs text-[var(--text-muted)]">
											{figure.source}
										</p>
									) : null}
								</div>
							))}
						</section>
					) : null}

					{insight.blocks.map((block, index) =>
						renderBlock(block, insight, index, counters),
					)}

					<GuideClosing
						heading={insight.closing.heading}
						body={insight.closing.body}
					/>

					{related.length > 0 ? (
						<section className="section-closure border-t border-[var(--border-strong)]">
							<h2 className="text-lg font-semibold tracking-[var(--tracking-display)] text-[var(--text-strong)]">
								{related.length === 1
									? "Related briefing"
									: "Related briefings"}
							</h2>
							<ul className="mt-4 space-y-3">
								{related.map((item) => (
									<li key={item.slug}>
										<Link
											to="/insights/$slug"
											params={{ slug: item.slug }}
											className="group inline-flex min-h-11 items-center gap-2 font-medium text-[var(--accent-strong)] underline decoration-[var(--accent)] decoration-2 underline-offset-2 transition-colors hover:text-[var(--text-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
										>
											<span>{item.title}</span>
											<ArrowRight
												aria-hidden="true"
												className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
											/>
										</Link>
										<p className="mt-1 text-sm text-[var(--text-muted)]">
											{item.eyebrow}
										</p>
									</li>
								))}
							</ul>
						</section>
					) : null}

					<NewsletterSignup />
				</div>
			</article>
		</div>
	);
}
