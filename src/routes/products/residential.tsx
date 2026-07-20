import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	ArrowRight,
	type LucideIcon,
	Shield,
	Thermometer,
	Zap,
} from "lucide-react";
import { InverterMarquee } from "../../components/InverterMarquee";
import { BentoFeatures } from "../../components/sections/BentoFeatures";
import { ProductHero } from "../../components/sections/ProductHero";
import { SolarEconomics } from "../../components/sections/SolarEconomics";
import { TechSpecs } from "../../components/sections/TechSpecs";
import { Button } from "../../components/ui/Button";
import MasonryGallery from "../../components/ui/MasonryGallery";
import { getCaseStudiesByType } from "../../data/case-study-images";
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
				title: "Residential Battery Storage - RENOZ Energy",
				description:
					"Home battery storage systems from 10-50kWh. Store solar power at 30c/kWh instead of selling for 5c/kWh. Perth's own OEM battery systems for Western Australian homes.",
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
				description="The safest, most reliable energy storage for your home. Keep your lights on when the grid goes down."
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
							enclosures. LFP chemistry that doesn't catch fire. Thermal ratings
							for the Pilbara. This is a vault for your energy.
						</p>
						<Button variant="outline" className="gap-2">
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
							Home storage claims with sourceable facts.
						</h2>
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						{[
							["Capacity", "10-50kWh modular residential pathway"],
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
			<BentoFeatures
				title="Engineered for Reality."
				subtitle="We don't build gadgets. We build infrastructure designed to last 15+ years in Australian conditions."
				features={[
					{
						title: "Non-Volatile Chemistry",
						description:
							"We use Lithium Iron Phosphate (LFP) - the safest and most stable lithium technology available. 0% Cobalt, 0% Fire Risk.",
						icon: Shield,
						className: "md:col-span-2",
						image: "/images/products/RENOZ Energy LV Deconstructed.webp",
					},
					{
						title: "Plug-and-Play Scale",
						description:
							"Start with 5kWh and stack up to 40kWh. No rewind required.",
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
						showRating={true}
						images={getCaseStudiesByType("residential")}
					/>
				</div>
			</section>

			{/* 7. Technical Specifications (Moved to bottom) */}
			<TechSpecs
				specs={[
					{ label: "Nominal Voltage", value: "51.2 V" },
					{ label: "Usable Capacity", value: "4.61 kWh" },
					{ label: "Stackable up to", value: "80 kWh" },
					{ label: "Max Charge/Discharge", value: "100 A (1C)" },
					{ label: "Depth of Discharge", value: "100%" },
					{ label: "Cycle Life", value: "6,000+ Cycles" },
					{ label: "Communication", value: "CAN / RS485" },
					{
						label: "Warranty",
						value: "10 Years",
						subtext: ">80% retention after 6,000 cycles",
					},
				]}
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
					<p className="mt-8 text-zinc-500 text-sm leading-relaxed">
						Still deciding? See the{" "}
						<Link
							to="/guides/wa-battery-rebates-cec"
							className="text-[var(--renoz-green)] font-medium underline underline-offset-2 hover:text-zinc-900"
						>
							WA rebate &amp; CEC checklist
						</Link>{" "}
						or{" "}
						<Link
							to="/guides/renoz-vs-powerwall-sigenergy"
							className="text-[var(--renoz-green)] font-medium underline underline-offset-2 hover:text-zinc-900"
						>
							RENOZ vs Powerwall vs Sigenergy
						</Link>
						.
					</p>
				</div>
			</section>
		</div>
	);
}
