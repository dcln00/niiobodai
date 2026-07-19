export default function () {
	const menu = useState("menu", () => [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Study Abroad",
			path: "/study-abroad",
		},
		{
			name: "Store",
			path: "/store",
		},
		{
			name: "Blog",
			path: "/blog",
		},
		{
			name: "Services",
			path: "/services",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	])
	return menu
}
