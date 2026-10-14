import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';

export const metadata: Metadata = {
  title: 'Join the City on the Hill Christian Business Ecosystem',
  description:
    'Join City on the Hill as a Christian-owned business, professional, community, course provider, investor or ecosystem partner.',
  alternates: { canonical: '/join' },
  openGraph: {
    title: 'Join the City on the Hill Ecosystem',
    description: 'Showcase your work, build trusted relationships and learn and network globally.',
    url: '/join',
  },
};

const pathways: Array<{
  label: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  pillars: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}> = [
  {
    label: 'Start growing',
    name: 'Spark',
    price: '£588 per year',
    priceNote: 'or £150 per quarter · Inclusive of VAT',
    description: 'Develop, connect and be found.',
    pillars: 'Development · Connectivity · Visibility',
    features: [
      '1 x business audit and coaching session (45 mins)',
      '1 x monthly masterclass (90 mins)',
      '2 x monthly webinars (1 hour each)',
      'Business-based Bible Gyms',
      'Directory page',
    ],
    cta: 'Become a partner',
    href: '/verification',
  },
  {
    label: 'More time in community',
    name: 'Lamp',
    price: '£1,170 per year',
    priceNote: 'or £300 per quarter · Inclusive of VAT',
    description: 'Everything in Spark, with more time in community.',
    pillars: 'Development · Connectivity · Visibility',
    features: [
      '1 x business audit and coaching session (45 mins)',
      '1 x monthly masterclass (90 mins)',
      '2 x monthly webinars (1 hour each)',
      'Business-based Bible Gyms',
      '2 x social gatherings per year',
      'Directory page',
    ],
    cta: 'Become a partner',
    href: '/verification',
  },
  {
    label: 'Full experience',
    name: 'Beacon',
    price: '£2,340 per year',
    priceNote: 'or £660 per quarter · Inclusive of VAT',
    description: 'The complete City: intensive growth and premium visibility.',
    pillars: 'Development · Connectivity · Visibility',
    features: [
      '1 x business audit',
      '4 x coaching sessions (60 mins)',
      '1 x monthly masterclass (90 mins)',
      '2 x monthly webinars (1 hour each)',
      '2 x face-to-face intensive workshops per year',
      'Business-based Bible Gyms',
      '2 x social gatherings per year',
      '1 x private dinner (with guests)',
      'Enhanced directory page',
    ],
    cta: 'Become a partner',
    href: '/verification',
    featured: true,
  },
];

const joinFaqs = [
  {
    q: 'Who can join City on the Hill?',
    a: 'Christian-owned businesses, faith-driven professionals, communities, educators, investors and aligned partner organisations can apply. Every application is reviewed for relevance, clarity and fit with the ecosystem’s values and purpose.',
  },
  {
    q: 'How does business verification work?',
    a: 'Applicants provide accurate business information and suitable evidence for review. A verified badge signals that the profile has completed the City on the Hill review process; customers should still complete the checks appropriate to their purchase or partnership.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: joinFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function JoinPage() {
  return (
    <main className="inner-page join-page">
      <SiteHeader />
      <section className="join-hero">
        <div>
          <p className="eyebrow">Join our ecosystem</p>
          <h1>Showcase your work.<br /><em>Learn and network globally.</em></h1>
          <p>
            Choose the pathway that fits where you are today. Every approved profile becomes part of one
            searchable international ecosystem built around faith, excellence, trust and meaningful impact.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#pathways">Become a partner</a>
            <a className="text-link" href="/directory">Explore the directory</a>
          </div>
        </div>
      </section>

      <section className="join-main" id="pathways" aria-labelledby="join-heading">
        <div className="directory-heading">
          <div><p className="kicker">Membership</p><h2 id="join-heading">Every light has its place. Choose yours.</h2></div>
          <p>Three ways to develop, connect and be seen. Verification comes first, at every tier.</p>
        </div>
        <div className="join-tier-grid">
          {pathways.map((pathway) => (
            <article className={pathway.featured ? 'join-tier is-featured' : 'join-tier'} key={pathway.name}>
              <span>{pathway.label}</span>
              <h2>{pathway.name}</h2>
              <p className="join-price">{pathway.price}<small>{pathway.priceNote}</small></p>
              <p>{pathway.description}</p>
              <p className="join-pillars">{pathway.pillars}</p>
              <ul>{pathway.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
              <a className={pathway.featured ? 'button button-gold' : 'button button-outline'} href={pathway.href}>
                {pathway.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="membership-notes" aria-label="Membership conditions">
        <article className="membership-note">
          <p className="kicker">Verification required for every member</p>
          <h2>Standards from the very start</h2>
          <p>
            Before joining at any tier, every business completes City on the Hill&apos;s verification process,
            so professional standards and quality are embedded from the very start.
          </p>
          <a className="button button-gold" href="/verification">Start verification</a>
        </article>
        <article className="membership-note">
          <p className="kicker">Shared success: partnership fee</p>
          <h2>2.5% when the City brings a customer</h2>
          <p>
            When the City brings you a customer, via your City directory page link or a City code, a 2.5% fee
            applies to their purchases for the first 12 months. Self-declared on trust; collected monthly, or
            quarterly for balances under £25.
          </p>
          <p>Full partnership fee terms are set out in the membership agreement.</p>
          <a className="button button-outline" href="/verification">Accept the invitation</a>
        </article>
      </section>

      <section className="join-faq section" aria-labelledby="join-faq-heading">
        <div className="section-heading"><p className="kicker">Direct answers</p><h2 id="join-faq-heading">Before you apply</h2></div>
        <div className="join-faq-grid">
          {joinFaqs.map((item) => <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}
        </div>
      </section>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}

