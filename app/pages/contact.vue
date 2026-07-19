<script setup lang="ts">
const title = 'Contact - Nii Obodai'
const description =
	'Get in touch about study abroad coaching, business and brand strategy, speaking engagements, or ways we can work together.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})

const input = reactive({
	name: '',
	email: '',
	phone: '',
	subject: '',
	message: '',
})

const newsletterEmail = ref('')
</script>

<template lang="pug">
section#contact-form(class="pt-40 pb-20 lg:py-60 bg-brand-black")
	.container(class="flex flex-wrap")
		div(class="w-full lg:w-1/2 p-4 max-lg:px-0 space-y-8")
			h1(class="text-2xl lg:text-5xl text-white tracking-tighter") Let's Start the Conversation
			p(class="text-lg text-zinc-400 tracking-tight") Whether you're planning to study abroad, growing a business, looking for a speaker, or exploring ways we can work together, I'd love to hear from you. Tell me a little about what you're working on, and let's explore how I can help.
			form(novalidate)
				div(class="flex flex-wrap -m-2")
					div(class="w-full lg:w-1/2 p-2 pb-4 max-lg:px-0")
						input.form-input(required id="name" type="text" v-model="input.name" placeholder="Your Name")
					div(class="w-full lg:w-1/2 p-2 pb-4 max-lg:px-0")
						input.form-input(required id="email" type="email" v-model.trim="input.email" placeholder="Email Address")
					div(class="w-full p-2 pb-4 max-lg:px-0")
						input.form-input(required id="phone" type="text" v-model="input.phone" placeholder="Phone Number")
					div(class="w-full p-2 pb-4 max-lg:px-0")
						input.form-input(required id="subject" type="text" v-model="input.subject" placeholder="Subject")
					div(class="w-full p-2 pb-4 max-lg:px-0")
						textarea.form-input(id="message" rows="3" v-model="input.message" placeholder="Your Message" class="resize-none")
				button(type="submit" class="mt-8 p-3 px-6 text-sm uppercase bg-white hover:bg-neutral-300 text-black") SUBMIT
		div(class="w-full lg:w-1/2 p-4 max-lg:px-0 hidden lg:flex items-center")
			div(class="space-y-8 bg-brand-dark w-full lg:w-2/3 p-8 rounded-lg mx-auto")
				div
					p(class="text-2xl text-white tracking-tighter pb-2") Email Me At
					NuxtLink(to="mailto:info@theniiobodai.com" class="text-lg text-zinc-400") info@theniiobodai.com
				div
					p(class="text-2xl text-white tracking-tighter pb-2") Telephone
					NuxtLink(to="tel:+1(617)959-0984" class="text-lg text-zinc-400") +1 (617) 959-0984
section#newsletter(class="py-20 lg:py-28 bg-brand-dark")
	.container
		.content(class="w-full lg:w-2/3 mx-auto text-center space-y-6")
			h2(class="text-3xl lg:text-5xl text-white tracking-tighter font-light") Stay Ready.
			p(class="text-lg text-zinc-400 tracking-tight") Join a growing community of students, entrepreneurs, and professionals receiving practical insights on studying abroad, business, branding, leadership, and personal growth.
			p(class="text-zinc-500 tracking-tight") No spam. Just thoughtful ideas and actionable resources delivered to your inbox.
			form(novalidate class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4")
				input.form-input(required id="newsletter-email" type="email" v-model.trim="newsletterEmail" placeholder="Email Address" class="flex-1")
				button(type="submit" class="p-3 px-6 text-sm uppercase tracking-tight bg-white text-black hover:bg-neutral-300 duration-300 whitespace-nowrap") Join the Community
</template>
