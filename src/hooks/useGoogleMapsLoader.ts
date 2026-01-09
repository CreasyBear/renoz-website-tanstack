import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";

// Module-level cache to prevent multiple API loads
let googleMapsPromise: Promise<void> | null = null;
let isGoogleMapsLoaded = false;

/**
 * Hook to load the Google Maps JavaScript API with Places library.
 * Uses a singleton pattern to ensure the API is only loaded once.
 *
 * @param apiKey - Google Maps API key
 * @returns Object containing loading states
 */
export function useGoogleMapsLoader(apiKey: string): {
	isLoaded: boolean;
	isLoading: boolean;
	error: string | null;
} {
	const [isLoaded, setIsLoaded] = useState(isGoogleMapsLoaded);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		// Skip if no API key provided
		if (!apiKey) {
			setError("Google Maps API key is not configured");
			return;
		}

		// Already loaded - update local state
		if (isGoogleMapsLoaded) {
			setIsLoaded(true);
			return;
		}

		// Already loading - wait for existing promise
		if (googleMapsPromise) {
			setIsLoading(true);
			googleMapsPromise
				.then(() => {
					if (isMounted) {
						setIsLoaded(true);
						setIsLoading(false);
					}
				})
				.catch((err) => {
					if (isMounted) {
						setError(err.message || "Failed to load Google Maps");
						setIsLoading(false);
					}
				});
			return () => {
				isMounted = false;
			};
		}

		// Start loading
		setIsLoading(true);

		const loader = new Loader({
			apiKey,
			version: "weekly",
			libraries: ["places"],
		});

		googleMapsPromise = loader
			.load()
			.then(() => {
				isGoogleMapsLoaded = true;
				if (isMounted) {
					setIsLoaded(true);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				const errorMessage = err.message || "Failed to load Google Maps API";
				if (isMounted) {
					setError(errorMessage);
					setIsLoading(false);
				}
				// Reset promise so it can retry on next mount
				googleMapsPromise = null;
			});

		return () => {
			isMounted = false;
		};
	}, [apiKey]);

	return { isLoaded, isLoading, error };
}
