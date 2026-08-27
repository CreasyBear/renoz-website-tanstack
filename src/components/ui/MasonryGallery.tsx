import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GOOGLE_BUSINESS } from "../../lib/google-business";
import Image from "./Image";

interface ImageItem {
	src: string;
	alt: string;
	caption?: string;
	location?: string;
	size?: "sm" | "md" | "lg";
	link?: string;
}

interface MasonryGalleryProps {
	images: ImageItem[];
	title?: string;
	showGoogleReviews?: boolean;
	mobileLayout?: "grid" | "carousel";
}

export default function MasonryGallery({
	images,
	title,
	showGoogleReviews = false,
	mobileLayout = "carousel",
}: MasonryGalleryProps) {
	return (
		<div className="w-full py-12">
			<div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6 px-4 md:px-0">
				{title && (
					<h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight">
						{title}
					</h2>
				)}

				{showGoogleReviews && (
					<a
						href={GOOGLE_BUSINESS.reviewsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-bold text-[var(--black)] shadow-sm transition-colors hover:border-[var(--renoz-green)] hover:text-[var(--renoz-green-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--renoz-green)]"
					>
						Read our Google reviews
						<ExternalLink className="size-4" aria-hidden="true" />
					</a>
				)}
			</div>

			{/* Mobile: Horizontal Scroll Snap Carousel (Only if mobileLayout is 'carousel') */}
			{mobileLayout === "carousel" && (
				<div className="md:hidden">
					<div className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-3 pb-4 hide-scrollbar -mx-3 md:mx-0">
						{images.map((img, index) => {
							const imageElement = (
								<Image
									src={img.src}
									alt={img.alt}
									className="w-full h-full object-cover rounded-[20px]"
									width={350}
									height={400}
								/>
							);

							const overlayElement = (img.caption || img.location) && (
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
									{img.location && (
										<span className="text-[var(--renoz-green)] text-[10px] font-bold uppercase tracking-widest mb-1">
											{img.location}
										</span>
									)}
									{img.caption && (
										<p className="text-white font-medium text-base leading-tight">
											{img.caption}
										</p>
									)}
								</div>
							);

							return (
								<div
									key={index}
									className="snap-center shrink-0 w-[80vw] h-[400px] relative rounded-[20px] overflow-hidden shadow-sm"
								>
									{img.link ? (
										<Link to={img.link} className="block w-full h-full">
											{imageElement}
											{overlayElement}
										</Link>
									) : (
										<>
											{imageElement}
											{overlayElement}
										</>
									)}
								</div>
							);
						})}
					</div>
					<div className="flex justify-center gap-1.5 mt-4">
						{images.map((_, i) => (
							<div
								key={i}
								className={`h-1.5 rounded-full transition-all ${
									i === 0 ? "w-6 bg-[var(--black)]" : "w-1.5 bg-gray-300"
								}`}
							/>
						))}
					</div>
				</div>
			)}

			{/* Main Grid: Visible on Desktop, OR on Mobile if mobileLayout='grid' */}
			<div
				className={`${
					mobileLayout === "carousel" ? "hidden md:block" : "block"
				} columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6`}
			>
				{images.map((img, index) => {
					const imageElement = (
						<Image
							src={img.src}
							alt={img.alt}
							className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
							width={400}
							height={300} // Approximate aspect ratio, actual height varies
						/>
					);

					const overlayElement = (img.caption || img.location) && (
						<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
							{img.location && (
								<span className="text-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest mb-1">
									{img.location}
								</span>
							)}
							{img.caption && (
								<p className="text-white font-medium text-lg leading-tight">
									{img.caption}
								</p>
							)}
						</div>
					);

					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="break-inside-avoid relative group rounded-[24px] overflow-hidden bg-gray-100 mb-6"
						>
							{img.link ? (
								<Link
									to={img.link}
									className="block w-full h-full cursor-pointer"
								>
									{imageElement}
									{overlayElement}
								</Link>
							) : (
								<>
									{imageElement}
									{overlayElement}
								</>
							)}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
