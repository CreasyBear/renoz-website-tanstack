# SERP Research — Best-X-for-Y (bottom-funnel comparison cluster)

**Date:** 2026-09-01
**Method:** One harness `web_search` per keyword, query used exactly as written (plain query, no `site:au`, no geo params, no recency filter). The harness returned an AI-synthesised digest with up to 10 cited organic sources per query; rows below record exactly what was returned. Titles are recorded where the tool returned them; URL-only citations are recorded as domain + URL. Nothing else is asserted.
**Limitation:** The AI-referral playbook's intended extractor is Serper (`scripts/serper-serp.mjs`, added alongside), but no `SERPER_API_KEY` exists in this repo's env yet, so today's extraction uses the harness web search as fallback. Harness output is not a byte-exact Google SERP: ranking is synthesised, and geo-targeting is implicit — queries without an "australia"/"perth" qualifier resolved US-centric content (flagged per keyword). No search volumes, positions, or difficulty scores were returned; none are fabricated.

---

## 1. Per-keyword SERP evidence

### 1. best off grid battery australia

| Field | Observed |
|---|---|
| Top results (condensed) | PowerPlus Energy LiFe4838P / LiFe4851 product+spec pages (powerplus-energy.com.au); Selectronic SP PRO + approved-battery list (selectronic.com.au, download.selectronic.com.au); BYD Battery-Box Premium LVS AU datasheet (bydbatterybox.com); Pylontech US5000 context (via synthesis); CEC approved-product list report (cleanenergycouncil.org.au, assets PDFs); Energy Safe Victoria battery/storage guidance + AS/NZS standards (energysafe.vic.gov.au, 2024-11 and 2025-08 PDFs); SolarBoost "best 100Ah LiFePO4 batteries Australia" (solareboost.com.au) |
| Page-one types | Manufacturer product pages; inverter-maker approved-battery lists; gov/authority (CEC, Energy Safe Vic); one niche retailer blog |
| Freshness | CEC report observed as "3,435 approved battery products as at July 31, 2026"; Energy Safe Victoria PDFs dated 2024-11 / 2025-08 |
| AI-citation fit | **High.** No independent AU comparison guide on page one — the synthesised answer had to compose a shortlist from manufacturer spec pages + CEC lists. An evidence-led, CEC-anchored AU comparison would be exactly the citation an LLM wants. |
| Gap | No independent/third-party "best off grid battery" comparison guide for AU; no architecture classification (rack vs tower vs integrated); no WA/Perth support angle; no installer-sourced evidence; no 2026-dated model-level spec table. |

### 2. best off grid batteries australia reviews

| Field | Observed |
|---|---|
| Top results (condensed) | Cited sources: Clean Energy Reviews (off-grid-leading pick: Powerplus Energy, via installer feedback); PSC Energy (stackable build-your-own: BYD, Alpha ESS; integrated all-in-one: Sigenergy SigenStor); Plico Energy (label: GoodWe Lynx Home U); SolarQuotes (home-battery reviews; Tesla/Sungrow rank high); Green Magazine (federal battery rebate ~$5–7.5k framing) |
| Page-one types | Reviews/comparison publisher listicles (Clean Energy Reviews, Plico, PSC Energy, SolarQuotes); magazine; installer blogs |
| Freshness | SolarQuotes/review content referenced (2025 installer-survey-era ranking); not all sources returned dated URLs |
| AI-citation fit | **High.** This is a reviews-flavoured query and the LLM already cites Clean Energy Reviews / Plico / SolarQuotes. A 2026-dated AU off-grid roundup with real installer-sourced evidence would be a replacement-grade citation. |
| Gap | All review content is brand-level ("Powerplus is leading", "GoodWe is best") — no model-level spec evidence, no architecture classification, no WA-specific review/installer evidence, no explicit "no single best" rigour (one cited source itself says the best choice depends on system design). |

### 3. what is the best off grid solar battery

