import type { ReactNode } from 'react';
import { SiteFooter, SiteHeader } from './site-chrome';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  effectiveDate: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, introduction, effectiveDate, children }: LegalPageProps) {
  return (
    <main className="inner-page legal-page">
      <SiteHeader />
      <section className="legal-hero">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{introduction}</p>
          <small>Effective date: {effectiveDate}</small>
        </div>
      </section>
      <article className="legal-content">{children}</article>
      <SiteFooter />
    </main>
  );
}

export function LegalContact() {
  return (
    <p>
      Questions about this policy can be sent to{' '}
      <a href="mailto:info@cityonthehillglobal.com">info@cityonthehillglobal.com</a>.
    </p>
  );
}
