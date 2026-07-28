<script setup lang="ts">
const title = 'About - Nii Obodai'
const description =
	'Meet Terrick Nii Obodai Torgbor — marketing strategist, educator, and speaker helping people prepare for the opportunities that define their future.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})
</script>

<template lang="pug">
div
	section#hero(class="relative pt-40 pb-16 lg:pb-24 bg-brand-black overflow-hidden")
		hero-media(src="/photos/graduation-brandeis-sign.jpg" alt="Terrick in cap and gown leaning against the Brandeis University sign on graduation day" position="object-[15%_38%]" :priority="true")
		.container(class="relative")
			p(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-4") About Terrick
			h1(class="text-3xl lg:text-5xl text-white tracking-tighter font-light w-full lg:w-3/4") I believe every life-changing opportunity deserves intentional preparation.
	section#about(class="py-16 lg:py-24 bg-brand-dark")
		.container(class="flex flex-wrap items-start")
			.content(class="w-full lg:w-7/12 p-4 max-lg:px-0 space-y-6")
				p(class="text-lg text-zinc-400 tracking-tight") Whether it's moving to another country, launching a business, changing careers, or building a personal brand, success rarely happens by accident. It begins long before the opportunity arrives.
				p(class="text-lg text-zinc-400 tracking-tight") My work sits at the intersection of education, business strategy, marketing, communication, and leadership. Through consulting, speaking, content creation, and educational programs, I help individuals and organizations prepare for moments that define their future.
				p(class="text-lg text-zinc-400 tracking-tight") I hold graduate training in Global Health Policy & Management from Brandeis University and a background in Brand and Communications Management, experiences that have shaped how I approach problem-solving, leadership, and strategic thinking.
				p(class="text-lg text-zinc-400 tracking-tight") Today, I continue building platforms, businesses, and educational initiatives that equip people with practical knowledge and the confidence to act.
			div(class="w-full lg:w-5/12 p-4 max-lg:px-0 max-lg:pt-12")
				photo-figure(src="/photos/graduation-with-professor.jpg" alt="Terrick in graduation regalia with a Ghana kente stole, standing beside a faculty member in doctoral robes" caption="Commencement at Brandeis University." ratio="aspect-3/4" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
</template>
