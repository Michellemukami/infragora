export type CmsImage = {
  src: string
  alt: string
  caption?: string
}

export type CmsSeo = {
  title: string
  description: string
  keywords: string[]
}

export type CmsContentBlock =
  | {
      type: 'subtitle'
      text: string
    }
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'image'
      image: CmsImage
    }
  | {
      type: 'quote'
      text: string
    }

export type CmsContentItem = {
  id: number
  type: 'news' | 'knowledge_hub'
  title: string
  slug: string
  excerpt: string
  content?: string[]
  contentBlocks: CmsContentBlock[]
  category: string
  country: string
  project?: string | string[]
  ctaLabel: string
  mainImage: CmsImage
  publishedAt: string
  status: 'draft' | 'published' | 'archived'
  isFeatured: boolean
  layout: 'standard' | 'wide'
  seo: CmsSeo
}

const defaultNewsMainImage: CmsImage = {
  src: 'news',
  alt: 'African infrastructure and investment market update',
}

export const newsItems: CmsContentItem[] = [
  {
    id: 1,
    type: 'news',
    title: 'INFRAGORA Advances Its African Infrastructure Secondary Market Platform',
    slug: 'infragora-advances-african-infrastructure-secondary-market-platform',
    excerpt:
      'INFRAGORA continues to develop market infrastructure designed to improve liquidity, transparency and capital recycling across African infrastructure assets.',
    content: [],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'INFRAGORA Global Capital is advancing its African infrastructure secondary market platform as part of its broader commitment to deepen liquidity and improve access to long-term infrastructure investment opportunities.',
      },
      {
        type: 'paragraph',
        text: 'The platform is designed to support asset owners, institutional investors and development partners with clearer market access, improved price discovery and structured pathways for capital recycling.',
      },
    ],
    category: 'Company Announcements',
    country: 'Mauritius',
    ctaLabel: 'Read More',
    mainImage: defaultNewsMainImage,
    publishedAt: '2026-06-12',
    status: 'published',
    isFeatured: true,
    layout: 'standard',
    seo: {
      title: 'INFRAGORA Advances African Infrastructure Secondary Market Platform',
      description:
        'INFRAGORA advances its African infrastructure secondary market platform to support liquidity, capital recycling and investor access.',
      keywords: ['INFRAGORA', 'African infrastructure', 'secondary markets'],
    },
  },
  {
    id: 2,
    type: 'news',
    title: 'INFRAGORA Strengthens Focus on Green Energy and Digital Infrastructure',
    slug: 'infragora-strengthens-green-energy-digital-infrastructure-focus',
    excerpt:
      "The firm is expanding attention on renewable energy and digital infrastructure as core themes in Africa's infrastructure investment landscape.",
    content: [],
    contentBlocks: [
      {
        type: 'paragraph',
        text: "INFRAGORA is strengthening its focus on green energy and digital infrastructure, two sectors central to Africa's economic resilience and long-term productivity.",
      },
      {
        type: 'paragraph',
        text: 'The firm continues to evaluate investment structures that can support scalable infrastructure growth while aligning with sustainability and impact objectives.',
      },
    ],
    category: 'Investment Updates',
    country: 'South Africa',
    ctaLabel: 'Read More',
    mainImage: defaultNewsMainImage,
    publishedAt: '2026-05-28',
    status: 'published',
    isFeatured: true,
    layout: 'standard',
    seo: {
      title: 'INFRAGORA Focuses on Green Energy and Digital Infrastructure',
      description:
        'INFRAGORA strengthens focus on green energy and digital infrastructure investment opportunities across Africa.',
      keywords: ['green energy', 'digital infrastructure', 'Africa investment'],
    },
  },
  {
    id: 3,
    type: 'news',
    title: 'INFRAGORA Builds Partnerships to Support Market Transparency',
    slug: 'infragora-builds-partnerships-market-transparency-investor-confidence',
    excerpt:
      'Strategic partnerships remain central to building better infrastructure investment transparency and investor confidence.',
    content: [],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'INFRAGORA is building partnerships with market participants to support transparency, stronger governance and improved investor confidence across African infrastructure markets.',
      },
      {
        type: 'paragraph',
        text: 'These partnerships are expected to contribute to more consistent market data, better transaction visibility and stronger institutional participation.',
      },
    ],
    category: 'Partnerships',
    country: 'Kenya',
    ctaLabel: 'Read More',
    mainImage: defaultNewsMainImage,
    publishedAt: '2026-05-06',
    status: 'published',
    isFeatured: false,
    layout: 'standard',
    seo: {
      title: 'INFRAGORA Partnerships Support Market Transparency',
      description:
        'INFRAGORA builds partnerships to support transparency and investor confidence in African infrastructure markets.',
      keywords: ['partnerships', 'market transparency', 'investor confidence'],
    },
  },
  {
    id: 4,
    type: 'news',
    title: 'Market Commentary: Capital Recycling in African Infrastructure',
    slug: 'market-commentary-capital-recycling-african-infrastructure',
    excerpt:
      'Capital recycling is becoming increasingly important as investors seek flexible exits and reinvestment pathways.',
    content: [],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'Capital recycling can help long-term investors unlock value from mature infrastructure assets while creating room for new development and expansion capital.',
      },
      {
        type: 'paragraph',
        text: 'In African markets, structured secondary-market solutions may help address liquidity constraints and attract a broader base of institutional investors.',
      },
    ],
    category: 'Market Commentary',
    country: 'Nigeria',
    ctaLabel: 'Read More',
    mainImage: defaultNewsMainImage,
    publishedAt: '2026-04-18',
    status: 'published',
    isFeatured: false,
    layout: 'wide',
    seo: {
      title: 'Capital Recycling in African Infrastructure',
      description:
        'Market commentary on capital recycling, structured exits and liquidity in African infrastructure investment.',
      keywords: ['capital recycling', 'infrastructure liquidity', 'Africa'],
    },
  },
]

