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

const localBusinessSchema = computed(() => {
	const b = meta.value.business
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': `${meta.value.siteUrl}/#business`,
		name: meta.value.siteName,
		legalName: b.legalName,
		description: meta.value.siteDescription,
		url: meta.value.siteUrl,
		image: meta.value.ogImage,
		logo: meta.value.ogImage,
		email: b.email,
		telephone: b.telephone,
		priceRange: b.priceRange,
		address: {
			'@type': 'PostalAddress',
			streetAddress: b.address.streetAddress,
			addressLocality: b.address.addressLocality,
			addressRegion: b.address.addressRegion,
			postalCode: b.address.postalCode,
			addressCountry: b.address.addressCountry,
		},
		...(b.geo.latitude && b.geo.longitude
			? {
					geo: {
						'@type': 'GeoCoordinates',
						latitude: b.geo.latitude,
						longitude: b.geo.longitude,
					},
				}
			: {}),
		openingHours: b.openingHours,
		sameAs: b.sameAs,
		areaServed: 'Worldwide',
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
		{ name: 'theme-color', content: '#1a1a1a' },
	],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: () => JSON.stringify(localBusinessSchema.value),
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
.body-outlet(class="flex flex-col min-h-screen")
	app-header(@toggle-show="toggleShow")
	mobile-nav(:show="show" @close="show = false")
	NuxtRouteAnnouncer
	main(class="grow relative overflow-hidden")
		NuxtPage
	app-footer
</template>