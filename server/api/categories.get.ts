import { fetchCmsCategories } from '../utils/cmsApi'

export default defineEventHandler(async () =>
  fetchCmsCategories(),
)
