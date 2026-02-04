import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-12 text-mask text-center">Contact Us</h1>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-serif font-bold">Get In Touch</h2>
                  <p className="text-gray-400">Ask us anything. Our team is here to help you 24/7.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-mask/10 border border-mask/20 flex items-center justify-center shrink-0">
                      <MapPin className="text-mask w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Our Location</h4>
                      <p className="text-gray-400">S-19 Shahrah e Quaid e Azam, Mall Road, Lahore, 54000</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-mask/10 border border-mask/20 flex items-center justify-center shrink-0">
                      <Phone className="text-mask w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Phone Number</h4>
                      <a href="tel:+923218777749" className="text-gray-400 hover:text-white transition-colors">+92 321 8777749</a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-mask/10 border border-mask/20 flex items-center justify-center shrink-0">
                      <Mail className="text-mask w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Email Address</h4>
                      <a href="mailto:info@panoramichotel.co" className="text-gray-400 hover:text-white transition-colors">info@panoramichotel.co</a>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 grayscale">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0837597143894!2d74.32356!3d31.5627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4000000001%3A0x7b6a4829d7d3d2a!2sPanoramic%20Hotel!5e0!3m2!1sen!2s!4v1700000000000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-950 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-mask opacity-10 blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-20" />
                
                <form className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">First Name</label>
                      <Input placeholder="John" className="bg-black/50 border-white/10 focus:border-mask h-14" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Last Name</label>
                      <Input placeholder="Doe" className="bg-black/50 border-white/10 focus:border-mask h-14" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-black/50 border-white/10 focus:border-mask h-14" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Message</label>
                    <Textarea placeholder="Ask us anything..." className="bg-black/50 border-white/10 focus:border-mask min-h-[150px] resize-none" />
                  </div>

                  <Button className="w-full bg-mask text-black font-bold h-14 text-sm uppercase tracking-widest hover:brightness-125 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
