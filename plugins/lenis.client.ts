import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
	const lenis: Lenis = new Lenis({
		autoRaf: true,
		lerp: 0.1,
	})

	nuxtApp.provide('lenis', lenis)
})