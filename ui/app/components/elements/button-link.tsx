import { StrapiButtonLink } from '@/types/components'
import Link from 'next/link'

export default function ButtonLink(props: StrapiButtonLink) {
  if (!props) return null

  const styles = {
    '--bg-color-button': props.background_color?.code,
    '--text-color-button': props.text_color?.code,
  } as React.CSSProperties

  return (
    <Link
      href={props.page.slug}
      className="btn inline-flex transform rounded-md border border-default-color bg-default-color p-2.5 text-default-font duration-500 ease-out hover:bg-default-font hover:text-default-color"
      style={styles}
    >
      {props.name}
    </Link>
  )
}
