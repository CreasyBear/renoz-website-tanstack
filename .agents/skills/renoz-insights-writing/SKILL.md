---
name: renoz-insights-writing
description: Write and sense-check RENOZ China Battery Desk briefings from WeChat sources. Use when adding or editing /insights posts, insight-content files, Mariana or SDIC tables, CNY-to-AUD copy, or when the user pastes a Chinese WeChat article for the desk.
---

# RENOZ China Battery Desk

English briefings of Chinese battery-industry sources Western readers cannot use. Interpret. Do not dump scans.

Repo paths are relative to `renoz-website-tanstack`.

## Locked rules

- One source = one job = one URL. Do not mix a spot print, a conversion identity, a broker forecast, and a cycle note.
- Sandwich every section: claim → explained evidence (who the company or unit is) → return to the thesis.
- No CJK / Han on published insight surfaces (title, description, eyebrow, about, closing, sources, table cells, notes, prose).
- No weekly cadence, no sales CTA, no newsletter signup, no invented search volume.
- Australian English (`licence`, `utilisation`, `tonne`). Titles like a search, not a WeChat hook.
- A China powder print is not a WA pack price. A 2026 forecast is not a one-day spot. Do not mash them into one AUD bill of materials.
- Sense-check before publishing: % of the relevant total, unit identity (especially Chinese 10,000-tonne units), production + imports − exports.
- First mention of a name states the job (listed ternary-cathode producer, mainland broker, integrated miner). Do not drop Ganfeng, CATL, Lina, SDIC, Dangsheng as if the reader already lives on WeChat.
- Do not write in the Chinese WeChat voice (no carnival, feast, Ningwang, birth-certificate, 出身, 钉口径).

## Jobs already in the desk

| Job | Slug | Distinctive figures (keep on that page only) |
|---|---|---|
| Cycle note | `china-lithium-materials-third-cycle` | 21.4–24.2 bn CNY, CATL 72.2, 1 TWh vs 450 GWh |
| Conversion handbook | `cathode-tonnes-per-gwh-lfp-ncm-sodium` | 1,600; 1,351; 3,543; 77.4%; N/P; Dangsheng |
| Spot bulletin | `china-lfp-price-signal-august-2026` | 57,000 CNY/t storage-grade LFP |
| Broker note | `sdic-china-lithium-supply-demand-2026` | 46,782 t; 525,000 vs 528,500 |

Related links connect jobs; they do not import the other job’s headline number.

## Voice: sandwich, not a roundup

Bad: “Ganfeng, Tianqi, Salt Lake, Putailai…”
Good: thesis → “Ganfeng Lithium is an integrated miner and converter; it led the eleven-name set on yuan profit…” → back to the thesis.

Bad: “a 46,782-tonne shortfall.”
Good: “46,782 tonnes is about 2.6% of 1.77 Mt of demand. It is a sell-side forecast, not a census.”

## Money and units

Use `src/data/insight-fx.ts` (`AUD_PER_CNY`, `audFromCny`, `audPerTonne`, `FX_NOTE`). Do not hand-round beside the helper.

- Convert most CNY totals and CNY/t prints.
- Historical yuan uses the same late-August 2026 rate for scale; say so. It is not the contemporaneous AUD price.
- Do not convert USD spodumene without a stated USD/AUD rate.
- Do not convert forecast tonnes through today’s spot (mixes jobs).
- Chinese broker tables often print 万吨 (10,000-tonne units). Spell that in English. 52.5 of those units is 525,000 t, not 52.5 t.
- Line charts in `InsightLineChart` format values as **tonnes**. Do not put CNY prices on a line chart.

## Workflow

1. Name the job in one sentence (spot / conversion / broker forecast / cycle). If the paste is two jobs, split into two briefings.
2. Recover publisher, URL, dates. WeChat timestamps often fail anti-bot; if the date is missing, say so in the source note rather than inventing one.
3. Sense-check the arithmetic (identities, % of demand, internal discrepancies). Leave discrepancies visible; do not pick a winner.
4. Write sandwich prose. Introduce every name and unit.
5. Add the file and wire it. See [checklist.md](checklist.md).
6. Lock the briefing in tests: distinctive figures present here, other jobs’ figures absent, no Han.
7. `bunx biome check --write` on the touched files, then `bun run test src/data/insights.test.ts src/data/insight-fx.test.ts src/lib/seo.test.ts`.

## Examples

Canonical sandwich copy lives in:

- `src/data/insight-content/sdic-china-lithium-supply-demand-2026.ts` (scale + unit identity)
- `src/data/insight-content/china-lithium-materials-third-cycle.ts` (names + AUD)
- `src/data/insight-content/cathode-tonnes-per-gwh-lfp-ncm-sodium.ts` (who Lina / Dangsheng are)
- `src/data/insight-content/china-lfp-price-signal-august-2026.ts` (cross-section, not a dump)
