import type { Metadata } from 'next';
import { LegalContact, LegalPage } from '../../components/legal-page';

export const metadata: Metadata = {
  title: 'Refund Policy | City on the Hill',
  description: 'Cancellation and refund arrangements for City on the Hill profiles, events, memberships and digital services.',
  alternates: { canonical: '/refund-policy' },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refund Policy"
      introduction="This policy explains how cancellations and refunds are handled when you buy directly from City on the Hill. It does not reduce any rights you have under applicable consumer law."
      effectiveDate="1 September 2026"
    >
      <section>
        <h2>1. Scope of this policy</h2>
        <p>
          This policy applies only to payments made directly to City on the Hill for services such as paid profiles,
          memberships, events, training or digital services. Free listings do not involve a payment and therefore do
          not create a refund entitlement.
        </p>
        <p>
          Purchases completed on a listed provider’s external website are governed by that provider’s terms and
          refund policy. Contact the provider directly about those transactions.
        </p>
      </section>

      <section>
        <h2>2. Your statutory rights</h2>
        <p>
          Nothing in this policy limits rights that cannot lawfully be excluded. Services must be provided with
          reasonable care and skill, and digital content must meet the standards required by applicable consumer law.
          If something is faulty, misdescribed or not supplied as agreed, contact us so we can investigate and provide
          the appropriate remedy.
        </p>
      </section>

      <section>
        <h2>3. Consumer cancellation period</h2>
        <p>
          If you are a UK consumer buying a service online, you will normally have 14 days from the day after the
          contract is made to cancel without giving a reason, unless an exception applies. Tell us clearly by email
          before the cancellation period ends.
        </p>
        <p>
          If you ask us to begin a service during the cancellation period, we may charge a proportionate amount for
          work supplied before cancellation. Where a service is fully performed during that period after your express
          request and acknowledgement, the cancellation right may end once performance is complete.
        </p>
        <p>
          For digital content supplied immediately, you may be asked to consent to immediate supply and acknowledge
          that the cancellation right will be lost once supply begins, where the law permits.
        </p>
      </section>

      <section>
        <h2>4. Profiles and memberships</h2>
        <p>
          A paid profile or membership can be cancelled in accordance with the billing terms shown at purchase.
          Cancelling normally stops future renewal rather than removing access already paid for. If a statutory
          cancellation right applies, or we fail to provide the purchased service, we will refund the amount due.
        </p>
        <p>
          We do not normally refund a completed review, setup or promotional service merely because expected leads,
          sales, introductions or outcomes were not achieved; no particular commercial outcome is guaranteed.
        </p>
      </section>

      <section>
        <h2>5. Events</h2>
        <p>
          Event-specific cancellation terms will be displayed before booking. If City on the Hill cancels an event,
          we will offer a refund of the ticket price paid directly to us or, with your agreement, a transfer or credit.
          We are not responsible for separate travel, accommodation or other costs unless the law requires otherwise.
        </p>
        <p>
          If an event is rescheduled or materially changed, we will explain the available transfer, credit or refund
          options. A substitute speaker or reasonable programme adjustment will not automatically make the event refundable.
        </p>
      </section>

      <section>
        <h2>6. Business purchases</h2>
        <p>
          Statutory consumer cancellation rights generally do not apply where you buy wholly for business purposes.
          Business refunds and credits are governed by the order terms or written agreement, together with mandatory law.
        </p>
      </section>

      <section>
        <h2>7. How to request a cancellation or refund</h2>
        <p>
          Email us with your name, purchase email, service or event, payment date, order reference if available, and
          the reason for your request. Do not send complete payment-card details. We may ask for reasonable evidence
          needed to locate the transaction or assess the request.
        </p>
        <LegalContact />
      </section>

      <section>
        <h2>8. Refund method and timing</h2>
        <p>
          Approved refunds are made to the original payment method unless agreed otherwise. We aim to process them
          promptly and, where consumer law sets a deadline, within that deadline. Your bank or payment provider may
          take additional time to display the funds.
        </p>
      </section>

      <section>
        <h2>9. Chargebacks</h2>
        <p>
          Please contact us first so we can investigate. This does not affect your right to contact your payment
          provider or exercise any statutory remedy.
        </p>
      </section>
    </LegalPage>
  );
}
