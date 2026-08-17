# Architecture

**Analysis Date:** 2026-08-17

## Pattern Overview

**Overall:** Full-stack, file-routed React application with route-owned marketing pages and typed, registry-driven editorial content.

**Key Characteristics:**
- TanStack Start provides server rendering and full-stack execution; TanStack Router derives the route graph from `src/routes/`.
- The application is a single deployable web application rather than separate frontend and API services.
- Most public content is statically defined in TypeScript and rendered through route components.
- Marketing routes usually own page composition and copy directly, while guides, insights, case studies, FAQs, and documents use central data registries.
- Shared visual building blocks are divided into site layout, page sections, editorial renderers, and general UI primitives.
- Server mutations are narrow TanStack `createServerFn` boundaries for contact and warranty workflows.
- SEO metadata, structured data, canonical URLs, and sitemap discovery are generated from the same route and content data.

## Layers

**Application and Routing Layer:**
- Purpose: Construct the router, map URL files to routes, load route data, declare metadata, and establish the shared document shell.
- Contains: Router factory in `src/router.tsx`, root shell in `src/routes/__root.tsx`, route modules in `src/routes/`, and the generated graph in `src/routeTree.gen.ts`.
- Depends on: Page components, content registries, SEO helpers, and server functions.
- Used by: TanStack Start at request and client-navigation entry points.
- Notes: `src/routeTree.gen.ts` is generated from `src/routes/` and must not be edited manually.

**Page Composition Layer:**
- Purpose: Assemble complete marketing and collection pages from sections, UI components, local content, and registry data.
- Contains: Route components such as `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/homeowners.tsx`, `src/routes/partners.tsx`, and `src/routes/products/residential.tsx`.
- Depends on: `src/components/sections/`, `src/components/ui/`, `src/components/guides/`, `src/data/`, and `src/lib/seo.ts`.
- Used by: Route definitions in the same modules or lazy route companions.
- Pattern: Route-owned composition. A route typically declares `createFileRoute(...)`, `head()`, and a React page component, then orders sections explicitly in JSX.

**Editorial Rendering Layer:**
- Purpose: Turn typed guide and insight content into consistent long-form reading experiences.
- Contains: `src/components/guides/` and `src/components/insights/`.
- Depends on: Guide and insight types and registries in `src/data/`, shared controls in `src/components/ui/`, and design tokens in `src/styles.css`.
- Used by: `src/routes/guides/$slug.tsx`, `src/routes/guides/index.tsx`, `src/routes/insights/$slug.tsx`, and `src/routes/insights/index.tsx`.
- Pattern: A shared shell plus specialized renderers. `src/components/guides/GuideShell.tsx` provides article chrome for both guides and insights.

**Content and Domain Data Layer:**
- Purpose: Hold public content, product facts, editorial schemas, lookup functions, and reusable groupings.
- Contains: `src/data/guides.ts`, `src/data/guide-types.ts`, `src/data/guide-content/`, `src/data/insights.ts`, `src/data/insight-types.ts`, `src/data/insight-content/`, `src/data/case-studies.ts`, `src/data/documents.ts`, `src/data/faqs.ts`, and source-specific insight data.
- Depends on: TypeScript types and, for composed insight posts, source datasets such as `src/data/insights-mariana.ts` and `src/data/insights-sdic.ts`.
- Used by: Routes, editorial renderers, related-content strips, schema generators, and sitemap generation.
- Pattern: In-memory repositories. Arrays and helper functions such as `guides`, `getGuide()`, `insights`, and `getInsight()` form the read API.

**Reusable Presentation Layer:**
- Purpose: Supply reusable visual and interaction primitives without owning URL behavior.
- Contains: `src/components/layout/`, `src/components/sections/`, `src/components/ui/`, plus cross-page components such as `src/components/InverterMarquee.tsx`.
- Depends on: React, Tailwind utilities and CSS variables from `src/styles.css`, animation libraries, and narrowly scoped data props.
- Used by: Marketing routes and editorial renderers.
- Distinction: `src/components/sections/` contains larger marketing sections such as `ProductHero`, `TechSpecs`, and economics modules; `src/components/ui/` contains lower-level controls, cards, embeds, galleries, form fields, and boundaries.

