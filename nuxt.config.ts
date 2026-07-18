// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss'],
  fonts: {
		defaults: {
			weights: [300, 400, 500, 600, 700, 800, 900],
			styles: ['normal'],
			subsets: ['latin'],
		},
	},
  tailwindcss: {
		viewer: false,
	},
	nitro: {
		preset: 'vercel',
	},
	vite: {
		optimizeDeps: {
			include: [
				'@vue/devtools-core',
				'@vue/devtools-kit',
			]
		}
	}
})