/**
 * WordPress / WooGraphQL connection settings.
 *
 * Set these in `.env.local` (and in your host's environment variables):
 *
 *   WORDPRESS_API_URL=https://cms.example.com/graphql
 *   WORDPRESS_AUTH_HEADER=Basic <base64 of "user:application-password">
 *   WORDPRESS_REVALIDATE_SECRET=<random string>
 *
 * `WORDPRESS_AUTH_HEADER` is optional and only needed when the GraphQL
 * endpoint is protected. Send the full header value, e.g. `Bearer <jwt>`
 * when using the JWT Authentication plugin.
 */

export const WORDPRESS_API_URL = (process.env.WORDPRESS_API_URL ?? "").trim();

export const WORDPRESS_AUTH_HEADER = (process.env.WORDPRESS_AUTH_HEADER ?? "").trim();

export const WORDPRESS_REVALIDATE_SECRET = (
    process.env.WORDPRESS_REVALIDATE_SECRET ?? ""
).trim();

export const isWordPressConfigured = WORDPRESS_API_URL.length > 0;

/**
 * Cache tags used by the data layer. The `/api/revalidate` route accepts
 * these tags so WordPress can purge only what changed.
 */
export const WP_TAGS = {
    products: "wp:products",
    categories: "wp:categories",
    posts: "wp:posts",
    product: (slug: string) => `wp:product:${slug}`,
    category: (slug: string) => `wp:category:${slug}`,
    post: (slug: string) => `wp:post:${slug}`,
} as const;
