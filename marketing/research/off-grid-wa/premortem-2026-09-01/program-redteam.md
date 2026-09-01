# Premortem: why RENOZ fails to produce one installer-accepted off-grid lead

Date: 2026-09-01  
Objective: generate a qualified regional WA off-grid project lead and pass it to an off-grid installer who accepts it.

## Bottom line

The first test is not “can ads produce enquiries?” It is:

> Can RENOZ route one real, financeable, serviceable project to a named installer who accepts responsibility for the next step?

Three failures can stop that outcome.

## 1. RENOZ and the installer mean different things by “qualified”

### Failure

RENOZ sends a person who is interested in off-grid power. The installer expects a project they can quote: a real site, inside their travel area, with a live trigger, decision authority, plausible funding and enough load information to justify contact.

The lead is rejected even though marketing calls it qualified.

### Early warning

- No installer has agreed to a written acceptance definition.
- The service area is “regional WA” rather than named postcodes or travel radii.
- The installer must discover the location, application and timing after receiving the lead.
- RENOZ counts a form fill while the installer counts only a scoped or quoteable project.
- A lead can be offered to several installers without a stated exclusivity period.

### Likely root cause

The ICP is defined by rural identity or interest instead of an installable job. “New rural build”, “generator-dependent property”, “weak grid” and “farm loads” are different work, capability and economics.

### Minimum-risk proof

Before spend, get one installer to sign off on this minimum record:

| Required field | Why the installer needs it |
|---|---|
| Exact postcode/location | Travel and serviceability |
| Property/application | Residential build, farm, workshop or other |
| Active trigger | Why the project exists now |
| Grid state | No grid, connection quote, weak grid or existing supply |
| Major loads | Initial technical fit; not a system design |
| Generator/solar status | Architecture and retrofit context |
| Timing | Live project versus future interest |
| Decision-maker | Authority to progress |
| Funding readiness | Ability to consider a complete system |
| Preferred contact route | Makes follow-up possible |

Also agree:

- accepted postcodes and excluded applications;
- weekly capacity;
- time allowed to accept or reject;
- rejection reasons;
- whether the lead is exclusive and for how long; and
- who owns the customer if the installer accepts.

**Pass condition:** the installer reviews five realistic sample records and would accept at least the records meeting the written rule without asking RENOZ to redefine the lead.

## 2. The buyer can afford a battery but not the complete project

### Failure

Pain-led advertising earns a response, but the buyer is anchored on affordable battery hardware. They later discover that an off-grid project also involves solar, inverter-charger, protection/switchboard work, generator integration, freight, travel, civil work, commissioning and support.

The buyer is technically relevant but not commercially ready, so the installer rejects the lead or loses it immediately after first contact.

### Early warning

- The first question is “how much is the battery?”
- Prospects disappear when the installer discusses complete-system scope.
- They want a small battery to solve a whole-property power problem.
- No one has analysed accepted and lost RENOZ/partner quotes by complete project cost.
- “Can they pay?” is postponed until after engineering effort.

### Likely root cause

Product affordability and solution affordability are treated as the same thing. Search interest in cost, sizing and packages shows that buyers are trying to understand the total decision; it does not prove they have the means or expectation to proceed. The current research explicitly provides no volume or conversion evidence.

### Minimum-risk proof

Use actual commercial history rather than public price claims:

1. Review 20 comparable quotes from RENOZ and one installer.
2. Record complete scope, accepted price, excluded work, funding path and loss reason.
3. Derive private budget-readiness bands for the selected segment.
4. Ask the buyer a neutral first-stage question: whether they are planning and funding a complete property power system, not purchasing a battery alone.
5. Make the ad and landing page say plainly that the battery is one part of a site-specific system.

Do not use an automated sizing or price result as engineering. Western Power says its own regional stand-alone systems are sized using consumption, site inspection, future plans, load timing, cloud behaviour and backup generation—evidence that a proper system cannot be reduced to a battery-price hook.[^wp-sps]

**Pass condition:** one installer confirms that the private funding/readiness question separates quoteable projects from component-price enquiries without requiring a public commercial claim.

## 3. The handoff destroys trust or dies before installer acceptance

