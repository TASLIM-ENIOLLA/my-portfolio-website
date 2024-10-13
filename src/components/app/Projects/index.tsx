"use server"

import { ProjectList } from "./components";

export default async function Projects() {
	return (
		<section id="projects" className="py-20">
			<div className="container">
				<div className="space-y-10">
					<div className="text-[3rem] text-white font-extrabold">
						My projects
					</div>
					<ProjectList />
				</div>
			</div>
		</section>
	);
}