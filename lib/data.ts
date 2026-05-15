import { AirVent, Bath, BedDouble, Tv, UtensilsCrossed, Wifi } from "lucide-react"

export const services = [
  {
    image: "/reception.jpg",
    name: "Booking Area",
    description: "Seamless booking experience with our dedicated reservation desk. Book your stay with ease and convenience."
  },
  {
    image: "/reception.jpg",
    name: "24/7 Reception",
    description: "Our 24/7 hotel reception service provides seamless check-ins, express check-outs, and continuous guest assistance."
  },
  {
    image: "/roomservice.jpeg",
    name: "Room Services",
    description: "Enjoy convenient hotel room service delivering meals, amenities, and personalized assistance directly to your room."
  },
  {
    image: "/breakfas.jpg",
    name: "Buffet Breakfast",
    description: "Start your day with a wholesome buffet breakfast featuring fresh, hygienic, and carefully prepared options."
  },
  {
    image: "/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.42 PM.jpeg",
    name: "Premium Rooms",
    description: "Explore our collection of premium rooms with competitive pricing, from standard to deluxe suites."
  },
]

export const personalizedServices = [
  {
    title: "Reception",
    description:
      "Our 24/7 hotel reception service provides seamless check-ins, express check-outs, and continuous guest assistance.",
    image: "/reception.jpg",
  },
  {
    title: "Room Services",
    description:
      "Enjoy convenient hotel room service delivering meals, amenities, and personalized assistance directly to your room.",
    image: "/roomservice.jpeg",
  },
  {
    title: "Buffet Breakfast",
    description:
      "Start your day with a wholesome buffet breakfast at our luxury hotel, featuring fresh, hygienic, and carefully prepared options.",
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
    name: "Standard Single Room",
    slug: "standard-single-room",
    description:
      "Cozy single room designed for solo travelers seeking comfort and value.",
    price: "4500",
    priceNote: "+ tax",
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
  {
    name: "Standard Double Room",
    slug: "standard-double-room",
    description:
      "Comfortable double room with a spacious bed, perfect for couples or solo travelers seeking extra space.",
    price: "5000",
    priceNote: "+ tax",
    images: [
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.42 PM.jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.53 PM.jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM (1).jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "Double Bed" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "Smart TV" },
      { icon: Bath, text: "Rainfall Shower" },
    ],
  },
  {
    name: "Standard Twin Room",
    slug: "standard-twin-room",
    description:
      "Comfortable twin room featuring two single beds, ideal for friends or colleagues traveling together.",
    price: "5000",
    priceNote: "+ tax",
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
    name: "Deluxe Twin Room",
    slug: "deluxe-twin-room",
    description:
      "Spacious deluxe twin room with two comfortable beds, elegant decor, and premium amenities.",
    price: "6000",
    priceNote: "+ tax",
    images: [
      encodeURI("/TwinRoom Singlebed/WhatsApp Image 2025-08-12 at 2.52.46 PM (1).jpeg"),
      encodeURI("/TwinRoom Singlebed/WhatsApp Image 2025-08-12 at 2.52.46 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "Twin Beds" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "55-inch 4K TV" },
      { icon: Bath, text: "Rainfall Shower" },
    ],
  },
  {
    name: "Deluxe Double Room",
    slug: "deluxe-double-room",
    description:
      "Elegant deluxe room with a double bed, refined finishes, and premium amenities for a luxurious stay.",
    price: "6000",
    priceNote: "+ tax",
    images: [
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.42 PM.jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.53 PM.jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM (1).jpeg"),
      encodeURI("/DeluxKingRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "Double Bed" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "55-inch 4K TV" },
      { icon: Bath, text: "Rainfall Shower" },
    ],
  },
  {
    name: "Deluxe Triple Room",
    slug: "deluxe-triple-room",
    description:
      "Spacious triple room perfect for small families or groups, featuring three comfortable beds and modern amenities.",
    price: "6500",
    priceNote: "+ tax",
    images: [
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.52 PM (1).jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.52 PM.jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.53 PM.jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM (1).jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "Three Beds" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "55-inch 4K TV" },
      { icon: Bath, text: "Rainfall Shower" },
    ],
  },
  {
    name: "Deluxe Quad Room",
    slug: "deluxe-quad-room",
    description:
      "Extra spacious quad room ideal for families or groups of four, with four beds and enhanced amenities.",
    price: "7500",
    priceNote: "+ tax",
    images: [
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.43 PM.jpeg"),
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.44 PM (1).jpeg"),
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.44 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "Four Beds" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "65-inch 4K TV" },
      { icon: Bath, text: "Modern Bathroom" },
    ],
  },
  {
    name: "One Bed Suite",
    slug: "one-bed-suite",
    description:
      "Luxurious suite with separate living area, offering enhanced space and comfort for a premium experience.",
    price: "7000",
    priceNote: "+ tax",
    images: [
      encodeURI("/Appartment/WhatsApp Image 2025-08-12 at 2.52.44 PM (2).jpeg"),
      encodeURI("/Appartment/WhatsApp Image 2025-08-12 at 2.52.45 PM.jpeg"),
      encodeURI("/Appartment/WhatsApp Image 2025-08-12 at 2.52.49 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "King-sized Bed" },
      { icon: Wifi, text: "Dedicated Fiber WiFi" },
      { icon: Tv, text: "65-inch 4K TV" },
      { icon: Bath, text: "Soaking Tub & Rainfall Shower" },
      { icon: UtensilsCrossed, text: "Kitchenette" },
    ],
  },
  {
    name: "Interconnecting Room",
    slug: "interconnecting-room",
    description:
      "Two connected rooms perfect for large families or groups, offering privacy and convenience with shared access.",
    price: "9000",
    priceNote: "+ tax",
    images: [
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.43 PM.jpeg"),
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.44 PM (1).jpeg"),
      encodeURI("/ExecutiveRooms/WhatsApp Image 2025-08-12 at 2.52.44 PM.jpeg"),
    ],
    amenities: [
      { icon: BedDouble, text: "Multiple Beds" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Tv, text: "Multiple TVs" },
      { icon: Bath, text: "Two Bathrooms" },
      { icon: AirVent, text: "Interconnecting Door" },
    ],
  },
]
