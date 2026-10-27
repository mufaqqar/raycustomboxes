
"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const brands = [
    {
        name: "LUXE",
        subtitle: "BEAUTY",
        color: "#b79a57",
        style: "font-serif text-xl tracking-[0.22em]",
        logo: "flower",
    },
    {
        name: "teami",
        subtitle: "BLENDS",
        color: "#627c55",
        style: "font-serif text-[27px] tracking-wide",
        logo: "leaf",
    },
    {
        name: "KAY",
        subtitle: "JEWELERS",
        color: "#343434",
        style: "font-serif text-[23px] tracking-[0.28em]",
        logo: "star",
    },
    {
        name: "CARTER",
        subtitle: "SURVIVAL COMPANY",
        color: "#24334c",
        style: "font-sans text-[17px] font-bold tracking-tight",
        logo: "mountain",
    },
    {
        name: "BAKERY",
        subtitle: "— DELIGHTS —",
        color: "#80634d",
        style: "font-serif text-[17px] tracking-[0.08em]",
        logo: "bakery",
    },
    {
        name: "WHOLE",
        subtitle: "HARVEST FOODS",
        color: "#426b49",
        style: "font-serif text-[17px] font-semibold tracking-[0.12em]",
        logo: "leaf",
    },
    {
        name: "PURE",
        subtitle: "SKINCARE",
        color: "#b78f9b",
        style: "font-serif text-xl tracking-[0.2em]",
        logo: "flower",
    },
    {
        name: "NATURE",
        subtitle: "ORGANICS",
        color: "#68856a",
        style: "font-serif text-[17px] tracking-[0.16em]",
        logo: "leaf",
    },
    {
        name: "ATELIER",
        subtitle: "DESIGN STUDIO",
        color: "#766b8a",
        style: "font-serif text-base tracking-[0.15em]",
        logo: "star",
    },
];

function BrandMark({
    type,
    color,
}: {
    type: string;
    color: string;
}) {
    if (type === "flower") {
        return (
            <svg viewBox="0 0 64 46" className="h-9 w-12" fill="none"
                stroke={color} strokeWidth="1">
                <path d="M32 3 L39 13 L32 20 L25 13 Z" />
                <path d="M32 16 L40 25 L32 33 L24 25 Z" />
                <path d="M20 19 L26 25 L20 31 L14 25 Z" />
                <path d="M44 19 L50 25 L44 31 L38 25 Z" />
                <path d="M32 29 L39 36 L32 43 L25 36 Z" />
                <path d="M32 3 V43 M14 25 H50" opacity=".4" />
            </svg>
        );
    }

    if (type === "leaf") {
        return (
            <svg viewBox="0 0 64 46" className="h-9 w-12" fill="none"
                stroke={color} strokeWidth="1.2" strokeLinecap="round">
                <path d="M32 39 C13 29 17 13 32 5 C47 13 51 29 32 39Z" />
                <path d="M32 39 C29 26 29 16 32 5" />
                <path d="M31 27 C23 23 20 19 19 15 M33 22 C41 19 44 15 45 12" />
            </svg>
        );
    }

    if (type === "mountain") {
        return (
            <svg viewBox="0 0 64 46" className="h-9 w-12" fill="none"
                stroke={color} strokeWidth="1.2" strokeLinejoin="round">
                <path d="M5 36 L22 13 L33 27 L40 19 L59 36 Z" />
                <path d="M17 20 L22 13 L27 20" />
                <path d="M35 36 L45 27 L54 36" />
            </svg>
        );
    }

    if (type === "bakery") {
        return (
            <svg viewBox="0 0 64 46" className="h-9 w-12" fill="none"
                stroke={color} strokeWidth="1.2" strokeLinecap="round">
                <path d="M29 6 C23 11 29 15 29 20 L35 20 C35 15 41 11 35 6 C33 4 31 4 29 6Z" />
                <path d="M32 20 V32 M27 32 H37 M25 35 H39" />
                <path d="M29 11 H35" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 46" className="h-9 w-12" fill="none"
            stroke={color} strokeWidth="1.2">
            <path d="M32 4 L39 18 L54 20 L43 30 L46 42 L32 35 L18 42 L21 30 L10 20 L25 18 Z" />
            <circle cx="32" cy="24" r="7" />
        </svg>
    );
}

export default function TrustedBrands() {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 450,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        draggable: true,
        accessibility: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#f7f7fc] via-white to-[#f7f7fc] px-4 py-10 sm:px-0 sm:py-14 lg:py-16">
            <div className="mx-auto max-w-[1400px] rounded-xl bg-white/75 py-7 px-5 sm:px-10 sm:py-10">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-3 flex items-center justify-center gap-2">
                        <span className="h-px w-4 bg-primary" />
                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                            Brands we work with
                        </span>
                        <span className="h-px w-4 bg-primary" />
                    </div>

                    <h2 className="md:text-[32px] text-2xl font-extrabold leading-tight text-primary text-center mb-4">
                        Trusted by Leading Brands Across Industries
                    </h2>

                    <p className="mx-auto mt-2 max-w-2xl text-lg text-desc sm:text-lg text-center">
                        We’re proud to partner with amazing brands that trust us for their
                        custom packaging needs. Quality, consistency, results that speak
                        for themselves.
                    </p>
                </div>

                {/* Slick carousel */}
                <div className="relative mt-7 sm:mt-9">

                    {/* Previous arrow */}
                    <button
                        type="button"
                        aria-label="Previous brands"
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="absolute -left-2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-violet-700 shadow-md transition hover:border-violet-200 hover:bg-violet-50 sm:-left-3"
                    >
                        <FiChevronLeft size={18} />
                    </button>

                    {/* Slider */}
                    <div className="overflow-hidden rounded-lg border border-slate-100 bg-white/80 px-2 py-6 sm:px-3">
                        <Slider ref={sliderRef} {...settings}>
                            {brands.map((brand) => (
                                <div key={brand.name} className="px-1">
                                    <div className="flex h-[100px] flex-col items-center justify-center rounded-lg border border-slate-100 bg-white px-1.5 transition duration-300 hover:border-violet-200 hover:shadow-sm sm:h-[110px]">
                                        <BrandMark
                                            type={brand.logo}
                                            color={brand.color}
                                        />

                                        <span
                                            className={`mt-1 whitespace-nowrap text-center leading-none text-slate-800 ${brand.style}`}
                                        >
                                            {brand.name}
                                        </span>

                                        <span
                                            className="mt-1.5 text-center text-[7px] font-medium uppercase tracking-[0.15em]"
                                            style={{ color: brand.color }}
                                        >
                                            {brand.subtitle}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Next arrow */}
                    <button
                        type="button"
                        aria-label="Next brands"
                        onClick={() => sliderRef.current?.slickNext()}
                        className="absolute -right-2 top-1/2 z-10 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-violet-700 shadow-md transition hover:border-violet-200 hover:bg-violet-50 sm:-right-3"
                    >
                        <FiChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
