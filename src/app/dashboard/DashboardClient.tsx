'use client'

import { useEffect, useState } from 'react'
import { matchTips } from '@/lib/tip-matcher'
import { TipCard } from '@/components/tips/TipCard'
import type { UserProfile, Tip } from '@/types'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const PROFILE_LABELS: Record<string, Record<string, string>> = {
  ageGroup: { '20s': '20대', '30s': '30대', '40s': '40대', '50s+': '50대 이상' },
  jobType: {
    employee: '직장인',
    freelancer: '프리랜서·N잡러',
    'business-owner': '사업자',
    'student-homemaker': '학생·주부',
  },
  incomeRange: {
    'under-30m': '3천만원 이하',
    '30m-50m': '3~5천만원',
    '50m-100m': '5천~1억',
    'over-100m': '1억 이상',
  },
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">절세 진단을 먼저 완료해주세요.</p>
        <Link href="/quiz">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">
            절세 진단 시작하기
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Profile summary */}
      <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 mb-10">
        <h1 className="text-2xl font-bold mb-2">나의 맞춤 절세 팁</h1>
        <div className="flex flex-wrap gap-2 text-sm">
          {(['ageGroup', 'jobType', 'incomeRange'] as const).map((key) => (
            <span
              key={key}
              className="rounded-full bg-white border border-amber-200 px-3 py-1 text-amber-700"
            >
              {PROFILE_LABELS[key][profile[key]]}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          총 <strong className="text-amber-600">{tips.length}개</strong>의 팁을 추천드려요
        </p>
        <Link href="/quiz" className="text-xs text-muted-foreground hover:text-amber-600 mt-1 inline-block">
          프로필 다시 설정하기 →
        </Link>
      </div>

      {/* Tips grid */}
      {tips.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <TipCard key={tip.slug} tip={tip} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-20">
          조건에 맞는 팁이 없어요. 프로필을 다시 설정해보세요.
        </p>
      )}
    </div>
  )
}
