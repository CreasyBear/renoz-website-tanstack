---
name: renoz-meta-ads
description: Create ready-to-use Meta Ads launch packs and performance decisions for RENOZ Energy's WA off-grid lead program. Use for Facebook or Instagram campaign setup, tracking, budgets, pacing, and review; use renoz-ad-creative when the main job is producing ad copy or visuals.
---

# RENOZ Meta Ads

Produce working campaign artifacts, not a marketing essay. The default outcome is sales-accepted off-grid leads from serviceable Western Australian locations.

## Invoke

- `$renoz-meta-ads bootstrap` — create the first campaign from no current Meta program.
- `$renoz-meta-ads review <exports>` — reconcile Meta delivery with website and CRM outcomes, then issue operating decisions.

If no mode is stated, use `bootstrap` when no program exists and `review` when performance files are supplied. Route requests whose primary deliverable is ad copy or images to `$renoz-ad-creative`.

## Load RENOZ context

Before asking questions, read `PRODUCT.md`, `src/data/product-catalog.ts`, `src/routes/products/rural.tsx`, relevant off-grid guides and case studies, the contact flow, and any existing campaign folder. Reuse confirmed facts and assets.

## Intake

Gather only missing decision inputs in one compact request:

1. test budget and duration;
2. serviceable WA locations and exclusions;
3. target qualified leads and the sales definition of qualified;
4. contribution per sale and qualified-lead-to-sale rate, if known;
5. sales owner, response-time commitment, and handling capacity;
6. Meta business, Page, Instagram, billing, domain, tracking, analytics, and CRM status; and
7. approved destination and offer.

Do not block useful planning on unknown economics. Label the unknown and make it a pre-spend decision.

## Bootstrap

When the user asks to build the program, create `marketing/campaigns/<yyyy-mm>-off-grid-wa-meta/` unless they provide another location. Copy and complete the files from `assets/meta-launch-pack/`:

- `CAMPAIGN.md` — build sheet, audience, budget, sales handoff, and rules;
- `UTMS.csv` — tagged URL for every ad supplied by the creative skill;
- `TRACKING.csv` — browser, server, analytics, form, and CRM event map;
- `LAUNCH-CHECKLIST.md` — blockers, owners, evidence, and approval status; and
- `DECISION-LOG.md` — registered hypothesis and later changes.

Use `scripts/campaign_math.py` whenever budget, qualified-lead target, economics, or pacing data is supplied. Use `scripts/utm_builder.py` for actual tagged URLs.

Keep the first program decision-sized: one buyer, one sales outcome, one prospecting ad set, and retargeting only if an addressable warm audience exists. Use the ad batch made by `$renoz-ad-creative`; reduce test cells when the budget cannot support them.

The destination must preserve the ad promise, identify campaign source, and collect enough off-grid fit information for sales: location, property or application, grid status, project timing, contact route, and the smallest useful set of system or load details.

## Review

Require date range, timezone, currency, attribution setting, Meta export, website conversions, CRM dispositions, and material change log. Reconcile:

```text
spend → landing-page visit → valid enquiry → sales-accepted lead → opportunity → win
```

Report one row per test cell with spend and the deepest reliable outcome. Issue exactly one decision: **keep**, **pause**, **change one variable**, **scale reversibly**, or **insufficient evidence**. CTR and platform CPL diagnose; they do not override qualified-lead and opportunity evidence.

## Completion gate

A launch pack is complete only when every ad has a destination and UTM, form and CRM source capture are mapped, test events have evidence, the sales SLA is named, and budget cap, maximum loss, review date, and stop rule are explicit. Assign owners to blockers.

Planning and file creation do not authorize account creation, tracking installation, audience upload, publication, launch, or spend changes. Get explicit approval immediately before those actions.

Read [sources.md](references/sources.md) only when provenance is relevant.
