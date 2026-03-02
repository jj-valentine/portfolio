# Portfolio Build — HANDOFF

## Status

| Phase | Status | Commit |
|-------|--------|--------|
| 0: Git + GitHub setup | ✅ Done | 776a7bc |
| 1: Scaffold + deps + globals.css + types | ✅ Done | d968bc9 |
| 2: Layout shell (Nav, Footer, AnnouncementBar) | ✅ Done | 87f825c |
| 3: UI primitives (Button, Card, Badge) | ⏳ **Next** | — |
| 4: Home page (Hero + RoleCycler) | ⏳ Pending | — |
| 5: Blog system (MDX pipeline + syntax highlighting) | ⏳ Pending | — |
| 6: Projects page | ⏳ Pending | — |
| 7: About page | ⏳ Pending | — |
| 8: Contact (form + Resend API route) | ⏳ Pending | — |
| 9: Polish (metadata, sitemap, robots, reduced-motion) | ⏳ Pending | — |
| 10: Deploy to Vercel | ⏳ Pending | — |

## Resume Instructions

```
cd ~/dev/new/portfolio
git checkout feat/phases-3-10
```

Open the plan: `~/.claude/plans/rustling-snuggling-yao.md`

Then say: **"Continue building the portfolio from Phase 3."**

## Immediate Next Step — Phase 3: UI Primitives

Create these three files:
- `components/ui/Button.tsx` — primary | secondary | ghost variants
- `components/ui/Card.tsx` — dark border card wrapper (hover: border brightens)
- `components/ui/Badge.tsx` — tech stack / category pills

Button specs from plan:
- **Primary**: `bg-primary-btn text-primary-text`, radius 8px, h 42px, px-8 (hero) / px-4 (nav), text-sm font-medium
- **Secondary**: `bg-surface text-fg border border-[#3d3d3d]`, radius 8px, h 42px
- **Ghost**: `text-accent` flex gap-2, no bg/border, hover opacity-0.8

After Phase 3: move to Phase 4 (Home page — the big one with RoleCycler animation).

## RoleCycler Spec (Phase 4 critical component)

Roles in order: `"Software Engineer"`, `"Physicist"`, `"Mathematician"`, `"Educator"`, `"Dog Trainer"`, `"Entrepreneur"`

Implementation:
- Framer Motion `AnimatePresence` with `mode="wait"`
- Enter: `y: "100%"` → `y: 0` with opacity fade
- Exit: `y: 0` → `y: "-100%"` with opacity fade
- Hold each role: **3 seconds**
- Container: `overflow: hidden`, fixed height = `1.2em` of H1 font
- `prefers-reduced-motion` fallback: static comma-separated list

## Key Decisions

| Decision | Choice |
|----------|--------|
| Next.js version | 16.1.6 (bumped from planned v15) |
| React | 19.2.3 |
| Tailwind | v4 (`@theme` block, no config file) |
| Framer Motion | v12.x |
| GitHub user | `jj-valentine` (not `jamesvalentine`) |
| Repo | `git@github.com:jj-valentine/portfolio.git` (private) |
| Font loading | `next/font/google` → CSS vars `--font-geist-sans`, `--font-geist-mono` |

## Design Token Quick Reference

| Token | Value | CSS var |
|-------|-------|---------|
| Background | `#070707` | `var(--color-bg)` → `bg-bg` |
| Surface (elevated) | `#232323` | `var(--color-surface)` → `bg-surface` |
| Border | `rgba(119,119,119,0.3)` | `var(--color-border)` → `border-border` |
| Foreground | `#fafafa` | `var(--color-fg)` → `text-fg` |
| Muted | `#777777` | `var(--color-muted)` → `text-muted` |
| Muted fg (60%) | `rgba(255,255,255,0.6)` | `var(--color-fg-muted)` → `text-fg-muted` |
| Sub fg (75%) | `rgba(255,255,255,0.75)` | `var(--color-fg-sub)` → `text-fg-sub` |
| Accent (blue) | `#3b82f6` | `var(--color-accent)` → `text-accent` |
| Primary btn bg | `#e8e8e8` | `var(--color-primary-btn)` → `bg-primary-btn` |
| Primary btn text | `#111111` | `var(--color-primary-text)` → `text-primary-text` |

## File Structure (current)

```
app/
  globals.css          ← Tailwind v4 @theme + prose + rehype-pretty-code styles
  layout.tsx           ← Root: Geist font, AnnouncementBar, Nav, main, Footer
  page.tsx             ← Placeholder (replaced in Phase 4)
lib/
  utils.ts             ← cn(), formatDate()
types/
  index.ts             ← Post, PostMeta, Project interfaces
components/
  layout/
    AnnouncementBar.tsx  ← Dismissible bar, dot-pattern overlay
    Nav.tsx              ← Sticky, scroll-blur backdrop, mobile hamburger
    Footer.tsx           ← Multi-col nav, social icons, green pulse status dot
  ui/                  ← EMPTY — create in Phase 3
  home/                ← EMPTY — create in Phase 4
  blog/                ← EMPTY — create in Phase 5
  projects/            ← EMPTY — create in Phase 6
  contact/             ← EMPTY — create in Phase 7
content/
  blog/                ← EMPTY — create in Phase 5
```

## Dev Workflow Rules (from dev-workflow skill)

- **Branch**: work on `feat/phases-3-10`, not `main`
- **PR**: open PR before execution, not after — PR is already open at github.com/jj-valentine/portfolio
- **No `Co-Authored-By:` lines** in commits
- **Commit cadence**: one commit per phase, conventional format `type(scope): description`

## Plan File

Full detailed plan with exact graphite.com measurements (colors, typography, spacing, components):
`~/.claude/plans/rustling-snuggling-yao.md`