**Cross-Cutting Services Layer:**
- Purpose: Centralize SEO, validation, submission, security, database, formatting, and external-service integration.
- Contains: `src/lib/seo.ts`, `src/lib/inquiry.ts`, `src/lib/form-security.ts`, `src/lib/submitInquiry.ts`, warranty submission modules, `src/lib/serverSupabase.ts`, `src/lib/supabase.ts`, and utilities.
- Depends on: Zod, TanStack Start server functions, Supabase, Resend, Cloudflare Turnstile, and React Email.
- Used by: Routes, forms, server handlers, and tests.
- Boundary: Server-only credentials are resolved in server handlers and `src/lib/serverSupabase.ts`; content route loaders normally read local TypeScript registries.

**Email Template Layer:**
- Purpose: Render transactional and internal notification emails.
- Contains: `src/emails/` and `src/emails/components/`.
- Depends on: React Email components and validated server-function payloads.
- Used by: Contact and warranty server workflows.

## Marketing Page Composition

The prevailing marketing-page flow is:

1. A URL maps to a file in `src/routes/`, for example `/products/residential` maps to `src/routes/products/residential.tsx`.
2. The route module declares metadata and structured data through helpers from `src/lib/seo.ts`.
3. The route's page component orders large sections directly in JSX.
4. Reusable sections come from `src/components/sections/`, such as `ProductHero`, `SolarEconomics`, `BentoFeatures`, and `TechSpecs`.
5. Lower-level elements come from `src/components/ui/`, such as `Button`, `Card`, `MasonryGallery`, and form controls.
6. Registry data is pulled in where a section is content-driven: examples include `GUIDE_LINK_SETS` from `src/data/guides.ts`, `documents` from `src/data/documents.ts`, FAQs from `src/data/faqs.ts`, and gallery selectors from `src/data/case-study-images.ts`.
7. The root document in `src/routes/__root.tsx` wraps the page with the global header, footer, error boundary, analytics, head content, and scripts.

Marketing copy and one-off section arrays are frequently colocated inside route files. The abstraction boundary is therefore visual reuse, not a universal page-content schema. Product routes such as `src/routes/products/residential.tsx`, `src/routes/products/rural.tsx`, and `src/routes/products/commercial.tsx` reuse section components but retain product-specific ordering, claims, and imagery.

## Guide Content System

Guides use a typed record-and-renderer architecture:

1. `src/data/guide-types.ts` defines the `Guide` contract and related section, CTA, FAQ, decision-table, proof-link, and product-matrix types.
2. Each guide exports one `Guide` object from `src/data/guide-content/<slug>.ts`.
3. `src/data/guides.ts` imports every guide and appends it to the `guides` registry.
4. That registry also owns `guideGroups` for the index, `GUIDE_LINK_SETS` for contextual links on marketing pages, `guideSlugs`, lookup helpers, and path construction.
5. `src/routes/guides/$slug.tsx` resolves a slug with `getGuide()`, returns a not-found response for unknown slugs, builds article/FAQ/breadcrumb schemas, and composes the guide blocks.
6. Renderers in `src/components/guides/` display the typed fields: intro, decision table, optional product matrix, optional capacity ladder, repeated prose sections, proof links, FAQs, closing copy, and CTA.
7. `src/routes/guides/index.tsx` reads `guideGroups` and the registry to build the grouped collection page.

The guide system is structured but not a generic discriminated block union. Core fields have a fixed page order, `sections` supplies repeatable prose, and optional fields activate specialized modules.

## Insight Content and China Battery Desk

Insights implement the current China Battery Desk surface specified in `PRODUCT.md`.

