import { fetchCmsCountries } from '../utils/cmsApi'

export default defineEventHandler(async () =>
  fetchCmsCountries(),
)
