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

import Script from "next/script"

export const metadata: Metadata = {
  title: "Panoramic Hotel Lahore | Luxury Hotel on Mall Road, Lahore Pakistan",
  description:
    "Panoramic Hotel Lahore is a luxury hotel located on Mall Road, Lahore offering premium rooms, panoramic city views, modern amenities, and exceptional hospitality. Book your stay today.",
  keywords: ["Panoramic Hotel Lahore", "luxury hotel in Lahore", "Mall Road hotel Lahore", "best hotel in Lahore Pakistan", "panoramic view hotel Lahore"],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "1oCMz6gkAfebslLPvxiMdp_UUAXqWKGsKSlZq0l1wmE",
  },
  alternates: {
    canonical: "https://www.panoramichotel.co/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1D4XT0SDDE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1D4XT0SDDE');
          `}
        </Script>
      </head>
      <body
        className={cn("min-h-screen bg-black font-sans text-white antialiased", fontSans.variable, fontSerif.variable)}
      >
        {children}
      </body>
    </html>
  )
}
