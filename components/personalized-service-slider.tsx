"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { personalizedServices } from "@/lib/data"
import { Button } from "./ui/button"

export function PersonalizedServiceSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {personalizedServices.map((service, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-transparent border-gray-800 h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-1">
                  <CardTitle className="font-serif text-2xl text-white">{service.title}</CardTitle>
                  <CardDescription className="mt-3 text-gray-400">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="p-0 text-gray-300 hover:text-white">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-14 bg-black/50 border-gray-700 hover:bg-gray-800" />
      <CarouselNext className="mr-14 bg-black/50 border-gray-700 hover:bg-gray-800" />
    </Carousel>
  )
}
