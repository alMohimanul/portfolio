# Portfolio Website — Design Spec

**Date:** 2026-09-13
**Owner:** Al Mohimanul Islam (mahir@markopolo.ai / aislam192054@gmail.com)

## Overview

A personal portfolio site for Al Mohimanul Islam, Software Engineer (Machine
Learning / Backend) at Markopolo AI. Built with Next.js (App Router) +
TypeScript + Tailwind CSS, deployed to Vercel, containerized with Docker for
local/portable dev parity.

## Goals

- Bold gradient / glassmorphism visual identity — eye-catching, not generic
- Multi-page structure: Home, Projects (+ case-study detail pages),
  Experience, About, Contact
- "Dynamic" = (1) scroll/hover animations and micro-interactions, (2) live
  GitHub repo data fetched at runtime rather than hardcoded, (3) interactive
  filtering/sorting of the projects grid
- Working contact form with no custom backend
- Deployable to Vercel with zero extra config; Dockerized for local dev

## Non-Goals

- No CMS or admin panel — single owner, content lives in typed data files
- No blog / MDX system
- No auth or user accounts
- Does not change visibility of any private GitHub repos. `screenly` and
  `deepdive-mcp` are private repos (confirmed via GitHub API: both 404
  unauthenticated) and stay that way — the site only uses what's already
  public about them (Screenly's live demo link; deepdive-mcp is dropped
  entirely, see Content Decisions)
- No E2E test framework (Playwright) in v1
- No analytics, custom domain config in v1

## Content Decisions (from user input)

- **Featured Projects (4):** PRISM, Mavyn, Screenly, SyntAI
  - `deepdive-mcp` was considered but dropped: its repo is private and it
    isn't in the CV's own project list (only described at the
    company/product level under Experience). Dropped from Featured
    entirely per explicit decision — DeepDive achievements stay in the
    Experience section only.
  - `livekit-rag-PoC` and `meme-face` were dropped from Featured per
    explicit decision.
  - Screenly's own repo is private too, but this matches its existing CV
    treatment: shown with a "Live Demo" link only, no source link.
  - MaatriCare, PrecisionAgriculture, GenAI-NoteBooks, ChatExcel,
    VisionClassifierHub, SciCritic-AI, Pipecat-POC, boihat, Onlinegaming
    aren't hand-featured but still surface in the live "All Projects" grid
    (public, non-fork repos via GitHub API).
- Proprietary work with no public repo (DeepDive ML pipeline, MarkChat,
  LankaBangla Markets Assistant) is covered only in the Experience timeline,
  not the Projects grid.
- Phone number from the CV is deliberately **not** published on the public
  site; only email + LinkedIn + GitHub + Google Scholar are shown.

### Verified links (extracted from CV PDF annotations)

| Item | URL |
|---|---|
| Email | `mailto:aislam192054@gmail.com` |
| LinkedIn | `https://linkedin.com/in/almohimanul-islam` |
| GitHub | `https://github.com/alMohimanul` |
| Google Scholar | `https://scholar.google.com/citations?user=vmKUMw8AAAAJ` |
| Screenly (live demo) | `https://screenly-nu.vercel.app/` |
| Mavyn (repo) | `https://github.com/alMohimanul/mavyn` |
| SyntAI (repo) | `https://github.com/alMohimanul/SyntAI` |
| MaatriCare (repo) | `https://github.com/alMohimanul/MaatriCare` |
| PRISM (repo) | `https://github.com/alMohimanul/PRISM` |
| Paper — Polyp Segmentation (DeepLabV3++), Computers in Biology and Medicine | `https://www.sciencedirect.com/science/article/abs/pii/S0010482525013381` |
| Paper — Forest Fire Classification, Forests (MDPI) | `https://www.mdpi.com/1999-4907/14/10/2080` |
| Paper — MSFFAR-Net, ICCIT | `https://ieeexplore.ieee.org/abstract/document/10441138` |

## Tech Stack

- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS
- Framer Motion for animation
- Formspree for contact form submission (requires the user to create a free
  Formspree account/form and supply the endpoint — external setup dependency)
- GitHub REST API (unauthenticated, public data only) via a Next.js Route
  Handler with ISR-style revalidation
- Vitest + React Testing Library
- ESLint + Prettier
- Docker (multi-stage) + docker-compose for local dev parity
- Deployment target: Vercel (native build; Docker is not used in that path)

## Site Map

- **`/` (Home)** — Hero (name, title, one-line summary from CV, CTA buttons
  to Projects/Contact, animated gradient background, rotating-role text),
  About teaser, categorized Skills grid (Languages, Backend, ML & AI,
  Frameworks, Data, Cloud, Frontend — from CV), Featured Projects (4 cards),
  Experience teaser (current role highlight), Contact CTA
