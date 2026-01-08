import { useEffect, useRef, useState } from "react";

interface TurnstileProps {
	siteKey: string;
	onVerify: (token: string) => void;
	onError?: () => void;
	onExpire?: () => void;
	theme?: "light" | "dark" | "auto";
	size?: "normal" | "compact";
	className?: string;
}

declare global {
	interface Window {
		turnstile?: {
			render: (
				element: HTMLElement,
				options: {
					sitekey: string;
					callback: (token: string) => void;
					"error-callback"?: () => void;
					"expired-callback"?: () => void;
					theme?: "light" | "dark" | "auto";
					size?: "normal" | "compact";
				},
			) => string;
			reset: (widgetId: string) => void;
			remove: (widgetId: string) => void;
		};
	}
}

export default function Turnstile({
	siteKey,
	onVerify,
	onError,
	onExpire,
	theme = "auto",
	size = "normal",
	className = "",
}: TurnstileProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const widgetIdRef = useRef<string | null>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Load Turnstile script
		if (window.turnstile) {
			setIsLoaded(true);
			return;
		}

		const script = document.createElement("script");
		script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
		script.async = true;
		script.defer = true;
		script.onload = () => setIsLoaded(true);
		document.head.appendChild(script);

		return () => {
			// Cleanup script if component unmounts
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	}, []);

	useEffect(() => {
		if (
			!isLoaded ||
			!window.turnstile ||
			!containerRef.current ||
			widgetIdRef.current ||
			!siteKey
		) {
			return;
		}

		// Render Turnstile widget
		const id = window.turnstile.render(containerRef.current, {
			sitekey: siteKey,
			callback: onVerify,
			"error-callback": onError,
			"expired-callback": onExpire,
			theme,
			size,
		});

		widgetIdRef.current = id;

		return () => {
			// Cleanup widget on unmount
			if (widgetIdRef.current && window.turnstile) {
				window.turnstile.remove(widgetIdRef.current);
				widgetIdRef.current = null;
			}
		};
	}, [isLoaded, siteKey, onVerify, onError, onExpire, theme, size]);

	return <div ref={containerRef} className={className} />;
}
