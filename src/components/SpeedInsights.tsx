import { useEffect } from "react";

/**
 * Vercel Speed Insights Component
 * Integrates Vercel Speed Insights for performance monitoring
 * 
 * This component injects the Speed Insights tracking script and provides
 * a hook for sending custom data to Vercel's performance monitoring.
 */
export default function SpeedInsights() {
	useEffect(() => {
		// Only run in production
		if (import.meta.env.DEV) return;

		// Inject the Speed Insights tracking script
		import("@vercel/speed-insights").then(({ injectSpeedInsights }) => {
			injectSpeedInsights();
		});
	}, []);

	return null;
}
