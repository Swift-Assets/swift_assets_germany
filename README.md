# Swift Assets Germany — Public Landing Page

Public marketing / informational landing page for **Swift Assets UG (haftungsbeschränkt)**,
Solingen, Germany. The company acquires and liquidates insolvency assets, with a focus on
medical and pharmaceutical goods.

This repository contains **only the public-facing website**. The single functional element is
the public **Kontaktbox / contact form**, which submits via Netlify Forms. Everything else is a
static informational interface.

> **Note:** The previous portal / dashboard / login / auth and Supabase functionality, along with
> all old domain, subdomain and host-based redirects, have been removed from the active UI. This
> project no longer requires any Supabase environment variables, secrets, or backend services.

## Tech stack

- [Vite](https://vitejs.dev/) (build tool)
- [React 19](https://react.dev/) + [react-router-dom](https://reactrouter.com/) (single landing route)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) component primitives
- Multi-language support (DE / EN / AR / TR) via a lightweight in-app i18n provider
- Package manager: [Bun](https://bun.sh/)

## Getting started

### Install dependencies

```bash
bun install
```

### Run locally

```bash
bun run dev
```

The dev server starts on http://localhost:8080.

### Build for production

```bash
bun run build
```

The static site is emitted to the `dist/` directory.

### Preview the production build

```bash
bun run preview
```

### Lint

```bash
bun run lint
```

## Deploying on Netlify

The repository ships with a clean [`netlify.toml`](./netlify.toml):

```toml
[build]
  command = "bun run build"
  publish = "dist"
```

1. Create a new site in Netlify and connect this repository.
2. Netlify reads `netlify.toml` automatically — no manual build settings required.
3. No environment variables or secrets are needed.

### Contact form (Netlify Forms)

The Kontaktbox uses [Netlify Forms](https://docs.netlify.com/forms/setup/):

- A hidden static form named `contact` is declared in [`index.html`](./index.html) so Netlify can
  detect it at build time.
- The visible form in `src/components/sections/Contact.tsx` POSTs to `/` with
  `data-netlify="true"` and a honeypot field (`bot-field`).
- The SPA fallback redirect is **GET-only**, so form POSTs reach Netlify Forms correctly.

Submissions appear under **Forms** in the Netlify dashboard. Configure email notifications there if
desired. No external backend or API is involved.

## Project structure

```
index.html                  # entry HTML + hidden Netlify form
src/
  main.tsx                  # app bootstrap + router ("/" landing, "*" 404)
  pages/
    Home.tsx                # landing page composition
    NotFound.tsx            # 404 fallback
  components/
    Nav.tsx                 # in-page scroll navigation
    sections/               # Hero, About, Services, Process, Specialty, Contact, Footer
    ui/                     # shadcn/ui primitives
  lib/
    i18n.tsx                # translations + language provider
public/                     # icons, manifest, robots, _redirects
netlify.toml                # Netlify build + SPA fallback config
```
