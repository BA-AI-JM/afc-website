# Almighty Fighting Championship — Website

Official website for Almighty Fighting Championship (AFC), a UK regional MMA promotion based in Yorkshire. 42+ events since 2016, ~973 fighters.

## What's Built

- **Home** — Hero with next event countdown, stats bar, recent events, current champions, photo gallery, fighter registration CTA
- **Events** — Upcoming events with ticket links + full past event archive with fight cards
- **Fighters** — Searchable fighter directory
- **Championships** — Current champions + title history per division
- **About** — AFC history, venues, the team
- **Contact** — Fighter registration + general enquiries

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Package manager | npm |

This is a **static site** (`output: 'export'` in next.config.ts). No server, no database, no API keys needed. Just build and deploy.

## Documentation

The `docs/` folder contains:

| File | What it is |
|------|-----------|
| `WEBSITE-BRIEF.md` | Full project brief — client background, event history, site structure, design direction |

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open http://localhost:3000

## Build & Deploy

```bash
# Build static export
npm run build
```

This produces an `out/` directory containing the complete static site. Deploy to any static host:

- **Vercel** — connect this repo, it auto-detects Next.js static export
- **Netlify** — set build command to `npm run build`, publish directory to `out`
- **GitHub Pages** — push the `out/` directory
- **Any static host** — upload the `out/` folder

No environment variables required. No server needed.

## Images

Event photography is included in `public/images/` and logos in `public/logos/`. These are AFC's own assets provided for the website.

## Data

Fight data (events, fighters, championships) lives in `src/data/` as TypeScript files. To update event cards, fighters, or champions, edit those files directly.
