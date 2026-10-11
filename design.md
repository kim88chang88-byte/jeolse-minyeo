# 절세가인 디자인 시스템

> **⚠️ 모든 UI/디자인 작업은 이 파일의 규칙을 최우선으로 따른다.**
> 컴포넌트 신규 작성, 기존 수정, 스타일 추가 시 반드시 여기 정의된 토큰·컴포넌트·톤을 사용한다.

---

## 1. 브랜드 아이덴티티

| 항목 | 값 |
|------|----|
| 서비스명 | 절세가인 (Jeolse Gain) |
| 네이밍 컨셉 | 절세(節稅, 세금 절약) + 절세가인(絶世佳人, 세상에 없는 아름다운 여인) |
| 브랜드 톤 | Vogue Korea 에디토리얼 × 프리미엄 핀테크 |
| 무드 레퍼런스 | Vogue Korea, Elle Korea, Toss, Gentle Monster, Tamburins |
| 타깃 | 전 연령 남녀, 특히 절세에 관심 있는 3040 |
| 카피라인 | "세법의 경계를 지배하는 자만이 자본의 내일을 온전히 소유합니다." |

---

## 2. 컬러 토큰

### 2.1 Primary Palette

| 토큰명 | Hex | Tailwind | 용도 |
|--------|-----|----------|------|
| `gold-primary` | `#D97706` | `amber-600` | CTA 버튼, 강조 텍스트, 아이콘 |
| `gold-deep` | `#B45309` | `amber-700` | 호버 상태, 그라디언트 중간 |
| `gold-darkest` | `#78350F` | `amber-900` | 그라디언트 끝, 텍스트 강조 |
| `gold-light` | `#FEF3C7` | `amber-100` | 뱃지 배경, 서피스 틴트 |

### 2.2 Secondary Palette

| 토큰명 | Hex | Tailwind | 용도 |
|--------|-----|----------|------|
| `emerald-hero` | `#064E3B` | `emerald-900` | 히어로 배경, 로고 배경 |
| `emerald-primary` | `#047857` | `emerald-700` | 아이콘, 성공 상태, 포인트 |
| `emerald-light` | `#D1FAE5` | `emerald-100` | 뱃지 배경, 카드 틴트 |

### 2.3 Neutral / Surface

| 토큰명 | Hex | Tailwind | 용도 |
|--------|-----|----------|------|
| `surface-ivory` | `#F9F9FF` | — | 페이지 배경 |
| `surface-dim` | `#D3DAEF` | — | 구분선, 비활성 배경 |
| `text-primary` | `#1A1A2E` | `slate-900` | 본문 텍스트 |
| `text-secondary` | `#64748B` | `slate-500` | 서브 텍스트, 설명 |
| `text-muted` | `#94A3B8` | `slate-400` | Placeholder, 비활성 |
| `dark-bg` | `#0F172A` | `slate-950` | 다크 섹션 배경 |

### 2.4 Tailwind CSS 커스텀 토큰 (globals.css 적용)

```css
:root {
  --color-gold-primary:  #D97706;
  --color-gold-deep:     #B45309;
  --color-gold-light:    #FEF3C7;
  --color-emerald-hero:  #064E3B;
  --color-surface-ivory: #F9F9FF;
  --color-surface-dim:   #D3DAEF;
  --color-text-primary:  #1A1A2E;
}
```

---

## 3. 타이포그래피

| 역할 | 폰트 | Tailwind 클래스 | 비고 |
|------|------|-----------------|------|
| 헤드라인 | Noto Serif KR / Playfair Display | `font-serif` | 권위, 우아함 |
| 본문 | Pretendard / Inter | `font-sans` | 가독성 |
| 모노/수치 | Geist Mono | `font-mono` | 세금 수치, 코드 |
| 에디토리얼 인용구 | Noto Serif KR | `font-serif italic` | 히어로 블록쿼트 |

### 폰트 스케일 규칙

| 용도 | 크기 | 굵기 |
|------|------|------|
| 히어로 메인 헤드 | `text-5xl` ~ `text-7xl` | `font-extrabold` |
| 섹션 제목 | `text-3xl` ~ `text-4xl` | `font-bold` |
| 카드 제목 | `text-lg` ~ `text-xl` | `font-semibold` |
| 본문 | `text-base` | `font-normal` |
| 캡션 / 뱃지 | `text-xs` ~ `text-sm` | `font-medium` |

---

## 4. 이미지 자산

### 4.1 브랜드 앰버서더 에디토리얼 포트레이트

