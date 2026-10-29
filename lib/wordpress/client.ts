import { cacheLife, cacheTag } from "next/cache";
import {
    WORDPRESS_API_URL,
    WORDPRESS_AUTH_HEADER,
    isWordPressConfigured,
} from "./config";

type GraphQLResponse<T> = {
    data?: T | null;
    errors?: Array<{ message?: string }>;
};

/**
 * Execute a GraphQL request against WordPress.
 *
 * Returns `null` when WordPress is not configured or the request failed, so
 * callers can fall back to the bundled seed data. A successful request that
 * finds no entity returns the parsed `data` object (with `null` entity).
 *
 * Results are cached with Cache Components and tagged so WordPress can purge
 * them through `/api/revalidate`.
 */
export async function wpQuery<T>(
    query: string,
    variables: Record<string, unknown> = {},
    tags: string[] = [],
): Promise<T | null> {
    "use cache";
    cacheLife("hours");

    if (tags.length > 0) {
        cacheTag(...tags);
    }

    if (!isWordPressConfigured) {
        return null;
    }

    try {
        const response = await fetch(WORDPRESS_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...(WORDPRESS_AUTH_HEADER
                    ? { Authorization: WORDPRESS_AUTH_HEADER }
                    : {}),
            },
            body: JSON.stringify({ query, variables }),
        });

        if (!response.ok) {
            console.error(
                `[wordpress] GraphQL request failed with ${response.status} ${response.statusText}`,
            );
            return null;
        }

        const payload = (await response.json()) as GraphQLResponse<T>;

        if (payload.errors?.length) {
            console.error(
                "[wordpress] GraphQL errors:",
                payload.errors.map((error) => error.message).join(" | "),
            );
            return null;
        }

        return payload.data ?? null;
    } catch (error) {
        console.error("[wordpress] GraphQL request threw:", error);
        return null;
    }
}
