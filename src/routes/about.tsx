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

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About RENOZ Energy - Perth Battery Manufacturer" },
			{
				name: "description",
				content:
					"Perth-based OEM manufacturer building Western Australia's battery capability. Learn about our mission, team, and commitment to local manufacturing.",
			},
			{
				property: "og:title",
				content: "About RENOZ Energy - Perth Battery Manufacturer",
			},
			{
				property: "og:description",
				content:
					"Perth-based OEM manufacturer building Western Australia's battery capability. Learn about our mission, team, and commitment to local manufacturing.",
			},
			{ property: "og:url", content: `${baseUrl}/about` },
			{
				name: "twitter:title",
				content: "About RENOZ Energy - Perth Battery Manufacturer",
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
			image: "/images/team/joel-c.jpeg",
			bio: "Joel is a qualified Mechanical Engineer who leads Commercialisation and Operations at RENOZ Energy. With deep expertise in the battery value chain from his previous role as Senior Management Consultant at Worley, he focuses on building scalable, traceable infrastructure around our battery products. His experience spans operational systems design, supplier coordination, and go-to-market strategy, bringing rigorous engineering discipline to energy storage deployment.",
		},
		{
			name: "Jeremy Emms",
			role: "Head of Strategic Growth",
			image: "/images/team/jeremy-e.jpeg",
			bio: "Jeremy leads strategic growth initiatives at RENOZ Energy, focusing on market expansion and partnership development. With extensive experience in business development and strategic planning, he drives our growth strategy to establish RENOZ as Western Australia's premier energy storage provider. His expertise spans market analysis, strategic partnerships, and scaling operations to meet the growing demand for reliable energy storage solutions across WA.",
		},
		{
			name: "Harley Frankfurt",
			role: "Technical Advisor",
			image: "/images/team/Harley_Frankfurt.jpeg",
			bio: "With over 25 years of experience in the energy sector, Harley has successfully led companies and the development of approximately 4,700 megawatts (MW) of renewable energy projects. His portfolio includes wind farms, solar PV systems, battery storage, and hydrogen production facilities. He holds a Global Executive MBA from the University of Sydney Business School, specializing in disruptive innovation and renewable energy leadership.",
		},
	];

	const partners = [
		{
			name: "Brill Power",
			logo: "/images/partners/brill-power-logo.svg",
			width: 140,
		},
		{ name: "CE+T Power", logo: "/images/partners/CE+T Logo.png", width: 120 },
		{
			name: "CDI Energy",
			logo: "/images/partners/CDI Energy Logo.png",
			width: 130,
		},
		{
			name: "Battery Works",
			logo: "/images/partners/BatteryWorks.png",
			width: 140,
		},
	];

	return (
		<div className="min-h-screen bg-[var(--white-warm)]">
			{/* Hero Section */}
			<section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-[var(--black)] text-[var(--text-on-dark)]">
				<motion.div
					className="absolute inset-0 z-0"
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 10, ease: "easeOut" }}
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
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
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

			{/* Origin Story - Immersive Split */}
			<section className="py-24 bg-[var(--white-warm)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
								Our Origins
							</span>
							<h2 className="text-4xl font-bold mb-8 text-[var(--black)] leading-tight">
								From Ohio to O'Connor.
							</h2>
							<div className="space-y-6 text-lg text-[var(--text-muted)] leading-relaxed">
								<p>
									CEO Simon Chan has spent over 11 years developing Lithium-Ion
									Batteries for Australia, co-founding two successful Australian
									battery companies. Working alongside Shandong Huison
									Electronics, Simon also developed off-grid energy solutions
									for the Amish community in Cleveland, Ohio—people who live
									without grid connection by choice.
								</p>
								<p>
									He saw striking parallels with Western Australia: remote
									communities, unreliable grid infrastructure, and a climate
									that punishes standard equipment. The technology that worked
									for the Amish could transform energy independence in WA.
								</p>
								<p>
									In 2024, RENOZ Energy was born—bringing proven, rugged
									technology to Australian homes, farms, and businesses.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="relative"
						>
							<div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl relative z-10">
								<img
									src="/images/about/simon-ioniq.webp"
									alt="Simon Chan, CEO of RENOZ Energy, at the O'Connor facility"
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
							{/* Decorative elements */}
							<div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-[var(--renoz-green)]/20 rounded-[32px] -z-0" />
						</motion.div>
					</div>
				</div>
			</section>

			{/* Values / Mission Grid */}
			<section className="py-24 bg-[var(--cream)] relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
						<p className="text-[var(--text-muted)]">
							The principles that guide every system we build.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-24">
						{[
							{
								icon: Shield,
								title: "Resilience",
								desc: "We engineer for the worst-case scenario, so your power stays on when it matters most.",
							},
							{
								icon: Users,
								title: "Local Support",
								desc: "No call centers overseas. You speak to the engineers who built your system.",
							},
							{
								icon: Award,
								title: "Quality",
								desc: "We use only tier-1 components and rigorously test every unit before it leaves our Perth facility.",
							},
						].map((item, i) => (
							<Card
								key={i}
								className="bg-white border-none shadow-soft hover:shadow-lg transition-all"
								hover
							>
								<div className="w-12 h-12 bg-[var(--renoz-green)]/10 rounded-[20px] flex items-center justify-center mb-6 text-[var(--renoz-green)]">
									<item.icon className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold mb-3">{item.title}</h3>
								<p className="text-[var(--text-muted)] leading-relaxed">
									{item.desc}
								</p>
							</Card>
						))}
					</div>

					<VerticalTimeline
						title="Our Journey"
						steps={[
							{
								title: "2024 - The Inception",
								description:
									"RENOZ Energy was founded to bring proven off-grid technology to Western Australia. Development began on the LV-5KWH100AH—a modular, chemistry-agnostic platform designed for Australian conditions.",
								image: "/images/about/simon-ioniq.webp",
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

			{/* Chemistry Agnostic Section */}
			<section className="py-24 bg-[var(--black)] text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
								Technology Philosophy
							</span>
							<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
								Chemistry Agnostic.
								<br />
								<span className="text-gray-400">Future Ready.</span>
							</h2>
							<div className="space-y-6 text-lg text-gray-300 leading-relaxed">
								<p>
									Battery chemistry is evolving rapidly. Rather than lock into a
									single technology, we've designed our systems to work with
									multiple chemistries—LFP today, Sodium-ion tomorrow, and
									whatever comes next.
								</p>
								<p>
									Our partnership with Brill Power enables "Software Defined
									Batteries" that optimise performance regardless of cell
									chemistry, giving you a system that won't become obsolete.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<div className="bg-white/5 backdrop-blur-sm rounded-[32px] p-8 border border-white/10">
								<h3 className="text-xl font-bold mb-6 flex items-center gap-3">
									<Atom className="w-6 h-6 text-[var(--renoz-green)]" />
									Why Sodium-Ion Suits WA
								</h3>
								<div className="space-y-6">
									{[
										{
											icon: Thermometer,
											title: "Wider Temperature Range",
											desc: "Operates from -20°C to 60°C—perfect for extreme WA conditions from the Pilbara to the South West.",
										},
										{
											icon: Zap,
											title: "Higher C-Rates",
											desc: "Faster charge and discharge rates mean better performance for high-demand applications.",
										},
										{
											icon: Truck,
											title: "Safer Transport",
											desc: "Can be fully discharged to 0V with no thermal runaway risk—dramatically simplifying logistics.",
										},
										{
											icon: Shield,
											title: "Abundant Materials",
											desc: "No lithium dependency. Sodium is one of the most abundant elements on Earth.",
										},
									].map((item, i) => (
										<div key={i} className="flex gap-4">
											<div className="w-10 h-10 rounded-xl bg-[var(--renoz-green)]/20 flex items-center justify-center shrink-0">
												<item.icon className="w-5 h-5 text-[var(--renoz-green)]" />
											</div>
											<div>
												<h4 className="font-bold text-white mb-1">
													{item.title}
												</h4>
												<p className="text-gray-400 text-sm leading-relaxed">
													{item.desc}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Trust Wall: Partners & Certifications Combined */}
			<section className="py-20 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h3 className="text-3xl font-bold text-[var(--black)] mb-4">
							Ecosystem of Trust
						</h3>
						<p className="text-[var(--text-muted)] text-lg">
							Partnering with global leaders. Certified for local standards.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
						{/* Partners Column */}
						<div>
							<div className="flex items-center gap-3 mb-8">
								<div className="p-2 bg-[var(--renoz-green)]/10 rounded-lg">
									<Handshake className="w-5 h-5 text-[var(--renoz-green)]" />
								</div>
								<h4 className="text-xl font-bold">Strategic Partners</h4>
							</div>
							<div className="grid grid-cols-2 gap-6">
								{partners.map((partner, i) => (
									<motion.div
										key={i}
										whileHover={{ y: -4 }}
										className="h-32 bg-gray-50 rounded-2xl flex items-center justify-center p-6 border border-gray-100 hover:shadow-md transition-all group"
									>
										<img
											src={partner.logo}
											alt={partner.name}
											className="max-w-full max-h-full object-contain hover:scale-105 transition-all duration-500"
										/>
									</motion.div>
								))}
							</div>
						</div>

						{/* Certifications Column */}
						<div>
							<div className="flex items-center gap-3 mb-8">
								<div className="p-2 bg-yellow-100 rounded-lg">
									<Award className="w-5 h-5 text-yellow-600" />
								</div>
								<h4 className="text-xl font-bold">
									Certifications & Memberships
								</h4>
							</div>

							<div className="bg-[var(--white-warm)] rounded-3xl p-8 border border-gray-100 relative overflow-hidden">
								{/* Gold Glow for SEC Logo */}
								<div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] pointer-events-none" />

								<div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
									<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
										<img
											src="/images/about/SEC_GoldMember_Logo.jpeg"
											alt="Smart Energy Council Gold Member"
											className="h-20 w-auto object-contain"
										/>
									</div>
									<ul className="space-y-4 flex-1">
										{[
											{
												text: "Smart Energy Council Member",
												sub: "Gold Member Since 2025",
											},
											{
												text: "UL1973 Certified",
												sub: "Safety for Stationary Batteries",
											},
											{
												text: "Clean Energy Council Approved",
												sub: "Eligible for Rebates",
											},
											{
												text: "AS/NZS 5139 Compliant",
												sub: "Australian Installation Standard",
											},
										].map((item, i) => (
											<li key={i} className="flex items-start gap-3">
												<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 shrink-0">
													<Check className="w-3 h-3 text-green-600" />
												</div>
												<div>
													<div className="font-bold text-[var(--black)] text-sm">
														{item.text}
													</div>
													<div className="text-xs text-gray-500">
														{item.sub}
													</div>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-24 bg-[var(--cream)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold mb-16 text-center">
						Meet the Team
					</h2>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								className="group text-center cursor-pointer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								onClick={() => setSelectedMember(member)}
							>
								<div className="relative mb-6 rounded-[24px] overflow-hidden aspect-square mx-auto shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 bg-gray-200">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
										loading="lazy"
										onError={(e) => {
											const target = e.target as HTMLImageElement;
											if (target.src.includes(".webp")) {
												target.src = member.image.replace(".webp", ".png");
											}
										}}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
										<span className="text-white text-xs font-bold tracking-widest uppercase">
											Read Bio
										</span>
									</div>
								</div>
								<h3 className="font-bold text-lg text-[var(--black)]">
									{member.name}
								</h3>
								<p className="text-sm text-[var(--renoz-green)] font-medium uppercase tracking-wide mt-1">
									{member.role}
								</p>
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
