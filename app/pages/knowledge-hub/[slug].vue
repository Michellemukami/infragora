<script setup lang="ts">
import SustainabilityReportFeature from '~/components/SustainabilityReportFeature.vue'
import Footer from '~/components/common/Footer.vue'
import NavBar from '~/components/common/NavBar.vue'
import type { CmsContentItem } from '~/data/cmsContent'
import { resolveCmsImageSrc } from '~/data/cmsImageResolver'

type DetailResponse = CmsContentItem | {
  data?: CmsContentItem | null
}

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const { data: response } = await useFetch<DetailResponse | null>(
  () => `/api/knowledge-hub/${slug.value}`,
  {
    default: () => null,
  },
)

const item = computed(() => {
  if (!response.value) return null
  if ('data' in response.value) return response.value.data || null

  return response.value
})

const knowledgeHubImageBySlug: Record<string, string> = {
  'state-of-global-ma-lseg-deals-intelligence-insights': 'sustainability',
  'global-private-markets-report-2026': 'energy',
}

const featureImage = computed(() =>
  resolveCmsImageSrc(
    item.value ? knowledgeHubImageBySlug[item.value.slug] || item.value.mainImage?.src : undefined,
  ),
)

if (!item.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Knowledge Hub item not found',
  })
}

useHead(() => ({
  title: item.value?.seo?.title || item.value?.title,
  meta: [
    {
      name: 'description',
      content: item.value?.seo?.description || item.value?.excerpt,
    },
    {
      name: 'keywords',
      content: item.value?.seo?.keywords?.join(', ') || '',
    },
  ],
}))
</script>

<template>
  <NavBar />
  <SustainabilityReportFeature
    v-if="item"
    :title="item.title"
    :body="item.excerpt"
    :cta-label="item.ctaLabel"
    :href="item.externalUrl || '/knowledge-hub'"
    :image="featureImage"
    :image-alt="item.mainImage.alt"
  />
  <Footer />
</template>
