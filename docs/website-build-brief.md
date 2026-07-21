# Website build brief

## Objective

Build Kylie Bi's portfolio as a horizontal, editorial communication archive that reveals how she thinks. Projects are evidence of one method: discover, connect, translate, materialise.

## Audience and outcome

Creative directors, collaborators, commissioners, and employers should understand Kylie as a Communication Designer & Creative Producer who transforms abstract concepts into narrative-driven communication systems, then have a clear route to contact her.

## Required experience

The primary journey is Landing → About → Archive → five fixed projects → Contact. Desktop uses a calm horizontal journey; smaller screens use a readable vertical flow. Each project follows Context → Research → Concept Development → Process → Outcome → Reflection.

## Source of truth

1. `MASTER_CREATIVE_BRIEF.md` for positioning and experience principles.
2. `src/content` for project order, metadata, narrative, and media references.
3. `src/data/experienceBlueprint.ts` for section responsibilities.
4. `src/components/design-system` and `src/styles/global.css` for the implementation baseline.
5. `docs/project-foundation.md` for interaction and responsive behavior.

## Build constraints

Use React, TypeScript, Vite, React Router, and CSS Modules. Keep GSAP registration in `src/lib/gsap.ts`. Preserve semantic HTML, keyboard navigation, reduced-motion support, and the mobile vertical fallback. Do not begin final visual refinement, animation polish, or production project-detail work until the foundation is approved.

## Content status

Project names, order, categories, lead questions, chapter structure, and archive logic exist and are reusable. Production project narratives and media, final year/role metadata, biography/CV, and contact/social details are not present and must be supplied or approved before their production sections can be completed.

## Definition of foundation complete

The full journey is routed and navigable; repository-backed public content replaces internal blueprint copy; project entries link correctly; all controls work with keyboard, pointer, and touch; mobile falls back vertically; and `npm run build` passes.
