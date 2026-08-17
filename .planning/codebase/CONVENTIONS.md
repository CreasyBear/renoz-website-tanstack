# Coding Conventions

**Analysis Date:** 2026-08-17

## Naming Patterns

**Files:**
- Use `PascalCase.tsx` for authored React components, such as `src/components/layout/Header.tsx`, `src/components/ui/GoogleMapEmbed.tsx`, and `src/components/guides/GuideShell.tsx`.
- Use lowercase or kebab-case for utilities and content modules, such as `src/lib/serverSupabase.ts`, `src/lib/google-business.ts`, and `src/data/guide-content/off-grid-battery-systems-perth.ts`.
- Follow TanStack Router file conventions in `src/routes/`: `index.tsx`, `$slug.tsx`, `__root.tsx`, and `.lazy.tsx` route companions.
- Collocate tests with their subject and name them `*.test.ts`, for example `src/lib/inquiry.test.ts` and `src/data/guides.test.ts`.

**Functions and variables:**
- Use `camelCase` for functions, hooks, handlers, local variables, and module helpers: `normalizeInquiryType`, `getGuidesBySlugs`, `handleInquirySubmit`, `useTouchOptimization`.
- Prefix hooks with `use`; use `handle<Event>` for event callbacks and `is`/`has`/`can` for booleans.
- Use `UPPER_SNAKE_CASE` for stable exported constants and literal sets: `SITE_URL`, `DEFAULT_OG_IMAGE`, `INQUIRY_TYPES`, `GUIDE_LINK_SETS`.
- Use descriptive callback parameters; short names such as `g`, `e`, and `i` are acceptable only in small maps or event handlers.

**Types:**
- Use `PascalCase` without an `I` prefix for interfaces and aliases: `SitemapUrl`, `SEOData`, `InquiryType`, `RuntimeEnv`.
- Derive literal unions from `as const` arrays or objects where practical:

```typescript
export const INQUIRY_TYPES = ["general", "residential", "commercial", "partnership"] as const;
export type InquiryType = (typeof INQUIRY_TYPES)[number];
```

- Use `type` imports (`import type { Guide }`) or inline type specifiers (`import { type Guide, guides }`) at module scope.

## Code Style

**Formatting:**
- Use Biome 2.5.5 as configured in `biome.json`.
- Use tabs, double quotes, and trailing commas in multiline source code. Let Biome decide wrapping; no explicit line-width override is configured.
- Run `bun run check` before handoff; use `bun run format -- --write .` only when intentionally formatting files.
- Do not edit generated `src/routeTree.gen.ts`; Biome explicitly excludes it. `src/styles.css` is also excluded.
- Treat `vite.config.ts` single quotes/two-space indentation as a legacy/config exception, not the model for new `src/` code.

**Linting and TypeScript:**
- Use strict TypeScript. `tsconfig.json` enables `strict`, unused checks, no switch fallthrough, and unchecked side-effect import checks.
- Avoid `any`; Biome warns on explicit `any`. Prefer `unknown` plus narrowing, as in `formatFieldValue` in `src/routes/contact.tsx`.
- Fix warnings for unused imports/variables, hook dependencies, unstable IDs, nested components, and use-before-declaration.
- For every switch over a union or enum, include an exhaustive `never` default:

```typescript
default: {
	const exhaustiveCheck: never = value;
	return exhaustiveCheck;
}
```

## Import Organization

**Order:**
1. Node built-ins and external packages.
2. Internal application modules.
3. Same-directory relative modules.
4. Type-only imports at the appropriate module level.

- Keep every import at the top of the module. Do not add inline/dynamic imports in functions or type annotations.
- `src/lib/seo.ts` contains legacy `await import("./supabase")` calls; do not copy this pattern. Refactor dependencies or isolate boundaries if circularity or runtime safety requires special handling, and document any unavoidable exception.
- Let Biome organize imports. Keep imported names grouped and sorted rather than manually splitting one package across declarations.
- Prefer the existing local style of the area being edited. The `@/*` alias maps to `src/*`, but both alias imports and relative imports exist; use `@/` for cross-feature imports and `./` for tightly collocated modules.

## Error Handling

- Validate untrusted boundary data with Zod before business logic. `src/lib/inquiry.ts` sanitizes and normalizes through `inquiryPayloadSchema`; server functions attach schemas with `.validator(...)`.
- Return explicit discriminated outcome objects for expected server failures:

```typescript
return { success: false, error: "Server configuration error" };
return { success: true, notificationStatus: "sent" as const };
```

- Throw `Error` for unexpected client workflow failures and translate technical failures into actionable user messages at the UI boundary, as in `src/routes/contact.tsx`.
- Use `try/catch/finally` around recoverable external work. Preserve successful primary work when a secondary side effect fails; `submitInquiry` saves the inquiry even if notification email fails.
- Return `null` or `undefined` for normal absence when the caller can branch cleanly (`resolveServerSupabaseConfig`, `getGuide`). Use early guard clauses.
- Narrow caught values with `instanceof Error` before reading `.message`; rethrow unknown failures rather than silently swallowing them.

## Logging

- Use `console.error` and `console.warn` only at server, network, storage, or error-boundary edges; there is no dedicated logger.
- Include operation context, for example `"[submitInquiry] DB insert failed:"`, without logging secrets, tokens, service-role keys, or full sensitive payloads.
- Do not add routine `console.log` calls to components or pure utilities.

## Comments and Documentation

- Use comments to explain constraints, business rules, security decisions, or non-obvious intent—not line-by-line mechanics.
- Use concise JSDoc for exported helpers whose contract is not obvious, as in `src/lib/seo.ts` and `src/lib/utils.ts`.
- Keep route and content comments close to the relevant declaration. Do not leave untracked `TODO`/`FIXME`; link deferred work to an issue when needed.

## Function and Module Design

- Prefer small pure helpers and guard clauses. Extract parsing, normalization, and schema generation from UI components.
- Use an options object or typed object parameter when a function needs several related values; destructure at the boundary.
- Keep module initialization side-effect free, especially modules imported by route `head()` functions.
- Prefer named exports for data, utilities, route constants, and reusable components. Default exports remain acceptable for established component files such as `Header.tsx`.
- Keep route modules shaped as `export const Route = createFileRoute(...)(...)` plus a local page component.
- Keep domain registries as typed data plus lookup helpers, following `src/data/guides.ts`; use `as const` for immutable lookup sets.
- Avoid barrel files unless they define a clear feature API. `src/data/guides.ts` deliberately re-exports guide types; most modules import concrete files directly.

---

*Convention analysis: 2026-08-17*
*Update when patterns change*
