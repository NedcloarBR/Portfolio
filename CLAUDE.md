# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package manager

Always use **yarn** — never npm. The project uses Yarn 4.6.0 with Plug'n'Play (no node_modules); `npm install` will fail.

## Commands

```bash
yarn dev        # Start dev server on :3000
yarn build      # Build Next.js standalone output
yarn lint       # Biome lint (no auto-fix)
yarn format     # Biome format (writes in place)
yarn check      # Biome lint + format validation (no modifications)
```

Biome is the linter and formatter — ESLint is intentionally ignored during builds (`eslint.ignoreDuringBuilds: true`).

## Commit style

Follow Conventional Commits: `feat:`, `fix:`, `chore:`, `refactor:`, `style:`, `docs:`, etc.

## Internationalization

Translations live in `public/locales/en-US.json` and `public/locales/pt-BR.json`. **Always update both files** when adding or changing any user-facing string. Supported locales are `en-US` (default) and `pt-BR`. Routes always include the locale prefix (e.g., `/en-US/`, `/pt-BR/`).

## shadcn/ui components

Do **not** hand-edit files inside `src/components/ui/` — they are managed by the shadcn/ui CLI. Add or update components with the CLI instead.

## Tailwind CSS 4.0

Configuration is CSS-first (no `tailwind.config.js`). Custom theme variables and `@theme` overrides live in `src/styles/global.css`.

## TypeScript

Strict mode is enabled. Path alias `@/*` maps to `src/*`. Prefer explicit types; use `biome-ignore` comments (with an explanation) only when strictly necessary.
