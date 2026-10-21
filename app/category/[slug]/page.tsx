import CategoryHero from "@/components/Category/CategoryHero";
import CateInfo from "@/components/Category/CateInfo";
import ProductSearch from "@/components/Category/ProductSearch";
import CTA from "@/components/Home/CTA";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Feature from "@/components/Product/Feature";
import ProBanner from "@/components/Product/ProBanner";
import ProTabs from "@/components/Product/ProTabs";
import RelatedPRoducts from "@/components/Product/RelatedPRoducts";
import { notFound } from "next/navigation";

const Categories = [
    {
        slug: "corrugated-boxes",
        name: "Corrugated Boxes",
    },
    {
        slug: "corrugated-boxes",
        name: "Corrugated Boxes",
        description: "Heavy duty box",
    },
];

export function generateStaticParams() {
    return Categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const category = Categories.find((p) => p.slug === slug);

    if (!category) return notFound();

    return (
        <main>
            <CategoryHero />
            <ProductSearch />
            <FeaturedProducts />
            <CateInfo />
            <CTA />
        </main>
    );
}