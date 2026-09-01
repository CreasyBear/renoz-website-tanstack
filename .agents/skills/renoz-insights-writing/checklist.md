# Add a briefing

Create `src/data/insight-content/<slug>.ts` exporting `insight`. Append it in `src/data/insights.ts`.

## Copy

- [ ] One WeChat URL in `sources`
- [ ] Sandwich lede and sandwich section closes
- [ ] Names introduced on first mention
- [ ] CNY paired with AUD via `insight-fx.ts` where the figure is yuan
- [ ] No Han characters
- [ ] No sales CTA / weekly cadence
- [ ] Closing says what the page is not
- [ ] `relatedSlugs` point at other jobs, not the same dump
- [ ] Prose paragraphs in a section do not share the same first 48 characters (`GuideSection` keys)

## Discovery (sitemap is automatic from the registry)

- [ ] `public/llms.txt` — title + URL
- [ ] `public/llms-full.txt` — one bullet of distinctive figures, labelled observation vs forecast
- [ ] `public/.well-known/ai-manifest.json` — path if other insight URLs are listed there
- [ ] `src/lib/seo.test.ts` — new `/insights/<slug>` in sitemap and llms assertions
- [ ] `src/data/insights.test.ts` — distinctive figures; forbid other jobs’ headline numbers; no Han

## Checks

```bash
bunx biome check --write src/data/insight-content/<slug>.ts src/data/insights.ts src/data/insights.test.ts
bun run test src/data/insights.test.ts src/data/insight-fx.test.ts src/lib/seo.test.ts
```
