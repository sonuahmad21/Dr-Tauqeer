# SHIPLA Monorepo

Production-grade foundation for **Seemanchal Health Infrastructure & Planetary Life Advancement**.

## Stack

| Layer    | Choice                                              |
| -------- | --------------------------------------------------- |
| Apps     | Next.js 15 (App Router) · TypeScript · Tailwind CSS |
| Monorepo | Turborepo · pnpm workspaces                         |
| UI       | Shadcn UI · Framer Motion · next-themes (dark mode) |
| Theme    | SHIPLA green + gold                                 |
| Data     | PostgreSQL · Prisma                                 |
| Quality  | ESLint · Prettier · Husky · lint-staged             |
| Ops      | Docker · GitHub Actions                             |

## Structure

```
apps/web                 Next.js application (init only — no app pages yet)
packages/ui              Shadcn UI primitives + SHIPLA theme tokens
packages/database        Prisma schema + client
packages/eslint-config   Shared ESLint flat configs
packages/typescript-config
```

## Quick start

```bash
pnpm install
cp .env.example .env
docker compose up -d postgres
pnpm db:generate
pnpm db:push
pnpm dev
```

App: [http://localhost:3000](http://localhost:3000)

## Scripts

| Command            | Description                     |
| ------------------ | ------------------------------- |
| `pnpm dev`         | Start all `dev` tasks via Turbo |
| `pnpm build`       | Production build                |
| `pnpm lint`        | Lint all packages               |
| `pnpm typecheck`   | TypeScript across the monorepo  |
| `pnpm format`      | Prettier write                  |
| `pnpm db:generate` | Prisma generate                 |
| `pnpm db:push`     | Push schema to Postgres         |

## Environment

See `.env.example`. Never commit `.env`.

## Docker

```bash
# Local Postgres
docker compose up -d

# Production web image (after lockfile exists)
docker build -t shipla-web .
```

## Note

This commit is **project initialization only**. Application pages will be added next.
