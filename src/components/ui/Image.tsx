import { type ImgHTMLAttributes, useRef, useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	fallback?: string;
	alt: string;
	expandable?: boolean;
}

export default function Image({
	src,
	fallback,
	alt,
	expandable = false,
	...props
}: ImageProps) {
	const [imgSrc, setImgSrc] = useState(src);
	const [hasError, setHasError] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	const handleError = () => {
		if (fallback && !hasError) {
			setImgSrc(fallback);
			setHasError(true);
		}
	};

	const image = (
		<img
			src={imgSrc}
			alt={alt}
			onError={handleError}
			loading="lazy"
			decoding="async"
			fetchPriority={props.fetchPriority || "auto"}
			{...props}
		/>
	);

	if (!expandable) return image;

	return (
		<>
			<button
				type="button"
				onClick={() => dialogRef.current?.showModal()}
				className="block w-full h-full cursor-zoom-in overflow-hidden bg-transparent p-0 text-left"
				aria-label={`Expand image: ${alt}`}
			>
				{image}
			</button>

			<dialog
				ref={dialogRef}
				className="m-auto max-w-[min(96vw,1600px)] max-h-[96vh] overflow-visible rounded-xl bg-transparent p-0 backdrop:bg-black/90 backdrop:backdrop-blur-sm"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						event.currentTarget.close();
					}
				}}
			>
				<form method="dialog">
					<button
						type="submit"
						className="absolute -top-11 right-0 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-[var(--renoz-green)]"
					>
						Close
					</button>
					<button
						type="submit"
						className="block max-h-[92vh] max-w-[96vw] cursor-zoom-out overflow-auto rounded-xl bg-white p-0"
						aria-label="Close expanded image"
					>
						<img
							src={imgSrc}
							alt={alt}
							className="block h-auto max-h-none w-auto max-w-none"
						/>
					</button>
				</form>
			</dialog>
		</>
	);
}
