---
name: renoz-demand-research
description: Validate RENOZ advertising angles from current Australian search behaviour, customer language, community questions, and competitor positioning. Use before planning or producing ads when the buyer intent, hook, offer, or funnel stage is not already supported by evidence.
---

# RENOZ Demand Research

Find the questions prospective buyers are already trying to answer. Turn those questions into evidence-backed advertising angles. Do not brainstorm hooks before collecting evidence.

## Invoke

- `$renoz-demand-research search <market>` — investigate current search language and SERP intent.
- `$renoz-demand-research angles <research-directory>` — convert collected evidence into a ranked angle bank.
- `$renoz-demand-research refresh <research-directory>` — repeat mutable searches, date the new evidence, and show what changed.

Default market: property owners and operators researching residential or rural off-grid power systems in Western Australia.

## Sources of evidence

Use at least three evidence types when they are publicly available:

1. Australian Google Autocomplete suggestions for seed, modifier, and question queries;
2. current Australian search results, including result titles, page types, local results, and related questions;
3. verbatim public buyer questions from Australian forums, communities, reviews, or video comments;
4. competitor ads or landing pages for positioning evidence only; and
5. first-party RENOZ search, enquiry, and CRM exports when supplied.

Autocomplete and search results are qualitative demand signals. They do not establish monthly volume, difficulty, conversion rate, or commercial value. Never invent those values. Keep attention signals separate from buying signals, and label competitor repetition as observed positioning rather than proof of performance.

## Research method

1. Define the buyer, geography, system type, and commercial exclusions.
2. Start with category seeds, then expand into cost, sizing, comparison, package, installer, location, generator, technical, risk, and quote modifiers.
3. Remove collisions such as caravans, camping power stations, water pumps, DIY-only systems, and other markets unless the campaign serves them.
4. Inspect representative live results for each retained cluster. Classify search intent from the results actually shown, not the wording alone.
5. Capture customer language exactly enough to preserve the question, concern, load, or decision. Avoid treating anonymous advice as technical fact.
6. Cluster queries by the decision they express. A cluster is useful only when it implies a distinct message, offer, destination, or funnel job.
7. Rank angles by evidence breadth, buyer proximity, RENOZ fit, claim safety, and creative usefulness. Use `high`, `medium`, or `low`; do not create fake numerical precision.
8. Write the implication for Meta: the search question becomes the hook, while geography and rural context become targeting, proof, and imagery where appropriate.

## Required outputs

Create `marketing/research/<market>/<yyyy-mm-dd>/` from the templates in `assets/research-pack/`:

- `RESEARCH-SUMMARY.md` — scope, method, findings, limitations, and campaign implications;
- `QUERY-CLUSTERS.csv` — cleaned query observations grouped by decision and intent;
- `EVIDENCE.csv` — every material observation with source, date, geography, and evidence type; and
- `ANGLE-BANK.md` — ranked, usable angles with hook, funnel job, offer, proof, destination, and disqualifiers.

Every selected angle must cite at least two observations, including one search observation. An angle without evidence is a hypothesis and must remain outside the production queue.

## Handoff

Pass the research directory to `$renoz-campaign-planning` for channel and funnel design or `$renoz-ad-creative batch <research-directory>` for finished creative. Production should use only angles marked `ready`.

Research does not authorise ad publication, spend, outreach, or the use of unsupported commercial claims.
