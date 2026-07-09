<script setup lang="ts">
import CmsArticleDetail from '~/components/CmsArticleDetail.vue'
import Footer from '~/components/common/Footer.vue'
import NavBar from '~/components/common/NavBar.vue'
import type { CmsContentItem } from '~/data/cmsContent'

type DetailResponse = CmsContentItem | {
  data?: CmsContentItem | null
}

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const { data: response } = await useFetch<DetailResponse | null>(
  () => `/api/news/${slug.value}`,
  {
    default: () => null,
  },
)

const item = computed(() => {
  if (!response.value) return null
  if ('data' in response.value) return response.value.data || null

  return response.value
})

if (!item.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'News item not found',
  })
}

useHead(() => ({
  title: item.value?.seo?.title || item.value?.title || 'News',
  meta: [
    {
      name: 'description',
      content: item.value?.seo?.description || item.value?.excerpt || '',
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

  <CmsArticleDetail
    v-if="item"
    :item="item"
    back-label="Back to News"
    back-to="/news"
  />

  <Footer />
</template>
