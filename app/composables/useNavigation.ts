export default function () {
	const menu = useState("menu", () => [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Photography",
			path: "/photography",
		},
		{
			name: "Campaigns",
			path: "/campaigns",
		},
		{
			name: "Blog",
			path: "/blog",
		},
		{
			name: "Events",
			path: "/events",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	])
	return menu
}