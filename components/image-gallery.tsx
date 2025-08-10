"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [mainImage, setMainImage] = React.useState(images[0])

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-video overflow-hidden rounded-lg border border-gray-800">
        <img src={mainImage || "/placeholder.svg"} alt="Main room view" className="w-full h-full object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={cn(
              "aspect-square overflow-hidden rounded-md border-2 transition-all",
              mainImage === image ? "border-white" : "border-gray-800 hover:border-gray-500",
            )}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Room view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
