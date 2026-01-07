import { useEffect, useRef } from "react";

/**
 * Hook for managing AbortController instances to cancel API requests
 * Prevents memory leaks and race conditions in API calls
 */
export function useAbortController() {
	const abortControllerRef = useRef<AbortController | null>(null);

	// Create new AbortController on mount
	useEffect(() => {
		abortControllerRef.current = new AbortController();

		// Cleanup on unmount
		return () => {
			if (abortControllerRef.current) {
				abortControllerRef.current.abort();
				abortControllerRef.current = null;
			}
		};
	}, []);

	const getSignal = () => {
		if (!abortControllerRef.current) {
			abortControllerRef.current = new AbortController();
		}
		return abortControllerRef.current.signal;
	};

	const abort = () => {
		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
			// Create a new one for future requests
			abortControllerRef.current = new AbortController();
		}
	};

	const isAborted = () => {
		return abortControllerRef.current?.signal.aborted ?? false;
	};

	return {
		getSignal,
		abort,
		isAborted,
		controller: abortControllerRef.current,
	};
}

/**
 * Hook for managing multiple AbortControllers (useful for complex components)
 */
export function useAbortControllerRegistry() {
	const controllersRef = useRef<Map<string, AbortController>>(new Map());

	useEffect(() => {
		// Cleanup all controllers on unmount
		return () => {
			controllersRef.current.forEach((controller) => {
				try {
					controller.abort();
				} catch (error) {
					console.warn("Error aborting controller:", error);
				}
			});
			controllersRef.current.clear();
		};
	}, []);

	const getController = (key: string) => {
		if (!controllersRef.current.has(key)) {
			controllersRef.current.set(key, new AbortController());
		}
		const controller = controllersRef.current.get(key);
		if (!controller) {
			throw new Error(`No AbortController found for key: ${key}`);
		}
		return controller;
	};

	const abortController = (key: string) => {
		const controller = controllersRef.current.get(key);
		if (controller) {
			controller.abort();
			controllersRef.current.delete(key);
		}
	};

	const abortAll = () => {
		controllersRef.current.forEach((controller) => {
			try {
				controller.abort();
			} catch (error) {
				console.warn("Error aborting controller:", error);
			}
		});
		controllersRef.current.clear();
	};

	return {
		getController,
		abortController,
		abortAll,
	};
}