| Field | Observed |
|---|---|
| Top results (condensed) | Fortress Power eFlex MAX 5.4 kWh (fortresspower.com); EG4 PowerPro WallMount 14.3 kWh (eg4electronics.com, 2025-09 brochure); HomeGrid Stack'd (homegridenergy.com); all US UL 9540/9540A/1973-certification documentation |
| Page-one types | US manufacturer product/spec pages; US comparison content (US-centric, UL-cert framing) |
| Freshness | EG4 brochure dated 2025-09; Fortress datasheets 2020–2025 |
| AI-citation fit | **Medium.** Page one is US product pages; an LLM answering for AU users has no AU source to cite. AU entry would be cited only in AU-filtered answers — but nothing else exists. |
| Gap | No Australian content at all: no CEC references, no AS/NZS 4509.1 / 5139 standards, no AU-available models, no WA angle. Same core intent as keyword 1 without the AU qualifier — the US SERP is the geo-offset. |

### 4. best solar battery australia

| Field | Observed |
|---|---|
| Top results (condensed) | wattsweekly.com "solar battery comparison Australia"; yousolar.com.au "best home batteries Australia 2026"; solarincentives.com.au "home battery brand comparison Australia 2026"; whysolar.com.au "best solar batteries Australia"; batteryiq.com.au "battery comparison 2026"; SolarQuotes comparison table + VPP comparison (solarquotes.com.au); energymatters.com.au "top 5 battery storage options for Australian homes"; CEC approved batteries (cleanenergycouncil.org.au); Tesla AU Powerwall page (tesla.com/en_au) |
| Page-one types | Listicle/comparison guides dominate (5+); comparison tables; gov/authority (CEC); manufacturer page (Tesla AU) |
| Freshness | Multiple 2026-dated pages (yousolar, solarincentives, batteryiq); SolarQuotes 2025 installer survey tie (Tesla/Sungrow) referenced |
| AI-citation fit | **High.** Heavily listicle-dominated SERP the LLM already cites (SolarQuotes, whysolar, yousolar, EnergyMatters). A 2026-dated, architecture-classified, spec-accurate AU comparison is a natural citation candidate. |
| Gap | All comparisons are brand-level with no architecture classification (integrated vs modular vs 48V vs HV); no usable-vs-nominal capacity rigour (one observed answer warns to compare usable not nominal — content is still brand summaries); no WA-specific differences (WARBS VPP requirement vs CHBP); no model-number discipline (HVS/HVM/HVL/LVS conflation). |

### 5. best home battery australia

| Field | Observed |
|---|---|
| Top results (condensed) | solarquotes.com.au "best home battery in Australia 2026"; whysolar.com.au "best solar batteries Australia"; savolture.com "best solar battery Australia 2026"; CEC approved batteries + new expiry-dates notice (cleanenergycouncil.org.au); DCCEEW Cheaper Home Batteries Program (dcceew.gov.au); energy.gov.au batteries explainer; Tesla AU Powerwall (tesla.com/en_au); Enphase AU warranty PDF (enphase.com); Sigenergy AU warranty PDF (sigenergy.com) |
| Page-one types | Listicle/comparison guides; gov/authority (DCCEEW, CEC, energy.gov.au); manufacturer pages + warranty PDFs |
| Freshness | 2026-dated listicles (solarquotes, savolture); CHBP program (started 1 Jul 2025) referenced; Enphase 15-yr/6,000-cycle and Sigenergy 10-yr warranties cited from AU PDFs |
| AI-citation fit | **High.** Same listicle-governed family as keyword 4 (Tesla PW3 / Sungrow SBR / Enphase 5P / Sigenergy / sonnen). |
| Gap | Same as keyword 4: brand-level, no architecture classification, no WA angle, no local-support evidence, no blackout/backup evidence beyond brand claims. |

### 6. best 48v battery system australia

