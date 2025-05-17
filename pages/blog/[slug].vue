<script setup lang="ts">
const route = useRoute()

const formatSlug = computed(() => {
  const slug = route.params.slug as string
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
})

useHead({
	title: () => `${formatSlug.value} - Nii Obodai`,
})

const { data: post } = await useAsyncData(`${route.params.slug}`, () => {
  return queryCollection('blog').path(`/blog/${route.params.slug}`).first()
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-24 bg-brand-black")
	.container
		div(class="text-center space-y-16")
			h1(class="text-2xl lg:text-3xl text-white tracking-tight font-light") {{ post.title}}
			.photo(class="w-full lg:h-96 pointer-events-none")
				NuxtImg(:src="post.image" alt="featured image" class="w-full h-full object-cover object-center")
section#post(class="py-20 bg-brand-dark")
	div(class="max-lg:container")
		div(class="lg:w-1/2 mx-auto")
			ClientOnly
				ContentRenderer(v-if="post" :value="post" class="prose max-w-none prose-a:no-underline prose-a:text-white prose-h2:pb-4 prose-h1:font-normal prose-h1:text-xl prose-p:text-zinc-300 prose-strong:text-white prose-headings:text-white")
</template>