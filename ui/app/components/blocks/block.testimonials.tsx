import { fetchCMS } from '@/utils/fetchers'

interface HeroProps {
  __component: 'block.testimonials'
  title: string
}

export default async function Testimonials({ title, __component }: HeroProps) {
  const testimonials = await fetchCMS({ path: 'testimonials', tags: ['testimonials'] })

  return (
    <div>
      <h2>{title}</h2>
      <p>{__component}</p>
      <div>{JSON.stringify(testimonials)}</div>
    </div>
  )
}
