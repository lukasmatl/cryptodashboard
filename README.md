# CryptoVista Dashboard

A crypto portfolio intelligence dashboard built with Next.js (App Router + TypeScript), Tailwind CSS, Shadcn/UI-inspired components, Radix Themes, and Motion animations. The interface highlights portfolio performance, asset allocation, market intelligence, and actionable workflows for managing digital assets across CeFi and DeFi venues.

## Tech stack

- **Framework:** Next.js 14 with the App Router and TypeScript
- **UI:** React 18, Tailwind CSS 3, Shadcn/UI component patterns, Radix UI + Themes
- **Design system:** Custom gradients, dark theme styling, Material Symbols, Heroicons, and Lucide icons
- **Animation:** Motion (successor to Framer Motion)
- **Typography:** Inter, Manrope, IBM Plex Sans, Geist Sans/Mono

## Getting started

```bash
pnpm install
pnpm dev
```

or with npm / yarn if you prefer other package managers.

## Available scripts

- `pnpm dev` – start a local development server
- `pnpm build` – create a production build
- `pnpm start` – run the production build
- `pnpm lint` – run Next.js linting

## Project layout

```
src/
  app/
    layout.tsx       # Root layout, fonts, Radix Themes provider
    page.tsx         # Dashboard page composition
    globals.css      # Tailwind base styles + custom theming
  components/
    dashboard/       # Feature cards for portfolio metrics, allocations, news, tables
    ui/              # Reusable Shadcn/UI inspired primitives (button, card, tabs...)
  lib/
    utils.ts         # Tailwind class merging helper
```

## Notes

- The project references third-party fonts (Material Symbols via Google Fonts, Geist via the official `geist` package).
- Data displayed is mock data to illustrate layout and component composition.
- Tailwind plugins for forms and typography are included to support rich UI patterns.
