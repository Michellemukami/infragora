<template>
  <PolicyHero title="Terms and Conditions" />
  <PolicyBody :sections="sections" />
</template>

<script setup lang="ts">
import PolicyHero from '~/components/common/PolicyHero.vue'
import PolicyBody, { type PolicyBodySection } from '~/components/common/PolicyBody.vue'
useHead({
  title: 'Cookie Policy | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'Read how INFRAGORA Global Capital uses cookies and similar technologies to improve website functionality, analytics and user experience'
    },
    {
      name: 'keywords',
      content:
        'INFRAGORA cookie policy, website cookies, analytics cookies, cookie consent, privacy settings',
    },
  ],
})
const sections: PolicyBodySection[] = [
  {
    title: 'Introduction',
    content: `
      This Cookie Policy explains how INFRAGORA Global Capital uses cookies
      and similar technologies on its website. By using the website, you
      consent to the use of cookies in accordance with this policy, where
      required by applicable law.
    `,
  },
  {
    title: 'What Are Cookies?',
    content: `
      Cookies are small text files placed on your device when you visit a
      website. They help websites function properly, improve user experience,
      and provide information about how visitors interact with the website.
    `,
  },
  {
    title: 'Types of Cookies We May Use',
    list: [
      {
        heading: 'Strictly Necessary Cookies',
        text: `
          These cookies are required for the website to function properly.
          They enable core features such as page navigation, security and
          access to secure areas.
        `,
      },
      {
        heading: 'Performance and Analytics Cookies',
        text: `
          These cookies help us understand how visitors use our website,
          including which pages are visited, how long users stay and how
          they navigate between pages.
        `,
      },
      {
        heading: 'Functionality Cookies',
        text: `
          These cookies remember your preferences and settings to enhance
          your experience on future visits.
        `,
      },
      {
        heading: 'Marketing and Communication Cookies',
        text: `
          Where applicable, these cookies may help us deliver relevant
          content and communications based on your interests.
        `,
      },
    ],
  },
  {
    title: 'Third-Party Cookies',
    content: `
      Some cookies may be set by third-party services used on our website,
      such as analytics tools, embedded content, social media integrations,
      or payment providers. We encourage you to review the relevant
      third-party privacy and cookie policies.
    `,
  },
  {
    title: 'Managing Cookies',
    content: `
      You can manage or disable cookies through your browser settings.
      Please note that disabling some cookies may affect website
      functionality and user experience.
    `,
  },
  {
    title: 'Consent',
    content: `
      Where required by law, we will request your consent before placing
      non-essential cookies on your device. You can update or withdraw your
      consent preferences at any time through cookie settings tools where
      available.
    `,
  },
  {
    title: 'Changes to This Cookie Policy',
    content: `
      We may update this Cookie Policy from time to time. Any changes will
      be posted on this page with an updated effective date.
    `,
  },
  {
    title: 'Contact',
    content: `
      For questions about this Cookie Policy, please contact us through
      the Contact Us page.
    `,
  },
]
</script>
