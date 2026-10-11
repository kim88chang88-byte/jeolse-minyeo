import Link from 'next/link'

const CATEGORIES = [
  { href: '/tips?category=year-end-tax', label: '연말정산' },
  { href: '/tips?category=financial-products', label: '금융상품 (ISA·IRP)' },
  { href: '/tips?category=real-estate', label: '부동산' },
  { href: '/tips?category=freelancer-business', label: '사업자·프리랜서' },
  { href: '/tips?category=consumption', label: '소비절세' },
]

const LINKS = [
  { href: '/calculator', label: '절세 효과 계산기' },
  { href: '/calendar', label: '세금 신고 일정' },
  { href: '/quiz', label: '맞춤 절세 진단' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-amber-500/10 mt-0">
      <div className="mx-auto max-w-6xl px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 브랜드 */}
        <div>
          <p className="text-xl font-serif font-bold text-amber-400">절세가인</p>
          <p className="text-[10px] text-slate-600 tracking-widest uppercase mb-4">Atelier Jeolse · Est. 2026</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            세법의 경계를 지배하는 자만이<br />
            자본의 내일을 온전히 소유합니다.
          </p>
        </div>

        {/* 카테고리 */}
        <div>
          <p className="text-xs text-slate-600 font-semibold tracking-widest uppercase mb-4">절세 카테고리</p>
          <ul className="space-y-2.5">
            {CATEGORIES.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-sm text-slate-500 hover:text-amber-400 transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 바로가기 */}
        <div>
          <p className="text-xs text-slate-600 font-semibold tracking-widest uppercase mb-4">바로가기</p>
          <ul className="space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-slate-500 hover:text-amber-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-700">
        © 2026 절세가인. 본 서비스는 정보 제공 목적이며 세무·법률 자문이 아닙니다.
      </div>
    </footer>
  )
}
