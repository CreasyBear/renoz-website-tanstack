// Route handled in main file
import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowLeft,
	DollarSign,
	Quote,
	Shield,
	Sun,
	VolumeX,
	Zap,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "../../components/ui/Button";
import type { caseStudies } from "../../data/case-studies";

// Route handled in main file - component only

const iconMap = {
	Zap,
	DollarSign,
	Shield,
	VolumeX,
	Sun,
};

interface CaseStudyDetailPageProps {
	study: (typeof caseStudies)[0];
}

export function CaseStudyDetailPage({ study }: CaseStudyDetailPageProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
	const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

	return (
		<div className="min-h-screen bg-[var(--white-warm)]" ref={containerRef}>
			{/* 1. Cinematic Hero */}
			<div className="relative h-[90vh] overflow-hidden">
				<motion.div
					style={{ y: heroY, opacity: heroOpacity }}
					className="absolute inset-0"
				>
					<img
						src={study.image}
						alt={study.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
				</motion.div>

				<div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white pb-32">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="max-w-5xl mx-auto w-full"
					>
						<div className="inline-flex items-center gap-3 mb-6 opacity-90">
							<span className="uppercase tracking-[0.2em] text-sm font-medium">
								{study.location}
							</span>
							<span className="w-1 h-1 bg-white rounded-full" />
							<span className="uppercase tracking-[0.2em] text-sm font-medium text-[var(--renoz-green)]">
								{study.systemSize}
							</span>
						</div>
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
							{study.title}
						</h1>
					</motion.div>
				</div>
			</div>

			{/* 2. The Narrative Body */}
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-32">
				{/* Intro Summary Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl mb-24"
				>
					<p className="text-2xl md:text-3xl font-medium leading-relaxed text-[var(--black)]">
						{study.summary}
					</p>
				</motion.div>

				{/* The Story: Frustration vs Relief */}
				<div className="space-y-24">
					<div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
						<div className="sticky top-32">
							<h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
								The Frustration
							</h2>
							<div className="h-0.5 w-12 bg-red-400/50" />
						</div>
						<div className="prose prose-lg text-[var(--text-muted)] text-xl leading-relaxed">
							<p>{study.story.challenge}</p>
						</div>
					</div>

					{/* Emotional Pull Quote */}
					<div className="relative py-12">
						<Quote className="absolute top-0 left-0 w-16 h-16 text-[var(--renoz-green)]/10 -translate-y-1/2 -translate-x-1/4" />
						<blockquote className="relative text-3xl md:text-5xl font-bold text-center leading-tight text-[var(--black)] italic">
							"{study.quote}"
						</blockquote>
					</div>

					<div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
						<div className="sticky top-32">
							<h2 className="text-sm font-bold uppercase tracking-widest text-[var(--renoz-green)] mb-2">
								The Relief
							</h2>
							<div className="h-0.5 w-12 bg-[var(--renoz-green)]" />
						</div>
						<div className="prose prose-lg text-[var(--text-muted)] text-xl leading-relaxed">
							<p>{study.story.solution}</p>
						</div>
					</div>
				</div>
			</div>

			{/* 3. The Value Grid */}
			<div className="bg-[var(--black)] text-white py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
						{study.results.map((result, i) => {
							const Icon = iconMap[result.icon as keyof typeof iconMap] || Zap;
							return (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.2 }}
									className="text-center pt-12 md:pt-0 px-4"
								>
									<Icon
										className="w-12 h-12 text-[var(--renoz-green)] mx-auto mb-6"
										strokeWidth={1.5}
									/>
									<div className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
										{result.value}
									</div>
									<div className="text-sm font-bold uppercase tracking-widest text-gray-500">
										{result.label}
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			{/* 4. Technical Footer & Next Steps */}
			<div className="bg-white py-24">
				<div className="max-w-3xl mx-auto px-4 text-center">
					<div className="inline-flex flex-col items-center mb-12">
						<div className="w-px h-16 bg-gray-200 mb-8" />
						<h3 className="text-xl font-bold text-[var(--black)] mb-4">
							Technical Configuration
						</h3>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
							{study.solution.map((item, i) => (
								<span
									key={i}
									className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100"
								>
									{item}
								</span>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-6">
						<h2 className="text-4xl font-bold">
							Ready for your own transformation?
						</h2>
						<div className="flex justify-center gap-4">
							<Button variant="outline" size="lg" to="/case-studies">
								<ArrowLeft className="mr-2 w-4 h-4" />
								All Stories
							</Button>
							<Button variant="primary" size="lg" to="/contact">
								Start Your Journey
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
// Export for lazy loading
