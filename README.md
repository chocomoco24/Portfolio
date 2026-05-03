<div align="center">

# Debarghya Datta — Portfolio

**Personal portfolio website built with React, TypeScript, Three.js, and GSAP.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r184-black?style=flat&logo=three.js&logoColor=white)](https://threejs.org)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat&logo=greensock&logoColor=white)](https://greensock.com/gsap)

[Live Demo](https://github.com/chocomoco24) · [LinkedIn](https://www.linkedin.com/in/debarghya4/) · [Twitter / X](https://x.com/debarghyadatta4)

</div>

---

## Overview

A handcrafted developer portfolio that goes beyond a static resume. It features a 3D physics-based hero scene, magnetic text interactions, scroll-driven animations, and a custom cursor — all without any UI component library.

## Features

- **3D Physics Balls** — Hero section with 15 Three.js spheres clustered in 3D space. Hover over them to scatter the cluster; they drift back together on their own via a center-pull force.
- **Magnetic Text** — Letters on the hero heading repel the cursor as you move over them using per-character mouse tracking.
- **GSAP Scroll Animations** — Every section fades and slides in on scroll using `IntersectionObserver`-driven GSAP timelines.
- **Custom Cursor** — A smooth, lag-following cursor that replaces the system pointer.
- **Pill Navbar** — Floating pill navigation that highlights the active section as you scroll.
- **Loader Screen** — Animated loading screen with a progress bar before the portfolio is revealed.
- **Back to Top + Resume FAB** — Floating action buttons that appear after scrolling 35% down the page.
- **Fully Responsive** — Adapts cleanly across desktop, tablet, and mobile.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| 3D / WebGL | Three.js r184 |
| Animations | GSAP 3.12 |
| Styling | CSS Modules + CSS custom properties |
| Fonts | Local / system fonts via CSS variables |

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx            # Hero section with 3D balls and magnetic text
│   ├── PhysicsBalls.tsx    # Three.js physics scene (cluster + hover repulsion)
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Project cards
│   ├── Skills.tsx          # Skills grid
│   ├── Experience.tsx      # Experience timeline
│   ├── Contact.tsx         # Contact form / links
│   ├── Navbar.tsx          # Top navigation bar
│   ├── Cursor.tsx          # Custom cursor
│   ├── Loader.tsx          # Loading screen
│   └── Footer.tsx
├── context/
│   └── LoadingProvider.tsx # Global loading state
├── data/
│   └── portfolio.ts        # All personal data, projects, skills, experience
├── styles/
│   └── globals.css         # CSS variables, resets, global styles
└── App.tsx                 # Root — layout, scroll tracking, FAB buttons
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/chocomoco24/debarghya-portfolio.git
cd debarghya-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Customisation

All personal content lives in a single file — `src/data/portfolio.ts`. Update your name, role, projects, skills, experience, and social links there and the entire site reflects the changes automatically.

To change the accent color (`#6ee7b7`), update the `--accent` CSS variable in `src/styles/globals.css`. The 3D ball shades in `PhysicsBalls.tsx` are derived from this color and can be updated to match.


## Deployment

The site is configured for zero-config deployment on [Vercel](https://vercel.com). Push to your `main` branch and Vercel picks up the Vite build automatically.

```bash
npm run build
# Output is in /dist — deploy this folder to any static host
```

---

<div align="center">



</div>
