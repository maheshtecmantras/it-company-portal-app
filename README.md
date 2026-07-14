# IT Company Portal

Full-stack IT company portal that pairs a React single-page marketing experience with a Laravel/Sanctum API backend.

## Repository layout

- `frontend/` — Create React App containing the homepage plus client login/register flows.
- `backend/` — Laravel authentication controllers, migration, and configuration guidance for the API.

## Getting started

### Frontend

```bash
cd frontend
npm install
npm start
```

The frontend defaults to `http://localhost:8000/api`. Override it by setting `REACT_APP_API_URL` in your environment or `.env` before running the app.

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

The backend uses Laravel Sanctum for API tokens. Update `.env` with your database credentials, `APP_URL`, and `SANCTUM_STATEFUL_DOMAINS` before running migrations.

## API endpoints

- `POST /api/register` — create a new client account.
- `POST /api/login` — issue a Sanctum token.
- `GET /api/profile` — returns authenticated user data (requires `Authorization: Bearer <token>`).

## Deployment tips

1. Build the frontend (`npm run build`) and host the generated static files on any CDN or static host.
2. Deploy the Laravel backend to a PHP 8.1+ host, run migrations, and serve the API. Configure CORS/Sanctum domains so the SPA can hit the API securely.
3. Optionally serve the React build via Laravel's `public` directory or use a reverse proxy so both apps share a domain.
