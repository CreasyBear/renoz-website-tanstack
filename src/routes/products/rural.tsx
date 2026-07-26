import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Fan, type LucideIcon, Network, Sun } from "lucide-react";
import { GuideRelatedStrip } from "../../components/guides/GuideRelatedStrip";
import { BentoFeatures } from "../../components/sections/BentoFeatures";
import { OffGridEconomics } from "../../components/sections/OffGridEconomics";
import { ProductHero } from "../../components/sections/ProductHero";
import { TechSpecs } from "../../components/sections/TechSpecs";
import { Button } from "../../components/ui/Button";
import { GUIDE_LINK_SETS } from "../../data/guides";
import {
	breadcrumbSchema,
	canonicalLink,
	jsonLd,
	pageMeta,
	productSchema,
} from "../../lib/seo";

export const Route = createFileRoute("/products/rural")({
	head: () => ({
		meta: [
			...pageMeta({
				title: "Rural Battery Storage - RENOZ Energy",
				description:
					"Rural & off-grid battery storage systems from 50-200kWh+. Engineered for harsh Australian conditions. Perth's own OEM battery systems for farms and remote properties.",
				path: "/products/rural",
				type: "product",
			}),
			{
				name: "keywords",
				content:
					"rural battery storage Perth, off-grid battery WA, farm battery system, remote property battery, RENOZ Energy rural, lithium battery rural Perth, energy storage farm",
			},
		],
		links: [canonicalLink("/products/rural")],
		scripts: [
			jsonLd(productSchema("rural")),
			jsonLd(
				breadcrumbSchema("/products/rural", {
					"/products": "Products",
					"/products/rural": "Rural Battery Storage",
				}),
			),
		],
	}),
	component: RuralProductsPage,
});

