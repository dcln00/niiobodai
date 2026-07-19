# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server
npm run build      # production build (Nitro, Vercel preset)
npm run generate   # static generation
npm run preview    # preview a production build
```

There is no test suite, linter, or typecheck script configured. To verify a change actually works, run `npm run dev` and drive the affected route in a browser — this is how prior regressions (SSR 500s, content fetch errors) were caught, since they don't surface in a build.

**Do not use the `claude-in-chrome` browser automation tools.** When a change needs visual/browser verification, ask the user to check it rather than driving the browser yourself.

## Stack

Nuxt 4 (Vue 3, `srcDir` defaults to `app/`), `@nuxt/content` v3, `@nuxt/image`, `@nuxt/fonts`, Tailwind CSS v4 via `@nuxtjs/tailwindcss@7-beta`. Deploys to Vercel (`nitro.preset: 'vercel'`).

## Non-obvious conventions

- **All SFC templates use Pug** (`<template lang="pug">`), **tab-indented**, with **attributes written inline on one line** (never split across lines, even when long). Match this in every edit.
- **Tailwind is v4**: use canonical class forms (`leading-snug!` not `!leading-snug`, `after:duration-250` not `after:duration-[250ms]`). Theme tokens and custom utilities live in `app/assets/css/tailwind.css` via `@theme` (`brand-accent`, `brand-black`, `brand-dark`, `brand-bg`) and `@utility` (`container`, `font-outfit`, `form-input`) — there is no `tailwind.config`.
- **`@vueuse/motion` is NOT installed.** Do not add `v-motion-*` directives — an unresolved directive crashes SSR with `getSSRProps` (500), not a warning. Legacy `v-motion` usages were the cause of past 500s.

## Architecture

**`app/app.vue` is the shell** (no `layouts/`). It composes `AppHeader` + `NuxtPage` + `AppFooter`, owns the mobile-nav open state, and sets all global SEO. `AppHeader` emits `toggle-show` → `app.vue` toggles `showMobileNav` → passed to `MobileNav` (a full-screen `lg:hidden` overlay that emits `close`).

**`useMeta()` is the single source of truth for site identity.** It returns a `useState` object holding `siteName`, `tagline`, `siteDescription`, `ogImage`, `locale`, a `socials` array, and a `business` block. `app.vue` derives `useHead`/`useSeoMeta` and a JSON-LD `ProfessionalService` schema from it; `AppHeader`/`AppFooter` render `meta.socials`. `business.sameAs` is computed from `socials`, so social links have one definition. Change site-wide meta here, not in individual pages.

**`useNavigation()` is the single nav menu** (also `useState`), consumed by both `AppHeader` and `MobileNav`. Add/remove nav items here.

**SVG icons** are components in `app/components/svg/*.vue` (plain `<template>`, `fill`/`stroke="currentColor"` so Tailwind text-color classes drive them). Nuxt auto-imports them as `SvgLinkedin` etc.; use kebab tags (`svg-linkedin`). **Gotcha:** dynamic `<component :is="'svg-linkedin'">` with a *string* does not resolve — icons referenced dynamically (e.g. from `meta.socials`) must be imported from `#components` into a `Record<string, Component>` map and passed as the component object (see `AppHeader.vue`/`MobileNav.vue`).

**Content (blog):** `content.config.ts` defines a `blog` collection (`type: 'page'`, `blog/**/*.md`, schema `title`/`description`/`date`/`image`). `pages/blog.vue` is a `<NuxtPage/>` wrapper for the nested `blog/index.vue` (list) and `blog/[slug].vue` (post). Query with `queryCollection('blog')`. **Use `useAsyncData` (server-side), not `useLazyAsyncData`** for content — the lazy/client variant races the on-demand SQL dump on cold start and shows a spurious fetch error. Detail pages must guard a null result with `createError({ statusCode: 404 })` before rendering.

**Routing:** `app/router.options.ts` forces scroll-to-top on every navigation (waits for `page:finish`). `pages/[slug].vue` is a catch-all that title-cases the slug via `utils/title-case.ts` (auto-imported) — it renders any top-level segment as a heading by design.
