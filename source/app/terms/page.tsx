import type { Metadata } from 'next';
import { LegalContact, LegalPage } from '../../components/legal-page';

export const metadata: Metadata = {
  title: 'Terms and Conditions | City on the Hill',
  description: 'Terms governing access to and use of the City on the Hill website, directory, profiles, events and ecosystem services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms and Conditions"
      introduction="These terms explain the rules that apply when you visit City on the Hill, use the directory, apply for a profile or take part in an ecosystem service."
      effectiveDate="1 September 2026"
    >
      <section>
        <h2>1. About these terms</h2>
        <p>
          City on the Hill is a Christian business and professional ecosystem with a searchable directory,
          profile pages, event discovery and community pathways. In these terms, “we”, “us” and “our” refer
          to City on the Hill. “You” means any visitor, applicant, listed organisation, member or participant.
        </p>
        <p>By using this website, you agree to these terms. If you do not agree, please do not use the website.</p>
      </section>

      <section>
        <h2>2. The directory and external providers</h2>
        <p>
          City on the Hill helps people discover independent businesses, professionals, communities,
          educators, investors and events. Unless we expressly say otherwise, listed providers are independent
          from us and are responsible for their own products, services, statements, contracts and customer care.
        </p>
        <p>
          Links may take you to an external website. A transaction completed there is between you and that
          provider. You should carry out the checks appropriate to your purchase, engagement or investment decision.
        </p>
      </section>

      <section>
        <h2>3. Profiles, applications and verification</h2>
        <p>
          Applicants must provide accurate, current and lawful information and have authority to publish all
          submitted words, images, videos, names and links. You must promptly tell us if important information changes.
        </p>
        <p>
          We may accept, decline, request changes to, suspend or remove a profile where reasonably necessary to
          protect users, maintain quality, comply with law or uphold the purpose of the ecosystem.
        </p>
        <p>
          A verification badge means that the profile has completed the review process applicable at that time.
          It is not a guarantee of quality, financial standing, regulatory status, outcomes or suitability for a
          particular customer. Verification is not investment, legal, medical or professional advice.
        </p>
      </section>

      <section>
        <h2>4. Acceptable use</h2>
        <p>You must not use the website or ecosystem to:</p>
        <ul>
          <li>break the law, mislead people, impersonate another person or infringe intellectual-property rights;</li>
          <li>publish discriminatory, abusive, defamatory, fraudulent or harmful material;</li>
          <li>introduce malware, probe security, scrape at unreasonable scale or interfere with the service;</li>
          <li>send unsolicited communications or collect personal information without a lawful basis; or</li>
          <li>suggest that City on the Hill endorses an offer beyond the verification or partnership status expressly shown.</li>
        </ul>
      </section>

      <section>
        <h2>5. Events and community participation</h2>
        <p>
          Event dates, venues, speakers and formats may change. Confirmed booking terms will be supplied with the
          relevant event. Participants must behave respectfully and follow reasonable safety, safeguarding and venue rules.
        </p>
      </section>

      <section>
        <h2>6. Fees, paid services and renewals</h2>
        <p>
          Any fee, billing period, renewal arrangement and included service will be shown before you commit to a
          paid service. Additional order or event terms may apply and will form part of the agreement. Our{' '}
          <a href="/refund-policy">Refund Policy</a> explains cancellation and refund arrangements.
        </p>
      </section>

      <section>
        <h2>7. Intellectual property</h2>
        <p>
          The website design, original copy, brand and platform materials belong to us or our licensors. You may
          view and share public page links for lawful personal or business use, but may not reproduce substantial
          parts of the website or create a competing database without permission.
        </p>
        <p>
          You retain ownership of content you submit. You give us a non-exclusive, worldwide, royalty-free licence
          to host, format, reproduce and display that content for operating, promoting and improving the profile or
          service you requested. This licence ends when the content is removed, except for lawful records and
          material already used in completed campaigns or backups awaiting secure deletion.
        </p>
      </section>

      <section>
        <h2>8. Information, availability and disclaimers</h2>
        <p>
          We aim to keep information useful and the website available, but cannot promise uninterrupted access or
          that every third-party statement is complete or current. General content on the website is informational
          and is not financial, investment, legal, medical, safeguarding or other regulated professional advice.
        </p>
      </section>

      <section>
        <h2>9. Liability</h2>
        <p>
          Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for death
          or personal injury caused by negligence, fraud or fraudulent misrepresentation. Nothing affects mandatory
          consumer rights.
        </p>
        <p>
          Subject to that, we are not responsible for losses caused by independent providers, external websites,
          inaccurate profile information supplied by others, or decisions made without appropriate professional due
          diligence. Business users are responsible for foreseeable losses arising from their own breach of these terms.
        </p>
      </section>

      <section>
        <h2>10. Changes and termination</h2>
        <p>
          We may update the website and these terms. Material changes will be dated and, where appropriate, brought
          to affected users’ attention. You may stop using the website at any time. Provisions intended to continue,
          including intellectual-property, payment, liability and dispute provisions, survive termination.
        </p>
      </section>

      <section>
        <h2>11. Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales. The courts of England and Wales have
          jurisdiction, although consumers living elsewhere may retain mandatory local protections and may be able
          to bring proceedings in their home courts.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <LegalContact />
      </section>
    </LegalPage>
  );
}
