import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	ArrowRight,
	type LucideIcon,
	Shield,
	Thermometer,
	Zap,
} from "lucide-react";
import { GuideRelatedStrip } from "../../components/guides/GuideRelatedStrip";
import { InverterMarquee } from "../../components/InverterMarquee";
import { BentoFeatures } from "../../components/sections/BentoFeatures";
import { ProductHero } from "../../components/sections/ProductHero";
import { SolarEconomics } from "../../components/sections/SolarEconomics";
import { TechSpecs } from "../../components/sections/TechSpecs";
import { Button } from "../../components/ui/Button";
import MasonryGallery from "../../components/ui/MasonryGallery";
import { getCaseStudiesByType } from "../../data/case-study-images";
import { GUIDE_LINK_SETS } from "../../data/guide-links";
import { PRODUCT_SEGMENTS } from "../../data/product-catalog";
import {
	breadcrumbSchema,
	canonicalLink,
	jsonLd,
	pageMeta,
	productSchema,
} from "../../lib/seo";

export const Route = createFileRoute("/products/residential")({
	head: () => ({
		meta: [
			...pageMeta({
				title: "Home Battery Storage Perth | RENOZ Energy",
				description: PRODUCT_SEGMENTS.residential.seoDescription,
				path: "/products/residential",
				type: "product",
			}),
			{
				name: "keywords",
				content:
					"home battery storage Perth, residential battery WA, solar battery home, off-grid home battery, RENOZ Energy residential, lithium battery home Perth, energy storage residential",
			},
		],
		links: [canonicalLink("/products/residential")],
		scripts: [
			jsonLd(productSchema("residential")),
			jsonLd(
				breadcrumbSchema("/products/residential", {
					"/products": "Products",
					"/products/residential": "Residential Battery Storage",
				}),
			),
		],
	}),
	component: ResidentialProductsPage,
});

