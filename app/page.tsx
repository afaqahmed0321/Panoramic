import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { services, roomTypes } from "@/lib/data"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { PersonalizedServiceSlider } from "@/components/personalized-service-slider"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { Phone } from "lucide-react"

export default function HomePage() {
  const featuredRooms = roomTypes.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="h-screen min-h-[800px] flex flex-col justify-center text-center relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/BackG.webp')" }}
          />
          <div className="relative z-10 p-4 flex flex-col items-center justify-center flex-grow space-y-12">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-mask">
                Panoramic
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
                Where Luxury Meets the Horizon. Indulge in an experience of a lifetime.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Exquisite Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-mask">Exquisite Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">Crafted for your comfort, designed for your delight.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center gap-4 group">
                  <div className="overflow-hidden rounded-lg w-full aspect-square border border-gray-800 group-hover:border-white/20 transition-all duration-300">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personalized Service Section */}
        <section className="py-20 md:py-32 bg-gray-950">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Personalized Service</h2>
              <p className="mt-4 text-gray-400">
                At The Panoramic, our dedication to personalized service makes us unique. Enjoy hospitality that
                anticipates your needs, with express check-ins, concierge assistance, and a dedicated team ensuring your
                stay is smooth and tailored to your preferences.
              </p>
            </div>
            <div className="mt-16">
              <PersonalizedServiceSlider />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What Our Guests Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">
              We take pride in serving our guests with the best experience. Read what they say.
            </p>
            <div className="mt-16">
              <TestimonialSlider />
            </div>
          </div>
        </section>

        {/* Featured Accommodations Section */}
        <section className="py-20 md:py-32 bg-gray-950">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-mask text-center">Featured Accommodations</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-center">
              Discover your personal sanctuary of luxury and style.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {featuredRooms.map((room) => (
                <Card
                  key={room.slug}
                  className="bg-black border-gray-800 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 hover:border-white/20"
                >
                  <CardHeader className="p-0">
                    <img
                      src={room.images[0] || "/placeholder.svg"}
                      alt={room.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-serif text-white text-2xl">{room.name}</CardTitle>
                    <CardDescription className="text-gray-400 mt-2 line-clamp-2">{room.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-6 pt-0">
                    <p className="text-xl font-bold text-mask">
                      ${room.price}
                      <span className="text-sm font-normal text-gray-400">/night</span>
                    </p>
                    <Link href={`/rooms/${room.slug}`}>
                      <Button variant="link" className="text-gray-300 hover:text-white">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="relative py-24 md:py-32 text-center text-white bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/about.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Plan an Unforgettable Experience Today!</h2>
            <p className="mt-4 text-lg text-gray-300">Enjoy a memorable stay within your budget.</p>
            <div className="mt-8">
              <p className="text-sm uppercase tracking-widest text-gray-400">Book Your Stay Now</p>
              <a
                href="tel:+92-42-111-395-395"
                className="flex items-center justify-center gap-3 mt-2 text-4xl md:text-5xl font-bold text-mask hover:brightness-125 transition-all"
              >
                <Phone className="w-10 h-10 text-white" />
                <span>+92-42-111-395-395</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
