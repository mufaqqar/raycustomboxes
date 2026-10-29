import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { WP_TAGS } from "@/lib/wordpress/config";

/**
 * Webhook endpoint for WordPress to purge cached GraphQL data.
 *
 * Configure a POST webhook (e.g. on `save_post` / `edited_product_cat`) to:
 *
 *   https://your-site.com/api/revalidate
 *   Header: x-webhook-secret: <WORDPRESS_REVALIDATE_SECRET>
 *   Body:   { "tags": ["wp:products", "wp:product:my-box"] }
 *
 * With no body, every WordPress tag is purged.
 */
const ALL_TAGS = [
    WP_TAGS.products,
    WP_TAGS.categories,
    WP_TAGS.posts,
];

export async function POST(request: Request) {
    const secret = (process.env.WORDPRESS_REVALIDATE_SECRET ?? "").trim();

    if (!secret) {
        return NextResponse.json(
            {
                revalidated: false,
                message: "WORDPRESS_REVALIDATE_SECRET is not configured.",
            },
            { status: 500 },
        );
    }

    const url = new URL(request.url);
    const provided =
        request.headers.get("x-webhook-secret") ?? url.searchParams.get("secret");

    if (provided !== secret) {
        return NextResponse.json(
            { revalidated: false, message: "Invalid secret." },
            { status: 401 },
        );
    }

    const payload = (await request.json().catch(() => null)) as
        | { tags?: unknown }
        | null;

    const tags = Array.isArray(payload?.tags)
        ? payload.tags.filter((tag): tag is string => typeof tag === "string")
        : ALL_TAGS;

    for (const tag of tags) {
        revalidateTag(tag, { expire: 0 });
    }

    return NextResponse.json({ revalidated: true, tags });
}
