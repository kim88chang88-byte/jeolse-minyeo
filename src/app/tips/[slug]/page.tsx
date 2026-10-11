import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllTips, getTipBySlug } from '@/lib/tips'
import Link from 'next/link'

const DIFFICULTY_LABEL = {
  easy:   { label: '쉬움', className: 'bg-emerald-900/50 text-emerald-400 border-emerald-700/50' },
  medium: { label: '보통', className: 'bg-amber-900/40 text-amber-400 border-amber-700/50' },
  hard:   { label: '심화', className: 'bg-red-900/40 text-red-400 border-red-700/50' },
}

const CATEGORY_LABEL: Record<string, string> = {
  'year-end-tax':        '연말정산',
  'financial-products':  '금융상품',
  'real-estate':         '부동산',
  'freelancer-business': '사업자·프리랜서',
  consumption:           '소비절세',
}

export async function generateStaticParams() {
  return getAllTips().map((tip) => ({ slug: tip.slug }))
}

export default async function TipDetailPage(props: PageProps<'/tips/[slug]'>) {
  const { slug } = await props.params
  const tip = getTipBySlug(slug)
  if (!tip) notFound()

  const diff = DIFFICULTY_LABEL[tip.difficulty]

  return (
    <div className="min-h-screen bg-[#F9F9FF]">
      {/* 히어로 헤더 */}
      <div className="bg-slate-950 border-b border-amber-500/10 py-12 px-4">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/tips"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-amber-400 text-sm transition-colors mb-6"
          >
            ← 팁 목록으로
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50/10 text-amber-400 text-xs font-semibold border border-amber-500/30">
              {CATEGORY_LABEL[tip.category]}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${diff.className}`}>
              {diff.label}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 leading-snug mb-4">
            {tip.title}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">{tip.summary}</p>

          {tip.savingAmount && (
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-600/20 border border-amber-500/40 px-5 py-2.5 text-amber-400 font-semibold text-sm">
              💰 절세 효과: {tip.savingAmount}
            </div>
          )}
        </div>
      </div>

      {/* 본문 */}
      <div className="mx-auto max-w-3xl px-4 py-12">
        <article className="
          prose prose-slate max-w-none
          prose-headings:font-serif prose-headings:text-slate-900
          prose-h2:text-2xl prose-h2:border-b prose-h2:border-amber-200 prose-h2:pb-2
          prose-strong:text-amber-700
          prose-table:text-sm
          prose-th:bg-slate-900 prose-th:text-slate-100 prose-th:font-semibold
          prose-td:border-slate-200
          prose-blockquote:border-l-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:py-1 prose-blockquote:rounded-r-lg
          prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
        ">
          <MDXRemote source={tip.content} />
        </article>

        {/* 태그 */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-2">
          {tip.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-400">마지막 업데이트: {tip.updatedAt}</p>

        {/* 하단 CTA */}
        <div className="mt-14 rounded-2xl bg-slate-950 border border-amber-500/20 p-8 text-center">
          <p className="text-slate-400 text-sm mb-4">나에게 맞는 절세 팁이 더 있어요</p>
          <h3 className="text-xl font-serif font-bold text-slate-100 mb-6">
            맞춤 절세 진단으로 더 많은 팁을 확인하세요
          </h3>
          <Link href="/quiz">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-sm shadow-lg shadow-amber-900/30 transition-all">
              무료 절세 진단 →
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
