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

const pathways = [
  {
    label: 'Founding profile',
    name: 'Community listing',
    price: 'Free',
    description: 'A clear entry point for approved businesses and professionals joining the growing directory.',
    features: ['Shareable directory profile', 'Business or professional category', 'Country and city discovery', 'Direct website link'],
    cta: 'Apply for a free profile',
    subject: 'Community listing application',
  },
  {
    label: 'Trust and visibility',
    name: 'Verified profile',
    price: 'By application',
    description: 'A stronger trust layer for established organisations ready to provide evidence and complete review.',
    features: ['Everything in Community listing', 'Verification review and trust badge', 'Expanded media and benefit sections', 'Eligibility for selected introductions'],
    cta: 'Apply for verification',
    subject: 'Verified profile application',
    featured: true,
  },
  {
    label: 'Strategic collaboration',
    name: 'Featured partner',
    price: 'Partner programme',
    description: 'For organisations contributing events, learning, opportunities or infrastructure to the wider ecosystem.',
    features: ['Everything in Verified profile', 'Featured marketplace placement', 'Event and programme collaboration', 'Priority ecosystem introductions'],
    cta: 'Discuss partnership',
    subject: 'Featured partner enquiry',
  },
];

const joinFaqs = [
  {
    q: 'Who can join City on the Hill?',
    a: 'Christian-owned businesses, faith-driven professionals, communities, educators, investors and aligned partner organisations can apply. Every application is reviewed for relevance, clarity and fit with the ecosystem’s values and purpose.',
  },
  {
    q: 'Is there a free business listing?',
    a: 'Yes. The founding Community listing gives approved applicants a shareable profile, category placement, country and city discovery, and a direct link to their own website. Verification and featured partnership pathways add stronger trust and visibility options.',
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
            <a className="button button-gold" href="#pathways">Choose a pathway</a>
            <a className="text-link" href="/directory">Explore the directory</a>
          </div>
        </div>
      </section>

      <section className="join-main" id="pathways" aria-labelledby="join-heading">
        <div className="directory-heading">
          <div><p className="kicker">Membership and visibility</p><h2 id="join-heading">A clear place to begin—and room to grow</h2></div>
          <p>Start with a strong profile, add verification when ready and explore deeper partnership as your role in the ecosystem grows.</p>
        </div>
        <div className="join-tier-grid">
          {pathways.map((pathway) => (
            <article className={pathway.featured ? 'join-tier is-featured' : 'join-tier'} key={pathway.name}>
              <span>{pathway.label}</span>
              <h2>{pathway.name}</h2>
              <p className="join-price">{pathway.price}</p>
              <p>{pathway.description}</p>
              <ul>{pathway.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
              <a className={pathway.featured ? 'button button-gold' : 'button button-outline'} href={`mailto:info@cityonthehillglobal.com?subject=${encodeURIComponent(pathway.subject)}`}>
                {pathway.cta}
              </a>
            </article>
          ))}
        </div>
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

