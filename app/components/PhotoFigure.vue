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
figure(class="group space-y-3 w-full")
	div(class="frame" :class="['relative overflow-hidden bg-brand-surface-subtle rounded-3xl border border-brand-black/8 shadow-[0_4px_20px_rgba(23,22,21,0.04)]', ratio]")
		nuxt-img(:src="src" :alt="alt" :sizes="sizes" format="webp" quality="85" loading="lazy" :class="['size-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out', position]")
	figcaption(v-if="caption" class="flex items-center gap-2 text-xs font-medium text-brand-muted tracking-wide")
		span(class="size-1 rounded-full bg-brand-black/30")
		span {{ caption }}
</template>

