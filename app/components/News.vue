<script setup lang="ts">
import ReusableGrid from './common/ReusableGrid.vue'
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

const newsCategories = computed(() =>
  categories.value
    .filter((category) => category.type === 'news')
    .map((category) => category.name),
)

const countryOptions = computed(() =>
  countries.value.map((country) => country.name),
)
</script>

<template>
  <SmallHeader
    :title="introHeader.title"
    :description="introHeader.description"
  />

  <ReusableGrid
    :items="newsItems"
    :categories="newsCategories"
    :countries="countryOptions"
  />
</template>
