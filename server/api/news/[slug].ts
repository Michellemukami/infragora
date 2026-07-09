import { fetchCmsItem } from '../../utils/cmsApi'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') || ''
  const item = await fetchCmsItem('news', slug)

  if (!item) {
    throw createError({
      statusCode: 404,
      statusMessage: 'News item not found',
    })
  }

  return item
})