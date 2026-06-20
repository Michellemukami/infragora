

<template>
 <WhatWeDoIntro
    title="Public Investment"
    :paragraphs="aboutIntroParagraphs"
    :media-src="publicInvestmentHeroImage"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
  />
  

  <NumberCard
    title="Public Investment
Solutions"
    :items="supportItems0"
    section-class="bg-[#fbfbfb]"
    title-class="text-[#0a5264]"
    item-class="border-[#bdd3d1]"
    number-class="text-[#f6b800]"
    label-class="text-[#253035]"
  />
   <NumberCard
    title="Who We Support"
    :items="supportItems1"
    section-class="bg-[#d9e8e3]"
    title-class="text-[#0a5264]"
    item-class="border-[#bdd3d1]"
    number-class="text-[#f6b800]"
    label-class="text-[#253035]"
  />

</template>
<script setup lang="ts">
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import NumberCard from './common/NumberCard.vue'
import publicInvestmentHeroImage from '~/assets/images/capabilities/public-hero.jpg'
useHead({
  title: 'Public Investment | Listed Infrastructure Vehicles & Capital Markets',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA connects African infrastructure assets with regional and global capital markets through listed vehicles, asset-backed securities and structured instruments.',
    },
    {
      name: 'keywords',
      content:
        'public investment Africa, listed infrastructure vehicle, infrastructure-backed securities, capital markets Africa, institutional investors',
    },
  ],
})
const aboutIntroParagraphs = [
  "INFRAGORA's public investment capability is designed to connect African infrastructure assets with regional and global capital markets.",
  "Through listed investment vehicles, asset-backed securities and structured instruments, we aim to improve liquidity, transparency, pricing and access for institutional investors."
 
]


type NumberCardItem = {
  number: string
  label: string
}



const supportItems0: NumberCardItem[] = [
  { number: '01', label: 'Broader investor participation' },
  { number: '02', label: 'Improved market transparency' },
  { number: '03', label: 'Enhanced price discovery' },
  { number: '04', label: 'Listed access to infrastructure assets' },
  { number: '05', label: 'Structured exit pathways' },
  { number: '06', label: 'Asset-backed securities development' },
  { number: '07', label: 'Capital recycling and portfolio diversification' },
 
]
const supportItems1: NumberCardItem[] = [
  { number: '01', label: 'Listed infrastructure investment vehicles' },
  { number: '02', label: 'Public market transition strategies' },
  { number: '03', label: 'Infrastructure-backed securities' },
  { number: '04', label: 'IPO and post-IPO readiness' },
  { number: '05', label: 'Investor reporting and governance' },
  { number: '06', label: 'Market positioning and institutional engagement' },
]
</script>
