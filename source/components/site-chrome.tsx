export function SiteHeader() {
  return (
    <header className="inner-header">
      <nav className="site-nav inner-site-nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="City on the Hill home">
          <span className="brand-mark" aria-hidden="true"><i /><b /></span>
          <span className="brand-name"><strong>CITY</strong><small>ON THE HILL</small></span>
        </a>
        <div className="nav-links">
          <a href="/directory">Discover</a>
          <a href="/events">Events</a>
          <a href="/#community">Ecosystem</a>
          <a href="/join">Join</a>
        </div>
        <a
          className="button button-gold nav-cta"
          href="/join"
        >
          Showcase my business
        </a>
      </nav>
      <MobileDock />
    </header>
  );
}

export function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="Mobile navigation">
      <a href="/"><span aria-hidden="true">⌂</span><b>Home</b></a>
      <a href="/directory"><span aria-hidden="true">⌕</span><b>Discover</b></a>
      <a href="/events"><span aria-hidden="true">◇</span><b>Events</b></a>
      <a href="/join"><span aria-hidden="true">＋</span><b>Join</b></a>
      <a href="/#community"><span aria-hidden="true">•••</span><b>More</b></a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <a className="brand" href="/" aria-label="City on the Hill home">
          <span className="brand-mark" aria-hidden="true"><i /><b /></span>
          <span className="brand-name"><strong>CITY</strong><small>ON THE HILL</small></span>
        </a>
        <p>City on the Hill is a global ecosystem for people learning, networking and building with purpose.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <a href="/directory">Business directory</a>
        <a href="/events">Events and gatherings</a>
        <a href="/#community">Professional community</a>
        <a href="/#global">Global markets</a>
      </div>
      <div>
        <h3>Connect</h3>
        <a href="/join">Join the ecosystem</a>
        <a href="mailto:info@cityonthehillglobal.com">Email us</a>
        <a href="https://www.linkedin.com/company/dominion-mandate/about/">LinkedIn</a>
        <a href="https://www.instagram.com/dominion__mandate/">Instagram</a>
      </div>
      <div>
        <h3>Legal</h3>
        <a href="/terms">Terms and conditions</a>
        <a href="/refund-policy">Refund policy</a>
        <a href="/data-protection">Data protection policy</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 City on the Hill</span>
        <a href="mailto:info@cityonthehillglobal.com">info@cityonthehillglobal.com</a>
        <span>Matthew 5:14</span>
      </div>
    </footer>
  );
}

