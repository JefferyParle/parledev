# Agent Instructions

## Project

This is the Parledev portfolio site built with Next.js, TypeScript, React, and Tailwind CSS for deployment on Vercel.

## Branching Strategy

Use trunk-based development with short-lived branches.

- `main` is the production branch and should stay deployable.
- Use `feature/...` for new sections or visual changes.
- Use `fix/...` for bug fixes.
- Use `chore/...` for docs, config, and dependency cleanup.
- Open pull requests into `main` so Vercel preview deployments can be reviewed before production.
- Direct commits to `main` are only for very small copy or config fixes.

## Validation

Before merging or pushing meaningful implementation changes, run:

```bash
npm run lint
npm run build
```

Docs-only changes may be committed without a build if the change does not affect runtime code.
