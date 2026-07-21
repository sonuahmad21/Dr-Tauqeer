# SHIPLA HealthOS

**Seemanchal Health Infrastructure & Planetary Life Advancement**  
Version 1.0 · by **Dr. MD Tauqeer Ahmad / DMTA**

This is not a hospital website.  
It is a **Healthcare Operating System (HealthOS)** foundation.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + Framer Motion-ready UI
- Zustand auth store (role-aware demo session)
- Prisma schema for PostgreSQL (users, RBAC, audit, orgs)
- Feature-based architecture under `src/`

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Surfaces

| Route | Purpose |
|-------|---------|
| `/` | Living Earth landing |
| `/login` | Premium glass login + role selection |
| `/os` | HealthOS command center |
| `/os/patient` | Patient module |
| `/os/doctor` | Doctor module |
| `/os/hospital` | Hospital module |
| `/os/ai` | AI Fabric |
| `/os/research` | Research |
| `/os/education` | Education |
| `/os/planetary` | Planetary Health |
| `/os/space` | Space Medicine |
| `/os/admin` | Administrator / developer |

## Architecture

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Database

Prisma schema lives in `prisma/schema.prisma`.

```bash
# requires DATABASE_URL
npm run db:generate
npm run db:push
```

Demo auth currently uses a local persisted session (Zustand) so the OS is explorable without cloud credentials. Wire OAuth/Supabase using the same `UserRole` model when ready.

## Quality

```bash
npm run lint
npm run typecheck
npm test
```