- **`/projects`** — Featured project case-study cards (4, link to detail
  pages or external demo) + "All Projects": a live GitHub-data grid,
  filterable by language/topic tag, sortable by stars/last-updated, with a
  text search box
  - **`/projects/prism`, `/projects/mavyn`, `/projects/screenly`,
    `/projects/syntai`** — case-study detail pages: overview, tech-stack
    tags, what it does / how it works (from each repo's README + the CV),
    links (GitHub and/or live demo)
- **`/experience`** — Full timeline: Markopolo AI Inc (Software Engineer II,
  ML, Sept 2025–Present; Jr. ML Engineer, Oct 2024–Aug 2025), Nodes Digital
  Limited (Jr. ML Engineer, Mar 2024–Oct 2024) — full bullet detail from the
  CV, with key metrics visually emphasized as stat callouts (e.g. "50% cost
  cut", "77s → 18s tail latency", "$0.005 → $0.0008 per request", "90%
  policy compliance", "40% merchant response increase", "60% faster
  audience building")
- **`/about`** — Longer bio, Education (United International University,
  B.Sc. CSE, CGPA 3.78/4.00, thesis title), Publications (3, linked),
  Awards (3, from CV)
- **`/contact`** — Formspree form (name, email, message) + direct links
  (email, LinkedIn, GitHub, Google Scholar)

## Visual Design System

- Dark-first theme (default), with a light-theme toggle persisted in
  `localStorage`
- Palette: deep near-black background, violet→cyan accent gradient,
  checked for WCAG AA text contrast against translucent glass surfaces
- Typography: modern sans (e.g. Geist/Inter via `next/font`) with gradient
  text on major headings; a mono accent face for tags/stat numbers
- Glassmorphism cards: translucent background + backdrop-blur, thin
  gradient border, accent-colored glow on hover
- Framer Motion: scroll-reveal on section entrance, staggered grid-item
  entrance, animated active-nav underline, subtle animated hero background,
  fade transition between route changes
- Mobile-first responsive layout; hamburger nav below the `md` breakpoint

## Data Flow

- **Static content** lives in typed local data files under `/data`:
  `profile.ts`, `experience.ts`, `skills.ts`, `education.ts`,
  `publications.ts`, `awards.ts`, `projects.ts` (featured-project metadata:
  slug, title, description, stack, links)
- **Live GitHub data**: `/app/api/github-repos/route.ts` — a server-side
  Route Handler fetches `https://api.github.com/users/alMohimanul/repos`,
  filters out forks, private repos, and the profile-readme repo (name ===
  username), maps to `{name, description, html_url, homepage, language,
  stargazers_count, pushed_at, topics}`, and revalidates periodically
  (e.g. every 6h) so data stays fresh without a rebuild. The "All Projects"
  grid is a Client Component that calls this route and filters/sorts
  client-side.
- **Fallback**: if the GitHub fetch fails or is rate-limited, the route
  handler returns a small bundled static fallback list so the grid never
  renders broken/empty; the UI shows a subtle "showing cached list" notice
  in that case.

## Error Handling

- Route handler wraps the GitHub fetch in try/catch; failure → fallback
  list with a `stale: true` flag rather than a thrown error
- Contact form: client-side validation (required fields, email format)
  before submit; inline error on Formspree failure with retry; inline
  success confirmation without a page reload
- Standard Next.js `error.tsx` / `not-found.tsx`, styled to match the rest
  of the site, kept minimal

## Testing

- Vitest + React Testing Library covering: navigation rendering and mobile
  menu toggle, project filter/sort logic (as pure functions), contact form
  validation logic, and the GitHub route handler (mocked fetch — success
  and failure/fallback paths)

## Docker

- `Dockerfile`: multi-stage (`deps` → `builder` with `next build` using
  `output: 'standalone'` → `runner` running `node server.js` as a non-root
  user)
- `docker-compose.yml`: single service, port 3000, `.env` passthrough for
  the Formspree endpoint
- `.dockerignore`: `node_modules`, `.next`, `.git`, etc.
- Vercel does **not** use this image — Vercel builds natively from the Git
  repo. Docker exists for local/dev parity and any future alternate
  hosting.

## Deployment (Vercel)

- Connect the GitHub repo to Vercel; framework auto-detected as Next.js, no
  `vercel.json` needed unless a custom header/redirect need comes up later
- Environment variable needed: the Formspree form ID/endpoint (safe to
  expose as `NEXT_PUBLIC_...` — Formspree is designed for client-side use)
- No GitHub token required — unauthenticated public API calls are well
  within rate limits for personal-site traffic; a `GITHUB_TOKEN` env var
  can be added later if that changes

## Setup Dependencies (user action required)

- Create a free Formspree account + form, and provide the form
  endpoint/ID so it can be wired into the contact page

## Out of Scope (v1)

- CMS / admin content editing
- Blog
- Analytics (Vercel Analytics can be added trivially later)
- E2E tests
- Custom domain configuration
