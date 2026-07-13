"use client"

import Image from "next/image"

export function WhatsAppButton() {
  const phoneNumber = "+923218777749"
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 group animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/whatsapp-app.png" alt="WhatsApp" width={70} height={70} className=" group-hover:rotate-12 transition-transform rounded-full" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
    </a>
  )
}
