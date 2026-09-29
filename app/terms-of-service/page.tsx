import { LegalPage, LegalSection } from '@/components/LegalPage';

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" eyebrow="Legal" updated="September 22, 2026">
      <p>These Terms of Service govern your use of the UXFoundery website at social.uxfoundery.com. By using the website, you agree to these terms.</p>
      <LegalSection title="Acceptable use"><p>Use this website lawfully and respectfully. Do not interfere with its operation, attempt unauthorized access, submit misleading information, or use the site to harm others.</p></LegalSection>
      <LegalSection title="Intellectual property"><p>UXFoundery and its original content, marks, and materials belong to UXFoundery or its licensors. You may not reproduce or redistribute them without permission.</p></LegalSection>
      <LegalSection title="External links"><p>Our social cards link to third-party websites. UXFoundery does not control those services and is not responsible for their content, availability, or policies.</p></LegalSection>
      <LegalSection title="Mentor&apos;s Club applications"><p>Applications may be reviewed by the UXFoundery team. Submitting an application does not guarantee acceptance, membership, or a response. We may approve or decline applications at our discretion.</p></LegalSection>
      <LegalSection title="Disclaimers"><p>The website is provided on an as-available basis. We do not promise that it will always be uninterrupted, error-free, or complete.</p></LegalSection>
      <LegalSection title="Limitation of liability"><p>To the extent permitted by law, UXFoundery is not liable for indirect, incidental, or consequential loss arising from your use of the website or third-party links.</p></LegalSection>
      <LegalSection title="Changes"><p>We may update these terms as the website evolves. Continued use after an update means you accept the revised terms.</p></LegalSection>
      <LegalSection title="Contact"><p>Questions about these terms can be sent to <a href="mailto:hello@uxfoundery.com">hello@uxfoundery.com</a>.</p></LegalSection>
      <p className="legal-note">This document is a professional website draft and should be reviewed by qualified legal counsel before production use.</p>
    </LegalPage>
  );
}
