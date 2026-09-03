import { createFileRoute, notFound } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useId } from "react";

import { GuideCapacityLadder } from "@/components/guides/GuideCapacityLadder";
import { GuideClosing } from "@/components/guides/GuideClosing";
import { GuideCta } from "@/components/guides/GuideCta";
import { GuideDecisionTable } from "@/components/guides/GuideDecisionTable";
import { GuideFaq } from "@/components/guides/GuideFaq";
import { GuideIntro } from "@/components/guides/GuideIntro";
import { GuideProductMatrix } from "@/components/guides/GuideProductMatrix";
import { GuideProofStrip } from "@/components/guides/GuideProofStrip";
import { GuideSection } from "@/components/guides/GuideSection";
import { GuideShell } from "@/components/guides/GuideShell";
import { NewsletterSignup } from "@/components/guides/NewsletterSignup";
import { guideGroups, guidePath } from "@/data/guide-links";
import type { GuideSection as GuideSectionData } from "@/data/guide-types";
import { captureAttribution } from "@/lib/attribution";
import { formatDateEnAu } from "@/lib/format";
import {
	articleImageUrl,
	breadcrumbSchema,
	canonicalLink,
	faqPageSchema,
	guideArticleSchema,
	jsonLd,
	pageMeta,
} from "@/lib/seo";

export const Route = createFileRoute("/guides/$slug")({
	loader: async ({ params }) => {
		const { getGuide } = await import("@/data/guides");
		const guide = getGuide(params.slug);
		if (!guide) {
			throw notFound();
		}
		return { guide };
	},
	head: ({ loaderData }) => {
		const guide = loaderData?.guide;
		if (!guide) return {};
		const path = guidePath(guide.slug);
		return {
			meta: [
				...pageMeta({
					title: `${guide.title} | RENOZ Energy`,
					description: guide.description,
					path,
					image: articleImageUrl(guide.slug),
					type: "article",
				}),
			],
			links: [canonicalLink(path)],
			scripts: [
				jsonLd(guideArticleSchema(guide)),
				jsonLd(faqPageSchema(guide.faqs, path)),
				jsonLd(
					breadcrumbSchema(path, {
						guides: "Guides",
						[guide.slug]: guide.title,
					}),
				),
			],
		};
	},
	component: GuidePage,
});

function GuidePage() {
	const { guide } = Route.useLoaderData();
	const sectionIdPrefix = useId().replaceAll(":", "");
	const sectionId = (suffix: string) => `${sectionIdPrefix}-${suffix}`;
	const expertiseLink = {
		id: sectionId("expertise"),
		label: guide.expertise.heading,
	};
	const decisionLink = {
		id: sectionId("decision"),
		label: guide.decisionHeading,
	};
	const systemPathsLink = guide.architectureExamples
		? {
				id: sectionId("system-paths"),
				label: guide.architectureExamples.heading,
			}
		: null;
	const contentLinks = guide.sections.map((section, index) => ({
		id: sectionId(`section-${index + 1}`),
		label: section.heading,
	}));
	const evidenceLink = {
		id: sectionId("evidence"),
		label: "Evidence and next reading",
	};
	const faqLink = { id: sectionId("faq"), label: guide.faqHeading };
	const sectionLinks = [
		expertiseLink,
		decisionLink,
		...(systemPathsLink ? [systemPathsLink] : []),
		...contentLinks,
		evidenceLink,
		faqLink,
	];
	const readingLink = systemPathsLink ?? contentLinks[0] ?? faqLink;
	const primarySectionLinks = [
		{
			...decisionLink,
			label: guide.architectureExamples
				? "Compare architectures"
				: "Compare options",
		},
		{
			...readingLink,
			label: guide.architectureExamples
				? "Review product paths"
				: "Read the guide",
		},
		{ ...evidenceLink, label: "Evidence & FAQs" },
	];
	const collectionLabel = guideGroups.find((group) =>
		group.slugs.includes(guide.slug),
	)?.title;
	// Client-side only — SSR renders with an empty attribution
	const attribution = captureAttribution();

	return (
		<GuideShell
			eyebrow={guide.eyebrow}
			collectionLabel={collectionLabel}
			h1={guide.h1}
			updated={guide.updated}
			claimsPending={guide.claimsPending}
			partnerName={guide.pairingPartner}
		>
			<nav
				aria-label="On this page"
				className="mb-12 border-y border-[var(--border-strong)] py-4"
			>
				<p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
					On this page
				</p>
				<ul className="hidden gap-2 sm:grid sm:grid-cols-3">
					{primarySectionLinks.map((item) => (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								className="flex min-h-11 items-center border border-[var(--border-strong)] px-3 py-2 text-sm font-semibold leading-snug text-[var(--text-strong)] transition-colors hover:border-[var(--accent-strong)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<details className="group/contents sm:hidden">
					<summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-2 text-sm font-semibold text-[var(--text-strong)] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]">
						Full guide contents
						<span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] transition-transform duration-200 group-open/contents:rotate-180 motion-reduce:transition-none">
							<ChevronDown aria-hidden="true" className="size-4" />
						</span>
					</summary>
					<ul className="grid gap-x-6 border-t border-[var(--border-subtle)] pb-2 pt-3">
						{sectionLinks.map((item) => (
							<li key={item.id} className="flex items-start gap-2">
								<span
									aria-hidden="true"
									className="mt-[1.15rem] size-1.5 shrink-0 bg-[var(--accent-strong)]"
								/>
								<a
									href={`#${item.id}`}
									className="inline-flex min-h-11 items-center py-2 text-sm font-semibold leading-snug text-[var(--text-muted)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--text-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</details>
			</nav>
			<GuideIntro intro={guide.intro} />
			<GuideSection
				id={sectionId("expertise")}
				index={1}
				heading={guide.expertise.heading}
				body={guide.expertise.body}
			/>
			<div id={sectionId("decision")} className="scroll-mt-28">
				<GuideDecisionTable
					heading={guide.decisionHeading}
					rowLabels={guide.decisionRowLabels}
					columns={guide.decisionColumns}
				/>
			</div>
			{guide.architectureExamples ? (
				<GuideProductMatrix
					id={sectionId("system-paths")}
					{...guide.architectureExamples}
				/>
			) : null}
			{guide.showCapacityLadder ? (
				<GuideCapacityLadder partnerName={guide.pairingPartner} />
			) : null}
			{guide.sections.map((section: GuideSectionData, index: number) => (
				<GuideSection
					key={section.heading}
					id={sectionId(`section-${index + 1}`)}
					index={index + 2}
					heading={section.heading}
					body={section.body}
				/>
			))}
			<div id={sectionId("evidence")} className="scroll-mt-28">
				<GuideProofStrip links={guide.proofLinks} />
			</div>
			<div id={sectionId("faq")} className="scroll-mt-28">
				<GuideFaq heading={guide.faqHeading} faqs={guide.faqs} />
			</div>
			<GuideClosing heading={guide.closing.heading} body={guide.closing.body} />
			<GuideCta cta={guide.cta} attribution={attribution} />
			{guide.newsletter ? <NewsletterSignup /> : null}
			<p className="max-w-[var(--measure-reading)] border-t border-[var(--border-subtle)] pt-6 text-sm text-[var(--text-muted)] md:pb-6">
				Last updated:{" "}
				<time dateTime={guide.updated}>{formatDateEnAu(guide.updated)}</time>
				{guide.claimsPending
					? " · Model-specific evidence required."
					: " · Sources dated and linked."}
			</p>
		</GuideShell>
	);
}
