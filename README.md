# Aswenna — landing page

Marketing site for **Aswenna**, the Agricultural Intelligence Platform.
_Smarter fields, greater future._

Built with **React 19 + TypeScript + Vite**. Light theme, plain CSS with design tokens —
no CSS framework, so there is nothing to learn before editing a style.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Changing the colours

**Every colour lives at the top of [`src/styles/variables.css`](src/styles/variables.css).**
Nothing else in the project hard-codes a hex value, so changing a token changes the whole site.

The file is ordered so the shallowest change is the one at the top:

| Block | What it holds | When to edit |
| --- | --- | --- |
| `1. BRAND COLOURS` | The four brand colours — `--brand-primary`, `--brand-secondary`, `--brand-tertiary`, `--brand-neutral` | Rebranding |
| `2. BRAND RAMPS` | `--primary-50 … --primary-950` and the matching secondary / tertiary / neutral ramps | Re-tuning tints and shades |
| `3. SEMANTIC COLOURS` | `--color-bg`, `--color-surface`, `--color-text`, `--color-border`, `--color-accent`, status colours | Most day-to-day tweaks |
| `3b. INTERACTIVE BACKGROUND TEXTURE` | Dot grid spacing and colours, cursor spotlight and glow size | Tuning the background effect |
| `4. TYPOGRAPHY` | Font families, sizes, weights, leading | Changing type |
| `5. LAYOUT / SHAPE / MOTION` | Container width, section spacing, radii, shadows, easing | Changing rhythm or roundness |

Current palette (from the brand sheet):

| Token | Value | Role |
| --- | --- | --- |
| `--brand-primary` | `#1D4E2B` | Deep forest green — buttons, dark panels, footer |
| `--brand-secondary` | `#4B5E70` | Slate blue-grey — "estimated data" chips, secondary accents |
| `--brand-tertiary` | `#2F7C47` | Field green — highlights, "measured data" chips, ticks |
| `--brand-neutral` | `#111827` | Ink — body text |

Fonts are **Plus Jakarta Sans** (headings) and **Inter** (body), loaded from Google Fonts in
`src/styles/base.css`.

## The background

Three layers sit behind the page, all inside `src/components/BackgroundTexture.tsx`:

1. **The field photograph**, fixed, so the page scrolls over it.
2. **A scrim** that lifts it to a light tint.
3. **A sensor mesh** drawn on a canvas — nodes that drift and link to their neighbours,
   picking up the platform's own story of field nodes reporting to a village gateway.

### The scrim, and why it moves

A light-themed page with dark body text cannot sit on a dark photograph. Two things make it work:

- `page-backdrop.webp` is a deliberately **high-key, low-contrast** copy of the hero photograph —
  blurred, desaturated, and with its whole tonal range compressed into 196–250. No pixel in it is
  dark.
- The scrim **eases between two values as you scroll** (`--bg-photo-scrim-top` → `--bg-photo-scrim-body`,
  across the first viewport height). The photograph reads as a banner behind the hero, then settles
  to a whisper of texture once body copy is on screen.

Measured on the rendered page: **every piece of text on a page background clears WCAG AA**, the
tightest being the hero subtitle at 5.11:1. Lower `--bg-photo-scrim-top` for a bolder banner, but
re-check the hero text if you do.

### The mesh

The cursor behaves like a gateway: nodes inside its reach brighten, grow, lean towards it and draw
a link back, so a constellation forms and dissolves as you move. Nodes transmit a ring periodically,
and clicking sends a ripple. Tune it from the `3b. INTERACTIVE BACKGROUND` block in `variables.css`
— colours as `R, G, B` triplets, plus density, link distance, cursor reach, lean and pulse rate.

**Cost when it cannot be used:** with `prefers-reduced-motion: reduce` or on a touch-only device,
one static frame is drawn and the loop never starts (verified: 0 animation frames in both cases).
The loop also stops when the tab is hidden, and node count is capped at 110.

## Languages

English, Sinhala and Tamil, with a switcher in the header and in the mobile menu. The choice is
remembered in `localStorage` and sets `<html lang>`.

```
src/i18n/
  languages.ts        the three languages and their native names
  context.ts          the context, the Translation type, the coverage notice
  LanguageProvider.tsx  state, persistence, <html lang>
  hooks.ts            useContent() and useLanguage()
  merge.ts            lays a translation over the English content
  si.ts  ta.ts        the translations
```

**English is the base.** A translation is a `DeepPartial` of the content tree, laid over English by
`merge.ts`, and **arrays merge element by element** — so a locale can translate the first two of six
cards and the rest stay in English rather than vanishing. Nothing can break by being missing.

**Translate more by adding keys to `si.ts` or `ta.ts`**, mirroring the shape of `content.ts`. No
component needs touching.

> ### These translations need a native speaker
>
> What is translated today is interface chrome: navigation, buttons, the trust strip, the contact
> form, the closing band and the footer headings. The long-form agricultural copy is deliberately
> still English — machine-translating agronomy terminology into languages this site's readers speak
> natively would produce errors invisible to whoever wrote it.
>
> **Every Sinhala and Tamil string in the repo should be reviewed by a native speaker before
> launch.** While a language is partly translated, a notice bar in that language explains that
> untranslated sections appear in English; remove the entry from `COVERAGE_NOTE` in
> `src/i18n/context.ts` once a language is complete.

Sinhala and Tamil set wider than Latin, so `header.css` gives those scripts tighter navigation
metrics and hands over to the menu button at a wider breakpoint, keyed off `html[lang=...]`.
Fonts are Noto Sans Sinhala and Noto Sans Tamil, which carry `unicode-range` — a browser only
downloads them when those scripts actually appear.

## Changing the copy

