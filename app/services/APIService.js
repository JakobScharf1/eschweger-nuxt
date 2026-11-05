class ApiError extends Error {
  constructor(status, statusText, message) {
    super(message ?? `${status} ${statusText}`)
    this.name = 'ApiError'
    this.status = status
  }
}

async function request(method, path, body, options = {}) {
  const url = new URL(`/api/backend${path}`, 'http://nuxt.local')

  if (options.params) {
    for (const [key, value] of Object.entries(options.params)) {
      if (value !== null && value !== undefined && value !== '') {
        url.searchParams.set(key, String(value))
      }
    }
  }

  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData

  const headers = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(options.headers || {}),
  }

  const response = await fetch(`${url.pathname}${url.search}`, {
    method,
    headers,
    body: body === undefined ? undefined : isFormData ? body : JSON.stringify(body),
  })

  if (!response.ok) {
    const message = await response.text()
    throw new ApiError(response.status, response.statusText, message || undefined)
  }

  if (response.status === 204) return undefined

  return response.json()
}

export const ApiService = {
  get(path, options) {
    return request('GET', path, undefined, options)
  },

  post(path, body, options) {
    return request('POST', path, body, options)
  },

  put(path, body, options) {
    return request('PUT', path, body, options)
  },

  patch(path, body, options) {
    return request('PATCH', path, body, options)
  },

  delete(path, options) {
    return request('DELETE', path, undefined, options)
  },

  uploadFile(path, file, options = {}) {
    const { fieldName = 'datei', data, ...requestOptions } = options

    const formData = new FormData()
    formData.append(fieldName, file)

    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (value !== null && value !== undefined) {
          formData.append(key, value)
        }
      }
    }

    return request('POST', path, formData, requestOptions)
  },
}

export { ApiError }
