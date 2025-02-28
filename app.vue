<script setup lang="ts">
const { $lenis } = useNuxtApp()
const route = useRoute()

const show = ref(false)

const toggleShow = () => {
	show.value = !show.value

	if(show.value) {
		$lenis.stop()
	} else {
		$lenis.start()
	}
}

useHead({
	title: 'Nii Obodai',
})

useSeoMeta({
	title: 'Nii Obodai',
	ogTitle: 'Nii Obodai',
	description: `%s - Marketing Consultant`,
	ogDescription: '%s - Marketing Consultant',
	ogImage: 'https://res.cloudinary.com/dyr6sb7gn/image/upload/v1736003562/niiaryeh_q4xeqm.jpg',
	ogImageAlt: 'Nii Obodai',
	ogUrl: 'https://www.theniiobodai.com/',
	twitterTitle: 'Nii Obodai',
	twitterDescription: `%s - Marketing Consultant`,
	twitterCard: 'summary_large_image',
	ogType: 'website',
})
</script>

<template lang="pug">
.body-outlet(class="flex flex-col min-h-screen")
	AppHeader(@toggle-show="toggleShow")
	Navigation(:show="show" @toggle-show="toggleShow")
	main(class="lg:grow")
		NuxtPage
	AppFooter
</template>