import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Hook for iOS touch event optimizations
 * Adds passive listeners and prevents unwanted behaviors
 */
export function useTouchOptimization() {
	const elementRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		// Detect iOS Safari
		const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

		if (isIOS) {
			// Add passive touch listeners for better performance
			const handleTouchStart = (e: TouchEvent) => {
				// Prevent zoom on double tap
				if (e.touches.length > 1) {
					e.preventDefault();
				}
			};

			const handleTouchMove = (e: TouchEvent) => {
				// Allow native scrolling but prevent bounce on modals
				if (element.classList.contains('modal') || element.classList.contains('overlay')) {
					e.preventDefault();
				}
			};

			element.addEventListener('touchstart', handleTouchStart, { passive: false });
			element.addEventListener('touchmove', handleTouchMove, { passive: false });

			return () => {
				element.removeEventListener('touchstart', handleTouchStart);
				element.removeEventListener('touchmove', handleTouchMove);
			};
		}
	}, []);

	return elementRef;
}

/**
 * Utility to detect if running on iOS Safari
 */
export const isIOS = () => {
	return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
};

/**
 * Utility to detect if running on Safari (any version)
 */
export const isSafari = () => {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};
