# Developer Implementation Specification

## Product objective

City on the Hill should operate as a global discovery and relationship ecosystem, not only as a static directory. Visitors must be able to search by what they need, browse trusted profiles, discover events and communities, and continue to an external provider website when ready.

## Existing product surfaces

### Homepage

- Cinematic visual direction with a bright hilltop and visible Christian symbolism.
- Search-first entry into the directory.
- Popular search shortcuts.
- Ecosystem pathways for discovery, gatherings, connection and joining.
- International-market messaging.
- Direct-answer sections and FAQ structured data.

### Directory

- Tabs for Businesses, Professionals, Communities, Courses, Investors and Events.
- Keyword search across names, services, benefits, locations and keywords.
- Filters for category, country/region, city, language, delivery method and trust status.
- Sort by recommended, name or country.
- Search state reflected in URL parameters where implemented.
- Responsive profile cards with images, badges, service summaries and profile links.

### Reusable profile pages

Each profile must support:

- Permanent, human-readable slug.
- Name, category and profile type.
- City, country/region and service area.
- Image or video area with accessible text alternative.
- Concise summary and longer description.
- Benefits and services.
- Languages and online/in-person delivery.
- Featured and verified status.
- Search keywords.
- Primary outbound call to action.
- Record-specific title, description and social-sharing metadata.
- Structured data appropriate to the real entity type.

External links should clearly indicate that the visitor is leaving City on the Hill. Use `rel="noopener noreferrer"` for new-tab links.

### Events

The current page demonstrates search and filters by format, market and focus. Production events should add:

- Confirmed start/end date, timezone and venue or virtual platform.
- Organiser and contact details.
- Capacity, price, availability and booking URL.
- Event status: draft, published, postponed, cancelled or completed.
- Event detail route and `Event` structured data.
- Calendar download and accessible date formatting.

Do not publish invented dates or expired events as upcoming.

### Join and listing pathways

The current choices are Free Community Listing, Verified Profile and Featured Partner. Production implementation should provide:

- A secure application form.
- Consent and privacy notice at collection.
- Draft, submitted, reviewing, approved, rejected and suspended states.
- Moderation notes and audit trail.
- Email confirmation and status notifications.
- Clear distinction between editorial verification and paid promotion.
- A disclosure on every sponsored or featured placement.

## Architecture for 100+ profiles

Move approved records from the TypeScript collection into a CMS or database once non-technical administration is required. Preserve the current `Business` fields as the first schema version.

Recommended entities:

- `profiles`
- `profile_media`
- `categories`
- `markets`
- `locations`
- `services`
- `profile_services`
- `events`
- `applications`
- `verification_reviews`
- `users` and `roles`
- `outbound_clicks` or privacy-respecting analytics events

Profiles require publication states and timestamps. Only `published` and approved records should render publicly or enter the sitemap.

Use stable IDs internally and slugs publicly. Slug changes should create permanent redirects.

## Country and category pages

Create crawlable landing pages instead of relying only on query-string filters. Suggested pattern:

- `/directory/country/united-kingdom`
- `/directory/country/united-states`
- `/directory/country/nigeria`
- `/directory/category/technology-ai`
- `/directory/type/investors`

Each indexable landing page needs unique introductory copy, a canonical URL, relevant profiles, useful FAQs and internal links. Do not mass-generate thin pages with only a changed country name.

Initial markets:

- United Kingdom
- United States
- Canada
- European Union
- Nigeria
- Australia
- Ghana
- Zimbabwe
- South Africa
- United Arab Emirates
- Kenya
- Malta
- Egypt

For the European Union, decide whether the commercial model is one regional page, individual country pages, or both. Avoid presenting the EU as a country in interfaces where country semantics matter.

## Media handling

- Support one primary image and optional gallery/video.
- Optimise responsive formats such as WebP or AVIF while keeping an appropriate source asset.
- Require meaningful alternative text for informative images.
- Store copyright/licence and photographer/source information.
- Do not autoplay video with sound.
- Use a privacy-conscious video embed mode and require a transcript or useful summary.
- Enforce file size, type and dimension limits.

## Trust and verification

`verified` must only be true after a documented review. Define:

- Evidence collected.
- Reviewer role.
- Review date and renewal date.
- What the badge does and does not guarantee.
- Complaints, suspension and removal process.

Featured status must never imply verification. Paid placements must be labelled.

## Accessibility and security

- Target WCAG 2.2 AA.
- Full keyboard navigation and visible focus states.
- Accessible labels and error messages for all forms.
- Minimum colour contrast for text and controls.
- Reduced-motion support where animation is added.
- Server-side validation and output encoding for submitted content.
- Rate limiting, spam protection and upload scanning for public forms.
- Least-privilege admin roles and multi-factor authentication.
- Never expose API keys or secrets in client code or the repository.

## Performance requirements

- Optimise the cinematic hero for responsive delivery and Largest Contentful Paint.
- Lazy-load below-the-fold profile media.
- Keep directory filters responsive with 100+ records; move filtering server-side when the dataset grows materially.
- Avoid large client bundles and unnecessary third-party scripts.
- Measure Core Web Vitals on the real production domain.

