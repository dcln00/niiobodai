<script setup lang="ts">
const route = useRoute()

const pageTitle = computed(() => titleCase(route.params.slug as string))

useHead({
	title: () => `Nii Obodai - ${pageTitle.value}`,
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-20 lg:pb-24 bg-brand-black")
	.container
		.text-center(class="space-y-4")
			h1(class="text-3xl lg:text-5xl text-white tracking-tight font-light") {{ pageTitle }}
</template>
