# Codebase Concerns

**Analysis Date:** 2026-08-17

## Tech Debt

**Duplicate warranty submission implementations:**
- Issue: `src/lib/submitWarranty.ts` and `src/lib/submitWarranty.tsx` define different schemas, Supabase clients, upload limits, sanitization, rate limiting, and Turnstile behavior for the same exported `submitWarranty` function.
- Files: `src/lib/submitWarranty.ts`, `src/lib/submitWarranty.tsx`, `src/routes/warranty.lazy.tsx`
- Why: The JSX email rendering implementation appears to have been superseded by a `.ts` implementation without deleting or consolidating the older file.
- Impact: The extensionless import in `src/routes/warranty.lazy.tsx` resolves one implementation while maintainers can easily edit the other. The stricter `.tsx` validation can create false confidence even though the active `.ts` schema accepts broadly unconstrained strings and URLs.
- Fix approach: Keep one server module, extract a single shared Zod schema and email payload builder, add tests that import the same path as the route, and delete the obsolete implementation.

**README and deployed architecture have diverged:**
- Issue: `README.md` describes Supabase as the CMS for products and blog content, lists `/installers`, omits `/guides` and `/insights`, and still calls blog detail pages a next step.
- Files: `README.md`, `src/data/guides.ts`, `src/data/insights.ts`, `src/routes/guides/index.tsx`, `src/routes/insights/index.tsx`, `src/routes/partners.tsx`
- Why: The site moved toward file-based content and renamed the installer journey to partners, but the architecture and route inventory were not rewritten.
- Impact: Onboarding, content operations, SEO audits, and release checks start from an inaccurate source of truth.
- Fix approach: Rewrite the structure, page inventory, content-publishing workflow, and CMS claims in `README.md`; document which Supabase tables remain operational and which content is file-backed.

**Split CMS and file-based SEO model:**
- Issue: Legacy helpers still query Supabase products and `/blog/*`, while public guides and insights are TypeScript registries rendered at `/guides/*` and `/insights/*`.
- Files: `src/lib/seo.ts`, `src/data/guides.ts`, `src/data/insights.ts`, `src/routes/guides/$slug.tsx`, `src/routes/insights/$slug.tsx`, `src/routes/admin.tsx`
- Why: Supabase-era helpers and the development CMS scaffold were retained through a move to repository-managed editorial content.
- Impact: A future maintainer can publish into `posts` or call `generateSitemap()` and produce URLs that have no corresponding `/blog/$slug` route, while file-based content remains invisible to that helper.
- Fix approach: Declare one content source of truth. Remove unused database blog/product helpers or build an explicit adapter that merges CMS and file content into the same route, sitemap, and structured-data registries.

**Marketing facts are repeated across pages:**
- Issue: Capacity, cycle life, temperature, warranty, product range, and compatibility claims are hard-coded independently in route components and `productFacts`.
- Files: `src/lib/seo.ts`, `src/routes/index.tsx`, `src/routes/products/residential.tsx`, `src/routes/products/rural.tsx`, `src/routes/products/commercial.tsx`
- Why: Product pages evolved as bespoke marketing surfaces rather than projections from shared verified product data.
- Impact: Visible copy, metadata, JSON-LD, and downloadable evidence can contradict one another; examples already use overlapping ranges such as commercial `200+ kWh` on the homepage versus `100kWh to multi-MW` in metadata.
- Fix approach: Introduce a reviewed product-facts registry with source references and render page facts and JSON-LD from it; add assertion tests for critical claim consistency.

**Content claims await verification:**
- Issue: Thirteen guide files set `claimsPending: true`, including safety, cost, regional, engineering, and inverter-pairing content.
- Files: `src/data/guide-content/battery-fire-suppression-essential.ts`, `src/data/guide-content/off-grid-system-cost-wa.ts`, `src/data/guide-content/48v-vs-high-voltage-battery-system.ts`, `src/data/guides.test.ts`
- Why: The guide framework permits publication while claims remain in an explicit review state.
- Impact: High-intent and safety-sensitive pages can expose unverified commercial or technical assertions, weakening trust and increasing compliance risk.
- Fix approach: Make publishability distinct from draft state, require source-level review before indexation, and fail tests or exclude sitemap entries for guides whose `claimsPending` value is true.

