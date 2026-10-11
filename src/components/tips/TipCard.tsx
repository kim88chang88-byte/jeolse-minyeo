import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Tip } from '@/types'

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

export function TipCard({ tip }: { tip: Tip }) {
  const diff = DIFFICULTY_LABEL[tip.difficulty]

  return (
    <Link href={`/tips/${tip.slug}`}>
      <Card className="h-full hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer border-2 hover:border-amber-200">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs">
              {CATEGORY_LABEL[tip.category]}
            </Badge>
            <Badge variant="outline" className={`text-xs ${diff.className}`}>
              {diff.label}
            </Badge>
          </div>
          <CardTitle className="text-base leading-snug line-clamp-2">{tip.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{tip.summary}</p>
          {tip.savingAmount && (
            <p className="text-sm font-semibold text-amber-600">💰 {tip.savingAmount}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
