import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

interface TurnstileProps {
	siteKey: string;
	onVerify: (token: string) => void;
	onError?: () => void;
	onExpire?: () => void;
	onReset?: () => void;
	theme?: "light" | "dark" | "auto";
	size?: "normal" | "compact";
	className?: string;
}

export interface TurnstileRef {
	reset: () => void;
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
					"timeout-callback"?: () => void;
					theme?: "light" | "dark" | "auto";
					size?: "normal" | "compact";
				},
			) => string;
			reset: (widgetId: string) => void;
			remove: (widgetId: string) => void;
		};
	}
}

const Turnstile = forwardRef<TurnstileRef, TurnstileProps>(({
	siteKey,
	onVerify,
	onError,
	onExpire,
	onReset,
	theme = "auto",
	size = "normal",
	className = "",
}, ref) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const widgetIdRef = useRef<string | null>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// Use useCallback to prevent recreation of callbacks on every render
	const handleVerify = useCallback((token: string) => {
		setIsLoading(false);
		onVerify(token);
	}, [onVerify]);

	const handleError = useCallback(() => {
		setIsLoading(false);
		onError?.();
	}, [onError]);

	const handleExpire = useCallback(() => {
		setIsLoading(false);
		onExpire?.();
	}, [onExpire]);

	const handleTimeout = useCallback(() => {
		setIsLoading(false);
		// Reset widget on timeout to allow retry
		if (widgetIdRef.current && window.turnstile) {
			window.turnstile.reset(widgetIdRef.current);
			setIsLoading(true);
		}
	}, []);

	// Expose reset function via ref
	useImperativeHandle(ref, () => ({
		reset: () => {
			if (widgetIdRef.current && window.turnstile) {
				try {
					window.turnstile.reset(widgetIdRef.current);
					setIsLoading(true);
					onReset?.();
				} catch (error) {
					console.error("Failed to reset Turnstile widget:", error);
				}
			}
		},
	}), [onReset]);

	useEffect(() => {
		// Load Turnstile script only once
		if (window.turnstile) {
			setIsLoaded(true);
			return;
		}

		// Check if script is already loading
		const existingScript = document.querySelector(
			'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
		);

		if (existingScript) {
			// Wait for existing script to load
			const checkLoaded = () => {
				if (window.turnstile) {
					setIsLoaded(true);
				} else {
					setTimeout(checkLoaded, 100);
				}
			};
			checkLoaded();
			return;
		}

		const script = document.createElement("script");
		script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
		script.async = true;
		script.defer = true;
		script.onload = () => setIsLoaded(true);
		script.onerror = () => {
			console.error("Failed to load Turnstile script");
			setIsLoading(false);
		};
		document.head.appendChild(script);
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

		try {
			// Render Turnstile widget
			const id = window.turnstile.render(containerRef.current, {
				sitekey: siteKey,
				callback: handleVerify,
				"error-callback": handleError,
				"expired-callback": handleExpire,
				"timeout-callback": handleTimeout,
				theme,
				size,
			});

			widgetIdRef.current = id;
		} catch (error) {
			console.error("Failed to render Turnstile widget:", error);
			setIsLoading(false);
		}

		return () => {
			// Cleanup widget on unmount
			if (widgetIdRef.current && window.turnstile) {
				try {
					window.turnstile.remove(widgetIdRef.current);
				} catch (error) {
					console.error("Failed to remove Turnstile widget:", error);
				}
				widgetIdRef.current = null;
			}
		};
	}, [isLoaded, siteKey, handleVerify, handleError, handleExpire, handleTimeout, theme, size]);

	return (
		<div className={className}>
			<div ref={containerRef} />
			{isLoading && !widgetIdRef.current && (
				<div className="text-center text-sm text-gray-500 mt-2">
					Loading verification...
				</div>
			)}
		</div>
	);
});

Turnstile.displayName = "Turnstile";

export default Turnstile;
