# Research pack: living-with-a-generator-wa

Date: 2026-09-02. Agent: GENLIFE. Guide slug: `living-with-a-generator-wa`.

Reuses verified sources from `generator-running-costs-wa-RESEARCH.md` (S1-S4: WA diesel prices, spec-sheet fuel burn, community runtime bands, servicing intervals). This pack covers the NEW claims for this guide.

## N1. Continuous vs prime rating (ISO 8528-1) — OEM documentation

- Source: Cummins genset ratings guide (T-030), https://powersuite.cummins.com/sites/powersuite/files/2024-04/t030.pdf
  - Established: Prime Rated Power (PRP) = unlimited annual hours with variable load, average load commonly limited to ~70% of prime rating; Continuous Operating Power (COP) = constant load at 100% of nameplate, unlimited annual hours; Limited-Time Running Power (LTP) = typically max 500 hours/year; Emergency Standby Power (ESP) = typically max 200 hours/year. PRP permits ~10% overload for 1 hour in 12, max ~25 h/year.
  - Corroborated: Caterpillar, https://www.cat.com/en_US/by-industry/electric-power/Articles/ep-news/ep-news-data-center-design-considerations.html (same PRP/COP/LTP/ESP distinction).
- Supports claim: a small genset CAN run for long stretches if it is prime-rated, but standby-only machines are limited (~200-500 h/year), and even prime-rated sets carry 70% average-load guidance and service-interval constraints. "How long continuously" answer = check the rating plate, not a fixed number.

## N2. Noise figures from AU spec sheets (8 kVA canopy class)

- Source: Globe Power GP8K spec sheet, https://www.generatorsaustralia.com.au/wp-content/uploads/2025/05/GP-GP8K-V2.2-0225.pdf — 64 dB(A) @ 7 m.
- Source: RAM Industrial 8 kVA, https://ramindustrial.com.au/product/8-kva-diesel-generator-240v/ — 63 dB(A) @ 7 m.
- Source: Able Power 8 kVA super-silenced, https://ablepower.com.au/products/generator-diesel-silent-8kva-1-phase/ — 65 dB(A) @ 7 m.
- Source: Hyundai DHY8700SE-LRS at Statewide Power, https://statewidepower.com.au/shop/diesel-generators/8-kva-hyundai-dhy8700se-lrs-diesel-generator/ — 72 dB(A) @ 7 m (cheaper canopy class).
- Established: 8 kVA canopied gensets in AU spec sheets list 63-72 dB(A) at 7 metres; distance and load must be stated; 7 m ≠ property boundary; sound pressure vs sound power (LWA) differ.
- Supports claim: "quiet" gensets are ~63-65 dB(A) at 7 m, comparable to a loud conversation at the wall and clearly audible inside a house at night. Low-load open-frame portables are louder again (not separately quantified in pack; guide avoids a number there).

## N3. Battery-assisted charging patterns / load management (community-attributed)

- Source: https://forums.whirlpool.net.au/forum-replies.cfm?t=1714325 — user runs genset ~4 h/day daytime using multiple chargers to bulk-charge fast, then shuts down (community-posted).
- Source: https://forums.whirlpool.net.au/thread/96yz2mj7 — contributors suggest ~3 days battery autonomy for poor winter weather (community-posted).
- Source: https://www.reddit.com/r/OffGrid/comments/1pr5lxp/how_do_you_decide_when_to_run_your_generator/ — winter 60-90 min/day typical, ~2 h bad days (community-posted).
- Supports claim: community tactic = short daytime bulk-charge runs at high load (better litres/kWh) rather than long evening trickle runs; solar-first load shifting; autonomy sizing reduces run frequency.

## N4. Claim boundaries (verbatim, shared)

- CHBP: available off-grid, no grid-connection condition, no VPP condition, "roughly 30% off at point of sale" — link https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries
- WA Residential Battery Scheme: grid-connected only + VPP enrolment.
- CER two-branch rule (>1 km off-grid eligible; <1 km needs VPP-capable or >$30k evidence) — verified wave 1, not restated with new numbers here.
- Community figures attributed as "community-posted". No invented installs.

## Claims needing human review

1. 70% average-load guidance for PRP is Cummins/Cat language; small-AU-genset manuals vary — guide presents as ISO 8528 framework, not per-model.
2. Noise dB figures are spec-sheet marketing numbers measured free-field; real site noise higher near walls — guide says so.
3. Community runtime/charging tactics are anecdotes, attributed as community-posted.

## Premises checked

ISO ratings verified against two OEM sources (N1). Noise verified against four AU spec sheets (N2). Community tactics verified (N3). No broken premises.
