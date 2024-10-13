import { Facebook, Twitter, Github, Mail, Linkedin } from "lucide-react";

export type Social = {
	name: string;
	href: string;
	icon: any;
}

export const socials: Social[] = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/taslim-musa-azeez-746105226/",
		icon: Linkedin
	},
	{
		name: "Github",
		href: "https://github.com/TASLIM-ENIOLLA",
		icon: Github
	},
	{
		name: "Twitter",
		href: "https://twitter.com/musaazeezd1st",
		icon: Twitter
	},
	{
		name: "Facebook",
		href: "https://facebook.com/musaazeez.taslim",
		icon: Facebook
	},
	{
		name: "E-Mail",
		href: "mailto://taslim.eniolla@gmail.com",
		icon: Mail
	},
];