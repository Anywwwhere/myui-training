export function getStrapiURL(path = '') {
  return `${process.env.STRAPI_API_URL}/api${path || ''}`
}

export async function fetchApi(...options: Parameters<typeof fetch>): Promise<Response | any> {
  const res = await fetch(...options)

  const isContentTypeJson = res.headers.get('content-type')?.includes('application/json')
  const responseData = isContentTypeJson ? await res.json() : res

  if (!res.ok) {
    return Promise.reject(responseData)
  }
  return Promise.resolve({ data: responseData, status: res.status })
}


export async function fetchCMS({
  path,
  body,
  draft = false,
  method = 'GET',
  tags,
  cache,
}: {
  path: string
  body?: any
  draft?: boolean
  method?: string
  tags?: NextFetchRequestConfig['tags']
  cache?: RequestCache
}) {
  const url = new URL(getStrapiURL(`/${path}`))

  const params = new URLSearchParams(url.search)
  if (draft) {
    params.set('publicationState', 'preview')
  }

  const requestUrl = `${url.origin}${url.pathname}?${decodeURIComponent(params.toString())}`

  const configHeaders: HeadersInit = {
    'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
    'Content-Type': 'application/json',
  }

  const { data } = await fetchApi(requestUrl, {
    method,
    headers: configHeaders,
    body: body ? JSON.stringify(body) : undefined,
    next: { tags },
    cache,
  })

  return Array.isArray(data.data) ? data.data : data.data?.attributes || data
}