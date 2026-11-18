import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getVisibleBlogPosts } from "../lib/collections";

export async function GET(context: APIContext) {
  const site =
    context.site ??
    (import.meta.env.SITE ? new URL(import.meta.env.SITE) : undefined);
  if (!site) {
    throw new Error(
      "Site URL is not configured. Set SITE_URL in .env or astro.config.mjs.",
    );
  }

  const posts = await getVisibleBlogPosts("en");
  return rss({
    title: "Starting Finance Club USI",
    description:
      "Research, analysis, and insights from USI's Starting Finance Club.",
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.slice("en/".length)}/`,
    })),
  });
}
