import type { Metadata } from "next";
import PageHero from "@/components/Common/PageHero";
import PolicyContent from "@/components/Common/PolicyContent";

export const metadata: Metadata = {
    title: "Terms & Conditions | Ray Custom Boxes",
    description:
        "Terms and conditions governing the use of raycustomboxes.com and orders placed with Ray Custom Boxes.",
};

export default function TermsAndConditionsPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Terms & Conditions"
                subtitle="These terms apply to your use of this website and to any quote, order or purchase with Ray Custom Boxes (Erixum Packaging)."
                crumbs={[{ label: "Terms & Conditions" }]}
            />

            <PolicyContent
                updated="October 22, 2026"
                intro="By accessing or using raycustomboxes.com, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the site."
                sections={[
                    {
                        heading: "Use of the website",
                        paragraphs: [
                            "The content on this site is for general information about our packaging services. We may update content without notice.",
                            "You agree not to misuse the site, attempt unauthorised access, or interfere with its operation.",
                        ],
                    },
                    {
                        heading: "Quotes and orders",
                        paragraphs: [
                            "A quote is an estimate based on the details you provide. Final pricing may change if specifications, materials, quantity or artwork requirements change.",
                            "Placing an order or approving a quote in writing constitutes acceptance of these terms and the price shown for that order.",
                            "Orders are subject to acceptance and availability. We reserve the right to refuse or cancel an order in limited circumstances.",
                        ],
                    },
                    {
                        heading: "Artwork and proofs",
                        paragraphs: [
                            "You are responsible for the accuracy of artwork, logos, text, colours and all files you submit. We recommend reviewing digital proofs carefully before approving for production.",
                            "Unless stated otherwise, we provide free design assistance, but final responsibility for artwork compliance (including trademarks and licences) rests with the customer.",
                        ],
                    },
                    {
                        heading: "Pricing, payment and shipping",
                        paragraphs: [
                            "Prices are listed in USD unless stated otherwise. Taxes, duties and shipping charges are shown at checkout or on the quote where applicable.",
                            "Payment terms are specified on the quote or invoice. Late payments may be subject to fees as stated on the invoice.",
                            "Delivery dates are estimates. We are not liable for delays caused by carriers, customs, weather or events outside our control.",
                        ],
                    },
                    {
                        heading: "Intellectual property",
                        paragraphs: [
                            "All website content, logos, images and text are owned by Ray Custom Boxes or used with permission. You may not reproduce or use them without written consent.",
                            "Artwork you submit remains your property; we only use it to produce your order.",
                        ],
                    },
                    {
                        heading: "Limitation of liability",
                        paragraphs: [
                            "To the maximum extent permitted by law, Ray Custom Boxes is not liable for indirect, incidental, special or consequential damages arising from use of the site or any order.",
                            "Our total liability for any claim related to an order is limited to the amount paid for that order.",
                        ],
                    },
                    {
                        heading: "Governing law",
                        paragraphs: [
                            "These terms are governed by the laws of the State of Texas, United States, without regard to conflict of law rules. Any disputes will be resolved in the courts of Tarrant County, Texas.",
                        ],
                    },
                ]}
            />
        </main>
    );
}
