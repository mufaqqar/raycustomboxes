import type { Metadata } from "next";
import QuoteHero from "@/components/Quote/QuoteHero";
import QuoteForm from "@/components/Home/QuoteForm";
import CTA from "@/components/Home/CTA";

export const metadata: Metadata = {
    title: "Get a Quote | Ray Custom Boxes",
    description:
        "Request a free quote for custom mailer boxes, corrugated boxes, rigid boxes and folding cartons. Share your size, quantity and artwork and get pricing from our packaging experts.",
};

export default function RequestQuotePage() {
    return (
        <main className="bg-background">
            <QuoteHero />
            <QuoteForm />
            <CTA />
        </main>
    );
}