- **용도**: 메인 히어로 섹션 (전면 배치)
- **URL**:
  ```
  https://lh3.googleusercontent.com/aida/AEtjO1XHgU_A5mDYy-tCkdb-g9-egJ8M1JxP1bl2jhKqEgzcEirPLUQBPM0LawPJ0jJDmKgsBjdb0ugeFtZXpaElIzl7i2MSTzEYT1-IZA_s3gHMMW42hb_hk0gdfzbSGA-gMQpaD6rtnlnDjPax265B2tM5uqcZDb_JS7cmsLcyx8qHCfRDH8QDpLEUPU3RVHgGFcSlUOjZ7yZ73aZ7yEORUxjLf11193wpi8DA5MmnLWM0BvVHoscXGF7b7DY
  ```
- **규격**: 1200 × 896 (4:3), WebP/PNG
- **스타일링 규칙**:
  - `object-cover object-center` 적용
  - 상단→하단 다크 그라디언트 오버레이 필수 (`from-slate-950 via-slate-950/40 to-transparent`)
  - 에메랄드 오버레이 믹스블렌드 적용 (`bg-emerald-950/10 mix-blend-overlay`)
  - 호버 시 `scale-105` 줌 트랜지션 (`duration-700 ease-out`)
- **Next.js Image 컴포넌트**:
  ```tsx
  <Image
    src="https://lh3.googleusercontent.com/aida/AEtjO1XHgU_A5mDYy-tCkdb-g9-egJ8M1JxP1bl2jhKqEgzcEirPLUQBPM0LawPJ0jJDmKgsBjdb0ugeFtZXpaElIzl7i2MSTzEYT1-IZA_s3gHMMW42hb_hk0gdfzbSGA-gMQpaD6rtnlnDjPax265B2tM5uqcZDb_JS7cmsLcyx8qHCfRDH8QDpLEUPU3RVHgGFcSlUOjZ7yZ73aZ7yEORUxjLf11193wpi8DA5MmnLWM0BvVHoscXGF7b7DY"
    alt="절세가인 브랜드 앰버서더"
    fill
    priority
    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
  />
  ```

### 4.2 정회윤 수석 파트너 세무사 프로필

- **용도**: 전담 세무사 매칭 카드, 예약 모달
- **URL**:
  ```
  https://lh3.googleusercontent.com/aida-public/AB6AXuDSsd_rPAc-2UTHgDhqca0Z3ELJF0q9IVHcZg36Am_G_BnpWPRsFrXY40HKKanUGBY4-NpSsm1C7xtFdvqeXUgxqvpldu2VwHesHzSsNXEQ8ar7oemWbf-hSiz1gFQnCdeMcz2VkJQdPrJTOkHR9ehRSw61IhJ7i5r_ug8d2oa1f8qQwDuRC910X5AxdLGH2YDQBrfieuplt1WbxmrLAelJe9bezW-E2hIAR_0of8GACiZDDgFhXpLkAQ
  ```
- **규격**: 800 × 800 (1:1 원형 크롭)
- **스타일링 규칙**:
  - `rounded-full ring-2 ring-amber-500/20` 적용
  - 크기: `w-14 h-14` (카드 내) / `w-20 h-20` (모달 내)

---

## 5. 로고 & 엠블럼

### SVG 엠블럼 소스

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" fill="none">
  <defs>
    <linearGradient id="jgGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="50%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>
    <linearGradient id="jgEmeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#jgEmeraldGradient)" stroke="url(#jgGoldGradient)" stroke-width="1.5"/>
  <path d="M15 16h18M24 16v18M18 25h12M17 34h14" stroke="#fef3c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="34" cy="14" r="2.5" fill="#f59e0b" />
  <path d="M34 11v6M31 14h6" stroke="#fffbeb" stroke-width="1" stroke-linecap="round"/>
