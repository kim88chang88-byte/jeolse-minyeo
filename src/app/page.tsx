import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CATEGORIES = [
  {
    icon: '📋',
    title: '연말정산',
    desc: '인적공제부터 신용카드까지, 놓치면 손해인 공제 항목 총정리',
    href: '/tips?category=year-end-tax',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    icon: '💰',
    title: '금융상품',
    desc: 'ISA·IRP·연금저축으로 합법적으로 세금 돌려받기',
    href: '/tips?category=financial-products',
    color: 'bg-green-50 border-green-200',
  },
  {
    icon: '🏡',
    title: '부동산',
    desc: '취득세 감면부터 양도소득세 절세까지 부동산 세금 완전 정복',
    href: '/tips?category=real-estate',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    icon: '💼',
    title: '사업자·프리랜서',
    desc: '합법적 경비 처리부터 종합소득세 신고까지 N잡러 필독',
    href: '/tips?category=freelancer-business',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    icon: '🛍️',
    title: '소비절세',
    desc: '신용카드·체크카드·현금영수증 황금 비율로 공제 최대화',
    href: '/tips?category=consumption',
    color: 'bg-pink-50 border-pink-200',
  },
]

const STATS = [
  { value: '최대 연 148만원', label: '연금저축 + IRP 세액공제' },
  { value: '최대 200만원', label: 'ISA 비과세 한도' },
  { value: '25%', label: '신용카드 소득공제율 초과분' },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: '3분 진단',
    desc: '나이, 직업, 수입 등 5가지 질문에 답하면 프로필이 완성돼요.',
  },
  {
    step: '02',
    title: '맞춤 팁 추천',
    desc: '내 상황에 딱 맞는 절세 팁을 쏙쏙 뽑아서 보여드려요.',
  },
  {
    step: '03',
    title: '절세 실천',
    desc: '쉬운 설명과 단계별 가이드로 바로 실천할 수 있어요.',
  },
]

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-background to-green-50 py-24 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
            🌟 무료 맞춤 절세 진단
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-amber-500">절세미녀</span>가<br />
            세금 걱정 덜어드려요
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            복잡한 세금, 이제 나에게 맞는 꿀팁만 골라보세요.
            <br />
            3분 진단으로 <strong>나만의 절세 플랜</strong>을 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white text-base px-8"
              >
                무료 절세 진단 시작하기 →
              </Button>
            </Link>
            <Link href="/tips">
              <Button size="lg" variant="outline" className="text-base px-8">
                절세 팁 둘러보기
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating stats */}
        <div className="mx-auto max-w-4xl mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border bg-white/70 backdrop-blur p-4 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-amber-600">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            이렇게 사용해요
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="text-center px-4">
                <div className="text-5xl font-black text-amber-200 mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            절세 카테고리
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            내 상황에 맞는 카테고리를 선택하거나, 맞춤 진단을 받아보세요.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link key={cat.title} href={cat.href}>
                <Card
                  className={`h-full border-2 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer ${cat.color}`}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <span className="text-2xl">{cat.icon}</span>
                      {cat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 절세 시작하세요
          </h2>
          <p className="mb-8 text-amber-100 text-lg">
            3분 진단으로 내게 맞는 절세 팁을 무료로 받아보세요.
          </p>
          <Link href="/quiz">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-amber-50 font-semibold text-base px-10"
            >
              무료 절세 진단 시작하기 →
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
