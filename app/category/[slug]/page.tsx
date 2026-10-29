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
import { getCategoryPage, getCategories } from "@/lib/wordpress";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const categories = await getCategories();

    return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const result = await getCategoryPage(slug);

    if (!result) {
        return { title: "Category Not Found | Ray Custom Boxes" };
    }

    const { category } = result;

    return {
        title: `${category.name} | Ray Custom Boxes`,
        description: category.description,
    };
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const result = await getCategoryPage(slug);

    if (!result) return notFound();

    const { category, products } = result;

    return (
        <main>
            <CategoryHero category={category} />
            <ProductSearch />
            <FeaturedProducts products={products} />
            <CateInfo />
            <PackagingSteps />
            <TrustedBrands />
            <Faqs />
            <CTA />
        </main>
    );
}
