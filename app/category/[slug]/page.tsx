import type { Metadata } from "next";
import CategoryHero from "@/components/Category/CategoryHero";
import CateInfo from "@/components/Category/CateInfo";
import ProductSearch from "@/components/Category/ProductSearch";
import CTA from "@/components/Home/CTA";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Faqs from "@/components/Home/Faqs";
import PackagingSteps from "@/components/Home/PackagingSteps";
import TrustedBrands from "@/components/Home/TrustedBrands";
import { notFound } from "next/navigation";
import { Categories, getCategory } from "@/data/Categories";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return Categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategory(slug);

    if (!category) {
        return { title: "Category Not Found | Ray Custom Boxes" };
    }

    return {
        title: `${category.name} | Ray Custom Boxes`,
        description: category.description,
    };
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = getCategory(slug);

    if (!category) return notFound();

    return (
        <main>
            <CategoryHero category={category} />
            <ProductSearch />
            <FeaturedProducts />
            <CateInfo />
            <PackagingSteps />
            <TrustedBrands />
            <Faqs />
            <CTA />
        </main>
    );
}
