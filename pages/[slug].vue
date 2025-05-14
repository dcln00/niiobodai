<script setup lang="ts">
const route = useRoute()

const formatSlug = computed(() => {
  const slug = route.params.slug as string
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
})

useHead({
	title: () => `Nii Obodai - ${formatSlug.value}`,
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-20 lg:pb-24 bg-brand-black")
	.container
		div(class="text-center space-y-4")
			h1(class="text-3xl lg:text-5xl text-white tracking-tight font-light" v-motion-slide-bottom :duration="500") {{ formatSlug }}
</template>