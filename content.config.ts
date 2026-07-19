import { defineContentConfig, defineCollection, z } from "@nuxt/content"
import { defineSitemapSchema } from "@nuxtjs/sitemap/content"

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: "page",
			source: "blog/**/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string(),
				date: z.date(),
				image: z.string(),
				sitemap: defineSitemapSchema({ z }),
			}),
		}),
	},
})
