import { getAllTips } from '@/lib/tips'
import { TipCard } from '@/components/tips/TipCard'

export default function TipsPage() {
  const tips = getAllTips()

  return (
    <div className="min-h-screen bg-[#F9F9FF]">
      {/* 페이지 헤더 */}
      <div className="bg-slate-950 border-b border-amber-500/10 py-14 px-4">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs text-amber-600 font-semibold tracking-widest uppercase mb-3">Tips Archive</p>
          <h1 className="text-4xl font-serif font-bold text-slate-100 mb-2">절세 팁 모음</h1>
          <p className="text-slate-500 text-sm">전체 {tips.length}개의 검증된 절세 전략</p>
        </div>
      </div>

      {/* 팁 그리드 */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <TipCard key={tip.slug} tip={tip} />
          ))}
        </div>
      </div>
    </div>
  )
}
