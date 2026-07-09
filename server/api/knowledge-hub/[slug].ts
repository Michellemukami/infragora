import { fetchCmsItem } from '../../utils/cmsApi'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') || ''
  const item = await fetchCmsItem('knowledge-hub', slug)

  if (!item) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Knowledge Hub item not found',
    })
  }

  return item
})