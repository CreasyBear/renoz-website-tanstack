import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Building2,
	CheckCircle2,
	HardHat,
	PhoneCall,
	Users,
	Warehouse,
	Zap,
} from "lucide-react";
import AccordionSteps from "../components/ui/AccordionSteps";
import { Button } from "../components/ui/Button";
import Image from "../components/ui/Image";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/partners")({
	head: () => ({
		meta: [
			{ title: "Partner with RENOZ - WA's Battery OEM" },
			{
				name: "description",
				content:
					"Installers, distributors, and project developers: Partner with Perth's own battery OEM for direct pricing, engineering support, and local stock.",
			},
			{
				property: "og:title",
				content: "Partner with RENOZ - WA's Battery OEM",
			},
			{
				property: "og:description",
				content:
					"Partner with Perth's battery OEM. Direct pricing, engineering access, and WA-based operations for energy professionals.",
			},
			{ property: "og:url", content: `${baseUrl}/partners` },
			{
				name: "twitter:title",
				content: "Partner with RENOZ - WA's Battery OEM",
			},
			{
				name: "twitter:description",
				content:
					"Installers, distributors, and project developers: Partner with Perth's own battery OEM.",
			},
		],
	}),
	component: PartnersPage,
});

const partnerTypes = [
	{
		icon: HardHat,
		title: "Installers",
		description:
			"Trade accounts, wholesale pricing, and direct technical support for certified electricians.",
		cta: "Apply for Trade Account",
		href: "/contact?type=installer",
	},
	{
		icon: Warehouse,
		title: "Distributors",
		description:
			"Carry our brand in your territory. Margin protection, marketing support, and co-branded materials.",
		cta: "Discuss Distribution",
		href: "/contact?type=distributor",
	},
	{
		icon: Building2,
		title: "Project Developers",
		description:
			"Commercial and utility-scale BESS projects. Engineering support, custom configurations, and EPC partnerships.",
		cta: "Discuss a Project",
		href: "/contact?type=developer",
	},
];

