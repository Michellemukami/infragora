<template>
  <WhatWeDoIntro
    title="About us"
    :paragraphs="aboutIntroParagraphs"
    :media-src="aboutHeroVideo"
    media-type="video"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32"
  />
  
  <section class="w-full font-sans">
    <!-- Purpose -->
    <div class="bg-[#165563] text-white">
      <div
        class="mx-auto grid min-h-[267px] w-full max-w-[1600px] grid-cols-1 gap-8 px-6 py-14 sm:px-10 md:grid-cols-[38%_1fr] md:gap-10 md:px-14 md:py-16 lg:min-h-[267px] lg:grid-cols-[40%_1fr] lg:px-[5.8vw] lg:py-[86px]"
      >
        <div>
          <h2
            class="text-[28px] font-semibold leading-none tracking-[-0.04em] sm:text-[30px] lg:text-[32px]"
          >
            Our Purpose
          </h2>
        </div>

        <div class="max-w-[760px]">
          <p
            class="text-[14px] font-normal leading-[1.55] tracking-[-0.015em] text-white/95 sm:text-[15px] lg:text-[16px]"
          >
            to deepen infrastructure liquidity, improve market access, enhance
            price discovery and support the emergence of infrastructure as a
            visible, investable and scalable asset class across Africa.
          </p>
        </div>
      </div>
    </div>

    <!-- Mission and Vision -->
    <div class="grid w-full grid-cols-1 md:grid-cols-2">
      <!-- Mission -->
      <article
        class="flex min-h-[267px] bg-[#dcebea] px-6 py-14 sm:px-10 md:px-14 md:py-16 lg:min-h-[267px] lg:px-[5.8vw] lg:py-[85px]"
      >
        <div class="w-full max-w-[560px]">
          <h3
            class="text-[28px] font-semibold leading-none tracking-[-0.04em] text-[#062d4a] sm:text-[30px] lg:text-[32px]"
          >
            Our Mission
          </h3>

          <p
            class="mt-8 text-[14px] font-normal leading-[1.55] tracking-[-0.015em] text-[#062d4a] sm:text-[15px] lg:mt-9 lg:text-[16px]"
          >
            To create structured exit and secondary market solutions that
            unlock liquidity, mobilise institutional capital and accelerate
            sustainable infrastructure development across Africa.
          </p>
        </div>
      </article>

      <!-- Vision -->
      <article
        class="flex min-h-[267px] bg-[#b9d8d3] px-6 py-14 sm:px-10 md:px-14 md:py-16 lg:min-h-[267px] lg:px-[5.8vw] lg:py-[85px]"
      >
        <div class="w-full max-w-[560px]">
          <h3
            class="text-[28px] font-semibold leading-none tracking-[-0.04em] text-[#062d4a] sm:text-[30px] lg:text-[32px]"
          >
            Our Vision
          </h3>

          <p
            class="mt-8 text-[14px] font-normal leading-[1.55] tracking-[-0.015em] text-[#062d4a] sm:text-[15px] lg:mt-9 lg:text-[16px]"
          >
            To become Africa's leading infrastructure secondary market
            platform, connecting high-quality infrastructure assets with
            long-term capital from regional and global investors.
          </p>
        </div>
      </article>
    </div>
  </section>
  <section class="w-full bg-[#fafafa] text-[#073e4d]">
    <div
      class="mx-auto grid min-h-[620px] max-w-[1600px] gap-14 px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-20 lg:py-20 xl:gap-28 xl:px-20"
    >
      <!-- Left heading -->
      <div class="lg:pt-1">
        <h2
          class="text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[34px] lg:text-[40px] xl:text-[40px]"
        >
          Strategic Objectives
        </h2>
      </div>

      <!-- Objective list -->
      <div class="w-full">
        <ol>
          <li
            v-for="(objective, index) in objectives"
            :key="objective"
            class="grid grid-cols-[52px_1fr] gap-4 border-b border-[#c8d9d8] py-6 sm:grid-cols-[64px_1fr] sm:gap-6 lg:grid-cols-[72px_1fr] lg:py-7"
          >
            <span
              class="text-[20px] font-medium leading-none text-[#f4b400] sm:text-[22px] lg:text-[24px]"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <p
              class="max-w-[760px] text-[14px] leading-[1.45] text-[#073e4d] sm:text-[15px] lg:text-[16px]"
            >
              {{ objective }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </section>
  <section class="w-full bg-[#dcebea] text-[#063e4d]">
    <div
      class="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-20 xl:px-20"
    >
      <h2
        class="text-[28px] font-semibold leading-none tracking-[-0.045em] text-[#1a1a1a] sm:text-[34px] lg:text-[40px]"
      >
        Our Values
      </h2>

      <div
        class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 xl:gap-6"
      >
        <!-- Featured card -->
        <article
          class="flex min-h-[320px] flex-col justify-between bg-[#afd1cc] p-6 sm:min-h-[360px] sm:p-8 lg:row-span-2 lg:min-h-[560px]"
        >
          <h3
            class="text-[24px] font-semibold leading-tight tracking-[-0.035em] sm:text-[28px] lg:text-[30px]"
          >
            {{ featuredValue.title }}
          </h3>

          <p
            class="max-w-[330px] text-[13px] leading-[1.45] text-[#1a3035] sm:text-[14px] lg:text-[15px]"
          >
            {{ featuredValue.description }}
          </p>
        </article>

        <!-- Remaining cards -->
        <article
          v-for="value in otherValues"
          :key="value.title"
          class="flex min-h-[220px] flex-col justify-between bg-[#afd1cc] p-6 sm:min-h-[240px] sm:p-8 lg:min-h-[268px]"
        >
          <h3
            class="text-[24px] font-semibold leading-tight tracking-[-0.035em] sm:text-[27px] lg:text-[28px]"
          >
            {{ value.title }}
          </h3>

          <p
            class="max-w-[360px] text-[13px] leading-[1.45] text-[#1a3035] sm:text-[14px] lg:text-[15px]"
          >
            {{ value.description }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <ImageCard
    title="Our Coverage"
    :paragraphs="coverageText"
    :image="bridgeImage"
    image-alt="African infrastructure development"
  />

 <section class="w-full bg-[#fbfbfb] text-[#003f50]">
    <div
      class="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-24 xl:px-24"
    >
      <!-- Introduction -->
      <div
        class="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28"
      >
        <div>
          <h2
            class="text-[28px] font-medium leading-[1.05] tracking-[-0.045em] sm:text-[34px] lg:text-[40px] "
          >
            Governance and Team
          </h2>
        </div>

        <div class="max-w-[760px]">
          <p
            class="text-[13px] leading-[1.45] text-[#003f50] sm:text-[14px] lg:text-[15px]"
          >
            INFRAGORA is led by a highly experienced team with deep expertise
            across infrastructure finance, investment banking, development
            finance, private equity, capital markets, public markets,
            governance, ESG and African investment execution. The team brings
            extensive experience from leading financial institutions,
            development banks, investment platforms and infrastructure
            organisations across Africa and global markets.
          </p>
        </div>
      </div>

      <!-- Team grid -->
      <div
        class="mt-14 grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-10 xl:mt-20"
      >
        <article
          v-for="member in teamMembers"
          :key="`${member.name}-${member.image}`"
          class="group"
        >
          <!-- Portrait -->
          <div
            class="relative aspect-square w-full overflow-hidden bg-[#dcebea]"
          >
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
              @error="($event.currentTarget as HTMLImageElement).style.display = 'none'"
            />

            <div
              class="pointer-events-none absolute inset-0 bg-[#00495a]/0 transition duration-300 group-hover:bg-[#00495a]/5"
            />
          </div>

          <!-- Member details -->
          <div class="pt-4">
            <h3
              class="text-[18px] font-medium leading-none tracking-[-0.03em] sm:text-[19px] lg:text-[20px]"
            >
              {{ member.name }}
            </h3>

            <p
              class="mt-3 text-[11px] leading-none text-[#003f50] sm:text-[12px]"
            >
              {{ member.role }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import WhatWeDoIntro from '~/components/common/WhatWeDoIntro.vue'
import ImageCard from '~/components/common/ImageCard.vue'
import aboutHeroVideo from '~/assets/images/about-us/city.mp4'
import bridgeImage from '~/assets/images/bridge.jpg'

type TeamMember = {
  name: string
  role: string
  image?: string
}

type Value = {
  title: string
  description: string
  featured?: boolean
}

const aboutIntroParagraphs = [
  'INFRAGORA Global Capital is an African-led infrastructure investment and fund management platform focused on establishing a structured secondary market for African infrastructure assets.',
  "We were created to address one of Africa's most important infrastructure finance challenges: the lack of liquidity and structured exit pathways for investors, developers and asset owners. By enabling capital recycling, structured exits, asset-backed securities and institutional investor access, INFRAGORA helps unlock value from existing infrastructure assets while mobilising new capital for future development.",
]

const teamMembers: TeamMember[] = [
  {
    name: 'Ezekiel',
    role: 'Founder & CEO',
    image: '/images/team/ezekiel-1.jpg',
  },
  {
    name: 'Name',
    role: 'Role',
    image: '/images/team/member-2.jpg',
  },
  {
    name: 'Name',
    role: 'Role',
    image: '/images/team/member-3.jpg',
  },
  {
    name: 'Name',
    role: 'Role',
    image: '/images/team/member-4.jpg',
  },
  {
    name: 'Ezekiel',
    role: 'Founder & CEO',
    image: '/images/team/ezekiel-2.jpg',
  },
  {
    name: 'Name',
    role: 'Role',
    image: '/images/team/member-6.jpg',
  },
  {
    name: 'Name',
    role: 'Role',
    image: '/images/team/member-7.jpg',
  },
  {
    name: 'Name',
    role: 'Role',
    image: '/images/team/member-8.jpg',
  },
]
const coverageText = [
  'INFRAGORA has a pan-African mandate with a focus on high-growth infrastructure markets across Southern, West, East, Central and North Africa.',
  'Our platform is structured to work with asset developers, infrastructure companies, portfolio companies, DFIs, multilateral and bilateral institutions, investment banks, pension funds, sovereign wealth funds, infrastructure funds, asset managers, family offices and strategic investors.',
]
const objectives = [
  'Stimulate capital recycling for investors and developers',
  "Boost liquidity in Africa's infrastructure market",
  'Crowd in regional and global institutional investors',
  'Deepen capital formation through asset-backed securities',
  'Improve infrastructure asset visibility, valuation and transparency',
  'Support sustainable infrastructure investment across Africa',
  'Grow infrastructure as a mainstream asset class',
]
const values: [Value, ...Value[]] = [
  {
    title: 'Bold',
    description:
      'Unlock capital tied up in operating infrastructure projects',
    featured: true,
  },
  {
    title: 'Innovative',
    description:
      "Improve liquidity in Africa’s traditionally illiquid infrastructure market",
  },
  {
    title: 'Value',
    description:
      'Attract regional and global institutional investors',
  },
  {
    title: 'Excellence',
    description:
      'Support the development of diversified asset-backed securities',
  },
  {
    title: 'Trust',
    description:
      'Deepen capital formation across African markets',
  },
]

const [featuredValue, ...otherValues] = values
</script>
