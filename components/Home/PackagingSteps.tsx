
"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
    {
        label: "Structural Design",
        heading: "Structural Design",
        img: "/images/workbanner.png",
        description:
            "The first and most important step is to lay out perfect structural die lines for your boxes. No worries, we will take care of it. Our team will create a dieline for you with no additional charges to set up your artwork. We will make sure the dielines work well after the final production is commenced. How do we do it?",
        points: [
            "We will create a custom structural dieline",
            "You can put up your artwork in those dielines as per instructions",
            "Our team will recheck everything and create a dummy to ensure perfection",
            "We will send you the final version of file for approval",
        ],
    },
    {
        label: "Graphic Design",
        heading: "Graphic Design",
        img: "/images/instant.png",
        description:
            "Our graphic design team helps bring your packaging to life. We prepare artwork that fits your packaging dimensions and reflects your brand identity.",
        points: [
            "We will review your artwork and brand requirements",
            "Our team will prepare print-ready packaging designs",
            "We will check colors, fonts, images, and alignment",
            "We will send you the final artwork for approval",
        ],
    },
    {
        label: "Prototyping",
        heading: "Prototyping",
        img: "/images/workbanner.png",
        description:
            "Before moving into mass production, we help you visualize and evaluate your packaging design with a prototype. This allows you to review the structure and fit.",
        points: [
            "We will prepare a packaging prototype",
            "You can evaluate the box structure and dimensions",
            "Our team will review your feedback and make adjustments",
            "We will finalize the prototype before production",
        ],
    },
    {
        label: "Production Management",
        heading: "Production Management",
        img: "/images/instant.png",
        description:
            "Once your packaging design is approved, our team coordinates the production process to help maintain quality, consistency, and reliable delivery.",
        points: [
            "We will prepare your approved design for production",
            "Our team will coordinate the manufacturing process",
            "We will monitor packaging quality and finishing",
            "We will prepare your finished packaging for delivery",
        ],
    },
];


export default function PackagingSteps() {
    const [activeStep, setActiveStep] = useState(0);
    const step = steps[activeStep];

    return (
        <section className="relative overflow-hidden bg-primary py-16">
            <div className="mx-auto container px-4 ">
                {/* Heading */}
                <h2 className="md:text-[32px] text-2xl font-extrabold leading-tight text-black mb-4">
                    Custom Boxes And Packaging{" "}
                    <span className="italic text-white">
                        In 4 Steps:
                    </span>
                </h2>

                <div className="mt-6 h-px w-full bg-white/80" />

                {/* Tabs */}
                <div
                    className="mt-3 grid grid-cols-2 gap-1 sm:grid-cols-4"
                    role="tablist"
                    aria-label="Packaging process steps"
                >
                    {steps.map((item, index) => (
                        <button
                            key={item.label}
                            id={`packaging-tab-${index}`}
                            type="button"
                            role="tab"
                            aria-selected={activeStep === index}
                            aria-controls="packaging-panel"
                            onClick={() => setActiveStep(index)}
                            className={`min-h-9 rounded-md border border-dashed px-2 py-3 text-center text-xs font-bold transition-colors duration-200 sm:text-sm ${activeStep === index
                                ? "border-white bg-white/10 text-white"
                                : "border-white/70 text-white hover:bg-white/10"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="mt-10 grid grid-cols-1 items-center gap-8 md:mt-12 md:grid-cols-[1.45fr_0.85fr] md:gap-10">
                    <div
                        id="packaging-panel"
                        role="tabpanel"
                        aria-labelledby={`packaging-tab-${activeStep}`}
                        key={activeStep}
                        className="animate-[fadeIn_300ms_ease-in-out]"
                    >
                        <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
                            {step.heading}
                        </h3>

                        <p className="text-sm leading-[1.48] text-white md:text-base">
                            {step.description}
                        </p>

                        <ul className="mt-5 list-disc space-y-1 pl-7 text-sm leading-[1.4] text-white md:text-base">
                            {step.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>

                        <a
                            href="/request-quote"
                            className="text-base font-semibold text-white hover:bg-[#b80e16] bg-[#d3131b] rounded-md whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5 mt-5 px-6 py-3 transition-colors "
                        >
                            Get a Free Quote
                        </a>
                    </div>


                    {/* Packaging artwork */}
                    <div className="flex items-center justify-center md:justify-end">
                        <Image
                            src={step.img}
                            alt={step.heading}
                            width={600}
                            height={598}
                            className="h-auto w-full max-w-[400px] object-contain"
                            priority={activeStep === 0}
                        />
                    </div>

                </div>
            </div>

            {/* Decorative wave */}
            <svg
                viewBox="0 0 240 28"
                className="absolute bottom-10 left-0 w-48 sm:w-60"
                aria-hidden="true"
                fill="none"
            >
                <path
                    d="M-10 7 C5 7 9 27 24 27 S43 7 58 7 S77 27 92 27 S111 7 126 7 S145 27 160 27 S179 7 194 7 S213 27 228 27"
                    stroke="white"
                    strokeWidth="4"
                />
            </svg>


        </section>
    );
}
