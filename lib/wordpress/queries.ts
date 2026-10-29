/**
 * GraphQL documents for WooGraphQL (products/categories) and WPGraphQL (blog).
 * Field names follow the WooGraphQL schema:
 * https://woographql.com/schema
 */

const PRODUCT_FIELDS = /* GraphQL */ `
    databaseId
    slug
    name
    shortDescription
    description
    image {
        sourceUrl
        altText
    }
    galleryImages {
        nodes {
            sourceUrl
            altText
        }
    }
    productCategories(first: 1) {
        nodes {
            name
            slug
        }
    }
    ... on ProductWithPricing {
        price
    }
`;

export const PRODUCTS_QUERY = /* GraphQL */ `
    query Products($first: Int = 100) {
        products(first: $first, where: { status: "publish" }) {
            nodes {
                ${PRODUCT_FIELDS}
            }
        }
    }
`;

export const PRODUCT_BY_SLUG_QUERY = /* GraphQL */ `
    query ProductBySlug($slug: ID!) {
        product(id: $slug, idType: SLUG) {
            ${PRODUCT_FIELDS}
        }
    }
`;

const CATEGORY_FIELDS = /* GraphQL */ `
    databaseId
    slug
    name
    description
    image {
        sourceUrl
        altText
    }
`;

export const CATEGORIES_QUERY = /* GraphQL */ `
    query ProductCategories($first: Int = 100) {
        productCategories(first: $first) {
            nodes {
                ${CATEGORY_FIELDS}
            }
        }
    }
`;

export const CATEGORY_BY_SLUG_QUERY = /* GraphQL */ `
    query ProductCategoryBySlug($slug: ID!) {
        productCategory(id: $slug, idType: SLUG) {
            ${CATEGORY_FIELDS}
        }
    }
`;

const POST_FIELDS = /* GraphQL */ `
    databaseId
    slug
    title
    excerpt
    date
    featuredImage {
        node {
            sourceUrl
            altText
        }
    }
    categories(first: 1) {
        nodes {
            name
            slug
        }
    }
`;

export const POSTS_QUERY = /* GraphQL */ `
    query Posts($first: Int = 100) {
        posts(first: $first, where: { status: PUBLISH }) {
            nodes {
                ${POST_FIELDS}
            }
        }
    }
`;

export const POST_BY_SLUG_QUERY = /* GraphQL */ `
    query PostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            ${POST_FIELDS}
            content
        }
    }
`;
