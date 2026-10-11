'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import type { User } from '@supabase/supabase-js'

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

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-amber-500">절세가인</span>
          <span className="hidden sm:inline text-xs text-muted-foreground">
            절세의 아름다움
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/tips" className="hover:text-amber-500 transition-colors">
            절세 팁
          </Link>
          <Link href="/calculator" className="hover:text-amber-500 transition-colors">
            절세 계산기
          </Link>
          <Link href="/calendar" className="hover:text-amber-500 transition-colors">
            세금 일정
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button size="sm" variant="outline">
                  내 절세 현황
                </Button>
              </Link>
              <Button size="sm" variant="ghost" onClick={handleSignOut}>
                로그아웃
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                시작하기
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
