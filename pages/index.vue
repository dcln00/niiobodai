<script setup lang="ts">
const brands = ['aag.png', 'baileys.png', 'brandeis.png', 'diageo.png', 'distinct cleaning.png', 'frontback.png', 'asatt.png', 'honeysuckle.png', 'doughman.png', 'lavo.png', 'qa.png', 'sapid.png', 'unique.png', 'upsa.png', 'zoomlion.png']
</script>

<template lang="pug">
div
	Hero
	section#skills(class="py-12 lg:py-20 bg-brand-dark")
		.container(class="flex flex-wrap")
			div(class="w-full lg:w-4/12 p-4")
				h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest" v-motion-fade-visible-once :duration="500") Areas of Expertise
			div(class="w-full lg:w-8/12 p-4")
				ul(class="space-y-4 lg:space-y-8 *:tracking-tight *:text-2xl lg:*:text-4xl font-light *:cursor-pointer *:text-white hover:*:text-brand-accent hover:*:duration-300")
					li(v-motion-slide-visible-once-bottom :duration="500") Brand Development
					li(v-motion-slide-visible-once-bottom :delay="200" :duration="500") Digital Marketing & Social Media
					li(v-motion-slide-visible-once-bottom :delay="400" :duration="500") Photography & Visual Storytelling
					li(v-motion-slide-visible-once-bottom :delay="600" :duration="500") Event Marketing & Coordination
					li(v-motion-slide-visible-once-bottom :delay="800" :duration="500") Training & Consulting
	section#brands(class="py-12 lg:py-20 bg-brand-black")
		.container
			h2(class="text-center pb-8 text-sm uppercase text-brand-accent font-medium tracking-widest" v-motion-slide-visible-once-bottom) Brands Ive Worked With
			div(class="flex flex-wrap")
				div(class="w-4/12 lg:w-2/12 p-4 max-lg:px-0 flex justify-center pointer-events-none" v-for="(brand, idx) in brands" :key="idx" v-motion-pop-visible-once :delay="idx * 200" :duration="500")
					NuxtImg(:src="`brands/${brand}`" alt="Brand 1" class="w-full h-full object-contain")
	section#philosophy(class="py-12 lg:py-20 bg-brand-dark")
		.container(class="flex flex-wrap")
			div(class="w-full lg:w-4/12 p-4")
				h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest" v-motion-fade-visible-once :duration="500") Marketing Philosophy
			div(class="w-full lg:w-8/12 p-4")
				p(class="text-2xl lg:text-2xl font-light text-white tracking-tight !leading-relaxed italic" v-motion-slide-visible-once-bottom :duration="500") I believe marketing should be strategic, flexible, and results-driven. Instead of rigid formulas, I design tailored approaches that align with each brand’s unique goals. By continuously analyzing performance and adapting strategies, I ensure every campaign delivers real impact and long-term growth.
</template>