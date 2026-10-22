import type { Metadata } from "next";
import PageHero from "@/components/Common/PageHero";
import PolicyContent from "@/components/Common/PolicyContent";

export const metadata: Metadata = {
    title: "Privacy Policy | Ray Custom Boxes",
    description:
        "How Ray Custom Boxes collects, uses and protects your personal information when you use our website.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-background">
            <PageHero
                title="Privacy Policy"
                subtitle="Your privacy matters. This policy explains what information we collect, how we use it and the choices you have."
                crumbs={[{ label: "Privacy Policy" }]}
            />

            <PolicyContent
                updated="October 22, 2026"
                intro="Ray Custom Boxes (Erixum Packaging) respects your privacy. This Privacy Policy describes how we collect, use, disclose and safeguard information when you visit raycustomboxes.com or submit an enquiry through our site."
                sections={[
                    {
                        heading: "Information we collect",
                        paragraphs: [
                            "We collect information you provide directly, such as your name, email, phone number, company name, shipping details and message when you request a quote or contact us.",
                            "We automatically collect limited usage data such as IP address, browser type, device information and pages viewed to help secure and improve the site.",
                            "We do not knowingly collect personal information from children under 13.",
                        ],
                    },
                    {
                        heading: "How we use information",
                        paragraphs: [
                            "We use your information to respond to enquiries, prepare quotes, process orders, send order updates and provide customer support.",
                            "We may use your contact details to follow up on a quote or share relevant updates about your order. We only send marketing emails if you opt in.",
                            "We use aggregated analytics to understand traffic patterns and improve our website and services.",
                        ],
                    },
                    {
                        heading: "Sharing and disclosure",
                        paragraphs: [
                            "We share information only with service providers that help us run the business (for example hosting, email delivery and payment processing) and only to the extent needed to perform those services.",
                            "We may disclose information if required by law, to enforce our policies, or to protect the rights, safety or property of Ray Custom Boxes or others.",
                            "We do not sell your personal information.",
                        ],
                    },
                    {
                        heading: "Cookies and tracking",
                        paragraphs: [
                            "Our site uses essential cookies to keep forms working and improve performance. Analytics cookies help us understand how visitors use the site. You can control cookies through your browser settings.",
                        ],
                    },
                    {
                        heading: "Data security and retention",
                        paragraphs: [
                            "We take reasonable technical and organisational measures to protect your information. No method of transmission over the internet is 100% secure, but we work to reduce risk.",
                            "We retain enquiry and order information for as long as needed to fulfil our obligations, provide support and comply with legal requirements.",
                        ],
                    },
                    {
                        heading: "Your rights",
                        paragraphs: [
                            "Depending on your location, you may have rights to access, correct, delete or restrict use of your personal information. To make a request, email sales@erixumpackaging.com.",
                        ],
                    },
                ]}
            />
        </main>
    );
}
