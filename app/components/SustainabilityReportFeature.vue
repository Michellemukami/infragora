<template>
  <section class="sustainability-report-feature bg-[#FFFFFF] text-[#111111]">
    <div class="mx-auto grid max-w-[1280px] place-items-center gap-10 px-6 pb-14 pt-24 sm:px-10 sm:pb-16 sm:pt-28 md:px-14 lg:min-h-[680px] lg:grid-cols-[minmax(360px,520px)_minmax(420px,560px)] lg:items-center lg:justify-center lg:gap-24 lg:px-20 lg:pb-[72px] lg:pt-32 xl:gap-28">
      <figure class="sustainability-report-media w-full max-w-[520px] justify-self-center overflow-hidden bg-[#dce8e5]">
        <img
          :src="image"
          :alt="imageAlt"
          class="h-[340px] w-full object-cover object-center sm:h-[440px] lg:h-[540px] xl:h-[540px]"
        />
      </figure>

      <div class="sustainability-report-content max-w-[560px] justify-self-center">
        <h2 class="max-w-[560px] text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#123d36] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[58px]">
          {{ titleFirstLine }}
          <span
            v-if="titleSecondLine"
            class="block"
          >
            {{ titleSecondLine }}
          </span>
        </h2>

        <p class="mt-8 max-w-[560px] text-[14px] font-semibold leading-[1.45] tracking-[-0.02em] text-[#111111] sm:text-[15px] lg:mt-9 lg:text-[17px] xl:text-[17px]">
          {{ body }}
        </p>

        <NuxtLink
          :to="href"
          class="group mt-10 inline-flex h-[48px] items-center justify-center gap-7 rounded-full bg-[#073a58] px-7 text-[14px] font-semibold leading-none text-white transition duration-300 hover:bg-[#0b4b70] sm:h-[54px] sm:px-8 sm:text-[15px] lg:mt-12"
        >
          {{ ctaLabel }}
          <svg
            class="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  body: string
  ctaLabel: string
  href: string
  image: string
  imageAlt: string
}>()

const titleParts = computed(() => {
  const parts = props.title.trim().split(/\s+/)

  if (parts.length <= 2) {
    return [props.title, '']
  }

  return [parts.slice(0, -1).join(' '), parts.at(-1) || '']
})

const titleFirstLine = computed(() => titleParts.value[0])
const titleSecondLine = computed(() => titleParts.value[1])
</script>
