import { fetchCmsCollection } from '../utils/cmsApi'

export default defineEventHandler(async () =>
	fetchCmsCollection('news'),
)
