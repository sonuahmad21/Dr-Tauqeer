# SHIPLA Architecture

## Product posture

SHIPLA is a HealthOS: multi-role, multi-institution, planetary-scale.

Design language: Living Earth + VisionOS glass — never generic hospital UI.

## Folder map

```
src/app            route surfaces (marketing, login, os modules)
src/components     reusable UI, backgrounds, shells
src/features       domain feature modules
src/lib            rbac, utils, shared logic
src/store          client state (auth)
src/types          strict domain types
src/hooks          reusable hooks
src/services       external integrations (future)
prisma             data model
docs               product + engineering docs
tests              unit/integration tests
```

## Security model (v1 foundation)

- Role-based access control (`src/lib/rbac.ts`)
- Typed roles (`src/types/roles.ts`)
- Audit log model in Prisma
- Privacy-by-design session boundaries
- Ready for OAuth / JWT / 2FA / passkeys on the login surface

## Extensibility

Each OS module page is a product surface that can grow into nested routes:

- `/os/patient/appointments`
- `/os/doctor/queue`
- `/os/hospital/icu`
- `/os/ai/radiology`

Keep components atomic, services isolated, and types strict.
