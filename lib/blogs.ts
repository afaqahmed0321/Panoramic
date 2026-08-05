import { noStore } from "next/cache"
import { Pool } from "pg"

export type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  createdAt: string
}

let pool: Pool | undefined
let tableReady: Promise<void> | undefined

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.")
  }

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    })
  }

  return pool
}

async function ensureBlogTable() {
  if (!tableReady) {
    tableReady = getPool()
      .query(`
        CREATE TABLE IF NOT EXISTS blogs (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          slug TEXT NOT NULL UNIQUE,
          excerpt TEXT NOT NULL,
          content TEXT NOT NULL,
          author TEXT NOT NULL DEFAULT 'Panoramic Hotel',
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `)
      .then(() => undefined)
  }

  return tableReady
}

export function createSlug(title: string) {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  return slug || `blog-${Date.now()}`
}

function mapBlog(row: any): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    author: row.author,
    createdAt: new Date(row.created_at).toISOString(),
  }
}

export async function getBlogs() {
  noStore()
  await ensureBlogTable()

  const result = await getPool().query(
    "SELECT id, title, slug, excerpt, content, author, created_at FROM blogs ORDER BY created_at DESC"
  )

  return result.rows.map(mapBlog)
}

export async function getBlogBySlug(slug: string) {
  noStore()
  await ensureBlogTable()

  const result = await getPool().query(
    "SELECT id, title, slug, excerpt, content, author, created_at FROM blogs WHERE slug = $1 LIMIT 1",
    [slug]
  )

  return result.rows[0] ? mapBlog(result.rows[0]) : null
}

export async function createBlogPost(input: {
  title: string
  excerpt: string
  content: string
  author?: string
}) {
  await ensureBlogTable()

  const title = input.title.trim()
  const excerpt = input.excerpt.trim()
  const content = input.content.trim()
  const author = input.author?.trim() || "Panoramic Hotel"

  if (!title || !excerpt || !content) {
    throw new Error("Title, excerpt, and content are required.")
  }

  const baseSlug = createSlug(title)
  let slug = baseSlug
  let suffix = 2

  while (true) {
    const existing = await getPool().query("SELECT id FROM blogs WHERE slug = $1 LIMIT 1", [slug])
    if (existing.rowCount === 0) break
    slug = `${baseSlug}-${suffix}`
    suffix += 1
  }

  const result = await getPool().query(
    `INSERT INTO blogs (title, slug, excerpt, content, author)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, title, slug, excerpt, content, author, created_at`,
    [title, slug, excerpt, content, author]
  )

  return mapBlog(result.rows[0])
}
