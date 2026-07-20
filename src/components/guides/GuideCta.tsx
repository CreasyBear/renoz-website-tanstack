import { Button } from "@/components/ui/Button";
import type { GuideCta as GuideCtaData } from "@/data/guides";

type GuideCtaProps = {
	cta: GuideCtaData;
};

export function GuideCta({ cta }: GuideCtaProps) {
	return (
		<section className="mt-4 mb-8 border-t border-black/10 pt-10">
			<h2 className="text-2xl font-bold tracking-tight mb-3">Next step</h2>
			<div className="flex flex-wrap gap-3">
				<Button to={cta.primaryTo} variant="primary" size="lg">
					{cta.primaryLabel}
				</Button>
				{cta.secondaryTo && cta.secondaryLabel ? (
					<Button to={cta.secondaryTo} variant="outline" size="lg">
						{cta.secondaryLabel}
					</Button>
				) : null}
			</div>
		</section>
	);
}
