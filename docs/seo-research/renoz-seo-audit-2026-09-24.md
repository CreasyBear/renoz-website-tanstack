# RENOZ search audit — 24 September 2026

## Decision

Retire the China Battery Desk from the public site and concentrate editorial effort on WA buyers considering off-grid battery replacement. Publish a lead-acid replacement guide and improve the existing PowerPlus comparison rather than creating a second competing PowerPlus page. Treat the reported WA sales-office closure as market intelligence, not a public claim until it can be documented. The PowerPlus website still presents nationwide distribution.

This is an editorial and buyer-fit decision, not a claim that deleting low-traffic pages will mechanically improve site-wide rankings. Google recommends keeping content useful and relevant to the site's audience, and using 404 or 410 for removed pages that have no equivalent replacement.

## Baseline and evidence

Reporting window: 27 August–23 September 2026, the last 28 complete days visible in RENOZ GA4. The GA4 Search Console collection supplies Google organic metrics. Direct Search Console property access was not available through the signed-in browser accounts or the local OAuth configuration, so URL inspection, index coverage and query export were not checked.

| Signal | Observation | Implication |
| --- | ---: | --- |
| Whole-site Google organic | 78 clicks / 4,318 impressions / 1.81% CTR | Small baseline; directional changes need weeks, not days. |
| Visible organic query rows | 37 of 38 clicks were RENOZ brand or close misspellings | Non-brand discovery is the main growth problem. Google anonymizes some queries, so this is not a whole-site branded share. |
| `/insights` pages | 1 click / 639 impressions / 0.16% CTR | Visibility did not turn into buyer traffic. Retirement sacrifices one click in this window. |
| `/insights` GA4 page paths | 31 views, 28 users, six-second average engagement, zero key events | Nine views were an invalid slug; the valid China pages plus index had 22 views. |
| `/guides/renoz-vs-powerplus` | 0 clicks and 0 impressions in the filtered landing-page report | Existing page is too new or not yet visible enough to assess demand. |
| Search queries containing `powerplus` or `lead acid` | No rows in the visible query report | This is not proof of zero market demand; query reporting is incomplete and site visibility is early. |
| Top non-home guide | `/guides/off-grid-system-cost-wa`: 6 clicks / 491 impressions | WA decision content already attracts some organic attention. |

The live `robots.txt`, sitemap and PowerPlus page returned HTTP 200. The PowerPlus page had a self-referencing canonical and `index, follow` robots meta. PageSpeed Insights mobile lab run on the homepage scored 92 performance and 100 SEO, with 3.0-second LCP. CrUX did not provide origin field data, likely because traffic is below its reporting threshold. Technical speed is worth monitoring, but it does not explain the lack of non-brand searches on its own.

## Keyword and page map

| Intent | Primary page | Editorial angle |
| --- | --- | --- |
| `48V lead-acid battery replacement`, `off-grid lead acid to lithium WA` | `/guides/lead-acid-battery-replacement-wa` | Which existing equipment can stay, usable-kWh sizing and five commissioning checks. |
| `PowerPlus battery alternative WA`, `RENOZ vs PowerPlus` | `/guides/renoz-vs-powerplus` | Published module comparison plus written WA stock, support, installer and warranty commitments. |
| `SMA Sunny Island lithium replacement` | Lead-acid guide section, not a dedicated sales page yet | SMA supports selected 48V lithium batteries, but the published RENOZ LV datasheet does not list SMA. Require written exact-model approval before suggesting a RENOZ pairing. |

No public content claims PowerPlus has exited WA. The user reports its WA sales office closed and distribution moved to third-party logistics; this is a potentially useful sales prompt, but current PowerPlus public pages still advertise nationwide distributors. Ask buyers to compare actual delivery and support commitments instead of alleging a competitor's withdrawal.

## Product-claim blocker

The public RENOZ LV-5KWH100AH V2.0 datasheet dated 1 August 2025 says one to eight modules in a tower and up to two towers in a system. Many current site pages say eight or ten modules per tower. This inconsistency affects buyer trust and engineering accuracy across the site. Confirm whether a newer approved ten-module specification exists before a site-wide correction. The new retrofit guide avoids a ten-module claim and bases its numerical examples on the published per-module usable capacity of 4.61 kWh.

## Measurement plan

