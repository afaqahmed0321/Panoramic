"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { testimonials } from "@/lib/data"
import { Star } from "lucide-react"

export function TestimonialSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-gray-950 border-gray-800 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-mask" fill="url(#gold-gradient)" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">&quot;{testimonial.review}&quot;</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-14 bg-black/50 border-gray-700 hover:bg-gray-800" />
      <CarouselNext className="mr-14 bg-black/50 border-gray-700 hover:bg-gray-800" />
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#F0C419", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </Carousel>
  )
}
