# Portfolio Content Repository

Each project has a dedicated folder containing metadata, narrative content, and an asset convention:

- `metadata.ts`: title, route, category, role/year metadata, lead question, summary, and next-project relationship.
- `narrative.ts`: ordered chapter content for Context, Research, Concept Development, Process, Outcome, and Reflection.
- `assets/`: future production assets for the project.

Media items are described in content files rather than layout components. Use these asset naming prefixes consistently:

- `hero-*`
- `research-*`
- `process-*`
- `gallery-*`
- `archive-*`

When final assets are added, include `src`, `alt`, and `caption` metadata with each media item.

Recommendation for future production work: if project narratives become long-form, consider moving chapter bodies from TypeScript arrays into Markdown files while preserving the same exported schema.
