<script setup lang="ts">
const route = useRoute()

const pageTitle = computed(() => titleCase(route.params.slug as string))

useHead({
	title: () => `${pageTitle.value} — Nii Obodai`,
})

// Catch-all renders arbitrary slugs with no real content; keep these
// thin/soft-404 pages out of the index.
useSeoMeta({
	robots: 'noindex, follow',
})
</script>

<template lang="pug">
div
	section(id="hero" class="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden relative")
		div(class="container max-w-4xl space-y-6")
			NuxtLink(to="/" class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-black transition-colors")
				span ←
				span Return to Homepage
			div(class="space-y-4")
				p(class="label-pill") Page
				h1(class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-tight") {{ pageTitle }}
			div(class="card rounded-3xl bg-brand-surface border border-brand-black/8 p-8 lg:p-12 shadow-sm space-y-4")
				p(class="text-base sm:text-lg text-brand-muted leading-relaxed") This page is under construction or represents an archived route.
				NuxtLink(to="/" class="btn-primary") Return Home
</template>

