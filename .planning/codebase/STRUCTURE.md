# Codebase Structure

**Analysis Date:** 2026-08-17

## Directory Layout

```text
renoz-website-tanstack/
├── .github/
│   └── workflows/              # Continuous integration definitions
├── .planning/
│   └── codebase/               # Generated codebase maps for GSD planning
├── docs/                       # Product, domain, and SEO research documents
├── memory-bank/                # Historical project context and audits
├── public/                     # Static files served from the site root
│   ├── .well-known/            # Machine-readable AI/entity manifests
│   ├── documents/              # Public PDFs grouped by document category
│   └── images/                 # Product, case-study, partner, and brand media
├── scripts/                    # One-off repository maintenance scripts
├── src/                        # Application source
│   ├── components/
│   │   ├── guides/             # Guide shell and guide-specific renderers
│   │   ├── insights/           # Insight collection, post, chart, and table renderers
│   │   ├── layout/             # Site-wide header, footer, and skip navigation
│   │   ├── sections/           # Reusable large marketing-page sections
│   │   └── ui/                 # General controls and visual primitives
│   ├── data/
│   │   ├── guide-content/      # One typed content module per guide
│   │   └── insight-content/    # One typed content module per insight post
│   ├── emails/
│   │   └── components/         # Shared transactional-email layout
│   ├── hooks/                  # Reusable browser and lifecycle hooks
│   ├── lib/                    # SEO, validation, security, data clients, server functions
│   ├── routes/
│   │   ├── case-studies/       # Case-study index and dynamic detail routes
│   │   ├── guides/             # Guide index and dynamic guide route
│   │   ├── insights/           # China Battery Desk index and briefing route
│   │   └── products/           # Product index and segment product routes
│   ├── routeTree.gen.ts        # Generated typed TanStack route graph
│   ├── router.tsx              # Router factory
│   └── styles.css              # Tailwind entry, tokens, and shared utilities
├── PRODUCT.md                  # China Battery Desk product and editorial contract
├── package.json                # Bun scripts and package manifest
├── tsconfig.json               # Strict TypeScript and @/* path alias
├── vercel.json                 # Vercel deployment configuration
└── vite.config.ts              # TanStack Start, Nitro, React, and Tailwind build setup
```

## Directory Purposes

**`src/routes/`:**
- Purpose: File-based route definitions and route-owned page composition.
- Contains: `*.tsx` route files, nested URL directories, dynamic `$slug` routes, route metadata, loaders, search validation, and server handlers.
- Key files: `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/contact.tsx`, `src/routes/sitemap[.]xml.tsx`.
- Subdirectories: `src/routes/products/`, `src/routes/guides/`, `src/routes/insights/`, and `src/routes/case-studies/`.
- Special syntax: `$slug.tsx` is dynamic; `[.]` escapes a literal dot; `partners_.capability-statement.tsx` escapes route nesting while producing `/partners/capability-statement`; `*.lazy.tsx` holds lazy-loaded route UI.

**`src/components/layout/`:**
- Purpose: Persistent site chrome shared by every public route.
- Contains: Header, footer, and skip-link components.
- Key files: `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/SkipLinks.tsx`.
- Subdirectories: None.

**`src/components/sections/`:**
- Purpose: Reusable, substantial marketing-page regions.
- Contains: Hero, feature, FAQ, technical specification, and economics sections.
- Key files: `src/components/sections/ProductHero.tsx`, `src/components/sections/BentoFeatures.tsx`, `src/components/sections/TechSpecs.tsx`, `src/components/sections/SolarEconomics.tsx`, `src/components/sections/OffGridEconomics.tsx`, `src/components/sections/CommercialEconomics.tsx`.
- Subdirectories: None.

