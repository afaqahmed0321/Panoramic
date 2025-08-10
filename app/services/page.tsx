import { services } from "@/lib/data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <div className="py-24 md:py-32">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-mask">Our Services & Amenities</h1>
            <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
              We offer a wide range of services to make your stay comfortable and memorable. From our luxury spa to
              gourmet dining, every detail is crafted for your enjoyment.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mt-20 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center gap-4 group">
                  <div className="overflow-hidden rounded-lg w-full aspect-[4/3] border border-gray-800 group-hover:border-white/20 transition-all duration-300">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
