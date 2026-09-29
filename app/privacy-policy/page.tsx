import { LegalPage, LegalSection } from '@/components/LegalPage';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" eyebrow="Legal" updated="September 22, 2026">
      <p>This Privacy Policy explains how UXFoundery handles information submitted through social.uxfoundery.com, including the Mentor&apos;s Club application.</p>
      <LegalSection title="Information we collect"><p>If you apply to Mentor&apos;s Club, we may collect your name, email address, phone number, city, state, country, education or employment details, and written responses. We also receive information you choose to send when contacting us.</p></LegalSection>
      <LegalSection title="How we use information"><p>We may use application information to review Mentor&apos;s Club applications, communicate with applicants, respond to messages, operate the website, and improve our community experience.</p></LegalSection>
      <LegalSection title="Sharing and service providers"><p>We do not sell users&apos; personal data. We may share information with service providers only when reasonably necessary to operate the website or communicate with you, subject to appropriate agreements or safeguards where applicable.</p></LegalSection>
      <LegalSection title="Retention"><p>We retain information only for as long as reasonably necessary for the purposes described here, to maintain records, resolve issues, or meet legal obligations. Retention periods may vary depending on the context.</p></LegalSection>
      <LegalSection title="Security"><p>We use reasonable administrative and technical practices to protect information. No online service can guarantee absolute security, and you should avoid sending information that you do not want transmitted electronically.</p></LegalSection>
      <LegalSection title="Your choices and rights"><p>You may contact us to ask about, correct, or request deletion of personal information we hold about you, subject to applicable law and legitimate recordkeeping needs.</p></LegalSection>
      <LegalSection title="Third-party websites"><p>Social links lead to third-party services with their own privacy practices. Review those policies before sharing information with them.</p></LegalSection>
      <LegalSection title="Updates and contact"><p>We may update this policy as our website changes. Questions or privacy requests can be sent to <a href="mailto:hello@uxfoundery.com">hello@uxfoundery.com</a>.</p></LegalSection>
      <p className="legal-note">This document is a professional website draft and should be reviewed by qualified legal counsel before production use.</p>
    </LegalPage>
  );
}
