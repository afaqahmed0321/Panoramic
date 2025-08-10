import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "700",
})

export const metadata: Metadata = {
  title: "Panoramic Hotel | Luxury & Comfort",
  description:
    "Experience unparalleled luxury and comfort at Panoramic Hotel. Book your stay with us for an unforgettable experience.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn("min-h-screen bg-black font-sans text-white antialiased", fontSans.variable, fontSerif.variable)}
      >
        {children}
      </body>
    </html>
  )
}
