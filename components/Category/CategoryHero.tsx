"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function CategoryHero() {
    return (
        <section className="bg-background px-5 py-16">
            <div className="mx-auto grid container px-4 grid-cols-1 items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
                {/* Left Content */}
                <div className="flex flex-col">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-3 flex flex-wrap items-center gap-2 text-sm text-primary"
                    >
                        <Link href="/" className="transition hover:text-prim_hovr">
                            Home
                        </Link>

                        <FiChevronRight size={13} />

                        <Link
                            href="/industry"
                            className="transition hover:text-prim_hovr"
                        >
                            Industry
                        </Link>

                        <FiChevronRight size={13} />

                        <span className="text-primary">
                            Custom Apparel Boxes
                        </span>
                    </nav>

                    {/* Heading */}
                    <h1 className="mb-6 text-[32px] leading-[1.15] font-bold tracking-tight text-primary sm:text-[36px]">
                        Custom Apparel Boxes
                    </h1>

                    {/* Description */}
                    <p className="max-w-[610px] text-base leading-[25.8px] font-normal text-desc sm:text-base mb-5">
                        Make every unboxing count with custom apparel boxes designed to
                        protect garments and enhance brand presentation. These boxes ensure
                        your customers&apos; first impression is always a &quot;wow.&quot;
                        Choose from a variety of styles and finishes including rigid,
                        foldable, or windowed designs with custom printing and functional
                        features. Perfect for fashion, retail, e-commerce, and luxury
                        brands, they deliver durability and a memorable unboxing experience
                        that elevates your brand.
                    </p>

                    {/* Pricing and Availability */}
                    <div className="mt-0 flex min-h-[70px] flex-col overflow-hidden rounded-[9px] border border-RC_Green sm:flex-row sm:items-center">
                        {/* Price */}
                        <div className="flex flex-1 items-center justify-center gap-2 px-3 py-3 sm:py-2">
                            <div className="text-center leading-tight">
                                <span className="block text-[13px] text-primary">
                                    Starting from
                                </span>
                                <span className="block text-[13px] text-primary">
                                    per box
                                </span>
                            </div>

                            <span className="text-[25px] leading-none font-bold tracking-tight text-RC_Green">
                                $0.85
                            </span>
                        </div>

                        {/* Availability */}
                        <div className="flex flex-1 flex-col items-center justify-center border-t border-[#d6d6d6] px-3 py-3 leading-tight sm:min-h-[52px] sm:border-t-0 sm:border-l sm:py-2">
                            <span className="mb-1 text-[14px] text-primary">
                                Availability
                            </span>

                            <span className="text-[20px] font-bold text-[#14a99b]">
                                In Stock
                            </span>
                        </div>

                        {/* Add to Cart */}
                        <div className="p-2 sm:pl-1">
                            <Link
                                href="/cart"
                                className="flex min-h-[52px] items-center justify-center gap-2 rounded-[7px] bg-[#252963] px-5 text-[16px] font-medium text-white transition hover:bg-[#1c204f] sm:min-w-[168px] sm:text-[17px]"
                            >
                                Add to Cart
                                <FiChevronRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Request Quote */}
                    <div className="mt-4">
                        <Link
                            href="/request-quote"
                            className="inline-flex min-h-[52px] items-center justify-center gap-1 rounded-[6px] bg-RC_Green px-6 py-3 text-[16px] font-medium text-white transition hover:bg-RC_Green_hovr sm:text-[17px]"
                        >
                            Request a Quote
                            <FiChevronRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Right Product Image */}
                <div className="relative aspect-[603/450] w-full overflow-hidden bg-[#f3e8d5]">
                    <Image
                        src="/images/workbanner.png"
                        alt="Premium olive green custom apparel box with folded clothing"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
