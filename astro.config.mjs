// @ts-check

import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeImageZoom from "./src/rehype/rehype-image-zoom.js";

export default defineConfig({
  site: "https://finassoc.usi.ch",
  integrations: [
    mdx(),
    sitemap(),
    unified({
      rehypePlugins: [rehypeImageZoom],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
