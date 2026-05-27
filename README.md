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

1. Set your repository name in `.env` or when building:

   ```bash
   GITHUB_REPOSITORY_NAME=your-repo-name npm run build:gh-pages
   ```

2. Deploy:

   ```bash
   npm run deploy
   ```

3. In GitHub → **Settings** → **Pages**, set source to the `gh-pages` branch.

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

## Customize

- Update brand name in `src/components/navbar/NavBrand.jsx`
- Edit nav links in `src/data/navigation.js`
- Add sections with matching `id` attributes for scroll-spy highlighting
