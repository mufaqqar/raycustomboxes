import type { Product } from "@/data/Products";
import { Products as seedProducts } from "@/data/Products";
import { wpQuery } from "./client";
import { WP_TAGS } from "./config";
import { mapProduct } from "./mappers";
import { PRODUCTS_QUERY, PRODUCT_BY_SLUG_QUERY } from "./queries";
import type { ProductBySlugData, ProductsData } from "./types";

/**
 * Products
 *
 * When `WORDPRESS_API_URL` is set these come from WooGraphQL. Otherwise (or if
 * WordPress is unreachable) the bundled seed products keep the site working.
 */

export async function getProducts(): Promise<Product[]> {
    const data = await wpQuery<ProductsData>(
        PRODUCTS_QUERY,
        { first: 100 },
        [WP_TAGS.products],
    );

    const nodes = data?.products?.nodes;

    if (!nodes) return seedProducts;

    return nodes.filter((node) => Boolean(node?.slug)).map(mapProduct);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
    const data = await wpQuery<ProductBySlugData>(
        PRODUCT_BY_SLUG_QUERY,
        { slug },
        [WP_TAGS.products, WP_TAGS.product(slug)],
    );

    if (data === null) {
        return seedProducts.find((product) => product.slug === slug);
    }

    return data.product ? mapProduct(data.product) : undefined;
}

export async function getRelatedProducts(
    slug: string,
    limit = 4,
): Promise<Product[]> {
    const products = await getProducts();

    return products
        .filter((product) => product.slug !== slug)
        .slice(0, limit);
}
