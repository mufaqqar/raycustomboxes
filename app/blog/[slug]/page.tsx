import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import CTA from "@/components/Home/CTA";
import { Blogs, getBlog, getRelatedBlogs } from "@/data/Blogs";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return Blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlog(slug);

    if (!post) {
        return { title: "Article Not Found | Ray Custom Boxes" };
    }

    return {
        title: `${post.title} | Ray Custom Boxes`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlog(slug);

    if (!post) return notFound();

    const related = getRelatedBlogs(slug);

    return (
        <main className="bg-background">
            <section className="bg-background">
                <div className="container mx-auto px-4 py-10 md:py-14">
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-4 flex flex-wrap items-center gap-2 text-sm text-primary"
                    >
                        <Link href="/" className="transition hover:text-prim_hovr">
                            Home
                        </Link>

                        <FiChevronRight size={13} />

                        <Link href="/blog" className="transition hover:text-prim_hovr">
                            Blog
                        </Link>

                        <FiChevronRight size={13} />

                        <span className="max-w-full truncate font-medium">{post.title}</span>
                    </nav>

                    <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                        <span className="text-RC_Green">{post.category}</span>
                        <span className="text-RC_border">•</span>
                        <span className="font-medium normal-case text-desc">{post.date}</span>
                    </div>

                    <h1 className="mb-6 max-w-[900px] text-[30px] leading-[1.18] font-extrabold tracking-tight text-primary sm:text-[38px]">
                        {post.title}
                    </h1>

                    <p className="max-w-[820px] text-base leading-[26px] text-desc">{post.excerpt}</p>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] bg-[#f0f1f6]">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 1100px"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 md:py-14">
                <div className="container mx-auto px-4">
                    <article className="mx-auto max-w-[840px] space-y-9">
                        {post.sections.map((section, index) => (
                            <div key={section.heading ?? index}>
                                {section.heading && (
                                    <h2 className="mb-3 text-xl font-extrabold leading-tight text-primary md:text-2xl">
                                        {section.heading}
                                    </h2>
                                )}

                                <div className="space-y-3">
                                    {section.paragraphs.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-[15px] leading-[27px] text-desc"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="rounded-[12px] border border-RC_border bg-background p-6">
                            <h2 className="mb-2 text-lg font-bold text-primary">
                                Need help choosing packaging?
                            </h2>
                            <p className="mb-4 text-sm leading-6 text-desc">
                                Send us your product dimensions and quantity and we will recommend a
                                box style, material and finish with pricing.
                            </p>
                            <Link
                                href="/request-quote"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-white transition hover:bg-prim_hovr"
                            >
                                Request a Quote <FiArrowRight size={12} />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            {related.length > 0 && (
                <section className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-6 text-2xl font-extrabold leading-tight text-primary md:text-[32px]">
                            Related Articles
                        </h2>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/blog/${item.slug}`}
                                    className="group flex min-w-0 items-center gap-4 rounded-[14px] border border-RC_border bg-white p-3 transition hover:shadow-[0_10px_26px_rgb(56,56,130,0.12)]"
                                >
                                    <span className="relative block h-20 w-24 shrink-0 overflow-hidden rounded-[10px] bg-[#f0f1f6]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="96px"
                                            className="object-cover object-center"
                                        />
                                    </span>

                                    <span className="min-w-0">
                                        <span className="block text-sm font-bold leading-snug text-primary group-hover:text-prim_hovr">
                                            {item.title}
                                        </span>
                                        <span className="mt-1 block text-[11px] text-desc">
                                            {item.category}
                                        </span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTA />
        </main>
    );
}
