import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';

export const metadata: Metadata = {
  title: 'Business verification | City on the Hill',
  description:
    'Every City on the Hill member completes verification before joining, so professional standards and quality are in place from the start.',
  alternates: { canonical: '/verification' },
};

export default function VerificationPage() {
  return (
    <main className="inner-page legal-page">
      <SiteHeader />
      <section className="legal-hero">
        <div>
          <p className="eyebrow">Verification required for every member</p>
          <h1>Professional standards, from the very start.</h1>
          <p>
            Before joining at any tier, every business completes City on the Hill&apos;s verification process,
            so professional standards and quality are embedded from the very start.
          </p>
        </div>
      </section>
      <article className="legal-content">
        <section>
          <h2>What verification is for</h2>
          <p>
            Spark, Lamp and Beacon all begin here. Verification is how the City checks that a business is
            ready to be found, trusted and introduced to other partners.
          </p>
          <ul>
            <li>Tell us who you are and what the business does.</li>
            <li>Confirm the standards you already have in place.</li>
            <li>Choose a membership tier once your application has been reviewed.</li>
          </ul>
        </section>
        <section>
          <h2>Start your application</h2>
          <p>
            The Growth Partner application is the form we use to begin verification. It takes about 15 minutes.
            There is nothing to upload.
          </p>
          <p>
            <a className="button button-gold" href="/apply/">Start verification</a>
          </p>
          <p>
            <a href="/join">Compare Spark, Lamp and Beacon</a>
          </p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
