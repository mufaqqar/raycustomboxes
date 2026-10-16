'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const faqsData = [
    {
        question: 'Can I get suitable design recommendations for my custom boxes?',
        answer:
            "Our skilled designers are on hand to recommend the most suitable designs for your custom boxes, tailoring them according to your specifications. With our team's support, you can confidently display your products in a manner that draws in customers."
    },
    {
        question: 'Can I customize my box design?',
        answer:
            'Yes, we offer full customization including size, shape, printing, and finishing options.'
    },
    {
        question: 'What is your minimum order quantity?',
        answer:
            'Our MOQ is flexible depending on the product type and customization requirements.'
    },
    {
        question: 'How long does production take?',
        answer:
            'Production usually takes 7–12 working days after design approval.'
    },
    {
        question: 'What materials are used in your packaging?',
        answer:
            'We use premium quality cardboard, kraft, and corrugated materials with eco-friendly inks.'
    },
    {
        question: 'Can I customize my box design?',
        answer:
            'Yes, we offer full customization including size, shape, printing, and finishing options.'
    },
    {
        question: 'What is your minimum order quantity?',
        answer:
            'Our MOQ is flexible depending on the product type and customization requirements.'
    },
    {
        question: 'How long does production take?',
        answer:
            'Production usually takes 7–12 working days after design approval.'
    }
]

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null) // 👈 all closed by default

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="quote-wrapper overflow-y-auto md:px-[18px] h-[500px]">
            {faqsData.map((faq, index) => (
                <div
                    key={index}
                    className={`overflow-hidden flex items-start gap-5 md:px-5 px-0 pt-5 pb-0`}>
                    <span className={`${activeIndex === index ? "bg-Wp_Green" : "bg-primary"} min-w-9 min-h-9 text-white rounded-full flex items-center justify-center cursor-pointer`}>
                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                    <div className={`${activeIndex === index ? "border-transparent" : "border-black/50"} border-b`}>
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left pb-5 cursor-pointer">
                            <span className="text-base font-semibold text-primary">
                                {faq.question}
                            </span>

                        </button>
                        {/* Answer */}
                        <div
                            className={`transition-all duration-300 ease-in-out ${activeIndex === index
                                ? 'max-h pb-5 opacity-100'
                                : 'max-h-0 opacity-0 overflow-hidden'
                                }`}>
                            <p className="text-[15px] text-desc">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Faqs