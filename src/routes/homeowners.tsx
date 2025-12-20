import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	CheckCircle,
	DollarSign,
	Home,
	Shield,
	TrendingUp,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import Card from "../components/ui/Card";
import DayNightSlider from "../components/ui/DayNightSlider";
import MasonryGallery from "../components/ui/MasonryGallery";
import VerticalTimeline from "../components/ui/VerticalTimeline";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/homeowners")({
	head: () => ({
		meta: [
			{ title: "Home Battery Storage - RENOZ Energy" },
			{
				name: "description",
				content:
					"Secure your home with 10-50kWh battery systems. Store solar power and use it when it's worth 30c/kWh instead of selling for 5c/kWh.",
			},
			{ property: "og:title", content: "Home Battery Storage - RENOZ Energy" },
			{
				property: "og:description",
				content:
					"Secure your home with 10-50kWh battery systems. Store solar power and use it when it's worth 30c/kWh instead of selling for 5c/kWh.",
			},
			{ property: "og:url", content: `${baseUrl}/homeowners` },
			{ name: "twitter:title", content: "Home Battery Storage - RENOZ Energy" },
			{
				name: "twitter:description",
				content:
					"Secure your home with 10-50kWh battery systems. Store solar power and use it when it's worth 30c/kWh.",
			},
		],
	}),
	component: HomeownersPage,
});

