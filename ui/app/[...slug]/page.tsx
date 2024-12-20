import { fetchCMS } from '@/utils/fetchers'
import { notFound } from 'next/navigation'
import RenderPage from '../components/render-page'

export async function generateStaticParams() {
  const pages = await fetchCMS({ path: 'pages' })

  return pages.map((page: any) => ({
    slug: page.slug.split('/'),
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  let page

  try {
    const path = `pages/${slug.join('/')}`
    page = await fetchCMS({ path })
  } catch (error) {
    notFound()
  }

  return <RenderPage body={page.body} />
}