**All text lives in [`src/data/content.ts`](src/data/content.ts)**, one exported object per
section, in page order. No copy is hard-coded inside a component, so the whole page can be
re-worded without touching JSX.

## Page structure

Sections are composed in `src/App.tsx`, in the order of the content brief:

| # | Section | Component |
| --- | --- | --- |
| 01 | Hero — _Every Harvest Begins With a Smarter Beginning._ | `Hero.tsx` |
| — | Trust strip — language, coverage, delivery, data ownership | `TrustBar.tsx` |
| 02 | Farming Shouldn't Be a Gamble — six risks + the connectivity gap | `ProblemsSection.tsx` |
| 03 | Below the Surface — soil intelligence + data transparency | `SoilSection.tsx` |
| 04 | The Growth Journey — six stages, calendar adaptation | `JourneySection.tsx` |
| 05 | How Aswenna Protects You Across Maha & Yala — four season stages | `SeasonsSection.tsx` |
| 06 | Field Scanning — mapping, NDVI, weather, pest detection | `FieldSection.tsx` |
| 07 | The Intelligence Engine — Sense → Connect → Understand → Decide → Act | `EngineSection.tsx` |
| 08 | Replacing Guesswork with Measurement — without / with comparison | `ComparisonSection.tsx` |
| 09 | Features & Capabilities — core platform, IoT, access & ownership | `FeaturesSection.tsx` |
| 10 | Designed for the Field, Not an Office | `FieldFirstSection.tsx` |
| 11 | The IoT Ecosystem — hardware components | `HardwareSection.tsx` |
| 12 | How Field Hardware Installs on Your Land — three devices | `InstallSection.tsx` |
| 13 | Choose What Fits Your Farm — the three participation tiers | `PricingSection.tsx` |
| 14 | Connected Agriculture — the ten proposed platform interfaces | `PlatformSection.tsx` |
| 15 | Strategic Implementation — Phases 01–04 | `RoadmapSection.tsx` |
| 16 | Trusted by Farmers Across Sri Lanka — **placeholder quotes** | `TestimonialsSection.tsx` |
| 17 | Frequently Asked Questions | `FaqSection.tsx` |
| 18 | Final call to action | `CtaSection.tsx` |
| — | Closing band + contact form | `ContactSection.tsx` |

Each component imports its own stylesheet of the same name (`SoilSection.tsx` → `soil.css`), and
every stylesheet reads from the tokens above.

Shared pieces: `Header.tsx`, `Footer.tsx`, `SectionHead.tsx` (eyebrow + title + sub),
`Phone.tsx` (phone bezel around a screen image), `Reveal.tsx` (scroll-in animation, respects
`prefers-reduced-motion`), `Icon.tsx` (name → Lucide icon), `StageGlyph.tsx` (the six growth-stage
drawings, inline SVG using the colour tokens).

## Images

Real photographs live in `public/images/photos/` as WebP. The supplied originals were 25.4 MB in
total (one was 9930x5580); they were resized and re-encoded to **2.0 MB** for the whole set, with
no source larger than 2000px on its longest edge.

| File | Used by |
| --- | --- |
| `hero-field.webp` | Hero backdrop |
| `problem-soil` · `problem-climate` · `problem-market` · `problem-pests` · `problem-water` · `problem-postharvest` | The six risk cards in section 02 |
| `connectivity-gap.webp` | The Connectivity Gap panel |
| `field-land-mapping` · `field-crop-health` · `field-pest-detection` | Three of the four Field Scanning cards |
| `market-trend.webp` | Final call-to-action backdrop |

### Placeholders

Anything still awaiting artwork lives in `public/images/placeholders/`, and that path is the single
source of truth for the small dark **"Image placeholder"** badge: `src/lib/images.ts` exposes
`isPlaceholder(src)`, and the components render the badge only when it returns true. **Drop a real
photo in and change the path in `content.ts` — the badge removes itself.** No markup to edit.

Still placeholders:

- **Hyperlocal Weather Intelligence** (section 06) — `placeholders/panel-weather.svg`, a drawn UI panel.
- **The six phone screens** in `public/images/screens/` — sample app UI, swap for real captures.
- `placeholders/photo.svg` is a generic stand-in kept for any card added later.

### Alt text

Every real photograph carries descriptive alt text, stored next to its path in `content.ts` as
`alt`. Decorative backdrops (the CTA) stay `alt=""` with `aria-hidden`.

## Content integrity

The copy follows the project's content rules deliberately:

- No invented statistics, sensor readings or agricultural claims anywhere on the page.
- Roadmap phases are labelled **Planned** (Phases 01–03, project scope) and **Proposed**
  (Phase 04, future work) — never as deployed commercial operations. The roadmap section and the
  footer both restate this.
- The distinction between **estimated** values (regional soil databases) and **measured** values
  (field devices) is carried through the whole page by the `chip--estimated` / `chip--measured`
  styles, and is explained outright in the "Two kinds of numbers" panel in section 02.

## Accessibility and responsiveness

- Single `<h1>`, one `<h2>` per section, sequential headings.
- Decorative images are `aria-hidden`; meaningful ones carry real alt text.
- The platform section is a proper tablist (`role="tab"` / `role="tabpanel"` with `aria-selected`
  and `aria-controls`); the FAQ uses `aria-expanded` / `aria-controls` with a labelled region.
- The comparison table's column headers are repeated inside each cell once the columns stack on
  mobile, so a row is never left unlabelled.
- Every form field has a real `<label>`, required fields are marked in text as well as colour.
- Visible focus rings on every interactive element; the mobile menu is keyboard reachable.
- All scroll, float and background-texture animation is disabled under
  `prefers-reduced-motion: reduce`.
- Verified with no horizontal overflow at 1440px and 390px.