function HomeownersPage() {
	return (
		<div className="min-h-screen bg-[var(--cream)]">
			{/* Immersive Hero Section with Day/Night Slider */}
			<section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
				<div className="text-center mb-12 max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--renoz-green)] text-white text-xs font-bold tracking-widest uppercase mb-6">
							<Home className="w-3 h-3" />
							For Homeowners
						</div>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none text-[var(--black)]">
							Keep your power. <br />
							<span className="text-[var(--renoz-green)]">
								Keep your savings.
							</span>
						</h1>
						<p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
							Stop selling your solar energy for pennies. Store it, use it at
							night, and protect your home from blackouts.
						</p>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.98, y: 40 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative z-10"
				>
					<DayNightSlider className="w-full aspect-[4/5] md:aspect-[21/9] min-h-[600px] shadow-2xl border border-white/20" />
				</motion.div>

				{/* Hero CTAs below slider */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
				>
					<Button
						variant="primary"
						size="lg"
						to="/products/residential"
						className="rounded-full px-8 shadow-lg shadow-[var(--renoz-green)]/20 text-lg py-6"
					>
						View Battery Sizes
					</Button>
					<Button
						variant="outline"
						size="lg"
						to="/contact?type=homeowner"
						className="rounded-full px-8 border-gray-300 hover:bg-[var(--black)] hover:text-white hover:border-transparent text-lg py-6"
					>
						Request a Quote
					</Button>
				</motion.div>
			</section>

			{/* The Problem (Solar Paradox) - Simplified Layout */}
			<section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<h2 className="text-4xl font-bold mb-6 text-[var(--black)]">
						The Solar Paradox.
					</h2>
					<p className="text-xl text-[var(--text-muted)] mb-12 leading-relaxed">
						You have solar panels, but you're still paying high electricity
						bills. Why? <br className="hidden md:block" />
						Because you generate power when you're at work, and use it when the
						sun is down.
					</p>

					<div className="grid md:grid-cols-2 gap-6 text-left">
						<div className="bg-red-50 p-8 rounded-[32px] border border-red-100 flex flex-col items-center text-center md:items-start md:text-left md:flex-row gap-6 hover:shadow-lg transition-shadow">
							<div className="p-4 bg-red-100 text-red-600 rounded-2xl h-fit shrink-0">
								<TrendingUp className="w-8 h-8" />
							</div>
							<div>
								<h3 className="font-bold text-red-900 text-2xl mb-2">
									Buying High
								</h3>
								<p className="text-red-800/80 text-lg">
									You buy power from the grid at night for ~30c/kWh.
								</p>
							</div>
						</div>

						<div className="bg-orange-50 p-8 rounded-[32px] border border-orange-100 flex flex-col items-center text-center md:items-start md:text-left md:flex-row gap-6 hover:shadow-lg transition-shadow">
							<div className="p-4 bg-orange-100 text-orange-600 rounded-2xl h-fit shrink-0">
								<DollarSign className="w-8 h-8" />
							</div>
							<div>
								<h3 className="font-bold text-orange-900 text-2xl mb-2">
									Selling Low
								</h3>
								<p className="text-orange-800/80 text-lg">
									You sell your excess solar for only ~3-5c/kWh.
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</section>

			{/* Value Props - Bento Grid */}
			<section className="py-24 bg-[var(--white-warm)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block">
							The Solution
						</span>
						<h2 className="text-4xl font-bold mb-4 text-[var(--black)]">
							Independence is the answer.
						</h2>
						<p className="text-[var(--text-muted)] text-lg">
							A RENOZ battery bridges the gap between your solar production and
							your energy needs.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card
							hover
							className="p-8 border-none bg-white hover:shadow-lg transition-all duration-300"
						>
							<div className="w-14 h-14 bg-green-100 text-green-600 rounded-[20px] flex items-center justify-center mb-6">
								<DollarSign className="w-7 h-7" />
							</div>
							<h3 className="font-bold text-xl mb-3">Slash Your Bills</h3>
							<p className="text-[var(--text-muted)] leading-relaxed">
								Store your free solar energy and use it during peak times. Many
								customers reduce their grid reliance by over 90%.
							</p>
						</Card>

						<Card
							hover
							className="p-8 border-none bg-[var(--black)] text-white hover:bg-gray-900 transition-colors duration-300 shadow-xl transform md:-translate-y-4"
						>
							<div className="w-14 h-14 bg-white/10 text-[var(--renoz-green)] rounded-[20px] flex items-center justify-center mb-6">
								<Shield className="w-7 h-7" />
							</div>
							<h3 className="font-bold text-xl mb-3">Blackout Proof</h3>
							<p className="text-gray-400 leading-relaxed">
								When the grid goes down, your RENOZ system instantly takes over.
								Keep your lights, internet, and fridge running seamlessly.
							</p>
						</Card>

						<Card
							hover
							className="p-8 border-none bg-white hover:shadow-lg transition-all duration-300"
						>
							<div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-[20px] flex items-center justify-center mb-6">
								<CheckCircle className="w-7 h-7" />
							</div>
							<h3 className="font-bold text-xl mb-3">Local Support</h3>
							<p className="text-[var(--text-muted)] leading-relaxed">
								Built in WA, supported by WA engineers. If you ever have an
								issue, we're just down the road in O'Connor.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Rebate Highlight */}
			<section className="py-12">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-gradient-to-r from-[var(--renoz-green)] to-[#00A676] rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
						<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
							<div>
								<div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
									Government Incentives
								</div>
								<h3 className="text-3xl font-bold mb-2">Did you know?</h3>
								<p className="text-white/90 max-w-lg text-lg">
									You may be eligible for attractive energy loans or rebates.
									Our team can help navigate the latest WA incentives to lower
									your upfront cost.
								</p>
							</div>
							<Button
								variant="outline"
								to="/contact?type=general"
								className="bg-white text-[var(--renoz-green)] border-none hover:bg-gray-100 shrink-0 rounded-full px-8 py-4 h-auto text-lg font-bold"
							>
								Check Eligibility
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Simple Process */}
			<section className="py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<VerticalTimeline
						title="The path to independence."
						steps={[
							{
								title: "Free Sizing Consultation",
								description:
									"We analyze your bill and solar output to recommend the perfect battery size (10-50kWh). No overselling, just engineering math.",
								image: "/images/stock/renoz-ccs.webp",
							},
							{
								title: "Certified Installation",
								description:
									"We connect you with a trusted local installer who knows our systems. Installation is quick, tidy, and compliant.",
								image: "/images/stock/renoz-stacking.webp",
							},
							{
								title: "Set & Forget",
								description:
									"Your system runs automatically. Track your savings in real-time and enjoy the peace of mind that comes with energy security.",
								image: "/images/stock/garage-renoz-1.webp",
							},
						]}
					/>
				</div>
			</section>

			{/* Social Proof */}
			<section className="py-24 bg-[var(--white-warm)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<MasonryGallery
						title="Join your neighbors."
						showRating={true}
						images={[
							{
								src: "/images/case-studies/H-Collins-LV-25kWh.webp",
								alt: "Collins Residence",
								caption: "25kWh System with blackout protection",
								location: "Applecross",
							},
							{
								src: "/images/case-studies/M-Singh-30kWh.webp",
								alt: "Singh Installation",
								caption: "30kWh Residential Bank",
								location: "Southern River",
							},
							{
								src: "/images/case-studies/R-Woon-LV20kWh.webp",
								alt: "Woon Residence",
								caption: "20kWh Compact Garage Install",
								location: "Canning Vale",
							},
						]}
					/>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-32 bg-[var(--black)] text-white text-center relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
				<div className="max-w-4xl mx-auto px-4 relative z-10">
					<h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
						Stop renting your power. <br /> Own it.
					</h2>
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<Button
							variant="primary"
							size="lg"
							to="/contact?type=homeowner"
							className="text-lg px-12 py-5 rounded-full shadow-glow"
						>
							Get My Free Quote
						</Button>
						<p className="text-gray-400 text-sm font-medium uppercase tracking-widest mt-4 sm:mt-0 sm:ml-4">
							10-Year Warranty included
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
