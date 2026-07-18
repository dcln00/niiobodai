<script setup lang="ts">
const brands = ['aag.png', 'baileys.png', 'brandeis.png', 'diageo.png', 'distinct cleaning.png', 'frontback.png', 'asatt.png', 'honeysuckle.png', 'doughman.png', 'lavo.png', 'qa.png', 'sapid.png', 'unique.png', 'upsa.png', 'zoomlion.png']
</script>

<template lang="pug">
div
	section#hero(class="relative bg-brand-black overflow-hidden")
		.container(class="relative flex items-center py-28 lg:py-40")
			span(class="absolute -right-24 -bottom-84 text-[60rem] font-bold text-neutral-800 opacity-50 pointer-events-none select-none") n
			.content(class="w-full lg:w-3/4 p-4 max-lg:px-0 space-y-4")
				h2(class="text-2xl text-white tracking-tighter leading-snug!") Hi, I'm Nii Obodai
				h1(class="text-2xl lg:text-5xl text-white tracking-tighter leading-snug!")
					| A #[span(class="font-bold text-brand-accent") strategic Marketing Consultant] passionate about helping brands tell their best stories.
	section#skills(class="py-12 lg:py-20 bg-brand-dark")
		.container(class="flex flex-wrap")
			div(class="w-full lg:w-4/12 p-4")
				h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest") Areas of Expertise
			div(class="w-full lg:w-8/12 p-4")
				ul(class="space-y-4 lg:space-y-8 *:tracking-tight *:text-2xl lg:*:text-4xl font-light *:cursor-pointer *:text-white hover:*:text-brand-accent hover:*:duration-300")
					li Brand Development
					li Digital Marketing & Social Media
					li Photography & Visual Storytelling
					li Event Marketing & Coordination
					li Training & Consulting
	section#brands(class="py-12 lg:py-20 bg-brand-black")
		.container
			h2(class="text-center pb-8 text-sm uppercase text-brand-accent font-medium tracking-widest") Brands I've Worked With
			div(class="flex flex-wrap")
				div(class="w-4/12 lg:w-2/12 p-4 max-lg:px-0 flex justify-center pointer-events-none" v-for="brand in brands" :key="brand")
					NuxtImg(:src="`brands/${brand}`" :alt="brand.replace('.png', '')" class="w-full h-full object-contain")
	section#philosophy(class="py-12 lg:py-20 bg-brand-dark")
		.container(class="flex flex-wrap")
			div(class="w-full lg:w-4/12 p-4")
				h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest") Marketing Philosophy
			div(class="w-full lg:w-8/12 p-4")
				p(class="text-2xl font-light text-white tracking-tight leading-relaxed! italic") I believe marketing should be strategic, flexible, and results-driven. Instead of rigid formulas, I design tailored approaches that align with each brand’s unique goals. By continuously analyzing performance and adapting strategies, I ensure every campaign delivers real impact and long-term growth.
</template>
