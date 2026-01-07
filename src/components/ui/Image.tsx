import { type ImgHTMLAttributes, useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	fallback?: string;
	alt: string;
}

export default function Image({ src, fallback, alt, ...props }: ImageProps) {
	const [imgSrc, setImgSrc] = useState(src);
	const [hasError, setHasError] = useState(false);

	const handleError = () => {
		if (fallback && !hasError) {
			setImgSrc(fallback);
			setHasError(true);
		}
	};

	return (
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
}
