import { createLazyFileRoute } from "@tanstack/react-router";
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

export const Route = createLazyFileRoute("/case-studies/$slug")({
	component: CaseStudyDetailPage,
});

const iconMap = {
	Zap,
	DollarSign,
	Shield,
	VolumeX,
	Sun,
};

function CaseStudyDetailPage() {
	const { study } = Route.useLoaderData();
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
			<div className="relative h-screen overflow-hidden">
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

				<div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 text-white pb-24 md:pb-32">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="max-w-5xl mx-auto w-full"
					>
						<div className="inline-flex items-center gap-3 mb-6 opacity-90">
							<span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
								{study.location}
							</span>
							<span className="w-1 h-1 bg-white rounded-full" />
							<span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-[var(--renoz-green)]">
								{study.systemSize}
							</span>
						</div>
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
							{study.title}
						</h1>
					</motion.div>
				</div>
			</div>

			{/* 2. The Narrative Body */}
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20 relative z-10 pb-16 md:pb-32">
				{/* Intro Summary Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="bg-white p-6 md:p-12 rounded-[24px] md:rounded-[32px] shadow-2xl mb-16 md:mb-24"
				>
					<p className="text-xl md:text-2xl font-medium leading-relaxed text-[var(--black)]">
						{study.summary}
					</p>
				</motion.div>

				{/* The Story: Frustration vs Relief */}
				<div className="space-y-16 md:space-y-24">
					<div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-start">
						<div className="md:sticky md:top-32">
							<h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
								The Frustration
							</h2>
							<div className="h-0.5 w-12 bg-red-400/50" />
						</div>
						<div className="prose prose-lg text-zinc-600 text-lg leading-relaxed">
							<p>{study.story.challenge}</p>
						</div>
					</div>

					{/* Emotional Pull Quote */}
					<div className="relative py-8 md:py-12">
						<Quote className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 text-[var(--renoz-green)]/10 -translate-y-1/2 -translate-x-1/4" />
						<blockquote className="relative text-2xl md:text-4xl font-medium text-center leading-tight text-[var(--black)] italic px-4">
							"{study.quote}"
						</blockquote>
					</div>

					<div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-start">
						<div className="md:sticky md:top-32">
							<h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--renoz-green)] mb-2">
								The Relief
							</h2>
							<div className="h-0.5 w-12 bg-[var(--renoz-green)]" />
						</div>
						<div className="prose prose-lg text-zinc-600 text-lg leading-relaxed">
							<p>{study.story.solution}</p>
						</div>
					</div>
				</div>
			</div>

			{/* 3. The Value Grid */}
			<div className="bg-[var(--black)] text-white section-spacing">
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
									<div className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">
										{result.value}
									</div>
									<div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
										{result.label}
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			{/* 4. Technical Footer & Next Steps */}
			<div className="bg-white section-spacing">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
						{/* Tech Config Card */}
						<div className="bg-[var(--cream)] rounded-[32px] p-8 md:p-12">
							<h3 className="text-2xl font-semibold tracking-tight text-[var(--black)] mb-8 flex items-center gap-3">
								<span className="w-2 h-8 bg-[var(--renoz-green)] rounded-full" />
								System Configuration
							</h3>
							<ul className="space-y-6">
								{study.solution.map((item, i) => (
									<li
										key={i}
										className="flex items-start gap-4 text-lg text-zinc-700 font-normal"
									>
										<div className="mt-1 w-6 h-6 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center shrink-0">
											<div className="w-2 h-2 rounded-full bg-[var(--renoz-green)]" />
										</div>
										<span className="leading-tight">{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* CTA Side */}
						<div className="text-center lg:text-left">
							<h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
								Ready for your own <br />
								<span className="text-[var(--renoz-green)]">
									transformation?
								</span>
							</h2>
							<p className="text-lg text-zinc-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
								Whether it's a farm, a home, or a commercial site, we engineer
								systems that solve real problems.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
		</div>
	);
}
// Export for lazy loading