- `PRODUCT.md` defines the audience, authority-led editorial purpose, source-provenance requirements, uncertainty rules, and launch scope for a durable China Battery Desk landing surface and flagship briefing.
- The public surface is `/insights`, defined by `src/routes/insights/index.tsx` and rendered by `src/components/insights/InsightsIndexPage.tsx`.
- Individual briefings use `/insights/$slug`, resolved from `src/data/insights.ts` and rendered by `src/components/insights/InsightPostPage.tsx`.
- `src/data/insight-types.ts` defines a discriminated `InsightBlock` union with `prose`, `table`, `chart`, and `sources` kinds. Charts further discriminate between `line` and `bars`.
- One file per briefing lives in `src/data/insight-content/`; each is explicitly imported into `src/data/insights.ts`.
- Raw or translated source datasets can remain separate from editorial assembly. The flagship post in `src/data/insight-content/china-lfp-price-signal-august-2026.ts` imports tables from `src/data/insights-mariana.ts` and `src/data/insights-sdic.ts`, transforms them into display blocks, and interleaves them with RENOZ interpretation.
- Renderers in `src/components/insights/` handle charts, tables, the collection page, and post dispatch. `InsightPostPage` reuses guide typography and shell components while preserving insight-specific exhibits and source lists.
- `src/lib/seo.ts` consumes the insight registry for article schema, collection schema, and sitemap discovery.

This separation supports the `PRODUCT.md` requirement to distinguish observed quotations, forecasts, sources, and RENOZ interpretation. New block kinds require coordinated updates to `src/data/insight-types.ts` and the renderer dispatch in `src/components/insights/InsightPostPage.tsx`.

## Data Flow

**Public Page Request:**

1. A browser or crawler requests a URL.
2. TanStack Start invokes the router factory in `src/router.tsx`.
3. The generated graph in `src/routeTree.gen.ts` matches a route module under `src/routes/`.
4. The route loader resolves any required local content, such as `getGuide()`, `getInsight()`, or a case-study lookup.
5. The route `head()` produces metadata, canonical links, and JSON-LD through `src/lib/seo.ts`.
6. The route component composes sections or delegates to an editorial page renderer.
7. `src/routes/__root.tsx` emits the shared HTML document, header, main landmark, error boundary, footer, analytics, and scripts.
8. Client navigation reuses the same route graph with scroll restoration enabled.

**Guide Request:**

1. `/guides/<slug>` matches `src/routes/guides/$slug.tsx`.
2. `getGuide()` searches the in-memory `guides` array in `src/data/guides.ts`.
3. Unknown slugs throw `notFound()`.
4. The route builds guide article, FAQ, and breadcrumb schema.
5. Fixed and optional guide fields are sent to components in `src/components/guides/`.
6. Related guide links elsewhere in the site resolve through `GUIDE_LINK_SETS` and `GuideRelatedStrip`.

**Insight Request:**

1. `/insights/<slug>` matches `src/routes/insights/$slug.tsx`.
2. `getInsight()` searches the in-memory registry in `src/data/insights.ts`.
3. The route builds article and breadcrumb schema.
4. `InsightPostPage` iterates `insight.blocks`.
5. The block discriminator selects prose, line chart, bar chart, table, or source-list rendering.
6. Source metadata and evidence remain attached to the insight record and rendered at the designated `sources` block.

**Contact Form Submission:**

1. `src/routes/contact.tsx` validates browser form state and invokes `submitInquiry`.
2. `src/lib/submitInquiry.ts` revalidates input with `inquiryPayloadSchema` from `src/lib/inquiry.ts`.
3. The server handler verifies the Cloudflare Turnstile token unless explicitly disabled for development.
4. `src/lib/serverSupabase.ts` creates a non-persistent server client using a service-role key when available, otherwise the anonymous key.
5. The inquiry is inserted into Supabase.
6. A notification email is rendered from `src/emails/contact-notification.tsx` and sent through Resend when configured.
7. Database failure returns a failed result; email failure after a successful insert returns success with a failed notification status.

**Sitemap Request:**

