<script setup lang="ts">
interface Props {
	src: string
	alt: string
	caption?: string
	ratio?: string
	position?: string
	sizes?: string
}

const {
	src,
	alt,
	caption = '',
	ratio = 'aspect-4/3',
	position = 'object-center',
	// @nuxt/image screen keys are max-widths, so the largest key is the desktop fallback.
	sizes = 'sm:100vw md:100vw lg:100vw xl:33vw 2xl:33vw',
} = defineProps<Props>()
</script>

<template lang="pug">
figure(class="space-y-3")
	.frame(:class="['relative overflow-hidden rounded-lg bg-brand-black', ratio]")
		nuxt-img(:src="src" :alt="alt" :sizes="sizes" format="webp" quality="80" loading="lazy" :class="['size-full object-cover', position]")
	figcaption(v-if="caption" class="text-sm text-zinc-500 tracking-tight") {{ caption }}
</template>
