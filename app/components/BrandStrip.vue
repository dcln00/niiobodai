<script setup lang="ts">
const BRANDS = [
	{ name: 'AAG', src: '/brands/aag.png' },
	{ name: 'ASATT', src: '/brands/asatt.png' },
	{ name: 'Baileys', src: '/brands/baileys.png' },
	{ name: 'Brandeis University', src: '/brands/brandeis.png' },
	{ name: 'Diageo', src: '/brands/diageo.png' },
	{ name: 'Distinct Cleaning', src: '/brands/distinct cleaning.png' },
	{ name: 'Doughman', src: '/brands/doughman.png' },
	{ name: 'Front/Back', src: '/brands/frontback.png' },
	{ name: 'Honeysuckle', src: '/brands/honeysuckle.png' },
	{ name: 'Lavo', src: '/brands/lavo.png' },
	{ name: 'QA', src: '/brands/qa.png' },
	{ name: 'Sapid', src: '/brands/sapid.png' },
	{ name: 'Unique', src: '/brands/unique.png' },
	{ name: 'UPSA', src: '/brands/upsa.png' },
	{ name: 'Zoomlion', src: '/brands/zoomlion.png' },
]
</script>

<template lang="pug">
section#brands(class="py-16 lg:py-24")
	.container
		.panel(class="rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/6 p-8 lg:p-12 shadow-[0_4px_24px_rgba(23,22,21,0.03)] space-y-8")
			.flex(class="flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-brand-black/6")
				.space-y-2
					p(class="label-pill") Proven Track Record
					h3(class="font-display text-2xl lg:text-3xl font-bold text-brand-black tracking-tight") Selected Organizations & Brands
				p(class="text-sm text-brand-muted max-w-md") Collaborated with leading universities, global brands, consumer products, and growth-stage ventures.
			.strip(class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center pt-4")
				.brand-item(v-for="brand in BRANDS" :key="brand.name" class="w-full flex items-center justify-center p-3 rounded-2xl hover:bg-brand-surface-subtle transition-all duration-300 group")
					img(:src="brand.src" :alt="brand.name" class="h-7 lg:h-8 w-auto max-w-[120px] object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300")
</template>