**Large uncommitted feature surface:**
- Issue: The worktree contains 59 changed paths and 14 untracked entries spanning insights, guides, maps, navigation, SEO, machine-readable discovery, product pages, documents, and generated routing.
- Files: `src/components/insights/`, `src/routes/insights/`, `src/data/insights.ts`, `src/components/ui/GoogleMapEmbed.tsx`, `src/routeTree.gen.ts`, `public/llms.txt`, `public/.well-known/ai-manifest.json`
- Why: Several cross-cutting site-audit and China Battery Desk changes are being developed together.
- Impact: Review scope is difficult to reason about, generated and editorial changes can be omitted accidentally, and regressions are hard to bisect.
- Fix approach: Separate verified concerns into reviewable slices: content model, guides, insights, maps/contact, product refresh, and discovery/SEO. Keep generated artifacts in the same slice as their source route changes.

## Known Bugs

**Warranty Turnstile bypass is not development-gated:**
- Symptoms: A request using the literal token `mock-token` skips Cloudflare verification.
- Trigger: POST warranty data accepted by `src/lib/submitWarranty.ts` with `turnstileToken: "mock-token"` in any environment.
- Files: `src/lib/submitWarranty.ts`, `src/lib/submitWarranty.tsx`
- Workaround: Do not expose or use the mock token in deployed clients.
- Root cause: The bypass checks only token value, unlike the contact path's explicit configuration branch.
- Fix: Remove the bypass from production code or require a server-only test flag plus `import.meta.env.DEV`; add a negative production-mode test.

**Development CMS actions are visual only:**
- Symptoms: Add, edit, and delete controls do nothing; loading errors produce an empty state with only a console message.
- Trigger: Open `/admin` in development and activate any action in the products or posts tabs.
- Files: `src/routes/admin.tsx`
- Workaround: Manage records directly in Supabase or edit file-backed content in the repository.
- Root cause: Buttons have no handlers and the page is a read-only scaffold presented as a CMS.
- Fix: Clearly label the surface read-only or implement authenticated server mutations, visible error states, and source-of-truth alignment before enabling actions.

**Product-page calls to action are inert:**
- Symptoms: “Explore Features” and “See How It Works” appear actionable but have no destination or click handler.
- Trigger: Click the outlined controls in the solution sections.
- Files: `src/routes/products/residential.tsx`, `src/routes/products/rural.tsx`, `src/components/ui/Button.tsx`
- Workaround: Continue scrolling manually.
- Root cause: `Button` instances were rendered without `to`, `href`, or `onClick`.
- Fix: Link to anchored sections or remove the button styling until a destination exists; cover primary page CTAs with an interaction test.

## Security Considerations

**Unauthenticated public warranty upload endpoint:**
- Risk: Anyone who can invoke the server function can upload arbitrary base64 payloads under attacker-chosen warranty IDs, consume storage and server memory, and obtain public URLs.
- Files: `src/lib/uploadWarrantyFiles.ts`, `src/components/ui/FileUpload.tsx`, `setup-storage.sql`
- Current mitigation: Filename characters are sanitized and Supabase bucket policies may impose limits, but the server schema has no content-type allowlist, decoded-size cap, Turnstile verification, ownership proof, or upload-session binding.
- Recommendations: Validate decoded bytes, MIME signature, extension, and strict size/count limits server-side; issue short-lived upload sessions only after Turnstile; use private storage with signed URLs; enforce bucket limits and cleanup abandoned uploads.

