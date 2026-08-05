import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { isAdminLoggedIn } from "@/lib/admin-auth"
import { redirect } from "next/navigation"
import { AdminLoginForm } from "./login-form"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin Login | Panoramic Hotel",
  robots: "noindex, nofollow",
}

export default async function AdminLoginPage() {
  if (await isAdminLoggedIn()) {
    redirect("/panoramic-admin")
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md border border-white/10 bg-gray-950 p-8 shadow-2xl">
            <span className="text-mask text-xs font-bold uppercase tracking-widest">Private Admin</span>
            <h1 className="mt-3 text-3xl font-serif font-bold">Blog Login</h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              This page is not linked on the website and is only for authorized hotel staff.
            </p>
            <div className="mt-8">
              <AdminLoginForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
