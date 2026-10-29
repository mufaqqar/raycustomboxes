import type { BlogPost } from "@/data/Blogs";
import type { Category } from "@/data/Categories";
import type { Product } from "@/data/Products";
import type { WpPost, WpProduct, WpProductCategory } from "./types";

/** Used when a WordPress entity has no featured image. */
export const FALLBACK_IMAGE = "/images/p2.jpg";

const NAMED_ENTITIES: Record<string, string> = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    hellip: "…",
    mdash: "—",
    ndash: "–",
    rsquo: "’",
    lsquo: "‘",
    ldquo: "“",
    rdquo: "”",
};

/** Decode the HTML entities WordPress returns in titles and excerpts. */
export function decodeHtml(value?: string | null): string {
    if (!value) return "";

    return value
        .replace(/&#(\d+);/g, (_, code: string) =>
            String.fromCodePoint(Number.parseInt(code, 10)),
        )
        .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
            String.fromCodePoint(Number.parseInt(code, 16)),
        )
        .replace(/&([a-z]+);/gi, (entity, name: string) => {
            return NAMED_ENTITIES[name.toLowerCase()] ?? entity;
        });
}

/** Turn a WordPress HTML string into plain text for cards and metadata. */
export function stripHtml(value?: string | null): string {
    if (!value) return "";

    return decodeHtml(value.replace(/<[^>]*>/g, " "))
        .replace(/\s+/g, " ")
        .trim();
}

export function formatPrice(value?: string | null): string {
    if (!value) return "TBD";

    const trimmed = stripHtml(value);

    if (!trimmed) return "TBD";
    if (/[$€£¥]/.test(trimmed)) return trimmed;

    const numeric = Number.parseFloat(trimmed.replace(/,/g, ""));

    if (Number.isNaN(numeric)) return trimmed;

    return `$${numeric.toFixed(2)}`;
}

export function formatDate(value?: string | null): string {
    if (!value) return "";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }).format(date);
}

export function mapProduct(node: WpProduct): Product {
    const primaryCategory = node.productCategories?.nodes?.[0];
    const gallery = (node.galleryImages?.nodes ?? [])
        .map((image) => image?.sourceUrl)
        .filter((url): url is string => Boolean(url));
    const featuredImage = node.image?.sourceUrl;

    if (featuredImage && !gallery.includes(featuredImage)) {
        gallery.unshift(featuredImage);
    }

    return {
        slug: node.slug,
        name: decodeHtml(node.name),
        category: decodeHtml(primaryCategory?.name) || "Custom Boxes",
        trace: primaryCategory?.slug
            ? `/category/${primaryCategory.slug}`
            : "/products",
        image: featuredImage || FALLBACK_IMAGE,
        startingPrice: formatPrice(node.price),
        description:
            stripHtml(node.shortDescription || node.description) ||
            "Custom packaging manufactured to your exact dimensions.",
        gallery: gallery.length > 0 ? gallery : undefined,
    };
}

export function mapCategory(
    node: WpProductCategory,
    startingPrice = "TBD",
): Category {
    const name = decodeHtml(node.name);
    const shortName = name.replace(/^Custom\s+/i, "");

    return {
        slug: node.slug,
        name,
        shortName: shortName || name,
        description:
            stripHtml(node.description) ||
            `Custom ${shortName.toLowerCase()} manufactured to your exact dimensions.`,
        image: node.image?.sourceUrl || FALLBACK_IMAGE,
        startingPrice,
    };
}

export function mapBlogPost(node: WpPost): BlogPost {
    const title = decodeHtml(node.title);
    const content = node.content ?? "";
    const excerpt = stripHtml(node.excerpt);

    return {
        slug: node.slug,
        title,
        category: decodeHtml(node.categories?.nodes?.[0]?.name) || "Packaging",
        date: formatDate(node.date),
        image: node.featuredImage?.node?.sourceUrl || FALLBACK_IMAGE,
        excerpt: excerpt || stripHtml(content).slice(0, 220),
        sections: [],
        contentHtml: content || undefined,
    };
}