export function ResidentialProductsPage() {
	return (
		<div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
			{/* 1. Immersive Hero Section */}
			<ProductHero
				title={
					<>
						Genuine <br />
						<span className="text-[var(--renoz-green)]">Security.</span>
					</>
				}
				description="LiFePO4 home storage engineered for Australian conditions. Keep your lights on when the grid goes down."
				badgeText="Engineered in Western Australia"
				imageSrc="/images/stock/garage-renoz-1.webp"
				primaryCtaText="Get Your Savings Estimate"
				primaryCtaLink="/contact?type=homeowner"
				secondaryCtaText="Find Installer"
				secondaryCtaLink="/partners"
			/>

			{/* 2. The Problem: Solar Economics (Reused from Home) */}
			<div className="my-8 md:my-12 lg:my-16">
				<SolarEconomics />
			</div>

			{/* 3. Compatibility Carousel */}
			<div className="bg-white border-b border-gray-100 py-16 overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 mb-8 text-center">
					<p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
						Works with your preferred inverter
					</p>
				</div>
				<InverterMarquee />
			</div>

			{/* 4. The Solution: "Infrastructure" (Product Exhibit) */}
			<section className="section-spacing bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="order-2 lg:order-1 relative aspect-square bg-zinc-100 rounded-[48px] overflow-hidden group"
					>
						<img
							src="/images/products/RENOZ Energy Garage Render.webp"
							alt="RENOZ LV System in Garage"
							className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
						/>
					</motion.div>
					<div className="order-1 lg:order-2">
						<div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
							The Solution
						</div>
						<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
							Infrastructure, <br /> not Gadgets.
						</h3>
						<p className="text-xl text-zinc-500 leading-relaxed mb-8">
							Most batteries are built like consumer electronics—fragile,
							plastic, and prone to overheating.
						</p>
						<p className="text-xl text-zinc-500 leading-relaxed mb-8">
							We build <strong>energy infrastructure</strong>. Heavy-gauge steel
							enclosures. Thermally stable LFP chemistry. Operating ratings
							selected for Australian conditions. This is a durable home energy
							system.
						</p>
						<Button
							variant="outline"
							className="gap-2"
							to="/products/residential"
							hash="features"
						>
							Explore Features <ArrowRight className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</section>

			<section className="py-16 bg-zinc-950 text-white">
				<div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
					<div>
						<p className="text-xs font-bold uppercase tracking-widest text-[var(--renoz-green)] mb-4">
							Evidence Snapshot
						</p>
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
							Modular LV home storage.
						</h2>
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						{[
							[
								"Capacity",
								"5.12kWh modules in approved 8- or 10-module towers",
							],
							["Battery module", "5.12kWh LV-5KWH100AH base unit"],
							["Cycle evidence", ">80% retention after 6,000 cycles"],
							["Support", "Perth-based technical and installer pathway"],
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

			{/* 5. Features Grid (Bento) */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: in-page hash target */}
			<BentoFeatures
				id="features"
				title="Engineered for Reality."
				subtitle="Modular battery infrastructure engineered and designed in Perth for Australian conditions."
				features={[
					{
						title: "Thermally Stable Chemistry",
						description:
							"We use cobalt-free Lithium Iron Phosphate (LFP), a chemistry selected for thermal stability and long-cycle stationary storage.",
						icon: Shield,
						className: "md:col-span-2",
						image: "/images/products/RENOZ Energy LV Deconstructed.webp",
					},
					{
						title: "Plug-and-Play Scale",
						description:
							"Build from 5.12kWh modules in approved 8- or 10-module towers. Towers can be paralleled where the system design requires more capacity.",
						icon: Zap,
						className: "md:col-span-1",
						image: "/images/products/LV-Stackable-White.webp",
					},
					{
						title: "Rated to 55°C",
						description:
							"Most batteries derate at 40°C. Ours maintain performance up to 45°C and survive 55°C. Built for the Pilbara.",
						icon: Thermometer,
						className: "md:col-span-1",
						image: "/images/stock/coastal-home-storm-1.webp",
					},
					{
						title: "Local Support",
						description:
							"Headquartered in O'Connor, WA. Speak to the engineers who designed the system, not a call centre.",
						icon: Shield as LucideIcon, // Reusing shield icon for support
						className: "md:col-span-2",
						image: "/images/stock/renoz-ccs.webp",
					},
				]}
			/>

			{/* 6. Installation Gallery */}
			<section className="section-spacing bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<MasonryGallery
						title="Installation Gallery"
						showGoogleReviews
						images={getCaseStudiesByType("residential")}
					/>
				</div>
			</section>

			{/* 7. Technical Specifications (Moved to bottom) */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: in-page hash target */}
			<TechSpecs
				id="specs"
				specs={[
					{ label: "Nominal Voltage", value: "51.2 V" },
					{ label: "Usable Capacity", value: "4.61 kWh" },
					{
						label: "Modular configuration",
						value: "8 or 10 modules per tower",
						subtext: "Parallel towers subject to engineered system design",
					},
					{ label: "Max Charge/Discharge", value: "100 A (1C)" },
					{ label: "Depth of Discharge", value: "100%" },
					{ label: "Cycle Life", value: "6,000+ Cycles" },
					{ label: "Communication", value: "CAN / RS485" },
					{
						label: "Warranty",
						value: "10-Year Product Warranty",
						subtext: "Registration, conditions and exclusions apply",
					},
				]}
			/>

			<GuideRelatedStrip
				slugs={GUIDE_LINK_SETS.residential}
				title="Before you buy — rebates, comparisons, retrofits"
			/>

			{/* 8. Final CTA */}
			<section className="py-16 md:py-24 lg:py-32 text-center bg-zinc-50">
				<div className="max-w-2xl mx-auto px-4">
					<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-zinc-900">
						Ready to switch?
					</h2>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							variant="primary"
							size="lg"
							to="/contact?type=homeowner"
							className="rounded-full px-12 py-6 text-lg shadow-xl min-w-[200px]"
						>
							Request a Quote
						</Button>
						<Button
							variant="outline"
							size="lg"
							to="/partners"
							className="rounded-full px-12 py-6 text-lg min-w-[200px]"
						>
							Find Installer
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
