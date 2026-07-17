# PB-001 project foundation

PB-001 establishes the technical frame for a horizontal editorial portfolio. It intentionally avoids final visual design, content polish, typography decisions, colour exploration, and finished animation.

## Structure

- `src/components`: reusable UI primitives and shared component skeletons.
- `src/sections`: independent page section modules.
- `src/layouts`: page-level layout systems, including the horizontal journey.
- `src/hooks`: reusable interaction and state hooks.
- `src/styles`: global reset, tokens, and application defaults.
- `src/assets`: future static assets.
- `src/data`: navigation, journey-section, and project data.
- `src/lib`: integration points for GSAP and transition utilities.

## Horizontal journey

The homepage is composed through `HorizontalJourney`, which receives section items and renders a horizontally scrollable track.

Supported interaction:

- native horizontal scrolling
- mouse-wheel-to-horizontal movement
- trackpad movement
- keyboard navigation with ArrowLeft, ArrowRight, PageUp, PageDown, Home, and End
- touch navigation through native overflow
- scroll snapping on desktop
- vertical structural fallback on smaller screens

## Empty skeleton sections

The foundation route currently includes:

1. Landing
2. About
3. Archive
4. Project 01
5. Project 02
6. Project 03
7. Project 04
8. Project 05
9. Contact

Each section is an independent module. The placeholder content is intentionally sparse so future creative decisions can be added incrementally.

## Animation infrastructure

- GSAP and ScrollTrigger are registered centrally in `src/lib/gsap.ts`.
- Transition constants and reduced-motion helpers live in `src/lib/transitions.ts`.
- Final animations are not implemented at this stage.

## Responsive baseline

Desktop is the primary foundation target. Tablet and mobile remain structurally functional through a vertical fallback, but no detailed responsive design decisions are made in PB-001.
