import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/Button";

interface ProductHeroProps {
	title: React.ReactNode;
	description: string;
	badgeText: string;
	badgeColor?: string;
	imageSrc: string;
	primaryCtaText: string;
	primaryCtaLink: string;
	secondaryCtaText: string;
	secondaryCtaLink: string;
	onSecondaryCtaClick?: () => void;
}

export function ProductHero({
	title,
	description,
	badgeText,
	badgeColor = "bg-[var(--renoz-green)]",
	imageSrc,
	primaryCtaText,
	primaryCtaLink,
	secondaryCtaText,
	secondaryCtaLink,
	onSecondaryCtaClick,
}: ProductHeroProps) {
	const targetRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end start"],
	});

	const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
	const textY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

	return (
		<section
			ref={targetRef}
			className="relative h-screen min-h-[800px] flex flex-col justify-center items-center text-center overflow-hidden bg-black"
		>
			<motion.div
				className="absolute inset-0 z-0"
				style={{ opacity: heroOpacity, scale: heroScale }}
			>
				<motion.div
					className="absolute inset-0"
					initial={{ scale: 1.15 }}
					animate={{ scale: 1 }}
					transition={{ duration: 15, ease: "easeOut" }}
				>
					<img
						src={imageSrc}
						alt="Hero Background"
						className="w-full h-full object-cover opacity-60"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
				</motion.div>
			</motion.div>

			<motion.div
				className="relative z-10 max-w-5xl px-4 mt-[-5vh] flex flex-col items-center"
				style={{ y: textY }}
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 mb-8"
				>
					<span
						className={`w-2 h-2 rounded-full ${badgeColor} animate-pulse`}
					/>
					<span className="text-white text-sm font-medium tracking-wide uppercase">
						{badgeText}
					</span>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
					className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-white drop-shadow-2xl leading-tight"
				>
					{title}
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
					className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md mb-12"
				>
					{description}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="flex flex-col sm:flex-row gap-4"
				>
					<Button
						variant="primary"
						size="lg"
						to={primaryCtaLink}
						className="rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all min-w-[200px]"
					>
						{primaryCtaText}
					</Button>
					{onSecondaryCtaClick ? (
						<Button
							variant="outline"
							size="lg"
							onClick={onSecondaryCtaClick}
							className="rounded-full px-10 py-7 text-lg backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white hover:text-black transition-all min-w-[200px]"
						>
							{secondaryCtaText}
						</Button>
					) : (
						<Button
							variant="outline"
							size="lg"
							to={secondaryCtaLink}
							className="rounded-full px-10 py-7 text-lg backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white hover:text-black transition-all min-w-[200px]"
						>
							{secondaryCtaText}
						</Button>
					)}
				</motion.div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 1 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
			>
				<ChevronDown className="w-8 h-8 text-white/30" />
			</motion.div>
		</section>
	);
}
