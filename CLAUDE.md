# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
```

No test runner is configured yet.

## Stack

- **Next.js 16.2.9** — App Router only (no Pages Router). This is a post-training-cutoff version with breaking changes. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`.
- **React 19.2.4** — canary-based, used via App Router
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css` and `@tailwindcss/postcss`. No `tailwind.config.js` — theme customization uses `@theme inline {}` blocks in CSS.
- **TypeScript 5** — strict mode, path alias `@/*` maps to the repo root

## Architecture

This is a blank App Router scaffold. All routes live under `app/`:

- `app/layout.tsx` — root layout, loads Geist Sans + Geist Mono via `next/font/google`, applies them as CSS variables (`--font-geist-sans`, `--font-geist-mono`)
- `app/globals.css` — global styles; defines `--background`/`--foreground` CSS variables, dark mode via `@media (prefers-color-scheme: dark)`, maps fonts into Tailwind via `@theme inline`
- `app/page.tsx` — home page (placeholder)

`next.config.ts` is empty — no custom config yet.

Path alias: import from `@/app/...`, `@/components/...`, etc. (root-relative).