**Service-role writes have broad blast radius:**
- Risk: `SUPABASE_SERVICE_ROLE_KEY` bypasses RLS; a validation or routing mistake in a server function can write beyond public policies.
- Files: `src/lib/serverSupabase.ts`, `src/lib/submitInquiry.ts`, `src/lib/submitWarranty.ts`
- Current mitigation: The key is read only from `process.env`, clients disable session persistence, and server handlers validate requests.
- Recommendations: Keep the helper server-only, use a narrowly privileged database function or dedicated backend role where possible, fail closed instead of silently falling back to the anon key in production, and add deployment tests that confirm the intended policy path.

**Turnstile and rate limiting are inconsistent:**
- Risk: Contact protection can be disabled by `VITE_DISABLE_TURNSTILE`, warranty accepts `mock-token`, warranty rate limiting is per process and email, and the upload endpoint has neither control.
- Files: `src/lib/submitInquiry.ts`, `src/lib/submitWarranty.ts`, `src/lib/uploadWarrantyFiles.ts`, `src/lib/security.ts`
- Current mitigation: Cloudflare verification exists on contact and warranty submission; warranty keeps a three-attempt in-memory window.
- Recommendations: Centralize server-side Turnstile verification, bind tokens to expected host/action, move rate limits to durable IP-plus-identity storage, and prohibit bypass settings in production startup validation.

**Development admin has no authentication boundary:**
- Risk: In local or preview development mode, anyone with network access can query configured `website_products` and `posts` through the browser Supabase client.
- Files: `src/routes/admin.tsx`, `src/lib/supabase.ts`, `README.md`
- Current mitigation: `beforeLoad` returns not-found when `import.meta.env.DEV` is false, and Supabase RLS is expected to constrain access.
- Recommendations: Treat the build-mode check as feature gating, not authorization. Bind development servers to localhost, use non-production data, and require server-verified authentication before any preview or production admin is introduced.

**CSRF helper does not provide server verification:**
- Risk: The client-generated `_csrf` field can imply protection without proving request origin because no corresponding server-side token validation was found.
- Files: `src/lib/form-security.ts`, `src/lib/security.ts`, `src/components/ui/SecureForm.tsx`
- Current mitigation: TanStack server functions and browser cookie behavior may reduce some cross-origin paths, but the helper itself is not a complete CSRF control.
- Recommendations: Remove misleading claims or implement server-bound, session-associated CSRF validation and explicit SameSite/origin checks for state-changing endpoints.

## Performance Bottlenecks

**Animation-heavy landing and product routes:**
- Problem: Large route components import `framer-motion`, multiple galleries, accordions, marquees, and many full-bleed assets; several direct `<img>` elements do not declare lazy loading or dimensions.
- Files: `src/routes/index.tsx`, `src/routes/products/residential.tsx`, `src/routes/products/rural.tsx`, `src/routes/products/commercial.tsx`, `src/components/sections/ProductHero.tsx`
- Measurement: No checked-in Lighthouse budget or route-level bundle baseline exists; CI only prints total `.output` disk usage.
- Cause: Page composition favors bespoke motion and imagery without enforceable performance budgets.
- Improvement path: Capture mobile Lighthouse and bundle baselines, lazy-load below-fold sections, standardize responsive images with width/height, honor reduced motion, and enforce route chunk and Core Web Vitals thresholds in CI.

**Oversized request bodies and base64 processing:**
- Problem: Warranty evidence is accepted as base64 and decoded into a full in-memory `Buffer`; submission code also estimates up to 100 MB from URL-string length.
- Files: `src/lib/uploadWarrantyFiles.ts`, `src/lib/submitWarranty.ts`, `src/routes/warranty.lazy.tsx`
- Measurement: The documented server allowance reaches 100 MB total in `src/lib/submitWarranty.ts`; no memory/load benchmark is present.
- Cause: Files are proxied through application server functions instead of streamed or uploaded directly with constrained signed URLs.
- Improvement path: Use direct signed uploads, enforce smaller per-file and aggregate limits before decoding, avoid embedding file data in email payloads, and load-test the deployed function memory/timeout envelope.

