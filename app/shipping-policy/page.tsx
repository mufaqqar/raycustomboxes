import type { Metadata } from "next";
import PageHero from "@/components/Common/PageHero";
import PolicyContent from "@/components/Common/PolicyContent";

export const metadata: Metadata = {
    title: "Shipping Policy | Ray Custom Boxes",
    description:
        "Production timelines, shipping methods, delivery estimates and tracking information for Ray Custom Boxes.",
};

export default function ShippingPolicyPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Shipping Policy"
                subtitle="Production times vary by order size and finishing. Here is how we handle timelines, shipping and delivery."
                crumbs={[{ label: "Shipping Policy" }]}
            />

            <PolicyContent
                updated="October 22, 2026"
                intro="We manufacture custom packaging in the United States and ship nationwide. Lead times depend on the product, quantity, printing and finishing options selected."
                sections={[
                    {
                        heading: "Production time",
                        paragraphs: [
                            "Most standard orders ship in 8–12 business days after artwork approval. Complex orders with foil, embossing, spot UV or custom inserts may take 12–16 business days.",
                            "Rush options may be available on select products — ask your sales rep at the time of quoting.",
                        ],
                    },
                    {
                        heading: "Shipping methods",
                        paragraphs: [
                            "We ship via trusted carriers including FedEx, UPS and LTL for larger pallet orders. Shipping method is selected based on weight, dimensions and delivery location.",
                            "Free shipping may apply to qualifying orders as stated on your quote.",
                        ],
                    },
                    {
                        heading: "Delivery estimates",
                        paragraphs: [
                            "Transit times depend on your location and the carrier. Once your order ships, you will receive a tracking number by email.",
                            "Delivery dates shown at checkout are estimates, not guarantees. Delays due to weather, carrier issues or customs are outside our control.",
                        ],
                    },
                    {
                        heading: "Shipping address",
                        paragraphs: [
                            "Please ensure your shipping address is correct at the time of order. We are not responsible for orders delivered to an incorrect address provided by the customer.",
                        ],
                    },
                    {
                        heading: "International shipping",
                        paragraphs: [
                            "At this time, we primarily ship within the United States. If you need delivery outside the US, contact sales@erixumpackaging.com to discuss options.",
                        ],
                    },
                ]}
            />
        </main>
    );
}
