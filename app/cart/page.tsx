import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Common/PageHero";
import CTA from "@/components/Home/CTA";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Your Cart | Ray Custom Boxes",
    description:
        "Review the custom packaging items in your cart, or request a quote for a tailored packaging run.",
};

export default function CartPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Your Cart"
                subtitle="Custom packaging is quoted per project, so most orders start with a quote rather than a cart checkout."
                crumbs={[{ label: "Cart" }]}
            />

            <section className="bg-white py-12 md:py-16">
                <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
                    <div className="mx-auto flex max-w-[680px] flex-col items-center rounded-[18px] border border-RC_border bg-background px-6 py-12 text-center">
                        <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <FiShoppingBag size={26} />
                        </span>

                        <h2 className="text-2xl font-extrabold text-primary">Your cart is empty</h2>

                        <p className="mt-3 max-w-[440px] text-sm leading-6 text-desc">
                            Browse our product catalogue to find a box style, then request a quote
                            with your dimensions, quantity and artwork. Our team replies with pricing
                            and a digital proof.
                        </p>

                        <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/products"
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold text-white transition hover:bg-prim_hovr sm:w-auto"
                            >
                                Browse Products <FiArrowRight size={12} />
                            </Link>

                            <Link
                                href="/request-quote"
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-primary bg-transparent px-7 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white sm:w-auto"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
