import type { Metadata } from "next";
import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import AboutValues from "@/components/About/AboutValues";
import CTA from "@/components/Home/CTA";
import CustomerReviews from "@/components/Home/CustomerReviews";
import PackagingSteps from "@/components/Home/PackagingSteps";
import TrustedBrands from "@/components/Home/TrustedBrands";

export const metadata: Metadata = {
    title: "About Us | Ray Custom Boxes",
    description:
        "Learn how Ray Custom Boxes helps USA brands launch with custom printed mailer boxes, corrugated boxes, rigid boxes and folding cartons, backed by free design support and quick turnarounds.",
};

export default function AboutUsPage() {
    return (
        <main className="bg-background">
            <AboutHero />
            <AboutStory />
            <AboutValues />
            <PackagingSteps />
            <TrustedBrands />
            <CustomerReviews />
            <CTA />
        </main>
    );
}
