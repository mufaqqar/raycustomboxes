import type { Metadata } from "next";
import Feature from "@/components/Product/Feature";
import ProBanner from "@/components/Product/ProBanner";
import ProTabs from "@/components/Product/ProTabs";
import RelatedPRoducts from "@/components/Product/RelatedPRoducts";
import CTA from "@/components/Home/CTA";
import PackagingSteps from "@/components/Home/PackagingSteps";
import TrustedBrands from "@/components/Home/TrustedBrands";
import { notFound } from "next/navigation";
import { Products, getProduct } from "@/data/Products";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return Products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        return { title: "Product Not Found | Ray Custom Boxes" };
    }

    return {
        title: `${product.name} | Ray Custom Boxes`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) return notFound();

    return (
        <main className="bg-background">
            <ProBanner data={product} />
            <Feature />
            <ProTabs />
            <RelatedPRoducts />
            <PackagingSteps />
            <TrustedBrands />
            <CTA />
        </main>
    );
}