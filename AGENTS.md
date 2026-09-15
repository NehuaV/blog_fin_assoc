## Project Overview

This is the website for **Starting Finance Club — USI** (Università della Svizzera italiana), a student finance club. It's a static Astro site (Tailwind CSS only, no CSS-in-JS/UI framework) with a homepage (hero, upcoming events, latest posts, team), a blog, and content in **English and Italian**.

## Content Collections

All editable content lives in `src/assets/` as Markdown-based Astro content collections (defined in `src/content.config.ts`), each split into `en/`/`it/` subfolders. Every piece of content should exist in **both languages** with matching filenames, so the two versions pair up (e.g. `en/second-post.md` ↔ `it/second-post.md`).

- **`src/assets/blog/`** — Blog posts (`blog` collection). Add/edit a Markdown file in `en/` and `it/` with the same filename, translated to English and Italian respectively. Images for a post (cover image, gallery, inline images) live in a sibling folder next to the locale folders, e.g. `src/assets/blog/second-post/hero.jpg`, referenced from the Markdown frontmatter/body via a relative path like `../second-post/hero.jpg`.
- **`src/assets/events/`** — Events (`events` collection) that populate the "Upcoming events" section on the homepage (rendered by `src/components/EventsSection.astro`). Add/edit a Markdown file in `en/`/`it/` with `name`, `date`, `time`, `location`, `tag`, and an optional `link`. Events with a `date` in the past are automatically hidden from the list.
- **`src/assets/team/`** — Team bios (`team` collection) shown in the "Team" section on the homepage (rendered by `src/components/TeamSection.astro`). To edit the team, just edit the person's `.md` file in `en/`/`it/` (`name`, `role`, `description`, `photo`, `linkedin`, `order`). Photos are siblings directly under `src/assets/team/` (not duplicated per locale), referenced via a relative path like `../alessia-battistella.png`.

## Internationalization (i18n)

The site uses Astro's native i18n routing: English is the default locale (unprefixed, e.g. `/blog`), Italian is served under `/it/` (e.g. `/it/blog`). See `astro.config.mjs` for the routing config and `src/pages/it/` for the mirrored Italian page tree.

- UI chrome strings (nav, hero, section headings, buttons, footer) live in the dictionary `src/i18n/ui.ts`, looked up via `useTranslations()` in `src/i18n/utils.ts`.
- Actual content (blog posts, team bios, events) is translated through parallel `en/`/`it/` Markdown files per collection, as described above — not through the UI dictionary.
- Components that render collection data (`Hero`, `EventsSection`, `LatestPosts`, `TeamSection`, and the blog pages/views in `src/components/views/`) read `Astro.currentLocale` and filter collection entries by locale (`entry.id.startsWith("en/")` / `"it/"`).
- The language switcher (`src/components/LanguageSwitcher.astro`) uses the flag icons in `src/assets/america.astro` / `src/assets/italy.astro` and preserves the current page when toggling language.
- When adding a new blog post, team member, or event, always add both an `en/` and an `it/` version so the site doesn't show missing or English-only content in Italian mode.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
