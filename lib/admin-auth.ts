import { cookies } from "next/headers"
import crypto from "crypto"

const cookieName = "panoramic_admin_session"

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "change-this-secret-in-vercel"
}

function sign(value: string) {
  return crypto.createHmac("sha256", getSessionSecret()).update(value).digest("hex")
}

export function verifyAdminCredentials(username: string, password: string) {
  const adminUsername = process.env.ADMIN_USERNAME || "admin"
  const adminPassword = process.env.ADMIN_PASSWORD || "Panoramic@2026"

  return username === adminUsername && password === adminPassword
}

export async function isAdminLoggedIn() {
  const cookieStore = await cookies()
  const session = cookieStore.get(cookieName)?.value
  if (!session) return false

  const [username, signature] = session.split(".")
  if (!username || !signature) return false

  const expected = sign(username)
  if (signature.length !== expected.length) return false

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}

export async function setAdminSession(username: string) {
  const cookieStore = await cookies()
  cookieStore.set(cookieName, `${username}.${sign(username)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  })
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(cookieName)
}
