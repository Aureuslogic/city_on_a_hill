# QA and Launch Checklist

## Content and brand

- [ ] Every visible product-name reference says “City on the Hill.”
- [ ] `info@cityonthehillglobal.com` works and is monitored.
- [ ] Footer social links have been confirmed or replaced.
- [ ] Demo names, `example.com` links and placeholder content are removed before profiles are indexed.
- [ ] Every published profile has owner approval and licensed media.
- [ ] Verification and featured labels are accurate and explained.
- [ ] Events show confirmed dates, timezones and booking status.

## Functionality

- [ ] Homepage search leads to the correct directory state.
- [ ] Search works across names, services, locations and keywords.
- [ ] All type, country, city, language, delivery and trust filters work together.
- [ ] Sorting and filter reset work.
- [ ] Profile pages render correct record-specific content.
- [ ] Every outbound CTA reaches the intended HTTPS page.
- [ ] Email and application flows confirm successful submission.
- [ ] Empty, loading, error, expired and removed states are handled.

## Responsive and accessibility

- [ ] Test current Chrome, Safari, Firefox and Edge.
- [ ] Test common mobile, tablet and desktop widths.
- [ ] Complete the whole experience with a keyboard.
- [ ] Focus is visible and ordered logically.
- [ ] Text and controls meet WCAG 2.2 AA contrast.
- [ ] Images have suitable alternative text.
- [ ] Forms have labels, instructions and accessible errors.
- [ ] Motion respects reduced-motion preferences.
- [ ] Screen-reader landmarks and headings are logical.

## SEO and AEO

- [ ] Each indexable page has a unique title, description and canonical URL.
- [ ] Root and profile social previews use correct images and copy.
- [ ] Structured data validates and matches visible content.
- [ ] Sitemap contains only approved canonical pages.
- [ ] Demo, draft and duplicate URLs are excluded or noindexed.
- [ ] Removed slugs redirect or return the correct status.
- [ ] Google Search Console is verified and the sitemap submitted.
- [ ] Bing Webmaster Tools is configured.
- [ ] Key country, category and profile pages have been URL-inspected.

## Privacy, legal and security

- [ ] Legal entity and address have been added to policies.
- [ ] Terms, refund and data-protection pages have professional approval.
- [ ] Cookie and analytics consent is implemented where required.
- [ ] Forms collect only necessary data and show the relevant notice.
- [ ] Special-category data handling has been assessed.
- [ ] Processor agreements and transfer safeguards are documented.
- [ ] Admin access uses least privilege and multi-factor authentication.
- [ ] Server-side validation, spam controls and rate limits are enabled.
- [ ] Secrets are stored outside source control.
- [ ] Backup, restore and incident-response procedures are tested.

## Performance and release

- [ ] `npm ci` succeeds from a clean checkout.
- [ ] `npm run build` succeeds.
- [ ] The production domain uses HTTPS.
- [ ] Hero and directory images are optimised.
- [ ] Core Web Vitals are measured on production.
- [ ] Analytics events are documented and privacy reviewed.
- [ ] A release owner and rollback method are assigned.
- [ ] The live sitemap and robots file reference the final production domain.
- [ ] Existing public URLs are redirected if the production domain or slug changes.

