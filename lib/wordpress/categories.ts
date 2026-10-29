import type { Category } from "@/data/Categories";
import { Categories as seedCategories } from "@/data/Categories";
import type { Product } from "@/data/Products";
import { Products as seedProducts } from "@/data/Products";
import { wpQuery } from "./client";
import { WP_TAGS } from "./config";
import { mapCategory } from "./mappers";
import { getProducts } from "./products";
import { CATEGORIES_QUERY, CATEGORY_BY_SLUG_QUERY } from "./queries";
import type { CategoriesData, CategoryBySlugData } from "./types";

export async function getCategories(): Promise<Category[]> {
    const data = await wpQuery<CategoriesData>(
        CATEGORIES_QUERY,
        { first: 100 },
        [WP_TAGS.categories],
    );

    const nodes = data?.productCategories?.nodes;

    if (!nodes) return seedCategories;

    return nodes.filter((node) => Boolean(node?.slug)).map((node) => mapCategory(node));
}

export async function getCategory(slug: string): Promise<Category | undefined> {
    const result = await getCategoryPage(slug);

    return result?.category;
}

/**
 * Category page data: the term plus its products. Products are filtered from
 * the cached product list by their category link, which keeps this working
 * regardless of the WooGraphQL version's category connection args.
 */
export async function getCategoryPage(
    slug: string,
): Promise<{ category: Category; products: Product[] } | undefined> {
    const [data, allProducts] = await Promise.all([
        wpQuery<CategoryBySlugData>(
            CATEGORY_BY_SLUG_QUERY,
            { slug },
            [WP_TAGS.categories, WP_TAGS.category(slug)],
        ),
        getProducts(),
    ]);

    const categoryProducts = allProducts.filter(
        (product) => product.trace === `/category/${slug}`,
    );

    if (data === null) {
        const category = seedCategories.find((item) => item.slug === slug);

        if (!category) return undefined;

        return {
            category,
            products:
                categoryProducts.length > 0
                    ? categoryProducts
                    : seedProducts.slice(0, 8),
        };
    }

    if (!data.productCategory) return undefined;

    const category = mapCategory(
        data.productCategory,
        categoryProducts[0]?.startingPrice,
    );

    return { category, products: categoryProducts };
}
