import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Lock, type LucideIcon, Network } from "lucide-react";
import { BentoFeatures } from "../../components/sections/BentoFeatures";
import { CommercialEconomics } from "../../components/sections/CommercialEconomics";
import { ProductHero } from "../../components/sections/ProductHero";
import { TechSpecs } from "../../components/sections/TechSpecs";
import { Button } from "../../components/ui/Button";
import { ImageAccordion } from "../../components/ui/ImageAccordion";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/products/commercial")({
	head: () => ({
		meta: [
			{ title: "Commercial Battery Storage - RENOZ Energy" },
			{
				name: "description",
				content:
					"Commercial & industrial battery storage systems from 100kWh to multi-MW. Perth's own OEM battery systems for businesses, microgrids, and grid services.",
			},
			{
				name: "keywords",
				content:
					"commercial battery storage Perth, industrial battery WA, business battery system, microgrid battery, RENOZ Energy commercial, lithium battery commercial Perth, energy storage business",
			},
			{
				property: "og:title",
				content: "Commercial Battery Storage - RENOZ Energy",
			},
			{
				property: "og:description",
				content:
					"Commercial & industrial battery storage systems from 100kWh to multi-MW. Perth's own OEM battery systems for businesses and microgrids.",
			},
			{ property: "og:url", content: `${baseUrl}/products/commercial` },
			{ property: "og:type", content: "product" },
			{
				name: "twitter:title",
				content: "Commercial Battery Storage - RENOZ Energy",
			},
			{
				name: "twitter:description",
				content:
					"Commercial & industrial battery storage systems from 100kWh to multi-MW. Perth's own OEM battery systems for businesses.",
			},
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
			"Guarantee uptime for critical automation. Sub-10ms UPS protection against brownouts and grid disturbances.",
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
				primaryCtaLink="/contact"
				secondaryCtaText="View Datasheets"
				secondaryCtaLink="#"
			/>

			{/* 2. The Manifesto - Financial Reality */}
			<div className="my-8 md:my-12 lg:my-16">
				<CommercialEconomics />
			</div>

			{/* 2.5 Accordion Application Section */}
			<section className="pb-32 px-4 max-w-7xl mx-auto">
				<ImageAccordion items={commercialApplications} />
			</section>

			{/* 3. Features Grid (Bento) */}
			<BentoFeatures
				title="The Heavy Lifter."
				subtitle="Scalable, liquid-cooled energy storage for demanding industrial applications."
				features={[
					{
						title: "Giga-Series Container",
						description:
							"A fully integrated, liquid-cooled BESS in a standard 20ft ISO footprint. 2.1MWh - 5MWh capacity.",
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
							"Integrated fire suppression and Tier 1 LFP cells pack more energy into less space safely.",
						icon: Lock,
						className: "md:col-span-2",
						image: "/images/products/commercial/cell-production-line.webp",
					},
				]}
			/>

			{/* 5. System Platform / Specs */}
			<TechSpecs
				title="Palmer Giga-Series"
				description="High-density, liquid-cooled, containerised BESS."
				specs={[
					{ label: "System Capacity", value: "2.1 - 5MWh" },
					{ label: "Container", value: "20ft ISO" },
					{ label: "Thermal Mgmt", value: "Liquid Cooled" },
					{ label: "Compliance", value: "IP55 / C5" },
					{ label: "Chemistry", value: "LFP (Tier 1)" },
					{ label: "Fire Safety", value: "Integrated Suppression" },
				]}
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
						to="/contact"
						className="rounded-full px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all bg-blue-700 hover:bg-blue-800 border-none"
					>
						Enquire Now
					</Button>
				</div>
			</section>
		</div>
	);
}
