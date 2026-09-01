import type { Metadata } from 'next';
import { LegalContact, LegalPage } from '../../components/legal-page';

export const metadata: Metadata = {
  title: 'Data Protection Policy | City on the Hill',
  description: 'How City on the Hill collects, uses, shares, protects and retains personal information and supports UK data-protection rights.',
  alternates: { canonical: '/data-protection' },
};

export default function DataProtectionPage() {
  return (
    <LegalPage
      eyebrow="Privacy and data protection"
      title="Data Protection Policy"
      introduction="This policy explains how City on the Hill handles personal information when you visit the website, contact us, apply for a profile, join the ecosystem or take part in an event."
      effectiveDate="1 September 2026"
    >
      <section>
        <h2>1. Who is responsible for your information?</h2>
        <p>
          City on the Hill is the controller of personal information handled for its own website, directory,
          applications, communications and programmes. An independently listed business is normally a separate
          controller for information it collects through its own website or services.
        </p>
        <LegalContact />
      </section>

      <section>
        <h2>2. The laws and principles we follow</h2>
        <p>
          We aim to comply with the UK GDPR, the Data Protection Act 2018, the Data (Use and Access) Act 2025 and
          related privacy and electronic-communications rules where they apply. We process personal information
          lawfully, fairly and transparently; collect it for clear purposes; minimise what we use; keep it accurate;
          retain it only as long as needed; and protect it appropriately.
        </p>
      </section>

      <section>
        <h2>3. Information we may collect</h2>
        <ul>
          <li><strong>Contact details:</strong> name, email address, telephone number, organisation and role.</li>
          <li><strong>Profile and application information:</strong> biography, business details, location, services, website, images, video links, credentials and verification evidence.</li>
          <li><strong>Communication information:</strong> enquiries, feedback, event interests and correspondence.</li>
          <li><strong>Transaction information:</strong> service, event or membership purchased, payment status, invoice and refund records. Payment-card data should be handled by the payment provider rather than stored by us.</li>
          <li><strong>Technical information:</strong> IP address, browser, device, security logs, pages requested and necessary cookie or similar identifiers.</li>
          <li><strong>Public-source information:</strong> relevant information from company websites, professional profiles or registers used to review or maintain a listing.</li>
        </ul>
      </section>

      <section>
        <h2>4. Faith and other sensitive information</h2>
        <p>
          Participation in a Christian ecosystem or information supplied for verification may reveal religious or
          philosophical beliefs, which can be special-category data. We minimise this information and process it only
          where an appropriate legal basis and special-category condition applies, such as explicit consent. You may
          withdraw consent where consent is the basis, although this may affect a verification or service that
          genuinely depends on the information.
        </p>
        <p>Please do not send health, criminal-record or other highly sensitive information unless we specifically request it through an appropriate secure process.</p>
      </section>

      <section>
        <h2>5. Why we use information and our lawful bases</h2>
        <ul>
          <li><strong>To answer enquiries and take steps at your request:</strong> contract steps and legitimate interests in communicating with people interested in the ecosystem.</li>
          <li><strong>To assess, publish and maintain profiles:</strong> contract, legitimate interests in operating a trusted directory, and consent where required.</li>
          <li><strong>To provide memberships, events or paid services:</strong> contract and legal obligations relating to records, tax, refunds and disputes.</li>
          <li><strong>To protect the website and users:</strong> legitimate interests in security, fraud prevention, moderation and service integrity.</li>
          <li><strong>To improve and understand the service:</strong> legitimate interests using proportionate service data, and consent for optional analytics where required.</li>
          <li><strong>To send marketing:</strong> consent where required, or another lawful route permitted for relevant business communications, always with an opt-out.</li>
          <li><strong>To comply with law and establish legal claims:</strong> legal obligation and legitimate interests.</li>
        </ul>
        <p>We decide and document the lawful basis before using information for a purpose. We do not use solely automated decisions that produce legal or similarly significant effects.</p>
      </section>

      <section>
        <h2>6. Who receives information?</h2>
        <p>We may share information only as reasonably necessary with:</p>
        <ul>
          <li>website hosting, cloud, email, security, analytics and customer-support providers acting under contract;</li>
          <li>payment, ticketing or event providers where you use those services;</li>
          <li>professional advisers, insurers, auditors or prospective transaction advisers under duties of confidence;</li>
          <li>authorities, regulators, courts or other parties where required by law or necessary to protect rights and safety; and</li>
          <li>the public, where you have applied for information to appear on a public profile.</li>
        </ul>
        <p>We do not sell personal information.</p>
      </section>

      <section>
        <h2>7. International transfers</h2>
        <p>
          City on the Hill has an international audience and some suppliers may process information outside the UK.
          Where a restricted transfer occurs, we use an applicable adequacy decision, approved contractual safeguards
          or another lawful transfer mechanism, together with appropriate risk and security measures.
        </p>
      </section>

      <section>
        <h2>8. How long we keep information</h2>
        <p>
          We keep information only for as long as needed for the stated purpose, including maintaining an active
          profile, answering an enquiry, providing a service, meeting tax or legal requirements, resolving disputes
          and protecting legitimate interests. We consider the type, sensitivity, volume and risk of the information
          when setting and reviewing retention periods. Information is then securely deleted or anonymised.
        </p>
      </section>

      <section>
        <h2>9. Security</h2>
        <p>
          We use proportionate technical and organisational measures intended to protect information against loss,
          misuse, unauthorised access, alteration and disclosure. No online system can be guaranteed completely secure.
          If a personal-data breach creates a reportable risk, we will notify the ICO and affected individuals as required.
        </p>
      </section>

      <section>
        <h2>10. Your data-protection rights</h2>
        <p>Depending on the circumstances, you may have rights to:</p>
        <ul>
          <li>be informed and obtain access to your personal information;</li>
          <li>correct inaccurate or incomplete information;</li>
          <li>request erasure or restriction;</li>
          <li>object to processing based on legitimate interests and object to direct marketing at any time;</li>
          <li>receive or transfer information under the data-portability right where it applies;</li>
          <li>withdraw consent at any time, without affecting earlier lawful processing; and</li>
          <li>complain about how your information has been handled.</li>
        </ul>
        <p>
          To exercise a right, email us. We may ask for proportionate information to confirm identity and locate the
          relevant records. Rights can be subject to legal conditions and exemptions, which we will explain if relevant.
        </p>
      </section>

      <section>
        <h2>11. Cookies and similar technology</h2>
        <p>
          The website may use technology necessary for security, network delivery and user preferences. If optional
          analytics, advertising or similar technology is enabled, we will provide information and seek consent where
          required. Browser controls can also be used to manage cookies, although blocking necessary technology may
          affect functionality.
        </p>
      </section>

      <section>
        <h2>12. Children</h2>
        <p>
          The directory and professional ecosystem are not designed for children to use independently. If a programme
          involves young people, we will provide suitable privacy and safeguarding information for that activity.
        </p>
      </section>

      <section>
        <h2>13. Complaints</h2>
        <p>
          Please contact us first so we can try to resolve the concern. You also have the right to complain to the UK
          Information Commissioner’s Office. Visit{' '}
          <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a>{' '}
          for current guidance and contact routes.
        </p>
      </section>

      <section>
        <h2>14. Changes to this policy</h2>
        <p>
          We review this policy when our activities, technology, suppliers or legal obligations change. The effective
          date above shows the latest published version. Material new uses of information will be communicated before
          they begin where required.
        </p>
      </section>
    </LegalPage>
  );
}
