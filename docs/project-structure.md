# Project structure

This portfolio is intentionally scaffolded before visual refinement or individual project pages begin.

- `src/components`: reusable UI building blocks.
  - `src/components/design-system`: shared editorial primitives, including navigation, section headers, metadata, question rows, image slots, captions, links, buttons, dividers, and project navigation.
- `src/sections`: independent homepage/journey section modules.
- `src/layouts`: reusable page-level layout systems, including the horizontal journey framework.
- `src/hooks`: shared interaction hooks, including horizontal journey input handling.
- `src/pages`: route-level page components.
- `src/assets`: static asset home for future production media.
- `src/data`: navigation, journey-section, and experience blueprint definitions.
- `src/content`: project metadata, narrative content, and asset conventions separated from presentation logic.
- `src/lib`: third-party library setup and transition utilities, including GSAP ScrollTrigger registration.
- `src/styles`: global resets, tokens, and app defaults.
- `docs`: planning and implementation documentation, including the design system foundation.
