

<template>
 <WhatWeDoIntro
    title="Private Investment"
    :paragraphs="aboutIntroParagraphs"
    :media-src="aboutHeroVideo"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
  />
  

  <NumberCard
    title="Private Investment
Focus"
    :items="supportItems0"
    section-class="bg-[#fbfbfb]"
    title-class="text-[#0a5264]"
    item-class="border-[#bdd3d1]"
    number-class="text-[#f6b800]"
    label-class="text-[#253035]"
  />
 
  <ImageCard
    title="Value Creation Approach"
    :paragraphs="coverageText"
    :image="bridgeImage"
    image-alt="African infrastructure development"
  />
</template>
<script setup lang="ts">
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import NumberCard from './common/NumberCard.vue'
import bridgeImage from '~/assets/images/bridge.jpg'
import ImageCard from './common/ImageCard.vue';
import aboutHeroVideo from '~/assets/images/capabilities/private.jpg'
useHead({
  title: 'Private Investment | African Infrastructure Assets & Platforms',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA invests directly in operating, brownfield, expansion-ready and select late-stage greenfield infrastructure assets across Africa.',
    },
    {
      name: 'keywords',
      content:
        'private infrastructure investment Africa, brownfield infrastructure, greenfield infrastructure, infrastructure platforms, private capital Africa',
    },
  ],
})
const aboutIntroParagraphs = [
  "INFRAGORA's private investment capability focuses on direct and structured investments into high-quality infrastructure assets across Africa. We target opportunities where long-term capital, disciplined governance and strategic support can unlock growth, expansion and operational value.",

 
]


type NumberCardItem = {
  number: string
  label: string
}

const coverageText = [
  'We work with asset owners and management teams to improve project readiness, operational resilience, capital structure, ESG alignment, governance and long-term market positioning.',
]

const supportItems0: NumberCardItem[] = [
  { number: '01', label: 'Operating brownfield assets with stable cash flows' },
  { number: '02', label: 'Projects with expansion and new capex potential' },
  { number: '03', label: 'Select near-COD greenfield infrastructure assets' },
  { number: '04', label: 'Strategic infrastructure platforms' },
  { number: '05', label: 'Significant minority and control investment opportunities' },
  { number: '06', label: 'Co-investment and partnership structures' },
 
 
]

</script>