**Global third-party instrumentation load:**
- Problem: Plausible, Google Analytics, Vercel Analytics, Speed Insights, Web Vitals, and service-worker setup are all mounted from the root document.
- Files: `src/routes/__root.tsx`, `src/components/GoogleAnalytics.tsx`, `src/components/WebVitals.tsx`
- Measurement: No consent, network-cost, or duplicate-event audit is recorded.
- Cause: Monitoring integrations accumulated independently.
- Improvement path: Define an analytics ownership matrix, remove duplicate telemetry, defer nonessential scripts, verify consent requirements, and measure their main-thread and network impact.

## Fragile Areas

**Generated route tree in active source control:**
- Why fragile: `src/routeTree.gen.ts` is generated, marked `@ts-nocheck`, and currently modified alongside untracked insight routes.
- Common failures: Route additions can be absent from a commit, stale generation can hide or mis-type routes, and manual formatting/editing is overwritten.
- Safe modification: Change only files under `src/routes/`, run the TanStack route generator through the normal build/dev workflow, then review the generated diff.
- Test coverage: Typecheck passes on 2026-08-17, but `@ts-nocheck` prevents direct type validation of the generated registry and no route-enumeration test compares filesystem routes to the tree.

**Manual discoverability registries:**
- Why fragile: Adding content requires coordinated edits across import arrays, sitemap data, link sets, navigation, LLM text files, and machine-readable manifests.
- Files: `src/data/guides.ts`, `src/data/insights.ts`, `src/lib/seo.ts`, `public/llms.txt`, `public/llms-full.txt`, `public/.well-known/ai-manifest.json`
- Common failures: A page renders by slug but is absent from the index or sitemap, dates drift, and public discovery files advertise stale content.
- Safe modification: Generate registries and discovery artifacts from validated content metadata or add one publishing command that updates and verifies every projection.
- Test coverage: Guide sitemap and LLM inclusion are tested in `src/lib/seo.test.ts`; equivalent insight registry, navigation, and discovery-file assertions are missing.

**Content schema permits risky states:**
- Why fragile: `claimsPending` is informational and does not alter publication, sitemap inclusion, metadata, or visible review warnings.
- Files: `src/data/guide-types.ts`, `src/data/guides.ts`, `src/components/guides/GuideShell.tsx`, `src/lib/seo.ts`
- Common failures: Draft claims become publicly indexable simply by entering the registry.
- Safe modification: Add an explicit lifecycle enum such as `draft`, `review`, and `published`; expose only published content to routes and discovery surfaces.
- Test coverage: `src/data/guides.test.ts` checks that the boolean exists but intentionally does not reject pending claims.

**Browser side effects inside root render:**
- Why fragile: AsyncLocalStorage mutation and service-worker load-listener registration occur while `RootDocument` renders.
- Files: `src/routes/__root.tsx`
- Common failures: Re-renders can attach duplicate listeners, hydration behavior can differ from SSR, and the global polyfill can mask framework incompatibilities.
- Safe modification: Move browser-only effects into a small client component using `useEffect`, make registration idempotent, and document why the polyfill remains necessary.
- Test coverage: No hydration, service-worker registration, or root-shell integration tests exist.

## Scaling Limits

**Per-instance warranty rate limiter:**
- Current capacity: Three submissions per installer email per 15 minutes within one warm server process.
- Limit: State resets on cold starts and is not shared across concurrent serverless instances; attacker-controlled email values partition the limit.
- Symptoms at limit: Legitimate users can be inconsistently blocked on one instance while automated traffic succeeds through others.
- Files: `src/lib/submitWarranty.ts`
- Scaling path: Store atomic counters in a durable rate-limit service keyed by normalized identity, IP/network signal, and route; include expiry and observability.

**Repository-authored editorial publishing:**
- Current capacity: Twenty-three guides and one registered insight are manually imported and grouped.
- Limit: Every post requires code review and coordinated registry/discovery edits, while large source tables increase bundle and review size.
- Symptoms at limit: Publishing becomes error-prone, editorial fixes wait on deployments, and index/sitemap drift grows.
- Files: `src/data/guides.ts`, `src/data/insights.ts`, `src/data/insights-mariana.ts`, `src/data/insights-sdic.ts`
- Scaling path: Preserve typed validation but load structured content through generated manifests or a suitable editorial store, with preview, review status, provenance, and automated discovery output.