1. `/sitemap.xml` matches `src/routes/sitemap[.]xml.tsx`.
2. Its server GET handler calls `buildStaticSitemapXml()` in `src/lib/seo.ts`.
3. Static route paths and registry-backed guides, insights, case studies, and documents contribute discoverable URLs.
4. The handler returns XML with public cache headers.

**State Management:**
- Public content state is compile-time TypeScript data; there is no CMS or client data cache for guides and insights.
- Page-local interaction state uses React hooks, for example document filtering in `src/routes/resources.tsx` and form state in `src/routes/contact.tsx`.
- Persistent submission state lives in Supabase.
- Router state is managed by TanStack Router; scroll restoration is configured in `src/router.tsx`.
- No application-wide state store is present.

## Key Abstractions

**File Route:**
- Purpose: Co-locate URL matching, loaders, metadata, and page rendering.
- Examples: `src/routes/guides/$slug.tsx`, `src/routes/insights/$slug.tsx`, `src/routes/products/residential.tsx`.
- Pattern: TanStack Router file-based route using `createFileRoute`; selected heavy routes split metadata/loaders and UI with `createLazyFileRoute`.

**Root Document Shell:**
- Purpose: Apply global metadata, navigation, footer, analytics, error containment, styles, and accessibility landmarks.
- Example: `src/routes/__root.tsx`.
- Pattern: One shared TanStack root route with a `shellComponent`.

**Content Registry:**
- Purpose: Provide an explicit source of truth and lookup API for static content.
- Examples: `src/data/guides.ts`, `src/data/insights.ts`, `src/data/case-studies.ts`, `src/data/documents.ts`.
- Pattern: Typed arrays plus helper functions; registration is explicit through imports and array entries.

**Editorial Record:**
- Purpose: Separate long-form facts and copy from rendering.
- Examples: `Guide` in `src/data/guide-types.ts` and `Insight` in `src/data/insight-types.ts`.
- Pattern: Typed configuration object. Guides use fixed semantic fields; insights use an ordered discriminated block list.

**Editorial Renderer:**
- Purpose: Render many records with consistent hierarchy, accessibility, and responsive behavior.
- Examples: `src/routes/guides/$slug.tsx`, `src/components/insights/InsightPostPage.tsx`, `src/components/guides/GuideShell.tsx`.
- Pattern: Composition over a shared shell and focused block components.

**Marketing Section:**
- Purpose: Reuse a substantial page region while allowing route-owned ordering and props.
- Examples: `src/components/sections/ProductHero.tsx`, `src/components/sections/BentoFeatures.tsx`, `src/components/sections/TechSpecs.tsx`.
- Pattern: Presentational React component configured by props.

**SEO Builder:**
- Purpose: Keep canonical metadata, JSON-LD, public facts, and sitemap output consistent.
- Example: `src/lib/seo.ts`.
- Pattern: Pure builder functions over route paths and content records, with dynamic Supabase helpers isolated behind lazy imports.

**Server Function:**
- Purpose: Expose validated mutations without a separate hand-written API route.
- Examples: `src/lib/submitInquiry.ts`, `src/lib/submitWarranty.ts`, `src/lib/uploadWarrantyFiles.ts`.
- Pattern: TanStack Start `createServerFn` with Zod validation and a server-side handler.

## Entry Points

**Router Factory:**
- Location: `src/router.tsx`
- Triggers: TanStack Start application bootstrap on server requests and client hydration/navigation.
- Responsibilities: Create the router from the generated tree, enable scroll restoration, and define preload freshness.

**Root Route and Document:**
- Location: `src/routes/__root.tsx`
- Triggers: Every route render.
- Responsibilities: Global head metadata, JSON-LD, styles, HTML shell, layout, not-found UI, error boundary, service-worker registration, and analytics.

**File Routes:**
- Location: `src/routes/`
- Triggers: URL matching.
- Responsibilities: Load local data, validate search parameters, define route metadata, compose pages, or expose server handlers.

