import { type CollectionEntry, getCollection } from "astro:content";
import type { Lang } from "../i18n/ui";

export async function getVisibleBlogPosts(
  lang: Lang,
): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog"))
    .filter((post) => post.id.startsWith(`${lang}/`) && !post.data.hide)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function hasVisibleBlogPosts(lang: Lang): Promise<boolean> {
  return (await getCollection("blog")).some(
    (post) => post.id.startsWith(`${lang}/`) && !post.data.hide,
  );
}

export async function getVisibleTeamMembers(
  lang: Lang,
): Promise<CollectionEntry<"team">[]> {
  return (await getCollection("team"))
    .filter((member) => member.id.startsWith(`${lang}/`) && !member.data.hide)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getUpcomingEvents(
  lang: Lang,
): Promise<CollectionEntry<"events">[]> {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  return (await getCollection("events"))
    .filter(
      (event) =>
        event.id.startsWith(`${lang}/`) && event.data.date >= startOfToday,
    )
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}
