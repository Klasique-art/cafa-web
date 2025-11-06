export interface Policy {
  id: string;
  title: string;
  content: string[];
}

export const policies: Policy[] = [
  {
    id: "information-collection",
    title: "Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you create an account, use our AI services, or contact us for support.",
      "Personal information may include your name, email address, phone number, and any content you input into our AI systems.",
      "We automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, and interaction data with our services.",
      "We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns."
    ]
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: [
      "We use your information to provide, maintain, and improve our AI services and customer support.",
      "Your data helps us train and refine our AI models to deliver more accurate and useful results.",
      "We may use your information to communicate with you about updates, security alerts, and promotional materials (with your consent).",
      "We analyze usage patterns to enhance user experience and develop new features.",
      "Your information may be used to comply with legal obligations and protect against fraudulent or harmful activities."
    ]
  },
  {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    content: [
      "We do not sell, trade, or rent your personal information to third parties for their marketing purposes.",
      "We may share your information with trusted service providers who assist us in operating our platform, subject to strict confidentiality agreements.",
      "We may disclose your information when required by law, to protect our rights, or to ensure the safety of our users.",
      "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
      "We may share aggregated, non-personally identifiable information for research and analytics purposes."
    ]
  },
  {
    id: "data-security",
    title: "Data Security and Protection",
    content: [
      "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "All data transmissions are encrypted using SSL/TLS protocols, and we maintain secure servers with regular security updates.",
      "We conduct regular security audits and vulnerability assessments to ensure the integrity of our systems.",
      "Access to personal information is restricted to authorized personnel only, and all employees undergo security training.",
      "While we strive to protect your information, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
    ]
  },
  {
    id: "data-retention",
    title: "Data Retention and Deletion",
    content: [
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy.",
      "Account information is typically retained for the duration of your account plus a reasonable period thereafter for legal and business purposes.",
      "AI training data may be retained longer to maintain model performance, but is anonymized and aggregated where possible.",
      "You may request deletion of your personal information at any time, subject to legal and operational requirements.",
      "We automatically delete certain types of data according to predetermined schedules and retention policies."
    ]
  },
  {
    id: "user-rights",
    title: "Your Rights and Choices",
    content: [
      "You have the right to access, update, or delete your personal information at any time through your account settings.",
      "You may opt out of promotional communications while continuing to receive important service-related messages.",
      "You can request a copy of your personal information or ask us to transfer it to another service provider.",
      "You have the right to object to certain processing activities and to restrict how we use your information.",
      "If you're located in the EU, you have additional rights under GDPR, including the right to data portability and the right to lodge a complaint with supervisory authorities."
    ]
  },
  {
    id: "cookies-tracking",
    title: "Cookies and Tracking Technologies",
    content: [
      "We use cookies and similar technologies to remember your preferences, authenticate your identity, and analyze how you use our services.",
      "Essential cookies are necessary for the basic functionality of our platform and cannot be disabled.",
      "Analytics cookies help us understand user behavior and improve our services, and you can opt out of these through your browser settings.",
      "We may use third-party analytics services that place their own cookies on your device, subject to their respective privacy policies.",
      "You can control cookie preferences through your browser settings, though disabling certain cookies may impact your experience."
    ]
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: [
      "Your information may be processed and stored in countries other than your country of residence, including the United States.",
      "We ensure that international transfers comply with applicable data protection laws and include appropriate safeguards.",
      "We may use standard contractual clauses or other approved transfer mechanisms to protect your information during international transfers.",
      "By using our services, you consent to the transfer of your information to countries that may have different data protection laws than your jurisdiction."
    ]
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
    content: [
      "Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13.",
      "If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.",
      "Parents or guardians who believe their child has provided personal information to us should contact us immediately.",
      "Users between 13 and 18 should have parental consent before using our services and providing personal information."
    ]
  },
  {
    id: "policy-changes",
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this privacy policy from time to time to reflect changes in our practices, technology, or legal requirements.",
      "We will notify you of significant changes through email, in-app notifications, or by posting a notice on our website.",
      "Your continued use of our services after any changes constitutes acceptance of the updated privacy policy.",
      "We encourage you to review this privacy policy periodically to stay informed about how we protect your information.",
      "The effective date of this privacy policy is clearly indicated at the top of this document."
    ]
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: [
      "If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us.",
      "You can reach our privacy team at privacy@cafa-ai.com or through our website's contact form.",
      "For urgent privacy matters, you may also contact our Data Protection Officer directly.",
      "We will respond to all privacy-related inquiries within 30 days or as required by applicable law.",
      "Our mailing address is available on our website for those who prefer to communicate by postal mail."
    ]
  }
];

