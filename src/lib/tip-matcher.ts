import { Tip, UserProfile } from '@/types'

export function matchTips(tips: Tip[], profile: UserProfile): Tip[] {
  return tips
    .filter((tip) => {
      const ageMatch =
        tip.targetAgeGroups.length === 0 || tip.targetAgeGroups.includes(profile.ageGroup)
      const jobMatch =
        tip.targetJobTypes.length === 0 || tip.targetJobTypes.includes(profile.jobType)
      const incomeMatch =
        tip.targetIncomeRanges.length === 0 || tip.targetIncomeRanges.includes(profile.incomeRange)
      return ageMatch && jobMatch && incomeMatch
    })
    .sort((a, b) => {
      // 관심사 카테고리 매핑
      const interestCategoryMap: Record<string, string> = {
        'financial-products': 'financial-products',
        'real-estate': 'real-estate',
        consumption: 'consumption',
        'business-expense': 'freelancer-business',
      }
      const aRelevant = profile.interests.some(
        (i) => interestCategoryMap[i] === a.category
      )
      const bRelevant = profile.interests.some(
        (i) => interestCategoryMap[i] === b.category
      )
      if (aRelevant && !bRelevant) return -1
      if (!aRelevant && bRelevant) return 1
      return 0
    })
}
