import Link from 'next/link'
import type { Tip } from '@/types'

const DIFFICULTY_LABEL = {
  easy:   { label: '쉬움',   className: 'bg-emerald-900/50 text-emerald-400 border-emerald-700/50' },
  medium: { label: '보통',   className: 'bg-amber-900/40 text-amber-400 border-amber-700/50' },
  hard:   { label: '심화',   className: 'bg-red-900/40 text-red-400 border-red-700/50' },
}

const CATEGORY_LABEL: Record<string, string> = {
  'year-end-tax':        '연말정산',
  'financial-products':  '금융상품',
  'real-estate':         '부동산',
  'freelancer-business': '사업자·프리랜서',
  consumption:           '소비절세',
}

export function TipCard({ tip }: { tip: Tip }) {
  const diff = DIFFICULTY_LABEL[tip.difficulty]

  return (
    <Link href={`/tips/${tip.slug}`}>
      <div className="h-full rounded-2xl border border-slate-200 bg-white hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group overflow-hidden">
        {/* 상단 골드 라인 */}
        <div className="h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="p-6">
          {/* 뱃지 */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-semibold border border-amber-200">
              {CATEGORY_LABEL[tip.category]}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${diff.className}`}>
              {diff.label}
            </span>
          </div>

          {/* 제목 */}
          <h3 className="font-serif font-semibold text-slate-900 text-base leading-snug mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
            {tip.title}
          </h3>

          {/* 요약 */}
          <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">{tip.summary}</p>

          {/* 절세 효과 */}
          {tip.savingAmount && (
            <p className="text-sm font-semibold text-amber-600">
              💰 {tip.savingAmount}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
