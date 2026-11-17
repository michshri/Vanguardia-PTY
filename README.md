# Vanguardia Constructions Group

Marketing website for **Vanguardia Constructions Group**, a Panama-based construction and property services company.

- Domain: [www.vanguardiapty.com](https://www.vanguardiapty.com)
- Stack: Next.js (App Router), React, TypeScript
- Languages: Spanish (default), English (`/en/...`), French (`/fr/...`)
- Hosting: Vercel

## Local development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run build
npm run lint
npx tsc --noEmit
```

## Content

Editable site content lives in `content/`:

- `services.json` — five service categories
- `segments.json` — residential, commercial & industrial, PH
- `projects.json` — project case studies (empty until real work is added)
- `ui.json` — shared UI strings
- `seo.json` — titles and descriptions
- `settings.json` — company name, site URL, analytics, placeholders
- `page-headers.json` — page header images

Do not invent certifications, clients, awards or project history. Add project entries to `projects.json` only from approved real work.

## Notes

- Contact phone and WhatsApp remain placeholders until real details are supplied.
- The contact form UI exists; enquiry delivery is not implemented yet.
- Stock Unsplash images are temporary placeholders until company photography is provided.
