import { roomTypes } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Rooms at Panoramic Hotel Lahore | Premium Stay on Mall Road",
  description: "Explore luxury rooms at Panoramic Hotel Lahore featuring modern interiors, panoramic city views, premium comfort, and world-class facilities.",
  keywords: ["Panoramic Hotel rooms", "luxury rooms Lahore", "Mall Road hotel rooms"],
  alternates: {
    canonical: "https://www.panoramichotel.co/rooms",
  },
}

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <div className="py-24 md:py-32 bg-gray-950">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-mask text-center">Our Luxurious Rooms</h1>
            <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-center text-lg">
              Each room is designed with your comfort in mind, featuring elegant decor and modern amenities. Find the
              perfect space for your stay.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {roomTypes.map((room) => (
                <Card
                  key={room.slug}
                  className="bg-black border-gray-800 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 hover:border-white/20 flex flex-col"
                >
                  <CardHeader className="p-0">
                    <img
                      src={room.images[0] || "/placeholder.svg"}
                      alt={room.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex-1">
                    <CardTitle className="font-serif text-white text-2xl">{room.name}</CardTitle>
                    <CardDescription className="text-gray-400 mt-2 line-clamp-3">{room.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-6 pt-0">
                    <p className="text-xl font-bold text-mask">
                      ${room.price}
                      <span className="text-sm font-normal text-gray-400">/night</span>
                    </p>
                    <Link href={`/rooms/${room.slug}`}>
                      <Button className="bg-mask text-black hover:brightness-125 font-bold">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
