import { Button } from "@/components/ui/button"
import { Clock, UtensilsCrossed, Sparkles, Phone } from "lucide-react"
import Link from "next/link"

export function RoomServicesSection() {
  const features = [
    { icon: Clock, text: "24/7 Availability" },
    { icon: UtensilsCrossed, text: "In-Room Dining" },
    { icon: Sparkles, text: "Housekeeping" },
    { icon: Phone, text: "Quick Response" },
  ]

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Image Side */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: "url('/roomservice.jpeg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-mask text-black px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider shadow-2xl">
              Premium Service
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="text-mask uppercase tracking-widest text-sm font-bold">Premium Hospitality</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Exceptional Room Services
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Experience unparalleled convenience with our comprehensive room service. From delicious meals delivered to your door to meticulous housekeeping, we ensure every aspect of your stay is comfortable and hassle-free.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-950 rounded-lg border border-gray-800 hover:border-mask/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-mask/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-mask" />
                    </div>
                    <span className="text-white font-semibold text-sm">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href="https://wa.me/923218777749?text=Hello!%20I%27d%20like%20to%20inquire%20about%20room%20services.">
                <Button size="lg" className="bg-mask text-black hover:brightness-125 font-bold px-8 py-6 text-base uppercase tracking-wider">
                  Order Now via WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
