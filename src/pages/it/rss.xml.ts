import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: "Starting Finance Club USI",
    description:
      "Ricerca, analisi e approfondimenti dallo Starting Finance Club dell'USI.",
    site: context.site ?? new URL("http://localhost:4321"),
    items: posts
      .filter((post) => post.id.startsWith("it/"))
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/it/blog/${post.id.slice("it/".length)}/`,
      })),
  });
}
