"use client"

import { FaWifi, FaCar, FaUtensils } from "react-icons/fa"
import { IoWater } from "react-icons/io5"
import { TbAirConditioning } from "react-icons/tb"
import { MdSmartDisplay } from "react-icons/md"

const amenitiesList = [
  { icon: FaWifi, name: "High-Speed WiFi" },
  { icon: FaCar, name: "Valet Parking" },
  { icon: FaUtensils, name: "Fine Dining" },
  { icon: IoWater, name: "Hot Water" },
  { icon: TbAirConditioning, name: "Climate Control" },
  { icon: MdSmartDisplay, name: "Smart Entertainment" },
]

export function AmenitiesIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-4xl mx-auto">
      {amenitiesList.map((amenity, index) => {
        const Icon = amenity.icon
        return (
          <div key={index} className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-950 border-2 border-gray-800 flex items-center justify-center group-hover:border-mask/40 group-hover:bg-mask/10 transition-all duration-300">
              <Icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              {amenity.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
