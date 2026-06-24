

<template>
 <WhatWeDoIntro
    title="Investment"
    :paragraphs="InvestmentIntroParagraphs"
    :media-src="investmentHeroImage"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32"
  />
  

  <NumberCard
    title="Investment Focus "
    :items="supportItems"
    section-class="bg-[#fbfbfb]"
    title-class="text-[#0a5264]"
    item-class="border-[#bdd3d1]"
    number-class="text-[#f6b800]"
    label-class="text-[#253035]"
  />

  <ImageCard
    title="Investment Strategys"
    :paragraphs="coverageText"
    :image="bridgeImage"
    image-alt="African infrastructure development"
  />

</template>
<script setup lang="ts">
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import NumberCard from './common/NumberCard.vue'
import investmentHeroImage from '~/assets/images/capabilities/investment.jpg'
import ImageCard from './common/ImageCard.vue';
import bridgeImage from '~/assets/images/bridge.jpg'
useHead({
  title: 'Infrastructure Investment | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA invests in African infrastructure assets through public and private strategies focused on liquidity, growth and long-term value creation.',
    },
    {
      name: 'keywords',
      content:
        'infrastructure investment Africa, African infrastructure assets, investment platform Africa, capital markets infrastructure',
    },
  ],
})
const InvestmentIntroParagraphs = [
  "INFRAGORA invests in infrastructure assets and platforms that support Africa's sustainable economic transformation. Our investment approach focuses on assets with stable cash flows, expansion potential, developmental impact and clear pathways for liquidity and long-term value creation.",
 
]

type NumberCardItem = {
  number: string
  label: string
}


const coverageText = [
  'INFRAGORA’s investment strategy is to generate attractive risk-adjusted returns (capital gains and dividend yields) by making investments in performing operating assets with expansion and growth offerings, as well as suitable early and near end greenfield infrastructure assets across Africa within well-defined asset classes. Our investment process includes a comprehensive and robust deal curation process, investment appraisal, due diligence, returns assessment and value creation.'
  
]
const supportItems: NumberCardItem[] = [
  { number: '01', label: 'Green and renewable energy' },
  { number: '02', label: 'ICT and digital infrastructure' },
  { number: '03', label: 'Sustainable transport' },
  { number: '04', label: 'Water and sanitation' },
  { number: '05', label: 'Infrastructure finance services' },
  { number: '06', label: 'Climate-resilient public infrastructure' },

]
</script>
