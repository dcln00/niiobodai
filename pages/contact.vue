<script setup lang="ts">
useHead({
	title: 'Nii Obodai - Contact',
})

const input = reactive({
	name: '',
	email: '',
	subject: '',
	message: '',
})
</script>

<template lang="pug">
section#contact-form(class="pt-40 pb-20 lg:py-60 bg-brand-black")
	.container(class="flex flex-wrap")
		div(class="w-full lg:w-1/2 p-4 max-lg:px-0 space-y-8")
			h2(class="text-2xl lg:text-5xl text-white tracking-tighter" v-motion-slide-bottom :duration="1000") Let's Connect
			p(class="text-2xl lg:text-2xl text-white tracking-tighter" v-motion-slide-bottom :delay="200" :duration="1000") Have a project or question? Send me a message. I will reply within 48 hours.
			form(novalidate v-motion-slide-bottom :delay="400" :duration="1000")
				div(class="flex flex-wrap -m-2")
					div(class="w-full lg:w-1/2 p-2 pb-4 max-lg:px-0")
						input.form-input(required id="name" type="text" v-model="input.name" placeholder="Your Name")
					div(class="w-full lg:w-1/2 p-2 pb-4 max-lg:px-0")
						input.form-input(required id="email" type="email" v-model.trim="input.email" placeholder="Email Address")
					div(class="w-full p-2 pb-4 max-lg:px-0")
						input.form-input(required id="subject" type="text" v-model="input.subject" placeholder="Subject")
					div(class="w-full p-2 pb-4 max-lg:px-0")
						textarea.form-input(id="message" rows="3" v-model="input.message" placeholder="Your Message")
				button(type="submit" class="mt-8 p-3 px-6 text-sm uppercase bg-white hover:bg-neutral-300 :text-black") SUBMIT
		div(class="w-full lg:w-1/2 p-4 max-lg:px-0 hidden lg:flex items-center")
			div(class="space-y-8 bg-brand-dark w-full lg:w-2/3 p-8 rounded-lg mx-auto" v-motion-slide-visible-once-right :duration="1000")
				div
					p(class="text-2xl lg:text-2xl text-white tracking-tighter pb-2") Email Me At
					NuxtLink(to="mailto:abc@gmail.com" class="text-lg text-zinc-400") abc@gmail.com
				div
					p(class="text-2xl lg:text-2xl text-white tracking-tighter pb-2") Telephone
					NuxtLink(to="tel:+1234567890" class="text-lg text-zinc-400") +123 456 7890

</template>