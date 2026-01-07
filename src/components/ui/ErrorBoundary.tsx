import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

interface DefaultErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

function DefaultErrorFallback({ error, resetError }: DefaultErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[var(--black)] mb-4">Oops!</h1>
        <h2 className="text-2xl font-bold text-[var(--black)] mb-4">
          Something went wrong
        </h2>
        <p className="text-[var(--text-muted)] mb-8">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        {error && process.env.NODE_ENV === 'development' && (
          <details className="mb-8 text-left bg-white p-4 rounded-lg border">
            <summary className="cursor-pointer font-semibold mb-2">Error Details (Development)</summary>
            <pre className="text-xs text-red-600 whitespace-pre-wrap">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
        <div className="flex gap-4 justify-center">
          <button
            onClick={resetError}
            className="px-6 py-3 bg-[var(--renoz-green)] text-white font-bold rounded-full hover:bg-[var(--renoz-green-dark)] transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 border-2 border-[var(--renoz-green)] text-[var(--renoz-green)] font-bold rounded-full hover:bg-[var(--renoz-green)] hover:text-white transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}

// Hook version for functional components
export function useErrorHandler() {
  return (error: Error, errorInfo?: { componentStack?: string }) => {
    console.error('useErrorHandler caught an error:', error, errorInfo);

    if (window?.plausible) {
      window.plausible('Error', {
        props: {
          message: error?.message || 'Unknown error',
          stack: error?.stack?.substring(0, 500) || '',
          componentStack: errorInfo?.componentStack?.substring(0, 500) || '',
        }
      });
    }

    // In a real app, you might want to show a toast or modal here
    throw error; // Re-throw to let ErrorBoundary handle it
  };
}