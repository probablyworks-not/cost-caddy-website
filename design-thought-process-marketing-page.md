# Cost Caddy — marketing page design thought process

Status: first design brief and working copy, 24 October 2026. Cost Caddy is the working brand name. Product capabilities below are proposed scope, not a statement that they have shipped.

## Purpose and audience

Create a minimal, light-background marketing website for restaurant owners who see healthy sales but cannot explain shrinking margins. Secondary audiences are restaurant operators and F&B controllers. The initial conversion is a demo enquiry. The website introduces the software; it is separate from the auditor and client applications.

## Core positioning

**Your restaurant’s costs, explained.**

AI-enabled F&B control that connects purchases, consumption, billing, and audit findings—so owners can understand the gaps and follow through on fixes.

The narrative is: spot the difference → review the evidence → assign the action → verify the fix. This is a proposed positioning focus, not a claim that competitors lack those functions.

Lead with the owner's problem. Explain the operational mechanism. Show AI helping interpret evidence. Do not lead with an abstract AI promise or claim to prove theft, guarantee savings, or eliminate physical audits.

## Owner problems

| Owner question | Product response |
| --- | --- |
| Sales are healthy. Where is the profit? | Compare expected food and beverage cost with actual consumption. |
| What happened to the stock we purchased? | Account for sales, recorded waste, staff meals, complimentary consumption, and transfers. |
| Why is this dish becoming less profitable? | Track ingredient prices, recipe quantities, yields, and dish costs. |
| Are our supplier bills correct? | Review purchase orders, invoices, quantities, and price differences. |
| What is happening at billing? | Review available discounts, voids, complimentary bills, settlements, and modification records. |
| Why do audit issues keep coming back? | Assign responsibility, capture evidence, and track corrective action through closure. |

Use empathetic, concrete language. Avoid staff accusations, alarmist loss estimates, and unsupported industry statistics. Staff meals and complimentary items are legitimate non-sale consumption categories and should remain distinct from wastage.

## Competitor review

Public marketing-page review, not a hands-on product evaluation. Competitor outcomes are their claims and must not be reused as Cost Caddy evidence.

| Competitor | Public emphasis | Lesson |
| --- | --- | --- |
| MarketMan | Standardised recipes, ingredient costing, menu profitability, actual versus theoretical consumption | Recipe costing and variance analysis are expected capabilities, not sufficient differentiation. |
| Supy | Connected procurement, recipes, prep yields, POS-linked depletion, wastage, multi-site visibility | Explain specific operational workflows and their cost impact. Integration breadth is a substantial competitive commitment. |
| The Menu Engineer | Ingredient costing, sales analysis, menu psychology and redesign; direct owner-focused financial language | Use recognisable owner problems, supported by our own evidence. |
| Barometer | AI-enabled inventory and cost control plus F&B experts, onboarding, data audits and ongoing consultation | Closest positioning overlap. Software plus expertise is already an established pitch. |

References:
- https://www.marketman.com/platform/ai-powered-recipe-management
- https://www.marketman.com/platform/recipe-costing-software
- https://themenuengineer.in/
- https://supy.io/product-features/wastage-recording
- https://supy.io/product-features/recipes-prep-recipes
- https://supy.io/solutions/restaurant-types/bars-pubs
- https://www.barometertech.com/

## Product scope and truthfulness

### Proposed initial scope

- Manual entry and operational report uploads.
- Configuration to map supported report formats to a common data model.
- Standard recipes, ingredient weights, costs, and margin analysis.
- Expected versus actual food and beverage consumption analysis.
- Distinct records for wastage, staff meals, complimentary consumption, and transfers.
- Purchase-order and invoice comparison, including price fluctuations.
- Uploaded POS report analysis; available fields determine which billing events can be reviewed.
- Mobile audit checklists, observations, photo evidence, and visit management.
- Corrective-action assignment and closure tracking.
- AI-assisted audit summaries and executive reports grounded in supporting records.
- Owner dashboards and downloadable reports.

### Future roadmap

Direct POS, invoice, and purchasing integrations; automated ingestion; more frequent alerts as connected data becomes available; broader cross-system reconciliation. Label these as planned. Do not describe uploaded reports as live sync.

### Application architecture from supplied references

- Auditor portal: mobile-friendly audit management, checklists, evidence, uploads, findings and corrective actions.
- Client portal: branded owner-facing reporting, recipe costs, food/bar variance and exports. Reference scope describes this view as read-only.
- Shared role-based database and controlled client access.

