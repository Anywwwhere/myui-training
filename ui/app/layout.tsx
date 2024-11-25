import '@/styles/tailwind.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - MYUI Training',
    default: 'MYUI Training',
  },
  description: '',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
