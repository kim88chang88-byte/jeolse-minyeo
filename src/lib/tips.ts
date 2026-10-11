import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Tip, TipFrontmatter } from '@/types'

const TIPS_DIR = path.join(process.cwd(), 'src/data/tips')

export function getAllTips(): Tip[] {
  const files = fs.readdirSync(TIPS_DIR).filter((f) => f.endsWith('.mdx'))
  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    return getTipBySlug(slug)!
  })
}

export function getTipBySlug(slug: string): Tip | null {
  const filePath = path.join(TIPS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const frontmatter = data as TipFrontmatter

  return { ...frontmatter, slug, content }
}

export function getTipsByCategory(category: string): Tip[] {
  return getAllTips().filter((tip) => tip.category === category)
}
