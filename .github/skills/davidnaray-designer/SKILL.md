---
name: davidnaray-designer
description: "Use for DavidNaray.com web design, frontend, website, landing page, subpage, responsive UI, visual refinement, layout, typography, color, spacing, interaction, and redesign tasks. Preserve the existing DavidNaray design system and make the smallest requested visual change."
user-invocable: true
disable-model-invocation: false
---

# DavidNaray Designer

## Purpose

Keep the complete DavidNaray.com visual world coherent across the main site, Business Website, Landing Page, and future subpages. New work should feel like it was made by the same designer while preserving the existing page's character.

## Core Direction

The visual language is modern, clean, calm, premium, natural, personal, professional, and considered. Design should communicate quality and thoughtfulness without feeling like an advertisement or a generic template.

Prefer:

- generous whitespace and quiet visual rhythm
- clear editorial hierarchy
- restrained geometry and purposeful visual details
- flat, elegant surfaces
- natural, human presentation
- subtle interactions that support orientation
- short, readable, confident copy

Avoid:

- generic template or SaaS layouts
- AI-generated-looking composition
- excessive cards, boxes, gradients, shadows, or animations
- aggressive calls to action
- crowded sections
- decorative elements without a purpose
- over-technical, neon, cyber, or startup visual language

## Existing Design Has Priority

Before changing an existing page:

1. Read the owning HTML, CSS, and JavaScript together.
2. Identify the current colors, typography, spacing, components, animation, and responsive rules.
3. Treat the current page as the source of truth.
4. Modify only the requested area.
5. Do not independently change colors, fonts, spacing, buttons, cards, content, or section structure.
6. Do not redesign a section when a local CSS or link fix is sufficient.
7. Preserve existing behavior and public structure unless the request requires otherwise.

For a specific fix, use the smallest change that solves that fix. A link fix changes the link. An alignment fix changes the alignment. A button fix does not redesign its section.

## Design System Checks

Keep these concerns consistent with the existing page:

- hierarchy: one clear primary message, supporting information, then one logical next step
- spacing: deliberate margins, padding, grid gaps, and section rhythm
- typography: readable sizes, clear weight contrast, and purposeful editorial emphasis
- copy: natural, human, concise, confident, and not overly promotional
- containers: use cards only when they have a real functional role
- CTAs: clear and restrained; avoid hype such as "ACT NOW" or "START NOW"
- hover states: subtle, useful, and natural

Avoid repetitive copy patterns such as "Nem X. Nem Y. Hanem Z." and empty corporate language.

## New Subpages

When creating a new page, first inspect the main site's existing:

- palette and color variables
- font families and type hierarchy
- shell width and spacing scale
- buttons, links, and form controls
- cards and framed visual components
- section structure and editorial patterns
- reveal and hover behavior
- tablet and mobile breakpoints

Build from those patterns instead of inventing a separate design system. The result should be a visual sibling, not a copy and not a disconnected template.

## Responsive Requirements

Check desktop, tablet, and mobile behavior for every web change. Mobile is not only a compressed desktop layout. Preserve hierarchy, readable line lengths, comfortable tap targets, stable geometric elements, and the intended whitespace. Confirm there is no horizontal overflow and that content, controls, and visual accents do not overlap.

## Validation Before Completion

After editing a web page:

1. Validate the touched HTML, CSS, and JavaScript files.
2. Run the narrowest relevant behavior or browser check.
3. Inspect desktop and mobile layouts.
4. Check links, forms, navigation, reveal behavior, and interactive states affected by the change.
5. Confirm unrelated pages and files were not modified.
6. Report only the files changed and the meaningful visual or behavioral result.

## Decision Rule

When two solutions are viable, choose the one that is simpler, quieter, cleaner, more consistent with the existing page, leaves more whitespace, and remains premium over time. Use fewer, better-considered visual elements. Design should support the content and thinking, never compete with them.
