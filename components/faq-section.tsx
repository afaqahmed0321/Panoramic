import { faqs } from "@/lib/data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FAQSection() {
  const halfwayPoint = Math.ceil(faqs.length / 2)
  const firstColumn = faqs.slice(0, halfwayPoint)
  const secondColumn = faqs.slice(halfwayPoint)

  return (
    <section className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-mask/5 blur-3xl rounded-full -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-mask mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about your stay at Panoramic Hotel
          </p>
        </div>

        {/* Two Column Layout - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* First Column */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {firstColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-black/50 border border-gray-800 rounded-lg px-6 data-[state=open]:border-mask/40 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-white hover:text-mask font-semibold py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Second Column */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {secondColumn.map((faq, index) => (
                <AccordionItem
                  key={index + halfwayPoint}
                  value={`item-${index + halfwayPoint}`}
                  className="bg-black/50 border border-gray-800 rounded-lg px-6 data-[state=open]:border-mask/40 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-white hover:text-mask font-semibold py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Single Column Layout - Mobile */}
        <div className="md:hidden max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black/50 border border-gray-800 rounded-lg px-6 data-[state=open]:border-mask/40 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white hover:text-mask font-semibold py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Still have questions? We're here to help!</p>
          <Link href="/contact">
            <Button size="lg" className="bg-mask text-black hover:brightness-125 font-bold px-8 py-6 text-base">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
