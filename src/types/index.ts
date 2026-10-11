export type AgeGroup = '20s' | '30s' | '40s' | '50s+'

export type JobType = 'employee' | 'freelancer' | 'business-owner' | 'student-homemaker'

export type FamilyStatus = 'single' | 'married-no-kids' | 'married-with-kids'

export type IncomeRange = 'under-30m' | '30m-50m' | '50m-100m' | 'over-100m'

export type Interest = 'financial-products' | 'real-estate' | 'consumption' | 'business-expense'

export type TipCategory =
  | 'year-end-tax'
  | 'financial-products'
  | 'real-estate'
  | 'freelancer-business'
  | 'consumption'

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface UserProfile {
  ageGroup: AgeGroup
  jobType: JobType
  familyStatus: FamilyStatus
  incomeRange: IncomeRange
  interests: Interest[]
}

export interface TipFrontmatter {
  id: string
  title: string
  summary: string
  category: TipCategory
  savingAmount?: string
  difficulty: Difficulty
  tags: string[]
  targetAgeGroups: AgeGroup[]
  targetJobTypes: JobType[]
  targetIncomeRanges: IncomeRange[]
  updatedAt: string
}

export interface Tip extends TipFrontmatter {
  slug: string
  content: string
}
