import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MapPin, Zap } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { caseStudies } from "../../data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
	loader: ({ params }) => {
		const study = caseStudies.find((s) => s.slug === params.slug);
		if (!study) {
			throw notFound();
		}
		return { study };
	},
	component: CaseStudyDetailPage,
});

function CaseStudyDetailPage() {
	const { study } = Route.useLoaderData();

	return (
		<div className="min-h-screen bg-white">
			{/* Hero */}
			<div className="relative h-[60vh] min-h-[500px] overflow-hidden">
				<div className="absolute inset-0">
					<img
						src={study.image}
						alt={study.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
				</div>

				<div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white z-10">
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="flex flex-wrap gap-4 mb-6">
								<span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--renoz-green)] text-white text-sm font-bold shadow-lg">
									<Zap className="w-4 h-4 mr-2" />
									{study.systemSize} System
								</span>
								<span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold border border-white/20">
									<MapPin className="w-4 h-4 mr-2" />
									{study.location}
								</span>
							</div>
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
								{study.title}
							</h1>
						</motion.div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid lg:grid-cols-12 gap-12">
					{/* Main Content */}
					<div className="lg:col-span-8">
						<div className="prose prose-lg max-w-none text-[var(--text-muted)]">
							<h2 className="text-3xl font-bold text-[var(--black)] mb-6">
								Overview
							</h2>
							<p className="mb-12 leading-relaxed text-xl">
								{study.description}
							</p>

							<div className="grid md:grid-cols-2 gap-8 mb-12">
								<div className="bg-red-50 p-8 rounded-2xl border border-red-100">
									<h3 className="text-xl font-bold text-red-900 mb-4">
										The Challenge
									</h3>
									<ul className="space-y-3">
										{study.challenges.map((item: string, i: number) => (
											<li
												key={i}
												className="flex items-start gap-3 text-red-800/80"
											>
												<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</div>

								<div className="bg-green-50 p-8 rounded-2xl border border-green-100">
									<h3 className="text-xl font-bold text-green-900 mb-4">
										The Solution
									</h3>
									<ul className="space-y-3">
										{study.solution.map((item: string, i: number) => (
											<li
												key={i}
												className="flex items-start gap-3 text-green-800/80"
											>
												<CheckCircle2 className="w-5 h-5 text-[var(--renoz-green)] shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>

							<h2 className="text-3xl font-bold text-[var(--black)] mb-6">
								Outcome
							</h2>
							<p className="leading-relaxed mb-12">{study.outcome}</p>
						</div>

						<Button variant="outline" to="/case-studies" className="mt-8">
							<ArrowLeft className="mr-2 w-4 h-4" />
							Back to Case Studies
						</Button>
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-4 space-y-8">
						<div className="bg-[var(--cream)] p-8 rounded-[24px]">
							<h3 className="text-xl font-bold mb-6">Project Details</h3>
							<div className="space-y-4">
								<div className="flex justify-between py-3 border-b border-gray-200">
									<span className="text-gray-500">Date Completed</span>
									<span className="font-medium">{study.date}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-200">
									<span className="text-gray-500">System Type</span>
									<span className="font-medium">Off-Grid / Hybrid</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-200">
									<span className="text-gray-500">Battery Chemistry</span>
									<span className="font-medium">LiFePO4</span>
								</div>
							</div>
						</div>

						<div className="bg-[var(--black)] text-white p-8 rounded-[24px]">
							<h3 className="text-xl font-bold mb-4">
								Need a similar solution?
							</h3>
							<p className="text-gray-400 mb-6">
								Our engineering team can design a system to meet your specific
								requirements.
							</p>
							<Button
								variant="primary"
								to="/contact"
								className="w-full justify-center"
							>
								Get a Quote
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
