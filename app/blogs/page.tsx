import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getBlogs } from "@/lib/blogs"
import { fallbackBlogs } from "@/lib/fallback-blogs"
import { CalendarDays, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blogs | Panoramic Hotel Lahore",
  description: "Read travel tips, hotel updates, Lahore guides, and hospitality stories from Panoramic Hotel Lahore.",
  alternates: {
    canonical: "https://www.panoramichotel.co/blogs",
  },
  robots: "index, follow",
}

export default async function BlogsPage() {
  let blogs = fallbackBlogs

  try {
    const databaseBlogs = await getBlogs()
    blogs = databaseBlogs.length > 0 ? databaseBlogs : fallbackBlogs
  } catch (error) {
    console.error("Unable to load blogs from database", error)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 pt-20">
        <section className="bg-gradient-to-b from-gray-950 to-black py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <span className="text-mask text-sm font-bold uppercase tracking-widest">Hotel Journal</span>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-serif font-bold md:text-6xl">Blogs & Travel Stories</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Helpful guides, updates, and local recommendations for guests staying in the heart of Lahore.
            </p>
          </div>
        </section>

        <section className="bg-black py-16 md:py-24">
          <div className="container mx-auto px-4">
            {blogs.length === 0 ? (
              <div className="mx-auto max-w-2xl border border-white/10 bg-gray-950 p-10 text-center">
                <h2 className="text-2xl font-serif font-bold">No Blogs Posted Yet</h2>
                <p className="mt-3 text-gray-400">New Panoramic Hotel stories and updates will appear here soon.</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <article key={blog.id} className="flex min-h-[320px] flex-col border border-white/10 bg-gray-950 p-6 transition-all hover:-translate-y-1 hover:border-mask/40">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
                      <CalendarDays className="h-4 w-4 text-mask" />
                      {new Intl.DateTimeFormat("en", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(blog.createdAt))}
                    </div>
                    <h2 className="mt-5 text-2xl font-serif font-bold text-white">{blog.title}</h2>
                    <p className="mt-4 flex-1 leading-relaxed text-gray-400">{blog.excerpt}</p>
                    <Link href={`/blogs/${blog.slug}`} className="mt-8">
                      <Button className="bg-mask text-black hover:brightness-125">
                        Read Blog <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
