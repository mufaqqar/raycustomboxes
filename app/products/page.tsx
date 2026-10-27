import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Common/PageHero";
import ProductCard from "@/components/Product/ProductCard";
import CTA from "@/components/Home/CTA";
import PackagingSteps from "@/components/Home/PackagingSteps";
import { Categories } from "@/data/Categories";
import { Products } from "@/data/Products";

export const metadata: Metadata = {
    title: "All Products | Ray Custom Boxes",
    description:
        "Browse every custom packaging product we manufacture: mailer boxes, corrugated boxes, rigid boxes, folding cartons, mylar pouches and more. Free design support and fast US shipping.",
};

export default function AllProductsPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="All Products"
                subtitle="Every box style, material and finishing option we produce in one place. Pick a category to narrow things down, or send us your dimensions and let our packaging team recommend the right format."
                crumbs={[{ label: "All Products" }]}
            />

            <section className="bg-white py-10 md:py-14">
                <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
                    {/* Category chips */}
                    <div className="mb-10 flex flex-wrap gap-2">
                        {Categories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/category/${category.slug}`}
                                className="rounded-full border border-RC_border bg-background px-4 py-2 text-xs font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
                            >
                                {category.shortName}
                            </Link>
                        ))}
                    </div>

                    {/* Product grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {Products.map((product) => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <PackagingSteps />
            <CTA />
        </main>
    );
}
