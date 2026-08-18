<script setup lang="ts">
import SmallHeader from './common/SmallHeader.vue'
import type { CmsContentItem } from '~/data/cmsContent'
import { resolveCmsImageSrc } from '~/data/cmsImageResolver'

type CmsCategory = {
  id: number
  name: string
  slug: string
  type: string
}

type CmsCountry = {
  id: number
  name: string
  slug: string
}

useHead({
  title: 'News | INFRAGORA Global Capital Updates',
  meta: [
    {
      name: 'description',
      content:
        'Stay updated with INFRAGORA news, platform announcements, partnerships, investment insights and African infrastructure market updates.',
    },
    {
      name: 'keywords',
      content:
        'INFRAGORA news, infrastructure investment news Africa, investment platform updates, African infrastructure market',
    },
  ],
})

const introHeader = {
  title: 'News',
  description: [
    "Stay informed on the latest updates from INFRAGORA Global Capital, including platform announcements, partnerships, investment activity, market insights and developments across Africa's infrastructure landscape.",
  ],
}

const { data: newsArticles } = await useFetch<CmsContentItem[]>('/api/news', {
  default: () => [],
})

const { data: categories } = await useFetch<CmsCategory[]>('/api/categories', {
  default: () => [],
})

const { data: countries } = await useFetch<CmsCountry[]>('/api/countries', {
  default: () => [],
})

const selectedCategory = ref('All')
const selectedCountry = ref('All')
const selectedDateOrder = ref('Newest')
const selectedOrder = ref('Newest')
const orderOptions = ['Newest', 'Oldest']

const normalizeList = (value?: string | string[]) => {
  if (Array.isArray(value)) return value
  return value ? [value] : []
}

const withAllOption = (values: string[]) => {
  const uniqueValues = Array.from(new Set(values.filter(Boolean)))

  return uniqueValues.includes('All') ? uniqueValues : ['All', ...uniqueValues]
}

const newsItems = computed(() =>
  newsArticles.value.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    country: item.country,
    project: item.project,
    ctaLabel: item.ctaLabel,
    date: item.publishedAt,
    image: resolveCmsImageSrc(item.mainImage?.src),
    layout: item.layout,
    href: `/news/${item.slug}`,
  })),
)

const newsCategories = computed(() => {
  const apiCategories = categories.value
    .filter((category) => category.type === 'news')
    .map((category) => category.name)

  if (apiCategories.length) return withAllOption(apiCategories)

  return withAllOption(newsItems.value.map((item) => item.category))
})

const countryOptions = computed(() => {
  const apiCountries = countries.value.map((country) => country.name)

  if (apiCountries.length) return withAllOption(apiCountries)

  return withAllOption(newsItems.value.flatMap((item) => normalizeList(item.country)))
})

const filteredNewsItems = computed(() => {
  const items = newsItems.value.filter((item) => {
    const categoryMatches =
      selectedCategory.value === 'All' ||
      item.category === selectedCategory.value

    const countryMatches =
      selectedCountry.value === 'All' ||
      normalizeList(item.country).includes(selectedCountry.value)

    return categoryMatches && countryMatches
  })

  return selectedOrder.value === 'Oldest' ? [...items].reverse() : items
})

watch(selectedDateOrder, (value) => {
  selectedOrder.value = value
})

watch(selectedOrder, (value) => {
  selectedDateOrder.value = value
})

const cardGridClass = (index: number) => {
  if (filteredNewsItems.value.length === 1) {
    return 'lg:col-span-12'
  }

  return index % 4 === 0 || index % 4 === 3
    ? 'lg:col-span-8'
    : 'lg:col-span-4'
}
</script>