**`src/components/ui/`:**
- Purpose: General-purpose controls, cards, embeds, forms, galleries, diagrams, loading states, and error boundaries.
- Contains: PascalCase custom components and lowercase Radix/shadcn-style primitives.
- Key files: `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`, `src/components/ui/Image.tsx`, `src/components/ui/MasonryGallery.tsx`, `src/components/ui/SecureForm.tsx`, `src/components/ui/ErrorBoundary.tsx`.
- Subdirectories: None.

**`src/components/guides/`:**
- Purpose: Render the fixed and optional portions of typed `Guide` records.
- Contains: Shared article shell, intro, prose section, decision table, product matrix, capacity ladder, proof links, FAQ, closing, CTA, and related-guide strip.
- Key files: `src/components/guides/GuideShell.tsx`, `src/components/guides/GuideSection.tsx`, `src/components/guides/GuideDecisionTable.tsx`, `src/components/guides/GuideProductMatrix.tsx`, `src/components/guides/GuideRelatedStrip.tsx`.
- Subdirectories: None.

**`src/components/insights/`:**
- Purpose: Render the China Battery Desk collection and typed insight blocks.
- Contains: Collection page, post dispatcher, line chart, bar chart, and data table.
- Key files: `src/components/insights/InsightsIndexPage.tsx`, `src/components/insights/InsightPostPage.tsx`, `src/components/insights/InsightLineChart.tsx`, `src/components/insights/InsightBarChart.tsx`, `src/components/insights/InsightDataTable.tsx`.
- Subdirectories: None.

**`src/data/`:**
- Purpose: Store typed public content, content registries, groupings, source datasets, and lookup helpers.
- Contains: Guide, insight, case-study, FAQ, document, and gallery data.
- Key files: `src/data/guides.ts`, `src/data/guide-types.ts`, `src/data/insights.ts`, `src/data/insight-types.ts`, `src/data/case-studies.ts`, `src/data/documents.ts`, `src/data/faqs.ts`.
- Subdirectories: `src/data/guide-content/` and `src/data/insight-content/`.

**`src/data/guide-content/`:**
- Purpose: Keep one complete, typed guide record per content module.
- Contains: Kebab-case `.ts` files named for their public slug.
- Key files: `src/data/guide-content/off-grid-battery-systems-perth.ts`, `src/data/guide-content/48v-vs-high-voltage-battery-system.ts`.
- Registration: Every file must be imported and included in `src/data/guides.ts`.

**`src/data/insight-content/`:**
- Purpose: Assemble one complete, typed insight briefing per module.
- Contains: Kebab-case `.ts` files named for their public slug.
- Key file: `src/data/insight-content/china-lfp-price-signal-august-2026.ts`.
- Registration: Every file must be imported and included in `src/data/insights.ts`.
- Source separation: Large translated/source datasets may live beside the registries, as in `src/data/insights-mariana.ts` and `src/data/insights-sdic.ts`.

**`src/lib/`:**
- Purpose: Cross-cutting application logic outside visual components.
- Contains: SEO/schema builders, validation schemas, form security, Supabase clients, TanStack server functions, submission workflows, and utility helpers.
- Key files: `src/lib/seo.ts`, `src/lib/inquiry.ts`, `src/lib/submitInquiry.ts`, `src/lib/serverSupabase.ts`, `src/lib/form-security.ts`, `src/lib/utils.ts`.
- Tests: Colocated `*.test.ts` files.

**`src/emails/`:**
- Purpose: React Email templates for contact and warranty notifications and confirmations.
- Contains: PascalCase-independent kebab-case `.tsx` templates and shared layout components.
- Key files: `src/emails/contact-notification.tsx`, `src/emails/warranty-support.tsx`, `src/emails/components/EmailLayout.tsx`.
- Subdirectories: `src/emails/components/`.

**`src/hooks/`:**
- Purpose: Reusable client-side lifecycle and external-loader hooks.
- Contains: `use*.ts` hook modules.
- Key files: `src/hooks/useGoogleMapsLoader.ts`, `src/hooks/useAbortController.ts`, `src/hooks/useCleanupRegistry.ts`.
- Subdirectories: None.

