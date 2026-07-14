# Backend

The Laravel directory contains the controllers, routes, and migration required for the authentication API. Apply this content on top of a fresh Laravel project (e.g., `composer create-project laravel/laravel backend`).

## Setup

1. `composer install`
2. `cp .env.example .env`
3. `php artisan key:generate`
4. Configure `APP_URL`, database credentials, and `SANCTUM_STATEFUL_DOMAINS` in `.env`.
5. `php artisan migrate`
6. `php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"`
7. `php artisan serve`

## API routes

- `POST /api/register`
- `POST /api/login`
- `GET /api/profile` (requires `Authorization: Bearer <token>`)
