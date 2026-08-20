# Zuko Landing Site

Marketing site for **Zuko OS** — the business operating system for founders, freelancers,
consultants, and small teams. Next.js 16 (App Router) + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # serves on http://localhost:4320
npm run build    # production build (includes TypeScript checks)
npm start
```

## Design language

The site implements **Zuko OS design language v1** (August 2026): warm cream ground
(`#f3efe6`), ink typography, and flat accents sampled from the brand logo — teal, red, blue,
petrol — with WCAG-AA-adjusted text variants. Display type is **Archivo**, body/UI is
**Instrument Sans**, both self-hosted via `next/font` (no external font requests).

- All design tokens live in [`app/globals.css`](app/globals.css) (`@theme` block) — change
  colors there, not in components.
- The signed-off design canvas (source of truth for visuals) is a Claude artifact maintained
  alongside this repo; ask the design owner for the current link.

## Structure

- [`app/page.tsx`](app/page.tsx) — section order of the landing page (do not reorder casually:
  the page is SEO-indexed).
- [`app/components/sections/`](app/components/sections/) — one component per section. Product
  "snippets" inside them are deliberately **illustrative** (framed with dashed
  "From the product · illustrative data" mats, `aria-hidden` sample data) — they are marketing
  gems, not live app screenshots.
- [`app/waitlist`](app/waitlist/page.tsx) / [`app/demo`](app/demo/page.tsx) — conversion pages
  (forms post to `app/api/waitlist` and `app/api/demo`).
- `app/privacy`, `app/terms`, `app/cookies` — legal pages.

## Content rules

- Every product capability claimed on the page was verified against the actual product
  codebases (main app, form builder, timezone planner) in August 2026 — keep new claims
  grounded the same way, and respect the guardrail language ("Zuko drafts. You approve.").
- Animations are calm loops: play once, hold several seconds, refresh; everything stills
  under `prefers-reduced-motion`, and no content is ever hidden behind a scroll reveal
  (reveals are fail-open enhancements).

## Validation

`npm run build` is the release gate. The repo also carries a Sentry evidence ledger under
`.sentry/` (gitignored) when validated through the owner's Sentry tooling.
