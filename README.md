# Debarghya Datta — Portfolio

A modern, dark-themed developer portfolio built with React, Vite, TypeScript, and GSAP.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** (fast dev server + build)
- **GSAP** (scroll animations and transitions)
- **CSS Modules** (scoped component styles)

## Project Structure

```
src/
├── components/       # All UI components
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── About.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   ├── Experience.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   └── Footer.tsx / .module.css
├── data/
│   └── portfolio.ts  # All your content lives here
├── types/
│   └── index.ts      # TypeScript interfaces
├── styles/
│   └── globals.css   # CSS variables, resets, base styles
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customisation

All content is sourced from `src/data/portfolio.ts`. To update:

- **Personal info / links** → `portfolioData.personal`
- **Projects** → `portfolioData.projects` (add GitHub/demo URLs here)
- **Skills** → `portfolioData.skills`
- **Experience** → `portfolioData.experience`
- **Education** → `portfolioData.education`

## Design Tokens

CSS variables are defined in `src/styles/globals.css`. Key variables:

```css
--accent: #6ee7b7;       /* mint green accent */
--bg-primary: #09090e;   /* near-black background */
--font-sans: 'Syne';     /* display / heading font */
--font-mono: 'DM Mono';  /* code / label font */
```

## Deployment

Deploy to Vercel with zero config:

```bash
npm i -g vercel
vercel
```
