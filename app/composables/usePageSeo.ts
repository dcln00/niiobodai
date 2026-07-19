export default function (title: string, description: string): void {
	useSeoMeta({
		title,
		description,
		ogTitle: title,
		ogDescription: description,
		twitterTitle: title,
		twitterDescription: description,
	})
}
