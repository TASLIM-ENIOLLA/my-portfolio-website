export type Acheivement = string;

export type Experience = {
	role: string;
	duration: string;
	sectionName?: string;
	acheivements: Acheivement[];
}

export const experiences: Record<string, Experience> = {
	"Komunidad World": {
		role: "Senior Frontend Engineer",
		duration: "January 2024 – Present",
		acheivements: [
			"Worked with a team of developers in the development of a community-based application.",
			"Designed and developed the frontend using Next JS, enhancing the user interface and user experience.",
			"Collaborated with the product development manager to redefine technical requirements and prioritize features, leading to a 20% increase in system proficiency.",
		]
	},
	"Bare Mind": {
		role: "Senior Frontend Engineer",
		duration: "April 2022 – December 2023",
		acheivements: [
			"Worked with a team of frontend and backend developers to build a robust web application.",
			"Established standardized procedures for feature development, ensuring consistency and scalability, which reduced development time by 15%.",
			"Also assumed the role of backend developer to maintain team progress, successfully meeting all project development deadlines."
		]
	},
	"Sulham Technological Services": {
		role: "Full Stack Web Developer",
		duration: "November 2021 – March 2022",
		acheivements: [
			"Served as a lone full-stack web developer, understanding client requirements and developing tailored solutions.",
			"Delivered four web applications single-handedly, receiving positive feedback from clients for timely and usable product delivery",
			"Consistently met project deadlines as outlined in Gantt Chart provided to clients, ensuring 100% on-time project completion."
		]
	},
}