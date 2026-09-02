<script setup lang="ts">
const title = 'Contact & Inquiries — Nii Obodai'
const description =
	'Get in touch about study abroad coaching, business and brand strategy, speaking engagements, or ways we can collaborate.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})

const inquiryTypes = [
	'Study Abroad Coaching',
	'Brand & Marketing Strategy',
	'Speaking & Keynote',
	'Venture Advisory',
	'Other Collaboration',
]

const selectedType = ref('Study Abroad Coaching')

const input = reactive({
	name: '',
	email: '',
	phone: '',
	subject: 'Study Abroad Coaching',
	message: '',
})

const selectType = (type: string) => {
	selectedType.value = type
	input.subject = type
}

const newsletterEmail = ref('')
const formSubmitted = ref(false)

const handleSubmit = () => {
	formSubmitted.value = true
}
</script>

<template lang="pug">
div
	section#contact(class="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative")
		.container(class="space-y-12")
			.content(class="space-y-6 max-w-4xl")
				.flex(class="items-center gap-2.5 flex-wrap")
					span(class="label-pill") Direct Inquiries
					span(class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full")
						span(class="size-1.5 rounded-full bg-emerald-500")
						span Quick Response (&lt; 24h)
				h1(class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.12]") Let's Start the #[span(class="font-serif-accent font-normal italic text-stone-500") Conversation.]
				p(class="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-3xl") Whether you're preparing for life abroad, growing a venture, booking a keynote speaker, or exploring advisory — I look forward to connecting.
			.grid(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4")
				.form-col(class="lg:col-span-7 rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-12 shadow-[0_4px_30px_rgba(23,22,21,0.03)] space-y-8")
					.space-y-2
						h3(class="font-display text-2xl font-bold text-brand-black") Send an Inquiry
						p(class="text-sm text-brand-muted") Select your project type and fill in the details below.
					div(class="inquiry-pills space-y-2.5")
						p(class="text-xs font-mono font-bold uppercase tracking-wider text-brand-muted") // I'm interested in:
						.flex(class="flex-wrap gap-2")
							button(v-for="type in inquiryTypes" :key="type" type="button" @click="selectType(type)" :class="selectedType === type ? 'bg-brand-black text-white border-brand-black' : 'bg-brand-surface-subtle text-stone-700 hover:bg-stone-200/70 border-brand-black/6'" class="px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200") {{ type }}
					form(@submit.prevent="handleSubmit" novalidate class="space-y-5")
						.grid(class="grid grid-cols-1 sm:grid-cols-2 gap-4")
							div(class="space-y-1.5")
								label(for="name" class="text-xs font-semibold text-stone-700") Full Name *
								input.form-input(required id="name" type="text" v-model="input.name" placeholder="Terrick Torgbor")
							div(class="space-y-1.5")
								label(for="email" class="text-xs font-semibold text-stone-700") Email Address *
								input.form-input(required id="email" type="email" v-model.trim="input.email" placeholder="terrick@example.com")
						.grid(class="grid grid-cols-1 sm:grid-cols-2 gap-4")
							div(class="space-y-1.5")
								label(for="phone" class="text-xs font-semibold text-stone-700") Phone Number
								input.form-input(id="phone" type="text" v-model="input.phone" placeholder="+1 (617) ...")
							div(class="space-y-1.5")
								label(for="subject" class="text-xs font-semibold text-stone-700") Subject *
								input.form-input(required id="subject" type="text" v-model="input.subject" placeholder="Inquiry Topic")
						div(class="space-y-1.5")
							label(for="message" class="text-xs font-semibold text-stone-700") Message / Goals *
							textarea.form-input(required id="message" rows="4" v-model="input.message" placeholder="Tell me about what you are working on, your timeline, and what you hope to accomplish..." class="resize-none")
						button(type="submit" class="btn-primary w-full sm:w-auto py-4 px-8 text-center")
							span Submit Inquiry
							span →
						p(v-if="formSubmitted" class="text-xs text-emerald-700 bg-emerald-50 p-4 rounded-2xl border border-emerald-200") Thank you! Your message has been noted. We'll be in touch shortly.
				.info-col(class="lg:col-span-5 space-y-6")
					photo-figure(src="/photos/portrait-duo-event-hall.jpg" alt="Terrick standing with a student in an event hall" caption="Connecting 1-on-1 with students and partners" ratio="aspect-4/3" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
					.contact-cards(class="space-y-4")
						.card(class="rounded-3xl bg-brand-surface border border-brand-black/6 p-6 lg:p-8 shadow-sm space-y-4")
							.space-y-1
								p(class="text-xs font-mono font-bold uppercase tracking-wider text-brand-muted") // Direct Email
								NuxtLink(to="mailto:info@theniiobodai.com" class="font-display text-lg font-bold text-brand-black hover:text-stone-600 transition-colors block") info@theniiobodai.com
							.space-y-1(class="pt-3 border-t border-brand-black/6")
								p(class="text-xs font-mono font-bold uppercase tracking-wider text-brand-muted") // Telephone
								NuxtLink(to="tel:+16179590984" class="font-display text-lg font-bold text-brand-black hover:text-stone-600 transition-colors block") +1 (617) 959-0984
							.space-y-1(class="pt-3 border-t border-brand-black/6")
								p(class="text-xs font-mono font-bold uppercase tracking-wider text-brand-muted") // Base Locations
								p(class="text-sm font-medium text-brand-black") Boston, MA • Accra, Ghana • Global
	section#newsletter(class="py-16 lg:py-24 bg-brand-surface-subtle")
		.container
			div(class="rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-14 shadow-sm max-w-4xl space-y-6")
				section-header(number="02" title="Community Newsletter" headline="Stay Ready.")
				p(class="text-base sm:text-lg text-brand-muted leading-relaxed") Join a growing community of students, entrepreneurs, and professionals receiving actionable insights on studying abroad, business, branding, leadership, and personal growth.
				p(class="text-xs sm:text-sm text-stone-500") No spam. Just thoughtful ideas and practical resources delivered straight to your inbox.
				form(@submit.prevent novalidate class="flex flex-col sm:flex-row gap-3 max-w-lg pt-2")
					input.form-input(required id="newsletter-email" type="email" v-model.trim="newsletterEmail" placeholder="Enter your email address" class="flex-1")
					button(type="submit" class="btn-primary whitespace-nowrap shrink-0") Join the Community
</template>

