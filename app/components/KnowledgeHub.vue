<template>
  <section class="bg-[#f3f3f3] py-16 lg:py-24">
    <div class="mx-auto px-5 md:px-8 lg:px-20">

      <!-- Header -->
      <div
        class="mb-8 lg:mb-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
      >
        <h2
          class="text-[2rem] leading-[0.9] md:text-[3rem] lg:text-[42px] font-medium tracking-[-0.04em]"
        >
          Knowledge<br />
          Hub
        </h2>

        <NuxtLink
          to="/knowledge-hub"
          class="group bg-[#13131a] text-white
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
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6"
      >
        <!-- Sustainability -->
        <KnowledgeCard
          title="2025 Sustainability Report"
          :image="sustainabilityImage"
          :height="'h-[420px] lg:h-[500px]'"
        />

        <!-- Energy -->
        <KnowledgeCard
          title="Energy Infrastructure Investment Report"
          :image="energyImage"
          :height="'h-[420px] lg:h-[500px]'"
        />

        <!-- Conference -->
        <KnowledgeCard
          title="2025 Infrastructure Development Conference"
          :image="conferenceImage"
          :height="'h-[420px] lg:h-[500px]'"
        />

        <!-- Outlook -->
        <KnowledgeCard
          title="2026 Outlook"
          :image="outlookImage"
          :height="'h-[420px] lg:h-[500px]'"
          class="xl:col-span-2"
        />

        <!-- Portfolio -->
        <KnowledgeCard
          title="Portfolio Report"
          :image="portfolioImage"
          :height="'h-[420px] lg:h-[500px]'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import KnowledgeCard from '~/components/KnowledgeCard.vue'
import sustainabilityImage from '~/assets/images/sustainability.jpg'
import energyImage from '~/assets/images/energy.jpg'
import conferenceImage from '~/assets/images/conference.jpg'
import outlookImage from '~/assets/images/outlook.jpg'
import portfolioImage from '~/assets/images/portfolio.jpg'
</script>
