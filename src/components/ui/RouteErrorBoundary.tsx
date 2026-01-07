import { Link } from "@tanstack/react-router";
import React from "react";
import { Button } from "./Button";

interface RouteErrorBoundaryProps {
	children: React.ReactNode;
	routeName?: string;
}

interface RouteErrorBoundaryState {
	hasError: boolean;
	error?: Error;
	errorInfo?: React.ErrorInfo;
}

export class RouteErrorBoundary extends React.Component<
	RouteErrorBoundaryProps,
	RouteErrorBoundaryState
> {
	constructor(props: RouteErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): RouteErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({ errorInfo });

		// Enhanced error reporting for routes
		console.error(
			`Route Error in ${this.props.routeName || "unknown route"}:`,
			error,
			errorInfo,
		);

		// Report to analytics
		if (window?.plausible) {
			window.plausible("Route Error", {
				props: {
					route: this.props.routeName || "unknown",
					message: error?.message || "Unknown route error",
					stack: error?.stack?.substring(0, 500) || "",
					componentStack: errorInfo?.componentStack?.substring(0, 500) || "",
				},
			});
		}
	}

	resetError = () => {
		this.setState({ hasError: false, error: undefined, errorInfo: undefined });
	};

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-[400px] bg-[var(--cream)] flex items-center justify-center px-4 py-16">
					<div className="text-center max-w-lg">
						<div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
							<svg
								className="w-8 h-8 text-red-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
								/>
							</svg>
						</div>

						<h1 className="text-3xl font-bold text-[var(--black)] mb-4">
							Page Unavailable
						</h1>

						<p className="text-[var(--text-muted)] mb-8 max-w-md mx-auto">
							Sorry, we encountered an error loading this page. This might be
							due to a temporary issue or missing content.
						</p>

						{this.state.error && process.env.NODE_ENV === "development" && (
							<details className="mb-8 text-left bg-white p-4 rounded-lg border border-red-200 max-w-full overflow-auto">
								<summary className="cursor-pointer font-semibold mb-2 text-red-700">
									Error Details (Development) - {this.props.routeName}
								</summary>
								<div className="text-xs text-red-600 space-y-2">
									<div>
										<strong>Message:</strong> {this.state.error.message}
									</div>
									{this.state.error.stack && (
										<div>
											<strong>Stack:</strong>
											<pre className="whitespace-pre-wrap mt-1 text-xs">
												{this.state.error.stack}
											</pre>
										</div>
									)}
									{this.state.errorInfo?.componentStack && (
										<div>
											<strong>Component Stack:</strong>
											<pre className="whitespace-pre-wrap mt-1 text-xs">
												{this.state.errorInfo.componentStack}
											</pre>
										</div>
									)}
								</div>
							</details>
						)}

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								onClick={this.resetError}
								className="bg-[var(--renoz-green)] hover:bg-[var(--renoz-green-dark)] text-white"
							>
								Try Again
							</Button>

							<Link to="/">
								<Button
									variant="outline"
									className="border-[var(--renoz-green)] text-[var(--renoz-green)] hover:bg-[var(--renoz-green)] hover:text-white"
								>
									Go Home
								</Button>
							</Link>
						</div>

						<div className="mt-8 pt-8 border-t border-gray-200">
							<p className="text-sm text-[var(--text-muted)]">
								If this problem persists, please{" "}
								<Link
									to="/contact"
									className="text-[var(--renoz-green)] hover:underline"
								>
									contact our support team
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
