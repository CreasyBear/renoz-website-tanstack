# Testing Patterns

**Analysis Date:** 2026-08-17

## Test Framework

**Runner:**
- Use Vitest 4.1.10, declared in `package.json`; the canonical script is `"test": "vitest run"`.
- There is no dedicated `vitest.config.*` or `test` block in `vite.config.ts`. Tests therefore use Vitest defaults and run in the Node environment.
- `jsdom` and Testing Library are installed, but the current suite does not render components or configure a browser-like test environment.

**Assertions:**
- Import `describe`, `expect`, and `it` directly from `"vitest"`.
- Use Vitest's built-in matchers. Observed matchers include `toBe`, `toEqual`, `toMatchObject`, `toContain`, `toHaveLength`, `toBeNull`, `toBeUndefined`, `toBeTruthy`, `toBeGreaterThan`, `toMatch`, and `toThrow`.

**Run commands:**

```bash
bun run test                                  # Run all Vitest tests once
bun run test -- src/lib/inquiry.test.ts       # Run one test file
bun run test -- -t "inquiry payload"          # Run tests matching a name
bun run test -- --watch                       # Watch for changes
bun run typecheck                             # Strict TypeScript verification
bun run check                                 # Biome lint and format check
bun run build                                 # Production build verification
```

- CI in `.github/workflows/ci.yml` installs with `bun install --frozen-lockfile` and runs lint/format, build, typecheck, unit-test, and dependency-audit jobs.
- The CI test step currently uses `bun test --run`, while local project intent is encoded by `bun run test`. Use the package script for local and documented automation unless CI is deliberately changed.

## Test File Organization

**Location and naming:**
- Collocate `*.test.ts` beside the source module. There is no separate `tests/` tree.
- Current files:

```text
src/
  data/
    guides.ts
    guides.test.ts
  lib/
    inquiry.ts
    inquiry.test.ts
    security.ts
    security.test.ts
    seo.ts
    seo.test.ts
    serverSupabase.ts
    serverSupabase.test.ts
```

- Use `<module>.test.ts` for unit and cross-module contract tests. There are no `.integration.test.ts`, `.e2e.test.ts`, or snapshot files.

## Test Structure

- Group behavior by domain or public contract with `describe`, then write behavior-focused `it` names in present tense.
- Keep setup inside each test when data is small. The current suite uses no `beforeEach`, `afterEach`, `beforeAll`, or `afterAll`.
- Use local helper functions near the top of the file for repeated derivations, as `containsKeyword`, `guideProse`, `readPublic`, and `routeHead` do.
- Arrange data, invoke the real function, and assert directly; explicit arrange/act/assert comments are not used.
- Use loops for registry-wide invariants and `it.each` for compact input/output matrices:

```typescript
it.each([
	["homeowner", "residential"],
	["installer", "partnership"],
])("maps %s contact links to %s inquiries", (input, expected) => {
	expect(normalizeInquiryType(input)).toBe(expected);
});
```

- Prefer exact assertions for stable contracts (`toEqual`) and partial assertions for intentionally open objects (`toMatchObject`).
- Test both positive behavior and boundary/absence behavior, such as known versus unknown slugs and complete versus missing environment configuration.

## Mocking

**Current approach:**
- No test currently uses `vi.fn`, `vi.mock`, spies, fake timers, or module replacement.
- Prefer dependency injection and pure boundary resolvers over mocks. `resolveServerSupabaseConfig(env, viteEnv)` accepts environment records directly, so tests do not mutate `process.env`.
- Use real in-repository data and functions for contract tests. `src/lib/seo.test.ts` imports route definitions and reads checked-in public/source files from disk.

**Use mocks only when needed:**
- Mock external network, email, Supabase, browser, or clock boundaries when adding direct tests for server handlers or components.
- Keep `vi.mock(...)` at module scope with all imports at the top of the file. Restore spies or global changes in `afterEach`.
- Do not mock pure utilities, Zod schemas, domain registries, or internal transformations; exercise them directly.
- Avoid hitting live Supabase, Resend, Cloudflare Turnstile, Google, or other remote services in unit tests.

## Fixtures and Test Data

- Keep small fixtures inline in the test that consumes them, as in the inquiry payload objects in `src/lib/inquiry.test.ts`.
- Use top-level typed constants for shared expected registries, following `EXPECTED_SLUGS` in `src/data/guides.test.ts`.
- Read repository artifacts through small helpers when the artifact itself is the contract:

```typescript
const root = process.cwd();

function readPublic(path: string) {
	return readFileSync(join(root, "public", path), "utf8");
}
```

- Do not introduce a fixture directory until data is shared by multiple test files or is too large to keep readable inline.
- Use obviously fake credentials and hosts (`https://example.supabase.co`, `"anon-key"`) and never load developer secrets.

## Coverage

**Current state:**
- No coverage script, provider package, configuration, threshold, or CI coverage gate exists.
- Coverage is not generated by `bun run test`, and no percentage target is enforced.
- Treat coverage qualitatively: add focused regression tests for changed pure logic, validation, route metadata, registries, and server configuration.
- If formal coverage is introduced, add the Vitest coverage provider and a package script/configuration in the same change; do not claim coverage from the current setup.

## Test Types

**Unit tests:**
- Pure utility, normalization, sanitization, validation, and configuration tests form the core suite.
- Examples: `src/lib/security.test.ts`, `src/lib/inquiry.test.ts`, and `src/lib/serverSupabase.test.ts`.

**Repository contract tests:**
- Test cross-file invariants using real routes, registries, and checked-in public artifacts.
- `src/data/guides.test.ts` enforces guide registry/content rules; `src/lib/seo.test.ts` checks route metadata, sitemap output, navigation links, robots directives, and AI discovery files.

**Component/integration/E2E tests:**
- None are currently present. Testing Library and jsdom are available but unconfigured.
- For new interactive UI tests, explicitly opt into jsdom through Vitest configuration or a file environment directive and test behavior/accessibility rather than implementation details.
- No Playwright/Cypress setup exists; verify full browser flows manually until an E2E framework is added.

## Common Patterns

**Error and absence testing:**

```typescript
expect(() => readPublic("sitemap.xml")).toThrow();
expect(getGuide("not-a-real-guide")).toBeUndefined();
expect(resolveServerSupabaseConfig({ VITE_SUPABASE_URL: "" }, {})).toBeNull();
```

**Collection invariants:**

```typescript
for (const guide of guides) {
	expect(guide.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
	for (const column of guide.decisionColumns) {
		expect(column.cells).toHaveLength(guide.decisionRowLabels.length);
	}
}
```

**Async testing:**
- No current test is asynchronous. When adding one, make the test callback `async` and `await` the operation or use `await expect(promise).rejects...`; never leave a promise unobserved.

**Snapshots:**
- Do not use snapshots; none exist. Prefer explicit assertions for metadata, schema objects, content requirements, and user-visible behavior.

---

*Testing analysis: 2026-08-17*
*Update when test patterns change*
