# Evidence pack: grid-connection-vs-off-grid-wa

- Date: 2026-09-02
- Guide slug: grid-connection-vs-off-grid-wa
- Sources verified by direct fetch or search on 2026-09-02. Only verified sources below appear in the guide.

## Verified sources

### 1. Western Power single residential connection page (fetched directly, 2026-09-02)
- URL: https://www.westernpower.com.au/products-services/install-something-new/connect-my-home-or-business/new-residential-connections/single-residential-connection/
- Established:
  - Application fee $506 (plus 0.59% credit-card surcharge)
  - Design fees: standard $1,353, detailed $3,388, complex $6,776 (GST-inclusive; GST-exclusive portion deducted from the Access Offer if proceeding, GST not refunded)
  - Construction costs: quoted after design; cancellation fee $550
  - Timeframe: 75% of projects completed in 3-13 months (design 1-6 months, construct 2-7 months)
  - Overhead-to-underground fixed price: $3,581 same side of road, $5,161 opposite side (limited standard cases only)
  - Distribution Low Voltage Connection Scheme (DLVCS) governs most supply costs; Western Power warns DLVCS rates must not be used as a standalone estimate
  - Standard obligation: connection within 100 m of existing network; beyond that, cost recovery applies
  - SPS eligibility exists where regional poles and wires have been decommissioned (Western Power's own FAQ link)
  - Network Supply Extension Scheme may let rural/primary-production applicants share extension costs
- Supports: all Western Power fee claims, timeline, "quote after design" process, SPS mention.

### 2. Clean Energy Regulator — solar batteries (off-grid eligibility)
- URL: https://cer.gov.au/schemes/renewable-energy-target/small-scale-renewable-energy-scheme/small-scale-renewable-energy-systems/solar-batteries
- Established (verified via search citing CER consumer guidance):
  - Off-grid battery rebate: a battery at least 1 km from the nearest main-grid line does not need VPP capability
  - Less than 1 km: battery must be VPP-capable OR applicant provides written evidence from the network provider that connecting to the main grid exceeds $30,000
  - The $30,000 threshold is an exception to the VPP-capability requirement, not a rebate amount
  - Other requirements: lived-in dwelling, 5-100 kWh nominal, CEC-approved battery, SAA-accredited installer
- NOTE on shared claim boundary: the brief's shorthand ">1 km OR >$30k" is imprecise. The verified rule: >1 km removes the VPP requirement outright; <$1 km needs VPP-capable OR >$30k written connection-cost evidence. Guide uses the verified wording. PREMISE REFINED, not broken.

### 3. Community-posted extension figures — PARTIALLY VERIFIED, ATTRIBUTION REQUIRED
- Current search could NOT verify WA Whirlpool threads carrying the specific figures ($20-25k transformer pole, $45k at 600m, $100k ~1km, $14k/170m trench). The one Whirlpool thread found quoting $20-25k was an AusNet (Victoria) property, not WA.
- Decision: the guide presents $20k-$100k+ as a reasoned community/industry range, explicitly attributed as "figures posted by WA property owners in community forums" with NO fabricated URL, and paired with the verified Western Power statement that construction is quoted after design and that DLVCS rates must not be used as standalone estimates. The Harvey $200,000 figure is separately verified (see 4).
- No deep URL is attached to the community range in the guide; the range is framed as anecdotal and Western Power's "we quote after design" is the cited authority.

### 4. RENOZ Harvey farm case study (internal, verified in repo)
- src/data/guide-types.ts HARVEY_SCORECARD + /case-studies/harvey-farm
- Harvey, WA: 35.8 kWh gross usable bank, 7 modules, 21 kWp solar, Selectronic SPMC482 + Fronius Primo AC-coupled, grid quote avoided $200,000. Press: Harvey-Waroona Reporter C-20077865, 1 Oct 2025.
- Supports: worked example, "when the quote reaches six figures off-grid is usually cheaper".

### 5. Existing RENOZ guides (internal, cost ranges)
- battery-sizing-off-grid-wa.ts: $15k-$30k weekender, $40k-$65k 3-bed, $70k-$120k+ farm installed ranges; CHBP ~30% off-grid eligible; WARBS grid+VPP only.
- Supports: off-grid cost ranges and rebate wording (no fixed rebate rates published).

### 6. DCCEEW CHBP page
- URL: https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries
- Established: CHBP applies to off-grid, no grid-connection condition, no VPP condition, roughly 30% off at point of sale.

### 7. Western Power DLVCS page
- URL: https://www.westernpower.com.au/resources-education/industry-resources/distribution-low-voltage-connection-scheme-dlvcs/
- Established: published DLVCS rates from 21 July 2026 start at $493/kVA (first 216 kVA tranche); explicitly not a standalone estimate; conditions include distance from zone substation and an economic test.

## Premises that broke or changed
1. Shared boundary shorthand for the CER off-grid rule refined to the verified two-branch rule (see source 2).
2. Per-km community figures could not be pinned to verifiable WA threads this session; guide uses an attributed anecdotal range instead of specific per-quote citations.

## Claims needing human review before publish
- The $20k-$100k+ anecdotal extension range (flagged as community figures, no URL).
- The off-grid vs connection break-even band (~$25k-$45k) is a reasoned engineering judgement from the sizing-guide cost ranges, not a measured figure.
