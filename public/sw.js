// RENOZ Energy - Service Worker
// Simple offline fallback and asset caching

const CACHE_NAME = 'renoz-v1'
const OFFLINE_URL = '/offline.html'

// Static assets to cache on install
const STATIC_CACHE = [
  '/',
  '/favicon.ico',
  '/images/optimized/logo-renoz.webp',
  '/images/optimized/default-bg.webp',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
]

// Routes that should never be cached (sensitive data, API calls, forms)
const SENSITIVE_ROUTES = [
  '/api/',
  '/admin',
  '/warranty',
  '/contact',
  '/supabase/',
  '/storage/',
  '/auth/',
]

// File extensions that should be cached (static assets only)
const CACHEABLE_EXTENSIONS = [
  '.js', '.css', '.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico', '.woff', '.woff2'
]

// Check if a URL should be cached
function shouldCache(url) {
  // Never cache sensitive routes
  if (SENSITIVE_ROUTES.some(route => url.includes(route))) {
    return false
  }

  // Only cache static assets
  const pathname = new URL(url).pathname
  return CACHEABLE_EXTENSIONS.some(ext => pathname.endsWith(ext))
}

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_CACHE)
    })
  )
  // Force the waiting service worker to become the active service worker
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  // Take control of all pages immediately
  self.clients.claim()
})

// Fetch event - network first, fallback to cache (only for safe resources)
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return

  // Skip chrome extensions and other non-http(s) requests
  if (!event.request.url.startsWith('http')) return

  // Skip sensitive routes entirely
  if (SENSITIVE_ROUTES.some(route => event.request.url.includes(route))) {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response before caching
        const responseToCache = response.clone()

        // Only cache successful responses for cacheable resources
        if (response.status === 200 && shouldCache(event.request.url)) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
        }

        return response
      })
      .catch(() => {
        // If fetch fails, try cache only for cacheable resources
        if (shouldCache(event.request.url)) {
          return caches.match(event.request).then((response) => {
            if (response) {
              return response
            }

            // If no cache, return offline page for navigation requests only
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL)
            }
          })
        }

        // For non-cacheable resources, let the network error propagate
        return fetch(event.request)
      })
  )
})

