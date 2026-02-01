import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/panaromichotel?rdid=jcwo8aJ32Mx5Mjqa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15zutNtjyh%2F#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/panaromichotel?igsh=anE4aW5ncXdkMjVv", label: "Instagram" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/923218777749", label: "WhatsApp" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/al-fateh-hotel/", label: "LinkedIn" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Facilities", href: "/facilities" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Section 1: Hotel Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-24 h-24 mb-2">
                <Image 
                  src="/logo.png" 
                  alt="Panoramic Hotel Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>
            <h3 className="text-2xl font-serif font-bold text-mask tracking-tight">Panoramic Hotel</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience luxury, comfort, and breathtaking panoramic views. 
              Perfect for families, couples, and business travelers seeking an unforgettable stay.
            </p>
            <div className="pt-4 flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-mask hover:text-black hover:border-mask transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest border-l-2 border-mask pl-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 3: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest border-l-2 border-mask pl-4">Contact Info</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-mask shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Panoramic Hotel, S-19 Shahrah e Quaid e Azam, Mall Road, Lahore, 54000
                </p>
              </div>
              <a href="tel:+923218777749" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 text-mask shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+92 321 8777749</span>
              </a>
              <a href="mailto:info@panoramichotel.co" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-mask shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">info@panoramichotel.co</span>
              </a>
            </div>
          </div>

          {/* Section 4: Google Maps Location */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest border-l-2 border-mask pl-4">Find Us</h3>
            <div className="w-full h-48 rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0837597143894!2d74.32356!3d31.5627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4000000001%3A0x7b6a4829d7d3d2a!2sPanoramic%20Hotel!5e0!3m2!1sen!2s!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Panoramic%20Hotel%20Lahore%20Mall%20Road" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-mask hover:text-white transition-colors"
            >
              Get Directions <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Panoramic Hotel Lahore. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
