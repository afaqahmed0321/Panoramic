import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getBlogBySlug } from "@/lib/blogs"
import { CalendarDays, UserRound } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

type BlogDetailProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return {
      title: "Blog Not Found | Panoramic Hotel",
    }
  }

  return {
    title: `${blog.title} | Panoramic Hotel Lahore`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.panoramichotel.co/blogs/${blog.slug}`,
    },
    robots: "index, follow",
  }
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const paragraphs = blog.content.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 pt-20">
        <article>
          <section className="bg-gradient-to-b from-gray-950 to-black py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <Link href="/blogs" className="text-mask text-sm font-bold uppercase tracking-widest hover:brightness-125">
                  Back to Blogs
                </Link>
                <h1 className="mt-6 text-4xl font-serif font-bold leading-tight md:text-6xl">{blog.title}</h1>
                <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-mask" />
                    {new Intl.DateTimeFormat("en", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(blog.createdAt))}
                  </span>
                  <span className="flex items-center gap-2">
                    <UserRound className="h-4 w-4 text-mask" />
                    {blog.author}
                  </span>
                </div>
                <p className="mt-8 text-xl leading-relaxed text-gray-300">{blog.excerpt}</p>
              </div>
            </div>
          </section>

          <section className="bg-black py-14 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-gray-300">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mx-auto mt-12 max-w-3xl">
                <Link href="/blogs">
                  <Button variant="outline" className="border-mask bg-black text-mask hover:bg-mask hover:text-black">
                    View All Blogs
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