## Dependencies at Risk

**Beta Nitro runtime pin:**
- Risk: `nitro` is pinned to a dated beta build while TanStack Start and router packages use different patch releases.
- Files: `package.json`, `bun.lock`, `vite.config.ts`
- Impact: Framework upgrades can introduce build, SSR, adapter, or deployment incompatibilities that are difficult to isolate.
- Migration plan: Track the compatibility matrix, align TanStack package versions, upgrade Nitro through a tested branch, and keep build plus production-like smoke tests as release gates.

**Three-dimensional stack appears globally available but unaudited:**
- Risk: `three`, `@react-three/fiber`, and `@react-three/drei` are substantial dependencies; no current route usage was identified in the audited public page paths.
- Files: `package.json`, `bun.lock`, `src/routes/`
- Impact: Unused packages increase install/audit surface; accidental imports can materially increase client bundles.
- Migration plan: Confirm usage with bundle analysis, remove unused packages, or isolate any required 3D experience behind route-level lazy loading.

## Missing Critical Features

**Full-site design and content refresh governance:**
- Problem: The homepage and product pages mix polished evidence sections with older generic campaign language, repeated economics sections, inert controls, inconsistent capacity claims, and unqualified phrases such as “safest,” “market-leading,” and “Tier 1.”
- Files: `src/routes/index.tsx`, `src/routes/products/residential.tsx`, `src/routes/products/rural.tsx`, `src/routes/products/commercial.tsx`, `src/components/sections/SolarEconomics.tsx`, `src/components/sections/CommercialEconomics.tsx`
- Current workaround: Individual pages are refreshed ad hoc and some claims are manually hedged.
- Blocks: A coherent full-site audit, defensible product positioning, consistent conversion journeys, and reliable reuse of evidence.
- Implementation complexity: High — establish a content inventory, claim/evidence matrix, audience journey map, reusable section system, and page-by-page visual/accessibility review before rewriting and consolidating.

**China Battery Desk publication workflow is incomplete:**
- Problem: `PRODUCT.md` defines a durable intelligence publication, but the current worktree has one untracked registered insight, large hand-transcribed source tables, no editorial workflow, no licensing record field, and no automated discrepancy checks.
- Files: `PRODUCT.md`, `src/data/insights.ts`, `src/data/insight-content/china-lfp-price-signal-august-2026.ts`, `src/data/insights-mariana.ts`, `src/data/insights-sdic.ts`
- Current workaround: Provenance, uncertainty, and the known SDIC discrepancy are encoded manually in copy and source notes.
- Blocks: Safe repeat publication, source-permission governance, consistent fact checking, previews, corrections, and a maintainable archive.
- Implementation complexity: Medium to high — add editorial status, source/licensing metadata, observation-versus-forecast typing, validation tests, correction history, and a documented publish checklist.

**Authenticated administration and content operations:**
- Problem: The only admin surface is development-only, unauthenticated, read-only, and pointed at legacy Supabase tables rather than the live guide/insight model.
- Files: `src/routes/admin.tsx`, `src/data/guides.ts`, `src/data/insights.ts`, `README.md`
- Current workaround: Developers edit TypeScript files and deploy the site.
- Blocks: Non-developer publishing, drafts/previews, review approvals, scheduled updates, and safe correction workflows.
- Implementation complexity: High if a CMS is required; low to medium for a repository-based editorial CLI with schema validation and preview deployments.

**Production observability for critical forms:**
- Problem: Database and email failures are console-only; warranty email failure still returns overall success, and no alerting or reconciliation queue is present.
- Files: `src/lib/submitInquiry.ts`, `src/lib/submitWarranty.ts`, `src/lib/uploadWarrantyFiles.ts`
- Current workaround: Staff manually check Supabase records and inboxes as described in `README.md`.
- Blocks: Reliable lead handling, warranty response SLAs, upload-abuse detection, and recovery from partial failures.
- Implementation complexity: Medium — add structured error reporting, delivery status persistence, retry/reconciliation jobs, dashboards, and alerts without logging personal data or secrets.

