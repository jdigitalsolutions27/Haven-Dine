# Haven Dine

Luxury fine dining restaurant website built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style UI components, Framer Motion, React Hook Form, and Zod.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Tech stack

- Next.js 14 App Router
- React 18 + TypeScript
- Tailwind CSS
- shadcn-style reusable UI components
- Framer Motion
- React Hook Form + Zod
- Lucide React

## Project structure

- `app/`: routes, layout, metadata, API handlers
- `components/`: shared UI and page sections
- `data/`: menu items, signature dishes, reviews, FAQs, events
- `lib/`: constants, SEO helpers, utility functions

## Content editing

- Edit menu items in [data/menu.ts](/d:/Web/Haven%20Dine/data/menu.ts)
- Edit signature dishes in [data/signatureDishes.ts](/d:/Web/Haven%20Dine/data/signatureDishes.ts)
- Edit reviews in [data/reviews.ts](/d:/Web/Haven%20Dine/data/reviews.ts)
- Edit events in [data/events.ts](/d:/Web/Haven%20Dine/data/events.ts)
- Edit contact details and image collections in [lib/constants.ts](/d:/Web/Haven%20Dine/lib/constants.ts)

## Images

This starter uses remote Unsplash images for premium presentation. To replace them:

1. Update image URLs in `lib/constants.ts`, `data/signatureDishes.ts`, and page/component files with your production assets.
2. If you use a different image host, update `remotePatterns` in `next.config.mjs`.

## Forms

- Reservation requests post to `/api/reservations`
- Inquiry requests post to `/api/inquiries`

These routes currently validate and return success responses only. Connect them to email, CRM, or booking infrastructure for production.
