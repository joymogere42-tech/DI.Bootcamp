# Collaborative Storytelling App

This monorepo contains a backend (Express + Postgres) and frontend (React + Vite + Redux Toolkit).

Quick start:

1. Create a `.env` in `backend/` with `DATABASE_URL`, `JWT_SECRET`, and `REFRESH_SECRET`.
2. From repo root install workspace deps (if using npm 7+):

```
npm install
cd backend
npm install
cd ../frontend
npm install
```

3. Initialize DB:

```
cd backend
node scripts/initDb.js
```

4. Run backend:

```
cd backend
npm run start
```

5. Run frontend:

```
cd frontend
npm run dev
```
