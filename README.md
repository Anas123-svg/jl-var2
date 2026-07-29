# Jacob + Lorek

An editorial, gallery-inspired website for Jacob + Lorek. Built with Vite, React,
TypeScript, and Tailwind CSS, following the supplied design brief exactly.

## Quick start

```bash
npm install
npm run dev       # local dev server → http://localhost:5173
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build
```

Requires Node 18+.

## Design system (from the brief)

All tokens live in `tailwind.config.js`:

| Token              | Value     | Use                       |
| ------------------ | --------- | ------------------------- |
| `warm-white`       | `#FAF8F5` | Page background           |
| `near-black`       | `#1A1A1A` | Headings / primary text   |
| `secondary`        | `#666666` | Muted body / captions     |
| `border-warm`      | `#E7E2DC` | Card outlines             |
| `divider`          | `#F0ECE6` | Section separation        |

- **Display serif:** Bodoni Moda (headings, all caps, wide tracking)
- **Body serif:** EB Garamond (18px / 30px line-height / 700px max width)
- **Interface sans:** Inter (nav, labels, meta, buttons — all caps, wide tracking)

Fonts are loaded via Google Fonts in `index.html`.

## Project structure

```
src/
├── main.tsx              App entry + router
├── App.tsx               Routes + scroll-to-top
├── index.css             Tailwind layers + base type utilities
├── data/
│   └── content.ts        ← ALL site copy lives here (single source of truth)
├── hooks/
│   └── useReveal.ts       Scroll-reveal, respects reduced-motion
├── components/
│   ├── Header.tsx / Footer.tsx
│   ├── Hero.tsx           Featured essay hero
│   ├── WorkGrid.tsx       Three editorial cards
│   ├── JournalStrip.tsx   Journal / "on view" band
│   ├── JoinList.tsx       Email signup
│   ├── PageHeader.tsx     Reusable interior-page header
│   ├── Frame.tsx          Editorial image placeholder
│   ├── Actions.tsx        ArrowLink + OutlinedButton
│   └── Reveal.tsx         Scroll-reveal wrapper
└── pages/
    ├── Home.tsx
    ├── Shop.tsx           Prints & editions grid
    ├── Socials.tsx        Channels
    ├── Events.tsx         Exhibitions & openings
    └── Press.tsx          Journal & press
```

## Editing content

Change copy in **`src/data/content.ts`** — every page reads from it, so titles,
dates, and captions stay consistent across the whole site. There is no hard-coded
copy scattered through the components.

## Adding real photography

Image areas render as intentional near-black placeholders. To use real photos,
pass a `src` (and `alt`) to the `<Frame />` component, e.g.:

```tsx
<Frame src="/images/untitled-7.jpg" alt="Untitled No. 7" caption="Untitled No. 7 · 2026" />
```

Drop images in `public/images/` and reference them with a leading slash.

## Deploying

The app uses client-side routing, so configure your host to serve `index.html`
for all routes:

- **Netlify** — `public/_redirects` is included.
- **Vercel** — `vercel.json` is included.
- **Other static hosts** — add an SPA fallback to `/index.html`.

## Wiring the newsletter

`JoinList.tsx` currently captures the email and shows a confirmation. Connect the
`handleSubmit` function to your provider (Mailchimp, Buttondown, ConvertKit, etc.).
