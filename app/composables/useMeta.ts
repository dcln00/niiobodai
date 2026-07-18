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
		tagline: "Marketing Consultant",
		siteDescription: "Nii Obodai is a marketing consultant specializing in helping businesses grow their brand and reach their target audience.",
		ogSiteName: "Nii Obodai",
		siteUrl: "https://www.theniiobodai.com",
		ogImage: "https://res.cloudinary.com/dyr6sb7gn/image/upload/v1736003562/niiaryeh_q4xeqm.jpg",
		locale: "en_GH",
		socials,
		business: {
			legalName: "TCI Production Ltd.",
			email: "thecreativeincbookings@gmail.com",
			telephone: "+233200073516",
			priceRange: "$$$",
			address: {
				streetAddress: "11 Hibiscus Street",
				addressLocality: "East Legon",
				addressRegion: "Accra",
				postalCode: "",
				addressCountry: "GH",
			},
			geo: {
				latitude: "5.553088",
				longitude: "-0.213469",
			},
			openingHours: "Mo-Fr 09:00-17:00",
			sameAs: socials.map((social) => social.href),
		},
	}))

	return meta
}