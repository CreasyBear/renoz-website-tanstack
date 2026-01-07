import { Link } from "@tanstack/react-router";
import { type ClassValue, clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "../ui/Image";

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [hovered, setHovered] = useState<string | null>(null);

	// Handle scroll effect for glassmorphism
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{
			to: "/products",
			label: "Products",
			items: [
				{ to: "/products/residential", label: "Residential" },
				{ to: "/products/rural", label: "Rural" },
				{ to: "/products/commercial", label: "Commercial" },
			],
		},
		{
			label: "For",
			items: [
				{ to: "/homeowners", label: "Homeowners" },
				{ to: "/installers", label: "Installers" },
			],
		},
		{ to: "/case-studies", label: "Case Studies" },
		{ to: "/resources", label: "Resources" },
		{ to: "/about", label: "About" },
		{ to: "/contact", label: "Contact" },
	];

	return (
		<>
			<header
				className={cn(
					"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
					scrolled
						? "glass-dark py-3 shadow-lg"
						: "bg-transparent py-5 bg-gradient-to-b from-black/80 to-transparent",
				)}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link to="/" className="flex items-center group">
							<Image
								src="/images/optimized/logo-white-natural.webp"
								fallback="/images/optimized/logo-white-natural.webp"
								alt="RENOZ Energy"
								width={160}
								height={40}
								className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
								fetchPriority="high"
							/>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center gap-8">
							{navLinks.map((link) => (
								<div
									key={link.label}
									className="relative group h-full flex items-center"
									onMouseEnter={() => setHovered(link.label)}
									onMouseLeave={() => setHovered(null)}
								>
									{link.to ? (
										<Link
											to={link.to}
											className="text-sm font-medium text-white/90 hover:text-[var(--renoz-green)] transition-colors relative py-2"
											activeProps={{
												className: "!text-[var(--renoz-green)]",
											}}
										>
											{link.label}
											<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--renoz-green)] transition-all duration-300 group-hover:w-full" />
										</Link>
									) : (
										<span className="text-sm font-medium text-white/90 hover:text-[var(--renoz-green)] transition-colors relative py-2 cursor-default">
											{link.label}
											<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--renoz-green)] transition-all duration-300 group-hover:w-full" />
										</span>
									)}

									{/* Desktop Dropdown */}
									{link.items && (
										<AnimatePresence>
											{hovered === link.label && (
												<motion.div
													initial={{ opacity: 0, y: 10, scale: 0.95 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													exit={{ opacity: 0, y: 10, scale: 0.95 }}
													transition={{ duration: 0.2 }}
													className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
												>
													<div className="bg-[var(--black)]/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl p-2 flex flex-col gap-1">
														{link.items.map((item) => (
															<Link
																key={item.to}
																to={item.to}
																className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
																activeProps={{
																	className:
																		"bg-[var(--renoz-green)]/10 text-[var(--renoz-green)]",
																}}
															>
																{item.label}
															</Link>
														))}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									)}
								</div>
							))}
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(true)}
							className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
							aria-label="Open menu"
						>
							<Menu size={24} />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsOpen(false)}
							className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
						/>
						<motion.aside
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="fixed top-0 right-0 h-full w-80 bg-[var(--black)] text-[var(--text-on-dark)] shadow-2xl z-50 flex flex-col border-l border-white/10"
						>
							<div className="flex items-center justify-between p-6 border-b border-white/10">
								<Image
									src="/images/optimized/logo-white-natural.webp"
									fallback="/images/optimized/logo-white-natural.webp"
									alt="RENOZ Energy"
									width={128}
									height={32}
									className="h-8 w-auto"
								/>
								<button
									onClick={() => setIsOpen(false)}
									className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
									aria-label="Close menu"
								>
									<X size={24} />
								</button>
							</div>

							<nav className="flex-1 p-6 overflow-y-auto">
								<ul className="space-y-2">
									{navLinks.map((link, i) => (
										<motion.li
											key={link.label}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: i * 0.1 }}
										>
											{link.items ? (
												<div className="space-y-2">
													<div className="p-4 rounded-xl bg-white/5 font-medium text-lg text-[var(--renoz-green)]">
														{link.label}
													</div>
													<ul className="pl-4 space-y-1 border-l border-white/10 ml-4">
														{link.items.map((item) => (
															<li key={item.to}>
																<Link
																	to={item.to}
																	onClick={() => setIsOpen(false)}
																	className="block p-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
																	activeProps={{
																		className:
																			"text-[var(--renoz-green)] font-medium",
																	}}
																>
																	{item.label}
																</Link>
															</li>
														))}
													</ul>
												</div>
											) : (
												<Link
													to={link.to}
													onClick={() => setIsOpen(false)}
													className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all active:scale-95"
													activeProps={{
														className:
															"bg-[var(--renoz-green)] hover:bg-[var(--renoz-green-dark)] text-white shadow-lg",
													}}
												>
													<span className="font-medium text-lg">
														{link.label}
													</span>
												</Link>
											)}
										</motion.li>
									))}
								</ul>
							</nav>

							<div className="p-6 border-t border-white/10">
								<p className="text-sm text-gray-400 text-center">
									© 2025 RENOZ Energy
								</p>
							</div>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
