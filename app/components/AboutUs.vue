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
  <!-- Purpose, Mission, Vision -->
  <section
    ref="purposeSectionRef"
    class="purpose-mission-vision w-full overflow-hidden font-sans"
    :class="{
      'is-visible': isPurposeSectionVisible,
      'is-mission-visible': isMissionVisionVisible,
    }"
  >
    <!-- Purpose -->
    <div class="purpose-panel bg-[#165563] text-white">
      <div
        class="mx-auto grid min-h-[267px] w-full max-w-[1600px] grid-cols-1 gap-8 px-6 py-14 sm:px-10 md:grid-cols-[38%_1fr] md:gap-10 md:px-14 md:py-16 lg:min-h-[267px] lg:grid-cols-[40%_1fr] lg:px-[5.8vw] lg:py-[86px]"
      >
        <div class="purpose-copy purpose-copy--heading">
          <h2
            class="text-[28px] font-semibold leading-none tracking-[-0.04em] sm:text-[30px] lg:text-[32px]"
          >
            Our Purpose
          </h2>
        </div>

        <div class="purpose-copy purpose-copy--text max-w-[760px]">
          <p
            class="text-[14px] font-normal leading-[1.55] tracking-[-0.015em] text-white/95 sm:text-[15px] lg:text-[16px]"
          >
            To deepen infrastructure liquidity, improve market access, enhance
            price discovery and support the emergence of infrastructure as a
            visible, investable and scalable asset class across Africa.
          </p>
        </div>
      </div>
    </div>

    <!-- Mission and Vision -->
    <div
      ref="missionVisionRef"
      class="grid w-full grid-cols-1 md:grid-cols-2"
    >
      <!-- Mission -->
      <article
        class="flex min-h-[267px] bg-[#dcebea] px-6 py-14 sm:px-10 md:px-14 md:py-16 lg:min-h-[267px] lg:px-[5.8vw] lg:py-[85px]"
      >
        <div class="mission-vision-copy mission-vision-copy--mission w-full max-w-[560px]">
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
        <div class="mission-vision-copy mission-vision-copy--vision w-full max-w-[560px]">
          <h3
            class="text-[28px] font-semibold leading-none tracking-[-0.04em] text-[#062d4a] sm:text-[30px] lg:text-[32px]"
          >
            Our Vision
          </h3>

          <p
            class="mt-8 text-[14px] font-normal leading-[1.55] tracking-[-0.015em] text-[#062d4a] sm:text-[15px] lg:mt-9 lg:text-[16px]"
          >
           To become Africa’s leading infrastructure secondary market platform, connecting high-quality infrastructure assets with long-term capital from local, regional and global investors.
          </p>
        </div>
      </article>
    </div>
  </section>
    <!-- strategic objectives -->
  <section
    ref="strategicObjectivesRef"
    class="strategic-objectives w-full overflow-hidden bg-[#fafafa] text-[#073e4d]"
    :class="{ 'is-visible': isStrategicObjectivesVisible }"
  >
    <div
      class="mx-auto grid min-h-[620px] max-w-[1600px] gap-14 px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-20 lg:py-20 xl:gap-28 xl:px-20"
    >
      <!-- Left heading -->
      <div class="lg:pt-1">
        <h2
          class="strategic-objectives-heading text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[34px] lg:text-[40px] xl:text-[40px]"
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
            class="strategic-objective-item grid grid-cols-[52px_1fr] gap-4 border-b border-[#c8d9d8] py-6 sm:grid-cols-[64px_1fr] sm:gap-6 lg:grid-cols-[72px_1fr] lg:py-7"
            :style="{ '--objective-delay': `${120 + index * 75}ms` }"
          >
            <span
              class="strategic-objective-number text-[20px] font-medium leading-none text-[#f4b400] sm:text-[22px] lg:text-[24px]"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <p
              class="strategic-objective-text max-w-[760px] text-[14px] leading-[1.45] text-[#073e4d] sm:text-[15px] lg:text-[16px]"
            >
              {{ objective }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </section>
    <!-- our values -->
  <section
    ref="valuesSectionRef"
    class="values-section w-full overflow-hidden bg-[#dcebea] text-[#063e4d]"
    :class="{ 'is-visible': isValuesSectionVisible }"
  >
    <div
      class="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-20 xl:px-20"
    >
      <h2
        class="values-heading text-[28px] font-semibold leading-none tracking-[-0.045em] text-[#1a1a1a] sm:text-[34px] lg:text-[40px]"
      >
        Our Values
      </h2>

      <div
        class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 xl:gap-6"
      >
        <!-- Featured card -->
        <article
          class="value-card flex min-h-[320px] flex-col justify-between bg-[#afd1cc] p-6 sm:min-h-[360px] sm:p-8 lg:row-span-2 lg:min-h-[560px]"
          style="--value-delay: 120ms"
        >
          <div
            class="value-card-copy value-card-copy--featured"
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
          </div>
        </article>

        <!-- Remaining cards -->
        <article
          v-for="(value, valueIndex) in otherValues"
          :key="value.title"
          class="value-card flex min-h-[220px] flex-col justify-between bg-[#afd1cc] p-6 sm:min-h-[240px] sm:p-8 lg:min-h-[268px]"
          :style="{ '--value-delay': `${200 + valueIndex * 85}ms` }"
        >
          <div
            class="value-card-copy"
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
          </div>
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
<!-- Governance and team -->
 <section
    ref="governanceTeamRef"
    class="governance-team w-full overflow-hidden bg-[#fbfbfb] text-[#003f50]"
    :class="{ 'is-visible': isGovernanceTeamVisible }"
  >
    <div
      class="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-24 xl:px-24"
    >
      <!-- Introduction -->
      <div
        class="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28"
      >
        <div class="governance-team-heading">
          <h2
            class="text-[28px] font-medium leading-[1.05] tracking-[-0.045em] sm:text-[34px] lg:text-[40px] "
          >
            Governance and Team
          </h2>
        </div>

        <div class="governance-team-intro max-w-[760px]">
          <p
            class="text-[13px] leading-[1.45] text-[#003f50] sm:text-[14px] lg:text-[15px]"
          >
            INFRAGORA is led by a global and highly experienced team with deep expertise across infrastructure finance, investment banking, development finance, private equity, capital markets, public markets, governance, ESG and Global and African investment execution. The team brings extensive experience from leading financial institutions, development banks, investment platforms, management consulting, and infrastructure organisations across Africa and global markets. The team has a proven track record in result-oriented leadership, organizational development, strategy formulation and execution, executive management, and operational management — both in building institutions from the ground up and leading existing organizations.
          </p>
        </div>
      </div>

      <!-- Team grid -->
      <div
        class="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 md:mt-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16 xl:mt-20"
      >
        <article
          v-for="(member, memberIndex) in teamMembers"
          :key="`${member.name}-${member.image}`"
          class="governance-team-card group"
          :style="{ '--team-delay': `${160 + memberIndex * 70}ms` }"
        >
          <!-- Portrait -->
          <div
            class="governance-team-portrait relative h-[250px] w-full overflow-hidden bg-[#dcebea] sm:h-[320px] lg:h-[360px] xl:h-[410px]"
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
          <div class="governance-team-details pt-5 sm:pt-6">
            <h3
              class="text-[20px] font-medium leading-none tracking-[-0.03em] sm:text-[22px] lg:text-[24px]"
            >
              {{ member.name }}
            </h3>

            <p
              class="mt-3 text-[12px] font-medium leading-[1.35] text-[#003f50] sm:text-[13px] lg:text-[14px]"
            >
              {{ member.role }}
            </p>

            <p
              class="mt-8 max-w-[620px] text-[12px] leading-[1.6] text-[#003f50] sm:text-[13px] lg:mt-9 lg:text-[14px] xl:text-[15px]"
            >
              {{ member.bio }}
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
import bridgeImage from '~/assets/images/about-us/aboutside.jpg'

type TeamMember = {
  name: string
  role: string
  bio: string
  image?: string
}

type Value = {
  title: string
  description: string
  featured?: boolean
}

const aboutIntroParagraphs = [
  'INFRAGORA Global Capital is an African-led infrastructure investment and fund management platform focused on establishing a structured secondary market for African infrastructure assets.',
  "We were created to address Africa's main infrastructure finance challenges and most significant market failure: the lack of liquidity and structured exit pathways for investors, institutional investors, developers and asset owners. By enabling capital recycling, structured exits, asset-backed securities and institutional investor access, INFRAGORA helps to unlock value from existing infrastructure assets whilst mobilising new capital to accelerate asset creation and development.",
]

const teamMembers: TeamMember[] = [
  {
    name: 'Ezekiel Odiogo',
    role: 'BEng, MSc LSE, Sloan Fellow, MBA MIT',
    bio: 'Ezekiel Odiogo has about 24 years of global investment banking and industry experience. He has held several leadership positions at the African Development Bank including as Head Private Sector Investment Operations, managing US$150 billion+ portfolios across various industries and infrastructure asset class, with hands on transaction advisory and execution experience, and in the setup and management of several investment funds. He spearheaded from concept and led the establishment of the Africa Investment Forum - Africa\'s premier multi-billion and fully transactional marketplace with back-to-back successes and record levels in mobilizing multi-billion dollars private capital and closing deals. Ezekiel spent over half a decade at the Islamic Development Bank, where he led several fund investments and was part of the pioneering team that setup the Bank\'s structured finance and public private partnership operations.',
  },
  {
    name: 'Andrew Alli',
    role: 'CA, BEng Kings College, MBA, INSEAD',
    bio: 'Andrew Alli was, most recently, the President and CEO of the Africa Finance Corporation, a multilateral financial institution focused on improving Africa\'s critical infrastructure. A financial professional with over 30 years\' experience in both developed and developing countries, he is currently a Non-Executive Director for the Development Bank of Nigeria, where he chairs the Audit Committee. Andrew is also currently a Non-Executive Director for MTN Nigeria and the British International Investment (BII). Andrew was also a Partner at Travant Capital Partners, a West-Africa focused private equity fund. He spent over a decade with the International Finance Corporation (IFC), where he held senior positions including as Country Manager for Nigeria and South Africa.',
  },
]
const coverageText = [
  'INFRAGORA has a pan-African mandate with a focus on high-growth infrastructure markets across Southern, West, East, Central and North Africa.',
  'Our platform is structured to work with asset developers, infrastructure companies, portfolio companies, DFIs, multilateral and bilateral institutions, investment banks, pension funds, sovereign wealth funds, infrastructure funds, asset managers, family offices and strategic investors.',
]
const objectives = [
  'Stimulate capital recycling for investors, developers, and asset owners',
  "Boost liquidity in Africa's infrastructure market",
  'Crowd in local, regional and global institutional investors',
  'Deepen capital formation through asset-backed securities',
  'Improve infrastructure asset visibility, valuation benchmarks and transparency',
  'Support sustainable infrastructure investment across Africa',
  'Grow infrastructure as a mainstream asset class',
]
const values: [Value, ...Value[]] = [
  {
    title: 'Bold',
    description:
      'Strategically positioned and know-how to tackle the critical market failure in Africa’s infrastructure market',
    featured: true,
  },
  {
    title: 'Innovative',
    description:
      "Leverage creative innovation to boost liquidity in Africa’s traditionally illiquid infrastructure market",
  },
  {
    title: 'Value',
    description:
      'Broad based value creation for shareholders, investors, market stakeholders, and communities',
  },
  {
    title: 'Precision execution',
    description:
      'Support the development of diversified asset-backed securities',
  },
  {
    title: 'Trust',
    description:
      'Guided by ethics, trust and custodianship in value creation',
  },
]

const [featuredValue, ...otherValues] = values

const isPurposeSectionVisible = ref(false)
const isMissionVisionVisible = ref(false)
const isStrategicObjectivesVisible = ref(false)
const isValuesSectionVisible = ref(false)
const isGovernanceTeamVisible = ref(false)
const purposeSectionRef = ref<HTMLElement | null>(null)
const missionVisionRef = ref<HTMLElement | null>(null)
const strategicObjectivesRef = ref<HTMLElement | null>(null)
const valuesSectionRef = ref<HTMLElement | null>(null)
const governanceTeamRef = ref<HTMLElement | null>(null)
let purposeSectionObserver: IntersectionObserver | null = null
let missionVisionObserver: IntersectionObserver | null = null
let strategicObjectivesObserver: IntersectionObserver | null = null
let valuesSectionObserver: IntersectionObserver | null = null
let governanceTeamObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isPurposeSectionVisible.value = true
    isMissionVisionVisible.value = true
    isStrategicObjectivesVisible.value = true
    isValuesSectionVisible.value = true
    isGovernanceTeamVisible.value = true
    return
  }

  if (!purposeSectionRef.value) {
    isPurposeSectionVisible.value = true
    return
  }

  purposeSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isPurposeSectionVisible.value = true
      purposeSectionObserver?.disconnect()
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -14% 0px',
    }
  )

  purposeSectionObserver.observe(purposeSectionRef.value)

  if (!missionVisionRef.value) {
    isMissionVisionVisible.value = true
    return
  }

  missionVisionObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isMissionVisionVisible.value = true
      missionVisionObserver?.disconnect()
    },
    {
      threshold: 0.24,
      rootMargin: '0px 0px -16% 0px',
    }
  )

  missionVisionObserver.observe(missionVisionRef.value)

  if (!strategicObjectivesRef.value) {
    isStrategicObjectivesVisible.value = true
    return
  }

  strategicObjectivesObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isStrategicObjectivesVisible.value = true
      strategicObjectivesObserver?.disconnect()
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -14% 0px',
    }
  )

  strategicObjectivesObserver.observe(strategicObjectivesRef.value)

  if (!valuesSectionRef.value) {
    isValuesSectionVisible.value = true
    return
  }

  valuesSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isValuesSectionVisible.value = true
      valuesSectionObserver?.disconnect()
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -14% 0px',
    }
  )

  valuesSectionObserver.observe(valuesSectionRef.value)

  if (!governanceTeamRef.value) {
    isGovernanceTeamVisible.value = true
    return
  }

  governanceTeamObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isGovernanceTeamVisible.value = true
      governanceTeamObserver?.disconnect()
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -12% 0px',
    }
  )

  governanceTeamObserver.observe(governanceTeamRef.value)
})

