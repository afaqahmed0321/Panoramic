import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  const terms = [
    {
      title: "Bookings & Reservations",
      content: "All bookings at Panoramic Hotel Mall Road Lahore are subject to availability and confirmation. Guests must provide accurate, complete, and up-to-date information at the time of booking. The hotel reserves the right to cancel or modify reservations if incorrect information is provided."
    },
    {
      title: "Pricing & Services",
      content: "Panoramic Hotel reserves the right to modify room rates, offers, services, or website content at any time without prior notice. Prices may vary based on season, availability, and demand."
    },
    {
      title: "Guest Conduct",
      content: "Guests are expected to maintain respectful and appropriate behavior during their stay. Any activity that disturbs other guests or violates hotel policies may result in immediate action, including cancellation of the stay without refund."
    },
    {
      title: "Property Damage",
      content: "Guests will be held responsible for any damage to hotel property caused during their stay. The cost of repairs or replacements may be charged accordingly."
    },
    {
      title: "Personal Belongings",
      content: "While staying at Panoramic Hotel in Lahore, guests are responsible for the safety of their personal belongings. The hotel is not liable for loss, theft, or damage to personal items unless required by applicable law."
    },
    {
      title: "Policy Updates",
      content: "Panoramic Hotel reserves the right to update or change these Terms & Conditions at any time. Continued use of the website or hotel services indicates acceptance of the revised terms."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-mask">Terms & Conditions</h1>
            <p className="text-gray-400 mb-12">By accessing and using the Panoramic Hotel – Mall Road Lahore website, you agree to comply with the following terms and conditions. These terms apply to all guests who book or stay at our hotel in Lahore.</p>
            
            <div className="grid gap-8">
              {terms.map((term, index) => (
                <div key={index} className="bg-gray-950 p-8 rounded-xl border border-white/5 space-y-4 hover:border-mask/30 transition-colors">
                  <h2 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                    <span className="text-mask font-serif text-2xl">0{index + 1}</span>
                    {term.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">{term.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
