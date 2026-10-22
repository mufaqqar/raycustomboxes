import type { Metadata } from "next";
import PageHero from "@/components/Common/PageHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import CTA from "@/components/Home/CTA";
import Faqs from "@/components/Home/Faqs";

export const metadata: Metadata = {
    title: "Contact Us | Ray Custom Boxes",
    description:
        "Talk to our packaging experts for custom boxes, printed packaging and design support. Call 800 558 8047, email sales@erixumpackaging.com or visit us in Fort Worth, TX.",
};

export default function ContactUsPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Contact Us"
                subtitle="Have a packaging idea, an artwork file or an order to discuss? Our packaging specialists are ready to help you choose the right box style, material and finishing for your brand. Send us a message and we will get back to you within one business day."
                crumbs={[{ label: "Contact Us" }]}
            />

            <section className="pb-16">
                <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>

            <div className="bg-white">
                <Faqs />
            </div>

            <CTA />
        </main>
    );
}
