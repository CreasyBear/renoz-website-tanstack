# Research pack: stand-alone-power-system-wa

Date: 2026-09-02. Every load-bearing claim in `src/data/guide-content/stand-alone-power-system-wa.ts` traces to an entry here.

## Sources

1. **Western Power SPS program FAQ** — https://www.westernpower.com.au/resources-education/faqs/stand-alone-power-systems/
   - Established: Western Power selects properties for SPS replacement of long/remote overhead connections; utility pays for site investigations, installation, operation and maintenance, faults, eventual replacement; customer keeps paying their normal retailer tariff; generally one SPS per connection. Supports: "who pays" section, program mechanics.
2. **Western Power SPS network technology page** — https://www.westernpower.com.au/resources-education/our-network-the-grid/grid-technology/stand-alone-power-system/
   - Established: SPS = solar + battery + backup generator, utility-owned. Supports: definition section.
3. **ABC News, 5 Jul 2026, "Maintenance issues, outages plague WA standalone power systems"** — https://www.abc.net.au/news/2026-07-05/maintenance-issues-in-wa-standalone-power-systems/106807116
   - Established: 498 standalone units installed in regional WA; 100 in the Shire of Cranbrook; Tenterden farmer Ben Parsons reports roughly 70 outages since 2022 install; residents still pay per-unit tariffs; WA legislation does not require landowner consent; Western Power spokesperson claims 96% of users have better reliability; remediation/upgrades acknowledged for initial units. Supports: honest-sceptic section, decision guidance.
4. **ABC News, 12 Mar 2024, "Farmers question value for money behind Western Power's push for standalone power systems"** — https://www.abc.net.au/news/2024-03-12/farmers-question-western-power-push-standalone-regional-units/103549708
   - Established: farmers' concerns about capacity for farm loads (pumps, workshops), automatic shutdowns, longer outage repair times due to technician travel; grid connection may be permanently removed; Western Power plans thousands of systems across Midwest, Wheatbelt, South West, Great Southern. Supports: who SPS suits vs not.
5. **Economic Regulation Authority review material (Engevity attachments)** — https://www.erawa.com.au/cproot/22862/2/Engevity---Attachments---Redacted.PDF
   - Established: average capital cost per SPS of ~$287,000 (Round 1) and ~$229,389 (Round 2), excluding risk/escalation; Western Power has publicly described ~$200,000 per system. Supports: the ~$200k–$230k utility SPS cost figure (attributed to the ERA review, not a bill to property owners).
6. **WA Government media statement, 28 Nov 2022** — https://www.wa.gov.au/government/media-statements/McGowan%20Labor%20Government/Standalone-power-systems-roll-out-in-regional-Western-Australia-20221128
   - Established: WA Government commitment of 1,000 SPS units across WA over five years; Horizon Power tranche $45.8m for 150 systems; Esperance tranche removes ~260 km of overhead line. Supports: program scale.
7. **WA 2025-26 Budget paper (tabled)** — https://www.parliament.wa.gov.au/publications/tabledpapers.nsf/displaypaper/4210295a76d675dd7fe4aa2148258cae00291d37/%24file/tp%2B295%2B%282025%29.pdf
   - Established: Horizon commitment adjusted from 150 to 94 funded systems on higher delivery costs and Building and Energy compliance issues; ~85 systems being installed for ~$21m; typical system sizes 5-25 kW output / 10-50 kWh battery storage, larger systems up to ~72 kW / ~86 kWh; concentration Esperance, Hopetoun, Exmouth, Carnarvon. Supports: system size table.
8. **Horizon Power SPS page** — https://www.horizonpower.com.au/your-community/getting-future-ready/renew-the-regions/standalone-power-systems/
   - Established: SPS not available as a general application; Horizon identifies properties via asset planning; standard designs sized around 16-24 kW for properties previously on 10-25 kVA transformers; same tariff and consumer protections; Horizon remains responsible for maintenance. Supports: Horizon section, "how you get one" (you can't just apply).
9. **Horizon Power 2024-25 Annual Report** — https://www.horizonpower.com.au/globalassets/media/documents/annual-reports/20242025/2024-25-annual-report_horizon-power.pdf
   - Established: 84 hybrid renewable SPS systems delivered across regional WA. Supports: delivery count.
10. **Parliamentary answer (Oct 2025 Hansard)** — https://www.parliament.wa.gov.au/parliament/pquest.nsf/viewLAPQuestByDate/78A445C75B66A17D48258CEB00375A79
    - Established: ~80% of SPS energy from renewables; average backup-generator runtime ~22 hours per month in 2024-25. Supports: generator-runtime reality check.
11. **AS/NZS 4509.1** (standard; role confirmed via Energy Safe Victoria guidance https://www.esv.vic.gov.au) — the safety and installation standard for stand-alone power systems: detailed load analysis, sizing of generation/inverter/battery to peak demand, RCD protection, compliance at install. Supports: definition + design-scope section.
12. **DCCEEW Cheaper Home Batteries Program** — https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries
    - Established: CHBP available off-grid, no grid-connection condition, no VPP condition, roughly 30% off at point of sale. CEC-approved battery + SAA-accredited installer requirements. Supports: rebate wording (claim-boundary wording used verbatim).
13. **CER / Clean Energy Council off-grid rule** — off-grid battery rebate eligibility hinges on being >1 km from the grid OR grid connection cost >$30,000; verify at cleanenergycouncil.org.au or cer.gov.au. Supports: who qualifies for CHBP.
14. **Existing repo guides** — battery-sizing-off-grid-wa.ts (private system cost bands $15-30k weekender / $40-65k 3-bed / $70-120k+ farm), Harvey case study (/case-studies/harvey-farm: $200k grid quote avoided, 35.8 kWh, 21 kWp, Selectronic SPMC482 + Fronius Primo). Supports: private-vs-utility comparison table.

## Claim → source map

- "Utility SPS costs roughly $200,000-$230,000 per property" → sources 3, 5 (attributed to ERA review / Western Power public descriptions; program cost, not a customer bill).
- "Western Power owns and maintains the system; you keep paying your tariff" → source 1.
- "498 units installed, 100 in Cranbrook" → source 3.
- "1,000 SPS commitment / Horizon 150→94 systems / 84 delivered" → sources 6, 7, 9.
- "Typical Horizon SPS 16-24 kW; budget paper 5-25 kW / 10-50 kWh" → sources 7, 8.
- "~22 h/month generator runtime average" → source 10.
- "You cannot apply for a utility SPS; it is asset-planning driven" → sources 1, 8.
- "AS/NZS 4509.1 governs sizing and installation" → source 11.
- "CHBP off-grid eligibility, ~30%, no grid/VPP condition" → source 12 (approved wording).
- "Private off-grid cost bands" → source 14.

## Premises that held / broke

- All planned figures verified. The ABC July 2026 story actually strengthens the honest-sceptic framing (outages, maintenance, no-consent rules). No premises broke.
