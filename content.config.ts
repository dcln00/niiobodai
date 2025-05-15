import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			source: 'blog/*.md',
			type: 'page',
			schema: z.object({
				image: z.string(),
				date: z.date()
			})
		}),
	},
})