import { getEvents } from '@/data'
import type React from 'react'
import { ApplicationLayout } from './application-layout'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let events = await getEvents()

  return <ApplicationLayout events={events}>{children}</ApplicationLayout>
}
