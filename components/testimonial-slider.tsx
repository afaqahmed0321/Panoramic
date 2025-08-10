"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { testimonials } from "@/lib/data"
import { Star } from "lucide-react"

export function TestimonialSlider() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-gray-950 border-gray-800 text-center h-full">
                  <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-center mb-3 sm:mb-4">
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-mask" fill="url(#gold-gradient)" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                        &quot;{testimonial.review}&quot;
                      </p>
                    </div>
                    <p className="font-semibold text-white text-sm sm:text-base mt-auto">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex ml-8 sm:ml-12 md:ml-14 bg-black/50 border-gray-700 hover:bg-gray-800 -left-4 sm:-left-6 md:-left-8" />
        <CarouselNext className="hidden sm:flex mr-8 sm:mr-12 md:mr-14 bg-black/50 border-gray-700 hover:bg-gray-800 -right-4 sm:-right-6 md:-right-8" />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#F0C419", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </Carousel>
    </div>
  )
}
