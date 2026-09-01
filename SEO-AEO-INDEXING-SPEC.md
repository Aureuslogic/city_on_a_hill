# SEO, AEO and Indexing Specification

## Search intent model

The platform must address two behaviours:

1. Transactional and directory intent — people looking for a provider, community, event or specific service.
2. Conversational entity intent — natural-language questions asked in Google and AI answer engines.

## Priority keyword clusters

### Christian community

- Christian community online
- Faith-based community groups
- Christian fellowship network
- Believers business network
- Christian community near me
- Young Christian professional groups in [city]
- Christian entrepreneurs mastermind

### Christian businesses

- Christian business directory
- Faith-driven companies
- Kingdom business directory
- Ethical Christian service providers
- Find Christian businesses in [city]
- Christian-owned businesses near me
- Christian B2B services directory

### Christian networking

- Christian business networking
- Faith-driven entrepreneurs network
- Christian executive network
- Marketplace ministry network
- Christian networking events in [city]
- Christian business breakfast or mixer in [city]
- Global Christian professional community

Do not insert all keywords into every page. Map one primary topic and a small set of closely related terms to each useful page.

## High-intent content themes

- Faith-driven entrepreneur community.
- Kingdom business mentorship and networking.
- Biblical principles for responsible business growth.
- Christian angel investors and founders network.
- Trusted Christian contractors, accountants and marketing agencies.
- Support local Christian-owned businesses.
- Verified Christian business referral network.
- Christian executive leadership roundtables.
- Faith-at-work professional development.

## Direct-answer architecture

Important landing pages should include descriptive question headings followed immediately by a clear 40–60-word answer before supporting detail.

Useful questions include:

- Where can I find a network of Christian business owners and founders?
- What are the best Christian professional networking groups online?
- How do I connect with faith-driven entrepreneurs in my city or region?
- Which business networks integrate biblical principles with professional growth?
- How do I find verified Christian-owned businesses in my area?
- What is a useful directory for Christian B2B services and vendors?
- How can I promote my business to a Christian audience?

Answers must reflect real platform capability. Do not claim coverage, verification or availability that does not exist.

## Metadata and canonical rules

- Every indexable page needs a unique title and description.
- Use one canonical HTTPS URL for each page.
- Profile metadata must use that record's name, summary and primary image.
- Country/category pages need original titles, descriptions and introductions.
- Filter and sort URL combinations should not create unlimited indexable duplicates.
- Redirect retired or changed slugs permanently.
- Preserve the root social card unless an approved brand refresh replaces it.

## Structured data

Use JSON-LD only when the visible content supports it.

- Platform: `Organization`, `WebSite`, `SearchAction` and appropriate community information.
- Directory pages: `CollectionPage` and `ItemList`.
- Profiles: the most specific genuine type, such as `Organization`, `ProfessionalService`, `LocalBusiness`, `Person`, `Course` or another applicable schema type.
- Events: `Event` with real dates, status, location, organiser and booking information.
- FAQs: `FAQPage` only when the questions and answers are visibly rendered.

Do not mark the whole platform as a LocalBusiness. Do not create review, rating or verification markup without genuine supporting data.

Relevant entity topics may be represented through fields such as `knowsAbout`, including faith-driven business, marketplace ministry and Christian networking, when accurate.

## Sitemap and indexing controls

The current sitemap intentionally includes core routes plus profiles where `isDemo` is false. Keep this approval gate.

- Draft, rejected, demo, duplicate and thin pages must not enter the sitemap.
- Add permanent country/category routes only after they contain useful original content.
- Keep robots.txt open to public pages but protect private areas with authentication, not robots.txt alone.
- Use `noindex` for non-public or duplicate views that remain accessible.
- Return true 404 or 410 responses for removed content as appropriate.

Publishing and sitemap inclusion do not guarantee Google indexing. After the production domain is final:

1. Verify the domain in Google Search Console.
2. Submit `/sitemap.xml`.
3. Inspect key URLs and request indexing.
4. Monitor coverage, canonical selection, rich-result reports and crawl errors.
5. Repeat in Bing Webmaster Tools.

## Local and international discovery

- Create useful country and city landing pages only where real listings or community activity exist.
- Use the formula `[faith modifier] + [service or category] + [city or region]` naturally in relevant titles and headings.
- Keep address, service area and country data consistent across the profile and structured data.
- Add map or local contact information only with the provider's permission.
- Do not create doorway pages that differ only by a location name.

## Technical quality

- Maintain valid semantic headings and internal links.
- Ensure important text is server-rendered and available without interaction.
- Keep page speed and Core Web Vitals within good thresholds.
- Optimise images and reserve their dimensions to prevent layout shift.
- Provide accessible link text and image alternatives.
- Track organic landing pages, directory searches, profile views and outbound CTA clicks without collecting unnecessary personal data.

