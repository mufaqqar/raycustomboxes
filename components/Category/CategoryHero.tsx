"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import type { Category } from "@/data/Categories";

export default function CategoryHero({ category }: { category: Category }) {
    return (
        <section className="bg-background px-4 py-10 md:py-14">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
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

                        <Link href="/products" className="transition hover:text-prim_hovr">
                            Products
                        </Link>

                        <FiChevronRight size={13} />

                        <span className="text-primary font-medium">{category.shortName}</span>
                    </nav>

                    {/* Heading */}
                    <h1 className="mb-4 text-[30px] leading-[1.15] font-extrabold tracking-tight text-primary sm:text-[38px]">
                        {category.name}
                    </h1>

                    {/* Description */}
                    <p className="mb-6 max-w-[610px] text-base leading-[26px] text-desc">
                        {category.description}
                    </p>

                    {/* Pricing and Availability */}
                    <div className="mt-0 flex min-h-[70px] flex-col overflow-hidden rounded-[10px] border border-RC_Green bg-white sm:flex-row sm:items-center">
                        {/* Price */}
                        <div className="flex flex-1 items-center justify-center gap-2 px-4 py-3 sm:py-2">
                            <div className="text-center leading-tight">
                                <span className="block text-xs text-primary">
                                    Starting from
                                </span>
                                <span className="block text-xs text-primary">
                                    per box
                                </span>
                            </div>

                            <span className="text-[28px] leading-none font-bold tracking-tight text-RC_Green">
                                {category.startingPrice}
                            </span>
                        </div>

                        {/* Availability */}
                        <div className="flex flex-1 flex-col items-center justify-center border-t border-RC_border px-4 py-3 leading-tight sm:min-h-[52px] sm:border-t-0 sm:border-l sm:py-2">
                            <span className="mb-1 text-xs text-primary">
                                Availability
                            </span>

                            <span className="text-lg font-bold text-[#14a99b]">
                                In Stock
                            </span>
                        </div>

                        {/* Add to Cart */}
                        <div className="p-2 sm:pl-1">
                            <Link
                                href="/cart"
                                className="flex min-h-[52px] items-center justify-center gap-2 rounded-[8px] bg-[#252963] px-6 text-base font-semibold text-white transition hover:bg-[#1c204f] sm:min-w-[168px]"
                            >
                                Add to Cart
                                <FiChevronRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Request Quote */}
                    <div className="mt-4">
                        <Link
                            href="/request-quote"
                            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[8px] bg-RC_Green px-7 text-base font-semibold text-white transition hover:bg-RC_Green_hovr"
                        >
                            Request a Quote
                            <FiChevronRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Right Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#f5f5f5]">
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