**`public/`:**
- Purpose: Static assets copied to the public root unchanged.
- Contains: Images, PDFs, PWA files, crawler files, AI manifests, and LLM-readable company summaries.
- Key files: `public/robots.txt`, `public/sw.js`, `public/manifest.json`, `public/llms.txt`, `public/llms-full.txt`.
- Subdirectories: `public/images/`, `public/documents/`, and `public/.well-known/`.

**`docs/`:**
- Purpose: Internal product, content, market, and SEO research.
- Contains: Markdown research and briefing documents.
- Key files: `docs/renoz-offer.md`, `docs/seo-content-brief-2026.md`, `docs/off-grid-battery-systems-domain-research.md`.
- Subdirectories: None at the mapped depth.

**`.planning/codebase/`:**
- Purpose: Current codebase maps consumed by GSD planning workflows.
- Contains: Architecture, structure, stack, and other generated Markdown analyses.
- Key files: `.planning/codebase/ARCHITECTURE.md`, `.planning/codebase/STRUCTURE.md`, `.planning/codebase/STACK.md`.
- Subdirectories: None.

## Key File Locations

**Entry Points:**
- `src/router.tsx`: Creates the TanStack Router instance from the generated route tree.
- `src/routes/__root.tsx`: Defines the global HTML shell, site layout, metadata, analytics, error boundary, and not-found page.
- `src/routes/index.tsx`: Home-page route and composition.
- `src/routeTree.gen.ts`: Generated route graph imported by the router factory.

**Route Collections:**
- `src/routes/products/`: Product overview and residential, rural, and commercial marketing pages.
- `src/routes/guides/`: Guide collection and dynamic guide detail.
- `src/routes/insights/`: China Battery Desk collection and dynamic briefing detail.
- `src/routes/case-studies/`: Case-study collection and dynamic detail.

**Configuration:**
- `package.json`: Bun commands, dependencies, and package metadata.
- `vite.config.ts`: Vite plugins, Nitro Vercel preset, SSR package handling, and TypeScript path resolution.
- `tsconfig.json`: Strict compiler options and the `@/*` → `src/*` alias.
- `vercel.json`: Vercel deployment behavior.
- `env.template`: Expected environment-variable template.
- `src/styles.css`: Tailwind CSS entry, fonts, design tokens, layout classes, and utilities.

**Core Content Registries:**
- `src/data/guides.ts`: Guide registry, index groupings, contextual link sets, paths, and lookup helpers.
- `src/data/insights.ts`: Insight registry, path helper, and lookup helper.
- `src/data/case-studies.ts`: Case-study type and records.
- `src/data/documents.ts`: Resource-document type and records.
- `src/data/faqs.ts`: Page-specific FAQ collections.
- `src/data/case-study-images.ts`: Gallery image sets and selectors.

**Content Schemas:**
- `src/data/guide-types.ts`: Fixed guide record schema and optional guide modules.
- `src/data/insight-types.ts`: Insight record and discriminated block union.

**Editorial Rendering:**
- `src/routes/guides/$slug.tsx`: Guide lookup, schema metadata, table of contents, and guide block composition.
- `src/components/guides/GuideShell.tsx`: Shared guide/insight reading shell.
- `src/components/insights/InsightPostPage.tsx`: Insight block dispatcher and source rendering.
- `src/components/insights/InsightsIndexPage.tsx`: China Battery Desk landing surface.

**Marketing Composition:**
- `src/routes/index.tsx`: Home-page section ordering and home-specific content.
- `src/routes/products/residential.tsx`: Residential product page composition.
- `src/routes/products/rural.tsx`: Rural/off-grid product page composition.
- `src/routes/products/commercial.tsx`: Commercial product page composition.
- `src/components/sections/`: Shared large sections used by those routes.

