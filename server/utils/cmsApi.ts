import type { CmsContentItem } from '../../app/data/cmsContent'
import {
  publishedKnowledgeHubItems,
  publishedNewsItems,
} from '../../app/data/cmsContent'

const defaultCmsApiBase = 'http://127.0.0.1:8000/api'

type CmsApiResponse<T> = T | {
  data?: T
}

export type CmsCategory = {
  id: number
  name: string
  slug: string
  type: 'news' | 'knowledge_hub' | string
}

export type CmsCountry = {
  id: number
  name: string
  slug: string
}

const getCmsApiBase = () => {
  const config = useRuntimeConfig()

  return config.public.cmsApiBase || defaultCmsApiBase
}

const fetchRemote = async <T>(path: string) => {
  const base = getCmsApiBase().replace(/\/$/, '')

  return $fetch<T>(`${base}/${path.replace(/^\//, '')}`)
}

const getLocalCollection = (path: 'news' | 'knowledge-hub') =>
  path === 'knowledge-hub' ? publishedKnowledgeHubItems : publishedNewsItems

const unwrapCmsResponse = <T>(response: CmsApiResponse<T>) => {
  if (
    response &&
    typeof response === 'object' &&
    !Array.isArray(response) &&
    'data' in response
  ) {
    return response.data
  }

  return response
}

export const fetchCmsCollection = async (
  path: 'news' | 'knowledge-hub',
) => {
  try {
    const response = await fetchRemote<CmsApiResponse<CmsContentItem[]>>(path)

    const items = unwrapCmsResponse(response) || []

    return items.length ? items : getLocalCollection(path)
  } catch {
    return getLocalCollection(path)
  }
}

export const fetchCmsCategories = async () => {
  try {
    const response = await fetchRemote<CmsApiResponse<CmsCategory[]>>('categories')

    return unwrapCmsResponse(response) || []
  } catch {
    return []
  }
}

export const fetchCmsCountries = async () => {
  try {
    const response = await fetchRemote<CmsApiResponse<CmsCountry[]>>('countries')

    return unwrapCmsResponse(response) || []
  } catch {
    return []
  }
}

export const fetchCmsItem = async (
  path: 'news' | 'knowledge-hub',
  slug: string,
) => {
  try {
    const response = await fetchRemote<CmsApiResponse<CmsContentItem>>(`${path}/${slug}`)

    return unwrapCmsResponse(response) || getLocalCollection(path).find((item) => item.slug === slug) || null
  } catch {
    return getLocalCollection(path).find((item) => item.slug === slug) || null
  }
}
