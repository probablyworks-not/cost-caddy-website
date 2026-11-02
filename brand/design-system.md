# Cost Caddy — shared website and app design system

Status: current v5 visual direction. Use this file as the shared brand specification for the marketing website and application. The website describes an F&B audit consultancy; application patterns below are adaptations of the same identity, not implemented product capabilities.

## Brand

Cost Caddy helps hospitality operators understand food and beverage costs and follow through on improvements. The interface should feel clear, precise, calm, and practical. Use plain terms: food cost, stock, supplier bills, wastage, staff meals, and audit actions.

## Logo

- Full horizontal logo: [cost-caddy-logo.svg](cost-caddy-logo.svg).
- Short symbol: [cost-caddy-symbol.svg](cost-caddy-symbol.svg).
- Symbol: a white plate and two utensil strokes on a cobalt rounded square. No tick mark.
- Wordmark: lowercase `costcaddy`, Space Grotesk 600. `cost` uses #17243A; `caddy` uses #2563EB.
- Full lockup uses a gap of approximately 10px at a 36px symbol size.
- Recommended full-logo symbol size: 36px desktop, 29px mobile. Wordmark: 29px desktop, 24px mobile; tracking approximately -0.045em.
- Standalone symbol: 24–40px in app chrome; 16–32px favicon. Preserve its proportions and internal padding.
- Keep clear space of at least one-quarter of the symbol width around the lockup. Do not stretch, rotate, add effects, or recolour individual strokes.
- Use the full wordmark for headers, login, reports, and first impressions. Use the short symbol for a collapsed sidebar, favicon, or compact navigation.
- SVG symbol is self-contained. Full SVG includes live text and a Google Fonts import: offline SVG viewers may substitute Arial. For identical rendering in exports, embed an approved local font or convert the wordmark text to outlines. The website uses live HTML text with the font loaded in CSS.

## Typography

### Families

| Role | Family | Weights | Fallback |
| --- | --- | --- | --- |
| Display, headings, navigation, buttons, logo | Space Grotesk | 400, 500, 600; 700 only when needed | Arial, sans-serif |
| Body, labels, metadata, helper text, report details | IBM Plex Mono | 400, 500 | ui-monospace, monospace |

Google Fonts CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

Place imports before all other CSS rules. For an app, prefer bundled WOFF2 assets and `font-display: swap` so typography does not depend on a third-party request. Font files are not bundled in this package.

### Scale

| Style | Family | Size / line height | Weight | Tracking |
| --- | --- | --- | --- | --- |
| Marketing hero | Space Grotesk | clamp(42px, 4.7vw, 65px) / 1.1 | 400 | -0.04em |
| Page heading | Space Grotesk | 32px / 1.15 | 400 | -0.03em |
| Section heading | Space Grotesk | 42px desktop, 35px mobile / 1.1 | 400 | -0.035em |
| Card heading | Space Grotesk | 23px / 1.2 | 400 | -0.025em |
| App panel heading | Space Grotesk | 20px / 1.3 | 500 | -0.02em |
| Body | IBM Plex Mono | 14px / 1.85 | 400 | normal |
| Dense supporting copy | IBM Plex Mono | 12px / 1.75 | 400 | normal |
| Form label / table header | IBM Plex Mono | 12px / 1.5 | 500 | normal |
| Metadata | IBM Plex Mono | 11px / 1.6 | 400 | normal |
| Button / navigation | Space Grotesk | 13–14px / 1.3 | 400–500 | normal |
| Metric | Space Grotesk | 28–36px / 1.1 | 400–500 | -0.03em |

The marketing site uses some 8–10px decorative labels. Do not carry these sizes into essential app controls, table data, or instructions. Use at least 12px for functional text and 14px for primary body content. Prefer tabular numerals for comparable values.

## Colour

| Token | Hex | Usage |
| --- | --- | --- |
| brand | #2563EB | Primary actions, selected states, wordmark accent |
| brand-hover | #3B82F6 | Hover on blue actions |
| ink | #17243A | Logo dark text, strong app text |
| text | #15191F | Main page text |
| text-secondary | #4D4D4D | Readable supporting copy |
| text-muted | #737985 | Secondary metadata; verify contrast at small sizes |
| white | #FFFFFF | Main canvas, cards |
| surface-subtle | #F8FAFF | Section backgrounds |
| surface-blue | #EDF3FF | Selected rows and example graphics |
| border | #E1E9F6 | Card and panel edges |
| border-strong | #CBD5E1 | Inputs and useful boundaries |
| focus | #60A5FA | Visible focus outline |
| blue-light | #DBEAFE | Secondary charts and graphics |
| blue-mid | #93C5FD | Secondary data series |

App semantic additions (recommended, rather than established marketing tokens): success #166534 on #F0FDF4; warning #92400E on #FFFBEB; error #B91C1C on #FEF2F2. Pair colour with labels or icons. Never use colour alone to convey an audit status. Very pale marketing labels are decorative; increase contrast for essential app information. Target WCAG AA text contrast.

