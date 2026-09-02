# Evidence pack: off-grid-power-shed-wa

Date: 2026-09-02. Agent: GuideShed. Every load-bearing guide claim traces here.

## Verified sources

1. **CER — Solar batteries / Cheaper Home Batteries eligibility** — https://cer.gov.au/schemes/renewable-energy-target/small-scale-renewable-energy-scheme/small-scale-renewable-energy-systems/solar-batteries
   - VERIFIED by direct read 2026-09-02. Establishes:
     - "Structures that are not lived in, such as sheds or bore pumps, are not eligible" for CHBP STCs.
     - Off-grid battery must be installed on a dwelling that is lived in (remote farmhouse); lived-in separate structures (tiny home, granny flat, houseboat, caravan) ARE eligible; one battery per off-grid dwelling; each needs its own solar PV.
     - Off-grid properties >1 km from grid don't need VPP capability; <1 km requires VPP-capable OR written evidence grid connection cost >$30,000.
     - 5–100 kWh nominal; STCs on first 50 kWh usable; CEC approved list; AS/NZS 5139:2019 compliance; SAA-accredited installer with battery endorsement.
   - Supports: the "shed rebate trap" section, FAQ on rebates, >1km/30k rule restatement.

2. **Honda generator wattage estimation guide** — https://powerequipment.honda.com/generators/generator-wattage-estimation-guide
   - Manufacturer-published planning values: 1 hp air compressor ~1,600 W running / 4,500 W starting; 10-inch table saw ~1,800 W running / 4,500 W starting.
   - Supports: tool surge table. (US manufacturer but published engineering figures; attributed as manufacturer-published generator-sizing values.)

3. **Victron Energy — help me choose (inverter sizing)** — https://www.victronenergy.com/inverters-chargers/help-me-choose
   - Manufacturer guidance: size inverters on continuous load PLUS combined peak; battery delivery capability (DC current via BMS/cabling) is a key constraint; DC amps = AC watts ÷ (battery volts × efficiency); 48 V strongly preferable for 3–8 kW loads (3,000 W = ~69 A at 48 V vs ~278 A at 12 V).
   - Supports: inverter-charger essentials section, 48 V battery current maths.

4. **Lincoln Electric — welder generator sizing doc** — https://ch-delivery.lincolnelectric.com/api/public/content/9f7c827be23749f6b01bb291d04a2759
   - Welder input ≠ output amps; recommended generator size commonly 5,000–10,000 W+ depending on welder.
   - Supports: welder caveat in surge section.

5. **Off Grid Energy (AU, Victorian supplier) — Shed Power system** — https://www.offgridenergy.com.au/off-grid-power-systems/shed/
   - Advertised turnkey shed system: ~4–9 kWh/day, 5 kW output, up to 10.4 kWh lithium, from A$16,700 installed.
   - Supports: serious-workshop cost range (attributed as advertised price).

6. **CDGA Power (cpower.com.au finance page)** — https://cpower.com.au/finance/
   - Advertised packages: 400 W DC cabin/shed package with 255 Ah battery A$3,692; 1,300 W AC machinery-shed package with 500 Ah battery A$8,372 (excl. delivery/install).
   - Supports: light-duty shed cost floor (attributed as advertised).

7. **Self Sufficient Australia — Victron small shed kit** — https://www.selfsufficientaus.com.au/products/copy-of-victron-off-grid-garage-small-shed-kit-1kw-pv-5-4-kwh-3000w-inverter
   - Advertised kit: 1 kW PV, ~11 kWh lead-acid, 3 kW inverter, A$5,099.
   - Supports: kit-tier cost floor and the lead-acid vs LiFePO4 contrast.

8. **Energy Safe Victoria EIS-004** — https://www.energysafe.vic.gov.au/industry-guidance/electrical/electrical-technical-information/eis-004-battery-installation-neutral-continuity-and-men-connection
   - Confirms AS/NZS 5139 and AS/NZS 4509.1 are the applicable standards for BESS/stand-alone installations; MEN/neutral continuity complexity in stand-alone systems.
   - Supports: standards section (AS/NZS 4509.1 system design, AS/NZS 5139 battery siting).

9. **RENOZ product catalog (src/data/product-catalog.ts)** — LV-5KWH100AH: 5.12 kWh nominal, 4.61 kWh usable per module, 51.2 V, approved 8- or 10-module towers, 6,000 cycles at 80% DoD, −10 °C to 55 °C, IP40 indoor.
   - Supports: module/tower sizing examples for sheds.

10. **RENOZ Harvey case study (src/data/case-studies.ts + /case-studies/harvey-farm)** — Harvey WA, 35.8 kWh gross (7 modules), 21 kWp, Selectronic SPMC482 + Fronius Primo, installed by West State Electrics; family lived in a construction shed for 2+ years; reduced routine generator use.
    - Supports: the real install anchor. Note: the CER lived-in-dwelling rule plausibly applied here (the shed was the lived-in dwelling during construction) but the guide does NOT assert the install's STC outcome — only the install facts.

11. **Sizing guide (src/data/guide-content/battery-sizing-off-grid-wa.ts)** — established internal cost ranges ($15–30k weekender, $40–65k 3-bed, $70–120k+ farm) and load-audit method.
    - Supports: cross-reference ladder.

## Claims NOT verified / deliberately excluded
- No WA-specific shed-install gallery case beyond Harvey (Harvey is the anchor).
- No claimed CHBP rate for sheds (sheds ineligible — the opposite claim).
- No AS/NZS 4509.1 clause-level figures (standard is paywalled; described at level of role only).
- Cost ranges presented as advertised/indicative from named suppliers, never as RENOZ claims.
