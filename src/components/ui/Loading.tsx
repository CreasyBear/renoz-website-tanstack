import type React from "react";
import { cn } from "@/lib/utils";

interface LoadingProps {
	size?: "sm" | "md" | "lg";
	variant?: "spinner" | "dots" | "pulse" | "skeleton";
	className?: string;
	text?: string;
	ariaLabel?: string;
}

/**
 * Accessible loading component with multiple variants
 */
export function Loading({
	size = "md",
	variant = "spinner",
	className = "",
	text,
	ariaLabel = "Loading",
}: LoadingProps) {
	const sizeClasses = {
		sm: "w-4 h-4",
		md: "w-8 h-8",
		lg: "w-12 h-12",
	};

	if (variant === "skeleton") {
		return (
			<div className={cn("animate-pulse bg-gray-200 rounded", className)}>
				{text && <span className="sr-only">{text}</span>}
			</div>
		);
	}

	if (variant === "dots") {
		return (
			<div className={cn("flex space-x-1", className)}>
				<div
					className={cn(
						"bg-current rounded-full animate-bounce",
						sizeClasses.sm,
					)}
					style={{ animationDelay: "0ms" }}
				></div>
				<div
					className={cn(
						"bg-current rounded-full animate-bounce",
						sizeClasses.sm,
					)}
					style={{ animationDelay: "150ms" }}
				></div>
				<div
					className={cn(
						"bg-current rounded-full animate-bounce",
						sizeClasses.sm,
					)}
					style={{ animationDelay: "300ms" }}
				></div>
				{text && <span className="sr-only ml-2">{text}</span>}
			</div>
		);
	}

	if (variant === "pulse") {
		return (
			<div className={cn("animate-pulse", className)}>
				<div className={cn("bg-current rounded-full", sizeClasses[size])}></div>
				{text && <span className="sr-only">{text}</span>}
			</div>
		);
	}

	// Default spinner variant
	return (
		<div className={cn("inline-flex items-center", className)}>
			<svg
				className={cn("animate-spin text-current", sizeClasses[size])}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<path
					className="opacity-75"
					fill="currentColor"
					d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
			{text && <span className="ml-2 text-sm">{text}</span>}
			<span className="sr-only">Loading...</span>
		</div>
	);
}

/**
 * Loading overlay for full-screen or component-level loading
 */
interface LoadingOverlayProps {
	isLoading: boolean;
	children: React.ReactNode;
	variant?: LoadingProps["variant"];
	size?: LoadingProps["size"];
	text?: string;
	className?: string;
	fullscreen?: boolean;
}

export function LoadingOverlay({
	isLoading,
	children,
	variant = "spinner",
	size = "lg",
	text = "Loading...",
	className = "",
	fullscreen = false,
}: LoadingOverlayProps) {
	if (!isLoading) return <>{children}</>;

	const overlayClasses = fullscreen
		? "fixed inset-0 z-50 bg-white/80 backdrop-blur-sm"
		: "absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg";

	return (
		<div className="relative">
			{/* Original content (visually hidden when loading) */}
			<div className={cn(isLoading && "opacity-50 pointer-events-none")}>
				{children}
			</div>

			{/* Loading overlay */}
			{isLoading && (
				<div
					className={cn(
						"flex items-center justify-center",
						overlayClasses,
						className,
					)}
					aria-live="polite"
				>
					<Loading variant={variant} size={size} text={text} />
				</div>
			)}
		</div>
	);
}

/**
 * Skeleton loading component for content placeholders
 */
interface SkeletonProps {
	className?: string;
	lines?: number;
	avatar?: boolean;
}

export function Skeleton({
	className = "",
	lines = 3,
	avatar = false,
}: SkeletonProps) {
	return (
		<div className={cn("animate-pulse", className)}>
			{avatar && (
				<div className="flex items-center space-x-4 mb-4">
					<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
					<div className="space-y-2">
						<div className="h-4 bg-gray-200 rounded w-32"></div>
						<div className="h-3 bg-gray-200 rounded w-24"></div>
					</div>
				</div>
			)}

			<div className="space-y-3">
				{Array.from({ length: lines }, (_, i) => (
					<div
						key={i}
						className={cn(
							"h-4 bg-gray-200 rounded",
							i === lines - 1 ? "w-3/4" : "w-full", // Last line shorter
						)}
					></div>
				))}
			</div>

			<span className="sr-only">Loading content...</span>
		</div>
	);
}
