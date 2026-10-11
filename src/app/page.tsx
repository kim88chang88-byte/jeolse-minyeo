import Link from 'next/link'
import Image from 'next/image'

const AMBASSADOR_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1XHgU_A5mDYy-tCkdb-g9-egJ8M1JxP1bl2jhKqEgzcEirPLUQBPM0LawPJ0jJDmKgsBjdb0ugeFtZXpaElIzl7i2MSTzEYT1-IZA_s3gHMMW42hb_hk0gdfzbSGA-gMQpaD6rtnlnDjPax265B2tM5uqcZDb_JS7cmsLcyx8qHCfRDH8QDpLEUPU3RVHgGFcSlUOjZ7yZ73aZ7yEORUxjLf11193wpi8DA5MmnLWM0BvVHoscXGF7b7DY'

const STATS = [
  { value: '최대 148만원', label: 'IRP + 연금저축 세액공제' },
  { value: '비과세 200만원', label: 'ISA 운용 수익 면세' },
  { value: '318억원+', label: '파트너 세무사 누적 절세액' },
]

const CATEGORIES = [
  { icon: '📋', title: '연말정산', desc: '인적공제부터 신용카드까지 공제 항목 총정리', href: '/tips?category=year-end-tax' },
  { icon: '💰', title: '금융상품', desc: 'ISA·IRP·연금저축으로 합법적 세금 환급', href: '/tips?category=financial-products' },
  { icon: '🏡', title: '부동산', desc: '장기보유특별공제·양도세 절세 완전 정복', href: '/tips?category=real-estate' },
  { icon: '💼', title: '사업자·프리랜서', desc: '경비 처리부터 법인 전환까지 N잡러 필독', href: '/tips?category=freelancer-business' },
  { icon: '💳', title: '소비절세', desc: '신용카드·체크카드 황금 비율로 공제 극대화', href: '/tips?category=consumption' },
]

const HOW_IT_WORKS = [
  { step: '01', title: '3분 진단', desc: '5가지 질문으로 나만의 절세 프로필을 완성해요.' },
  { step: '02', title: '맞춤 전략', desc: '프로필에 딱 맞는 절세 팁만 선별해 보여드려요.' },
  { step: '03', title: '즉시 실천', desc: '단계별 가이드로 오늘 바로 실천할 수 있어요.' },
]

export default function LandingPage() {
  return (
    <>
      {/* ── HERO: 스플릿 레이아웃 ── */}
      <section className="relative min-h-[90vh] bg-slate-950 overflow-hidden flex items-center">
        {/* 배경 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-slate-950 to-slate-950 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* 텍스트 영역 */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              전 서울국세청 조사국 파트너 상주
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-extrabold text-slate-100 leading-[1.1] mb-6">
              세금 아는 여자가<br />
              <span className="text-amber-400">아름답다</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md">
              복잡한 세법, 이제 나에게 맞는 전략만 골라보세요.
              <br />
              3분 진단으로 <span className="text-slate-200 font-medium">나만의 절세 플랜</span>을 시작하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quiz">
                <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-base shadow-lg shadow-amber-900/30 transition-all duration-200">
                  무료 절세 진단 시작하기 →
                </button>
              </Link>
              <Link href="/tips">
                <button className="px-8 py-3.5 rounded-full border-2 border-amber-600/50 text-amber-400 font-semibold text-base hover:bg-amber-500/10 transition-all duration-200">
                  절세 팁 둘러보기
                </button>
              </Link>
            </div>

            {/* 인용구 */}
            <blockquote className="mt-12 pl-4 border-l-2 border-amber-600/40">
              <p className="text-sm font-serif italic text-slate-500 leading-relaxed">
                "세법의 경계를 지배하는 자만이<br />자본의 내일을 온전히 소유합니다."
              </p>
              <footer className="text-xs text-slate-600 mt-2">
                정회윤 수석 세무사 — 전 서울지방국세청 자본거래관리과
              </footer>
            </blockquote>
          </div>

          {/* 앰버서더 이미지 카드 */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 group">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={AMBASSADOR_URL}
                alt="절세가인 브랜드 앰버서더"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute inset-0 bg-emerald-950/10 mix-blend-overlay" />
            </div>
            {/* 카드 하단 오버레이 */}
            <div className="absolute bottom-0 inset-x-0 p-5">
              <div className="flex items-center justify-between text-[10px] tracking-widest text-amber-400/80 font-mono uppercase mb-1.5">
                <span>Architect's Creed</span>
                <span>Atelier Jeolse</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-12 px-4">
        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-serif font-bold text-white">{s.value}</p>
              <p className="text-sm text-amber-100 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-4 bg-[#F9F9FF]">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs text-amber-600 font-semibold tracking-widest uppercase text-center mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-16">
            이렇게 사용해요
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="text-center px-4">
                <div className="text-6xl font-black text-amber-200/60 font-serif mb-4">{item.step}</div>
                <h3 className="text-xl font-serif font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs text-amber-600 font-semibold tracking-widest uppercase text-center mb-3">Categories</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-4">
            절세 카테고리
          </h2>
          <p className="text-center text-slate-500 mb-14 text-sm">
            내 상황에 맞는 카테고리를 선택하거나, 맞춤 진단을 받아보세요.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link key={cat.title} href={cat.href}>
                <div className="h-full rounded-2xl border-2 border-slate-100 bg-white hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer p-6 group">
                  <div className="text-3xl mb-4">{cat.icon}</div>
                  <h3 className="font-serif font-semibold text-slate-900 text-lg mb-2 group-hover:text-amber-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-500">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 배너 ── */}
      <section className="py-28 px-4 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="text-xs text-emerald-400 font-semibold tracking-widest uppercase mb-4">지금 바로 시작하세요</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            절세가인과 함께<br />
            <span className="text-amber-400">당신의 세금을 되찾으세요</span>
          </h2>
          <p className="mb-10 text-slate-400 text-lg">
            3분 진단으로 내게 맞는 절세 플랜을 무료로 받아보세요.
          </p>
          <Link href="/quiz">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-lg shadow-2xl shadow-amber-900/40 transition-all duration-200">
              무료 절세 진단 시작하기 →
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
