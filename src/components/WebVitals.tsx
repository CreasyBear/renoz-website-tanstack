import { useEffect } from 'react'
import type { Metric } from 'web-vitals'

/**
 * Web Vitals Tracking Component
 * Monitors Core Web Vitals and sends to Plausible Analytics
 */
export default function WebVitals() {
  useEffect(() => {
    // Only run in production
    if (import.meta.env.DEV) return

    // Track Web Vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      const sendToAnalytics = (metric: Metric) => {
        // Send to Plausible as custom event
        if (window.plausible) {
          window.plausible('Web Vitals', {
            props: {
              metric: metric.name,
              value: Math.round(metric.value),
              rating: metric.rating,
            },
          })
        }

        // Log in development
        if (import.meta.env.DEV) {
          console.log(`[Web Vitals] ${metric.name}:`, {
            value: metric.value,
            rating: metric.rating,
          })
        }
      }

      // Track Core Web Vitals
      onCLS(sendToAnalytics)  // Cumulative Layout Shift
      onFCP(sendToAnalytics)  // First Contentful Paint
      onLCP(sendToAnalytics)  // Largest Contentful Paint
      onTTFB(sendToAnalytics) // Time to First Byte
      onINP(sendToAnalytics)  // Interaction to Next Paint (replaces FID)
    })
  }, [])

  return null
}

// Extend window type for Plausible
declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string | number> }) => void
  }
}