export const knowledgeHubItems: CmsContentItem[] = [
  {
    id: 101,
    type: 'knowledge_hub',
    title: 'Understanding African Infrastructure Secondary Markets',
    slug: 'understanding-african-infrastructure-secondary-markets',
    excerpt:
      'A practical overview of how secondary markets can support liquidity, pricing and capital recycling for infrastructure assets.',
    content: [],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'Secondary markets can play an important role in infrastructure finance by giving investors more flexible entry and exit options across the asset lifecycle.',
      },
      {
        type: 'paragraph',
        text: 'For African infrastructure, these markets can help improve liquidity, support price discovery and allow long-term capital to be recycled into new projects.',
      },
    ],
    category: 'Secondary Markets',
    country: 'Mauritius',
    ctaLabel: 'Read More',
    mainImage: defaultNewsMainImage,
    publishedAt: '2026-06-20',
    status: 'published',
    isFeatured: true,
    layout: 'standard',
    seo: {
      title: 'Understanding African Infrastructure Secondary Markets',
      description:
        'Learn how secondary markets can improve liquidity, price discovery and capital recycling for African infrastructure assets.',
      keywords: ['secondary markets', 'infrastructure finance', 'capital recycling'],
    },
  },
  {
    id: 102,
    type: 'knowledge_hub',
    title: 'Capital Markets and Listed Infrastructure Vehicles',
    slug: 'capital-markets-listed-infrastructure-vehicles',
    excerpt:
      'Listed infrastructure vehicles can broaden access to infrastructure exposure while supporting public market participation.',
    content: [],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'Capital markets can create broader participation in infrastructure investment by giving institutional and qualified investors clearer routes into the asset class.',
      },
      {
        type: 'paragraph',
        text: 'Listed infrastructure vehicles may support transparency, governance and liquidity when structured around high-quality assets and disciplined reporting.',
      },
    ],
    category: 'Capital Markets',
    country: 'South Africa',
    ctaLabel: 'Read More',
    mainImage: defaultNewsMainImage,
    publishedAt: '2026-05-30',
    status: 'published',
    isFeatured: true,
    layout: 'standard',
    seo: {
      title: 'Capital Markets and Listed Infrastructure Vehicles',
      description:
        'Insight into listed infrastructure vehicles, public market access and institutional participation in African infrastructure.',
      keywords: ['capital markets', 'listed infrastructure', 'institutional investors'],
    },
  },
  {
    id: 103,
    type: 'knowledge_hub',
    title: 'ESG and Impact Considerations for Infrastructure Investors',
    slug: 'esg-impact-considerations-infrastructure-investors',
    excerpt:
      'Infrastructure investors increasingly need clear ESG, impact and governance frameworks for long-term asset ownership.',
    content: [],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'ESG and impact considerations are now central to infrastructure investment decisions, particularly where assets affect communities, climate resilience and public services.',
      },
      {
        type: 'paragraph',
        text: 'Investors need practical frameworks for measuring governance, sustainability performance and inclusive growth across the investment lifecycle.',
      },
    ],
    category: 'ESG and Impact',
    country: 'Kenya',
    ctaLabel: 'Read More',
    mainImage: defaultNewsMainImage,
    publishedAt: '2026-05-10',
    status: 'published',
    isFeatured: false,
    layout: 'standard',
    seo: {
      title: 'ESG and Impact for Infrastructure Investors',
      description:
        'A knowledge hub insight on ESG, governance and impact considerations for infrastructure investors in Africa.',
      keywords: ['ESG', 'impact investing', 'infrastructure governance'],
    },
  },
  {
    id: 104,
    type: 'knowledge_hub',
    title: 'Africa Market Outlook: Infrastructure Liquidity and Investor Sentiment',
    slug: 'africa-market-outlook-infrastructure-liquidity-investor-sentiment',
    excerpt:
      'An outlook on infrastructure liquidity, regulation, investor sentiment and capital mobilisation across African markets.',
    content: [],
    contentBlocks: [
      {
        type: 'paragraph',
        text: "Africa's infrastructure opportunity remains significant, but investors continue to evaluate liquidity, regulation and currency considerations with care.",
      },
      {
        type: 'paragraph',
        text: 'Improved transaction visibility, structured investment instruments and stronger market infrastructure can help support investor confidence over time.',
      },
    ],
    category: 'Africa Market Outlook',
    country: 'Nigeria',
    ctaLabel: 'Read More',
    mainImage: defaultNewsMainImage,
    publishedAt: '2026-04-22',
    status: 'published',
    isFeatured: false,
    layout: 'wide',
    seo: {
      title: 'Africa Market Outlook: Infrastructure Liquidity and Sentiment',
      description:
        'Outlook on African infrastructure liquidity, regulation, capital mobilisation and investor sentiment.',
      keywords: ['Africa market outlook', 'infrastructure liquidity', 'investor sentiment'],
    },
  },
]

export const publishedNewsItems = newsItems.filter((item) => item.status === 'published')
export const publishedKnowledgeHubItems = knowledgeHubItems.filter((item) => item.status === 'published')
export const allPublishedContentItems = [...publishedNewsItems, ...publishedKnowledgeHubItems]
