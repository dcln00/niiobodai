<script setup lang="ts">
useHead({
	title: 'Nii Obodai - Helping People Prepare for Opportunities',
})

const heroButtons = [
	{ name: 'Explore My Work', path: '/services' },
	{ name: 'Study Abroad', path: '/study-abroad' },
	{ name: 'Digital Resources', path: '/store' },
]

const services = [
	{
		icon: '🎓',
		name: 'Study Abroad',
		tagline: 'Preparing international students for life in America before they board the plane.',
		body: "Moving to a new country is more than securing admission. It's learning how to manage money, understand the healthcare system, build credit, find housing, get a driver's license, secure internships, and navigate a completely different culture. Through coaching, educational resources, and my Before You Land series, I help students arrive informed, prepared, and ready to succeed.",
		cta: 'Explore Study Abroad',
		path: '/study-abroad',
	},
	{
		icon: '🚀',
		name: 'Business & Brand Strategy',
		tagline: 'Helping founders and organizations build businesses people trust.',
		body: "Whether you're launching your first business, repositioning your brand, or developing a marketing strategy, I work with entrepreneurs and organizations to transform ideas into sustainable businesses with clear messaging and purposeful growth.",
		cta: 'Explore Consulting',
		path: '/services',
	},
	{
		icon: '🎤',
		name: 'Speaking & Workshops',
		tagline: 'Helping audiences think differently about business, leadership, communication, and opportunity.',
		body: 'I speak at universities, conferences, organizations, and leadership events, sharing practical insights that inspire action and long-term impact.',
		cta: 'Invite Me to Speak',
		path: '/contact',
	},
	{
		icon: '📚',
		name: 'Digital Resources',
		tagline: 'Knowledge you can put into action immediately.',
		body: 'My digital resources are designed to simplify complex topics into practical guides, templates, planners, checklists, and toolkits that help you make smarter decisions with confidence.',
		cta: 'Visit the Store',
		path: '/store',
	},
]

const beforeYouLand = [
	'No one explains how credit scores work.',
	'How expensive healthcare can be.',
	'Why driving matters.',
	'How to build a professional network.',
	'How to budget.',
	'How to find your first internship.',
	'Or why your financial decisions today can affect your future for years.',
]

const resources = [
	'Before You Land Survival Guide',
	'International Student Budget Planner',
	'Visa Interview Preparation Guide',
	'Apartment Hunting Checklist',
	'Building Credit in America',
	'Personal Branding Workbook',
	'Business Validation Toolkit',
	'Marketing Planning Template',
	'Networking Playbook',
	'Career Development Workbook',
]
</script>

