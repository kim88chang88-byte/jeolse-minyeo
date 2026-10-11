import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllTips, getTipBySlug } from '@/lib/tips'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const DIFFICULTY_LABEL = {
  easy: { label: '쉬움', className: 'bg-green-100 text-green-700 border-green-200' },
  medium: { label: '보통', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  hard: { label: '어려움', className: 'bg-red-100 text-red-700 border-red-200' },
}

const CATEGORY_LABEL: Record<string, string> = {
  'year-end-tax': '연말정산',
  'financial-products': '금융상품',
  'real-estate': '부동산',
  'freelancer-business': '사업자·프리랜서',
  consumption: '소비절세',
}

export async function generateStaticParams() {
  const tips = getAllTips()
  return tips.map((tip) => ({ slug: tip.slug }))
}

export default async function TipDetailPage(props: PageProps<'/tips/[slug]'>) {
  const { slug } = await props.params
  const tip = getTipBySlug(slug)
  if (!tip) notFound()

  const diff = DIFFICULTY_LABEL[tip.difficulty]

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/tips">
        <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground">
          ← 팁 목록으로
        </Button>
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline">{CATEGORY_LABEL[tip.category]}</Badge>
        <Badge variant="outline" className={diff.className}>
          {diff.label}
        </Badge>
      </div>

      <h1 className="text-3xl font-bold mb-3">{tip.title}</h1>
      <p className="text-lg text-muted-foreground mb-4">{tip.summary}</p>

      {tip.savingAmount && (
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-amber-700 font-semibold mb-6">
          💰 절세 효과: {tip.savingAmount}
        </div>
      )}

      <Separator className="mb-8" />

      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <MDXRemote source={tip.content} />
      </article>

      <Separator className="mt-12 mb-8" />

      <div className="flex flex-wrap gap-2">
        {tip.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            #{tag}
          </Badge>
        ))}
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        마지막 업데이트: {tip.updatedAt}
      </div>
    </div>
  )
}
