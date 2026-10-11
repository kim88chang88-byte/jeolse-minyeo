import { getAllTips } from '@/lib/tips'
import { TipCard } from '@/components/tips/TipCard'

export default function TipsPage() {
  const tips = getAllTips()

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">절세 팁 모음</h1>
      <p className="text-muted-foreground mb-8">전체 {tips.length}개의 절세 팁</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tips.map((tip) => (
          <TipCard key={tip.slug} tip={tip} />
        ))}
      </div>
    </div>
  )
}
