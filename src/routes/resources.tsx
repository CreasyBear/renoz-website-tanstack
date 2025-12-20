import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, FileText, Search, Shield } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import Card from "../components/ui/Card";
import { documents } from "../data/documents";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/resources")({
	head: () => ({
		meta: [
			{ title: "Resources - RENOZ Energy" },
			{
				name: "description",
				content:
					"Access technical specifications, installation guides, warranty documentation, and datasheets for all RENOZ battery systems.",
			},
			{ property: "og:title", content: "Resources - RENOZ Energy" },
			{
				property: "og:description",
				content:
					"Access technical specifications, installation guides, warranty documentation, and datasheets for all RENOZ battery systems.",
			},
			{ property: "og:url", content: `${baseUrl}/resources` },
			{ name: "twitter:title", content: "Resources - RENOZ Energy" },
			{
				name: "twitter:description",
				content:
					"Access technical specifications, installation guides, warranty documentation, and datasheets for all RENOZ battery systems.",
			},
		],
	}),
	component: ResourcesPage,
});

function ResourcesPage() {
	const [filter, setFilter] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const categories = [
		"All",
		"Datasheet",
		"Manual",
		"Warranty",
		"Guide",
		"Declaration",
		"Technical",
	];

	const filteredDocs = documents.filter((doc) => {
		const matchesCategory = filter === "All" || doc.category === filter;
		const matchesSearch =
			doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			doc.category.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<div className="min-h-screen bg-[var(--cream)]">
			{/* Hero */}
			<section className="bg-[var(--black)] text-white pt-32 pb-24 rounded-b-[40px] shadow-lg mb-16 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-[var(--renoz-green)]/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />

				<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Resource Centre
					</h1>
					<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
						Access technical specifications, installation guides, and warranty
						documentation for all RENOZ systems.
					</p>

					{/* Search Bar */}
					<div className="relative max-w-xl mx-auto">
						<input
							type="text"
							placeholder="Search documents..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-12 pr-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-white focus:outline-none transition-all backdrop-blur-md"
						/>
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
					</div>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
				{/* Filter Bar */}
				<div className="flex flex-wrap justify-center gap-2 mb-12">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setFilter(cat)}
							className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
								filter === cat
									? "bg-[var(--renoz-green)] text-white shadow-lg"
									: "bg-white text-gray-500 hover:bg-gray-100 hover:text-black"
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Document Grid */}
				{filteredDocs.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredDocs.map((doc) => (
							<Card
								key={doc.id}
								hover
								className="flex flex-col h-full bg-white border-none shadow-sm hover:shadow-md transition-all duration-300"
							>
								<div className="flex items-start justify-between mb-4">
									<div
										className={`p-3 rounded-xl ${
											doc.category === "Warranty"
												? "bg-amber-50 text-amber-600"
												: doc.category === "Manual"
													? "bg-purple-50 text-purple-600"
													: "bg-blue-50 text-blue-600"
										}`}
									>
										<FileText className="w-6 h-6" />
									</div>
									<span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">
										{doc.category}
									</span>
								</div>

								<h3 className="font-bold text-lg mb-2 flex-grow text-[var(--black)] leading-snug">
									{doc.title}
								</h3>

								<div className="text-sm text-gray-400 mb-6 flex justify-between items-center border-t border-gray-50 pt-4 mt-2 w-full">
									<span>{doc.date}</span>
									<span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">
										{doc.size}
									</span>
								</div>

								<a
									href={doc.filename}
									download
									className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:border-[var(--renoz-green)] hover:text-[var(--renoz-green)] hover:bg-[var(--renoz-green)]/5 transition-all group"
								>
									<Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
									Download PDF
								</a>
							</Card>
						))}
					</div>
				) : (
					<div className="text-center py-20">
						<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
							<Search className="w-8 h-8" />
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-2">
							No documents found
						</h3>
						<p className="text-gray-500">
							Try adjusting your search or filter.
						</p>
						<button
							onClick={() => {
								setFilter("All");
								setSearchQuery("");
							}}
							className="mt-4 text-[var(--renoz-green)] font-bold hover:underline"
						>
							Clear filters
						</button>
					</div>
				)}

				{/* Warranty Registration CTA */}
				<div className="mt-20 bg-gradient-to-br from-[var(--black)] to-[#2d2d2d] text-white rounded-[32px] p-12 md:p-16 shadow-2xl relative overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

					<div className="relative z-10 max-w-2xl mx-auto text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--renoz-green)]/20 border border-[var(--renoz-green)]/30 mb-6">
							<Shield className="w-8 h-8 text-[var(--renoz-green)]" />
						</div>

						<h2 className="text-3xl font-bold mb-4">Activate Your Warranty</h2>
						<p className="text-lg text-gray-300 mb-8 leading-relaxed">
							Register your RENOZ system to activate your 10-year replacement
							warranty. Quick and easy online registration.
						</p>

						<Button
							variant="primary"
							size="lg"
							to="/warranty"
							className="rounded-full px-8 shadow-glow"
						>
							Register Now
							<ArrowRight className="ml-2 w-5 h-5" />
						</Button>
					</div>
				</div>

				{/* Support CTA */}
				<div className="mt-8 text-center bg-white rounded-[32px] p-12 border border-gray-100 shadow-soft">
					<h2 className="text-2xl font-bold mb-4">
						Can't find what you're looking for?
					</h2>
					<p className="text-gray-500 mb-8">
						Our engineering team can provide specific drawings and compliance
						documents upon request.
					</p>
					<div className="flex justify-center gap-4">
						<a
							href="mailto:support@renoz.energy"
							className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--black)] font-bold rounded-full transition-colors"
						>
							Email Support
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
