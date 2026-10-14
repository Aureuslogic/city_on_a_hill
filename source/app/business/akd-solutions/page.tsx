import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../../../components/site-chrome';

export const metadata: Metadata = {
  title: 'AKD Solutions | City on the Hill',
  description:
    'AKD Solutions stimulates the brilliance organisations already hold, through learning and development, research and consultancy.',
  alternates: { canonical: '/business/akd-solutions' },
};

const brands = [
  'Toyota',
  'DB Schenker',
  'Tesco',
  'Siemens',
  'The Football Association',
  'KPMG',
  'Bentley',
  'Warner Bros',
  'Holiday Inn',
  'IHG',
];

export default function AkdSolutionsPage() {
  return (
    <main className="inner-page business-profile-page">
      <SiteHeader />
      <section className="profile-hero" data-accent="navy">
        <div className="profile-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>›</span><a href="/directory">Discover</a><span>›</span><b>Businesses</b>
          </nav>
          <div className="profile-hero-grid">
            <div className="profile-title-block">
              <p className="akd-scripture">
                Matthew 5:16 &ldquo;Let your light so shine before men, that they may see your good works and glorify your Father in heaven.&rdquo;
              </p>
              <p className="eyebrow">Education and training</p>
              <h1>AKD Solutions</h1>
              <p className="profile-summary">Stimulating brilliance.</p>
              <p className="profile-summary">
                Every organisation already holds the brilliance it needs. We exist to stimulate it.
                This is an opportunity to disrupt convention and let incredible possibilities emerge. Seize it.
              </p>
              <div className="profile-actions">
                <a className="button button-gold" href="mailto:info@cityonthehillglobal.com?subject=Start a conversation with AKD Solutions">
                  Start the conversation
                </a>
                <a className="text-link" href="/join">Partner with us</a>
              </div>
            </div>
            <div className="akd-video" aria-label="Brand video placeholder">
              <div>
                <strong>10-second brand video</strong>
                <p>The film will sit here, in the same place as video on other directory pages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-content">
        <article className="profile-story">
          <p className="kicker">Our why</p>
          <h2>We were agitated by mediocrity.</h2>
          <p>
            Too much of learning and development settles for adequate when it holds the keys to real possibility
            and potential. We started AKD Solutions because we wanted something more impactful, for individuals,
            for organisations, for society. We wanted to be disruptive. To break rules. To find out what was
            actually possible when nobody was willing to settle.
          </p>

          <p className="kicker">What we do</p>
          <h2>A problem that is really a need for change.</h2>
          <p>
            Organisations come to us carrying a problem that is really a need for change: a transformation they
            can feel is necessary but have not been able to name or start. We do not arrive with a solution off
            the shelf. We co-create one, through learning and development, research, and consultancy, built from
            a relationship where we have taken the time to genuinely understand you.
          </p>
          <p>
            Every engagement is built on the same foundations: understand the real challenge, co-create the
            solution together, agree clear measures, hold each other accountable, and build something that lasts.
            That only works if we are trusted, so trust is what we build first.
          </p>

          <p className="kicker">Proof</p>
          <h2>Partnerships that get renewed.</h2>
          <p>
            We do not do one-off projects. We build long-term partnerships, the kind that get renewed, extended,
            and referred, year after year, because the relationship is trusted and the results are measurable.
            Every engagement is built on data, so the impact and value we add can be evidenced, not just claimed.
          </p>
          <p>Trusted by organisations including:</p>
          <div className="akd-brands">
            {brands.map((brand) => <span key={brand}>{brand}</span>)}
          </div>

          <p className="kicker">Who we are for</p>
          <h2>Leaders prepared to be true partners.</h2>
          <p>
            We are for leaders and organisations who want meaningful change and are prepared to be true partners
            in getting there: comfortable with disruption, open to doing things differently.
          </p>
          <p>
            You are exactly who we are looking for if you know you are stuck and you know there is untapped
            potential underneath it. If there is conflict, internal or external, that is quietly damaging the
            organisation. If you are ready for big possibilities to emerge and you are willing to engage at
            leadership level, with real ownership and real accountability.
          </p>
          <p>
            We are not the right fit if you are after a quick fix or a sheep-dip solution. That is not what we
            do, and we would rather say so upfront than waste your time.
          </p>

          <p className="kicker">The impact</p>
          <h2>People&apos;s lights shine.</h2>
          <p>
            We measure success by what people carry with them afterward. When we have done our work well, people
            leave knowing their why and their how. They have been touched by something that translates into real,
            lasting change.
          </p>
        </article>

        <aside className="profile-aside">
          <p className="kicker">Call to action</p>
          <h2>Seize it.</h2>
          <p>
            This is an opportunity to disrupt, break convention, and allow incredible opportunities to emerge.
          </p>
          <a className="button button-gold" href="mailto:info@cityonthehillglobal.com?subject=Start a conversation with AKD Solutions">
            Start the conversation
          </a>
          <a className="button button-outline" href="/join">Partner with us</a>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
