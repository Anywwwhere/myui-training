import { fetchCMS } from '@/utils/fetchers'

export default async function Header() {
  const header = await fetchCMS({ path: 'header', tags: ['header'] })

  return <header className="border border-red-500 p-5">{JSON.stringify(header)}</header>
}
