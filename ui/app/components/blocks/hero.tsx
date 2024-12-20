import { StrapiButtonLink, StrapiMedia } from '@/types/components'
import ButtonLink from '../elements/button-link'

interface HeroProps {
  __component: 'block.hero'
  id: number
  title: string
  subtitle: string
  tag: {
    id: number
    name: string
  }
  images: StrapiMedia[]
  button: StrapiButtonLink
}

export default function Hero({ __component, title, subtitle, tag, button }: HeroProps) {
  return (
    <div className="space-y-4">
      <div className="mb-2">{__component}</div>
      <h1>{title}</h1>
      <p>{tag.name}</p>
      <ButtonLink {...button}></ButtonLink>
    </div>
  )
}
