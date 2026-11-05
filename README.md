# DIE ESCHWEGER

Nuxt 4 application for the DIE ESCHWEGER website.

## Requirements

- Node.js `^22.22.3`, `^24.15.0` or `>=26`
- npm

## Setup

```sh
npm install
cp .env.example .env
```

Set the backend URL and publication ID in `.env`. The API bearer token is
private runtime configuration and is only used by the Nuxt server proxy.

## Development

```sh
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the Nuxt/Nitro server output (`.output`) to a Node-compatible host. The
form API proxy requires this server runtime; `npm run generate` produces a
static site without server API routes.
