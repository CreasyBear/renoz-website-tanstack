import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface YouTubeEmbedProps {
	videoId: string;
	title?: string;
	className?: string;
}

export function YouTubeEmbed({
	videoId,
	title = "YouTube video player",
	className,
}: YouTubeEmbedProps) {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div
			className={cn(
				"relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl",
				className,
			)}
		>
			{!isPlaying ? (
				<button
					type="button"
					onClick={() => setIsPlaying(true)}
					className="group absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
					aria-label={`Play ${title}`}
				>
					{/* Thumbnail Image */}
					<img
						src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
						alt={title}
						className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
						loading="lazy"
					/>

					{/* Play Button Overlay */}
					<div className="relative z-10 w-20 h-20 bg-[var(--renoz-green)] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
						<Play className="w-8 h-8 text-white fill-current ml-1" />
					</div>

					{/* Dark Overlay for better text/button contrast */}
					<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
				</button>
			) : (
				<iframe
					src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
					title={title}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="absolute inset-0 w-full h-full"
				/>
			)}
		</div>
	);
}