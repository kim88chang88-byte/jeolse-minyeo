'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

const JGEmblem = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" fill="none">
    <defs>
      <linearGradient id="hdrGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="50%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="hdrEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#064e3b" />
        <stop offset="100%" stopColor="#022c22" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#hdrEmerald)" stroke="url(#hdrGold)" strokeWidth="1.5"/>
    <path d="M15 16h18M24 16v18M18 25h12M17 34h14" stroke="#fef3c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="34" cy="14" r="2.5" fill="#f59e0b" />
    <path d="M34 11v6M31 14h6" stroke="#fffbeb" strokeWidth="1" strokeLinecap="round"/>
  </svg>
)

export default function Header() {
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) =>
      setUser(session?.user ?? null)
    )
    return () => listener.subscription.unsubscribe()
  }, [supabase])

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-3 group">
          <JGEmblem />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-serif font-bold text-amber-400 tracking-wide group-hover:text-amber-300 transition-colors">
              절세가인
            </span>
            <span className="hidden sm:block text-[10px] text-slate-500 tracking-widest uppercase">
              Atelier Jeolse
            </span>
          </div>
        </Link>

        {/* 네비게이션 */}
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {[
            { href: '/tips', label: '절세 팁' },
            { href: '/calculator', label: '절세 계산기' },
            { href: '/calendar', label: '세금 일정' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-400 hover:text-amber-400 transition-colors tracking-wide"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 우측 버튼 */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/dashboard">
                <button className="px-4 py-1.5 rounded-full border border-amber-500/40 text-amber-400 text-sm hover:bg-amber-500/10 transition-all">
                  내 절세 현황
                </button>
              </Link>
              <button
                onClick={() => supabase.auth.signOut()}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-semibold shadow-lg shadow-amber-900/30 transition-all">
                시작하기
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
