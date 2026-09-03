import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Lock, type LucideIcon, Network } from "lucide-react";
import { GuideRelatedStrip } from "../../components/guides/GuideRelatedStrip";
import { BentoFeatures } from "../../components/sections/BentoFeatures";
import { CommercialEconomics } from "../../components/sections/CommercialEconomics";
import { ProductHero } from "../../components/sections/ProductHero";
import { TechSpecs } from "../../components/sections/TechSpecs";
import { Button } from "../../components/ui/Button";
import { ImageAccordion } from "../../components/ui/ImageAccordion";
import { HC_125K_261_WARRANTY } from "../../data/documents";
import { GUIDE_LINK_SETS } from "../../data/guide-links";
import { HC_PLATFORM, PRODUCT_SEGMENTS } from "../../data/product-catalog";

import {
	breadcrumbSchema,
	canonicalLink,
	jsonLd,
	pageMeta,
	productSchema,
} from "../../lib/seo";

export const Route = createFileRoute("/products/commercial")({
	head: () => ({
		meta: [
			...pageMeta({
				title: "Commercial Battery Storage Perth | RENOZ Energy",
				description: PRODUCT_SEGMENTS.commercial.seoDescription,
				path: "/products/commercial",
				type: "product",
			}),
			{
				name: "keywords",
				content:
					"commercial battery storage Perth, industrial battery WA, business battery system, microgrid battery, RENOZ Energy commercial, lithium battery commercial Perth, energy storage business",
			},
		],
		links: [canonicalLink("/products/commercial")],
		scripts: [
			jsonLd(productSchema("commercial")),
			jsonLd(
				breadcrumbSchema("/products/commercial", {
					"/products": "Products",
					"/products/commercial": "Commercial Battery Storage",
				}),
			),
		],
	}),
	component: CommercialProductsPage,
});

const commercialApplications = [
	{
		id: "community",
		title: "Community Energy",
		description:
			"Support local grid stability in high-penetration solar zones. Manage voltage constraints and defer network upgrades.",
		image: "/images/stock/solar-microgrid-bess-drone-shot.webp",
	},
	{
		id: "mining",
		title: "Mining & Remote",
		description:
			"Displace expensive diesel generation in off-grid camps. Engineered for high-ambient temperatures and remote reliability.",
		image: "/images/stock/homestead-rural-2.webp",
	},
	{
		id: "agri",
		title: "Agri-Industrial",
		description:
			"Secure power for seasonal processing and cold storage. Manage peak demand charges without grid upgrades.",
		image: "/images/stock/shed-with-solar-wheat-field.webp",
	},
	{
		id: "c-and-i",
		title: "Commercial & Industrial",
		description:
			"Support nominated critical automation with a correctly engineered UPS and backup design. Transfer performance depends on the selected inverter, controls, protection, and load.",
		image: "/images/stock/winery-bess-1.webp",
	},
];

