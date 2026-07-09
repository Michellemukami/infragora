<script setup lang="ts">
import type { CmsContentItem } from '~/data/cmsContent'
import { resolveCmsImageSrc } from '~/data/cmsImageResolver'

type CmsArticleDetailItem = CmsContentItem | {
  data?: CmsContentItem | null
}

const props = defineProps<{
  item: CmsArticleDetailItem
  backLabel: string
  backTo: string
}>()

const article = computed(() => {
  if ('data' in props.item) return props.item.data || null

  return props.item
})

const mainImageSrc = computed(() => resolveCmsImageSrc(article.value?.mainImage?.src))

const formatDate = (date?: string) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

const formattedDate = computed(() => formatDate(article.value?.publishedAt))

const contentBlocks = computed(() => {
  if (Array.isArray(article.value?.contentBlocks)) return article.value.contentBlocks

  return []
})
</script>

<template>
  <article
    v-if="article"
    class="bg-white font-sans text-black"
  >
    <!-- Hero -->
    <section class="bg-[#dcebe8]">
      <div
        class="mx-auto flex min-h-[330px] w-full  items-end px-6 pb-14 pt-28 sm:px-10 md:px-20 md:min-h-[390px] lg:min-h-[430px]  lg:pb-20"
      >
        <div>
          <h1
            class="max-w-[650px] text-[25px] font-semibold leading-[1.04] tracking-[-0.055em] text-[#08344d] sm:text-[42px] md:text-[52px] lg:text-[50px]"
          >
            {{ article.title }}
          </h1>

          <p
            v-if="formattedDate"
            class="mt-7 text-[11px] md:text-[15px] font-medium leading-none text-black"
          >
            {{ formattedDate }}
          </p>
        </div>
      </div>
    </section>

    <!-- Intro text -->
    <section class="bg-white">
      <div
        class="mx-auto w-full max-w-[760px] px-6  pt-0 sm:px-8    md:pt-10"
      >
        <!-- <div class="space-y-5 text-[14px] leading-[1.55] tracking-[-0.015em] text-black md:text-[15px]">
          <p v-if="article.excerpt">
            {{ article.excerpt }}
          </p>
        </div> -->
      </div>
    </section>

    <!-- Hero image -->
   

    <!-- Body section -->
    <section class="bg-white">
      <div
        class="mx-auto w-full max-w-[760px] px-6 pb-24 pt-20 sm:px-8 md:pb-28 md:pt-10"
      >
        <div class="space-y-7 text-[14px] leading-[1.55] tracking-[-0.015em] text-black md:text-[15px]">
          <template
            v-for="(block, index) in contentBlocks"
            :key="`${block.type}-${index}`"
          >
            <h2
              v-if="block.type === 'subtitle'"
              class="pt-4 text-[18px] font-semibold leading-tight tracking-[-0.03em] text-black md:text-[20px]"
            >
              {{ block.text }}
            </h2>

            <p v-else-if="block.type === 'paragraph'">
              {{ block.text }}
            </p>

            <figure
              v-else-if="block.type === 'image' && block.image?.src"
              class="mx-auto w-[min(100vw-3rem,860px)] py-8 md:w-[min(100vw-5rem,880px)] md:-translate-x-[60px]"
            >
              <img
                :src="resolveCmsImageSrc(block.image.src)"
                :alt="block.image.alt || article.title"
                class="h-[260px] w-full rounded-[24px] object-cover sm:h-[340px] md:h-[400px]"
              >

              <figcaption
                v-if="block.image.caption"
                class="mt-4 pl-8 text-[10px] leading-[1.4] text-black/70"
              >
                {{ block.image.caption }}
              </figcaption>
            </figure>

            <blockquote
              v-else-if="block.type === 'quote'"
              class="border-l-4 border-[#08344d] pl-6 text-[18px] font-medium leading-[1.45] tracking-[-0.02em] text-[#08344d] md:text-[20px]"
            >
              {{ block.text }}
            </blockquote>
          </template>
        </div>
      </div>
    </section>
  </article>
</template>