**SEO and Discovery:**
- `src/lib/seo.ts`: Metadata, canonical links, JSON-LD builders, public product/company facts, and sitemap generation.
- `src/routes/sitemap[.]xml.tsx`: XML response route.
- `public/robots.txt`: Crawler directives.
- `public/llms.txt`: Concise machine-readable company/content map.
- `public/llms-full.txt`: Expanded machine-readable company briefing.
- `public/.well-known/ai-manifest.json`: AI-facing public manifest.
- `public/.well-known/reasoning.json`: Public reasoning/evidence metadata.

**Forms and Server Workflows:**
- `src/routes/contact.tsx`: Contact UI, client validation, and submission state.
- `src/lib/inquiry.ts`: Inquiry normalization and server payload schema.
- `src/lib/submitInquiry.ts`: Turnstile, Supabase insert, and Resend notification server function.
- `src/routes/warranty.lazy.tsx`: Warranty form UI.
- `src/lib/submitWarranty.ts`: Warranty submission server function.
- `src/lib/uploadWarrantyFiles.ts`: Warranty file-upload server function.
- `src/lib/serverSupabase.ts`: Server credential resolution and stateless Supabase client factory.

**Testing:**
- `src/data/guides.test.ts`: Guide registry/content integrity tests.
- `src/lib/seo.test.ts`: Metadata, schema, and sitemap tests.
- `src/lib/security.test.ts`: Security helper tests.
- `src/lib/serverSupabase.test.ts`: Server Supabase configuration tests.
- `src/lib/inquiry.test.ts`: Inquiry normalization and validation tests.

**Documentation:**
- `README.md`: Repository setup and development documentation.
- `PRODUCT.md`: China Battery Desk audience, positioning, evidence, constraints, and design/editorial principles.
- `docs/`: Supporting domain and content research.
- `.planning/codebase/`: GSD-facing codebase documentation.

## Naming Conventions

**Files:**
- `PascalCase.tsx` for reusable React components: `src/components/ui/Button.tsx`, `src/components/guides/GuideShell.tsx`.
- `kebab-case.ts` for content modules and many domain modules: `src/data/guide-content/battery-state-of-health.ts`, `src/lib/google-business.ts`.
- `camelCase.ts` is also used for established utilities and data modules: `src/lib/addressUtils.ts`, `src/data/caseStudies` is not used; follow the local directory precedent.
- `*.test.ts` for colocated unit tests: `src/lib/seo.test.ts`.
- `$slug.tsx` for dynamic route parameters: `src/routes/insights/$slug.tsx`.
- `*.lazy.tsx` for route UI split from eager metadata/loader modules: `src/routes/case-studies/$slug.lazy.tsx`.
- `[.]` in a route filename for a literal dot: `src/routes/sitemap[.]xml.tsx`.
- A trailing underscore in a route segment escapes parent nesting: `src/routes/partners_.capability-statement.tsx`.
- `UPPERCASE.md` for prominent repository/product documents: `README.md`, `PRODUCT.md`.

**Directories:**
- Lowercase plural nouns for collections: `src/components/`, `src/routes/`, `src/data/`, `src/hooks/`.
- Kebab-case for multiword content directories: `src/data/guide-content/`, `src/data/insight-content/`.
- Feature or responsibility grouping under `src/components/`: `guides/`, `insights/`, `layout/`, `sections/`, `ui/`.
- URL-shaped nesting under `src/routes/`: `products/`, `guides/`, `insights/`, `case-studies/`.

**Exports and Symbols:**
- Route modules export `Route`.
- Content modules export a singular typed `guide` or `insight`.
- Registries export plural arrays such as `guides`, `insights`, `caseStudies`, and `documents`.
- Lookup helpers use `get<Entity>` naming, such as `getGuide()` and `getInsight()`.
- Path builders use `<entity>Path`, such as `guidePath()` and `insightPath()`.
- React hooks begin with `use`.
- Shared constants use uppercase snake case when acting as stable configuration, such as `GUIDE_LINK_SETS`, `INSIGHTS_PATH`, and `SITE_URL`.

