import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
        <div>
          <h3 className="text-xl font-serif font-bold text-white">Panoramic Hotel</h3>
          <p className="mt-4 text-sm">Experience unparalleled luxury where the horizon meets comfort.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/rooms" className="hover:text-white transition-colors">
              Rooms
            </Link>
            <Link href="/booking" className="hover:text-white transition-colors">
              Booking
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Panoramic Hotel. All Rights Reserved.
      </div>
    </footer>
  )
}
