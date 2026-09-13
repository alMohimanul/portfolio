# Portfolio — Al Mohimanul Islam

Personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Live project data is pulled from GitHub at runtime; the contact form is powered by Formspree.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_FORMSPREE_ENDPOINT
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | For the contact form to work | Create a free form at https://formspree.io and paste its endpoint URL. Without it, the contact page shows a "reach out directly" notice instead of a broken form. |

## Testing

```bash
npm test        # run once
npm run test:watch
npm run lint
npm run build
```

## Docker (local/dev parity)

```bash
docker compose up --build
```

Serves the site at `http://localhost:3000`. This image is **not** used for production — see Deployment below.

## Deployment

Deployed on Vercel:

1. Connect this GitHub repo to a new Vercel project — framework is auto-detected as Next.js, no configuration needed.
2. Add the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variable in the Vercel project settings.
3. Push to `main` — Vercel builds and deploys automatically, with a preview URL on every PR.

## Project structure

- `app/` — routes (App Router)
- `components/` — UI components, grouped by area (`ui`, `layout`, `home`, `projects`, `experience`, `contact`)
- `data/` — typed content (profile, skills, experience, education, publications, awards, featured projects)
- `lib/` — framework-agnostic logic (GitHub API client + fallback, project filter/sort, contact form validation)
