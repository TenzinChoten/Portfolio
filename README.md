# Portfolio

Modern developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** — animations
- **Lucide React** — icons

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local dev server |
| `npm run build` | Production build (root base path) |
| `npm run build:gh-pages` | Build for GitHub Pages project site |
| `npm run deploy` | Build for GitHub Pages and publish `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## GitHub Pages

1. In GitHub → **Settings** → **Pages**, set **Build and deployment** → **Source** to the **`gh-pages`** branch (root).
2. From your machine, publish after changes on `main`:

```bash
npm run deploy
```

That runs `predeploy` (`npm run build`), then pushes `dist/` to the `gh-pages` branch via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package. Pushes to `main` alone do not update the live site.

For a user/org site (`username.github.io`), use `npm run build` with default base `/`.

## Project structure

```
src/
├── components/     # Reusable UI (layout, navbar, …)
├── sections/       # Page sections (to be added)
├── assets/         # Images, fonts, static files
├── data/           # Navigation and content config
├── hooks/          # Custom React hooks
├── animations/     # Framer Motion variants
├── utils/          # Helpers
├── styles/         # Additional style modules
└── App.jsx
```

## Environment variables

Copy `.env.example` to `.env` for local builds:

| Variable | Description |
| --- | --- |
| `GITHUB_REPOSITORY_NAME` | Repo folder name for GitHub Pages base path |
| `VITE_UMAMI_WEBSITE_ID` | Optional Umami website ID for analytics |

Set `VITE_UMAMI_WEBSITE_ID` in `.env` before `npm run deploy` if you want analytics on the published site. The Umami ID is not committed to the repo.

## Customize

- Update brand name in `src/data/brand.js` and `src/components/navbar/NavBrand.jsx`
- Edit nav links in `src/data/navigation.js`
- Add sections with matching `id` attributes for scroll-spy highlighting
