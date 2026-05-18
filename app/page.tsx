import { Button } from "@/components/ui/button"
import { services, roomTypes } from "@/lib/data"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { TrustBadges } from "@/components/trust-badges"
import { ModernRoomCard } from "@/components/modern-room-card"
import { RoomServicesSection } from "@/components/room-services-section"
import { BreakfastSection } from "@/components/breakfast-section"
import { FAQSection } from "@/components/faq-section"
import { AmenitiesIcons } from "@/components/amenities-icons"
import { Phone, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-screen md:h-screen md:min-h-[700px] flex flex-col justify-center text-center relative overflow-hidden bg-black pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
            style={{ backgroundImage: "url('/BackG.webp')" }}
          />
          <div className="relative z-10 p-4 flex flex-col items-center justify-center flex-grow space-y-8 md:space-y-12 py-12">
            <div className="flex flex-col items-center space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-mask max-w-5xl leading-none px-4">
                Where luxury meets the horizon
              </h1>
              <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed font-light px-4">
                Experience a luxury hotel stay designed for comfort, elegance, and unforgettable views. Panoramic Hotel offers premium rooms, world-class amenities, and breathtaking city skyline views, making it the perfect choice for business travelers, couples, and family vacations.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Our Rooms & Prices Section */}
        <section className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-mask/5 blur-3xl rounded-full -translate-y-1/2" />
          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-mask uppercase tracking-widest text-sm font-bold">Premium Accommodations</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Our Rooms & Prices
              </h2>
              <p className="text-gray-400 text-lg">
                Choose from our diverse selection of elegantly designed rooms and suites, each crafted to provide maximum comfort and luxury
              </p>
              <div className="mt-6 inline-block bg-mask/10 border border-mask/20 rounded-full px-6 py-2">
                <p className="text-mask font-bold">Starting from RS 4,500/night</p>
              </div>
            </div>

            {/* Room Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {roomTypes.map((room, index) => {
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

            {/* View All CTA */}
            <div className="text-center mt-16">
              <Link href="/rooms">
                <Button size="lg" variant="outline" className="border-mask text-mask hover:bg-mask hover:text-black transition-all duration-300 px-8 py-6 text-base group">
                  View All Rooms
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Hotel Services & Amenities Section */}
        <section className="py-24 md:py-32 bg-black relative">
          <div className="container mx-auto text-center px-4 relative z-10">
            <span className="text-mask uppercase tracking-widest text-sm font-bold">World-Class Facilities</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">
              Hotel Services & Amenities
            </h2>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-16">
              Crafted for your comfort, designed for your delight. We offer premium facilities to ensure your stay is seamless and enjoyable.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center gap-4 group p-6 bg-gray-950 rounded-2xl border border-gray-800 hover:border-mask/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="overflow-hidden rounded-xl w-full aspect-square border border-gray-800 group-hover:border-mask/20 transition-all duration-300 relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-mask transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Amenities Icons */}
            <AmenitiesIcons />
          </div>
        </section>

        {/* Room Services Section */}
        <RoomServicesSection />

        {/* Buffet Breakfast Section */}
        <BreakfastSection />

        {/* Testimonials Section */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto flex flex-col items-center text-center px-4">
            <span className="text-mask uppercase tracking-widest text-sm font-bold">Guest Reviews</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">
              What Our Guests Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg mb-16">
              We take pride in serving our guests with the best experience. Read what they say.
            </p>
            <div className="w-full">
              <TestimonialSlider />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <section
          className="relative py-20 md:py-32 text-center text-white bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/about.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 container mx-auto flex flex-col items-center px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold max-w-4xl">
              Plan an Unforgettable Experience Today!
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-200 max-w-2xl">
              Enjoy a memorable stay within your budget at Lahore's premier luxury hotel.
            </p>
            <div className="mt-12 space-y-6">
              <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300">Book Your Stay Now</p>
              <a
                href="tel:+92-42-111-395-395"
                className="flex items-center justify-center gap-3 text-2xl md:text-4xl lg:text-5xl font-bold text-mask hover:brightness-125 transition-all"
              >
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0" />
                <span>+92-42-111-395-395</span>
              </a>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/booking">
                  <Button size="lg" className="bg-mask text-black hover:brightness-125 font-bold px-8 py-6 text-base w-full sm:w-auto">
                    Book Online
                  </Button>
                </Link>
                <Link href="/rooms">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white bg-black hover:text-black px-8 py-6 text-base w-full sm:w-auto">
                    Explore Rooms
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
