import type { Metadata } from "next";
import PageHero from "@/components/Common/PageHero";
import PolicyContent from "@/components/Common/PolicyContent";

export const metadata: Metadata = {
    title: "Refund Policy | Ray Custom Boxes",
    description:
        "Refund, replacement and cancellation policy for custom packaging orders placed with Ray Custom Boxes.",
};

export default function RefundPolicyPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Refund Policy"
                subtitle="Because most of our products are custom-made to order, returns are limited. This policy explains when replacements or credits apply."
                crumbs={[{ label: "Refund Policy" }]}
            />

            <PolicyContent
                updated="October 22, 2026"
                intro="Every box we print is made to your specifications. For that reason, all sales of custom printed packaging are final unless there is a defect in materials or workmanship, or we made an error on our side."
                sections={[
                    {
                        heading: "Custom orders are non-returnable",
                        paragraphs: [
                            "We cannot accept returns for change of mind, incorrect size selection, or artwork errors you approved on a proof.",
                            "Double-check dimensions, material, quantity, artwork and shipping details before approving your proof.",
                        ],
                    },
                    {
                        heading: "Damaged or defective goods",
                        paragraphs: [
                            "If your order arrives damaged, please notify us within 48 hours of delivery with photos of the packaging and the damaged boxes.",
                            "If we confirm a defect in materials or workmanship, we will replace the affected items at no cost, or issue a credit if a replacement is not possible.",
                        ],
                    },
                    {
                        heading: "Shipping errors",
                        paragraphs: [
                            "If we shipped the wrong product or quantity, contact us within 48 hours of delivery with photos and your order details. We will correct the error as quickly as possible.",
                        ],
                    },
                    {
                        heading: "Cancellations",
                        paragraphs: [
                            "Orders can be cancelled before production starts. Once die-lines are cut, plates are made, or production has begun, cancellation fees may apply to cover setup costs.",
                            "Contact sales@erixumpackaging.com as soon as possible if you need to cancel or change an order.",
                        ],
                    },
                    {
                        heading: "Claims process",
                        paragraphs: [
                            "To file a claim, email sales@erixumpackaging.com with your order number, delivery date, photos and a description of the issue. We aim to review and respond within one business day.",
                        ],
                    },
                ]}
            />
        </main>
    );
}
