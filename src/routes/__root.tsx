import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WebVitals from '../components/WebVitals'

// Import styles directly to ensure Tailwind processing
import '../styles.css'

const baseUrl = 'https://renoz.energy'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'RENOZ Energy - Perth\'s Own Battery Manufacturer',
      },
      {
        name: 'description',
        content: 'Building Western Australia\'s Battery Capability. Perth-based OEM of residential and commercial battery systems.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'RENOZ Energy',
      },
      {
        property: 'og:title',
        content: 'RENOZ Energy - Perth\'s Own Battery Manufacturer',
      },
      {
        property: 'og:description',
        content: 'Building Western Australia\'s Battery Capability. Perth-based OEM of residential and commercial battery systems.',
      },
      {
        property: 'og:image',
        content: `${baseUrl}/images/optimized/og-image.webp`,
      },
      {
        property: 'og:url',
        content: baseUrl,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'RENOZ Energy - Perth\'s Own Battery Manufacturer',
      },
      {
        name: 'twitter:description',
        content: 'Building Western Australia\'s Battery Capability. Perth-based OEM of residential and commercial battery systems.',
      },
      {
        name: 'twitter:image',
        content: `${baseUrl}/images/optimized/twitter-card.jpg`,
      },
      {
        name: 'theme-color',
        content: '#00B140',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/images/optimized/apple-icon.webp',
      },
      {
        rel: 'alternate',
        type: 'text/plain',
        href: '/llms.txt',
        title: 'LLM-friendly company information',
      },
    ],
    scripts: [
      // Plausible Analytics (Privacy-focused, GDPR compliant, no cookies)
      {
        src: 'https://plausible.io/js/script.js',
        defer: true,
        'data-domain': 'renoz.energy',
      },
      // Structured Data - LocalBusiness (better for local SEO than Organization)
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': baseUrl,
          name: 'RENOZ Energy',
          alternateName: 'RENOZ Energy Pty Ltd',
          url: baseUrl,
          logo: `${baseUrl}/images/optimized/logo-renoz.png`,
          image: `${baseUrl}/images/optimized/og-image.webp`,
          description: 'Perth-based OEM manufacturer of residential and commercial battery energy storage systems',
          priceRange: '$$',
          telephone: '+611800736693',
          email: 'sales@renoz.energy',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Unit 4, 8 Murphy Street',
            addressLocality: 'O\'Connor',
            addressRegion: 'WA',
            postalCode: '6163',
            addressCountry: 'AU',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -32.0501,
            longitude: 115.7997,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '17:00',
            },
          ],
          sameAs: [
            'https://www.linkedin.com/company/renoz-energy',
            'https://www.facebook.com/renozenergy',
            'https://www.instagram.com/renozenergy',
          ],
          areaServed: {
            '@type': 'State',
            name: 'Western Australia',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Battery Energy Storage Systems',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'Residential Battery Systems',
                  description: '10-50kWh lithium battery systems for homes',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'Rural Battery Systems',
                  description: '50-200kWh battery systems for farms and off-grid properties',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'Commercial Battery Systems',
                  description: '200kWh+ battery systems for businesses and industry',
                },
              },
            ],
          },
        }),
      },
    ],
  }),

  notFoundComponent: NotFoundComponent,
  shellComponent: RootDocument,
})

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[var(--black)] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Page Not Found</h2>
        <p className="text-[var(--text-muted)] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-[var(--renoz-green)] text-white font-bold rounded-full hover:bg-[var(--renoz-green-dark)] transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  // Register service worker in production
  if (typeof window !== 'undefined' && !import.meta.env.DEV) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Silently fail - PWA is an enhancement, not a requirement
        })
      })
    }
  }

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <WebVitals />
        <Header />
        <main>{children}</main>
        <Footer />
        {import.meta.env.DEV && (
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        )}
        <Scripts />
      </body>
    </html>
  )
}