<template>
  <SmallHeader
    :title="introHeader.title"
    :description="introHeader.description"
  />

  <section class="bg-white px-5 pb-20 pt-8 font-sans text-black sm:px-8 lg:px-20 lg:pb-28">
    <div class="mx-auto">
      <div class="mb-8 flex flex-col gap-5 border-b border-black/10 pb-6 lg:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 lg:flex lg:w-auto lg:flex-wrap lg:items-center lg:gap-x-8">
          <div class="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
            <span class="text-[12px] font-semibold leading-none tracking-[-0.02em] text-black">
              Sort By
            </span>
          </div>

          <label class="grid grid-cols-[72px_1fr] items-center gap-3 sm:grid-cols-[76px_1fr] lg:flex">
            <span class="text-[11px] font-medium leading-none tracking-[-0.02em]">
              Category
            </span>

            <div class="relative">
              <select
                v-model="selectedCategory"
                class="h-9 w-full min-w-0 appearance-none border border-black/35 bg-white pl-3 pr-8 text-[11px] outline-none transition focus:border-black lg:h-8 lg:min-w-[92px]"
              >
                <option
                  v-for="category in newsCategories"
                  :key="category"
                  :value="category"
                >
                  {{ category }}
                </option>
              </select>

              <svg
                class="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </label>

          <label class="grid grid-cols-[72px_1fr] items-center gap-3 sm:grid-cols-[76px_1fr] lg:flex">
            <span class="text-[11px] font-medium leading-none tracking-[-0.02em]">
              Country
            </span>

            <div class="relative">
              <select
                v-model="selectedCountry"
                class="h-9 w-full min-w-0 appearance-none border border-black/35 bg-white pl-3 pr-8 text-[11px] outline-none transition focus:border-black lg:h-8 lg:min-w-[128px]"
              >
                <option
                  v-for="country in countryOptions"
                  :key="country"
                  :value="country"
                >
                  {{ country }}
                </option>
              </select>

              <svg
                class="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </label>

          <label class="grid grid-cols-[72px_1fr] items-center gap-3 sm:grid-cols-[76px_1fr] lg:flex">
            <span class="text-[11px] font-medium leading-none tracking-[-0.02em]">
              Date
            </span>

            <div class="relative">
              <select
                v-model="selectedDateOrder"
                class="h-9 w-full min-w-0 appearance-none border border-black/35 bg-white pl-3 pr-8 text-[11px] outline-none transition focus:border-black lg:h-8 lg:min-w-[108px]"
              >
                <option
                  v-for="option in orderOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>

              <svg
                class="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </label>

          <label class="grid grid-cols-[72px_1fr] items-center gap-3 sm:grid-cols-[76px_1fr] lg:flex">
            <span class="text-[11px] font-medium leading-none tracking-[-0.02em]">
              Order
            </span>

            <div class="relative">
              <select
                v-model="selectedOrder"
                class="h-9 w-full min-w-0 appearance-none border border-black/35 bg-white pl-3 pr-8 text-[11px] outline-none transition focus:border-black lg:h-8 lg:min-w-[108px]"
              >
                <option
                  v-for="option in orderOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>

              <svg
                class="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </label>
        </div>

        <div class="flex w-full items-center justify-end gap-4 sm:w-auto sm:self-end lg:self-auto">
          <button
            type="button"
            aria-label="Previous"
            class="grid h-7 w-7 place-items-center rounded-full border border-[#0d5561] text-[#0d5561] transition hover:bg-[#0d5561] hover:text-white"
          >
            <svg
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12.5 4.5L7 10L12.5 15.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next"
            class="grid h-7 w-7 place-items-center rounded-full border border-[#0d5561] text-[#0d5561] transition hover:bg-[#0d5561] hover:text-white"
          >
            <svg
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7.5 4.5L13 10L7.5 15.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <NuxtLink
          v-for="(item, index) in filteredNewsItems"
          :key="item.id"
          :to="item.href"
          :class="[
            'group relative isolate flex min-h-[250px] overflow-hidden bg-[#edf0ef] sm:min-h-[270px] xl:min-h-[300px]',
            cardGridClass(index),
          ]"
        >
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.title"
            class="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
            loading="lazy"
          >

          <div class="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_34%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.93)_78%,rgba(255,255,255,1)_100%)]"></div>

          <div class="flex w-full flex-col justify-end px-4 pb-4 pt-6 sm:px-5 sm:pb-5 lg:px-5">
            <h2 class="max-w-[95%] text-[18px] font-medium leading-[0.98] tracking-[-0.055em] text-black sm:text-[19px] lg:text-[20px] xl:text-[22px]">
              {{ item.title }}
            </h2>

            <span class="mt-4 inline-flex w-fit items-center gap-5 text-[10px] font-normal leading-none tracking-[-0.02em] text-black">
              {{ item.ctaLabel || 'Read More' }}

              <svg
                class="h-3 w-3 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  stroke-width="1.65"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
