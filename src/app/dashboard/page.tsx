import type { Metadata } from 'next'
import DashboardClient from './DashboardClient'
import { getAllTips } from '@/lib/tips'
import type { Tip } from '@/types'

export const metadata: Metadata = {
  title: '나의 절세 대시보드 — 절세미녀',
}

export default function DashboardPage() {
  const allTips: Tip[] = getAllTips()
  return <DashboardClient allTips={allTips} />
}
