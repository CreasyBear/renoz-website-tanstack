# Technology Stack

**Analysis Date:** 2026-08-17

## Languages

**Primary:**
- TypeScript 5.9 - Application, route, component, server-function, email-template, and test code under `src/`.
- TSX / React JSX - UI and React Email templates in `src/components/`, `src/routes/`, and `src/emails/`.

**Secondary:**
- CSS - Tailwind CSS 4 directives and project styling in `src/styles.css`.
- SQL - Supabase schema and storage policy setup in `scripts/supabase-schema.sql` and `scripts/setup-storage.sql`.
- JavaScript / ESM - Utility scripts such as `scripts/optimize-logo.mjs`; the package is ESM via `"type": "module"` in `package.json`.
- YAML and JSON - CI and platform/tool configuration in `.github/workflows/ci.yml`, `vercel.json`, `biome.json`, and `components.json`.

## Runtime

**Environment:**
- Bun 1.3.14 - Declared package manager and CI runtime in `package.json` and `.github/workflows/ci.yml`.
- Node.js - Runs the built Nitro server with `node .output/server/index.mjs`; no Node version is pinned in `package.json`, `.nvmrc`, or `.node-version`.
- Modern browsers - Client runtime uses DOM APIs, service workers, Web Crypto, Google Maps, Turnstile, analytics scripts, and ES2022 output.
- ES2022 target with ESNext modules and bundler resolution configured in `tsconfig.json`.

**Package Manager:**
- Bun 1.3.14 - Declared as `bun@1.3.14` in `package.json`.
- Lockfile: `bun.lock` present.

## Frameworks

**Core:**
- React 19.2 - Component and rendering layer.
- TanStack Start 1.168 - Full-stack React framework and typed server functions.
- TanStack Router 1.170 - File-based routing; generated routes are stored in `src/routeTree.gen.ts`.
- Nitro 3.0 beta - Server build/runtime adapter with the Vercel preset in `vite.config.ts`.
- Tailwind CSS 4.3 - Styling through the Vite plugin configured in `vite.config.ts`.

**Testing:**
- Vitest 4.1 - Unit test runner for `src/**/*.test.ts`.
- Testing Library React 16.3 and DOM 10.4 - React component testing utilities.
- jsdom 29.1 - Browser-like test environment dependency.

**Build/Dev:**
- Vite 8.1 - Development server, bundler, SSR build pipeline, and preview server.
- TypeScript 5.9 - Strict static checking with no emitted compiler output.
- Biome 2.5 - Formatting, linting, and import organization via `biome.json`.
- Terser 5.49 and Sharp 0.35 - Minification and image-processing build support.
- TanStack Devtools Vite 0.8 - Development instrumentation.

## Key Dependencies

**Critical:**
- `@tanstack/react-start` 1.168 - SSR application shell and `createServerFn` form handlers.
- `@tanstack/react-router` 1.170 - Typed routing, metadata, and route lifecycle.
- `@supabase/supabase-js` 2.110 - PostgreSQL data access and warranty file storage.
- `resend` 6.18 plus `@react-email/components` 1.0 - Transactional email delivery and server-side email rendering.
- `zod` 3.25 - Runtime validation of inquiry and warranty payloads.
- `@googlemaps/js-api-loader` 1.16 - Google Maps JavaScript and Places loading for address autocomplete.
- `@vercel/analytics` 2.0 and `@vercel/speed-insights` 2.0 - Production traffic and performance telemetry.
- `framer-motion` 12.42 - UI animation system.
- `three` 0.185, `@react-three/fiber` 9.6, and `@react-three/drei` 10.7 - Browser 3D rendering.

**UI and Forms:**
- Radix UI primitives, React Hook Form 7.82, TanStack Form 1.33, and `@hookform/resolvers` 5.4 support accessible controls and validated forms.
- `lucide-react`, `class-variance-authority`, `clsx`, and `tailwind-merge` provide icons and composable class styling.

## Configuration

**Environment:**
- Local variables are documented in `env.template` and loaded through `import.meta.env` or `process.env`.
- Public browser configuration uses the `VITE_` prefix; server-only credentials are read inside server functions.
- Type declarations for Vite and Google Maps are enabled in `tsconfig.json`.

**Build:**
- `vite.config.ts` composes React, TanStack Start, Nitro, Tailwind, and devtools plugins and targets Vercel.
- `tsconfig.json` enables strict checking, ES2022, React JSX, path alias `@/*`, and no emit.
- `biome.json` supplies recommended linting and tab-based formatting while excluding generated routing and stylesheet output.
- `vercel.json` sets `bun run build`, redirects, a rewrite, cache headers, and baseline security headers.
- `.github/workflows/ci.yml` runs formatting/lint, build, typecheck, unit tests, and dependency audit.

## Platform Requirements

**Development:**
- Any platform supported by Bun 1.3.14 and a modern browser; GitHub CI uses `ubuntu-latest`.
- External service credentials are needed for live Supabase, Resend, Turnstile, Google Maps, and optional GA4 behavior.
- No Docker or local database orchestration is defined in the repository.

**Production:**
- Vercel is the explicit deployment target through Nitro's `vercel` preset and `vercel.json`.
- Build output is emitted under `.output/`; the generic production start command uses Node.js.
- The application is SSR-capable and also registers the static service worker at `public/sw.js` in production browsers.

---

*Stack analysis: 2026-08-17*
*Update after major dependency changes*
