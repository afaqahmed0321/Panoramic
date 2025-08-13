import { AirVent, Bath, BedDouble, Tv, UtensilsCrossed, Wifi } from "lucide-react"

export const services: { image: string; name: string }[] = [
  { image: "/ElecricityBackup.webp", name: "24/7 Electricity Backup" },
  { image: "/cctv.jpeg", name: "CCTV Cameras in all common areas" },
  { image: "/security.jpeg", name: "24/7 Security" },
  { image: "/rooftop.avif", name: "Rooftop" },
  { image: "/restaurant.jpg", name: "Restaurant" },
  { image: "/food.webp", name: "Hygienic Food" },
  { image: "/parking.jpg", name: "Parking (Rs 200/day)" },
]

export const personalizedServices = [
  {
    title: "Reception",
    description:
      "24/7 front desk assistance for check-ins, check-outs, inquiries, and guest support.",
    image: "/reception.jpg",
  },
  {
    title: "Room Services",
    description:
      "Comfort delivered to your door: meals, amenities, and personalized assistance at any time.",
    image: "/roomservice.jpeg",
  },
  {
    title: "Buffet Breakfast",
    description:
      "Start your day with a delicious buffet breakfast featuring fresh and hygienic options.",
    image: "/breakfas.jpg",
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
    description:
      "Spacious deluxe room with a king-sized bed, elegant decor, and premium amenities for a comfortable stay.",
    price: "350",
    images: [
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.42 PM.jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.53 PM.jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM (1).jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "King-sized Bed" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "55-inch 4K TV" },
      { icon: Bath, text: "Rainfall Shower" },
    ],
  },
  {
    name: "Executive Room",
    slug: "executive-room",
    description:
      "Modern executive room with refined finishes, ideal for business and leisure travelers alike.",
    price: "450",
    images: [
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.43 PM.jpeg"),
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.44 PM (1).jpeg"),
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.44 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "King-sized Bed" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "65-inch 4K TV" },
      { icon: Bath, text: "Soaking Tub & Rainfall Shower" },
      { icon: UtensilsCrossed, text: "Kitchenette" },
    ],
  },
  {
    name: "Premium Room",
    slug: "premium-room",
    description:
      "A premium category room offering extra space, tasteful interiors, and enhanced comfort.",
    price: "400",
    images: [
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.52 PM (1).jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.52 PM.jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.53 PM.jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM (1).jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "King-sized Bed" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "55-inch 4K TV" },
      { icon: Bath, text: "Rainfall Shower" },
    ],
  },
  {
    name: "Apartment",
    slug: "apartment",
    description:
      "Apartment-style accommodation with separate living space, perfect for extended stays.",
    price: "600",
    images: [
      encodeURI("/Appartment/WhatsApp Image 2025-08-12 at 2.52.44 PM (2).jpeg"),
      encodeURI("/Appartment/WhatsApp Image 2025-08-12 at 2.52.45 PM.jpeg"),
      encodeURI("/Appartment/WhatsApp Image 2025-08-12 at 2.52.49 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "King-sized Bed" },
      { icon: Wifi, text: "Dedicated Fiber WiFi" },
      { icon: Tv, text: "65-inch 4K TV" },
      { icon: AirVent, text: "Private Terrace" },
    ],
  },
  {
    name: "Twin Room (Single Bed)",
    slug: "twin-room-single-bed",
    description:
      "Comfortable twin room featuring single beds, ideal for friends or colleagues traveling together.",
    price: "300",
    images: [
      encodeURI("/TwinRoom Singlebed/WhatsApp Image 2025-08-12 at 2.52.46 PM (1).jpeg"),
      encodeURI("/TwinRoom Singlebed/WhatsApp Image 2025-08-12 at 2.52.46 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "Twin Single Beds" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "Smart TV" },
      { icon: Bath, text: "Modern Bathroom" },
    ],
  },
  {
    name: "Single Bedroom",
    slug: "single-bedroom",
    description:
      "Cozy single bedroom designed for solo travelers seeking comfort and value.",
    price: "200",
    images: [
      encodeURI("/SingleBedroom/WhatsApp Image 2025-08-12 at 2.52.47 PM (1).jpeg"),
      encodeURI("/SingleBedroom/WhatsApp Image 2025-08-12 at 2.52.47 PM (2).jpeg"),
      encodeURI("/SingleBedroom/WhatsApp Image 2025-08-12 at 2.52.47 PM.jpeg"),
      encodeURI("/SingleBedroom/WhatsApp Image 2025-08-12 at 2.52.48 PM.jpeg"),
      encodeURI("/SingleBedroom/WhatsApp Image 2025-08-12 at 2.52.49 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "Single Bed" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "Smart TV" },
      { icon: Bath, text: "Ensuite Bathroom" },
    ],
  },
]
