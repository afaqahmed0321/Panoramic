import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModernRoomCardProps {
  room: {
    name: string
    slug: string
    description: string
    price: string
    priceNote?: string
    images: string[]
    amenities: Array<{ icon: any; text: string }>
  }
  featured?: boolean
  bestValue?: boolean
}

export function ModernRoomCard({ room, featured, bestValue }: ModernRoomCardProps) {
  return (
    <Card className="group bg-black border-gray-800 overflow-hidden hover:border-mask/40 transition-all duration-500 hover:shadow-2xl hover:shadow-mask/10 relative">
      {/* Badge */}
      {(featured || bestValue) && (
        <Badge className="absolute top-4 right-4 z-10 bg-mask text-black font-bold uppercase text-xs tracking-wider">
          {featured ? "Most Popular" : "Best Value"}
        </Badge>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${room.images[0] || "/placeholder.svg"})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

        {/* Quick Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>2-4 Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            <span>Premium Space</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Room Name */}
        <h3 className="text-2xl font-serif font-bold text-white group-hover:text-mask transition-colors duration-300">
          {room.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {room.description}
        </p>

        {/* Key Amenities */}
        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900/50 rounded-full border border-gray-800 text-xs text-gray-300"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{amenity.text}</span>
              </div>
            )
          })}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        {/* Price */}
        <div>
          <p className="text-3xl font-bold text-mask">
            RS {room.price}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {room.priceNote || "+ tax"} / night
          </p>
        </div>

        {/* CTA Button */}
        <Link href={`/rooms/${room.slug}`}>
          <Button
            className={cn(
              "bg-mask text-black hover:brightness-125 font-bold transition-all duration-300 px-6 py-5 uppercase tracking-wider text-sm",
              "group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-mask/30"
            )}
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