| Field | Observed |
|---|---|
| Top results (condensed) | Pylontech US5000 / US5000-B (en.pylontech.com.cn); Victron battery-compatibility docs + MultiPlus-II AU range (victronenergy.com, victronenergy.com.au); GoodWe ES 48V product catalogue (goodwe.com.au); Sungrow SH5.0/6.0RS — explicitly **not** 48V (80–460V) (aus.sungrowpower.com); CEC approved batteries + VDRT inverter list (cleanenergycouncil.org.au); DCCEEW CHBP eligibility (dcceew.gov.au); yourhome.gov.au batteries; energy.gov.au inverters; legislation.gov.au F2025L00765 |
| Page-one types | Manufacturer compatibility/spec pages; gov/authority (CEC, DCCEEW, yourhome.gov.au, legislation); inverter vendor pages |
| Freshness | CEC lists current; DCCEEW program current |
| AI-citation fit | **Medium.** Query resolves cleanly already (Victron + Pylontech shortlist, CEC compliance), so an LLM has solid sources; an AU 48V roundup with WA support angle would still be citable, but the gap is smaller than keywords 1/4. |
| Gap | Brand-pair focused (Victron+Pylontech, GoodWe ES); no architecture taxonomy across 48V options; no WA/Perth supplier angle; no "48V vs HV" boundary honourably handled for off-grid buyers (Sungrow SBR is HV, not 48V — a common conflation the SERP itself warns about). |

### 7. best battery for off grid solar system

| Field | Observed |
|---|---|
| Top results (condensed) | EG4 PowerPro 14.3 kWh (eg4electronics.com, 2024-04 + 2025-09 spec/brochure PDFs); FranklinWH aPower 2 (franklinwh.com); Tesla Powerwall 3 US docs (energylibrary.tesla.com, tesla.com/powerwall); EnergySage best-home-batteries + shop pages (energysage.com); Victron RV-sizing knowledge article (victronenergy.com, 2026-05) |
| Page-one types | US manufacturer spec pages; US comparison/shop (EnergySage); no AU sources |
| Freshness | EG4 2025-09; Victron article dated 2026-05 |
| AI-citation fit | **Medium.** US-resolved; an AU entry serves AU-filtered answers only. |
| Gap | No AU content: no CEC, no AS/NZS, no AU-available models (EG4/FranklinWH are US channels), no WA angle. Same off-grid intent as keywords 1–3. |

### 8. best off grid battery perth

