import { priorityMarkets } from '../lib/businesses';
import { MobileDock } from '../components/site-chrome';

const directoryCategories = [
  ['Strategy & consulting', 'Advisers, coaches and specialists who help organisations move forward.'],
  ['Marketing & creative', 'Brand, content, digital and communications partners for meaningful growth.'],
  ['Finance & legal', 'Trusted accountants, bookkeepers and professional advisers.'],
  ['People & wellbeing', 'Recruitment, leadership, health and wellbeing services that put people first.'],
  ['Technology & AI', 'Practical digital, data and automation expertise for modern organisations.'],
  ['Products & experiences', 'Thoughtfully made products, venues, hospitality and experiences.'],
];

const communityPeople = [
  {
    title: 'Visionaries & marketplace apostles',
    description: 'Spirit-led builders bringing Kingdom purpose into commerce, institutions and culture.',
  },
  {
    title: 'Commercial leaders & investors',
    description: 'Entrepreneurs, operators and investors who understand how to build, fund and scale well.',
  },
  {
    title: 'Family & social care experts',
    description: 'Parenting specialists, carers and social leaders strengthening families and communities.',
  },
  {
    title: 'Sport & wellbeing leaders',
    description: 'Athletes, coaches and professionals shaping performance, character and whole-person wellbeing.',
  },
  {
    title: 'Media & culture shapers',
    description: 'Creators, communicators and media experts influencing stories and public conversation.',
  },
  {
    title: 'Education & technology leaders',
    description: 'Educators, researchers and technologists preparing people and organisations for what comes next.',
  },
];

