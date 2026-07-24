# Source Library

This directory is the canonical knowledge layer for the portfolio system.

## Purpose

- Preserve confirmed project information as maintainable Markdown.
- Keep original and working documents as supporting evidence.
- Separate raw source material from website-ready presentation content.
- Provide a stable source for future CV, portfolio, case study, and website updates.

## Content flow

```text
Raw files
  ↓
Source Library
  ↓
Canonical Markdown
  ↓
Website content
  ↓
Portfolio website
```

## Project structure

Each project follows the same structure:

```text
project-name/
├── README.md
├── canonical.md
├── CHANGELOG.md
├── working/
├── original/
└── assets/
    └── raw/
```

`canonical.md` is the single source of truth. Other files are supporting material.
