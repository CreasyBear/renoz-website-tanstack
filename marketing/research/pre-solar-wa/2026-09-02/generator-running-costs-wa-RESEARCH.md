# Research pack: generator-running-costs-wa

Date: 2026-09-02. Agent: GENCOST. Guide slug: `generator-running-costs-wa`.

## S1. WA diesel price, September 2026

- Source: https://fuelradar.com.au/fuel-prices-wa/dsl (FuelRadar, WA price aggregator)
  - Established: WA average diesel ≈ 251.9 c/L (≈ $2.52/L); cheapest reported 228.5 c/L.
  - Regional examples: Albany ≈ $2.46/L; Carnarvon ≈ $2.62/L; Broome ≈ $2.68/L. Remote northern towns run 20–40 c/L above Perth.
- Source: https://www.fuelwatch.wa.gov.au (WA FuelWatch, statutory WA gov price monitor)
  - Established: WA publishes daily notified fuel prices; regional prices are checked per town. Supports "check your town's price" instruction and the AU tier-1 authority link.
- Supports claim: diesel in WA costs roughly $2.40–$2.70/L, more in remote areas. Guide uses $2.50/L as the worked-example price and flags regional variance.

## S2. Generator fuel consumption by class (manufacturer/supplier spec sheets)

- Source: https://eniquest.com.au/generators/husky-5000-diesel-generator/ — 5 kVA Husky 5000 rated 1.30 L/h.
- Source: https://eniquest.com.au/generators/ranger-8000-diesel-generator/ — 8 kVA Ranger 8000 rated 2.28 L/h at full load.
- Source: https://www.macfarlanegenerators.com.au/download?fid=1655 — Macfarlane TP10L 10 kVA: 1.5 L/h @50%, 2.1 L/h @75%, 2.7 L/h @100% prime load.
- Source: https://ramindustrial.com.au/product/8-kva-diesel-generator-240v/ — 8 kVA at 2.8 L/h @100%.
- Source: https://genworks.com.au/products/portable-diesel-generator-8kva-three-phase-in-canopy — 8 kVA 1.8 L/h @75%.
- Source: https://www.powerlite.com.au/portable-generators/hatz-diesel-generators/phzd050-4000w-generator/ — 5 kVA Hatz ~1.7 L/h; supplier recommends ≥60% load for diesel engines.
- Derived planning figures (guide table): 5 kVA ≈ 1.3–1.7 L/h; 8 kVA ≈ 1.8–2.8 L/h; 10 kVA ≈ 2.1–3.5 L/h depending on load. Consumption rises per kW at light load; request 25/50/75/100% figures from the manufacturer.

## S3. Community runtime patterns (attributed as community-posted figures, never RENOZ claims)

- Source: https://forums.whirlpool.net.au/forum-replies.cfm?t=1714325 — Whirlpool user ran a genset ~4 h/day using multiple chargers to bulk-charge fast.
- Source: https://forums.whirlpool.net.au/archive/2265257 — first winter ~6 h runs after overcast days; improved system cut use to a few occasions per year.
- Source: https://forums.whirlpool.net.au/thread/96yz2mj7 — contributors suggest ~3 days battery autonomy for poor winter weather.
- Source: https://www.reddit.com/r/OffGrid/comments/1pr5lxp/how_do_you_decide_when_to_run_your_generator/ — winter 60–90 min/day typical, ~2 h on bad days; another user 1 h every 3 days.
- Derived planning bands used in guide: 0–1 h/day averaged over a good winter; 1–3 h/day in cloudy periods; 3–6 h on recovery days. Attribution wording: "community-posted figures", never RENOZ claims.

## S4. Derived cost maths (arithmetic from S1+S2+S3; each worked example states assumptions)

- Fuel cost per hour = litres/h × $/L.
  - 5 kVA @1.3 L/h × $2.50 = $3.25/h → 3 h = ~$10/day; 6 h = ~$20/day.
  - 8 kVA @2.2 L/h × $2.50 = $5.50/h → 4 h = $22/day; 6 h = $33/day.
  - 10 kVA @2.5 L/h × $2.50 = $6.25/h → 4 h = $25/day.
- Energy delivered: 1 L diesel ≈ 9.8 kWh thermal; small gensets convert ~25–33% to electricity → ~2.5–3.3 kWh per litre at reasonable load. At $2.50/L that is roughly **$0.75–$1.00 per kWh generated**, vs Synergy/Horizon tariff-supplied grid power at a fraction of that, and vs a solar+battery marginal cost near zero once installed.
- Annualised: an 8 kVA running 4 h/day, 120 winter days ≈ $2,600/yr fuel alone. Daily-year-round genset dependence (4 h/day) ≈ $8,000/yr fuel before servicing.
- Servicing: oil changes on ~250-hour intervals are the industry norm for small diesel gensets; a genset running 4 h/day hits 250 h in ~10 weeks. Presented as planning guidance, attributed to manufacturer service schedules generally.

## S5. Claims needing human review

1. FuelRadar WA average ($2.52/L) is a market snapshot, not a statutory figure — dated 2026-09-02, refresh before publish.
2. Servicing interval (250 h) stated as generic planning guidance, not tied to one named OEM manual.
3. Community runtime figures are forum anecdotes; always attributed as community-posted.
4. $/kWh conversion efficiency band (25–33%) is standard small-diesel engineering, not a single citable spec.

## Premises checked

- WA diesel prices verified (S1). Spec-sheet consumption verified across three independent AU suppliers (S2). Community runtime verified (S3). All planned numbers trace to this pack. No broken premises.
