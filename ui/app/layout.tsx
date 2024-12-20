import '@/styles/tailwind.css'
import { fetchCMS } from '@/utils/fetchers'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import type React from 'react'
import Footer from './components/core/footer'
import Header from './components/core/header'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - MYUI Training',
    default: 'MYUI Training',
  },
  description: '',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const configuration = await fetchCMS({ path: 'configuration', tags: ['configuration'] })

  const styles = {
    '--heading_1_font_size': configuration.heading_1_font_size + 'px',
    '--heading_2_font_size': configuration.heading_2_font_size + 'px',
    '--heading_3_font_size': configuration.heading_3_font_size + 'px',
    '--heading_4_font_size': configuration.heading_4_font_size + 'px',
    '--heading_5_font_size': configuration.heading_5_font_size + 'px',
    '--button_font_size': configuration.button_font_size + 'px',
    '--menu_font_size': configuration.menu_font_size + 'px',
    '--text_font_size': configuration.text_font_size + 'px',
    '--small_text_font_size': configuration.small_text_font_size + 'px',
    '--text-default-color': configuration.text_default_color.code,
    '--bg-color-button': configuration.buttons_default_background.code,
    '--text-color-button': configuration.buttons_default_text_color.code,
  } as React.CSSProperties

  return (
    <html className={poppins.className}>
      <body style={styles}>
        <main className="m-5 space-y-5">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
