import React from "react";
import { Button } from "./Button";

interface ApiError {
	message: string;
	status?: number;
	code?: string;
	url?: string;
}

// Helper function to safely extract API error properties
function extractApiErrorProperties(
	error: Error,
): Pick<ApiError, "status" | "code" | "url"> {
	const apiError = error as Error & {
		status?: number;
		code?: string;
		url?: string;
	};
	return {
		status: apiError.status,
		code: apiError.code,
		url: apiError.url,
	};
}

interface ApiErrorBoundaryState {
	hasError: boolean;
	error?: ApiError;
	retryCount: number;
}

interface ApiErrorBoundaryProps {
	children: React.ReactNode;
	onRetry?: () => void;
	maxRetries?: number;
	fallback?: React.ComponentType<{
		error?: ApiError;
		retry: () => void;
		retryCount: number;
		maxRetries: number;
	}>;
}

export class ApiErrorBoundary extends React.Component<
	ApiErrorBoundaryProps,
	ApiErrorBoundaryState
> {
	private retryTimeoutId: NodeJS.Timeout | null = null;

	constructor(props: ApiErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
			retryCount: 0,
		};
	}

	static getDerivedStateFromError(error: Error): ApiErrorBoundaryState {
		// Check if this is an API-related error
		const isApiError =
			error.message.includes("fetch") ||
			error.message.includes("network") ||
			error.message.includes("API") ||
			error.message.includes("http");

		if (isApiError) {
			const apiProps = extractApiErrorProperties(error);
			return {
				hasError: true,
				error: {
					message: error.message,
					status: apiProps.status,
					code: apiProps.code,
				},
				retryCount: 0,
			};
		}

		// Re-throw non-API errors
		throw error;
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		const isApiError =
			error.message.includes("fetch") ||
			error.message.includes("network") ||
			error.message.includes("API") ||
			error.message.includes("http");

		if (isApiError) {
			console.error("API Error caught:", error, errorInfo);

			// Report API errors
			if (window?.plausible) {
				const apiProps = extractApiErrorProperties(error);
				window.plausible("API Error", {
					props: {
						message: error?.message || "Unknown API error",
						stack: error?.stack?.substring(0, 500) || "",
						status: apiProps.status ?? 0,
						url: apiProps.url ?? "",
					},
				});
			}
		} else {
			// Re-throw non-API errors to be caught by parent error boundaries
			throw error;
		}
	}

	componentWillUnmount() {
		if (this.retryTimeoutId) {
			clearTimeout(this.retryTimeoutId);
		}
	}

	retry = () => {
		const { onRetry, maxRetries = 3 } = this.props;
		const { retryCount } = this.state;

		if (retryCount < maxRetries) {
			this.setState((prev) => ({
				retryCount: prev.retryCount + 1,
				hasError: false,
				error: undefined,
			}));

			// Exponential backoff for retries
			const delay = 2 ** retryCount * 1000; // 1s, 2s, 4s...

			this.retryTimeoutId = setTimeout(() => {
				if (onRetry) {
					onRetry();
				}
			}, delay);
		}
	};

	render() {
		if (this.state.hasError) {
			const { fallback: FallbackComponent, maxRetries = 3 } = this.props;
			const { error, retryCount } = this.state;

			if (FallbackComponent) {
				return (
					<FallbackComponent
						error={error}
						retry={this.retry}
						retryCount={retryCount}
						maxRetries={maxRetries}
					/>
				);
			}

			return (
				<div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
					<div className="flex items-start">
						<div className="flex-shrink-0">
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="ml-3 flex-1">
							<h3 className="text-sm font-medium text-yellow-800">
								Connection Error
							</h3>
							<div className="mt-2 text-sm text-yellow-700">
								<p>
									Unable to load data. This might be due to a network issue or
									server problem.
								</p>
								{error?.message && (
									<p className="mt-1 font-mono text-xs">{error.message}</p>
								)}
							</div>
							<div className="mt-4">
								<div className="-mx-2 -my-1.5 flex">
									<Button
										size="sm"
										onClick={this.retry}
										disabled={retryCount >= maxRetries}
										className="bg-yellow-600 hover:bg-yellow-700 text-white"
									>
										{retryCount >= maxRetries
											? "Max Retries Reached"
											: `Retry (${retryCount}/${maxRetries})`}
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
