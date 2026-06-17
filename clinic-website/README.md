# Dr. Umesh Chahar MD Physician — Clinic Website

A modern, responsive one-page website for a general physician clinic, built
with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Where to edit content

Almost everything text-based — doctor name, phone number, address, working
hours, services, testimonials, and FAQs — lives in one file:

```
lib/data.ts
```

Edit the values there and the whole site updates automatically.

## Swap in real photos

The hero and "About the Doctor" sections currently use an illustrated
placeholder (`components/DoctorIllustration.tsx`) since no real photo was
provided. To use an actual photograph:

1. Add the photo file to `public/doctor-photo.jpg`.
2. In `components/Hero.tsx` and `components/AboutDoctor.tsx`, replace
   `<DoctorIllustration className="w-full h-auto" />` with:
   ```tsx
   import Image from "next/image";
   <Image src="/doctor-photo.jpg" alt="Dr. Umesh Chahar" width={400} height={480} className="w-full h-auto object-cover" />
   ```
3. Add a real Open Graph image at `public/og-image.jpg` (1200×630px) for
   social link previews — referenced in `app/layout.tsx`.

## Google Maps

Replace `mapsEmbedSrc` in `lib/data.ts` with your clinic's real embed URL:
Google Maps → search your clinic → Share → Embed a map → copy the `src`
value from the iframe code.

## Appointment & contact forms

Both forms post to `app/api/appointment/route.ts`, which currently logs the
submission to the server console as a placeholder. Before going live, wire
this up to a real notification channel, for example:

- Email via [Resend](https://resend.com) or SendGrid
- A Google Sheet or database (Supabase, Airtable, etc.)
- A CRM webhook

## Deployment

The site is ready to deploy on [Vercel](https://vercel.com) (the team behind
Next.js) — push this folder to a GitHub repo and import it in Vercel, or run
`npx vercel` from this directory. It also works on any host that supports
Node.js (Netlify, Render, a VPS with PM2, etc.).

## SEO

- Metadata, Open Graph tags, and JSON-LD structured data (`Physician`
  schema) are set in `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` and
  `robots.txt` automatically.
- Update the `siteUrl` constant in `app/layout.tsx` to your real domain
  before deploying.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom blue/green clinic theme — see `tailwind.config.ts`)
- Framer Motion (scroll reveals, hero entrance, accordion, mobile menu)
- lucide-react (healthcare icon set)
