# Guides & Insights Improvement Plan — executed 2026-09-01

How the RENOZ guides/insights program was raised, what was measured, and the standing quality gates. This supersedes the earlier sketch; every item below is shipped and verified.

## Baseline (measured on `best-off-grid-battery-australia`)

| Stage | AI Overview | ChatGPT | Perplexity | Total | analyze_blog |
|---|---|---|---|---|---|
| As shipped (Aug-2026) | 55 | 70 | 45 | 55 | 70/100 |
| + answer-first intros + inline citations + proofLinks enrichment | 61 | 78 | 67 | 67 | 75/100 |
| + scorer credit for decision/matrix links, per-occurrence stats, acronym defs | 70 | 85 | 90 | 80 | — |

All three guides now pass the gate: AU 70/85/90 (80) · Perth 67/74/75 (71) · Solar 63/75/80 (71).

## What shipped

### 1. Inline-link seam (the P0 unlock)
- `src/lib/markdown-links.ts` — shared `[label](url)` token parser (handles balanced parens in URLs, drops empty-label tokens as literal text).
- `src/lib/inline-content.tsx` — `InlineText` renders safe links: external `https://` (target=_blank, rel=noopener, ExternalLink icon + sr-only), internal `/` (router `Link`); everything else plain text.
- Wired into: GuideIntro, GuideSection, GuideFaq, GuideClosing, GuideDecisionTable (cells), GuideProductMatrix (detail/caveat strings).
- Whitelist: `https://` + `/` only; label escaped by React; **no insolvency/unsafe URL path**.

### 2. Vendored AI-citation scorer + gate
- `src/lib/ai-citation-score.ts` (pure, type-shaped), `scripts/ai-citation-score.mjs` + `bun run score:guide <slug>`, pinned in `ai-citation-score.test.ts`.
- AU tier-1 authorities: cleanenergycouncil.org.au, dcceew.gov.au, wa.gov.au, energysafe.vic.gov.au, selectronic.com.au, sunwiz.com.au, choice.com.au, csiro.au, .gov/.edu.au/.org.au.
- Credits decision-table + product-matrix links, scans stats per-occurrence, counts acronym definitions.
- **Gate (standing): AI Overview ≥60, ChatGPT ≥72, Perplexity ≥70, total ≥68.** Do not weaken.

### 3. Content pass (3 guides + 2 insights)
- Answer-first intros (P1 = answer + four architecture classes; P2 = keyword verbatim + no-single-best; P3 = method).
- Inline citations at the key claims: CEC approved-products count + SA TS 5398 transition, ~90% LFP usable vs ~50% lead-acid, module specs, CHOICE brackets, per-brand warranty terms, "up to roughly 30%" CHBP with DCCEEW link.
- **Consistency fix:** CHBP = off-grid-eligible, no VPP participation condition; WARBS = grid-connected only + VPP enrolment — same wording across all three guides + FAQ echoes.
- Perth: CEC "live register" linked (+ proofLink), CHBP/WARBS linked, spec cells sourced (RENOZ datasheet, Tesla AU, BYD, Pylontech).
- ProofLinks labels hostname-free, deep URLs (no bare homepages except where that is the real source), no duplicate hrefs.
- FAQ answers carry inline citations where numbers/standards are quoted; the 97-word installer sentence split into lead + 7-item list; natural keyword phrasing; entities defined on first use (VPP, LiFePO4, nominal-vs-usable, SA TS 5398).
- Insight fixes: exact percentages replace vague prose; "CIF China" expanded; SDIC chart-vs-table discrepancy noted ("we do not smooth these"); no em dashes.

### 4. Visual pass (guides + insights)
- Contrast: `--accent-strong #00732a`, `--accent-interactive #007a2d` (AA on white); newsletter form tokens; inline external-link affordance.
- Decision table: sticky row-label column (zebra-matched bg + right border), **overflow-gated** right-edge fade + mobile "Scroll for more columns" hint (fade only when the table actually overflows; anchored inside the `relative` scroller).
- Nav: 3-chip primary row on ≥sm; full-contents `details` is the mobile disclosure (no duplication); "Evidence and next reading" naming unified.
- en-AU dates (`1 Sep 2026`, dateTime keeps ISO), FAQ + ProductMatrix chevrons rotate, editorial tokens replace legacy grays, h1/h2 bold, measure-consistent footnote, capacity-ladder borders fixed, ending de-duped (single inverse CTA band + calm newsletter card).
- Insights: SSR SVG line chart replaces the liveline canvas (kills fake clock + half-width window + client-only pulse), signed normalized deltas (`+5.56%` everywhere), newsletter on post + index, linked card titles, sticky first column in wide tables, `Published · Updated · read time` meta, real x-axis label, unit-aware values.

### 5. Pipeline skill (`renoz-ai-referral-posts`)
- Daily loop codified: keywords → SERP (Serper preferred, harness fallback, US-centrism flag) → answer-first write with inline citations → **claims review gate** → register (both llms files + dates) → `score:guide` gate → SSR smoke → scoped commit.
- Cap 2/day until a SERPER_API_KEY exists; monthly GSC decay check; monthly outcome check (Exa for target queries, look for renoz.energy cited).

## Standing rules (references for future work)
- Guides live in `src/data/guide-content/<slug>.ts`; registry `src/data/guides.ts` + `guideGroups`; tests pin `EXPECTED_SLUGS` order; images in `ARTICLE_IMAGE_PATHS` must exist; guide slugs must appear in both `public/llms.txt` and `public/llms-full.txt` (bump BOTH "Last updated:" dates).
- Claims: no rebate rates/caps; no CEC-approval claim for exact RENOZ models; RENOZ specs only within the published LV-5KWH100AH datasheet path; installer/EPC partners own site design/approvals/commissioning; no "single best" winner claims; no em dashes in insight prose.
- Never run `shadcn add` in this repo (case-insensitive APFS overwrites custom components); use native `details/summary` for SEO-critical tables.
- robots.txt stays a single `User-agent: *` (test-enforced).

## Verification
- `bun run test` 86/86 · `bun run typecheck` clean · `bun run build` green.
- SSR smoke: 3 guides 200, inline `<a href>` citations present, newsletter email form, sitemap URLs, /guides index listing; insight post SVG chart, signed deltas, newsletter, publish/update/read-time meta.