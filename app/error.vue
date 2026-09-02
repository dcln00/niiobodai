<script setup lang="ts">
import type { NuxtError } from '#app'

useHead({
	title: `Page Not Found — Nii Obodai`,
})

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template lang="pug">
div(class="body-outlet relative flex flex-col min-h-screen bg-brand-bg text-brand-black selection:bg-brand-black selection:text-white antialiased")
	AppHeader
	main(class="grow flex items-center justify-center py-32 lg:py-44")
		div(class="container max-w-2xl text-center space-y-8")
			div(class="card rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-10 lg:p-14 shadow-[0_8px_30px_rgba(23,22,21,0.04)] space-y-6")
				p(class="label-pill") Error {{ error?.statusCode ?? 404 }}
				h1(class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-black tracking-tight") Page Not Found
				p(class="text-base sm:text-lg text-brand-muted leading-relaxed") The page you are looking for might have been moved, renamed, or is temporarily unavailable.
				div(class="pt-4")
					button(type="button" class="btn-primary" @click="handleError")
						span Return to Homepage
						span →
	AppFooter
</template>

