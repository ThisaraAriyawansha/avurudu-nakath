# AvuruduNakath 🪔

> Sinhala & Tamil New Year 2026 — Auspicious Nakath Times

A beautiful Next.js website showing all auspicious Nakath times for Sinhala & Tamil New Year 2026, with a live countdown timer and support for English, Sinhala (සිංහල), and Tamil (தமிழ்).

## Features

- 🕐 **Live countdown** to Punya Kalaya (New Year moment — April 13, 8:19 PM)
- 📿 **All 6 Nakath times** with direction, colour, and ritual descriptions
- 🌏 **3 languages** — English, Sinhala, Tamil
- 🪔 **Traditional SVG oil lamp** animation
- 🌺 **Floating petals** decorative background
- 📱 **Mobile-first** responsive design
- 🎨 **Avurudu color palette** — saffron, jasmine, peacock, avocado

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended — Free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** and import your GitHub repo
4. Click **Deploy** — done! Vercel auto-detects Next.js

## Project Structure

```
avurudunakath/
├── app/
│   ├── globals.css        # Avurudu colors, fonts, animations
│   ├── layout.tsx         # Root layout + metadata/SEO
│   └── page.tsx           # Main page
├── components/
│   ├── Countdown.tsx      # Live countdown timer
│   ├── FloatingPetals.tsx # Decorative animated petals
│   ├── LangSwitcher.tsx   # EN / සිං / த toggle
│   ├── NakathCard.tsx     # Individual Nakath time card
│   └── OilLamp.tsx        # Traditional SVG oil lamp
├── lib/
│   └── nakath.ts          # All Nakath data + translations
└── README.md
```

## Nakath Times 2026

| Nakath | Date | Time (SLT) |
|--------|------|-----------|
| Nonagatha (Old Year Ends) | April 13 | 2:14 PM |
| **Punya Kalaya (New Year!)** | **April 13** | **8:19 PM** |
| Lipa Ganima (Light Hearth) | April 14 | 6:14 AM |
| Kama Ganima (First Meal) | April 14 | 7:19 AM |
| Ganu Denu (First Work) | April 14 | 8:14 AM |
| Hisa Thel Gema (Oil Bath) | April 14 | 9:24 AM |

> ⚠️ Please verify final Nakath times with the official Sri Lanka Astronomer's Department before publishing.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Google Fonts: Yeseva One, DM Sans, Noto Serif Sinhala, Noto Serif Tamil

---

සුභ අළුත් අවුරුද්දක් වේවා! 🌺 இனிய தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள்!