**Import Conventions:**
- Newer modules commonly use the `@/*` alias configured in `tsconfig.json`.
- Existing route modules also use relative imports; preserve local consistency when editing a file.
- Imports remain at module top level.

## Where to Add New Code

**New Guide:**
- Content: Create `src/data/guide-content/<slug>.ts` exporting `guide: Guide`.
- Types: Extend `src/data/guide-types.ts` only if the existing fixed fields and optional modules cannot represent the content.
- Registry: Import and append the guide in `src/data/guides.ts`.
- Index placement: Add the slug to the appropriate `guideGroups` entry in `src/data/guides.ts`.
- Contextual links: Add the slug to relevant `GUIDE_LINK_SETS` entries in `src/data/guides.ts` when product or marketing pages should surface it.
- Rendering: Reuse `src/components/guides/`; add a focused component there only for a genuinely reusable new guide module.
- SEO/sitemap: Normally automatic through the registry and `src/lib/seo.ts`; verify generated schema and sitemap tests.
- Tests: Extend `src/data/guides.test.ts` and `src/lib/seo.test.ts` as required.

**New Insight / China Battery Desk Briefing:**
- Source data: Put reusable translated or normalized source tables in a focused module under `src/data/`, following `src/data/insights-mariana.ts` and `src/data/insights-sdic.ts`.
- Editorial content: Create `src/data/insight-content/<slug>.ts` exporting `insight: Insight`.
- Registry: Import and append it in `src/data/insights.ts`.
- Blocks: Use `prose`, `table`, `chart`, and `sources` from `src/data/insight-types.ts`.
- New block kind: Add the discriminated type to `src/data/insight-types.ts`, create its renderer in `src/components/insights/`, and handle it exhaustively in `src/components/insights/InsightPostPage.tsx`.
- Landing page: Change `src/components/insights/InsightsIndexPage.tsx` when the archive presentation or China Battery Desk positioning changes.
- Product contract: Check claims, provenance, licensing, uncertainty, and accessibility against `PRODUCT.md`.
- SEO/sitemap: Registry inclusion feeds `src/lib/seo.ts`; add or adjust tests in `src/lib/seo.test.ts`.

**New Product Page:**
- Route: Add `src/routes/products/<slug>.tsx` with `createFileRoute("/products/<slug>")`.
- Metadata/schema: Add canonical metadata and structured data through `src/lib/seo.ts`; extend `productFacts` and `productSchema` there if this is a new product category.
- Composition: Order the page's sections in the route module, following `src/routes/products/residential.tsx`, `src/routes/products/rural.tsx`, or `src/routes/products/commercial.tsx`.
- Shared sections: Reuse or add components in `src/components/sections/`.
- Shared controls: Use `src/components/ui/`.
- Assets: Add web-ready images to the relevant `public/images/products/` or `public/images/stock/` location.
- Navigation/discovery: Update `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/routes/products/index.tsx`, and sitemap/static paths in `src/lib/seo.ts` where necessary.
- Related guidance: Add a suitable set to `GUIDE_LINK_SETS` in `src/data/guides.ts` and render it with `src/components/guides/GuideRelatedStrip.tsx`.

**New Marketing Page:**
- Route and composition: Add a route module under `src/routes/` matching the desired URL.
- Metadata: Declare `head()` using helpers from `src/lib/seo.ts`.
- Reusable page regions: Add substantial, reusable sections to `src/components/sections/`.
- One-off sections: Keep them in the route until reuse is demonstrated.
- Reusable controls and display primitives: Add them to `src/components/ui/`.
- Page-specific static content: Keep small arrays near the route; move reusable or indexed content to `src/data/`.
- Navigation and sitemap: Update header/footer and `src/lib/seo.ts` when the page should be globally discoverable.

