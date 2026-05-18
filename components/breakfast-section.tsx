import { Button } from "@/components/ui/button"
import { Coffee, Clock3, Leaf, ChefHat } from "lucide-react"
import Link from "next/link"

export function BreakfastSection() {
  const features = [
    { icon: Clock3, text: "7:00 AM - 11:00 AM" },
    { icon: Coffee, text: "Fresh Beverages" },
    { icon: Leaf, text: "Healthy Options" },
    { icon: ChefHat, text: "Expert Chefs" },
  ]

  return (
    <section className="py-24 md:py-32 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content Side - Left */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <span className="text-mask uppercase tracking-widest text-sm font-bold">Start Your Day Right</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Delicious Buffet Breakfast
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Begin each morning with our wholesome buffet breakfast featuring a wide variety of fresh, hygienic, and carefully prepared dishes. From traditional Pakistani favorites to continental options, there's something to satisfy every palate.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-black rounded-lg border border-gray-800 hover:border-mask/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-mask/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-mask" />
                    </div>
                    <span className="text-white font-semibold text-sm">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Menu Highlights */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-mask">Menu Highlights</span>
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-mask rounded-full"></span>
                  Fresh Fruits & Juices
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-mask rounded-full"></span>
                  Traditional Pakistani Breakfast
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-mask rounded-full"></span>
                  Continental Options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-mask rounded-full"></span>
                  Fresh Baked Goods
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href="/booking">
                <Button size="lg" className="bg-mask text-black hover:brightness-125 font-bold px-8 py-6 text-base uppercase tracking-wider">
                  Book Your Stay
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Side - Right */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group order-1 lg:order-2">
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: "url('/breakfas.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>

            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-mask text-black px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider shadow-2xl">
              Complimentary
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
