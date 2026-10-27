
"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

const blogs = [
    {
        id: 1,
        title:
            "Types of Packaging: A Complete Guide to Packaging Materials,...",
        href: "/blog/types-of-packaging",
        image: "/images/gallery/1.jpg",
    },
    {
        id: 2,
        title:
            "Shoe Box Dimensions: Complete Guide to Standard, Average, and...",
        href: "/blog/shoe-box-dimensions",
        image: "/images/gallery/2.jpg",
    },
    {
        id: 3,
        title:
            "What Is Corrugate? Types, Materials, Uses and Benefits",
        href: "/blog/what-is-corrugate",
        image: "/images/gallery/3.jpg",
    },
];

function ProductImage({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    const [error, setError] = useState(false);

    return (
        <div className="relative h-full w-full overflow-hidden bg-[#f0f1f6]">
            {!error ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={() => setError(true)}
                />
            ) : (
                <div className="flex h-full items-center justify-center text-[10px] text-slate-400">
                    Product image
                </div>
            )}
        </div>
    );
}

export default function BlogSection() {

    return (
        <section className="py-16">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
                {/* HEADER */}
                <div className="mb-3 flex md:flex-row flex-col items-center justify-between gap-3">
                    <div className="min-w-0 md:text-left text-center">
                        <h2 className="md:text-[32px] text-2xl font-extrabold leading-tight text-primary mb-4 md:text-left text-center">
                            Learn About Custom Boxes from the Pros
                        </h2>

                        <p className="mt-2 max-w-2xl text-lg text-desc sm:text-lg md:text-left text-center">
                            Stay updated with the latest packaging trends, design ideas,
                            and expert tips, all curated by Erum Packaging professionals.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md px-10 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5"
                    >
                        Visit Blogs <FiArrowRight size={11} />
                    </Link>
                </div>

                {/* THREE COMPACT BLOG CARDS */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="group flex min-w-0 flex-col overflow-hidden rounded-[9px] border border-[#d9d9e5] bg-white transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(30,20,70,0.09)]"
                        >
                            {/* IMAGE: SAME HEIGHT ON ALL CARDS */}
                            <Link
                                href={blog.href}
                                aria-label={blog.title}
                                className="block h-[150px] shrink-0 overflow-hidden sm:h-[175px] lg:h-[clamp(96px,12vw,250px)]"
                            >
                                <ProductImage src={blog.image!} alt={blog.title} />
                            </Link>

                            {/* TEXT AREA */}
                            <div className="flex min-h-[62px] flex-1 flex-col px-2.5 pb-2 pt-1.5 sm:px-3">
                                <Link href={blog.href}>
                                    <h3 className="text-lg font-medium mt-2 text-primary hover:text-prim_hovr">
                                        {blog.title}
                                    </h3>
                                </Link>

                                <div className="mt-auto pt-2">
                                    <Link
                                        href={blog.href}
                                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-prim_hovr"
                                    >
                                        Read More <FiArrowRight size={10} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
