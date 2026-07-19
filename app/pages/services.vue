<script setup lang="ts">
useHead({
	title: 'Nii Obodai - Services',
})

const services = [
	{
		name: 'Study Abroad Coaching',
		body: 'Personalized support for students preparing to study and live in the United States.',
	},
	{
		name: 'Marketing Strategy',
		body: 'Helping businesses build brands people remember and trust.',
	},
	{
		name: 'Business Consulting',
		body: 'Supporting founders as they validate ideas, develop strategies, and grow sustainable businesses.',
	},
	{
		name: 'Speaking Engagements',
		body: 'Interactive talks and workshops on entrepreneurship, leadership, branding, communication, and global opportunities.',
	},
]
</script>

<template lang="pug">
div
	section#hero(class="pt-40 pb-16 lg:pb-24 bg-brand-black")
		.container
			p(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-4") Services
			h1(class="text-3xl lg:text-5xl text-white tracking-tighter font-light w-full lg:w-3/4") Let's Build What's Next
	section#services(class="py-16 lg:py-24 bg-brand-dark")
		.container
			.grid(class="grid grid-cols-1 lg:grid-cols-2 gap-8")
				div(v-for="service in services" :key="service.name" class="bg-brand-black p-8 rounded-lg space-y-4")
					h2(class="text-2xl text-white tracking-tight font-light") {{ service.name }}
					p(class="text-zinc-400 tracking-tight leading-relaxed") {{ service.body }}
</template>
