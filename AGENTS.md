# Agent Instructions

## Project

This is the Parledev portfolio site built with Next.js, TypeScript, React, and Tailwind CSS for deployment on Vercel.

## Branching Strategy

Use trunk-based development with short-lived branches.

- `main` is the production branch and should stay deployable.
- Before creating a short-lived branch, switch to `main`, pull the latest remote changes with a fast-forward update, then branch from the updated `main`.
- Use `feature/...` for new sections or visual changes.
- Use `fix/...` for bug fixes.
- Use `chore/...` for docs, config, and dependency cleanup.
- Open pull requests into `main` so Vercel preview deployments can be reviewed before production.
- Do not prefix pull request titles with agent labels like `[codex]`; use a clear, human-readable title instead.
- Direct commits to `main` are only for very small copy or config fixes.

## Multi-Agent Coordination

- Before editing, identify the intended file scope and keep changes inside that scope.
- Do not revert, overwrite, or reformat unrelated work.
- If another agent or user has modified a file, read the current file before editing and preserve their changes.
- Prefer small, focused commits that match the requested task.
- Do not add dependencies unless the task clearly needs them and existing project tools are insufficient.
- Preserve the visual direction in `docs/styleguide.md` and content strategy in `docs/content-plan.md` unless explicitly asked to change them.
- Do not deploy, push to `main`, or change Vercel/GitHub settings unless explicitly requested.

## Accessibility

- Keep static page text in the normal document flow with semantic HTML so screen readers can read it through standard browse/reading navigation.
- Do not add `tabIndex` to non-interactive headings, paragraphs, cards, or decorative text just to make copy reachable by the Tab key. Reserve Tab order for links, buttons, form fields, and other real controls.
- Do not wrap visible text-heavy UI in `role="img"` or replace it with a single `aria-label`; that can hide the individual text from assistive technology. Use image roles only for genuinely image-like visuals, and keep decorative imagery `aria-hidden` when appropriate.
- Use landmarks, headings, lists, explicit link/button text, and `aria-hidden="true"` on decorative icons to preserve a clear screen-reader structure.

## Validation

Before merging or pushing meaningful implementation changes, run:

```bash
npm run lint
npm run build
```

Docs-only changes may be committed without a build if the change does not affect runtime code.
