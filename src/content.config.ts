import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      description: z.string(),
      coverImage: image(),
      coverAlt: z.string().default(""),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string().default(""),
            caption: z.string().optional(),
          }),
        )
        .default([]),
      author: z.string().default("Anonymous"),
    }),
});

const team = defineCollection({
  loader: glob({ base: "./src/content/team", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      description: z.string(),
      photo: image(),
      linkedin: z.url(),
      order: z.number().default(99),
    }),
});

export const collections = { blog, team };
