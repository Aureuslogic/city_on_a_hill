import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteFooter, SiteHeader } from '../../../components/site-chrome';
import { businesses, getBusiness, getBusinessProfileType } from '../../../lib/businesses';

type BusinessPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: BusinessPageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) return {};

  const imageMetadata = business.media.src
    ? { images: [{ url: business.media.src, alt: `${business.name} showcase` }] }
    : {};

  return {
    title: `${business.name} | City on the Hill`,
    description: business.summary,
    alternates: { canonical: `/business/${business.slug}` },
    robots: { index: !business.isDemo, follow: true },
    openGraph: {
      title: `${business.name} | City on the Hill`,
      description: business.summary,
      url: `/business/${business.slug}`,
      type: 'website',
      ...imageMetadata,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${business.name} | City on the Hill`,
      description: business.summary,
      ...(business.media.src ? { images: [business.media.src] } : {}),
    },
  };
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) notFound();

  const profileType = getBusinessProfileType(business);

  const relatedBusinesses = businesses
    .filter((item) => item.slug !== business.slug)
    .sort((a, b) => Number(b.category === business.category) - Number(a.category === business.category))
    .slice(0, 3);

  const localBusinessSchema = business.isDemo ? null : {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/business/${business.slug}#business`,
    name: business.name,
    description: business.summary,
    url: business.website,
    areaServed: business.serves,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.location,
      addressCountry: business.countryCode,
    },
    knowsAbout: [...business.services, ...business.keywords],
    mainEntityOfPage: `https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/business/${business.slug}`,
    ...(business.media.src ? { image: business.media.src } : {}),
  };

  return (
    <main className="inner-page business-profile-page">
      <SiteHeader />

      {business.isDemo && (
        <div className="demo-banner">
          <strong>Demonstration profile</strong>
          <span>This example shows the format. Replace it with approved business information before indexing.</span>
        </div>
      )}

      <section className="profile-hero" data-accent={business.accent}>
        <div className="profile-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>›</span><a href="/directory">Discover</a><span>›</span><b>{profileType}</b>
          </nav>
          <div className="profile-hero-grid">
            <div className="profile-title-block">
              <div className="profile-status">
                <span>{business.verified ? '✓ Verified business' : business.isDemo ? 'Preview listing' : 'Business profile'}</span>
                {business.featured && <span>Featured profile</span>}
                <span>{business.location} · {business.market}</span>
              </div>
              <p className="eyebrow">{profileType} · {business.category}</p>
              <h1>{business.name}</h1>
              <p className="profile-summary">{business.summary}</p>
              <div className="profile-actions">
                <a className="button button-gold" href={business.website} target="_blank" rel="noopener noreferrer">
                  {business.ctaLabel} <span>↗</span>
                </a>
                <a className="text-link" href="#services">See services</a>
              </div>
            </div>

            <div className="profile-media" data-kind={business.media.kind}>
              {business.media.src && business.media.kind === 'image' ? (
                <img src={business.media.src} alt={`${business.name} showcase`} />
              ) : business.media.src && business.media.kind === 'video' ? (
                <iframe
                  src={business.media.src}
                  title={`${business.name} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="profile-media-placeholder">
                  <span aria-hidden="true">{business.media.kind === 'video' ? '▶' : '✦'}</span>
                  <p>{business.media.label}</p>
                  <small>{business.media.kind === 'video' ? 'Video showcase area' : 'Feature image area'}</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="profile-content">
        <article className="profile-story">
          <p className="kicker">About the business</p>
          <h2>Purpose, expertise and a clear promise.</h2>
          {business.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <div className="profile-benefits">
            <p className="kicker">Why customers choose this business</p>
            <h2>Benefits that make the difference</h2>
            <ol>
              {business.benefits.map((benefit, index) => (
                <li key={benefit}><span>0{index + 1}</span><p>{benefit}</p></li>
              ))}
            </ol>
          </div>
        </article>

        <aside className="profile-aside" id="services">
          <p className="kicker">At a glance</p>
          <dl>
            <div><dt>Based in</dt><dd>{business.location}</dd></div>
            <div><dt>Country/region</dt><dd>{business.market}</dd></div>
            <div><dt>Serving</dt><dd>{business.serves}</dd></div>
            <div><dt>Profile type</dt><dd>{profileType}</dd></div>
            <div><dt>Category</dt><dd>{business.category}</dd></div>
            <div><dt>Delivery</dt><dd>{business.delivery ?? 'Ask the provider'}</dd></div>
            <div><dt>Languages</dt><dd>{(business.languages ?? ['English']).join(', ')}</dd></div>
          </dl>
          <h2>Services</h2>
          <ul>{business.services.map((service) => <li key={service}>{service}</li>)}</ul>
          <a className="button button-gold" href={business.website} target="_blank" rel="noopener noreferrer">
            Continue to business website <span>↗</span>
          </a>
          <small>You will leave City on the Hill and continue on the business’s own website.</small>
        </aside>
      </section>

      <section className="related-businesses">
        <div className="related-heading">
          <div><p className="kicker">Keep exploring</p><h2>More windows in the city</h2></div>
          <a className="arrow-link" href="/directory">View the full directory <span>→</span></a>
        </div>
        <div className="related-grid">
          {relatedBusinesses.map((item) => (
            <a href={`/business/${item.slug}`} data-accent={item.accent} key={item.slug}>
              <span>{getBusinessProfileType(item)} · {item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.location}, {item.market} · {item.serves}</p>
              <b>View profile →</b>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
      {localBusinessSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      )}
    </main>
  );
}

