<p align="center">
  <img src=".github/assets/banner.png" alt="Crystal Cheng, cream-portfolio" width="820">
</p>

<p align="center">
  <a href="https://chengjcrystal.vercel.app"><img src="https://img.shields.io/badge/live_site-chengjcrystal.vercel.app-C65C86?style=flat-square&labelColor=5C3D26" alt="live site"></a>
  <img src="https://img.shields.io/badge/Next.js-16-D79A2C?style=flat-square&logo=nextdotjs&logoColor=white&labelColor=5C3D26" alt="Next.js 16">
  <img src="https://img.shields.io/badge/TypeScript-5-8A6448?style=flat-square&logo=typescript&logoColor=white&labelColor=5C3D26" alt="TypeScript 5">
  <img src="https://img.shields.io/badge/React-19-7A6047?style=flat-square&logo=react&logoColor=white&labelColor=5C3D26" alt="React 19">
</p>

# ⋆˚✩ cream-portfolio ✩˚⋆

my personal site, made to look like one of my scrapbook pages. i'm crystal, a cs and applied math student at uc berkeley, and i'm a little too into scrapbooking, so instead of reaching for a template i built my portfolio out of tape, polaroids, and pretty css. it's one long page: my software and ml work, the organizations i help run, and what i'm up to in my free time.

⟡ live: [chengjcrystal.vercel.app](https://chengjcrystal.vercel.app)

˗ˏˋ ꒰ ♡ ꒱ ˎˊ˗

## ✩ stack

- next.js (app router) + react
- typescript
- plain css, no ui framework, with custom fonts via `next/font`
- tabler + devicon icon fonts

## ✎ run locally

```bash
npm install
npm run dev
```

then open http://localhost:3000.

## ⟡ structure

- `src/app/page.tsx`: the whole page (about, experience, projects, skills, leadership, contact)
- `src/app/globals.css`: all the styling
- `src/components/`: hero, nav, footer, and the interactive bits (the photo doodle, the freshcheck demo modal)
- `public/`: images, logos, resume
