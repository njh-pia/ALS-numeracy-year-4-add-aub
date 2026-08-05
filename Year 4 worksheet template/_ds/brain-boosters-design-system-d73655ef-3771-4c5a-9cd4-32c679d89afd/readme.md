# Brain Boosters Design System

**Brain Boosters** is a numeracy worksheet series published by **amplified learning studio**. This design system captures the visual language of a single locked print artifact: an A4-landscape, 7-question worksheet template for Year 6 "Number Sense · Reasoning" practice.

## Sources
- `uploads/Brain Boosters Worksheet.dc.html` — on-screen source of truth for the worksheet layout
- `uploads/Brain Boosters Worksheet-print.dc.html` — print copy (built on the `doc-page` starter)
- `uploads/CLAUDE.md` — the locked layout spec (exact coordinates, fonts, colors) this system is built from
- No codebase, Figma file, or slide deck was attached — everything here is derived from the two worksheet files and their spec above

## What this is
A small, print-focused system: one reusable component (the numbered activity box), the tokens that drive it, and the worksheet itself as a reusable template. There is no app, website, or slide deck in scope — just this worksheet series.

## Components
- **ActivityBox** (`components/worksheet/ActivityBox.jsx`) — the numbered cell (badge + label + instruction line) used to build the 7-box grid. Standard (9.37×5.97cm) and wide (19.03×5.97cm) sizes.

### Intentional additions
None — no other primitives (buttons, inputs, nav, etc.) exist in the source material, so none were invented.

## Templates
- `templates/brain-boosters-worksheet/` — **ALS Numeracy Upper - 7**: the blank 7-box A4 landscape worksheet, reusable for new worksheets in this series (swap box labels/instructions; keep the locked grid).
- `templates/als-numeracy-year-6-add-sub/` — **ALS Numeracy Year 6 Add Sub**: the same locked grid filled with a complete addition/subtraction sheet (balance scales, compensation equations, number story, animal-face algebra, darts, magic-number shapes, toothpick challenge) plus its artwork in `img/`.

## Content fundamentals
- **Voice**: plain, functional, teacher-facing instructional copy — no exclamation marks, no emoji, no marketing tone.
- **Title**: Title Case, e.g. "Year 6 Number Work" — names the year group and subject.
- **Eyebrow/category label**: ALL CAPS, middle-dot separated, tracked letter-spacing — e.g. "NUMBER SENSE · REASONING".
- **Activity labels**: "Activity 1"–"Activity 7", sequential, sentence case.
- **Instruction/placeholder copy**: sentence case, direct and neutral — e.g. "Space for activity instructions and student working."
- **Footer credit**: small, understated copyright line — "© amplified learning studio".
- No second-person ("you") or first-person copy appears; everything is a label or a neutral instruction.

## Visual foundations
- **Color**: a two-tone, near-monochrome palette. Ink `#53585F` carries all text and headers. A lighter structural tint `#9a9ea3` is used only for lines — box outlines, the badge stroke, the header divider. Paper is pure white; the screen backdrop behind the sheet is a soft warm-grey `#e9e9e6`. No accent colors, no gradients.
- **Type**: four families, each with one job. Londrina Solid (weight 300) for the title only. Playpen Sans (700 for the tracked eyebrow, 600 for badge numerals) supplies the brand's only "playful/hand-touched" note. Teachers (500/400) is the workhorse body font for activity labels and instructions. Poppins (400) is reserved for the tiny footer credit — never used elsewhere.
- **Layout**: an intentionally asymmetric "brick" grid of 7 boxes — 3 standard cells, a gap, 2 more standard + 1 wide, then 1 wide + 1 standard. This offset pattern is a deliberate motif; never auto-align it to a uniform grid.
- **Shape**: boxes are 1pt-stroked rounded rectangles (3pt radius), no fill beyond white, no shadow. The number badge is a small stroked circle (0.54cm, 1.13pt stroke) that overlaps the box's top-left corner.
- **Imagery**: none — no photos, no illustrations, no patterns or textures, no full-bleed imagery.
- **Motion**: none — this is a static print artifact; no animation, hover, or press states apply.
- **Depth**: flat throughout — no shadows, no transparency, no blur (the only elevation is the paper sheet itself sitting on the grey desk background at preview time, handled by the doc-page shell).
- **Corners**: small radii only — 3pt on boxes, fully round on the number badge. No large "card" radii anywhere.

## Iconography
There is no icon system. No icon font, SVG set, PNG icons, emoji, or unicode glyphs are used anywhere in the source. The only icon-like device is the plain circular number badge (1–7), which is typographic, not iconographic. If a future worksheet needs a pictogram, source one rather than hand-drawing an SVG.

## Assets
No logo was provided in the source material — "Brain Boosters" and "amplified learning studio" appear only as plain type (title context and footer credit). Wherever a mark might normally go, render the name in the type system above; do not invent a logo.

## Fonts
All four families (Playpen Sans, Londrina Solid, Poppins, Teachers) are available on Google Fonts and are loaded via `tokens/typography.css`'s `@import` — no local font files were needed or substituted.

## Index
- `styles.css` — root stylesheet, imports everything below
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens
- `components/worksheet/` — `ActivityBox` component (+ `.d.ts`, `.prompt.md`, card)
- `templates/brain-boosters-worksheet/`, `templates/als-numeracy-year-6-add-sub/` — the worksheet templates (each: `<Name>.dc.html`, `ds-base.js`, `doc-page.js`)
- `guidelines/` — foundation specimen cards (colors, type, spacing, grid pattern, badge/box shape, header anatomy)
- `thumbnail.html` — homepage tile
- `SKILL.md` — Claude Code / Agent Skills-compatible entry point

## Caveats
- Only a single worksheet artifact was provided — this system is intentionally narrow (one component, one template) rather than padded with invented primitives.
- No logo, icon set, or additional product surfaces were available to extend into a UI kit.

**Ask**: if you have more worksheets in this series, other Brain Boosters materials (covers, answer keys, a logo), or a wider brand guide, attach them and I can broaden the token set, add more box/layout variants, and turn this into a fuller system.
