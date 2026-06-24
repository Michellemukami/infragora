<script setup lang="ts">
import ReusableGrid from './common/ReusableGrid.vue';
import SmallHeader from './common/SmallHeader.vue';
import newsImage from '~/assets/images/news.jpg'
useHead({
  title: 'Knowledge Hub | African Infrastructure Investment Insights',
  meta: [
    {
      name: 'description',
      content:
        'Meta Description Read INFRAGORA insights on African infrastructure finance, secondary markets, ESG, capital markets, digital infrastructure and renewable energy.',
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

const knowledgeHubCategories = ['All',
    'Infrastructure Finance: investment, capital mobilisation, project bankability and long-term asset ownership.',
'Secondary Markets: structured exits, capital recycling, asset-backed securities, infrastructure liquidity and price discovery.',
'Capital Markets: listed infrastructure vehicles, public market access, institutional participation and investment instruments.',
'ESG and Impact: sustainability, climate resilience, inclusive growth, governance and impact measurement.',
'Sector Insights: renewable energy, ICT infrastructure, transport, water and public infrastructure.',
'Africa Market Outlook: infrastructure opportunities, risks, regulation and investor sentiment.'
]

type KnowledgeHubItem = {
  id: number
  title: string
  category: string
  ctaLabel: string
  image: string
  layout: 'standard' | 'wide'
}

const knowledgeHubItems: KnowledgeHubItem[] = [
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
      :items="knowledgeHubItems"
      :categories="knowledgeHubCategories"
    />
</template>
