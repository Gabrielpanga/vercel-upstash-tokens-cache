# AccessToken Cache Microservice

This application is meant to serve as an internal service to recover Auth0 M2M token for internal microservice communications.

Creating this tokens in serverless can increase the usaged quota of your Auth0 subscription, so the goal is to reuse the `accessToken` for the expiration provided by auth0 until a new one is requested.

The tokens are stored in **Upstash**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Set up

First clone the repo. Copy the `.env.local.example` file to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

### Configuring Upstash

1. Go to the [Upstash Console](https://console.upstash.com/) and create a new database

#### Upstash environment

`UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` find the variables in the database details page in Upstash Console.

### Auth0 environment

- `AUTH0_DOMAIN`: Can be found in the Auth0 dashboard under `settings`.
- `AUTH0_CLIENT_ID`: Can be found in the Auth0 dashboard under `settings`.
- `AUTH0_CLIENT_SECRET`: Can be found in the Auth0 dashboard under `settings`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/token](http://localhost:3000/api/token). This endpoint can be edited in `pages/api/token.ts`.

This is a mocked endpoint to provide the M2M token as an easy way to validate the usage.

## Tools used

- `Vercel` for deployment & development environment.
- `Next.js` with typescript support to run the application
- `Upstash` for Serverless Redis (cache).
- `Auth0` for authorization management.
