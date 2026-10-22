import type { Metadata } from "next";
import PageHero from "@/components/Common/PageHero";
import CTA from "@/components/Home/CTA";
import CustomerReviews from "@/components/Home/CustomerReviews";
import Faqs from "@/components/Home/Faqs";
import TrustedBrands from "@/components/Home/TrustedBrands";
import { FiAward, FiPackage, FiStar, FiUsers } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Customer Reviews | Ray Custom Boxes",
    description:
        "Read reviews from brands that order custom printed boxes, mailers and rigid packaging from Ray Custom Boxes.",
};

const stats = [
    { icon: FiStar, value: "4.9/5", label: "Average rating" },
    { icon: FiUsers, value: "2,400+", label: "Brands served" },
    { icon: FiPackage, value: "18M+", label: "Boxes printed" },
    { icon: FiAward, value: "98%", label: "On-time delivery" },
];

export default function ReviewsPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Customer Reviews"
                subtitle="Thousands of brands trust Ray Custom Boxes for printed mailers, rigid boxes and retail packaging. Here is what they say about our print quality, timelines and support."
                crumbs={[{ label: "Reviews" }]}
            />

            <section className="bg-white py-10 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="rounded-[14px] border border-RC_border bg-background px-4 py-5 text-center"
                            >
                                <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Icon size={18} />
                                </span>

                                <span className="block text-2xl font-extrabold text-primary">
                                    {value}
                                </span>

                                <span className="mt-1 block text-xs text-desc">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CustomerReviews />
            <TrustedBrands />
            <Faqs />
            <CTA />
        </main>
    );
}
