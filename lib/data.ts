import { AirVent, Bath, BedDouble, Tv, UtensilsCrossed, Wifi, Car, Utensils, Droplets, AirVent as Climate, MonitorPlay } from "lucide-react"

export const amenities = [
  { icon: Wifi, name: "High-Speed WiFi" },
  { icon: Car, name: "Valet Parking" },
  { icon: Utensils, name: "Fine Dining" },
  { icon: Droplets, name: "Hot Water" },
  { icon: Climate, name: "Climate Control" },
  { icon: MonitorPlay, name: "Smart Entertainment" },
]

export const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in time is 2:00 PM and check-out time is 12:00 PM (noon). Early check-in and late check-out may be available upon request, subject to availability."
  },
  {
    question: "Do you offer airport shuttle service?",
    answer: "Yes, we provide airport shuttle service to and from Allama Iqbal International Airport. Please contact us in advance to arrange transportation."
  },
  {
    question: "Is breakfast included in the room rate?",
    answer: "Breakfast inclusion depends on the room package you select. Some room rates include complimentary buffet breakfast, while others may be room-only. Please check your booking details or contact us for clarification."
  },
  {
    question: "Do you have parking facilities?",
    answer: "Yes, we offer secure parking facilities for our guests free of charge. Both indoor and outdoor parking spaces are available."
  },
  {
    question: "Is WiFi available at the hotel?",
    answer: "Yes, high-speed WiFi is available throughout the hotel premises, including all guest rooms and common areas, completely free of charge."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 48 hours before the check-in date will receive a full refund. Cancellations made within 48 hours of check-in may be subject to a one-night charge. Please refer to your booking confirmation for specific terms."
  },
  {
    question: "Do you allow pets?",
    answer: "Unfortunately, we do not allow pets at our hotel, with the exception of certified service animals."
  },
  {
    question: "Are there restaurants nearby?",
    answer: "Yes, being located on Mall Road, we are surrounded by numerous restaurants, cafes, and eateries offering a variety of cuisines. Additionally, we provide in-room dining and buffet breakfast services."
  },
  {
    question: "Can I request an extra bed?",
    answer: "Yes, extra beds can be provided upon request for an additional charge. Please contact us in advance to ensure availability."
  },
  {
    question: "How far is the hotel from major attractions?",
    answer: "Panoramic Hotel is strategically located on Mall Road, one of Lahore's most iconic areas. We are within walking distance of major attractions including Lahore Museum, Liberty Market, and various shopping centers."
  },
  {
    question: "Do you have a 24-hour front desk?",
    answer: "Yes, our reception operates 24/7 to assist you with check-ins, check-outs, and any inquiries or assistance you may need during your stay."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash payments in Pakistani Rupees (PKR), as well as major credit and debit cards including Visa, MasterCard, and local bank cards."
  }
]

export const services = [
  {
    image: "/ElecricityBackup.webp",
    name: "24/7 Electricity Backup",
    description: "Enjoy uninterrupted comfort with our 24/7 electricity backup, ensuring a smooth and hassle-free stay."
  },
  {
    image: "/cctv.jpeg",
    name: "CCTV Cameras in All Common Areas",
    description: "Our property is fully secured with CCTV cameras in all common areas, offering enhanced safety and peace of mind."
  },
  {
    image: "/security.jpeg",
    name: "24/7 Security",
    description: "We provide 24/7 hotel security services with trained staff monitoring the premises at all times."
  },
  {
    image: "/food.webp",
    name: "Hygienic Food",
    description: "We prioritize health and quality by serving fresh and hygienic food, prepared under strict cleanliness standards."
  },
  {
    image: "/parking.jpg",
    name: "Parking Facility",
    description: "Our hotel offers a secure parking facility for guests, providing convenience and ease for those traveling by car."
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
    location: "Lahore, Pakistan",
    stars: 5,
    review:
      "It was my first experience to stay at this hotel. Fortunately, the experience was very good. Room was clean, bed sheets, towels were also well cleaned. Hot and cold water was available, AC was also working.",
  },
  {
    name: "Ahmed Hassan",
    location: "Karachi, Pakistan",
    stars: 5,
    review:
      "Excellent location on Mall Road with easy access to shopping and restaurants. The staff was very professional and helpful. Breakfast was delicious with plenty of options. Highly recommend!",
  },
  {
    name: "Sarah Khan",
    location: "Islamabad, Pakistan",
    stars: 5,
    review:
      "Beautiful hotel with amazing views. The room was spacious and well-maintained. Staff went above and beyond to make our stay comfortable. Will definitely return!",
  },
  {
    name: "John D.",
    location: "United Kingdom",
    stars: 5,
    review:
      "Absolutely breathtaking. The views from the room are unparalleled, and the service was impeccable from start to finish. A truly 5-star experience in the heart of Lahore.",
  },
  {
    name: "Maria S.",
    location: "United States",
    stars: 5,
    review:
      "A wonderful stay. The room was luxurious and the staff were incredibly attentive. Great value for money. The location is perfect for exploring Lahore. I'll definitely be back!",
  },
  {
    name: "Ali Raza",
    location: "Faisalabad, Pakistan",
    stars: 4,
    review:
      "Very good hotel with clean rooms and friendly staff. The buffet breakfast was excellent. Parking was convenient. Only minor issue was WiFi speed, but overall a great experience.",
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
      encodeURI("/SingleBedroom/WhatsApp Image 2025-08-12 at 2.52.48 PM.jpeg"),
      encodeURI("/SingleBedroom/WhatsApp Image 2025-08-12 at 2.52.49 PM.jpeg"),
      encodeURI("/SingleBedroom/WhatsApp Image 2025-08-12 at 2.52.47 PM (2).jpeg"),
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
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.52 PM (1).jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.52 PM.jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.53 PM.jpeg"),
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
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM (1).jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.54 PM.jpeg"),
      encodeURI("/PrremiumRooms/WhatsApp Image 2025-08-12 at 2.52.53 PM.jpeg"),
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
