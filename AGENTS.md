# AGENTS.md

## Project rules

- Build the site with React, TypeScript, and Vite.
- Use React Router for all page routing.
- Use CSS Modules for component-level styling.
- Keep global CSS limited to resets, CSS variables, and app-wide defaults.
- Prepare scroll-based animation work through `src/lib/gsap.ts`; register GSAP plugins there instead of inside page components.
- Do not begin visual refinement, animation polish, or individual project pages until the foundation is approved.
- Keep components small, typed, and colocated with their CSS Module when practical.
- Do not wrap imports in try/catch blocks.

## Commands

- Install dependencies with `npm install`.
- Start local development with `npm run dev`.
- Verify production output with `npm run build`.
