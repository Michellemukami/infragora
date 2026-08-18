const defaultCmsApiBase = 'http://127.0.0.1:8000/api'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string }>(event)
  const email = body.email?.trim()

  if (!email) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Please enter a valid email address.',
    })
  }

  const config = useRuntimeConfig()
  const base = (config.public.cmsApiBase || defaultCmsApiBase).replace(/\/$/, '')

  try {
    return await $fetch(`${base}/mailing-list`, {
      method: 'POST',
      body: { email },
      headers: {
        Accept: 'application/json',
      },
    })
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || error?.response?.status || 500,
      statusMessage:
        error?.data?.message ||
        error?.statusMessage ||
        'Unable to subscribe to the mailing list.',
      data: error?.data,
    })
  }
})
