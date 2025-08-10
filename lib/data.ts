import { AirVent, Bath, BedDouble, Tv, UtensilsCrossed, Wifi } from "lucide-react"

export const services: { image: string; name: string }[] = [
  { image: "/wifi.jpeg", name: "High-Speed WiFi" },
  { image: "/restaurant.jpg", name: "Gourmet Restaurant" },
  { image: "/rooftop.avif", name: "Rooftop Pool" },
  { image: "/parking.jpg", name: "Valet Parking" },
]

export const personalizedServices = [
  {
    title: "Room Services",
    description:
      "Indulge in unparalleled comfort with our room services. From exquisite dining options to personalized amenities, we ensure a seamless and delightful stay for every guest.",
    image: "/placeholder.svg?width=800&height=800",
  },
  {
    title: "Express Check-Ins",
    description:
      "Simplify your arrival with our express check-ins. Swift and hassle-free, this service ensures you spend less time at the front desk and more time enjoying your stay.",
    image: "/placeholder.svg?width=800&height=800",
  },
  {
    title: "Complementary Breakfast",
    description:
      "Begin your day with our free breakfast, featuring fresh, locally sourced ingredients to kickstart your day, whether you're exploring or working.",
    image: "/placeholder.svg?width=800&height=800",
  },
]

export const testimonials = [
  {
    name: "Eman Ali Mughal",
    stars: 5,
    review:
      "It was my first experience to stay at this hotel. Fortunately, the experience was very good. Room was clean, bed sheets, towels were also well cleaned. Hot and cold water was available, AC was also working.",
  },
  {
    name: "John D.",
    stars: 5,
    review:
      "Absolutely breathtaking. The views from the penthouse are unparalleled, and the service was impeccable from start to finish. A truly 5-star experience.",
  },
  {
    name: "Maria S.",
    stars: 4,
    review:
      "A wonderful stay. The room was luxurious and the staff were incredibly attentive. The rooftop pool is a must-see. I'll definitely be back.",
  },
]

export const roomTypes = [
  {
    name: "Deluxe King Room",
    slug: "deluxe-king-room",
    description: "A spacious room with a king-sized bed, offering stunning city views and a luxurious marble bathroom.",
    price: "350",
    images: ["/BackG.webp", "/placeholder.svg?width=800&height=600", "/placeholder.svg?width=800&height=600"],
    amenities: [
      { icon: BedDouble, text: "King-sized Bed" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "55-inch 4K TV" },
      { icon: Bath, text: "Rainfall Shower" },
    ],
  },
  {
    name: "Executive Suite",
    slug: "executive-suite",
    description:
      "Experience ultimate luxury with a separate living area, premium amenities, and exclusive access to our executive lounge.",
    price: "550",
    images: ["/BackG.webp", "/placeholder.svg?width=800&height=600", "/placeholder.svg?width=800&height=600"],
    amenities: [
      { icon: BedDouble, text: "King-sized Bed" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "65-inch 4K TV" },
      { icon: Bath, text: "Soaking Tub & Rainfall Shower" },
      { icon: UtensilsCrossed, text: "Kitchenette" },
    ],
  },
  {
    name: "Panoramic Penthouse",
    slug: "panoramic-penthouse",
    description:
      "The pinnacle of opulence, featuring 180-degree panoramic views, a private terrace, and personalized butler service.",
    price: "1200",
    images: ["/BackG.webp", "/placeholder.svg?width=800&height=600", "/placeholder.svg?width=800&height=600"],
    amenities: [
      { icon: BedDouble, text: "Two King-sized Beds" },
      { icon: Wifi, text: "Dedicated Fiber WiFi" },
      { icon: Tv, text: "75-inch 4K TV" },
      { icon: Bath, text: "Jacuzzi Tub" },
      { icon: AirVent, text: "Private Terrace" },
    ],
  },
]
