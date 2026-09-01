import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';
import DirectoryClient from './directory-client';

export const metadata: Metadata = {
  title: 'City on the Hill | Businesses, Professionals, Communities & Investors',
  description:
    'Search Christian-owned businesses, faith-driven professionals, communities, courses and investors across the UK and priority international markets.',
  alternates: { canonical: '/directory' },
  openGraph: {
    title: 'City on the Hill | Discover a Global Christian Business Ecosystem',
    description: 'Discover Christian-owned businesses, professionals, communities, courses and investors across a growing international network.',
    url: '/directory',
  },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'City on the Hill Christian Business Ecosystem Directory',
  description: 'A global searchable directory of Christian-owned businesses, professionals, communities, courses and investors.',
  url: 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/directory',
  isPartOf: {
    '@type': 'WebSite',
    name: 'City on the Hill',
    url: 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site',
  },
};

export default function DirectoryPage() {
  return (
    <main className="inner-page">
      <SiteHeader />

      <section className="directory-hero">
        <div>
          <p className="eyebrow">City on the Hill</p>
          <h1>Find the right people.<br /><em>Discover what they are building.</em></h1>
          <p>
            Search businesses, professionals, communities, courses and investors by service, sector,
            country, city, language or delivery. Every profile is a focused shop window with a direct route onward.
          </p>
          <div className="directory-capacity" aria-label="Directory features">
            <span><b>100+</b> profile-ready marketplace</span>
            <span><b>13</b> priority international markets</span>
            <span><b>01</b> clear path to each business</span>
          </div>
        </div>
      </section>

      <section className="directory-main" aria-labelledby="directory-heading">
        <div className="directory-heading">
          <div>
            <p className="kicker">Explore the city</p>
            <h2 id="directory-heading">Search the City on the Hill ecosystem</h2>
          </div>
          <p>
            Explore by expertise, profile type and location. The profiles below demonstrate the finished
            format; approved members can join the same global system without redesigning the site.
          </p>
        </div>
        <DirectoryClient />
      </section>

      <section className="directory-owner-cta">
        <div>
          <p className="kicker kicker-light">For Christian business owners</p>
          <h2>Give your business a window in the city.</h2>
          <p>
            Present your work with a dedicated, shareable page—then send interested customers directly
            to your website, shop or booking journey.
          </p>
        </div>
        <a className="button button-gold" href="mailto:info@cityonthehillglobal.com?subject=Business profile application">
          Apply for a business profile
        </a>
      </section>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
    </main>
  );
}

