# Parledev

Cyberpunk-themed portfolio for Jeffery Parle, built with Next.js, TypeScript, React, and Tailwind CSS for deployment on Vercel.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Notes

- `app/page.tsx` contains the portfolio content and component structure.
- `app/globals.css` contains the Cyberpunk.net-inspired style tokens and HUD components.
- `docs/styleguide.md` documents the visual direction.
- `docs/content-plan.md` documents how the resume content maps into the site.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Branching Strategy

Use trunk-based development with short-lived branches.

- `main` is the production branch and should stay deployable.
- Use `feature/...` for new sections or visual changes.
- Use `fix/...` for bug fixes.
- Use `chore/...` for docs, config, and dependency cleanup.
- Open pull requests into `main` so Vercel preview deployments can be reviewed before production.
- Direct commits to `main` are only for very small copy or config fixes.

## Deploying

The app is Vercel-ready with the standard Next.js build output. Connect the GitHub repository in Vercel, or run `vercel` from the project root if the Vercel CLI is installed and authenticated.