| Field | Observed |
|---|---|
| Top results (condensed) | talkenergy.com.au "Tesla Powerwall 3 vs Sungrow SBR vs BYD — Perth 2026"; solarbatteryperth.com.au "Sungrow vs BYD vs Tesla — Perth 2026"; pswenergy.com.au "best solar batteries Perth customers can buy"; billwise.com.au "best battery storage Perth 2026"; sunwiz.com.au "top solar battery installers Western Australia 2026"; wa.gov.au (WA Residential Battery Scheme eligibility, scheme info, new requirements for small-scale solar/battery systems); DCCEEW CHBP (dcceew.gov.au); BYD HVM AU datasheet + Selectronic SP PRO 2i approved-battery list (site.bydbatterybox.com, selectronic.com.au); Pylontech + Victron compatibility (en.pylontech.com.cn, victronenergy.com); Tesla AU Powerwall |
| Page-one types | Perth installer/retailer listicles (talkenergy, solarbatteryperth, pswenergy, billwise); authority (wa.gov.au x3, DCCEEW); manufacturer/compat pages; one WA installer-ranking (Sunwiz) |
| Freshness | Three 2026-dated Perth listicles (talkenergy, solarbatteryperth, billwise, sunwiz); WA scheme pages current; BYD HVM AU datasheet V1.2 |
| AI-citation fit | **High.** For any "best … battery Perth" answer the LLM already leans on talkenergy/solarbatteryperth/billwise + WA gov. An off-grid-specific, locally-supported, evidence-led Perth comparison would displace brand-level listicles. |
| Gap | All Perth listicles are **grid-tied home battery** comparisons (Tesla/Sungrow/BYD); none is off-grid-specific; none carries local-stock/OEM/engineering evidence; the WA Residential Battery Scheme VPP/Synergy-Horizon eligibility nuance (genuinely off-grid properties often don't qualify) is unaddressed by the listicles; no 48V/rack-architecture guidance for remote rural loads (bore pumps etc.). |

### 9. best solar battery for home backup australia

| Field | Observed |
|---|---|
| Top results (condensed) | Harness returned a synthesised answer with in-text citations only (no explicit source list): CHOICE installed-cost data ($7–11k / 10 kWh, $11–15k / 15 kWh, $14–19k / 20 kWh); SolarQuotes-style installer-choice guidance; Tesla / Sungrow / BYD / Enphase 5P / sonnen shortlist; "no single best battery" framing |
| Page-one types | Comparison/listicle content + consumer-association pricing data (CHOICE), quote-network guides (inferred per in-text citations); exact title/domain list not returned by tool |
| Freshness | CHOICE brackets referenced as current; 2026-era framing |
| AI-citation fit | **High.** Backup-specific queries draw on comparison guides + CHOICE; a 2026-dated AU backup-focused comparison with real blackout/backup evidence would be cited. |
| Gap | Backup capability treated as brand-level claims only; no architecture/backup-design evidence (selected circuits vs whole-home), no WA/Perth support or blackout context; no usable-vs-nominal discipline. |

### 10. best battery for solar panels australia

| Field | Observed |
|---|---|
| Top results (condensed) | yousolar.com.au "best home batteries Australia 2026"; whysolar.com.au "best solar batteries Australia"; ausrebates.com "best solar battery Australia 2026"; jousto.com.au "Tesla vs Sungrow vs Alpha ESS" guide; energymatters.com.au "top 5 battery storage options for Australian homes"; sahomebattery.com.au "best solar batteries 2026"; CEC approved batteries (cleanenergycouncil.org.au); Tesla AU Powerwall; Enphase AU warranty PDF |
| Page-one types | Listicle/comparison guides dominate; CEC authority; manufacturer pages; AU warranty PDFs |
| Freshness | Multiple 2026-dated pages (yousolar, ausrebates, sahomebattery); Tesla AU Powerwall current |
| AI-citation fit | **High.** Same family as keywords 4/5; LLM already cites these listicles for "best battery for solar panels" answers. |
| Gap | Identical gap set to 4/5: brand-level, no architecture classification, no model-number discipline (observed answer itself: "obtain the exact model number — HVS, HVM, HVL and LVS are different systems"), no WA angle, no local-support evidence. |

### 11. what is the best home battery for solar panels

| Field | Observed |
|---|---|
| Top results (condensed) | EnergySage "best solar batteries 2026" + shop pages (energysage.com); Tesla Powerwall 3 US docs (energylibrary.tesla.com, tesla.com/powerwall); FranklinWH aPower 2 (franklinwh.com); Enphase IQ Battery 10C + 5P (enphase.com US store/datasheet); SolarEdge BAT-10K |
| Page-one types | US comparison platform (EnergySage); US manufacturer spec/install docs |
| Freshness | EnergySage 2026 comparison referenced; Tesla PW3 current US docs |
| AI-citation fit | **Medium.** US-resolved; AU entry serves AU-filtered answers only (but note the AU answer for this family leans on the keyword 4/5/10 listicles — an architecture-classified AU page would be the strong citation). |
| Gap | No AU content: no CEC, no CHBP/WARBS, no AU-available model standards. Same home-battery intent as 4/5/9/10. |

### 12. best lithium battery for solar storage australia

| Field | Observed |
|---|---|
| Top results (condensed) | yousolar.com.au "best home batteries Australia 2026"; whysolar.com.au "best solar batteries Australia"; talkenergy.com.au "best solar batteries BYD Tesla Sungrow 2026"; CEC approved batteries + battery-programs + capacity-change notices (cleanenergycouncil.org.au); Tesla AU Powerwall + AU datasheet (tesla.com/en_au, energylibrary.tesla.com en-au PDF); Sungrow AU residential ESS (sungrowpower.com au); BYD HVM AU datasheet (site.bydbatterybox.com); Enphase IQ 5P ANZ docs (enphase.com); AEMC Residential Battery Perspectives appendix (aemc.gov.au, 2025-08 PDF) |
| Page-one types | Listicle/comparison guides; CEC authority; manufacturer AU spec/warranty pages; regulator research (AEMC) |
| Freshness | talkenergy 2026; AEMC PDF 2025-08; CEC capacity-change notice Jul–Oct 2025 |
| AI-citation fit | **High.** Lithium/storage framing is well served by 2026 AU listicles + manufacturer AU datasheets; an evidence-led chemistry/architecture AU comparison would still be a fresh, citable source. |
| Gap | Chemistry treated as given ("lithium = current standard") with no LFP-vs-chemistry or architecture evidence; brand-level; no WA angle; no local-support evidence. |

---

## 2. Overlap analysis

### Within the keyword set (merge / drop)

| Group | Keywords | Verdict |
|---|---|---|
| **G1 — national off-grid best** | 1, 2 (+ 3, 7 as unqualified geo-offset variants) | **MERGE into one post.** Same buyer decision ("shortlist an off-grid battery, AU"). 1 and 2 differ only by the "reviews" modifier; 3 and 7 are the same intent without the AU qualifier (US-resolved SERPs) — an AU page targeting the national SERP also answers those for AU users. |
| **G2 — Perth/WA local** | 8 | **Standalone post.** Distinct intent (local-commercial, decision stage) and its own SERP (Perth installers + WA gov). |
| **G3 — home/grid battery national** | 4, 5, 9, 10, 12 (+ 11 as unqualified variant) | **MERGE into one post.** One SERP family — the same listicles (SolarQuotes, whysolar, yousolar, EnergyMatters) and the same winner set (Tesla PW3, Sungrow SBR, BYD, Enphase, Sigenergy, sonnen) answer all five. Separate posts would cannibalise each other. 11 is the unqualified geo-offset variant of the same family. |
| **G6 — 48V system** | 6 | **DO NOT create standalone post.** High overlap with RENOZ's own canonical `/guides/48v-vs-high-voltage-battery-system` (architecture decision) and the 48V LV-5KWH100AH product family; SERP resolves cleanly to Victron/Pylontech + CEC without an obvious content vacuum. Keep as an internally-linked section/anchor from the G1 post instead. |

### Against existing RENOZ content

| Existing asset | Overlap with | Risk | Mitigation |
|---|---|---|---|
| `/guides/off-grid-battery-systems-perth` | G1 post (1/2) and G2 post (8) | Medium | G1/G2 must be **product-selection/shortlist** content (compare battery options, criteria, evidence), not systems education; link to the systems guide for how systems work. Distinct query intent: "best battery" (pick) vs "battery systems Perth" (understand/build). |
| `/guides/48v-vs-high-voltage-battery-system` | G1 post, G3 post, keyword 6 | Medium | Never re-own the architecture decision. Classify architectures in one section and link to the canonical guide for full 48V-vs-HV reasoning. |
| `/guides/battery-sizing-off-grid-wa` | G1, G2 | Low | No sizing maths in the comparison posts — one sizing pointer + link. |
| `/guides/off-grid-vs-hybrid-perth` | G1, G2, G3 | Low | Don't re-litigate the hybrid-vs-off-grid decision; link. |
| `/guides/wa-battery-rebates-cec` | G2, G3 | Low | No fixed rebate rates anywhere; name WARBS/CHBP and require live checks; link to the guide. The observed SERP 8 nuance (WA scheme requires VPP + Synergy/Horizon; off-grid properties often ineligible) can be stated as eligibility nuance, not as a rate. |
| `/guides/renoz-vs-powerwall-sigenergy` | G3 post | Medium | G3 is a category roundup; keep RENOZ-vs-brand tables in the existing head-to-head guide and link it. |
| `/products/residential` (owns "home battery storage Perth") | G3, G2 | Low–medium | G3 is national informational comparison; money page is local transactional. Internally link to the money page for Perth buyers; do not write local "home battery storage Perth" intent into G3. |
| `/guides/battery-fire-suppression-essential` | G1, G2 | Low | Standards (AS/NZS 5139) mentioned once with a link; no fire-safety re-education. |

**Net:** 12 keywords condense to **3 distinct post intents** (G1 national off-grid, G2 Perth/WA off-grid local, G3 national home/grid battery).

---

## 3. Recommended batch-1 topics (exactly 3)

### Topic 1 — National off-grid battery shortlist

- **Target keywords:** `best off grid battery australia` (primary), `best off grid batteries australia reviews` (primary), `what is the best off grid solar battery` / `best battery for off grid solar system` (secondary, AU-framed).
- **Working title:** "Best Off-Grid Battery in Australia (2026): An Evidence-Led Shortlist"
- **Proposed slug:** `best-off-grid-battery-australia`
- **Rationale / evidence:** Page one for the money query is **manufacturer spec pages + CEC/Energy-Safe-Victoria authority only** — there is no independent AU comparison guide; the LLM synthesised its answer from PowerPlus/Selectronic/BYD/Pylontech primary sources. The "reviews" variant's page one is brand-level review claims (Clean Energy Reviews, Plico) with no model-level evidence. An architecture-classified, CEC-anchored, 2026-dated AU shortlist fills an actual vacuum (kfd 1: "no independent comparison"), is the natural LLM citation for both query forms, and diverges from the systems-education guides RENOZ already owns (no cannibalisation; internal links instead).

### Topic 2 — Perth/WA off-grid battery comparison (local)

- **Target keywords:** `best off grid battery perth` (primary); WA off-grid local intent from demand clusters (off-grid battery/systems Perth/WA family).
- **Working title:** "Best Off-Grid Battery for Perth & WA: Local Supply, Specs and Standards"
- **Proposed slug:** `best-off-grid-battery-perth`
- **Rationale / evidence:** Perth's page one is **grid-tied home-battery brand listicles** (talkenergy, solarbatteryperth, pswenergy, billwise 2026) + WA gov scheme pages — nothing off-grid-specific, no local-stock/OEM/engineering evidence, no 48V guidance for rural loads. The WA Residential Battery Scheme VPP/Synergy–Horizon eligibility nuance (observed in the SERP itself: genuinely off-grid properties often don't qualify) is a differentiator none of the listicles address. RENOZ is a Perth supplier — the only on-page-one-adjacent entity that can honestly write local supply + support + standards. Distinct from `/guides/off-grid-battery-systems-perth` (selection shortlist vs systems education).

