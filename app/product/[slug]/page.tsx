import Feature from "@/components/Product/Feature";
import ProBanner from "@/components/Product/ProBanner";
import ProTabs from "@/components/Product/ProTabs";
import RelatedPRoducts from "@/components/Product/RelatedPRoducts";
import { notFound } from "next/navigation";

const products = [
    {
        slug: "corrugated-mailer-boxes",
        name: "Corrugated Mailer Boxes",
        price: 100,
        description: "Strong packaging box",
    },
    {
        slug: "box-2",
        name: "Corrugated Box 2",
        price: 150,
        description: "Heavy duty box",
    },
];

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const product = products.find((p) => p.slug === slug);

    if (!product) return notFound();

    return (
        <main className="bg-background">
            <ProBanner data={product} />
            <Feature />
            <ProTabs />
            <RelatedPRoducts />
        </main>
    );
}