export const terms: Policy[] = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    content: [
      "By accessing and using CAFA AI's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
      "These terms constitute a legally binding agreement between you and CAFA AI. If you do not agree to these terms, you must not use our services.",
      "Your continued use of our services after any modifications to these terms constitutes acceptance of the updated terms.",
      "You must be at least 18 years old or have parental consent to use our services and agree to these terms."
    ]
  },
  {
    id: "service-description",
    title: "Service Description",
    content: [
      "CAFA AI provides artificial intelligence-powered services, including but not limited to natural language processing, content generation, and data analysis tools.",
      "Our services are provided on an 'as-is' basis and are subject to ongoing development, updates, and improvements.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with or without notice.",
      "Service availability may vary by geographic location and is subject to local laws and regulations.",
      "We strive to maintain high service availability but do not guarantee uninterrupted access to our services."
    ]
  },
  {
    id: "user-accounts",
    title: "User Accounts and Registration",
    content: [
      "To access certain features, you must create an account by providing accurate, current, and complete information.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You must notify us immediately of any unauthorized use of your account or any other breach of security.",
      "We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent or harmful activities.",
      "One person or entity may not maintain multiple accounts unless explicitly permitted by us."
    ]
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use Policy",
    content: [
      "You agree to use our services only for lawful purposes and in accordance with these terms and applicable laws.",
      "You must not use our services to generate, share, or promote content that is illegal, harmful, threatening, abusive, or discriminatory.",
      "Prohibited activities include but are not limited to: attempting to reverse engineer our AI models, using our services for spam or phishing, or violating intellectual property rights.",
      "You must not attempt to gain unauthorized access to our systems, networks, or other users' accounts.",
      "Commercial use of our services may require a separate commercial license agreement."
    ]
  },
  {
    id: "content-ownership",
    title: "Content and Intellectual Property",
    content: [
      "You retain ownership of any content you input into our services, subject to the license you grant us to provide our services.",
      "By using our services, you grant CAFA AI a worldwide, non-exclusive license to use, process, and analyze your input content to provide and improve our services.",
      "Content generated by our AI services may not be unique, and similar content may be generated for other users.",
      "We respect intellectual property rights and expect users to do the same. We will respond to valid copyright infringement notices.",
      "Our AI models, algorithms, software, and related intellectual property remain the exclusive property of CAFA AI."
    ]
  },
  {
    id: "payment-terms",
    title: "Payment and Billing",
    content: [
      "Certain services may require payment of fees. All fees are stated in US dollars and are non-refundable unless otherwise specified.",
      "You agree to pay all applicable fees and taxes associated with your use of our paid services.",
      "For subscription services, fees are billed in advance on a recurring basis and will automatically renew unless canceled.",
      "We reserve the right to change our pricing with at least 30 days' notice to existing subscribers.",
      "Failure to pay fees may result in suspension or termination of your access to paid services."
    ]
  },
  {
    id: "privacy-data",
    title: "Privacy and Data Protection",
    content: [
      "Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.",
      "You consent to the collection and use of your information as described in our Privacy Policy.",
      "We implement appropriate security measures to protect your data, but you acknowledge that no method of transmission over the internet is 100% secure.",
      "You are responsible for backing up any important data and content you provide to our services.",
      "We may aggregate and anonymize data for analytics and improvement purposes while protecting individual privacy."
    ]
  },
  {
    id: "disclaimers",
    title: "Disclaimers and Limitations",
    content: [
      "Our services are provided 'as is' without warranties of any kind, either express or implied, including but not limited to merchantability and fitness for a particular purpose.",
      "We do not warrant that our services will be uninterrupted, error-free, or completely secure.",
      "AI-generated content may contain inaccuracies, and you should verify important information independently.",
      "We are not responsible for any decisions you make based on AI-generated content or recommendations.",
      "Your use of our services is at your own risk, and you assume full responsibility for any consequences."
    ]
  },
  {
    id: "liability-limitation",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, CAFA AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
      "Our total liability to you for any claims arising from or relating to these terms or our services shall not exceed the amount you paid us in the 12 months preceding the claim.",
      "We are not liable for any loss of data, business interruption, or lost profits resulting from your use of our services.",
      "Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so these limitations may not apply to you.",
      "You agree to indemnify and hold CAFA AI harmless from any claims arising from your use of our services or violation of these terms."
    ]
  },
  {
    id: "termination",
    title: "Termination",
    content: [
      "Either party may terminate this agreement at any time with or without cause by providing notice to the other party.",
      "We may immediately suspend or terminate your access if you violate these terms or engage in prohibited activities.",
      "Upon termination, your right to use our services will cease immediately, and we may delete your account and data.",
      "Provisions that by their nature should survive termination will remain in effect, including intellectual property rights and limitation of liability.",
      "You may terminate your account at any time through your account settings or by contacting our support team."
    ]
  },
  {
    id: "governing-law",
    title: "Governing Law and Disputes",
    content: [
      "These terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.",
      "Any disputes arising from these terms or your use of our services will be resolved through binding arbitration rather than in court.",
      "The arbitration will be conducted by a single arbitrator in accordance with the rules of [Arbitration Organization].",
      "You waive any right to participate in class action lawsuits or class arbitrations against CAFA AI.",
      "If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect."
    ]
  },
  {
    id: "changes-contact",
    title: "Changes and Contact Information",
    content: [
      "We reserve the right to modify these terms at any time by posting the updated terms on our website.",
      "Material changes will be communicated to users via email or prominent notice on our platform at least 30 days before taking effect.",
      "Your continued use of our services after changes take effect constitutes acceptance of the new terms.",
      "If you have questions about these terms, please contact us at legal@cafa-ai.com or through our website's contact form.",
      "For urgent legal matters, you may also contact our legal department directly using the contact information provided on our website."
    ]
  }
];