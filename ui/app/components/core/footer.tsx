import { fetchCMS } from '@/utils/fetchers'

export default async function Footer() {
  const footer = await fetchCMS({ path: 'footer', tags: ['footer'] })

  return <footer className="border border-blue-500 p-5">{JSON.stringify(footer)}</footer>
}
