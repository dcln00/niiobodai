<script setup lang="ts">
interface Props {
	src: string
	alt: string
	position?: string
	priority?: boolean
}

const { src, alt, position = 'object-center', priority = false } = defineProps<Props>()

// @nuxt/image screen keys are max-widths, so the largest key is the desktop fallback.
const SIZES = 'sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw'
</script>

<template lang="pug">
.hero-media(class="absolute inset-0 overflow-hidden pointer-events-none")
	nuxt-img(:src="src" :alt="alt" :sizes="SIZES" densities="1" format="webp" quality="80" :loading="priority ? 'eager' : 'lazy'" :preload="priority" :class="['size-full object-cover', position]")
	.tint(class="absolute inset-0 bg-brand-black/60")
</template>
