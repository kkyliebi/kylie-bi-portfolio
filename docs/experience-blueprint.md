# PB-002 experience blueprint

PB-002 separates narrative responsibility from React presentation.

The experience blueprint lives in `src/data/experienceBlueprint.ts`. Each section defines:

- `mission`
- `currentQuestion`
- `reveals`
- `leavesUnresolved`
- `nextDestination`

This is not final copy. It is structural guidance for future writing and design work.

## Principle

Components should not decide what a section means. Components should render a section definition supplied by the data layer.

Future iterations can replace the blueprint text, reorder sections, or refine narrative responsibilities without changing section component logic.

## Current sections

1. Landing
2. About
3. Archive
4. Project 01
5. Project 02
6. Project 03
7. Project 04
8. Project 05
9. Contact

Each section currently renders its blueprint fields through `SectionSkeleton`.

## Future use

When production copy begins, keep section responsibility in the data layer and pass it into components. Avoid hardcoding final page copy inside `src/sections`.
