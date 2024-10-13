export type Route = {
	name: string;
	href: string;

	type?: "button" | "link" | undefined;
}

export const routes: Route[] = [
	{
		name: "about",
		type: "link",
		href: "#about",
	},
	{
		name: "experience",
		type: "link",
		href: "#experience",
	},
	{
		name: "projects",
		type: "link",
		href: "#projects",
	},
	{
		name: "contact",
		type: "link",
		href: "#contact",
	},
	{
		type: "button",
		name: "view resume",
		href: "/resume/download",
	}
];