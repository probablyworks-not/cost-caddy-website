# Cost Caddy website

F&B audit and cost-control consultancy website, with earlier design explorations and brand assets.

## Run locally

```sh
python3 -m http.server 4173 --directory design-concept
```

Open http://localhost:4173/v5/ for the current website. The root and `/v2/` through `/v6/` retain earlier design explorations; **v5 is the current consultancy site**.

## Files

- `design-concept/v5/`: current website (static HTML, CSS, JavaScript).
- `brand/design-system.md`: shared typography, colours, components and app guidance.
- `brand/`: full and short SVG logos.
- `design-concept/logos/`: logo exploration previews.
- `design-thought-process-marketing-page.md`: positioning and design history.

Consultation buttons link to https://calendar.app.google/Rc62FtC7kDwys5Gr6.

Fonts load from Google Fonts. No installation or build step is required. The website includes illustrative graphics; reference-site testimonials are marked as draft pending verification.

## Vercel deployment

The repository-root `vercel.json` builds the current v5 consultancy website into `dist/` and serves it at `/`. Earlier design explorations are not included in this deployment. `/v5/` redirects to the homepage.

Use the repository root as Vercel's Root Directory (leave blank), with Framework Preset **Other**. Build command and Output Directory come from `vercel.json`. Pushes to `main` trigger redeployment when the GitHub integration is connected.

To check the production files locally:

```sh
node scripts/build.mjs
python3 -m http.server 4174 --directory dist
```