**New UI Section:**
- Large marketing section: Add `src/components/sections/<PascalCase>.tsx`.
- Guide-specific module: Add `src/components/guides/<PascalCase>.tsx`.
- Insight-specific visualization or block: Add `src/components/insights/<PascalCase>.tsx`.
- General primitive/control: Add `src/components/ui/<PascalCase>.tsx`; lowercase names are reserved for the existing shadcn/Radix-style primitive convention.
- Styling: Prefer tokens and shared layout utilities from `src/styles.css`; add a global token only when multiple surfaces need it.
- Usage: Import at module top and compose from the owning route or renderer.

**New Case Study:**
- Record: Add a `CaseStudy` object to `src/data/case-studies.ts`.
- Images: Add media under `public/images/case-studies/` and update `src/data/case-study-images.ts` for gallery use.
- Rendering: Existing `/case-studies/$slug` lookup and lazy detail renderer should handle the record.
- SEO/sitemap: Verify `src/lib/seo.ts` schema and sitemap output.

**New Public Document:**
- Asset: Add the PDF under an appropriate category in `public/documents/`.
- Registry: Add a `Document` record to `src/data/documents.ts`.
- Category: Extend the `Document["category"]` union and resource filters in `src/routes/resources.tsx` if introducing a new category.
- Discovery: Verify resource schema and AI-facing public summaries where the document is authoritative evidence.

**New Server Workflow:**
- Shared schema/domain logic: Add a focused module under `src/lib/`.
- Server boundary: Add a TanStack `createServerFn` module under `src/lib/`.
- Email templates: Add notification or confirmation templates under `src/emails/`.
- UI: Call the server function from the owning route or reusable form component.
- Tests: Co-locate `*.test.ts` with pure validation, configuration, and transformation logic.

## Special Directories and Files

**`src/routeTree.gen.ts`:**
- Purpose: Typed route graph and route-path declarations.
- Source: Generated by TanStack Router from `src/routes/`.
- Committed: Yes.
- Rule: Do not hand-edit; changes will be overwritten.

**`.output/`:**
- Purpose: Production server/build output used by `bun start`.
- Source: Generated by the Vite/TanStack Start/Nitro build.
- Committed: No; treat as disposable build output.

**`public/`:**
- Purpose: Files served at exact root-relative URLs.
- Source: Maintained assets and public machine-readable files.
- Committed: Yes.
- Rule: References omit `public`, for example `public/images/products/example.webp` is requested as `/images/products/example.webp`.

**`public/.well-known/`:**
- Purpose: AI/entity discovery and published reasoning metadata.
- Source: Maintained JSON documents.
- Committed: Yes.
- Coordination: Keep aligned with `public/llms.txt`, `public/llms-full.txt`, route metadata, and current content registries.

**`public/documents/`:**
- Purpose: Downloadable authoritative product PDFs.
- Source: Maintained binary assets grouped by category.
- Committed: Yes.
- Coordination: Every user-facing item should also have a record in `src/data/documents.ts`.

**`.planning/codebase/`:**
- Purpose: Planning-time codebase intelligence.
- Source: Generated or refreshed by GSD codebase mapping.
- Committed: Project-dependent; currently present in the working tree.
- Rule: Analysis dates and footers identify map freshness.

**`PRODUCT.md`:**
- Purpose: Product contract for the RENOZ China Battery Desk.
- Source: Maintained product definition, not generated code.
- Committed: Intended as repository documentation.
- Coordination: Use when changing `src/routes/insights/`, `src/components/insights/`, `src/data/insight-content/`, source treatment, or editorial presentation.

**Lazy Route Pairs:**
- Purpose: Keep route metadata/loaders eager while splitting heavy UI.
- Source: Hand-maintained pairs such as `src/routes/case-studies/$slug.tsx` plus `src/routes/case-studies/$slug.lazy.tsx`.
- Committed: Yes.
- Rule: Both files must use the same route ID.

---

*Structure analysis: 2026-08-17*
*Update when directory structure changes*
