"use client"

import { useActionState, useEffect, useRef } from "react"
import { publishBlog } from "@/app/panoramic-admin/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function BlogForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, isPending] = useActionState(publishBlog, undefined)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state?.success])

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-white">
            Blog Title
          </Label>
          <Input id="title" name="title" required className="border-white/10 bg-white/5 text-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="author" className="text-white">
            Author
          </Label>
          <Input id="author" name="author" placeholder="Panoramic Hotel" className="border-white/10 bg-white/5 text-white" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="excerpt" className="text-white">
          Short Summary
        </Label>
        <Textarea id="excerpt" name="excerpt" required rows={3} className="border-white/10 bg-white/5 text-white" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content" className="text-white">
          Blog Content
        </Label>
        <Textarea id="content" name="content" required rows={12} className="border-white/10 bg-white/5 text-white" />
      </div>
      {state?.error ? <p className="text-sm text-red-300">{state.error}</p> : null}
      {state?.success ? <p className="text-sm text-green-300">{state.success}</p> : null}
      <Button type="submit" disabled={isPending} className="bg-mask px-8 py-6 font-bold text-black hover:brightness-125">
        {isPending ? "Publishing..." : "Publish Blog"}
      </Button>
    </form>
  )
}
