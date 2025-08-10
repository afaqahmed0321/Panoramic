"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 py-4 bg-black/50 backdrop-blur-lg lg:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-mask">Panoramic</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/rooms" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Rooms
          </Link>
          <Link href="/booking" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Booking
          </Link>
        </nav>

        {/* Desktop Reserve Button */}
        <div className="hidden lg:block">
          <Link href="/booking">
            <Button className="bg-mask text-black font-bold transition-all hover:brightness-125">Reserve</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black/95 backdrop-blur-lg border-gray-800">
            <div className="flex flex-col space-y-6 mt-8">
              <Link 
                href="/services" 
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/rooms" 
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Rooms
              </Link>
              <Link 
                href="/booking" 
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Booking
              </Link>
              <div className="pt-4 border-t border-gray-800">
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-mask text-black font-bold transition-all hover:brightness-125">
                    Reserve Now
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
