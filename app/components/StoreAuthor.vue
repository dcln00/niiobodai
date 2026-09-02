<script setup lang="ts">
interface Props {
	compact?: boolean
}

const { compact = false } = defineProps<Props>()

const meta = useMeta()
</script>

<template lang="pug">
div(class="store-author" :class="['rounded-3xl border border-brand-black/6 bg-brand-surface p-6 lg:p-8 shadow-[0_4px_24px_rgba(23,22,21,0.03)] flex gap-6', compact ? 'items-center p-4!' : 'items-start max-md:flex-col']")
	div(class="photo" :class="['shrink-0 aspect-3/4 overflow-hidden bg-brand-surface-subtle border border-brand-black/8', compact ? 'size-14 rounded-full aspect-square' : 'w-20 sm:w-24 rounded-2xl shadow-sm']")
		nuxt-img(src="/photos/portrait-navy-suit-outdoors.jpg" :alt="`Portrait of ${meta.person.legalName}`" width="120" height="160" format="webp" quality="85" loading="lazy" class="size-full object-cover object-[50%_15%]")
	div(class="byline space-y-3 flex-1")
		div(class="flex items-center gap-2 flex-wrap")
			span(class="font-display font-bold text-base text-brand-black") Terrick Nii Obodai Torgbor
			span(class="label-pill text-[10px] py-0.5 px-2.5") Author & Strategist
		p(class="text-sm sm:text-base text-brand-muted leading-relaxed") Created by an international student who learned these systems the hard way — so you don't have to navigate them alone.
		p(v-if="!compact" class="text-sm text-brand-muted leading-relaxed") Graduate training in Global Health Policy & Management from Brandeis University. Built from direct experience with US immigration, healthcare, housing, credit, and high-impact career planning.
		NuxtLink(v-if="!compact" to="/about" class="btn-ghost inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold pt-1")
			span Read full background
			span →
</template>

