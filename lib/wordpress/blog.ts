import type { BlogPost } from "@/data/Blogs";
import { Blogs as seedPosts, getBlog as getSeedBlog } from "@/data/Blogs";
import { wpQuery } from "./client";
import { WP_TAGS } from "./config";
import { mapBlogPost } from "./mappers";
import { POSTS_QUERY, POST_BY_SLUG_QUERY } from "./queries";
import type { PostBySlugData, PostsData } from "./types";

export async function getBlogPosts(): Promise<BlogPost[]> {
    const data = await wpQuery<PostsData>(
        POSTS_QUERY,
        { first: 100 },
        [WP_TAGS.posts],
    );

    const nodes = data?.posts?.nodes;

    if (!nodes) return seedPosts;

    return nodes.filter((node) => Boolean(node?.slug)).map(mapBlogPost);
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const data = await wpQuery<PostBySlugData>(
        POST_BY_SLUG_QUERY,
        { slug },
        [WP_TAGS.posts, WP_TAGS.post(slug)],
    );

    if (data === null) {
        return getSeedBlog(slug);
    }

    return data.post ? mapBlogPost(data.post) : undefined;
}

export async function getRelatedBlogPosts(
    slug: string,
    limit = 3,
): Promise<BlogPost[]> {
    const posts = await getBlogPosts();

    return posts.filter((post) => post.slug !== slug).slice(0, limit);
}
