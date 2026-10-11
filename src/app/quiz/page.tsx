'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Progress } from '@/components/ui/progress'
import { createClient } from '@/lib/supabase/client'
import type { AgeGroup, JobType, FamilyStatus, IncomeRange, Interest, UserProfile } from '@/types'

type QuizStep = 1 | 2 | 3 | 4 | 5

interface StepOption<T> { value: T; label: string; emoji: string }

const AGE_OPTIONS: StepOption<AgeGroup>[] = [
  { value: '20s', label: '20대', emoji: '🌱' },
  { value: '30s', label: '30대', emoji: '🚀' },
  { value: '40s', label: '40대', emoji: '💪' },
  { value: '50s+', label: '50대 이상', emoji: '🌟' },
]
const JOB_OPTIONS: StepOption<JobType>[] = [
  { value: 'employee', label: '직장인', emoji: '💼' },
  { value: 'freelancer', label: '프리랜서·N잡러', emoji: '💻' },
  { value: 'business-owner', label: '사업자', emoji: '🏢' },
  { value: 'student-homemaker', label: '학생·주부', emoji: '📚' },
]
const FAMILY_OPTIONS: StepOption<FamilyStatus>[] = [
  { value: 'single', label: '1인 가구', emoji: '🙋' },
  { value: 'married-no-kids', label: '기혼 (자녀 없음)', emoji: '👫' },
  { value: 'married-with-kids', label: '기혼 (자녀 있음)', emoji: '👨‍👩‍👧' },
]
const INCOME_OPTIONS: StepOption<IncomeRange>[] = [
  { value: 'under-30m', label: '3천만원 이하', emoji: '🌿' },
  { value: '30m-50m', label: '3천~5천만원', emoji: '🌻' },
  { value: '50m-100m', label: '5천만원~1억원', emoji: '🌺' },
  { value: 'over-100m', label: '1억원 이상', emoji: '💎' },
]
const INTEREST_OPTIONS: StepOption<Interest>[] = [
  { value: 'financial-products', label: 'ISA·IRP·연금저축', emoji: '📈' },
  { value: 'real-estate', label: '부동산 절세', emoji: '🏡' },
  { value: 'consumption', label: '카드·소비 공제', emoji: '💳' },
  { value: 'business-expense', label: '사업자 경비', emoji: '🧾' },
]
const STEPS = [
  { step: 1, title: '나이대가 어떻게 되시나요?', subtitle: '나이에 맞는 절세 전략이 달라요.' },
  { step: 2, title: '직업이 어떻게 되시나요?', subtitle: '직업별로 적용되는 공제 항목이 달라요.' },
  { step: 3, title: '가족 상황은 어떻게 되시나요?', subtitle: '부양가족 공제 여부를 파악해요.' },
  { step: 4, title: '연소득이 어느 정도인가요?', subtitle: '소득 구간에 따라 절세 전략이 달라져요.' },
  { step: 5, title: '가장 관심 있는 절세 분야는?', subtitle: '복수 선택 가능해요.' },
]

export default function QuizPage() {
  const router = useRouter()
  const [step, setStep] = useState<QuizStep>(1)
  const [profile, setProfile] = useState<Partial<UserProfile>>({ interests: [] })

  const current = STEPS[step - 1]
  const progress = ((step - 1) / 5) * 100

  function selectOption<T>(field: keyof UserProfile, value: T) {
    setProfile((prev) => ({ ...prev, [field]: value }))
    if (step < 5) setStep((s) => (s + 1) as QuizStep)
  }

  function toggleInterest(interest: Interest) {
    setProfile((prev) => {
      const interests = prev.interests ?? []
      return {
        ...prev,
        interests: interests.includes(interest)
          ? interests.filter((i) => i !== interest)
          : [...interests, interest],
      }
    })
  }

  async function handleSubmit() {
    if (!profile.interests?.length) return
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('profiles').upsert({
        id: user.id, ...profile, updated_at: new Date().toISOString(),
      })
    }
    localStorage.setItem('jeolsegain_profile', JSON.stringify(profile))
    router.push('/dashboard')
  }

  return (
    <div className="min-h-[90vh] bg-slate-950 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <p className="text-xs text-amber-600 font-semibold tracking-widest uppercase mb-3">절세 진단</p>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-100 mb-2">
            {current.title}
          </h1>
          <p className="text-slate-500 text-sm">{current.subtitle}</p>
        </div>

        {/* 프로그레스 */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-slate-600 mb-2">
            <span>Step {step} of 5</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 옵션 */}
        <div className="grid grid-cols-2 gap-3">
          {step === 1 && AGE_OPTIONS.map((opt) => (
            <OptionButton key={opt.value} {...opt}
              selected={profile.ageGroup === opt.value}
              onClick={() => selectOption('ageGroup', opt.value)} />
          ))}
          {step === 2 && JOB_OPTIONS.map((opt) => (
            <OptionButton key={opt.value} {...opt}
              selected={profile.jobType === opt.value}
              onClick={() => selectOption('jobType', opt.value)} />
          ))}
          {step === 3 && FAMILY_OPTIONS.map((opt) => (
            <OptionButton key={opt.value} {...opt}
              selected={profile.familyStatus === opt.value}
              onClick={() => selectOption('familyStatus', opt.value)}
              fullWidth={opt.value === 'married-with-kids'} />
          ))}
          {step === 4 && INCOME_OPTIONS.map((opt) => (
            <OptionButton key={opt.value} {...opt}
              selected={profile.incomeRange === opt.value}
              onClick={() => selectOption('incomeRange', opt.value)} />
          ))}
          {step === 5 && INTEREST_OPTIONS.map((opt) => (
            <OptionButton key={opt.value} {...opt}
              selected={(profile.interests ?? []).includes(opt.value)}
              onClick={() => toggleInterest(opt.value)} />
          ))}
        </div>

        {/* Step 5 제출 */}
        {step === 5 && (
          <button
            className="w-full mt-6 h-13 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-base shadow-lg shadow-amber-900/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={!profile.interests?.length}
            onClick={handleSubmit}
          >
            내 맞춤 절세 팁 보기 →
          </button>
        )}

        {/* 뒤로 */}
        {step > 1 && (
          <button
            className="mt-4 w-full text-sm text-slate-600 hover:text-slate-400 transition-colors"
            onClick={() => setStep((s) => (s - 1) as QuizStep)}
          >
            ← 이전으로
          </button>
        )}
      </div>
    </div>
  )
}

function OptionButton({
  emoji, label, selected, onClick, fullWidth = false,
}: {
  emoji: string; label: string; selected: boolean; onClick: () => void; fullWidth?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center gap-2.5 rounded-2xl border-2 p-5 text-center
        transition-all duration-150 cursor-pointer
        ${selected
          ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-900/20 text-amber-300'
          : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-amber-600/50 hover:bg-slate-800'}
        ${fullWidth ? 'col-span-2' : ''}
      `}
    >
      <span className="text-3xl">{emoji}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}
