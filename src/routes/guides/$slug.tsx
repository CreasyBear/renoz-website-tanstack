import { createFileRoute, notFound } from "@tanstack/react-router";

import { GuideCapacityLadder } from "@/components/guides/GuideCapacityLadder";
import { GuideCta } from "@/components/guides/GuideCta";
import { GuideDecisionTable } from "@/components/guides/GuideDecisionTable";
import { GuideDirectAnswer } from "@/components/guides/GuideDirectAnswer";
import { GuideFaq } from "@/components/guides/GuideFaq";
import { GuideProofStrip } from "@/components/guides/GuideProofStrip";
import { GuideSection } from "@/components/guides/GuideSection";
import { GuideShell } from "@/components/guides/GuideShell";
import { getGuide, guidePath, type GuideSection as GuideSectionData } from "@/data/guides";
import {
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
			],
		};
	},
	component: GuidePage,
});

function GuidePage() {
	const { guide } = Route.useLoaderData();

	return (
		<GuideShell
			updated={guide.updated}
			claimsPending={guide.claimsPending}
			partnerName={guide.pairingPartner}
		>
			<GuideDirectAnswer
				h1={guide.h1}
				answer={guide.directAnswer}
				eyebrow={guide.eyebrow}
			/>
			{guide.showCapacityLadder ? (
				<GuideCapacityLadder partnerName={guide.pairingPartner} />
			) : null}
			<GuideDecisionTable
				heading="Decision table"
				rowLabels={guide.decisionRowLabels}
				columns={guide.decisionColumns}
			/>
			{guide.sections.map((section: GuideSectionData) => (
				<GuideSection
					key={section.heading}
					heading={section.heading}
					body={section.body}
				/>
			))}
			<GuideProofStrip links={guide.proofLinks} />
			<GuideFaq faqs={guide.faqs} />
			<GuideCta cta={guide.cta} />
			<p className="text-sm text-gray-500">
				Last updated: <time dateTime={guide.updated}>{guide.updated}</time>
				{guide.claimsPending
					? " · Claims pending verification against live CEC, SSL, and compatibility sources."
					: null}
			</p>
		</GuideShell>
	);
}
