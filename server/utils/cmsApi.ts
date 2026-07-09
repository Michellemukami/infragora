import type { CmsContentItem } from '../../app/data/cmsContent'

const defaultCmsApiBase = 'http://127.0.0.1:8000/api'

type CmsApiResponse<T> = T | {
  data?: T
}

const getCmsApiBase = () => {
  const config = useRuntimeConfig()

  return config.public.cmsApiBase || defaultCmsApiBase
}

const fetchRemote = async <T>(path: string) => {
  const base = getCmsApiBase().replace(/\/$/, '')

  return $fetch<T>(`${base}/${path.replace(/^\//, '')}`)
}

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

    return unwrapCmsResponse(response) || null
  } catch {
    return null
  }
}
