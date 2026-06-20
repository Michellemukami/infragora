<template>
  <PolicyHero title="Terms and Conditions" />
  <PolicyBody :sections="sections" />
</template>

<script setup lang="ts">
import PolicyHero from '~/components/common/PolicyHero.vue'
import PolicyBody, { type PolicyBodySection } from '~/components/common/PolicyBody.vue'
useHead({
  title: 'Terms & Conditions | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'Read the terms and conditions governing the use of the INFRAGORA Global Capital website and website information.',
    },
    {
      name: 'keywords',
      content:
        'INFRAGORA terms and conditions, website terms, investment website disclaimer, legal terms',
    },
  ],
})
const sections: PolicyBodySection[] = [
  {
    title: "Introduction",
    content:
      "These Terms & Conditions govern your use of the INFRAGORA Global Capital website. By accessing or using this website, you agree to be bound by these terms. If you do not agree with these Terms & Conditions, please do not use this website.",
  },
  {
    title: "Website Information",
    content:
      "The content on this website is provided for informational purposes only. It is not intended to constitute investment advice, financial advice, legal advice, tax advice, or any other form of professional advice. Nothing on this website should be interpreted as an offer or solicitation to invest in any financial product, security, fund, vehicle, project, or infrastructure asset.",
  },
  {
    title: "No Investment Advice",
    content:
      "The information available on this website does not take into account your investment objectives, financial situation, risk tolerance or specific needs. Users should seek independent professional advice before making any investment, financial, or commercial decision.",
  },
  {
    title: "No Offer or Solicitation",
    content:
      "Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any securities, financial instruments, funds, investment products, or infrastructure projects in any jurisdiction where such activity would be unlawful. Investors may be subject to eligibility, regulatory, licensing, and suitability requirements.",
  },
  {
    title: "Accuracy of Information",
    content:
      "INFRAGORA makes reasonable efforts to ensure that the information on this website is accurate and up to date. However, we do not guarantee the completeness, reliability, accuracy, or timeliness of any information. Information may change without notice, and users should independently verify any information before relying on it.",
  },
  {
    title: "Forward-Looking Statements",
    content:
      "This website may contain forward-looking statements, projections, estimates, or expectations relating to future opportunities, investments, financing, project pipelines, or market trends. Such statements are subject to risks, uncertainties, and assumptions, and actual results may differ materially from those expressed or implied.",
  },
  {
    title: "Third-Party Links",
    content:
      "This website may include links to third-party websites. These links are provided for convenience only. INFRAGORA does not endorse, control, or assume responsibility for the content, security, privacy practices, or accuracy of third-party websites.",
  },
  {
    title: "Intellectual Property",
    content:
      "All website content, including text, graphics, logos, designs, images, and other materials, is owned by or licensed to INFRAGORA unless otherwise stated. You may not reproduce, distribute, modify, or use any materials without prior written permission, except where permitted by applicable law.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by applicable law, INFRAGORA and its affiliates shall not be liable for any loss, damages, or liabilities arising from the use of, or inability to use, this website or its contents.",
  },
  {
    title: "Changes to These Terms",
    content:
      "INFRAGORA may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated effective date.",
  },
  {
    title: "Contact",
    content:
      "For questions regarding these Terms & Conditions, please contact us through the Contact Us page.",
  },
]
</script>
