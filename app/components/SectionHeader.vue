<script setup lang="ts">
interface Props {
	title: string
	headline?: string
	description?: string
	centered?: boolean
}

const { title, headline = '', description = '', centered = false } = defineProps<Props>()
</script>

<template lang="pug">
div(class="section-header" :class="['pb-8 lg:pb-12 space-y-4', centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl']")
	div(class="flex items-center gap-2" :class="centered ? 'justify-center' : ''")
		p(class="label-pill") {{ title }}
	h2(v-if="headline" class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-black leading-[1.15]") {{ headline }}
	p(v-if="description" class="text-base text-brand-muted leading-relaxed") {{ description }}
	slot
</template>

