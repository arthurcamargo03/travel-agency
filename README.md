# Exclusive Dreams — Travel Agency Website

> Freelance project developed for a client in the travel industry. A high-conversion landing page designed to drive leads from Instagram directly to WhatsApp.

## Overview

Exclusive Dreams is a luxury travel agency that operates entirely through Instagram and WhatsApp. The client needed a professional web presence to increase credibility and serve as a conversion funnel — visitors land on the page and are guided to close deals via WhatsApp.

The site was built with performance, mobile experience, and conversion in mind.

## Features

- **Hero section** with a strong value proposition and primary CTA
- **Destinations showcase** — curated national and international packages with direct WhatsApp links per destination
- **Social proof** — testimonials section to build trust
- **Instagram integration section** reinforcing the brand's main channel
- **Sticky floating WhatsApp button** visible on all sections
- **Fully responsive** — mobile-first design, optimized for Instagram traffic

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 15 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Vercel | Deployment |

## Design

- **Color palette:** Black (`#0A0A0A`) + Gold (`#C9A84C`) — luxury/premium feel
- **Typography:** Geist (via `next/font`)
- **Images:** Optimized with `next/image`
- No UI libraries — styled entirely with Tailwind CSS

## Project Structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    Destinations.tsx
    Testimonials.tsx
    InstagramSection.tsx
    Footer.tsx
    WhatsAppFloat.tsx
app/
  page.tsx
  layout.tsx
  globals.css
public/
  images/
```

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on Vercel with automatic deploys on push to `main`.

---

*Freelance project — developed and delivered for a client.*