### Failure

The buyer believes they are contacting RENOZ for a complete solution, then unexpectedly hears from an unfamiliar installer—or hears from nobody. The installer receives an incomplete or duplicate lead without clear consent, ownership or attribution. Neither party trusts the route.

This is the most likely way for a genuinely good lead to fail.

### Early warning

- The landing page does not state that RENOZ will route the enquiry to an installer.
- The buyer has not consented to their project and contact details being shared with that installer.
- RENOZ has no named installer at the moment of submission.
- Multiple installers contact the same buyer.
- The current generic form collects name, email, address/company and free text but not enough routing data.
- The site promises a response within 24 hours without a named owner or tested SLA.
- Installer outcome comes back informally, so RENOZ cannot tell whether the lead was accepted, contacted, quoted or lost.

### Likely root cause

The program is treated as advertising followed by a referral, rather than a two-sided service with a buyer promise and installer contract.

Regional connectivity adds friction: the 2024 Regional Telecommunications Review records the WA Government’s concern that public coverage maps can overstate actual experienced coverage. A long browser-only diagnostic can therefore lose a good on-site prospect.[^telecom]

### Minimum-risk proof

Dry-run the entire handoff before advertising:

1. Landing page states RENOZ’s role, the installer’s role, what information will be shared and what happens next.
2. Buyer gives explicit consent to share their details with a named or clearly described installer network.
3. One immutable lead ID carries campaign, angle, postcode and consent record into the installer handoff.
4. One installer receives the lead exclusively for an agreed response window.
5. Installer must mark `accepted` or a standard rejection reason within the SLA.
6. Buyer receives one acknowledgement naming the next responsible party.
7. Phone is offered alongside the short form, and call source is captured.
8. Installer reports `contacted`, `scoped`, `quoted`, `won` or `lost` against the same lead ID.

Google Ads explicitly distinguishes qualified and converted leads and supports returning offline CRM outcomes; the same discipline is required here even if Meta is the first traffic source.[^google-offline]

**Pass condition:** a test lead completes the journey from campaign URL/form or phone → RENOZ → one installer → acceptance/rejection → returned disposition, with consent, timestamps and source intact.

## The first experiment

Do not test a trigger portfolio yet. Test one cell:

- one trigger;
- one service area;
- one accepting installer;
- one complete-system expectation;
- one short fit form plus phone route; and
- one acceptance SLA.

The only primary success event is `installer_accepted_lead`.

Raw enquiry, guide download, CTR and platform CPL are diagnostic only. If RENOZ cannot produce one accepted lead within the predetermined loss cap, the rejection reasons determine the next change:

- wrong person/project → change ICP or message;
- outside coverage/capability → change service cell;
- cannot fund complete scope → change expectation or segment;
- incomplete/slow/duplicate handoff → fix routing; or
- insufficient local intent → change channel or geography.

## Sources

- [`2026-09-01/RESEARCH-SUMMARY.md`](../2026-09-01/RESEARCH-SUMMARY.md) — qualitative search and buyer-question findings; explicitly not volume data.
- [`src/routes/contact.tsx`](../../../../src/routes/contact.tsx) — current generic form and 24-hour response message.
- [`src/routes/partners.tsx`](../../../../src/routes/partners.tsx) — current “we design & support; you install” and lead-passing promise.

[^wp-sps]: [Western Power — Stand-alone Power Systems](https://www.westernpower.com.au/resources-education/our-network-the-grid/grid-technology/stand-alone-power-system/). Western Power describes regional SPS as solar, battery and backup generation and says sizing uses consumption, site inspection, approved future plans and load timing.

[^telecom]: [Australian Government — 2024 Regional Telecommunications Review](https://www.infrastructure.gov.au/sites/default/files/documents/2024-regional-telecommunications-review.pdf). The report records continuing regional connectivity issues and a WA Government submission that public mobile coverage maps can overstate experienced coverage.

[^google-offline]: [Google Ads Help — Offline conversion imports FAQs](https://support.google.com/google-ads/answer/10029210?hl=en). Google distinguishes qualified and converted lead outcomes and recommends returning offline lead outcomes for measurement.
