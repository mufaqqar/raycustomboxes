import type { NextConfig } from "next";

type RemotePattern = NonNullable<
  NonNullable<NextConfig["images"]>["remotePatterns"]
>[number];

/**
 * Allow next/image to optimise media served by WordPress.
 * `WORDPRESS_API_URL` covers the common case; add extra hosts (CDN, S3
 * offload) with a comma-separated `WORDPRESS_IMAGE_HOSTS`.
 */
function wordpressImagePatterns(): RemotePattern[] {
  const patterns = new Map<string, RemotePattern>();

  for (const candidate of [
    process.env.WORDPRESS_API_URL,
    process.env.WORDPRESS_SITE_URL,
  ]) {
    if (!candidate) continue;

    try {
      const url = new URL(candidate);

      patterns.set(`${url.protocol}//${url.hostname}`, {
        protocol: url.protocol === "http:" ? "http" : "https",
        hostname: url.hostname,
        pathname: "/**",
      });
    } catch {
      // Ignore malformed URLs during build.
    }
  }

  for (const host of (process.env.WORDPRESS_IMAGE_HOSTS ?? "").split(",")) {
    const hostname = host.trim();
    if (!hostname) continue;

    patterns.set(`https://${hostname}`, {
      protocol: "https",
      hostname,
      pathname: "/**",
    });
  }

  return Array.from(patterns.values());
}

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: wordpressImagePatterns(),
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
