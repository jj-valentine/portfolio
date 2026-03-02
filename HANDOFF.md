# Portfolio Build — HANDOFF

## Status

| Phase | Status | Commit |
|-------|--------|--------|
| 0: Git + GitHub setup | Done | 776a7bc |
| 1: Scaffold + deps + globals.css + types | Done | d968bc9 |
| 2: Layout shell (Nav, Footer, AnnouncementBar) | Done | 87f825c |
| 3: UI primitives (Button, Card, Badge) | Done | 7117162 |
| 4: Home page (Hero + RoleCycler) | Done | 96814b9 |
| 5: Blog system (MDX pipeline + syntax highlighting) | Done | ef30f97 |
| 6: Projects page | Done | 4f72cb2 |
| 7: About page | Done | 121cf9c |
| 8: Contact (form + Resend API route) | Done | 282135d |
| 9: Polish (metadata, sitemap, robots, reduced-motion) | Done | c1c0f86 |
| 10: Deploy to Vercel | **Pending** — user will trigger | — |

## Resume Instructions

```
cd ~/dev/new/portfolio
git checkout feat/phases-3-10
```

Say: **"Deploy to Vercel"** when ready.

## What's Built

### Routes
- `/` — Home: Hero with RoleCycler animation, About blurb, Featured projects, Latest posts, Dog training CTA
- `/about` — Education, Engineering, Teaching, Dog Training cards
- `/blog` — Featured post hero, category filter tabs, post list
- `/blog/[slug]` — MDX rendering with rehype-pretty-code syntax highlighting (github-dark-dimmed)
- `/projects` — Responsive grid of ProjectCards with tech badges
- `/contact` — Contact form with validation, Resend API integration
- `/api/contact` — POST route: Zod validation, Resend (falls back to console.log without API key)
- `/sitemap.xml` — Auto-generated from routes + blog posts
- `/robots.txt` — Allow all, points to sitemap

### Components
- `ui/Button` — primary | secondary | ghost, polymorphic (button/Link/a)
- `ui/Card` — border card with optional hover brightening
- `ui/Badge` — default | active pill
- `home/Hero` — Name, RoleCycler, subtitle, CTAs, social proof stats
- `home/RoleCycler` — Framer Motion AnimatePresence vertical slide, 3s hold, reduced-motion fallback
- `blog/PostCard` — Title + category badge + date row
- `blog/CategoryTabs` — Client-side filter pills
- `projects/ProjectCard` — Card with description, tech badges, GitHub/Live links
- `contact/ContactForm` — Client-side form with loading/success/error states

### Key Decisions
| Decision | Choice |
|----------|--------|
| Next.js version | 16.1.6 |
| React | 19.2.3 |
| Tailwind | v4 (`@theme` block) |
| Framer Motion | v12.x |
| MDX | next-mdx-remote/rsc + compileMDX |
| Syntax highlighting | rehype-pretty-code + shiki (github-dark-dimmed) |
| Contact email | Resend (env: RESEND_API_KEY, RESEND_FROM, RESEND_TO) |

### Pre-Deploy Checklist
- [ ] Set `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO` env vars in Vercel
- [ ] Replace placeholder project data in `content/projects.ts` with real projects
- [ ] Update social links in Footer.tsx and contact page if needed
- [ ] Add OG image to `public/og-image.png`
- [ ] Push branch and deploy
