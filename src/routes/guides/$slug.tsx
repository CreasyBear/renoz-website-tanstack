import { createFileRoute, notFound } from "@tanstack/react-router";

import { GuideCapacityLadder } from "@/components/guides/GuideCapacityLadder";
import { GuideClosing } from "@/components/guides/GuideClosing";
import { GuideCta } from "@/components/guides/GuideCta";
import { GuideDecisionTable } from "@/components/guides/GuideDecisionTable";
import { GuideFaq } from "@/components/guides/GuideFaq";
import { GuideIntro } from "@/components/guides/GuideIntro";
import { GuideProofStrip } from "@/components/guides/GuideProofStrip";
import { GuideSection } from "@/components/guides/GuideSection";
import { GuideShell } from "@/components/guides/GuideShell";
import {
	type GuideSection as GuideSectionData,
	getGuide,
	guidePath,
} from "@/data/guides";
import {
	breadcrumbSchema,
	canonicalLink,
	faqPageSchema,
	guideArticleSchema,
	jsonLd,
	pageMeta,
} from "@/lib/seo";

export const Route = createFileRoute("/guides/$slug")({
	loader: ({ params }) => {
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

	return (
		<GuideShell
			eyebrow={guide.eyebrow}
			h1={guide.h1}
			updated={guide.updated}
			claimsPending={guide.claimsPending}
			partnerName={guide.pairingPartner}
		>
			<GuideIntro intro={guide.intro} />
			<GuideSection
				heading={guide.expertise.heading}
				body={guide.expertise.body}
			/>
			<GuideDecisionTable
				heading={guide.decisionHeading}
				rowLabels={guide.decisionRowLabels}
				columns={guide.decisionColumns}
			/>
			{guide.showCapacityLadder ? (
				<GuideCapacityLadder partnerName={guide.pairingPartner} />
			) : null}
			{guide.sections.map((section: GuideSectionData) => (
				<GuideSection
					key={section.heading}
					heading={section.heading}
					body={section.body}
				/>
			))}
			<GuideProofStrip links={guide.proofLinks} />
			<GuideFaq heading={guide.faqHeading} faqs={guide.faqs} />
			<GuideClosing
				heading={guide.closing.heading}
				body={guide.closing.body}
			/>
			<GuideCta cta={guide.cta} />
			<p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
				Last updated: <time dateTime={guide.updated}>{guide.updated}</time>
				{guide.claimsPending
					? " · Claims pending verification against live CEC, SSL, and compatibility sources."
					: " · Figures dated and traced to the sources listed above."}
			</p>
		</GuideShell>
	);
}
