<template>
  <section
    ref="knowledgeHubRef"
    class="knowledge-hub-section bg-[#f3f3f3] py-16 lg:py-24"
    :class="{ 'is-visible': isKnowledgeHubVisible }"
  >
    <div class="mx-auto px-5 md:px-8 lg:px-20">

      <!-- Header -->
      <div
        class="knowledge-hub-header mb-8 lg:mb-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
      >
        <h2
          class="knowledge-hub-title text-[2rem] leading-[0.9] md:text-[3rem] lg:text-[42px] font-medium tracking-[-0.04em]"
        >
          <span class="knowledge-hub-title-line">
            <span>Knowledge</span>
          </span>
          <span class="knowledge-hub-title-line">
            <span>Hub</span>
          </span>
        </h2>

        <NuxtLink
          to="/knowledge-hub"
          class="knowledge-hub-action group bg-[#13131a] text-white
                 w-full md:w-[260px] lg:w-[300px]
                 h-[90px] lg:h-[110px]
                 p-5 lg:p-6
                 flex items-start justify-between"
        >
          <span
            class="text-lg lg:text-2xl leading-none"
          >
            View <br />
            More
          </span>

          <svg
            class="h-7 w-7 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:h-8 lg:w-8"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              stroke-width="1.65"
            />
          </svg>
        </NuxtLink>
      </div>

      <!-- Grid -->
      <div
        class="knowledge-hub-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6"
      >
        <!-- Sustainability -->
        <KnowledgeCard
          title="2025 Sustainability Report"
          :image="sustainabilityImage"
          :height="'h-[420px] lg:h-[500px]'"
          class="knowledge-hub-card"
          style="--knowledge-card-delay: 120ms"
        />

        <!-- Energy -->
        <KnowledgeCard
          title="Energy Infrastructure Investment Report"
          :image="energyImage"
          :height="'h-[420px] lg:h-[500px]'"
          class="knowledge-hub-card"
          style="--knowledge-card-delay: 210ms"
        />

        <!-- Conference -->
        <KnowledgeCard
          title="2025 Infrastructure Development Conference"
          :image="conferenceImage"
          :height="'h-[420px] lg:h-[500px]'"
          class="knowledge-hub-card"
          style="--knowledge-card-delay: 300ms"
        />

        <!-- Outlook -->
        <KnowledgeCard
          title="2026 Outlook"
          :image="outlookImage"
          :height="'h-[420px] lg:h-[500px]'"
          class="knowledge-hub-card xl:col-span-2"
          style="--knowledge-card-delay: 390ms"
        />

        <!-- Portfolio -->
        <KnowledgeCard
          title="Portfolio Report"
          :image="portfolioImage"
          :height="'h-[420px] lg:h-[500px]'"
          class="knowledge-hub-card"
          style="--knowledge-card-delay: 480ms"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import KnowledgeCard from '~/components/KnowledgeCard.vue'
import sustainabilityImage from '~/assets/images/home/sustainability.jpg'
import energyImage from '~/assets/images/home/energy.jpg'
import conferenceImage from '~/assets/images/home/conference.jpg'
import outlookImage from '~/assets/images/home/outlook.jpg'
import portfolioImage from '~/assets/images/home/portfolio.jpg'

const knowledgeHubRef = ref(null)
const isKnowledgeHubVisible = ref(false)
let knowledgeHubObserver = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isKnowledgeHubVisible.value = true
    return
  }

  if (!knowledgeHubRef.value) {
    isKnowledgeHubVisible.value = true
    return
  }

  knowledgeHubObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isKnowledgeHubVisible.value = true
      knowledgeHubObserver?.disconnect()
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -14% 0px',
    }
  )

  knowledgeHubObserver.observe(knowledgeHubRef.value)
})

onUnmounted(() => {
  knowledgeHubObserver?.disconnect()
})
</script>

<style scoped>
.knowledge-hub-title,
.knowledge-hub-action,
.knowledge-hub-card {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.knowledge-hub-title {
  opacity: 1;
}

.knowledge-hub-title-line {
  display: block;
  overflow: hidden;
  line-height: 1;
  padding-bottom: 0.16em;
  margin-bottom: -0.08em;
}

.knowledge-hub-title-line > span {
  display: block;
  opacity: 0;
  transform: translate3d(0, 105%, 0);
  transition:
    opacity 680ms ease,
    transform 920ms cubic-bezier(.19, 1, .22, 1);
  will-change: opacity, transform;
}

.knowledge-hub-title-line:nth-child(2) > span {
  transition-delay: 90ms;
}

.knowledge-hub-action {
  transform: translate3d(0, 26px, 0) scale(.96);
  filter: blur(8px);
  transition:
    opacity 760ms ease,
    transform 760ms cubic-bezier(.16, 1, .3, 1),
    filter 760ms ease;
  transition-delay: 110ms;
}

.knowledge-hub-card {
  transform: translate3d(0, 44px, 0) scale(.965);
  filter: blur(10px);
  transition:
    opacity 860ms ease,
    transform 860ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: var(--knowledge-card-delay, 0ms);
}

.knowledge-hub-section.is-visible .knowledge-hub-title,
.knowledge-hub-section.is-visible .knowledge-hub-action,
.knowledge-hub-section.is-visible .knowledge-hub-card {
  opacity: 1;
  filter: blur(0);
}

.knowledge-hub-section.is-visible .knowledge-hub-title-line > span {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.knowledge-hub-section.is-visible .knowledge-hub-action,
.knowledge-hub-section.is-visible .knowledge-hub-card {
  transform: translate3d(0, 0, 0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .knowledge-hub-title,
  .knowledge-hub-title-line > span,
  .knowledge-hub-action,
  .knowledge-hub-card {
    filter: none;
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
