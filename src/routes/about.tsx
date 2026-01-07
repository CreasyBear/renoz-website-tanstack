import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
	Atom,
	Award,
	Check,
	Handshake,
	Quote,
	Shield,
	Thermometer,
	Truck,
	Users,
	X,
	Zap,
} from "lucide-react";
import { useState } from "react";
import Card from "../components/ui/Card";

import VerticalTimeline from "../components/ui/VerticalTimeline";
import { YouTubeEmbed } from "../components/ui/YouTubeEmbed";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About RENOZ Energy - Perth Battery OEM" },
			{
				name: "description",
				content:
					"Perth-based OEM building Western Australia's battery capability. Learn about our mission, team, and plans for future local manufacturing.",
			},
			{
				property: "og:title",
				content: "About RENOZ Energy - Perth Battery OEM",
			},
			{
				property: "og:description",
				content:
					"Perth-based OEM building Western Australia's battery capability. Learn about our mission, team, and plans for future local manufacturing.",
			},
			{ property: "og:url", content: `${baseUrl}/about` },
			{
				name: "twitter:title",
				content: "About RENOZ Energy - Perth Battery OEM",
			},
			{
				name: "twitter:description",
				content:
					"Perth-based OEM manufacturer building Western Australia's battery capability.",
			},
		],
	}),
	component: AboutPage,
});

