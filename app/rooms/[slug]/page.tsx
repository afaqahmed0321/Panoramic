import { roomTypes } from "@/lib/data"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { ImageGallery } from "@/components/image-gallery"

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = roomTypes.find((r) => r.slug === params.slug)

  if (!room) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ImageGallery images={room.images} />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-mask">{room.name}</h1>
                <p className="text-2xl font-semibold text-white mt-2">
                  ${room.price}
                  <span className="text-base font-normal text-gray-400"> / night</span>
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">{room.description}</p>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => {
                    const Icon = amenity.icon
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">{amenity.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 md:mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mask text-center mb-8">Book Your Stay</h2>
            <div className="max-w-5xl mx-auto">
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
