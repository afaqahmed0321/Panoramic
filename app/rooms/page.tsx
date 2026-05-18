import { roomTypes } from "@/lib/data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ModernRoomCard } from "@/components/modern-room-card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panoramic Hotel Lahore | Best Hotel on Mall Road Lahore",

  description:
    "Stay at Panoramic Hotel Lahore on Mall Road. Luxury rooms, family environment, free WiFi, restaurant, parking & easy access to Lahore attractions. Book your stay today.",

  keywords: [
    "Panoramic Hotel Lahore",
    "hotel in Lahore",
    "Mall Road Lahore hotel",
    "best hotel in Lahore",
    "luxury hotel Lahore",
    "family hotel Lahore",
    "business hotel Lahore",
    "Lahore accommodation",
    "hotel near Mall Road Lahore",
    "affordable hotel Lahore",
    "hotel booking Lahore"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.panoramichotel.co/",
  },
};

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <div className="py-16 md:py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-mask/5 blur-3xl rounded-full -translate-y-1/2" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-mask uppercase tracking-widest text-sm font-bold">Premium Accommodations</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Our Luxurious Rooms & Suites
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Each room is designed with your comfort in mind, featuring elegant decor and modern amenities. Find the
                perfect space for your stay in the heart of Lahore.
              </p>
              <div className="mt-6 inline-block bg-mask/10 border border-mask/20 rounded-full px-6 py-3">
                <p className="text-mask font-bold">Starting from RS 4,500/night + tax</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {roomTypes.map((room) => {
                const featured = room.slug === "deluxe-double-room"
                const bestValue = room.slug === "standard-single-room"
                return (
                  <ModernRoomCard
                    key={room.slug}
                    room={room}
                    featured={featured}
                    bestValue={bestValue}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 md:py-20 bg-gray-950 border-t border-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect room for your needs. Contact us for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/923218777749?text=Hello!%20I%20need%20help%20choosing%20a%20room." className="inline-block">
                <Button size="lg" className="bg-mask text-black hover:brightness-125 font-bold px-8 py-6 w-full sm:w-auto">
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="tel:+92-42-111-395-395" className="inline-block">
                <Button size="lg" variant="outline" className="border-mask text-mask hover:bg-mask hover:text-black px-8 py-6 w-full sm:w-auto">
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