function PartnersPage() {
	return (
		<div className="min-h-screen bg-[var(--cream)] font-sans">
			{/* 1. Hero: Full Height & Impactful */}
			<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--black)] text-white">
				<motion.div
					className="absolute inset-0 z-0"
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 20, ease: "easeOut" }}
				>
					<Image
						src="/images/about/team-warehouse.webp"
						alt="RENOZ Team in Warehouse"
						className="w-full h-full object-cover opacity-30"
						width={1920}
						height={1080}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-[var(--black)]" />
				</motion.div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
						className="flex flex-col items-center"
					>
						{/* Badge */}
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--renoz-green)]/30 bg-[var(--renoz-green)]/10 backdrop-blur-md mb-8">
							<Users className="w-4 h-4 text-[var(--renoz-green)]" />
							<span className="text-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest">
								Trade Partner Program
							</span>
						</div>

						<h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-[0.9] text-white">
							Local Support. <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--renoz-green)] to-emerald-400">
								Global Standard.
							</span>
						</h1>

						<p className="text-xl md:text-2xl text-gray-300 mb-14 leading-relaxed max-w-3xl mx-auto font-light">
							We don't just stick a label on a box. We engineer and support
							batteries in Perth.{" "}
							<span className="text-white font-medium">
								Partner with the source
							</span>{" "}
							for direct access to WA's battery experts.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
							<Button
								variant="primary"
								size="lg"
								to="#partner-types"
								className="rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-[var(--renoz-green)]/20 transition-all hover:-translate-y-1"
							>
								Become a Partner
								<ArrowRight className="ml-2 w-5 h-5" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								to="/products"
								className="rounded-full px-10 py-6 text-lg bg-transparent text-white border-white/20 hover:bg-white hover:text-[var(--black)] backdrop-blur-sm"
							>
								View Range
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* 2. Partner Types & Values Combined (Condensed) */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: This ID is required for navigation anchoring */}
			<section id="partner-types" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--black)]">
							Choose Your Path
						</h2>
						<p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
							Whether you install, distribute, or develop, we're here to back
							you up with local stock and engineering support.
						</p>
					</div>

					{/* 3 Main Cards */}
					<div className="grid md:grid-cols-3 gap-6 mb-20">
						{partnerTypes.map((partner, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
							>
								<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[var(--renoz-green)]">
									<partner.icon className="w-6 h-6" strokeWidth={1.5} />
								</div>
								<h3 className="text-xl font-bold mb-3 text-[var(--black)]">
									{partner.title}
								</h3>
								<p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
									{partner.description}
								</p>
								<Link
									to={partner.href}
									className="inline-flex items-center text-[var(--renoz-green)] font-bold text-sm group-hover:underline"
								>
									{partner.cta}
									<ArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</motion.div>
						))}
					</div>

					{/* The "Why RENOZ" Compact Grid */}
					<div className="bg-[var(--black)] rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
						<div className="relative z-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
							<div className="space-y-4">
								<div className="inline-flex p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-sm">
									<PhoneCall className="w-6 h-6 text-[var(--renoz-green)]" />
								</div>
								<h3 className="text-xl font-bold">Real Support.</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									We're in O'Connor, not overseas. Talk directly to the
									engineers who designed the system.
								</p>
							</div>
							<div className="space-y-4">
								<div className="inline-flex p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-sm">
									<Warehouse className="w-6 h-6 text-[var(--renoz-green)]" />
								</div>
								<h3 className="text-xl font-bold">Local Stock.</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									We hold significant inventory in WA. No waiting for
									containers. Instant warranty swaps.
								</p>
							</div>
							<div className="space-y-4">
								<div className="inline-flex p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-sm">
									<Users className="w-6 h-6 text-[var(--renoz-green)]" />
								</div>
								<h3 className="text-xl font-bold">Partnership First.</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									We design & support. You install. We pass leads to our network
									and never compete with you.
								</p>
							</div>
						</div>
						{/* Background visual */}
						<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--renoz-green)]/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
					</div>
				</div>
			</section>

			{/* 5. Process: Simple Accordion */}
			<section className="py-32 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--black)]">
							How we work together
						</h2>
						<p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
							Simple onboarding. No hoops to jump through. Just verify your
							credentials and start installing.
						</p>
					</div>

					<AccordionSteps
						title=""
						steps={[
							{
								title: "Submit an Enquiry",
								content:
									"Fill out the form below or pick up the phone. Let us know what you do—install solar, distribute hardware, or develop projects.",
								image: "/images/stock/renoz-stacking.webp",
							},
							{
								title: "Visit our Facility",
								content:
									"Come down to O'Connor. Meet the team, see the stock on the floor, and get hands-on with the product before you commit.",
								image: "/images/about/unpacking-container.webp",
							},
							{
								title: "Find a Solution",
								content:
									"We'll set you up with the right commercial framework. Whether it's wholesale pricing, distribution territory, or project specs.",
								image: "/images/case-studies/Harvey-35kWh.webp",
							},
						]}
					/>
				</div>
			</section>

			{/* 3. Specs & Commercial (Merged & Simplified) */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left: Specs */}
						<div>
							<div className="text-[var(--renoz-green)] font-bold tracking-widest uppercase mb-4 text-xs">
								Technical Specs
							</div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--black)] leading-tight">
								Engineered for <br />
								Easy Installation.
							</h2>
							<ul className="space-y-4 mb-8">
								{[
									"Free Standing - No Wall Mount Required",
									"Solid Brass M8 Terminals (No proprietary connectors)",
									"Native CAN/RS485 for your preferred inverter",
									"Designed with caster wheels for smooth, easy positioning",
									"100A Continuous Discharge",
								].map((feature, i) => (
									<li key={i} className="flex items-center gap-3">
										<CheckCircle2 className="w-5 h-5 text-[var(--renoz-green)]" />
										<span className="text-gray-600 font-medium">{feature}</span>
									</li>
								))}
							</ul>
							<div className="grid grid-cols-3 gap-4">
								<div className="bg-white p-4 rounded-2xl shadow-sm text-center">
									<div className="text-2xl font-bold text-[var(--black)]">
										51.2V
									</div>
									<div className="text-[10px] uppercase text-gray-400 font-bold">
										Nominal
									</div>
								</div>
								<div className="bg-white p-4 rounded-2xl shadow-sm text-center">
									<div className="text-2xl font-bold text-[var(--black)]">
										5.12<span className="text-sm">kWh</span>
									</div>
									<div className="text-[10px] uppercase text-gray-400 font-bold">
										Capacity
									</div>
								</div>
								<div className="bg-white p-4 rounded-2xl shadow-sm text-center">
									<div className="text-2xl font-bold text-[var(--black)]">
										6000+
									</div>
									<div className="text-[10px] uppercase text-gray-400 font-bold">
										Cycles
									</div>
								</div>
							</div>
						</div>

						{/* Right: Commercial Teaser */}
						<div className="relative group rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-lg">
							<Image
								src="/images/case-studies/Simon-Oeij-HV60kWh.webp"
								alt="Commercial Installation"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
							<div className="absolute bottom-0 left-0 p-8 w-full">
								<div className="inline-flex items-center gap-2 text-[var(--renoz-green)] font-bold uppercase tracking-widest text-xs mb-2">
									<Zap className="w-4 h-4" />
									Commercial Grade
								</div>
								<h3 className="text-2xl font-bold text-white mb-4">
									Need HV Solutions?
								</h3>
								<p className="text-gray-300 text-sm mb-6 max-w-md">
									We scale from residential 5kWh to megawatt commercial systems.
									Access our HV range for larger clients.
								</p>
								<Button
									variant="outline"
									size="sm"
									to="/products/commercial"
									className="rounded-full border-white text-white hover:bg-white hover:text-black"
								>
									View Commercial
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 4. Final CTA (Simple) */}
			<section className="py-24 text-center bg-white">
				<div className="max-w-xl mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--black)]">
						Ready to partner?
					</h2>
					<p className="text-[var(--text-muted)] mb-8 text-lg">
						Join the network of WA energy professionals building local
						capability.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							variant="primary"
							size="lg"
							to="/contact?type=installer"
							className="rounded-full px-8 py-4 shadow-lg hover:-translate-y-1 transition-transform"
						>
							Apply for Account
						</Button>
						<Button
							variant="outline"
							size="lg"
							to="/contact?type=distributor"
							className="rounded-full px-8 py-4"
						>
							Distribution
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