The marketing page should express these as owner outcomes rather than exposing internal architecture. Confirm shipped features before public launch.

## Working homepage copy and sequence

### Navigation

Cost Caddy / The problem / How it works / What you control / Request a demo.

### Hero

Eyebrow: AI-enabled F&B control

Headline: **Your restaurant’s costs, explained.**

Body: Understand what you buy, what you use, and what you bill. Connect the gaps across your kitchen, bar, and billing—and see what needs your attention.

Primary CTA: Request a demo. Secondary CTA: Follow the money.

Supporting line: Food. Beverage. Stock. Billing. One clearer picture.

### Problem

Headline: **You know what you bought. Can you explain where it went?**

Body: An unrecorded staff meal. A supplier price increase. A stock count that does not add up. Small gaps are easy to miss when the information lives in different reports.

### Interactive product story

Headline: **Every gap deserves an explanation.**

Show one illustrative reconciliation from consumption to recorded uses and remaining unexplained variance. Then show supporting evidence and an assigned action. Monetary values are examples, not savings predictions. An unresolved variance is an investigation prompt, not proof of loss or misconduct.

### Feature groups

1. Consumption: Compare recipe-based expected usage with actual consumption; account for authorised non-sale use.
2. Recipe costs: Understand ingredient prices, portion quantities, prep yields, and margin changes.
3. Purchasing and billing: Review invoice discrepancies, price changes, discounts, voids and available bill modifications.
4. Audits and action: Capture evidence, assign a responsible person and due date, and verify closure.

### How it works

Bring your reports → understand the differences → act on what matters.

AI copy: Less time interpreting reports. More clarity on what needs attention. AI assists with summaries, unusual patterns, and plain-language explanations; supporting records remain available for review.

### Roadmap

Headline: A more connected operation is coming.

Body: Planned integrations with POS, invoice and restaurant systems will reduce manual uploads. Initial workflows use supported report uploads.

### Closing CTA

Headline: **Get a clearer picture of your restaurant.**

Body: See how Cost Caddy can help you understand costs, investigate differences, and follow through on fixes.

CTA: Request a demo.

## Visual direction: the quiet controller

Warm ivory background, near-black typography, deep forest green accents and occasional amber for investigation prompts. Large editorial headlines, generous whitespace, thin rules and a restrained dashboard treatment. Avoid generic grids of floating cards, robot imagery, excessive gradients and invented trust badges.

The central visual should make the flow of money understandable. Use a reconciliation statement and a traceable finding, rather than decorative charts. The first concept uses a typographic hero, a pale-green report panel and a sequential evidence/action demonstration.

## Motion and interaction

- Soft entrance transitions and restrained staggered reveals.
- Reconciliation bars reveal their values on entry.
- Consumption / evidence / action controls update the illustrative report.
- Navigation scrolls to real page sections.
- Demo CTA opens an explicitly labelled prototype enquiry dialog; no submission is claimed without a connected destination.
- Respect prefers-reduced-motion, keyboard navigation, focus visibility and adequate contrast.
- Responsive single-column layout on smaller screens; avoid horizontal page overflow.

## Initial design deliverable

Build a local, reviewable HTML/CSS/JS concept in `design-concept/`. This stage is design exploration. It has no live restaurant data, integrations or enquiry backend. Use clearly labelled illustrative data. Public launch requires confirmed scope, real demo routing, privacy copy and approved brand details.

## Acceptance criteria

- Owner understands the problem and offer from the first screen.
- Each section adds information rather than repeating the same pitch.
- Example shows the difference between explained consumption and unexplained variance.
- Planned integrations are distinct from initial upload-based workflows.
- No invented customer logos, testimonials, savings claims or production capabilities.
- Readable on mobile; controls work with keyboard; reduced motion is supported.
- Demo enquiry behaviour accurately reflects prototype status.