function RuralProductsPage() {
	return (
		<div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
			{/* 1. Immersive Hero Section */}
			<ProductHero
				title={
					<>
						Silence the <br />
						<span className="text-orange-500 drop-shadow-md">Generator.</span>
					</>
				}
				description="Battery systems for properties at the grid edge, designed to reduce generator use and support high-surge agricultural loads."
				badgeText="Rural Series (50-100kWh+)"
				badgeColor="bg-orange-500"
				imageSrc="/images/stock/homestead-rural.webp"
				primaryCtaText="Power Your Farm Independently"
				primaryCtaLink="/contact?type=commercial"
				secondaryCtaText="Talk to an Expert"
				secondaryCtaLink="/contact?type=consultation"
			/>

			{/* 2. The Problem: Diesel Economics */}
			<div className="my-8 md:my-12 lg:my-16">
				<OffGridEconomics />
			</div>

			{/* 3. The Solution: "Reliable Off-Grid Power" (Product Exhibit) */}
			<section className="pt-36 pb-24 bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="order-2 lg:order-1 relative aspect-square bg-zinc-100 rounded-[48px] overflow-hidden group"
					>
						<img
							src="/images/stock/homestead-rural-2.webp"
							alt="RENOZ Rural System Context"
							className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
						/>
					</motion.div>
					<div className="order-1 lg:order-2">
						<div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
							The Solution
						</div>
						<h3 className="text-4xl md:text-5xl font-bold mb-6">
							Reliable Hybrid <br /> Power.
						</h3>
						<p className="text-xl text-zinc-500 leading-relaxed mb-8">
							We combine advanced Solar, Battery storage, and automated
							generator backup into one coordinated system.
						</p>
						<p className="text-xl text-zinc-500 leading-relaxed mb-8">
							Your property runs on clean, silent solar power for the majority
							of the year. Our intelligent Deye inverters automatically manage
							your generator, running it only when absolutely necessary to top
							up the system.
						</p>
						<Button variant="outline" className="gap-2">
							See How It Works <ArrowRight className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</section>

			<section className="py-16 bg-zinc-950 text-white">
				<div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
					<div>
						<p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
							Evidence Snapshot
						</p>
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
							Off-grid power evidence, not brochure promises.
						</h2>
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						{[
							["Application", "Farms, stations, sheds, pumps, remote homes"],
							["System range", "Typical 50-200kWh rural projects"],
							["Hybrid pathway", "Solar, battery, inverter, generator control"],
							["Proof", "Harvey and Bally Bally case studies"],
						].map(([label, value]) => (
							<div
								key={label}
								className="rounded-2xl bg-white/10 border border-white/10 p-5"
							>
								<div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
									{label}
								</div>
								<div className="font-semibold leading-snug">{value}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 4. Features Grid (Bento) */}
			<BentoFeatures
				title="Built for the Bush."
				subtitle="Engineered to handle the unique demands of regional properties."
				features={[
					{
						title: "High Surge Capacity",
						description:
							"Designed to handle the startup kick of irrigation pumps, machinery, and workshop tools without tripping.",
						icon: Sun,
						className: "md:col-span-2",
						image: "/images/stock/shed-with-solar-wheat-field.webp",
					},
					{
						title: "Dust & Weather Sealed",
						description:
							"IP65 rated enclosure protects critical electronics from red dirt, moisture, and environmental elements.",
						icon: Fan,
						className: "md:col-span-1",
						image:
							"/images/stock/long-exposure-homestead-night-lights-rural-2.webp",
					},
					{
						title: "Fringe-of-Grid Ready",
						description:
							"Stabilize weak SWER lines or go completely off-grid. You decide how independent you want to be.",
						icon: Network as LucideIcon,
						className: "md:col-span-1",
						image: "/images/stock/shed-with-solar-wheat-field-2.webp",
					},
					{
						title: "Smart Management",
						description:
							"Intelligent load management handles everything automatically. Monitor your system from your phone.",
						icon: Network as LucideIcon, // Reusing icon
						className: "md:col-span-2",
						image: "/images/stock/wheat-field.webp",
					},
				]}
			/>

			{/* 5. Technical Specifications */}
			<TechSpecs
				title="Rural Series Stats"
				description="Heavy-duty systems for heavy-duty requirements."
				specs={[
					{ label: "Energy Capacity", value: "50 - 200 kWh+" },
					{ label: "Output", value: "Three Phase (400V)" },
					{ label: "Generator Support", value: "Auto-Start / Dry Contact" },
					{ label: "Operating Temp", value: "-10°C to 55°C" },
					{ label: "Enclosure", value: "IP65 Weatherproof" },
					{ label: "Warranty", value: "10-Year Product Warranty" },
				]}
				// Removed generic download link
			/>

			<GuideRelatedStrip
				slugs={GUIDE_LINK_SETS.rural}
				title="Farm & off-grid decision guides"
			/>
			<GuideRelatedStrip
				slugs={GUIDE_LINK_SETS.regional}
				title="WA regional off-grid guides"
			/>

			{/* CTA */}
			<section className="section-spacing text-center bg-zinc-50">
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-6 text-zinc-900">
						Calculate your diesel savings
					</h2>
					<p className="text-zinc-500 mb-10 text-lg">
						Our team can model your exact ROI based on your current diesel
						consumption.
					</p>
					<Button
						variant="primary"
						size="lg"
						to="/contact?type=commercial"
						className="rounded-full px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all bg-orange-600 hover:bg-orange-700 border-none"
					>
						Get a Quote
					</Button>
					<p className="mt-8 text-zinc-500 text-sm leading-relaxed">
						Planning a diesel cutover? Read{" "}
						<Link
							to="/guides/$slug"
							params={{ slug: "diesel-to-battery-wa-farms" }}
							className="text-[var(--renoz-green)] font-medium underline underline-offset-2 hover:text-zinc-900"
						>
							diesel to battery on WA farms
						</Link>{" "}
						or the{" "}
						<Link
							to="/guides/$slug"
							params={{ slug: "renoz-with-victron" }}
							className="text-[var(--renoz-green)] font-medium underline underline-offset-2 hover:text-zinc-900"
						>
							RENOZ + Victron pairing guide
						</Link>
						.
					</p>
				</div>
			</section>
		</div>
	);
}