onBeforeUnmount(() => {
  purposeSectionObserver?.disconnect()
  missionVisionObserver?.disconnect()
  strategicObjectivesObserver?.disconnect()
  valuesSectionObserver?.disconnect()
  governanceTeamObserver?.disconnect()
})
</script>

<style scoped>
.purpose-copy,
.mission-vision-copy,
.strategic-objectives-heading,
.strategic-objective-number,
.strategic-objective-text,
.values-heading {
  opacity: 0;
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 900ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
}

.purpose-copy--heading {
  transition-delay: 80ms;
}

.purpose-copy--text {
  transition-delay: 170ms;
}

.mission-vision-copy {
  transform: translate3d(0, 42px, 0);
}

.mission-vision-copy--mission {
  transition-delay: 80ms;
}

.mission-vision-copy--vision {
  transition-delay: 180ms;
}

.strategic-objectives-heading {
  transition-delay: 70ms;
}

.strategic-objective-number {
  transform: translate3d(0, 22px, 0);
  transition-delay: var(--objective-delay, 0ms);
}

.strategic-objective-text {
  transition-delay: calc(var(--objective-delay, 0ms) + 55ms);
}

.values-heading {
  transition-delay: 70ms;
}

.value-card {
  opacity: 0;
  transform: translate3d(0, 46px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 820ms ease,
    transform 960ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: var(--value-delay, 0ms);
  will-change: opacity, transform;
}

.value-card-copy {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  transition:
    opacity 620ms ease,
    transform 760ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--value-delay, 0ms) + 130ms);
  will-change: opacity, transform;
}

