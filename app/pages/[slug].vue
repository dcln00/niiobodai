<script setup lang="ts">
const route = useRoute()

const pageTitle = computed(() => titleCase(route.params.slug as string))

useHead({
	title: () => `${pageTitle.value} - Nii Obodai`,
})

// Catch-all renders arbitrary slugs with no real content; keep these
// thin/soft-404 pages out of the index.
useSeoMeta({
	robots: 'noindex, follow',
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-20 lg:pb-24 bg-brand-black")
	.container
		.text-center(class="space-y-4")
			h1(class="text-3xl lg:text-5xl text-white tracking-tight font-light") {{ pageTitle }}
</template>