## Layout and spacing

- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64px.
- Marketing content width: approximately 1120–1200px; horizontal padding 6–7% desktop, 6% mobile.
- Compact marketing section padding: 55px desktop, 40px mobile.
- App content padding: 24–32px desktop, 16px mobile. Use a 240px expanded sidebar and approximately 64px collapsed sidebar where appropriate.
- Grid gaps: 20–28px. Service cards use two columns on desktop and one on mobile.
- Major mobile breakpoint: 700px. Allow intermediate two-column layouts only when their content remains readable.
- Use generous space around headings; avoid stacking multiple oversized introductory sections.

## Shape, borders and depth

- Buttons: 4px radius. This is an explicit brand preference; avoid pill-shaped primary buttons.
- Cards: 8px radius, 1px border, white fill.
- Inputs: 4–6px radius, 1px border.
- Status chips: 3–4px radius; restrained tinted backgrounds.
- Symbol retains its own rounded-square geometry.
- Prefer border and surface contrast over elevation. Optional hover shadow: `0 9px 30px rgb(40 92 212 / 3%)`.
- Avoid strong gradients, glass effects, or decorative motion in task-heavy app screens.

## Components

### Buttons

Primary: blue fill, white text, Space Grotesk 13–14px, 4px radius, approximately 44px high. Website header may use a more compact variant. App touch targets should be at least 44px. Hover uses brand-hover. Disabled buttons use a clearly distinct neutral surface and disabled semantics. Keep a 3px visible focus outline with 4px offset.

Secondary: white or transparent fill, blue or ink text, border when needed. Text-only links are for navigation or lower-priority actions. Keep primary labels concrete: “Book an audit”, “Assign action”, “Save review”.

### Cards

White surface, border token, 8px radius, 24px padding. Heading followed by short copy and a single relevant visual or task. Avoid repeating an identical title in a label and heading. Reports and findings should expose their supporting evidence.

### Forms

IBM Plex Mono labels at 12px, readable input text at 14px. Inputs use white fill and border-strong. Label every field; keep placeholders supplementary. Show errors beside their fields with text, not just red borders. Preserve entered data after validation failure.

### Tables and numbers

Use IBM Plex Mono for tabular data, at least 12–13px; Space Grotesk for table titles and large metrics. Align numbers right; show currency and units. Use tabular numerals and consistent decimal precision. Distinguish actual use, explained use, and variance. A variance is a review prompt, not a conclusion of theft or loss.

### Audit status and actions

Suggested labels: Needs review, Assigned, In progress, Ready for verification, Closed. Each action should show a responsible person, due date where applicable, supporting evidence, and verification state. Do not show success merely because a request was attempted.

### Dialogs

White surface, 8px radius, subtle border, approximately 500px wide with responsive 90vw maximum. Support keyboard focus, Escape dismissal, explicit close button, and accessible heading. Current website enquiries remain dummy; do not imply messages are sent.

## Graphics and motion

- Use native SVG/CSS illustrations for recipes, supplier invoices, stock movements, and audit steps.
- Blue-only graphics with pale supporting tones; keep operational data readable.
- Label illustrative numbers; do not present examples as client results.
- Scroll entrance: opacity and 12–18px vertical translation over 600–800ms, once per item.
- Detail stagger: 150–200ms. Chart/bar reveal: 900–1200ms.
- Hover transitions: 150–250ms. Avoid layout shifts.
- App motion should explain a state change or relationship; avoid looping decoration near working tables.
- Honour `prefers-reduced-motion: reduce`: remove entrance animations, looping motion and smooth scrolling while keeping all content visible.

## Starter CSS tokens

```css
:root {
  --font-display: 'Space Grotesk', Arial, sans-serif;
  --font-body: 'IBM Plex Mono', ui-monospace, monospace;
  --brand: #2563eb;
  --brand-hover: #3b82f6;
  --ink: #17243a;
  --text: #15191f;
  --text-secondary: #4d4d4d;
  --text-muted: #737985;
  --canvas: #fff;
  --surface-subtle: #f8faff;
  --surface-blue: #edf3ff;
  --border: #e1e9f6;
  --border-strong: #cbd5e1;
  --focus: #60a5fa;
  --radius-control: 4px;
  --radius-card: 8px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
}
body { font-family: var(--font-body); color: var(--text); }
h1, h2, h3, button, nav { font-family: var(--font-display); }
.brand-wordmark { font-family: var(--font-display); font-weight: 600; }
:focus-visible { outline: 3px solid var(--focus); outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

## Assets and implementation references

- `brand/cost-caddy-logo.svg`: full logo, live font-dependent wordmark.
- `brand/cost-caddy-symbol.svg`: short logo, self-contained vector.
- `design-concept/v5/index.html`: current marketing content and logo placement.
- `design-concept/v5/consultancy.css`: final website overrides and current typography.
- `design-concept/v5/style.css`: base page styles.

Keep the app's brand consistent with this specification, while prioritising readable text, clear contrast, and task efficiency over copying every marketing-page measurement.
