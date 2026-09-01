---
name: renoz-ad-creative
description: Produce finished RENOZ Energy advertising batches with platform-ready copy, generated or existing-image visuals, placement variants, previews, and an asset manifest. Use when the user asks to create, generate, revise, or batch-produce actual Meta, display, or paid-social ads rather than campaign strategy.
---

# RENOZ Ad Creative

Create the ads. Do not stop at a strategy, mood board, prompt list, or creative brief. Do not create ads merely to fill a concept count.

The default job is a three-concept Meta ad batch for qualified off-grid sales leads in Western Australia. Use existing RENOZ product and case-study evidence plus the built-in image generation tool.

## Invoke

- `$renoz-ad-creative batch <research-directory>` — create a complete new batch from evidence-backed angles.
- `$renoz-ad-creative image <concept>` — produce one finished ad concept and placement variants.
- `$renoz-ad-creative revise <asset>` — inspect an existing output and make the requested visual or copy change.

When the user asks for actual ads, generate the assets in the same turn. Do not return instructions telling them how to generate the ads themselves.

## Require buyer evidence

Before choosing an angle, read a current `marketing/research/<market>/<date>/ANGLE-BANK.md`. If none exists, or if the requested angle is not supported, run `$renoz-demand-research search <market>` first.

Every produced concept must name its buyer question and supporting evidence IDs. Search terms and customer questions determine the hook and funnel job. Geography, property type, and rural context may shape targeting and imagery without being presented as high-volume search language.

Do not infer keyword volume from Autocomplete, ad performance from competitor repetition, or buying intent from engagement alone.

## Load the brand and evidence

Read `PRODUCT.md`, `src/data/product-catalog.ts`, `src/routes/products/rural.tsx`, the relevant guide or case study, and inspect usable files under `public/images/`. Treat public project assets as available to the project unless a nearby record says otherwise.

For every material claim, keep the exact source path. Do not add savings, payback, rebate, reliability, certification, Australian-made, superiority, or customer-outcome claims that the source does not establish.

## Batch selection

If the user does not specify the creative direction, select up to three `ready` angles from the evidence bank. They must represent genuinely different buyer decisions, not cosmetic rewrites. Suitable categories may include:

1. **Sizing and project fit** — what the property needs and which inputs determine it.
2. **System architecture** — how solar, battery, inverter, loads, and generator backup fit together.
3. **Cost or quote readiness** — what information is required for a meaningful scope without promising a price.
4. **Proof** — a real, permissioned RENOZ product or installation image tied to one of the validated questions.

Default buyer: WA rural property owner or operator actively considering an off-grid or fringe-of-grid project.

Default CTA: `Discuss Your Off-Grid Project`.

Default destination: the most specific live off-grid campaign or rural-product page. Record when a dedicated lead page is still required.

## Required outputs

Create `marketing/creative/<campaign>/<yyyy-mm-dd>-<batch>/` and complete the templates from `assets/ad-batch/`:

- `CREATIVE-BRIEF.md` — one-page evidence and production record;
- `ADS.csv` — finished primary text, headline, description, CTA, visual path, destination, hypothesis, and claim source;
- `ASSET-MANIFEST.csv` — every source, generated output, placement, dimensions, generation prompt, and disclosure;
- `PREVIEW.md` — all final ads displayed with their exact platform copy; and
- `images/` — the actual final visual files.

No row may contain `TBD`, placeholder copy, a prompt instead of an image, or a path that does not exist.

## Produce the visuals

Use the built-in image generation tool for generated raster advertising. Follow the `$imagegen` built-in workflow:

1. Inspect every local reference or edit target first.
2. Generate one distinct asset per prompt; do not ask for unrelated concepts in one image.
3. Save every selected project asset into the batch `images/` directory with a stable concept and placement filename.
4. Inspect each output for product distortion, false installation details, text errors, logos, layout, and unintended claims.
5. Make a targeted revision when a defect is visible.

Use exact RENOZ product imagery as a reference when the battery must appear. Preserve product geometry and brand marks. If preservation is not good enough, use the untouched product or case-study image instead of a fabricated product depiction.

Generated lifestyle scenes must not be described as real RENOZ projects. Put disclosure `AI-generated illustrative scene` in the manifest. Do not place essential copy inside the generated bitmap when exact typography can be supplied by the platform; if in-image text is requested, verify it character by character.

Create at least:

- 4:5 feed visual, designed for a 1080 × 1350 crop; and
- 9:16 Story/Reel visual, designed for a 1080 × 1920 crop with interface-safe space.

When exact platform specifications could have changed, verify them against current official platform documentation before final production.

## Write the ads

Each concept requires:

- named audience and funnel job;
- buyer question and supporting evidence IDs;
- one-sentence test hypothesis;
- primary text that can be pasted into Ads Manager;
- headline, description, CTA, and destination;
- 4:5 and 9:16 visual files;
- visual alt text;
- claim source; and
- the single variable that distinguishes it from its control.

Write plainly for a considered technical purchase. Keep the hook specific to the property decision. Do not score copy with invented 1–10 ratings; explain only a real defect or test rationale.

## Finish

Open `PREVIEW.md` and the final images for the user. Report the saved batch directory and the three concepts. The task is incomplete if only briefs, prompts, or strategy exist.

Ad creation does not authorize publication or spend. A separate explicit request is required to upload or launch.