<template lang="pug">
div
	section#hero(class="relative pt-40 pb-20 lg:py-52 bg-brand-black overflow-hidden")
		.container(class="relative")
			.content(class="w-full lg:w-3/4 space-y-6")
				h1(class="text-3xl lg:text-6xl text-white tracking-tighter font-light leading-tight!") Helping People Prepare for Opportunities That #[span(class="text-brand-accent") Change Their Lives.]
				p(class="text-lg lg:text-xl text-zinc-400 tracking-tight w-full lg:w-3/4") Whether you're preparing to study in the United States, build a business, strengthen your brand, or take the next step in your career, I help you move forward with clarity, confidence, and practical strategies that work.
				.buttons(class="flex flex-wrap gap-4 pt-4")
					NuxtLink(v-for="(button, idx) in heroButtons" :key="button.path" :to="button.path" :class="['p-3 px-6 text-sm uppercase tracking-tight duration-300', idx === 0 ? 'bg-white text-black hover:bg-neutral-300' : 'border border-white/30 text-white hover:border-brand-accent hover:text-brand-accent']") {{ button.name }}
	section#who-i-am(class="py-20 lg:py-28 bg-brand-dark")
		.container(class="flex flex-wrap")
			div(class="w-full lg:w-4/12 p-4 max-lg:px-0")
				h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest") Who I Am
			div(class="w-full lg:w-8/12 p-4 max-lg:px-0 space-y-6")
				h3(class="text-2xl lg:text-4xl text-white tracking-tighter font-light") Hi, I'm Terrick Nii Obodai Torgbor.
				p(class="text-lg text-zinc-400 tracking-tight") I'm a marketing strategist, educator, entrepreneur, and speaker passionate about helping people make better decisions before the moment that matters most.
				p(class="text-lg text-zinc-400 tracking-tight") I've worked with entrepreneurs building businesses, students preparing for life abroad, organizations shaping their brands, and professionals navigating career transitions. Across every project, one lesson has remained constant:
				blockquote(class="border-l-2 border-brand-accent pl-6 text-xl lg:text-2xl text-white tracking-tight font-light italic") Preparation creates confidence. Confidence creates opportunity.
				p(class="text-lg text-zinc-400 tracking-tight") That's why I dedicate my work to creating practical education, strategic guidance, and resources that help people thrive—not just react.
	section#how-i-can-help(class="py-20 lg:py-28 bg-brand-black")
		.container
			h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-12") How I Can Help
			.cards(class="grid grid-cols-1 lg:grid-cols-2 gap-8")
				div(v-for="service in services" :key="service.name" class="bg-brand-dark p-8 rounded-lg space-y-4")
					span(class="text-4xl") {{ service.icon }}
					h3(class="text-2xl text-white tracking-tight font-light") {{ service.name }}
					p(class="text-brand-accent tracking-tight") {{ service.tagline }}
					p(class="text-zinc-400 tracking-tight leading-relaxed") {{ service.body }}
					NuxtLink(:to="service.path" class="inline-block text-sm uppercase tracking-tight text-white hover:text-brand-accent duration-300") {{ service.cta }} →
	section#before-you-land(class="py-20 lg:py-28 bg-brand-dark")
		.container(class="flex flex-wrap")
			div(class="w-full lg:w-4/12 p-4 max-lg:px-0")
				h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest") Featured: Before You Land
			div(class="w-full lg:w-8/12 p-4 max-lg:px-0 space-y-6")
				h3(class="text-2xl lg:text-4xl text-white tracking-tighter font-light") Because success in America begins before your flight.
				p(class="text-lg text-zinc-400 tracking-tight") Every semester, thousands of international students arrive in the United States academically prepared—but completely unprepared for everyday life.
				ul(class="space-y-2 *:text-zinc-400 *:tracking-tight *:pl-4 *:border-l *:border-white/10")
					li(v-for="(point, idx) in beforeYouLand" :key="idx") {{ point }}
				p(class="text-lg text-zinc-400 tracking-tight") That's why I created Before You Land—a practical video series designed to help international students prepare for the realities of living, studying, and working in the United States.
				NuxtLink(to="/study-abroad" class="inline-block p-3 px-6 text-sm uppercase tracking-tight bg-white text-black hover:bg-neutral-300 duration-300") Watch the Series
	section#resources(class="py-20 lg:py-28 bg-brand-black")
		.container
			h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest") Featured Resources
			h3(class="text-2xl lg:text-4xl text-white tracking-tighter font-light pt-4") Learn Once. Benefit for Years.
			p(class="text-lg text-zinc-400 tracking-tight pt-4") Explore practical resources designed to help you take action with confidence.
			p(class="text-sm uppercase tracking-widest text-brand-accent font-medium pt-12 pb-6") Coming Soon
			.grid(class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4")
				div(v-for="resource in resources" :key="resource" class="bg-brand-dark p-6 rounded-lg text-white tracking-tight") {{ resource }}
	section#why-different(class="py-20 lg:py-28 bg-brand-dark")
		.container
			h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-8") Why My Work Is Different
			.content(class="w-full lg:w-3/4 space-y-6")
				p(class="text-2xl lg:text-3xl text-white tracking-tight font-light") Information is everywhere. #[span(class="text-zinc-500") Practical wisdom isn't.]
				p(class="text-lg text-zinc-400 tracking-tight") Everything I create is grounded in real-world experience, thoughtful research, and lessons learned from working with people across education, business, and leadership.
				p(class="text-lg text-zinc-400 tracking-tight") I don't believe in overwhelming people with information. I believe in giving people the clarity they need to make better decisions.
				p(class="text-xl lg:text-2xl text-white tracking-tight font-light") Because one informed decision today can change the course of tomorrow.
</template>