export function CommercialProductsPage() {
	return (
		<div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
			{/* 1. Immersive Hero Section */}
			<ProductHero
				title={
					<>
						Turn Energy into a <br />
						<span className="text-blue-500">Managed Asset.</span>
					</>
				}
				description="Energy is no longer a fixed cost—it's a market. Secure critical operations and arbitrage spot prices with an industrial BESS."
				badgeText="Industrial Grade Intelligence"
				badgeColor="bg-blue-500"
				imageSrc="/images/stock/solar-microgrid-bess-drone-shot.webp"
				primaryCtaText="Reduce Your Peak Demand Costs"
				primaryCtaLink="/contact?type=commercial"
				secondaryCtaText="Review commercial technical documents"
				secondaryCtaLink="/resources"
			/>

			{/* 2. The Manifesto - Financial Reality */}
			<div className="my-8 md:my-12 lg:my-16">
				<CommercialEconomics />
			</div>

			{/* 2.5 Accordion Application Section */}
			<section className="section-spacing px-4 max-w-7xl mx-auto">
				<ImageAccordion items={commercialApplications} />
			</section>

			<section className="py-16 bg-zinc-950 text-white">
				<div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
					<div>
						<p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
							Evidence Snapshot
						</p>
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
							{HC_PLATFORM.model} commercial storage.
						</h2>
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						{[
							["Scale", PRODUCT_SEGMENTS.commercial.capacityLabel],
							["Cabinet", HC_PLATFORM.ratingLabel],
							["Controls", "SCADA-ready and open protocol pathways"],
							["Evidence", "Capability statement and product warranty"],
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

			<section className="section-spacing px-4 max-w-7xl mx-auto">
				<div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm md:p-12">
					<div className="max-w-3xl">
						<p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
							Published product evidence
						</p>
						<h2 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
							{HC_PLATFORM.model} commercial BESS
						</h2>
						<p className="mt-4 text-lg leading-relaxed text-zinc-600">
							A liquid-cooled cabinet at {HC_PLATFORM.ratingLabel}. Parallel{" "}
							{HC_PLATFORM.cabinetMin}–{HC_PLATFORM.cabinetMax} cabinets to
							cover {PRODUCT_SEGMENTS.commercial.capacityLabel}. Review the
							product warranty for terms, performance limits, and conditions.
						</p>
					</div>
					<dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<div className="rounded-2xl bg-zinc-50 p-5">
							<dt className="text-xs font-bold uppercase tracking-widest text-zinc-500">
								Model
							</dt>
							<dd className="mt-2 font-semibold text-zinc-950">
								{HC_PLATFORM.model}
							</dd>
						</div>
						<div className="rounded-2xl bg-zinc-50 p-5">
							<dt className="text-xs font-bold uppercase tracking-widest text-zinc-500">
								Nominal rating
							</dt>
							<dd className="mt-2 font-semibold text-zinc-950">
								{HC_PLATFORM.ratingLabel}
							</dd>
						</div>
						<div className="rounded-2xl bg-zinc-50 p-5">
							<dt className="text-xs font-bold uppercase tracking-widest text-zinc-500">
								Initial usable energy
							</dt>
							<dd className="mt-2 font-semibold text-zinc-950">
								{HC_PLATFORM.initialUsableKwh} kWh
							</dd>
						</div>
						<div className="rounded-2xl bg-zinc-50 p-5">
							<dt className="text-xs font-bold uppercase tracking-widest text-zinc-500">
								Thermal and safety
							</dt>
							<dd className="mt-2 font-semibold text-zinc-950">
								Liquid cooling; integrated fire detection and suppression
							</dd>
						</div>
					</dl>
					<div className="mt-8 flex flex-wrap items-center gap-3">
						<a
							href={HC_125K_261_WARRANTY.filename}
							download
							className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--renoz-green)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--renoz-green-dark)]"
						>
							Read the {HC_PLATFORM.model} product warranty
						</a>
						<Button variant="outline" to="/partners/capability-statement">
							Capability statement
						</Button>
						<Button variant="link" to="/resources">
							Technical resources
						</Button>
					</div>
				</div>
			</section>

			{/* 3. Features Grid (Bento) */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: in-page hash target */}
			<BentoFeatures
				id="features"
				title="The Heavy Lifter."
				subtitle="Scalable, liquid-cooled energy storage for demanding industrial applications."
				features={[
					{
						title: "HC-125K Cabinet",
						description: `A liquid-cooled ${HC_PLATFORM.ratingLabel} BESS. Parallel ${HC_PLATFORM.cabinetMin} to ${HC_PLATFORM.cabinetMax} cabinets — ${PRODUCT_SEGMENTS.commercial.capacityLabel}.`,
						icon: BarChart3,
						className: "md:col-span-2",
						image:
							"/images/stock/long-exposure-homestead-night-lights-rural-2.webp",
					},
					{
						title: "Liquid Cooled",
						description:
							"Advanced thermal management ensures consistent cell temperature for maximum cycle life in harsh Australian heat.",
						icon: Lock,
						className: "md:col-span-1",
						image: "/images/stock/winery-bess-1.webp",
					},
					{
						title: "Open Protocol",
						description:
							"Native Modbus TCP/IP support. Integrates with your BMS or VPP out of the box.",
						icon: Network as LucideIcon,
						className: "md:col-span-1",
						image: "/images/stock/renoz-ccs.webp",
					},
					{
						title: "High Density Safety",
						description:
							"Integrated fire suppression and LiFePO4 cells pack more energy into less space.",
						icon: Lock,
						className: "md:col-span-2",
						image: "/images/products/commercial/cell-production-line.webp",
					},
				]}
			/>

			{/* 5. System Platform / Specs */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: in-page hash target */}
			<TechSpecs
				id="specs"
				title={HC_PLATFORM.model}
				description="High-density, liquid-cooled commercial BESS. One cabinet, or up to eight in parallel."
				specs={[
					{ label: "Nominal rating", value: HC_PLATFORM.ratingLabel },
					{
						label: "Scale",
						value: PRODUCT_SEGMENTS.commercial.capacityLabel,
						subtext: `${HC_PLATFORM.cabinetMin}–${HC_PLATFORM.cabinetMax} cabinets`,
					},
					{ label: "Thermal Mgmt", value: "Liquid Cooled" },
					{ label: "Chemistry", value: "LFP (LiFePO4)" },
					{ label: "Fire Safety", value: "Integrated Suppression" },
					{
						label: "Initial usable energy",
						value: `${HC_PLATFORM.initialUsableKwh} kWh`,
					},
				]}
			/>

			<div className="mx-auto max-w-7xl px-4 pb-8 text-center text-sm text-zinc-600">
				For project diligence, see the{" "}
				<Link
					to="/partners/capability-statement"
					className="font-semibold text-[var(--renoz-green-dark)] underline underline-offset-2"
				>
					capability statement
				</Link>{" "}
				and the{" "}
				<Link
					to="/resources"
					className="font-semibold text-[var(--renoz-green-dark)] underline underline-offset-2"
				>
					technical document pack
				</Link>
				.
			</div>
			<GuideRelatedStrip
				slugs={GUIDE_LINK_SETS.commercial}
				title="Commercial and grid-edge decision guides"
			/>

			{/* CTA */}
			<section className="section-spacing text-center bg-zinc-50">
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-6 text-zinc-900">
						Industrial Reliability. <br /> Grid Ready.
					</h2>
					<p className="text-zinc-500 mb-10 text-lg">
						Secure your operations with market-leading energy density and
						reliability.
					</p>
					<Button
						variant="primary"
						size="lg"
						to="/contact?type=commercial"
						className="rounded-full px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all bg-blue-700 hover:bg-blue-800 border-none"
					>
						Enquire Now
					</Button>
				</div>
			</section>
		</div>
	);
}
