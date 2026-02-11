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
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
            style={{ backgroundImage: "url('/BackG.webp')" }}
          />
          <div className="relative z-10 p-4 flex flex-col items-center justify-center flex-grow space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-mask max-w-5xl leading-none">
                Where luxury meets the horizon
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
                Experience a luxury hotel stay designed for comfort, elegance, and unforgettable views. Panoramic Hotel offers premium rooms, world-class amenities, and breathtaking city skyline views, making it the perfect choice for business travelers, couples, and family vacations.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Exquisite Services Section */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-mask/5 blur-3xl rounded-full -translate-y-1/2 md:translate-x-1/4" />
          <div className="container mx-auto text-center px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-mask mb-6">Exquisite Hotel Services & Amenities</h2>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg">
              Crafted for your comfort, designed for your delight. We offer premium facilities to ensure your stay is seamless and enjoyable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-20 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center gap-6 group p-6 bg-gray-950/80 rounded-2xl border border-white/5 hover:border-mask/30 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="overflow-hidden rounded-xl w-full aspect-square border border-white/5 group-hover:border-mask/20 transition-all duration-300 relative shadow-2xl">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-3 text-center flex-1 flex flex-col items-center justify-center">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-mask group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {service.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personalized Service Section */}
        <section className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-mask/5 blur-3xl rounded-full" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Personalized Hotel Services</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                At The Panoramic, we specialize in personalized hotel services that elevate your stay. Our commitment to guest satisfaction includes 24/7 front desk support, professional room service, and thoughtfully curated experiences. Whether you are visiting for business or leisure, our luxury hotel services are designed to ensure comfort, efficiency, and a truly memorable stay.
              </p>
            </div>
            <div className="">
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
