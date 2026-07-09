<script setup lang="ts">
import ReusableGrid from './common/ReusableGrid.vue'
import SmallHeader from './common/SmallHeader.vue'
import type { CmsContentItem } from '~/data/cmsContent'
import { resolveCmsImageSrc } from '~/data/cmsImageResolver'

useHead({
  title: 'Knowledge Hub | African Infrastructure Investment Insights',
  meta: [
    {
      name: 'description',
      content:
        'Read INFRAGORA insights on African infrastructure finance, secondary markets, ESG, capital markets, digital infrastructure and renewable energy.',
    },
    {
      name: 'keywords',
      content:
        'infrastructure insights Africa, secondary markets, capital recycling, ESG infrastructure, infrastructure finance Africa',
    },
  ],
})

const introHeader = {
  title: 'Knowledge Hub',
  description: [
    'The INFRAGORA Knowledge Hub shares perspectives on the future of African infrastructure investment, liquidity, capital markets and sustainable development.',
    "Our insights and knowledge products are designed for asset owners, regional and global investors, policymakers, development partners, financial institutions and infrastructure companies seeking to understand Africa's evolving infrastructure investment landscape.",
  ],
}

const { data: knowledgeArticles } = await useFetch<CmsContentItem[]>('/api/knowledge-hub', {
  default: () => [],
})

const knowledgeHubItems = computed(() =>
  knowledgeArticles.value.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    country: item.country,
    project: item.project,
    ctaLabel: item.ctaLabel,
    date: item.publishedAt,
    image: resolveCmsImageSrc(item.mainImage?.src),
    layout: item.layout,
    href: `/knowledge-hub/${item.slug}`,
  })),
)
</script>

<template>
  <SmallHeader
    :title="introHeader.title"
    :description="introHeader.description"
  />

  <ReusableGrid
    :items="knowledgeHubItems"
  />
</template>
