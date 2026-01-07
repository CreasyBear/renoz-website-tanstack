import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Skip links for keyboard navigation accessibility
 * Allows users to skip to main content areas
 */
export function SkipLinks() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Show skip links when Tab is pressed
			if (event.key === "Tab") {
				setIsVisible(true);

				// Hide after 3 seconds of no interaction
				setTimeout(() => setIsVisible(false), 3000);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	if (!isVisible) return null;

	return (
		<div
			className={cn(
				"fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-lg",
				"transform transition-transform duration-200",
			)}
		>
			<div className="flex gap-4 p-4">
				<button
					onClick={() => {
						setIsVisible(false);
						document.getElementById("main-content")?.focus();
					}}
					className="px-4 py-2 bg-[var(--renoz-green)] text-white rounded-md hover:bg-[var(--renoz-green-dark)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
				>
					Skip to main content
				</button>
				<button
					onClick={() => {
						setIsVisible(false);
						document.getElementById("navigation")?.focus();
					}}
					className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
				>
					Skip to navigation
				</button>
				<button
					onClick={() => {
						setIsVisible(false);
						document.getElementById("footer")?.focus();
					}}
					className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
				>
					Skip to footer
				</button>
			</div>
		</div>
	);
}
