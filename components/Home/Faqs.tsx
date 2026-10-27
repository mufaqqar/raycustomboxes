
'use client'

import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const faqsData = [
  {
    question: 'Can I get suitable design recommendations for my custom boxes?',
    answer:
      "Our skilled designers are on hand to recommend the most suitable designs for your custom boxes, tailoring them according to your specifications. With our team's support, you can confidently display your products in a manner that draws in customers.",
  },
  {
    question: 'Can I customize my box design?',
    answer:
      'Yes, we offer full customization, including size, shape, printing, and finishing options to match your product and brand requirements.',
  },
  {
    question: 'What is your minimum order quantity?',
    answer:
      'Our minimum order quantity is flexible depending on the product type, box size, and customization requirements. Contact our team for a quote tailored to your needs.',
  },
  {
    question: 'How long does production take?',
    answer:
      'Production usually takes 7–12 working days after design approval. Delivery time may vary depending on your location and order specifications.',
  },
  {
    question: 'What materials are used in your packaging?',
    answer:
      'We use premium-quality cardboard, kraft paper, and corrugated materials, with printing and finishing options to suit your packaging needs.',
  },
  {
    question: 'Can I get a sample before placing a bulk order?',
    answer:
      'Yes, sample options may be available depending on your packaging requirements. Contact our team to discuss your design and sample needs.',
  },
  {
    question: 'Can I print my logo on custom boxes?',
    answer:
      'Absolutely! We offer custom printing options so you can add your logo, brand colors, product information, and other artwork to your boxes.',
  },
  {
    question: 'Do you offer shipping across the USA?',
    answer:
      'We can help arrange delivery for your packaging orders. Contact our team to confirm shipping availability, delivery estimates, and costs for your location.',
  },
]

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
        {/* Heading */}
        <h2 className="mb-4 text-center text-2xl font-extrabold leading-tight text-primary md:text-[32px]">
          Frequently Asked Questions (FAQs)
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-7 text-desc md:mb-10 md:text-lg">
          Trusted by 1,000+ USA brands, Ray Custom Boxes provides clear answers
          to your most common questions about custom packaging, printing,
          pricing, and fast delivery.
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2 md:px-[18px]">
          {faqsData.map((faq, index) => {
            const isOpen = activeIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <div
                key={`${faq.question}-${index}`}
                className="flex items-start gap-3 border-b border-black/15 py-5 md:gap-4"
              >
                {/* Toggle Icon */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  aria-label={`${isOpen ? 'Close' : 'Open'}: ${faq.question}`}
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isOpen
                      ? 'bg-Wp_Green'
                      : 'bg-primary hover:bg-Wp_Green'
                  }`}
                >
                  {isOpen ? (
                    <FaMinus size={13} />
                  ) : (
                    <FaPlus size={13} />
                  )}
                </button>

                {/* Question + Answer */}
                <div className="min-w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-start justify-between gap-3 text-left focus-visible:outline-none"
                  >
                    <span className="text-sm font-semibold leading-6 text-primary md:text-base">
                      {faq.question}
                    </span>
                  </button>

                  {/* Animated Answer */}
                  <div
                    id={answerId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm leading-7 text-desc md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faqs