## Design iteration 02 — Headroom reference
+
+Reference: https://headroom.com/ (reviewed 24 October 2026).
+
+Observed visual cues: compact floating pill navigation; centred, direct two-line headline; operational records arranged in perspective around a central mark; a single clear CTA; depth and motion used to show many workflows becoming a coherent whole.
+
+Adaptation for Cost Caddy: retain the light-background preference, using ivory and sage instead of the reference's saturated blue. Replace its business records with clearly illustrative supplier-price, recipe-cost, consumption-variance and corrective-action records. Centre an abstract stacked-line mark and the idea of one clearer picture. Keep the deeper evidence/action story below. Do not reuse Headroom's brand, assets or headline.
+
+Revised hero: **You put everything into your restaurant. Know what’s coming out of it.** Supporting text: Your purchases, recipes, stock, and billing. Finally making sense together. CTA: Get a clearer picture.
+
+The earlier split hero is retained as a non-served HTML fragment at `design-concept/hero-v1.html` for design reference. The new direction is the active preview.
+EOF
node --check design-concept/script.js
## Design iteration 03 — problems before tools
+
+User direction: lead with problems, explain solutions and add more features using familiar language; use blue inspired by Headroom; reduce roundness and use rectangular buttons.
+
+Hero now leads with a busy restaurant and unclear profit. Feature stories pair an owner's question with a small animated operational example and a plain-language solution. Eight areas: recipe costing, stock differences, wastage, staff meals and complimentary items, supplier bills, discounts and bill changes, audit follow-up, owner reports and AI-assisted explanations. Initial upload scope and planned integrations remain distinct.
+
+Visual system moves to pale blue surfaces, dark blue text and stronger blue accents. Buttons use a 4px corner radius; navigation uses a restrained 10px radius. Example animations play as features enter view and respect reduced-motion preferences.
+EOF
node --check design-concept/script.js
## Separate v2 — airy editorial, problems first
+
+Built at `design-concept/v2/` using the supplied “Create Anything” design reference: Instrument Serif display type, Instrument Sans body text, generous white space, subtle borders, translucent paper-like panels and minimal shadows. The supplied reference is visual guidance, not product content. Preserve the user's blue palette and rectangular 4px buttons in place of the reference's green accents and pill controls.
+
+Narrative: full tables but unclear profit → four recognisable operational frustrations → bring records together → interactive problem/solution explorer → reports and scope → conversation. Keep the original design available for comparison. Example values remain illustrative; no enquiries are sent from this prototype.
+EOF
node --check design-concept/v2/script.js
## Feature expansion across v1, v2 and v3
+
+User-requested product features: recipe costing, menu engineering, automatic bar variance calculation, wastage calculation, spoilage calculation and POS integrations. Expanded sections appear on all three versions alongside staff meals, supplier/billing checks and audit/AI reporting.
+
+Menu engineering compares popularity and contribution per sale (selling price minus recipe cost); this is not net profit after all operating expenses. Bar variance compares actual stock usage with sales-based and recorded non-sale usage. Full movement analysis must account for transfers and consistent units. The local calculator explicitly simplifies to opening stock + receipts − closing stock − explained usage, with no transfers. Negative differences remain visible. Missing or invalid inputs are rejected. Spoilage is a subset of wastage and must not be counted twice. Automatic calculation from entered/uploaded records does not mean automated POS ingestion. Direct POS and invoice integrations remain planned pending confirmed scope and compatibility.
+
+## V3 — editorial control
+
+Supplied cntrl.site MD informs the third visual direction: white space, oversized tight headlines, monospace utility text, thin rules, flat panels, small rectangular buttons, and restrained neon cyan (#01DFF1). No gradients or glossy effects. Proprietary Melange and Favorit Mono font assets were not supplied; use Arial and system monospace fallbacks rather than claiming those fonts are installed.
+
+V3 is available at `/v3/`, v2 at `/v2/`, v1 at `/`. A shared feature section and calculator keep the capabilities consistent while each version retains its own presentation. All are local design prototypes with illustrative examples; enquiry buttons explain the unconnected demo flow.
+EOF
## Product feature graphics and ingredient-price story
+
+All three versions now include native vector onion and tomato illustrations, an interactive ingredient-price-to-dish-cost example, a menu popularity/contribution matrix, an animated bar bottle, wastage and spoilage examples, a data-input graphic, and audit progress visuals.
+
+Price example: 100g onion at ₹30/kg + 150g tomato at ₹40/kg + ₹35 other ingredients = ₹44 per portion. Raising prices to ₹50/kg and ₹70/kg increases cost to ₹50.50. At a fixed ₹180 selling price, recipe contribution changes from ₹136 to ₹129.50 (before other operating costs). The intelligence is identifying the affected recipe and prompting supplier, portion or menu-price review; it does not prevent ingredient price changes or freeze costs. All example quantities and values are illustrative. The price control announces the changed impact and respects reduced-motion preferences.
+EOF
## V4 — calm, dimensional, Wisr-inspired
+
+Separate version at `/v4/`, based on the supplied Wisr MD. Uses seafoam (#e1f3ee), navy (#15384f), mint accents, light Inter Tight headlines, spacious left-aligned composition and restrained dimensional shading. A native SVG balance with onions, tomatoes and a menu-price tag gently rocks to introduce cost pressure. The illustration is original, not a borrowed Wisr mascot. Rectangular 4px buttons preserve the user's explicit preference over the reference's pill buttons.
+
+Retains the four owner problems, interactive solution explorer, nine expanded features, recipe-price demo, and local bar-stock calculator. No direct integrations or enquiry backend are implied. Motion respects reduced-motion preferences. V1–v3 remain available through comparison links.
+EOF
## V5 — Context-inspired product clarity
+
+Separate version at `/v5/`, using the supplied Context.dev brief: white canvas, cobalt #2563EB accents, light Rethink Sans headlines, subtle Doto microtype, thin outlines and sparse dotted orbital decoration. A centred hero leads into an illustrative recipe-cost review panel, followed by owner problems, solution exploration and the shared animated feature demos. Rectangular 4px buttons preserve the user's stated preference over the reference's pill controls.
+
+Retains the ingredient-price interaction and local bar-stock calculator. Earlier versions remain available, and all pages link to v5 through the shared comparison links. Visual preview checked in the in-app browser; JavaScript syntax check passed. No new live integrations or enquiry backend were added.
+EOF
## V5 feature gallery refinement
+
+Replaced the dense three-column feature treatment with a full-width recipe story and spacious two-column feature cards. V5-only graphics include paired bottle levels, a decorative wastage cost ring, an expiry calendar, a planned integration diagram, separate staff-meal records, purchase/invoice sheets, and an audit timeline. Values remain illustrative; ring and bottle fills are visual accents, not calibrated charts. Card entrances and graphic details animate once on intersection with the viewport, with reduced-motion support. Recipe-price interaction remains connected. Removed stock calculator stays removed. Verified the layout in-browser and checked the new script syntax.
+EOF
## V6 — Zelt-inspired warm overview
+
+Reference: https://zelt.app/ (reviewed 24 October 2026). Observed cues: oversized centred sans-serif headlines, warm neutral backgrounds, yellow CTAs, generous scroll-led composition and a dimensional central visual. V6 adapts these into a restaurant cost-control story using a native CSS sphere and illustrative ingredient-price, bar-stock and follow-up cards. No Zelt brand assets or customer claims are reused.
+
+Separate route `/v6/` retains the owner problems and animated feature gallery, with muted sage graphics and warm yellow actions. Buttons remain rectangular. The removed calculator remains absent. Earlier versions remain available through comparison links. Hero visually verified in the in-app browser; shared interaction scripts retained unchanged.
+EOF
## AI-first feature focus across all six versions
+
+The three leading features are now AI-generated insights, prioritised action items, and planned AI agents. Illustrative examples show an ingredient-cost insight, an assigned review action and a proposed records-to-review agent workflow. Detailed recipe, menu, stock, wastage, billing and audit tools remain available in a collapsed supporting-tools section to keep the initial feature presentation focused. Agent workflows are planned and do not imply autonomous operational changes. V3's feature graphics were also upgraded to the larger animated editorial gallery while preserving cyan/black styling.
+EOF
## V5 pivot — F&B audit consultancy
+
+User changed the offer from software to hands-on F&B audit and cost-control consultancy. V5 alone now reflects this; other versions are retained as earlier explorations. Content inspiration: https://sites.google.com/view/costcaddy-fbcostcontrollercons/full-page-embed (embedded page read in browser, 24 October 2026).
+
+Core promise: “You run the restaurant. We help protect the margins.” Services: F&B auditing and leakage/variance review; recipe costing and menu engineering; inventory, wastage and spoilage controls; billing and system setup review; SOPs and team training; ongoing advisory. Process: understand operation, explain gaps, agree action plan, follow through. Deliverables: supported findings, scoped analyses, priorities/owners/review points, SOPs and guidance where agreed. AI assists analysis; it is not sold as a standalone platform or autonomous agent service.
+
+Do not carry over the reference page's unverified financial outcomes, client names/testimonials, guarantees, legal identity, location, phone or email. Enquiry routing remains explicitly unconnected pending confirmed contact details. No savings calculator or software subscription is introduced.
+
+Created editable SVG logo assets: `design-concept/v5/assets/cost-caddy-logo.svg` (wordmark) and `cost-caddy-mark.svg` (icon). Mark combines a plate/C shape with an audit check, in cobalt blue. The page uses the logo in the header, footer, report illustration and favicon. Preview visually checked; consultancy script syntax check passed.
+EOF