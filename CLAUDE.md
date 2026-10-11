# 절세가인 프로젝트 — Claude 작업 규칙

## 디자인 최우선 규칙

**모든 UI/디자인 작업은 반드시 `design.md`를 먼저 읽고 따른다.**

- 컴포넌트 신규 작성, 기존 수정, 스타일 변경 전 `design.md` 확인 필수
- 컬러는 `design.md` § 2의 토큰만 사용 (임의 색상 추가 금지)
- 타이포그래피는 `design.md` § 3 규칙 준수
- 이미지 자산 URL은 `design.md` § 4에 정의된 것만 사용
- 레이아웃은 `design.md` § 7 규칙 준수
- `design.md`와 충돌하는 디자인 요청이 오면 `design.md` 기준으로 구현하고 차이점을 사용자에게 알린다

## 기술 스택

- Framework: Next.js 16 (App Router) — **`node_modules/next/dist/docs/`의 문서를 항상 먼저 확인**
- Language: TypeScript
- Styling: Tailwind CSS v4 + shadcn/ui
- Auth: Supabase Auth (Google + Kakao OAuth)
- Content: MDX 파일 (`src/data/tips/`)
- DB: Supabase (PostgreSQL)
- Package Manager: pnpm

## Next.js 16 주요 Breaking Changes

- `middleware.ts` → `proxy.ts` (export 이름도 `proxy`)
- `params`, `searchParams`, `cookies()`, `headers()` 모두 **async** (await 필수)
- Page 타입: `PageProps<'/path/[slug]'>`, Layout 타입: `LayoutProps<'/path'>`
- `revalidateTag(tag, cacheLife)` — 두 번째 인수 필수
- `new Date()` 프리렌더링 중 사용 불가 → 정적 값이나 `'use client'` 사용

## 파일 구조

```
src/
├── app/           # Next.js App Router 페이지
├── components/
│   ├── layout/    # Header, Footer
│   ├── tips/      # TipCard 등
│   └── ui/        # shadcn 컴포넌트
├── data/tips/     # MDX 절세 팁 콘텐츠
├── lib/           # supabase/, tips.ts, tip-matcher.ts
├── types/         # 공유 TypeScript 타입
└── proxy.ts       # 인증 가드 (Next.js 16 proxy)
```