const faqs = [
  {
    q: 'Where can I find a network of Christian business owners and founders?',
    a: 'City on the Hill brings Christian founders, business owners and professionals into one visible, values-led international network. Members can build trusted relationships, share expertise, discover opportunities and access practical growth support online and through a growing programme of local events and roundtables.',
  },
  {
    q: 'How do I find verified Christian-owned businesses in my area?',
    a: 'Search the City on the Hill directory by service, business category, country or city. Business profiles are reviewed before they are listed, helping customers, churches and organisations make a more confident first connection. Verification signals alignment and accountability; buyers should still carry out the checks appropriate to their purchase.',
  },
  {
    q: 'What is the best directory for Christian B2B services and vendors?',
    a: 'City on the Hill is designed for both individual buyers and organisations sourcing Christian-owned suppliers. The directory brings professional services, technology, finance, marketing, coaching and other business categories together, making it easier to build a values-aligned supplier network without compromising on quality or capability.',
  },
  {
    q: 'How can I promote my business to a Christian audience?',
    a: 'Apply for a verified City on the Hill business profile. A strong listing makes your services, expertise and location easier to discover, while the wider community creates routes to referrals, partnerships, events, development programmes and larger opportunities.',
  },
  {
    q: 'Which countries does the City on the Hill network serve?',
    a: 'City on the Hill has London roots and a global vision. Its priority markets include the United Kingdom, United States, Canada, the European Union, Nigeria, Australia, Ghana, Zimbabwe, South Africa, the United Arab Emirates, Kenya, Malta and Egypt, with room to welcome businesses from further nations as the directory grows.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'CommunityOrganization'],
      '@id': 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/#organization',
      name: 'City on the Hill',
      url: 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/',
      email: 'info@cityonthehillglobal.com',
      areaServed: priorityMarkets,
      address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
      knowsAbout: [
        'Christian business directory',
        'Faith-driven business',
        'Marketplace ministry',
        'Christian networking',
        'Kingdom entrepreneurship',
        'Christian investors',
        'Parenting and social care',
        'Sport, media and culture',
        'Education and technology leadership',
      ],
      description:
        'City on the Hill is a global Christian business ecosystem connecting customers, organisations and faith-driven professionals across priority international markets.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/#website',
      name: 'City on the Hill',
      url: 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/',
      publisher: { '@id': 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/directory?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="City on the Hill home">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <b />
            </span>
            <span className="brand-name">
              <strong>CITY</strong>
              <small>ON THE HILL</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="/directory">Discover</a>
            <a href="/events">Events</a>
            <a href="#community">Ecosystem</a>
            <a href="/join">Join</a>
          </div>
          <a className="button button-light nav-cta" href="/join">
            Get your business verified
          </a>
        </nav>
        <MobileDock />

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">City on the Hill · A global Christian business ecosystem</p>
            <h1>
              Find trusted Christian businesses. <em>Build what matters.</em>
            </h1>
            <p className="hero-intro">
              City on the Hill connects customers and organisations with excellent Christian-owned
              businesses—and gives faith-driven founders the visibility, relationships and practical
              support to grow with purpose.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="/directory">Find a trusted business</a>
              <a className="text-link" href="#businesses">Grow my business <span>↗</span></a>
            </div>
            <a
              className="ecosystem-invite"
              href="mailto:info@cityonthehillglobal.com?subject=Join the City on the Hill ecosystem"
            >
              <span className="ecosystem-symbol" aria-hidden="true">✦</span>
              <span><b>Join our Ecosystem</b><small>Learn and Network Globally</small></span>
              <i aria-hidden="true">→</i>
            </a>
            <div className="hero-proof" aria-label="Platform benefits">
              <span><b>01</b> Values-led businesses</span>
              <span><b>02</b> Verified profiles</span>
              <span><b>03</b> International connections</span>
            </div>
          </div>

          <aside className="discovery-card" aria-label="Business directory preview">
            <div className="card-topline">
              <span>Discover the city</span>
              <span className="live-dot">Growing across nations</span>
            </div>
            <h2>What do you need today?</h2>
            <form className="search-box" action="/directory" method="get">
              <label className="sr-only" htmlFor="service-search">Search businesses or services</label>
              <span aria-hidden="true">⌕</span>
              <input id="service-search" name="q" placeholder="Businesses, experts, communities, services…" />
              <button type="submit">Search</button>
            </form>
            <p className="browse-label">Popular searches</p>
            <div className="category-pills">
              <a href="/directory?type=Businesses">Businesses</a>
              <a href="/directory?type=Professionals">Professionals</a>
              <a href="/directory?type=Communities">Communities</a>
              <a href="/directory?type=Investors">Investors</a>
            </div>
            <div className="scripture-note">
              <span aria-hidden="true">“</span>
              <p>A city set on a hill cannot be hidden.</p>
              <small>Matthew 5:14</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="pathway-strip" aria-label="Ways to use City on the Hill">
        <div className="pathway-intro">
          <span>One ecosystem. Global opportunity.</span>
          <p>Choose the pathway that serves you today.</p>
        </div>
        <a href="/directory"><b>Discover</b><span>Businesses, experts and investors</span><i>01</i></a>
        <a href="/events"><b>Gather</b><span>Events, roundtables and learning</span><i>02</i></a>
        <a href="#community"><b>Connect</b><span>Meet faith-driven professionals</span><i>03</i></a>
        <a href="/join"><b>Join</b><span>Showcase your work and grow</span><i>04</i></a>
      </section>

      <section className="section directory-section" id="directory">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">Christian business directory</p>
            <h2>Excellent businesses.<br /><em>Shared foundations.</em></h2>
          </div>
          <div className="answer-copy">
            <h3>How do I find trusted Christian-owned businesses?</h3>
            <p>
              Search one growing international directory for values-led businesses, specialist expertise and
              professional services. City on the Hill makes Christian-owned companies easier to find,
              understand and contact—whether you are buying for yourself, your church or your organisation.
            </p>
            <a className="arrow-link" href="/directory">Browse every category <span>→</span></a>
          </div>
        </div>

        <div className="category-grid" id="categories">
          {directoryCategories.map(([title, description], index) => (
            <a href={`/directory?q=${encodeURIComponent(title)}`} className="category-card" key={title}>
              <span className="category-number">0{index + 1}</span>
              <div className="category-icon" aria-hidden="true">{['✦', '◐', '▰', '♡', '⌘', '◇'][index]}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <b>Explore businesses <span>↗</span></b>
            </a>
          ))}
        </div>
      </section>

      <section className="community-section" id="community">
        <div className="community-visual" aria-hidden="true">
          <div className="sun-disc" />
          <div className="hill hill-one" />
          <div className="hill hill-two" />
          <span className="community-word one">VISIONARIES</span>
          <span className="community-word two">BUILDERS</span>
          <span className="community-word three">EXPERTS</span>
        </div>
        <div className="community-copy">
          <p className="kicker kicker-light">Christian professional community</p>
          <h2>Meet great people.<br />Grow in good company.</h2>
          <h3>Where can I find a community of Christians making an impact?</h3>
          <p>
            City on the Hill is a place for Christians on a mission: people with vision, wisdom, expertise
            and the courage to build. Meet commercially astute leaders, marketplace apostles and trusted
            specialists who believe faith, excellence and meaningful impact belong together.
          </p>
          <ul>
            <li><span>01</span><b>Meaningful connections</b> with founders and professionals across sectors</li>
            <li><span>02</span><b>Founder roundtables</b> for honest thinking, prayer and peer support</li>
            <li><span>03</span><b>Events and introductions</b> that turn shared values into real opportunity</li>
          </ul>
          <a className="button button-gold" href="mailto:info@cityonthehillglobal.com?subject=Join the City on the Hill ecosystem">Join our Ecosystem</a>
        </div>
      </section>

      <section className="people-section" aria-labelledby="people-heading">
        <div className="people-inner">
          <div className="people-header">
            <div>
              <p className="kicker kicker-light">The people of the city</p>
              <h2 id="people-heading">A community as varied as its calling.</h2>
            </div>
            <p>
              This is more than a business directory. It is a place to meet exceptional Christians—
              visionaries and practitioners using their influence, experience and resources to serve
              people, transform industries and advance the Kingdom.
            </p>
          </div>
          <div className="people-grid">
            {communityPeople.map((person, index) => (
              <article className="people-card" key={person.title}>
                <span>0{index + 1}</span>
                <h3>{person.title}</h3>
                <p>{person.description}</p>
              </article>
            ))}
          </div>
          <div className="people-footer">
            <p><b>Different callings.</b> Shared faith. Greater Kingdom impact.</p>
            <a className="button button-gold" href="#join">Find your place in the city</a>
          </div>
        </div>
      </section>

      <section className="section growth-section" id="businesses">
        <div className="growth-top">
          <div>
            <p className="kicker">For Christian entrepreneurs</p>
            <h2>More than a listing.<br /><em>A place to build.</em></h2>
          </div>
          <p>
            Get found by the right people, strengthen the business behind your profile and prepare for
            bigger opportunities—with practical, values-led support for every stage of growth.
          </p>
        </div>
        <div className="growth-grid">
          <article className="growth-feature growth-feature-main">
            <span>Visibility</span>
            <h3>Be easier to discover—and easier to trust.</h3>
            <p>
              Present your offer clearly through a verified profile built for customer searches,
              supplier discovery and meaningful referrals.
            </p>
            <a href="#join">Apply for verification <b>→</b></a>
          </article>
          <article className="growth-feature">
            <span>Capability</span>
            <h3>Build with confidence.</h3>
            <p>Access coaching, AI capability and practical development to strengthen how you lead and deliver.</p>
          </article>
          <article className="growth-feature growth-feature-blue">
            <span>Opportunity</span>
            <h3>Prepare for bigger rooms.</h3>
            <p>Build the credibility, relationships and readiness needed for corporate and collaborative work.</p>
          </article>
        </div>
      </section>

      <section className="local-section global-section" id="global">
        <div className="local-card">
          <p className="kicker">London roots · Global vision</p>
          <h2>One city.<br />Many nations.</h2>
          <p>
            City on the Hill is building an international marketplace where Christian entrepreneurs,
            executives, service providers and buyers can find one another across borders. Discover
            expertise locally, build trusted global relationships and create Kingdom-minded opportunity.
          </p>
          <a className="arrow-link" href="/directory">Search the global directory <span>→</span></a>
        </div>
        <div className="local-map global-markets" aria-label="Priority international markets">
          <div className="global-orbit" aria-hidden="true"><i /><b /></div>
          <div className="global-markets-heading">
            <span>Priority international markets</span>
            <small>Building connections now</small>
          </div>
          <div className="global-market-grid">
            {priorityMarkets.map((market, index) => (
              <a href={`/directory?market=${encodeURIComponent(market)}`} key={market}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <b>{market}</b>
                <i>Explore →</i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading centered-heading">
          <p className="kicker">Built on trust</p>
          <h2>How the city works</h2>
          <p>Clear routes for businesses, buyers and professional connections.</p>
        </div>
        <div className="process-grid">
          <article><span>01</span><h3>Businesses apply</h3><p>Tell us who you serve, what you do and how your work reflects your values.</p></article>
          <article><span>02</span><h3>Profiles are reviewed</h3><p>We review each application before it appears in the City on the Hill directory.</p></article>
          <article><span>03</span><h3>The city connects</h3><p>Customers discover, organisations source, and members build relationships that create opportunity.</p></article>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-intro">
          <p className="kicker">Questions, clearly answered</p>
          <h2>Finding your place in the city</h2>
          <p>Direct answers for buyers, founders and Christian professionals.</p>
          <a className="arrow-link" href="mailto:info@cityonthehillglobal.com">Ask us something else <span>↗</span></a>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary><span>0{index + 1}</span>{item.q}<i>+</i></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="join-section" id="join">
        <p className="kicker kicker-light">There is a place for you here</p>
        <h2>Come to be seen.<br /><em>Grow so others can flourish.</em></h2>
        <p>Find the right business, join our ecosystem to learn and network globally, or bring your own work into the city.</p>
        <div className="join-actions">
          <a className="button button-gold" href="/directory">Explore the directory</a>
          <a className="button button-outline" href="mailto:info@cityonthehillglobal.com?subject=Join the City on the Hill ecosystem">Join our Ecosystem</a>
          <a className="button button-outline" href="mailto:info@cityonthehillglobal.com?subject=Business verification">Get my business verified</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="City on the Hill home">
            <span className="brand-mark" aria-hidden="true"><i /><b /></span>
            <span className="brand-name"><strong>CITY</strong><small>ON THE HILL</small></span>
          </a>
          <p>City on the Hill is a global ecosystem for people learning, networking and building with purpose.</p>
        </div>
        <div><h3>Explore</h3><a href="/directory">Business directory</a><a href="/events">Events and gatherings</a><a href="#community">Professional community</a><a href="#global">Global markets</a></div>
        <div><h3>Connect</h3><a href="/join">Join the ecosystem</a><a href="mailto:info@cityonthehillglobal.com">Email us</a><a href="https://www.linkedin.com/company/dominion-mandate/about/">LinkedIn</a><a href="https://www.instagram.com/dominion__mandate/">Instagram</a></div>
        <div><h3>Legal</h3><a href="/terms">Terms and conditions</a><a href="/refund-policy">Refund policy</a><a href="/data-protection">Data protection policy</a></div>
        <div className="footer-bottom"><span>© 2026 City on the Hill</span><a href="mailto:info@cityonthehillglobal.com">info@cityonthehillglobal.com</a><span>Matthew 5:14</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}

