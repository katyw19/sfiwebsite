# Sustainable Fashion Initiative (SFI) — Website

Marketing + content site for the **Sustainable Fashion Initiative**, a Bay Area nonprofit making
sustainable fashion the first choice, not an alternative — through community, culture, education, and
access.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX**.

---

## Tech stack

| Concern      | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | Next.js 14 (App Router, RSC)                       |
| Language     | TypeScript                                         |
| Styling      | Tailwind CSS 3 + `@tailwindcss/typography`         |
| Content      | MDX via `next-mdx-remote/rsc` + `gray-matter`      |
| Forms        | React Hook Form + Next.js Server Actions           |
| Icons        | `lucide-react` (1.5px stroke)                      |
| Fonts        | `next/font` — DM Serif Display, DM Sans, JetBrains Mono |
| Deployment   | Vercel                                             |
| Package mgr  | pnpm                                               |

## Getting started

pnpm is run through corepack (bundled with Node ≥ 16.13), so nothing to install globally:

```bash
corepack pnpm install
corepack pnpm dev
```

Then open http://localhost:3000.

> Run each command on its own line. Don't paste a trailing `# ...` note after a
> command — zsh passes `#` straight through to `next dev` as an argument.

Scripts: `dev`, `build`, `start`, `lint`.

## Project structure

```
app/                     # App Router routes
  page.tsx               # Home
  about/{mission,team,partners}/
  events/                # list + [slug] detail
  blog/                  # list + [slug] post
  take-action/           # conversion page (forms)
  actions.ts             # server actions for all forms
  sitemap.ts robots.ts feed.xml/  # SEO + RSS
  opengraph-image.tsx icon.svg    # social card + favicon
components/
  layout/  ui/  home/  events/  blog/  forms/  mdx/
content/
  blog/                  # .mdx posts (frontmatter + body)
  events/                # .mdx events (frontmatter + body)
lib/
  site.ts content.ts     # site config + structured copy
  mdx.ts events.ts utils.ts
styles/globals.css       # Tailwind + CSS custom properties
```

## Editing content

### Blog posts

Add a `.mdx` file to `content/blog/`. Frontmatter:

```yaml
---
title: "How to Build a Capsule Wardrobe"
slug: "how-to-build-a-capsule-wardrobe"
date: "2026-06-15"          # ISO — used for sorting + RSS
author: "Katy Wan"          # must match a key in lib/content.ts `authors`
excerpt: "A short summary shown on cards and in the RSS feed."
image: "/images/blog/capsule.jpg"
tags: ["guides", "wardrobe"]
readingTime: "4 min read"   # optional — auto-computed if omitted
---
```

Posts sort newest-first automatically; the three most recent appear on the home page.

### Events

Add a `.mdx` file to `content/events/`. Frontmatter:

```yaml
---
title: "Bay Area Fall Swap 2026"
slug: "bay-area-fall-swap-2026"
date: "2026-10-17"          # ISO — upcoming vs past is derived from this
time: "1:00 PM – 4:00 PM"
location: "Bay Area, CA"
address: "123 Example St"   # optional
school: "Castilleja"        # optional
eventType: "swap"           # swap | showcase | popup | workshop | other
excerpt: "Short summary for the card."
image: "/images/events/fall-swap.jpg"
rsvpOpen: true              # RSVP form shows only when true AND upcoming
---
```

## Forms

All forms use React Hook Form for client validation and call typed **server actions** in
`app/actions.ts`, which re-validate on the server. Delivery is currently stubbed (submissions are
logged) — search for `TODO` in `app/actions.ts` to wire a provider:

- **Email to admin:** Resend / Formspree
- **Storage (optional):** Airtable / Google Sheets

Newsletter, RSVP, Volunteer, Host-a-Swap, and Program-Lead forms are all wired the same way.

## Design system

- **Palette:** warm neutrals (linen/oat) + muted sage/eucalyptus greens. Tokens live in
  `tailwind.config.ts` and `styles/globals.css`. No pure white/black.
- **Type:** DM Serif Display (h1–h3), DM Sans (body/UI), JetBrains Mono (stats).
- **Thread line:** the signature 1–2px pressed-sage motif — see `components/ui/ThreadLine.tsx`.
- Section backgrounds alternate linen ↔ frost-white for rhythm.

## Images

Photography is currently rendered as on-brand gradient placeholders
(`components/ui/PlaceholderImage.tsx`). Drop real photos into `public/images/{team,blog,events,partners}`
and swap the placeholders for `next/image` — every placeholder is marked with a `TODO`.

## Deployment

Deploys to **Vercel** with zero config (framework auto-detected). Set `NEXT_PUBLIC_SITE_URL` to the
production domain so canonical URLs, the sitemap, RSS, and Open Graph tags resolve correctly.

## Content TODOs

Grep for `TODO` to find everything still needing real content — team bios, partner logos, social
handles, the donation URL, the admin email address, and photography.