Use this deployment date as the intervention marker. At four and eight weeks, compare Search Console page-level impressions, clicks and query clusters for the new retrofit page and PowerPlus page. Separately review GA4 organic engaged sessions and `generate_lead` events for those landing pages, then inspect actual inquiry quality: inverter model supplied, site in serviceable WA geography, system size and intended replacement date. Do not infer lead quality from click-through rate alone. Record any meaningful changes to internal links or page titles so the comparison is interpretable.

The new guide and desk retirement are implemented locally as of this audit; they are not yet live until deployed. Existing site content and other agents' uncommitted work were preserved.

## Query-led expansion — 90-day check

The linked GA4 Search Console reports for 26 June–23 September 2026 show 265 organic clicks and 10,078 impressions by landing page, but only 150 clicks in visible query rows. Search Console anonymises some queries; the query rows are a directional sample, not a complete account of search demand. Of those 150 visible query clicks, 146 came from RENOZ brand terms or close misspellings. No visible row contained `lead acid` or `powerplus`. This baseline predates publication of the locally drafted lead-acid guide, so it cannot assess that guide's performance.

| Observed signal | 90-day result | Decision |
| --- | ---: | --- |
| `/guides/off-grid-system-cost-wa` | 491 impressions, 6 clicks; 5 active users, 5 engaged sessions and 3m 13s average engagement per active user | Extend the page with the cost and scope of replacing an existing battery bank before writing another cost page. |
| `/guides/battery-state-of-health` | 1,595 impressions, 5 clicks; 1 active user and no engaged sessions | Do not treat broad `SOH` visibility as qualified demand; many visible queries use the acronym in unrelated contexts. |
| Visible regional off-grid queries | 7 rows, 94 impressions, 0 clicks, including `off grid batteries geraldton` (44) | Check serviceability and real project proof before targeting the Geraldton/Midwest cluster. Avoid thin town pages. |
| Visible off-grid cost queries | 6 rows, 14 impressions, 0 clicks, including `full off grid solar system cost` and `how much does an off grid solar system cost?` | Keep the existing system-cost page as the general cost destination. |

The next editorial test should start one decision earlier than “48V lead-acid replacement”: **“Off-grid batteries not holding charge? Repair, replace the bank, or upgrade the system.”** This is a proposed page angle, not a claim of measured query volume. Its sections should answer buyer-language questions such as why the bank is flat by morning, why generator hours are rising, whether the fault is charging or storage, whether the inverter can stay, and what a bank-only replacement quote should include. A simple diagnosis-to-decision path should route readers to the existing battery-sizing and system-cost guides, then to the new lead-acid retrofit guide if that is their likely case. The enquiry should request battery age and chemistry, inverter model, major loads, generator hours and postcode so RENOZ can distinguish serviceable larger systems from small residential or vehicle-battery enquiries.

Keep `/guides/renoz-vs-powerplus` as a specific comparison for ready buyers, not the main traffic bet. Validate the symptom-led angle by checking its own page-level impressions, non-brand query themes, engaged organic sessions and qualified enquiries four and eight weeks after deployment. If it earns irrelevant domestic or automotive traffic, narrow the title and copy to existing WA off-grid farms and larger systems before creating more pages.

### Implementation on 24 September 2026

The symptom-led guide is now implemented locally at `/guides/off-grid-batteries-not-holding-charge-wa`, registered in the guide hub, rural links, sitemap-derived registry and LLM discovery files. It distinguishes charging, load and storage faults before presenting repair, battery-only replacement and broader upgrade as alternatives. The existing cost guide now has an itemised replacement-bank section without changing its established title or full-system price bands. The existing diesel-to-battery guide now answers the Geraldton query in its regional section and links to the diagnosis and running-cost paths. A separate Geraldton landing page was not created because the site has no published Geraldton project or confirmed postcode-level installer and service commitment; the guide asks buyers to confirm those details. The lead-acid and PowerPlus guides link back to the diagnostic path. The PowerPlus comparison's RENOZ expansion figures were brought into line with the published LV V2.0 datasheet (1–8 modules per tower; up to 2 towers), pending evidence of any newer approved configuration.

The added content, build and guide SEO tests have been checked locally. Publication and the four- and eight-week measurement windows begin only after deployment, not from this edit date.

Renox Technology is a separate competitor. Its [March 2026 diesel article](https://renox.tech/blog/diesel-has-hit-3-a-litre/) opens with a fuel-price hook and concrete farm loads. RENOZ's diesel-to-battery guide was strengthened with a more direct generator-hours opening and a twelve-month log-to-design checklist. It does not reuse Renox's undated-for-today $3/L premise or its percentage savings claim; those require current site-specific evidence.
