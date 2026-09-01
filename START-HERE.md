# City on the Hill — Developer Handoff Pack

Prepared: 1 September 2026  
Live site: https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/  
Validated source commit: `63c25a5b490a1b9e5090262bde6e4db13c6f3aac`

## Purpose

This pack contains the complete source and implementation brief for City on the Hill: a global Christian ecosystem where people can discover businesses, professionals, communities, courses, investors and events.

The intended product should support at least 100 independently shareable profile pages. Each profile acts as a shop window with a name, image or video, benefits, services, location, trust indicators, a clear call to action and an outbound link to the provider's own website.

## What is included

- `source/` — the complete buildable website source and image assets.
- `DEVELOPER-IMPLEMENTATION-SPEC.md` — product architecture and required functionality.
- `CONTENT-AND-DATA-GUIDE.md` — listing fields, content workflow and international markets.
- `SEO-AEO-INDEXING-SPEC.md` — search, answer-engine and indexing requirements.
- `LEGAL-IMPLEMENTATION-NOTES.md` — policy pages and information that must be legally confirmed.
- `QA-AND-LAUNCH-CHECKLIST.md` — acceptance criteria before the next public release.

## Technology and local setup

The project uses Vinext, Next.js 16, React 19, TypeScript and the OpenAI Sites Vite plugin. Node.js `22.13.0` or newer is required.

```bash
cd source
npm ci
npm run dev
```

The local development URL is normally `http://localhost:3000`.

Production validation:

```bash
npm run build
```

Optional code-quality check:

```bash
npm run lint
```

## Current route map

| Route | Purpose |
| --- | --- |
| `/` | Cinematic, search-first ecosystem homepage |
| `/directory` | Searchable and filterable marketplace |
| `/business/[slug]` | Reusable business/profile shop-window template |
| `/events` | Searchable programme-preview directory |
| `/join` | Free, verified and featured participation routes |
| `/terms` | Terms and conditions |
| `/refund-policy` | Refund policy |
| `/data-protection` | Data protection policy |
| `/sitemap.xml` | Indexable URL feed |
| `/robots.txt` | Search-crawler instructions |

## Important current limitations

These are deliberate prototype boundaries, not production data:

- All current directory entries are demonstrations with `isDemo: true`.
- Demonstration calls to action point to `https://example.com` and must be replaced.
- Demonstration business pages should remain excluded from search indexing.
- Search and filtering are client-side and use the records in `lib/businesses.ts`.
- Events are programme previews without confirmed dates or booking systems.
- There is no CMS, database, admin interface, account system, payment system or automated verification workflow yet.
- Country selection currently uses directory filters. Dedicated indexable country landing pages are a recommended next implementation.
- Joining currently opens an email enquiry. It is not an application-management system.
- The current public Sites URL is retained to avoid breaking existing links. A custom domain should be connected only after DNS ownership and the preferred production domain are confirmed.

## Brand and contact details

- Required public name: **City on the Hill**
- Contact email: **info@cityonthehillglobal.com**
- Scripture line: “A city set on a hill cannot be hidden.” — Matthew 5:14
- The wording “City on a Hill” should not be reintroduced as the product name.
- Footer social links currently lead to Dominion Mandate accounts. Confirm whether new City on the Hill social accounts should replace them.

## Recommended next delivery order

1. Approve the legal entity, address, business model and policy details.
2. Choose the CMS/database and define editorial roles.
3. Replace demo records with approved profiles and real outbound links.
4. Build permanent country and category landing pages.
5. Add application, verification and moderation workflows.
6. Connect analytics, Google Search Console and Bing Webmaster Tools.
7. Add payments only after pricing, tax, cancellation and refund rules are approved.
8. Connect the production domain and run the full launch checklist.

