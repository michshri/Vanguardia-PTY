<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Vanguardia website (`vanguardia-pty`)

Marketing website for **Vanguardia Constructions Group** ("Constructions" in plural, as on the logo), a Panama-based family construction and property services business. Domain and all email addresses: **vanguardiapty.com** (no hyphen). Use this exact company name in content, metadata and branding; never "Construction Group" (singular) or "Vanguardia PTY". Hosted on Vercel, source on GitHub. For detailed project knowledge and working method, use the `vanguardia-website` subagent (`.cursor/agents/vanguardia-website.md`).

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 6 (strict). No UI or CSS libraries.
- Styling: one global stylesheet, `app/globals.css`, with CSS variables in `:root`.
- Content and translations: `lib/translations.ts`, `lib/localized-content.ts`, plus some page-level `copy` objects.
- Languages: Spanish (default, clean URLs), English and French via `?lang=en|fr`. Use `resolveLocale` and `withLang` from `lib/locale.ts`.

## Mandatory rules

1. **Inspect before changing.** Read the relevant code and check side effects on navigation, footer, translations (all three languages), SEO (metadata, `app/sitemap.ts`, redirects in `next.config.mjs`) and shared styles.
2. **Preserve working functionality.** Do not rebuild or restructure working parts because another approach is preferred. Reuse and extend existing components and patterns.
3. **Keep it simple.** Choose the simplest robust solution that fits the existing architecture. Propose major architectural changes (routing, i18n approach, new services) before implementing them.
4. **Never invent business content.** No certifications, clients, projects, awards, statistics, guarantees, phone numbers or claims beyond what is in the repository (including `Vanguardia PTY - One Pager.md`) or supplied by the owner. Flag placeholders instead of filling them.
5. **Multilingual by default.** Every user-facing string must exist in Spanish, English and French, written naturally for each market — no literal translations or hardcoded single-language text.
6. **Dependencies.** Do not install, remove, upgrade or override packages without explaining why and the consequences, and getting approval.
7. **No hidden errors.** Never suppress warnings, disable lint/type rules or set `ignoreBuildErrors` to make a build pass. Fix the cause.
8. **Security.** Never put secrets, API keys or tokens in frontend code or Git. Server-only secrets go in Vercel environment variables; only `NEXT_PUBLIC_*` values may reach the browser.

## Git and deployment

- Respect the current branch. Never overwrite unrelated or uncommitted changes.
- Never force-push, delete branches or repositories, or push directly to `master`.
- Do not commit, push, merge or deploy without the owner's explicit approval. When running as a Cursor Cloud Agent, work only on a dedicated feature branch and open a pull request, so changes are reviewed on a Vercel preview before reaching production.

## Checks

- `npm run build` — production build, includes the TypeScript check. Required before significant work is considered complete.
- `npx tsc --noEmit` — TypeScript only.
- Linting is currently not working: `npm run lint` calls `next lint`, which Next.js 16 removed, and `.eslintrc.json` is the legacy format. Report this rather than claiming lint passed.
- Check affected routes in all three languages and at mobile, tablet and desktop widths.
- Only report a check as passing if it was actually run and the result was seen. State clearly what could not be tested.

## Communication

The owner is the business decision-maker, not a developer. Explain in plain English, be concise, recommend one best option, explain consequences of important decisions, and say plainly when an idea is technically poor or overcomplicated.
