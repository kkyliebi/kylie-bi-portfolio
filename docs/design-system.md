# Design system foundation

Sprint 08.1 establishes a reusable editorial design system for the Kylie Bi portfolio. The system follows `MASTER_CREATIVE_BRIEF.md` as the highest-level project guideline: the portfolio should communicate how Kylie thinks, not simply what she designed.

## Design principle

The design system exists to make the portfolio feel like one coherent communication archive. Every primitive should support the same method:

1. Discover
2. Connect
3. Translate
4. Materialise

This means components should clarify sequence, evidence, and narrative hierarchy. They should not introduce decorative novelty or isolated visual styles.

## Global layout system

- Page margins use `--layout-gutter`, a responsive gutter that keeps pages spacious without breaking small screens.
- Main content width uses `--layout-max-width` for archive pages and `--layout-readable` for editorial reading.
- Reading measure uses `--layout-reading-measure` so body copy remains calm and legible.
- Section rhythm uses `--space-section`, with large negative space treated as part of the communication system.
- Horizontal project navigation remains the primary archive behavior on desktop.
- Breakpoints are documented as tokens: `--breakpoint-mobile`, `--breakpoint-tablet`, and `--breakpoint-desktop`.

These decisions support the brief by making navigation and spacing feel deliberate, slow, and archival rather than page-builder-like.

## Typography system

- The body and display font families are defined as tokens so a future typeface change does not require component rewrites.
- Display type uses `--font-size-display` for project/page identity.
- Chapter headings use `--font-size-chapter` for editorial spread hierarchy.
- Body copy uses `--font-size-body` and `--font-size-body-large`, with `--line-height-reading` for longer paragraphs.
- Captions and metadata use uppercase label styling with `--letter-spacing-label`.
- Quote styling is available through `QuoteBlock`, sized for editorial emphasis without becoming decorative.

Typography is used as narrative hierarchy. Large type introduces identity and questions; smaller metadata establishes archive discipline; body copy remains readable and restrained.

## Colour system

- `--color-background` is the primary museum-editorial field.
- `--color-surface` and `--color-surface-muted` support quiet secondary surfaces.
- `--color-image-ground` defines documentary image placeholders.
- `--color-text`, `--color-text-muted`, and `--color-text-subtle` create a controlled hierarchy.
- `--color-accent` and `--color-focus` are used sparingly for orientation, focus, and active states.
- `--color-border` defines structural dividers without heavy framing.

The palette remains neutral and archival. Colour should clarify hierarchy and state, not decorate.

## Component library

The shared primitives live in `src/components/design-system`.

- `Navigation`: horizontal navigation with active state and focus treatment.
- `SectionHeader`: reusable editorial section introduction.
- `SectionLabel`: small uppercase archive labels.
- `QuestionBlock`: expandable question-row structure for project entry points.
- `EditorialParagraph`: body and lede paragraph variants.
- `QuoteBlock`: large editorial quote treatment.
- `ResearchCaption`: captions for documentary and research material.
- `ImageBlock`: documentary image slot with landscape, portrait, full-width, and document behavior.
- `ImageGrid`: reusable grid for research, process, archive, and gallery material.
- `ArchiveCard`: project/archive index entry.
- `ProjectNavigation`: previous/next project navigation treatment.
- `Footer`: quiet closing area for future pages.
- `Button`: neutral action button.
- `TextLink` and `ExternalTextLink`: consistent link styling.
- `Divider`: full and short structural divider.
- `LargeNumber`: oversized editorial numbering.
- `Metadata`: reusable archive metadata groups.

These components are intentionally broad and content-agnostic so future project pages can be assembled without one-off layout styling.

## Spacing system

Spacing is defined from `--space-1` through `--space-11`, plus `--space-section` for large editorial pauses. Components should prefer these tokens over local values.

Large negative space is not empty decoration. It creates reading pace, helps chapters feel authored, and supports the brief's idea that silence is part of communication.

## Image framework

Images are treated as documentary evidence.

- Landscape: `16 / 9`
- Portrait: `3 / 4`
- Document/archive: `4 / 3`
- Full-width spread: `21 / 9`

`ImageBlock` preserves aspect ratios, captions, and neutral placeholder surfaces. Future real assets should follow consistent camera language, soft light, neutral palette, and archive/documentation framing.

## Motion tokens

Motion is not implemented as animation in this sprint. Tokens are defined for future use:

- `--motion-duration-fast`: quick interface feedback.
- `--motion-duration-base`: standard state transitions.
- `--motion-duration-slow`: slower editorial transitions.
- `--motion-ease-standard`: precise interaction easing.
- `--motion-ease-architectural`: calm reveal and page-transition easing.

Future motion should clarify structure, reveal hierarchy, or support page transitions. It should not move simply for visual effect.

## Implementation guidance

- Keep global CSS limited to reset, tokens, and app defaults.
- Use CSS Modules for component-level styling.
- Prefer design-system primitives before creating page-specific components.
- Keep ProjectLayout, routing, and content architecture intact unless a future sprint explicitly changes them.
- Treat visual consistency as more important than visual complexity.
- Document future improvements as recommendations when they would alter architecture or interaction behavior.
