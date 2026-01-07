import { useEffect, useRef } from "react";

/**
 * Hook for managing cleanup functions to prevent memory leaks
 * Automatically cleans up all registered functions on unmount
 */
export function useCleanupRegistry() {
	const cleanupFunctions = useRef<Set<() => void>>(new Set());

	useEffect(() => {
		// Cleanup on unmount
		return () => {
			cleanupFunctions.current.forEach((cleanup) => {
				try {
					cleanup();
				} catch (error) {
					console.warn("Error during cleanup:", error);
				}
			});
			cleanupFunctions.current.clear();
		};
	}, []);

	const register = (cleanup: () => void) => {
		cleanupFunctions.current.add(cleanup);
		return () => {
			cleanupFunctions.current.delete(cleanup);
		};
	};

	const unregister = (cleanup: () => void) => {
		cleanupFunctions.current.delete(cleanup);
	};

	return { register, unregister };
}

/**
 * Hook for safe event listener management with automatic cleanup
 */
export function useEventListener<K extends keyof WindowEventMap>(
	element: EventTarget | null | undefined,
	type: K,
	listener: (event: WindowEventMap[K]) => void,
	options?: boolean | AddEventListenerOptions,
) {
	const cleanupRegistry = useCleanupRegistry();
	const listenerRef = useRef(listener);
	listenerRef.current = listener;

	useEffect(() => {
		if (!element) return;

		const eventListener = (event: Event) => {
			listenerRef.current(event as WindowEventMap[K]);
		};

		element.addEventListener(type, eventListener as EventListener, options);

		return cleanupRegistry.register(() => {
			element.removeEventListener(
				type,
				eventListener as EventListener,
				options,
			);
		});
	}, [element, type, options, cleanupRegistry]);
}

/**
 * Hook for safe interval management with automatic cleanup
 */
export function useInterval(callback: () => void, delay: number | null) {
	const cleanupRegistry = useCleanupRegistry();
	const callbackRef = useRef(callback);
	callbackRef.current = callback;

	useEffect(() => {
		if (delay === null) return;

		const id = setInterval(() => callbackRef.current(), delay);

		return cleanupRegistry.register(() => {
			clearInterval(id);
		});
	}, [delay, cleanupRegistry]);
}

/**
 * Hook for safe timeout management with automatic cleanup
 */
export function useTimeout(callback: () => void, delay: number | null) {
	const cleanupRegistry = useCleanupRegistry();
	const callbackRef = useRef(callback);
	callbackRef.current = callback;

	useEffect(() => {
		if (delay === null) return;

		const id = setTimeout(() => callbackRef.current(), delay);

		return cleanupRegistry.register(() => {
			clearTimeout(id);
		});
	}, [delay, cleanupRegistry]);
}
