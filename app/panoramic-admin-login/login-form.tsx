"use client"

import { useActionState } from "react"
import { loginAdmin } from "@/app/panoramic-admin/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AdminLoginForm() {
  const [state, formAction, isPending] = useActionState(loginAdmin, undefined)

  return (
    <form action={formAction} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="username" className="text-white">
          Username
        </Label>
        <Input
          id="username"
          name="username"
          autoComplete="username"
          required
          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
        />
      </div>
      {state?.error ? <p className="text-sm text-red-300">{state.error}</p> : null}
      <Button type="submit" disabled={isPending} className="w-full bg-mask py-6 font-bold text-black hover:brightness-125">
        {isPending ? "Signing in..." : "Login"}
      </Button>
    </form>
  )
}
