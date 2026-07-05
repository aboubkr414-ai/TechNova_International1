# TechNova International

Premium landing website for TechNova International — built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx      # Root layout, fonts, SEO metadata
  page.tsx         # Assembles all sections
  globals.css      # Base styles
components/
  Navbar.tsx        # Sticky nav with mobile menu
  Hero.tsx          # Full-screen animated hero + country ticker
  About.tsx         # Mission + pillar cards
  Programs.tsx      # 6 program cards
  Competition.tsx   # IJCC section, live countdown, timeline
  WhyChoose.tsx     # Animated statistic counters
  Contact.tsx        # Contact cards
  Footer.tsx          # Footer with links
```

## Design tokens

- **Colors:** navy-950 `#060F1E`, navy-900 `#0A1930`, gold-500 `#C9A227`, ivory `#F6F7FA`
- **Fonts:** Space Grotesk (display), Inter (body), IBM Plex Mono (data/labels)

## Notes

- Update the countdown target date in `components/Competition.tsx` (`useCountdown("2026-03-15T09:00:00")`).
- Update the WhatsApp number in `Hero.tsx` and `Contact.tsx`.
- Add a real favicon and OG image to `/public` before deploying.
- Deploy on Vercel for the best Next.js 16 support.
