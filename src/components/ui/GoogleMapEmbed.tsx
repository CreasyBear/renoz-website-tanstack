import { GOOGLE_BUSINESS } from "../../lib/google-business";
import { cn } from "../../lib/utils";

interface GoogleMapEmbedProps {
	className?: string;
	title?: string;
}

export function GoogleMapEmbed({
	className,
	title = `Map showing ${GOOGLE_BUSINESS.name} at ${GOOGLE_BUSINESS.address}`,
}: GoogleMapEmbedProps) {
	return (
		<div
			className={cn(
				"relative aspect-[4/3] min-h-64 w-full overflow-hidden bg-gray-100",
				className,
			)}
		>
			<iframe
				src={GOOGLE_BUSINESS.embedUrl}
				title={title}
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				className="absolute inset-0 h-full w-full border-0"
			/>
		</div>
	);
}
