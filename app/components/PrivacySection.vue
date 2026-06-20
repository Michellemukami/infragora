<template>
  <PolicyHero title="Privacy Policy" />
  <PolicyBody :sections="sections" />
</template>

<script setup lang="ts">
import PolicyHero from '~/components/common/PolicyHero.vue'
import PolicyBody, { type PolicyBodySection } from '~/components/common/PolicyBody.vue'
useHead({
  title: 'Privacy Policy | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'Learn how INFRAGORA Global Capital collects, uses, stores and protects personal information through its website and communications.',
    },
    {
      name: 'keywords',
      content:
        'INFRAGORA privacy policy, data protection, personal information, website privacy, investor privacy',
    },
  ],
})
const sections: PolicyBodySection[] = [
 {
    title: "Introduction",
    content: `
      INFRAGORA Global Capital values and respects your privacy. This Privacy
      Policy explains how we collect, use, store, disclose, and safeguard your
      personal information when you access our website, products, services, and
      related digital platforms.
    `,
  },

  {
    title: "Information We May Collect",
    bullets: [
      "Name",
      "Email address",
      "Job title",
      "Organisation",
      "Phone number",
      "Country",
      "Company details",
      "Technical information (IP address, browser type, device information)",
      "Website usage information",
      "Information submitted through forms or communications",
    ],
  },

  {
    title: "How We Collect Information",
    bullets: [
      "Direct interactions",
      "Contact forms and inquiries",
      "Newsletter subscriptions",
      "Meetings and networking",
      "Business relationships",
      "Cookies and website analytics tools",
      "Third-party service providers where permitted",
    ],
  },

  {
    title: "How We Use Personal Information",
    bullets: [
      "Respond to inquiries",
      "Provide requested information",
      "Manage business relationships",
      "Improve website functionality",
      "Personalize user experiences",
      "Conduct research and market analysis",
      "Comply with legal obligations",
      "Communicate insights, news, and updates where permitted",
      "Protect against fraud and security threats",
    ],
  },

  {
    title: "Legal Basis for Processing",
    content: `
      Where required by applicable law, we process personal information based
      on consent, legitimate interests, contractual necessity, compliance with
      legal obligations, or other lawful grounds.
    `,
  },

  {
    title: "Sharing of Information",
    content: `
      Personal information may be shared with affiliates, professional advisors,
      service providers, technology partners, regulatory authorities, or other
      authorized third parties where necessary and permitted by applicable law.
    `,
  },

  {
    title: "Data Security",
    content: `
      We implement technical, organizational, and administrative measures
      designed to protect personal information from unauthorized access,
      misuse, loss, or disclosure.
    `,
  },

  {
    title: "Data Retention",
    content: `
      Personal information will be retained only for as long as necessary to
      fulfil the purposes for which it was collected, comply with legal
      obligations, and satisfy business requirements.
    `,
  },

  {
    title: "International Transfers",
    content: `
      As INFRAGORA operates internationally, personal information may be
      transferred across borders where permitted by applicable law. Appropriate
      safeguards will be implemented to protect such information.
    `,
  },

  {
    title: "Your Rights",
    bullets: [
      "Access your personal information",
      "Request correction of inaccurate information",
      "Request deletion where applicable",
      "Object to or restrict processing",
      "Withdraw consent where processing relies on consent",
      "Request portability of your data where applicable",
    ],
  },

  {
    title: "Cookies",
    content: `
      Our website uses cookies and similar technologies to enhance user
      experience, improve functionality, and analyze website performance.
    `,
  },

  {
    title: "Updates to This Policy",
    content: `
      We may update this Privacy Policy periodically. Any modifications will be
      posted on this page with an updated effective date.
    `,
  },

  {
    title: "Contact",
    content: `
      If you have questions regarding this Privacy Policy, please contact us
      through our Contact Us page.
    `,
  },
]
</script>
