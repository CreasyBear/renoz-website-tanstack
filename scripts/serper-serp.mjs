#!/usr/bin/env bun
/**
 * Page-one Google SERP extraction via Serper.dev.
 * Used by the RENOZ AI-referral "best X for Y" daily pipeline:
 *   find bottom-funnel keyword -> extract page one -> write post -> publish.
 *
 * Usage:
 *   SERPER_API_KEY=... bun scripts/serper-serp.mjs "best off grid battery australia" "best 48v battery system australia" [--gl au] [--hl en] [--num 10] [--csv out.csv]
 *
 * Output: one NDJSON row per query (keys: q, gl, hl, num, extracted_at, top(10)
 * rows with position/title/link/snippet/date, plus peopleAlsoAsk[] and relatedSearches[]).
 * With --csv, also write a flat CSV (q,position,title,link,snippet,date).
 *
 * Requires SERPER_API_KEY. Exit 1 with a clear message if absent — the playbook
 * falls back to the harness web search when no key is available.
 */

const KEY = process.env.SERPER_API_KEY;
if (!KEY) {
  console.error("serper-serp: SERPER_API_KEY not set (add key to .env / env to enable exact Google SERP extraction; harness web_search is the fallback).");
  process.exit(1);
}

if (queries.length === 0) {
  console.error("serper-serp: pass at least one query.");
  process.exit(1);
}

async function extract(q) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ q, gl: opts.gl, hl: opts.hl, num: Number(opts.num) }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Serper ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  const top = (data.organic ?? [])
    .slice(0, Number(opts.num))
    .map((r) => ({
      position: r.position,
      title: r.title ?? "",
      link: r.link ?? "",
      snippet: r.snippet ?? "",
      date: r.date ?? null,
    }));
  return {
    q,
    gl: opts.gl,
    hl: opts.hl,
    num: Number(opts.num),
    extracted_at: new Date().toISOString(),
    top,
    peopleAlsoAsk: (data.peopleAlsoAsk ?? []).map((p) => p.question ?? p.title ?? ""),
    relatedSearches: (data.relatedSearches ?? []).map((r) => r.query ?? ""),
  };
}

const rows = [];
for (const q of queries) {
  try {
    rows.push(await extract(q));
  } catch (err) {
    console.error(`serper-serp: failed for "${q}": ${err.message}`);
    process.exitCode = 1;
  }
}

for (const row of rows) console.log(JSON.stringify(row));

if (opts.csv) {
  const lines = ["q,position,title,link,snippet,date"];
  for (const row of rows) {
    for (const r of row.top) {
      const esc = (s) => `"${String(s ?? "").replaceAll('"', '""')}"`;
      lines.push([row.q, r.position, esc(r.title), esc(r.link), esc(r.snippet), r.date ?? ""].join(","));
    }
  }
  await Bun.write(opts.csv, lines.join("\n") + "\n");
  console.error(`serper-serp: wrote ${opts.csv}`);
}