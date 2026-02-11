import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Panoramic Hotel Lahore Pakistan",
  description: "Read the privacy policy of Panoramic Hotel Lahore to understand how we collect, use, and protect customer information securely.",
  keywords: ["Panoramic Hotel privacy policy", "hotel privacy policy Lahore"],
  alternates: {
    canonical: "https://www.panoramichotel.co/privacy-policy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-12 text-mask">Privacy Policy</h1>
            
            <div className="space-y-12 text-gray-300 leading-relaxed">
              <section>
                <p className="text-lg">At Panoramic Hotel, we respect your privacy and are committed to protecting your personal information.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-l-4 border-mask pl-4">Information We Collect</h2>
                <p>We may collect personal details such as your name, email address, phone number, and booking information when you contact us, make a reservation, or use our website.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-l-4 border-mask pl-4">How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>To process bookings and reservations</li>
                  <li>To communicate with you regarding your stay or inquiries</li>
                  <li>To improve our services and overall customer experience</li>
                  <li>To ensure security and prevent fraud</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-l-4 border-mask pl-4">Data Protection</h2>
                <p>We do not sell, trade, or share your personal information with third parties, except when required by law or when necessary to provide hotel-related services.</p>
              </section>

              <section className="space-y-4 bg-red-900/10 p-8 rounded-xl border border-red-900/20">
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Guest Policy</h2>
                <p className="font-semibold text-gray-200">To comply with local laws and hotel regulations, non-married couples are not allowed at Panoramic Hotel. Valid identification and, where applicable, proof of marriage may be required at the time of check-in.</p>
              </section>

              <section className="pt-8 border-t border-white/10">
                <p className="text-sm italic text-gray-500">By using our website or services, you agree to this Privacy Policy and the hotel’s terms and conditions.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
