#!/usr/bin/env bun
/**
 * Score a guide's AI-citation readiness.
 *
 * Usage:
 *   bun run score:guide -- <slug>
 *   bun scripts/ai-citation-score.mjs <slug>
 *
 * Prints JSON: { slug, engines, total }.
 */
import { getGuide } from "../src/data/guides.ts";
import { scoreGuide } from "../src/lib/ai-citation-score.ts";

const arg = process.argv[2] === "--" ? process.argv[3] : process.argv[2];

if (!arg) {
	console.error("usage: bun run score:guide -- <slug>");
	process.exit(1);
}

const guide = getGuide(arg);
if (!guide) {
	console.error(`unknown guide slug: ${arg}`);
	process.exit(1);
}

const result = scoreGuide(guide);
console.log(
	JSON.stringify(
		{
			slug: result.slug,
			engines: {
				ai_overview: result.engines.ai_overview.score,
				perplexity: result.engines.perplexity.score,
				chatgpt: result.engines.chatgpt.score,
			},
			total: result.overall,
		},
		null,
		2,
	),
);