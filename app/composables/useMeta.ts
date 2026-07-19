export default function () {
	const socials = [
		{
			name: "LinkedIn",
			href: "http://www.linkedin.com/in/terrick-nii-obodai-torgbor/",
			icon: "svg-linkedin",
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/theniiobodai/",
			icon: "svg-instagram",
		},
	]

	const meta = useState("meta", () => ({
		siteName: "Nii Obodai",
		tagline: "Marketing Strategist, Educator & Speaker",
		siteDescription: "Terrick Nii Obodai Torgbor helps people prepare for opportunities that change their lives — from studying abroad and building businesses to strengthening brands and advancing careers with clarity, confidence, and practical strategy.",
		ogSiteName: "Nii Obodai",
		siteUrl: "https://theniiobodai.com",
		ogImage: "https://res.cloudinary.com/dyr6sb7gn/image/upload/v1736003562/niiaryeh_q4xeqm.jpg",
		locale: "en_US",
		socials,
		business: {
			legalName: "Terrick Nii Obodai Torgbor",
			email: "info@theniiobodai.com",
			telephone: "+16179590984",
			priceRange: "$$",
			address: {
				streetAddress: "",
				addressLocality: "",
				addressRegion: "",
				postalCode: "",
				addressCountry: "US",
			},
			geo: {
				latitude: "",
				longitude: "",
			},
			openingHours: "Mo-Fr 09:00-17:00",
			sameAs: socials.map((social) => social.href),
		},
	}))

	return meta
}