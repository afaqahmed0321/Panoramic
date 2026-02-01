"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/panaromichotel?rdid=jcwo8aJ32Mx5Mjqa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15zutNtjyh%2F#", label: "Facebook" },
    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/panaromichotel?igsh=anE4aW5ncXdkMjVv", label: "Instagram" },
    { icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/923218777749", label: "WhatsApp" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/al-fateh-hotel/posts/?feedView=all", label: "LinkedIn" },
  ]

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
     

      {/* Main Navbar */}
      <div className={cn(
        "transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}>
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
              <Image 
                src="/logo.png" 
                alt="Panoramic Hotel Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl lg:text-2xl font-serif font-bold text-white tracking-tight">
              Panoramic <span className="text-mask block lg:inline text-xs lg:text-sm font-sans font-light tracking-widest uppercase lg:ml-1">Hotel</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold uppercase tracking-widest text-gray-200 hover:text-mask transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mask transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Link href="/booking">
              <Button className="bg-mask text-black hover:brightness-125 font-bold transition-all duration-300 px-8 py-6 rounded-none uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-4 lg:hidden">
             <Link href="/booking">
              <Button size="sm" className="bg-mask text-black font-bold h-9 px-4 text-xs uppercase rounded-none">
                Book
              </Button>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-black/95 backdrop-blur-xl border-white/10 p-0">
                <div className="flex flex-col h-full pt-20 px-8">
                  <div className="flex flex-col space-y-8">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name}
                        href={link.href} 
                        className="text-2xl font-serif text-white hover:text-mask transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-auto pb-12 space-y-8">
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Contact Us</p>
                      <a href="tel:+923218777749" className="flex items-center gap-3 text-white mb-3">
                        <Phone className="w-4 h-4 text-mask" />
                        <span className="text-sm">+92 321 8777749</span>
                      </a>
                      <a href="mailto:info@panoramichotel.co" className="flex items-center gap-3 text-white">
                        <Mail className="w-4 h-4 text-mask" />
                        <span className="text-sm">info@panoramichotel.co</span>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      {socialLinks.map((social, index) => (
                        <a 
                          key={index} 
                          href={social.href} 
                          className="text-gray-400 hover:text-mask transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
