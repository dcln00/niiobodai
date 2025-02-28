export default defineNuxtConfig({
	compatibilityDate: '2025-02-26',
	devtools: { enabled: false },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@nuxt/image',
		'nuxt-svgo',
		'@vueuse/nuxt',
		'@vueuse/motion/nuxt'
	],
	tailwindcss: {
		viewer: false,
		cssPath: ['~/assets/tailwind.css', { injectPosition: 'first' }],
	},
	googleFonts: {
		families: {
			Inter: '100..900',
			Jost: '100..900',
		},
		preload: true,
	},
	nitro: {
		preset: 'vercel',
	},
})
