"use client"

import { FaUsers, FaAward, FaHeadphones, FaShieldAlt } from "react-icons/fa"

const badges = [
  {
    icon: FaUsers,
    value: "1000+",
    label: "Happy Guests",
    description: "Served with excellence"
  },
  {
    icon: FaAward,
    value: "4.8/5",
    label: "Average Rating",
    description: "Based on guest reviews"
  },
  {
    icon: FaHeadphones,
    value: "24/7",
    label: "Support Available",
    description: "Always here to help"
  },
  {
    icon: FaShieldAlt,
    value: "100%",
    label: "Secure Booking",
    description: "Your safety is our priority"
  }
]

export function TrustBadges() {
  return (
    <section className="py-20 md:py-24 bg-black border-y border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-mask/10 flex items-center justify-center border-2 border-mask/30 hover:bg-mask/20 hover:border-mask/50 transition-all duration-300">
                    <Icon className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-mask mb-2">
                  {badge.value}
                </h3>
                <p className="text-white font-semibold text-sm md:text-base mb-1 uppercase tracking-wider">
                  {badge.label}
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {badge.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
