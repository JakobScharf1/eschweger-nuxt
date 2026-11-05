export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  if (!config.apiBaseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'NUXT_API_BASE_URL ist nicht konfiguriert.',
    })
  }

  const method = event.method.toUpperCase()
  if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    throw createError({ statusCode: 405, statusMessage: 'Methode nicht erlaubt.' })
  }

  const path = getRouterParam(event, 'path')
  if (!path) {
    throw createError({ statusCode: 400, statusMessage: 'API-Pfad fehlt.' })
  }

  const apiBase = String(config.apiBaseUrl).replace(/\/+$/, '')
  let target: URL
  try {
    target = new URL(
      `${apiBase}/${path.split('/').map(encodeURIComponent).join('/')}`,
    )
  } catch {
    throw createError({ statusCode: 500, statusMessage: 'NUXT_API_BASE_URL ist ungültig.' })
  }

  const requestUrl = getRequestURL(event)
  requestUrl.searchParams.forEach((value, key) => target.searchParams.append(key, value))

  const headers = new Headers()
  const contentType = getHeader(event, 'content-type')
  const accept = getHeader(event, 'accept')
  if (contentType) headers.set('content-type', contentType)
  if (accept) headers.set('accept', accept)
  if (config.apiBearer) headers.set('authorization', `Bearer ${config.apiBearer}`)

  let response: Response
  try {
    response = await fetch(target, {
      method,
      headers,
      body: method === 'GET' || method === 'DELETE' ? undefined : await readRawBody(event),
    })
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Die Backend-API ist nicht erreichbar.',
      cause: error,
    })
  }

  setResponseStatus(event, response.status, response.statusText)
  const responseType = response.headers.get('content-type')
  if (responseType) setResponseHeader(event, 'content-type', responseType)
  if (response.status === 204) return
  return new Uint8Array(await response.arrayBuffer())
})
