import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface BentoFeatureItem {
	title: string;
	description: string;
	icon: LucideIcon;
	image?: string;
	className?: string; // For spanning columns (col-span-2)
}

interface BentoFeaturesProps {
	title: string;
	subtitle: string;
	features: BentoFeatureItem[];
}

// Helper to render individual card content
const BentoCard = ({
	feature,
	index,
	isMobile = false,
}: {
	feature: BentoFeatureItem;
	index: number;
	isMobile?: boolean;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * 0.1 }}
		className={cn(
			"group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 h-full min-h-[360px]",
			!isMobile && feature.className,
		)}
	>
		<div className="absolute top-6 left-6 z-20">
			<div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
				<feature.icon className="w-6 h-6 text-zinc-900 dark:text-white" />
			</div>
		</div>

		<div className="relative z-10 flex-1 p-8 flex flex-col justify-end">
			{feature.image && (
				<div className="absolute inset-0 z-0">
					<img
						src={feature.image}
						alt={feature.title}
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90" />
				</div>
			)}

			<div
				className={cn(
					"relative z-10",
					feature.image ? "text-white" : "text-zinc-900 dark:text-white",
				)}
			>
				<h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
				<p
					className={cn(
						"text-lg leading-relaxed",
						feature.image
							? "text-zinc-200"
							: "text-zinc-500 dark:text-zinc-400",
					)}
				>
					{feature.description}
				</p>
			</div>
		</div>
	</motion.div>
);

export function BentoFeatures({
	title,
	subtitle,
	features,
}: BentoFeaturesProps) {
	return (
		<section className="py-16 md:py-24 lg:py-32 px-4 bg-zinc-50 dark:bg-zinc-950">
			<div className="max-w-7xl mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-white">
						{title}
					</h2>
					<p className="text-xl text-zinc-500 dark:text-zinc-400">{subtitle}</p>
				</div>

				{/* Mobile: Swipe Carousel */}
				<div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-3 px-3 -mx-3 hide-scrollbar pb-8">
					{features.map((feature, i) => (
						<div key={i} className="snap-center shrink-0 w-[80vw] h-[400px]">
							<BentoCard feature={feature} index={i} isMobile={true} />
						</div>
					))}
				</div>

				{/* Desktop: Grid */}
				<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature, i) => (
						<BentoCard key={i} feature={feature} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
