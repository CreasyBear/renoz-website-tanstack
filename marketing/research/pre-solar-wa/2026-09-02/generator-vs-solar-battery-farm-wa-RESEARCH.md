# Research pack: generator-vs-solar-battery-farm-wa

Date: 2026-09-02. Agent: FARMVS. Guide slug: `generator-vs-solar-battery-farm-wa`.

## S1. Generator ratings: how long can a genset actually run (duty-cycle truth)

- Source: https://www.cummins.com/sites/default/files/2021-08/considerations_for_generator_set_selection_presentation.pdf (Cummins, generator set selection)
  - Established: ISO 8528-1 standby/ESP = variable load, up to ~200 hours/year, average load ~70%; prime/PRP = unlimited annual hours at variable load with ~70% average-load limit; LTP = constant load up to 500 h/year; COP = continuous, 100% load, unlimited hours.
- Source: https://www.cat.com/en_US/by-industry/electric-power/Articles/ep-news/ep-news-data-center-design-considerations.html (Caterpillar)
  - Established: prime power commonly allows a limited 10% overload for 1 hour in 12; standby ratings are outage-rated, not base-load-rated.
- Source: https://techcomm.kohler.com/techcomm/pdf/ISO%208528-5%20and%20Generator%20Transient%20Performance_WP.pdf (Kohler)
  - Established: ratings are set by thermal, durability and wear-life constraints; typical standby use is 200 h/year or less, some models up to 500 h/year.
- Supports claim: a genset run every day as the primary power source is operating in prime duty, not standby duty; most farm gensets sold for backup are standby-rated and are not designed for daily multi-hour runs. Practical planning figure: a genset running 3–6 h/day as primary power is in prime territory and needs prime-sized capacity plus disciplined servicing.
- Cross-check (sibling pack, generator-running-costs-wa-RESEARCH.md S4): 250-hour service intervals are the small-diesel norm; a 4 h/day genset hits 250 h in ~10 weeks.

## S2. Noise reality (manufacturer spec sheets, AU suppliers)

- Source: https://eniquest.com.au/generators/ranger-7000-diesel-generator/ — 7 kVA enclosed canopy, 59 dB(A) @ 7 m full load.
- Source: https://eniquest.com.au/generators/ranger-13000-diesel-generator/ — 13 kVA enclosed, 65 dB(A) @ 7 m.
- Source: https://eniquest.com.au/generators/stockman-100-10kva-enclosed-diesel-generator/ — 10 kVA enclosed, 66 dB(A) @ 7 m.
- Source: https://www.powerlite.com.au/1500-1800-rpm/series-enermax/enermax-perkins/ — Enermax Perkins soundproof canopies 65–68 dB(A) @ 7 m; Powerlite notes levels measured per European Regulation 2000/14/EC.
- Supports claim: even a good sound-attenuated canopy genset runs 59–68 dB(A) at 7 m, audible across a quiet property; a battery inverter is silent. dB(A) @ 7 m is sound pressure, not LWA sound power.

## S3. Fuel cost anchor (verified in sibling wave-1 pack; guide links to that guide rather than restating)

- Source: https://fuelradar.com.au/fuel-prices-wa/dsl — WA average diesel ≈ 251.9 c/L, 2026-09-02; regional towns run above Perth.
- Source: https://www.fuelwatch.wa.gov.au — WA statutory daily fuel price monitor.
- Guide-level maths owned by /guides/generator-running-costs-wa: ~$0.75–$1.00 per kWh generated at $2.50/L; 8 kVA at 4 h/day ≈ $22/day. FARMVS cites these figures as "the numbers in our generator cost guide" and links.

## S4. Farm loads (established in prior verified guides on this site)

- Source: https://www.renoz.energy/guides/battery-sizing-off-grid-wa (repo: src/data/guide-content/battery-sizing-off-grid-wa.ts) — rural homes 12–20 kWh/day before bore pumps; motor inrush sizing logic; oversise solar before battery.
- Source: src/data/guide-content/diesel-to-battery-wa-farms.ts — bore pumps 3–7 kW with locked-rotor surge 2–3x running current; low-frequency inverter-chargers (Victron/Selectronic) for motor surge; generator-start SoC thresholds.
- Supports claim: farm decision frame must be built on load logs; surge (bore pump, coolroom compressor) sizes the inverter, daily kWh sizes the battery.

## S5. Real WA installs (anchors; no invented installs)

- Source: https://www.renoz.energy/case-studies/harvey-farm (repo: src/data/case-studies.ts, id 1) — Harvey WA, 35.8 kWh gross RENOZ LV (7 modules), 21 kWp solar, Selectronic SPMC482 + Fronius Primo AC-coupled; grid connection quoted around $200,000; generator backup retained; case study dated 2025-08-01.
- Source: https://www.renoz.energy/case-studies/bally-bally (repo: src/data/case-studies.ts, id 2) — Bally Bally remote hobby farm, 30 kWh gross LV stackable system with existing solar, diesel generator backup with remote monitoring, commissioned by WA-certified installer; driver: grid-connection fees plus high diesel cost; results report reduced generator runtime.
- Supports claim: the normal WA farm outcome is hybrid, generator retained as backup. Say so plainly.

## S6. Rebate wording (mandated claim boundaries, same as wave 1)

- Source: https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries (DCCEEW CHBP)
  - Mandated wording: CHBP is available off-grid, has no grid-connection condition and no VPP condition, and is roughly 30% off at point of sale. Never publish fixed rebate rates/caps/totals.
- Source: https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme (WA Residential Battery Scheme)
  - Established: grid-connected only, requires VPP enrolment — off-grid farms cannot access it.
- CER two-branch rule (verified wave 1): property more than 1 km from the grid = off-grid eligible without VPP; closer than 1 km requires a VPP-capable system OR written evidence the connection cost exceeds $30,000.
- CER lived-in rule (verified wave 1): batteries serving structures nobody lives in (sheds) are NOT CHBP-eligible; batteries serving lived-in dwellings (farmhouse) qualify.

## S7. Community decision framing (attributed)

- Source: https://www.reddit.com/r/OffGrid/comments/1pr5lxp/how_do_you_decide_when_to_run_your_generator/ — community runtime patterns: winter 60–90 min/day typical, ~2 h on bad days; another user 1 h every 3 days. Attributed as community-posted.
- Whirlpool threads verified in sibling pack (t=1714325, archive/2265257, thread/96yz2mj7): ~4 h/day bulk-charge patterns; first-winter 6 h runs; ~3 days autonomy as common advice.
- Vacuum context (GUIDE-PLAN.md row 6): "generator vs solar battery farm" SERP is utility-scale (CSIRO/AEMO megawatt content). This guide owns the 30–200 kWh farm scale.

## Claims needing human review

1. dB(A) @ 7 m figures are supplier spec sheets (Eniquest, Powerlite), not lab certifications; quote per-model if challenged.
2. ISO 8528 duty tables summarised from Cummins/Cat/Kohler OEM documents; exact annual-hour limits vary by model and warranty.
3. Bally Bally case study reports "reduced" generator runtime (qualitative); do not quantify savings.
4. FuelRadar WA average is a dated market snapshot (2026-09-02); the guide defers per-day maths to the gen-costs guide.

## Premises checked

All planned claims trace to S1–S7. No broken premises. No fixed rebate figures published. Community figures attributed. Case studies are real site records.
