# Dor de Miere — Landing Page

One-page landing for a family craft-honey apiary. Static site, no backend, deployed to Cloudflare Pages.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Radix base)

## Design system

Locked before any component work started, via the `ui-ux-pro-max` skill — see [src/index.css](src/index.css):

- **Palette:** honey amber (`--color-honey-*`) + light wood (`--color-wood-*`) on a cream background. One accent color, reserved for a single hero moment — not sprinkled across every section.
- **Type:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (warm, characterful — headings) + [Inter](https://fonts.google.com/specimen/Inter) (neutral, highly readable — body). Both self-hosted via `@fontsource-variable`, no external font requests.
- **Shape:** soft, generous radius (`--radius: 0.85rem`); warm-tinted soft shadows only (`--shadow-soft`, `--shadow-lift`), never pure black.
- **Motion:** at most one memorable moment site-wide (hero); everything else is static or a brief 300–400ms fade/slide on scroll; `prefers-reduced-motion` respected globally (see the `@media` block in `index.css`).

All components must read colors/fonts/radius from these tokens — never hardcode a hex value or a `font-family` in a component.

## Structure

```
src/
  components/
    ui/          shadcn/ui primitives (button, card, ...) — installed via `npx shadcn add <name>`
    layout/       Header, Footer, nav
    sections/     Hero, Story, Honey/Products, Process, FAQ, CTA — one file per landing section
  data/           page copy/config as typed objects (site.ts, ...) — no copy hardcoded in JSX
  lib/            utils.ts (cn helper), misc client-side helpers
  assets/         images/icons processed by Vite (imported in code)
  index.css       design tokens + Tailwind entry
public/           files served as-is (favicon, _headers for Cloudflare Pages, robots.txt, static images)
```

## Commands

```sh
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build to dist/
npm run preview   # preview the production build locally
```

## Deploying to Cloudflare Pages

Either connect the repo in the Cloudflare dashboard (build command `npm run build`, output directory `dist`), or deploy from the CLI:

```sh
npm run build
npx wrangler pages deploy dist
```

`wrangler.toml` pins the project name and output directory. `public/_headers` sets basic security headers and long-lived caching for hashed assets.
