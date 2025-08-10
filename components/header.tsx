import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 bg-black/50 backdrop-blur-lg lg:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-mask">Panoramic</span>
        </Link>
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
        <Link href="/booking">
          <Button className="bg-mask text-black font-bold transition-all hover:brightness-125">Reserve</Button>
        </Link>
      </div>
    </header>
  )
}
