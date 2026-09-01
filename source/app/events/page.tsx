import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';
import { ecosystemEvents } from '../../lib/events';
import EventsClient from './events-client';

export const metadata: Metadata = {
  title: 'Christian Business Networking Events | City on the Hill',
  description:
    'Discover Christian business networking events, founder roundtables, leadership gatherings and international professional community experiences.',
  alternates: { canonical: '/events' },
  openGraph: {
    title: 'Christian Business Networking Events | City on the Hill',
    description: 'Explore global events, roundtables and learning experiences for faith-driven founders and professionals.',
    url: '/events',
  },
};

const eventsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'City on the Hill Events and Gatherings',
  description: 'An international programme of Christian business networking events, founder roundtables and professional gatherings.',
  url: 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/events',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: ecosystemEvents.length,
    itemListElement: ecosystemEvents.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: event.title,
      description: event.summary,
    })),
  },
};

export default function EventsPage() {
  return (
    <main className="inner-page events-page">
      <SiteHeader />
      <section className="events-hero">
        <div>
          <p className="eyebrow">City on the Hill events</p>
          <h1>Gather with purpose.<br /><em>Build relationships that travel.</em></h1>
          <p>
            Explore the event formats City on the Hill is building for founders, professionals, investors,
            creatives and emerging leaders—locally, internationally and online.
          </p>
          <div className="directory-capacity" aria-label="Event programme features">
            <span><b>03</b> gathering formats</span>
            <span><b>06</b> programme previews</span>
            <span><b>Global</b> participation</span>
          </div>
        </div>
      </section>

      <section className="events-main" aria-labelledby="events-heading">
        <div className="directory-heading">
          <div><p className="kicker">Events and gatherings</p><h2 id="events-heading">Find your next room</h2></div>
          <div className="answer-copy compact-answer">
            <h3>How can I meet faith-driven entrepreneurs and professionals?</h3>
            <p>
              Use the filters to explore networking breakfasts, international roundtables, specialist circles
              and young-leader gatherings. These previews demonstrate the programme structure; confirmed dates
              and booking links will appear as each event opens.
            </p>
          </div>
        </div>
        <EventsClient />
      </section>

      <section className="directory-owner-cta">
        <div>
          <p className="kicker kicker-light">Host with City on the Hill</p>
          <h2>Bring the ecosystem to your city.</h2>
          <p>Propose a roundtable, networking event or specialist gathering for your country or professional community.</p>
        </div>
        <a className="button button-gold" href="mailto:info@cityonthehillglobal.com?subject=City on the Hill event proposal">
          Propose an event
        </a>
      </section>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }} />
    </main>
  );
}

