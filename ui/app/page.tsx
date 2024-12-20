import { fetchCMS } from '@/utils/fetchers'
import RenderPage from './components/render-page'

export default async function Page() {
  const homepage = await fetchCMS({ path: 'pages/home' })

  return <RenderPage body={homepage.body} />
}
