<script setup lang="ts">
import type { NuxtError } from '#app'

useHead({
	title: `Nii Obodai - Page Not Found`,
})

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template lang="pug">
div
	AppHeader
	section#error(class="relative h-screen bg-brand-black flex items-center justify-center")
		div(class="text-center text-white")
			h2(class="text-8xl pb-8 font-extrabold tracking-tighter") #[span(class="sr-only") Error] {{ error.statusCode }}
			p(class="text-xl lg:text-2xl") Sorry, we couldn't find this page.
			p(class="mt-4 mb-8") But dont worry, you can find plenty of other things on our homepage.
			button(rel="noopener noreferrer" class="mx-auto text-brand-accent" @click="handleError")
				p(class="text") Back to Homepage
</template>