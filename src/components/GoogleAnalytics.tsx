import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

interface GoogleAnalyticsProps {
  measurementId?: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    if (!measurementId || typeof window === 'undefined') return

    // Initialize gtag if not already done
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || []

      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }

      window.gtag('js', new Date())
    }

    // Configure GA4
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_features: false,
      custom_map: {
        'custom_parameter_1': 'page_location'
      }
    })

    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [measurementId])

  return null
}