**Generated Route Tree:**
- Location: `src/routeTree.gen.ts`
- Triggers: Imported by `src/router.tsx`; regenerated by TanStack Router tooling.
- Responsibilities: Bind route files into the typed route graph and lazy-route relationships.

**Server Mutations:**
- Location: `src/lib/submitInquiry.ts`, `src/lib/submitWarranty.ts`, `src/lib/submitWarranty.tsx`, and `src/lib/uploadWarrantyFiles.ts`
- Triggers: Contact and warranty UI submissions.
- Responsibilities: Revalidate payloads, verify abuse controls, persist records/files, and send email.

**Sitemap HTTP Handler:**
- Location: `src/routes/sitemap[.]xml.tsx`
- Triggers: GET `/sitemap.xml`.
- Responsibilities: Return generated XML and cache headers.

## Error Handling

**Strategy:** Use route-level not-found responses for missing registry content, local UI error boundaries for rendering failures, validated result objects for expected server-function failures, and thrown errors for exceptional client submission paths.

**Patterns:**
- Dynamic content routes call `notFound()` when a guide, insight, or case study slug is absent.
- `src/routes/__root.tsx` supplies a root not-found component and wraps page content with `src/components/ui/ErrorBoundary.tsx`.
- `src/components/ui/RouteErrorBoundary.tsx` and `src/components/ui/ApiErrorBoundary.tsx` provide more focused reusable error UI.
- Zod validates contact and warranty inputs at trust boundaries.
- Server functions return `{ success: false, error }` for expected validation, configuration, verification, and persistence failures.
- Contact persistence is primary; Resend failure after insertion is downgraded to a notification status rather than discarding the saved inquiry.
- External enhancement failures such as service-worker registration are intentionally non-fatal.

## Cross-Cutting Concerns

**SEO and Discoverability:**
- `src/lib/seo.ts` centralizes canonical URLs, metadata, structured data, company/product facts, and sitemap generation.
- Route `head()` callbacks declare page-specific metadata near page composition.
- Registries feed guide, insight, case-study, and document discovery into schemas and sitemap output.
- AI-facing public files live in `public/llms.txt`, `public/llms-full.txt`, and `public/.well-known/`.

**Styling and Design Tokens:**
- Tailwind CSS utilities and custom variables/utilities are defined in `src/styles.css`.
- Shared layout tokens such as `layout-container`, reading measures, surfaces, borders, and accent colors support the newer editorial surfaces.
- Existing marketing pages also use route-local utility compositions, so visual consistency depends on both shared sections and shared tokens.

**Accessibility:**
- The root shell provides a skip link and main landmark.
- Editorial components use semantic articles, sections, headings, navigation, tables, details/summary, and source lists.
- Focus-visible styles and reduced-motion variants are applied throughout reusable components and newer editorial pages.
- `PRODUCT.md` explicitly requires keyboard, screen-reader, reduced-motion, zoom, narrow-viewport, and bilingual terminology support for the China Battery Desk.

**Validation and Security:**
- Zod schemas validate server payloads.
- `src/lib/form-security.ts` coordinates client submission protections.
- Cloudflare Turnstile, honeypot fields, timeouts, sanitization, and rate-limit-oriented controls protect forms.
- Server-side Supabase credentials are resolved outside client components.

**Authentication and Authorization:**
- Public content is unauthenticated.
- No general user session architecture is present.
- `src/routes/admin.tsx` is a route-level administrative surface, while database access control primarily relies on configured Supabase credentials and policies.

**Logging and Observability:**
- Server handlers use `console.error` and `console.warn` with contextual messages.
- `src/components/WebVitals.tsx`, Google Analytics, Vercel Analytics, Vercel Speed Insights, and Plausible are mounted from the root shell.

**Testing:**
- Tests are colocated as `*.test.ts` under `src/data/` and `src/lib/`.
- Registry integrity and SEO behavior are covered by files such as `src/data/guides.test.ts` and `src/lib/seo.test.ts`.

---

*Architecture analysis: 2026-08-17*
*Update when major patterns change*
