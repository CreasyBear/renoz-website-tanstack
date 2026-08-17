# External Integrations

**Analysis Date:** 2026-08-17

## APIs & External Services

**Email:**
- Resend - Sends contact notifications and warranty support, installer, and homeowner messages from server functions.
  - SDK/Client: `resend` in `src/lib/submitInquiry.ts` and `src/lib/submitWarranty.ts`.
  - Auth: `RESEND_API_KEY`.
  - Templates: React Email components in `src/emails/`; recipient and sender configuration uses `CONTACT_FORM_TO_EMAIL`, `CONTACT_FORM_FROM_EMAIL`, `WARRANTY_TO_EMAIL`, and `WARRANTY_FROM_EMAIL`.
  - Failure behavior: Inquiry and warranty records remain stored when email delivery fails; missing inquiry email configuration reports a skipped notification.

**Spam Protection:**
- Cloudflare Turnstile - Protects contact and warranty submissions.
  - Client: Browser widget script loaded by `src/components/ui/Turnstile.tsx`.
  - Server verification: REST POST to Cloudflare's site-verification endpoint from `src/lib/submitInquiry.ts` and `src/lib/submitWarranty.ts`.
  - Auth/configuration: `VITE_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.
  - Development override: `VITE_DISABLE_TURNSTILE` is read by the inquiry handler but is not listed in `env.template`; warranty code also accepts a mock token path.

**Maps and Location:**
- Google Maps Platform - Provides Places-based Australian address autocomplete.
  - SDK/Client: `@googlemaps/js-api-loader` with the Maps JavaScript API weekly channel and Places library in `src/hooks/useGoogleMapsLoader.ts`.
  - Auth: `VITE_GOOGLE_MAPS_API_KEY`.
  - Embeds/links: Public map embed, review, and directions URLs are defined in `src/lib/google-business.ts` and rendered without an SDK credential.

**External Content:**
- Google Maps embeds and YouTube embeds are rendered by `src/components/ui/GoogleMapEmbed.tsx` and `src/components/ui/YouTubeEmbed.tsx`.
- Google Fonts are not fetched at runtime; Inter is packaged through `@fontsource/inter` in `package.json`.

## Data Storage

**Databases:**
- Supabase PostgreSQL - Stores products, posts, contact inquiries, and warranty registrations.
  - Client: `@supabase/supabase-js` configured in `src/lib/supabase.ts` and `src/lib/serverSupabase.ts`.
  - Connection variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, and server-preferred `SUPABASE_SERVICE_ROLE_KEY`.
  - Schema: `scripts/supabase-schema.sql` defines `products`, `posts`, `inquiries`, and `warranty_registrations`, indexes, grants, and row-level security.
  - Application access: Inquiry and warranty inserts occur in TanStack Start server functions; product/post reads also occur through the browser client.

**File Storage:**
- Supabase Storage - Stores warranty evidence in the `warranty-uploads` bucket under `warranty-files/{warrantyId}/`.
  - Client: `@supabase/supabase-js` in `src/components/ui/FileUpload.tsx` and `src/lib/uploadWarrantyFiles.ts`.
  - Auth: Uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`; storage policy setup is in `scripts/setup-storage.sql`.
  - Access-policy caveat: `scripts/supabase-schema.sql` declares the bucket public while `scripts/setup-storage.sql` declares it private, although both scripts define public read/upload policies.

**Caching:**
- No external cache is configured.
- Warranty submission rate limiting uses an in-memory `Map` in `src/lib/submitWarranty.ts`, so state is process-local and non-durable.

## Authentication & Identity

**Auth Provider:**
- No user-facing authentication flow or session management is implemented.
- Supabase Auth roles are referenced by row-level security policies in `scripts/supabase-schema.sql` for protected reads and writes.
- The `/admin` route in `src/routes/admin.tsx` is development-only and environment-gated, not authenticated.
- Server form writes prefer `SUPABASE_SERVICE_ROLE_KEY`; when absent, they fall back to `VITE_SUPABASE_ANON_KEY` and depend on public RLS insert policies.

