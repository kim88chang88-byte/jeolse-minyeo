'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function LoginPage() {
  const supabase = createClient()

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  const signInWithKakao = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="text-4xl mb-2">✨</div>
          <CardTitle className="text-2xl">절세가인에 오신 것을 환영해요</CardTitle>
          <CardDescription>
            로그인하면 나에게 맞는 절세 팁을 저장하고 관리할 수 있어요.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Button
            onClick={signInWithGoogle}
            variant="outline"
            className="w-full gap-3 h-12"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                fill="#4285F4"
              />
              <path
                d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                fill="#34A853"
              />
              <path
                d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                fill="#FBBC05"
              />
              <path
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                fill="#EA4335"
              />
            </svg>
            Google로 시작하기
          </Button>

          <Button
            onClick={signInWithKakao}
            className="w-full gap-3 h-12 bg-[#FEE500] hover:bg-[#FDD800] text-[#191919]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 1C4.582 1 1 3.806 1 7.25c0 2.184 1.379 4.108 3.469 5.26L3.5 16.5l4.156-2.74A9.905 9.905 0 009 13.5c4.418 0 8-2.806 8-6.25S13.418 1 9 1z"
                fill="#191919"
              />
            </svg>
            카카오로 시작하기
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-2">
            로그인하면{' '}
            <span className="underline cursor-pointer">이용약관</span> 및{' '}
            <span className="underline cursor-pointer">개인정보처리방침</span>에
            동의하게 됩니다.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
