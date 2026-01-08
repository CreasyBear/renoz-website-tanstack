import { Link } from "@tanstack/react-router";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[var(--black)] text-white pt-16 pb-8 font-sans border-t border-white/5 relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
					{/* Brand & Socials */}
					<div className="lg:col-span-1 flex flex-col justify-between h-full">
						<div className="space-y-6">
							<Link
								to="/"
								className="inline-block opacity-90 hover:opacity-100 transition-opacity"
							>
								<img
									src="/images/optimized/logo-white-natural.webp"
									alt="RENOZ Energy"
									className="h-8 w-auto"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.src = "/images/optimized/logo-white-natural.webp";
									}}
								/>
							</Link>
							<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
								Building Western Australia's battery capability for a resilient,
								renewable future.
							</p>
						</div>
						<div className="flex gap-4 mt-8 lg:mt-0">
							{[
								{ icon: Linkedin, href: "#", label: "LinkedIn" },
								{ icon: Facebook, href: "#", label: "Facebook" },
								{ icon: Instagram, href: "#", label: "Instagram" },
							].map((social, i) => (
								<a
									key={i}
									href={social.href}
									aria-label={social.label}
									className="text-gray-500 hover:text-[var(--renoz-green)] transition-colors"
								>
									<social.icon size={20} strokeWidth={1.5} />
								</a>
							))}
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h4 className="font-bold text-xs uppercase tracking-widest text-[var(--renoz-green)] mb-6">
							Product
						</h4>
						<ul className="space-y-3">
							{[
								{ label: "Residential", to: "/products/residential" },
								{ label: "Rural", to: "/products/rural" },
								{ label: "Commercial", to: "/products/commercial" },
								{ label: "All Systems", to: "/products" },
							].map((link, i) => (
								<li key={i}>
									<Link
										to={link.to}
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="font-bold text-xs uppercase tracking-widest text-[var(--renoz-green)] mb-6">
							For
						</h4>
						<ul className="space-y-3">
							{[
								{ label: "Homeowners", to: "/homeowners" },
								{ label: "Partners", to: "/partners" },
							].map((link, i) => (
								<li key={i}>
									<Link
										to={link.to}
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="font-bold text-xs uppercase tracking-widest text-[var(--renoz-green)] mb-6">
							Company
						</h4>
						<ul className="space-y-3">
							{[
								{ label: "About", to: "/about" },
								{ label: "Case Studies", to: "/case-studies" },
								{ label: "Resources", to: "/resources" },
							].map((link, i) => (
								<li key={i}>
									<Link
										to={link.to}
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact - Minimal */}
					<div>
						<h4 className="font-bold text-xs uppercase tracking-widest text-[var(--renoz-green)] mb-6">
							Contact
						</h4>
						<ul className="space-y-4">
							<li>
								<a
									href="mailto:sales@renoz.energy"
									className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
								>
									<Mail
										size={16}
										className="text-[var(--renoz-green)] group-hover:text-white transition-colors"
									/>
									<span className="text-sm">sales@renoz.energy</span>
								</a>
							</li>
							<li>
								<a
									href="tel:1800736693"
									className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
								>
									<Phone
										size={16}
										className="text-[var(--renoz-green)] group-hover:text-white transition-colors"
									/>
									<span className="text-sm">1800 736 693</span>
								</a>
							</li>
							<li className="flex items-start gap-3 text-gray-400 group">
								<MapPin
									size={16}
									className="text-[var(--renoz-green)] mt-0.5 shrink-0"
								/>
								<span className="text-sm leading-relaxed text-gray-500">
									Unit 4, 8 Murphy Street
									<br />
									O'Connor WA 6163
								</span>
							</li>
						</ul>

						{/* Warranty Registration CTA */}
						<div className="mt-8 pt-8 border-t border-white/10">
							<Link
								to="/warranty"
								className="inline-flex items-center gap-2 text-[var(--renoz-green)] hover:text-white transition-colors group"
							>
								<span className="text-sm font-bold">
									Register Your Warranty
								</span>
								<svg
									className="w-4 h-4 group-hover:translate-x-1 transition-transform"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-2 text-xs text-gray-600">
						<span>© {currentYear} RENOZ Energy Pty Ltd.</span>
						<span className="hidden md:inline text-gray-800">|</span>
						<span className="hidden md:inline">
							Engineered in Western Australia
						</span>
					</div>
					<div className="flex gap-6 text-xs text-gray-600">
						<Link
							to="/privacy"
							className="hover:text-gray-400 transition-colors"
						>
							Privacy
						</Link>
						<Link to="/terms" className="hover:text-gray-400 transition-colors">
							Terms
						</Link>
						<Link
							to="/cookies"
							className="hover:text-gray-400 transition-colors"
						>
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
