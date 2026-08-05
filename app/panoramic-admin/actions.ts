"use server"

import { clearAdminSession, isAdminLoggedIn, setAdminSession, verifyAdminCredentials } from "@/lib/admin-auth"
import { createBlogPost } from "@/lib/blogs"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function loginAdmin(_: { error?: string } | undefined, formData: FormData) {
  const username = String(formData.get("username") || "")
  const password = String(formData.get("password") || "")

  if (!verifyAdminCredentials(username, password)) {
    return { error: "Invalid admin username or password." }
  }

  await setAdminSession(username)
  redirect("/panoramic-admin")
}

export async function logoutAdmin() {
  await clearAdminSession()
  redirect("/panoramic-admin-login")
}

export async function publishBlog(_: { error?: string; success?: string } | undefined, formData: FormData) {
  if (!(await isAdminLoggedIn())) {
    redirect("/panoramic-admin-login")
  }

  try {
    const post = await createBlogPost({
      title: String(formData.get("title") || ""),
      metaTitle: String(formData.get("metaTitle") || ""),
      metaDescription: String(formData.get("metaDescription") || ""),
      metaKeywords: String(formData.get("metaKeywords") || ""),
      excerpt: String(formData.get("excerpt") || ""),
      content: String(formData.get("content") || ""),
      author: String(formData.get("author") || ""),
    })

    revalidatePath("/blogs")
    revalidatePath(`/blogs/${post.slug}`)
    return { success: "Blog published successfully." }
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Blog could not be published.",
    }
  }
}