## Test Coverage Gaps

**Public UI and end-to-end journeys:**
- What's not tested: Navigation, responsive layouts, accessibility, route rendering, contact submission, warranty multi-step validation, uploads, Turnstile, email status, and not-found behavior.
- Files: `src/routes/`, `src/components/`, `src/routes/warranty.lazy.tsx`
- Risk: High-impact user journeys and visual regressions can break while all unit tests pass.
- Priority: High
- Difficulty to test: Requires browser automation, stable service mocks, accessibility assertions, and representative mobile/desktop viewports.

**Warranty and upload server functions:**
- What's not tested: Active module resolution, strict field validation, mock-token rejection, rate limits, duplicate submissions, service-role behavior, file MIME/size enforcement, storage failures, and partial email failures.
- Files: `src/lib/submitWarranty.ts`, `src/lib/submitWarranty.tsx`, `src/lib/uploadWarrantyFiles.ts`
- Risk: Personal data, public storage, and warranty records can be mishandled or abused without detection.
- Priority: High
- Difficulty to test: Supabase Storage, Turnstile, Resend, and server-function boundaries need deterministic adapters or integration fixtures.

**Insights data integrity and discoverability:**
- What's not tested: Unique slugs, source completeness, chart/table dimensions, numeric transcription, forecast labels, SDIC discrepancy disclosure, sitemap inclusion, index visibility, and JSON-LD output.
- Files: `src/data/insights.ts`, `src/data/insight-types.ts`, `src/data/insights-mariana.ts`, `src/data/insights-sdic.ts`, `src/lib/seo.ts`
- Risk: A financial or market-data transcription error can be published as authoritative analysis, or a valid post can remain undiscoverable.
- Priority: High
- Difficulty to test: Source scans require curated fixtures and human-verified expected values; structural and registry checks are straightforward.

**Content claims and cross-surface consistency:**
- What's not tested: Product facts across visible pages, metadata, JSON-LD, PDFs, guide copy, and machine-readable discovery files.
- Files: `src/lib/seo.ts`, `src/routes/index.tsx`, `src/routes/products/`, `src/data/guide-content/`, `public/llms-full.txt`
- Risk: Search engines and customers receive contradictory technical, warranty, capacity, or company claims.
- Priority: High
- Difficulty to test: Claims first need a canonical, source-backed data model; automated equality and allowed-variation checks are then moderate effort.

**CI performance and deployment smoke coverage:**
- What's not tested: Bundle budgets, Lighthouse thresholds, production adapter startup, dynamic `/sitemap.xml`, service worker behavior, security headers, redirects, and external document availability.
- Files: `.github/workflows/ci.yml`, `vite.config.ts`, `vercel.json`, `src/routes/sitemap[.]xml.tsx`, `public/sw.js`
- Risk: A successful lint, typecheck, unit test, and build can still deploy a slow or operationally broken site.
- Priority: Medium
- Difficulty to test: Requires starting the production output in CI and adding browser/network assertions; performance thresholds need an agreed baseline.

**Current automated baseline:**
- What's tested: Five test files cover guide registry invariants, SEO helpers/discovery files, inquiry normalization/schema behavior, basic text sanitization, and server Supabase configuration.
- Files: `src/data/guides.test.ts`, `src/lib/seo.test.ts`, `src/lib/inquiry.test.ts`, `src/lib/security.test.ts`, `src/lib/serverSupabase.test.ts`
- Risk: The 43 passing tests and passing TypeScript check on 2026-08-17 cover mostly library/data behavior across 134 tracked TypeScript source files, not the primary UI or external integrations.
- Priority: Medium
- Difficulty to test: The existing Vitest setup is suitable for more pure logic tests; browser and service integration layers require additional harnesses.

---

*Concerns audit: 2026-08-17*
*Update as issues are fixed or new ones discovered*
