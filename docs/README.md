# Portfolio Documentation

This directory is the living editorial and strategic documentation system for the Kylie Bi portfolio website.

Chat is used to think and decide. Validated decisions belong here.

## Status legend

- 🌱 Seed — marked, not yet developed
- 🌿 Growing — actively being developed
- 🌳 Core — validated and should not be violated without discussion
- 🍂 Archived — retained for history, no longer active

## Canonical decision hierarchy

When documentation conflicts, use this order:

1. `KYLIE_DNA` — the global single source of truth for Kylie’s identity, positioning and governing principles. It defines the person and long-term creative system from which all portfolio work derives.
2. [`../MASTER_CREATIVE_BRIEF.md`](../MASTER_CREATIVE_BRIEF.md) — the portfolio website’s highest-level creative and implementation source of truth. It translates KYLIE DNA into website-specific direction for content, structure, interaction, visual language and Codex decisions.
3. [`PROJECT_IDENTITY.md`](./PROJECT_IDENTITY.md) — the concise portfolio-specific identity, audience, purpose and professional argument.
4. [`PROJECT_CONTENT_SYSTEM.md`](./PROJECT_CONTENT_SYSTEM.md) — canonical project set, order, case-study anatomy and evidence rules.
5. [`WEBSITE_EDITORIAL_BLUEPRINT.md`](./WEBSITE_EDITORIAL_BLUEPRINT.md) — canonical reader journey and section responsibilities.
6. [`PROJECT_VERIFICATION_MATRIX.md`](./PROJECT_VERIFICATION_MATRIX.md) and [`CONTENT_STATUS.md`](./CONTENT_STATUS.md) — operational readiness and unresolved factual work.
7. `/src/content` — public-facing implementation content, which must remain aligned with the sources above.
8. Generated drafts and chat recollection — drafting aids only; never authoritative evidence.

`KYLIE_DNA` and `MASTER_CREATIVE_BRIEF.md` do not compete. The first governs the wider creative identity; the second governs how that identity is expressed and implemented in this portfolio website.

## Start here

1. [`../MASTER_CREATIVE_BRIEF.md`](../MASTER_CREATIVE_BRIEF.md) — highest-level website creative direction and implementation rules
2. [`PROJECT_IDENTITY.md`](./PROJECT_IDENTITY.md) — what the portfolio is, who it is for and what it must prove
3. [`PROJECT_CONTENT_SYSTEM.md`](./PROJECT_CONTENT_SYSTEM.md) — canonical five-project sequence and how evidence becomes publishable case studies
4. [`WEBSITE_EDITORIAL_BLUEPRINT.md`](./WEBSITE_EDITORIAL_BLUEPRINT.md) — the reader journey and responsibility of every section
5. [`PROJECT_VERIFICATION_MATRIX.md`](./PROJECT_VERIFICATION_MATRIX.md) — factual and asset readiness for each canonical project
6. [`CONTENT_STATUS.md`](./CONTENT_STATUS.md) — whole-site production status and the moments when Kylie’s input is required
7. [`website-build-brief.md`](./website-build-brief.md) — concise bridge between editorial intent and implementation

## Document responsibilities

| Document | Responsibility | Authority | Current status |
|---|---|---|---|
| `MASTER_CREATIVE_BRIEF.md` | Highest-level website creative direction, communication method, visual/motion principles and Codex decision framework | Website implementation SSOT | 🌳 Core |
| `PROJECT_IDENTITY.md` | Portfolio identity, positioning, audience, desired impression and non-goals | Portfolio foundation | 🌳 Core |
| `PROJECT_CONTENT_SYSTEM.md` | Canonical project set/order, shared case anatomy, evidence and completion rules | Project editorial standard | 🌳 Core structure / 🌿 content |
| `WEBSITE_EDITORIAL_BLUEPRINT.md` | Reader journey, section responsibilities, reading modes and MVP definition | Website editorial architecture | 🌳 Core structure / 🌿 copy |
| `PROJECT_VERIFICATION_MATRIX.md` | Per-project evidence readiness and verification gaps | Operational project audit | 🌿 Growing |
| `CONTENT_STATUS.md` | Whole-site status, production order and grouped human checkpoints | Operational tracker | 🌿 Growing |
| `website-build-brief.md` | Concise implementation handoff derived from the master brief and editorial documentation | Build bridge | 🌿 Growing |

Operational files must not redefine identity, the five-project set, project order, creative direction or editorial architecture. They track the implementation of those decisions.

## Structure

### Foundation

- `../MASTER_CREATIVE_BRIEF.md` — 🌳 Core
- `PROJECT_IDENTITY.md` — 🌳 Core
- `COMMUNICATION_PHILOSOPHY.md` — 🌱 Seed
- `DESIGN_PRINCIPLES.md` — 🌱 Seed

### Editorial architecture

- `WEBSITE_EDITORIAL_BLUEPRINT.md` — 🌳 Core structure / 🌿 copy
- `READER_JOURNEY.md` — 🌱 Seed; create only if it adds non-duplicative detail
- `INFORMATION_ARCHITECTURE.md` — 🌱 Seed; create only if implementation requires a separate artifact
- `PROJECT_PAGE_BLUEPRINT.md` — currently contained within the website editorial blueprint; split only when useful

### Project content

- `PROJECT_CONTENT_SYSTEM.md` — 🌳 Core structure / 🌿 content
- `PROJECT_VERIFICATION_MATRIX.md` — 🌿 Growing
- `content-reconstruction.md` — generated-draft boundaries and known evidence gaps
- `generated/project-inventory.md` — generated repository coverage report; do not edit manually
- project evidence maps live in `docs/projects`
- public project content lives in `/src/content`

### Experience system

- `VISUAL_LANGUAGE.md` — 🌱 Seed
- `INTERACTION_PRINCIPLES.md` — 🌱 Seed
- `project-foundation.md` — existing technical foundation
- `experience-blueprint.md` — existing data/presentation separation
- `design-system.md` — existing implementation system

### Build handoff

- `website-build-brief.md`

## Current priority

Build the minimum complete portfolio required to begin job applications, while preserving a structure that can continue to grow over time.

The initial release should prioritise content truth, clear professional positioning and three strong complete cases before extensive animation or visual polish.

## Working protocol

- Preserve validated decisions rather than reopening them without a reason.
- Revisions must identify what changed and why.
- Do not create duplicate planning documents when an existing file can be updated.
- Generated narrative is a drafting aid, never evidence of project history.
- Do not ask Kylie to maintain routine documentation.
- Bring Kylie into the process only for decisions involving accuracy, authorship, confidentiality, meaningful creative direction or publication approval.
- Group human questions into concise checkpoints after repository evidence has been exhausted.
