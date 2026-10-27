
"use client";

import Slider from "react-slick";
import {
    FiArrowRight,
    FiAward,
    FiCalendar,
    FiCheck,
    FiChevronLeft,
    FiChevronRight,
    FiPackage,
    FiUsers,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        company: "Glow Beauty",
        subtitle: "Cosmetics Brand",
        category: "Custom Product Boxes",
        initials: "GB",
        color: "#51409b",
        image:
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
        review:
            "The print quality and box finish are amazing. Our brand looks more premium now!",
        reviewer: "Sarah M.",
        position: "View Project",
    },
    {
        company: "Naturals Co.",
        subtitle: "Skincare Brand",
        category: "Custom Product Boxes",
        initials: "NC",
        color: "#47713b",
        image:
            "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85",
        review:
            "Perfect packaging, on-time delivery and excellent customer support.",
        reviewer: "Emma R.",
        position: "View Project",
    },
    {
        company: "Fresh Bites",
        subtitle: "Food Brand",
        category: "Custom Shipping Boxes",
        initials: "FB",
        color: "#aa7950",
        image:
            "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=700&q=85",
        review:
            "Sturdy boxes, great printing and eco-friendly. Highly recommended!",
        reviewer: "James T.",
        position: "View Project",
    },
    {
        company: "Fresh Bites",
        subtitle: "Food Brand",
        category: "Custom Shipping Boxes",
        initials: "FB",
        color: "#aa7950",
        image:
            "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=700&q=85",
        review:
            "Sturdy boxes, great printing and eco-friendly. Highly recommended!",
        reviewer: "James T.",
        position: "View Project",
    },
];

const stats = [
    {
        icon: FiUsers,
        value: "10,000+",
        label: "Happy Customers",
    },
    {
        icon: FiPackage,
        value: "1M+",
        label: "Orders Delivered",
    },
    {
        icon: FiAward,
        value: "4.9/5",
        label: "Average Rating",
    },
    {
        icon: FiCalendar,
        value: "12+ Years",
        label: "of Experience",
    },
];

function PreviousArrow({
    onClick,
}: {
    onClick?: () => void;
}) {
    return (
        <button
            type="button"
            aria-label="Previous reviews"
            onClick={onClick}
            className="absolute -left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-sm transition hover:bg-violet-50"
        >
            <FiChevronLeft size={18} />
        </button>
    );
}

function NextArrow({
    onClick,
}: {
    onClick?: () => void;
}) {
    return (
        <button
            type="button"
            aria-label="Next reviews"
            onClick={onClick}
            className="absolute -right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-sm transition hover:bg-violet-50"
        >
            <FiChevronRight size={18} />
        </button>
    );
}

export default function CustomerReviews() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 450,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        adaptiveHeight: false,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#f5f5fd] via-[#fafaff] to-[#f0effb] px-4 py-10 sm:px-0 sm:py6">
            <div className="mx-auto max-w-[1400px] rounded-xl border border-slate-200/70 bg-white/30 px-4 py-7 sm:px-7 sm:py-9 lg:px-8">
                {/* HEADER */}
                <div className="text-center">
                    <div className="mb-2 inline-flex items-center rounded-full bg-violet-100/80 px-3 py-1">
                        <span className="text-sm font-medium text-primary uppercase tracking-[0.12em]">
                            Customer Reviews
                        </span>
                    </div>

                    <h2 className="md:text-[32px] text-2xl font-extrabold leading-tight text-primary text-center mb-4">
                        See How Brands Package Better
                    </h2>

                    <p className="mx-auto mt-2 max-w-2xl text-lg text-desc sm:text-lg text-center">
                        Real stories from real businesses. See how our custom packaging
                        helps brands elevate their product presentation and customer
                        experience.
                    </p>
                </div>

                {/* REVIEW CAROUSEL */}
                <div className="reviews-slider relative mt-6 px-1 sm:mt-7 sm:px-1">
                    <Slider {...settings}>
                        {reviews.map((review) => (
                            <div key={review.company} className="h-full px-1.5 pb-2">
                                <article className="flex md:h-[220px] h-[250px] gap-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-[0_3px_12px_rgba(28,32,70,0.035)] transition hover:border-violet-200 hover:shadow-md sm:h-[230px]">
                                    {/* PRODUCT IMAGE */}
                                    <div className="h-full w-[40%] shrink-0 overflow-hidden rounded-md bg-[#f1f0f5]">
                                        <img
                                            src={review.image}
                                            alt={`${review.company} product packaging`}
                                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* REVIEW DETAILS */}
                                    <div className="flex min-w-0 flex-1 flex-col py-1 pr-1">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                                                style={{ backgroundColor: review.color }}
                                            >
                                                {review.initials}
                                            </div>

                                            <div className="min-w-0">
                                                <h3 className="truncate text-xs font-bold text-primary sm:text-sm">
                                                    {review.company}
                                                </h3>
                                                <p className="mt-0.5 truncate text-xs text-desc">
                                                    {review.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-2.5 w-fit max-w-full rounded-full bg-[#f4f1ff] px-2 py-1">
                                            <span className="block truncate text-sm font-medium text-primary">
                                                {review.category}
                                            </span>
                                        </div>

                                        {/* STAR RATING */}
                                        <div
                                            className="mt-2 flex items-center gap-0.5 text-[#f59e0b]"
                                            aria-label="5 out of 5 stars"
                                        >
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FaStar key={index} className="text-sm leading-none" />
                                            ))}
                                        </div>

                                        <p className="mt-2 text-xs leading-[1.65] text-desc">
                                            “{review.review}”
                                        </p>

                                        <div className="mt-auto flex items-center justify-between gap-1 pt-2">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    window.alert(
                                                        `Connect the ${review.company} project to your case-study page.`
                                                    )
                                                }
                                                className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary transition hover:text-prim_hovr"
                                            >
                                                {review.position}
                                                <FiArrowRight size={11} />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* STATISTICS */}
                <div className="mt-6 grid grid-cols-2 gap-y-5 rounded-xl border border-violet-100/80 bg-[#f5f3ff]/80 px-3 py-5 sm:grid-cols-4 sm:gap-y-0 sm:px-2 sm:py-4">
                    {stats.map(({ icon: Icon, value, label }, index) => (
                        <div
                            key={label}
                            className={`flex items-center justify-center gap-2.5 px-2 sm:px-3 ${index !== 0
                                ? "sm:border-l sm:border-violet-200/80"
                                : ""
                                }`}
                        >
                            <Icon
                                size={23}
                                strokeWidth={1.4}
                                className="shrink-0 text-primary"
                            />

                            <div className="min-w-0">
                                <p className="text-sm font-bold leading-tight text-[#171934] sm:text-base">
                                    {value}
                                </p>
                                <p className="mt-1 text-[9px] leading-tight text-slate-500 sm:text-[10px]">
                                    {label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
