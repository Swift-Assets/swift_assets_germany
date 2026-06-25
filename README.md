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
  detect it at build time. Its field names must match the visible form.
- The visible form in `src/components/sections/Contact.tsx` POSTs to `/` with
  `data-netlify="true"` and a honeypot field (`bot-field`).
- The SPA fallback redirect is **GET-only**, so form POSTs reach Netlify Forms correctly.

#### ⚠️ Recipient email must be configured in Netlify (not in code)

Netlify manages form-notification recipients in the **dashboard**, not in the repository. There is
no secret or backend key to set, and the recipient address **cannot** be forced from code. After
deploying:

1. Open **Netlify → your site → Forms → form notifications** (or **Site settings → Forms →
   Notifications**).
2. Add an **email notification** and set the recipient to **`info@swift-assets.de`**.
3. Save. New submissions will then be emailed to that address (and remain visible under **Forms**).

> Until this is configured, submissions are still captured under **Forms** in the dashboard, but no
> email is sent. No external backend, API route, or database is involved.

## Project structure

```
index.html                  # entry HTML + hidden Netlify form
src/
  main.tsx                  # app bootstrap + router ("/", "/impressum", "/datenschutz", "*")
  pages/
    Home.tsx                # landing page composition
    Impressum.tsx           # legal: Impressum (German, placeholder TODOs)
    Datenschutz.tsx         # legal: Datenschutzerklärung (German, placeholder TODOs)
    NotFound.tsx            # 404 fallback
  components/
    Nav.tsx                 # in-page scroll navigation
    LegalLayout.tsx         # shared header/footer shell for legal pages
    sections/               # Hero, About, Services, Process, Specialty, Contact, Footer
    ui/                     # shadcn/ui primitives
  lib/
    i18n.tsx                # translations + language provider
public/                     # icons, manifest, robots, _redirects
netlify.toml                # Netlify build + SPA fallback config
```

## Legal pages

`/impressum` and `/datenschutz` are static German legal pages linked from the footer. They contain
**placeholder `[TODO: …]` fields** for company data (Geschäftsführer, Anschrift, Registergericht,
HRB-Nummer, USt-IdNr., Telefon, dates). **These must be filled with the real legal data before the
site goes public** — see the report for the full checklist.
