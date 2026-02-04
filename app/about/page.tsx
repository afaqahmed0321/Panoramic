import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-mask inline-block">About Us</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  <span className="text-white font-bold">Panoramic Hotel</span> is a luxury hospitality destination designed to offer comfort, elegance, and unforgettable panoramic views. Our mission is to provide guests with a relaxing, secure, and premium stay experience at an affordable price.
                </p>
                <p>
                  We take pride in delivering high-quality service, modern hotel rooms, and a welcoming environment for families, couples, business travelers, and tourists. At Panoramic Hotel, every guest is treated with care and professionalism to ensure a memorable stay.
                </p>
                <p>
                  Whether you are visiting for leisure or business, Panoramic Hotel is committed to making your stay comfortable, convenient, and enjoyable through exceptional hospitality and world-class facilities.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/about.jpg" 
                  alt="About Panoramic Hotel" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div className="p-8 bg-gray-950 rounded-xl border border-white/5 space-y-4">
                <h3 className="text-xl font-bold text-mask uppercase tracking-widest">Our Vision</h3>
                <p className="text-gray-400 text-sm">To be the leading luxury hotel in Lahore, known for our breathtaking views and unmatched hospitality.</p>
              </div>
              <div className="p-8 bg-gray-950 rounded-xl border border-white/5 space-y-4">
                <h3 className="text-xl font-bold text-mask uppercase tracking-widest">Our Mission</h3>
                <p className="text-gray-400 text-sm">Providing premium stays at affordable prices without compromising on quality or security.</p>
              </div>
              <div className="p-8 bg-gray-950 rounded-xl border border-white/5 space-y-4">
                <h3 className="text-xl font-bold text-mask uppercase tracking-widest">Our Value</h3>
                <p className="text-gray-400 text-sm">Every guest is treated with care and professionalism to ensure a memorable stay.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
