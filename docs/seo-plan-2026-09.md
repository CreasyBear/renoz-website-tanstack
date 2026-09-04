# SEO Plan: RENOZ Energy (September 2026)

Data sources: OpenSEO (self-hosted, DataForSEO Labs AU) baseline pull 2026-09-04, live SERP crawls, GBP business-search data, and page-level HTML verification. Keyword difficulty is unavailable for AU (Google serves that market from Ads data); volumes are DataForSEO national monthly figures. Findings marked verified were checked against live HTML; everything else is tool-reported.

## Positioning call: play the OEM lane, not the installer lane

The installer SERPs ("solar battery perth" and friends) are structurally hostile to an OEM: they convert via install quotes, local pack presence, and promo pricing that RENOZ does not fulfil. The strategic answer is to compete where an OEM wins and installers cannot follow:

1. **Off-grid battery category ownership.** PowerPlus Energy, the leading AU off-grid LiFePO4 brand, ranks for zero keywords in Google AU (verified via DataForSEO 2026-09-04). The entire off-grid/OEM brand lane is vacant: "off grid battery system wa", "48v lithium battery australia", "LiFePO4 battery perth". RENOZ's rural money page and two off-grid guides are already seeded here.
2. **B2B partner SEO.** No competitor targets the actual OEM buyer: installers searching "battery supplier wa", "off-grid battery wholesale perth", "become a partner". /partners and the capability statement target zero search terms today. Uncontested, high-value conversions.
3. **Spec authority + brand-vs-brand comparisons.** The SoH guide (ranked #22) proves technical content ranks. Extend with "RENOZ vs PowerPlus", "RENOZ vs GenZ", "RENOZ vs Powerwall": RENOZ competes as a peer OEM, which retailers cannot do honestly. These queries are also the ones AI assistants answer, compounding the llms.txt/AI-manifest investment.

The installer-lane plays below (rebate guide, residential title refinement) remain, entered from the supply side: "the battery in your installer's quote". Tradeoff: OEM lanes carry lower raw volume than installer head terms, offset by near-zero competition, better lead quality, and conversion paths RENOZ can fulfil.

## Baseline: where RENOZ stands

- Organic keywords (AU): 5, all low volume. Best: "battery soh" #22, "battery state of health" #26 (guide: /guides/battery-state-of-health, published Jul 2026).
- Zero presence in top 40 for any money keyword (solar battery perth, battery storage perth, off grid solar wa).
- Not in the local pack for "solar battery perth" (pack sits at ranks 6-9 after 5 ads, all installers) or "off grid solar perth" (pack leads the SERP at ranks 1-3).
- Site technicals are clean (50-page crawl: 54 info-level issues, zero errors/warnings; avg response 480ms).

## Competitor picture

| Domain | AU organic traffic | AU keywords | Theme |
|---|---|---|---|
| solargain.com.au | 6,942 | 4,648 | National solar+battery, head terms |
| perthsolarwarehouse.com.au | 4,905 | 2,135 | Battery-first Perth retailer |
| perthsolarforce.com.au | 2,299 | 1,711 | Perth installer |
| renoz.energy | ~1 | 5 | SoH informational only |

What they have that RENOZ does not (verified from keyword rows):
1. Head battery terms: "solar battery" 27,100/mo, "solar batteries" 22,200/mo.
2. Price/cost intent: "solar battery price" 12,100/mo, "solar battery cost" 9,900/mo in both PSW and Solargain top sets.
3. Rebate intent: "solar battery rebate" 9,900/mo in both.
4. Buyer-brand pages: PSW ranks "sigenergy" 9,900, "tesla powerwall 3" 5,400, "alpha ess" 4,400.
5. Local utility intent: PSW ranks "synergy perth" 5,400/mo (CPC $12.45).

Backlinks (PSW, only pull that succeeded): 3,828 backlinks / 341 referring domains, but 2,152 come from its own sister domain pswenergy.com.au plus a spam tail, so effective authority is materially weaker than raw counts. RENOZ's own backlink profile: no recorded data yet (pull pending). This is winnable with quality citations.

## Keyword clusters (AU, 229 unique keywords researched)

| # | Cluster | Volume anchor | Existing page | Priority |
|---|---|---|---|---|
| 1 | WA rebate / incentive: "solar battery rebate wa" 1,300, "federal government solar battery rebate" 880, "wa residential battery scheme" 320, "solar rebate wa end date" 110 | /guides/wa-battery-rebates-cec | P1 |
| 2 | Residential buyer: "solar battery perth" 880 ($11.93 CPC), "solar battery wa" 170, "best solar batteries perth" 170 | /products/residential (owns home battery storage Perth) | P1 |
| 3 | Package/price shopping: "10kw solar battery price" 1,900, "20kw solar battery price" 1,600, "solar and battery package price" 880 | None (partial: product pages) | P2 |
| 4 | Off-grid / rural WA: "off grid solar wa", "wa off grid solar", farm/station long tail | /guides/off-grid-system-cost-wa, battery-sizing-off-grid-wa, /products/rural | P2 |
| 5 | Commercial / C&I: "commercial solar" 390 (CPC $47.59), "commercial solar systems" 390 | /products/commercial | P2 |
| 6 | Best-of listicle / national: "top 10 solar batteries australia" 1,300 | New guide (fits AI-referral program) | P2 |
| 7 | Installer navigational: "perth solar force", "koala solar perth", "solar companies perth" 590 ($31.40 CPC) | Avoid | P3 |

## The plan

### 1. WA rebate guide expansion (P1, weeks 1-4)
The /guides/wa-battery-rebates-cec page targets the highest-volume non-brand WA cluster and the strongest AI Overview citation opportunity: the "home battery rebate wa" SERP shows an AI Overview fed by .gov.au and explainer sites, and installers DO rank with dedicated rebate pages. Expand the existing guide with eligibility, end-date, and scheme-interaction sections. Name CHBP and WARBS; never publish fixed rates or caps; date every claim; keep a maintenance owner because these schemes reshuffle.

### 2. Residential money page refinement (P1, weeks 2-3)
Do not build a new page. Refine /products/residential title/H1 toward "battery storage Perth" variants with a concrete post-rebate price anchor, without breaking its ownership of "home battery storage Perth". Add internal links from the rebate and SoH guides. Target entry: top 15 within 90 days; the SERP is dominated by installer promo pages, so win on OEM engineering proof, not promo hooks.

### 3. Local SEO (start week 1, user actions)
GBP exists and is claimed (RENOZ Energy Pty Ltd, 5.0 rating, 3 reviews) but thin, with two unclaimed duplicates splitting presence:
- Request removal of duplicate CID 13293567936698862639 ("RENOZ ENERGY (admin office)", same address, no phone) and CID 9450074818668815833 ("RENOZ ENERGY PTY LTD", stale Applecross address).
- Align address format across GBP and site ("Rear unit, 4/8 Murphy St" vs "Unit 4, 8 Murphy Street"); verify the geo pin (site JSON-LD differs from GBP pin by ~1.3km).
- Review generation: ask the documented happy customers (Harvey off-grid takeover Aug 2026, Nov 2025 install) for Google reviews. Target 15+ reviews this quarter. Never fabricate.
- Citations: replicate PSW's real citation sources (truelocal.com.au, yellowpages.com.au); add energy-directory and OEM-directory listings with consistent NAP.
- Suburbs with local-pack evidence: O'Connor (own gap), Bibra Lake, Wangara, Canning Vale, Maddington, Landsdale. Content angle: suburb-level case-study pages only after GSC query evidence, per cannibalization rules.

### 4. Off-grid / rural WA cluster (P2, weeks 3-8)
The best organic gap: thin local competitors (waoffgridsolar, offgridwa) rank with thin sites, no AI Overview, and RENOZ already owns two strong guides plus the rural money page. Strengthen /products/rural toward "off grid solar wa" and add engineering-led guides (SPP considerations, generator hybrid sizing, farm autonomy calculations) that installer sales pages cannot match.

### 5. Price / package guide (P2, weeks 6-10)
New guide: kWh-banded price explainer ("What does a home battery cost in Perth in 2026?") covering the 10kW/20kW price cluster (3,500+ combined volume, national). Prices stay quote-gated per fact rules: published system pricing anchors the ranges, installed quotes referenced but not invented. This can be the first AU result for a SERP currently showing a US data wall.

### 6. Best-of listicle (P2, weeks 8-12)
"Best off-grid battery in Australia" style guide through the existing AI-referral program with the citation-scorer gate. RENOZ as OEM can rank with evidence-led comparison content that retailers cannot write.

### Ongoing measurement
- Rank tracker is live (5 keywords, both devices, depth 40, $0.08/check). Switch to weekly schedule once the first content wave ships.
- Monthly OpenSEO re-audit; watch heading-order skips on /about, /homeowners, /resources, /warranty.
- GSC remains the source of truth for cannibalization checks before any new page.

## Explicitly not doing
- Head brand terms ("solar battery" 27,100) until the mid-tail is owned.
- Installer-roundup SERPs (review-gated, RENOZ cannot win honestly).
- Duplicate local landing pages that cannibalize the money pages.

## Commercial agri lane (2026-09-04, Joel-directed ICP: wineries, dairy, cold chain, agri processing)

Joel's direction: target people who can pay. The archetype buyers are commercial agri operators the grid cannot serve or charges into submission. Two national exemplars define the story:

- **Lowe Wines, Mudgee (ABC News, 30 Oct 2025)**: supply shortfalls + $9,000/month bills + "bigger poles and wires" advice → 265kW solar + 1.2MWh battery, fully off-grid, runs winery + cellar door + restaurant + agritourism (weddings, 65 staff), now cash-positive. Owner quote: "I feel like I'm in control. Before, we were captive." The regional installer got national earned media.
- **Henschke, Eden Valley (Tandem Energy case study)**: end-of-line supply, unreliable and capacity-capped → Australia's first winery microgrid (solar + BESS + diesel backup). Drivers: energy security, vintage capacity, blackout/voltage immunity, emissions story.

Shared trigger DNA: the wire throttles the business. The purchase drivers are control, capacity to grow (vintage/crush, cold room, event loads) and a sustainability story the brand can market. Decision path runs through energy audits and consultants, not price-list shopping.

### WA ICP map

- **Wine**: Margaret River fringe, Great Southern (Mount Barker, Porongurup, Frankland River), Pemberton, Geographe, Swan Valley. Loads: crush-season refrigeration spike (Feb-Apr), cellar door, restaurant/events, irrigation. Sizes: cellar-door-only 50-100 kWh up to full off-grid 500 kWh-1.2 MWh (5 RENOZ HC cabinets at Lowe's scale).
- **Dairy**: South West, Scott River, Brunswick, Denmark. Loads: twice-daily milking 365 days/yr, vat refrigeration, hot water; SWER capacity limits. Outage = dumped milk.
- **Cold chain / pack sheds**: Manjimup (truffles, vegetables), Gingin, Carnarvon. Loads: pre-dawn pack runs, refrigeration 24/7; outage = product loss, the most price-inelastic backup requirement in agri.
- **Irrigation/packing**: Ord River, Carnarvon, Gingin.

### Build order

1. **"Solar power for wineries & vineyards: off-grid and microgrid, WA regions"** guide. Vintage-load sizing (peak vs average), microgrid vs full off-grid decision, the two national exemplars as reference points (public, citable), WA region-by-region supply reality, brand-story angle for wine marketing. Keywords: "winery solar", "off grid winery", "vineyard solar battery", "winery microgrid" — low volume, zero competition, exactly-ICP intent.
2. **"Cold storage and pack shed solar + battery"** — outage-equals-spoilage framing, backup sizing, generator displacement.
3. **"Dairy solar + battery"** — 365-day milking load, SWER limits, milk-dump risk.
4. **The missing proof asset**: a WA winery/dairy/cold-chain reference installation. Harvey farm (35.8 kWh) covers the small-farm story; this lane needs one 100 kWh+ commercial reference. Ask installer partners for a project to document; until then the guide carries the two national exemplars honestly labelled as non-RENOZ.
5. **Earned media play**: "first off-grid winery in WA" is an ABC Rural headline waiting to happen (the Mudgee story is the template). Coordinate with the installing partner; RENOZ supplies the battery and the technical story.
6. **Consultant channel**: energy consultancies (the Tandem role) are a referral channel, not competitors. Add a partner page for energy advisors and auditors.

Search volume in this lane is low but intent is exclusive and deal sizes are $150k-500k+. Measurement is page-level lead attribution and phone log, not rank tracking.

## Buyer-intent domination (2026-09-04, strategy confirmed by Joel)

Direction from Joel: stop thinking in differentiator language ("overload curve" is our answer, not the searcher's words). Find what WA people actually search when they want to BUY an off-grid solar + battery system, dominate it, make it local-specific. Business model: RENOZ sells batteries and passes leads to off-grid installer partners. Searchers may not even know the term "off-grid": they search their situation (power connection cost, no power to the block, generator bills).

### Evidence (DataForSEO related-keyword pull, account ran dry mid-pass)

The "best off grid solar system australia" related set is dominated by size+price+package buyer language, all KD 0 with $4-7 CPC (advertisers pay; organic difficulty is nil):

- **10kW-with-battery price family ~1,300/mo combined**: "10kw solar system with battery price" 590/mo $5.52, "10kw solar system price" 390, "best 10kw solar system with battery price" 210, "10kw solar system installed price" 40, "10kw solar system with 20kw battery" 40.
- **Packages cluster ~620/mo**: "off grid solar system packages with batteries australia" 260 + "price" variant 170 + bare 110 + "and generator backup" 70. Already owned by the packages decoder (shipped 2026-09-04).
- **20kW/farm cluster ~370/mo**: "20kw solar battery price after rebate" 170 (rebate-conscious), "20kw solar system with battery storage cost" 110, "20kw off grid solar system price" 90.
- **State-split proof**: 10kW price pages exist for QLD (70), NSW (50), BRIS (30), VIC (20), SA (10) — no WA-optimized equivalent anywhere in the set. Vacant WA lane.
- Ecosystem/adjacent: "victron off-grid solar system" 50/mo, "what size battery for 10kw solar system" 70 informational, "off-grid solar system for sale" transactional.

Language lesson: buyers say "solar system with battery", size (10kW/20kW), price, package. Not "battery brand", not "off grid battery" first, not "overload".

### Build order (buyer-intent, WA-anchored, lead-pass model)

Every page carries the quote CTA feeding the installer-partner lead channel; each page names WA supply, WA install partners, WA schemes (CHBP/WARBS, no fixed figures).

1. **"10kW solar system with battery price WA"** — targets the biggest buyer family with the vacant WA angle. Publish real size-vs-price structure for a WA install: battery share of a 10kW+13kWh-class system, what moves the price, rebate effect (live-source gates), WA installer pass-on path. Internal links: packages decoder, cost guide, rebates, rural page.
2. **"20kW / three-phase farm solar + battery price WA"** — the farm-sized family; ties to the rural platform and generator-hybrid guide. "After rebate" query language gets answered with the live-check discipline.
3. **"What size battery for a 10kW solar system"** — informational 70/mo entry into the 10kW cluster; sizes the battery, hands to the two price pages.
4. **Situation-language layer (needs DataForSEO topup to size, min $50)**: "cost to connect electricity to my property wa", "western power connection cost", "no power to my block wa", "how to get power to my property wa", "power to my shed wa". The existing grid-connection-vs-off-grid guide owns one door; if volumes confirm, a "Western Power quote vs off-grid" decision page becomes the top-of-funnel lead engine. Highest lead quality of all: the searcher is holding a connection quote.
5. Mid-tier brand hub and calculator keep their existing slots; calculator gets a 10kW/20kW system preset so it feeds the price pages.

### Measurement

Tracker: add "10kw solar system with battery price", "20kw solar battery price after rebate", "off grid solar packages wa" on the next manual run. Lead quality beats volume: a 30/mo query from someone holding a Western Power connection quote outweighs a 500/mo research query. GSC query+page data gates the situation-language build.

## Work list after OEM-lane sizing (2026-09-04)

Live probes: "off grid battery system" 260/mo KD 0; its SERP is 19 e-commerce collection pages plus one sponsored guide at #10 (no SolarQuotes, no AI Overview, no .gov). Packages-with-batteries variants total roughly 800/mo combined. Category terms: "lifepo4 battery" 4,400/mo KD 0, "sungrow battery" 6,600/mo KD 0, "fox ess battery" 4,400/mo, "alpha ess battery" 2,900/mo plus "alpha ess battery review" 1,600/mo, "solax battery" 1,900/mo, "powerplus battery" 260/mo KD 0. The "48v lithium battery" head term is polluted by e-bike and golf-cart queries: skip it, keep the existing 48V-vs-HV technical guide. B2B wholesale terms have no indexed volume: build for conversion value, not search volume.

### New guides (write in this order)
1. **"Off-grid solar system packages with batteries: what's in the box (and what it costs)"**. Targets the packages cluster (~800/mo combined). The SERP has only collection pages; an OEM decoder that itemises panels, inverter, battery, BOS, install, and the quote traps wins on merit. Price ranges anchored to published RENOZ system pricing; installed quotes stay quote-gated.
2. **"RENOZ vs PowerPlus Energy"** and **"RENOZ vs GenZ"**. Named off-grid brand competitors with spec-level comparison tables (chemistry, cycle life, operating range, warranty, support model). Also captures "powerplus energy lithium battery 3.3kwh 24v"-style spec lookups. Fits the AI-referral program with the citation-scorer gate.
3. **"Off-grid solar with generator backup: sizing the hybrid"**. Generator-backup cluster plus interlinks to the four existing generator guides. Engineering-led: autonomy days, surge, genset duty cycle.
4. **"Alpha ESS, Fox ESS, Solax: what to know before you buy"** (mid-tier brand hub, ~10,000/mo cluster). Honest OEM-voice explainer; per-brand sections can later split into the daily AI-referral cadence.
5. **Off-grid sizing calculator** (already on the roadmap). Captures "off grid solar system calculator australia" plus calculator intent across every off-grid page; strongest link-bait asset available.

### Existing pages to expand (higher priority than new guides)
- **/guides/best-off-grid-battery-australia**: maps directly onto the collection-page SERP above; refresh with 2026 data and the PowerPlus/GenZ comparisons. First content action.
- **/guides/wa-battery-rebates-cec**: P1 expansion per the section above (rebate cluster 2,000+/mo combined).
- **/guides/renoz-with-goodwe-sungrow**: add a "Sungrow battery" section (6,600/mo KD 0) covering where Sungrow batteries fit and when the RENOZ platform is the better call.
- **/products/residential and /products/rural** title/H1 refinement per the positioning section.

### Non-content work
- **/partners B2B build-out**: supplier/distributor/dealer terms (no indexed volume, but the actual OEM customer path). Product spec sheets as crawlable pages, partner-application flow, capability statement.
- **GBP**: duplicate removal (CIDs 13293567936698862639, 9450074818668815833), address-format alignment, review generation to 15+.
- **Tracker**: add off-grid battery system, best off grid battery system, lifepo4 battery; flip to weekly after the first refresh ships.
- **Technical nits from the crawl**: fix heading-order skips on /about, /homeowners, /resources, /warranty.
