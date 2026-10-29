/**
 * Minimal response types for the WooGraphQL / WPGraphQL schema.
 * Only the fields requested in `queries.ts` are modelled here.
 */

export type WpImage = {
    sourceUrl?: string | null;
    altText?: string | null;
} | null;

export type WpTerm = {
    name?: string | null;
    slug?: string | null;
};

export type WpProduct = {
    databaseId: number;
    slug: string;
    name: string;
    shortDescription?: string | null;
    description?: string | null;
    price?: string | null;
    image?: WpImage;
    galleryImages?: {
        nodes: WpImage[];
    } | null;
    productCategories?: {
        nodes: WpTerm[];
    } | null;
};

export type WpProductCategory = {
    databaseId: number;
    slug: string;
    name: string;
    description?: string | null;
    image?: WpImage;
};

export type WpPost = {
    databaseId: number;
    slug: string;
    title?: string | null;
    excerpt?: string | null;
    content?: string | null;
    date?: string | null;
    featuredImage?: {
        node?: WpImage;
    } | null;
    categories?: {
        nodes: WpTerm[];
    } | null;
};

export type ProductsData = {
    products?: {
        nodes: WpProduct[];
    } | null;
};

export type ProductBySlugData = {
    product?: WpProduct | null;
};

export type CategoriesData = {
    productCategories?: {
        nodes: WpProductCategory[];
    } | null;
};

export type CategoryBySlugData = {
    productCategory?: WpProductCategory | null;
};

export type PostsData = {
    posts?: {
        nodes: WpPost[];
    } | null;
};

export type PostBySlugData = {
    post?: WpPost | null;
};
