"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export function StickyBookButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (800px)
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-24 right-6 z-40 transition-all duration-500",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <Link href="/booking">
        <Button
          size="lg"
          className="bg-mask text-black hover:brightness-125 font-bold shadow-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 px-8 py-6 rounded-full uppercase tracking-widest text-sm group relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Book Now
        </Button>
      </Link>

      {/* Pulsing ring effect */}
      <div className="absolute inset-0 rounded-full bg-mask/30 animate-ping pointer-events-none"></div>
    </div>
  )
}
