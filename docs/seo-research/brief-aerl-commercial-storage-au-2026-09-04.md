# Content Brief: AERL — 48V vs 120V commercial battery architecture (AU) — searcher-language brief

Pipeline: claude-blog /blog brief. Research: SERP observation + primary-source reads (aerl.com.au homepage, product pages, datasheet; Selectronic approved list; retailer pricing), observed 2026-09-04. Volumes unknown (no provider data; DataForSEO account dry).

**TITLE RULE (binding):** the page title and H1 use the searcher's phrasing, not our invented brandings. The primary keyword must appear in the title verbatim.

## Why this candidate (user-directed look, 2026-09-04)
AERL (Australian Energy Research Laboratories) is three things at once, all verified on their own site 2026-09-04:
1. A **commercial C&I storage vendor** whose line lands squarely in the 50-200 kWh lane our /products/commercial money page and commercial-bess-50-200kwh-wa guide own: Kakadu 120V (88.4 kWh per cabinet, IP55 outdoor, up to 16 cabinets parallel = 1.41 MWh) and AERL AIO (25-50 kW x 64-112.5 kWh all-in-one cabinet: hybrid inverter, battery, BMS, fire suppression pre-integrated).
2. A **distributor**: exclusive Australian distributor of the Solinteg M2HT 25-50 kW commercial hybrid inverter (4 MPPTs, 200% PV oversizing, sub-10 ms backup transfer, CSIP-AUS certified).
3. An **MPPT heritage brand** (CoolMax SRX 600 V charge controllers for 24/48 V systems, about 96.2% efficiency, retail A$1,725-2,125) founded 1985 with the world's first universal MPPT; 75% of World Solar Challenge teams used AERL MPPT 1993-2007; relaunched 2017 under Peter Watkinson; Queensland facility.

A buyer quoting a 100-200 kWh WA commercial job can legitimately end up holding an AERL cabinet quote and a 48V rack-modular quote. Nobody explains that choice anywhere: the AERL SERP is their own marketing pages, manuals aggregators (manualslib, manualzz, manualzilla) and one retailer. No buyer's guide, no comparison, no "AERL vs" content. Same vacant-SERP shape as the agri lane.

## Verified facts (observed 2026-09-04)
- Kakadu 120V: 88.4 kWh per cabinet, IP55 outdoor rated, scalable to 1.41 MWh with 16 cabinets in parallel. [aerl.com.au/products/kakadu-120]
- AERL AIO: 25-50 kW, 64-112.5 kWh, IP55 outdoor cabinet, inverter + battery + BMS pre-integrated. [aerl.com.au/products/aerl-aio]
- Solinteg M2HT 25-50 kW: exclusive AU distributorship, 4 MPPTs, 200% oversizing, sub-10 ms transfer, CSIP-AUS. [aerl.com.au/products/solinteg-m2ht-25-50]
- Heritage: founded 1985; Power Optimizer tested with US DOE and Florida State University; cathodic-protection controllers for pipelines. [aerl.com.au/about]
- CoolMax SRX: 600 V max PV, 24/48 V battery, 30-70 A charge current classes, MPPT window 170-500 V, 96.2% peak, designed and engineered in Australia; SRX600/70-48 listed at A$1,800 and SRX-R-600-60-48 at A$1,725 by one AU retailer (confirm stock/GST/freight at time of writing). [aerl.com.au datasheet; solarbatteriesonline.com.au/aerl-mppt-solar-charge-controllers/]
- AERL appears on Selectronic's SP PRO approved battery list. [web.selectronic.com.au/kits/approvedbatteries.html]

### Unverified threads (check primary sources before publication; do not publish without)
- AERL "LiFe2" battery systems with officially supported managed comms to the Selectronic SP PRO: seen only in a search-engine synthesis citing AERL pages; NOT verified on current aerl.com.au. If true, it means AERL batteries compete with RENOZ inside the same curated SP PRO off-grid ecosystem, which sharpens the comparison considerably.
- Manufacturing origin of Kakadu/AIO cabinets: AERL says "engineered and integrated in Australia" but the cabinet-level manufacture location is unverified. The PowerPlus precedent (spec sheet: "Manufactured in China. Engineered, tested and assured in Australia") says: get the datasheet, not the marketing page.

