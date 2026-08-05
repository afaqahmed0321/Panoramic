import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getBlogs } from "@/lib/blogs"
import { isAdminLoggedIn } from "@/lib/admin-auth"
import { redirect } from "next/navigation"
import { logoutAdmin } from "./actions"
import { BlogForm } from "./blog-form"
import Link from "next/link"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog Admin | Panoramic Hotel",
  robots: "noindex, nofollow",
}

export default async function AdminPage() {
  if (!(await isAdminLoggedIn())) {
    redirect("/panoramic-admin-login")
  }

  const blogs = await getBlogs()

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end">
            <div>
              <span className="text-mask text-xs font-bold uppercase tracking-widest">Admin Dashboard</span>
              <h1 className="mt-3 text-4xl font-serif font-bold md:text-5xl">Post a Blog</h1>
            </div>
            <form action={logoutAdmin}>
              <Button variant="outline" className="border-white/20 bg-black text-white hover:bg-white hover:text-black">
                Logout
              </Button>
            </form>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            <section className="border border-white/10 bg-gray-950 p-6 md:p-8">
              <BlogForm />
            </section>

            <aside className="space-y-4">
              <h2 className="text-xl font-serif font-bold">Published Blogs</h2>
              <div className="space-y-3">
                {blogs.length === 0 ? (
                  <p className="text-sm text-gray-400">No blogs posted yet.</p>
                ) : (
                  blogs.map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/blogs/${blog.slug}`}
                      className="block border border-white/10 bg-white/5 p-4 transition-colors hover:border-mask/50"
                    >
                      <h3 className="font-bold text-white">{blog.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-gray-400">{blog.excerpt}</p>
                    </Link>
                  ))
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
