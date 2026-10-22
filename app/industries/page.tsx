import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/Common/PageHero";
import CTA from "@/components/Home/CTA";
import TrustedBrands from "@/components/Home/TrustedBrands";
import { Industries } from "@/data/Industries";

export const metadata: Metadata = {
    title: "Industries We Serve | Ray Custom Boxes",
    description:
        "Custom packaging for ecommerce, beauty, food, bakery, apparel, CBD, pets and subscription brands. See packaging formats suited to your industry.",
};

export default function IndustriesPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Industries We Serve"
                subtitle="Different products need different boxes. Explore the packaging formats we build for each industry, or tell us what you ship and we will recommend a structure, material and print finish."
                crumbs={[{ label: "Industries" }]}
            />

            <section className="bg-white py-10 md:py-14">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {Industries.map((industry) => (
                            <article
                                key={industry.slug}
                                className="group flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-RC_border bg-background transition-shadow duration-300 hover:shadow-[0_14px_34px_rgb(56,56,130,0.14)]"
                            >
                                <Link
                                    href={`/category/${industry.categorySlug}`}
                                    className="relative block aspect-[4/3] overflow-hidden bg-[#f5f5f5]"
                                    aria-label={industry.name}
                                >
                                    <Image
                                        src={industry.image}
                                        alt={industry.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                                    />
                                </Link>

                                <div className="flex flex-1 flex-col px-5 py-4">
                                    <h2 className="text-base font-bold leading-snug text-primary">
                                        {industry.name}
                                    </h2>

                                    <p className="mt-2 text-xs leading-5 text-desc">
                                        {industry.description}
                                    </p>

                                    <Link
                                        href={`/category/${industry.categorySlug}`}
                                        className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-primary hover:text-RC_Green"
                                    >
                                        Explore boxes <FiArrowRight size={11} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <TrustedBrands />
            <CTA />
        </main>
    );
}