### Topic 3 — National home/grid battery comparison (architecture-classified)

- **Target keywords:** `best solar battery australia` (primary), `best battery for solar panels australia` (primary), `best lithium battery for solar storage australia` (primary); `best solar battery for home backup australia` (secondary).
- **Working title:** "Best Solar Battery in Australia 2026: Architecture-Classified Comparison"
- **Proposed slug:** `best-solar-battery-australia`
- **Rationale / evidence:** The single densest listicle family in the set (SolarQuotes, whysolar, yousolar, EnergyMatters, batteryiq, savolture…), but every entry is brand-level, none classifies architecture (integrated vs modular vs 48V vs HV), none applies model-number discipline (the observed SERP answers themselves warn "HVS, HVM, HVL and LVS are different systems"), and none carries WA-specific or local-support evidence. LLMs already cite these listicles heavily (high citation potential); a 2026-dated, spec-accurate, CEC-anchored comparison with usable-vs-nominal rigour and a WA lens is a differentiated, citable replacement — and safely distinct from the RENOZ-vs-brand head-to-head guide and the residential money page.

---

## 4. Contracts for writers

### Topic 1 — best-off-grid-battery-australia
- Page one ALREADY covers: PowerPlus LiFe4838P / LiFe4851 + Selectronic SP PRO (AU-made premium route); BYD Battery-Box Premium LVS (4–24 kWh/tower, 51.2 V, LFP, modular); Pylontech US5000 (48 V rack, value tier, installer-supported); CEC approved-product lists (observed: 3,435 products as at 31 Jul 2026); AS/NZS 4509.1, 5139, 4777.1, 3000; LiFePO4 ~90% usable vs lead-acid ~50% guidance.
- MISSING (write this): independent architecture-classified AU shortlist; model-level spec tables; WA/Perth support angle; installer/evidence sourcing; 2026 date framing.
- MUST NOT: invent review scores or "best" endorsements beyond spec evidence (demand cluster retained "without endorsing a winner"); claim CEC approval for any exact RENOZ model without checking the current list; publish rebate rates; re-teach sizing or the 48V-vs-HV decision (link `/guides/battery-sizing-off-grid-wa`, `/guides/48v-vs-high-voltage-battery-system`); duplicate `/guides/off-grid-battery-systems-perth`; claim RENOZ hardware beyond the published LV-5KWH100AH path (51.2 V nominal, 5.12/4.61 kWh, 8 modules/tower, 2 towers/system, IP40 indoor).

