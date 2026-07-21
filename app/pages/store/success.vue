<script setup lang="ts">
interface DownloadLink {
	slug: string
	label: string
	url: string
}

const title = 'Your Download - Nii Obodai'

useSeoMeta({
	title,
	robots: 'noindex, nofollow',
})

const route = useRoute()
const sessionId = computed(() =>
	typeof route.query.session_id === 'string' ? route.query.session_id : '',
)

const freeFileHref = encodeURI('/products/Before You Land - Checklist (FREE Lead Magnet).pdf')

const { data, error } = await useAsyncData('download-links', async () => {
	if (!sessionId.value) return null
	return await $fetch<{ files: DownloadLink[] }>('/api/download-links', {
		query: { session_id: sessionId.value },
	})
})

const files = computed<DownloadLink[]>(() => data.value?.files ?? [])
</script>

<template lang="pug">
section#success(class="pt-40 pb-20 lg:py-52 bg-brand-black min-h-screen")
	.container
		template(v-if="files.length")
			p(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-4") Payment Successful
			h1(class="text-3xl lg:text-5xl text-white tracking-tighter font-light w-full lg:w-3/4") Thank you — your resources are ready.
			p(class="text-lg text-zinc-400 tracking-tight pt-6 w-full lg:w-3/4") Download each PDF below. These links expire after an hour — if one stops working, just reopen this page from your receipt link to get fresh ones.
			.downloads(class="w-full lg:w-3/4 mt-10 space-y-4")
				a(v-for="file in files" :key="file.slug" :href="file.url" class="flex items-center justify-between gap-4 bg-brand-dark rounded-lg p-6 hover:bg-neutral-800 duration-300")
					span(class="text-lg text-white tracking-tight") {{ file.label }}
					span(class="text-sm uppercase tracking-tight text-brand-accent whitespace-nowrap") Download PDF
				a(:href="freeFileHref" download class="flex items-center justify-between gap-4 bg-brand-dark rounded-lg p-6 hover:bg-neutral-800 duration-300")
					span(class="text-lg text-white tracking-tight") Pre-Departure Checklist (Bonus)
					span(class="text-sm uppercase tracking-tight text-brand-accent whitespace-nowrap") Download PDF
		template(v-else)
			h1(class="text-3xl lg:text-5xl text-white tracking-tighter font-light") {{ error ? "We couldn't verify your purchase" : "No purchase found" }}
			p(class="text-lg text-zinc-400 tracking-tight pt-6 w-full lg:w-3/4") We couldn't confirm a completed purchase for this link. If you've just paid, use the link in your receipt email. Otherwise, head back to the store.
			NuxtLink(to="/store" class="inline-block mt-8 p-3 px-6 text-sm uppercase tracking-tight bg-white text-black hover:bg-neutral-300 duration-300") Back to Store
</template>
