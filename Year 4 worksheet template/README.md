# ALS Numeracy Year 6 Add Sub

A4 landscape (29.7 × 21cm) numeracy worksheet template, Brain Boosters series.

**Entry:** `ALSNumeracyYear6AddSub.dc.html`

## Structure
Header: title (Londrina Solid) + tracked ALL-CAPS eyebrow + rule; footer credit bottom-right.
Seven activity boxes in the locked asymmetric brick grid:

| # | Size | Activity type | Artwork |
|---|---|---|---|
| 1 | standard | balance scales, missing addend | img/scale.png ×4 |
| 2 | standard | compensation strategy equations a–d | — |
| 3 | standard | number story with number bank + blanks | — |
| 4 | standard | animal-face algebra, equals-aligned rows | img/penguin.png, img/frog.png, img/cat.png |
| 5 | wide | darts totals, questions a–e beside board | img/dartboard.png |
| 6 | wide | magic-number shapes, numerals placed on circles | img/shape-x9.png, img/shape-x7.png, img/shape-triangle.png |
| 7 | standard | toothpick challenge | img/toothpicks.png |

## Conventions to keep when swapping content
- Question text 11pt; direction text runs full box width and never wraps around artwork.
- Answer squares: 1pt ink border, 0.62cm (Q1) / 0.75cm (Q4) — same visual family.
- Artwork uses `mix-blend-mode:multiply; filter:brightness(1.16)` to sit on white paper.
- Q6 numerals are absolutely positioned in % against each image's own aspect-matched container — resize the container, not the numbers.
- Grid coordinates, badge, box stroke and radius are locked; do not re-align to a uniform grid.

## Reuse
Copy this folder into a project with the Brain Boosters design system bound, then edit `const base` in `ds-base.js` and the `_ds/` paths in the page `<helmet>` to match the folder depth.
