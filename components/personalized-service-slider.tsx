"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { personalizedServices } from "@/lib/data"
import { Button } from "./ui/button"

export function PersonalizedServiceSlider() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {personalizedServices.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-transparent border-gray-200 h-full flex flex-col">
                  <CardHeader className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 flex-1">
                    <CardTitle className="font-serif text-xl sm:text-2xl text-black">{service.title}</CardTitle>
                    <CardDescription className="mt-3 text-gray-600 text-sm sm:text-base">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 sm:p-6 pt-0">
                    <Button variant="link" className="p-0 text-gray-700 hover:text-black text-sm sm:text-base">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex bg-white/90 border-gray-300 hover:bg-gray-100 -left-4 sm:-left-6 md:-left-8" />
        <CarouselNext className="hidden sm:flex bg-white/90 border-gray-300 hover:bg-gray-100 -right-4 sm:-right-6 md:-left-8" />
      </Carousel>
    </div>
  )
}
