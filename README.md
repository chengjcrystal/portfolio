# cream-portfolio

My personal site, made to look like one of my scrapbook pages. I'm Crystal, a CS and Applied Math student at UC Berkeley, and I'm a little too into scrapbooking, so instead of reaching for a template I built my portfolio out of tape, polaroids, and pretty CSS. It's one long page: my software and ML work, the organizations I help run, and what I'm up to in my free time.

Live: chengjcrystal.vercel.app

## Stack

- Next.js (App Router) + React
- TypeScript
- Plain CSS (no UI framework), custom fonts via `next/font`
- Tabler + Devicon icon fonts

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `src/app/page.tsx`: the whole page (about, experience, projects, skills, leadership, contact)
- `src/app/globals.css`: all styling
- `src/components/`: Hero, Nav, Footer, and the interactive bits (photo doodle, FreshCheck demo modal)
- `public/`: images, logos, resume