## Search intent
Commercial-investigation, decision-stage: an owner or EPC comparing cabinet-scale (120 V, all-in-one, outdoor IP55) against rack-modular (48 V, component-built, indoor) for a 50-200 kWh WA project. Buyer vocabulary: cabinet, all-in-one, outdoor rated, 120 V bank, rack modules, parallel cabinets, C5 / C&I, demand charges.

## Guide candidates (ranked)
1. **48V vs 120V commercial battery systems** (recommended). Template: comparison.md, architecture-verification framing (same standard as renoz-vs-genz: published basis, verify-live discipline, no brand combat). Ownable queries: 48v vs 120v battery system, 120v battery bank commercial, commercial battery cabinet australia, aerl kakadu review, aerl aio review. Feeds /products/commercial and commercial-bess-50-200kwh-wa internally. ICP-aligned: this is the $150k-500k buyer.
   - Channel-sensitivity note: AERL is a plausible partner/integrator, not an enemy. Frame as "two architectures, choose on the engineering questions", declare RENOZ's side plainly, hold both to published evidence.
2. **DC-coupled vs AC-coupled off-grid solar** (second). AERL SRX/Maximizer heritage on the DC side, SP PRO and Fronius AC-coupling on the other; supports the off-grid hub and the generator-hybrid sizing spoke (which already references AC-coupling deltas). Ownable: dc coupled vs ac coupled off grid, aerl maximiser 48v, aerl charge controller.
3. Skip: "RENOZ vs AERL" as a direct head-to-head. Different classes (48 V rack modules vs 120 V cabinets); buyers co-consider them at the architecture level, not the brand level. Candidate 1 IS the honest version of this comparison.

## Questions the page must answer (from observed SERP/forum composition)
- Is AERL equipment made in Australia? (answered carefully: engineered/integrated onshore; cabinet manufacture origin per datasheet, pending verification)
- What does a Kakadu cabinet or AIO system cost? (quote-only for cabinets; SRX controllers have retail anchors)
- Is 120 V better than 48 V for commercial storage? (current, protection, cabling losses vs modular serviceability and inverter ecosystem)
- Outdoor IP55 cabinet vs indoor IP20/IP40 modules: what changes in siting and fire engineering?
- Can AERL batteries pair with Selectronic SP PRO? (approved-list fact; LiFe2 comms thread pending verification)
- Who services it in WA? (AERL Queensland facility vs Perth-local stock and engineering)

## Content parameters (Guide-schema mapping, candidate 1)
- Word count: 1,800-2,200. H2 sections: 6-7. FAQs: 6-8 from the question list above.
- Guide fields: slug `48v-vs-120v-commercial-battery-systems`; primaryKeyword `48v vs 120v battery system` (verify volume before locking); claimsPending false; newsletter true; relatedProductPaths ["/products/commercial"]; cta primary "/contact", secondary "/products/commercial".
- Decision table: 120V cabinet (AERL-class) / 48V rack modular (RENOZ-class) / what to demand from either supplier.
- Sections must carry: architecture math (current at 100 kWh: 48 V bus carries roughly 2,100 A per 100 kWh drawn vs 120 V about 830 A, showing why cabinets go high-voltage and why racks stay modular), outdoor vs indoor siting, inverter ecosystems, expansion models, sourcing and support, CEC/verify-live discipline.
- HARD: no rebate dollar figures, no standing CEC-approval claims for any brand, verify-live CEC instruction, no em/en dashes, no curly quotes, inline citations only.

## Measurement
- Rank-not-sell: track the query set in the rank tracker once added; lead-pass model (RENOZ sells batteries; installer partners own design/install).
- Gate: volumes unknown until DataForSEO topup ($50 min); if the topup lands, verify `48v vs 120v battery system`, `120v battery bank`, `aerl kakadu` before locking the PK; otherwise proceed on observed SERP intent only (agri precedent).

## Recommended next action
Write candidate 1 as the next guide in the commercial lane after the current elevation wave ships. Primary-source checklist before writing: AERL Kakadu + AIO datasheet PDFs (manufacture origin, cycle/warranty terms, CEC status), LiFe2/SP PRO comms claim, cabinet pricing reality.