function AboutPage() {
	interface TeamMember {
		name: string;
		role: string;
		image: string;
		bio: string;
	}

	const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

	const teamMembers: TeamMember[] = [
		{
			name: "Simon Chan",
			role: "Chief Executive Officer",
			image: "/images/team/simon-c.webp",
			bio: 'Simon Chan, a distinguished electrical engineer from UWA (1985), has dedicated his career to innovation in electronics and renewable energy. As a pivotal figure at GenZ Energy and co-founder of PowerPlus Energy, he successfully bootstrapped two Australian-made lithium battery companies. Now as RENOZ Energy CEO, Simon is developing high-reliability "Software Defined Batteries" in partnership with Oxford University spinout Brill Power.',
		},
		{
			name: "Jack Spencer-Cotton",
			role: "Managing Director",
			image: "/images/team/jack-sc.webp",
			bio: "Jack is the managing director of RENOZ Energy and a non-executive director of One International Group Limited. With over 20 years of engineering experience, he has held senior roles in international manufacturing companies and founded his own electronics engineering consultancy. His expertise spans automation engineering, project planning, and managing large-scale projects, having previously served in senior engineering positions at ERG Group Ltd, Sanmina-SCI Corporation, SRX Global, and Pfizer Australia.",
		},
		{
			name: "Joel Chan",
			role: "Operations Manager",
			image: "/images/team/joel-c.webp",
			bio: "Joel is a qualified Mechanical Engineer who leads Commercialisation and Operations at RENOZ Energy. With deep expertise in the battery value chain from his previous role as Senior Management Consultant at Worley, he focuses on building scalable, traceable infrastructure around our battery products. His experience spans operational systems design, supplier coordination, and go-to-market strategy, bringing rigorous engineering discipline to energy storage deployment.",
		},
		{
			name: "Jeremy Emms",
			role: "Head of Strategic Growth",
			image: "/images/team/jeremy-e.webp",
			bio: "Jeremy leads strategic growth initiatives at RENOZ Energy, focusing on market expansion and partnership development. With extensive experience in business development and strategic planning, he drives our growth strategy to establish RENOZ as Western Australia's premier energy storage provider. His expertise spans market analysis, strategic partnerships, and scaling operations to meet the growing demand for reliable energy storage solutions across WA.",
		},
		{
			name: "Harley Frankfurt",
			role: "Technical Advisor",
			image: "/images/team/Harley_Frankfurt.webp",
			bio: "With over 25 years of experience in the energy sector, Harley has successfully led companies and the development of approximately 4,700 megawatts (MW) of renewable energy projects. His portfolio includes wind farms, solar PV systems, battery storage, and hydrogen production facilities. He holds a Global Executive MBA from the University of Sydney Business School, specializing in disruptive innovation and renewable energy leadership.",
		},
	];

	const partners = [
		{
			name: "Brill Power",
			logo: "/images/partners/brill-power-logo.svg",
			width: 140,
		},
		{ name: "CE+T Power", logo: "/images/partners/CE+T Logo.webp", width: 120 },
		{
			name: "CDI Energy",
			logo: "/images/partners/CDI Energy Logo.webp",
			width: 130,
		},
		{
			name: "Battery Works",
			logo: "/images/partners/BatteryWorks.webp",
			width: 140,
		},
	];

	return (
		<div className="min-h-screen bg-[var(--white-warm)]">
			{/* Hero Section */}
			<section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-[var(--black)] text-[var(--text-on-dark)]">
				<motion.div
					className="absolute inset-0 z-0"
					initial={{ scale: 1.15 }}
					animate={{ scale: 1 }}
					transition={{ duration: 15, ease: "easeOut" }}
				>
					<div
						className="absolute inset-0 bg-cover bg-center opacity-60"
						style={{
							backgroundImage: "url('/images/stock/matagarup-bridge.webp')",
							backgroundPosition: "center 40%",
						}}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-black/30" />
				</motion.div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
							Perth's Own <br />
							<span className="text-[var(--renoz-green)]">
								Battery Manufacturer
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
							Building the state's capability for a resilient, renewable future.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Origin Story - Magazine Style Feature */}
			<section className="py-24 md:py-32 bg-[var(--white-warm)] overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
						{/* Text Content - Spans 7 cols */}
						<motion.div
							className="lg:col-span-7"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-6 block flex items-center gap-2">
								<span className="w-8 h-px bg-[var(--renoz-green)]" />
								Our Story
							</span>
							<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-[var(--black)] leading-[0.9] tracking-tight">
								From Ohio <br />
								<span className="text-gray-400">to O'Connor.</span>
							</h2>

							<div className="prose prose-lg prose-gray max-w-none">
								<p className="text-2xl md:text-3xl font-light leading-relaxed text-[var(--black)] mb-8 border-l-4 border-[var(--renoz-green)] pl-6">
									"The technology that empowered the Amish to live off-grid was
									exactly what Western Australia needed."
								</p>
								<div className="text-lg text-[var(--text-muted)] leading-relaxed space-y-6">
									<p>
										Before founding RENOZ, CEO Simon Chan spent years developing
										off-grid energy solutions for the Amish community in
										Cleveland, Ohio—a people who live without connection to the
										electric grid by choice.
									</p>
									<p>
										He realized that the engineering challenges there were
										identical to those in Western Australia: vast distances,
										isolation, and a need for absolute reliability. If a battery
										fails in the Ohio winter or the Pilbara summer, it's not
										an inconvenience—it's a critical failure.
									</p>
									<p className="font-medium text-[var(--black)]">
										In 2024, RENOZ Energy brought this battle-hardened
										philosophy home to Perth.
									</p>
								</div>
							</div>
						</motion.div>

						{/* Visual - Spans 5 cols */}
						<motion.div
							className="lg:col-span-5 relative mt-8 lg:mt-24"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<div className="relative aspect-[3/4] rounded-[2px] overflow-hidden shadow-2xl">
								<img
									src="/images/about/wa-roots.webp"
									alt="Connecting to country"
									className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
								/>
								{/* Editorial Overlay */}
								<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
									<div className="text-white text-sm font-mono uppercase tracking-widest mb-2 opacity-70">
										Established 2024
									</div>
									<div className="text-white text-lg font-bold">
										Perth, Western Australia
									</div>
								</div>
							</div>
							{/* Decoration */}
							<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--renoz-green)]/10 -z-10" />
							<div className="absolute -top-6 -left-6 w-32 h-32 border border-gray-200 -z-10" />
						</motion.div>
					</div>
				</div>
			</section>

			{/* Chemistry Agnostic Section - Blueprint Style (MOVED UP) */}
			<section className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden">
				{/* Blueprint Grid Background */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,166,118,0.1),transparent_70%)]" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<div className="inline-flex items-center gap-2 border border-[var(--renoz-green)]/30 rounded-full px-4 py-1.5 bg-[var(--renoz-green)]/10 text-[var(--renoz-green)] text-xs font-mono mb-8">
								<div className="w-2 h-2 rounded-full bg-[var(--renoz-green)] animate-pulse" />
								SYSTEM_FAILURE_PROOFING
							</div>
							<h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter text-white">
								Chemistry <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--renoz-green)] to-emerald-400">
									Agnostic.
								</span>
							</h2>
							<div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
								<p>
									Battery science moves fast. Committing to a single chemistry
									is a risk. That's why we build <strong>Software Defined Batteries</strong>
									that can manage any electron source—LFP, Sodium-ion, or Hydrogen.
								</p>
								<p>
									Powered by <strong>Brill Power</strong> technology, our BMS actively balances
									cells to extend life by up to 60%, regardless of the chemistry inside.
								</p>
							</div>

							<div className="mt-10 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
								<div className="flex items-center gap-4 mb-2">
									<Atom className="w-6 h-6 text-[var(--renoz-green)]" />
									<h3 className="font-bold text-lg">Next Gen: Sodium-Ion</h3>
								</div>
								<p className="text-gray-500 text-sm">
									We are actively developing Sodium-ion packs for 2026 release.
									Abundant, safe, and cold-weather resilient.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="grid grid-cols-1 sm:grid-cols-2 gap-4"
						>
							{[
								{
									icon: Thermometer,
									title: "Extreme Temp",
									desc: "-20°C to 60°C Operation",
									code: "TEMP_RATING_A1",
								},
								{
									icon: Zap,
									title: "High C-Rates",
									desc: "Rapid Charge/Discharge",
									code: "PWR_DELIVERY_MAX",
								},
								{
									icon: Truck,
									title: "Logistics Safe",
									desc: "0V Transport (Sodium)",
									code: "LOG_SAFETY_IDX",
								},
								{
									icon: Shield,
									title: "Abundant",
									desc: "No Lithium Mining",
									code: "MAT_SUSTAINABLE",
								},
							].map((item, i) => (
								<div
									key={i}
									className="group relative p-6 bg-[#0A0A0A] border border-white/10 hover:border-[var(--renoz-green)]/50 transition-colors duration-300 rounded-xl overflow-hidden"
								>
									<div className="absolute top-0 right-0 p-2 opacity-30 font-mono text-[10px] text-[var(--renoz-green)]">
										{item.code}
									</div>
									<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[var(--renoz-green)]/20 transition-colors">
										<item.icon className="w-5 h-5 text-[var(--renoz-green)]" />
									</div>
									<h4 className="font-bold text-white mb-1 group-hover:text-[var(--renoz-green)] transition-colors">
										{item.title}
									</h4>
									<p className="text-gray-500 text-sm">{item.desc}</p>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Values / Mission Grid (Values Only) */}
			<section className="py-24 bg-[var(--cream)] relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
						<p className="text-[var(--text-muted)]">
							The principles that guide every system we build.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6 lg:gap-8">
						{[
							{
								title: "Resilience.",
								desc: "We engineer for the worst-case scenario. When the grid fails, our systems don't.",
								bg: "from-gray-900 to-black",
							},
							{
								title: "Local Support.",
								desc: "No overseas call centers. You speak directly to the engineers who designed your system.",
								bg: "from-[var(--renoz-green)] to-emerald-900",
							},
							{
								title: "Quality.",
								desc: "Tier-1 components only. Rigorously tested in Perth before they ever reach your site.",
								bg: "from-blue-900 to-black",
							},
						].map((item, i) => (
							<motion.div
								key={i}
								className={`relative overflow-hidden rounded-[40px] p-10 h-[400px] flex flex-col justify-between group`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
							>
								{/* Background */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-90 transition-opacity duration-500`}
								/>
								<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />

								{/* Hover Glow */}
								<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

								{/* Content */}
								<div className="relative z-10">
									<div className="w-12 h-1 bg-white/30 mb-8" />
									<h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
										{item.title}
									</h3>
								</div>

								<div className="relative z-10">
									<p className="text-xl text-gray-200 font-light leading-relaxed">
										{item.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Video Section - Cinema Mode (MOVED DOWN) */}
			<section className="py-24 md:py-32 bg-black text-white relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
						<div>
							<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
								Feature Presentation
							</span>
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter loading-none">
								See the difference.
							</h2>
						</div>
						<p className="text-gray-400 max-w-sm text-lg text-right md:text-left">
							Go inside our Perth facility and see how we engineer resilience.
						</p>
					</div>

					<div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
						<YouTubeEmbed
							videoId="LMNODhIAkS4"
							title="RENOZ Energy: Powering Western Australia"
						/>
					</div>
				</div>
			</section>

			{/* Timeline Section (Split) */}
			<section className="py-24 bg-[var(--cream)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<VerticalTimeline
						title="Our Journey"
						highlightLast={true}
						steps={[
							{
								title: "2024 - The Inception",
								description:
									"RENOZ Energy was founded to bring proven off-grid technology to Western Australia. Development began on the LV-5KWH100AH—a modular, chemistry-agnostic platform designed for Australian conditions.",
								image: "/images/stock/renoz-ccs.webp",
							},
							{
								title: "Late 2024 - Innovation",
								description:
									"Partnered with Oxford University spinout Brill Power to deliver a commercial BESS MVP. Pioneering one of Australia's first dual-chemistry systems combining LFP and Sodium-ion technology.",
								image: "/images/products/commercial/brill-power-system.webp",
							},
							{
								title: "2025 - Certification & Launch",
								description:
									"Achieved UL1973 certification. Joined the Smart Energy Council (March). CEC certification secured and launched into the Cheaper Home Batteries program (July).",
								image: "/images/about/unpacking-container.webp",
							},
							{
								title: "Dec 2025 - Recognition",
								description:
									"Shortlisted as a finalist in the WA GreenTech Hub Long Game Challenge, recognising our commitment to building WA's battery manufacturing capability.",
								image: "/images/about/greentech-finalist-group.webp",
							},
							{
								title: "Future - Local Manufacturing",
								description:
									"Our goal: full local battery manufacturing in Western Australia. Building sovereign capability for a resilient, renewable future.",
								image: "/images/stock/solar-microgrid-bess-drone-shot.webp",
							},
						]}
					/>
				</div>
			</section>

			{/* Trust Section - Global x Local */}
			<section className="py-24 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-16">
						<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
							Integrity
						</span>
						<h2 className="text-4xl font-bold text-[var(--black)] mb-6">
							Global Engineering. <br className="md:hidden" />
							<span className="text-gray-400">Local Compliance.</span>
						</h2>
						<p className="text-[var(--text-muted)] text-xl max-w-2xl font-light">
							We pair world-class components with rigorous Australian certification standards.
						</p>
					</div>

					<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
						{/* Zone 1: Partners (5 cols) */}
						<div className="lg:col-span-5">
							<h4 className="font-bold text-[var(--black)] mb-8 flex items-center gap-3">
								<Handshake className="w-5 h-5 text-[var(--renoz-green)]" />
								Technology Partners
							</h4>
							<div className="grid grid-cols-2 gap-4">
								{partners.map((partner, i) => (
									<div
										key={i}
										className="h-24 bg-gray-50 rounded-xl flex items-center justify-center p-6 border border-gray-100 grayscale hover:grayscale-0 transition-all duration-500 hover:bg-white hover:shadow-md"
									>
										<img
											src={partner.logo}
											alt={partner.name}
											className="max-w-full max-h-full object-contain"
										/>
									</div>
								))}
							</div>
						</div>

						{/* Zone 2: Certifications (7 cols) */}
						<div className="lg:col-span-7">
							<h4 className="font-bold text-[var(--black)] mb-8 flex items-center gap-3">
								<Award className="w-5 h-5 text-[var(--renoz-green)]" />
								Compliance Framework
							</h4>

							<div className="bg-[var(--white-warm)] rounded-3xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
								{/* Decorative Glow */}
								<div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 blur-[60px] rounded-full pointer-events-none" />

								<div className="space-y-8 relative z-10">
									{/* SEC Highlight */}
									<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-gray-200/60">
										<div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 p-2 shrink-0 flex items-center justify-center">
											<img
												src="/images/about/SEC_GoldMember_Logo.webp"
												alt="Smart Energy Council Gold Member"
												className="w-full h-full object-contain"
											/>
										</div>
										<div>
											<h5 className="text-lg font-bold text-[var(--black)]">Smart Energy Council Gold Member</h5>
											<p className="text-[var(--text-muted)]">
												Gold member status, committed to the long-term development of Australia's energy storage industry.
											</p>
										</div>
									</div>

									{/* Cert Grid */}
									<div className="grid sm:grid-cols-2 gap-6">
										{[
											{ title: "UL1973 Certified", desc: "Safety Standard for Stationary Batteries" },
											{ title: "CEC Approved", desc: "Clean Energy Council Listed (Rebate Eligible)" },
											{ title: "AS/NZS 5139", desc: "Compliant with AU Installation Safety Standards" },
											{ title: "UN 38.3", desc: "Certified for Safe Transport (Lithium Batteries)" }
										].map((cert, i) => (
											<div key={i} className="flex items-start gap-3">
												<div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
													<Check className="w-3 h-3 text-green-700" strokeWidth={3} />
												</div>
												<div>
													<div className="font-bold text-gray-900 text-sm">{cert.title}</div>
													<div className="text-xs text-gray-500">{cert.desc}</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section - Executive Grid */}
			<section className="py-24 bg-[var(--cream)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
						<div>
							<h2 className="text-4xl font-bold mb-4 text-[var(--black)]">
								Leadership.
							</h2>
							<p className="text-[var(--text-muted)] text-xl max-w-xl">
								The engineers and strategists building WA's battery capability.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								className="group cursor-pointer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								onClick={() => setSelectedMember(member)}
							>
								{/* Image Container */}
								<div className="relative mb-5 rounded-[4px] overflow-hidden aspect-[3/4] bg-gray-200">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
										loading="lazy"
										onError={(e) => {
											const target = e.target as HTMLImageElement;
											if (target.src.includes(".webp")) {
												target.src = member.image.replace(".webp", ".png");
											}
										}}
									/>
									{/* Hover Overlay */}
									<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
										<div className="bg-white/90 backdrop-blur-md py-2 px-4 rounded-full text-xs font-bold uppercase tracking-widest text-center shadow-lg text-[var(--black)]">
											Read Bio
										</div>
									</div>
								</div>

								{/* Info */}
								<div className="px-1">
									<h3 className="font-bold text-lg text-[var(--black)] leading-tight group-hover:text-[var(--renoz-green)] transition-colors">
										{member.name}
									</h3>
									<p className="text-sm text-gray-500 mt-1 font-medium">
										{member.role}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Bio Modal */}
			<AnimatePresence>
				{selectedMember && (
					<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedMember(null)}
							className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						/>
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							className="relative bg-white rounded-[32px] w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px] overflow-y-auto md:overflow-y-visible"
						>
							<button
								onClick={() => setSelectedMember(null)}
								className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors"
							>
								<X className="w-5 h-5 text-gray-800" />
							</button>

							<div className="w-full md:w-2/5 relative min-h-[250px] md:min-h-full">
								<img
									src={selectedMember.image}
									alt={selectedMember.name}
									className="absolute inset-0 w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
								<div className="absolute bottom-6 left-6 text-white md:hidden">
									<h3 className="text-2xl font-bold">{selectedMember.name}</h3>
									<p className="text-[var(--renoz-green)] font-bold">
										{selectedMember.role}
									</p>
								</div>
							</div>

							<div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white">
								<div className="hidden md:block mb-6">
									<h3 className="text-3xl font-bold text-[var(--black)] mb-2">
										{selectedMember.name}
									</h3>
									<p className="text-[var(--renoz-green)] font-bold uppercase tracking-wider">
										{selectedMember.role}
									</p>
								</div>

								<div className="relative">
									<Quote className="absolute -top-4 -left-4 w-8 h-8 text-gray-100 fill-current" />
									<p className="text-gray-600 text-lg leading-relaxed relative z-10">
										{selectedMember.bio}
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}
