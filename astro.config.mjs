// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// astro.config.mjs runs before Astro/Vite's own env loading, so local .env
// files aren't in `process.env` yet here. Fill in unset env vars from .env*
// files without overwriting real OS/CI environment variables (e.g. Vercel's).
const loadedEnv = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
for (const [key, value] of Object.entries(loadedEnv)) {
	if (process.env[key] === undefined && value.trim() !== '') {
		process.env[key] = value;
	}
}

/**
 * @param {string} url
 * @returns {string}
 */
const stripTrailingSlash = (url) => url.replace(/\/+$/, '');

const siteUrl = process.env.SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

// SITE_URL (set in .env for local/non-Vercel builds) takes a full URL and
// wins if present. Otherwise fall back to Vercel's auto-injected
// VERCEL_PROJECT_PRODUCTION_URL (a bare hostname, no protocol). Otherwise
// default to localhost for local dev.
const site = siteUrl
	? stripTrailingSlash(siteUrl)
	: vercelUrl
		? `https://${stripTrailingSlash(vercelUrl)}`
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