### Topic 2 — best-off-grid-battery-perth
- Page one ALREADY covers: Perth 2026 grid-tied comparisons (talkenergy, solarbatteryperth: Tesla/Sungrow/BYD); pswenergy/billwise Perth battery pages; Sunwiz top WA installers 2026; WA Residential Battery Scheme pages (VPP participation + Synergy/Horizon requirement; new WA requirements for small-scale solar/battery systems); CHBP (DCCEEW); BYD HVM + Selectronic SP PRO approved-battery list.
- MISSING (write this): off-grid-specific Perth shortlist; local stock/OEM/engineering/warranty support evidence; 48 V rack guidance for bore pumps/rural loads; rebate eligibility nuance for genuinely off-grid properties (VPP requirement — state the nuance, no rates); standards/network expectation for remote properties.
- MUST NOT: publish fixed rebate rates/caps (WARBS/CHBP live checks only; link `/guides/wa-battery-rebates-cec`); claim installer/EPC site-design scope (installer partners own site design/approvals/commissioning); duplicate the systems education in `/guides/off-grid-battery-systems-perth`; claim CEC status for exact RENOZ models without a live list check; claim network approval specifics without verification.

### Topic 3 — best-solar-battery-australia
- Page one ALREADY covers (honour these observed facts): Tesla Powerwall 3 (13.5 kWh usable, ~10 kW, 10-yr warranty, 3-phase output limit ~5 kW per Tesla AU guidance); Sungrow SBR (HV modular, ~6.4–25.6 kWh, value tier); BYD Battery-Box HVS/HVM (8.1–22.08 kWh usable, ~96% RTE, needs external inverter); Enphase IQ 5P (5 kWh, 3.84 kW, 15-yr/6,000-cycle AU warranty); Sigenergy SigenStor (10-yr battery, integrated EV angle); sonnen (premium/VPP); CHOICE installed-cost brackets ($7–11k/10 kWh, $11–15k/15 kWh, $14–19k/20 kWh); CEC approved list + model-number warning (HVS/HVM/HVL/LVS are different systems); CHBP ~30% discount, on-grid VPP requirement, 1 Jul 2025 start.
- MISSING (write this): architecture classification across the field; usable-vs-nominal rigour; WA-specific differences (WARBS vs CHBP); blackout/backup design evidence; local-support evidence; 2026 model-dated spec table.
- MUST NOT: cite "best" rankings as fact beyond observed sources; publish rebate rates (link `/guides/wa-battery-rebates-cec`); duplicate `/guides/renoz-vs-powerwall-sigenergy` head-to-head tables (link); cannibalise `/products/residential` "home battery storage Perth" (link the money page); claim RENOZ product facts beyond the published LV-5KWH100AH path; make VPP-participation claims without the live program rules.