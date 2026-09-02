# Pre-solar pain content plan: guides to win the moment before solar

- Date: 2026-09-02
- Market: WA regional property owners at two pre-solar moments: (A) grid-connection quote shock, (B) diesel tolerance
- Thesis: RENOZ cannot win brand/category queries. It wins PAIN queries with cost evidence, decision framing, and community language.
- Method sources (adopted, not handrolled): claude-blog (templates, delivery gates, link doctrine), geo-seo-claude (passage citability, platform levers, entity schema), digital-marketing-pro (process, intent mapping, AI probes, pSEO gates), goose-skills/seo (gap-matrix process skeleton, link ladder, refresh cadence). RENOZ-owned layers (citation seam, scorer gates, llms.txt, sitemap, GSC) are NOT re-solved here.

## Target → guide matrix

| # | Target query cluster | Guide | Template (claude-blog) | Intent | Funnel role | Vacuum verdict |
|---|---|---|---|---|---|---|
| 1 | cost to connect electricity rural property wa; western power line extension cost per km | **Cost to run power to your block in WA: grid connection vs going off-grid** | how-to-guide + decision table | commercial investigation | Moment A decision layer | UNCONTESTED above gov fee pages; RENOZ already cited |
| 2 | stand alone power system wa; SPS quotes | **Stand alone power systems in WA: how SPS works, what it costs** | pillar-page | commercial | Moment A terminology owner | Contested-but-beatable (only query where installers rank) |
| 3 | is it worth going off grid wa; talk me out of going off grid | **Is it worth going off-grid in WA? An honest break-even** | comparison | informational→commercial | Moment A threshold | Contested-but-beatable; forums own human layer |
| 4 | generator fuel cost per day; diesel generator running costs per kwh australia | **What a diesel generator actually costs per day in WA** | data-research + calculator | informational | Moment B quantifier | UNCONTESTED (100% US content today) |
| 5 | how long can you run a generator continuously; minimise generator use; generator only in emergencies | **Living with a generator: run-time limits, costs, and the off-grid exit** | how-to-guide | informational | Moment B tolerance decay | UNCONTESTED for AU framing |
| 6 | generator vs solar battery farm (farm-scale, not utility) | **Generator vs solar + battery for your WA farm** | comparison | commercial | Moment B escape | Unopposed at farm scale (national content is utility-scale) |
| 7 | off grid power for shed wa | **Off-grid power for sheds and farm buildings in WA** | how-to-guide | commercial | Vacuum + entry product | TOTAL VACUUM (Washington State owns the SERP) |

Build order: 1 → 4 → 7 → 2 → 3 → 5 → 6. Rationale: page 1 carries the highest intent and reuses the most existing guide content; 4 and 7 are pure vacuums; 2 is the one contested term (needs the best evidence to enter); 3 and 5-6 follow once 1/4 exist to link to.

## Per-guide writing standard (merged method)

**Structure (claude-blog templates + RENOZ answer-first):**
- H1 = the pain question, verbatim phrasing from the vacuum map (use "cost to run power to…", never "no power to my block" — misroutes to outage maps)
- P1 answers the question in the first 60 words with numbers
- Key-takeaways box after intro
- Passage discipline (geo-seo-claude): every H2/H3 block 134–167 words, self-contained ("X is…" definitions, pronoun density low, stat-dense with named sources), 2–4-sentence paragraphs, tables for 3+ item comparisons, ordered lists for processes
- Question headings mirror People-Also-Ask phrasing (AIO lever)
- Word bands: decision/comparison guides 2,000–2,800 words; pillar (SPS) 2,500–4,000; calculator pages lighter but data-dense

**Language rules (from observed community phrasing):**
- Write "minimise generator use", "generator only in emergencies", "the overcast days problem", "worth it?", "talk me out of it" — NOT assumed phrases like "sick of the generator"
- WA-Australia explicit in every title + first paragraph; name towns (Wheatbelt, Great Southern, Perth Hills) and utilities (Western Power, Horizon) — the WA-name hijack by Washington State is the moat
- Terminology: use "stand alone power system (SPS)" alongside "off-grid" — SPS is the term that surfaces WA suppliers

**Evidence + claims:**
- Two sources per load-bearing claim; one proponent + one sceptic perspective (claude-blog research rubric)
- Anchor to: Western Power published fee schedule, CER off-grid rebate rule (>1 km OR >$30k connection cost), Whirlpool/Reddit posted figures (attributed as community figures), RENOZ case studies (Harvey), AU tier-1 authority links (3–8 outbound)
- Never restated product performance numbers; rebates per established claim boundaries; fire safety = layered risk reduction

**Links (claude-blog doctrine + goose-skills ladder):**
- Ladder: pain guide → MOFU guide (sizing, diesel-to-battery, SPS) → product/contact. Not the reverse.
- 2k-word guide = 5–7 contextual internal links; first 2–3 paragraphs weighted; anchors semantic (exact-match ≤10%); no "click here"; bidirectional (edit the target page to link back); no orphans, no dead ends

**Schema + entity (geo-seo-claude):**
- Article JSON-LD server-rendered with datePublished + dateModified visible
- `speakable` property on answer blocks; Person schema for Simon Chan (jobTitle, worksFor, sameAs → LinkedIn, YouTube); Organization `knowsAbout` array (stand alone power systems, off-grid solar WA, LiFePO4, grid connection costs); `@id` + `@graph` nesting
- FAQPage markup still added for AI parsing despite deprecated rich results; HowTo schema deprecated — do not use

## Delivery gates (blocking, adapted from claude-blog 5-gate)

1. Evidence gate: every load-bearing claim has a named source in the file (existing claims convention)
2. Scorer gate: `bun run score:guide <slug>` — AI Overview ≥60, ChatGPT ≥72, Perplexity ≥70, total ≥68 (never weaken)
3. Link gate: all internal links resolve; ≥5 contextual internal links; bidirectional backlinks added
4. Claims review: rebate/SPS statements match CHBP/WARBS wording; no fixed rebate rates
5. Human review before publish (goose-skills checkpoint)

## Post-publish method (digital-marketing-pro + goose-skills)

- Intent → format mapping recorded per guide in this matrix; a guide not on the matrix needs a reason
- AI-surface probes quarterly: run 10–25 pain queries through ChatGPT/Perplexity/AI Overviews/Gemini, check who's cited and for what claim; reconcile against GSC AI Performance Report
- Bing Webmaster Tools + Bing index coverage check (ChatGPT lever), Wikidata entity for RENOZ with 5+ properties (ChatGPT entity lever), Reddit/Whirlpool answer motion (Perplexity lever — community validation is the biggest untapped platform lever)
- Refresh: monthly cadence check; update only on material change, never date-bump; decay triage at 20%+ QoQ GSC decline; core-update triage = wait rollout + 7–14 days, segment by page group
- pSEO gates if application × region pages ever get built: <30% unique content = hard stop; every page anchored to a real install record; standalone-value test
- Cannibalization: keyword-overlap check before publishing any new guide against existing 40+ URLs; GSC query+page data gates any merge

## What this plan deliberately does NOT do

- No brand/category attack pages ("best battery" — confirmed absent from all pain SERPs; unwinnable and unnecessary)
- No generic keyword-volume chasing (no Ahrefs-style fabrication; vacuum strength × intent × citability is the priority function)
- No pSEO at scale until wave-1 evidence proves the format
