import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface AccordionItem {
	id: string;
	title: string;
	description: string;
	image: string;
}

interface ImageAccordionProps {
	items: AccordionItem[];
	className?: string;
}

export function ImageAccordion({ items, className }: ImageAccordionProps) {
	const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null);

	return (
		<div className={cn("flex flex-col lg:flex-row gap-4 h-[600px] w-full", className)}>
			{items.map((item) => (
				<motion.div
					key={item.id}
					layout
					onClick={() => setActiveId(item.id)}
					onMouseEnter={() => setActiveId(item.id)}
					className={cn(
						"relative overflow-hidden rounded-[24px] cursor-pointer transition-all duration-500 ease-out",
						activeId === item.id ? "flex-[3]" : "flex-[1]",
						"h-[300px] lg:h-full"
					)}
				>
					{/* Background Image */}
					<img
						src={item.image}
						alt={item.title}
						className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
					/>

					{/* Overlay Gradient */}
					<div className={cn(
						"absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent",
						activeId === item.id ? "opacity-80" : "opacity-60 hover:opacity-70"
					)} />

					{/* Content */}
					<div className="absolute inset-0 flex flex-col justify-end p-8">
						<motion.h3
							layout="position"
							className={cn(
								"font-bold text-white mb-2 leading-tight",
								activeId === item.id ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"
							)}
						>
							{item.title}
						</motion.h3>

						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: activeId === item.id ? 1 : 0,
								height: activeId === item.id ? "auto" : 0
							}}
							transition={{ duration: 0.3 }}
						>
							<p className="text-gray-200 text-lg leading-relaxed max-w-xl">
								{item.description}
							</p>

							{/* Optional: 'View More' link or arrow could go here */}
						</motion.div>
					</div>
				</motion.div>
			))}
		</div>
	);
}
