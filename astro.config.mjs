// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// astro.config.mjs runs before Astro/Vite's own env loading, so local .env
// files aren't in `process.env` yet here. Load them in explicitly — this
// never overrides real OS/CI environment variables (e.g. Vercel's own
// system env vars), it only fills in gaps from .env* files.
Object.assign(process.env, loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), ''));

/**
 * @param {string} url
 * @returns {string}
 */
const stripTrailingSlash = (url) => url.replace(/\/+$/, '');

// SITE_URL (set in .env for local/non-Vercel builds) takes a full URL and
// wins if present. Otherwise fall back to Vercel's auto-injected
// VERCEL_PROJECT_PRODUCTION_URL (a bare hostname, no protocol). Otherwise
// default to localhost for local dev.
const site = process.env.SITE_URL
	? stripTrailingSlash(process.env.SITE_URL)
	: process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: 'http://localhost:4321';

export default defineConfig({
	site,
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'it'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: { en: 'en', it: 'it' },
			},
		}),
	],
	adapter: vercel(),
	vite: {
		plugins: [tailwindcss()],
	},
});
