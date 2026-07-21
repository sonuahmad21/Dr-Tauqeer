# SHIPLA Patient Directory

**SHIPLA by DMTA**  
Seemanchal Health Infrastructure · Planetary Life Advancement  
by **Dr. MD Tauqeer Ahmad**

Modern clinical patient directory upgraded from the Replit Patient Directory app  
(`https://doctor-patient-log--tauqeersam.replit.app`).

## Features

- Animated planetary / health-network background
- SHIPLA branding for Dr. MD Tauqeer Ahmad
- Dashboard with stats, demographics, and recent patients
- Searchable patient directory with gender / blood-type filters
- Create, view, edit, and delete patient records
- Local JSON persistence (`data/patients.json`) — demo seed only (no real PHI)

## Quick start

```bash
npm install
npm run seed
npm run dev
```

- API + production server: `http://localhost:5000`
- Vite client (dev): `http://localhost:5173` (proxies `/api`)

## Production / Replit

```bash
npm install
npm run seed
npm run build
npm start
```

Replit uses `.replit` to build the Vite client and serve it from Express on port `5000`.

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/patients` | List (`search`, `gender`, `bloodType` query params) |
| GET | `/api/patients/stats` | Totals and demographics |
| GET | `/api/patients/recent` | Latest records |
| GET | `/api/patients/:id` | Single record |
| POST | `/api/patients` | Create |
| PATCH | `/api/patients/:id` | Update |
| DELETE | `/api/patients/:id` | Delete |