.value-card-copy--featured {
  gap: 3rem;
}

.governance-team-heading,
.governance-team-intro,
.governance-team-card {
  opacity: 0;
  transform: translate3d(0, 42px, 0);
  transition:
    opacity 840ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
}

.governance-team-heading {
  transition-delay: 60ms;
}

.governance-team-intro {
  transform: translate3d(0, 34px, 0);
  transition-delay: 150ms;
}

.governance-team-card {
  transform: translate3d(0, 54px, 0) scale(.975);
  transform-origin: center bottom;
  transition-delay: var(--team-delay, 0ms);
}

.governance-team-portrait {
  box-shadow: 0 22px 50px rgb(0 63 80 / 0);
  transition:
    box-shadow 900ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1);
}

.governance-team-portrait img {
  filter: saturate(.9) contrast(.98);
  transform: scale(1.055);
  transition:
    filter 900ms ease,
    transform 1400ms cubic-bezier(.16, 1, .3, 1);
  will-change: filter, transform;
}

.governance-team-details {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  transition:
    opacity 700ms ease,
    transform 820ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--team-delay, 0ms) + 120ms);
  will-change: opacity, transform;
}

.purpose-mission-vision.is-visible .purpose-copy,
.purpose-mission-vision.is-mission-visible .mission-vision-copy,
.strategic-objectives.is-visible .strategic-objectives-heading,
.strategic-objectives.is-visible .strategic-objective-number,
.strategic-objectives.is-visible .strategic-objective-text,
.values-section.is-visible .values-heading,
.values-section.is-visible .value-card,
.values-section.is-visible .value-card-copy,
.governance-team.is-visible .governance-team-heading,
.governance-team.is-visible .governance-team-intro,
.governance-team.is-visible .governance-team-card,
.governance-team.is-visible .governance-team-details {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.governance-team.is-visible .governance-team-portrait {
  box-shadow: 0 22px 50px rgb(0 63 80 / 0.1);
}

.governance-team.is-visible .governance-team-portrait img {
  filter: saturate(1) contrast(1);
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .purpose-copy,
  .mission-vision-copy,
  .strategic-objectives-heading,
  .strategic-objective-number,
  .strategic-objective-text,
  .values-heading,
  .value-card,
  .value-card-copy,
  .governance-team-heading,
  .governance-team-intro,
  .governance-team-card,
  .governance-team-details,
  .governance-team-portrait,
  .governance-team-portrait img {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
    box-shadow: none;
  }
}
</style>
