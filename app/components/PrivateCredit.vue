

<template>
 <WhatWeDoIntro
    title="Private Credit"
    :paragraphs="aboutIntroParagraphs"
    :media-src="aboutHeroVideo"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
  />
  

  <NumberCard
    title="Typical Use Cases"
    :items="supportItems0"
    section-class="bg-[#fbfbfb]"
    title-class="text-[#0a5264]"
    item-class="border-[#bdd3d1]"
    number-class="text-[#f6b800]"
    label-class="text-[#253035]"
  />
 

</template>
<script setup lang="ts">
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import NumberCard from './common/NumberCard.vue'
import aboutHeroVideo from '~/assets/images/capabilities/skyline.jpg'
useHead({
  title: 'Private Credit for Infrastructure | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA provides tailored private credit and structured debt solutions for African infrastructure projects, platforms and operating assets.',
    },
    {
      name: 'keywords',
      content:
        'private credit Africa, infrastructure debt, project debt, asset-backed lending, infrastructure refinancing'  
    },
  ],
})
const aboutIntroParagraphs = [
  "Private credit provides tailored debt capital for infrastructure projects, operating assets and platforms. INFRAGORA's private credit approach supports infrastructure investment where flexible debt solutions can improve project execution, refinancing, expansion or long-term capital efficiency.",

]


type NumberCardItem = {
  number: string
  label: string
}



const supportItems0: NumberCardItem[] = [
  { number: '01', label: 'Infrastructure-backed lending.' },
  { number: '02', label: 'Project debt.' },
  { number: '03', label: 'Expansion financing.' },
  { number: '04', label: 'Refinancing solutions.' },
  { number: '05', label: 'Structured credit.' },
  { number: '06', label: 'Asset-backed debt securities.' },
  { number: '07', label: 'Private debt for operating infrastructure assets.' },

 


]

</script>
