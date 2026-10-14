import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '절세가인 — 나에게 딱 맞는 절세 꿀팁',
  description:
    '절세가인과 함께 쉽고 재미있게 세금을 줄이세요. 나이, 직업, 수입에 맞는 맞춤형 절세 팁을 전수해드립니다.',
  keywords: ['절세', '세금', '연말정산', 'IRP', 'ISA', '세금환급', '절세팁'],
  openGraph: {
    title: '절세가인 — 나에게 딱 맞는 절세 꿀팁',
    description: '절세가인과 함께 쉽고 재미있게 세금을 줄이세요.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
