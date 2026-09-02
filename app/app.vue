<script setup lang="ts">
const meta = useMeta()
const route = useRoute()

const show = ref(false)

const toggleShow = (): void => {
	show.value = !show.value
}

const pageTitle = computed(() => `${meta.value.siteName} | ${meta.value.tagline}`)
const canonicalUrl = computed(
	() => new URL(route.path, meta.value.siteUrl).href,
)

const personSchema = computed(() => {
	const p = meta.value.person
	const address = Object.fromEntries(
		Object.entries(p.address).filter(([, value]) => value),
	)

	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${meta.value.siteUrl}/#person`,
		name: p.legalName,
		alternateName: meta.value.siteName,
		jobTitle: meta.value.tagline,
		description: meta.value.siteDescription,
		url: meta.value.siteUrl,
		image: meta.value.ogImage,
		email: p.email,
		telephone: p.telephone,
		...(Object.keys(address).length
			? { address: { '@type': 'PostalAddress', ...address } }
			: {}),
		sameAs: p.sameAs,
	}
})

useHead({
	title: () => pageTitle.value,
	htmlAttrs: {
		lang: 'en',
	},
	link: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico',
		},
		{
			rel: 'canonical',
			href: () => canonicalUrl.value,
		},
	],
	meta: [
		{ name: 'theme-color', content: '#FAF8F5' },
	],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: () => JSON.stringify(personSchema.value),
		},
	],
})

useSeoMeta({
	title: () => pageTitle.value,
	description: () => meta.value.siteDescription,
	ogTitle: () => pageTitle.value,
	ogDescription: () => meta.value.siteDescription,
	ogType: 'website',
	ogImage: () => meta.value.ogImage,
	ogImageAlt: () => `${meta.value.siteName} — ${meta.value.tagline}`,
	ogSiteName: () => meta.value.ogSiteName,
	ogUrl: () => canonicalUrl.value,
	ogLocale: () => meta.value.locale,
	twitterCard: 'summary_large_image',
	twitterTitle: () => pageTitle.value,
	twitterDescription: () => meta.value.siteDescription,
	twitterImage: () => meta.value.ogImage,
})
</script>

<template lang="pug">
div(class="body-outlet relative flex flex-col min-h-screen bg-brand-bg text-brand-black selection:bg-brand-black selection:text-white antialiased overflow-x-hidden")
	div(class="ambient-glow pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-200/20 via-orange-100/10 to-transparent blur-3xl -z-10")
	app-header(@toggle-show="toggleShow")
	mobile-nav(:show="show" @close="show = false")
	NuxtRouteAnnouncer
	main(class="grow relative")
		NuxtPage
	app-footer
</template>