</svg>
```

### 워드마크 규칙

- 로고 텍스트: `font-serif font-bold text-amber-600`
- 배경 다크일 때: `text-amber-400`
- 서브 태그라인: `text-xs text-slate-400 tracking-wide`

---

## 6. 컴포넌트 패턴

### 6.1 히어로 앰버서더 카드

```html
<div class="relative w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-amber-500/20 group">
  <div class="relative aspect-[4/3] w-full overflow-hidden">
    <!-- 앰버서더 이미지 (4.1 규격) -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
    <div class="absolute inset-0 bg-emerald-950/10 mix-blend-overlay z-10"></div>
  </div>
  <!-- 상단 뱃지 -->
  <div class="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide shadow-lg z-20">
    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
    전 서울국세청 조사국 파트너 상주
  </div>
  <!-- 하단 인용구 -->
  <div class="absolute bottom-0 inset-x-0 p-6 z-20">
    <div class="flex items-center justify-between text-xs tracking-widest text-amber-400/90 font-mono uppercase mb-2">
      <span>Architect's Creed</span>
      <span>Atelier Jeolse</span>
    </div>
    <blockquote class="text-lg font-serif text-slate-100 font-medium leading-snug">
      "세법의 경계를 지배하는 자만이 자본의 내일을 온전히 소유합니다."
    </blockquote>
    <p class="text-xs text-slate-400 mt-1">
      정회윤 수석 세무사 | 전 서울지방국세청 조사1국·자본거래관리과
    </p>
  </div>
</div>
```

### 6.2 전담 세무사 매칭 프로필 카드

```html
<div class="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
  <div class="relative w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-amber-500/20">
    <!-- 세무사 이미지 (4.2 규격) -->
  </div>
  <div class="flex flex-col min-w-0">
    <div class="flex items-center gap-2">
      <h4 class="font-serif font-bold text-slate-900 text-base">정회윤 수석 세무사</h4>
      <span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-semibold border border-amber-200/60">전담 매칭</span>
    </div>
    <p class="text-xs text-slate-500 mt-0.5">전 서울지방국세청 자본거래관리과 · 조사1국 역임</p>
    <p class="text-xs text-emerald-600 font-semibold mt-1">누적 절세액 318억 원+</p>
  </div>
</div>
```

### 6.3 CTA 버튼

```html
<!-- Primary CTA -->
<button class="px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-base shadow-lg shadow-amber-900/20 transition-all duration-200">
  무료 절세 진단
</button>

<!-- Secondary CTA -->
<button class="px-8 py-3 rounded-full border-2 border-amber-600 text-amber-700 font-semibold text-base hover:bg-amber-50 transition-all duration-200">
  절세 팁 둘러보기
</button>
```

### 6.4 뱃지

```html
<!-- 상태 뱃지 (그린) -->
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
  라이브
</span>

<!-- 강조 뱃지 (골드) -->
<span class="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
  추천
</span>
```

### 6.5 스탯 타일

```html
<div class="rounded-2xl border bg-white/70 backdrop-blur p-5 text-center shadow-sm border-amber-100">
  <p class="text-2xl font-bold text-amber-600 font-serif">최대 148만원</p>
  <p class="text-sm text-slate-500 mt-1">IRP + 연금저축 세액공제</p>
</div>
```

---

## 7. 레이아웃 규칙

| 규칙 | 값 |
|------|----|
| 최대 너비 | `max-w-6xl` (1152px) |
| 좌우 패딩 | `px-4` (모바일) / `px-6` (태블릿+) |
| 섹션 간격 | `py-20` ~ `py-24` |
| 카드 모서리 | `rounded-2xl` (일반) / `rounded-3xl` (히어로·프리미엄) |
| 그림자 | `shadow-sm` (카드) / `shadow-2xl` (히어로) |

### 히어로 레이아웃

- 데스크톱: **좌우 스플릿** (이미지 왼쪽 / 텍스트 오른쪽) `grid grid-cols-2`
- 모바일: **이미지 상단 / 텍스트 하단** `flex flex-col`
- 이미지 비율: `aspect-[4/3]`

---

## 8. 다크 섹션 규칙

히어로, CTA 배너, 푸터 등 다크 배경 사용 시:

- 배경: `bg-slate-950` 또는 에메랄드 그라디언트 (`from-emerald-950 to-slate-950`)
- 텍스트: `text-slate-100` (본문) / `text-amber-400` (강조)
- 보조 텍스트: `text-slate-400`
- 테두리: `border-amber-500/20` (골드 반투명)

---

## 9. 애니메이션 & 인터랙션

| 상황 | 클래스 |
|------|--------|
| 카드 호버 | `hover:-translate-y-1 hover:shadow-lg transition-all duration-200` |
| 이미지 호버 줌 | `group-hover:scale-105 transition-transform duration-700 ease-out` |
| 라이브 뱃지 | `animate-pulse` |
| 버튼 호버 | `transition-all duration-200` |

---

## 10. Next.js 설정 필수사항

외부 이미지(lh3.googleusercontent.com) 사용을 위해 `next.config.ts`에 도메인 허용 필수:

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
}
```
