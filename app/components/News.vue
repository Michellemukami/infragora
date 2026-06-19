<script setup lang="ts">
import ReusableGrid from './common/ReusableGrid.vue';
import SmallHeader from './common/SmallHeader.vue';
import newsImage from '~/assets/images/news.jpg'
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

const newsCategories = ['All', 'Company Announcements', 'Investment Updates', 'Partnerships', 'Market Commentary', 'ESG and Impact News','Events and Speaking Engagements', 'Media Releases']

type NewsItem = {
  id: number
  title: string
  category: string
  ctaLabel: string
  image: string
  layout: 'standard' | 'wide'
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title:
      'INFRAGORA Advances Its African Infrastructure Secondary Market Platform',
    category: 'Markets',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'standard',
  },
  {
    id: 2,
    title:
      'INFRAGORA Strengthens Focus on Green Energy and Digital Infrastructure',
    category: 'Investment',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'standard',
  },
  {
    id: 3,
    title:
      'INFRAGORA Builds Partnerships to Support Market Transparency and Investor Confidence',
    category: 'Infrastructure',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'standard',
  },
  {
    id: 4,
    title:
      'INFRAGORA Advances Its African Infrastructure Secondary Market Platform',
    category: 'Markets',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'wide',
  },
  {
    id: 5,
    title:
      'INFRAGORA Builds Partnerships to Support Market Transparency and Investor Confidence',
    category: 'Infrastructure',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'standard',
  },
  {
    id: 6,
    title:
      'INFRAGORA Advances Its African Infrastructure Secondary Market Platform',
    category: 'Markets',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'standard',
  },
  {
    id: 7,
    title:
      'INFRAGORA Strengthens Focus on Green Energy and Digital Infrastructure',
    category: 'Investment',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'standard',
  },
  {
    id: 8,
    title:
      'INFRAGORA Builds Partnerships to Support Market Transparency and Investor Confidence',
    category: 'Infrastructure',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'standard',
  },
  {
    id: 9,
    title:
      'INFRAGORA Builds Partnerships to Support Market Transparency and Investor Confidence',
    category: 'Infrastructure',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'standard',
  },
  {
    id: 10,
    title:
      'INFRAGORA Advances Its African Infrastructure Secondary Market Platform',
    category: 'Markets',
    ctaLabel: 'Read More',
    image: newsImage,
    layout: 'wide',
  },
]
</script>

<template>
    <SmallHeader
      :title="introHeader.title"
      :description="introHeader.description"
    />
    <ReusableGrid
      :items="newsItems"
      :categories="newsCategories"
    />
</template>
