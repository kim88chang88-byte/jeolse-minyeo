'use client'

import { useEffect, useState } from 'react'
import { matchTips } from '@/lib/tip-matcher'
import { TipCard } from '@/components/tips/TipCard'
import type { UserProfile, Tip } from '@/types'
import Link from 'next/link'

const PROFILE_LABELS: Record<string, Record<string, string>> = {
  ageGroup: { '20s': '20대', '30s': '30대', '40s': '40대', '50s+': '50대 이상' },
  jobType: { employee: '직장인', freelancer: '프리랜서·N잡러', 'business-owner': '사업자', 'student-homemaker': '학생·주부' },
  incomeRange: { 'under-30m': '3천만원 이하', '30m-50m': '3~5천만원', '50m-100m': '5천~1억', 'over-100m': '1억 이상' },
}

export default function DashboardClient({ allTips }: { allTips: Tip[] }) {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [tips, setTips] = useState<Tip[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('jeolsegain_profile')
    if (stored) {
      const p = JSON.parse(stored) as UserProfile
      setProfile(p)
      setTips(matchTips(allTips, p))
    }
  }, [allTips])

  if (!profile) {
    return (
      <div className="min-h-[70vh] bg-slate-950 flex flex-col items-center justify-center gap-6 px-4">
        <p className="text-slate-500 text-lg font-serif">절세 진단을 먼저 완료해주세요.</p>
        <Link href="/quiz">
          <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold shadow-lg shadow-amber-900/30 transition-all">
            절세 진단 시작하기 →
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F9F9FF]">
      {/* 대시보드 헤더 배너 */}
      <div className="bg-slate-950 border-b border-amber-500/10 py-10 px-4">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs text-amber-600 font-semibold tracking-widest uppercase mb-3">My Dashboard</p>
          <h1 className="text-3xl font-serif font-bold text-slate-100 mb-4">나의 맞춤 절세 전략</h1>

          {/* 프로필 태그 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(['ageGroup', 'jobType', 'incomeRange'] as const).map((key) => (
              <span
                key={key}
                className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-sm font-medium"
              >
                {PROFILE_LABELS[key][profile[key]]}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-sm">
              총 <span className="text-amber-400 font-semibold">{tips.length}개</span>의 절세 팁을 추천드려요
            </p>
            <Link href="/quiz" className="text-xs text-slate-600 hover:text-amber-400 transition-colors">
              프로필 다시 설정하기 →
            </Link>
          </div>
        </div>
      </div>

      {/* 팁 그리드 */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        {tips.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((tip) => (
              <TipCard key={tip.slug} tip={tip} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 py-24 font-serif text-lg">
            조건에 맞는 팁이 없어요. 프로필을 다시 설정해보세요.
          </p>
        )}
      </div>
    </div>
  )
}
