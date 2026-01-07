import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "./Image";

interface CardItem {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	image: string;
	link: string;
	kwh: string;
}

interface ExpandingCardsProps {
	items: CardItem[];
	className?: string;
}

export default function ExpandingCards({
	items,
	className,
}: ExpandingCardsProps) {
	const [activeId, setActiveId] = useState<string>(items[0].id);

	return (
		<div
			className={cn(
				"w-full h-[800px] md:h-[600px] flex flex-col md:flex-row gap-4",
				className,
			)}
		>
			{items.map((item) => (
				<motion.div
					key={item.id}
					layout
					onClick={() => setActiveId(item.id)}
					className={cn(
						"relative h-full rounded-[32px] overflow-hidden cursor-pointer group",
						activeId === item.id ? "flex-[3]" : "flex-[1] hover:flex-[1.2]",
					)}
					transition={{
						layout: {
							duration: 0.4,
							type: "spring",
							stiffness: 100,
							damping: 15,
						},
					}}
				>
					{/* Background Image */}
					<div className="absolute inset-0">
						<Image
							src={item.image}
							alt={item.title}
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							width={800}
							height={600}
						/>
						<div
							className={cn(
								"absolute inset-0 transition-colors duration-500",
								activeId === item.id
									? "bg-black/20" // Lighter overlay when active
									: "bg-black/60 group-hover:bg-black/50", // Darker when inactive
							)}
						/>
					</div>

					{/* Content */}
					<div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
						<AnimatePresence mode="wait">
							{activeId === item.id ? (
								<motion.div
									key="active"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
									transition={{ duration: 0.4, delay: 0.1 }}
									className="space-y-4"
								>
									<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase w-fit">
										<item.icon className="w-3 h-3" />
										{item.kwh}
									</div>

									<h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
										{item.title}
									</h3>

									<p className="text-lg text-gray-200 max-w-lg leading-relaxed">
										{item.description}
									</p>

									<Link
										to={item.link}
										className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-[var(--renoz-green)] transition-colors mt-4 group/link"
										onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
									>
										Explore System
										<ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
									</Link>
								</motion.div>
							) : (
								<motion.div
									key="inactive"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ duration: 0.3, delay: 0.1 }}
									className="flex flex-col items-center justify-end h-full"
								>
									<div className="rotate-0 md:-rotate-90 whitespace-nowrap mb-0 md:mb-12 origin-left translate-x-0 md:translate-x-1/2">
										<h3 className="text-2xl font-bold text-white tracking-wider uppercase">
											{item.title}
										</h3>
									</div>
									<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mt-4 md:mt-0 group-hover:bg-white/20 transition-colors">
										<ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</motion.div>
			))}
		</div>
	);
}
