import Services from './blocks/block.services'
import Testimonials from './blocks/block.testimonials'
import CtaBanner from './blocks/cta-banner'
import FaqList from './blocks/faq-list'
import Hero from './blocks/hero'
import InformationCards from './blocks/information-cards'

interface StrapiPageAttributesExtended {
  body: any
}

export default function RenderPage({ body }: StrapiPageAttributesExtended) {
  function ComponentsList(data: any): { [key: string]: JSX.Element } {
    return {
      'block.hero': <Hero {...data} />,
      'block.information-cards': <InformationCards {...data} />,
      'block.services': <Services {...data} />,
      'block.cta-banner': <CtaBanner {...data} />,
      'block.testimonials': <Testimonials {...data} />,
      'block.faq-list': <FaqList {...data} />,
    }
  }

  return (
    <div className="space-y-5 border border-green-500 p-5">
      {body
        ?.filter((c: any) => c.__component.split('.')[0] !== 'header')
        .map((c: any, index: number) => (
          <div key={index} className="border border-slate-500 p-5">
            {ComponentsList(c)[c.__component]}
          </div>
        ))}
    </div>
  )
}
