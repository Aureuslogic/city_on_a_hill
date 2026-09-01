# Content and Data Guide

## Current source of truth

Directory records currently live in `source/lib/businesses.ts`. Events live in `source/lib/events.ts`. Updating these collections updates the directory and related profile routes.

The current profile type is:

```ts
type Business = {
  slug: string;
  name: string;
  category: BusinessCategory;
  location: string;
  market: PriorityMarket;
  countryCode: string;
  serves: string;
  summary: string;
  description: string[];
  benefits: string[];
  services: string[];
  keywords: string[];
  website: string;
  ctaLabel: string;
  profileType?: BusinessProfileType;
  languages?: string[];
  delivery?: 'Online' | 'In person' | 'Online & in person';
  verified: boolean;
  featured: boolean;
  isDemo: boolean;
  accent: 'navy' | 'teal' | 'gold' | 'sky';
  media: {
    kind: 'image' | 'video';
    label: string;
    src?: string;
  };
};
```

## Publishing a real profile

Before changing `isDemo` to `false`, confirm all of the following:

1. The organisation or professional has approved the public information.
2. The name and website domain are correct.
3. The image/video is licensed and its alternative text is accurate.
4. Claims, credentials and regulated status have been checked where relevant.
5. The profile has unique copy rather than copied supplier text.
6. The call to action leads to a secure HTTPS page.
7. Verification and featured flags are supported by the agreed process.
8. The record has been proofread and tested on mobile.

Only then set `isDemo: false`. The sitemap is designed to include approved non-demo profiles automatically.

## Writing standard

Each profile should answer, in this order:

- Who is this for?
- What problem does the provider solve?
- What outcomes or benefits can the visitor expect?
- What services are available?
- Where and how does the provider work?
- Why should the visitor trust the information?
- What is the single next action?

Use concise, factual and evidence-based language. Avoid unsupported superlatives such as “best,” “leading” or “guaranteed.”

Recommended lengths:

- Summary: 20–35 words.
- First description paragraph: 45–75 words.
- Total description: 100–250 words.
- Benefits: 3–6 specific outcomes.
- Services: 3–8 clear service labels.
- Search keywords: 5–15 genuine discovery terms, without repetition.

## Profile types

The current product supports:

- Businesses
- Professionals
- Communities
- Courses
- Investors

Events are a separate searchable surface. If new types are introduced, update the type collection, filters, headings, structured data and analytics taxonomy together.

## Categories

The current categories are:

- Strategy & consulting
- Marketing & creative
- Finance & legal
- People & wellbeing
- Technology & AI
- Products & experiences
- Education & training
- Media & communications

Categories should be centrally managed when a CMS is introduced. Avoid creating near-duplicate categories.

## International content

- Store country using ISO codes and a canonical display name.
- Store city/region separately from country.
- Treat languages as structured values.
- Store timezone for events.
- Specify whether a provider serves locally, nationally or internationally.
- Avoid assuming currencies, taxes, legal obligations or service availability are global.
- Add hreflang only when genuinely translated or region-specific pages exist.

## Media assets supplied

The current diversity image pack is in `source/public/directory/` and includes:

- banking and founder professionals
- consulting team
- hair and beauty professionals
- market professionals
- publishing team
- young diverse leaders

The social-sharing card is `source/public/og.png` and carries the exact title “City on the Hill.”

These files should be retained until approved replacements are supplied. Keep image filenames stable or update every reference.

## Editorial governance

Recommended roles:

- Contributor — submits or edits draft content.
- Reviewer — checks accuracy, permissions and house style.
- Verifier — completes the documented trust review.
- Publisher — approves the record for public release.
- Administrator — manages roles, categories and platform settings.

Record who changed each profile and when. Retain superseded content and verification history for accountability.

