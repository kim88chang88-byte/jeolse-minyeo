import Link from 'next/link'

const CATEGORIES = [
  { href: '/tips?category=year-end-tax', label: '연말정산' },
  { href: '/tips?category=financial-products', label: '금융상품(ISA·IRP)' },
  { href: '/tips?category=real-estate', label: '부동산' },
  { href: '/tips?category=freelancer-business', label: '사업자·프리랜서' },
  { href: '/tips?category=consumption', label: '소비절세' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-xl font-bold text-amber-500">절세가인</p>
          <p className="mt-2 text-sm text-muted-foreground">
            세금, 어렵지 않아요.
            <br />
            나에게 딱 맞는 절세 꿀팁을 만나보세요.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3">절세 카테고리</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {CATEGORIES.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-amber-500 transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">바로가기</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/calculator" className="hover:text-amber-500 transition-colors">
                절세 효과 계산기
              </Link>
            </li>
            <li>
              <Link href="/calendar" className="hover:text-amber-500 transition-colors">
                세금 신고 일정
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-amber-500 transition-colors">
                맞춤 절세 진단
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © 2026 절세가인. 본 서비스는 정보 제공 목적이며 세무·법률 자문이 아닙니다.
      </div>
    </footer>
  )
}
