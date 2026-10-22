import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/Common/PageHero";
import CTA from "@/components/Home/CTA";
import { Blogs } from "@/data/Blogs";

export const metadata: Metadata = {
    title: "Packaging Blog | Ray Custom Boxes",
    description:
        "Packaging guides, sizing charts, material comparisons and design ideas from the Ray Custom Boxes team.",
};

export default function BlogPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Packaging Blog"
                subtitle="Guides, material comparisons and design ideas to help you choose the right box, size and finish for your product."
                crumbs={[{ label: "Blog" }]}
            />

            <section className="bg-white py-10 md:py-14">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {Blogs.map((post) => (
                            <article
                                key={post.slug}
                                className="group flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-RC_border bg-white transition-shadow duration-300 hover:shadow-[0_14px_34px_rgb(56,56,130,0.14)]"
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="relative block aspect-[16/10] overflow-hidden bg-[#f0f1f6]"
                                    aria-label={post.title}
                                >
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                                    />
                                </Link>

                                <div className="flex flex-1 flex-col px-5 py-5">
                                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-RC_Green">
                                        <span>{post.category}</span>
                                        <span className="text-RC_border">•</span>
                                        <span className="font-medium normal-case text-desc">
                                            {post.date}
                                        </span>
                                    </div>

                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="mt-2 text-lg font-bold leading-snug text-primary hover:text-prim_hovr">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-desc">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary hover:text-RC_Green"
                                    >
                                        Read More <FiArrowRight size={12} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
