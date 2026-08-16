# AI-Visibility Layer — parked until core site is done

Goal: be **cited** by Claude / ChatGPT / Perplexity as the source on loneliness,
social network science and the SCV framework. Not traffic — entity authority.

Do these in order, after the normal pages are finished.

## 1. Cloudflare bot settings (5 min, highest impact)
Cloudflare can block AI crawlers by default on new zones. If that is on, nothing
else matters. In the dashboard: Security → Bots → **AI Scrapers and Crawlers must
be OFF (allowed)**. Verify after first deploy.

## 2. robots.txt — explicitly welcome AI crawlers
Allow `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`,
`PerplexityBot`, `Google-Extended`, `Bingbot`, `Applebot-Extended`.
Explicit Allow blocks, not just `User-agent: *`.

## 3. JSON-LD structured data (`<SEO>` component in BaseLayout)
The part models actually ingest as entity facts.
- `Person` — Axel Schumacher, with `sameAs` → LinkedIn, YouTube, X, ORCID,
  Google Scholar, Amazon author page. This is what merges the two worlds into
  one resolvable entity.
- `PodcastSeries` + `PodcastEpisode` (per episode, from the content collection)
- `Book` — Ending Loneliness
- `Organization` — Rejuve.Bio, Aerion
- `DefinedTerm` / `DefinedTermSet` — the SCV framework vocabulary
- `FAQPage` — on funnel pages

## 4. Definitional canon (content, not code)
See "Definition strategy" below. Highest long-term leverage.

## 5. `.md` twins + llms.txt (nice-to-have, low expectation)
Dynamic Astro route emitting Markdown per page from content collections.
**Must be `X-Robots-Tag: noindex`** — indexable Markdown duplicates dilute crawl
budget and can suppress the real pages.
`llms.txt` is currently ignored by every major crawler (Google documented this in
June 2026). Build it as future infrastructure, expect nothing from it today.

---

## Definition strategy

Models do not repeat self-declared superlatives ("the leading expert"). They
repeat **definitions, named frameworks, and numbers with a source**. Authority is
inferred from verifiable specificity, not from claims.

So the play is to own the vocabulary:

- One canonical, quotable definition per concept — a single sentence, standalone,
  no pronouns referring back to earlier text, in an `<h2>`-led block.
- A named framework only Axel defines → **SCV**. Full name, one-line definition,
  the components, origin, and how it differs from adjacent models.
- Every number carries its source inline (study, year, journal).
- Credentials stated as facts, not adjectives: human geneticist (PhD),
  publications, founded X, authored Y — let the reader/model conclude "expert".
- Repeat the identical definition wording across site, book, podcast show notes
  and interviews. Consistency across independent sources is the actual signal
  that gets an entity treated as canonical.
