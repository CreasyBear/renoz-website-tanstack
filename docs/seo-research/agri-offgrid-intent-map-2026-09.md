# Research brief: Commercial agri solar+battery intent map (wineries, dairy, cold chain)

Date: 2026-09-04. Method: SERP-composition observation via web search (30 queries, 3 parallel scouts).
Evidence semantics: intent and competition verdicts are `observed` SERP state on this date. Search volumes are `unknown` (no provider data; DataForSEO credit exhausted). CPC/paid signals unobserved. Re-verify after topup.
Methodology: seomachine `/research` pipeline (keyword research → competitor/SERP analysis → gaps → brief); clustering per qiaomu keyword-content (one page per cluster, ranked by ranking-URL overlap); quality gates per claude-blog (already vendored as `scripts/ai-citation-score.mjs`).

## Coverage ledger

- Queries discovered: 30 (24 primary + 6 probes)
- Observed: 30 SERP compositions
- Volume/difficulty data: 0 (missing evidence — provider credit)
- Excluded: none
- Known limitation: web_search returned AI-synthesized SERP summaries for some queries; "who ranks" inferred from cited domains in top results

## The finding

The commercial-agri solar+battery SERP is vacant in Australia. Three failure modes of the incumbents, per lane:

1. **US pollution**: "dairy farm solar system cost", "off grid dairy farm power", "winery solar power system", "solar for packing shed", "agricultural solar battery storage system", "solar for farms wa" (Washington State), "farm cold room solar backup" — all rank US gov/extension content. Zero AU pages.
2. **Government/authority only**: "solar for wineries australia", "off grid farm solar system australia" — ARENA, energy.gov.au, Clean Energy Council, Dairy Australia. No vendor.
3. **Stories without intent capture**: "off grid winery" (tourism/PR pages), "agricultural microgrid case study australia" (operators rank their own stories), "milk vat solar power australia" (case studies with rich payback data, none optimized).

The Australian vocabulary is also distinctive and unused: stand-alone power systems (SPS), SWIS 30 kVA connection limit, Western Power assessment, weak grid, three-phase agricultural loads, milk cooling / plate cooler / bulk milk vat, cool rooms, crush season / vintage load, fermentation and barrel-room cooling, demand charges, interval data, kWh per case of wine, vitivoltaics.

## Intent clusters and target pages

### Cluster 1 — Winery / vineyard (7 ownable queries, WA-anchored)
Queries: "solar for wineries australia" (gov only), "winery solar power system" (US-heavy), "off grid winery" (tourism stories only; WA hook: Wayfinder, Margaret River), "vineyard solar system design" (academia only), "winery solar battery storage" (US case studies), "solar system for vineyard wa" (WA policy pages only), "off grid vineyard" (SERP ignores power). Adjacent contested: "winery microgrid australia" — installers hold scattered case studies (Tandem/Henschke, SPS Solar/Lowe) but nobody owns the category query. Verdict: hub page wins the whole set.
Page: **"Solar power for wineries and vineyards: off-grid and microgrid"**. Brief: vintage/crush load sizing (peak vs average), fermentation and barrel-room cooling, cellar door + events, microgrid vs full off-grid decision, WA region supply reality, national exemplars honestly labelled (Lowe Wines 265kW/1.2MWh off-grid; Henschke microgrid; Wayfinder Margaret River), battery sizing by load interval data, Western Power connection context. Internal links in: commercial product page, generator-hybrid guide, cost guide. Out: rural product page, contact.

### Cluster 2 — Dairy (5 ownable queries)
Queries: "solar for dairy farms australia" (authority only), "dairy farm solar system cost" (US-only), "off grid dairy farm power" (US extension only — strongest single gap in the whole study), "milk vat solar power australia" (case-study SERP; rich AU data exists: 30-100 kW + ~200 kWh systems, 5.9-7.9 yr paybacks quoted in AU case studies), "dairy farm battery backup power outage milk" (AU spoilage angle unowned). Contested edge: "solar system dairy vat refrigeration" (Heuch holds one dedicated page).
Page: **"Solar for dairy farms: milk cooling, vats and going off-grid"**. Brief: 365-day twice-daily load shape, milk cooling vocabulary (plate cooler/precooler, bulk vat, vacuum pump), heat-recovery loads, SWER/SWIS capacity limits, outage = dumped milk framing, AU case-study paybacks cited with sources, battery backup sizing. Internal links: generator cluster, farm hub.

### Cluster 3 — Cold chain / pack shed (3 ownable queries)
Queries: "solar battery cold room" (intl technical only), "solar for packing shed" (US-only; AU vocabulary matches exactly), "farm cold room solar backup" (US gov). Contested head: "solar cold storage australia" (Suncool, Black Stump, Heuch, Chill Pro, Titan vendor pages — enter via depth, not head-on). Dead phrasing: "off grid pack shed power".
Page: **"Cold rooms and pack sheds: solar + battery that survives the pack run"**. Brief: pre-dawn load shape, refrigeration 24/7, outage = product loss (price-inelastic backup), generator displacement, thermal storage/ice bank as a sizing lever.

### Cluster 4 — Farm microgrid hub (3 ownable queries, build after clusters 1-2)
Queries: "farm microgrid australia" (gov/case studies; ownable as buyer's guide), "agricultural solar battery storage system" (US-dominated), "off grid farm solar system australia" (authority only).
Page: **"Farm microgrids and off-grid systems: the Australian buyer's guide"**. Hub-and-spoke: links down to winery, dairy, cold-chain, diesel pages. No vendor owns any of these.

### Cluster 5 — Diesel displacement refresh (1 ownable query, existing asset)
Query: "solar diesel replacement farm australia" — SERP is NSW DPI PDFs; no well-ranking HTML page.
Action: **refresh existing `/guides/diesel-to-battery-wa-farms`** to target this phrasing (avoid a new page: cannibalization risk with the existing guide). Add the PDF-beating structure: cost comparison table, payback, generator-displacement sizing.

## Avoid (observed, per RENOZ positioning)

- "solar irrigation pump western australia": dense WA pump-specialist lane (wasolar, SolarTech, Nastec, Outback Solar Pumps); battery angle tangential.
- "solar for farms perth": installer-lane SERP; RENOZ does not install.
- "station solar power system wa pastoral": niche WA installers own it (WA Solar Supplies, MyEnergy, GenOffGrid); supply-side entry only.
- "agriculture off grid power system wa": Statewide Power holds a dedicated page + Gingin case study; beatable with depth but not vacant — revisit after clusters 1-4.
- "agricultural microgrid case study australia": operators rank their own stories; RENOZ enters only with a real WA project reference.

## Prioritization (volumes unknown; qualitative per qiaomu)

1. Winery page — 7 ownable queries, WA anchor, hottest ICP, citable national exemplars.
2. Dairy page — 5 ownable queries incl. the strongest single gap; rich AU case-study data available to cite.
3. Cold chain page — 3 ownable queries, spoilage angle.
4. Farm microgrid hub — after two spokes exist so the hub is not thin.
5. Diesel refresh — cheapest win; existing guide, PDF-only SERP.

## Measurement

Volumes stay `unknown` until DataForSEO topup; then one research pass on the 24 primary queries. Page-level: leads attributed via captureAttribution + phone log. Rank-tracker candidates after pages ship: "winery solar", "off grid winery", "solar for dairy farms australia", "farm microgrid australia".
