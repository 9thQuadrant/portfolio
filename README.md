# Portfolio – Phaneendra Kanduri

Rebuilt with [Astro](https://astro.build). Static output, zero JS by default.

## Stack

- **Framework**: Astro 4
- **Styling**: Tailwind CSS
- **Fonts**: Syne (headings), Inter (body), DM Mono (labels/code)
- **Animations**: Pure CSS keyframes — no JS runtime

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the build locally
```

## Deploy to Netlify

Connect the repo to Netlify. Build settings:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

## Project structure

```
src/
├── pages/
│   └── index.astro       # Main page
├── layouts/
│   └── Base.astro        # HTML shell, fonts, global CSS
├── components/
│   └── Stars.astro       # CSS-only twinkling stars
└── data/
    └── content.ts        # All copy — experiences, skills, links
```

## Updating content

All copy lives in `src/data/content.ts`. Edit that file to update roles, achievements, skills, or links. No component changes needed.