**OAuth Integrations:**
- None found.

## Monitoring & Observability

**Error Tracking:**
- No dedicated error-tracking provider such as Sentry is configured.
- React error boundaries in `src/components/ui/ErrorBoundary.tsx`, `src/components/ui/RouteErrorBoundary.tsx`, and `src/components/ui/ApiErrorBoundary.tsx` emit Plausible events when available.

**Analytics:**
- Plausible Analytics - Privacy-focused page script loaded for the production site in `src/routes/__root.tsx`.
  - Auth: No environment credential; the configured domain is embedded in page metadata.
  - Events: Web Vitals and client error events from `src/components/WebVitals.tsx` and error boundaries.
- Google Analytics 4 - Optional `gtag.js` integration in `src/components/GoogleAnalytics.tsx`.
  - Configuration: `VITE_GA_MEASUREMENT_ID`.
  - Privacy settings: IP anonymization enabled; Google signals and advertising features disabled.
- Vercel Analytics and Speed Insights - Mounted in `src/routes/__root.tsx` through `@vercel/analytics` and `@vercel/speed-insights`.
  - Auth/configuration: Managed by the Vercel deployment; no repository environment variable is referenced.

**Logs:**
- Application logs use `console` and are captured by the hosting runtime.
- No external log aggregation SDK is present.

## CI/CD & Deployment

**Hosting:**
- Vercel - Explicit Nitro target in `vite.config.ts` with deployment behavior in `vercel.json`.
  - Deployment build: `bun run build`.
  - Environment variables: Expected to be configured in the deployment environment as described by `env.template`.
  - Runtime telemetry: Vercel Analytics and Speed Insights are enabled in the root document.

**CI Pipeline:**
- GitHub Actions - CI workflow at `.github/workflows/ci.yml`.
  - Triggers: Pushes and pull requests targeting `main` or `develop`.
  - Jobs: Biome check, production build, TypeScript check, Vitest suite, and `bun audit`.
  - Runtime: Bun 1.3.14 on `ubuntu-latest`.
  - Secrets: No real service secrets are consumed; the build job supplies non-secret mock variable values.

## Environment Configuration

**Development:**
- Documented names in `env.template`: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `VITE_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `VITE_GOOGLE_MAPS_API_KEY`, `RESEND_API_KEY`, `VITE_GA_MEASUREMENT_ID`, `CONTACT_FORM_TO_EMAIL`, `CONTACT_FORM_FROM_EMAIL`, `WARRANTY_TO_EMAIL`, and `WARRANTY_FROM_EMAIL`.
- Additional names referenced by code but absent from `env.template`: `VITE_DISABLE_TURNSTILE`, `VITE_SITE_URL`, and `NODE_ENV`.
- Secrets location: A local `.env` is instructed by `env.template`; actual values must not be committed.
- Optional behavior: Google Maps, GA4, and configurable email addresses have graceful fallback or optional paths; production form persistence requires Supabase configuration.

**Staging:**
- No staging-specific service accounts, database project, or environment policy is documented.
- Vercel can provide environment-scoped variables, but no repository configuration defines staging differences.

**Production:**
- Secrets management is expected through Vercel environment variables.
- Browser-exposed `VITE_` variables are bundled publicly; `SUPABASE_SERVICE_ROLE_KEY`, `TURNSTILE_SECRET_KEY`, and `RESEND_API_KEY` must remain server-only.
- Resilience is provider-dependent; no database replication, email failover, or external cache is configured in this repository.

## Webhooks & Callbacks

**Incoming:**
- No incoming webhook route or signature-verification handler was found.
- Browser form submissions call TanStack Start server functions rather than third-party callbacks.

**Outgoing:**
- No generic outgoing webhook integration was found.
- Direct outbound calls are limited to Cloudflare Turnstile verification, Resend email delivery, Supabase database/storage operations, analytics beacons, and browser-loaded Google services.

---

*Integration audit: 2026-08-17*
*Update when adding/removing external services*
