import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getVisibleBlogPosts } from "../../lib/collections";

export async function GET(context: APIContext) {
  const site =
    context.site ??
    (import.meta.env.SITE ? new URL(import.meta.env.SITE) : undefined);
  if (!site) {
    throw new Error(
      "Site URL is not configured. Set SITE_URL in .env or astro.config.mjs.",
    );
  }

  const posts = await getVisibleBlogPosts("it");
  return rss({
    title: "Starting Finance Club USI",
    description:
      "Ricerca, analisi e approfondimenti dallo Starting Finance Club dell'USI.",
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/it/blog/${post.id.slice("it/".length)}/`,
    })),
  });
}
