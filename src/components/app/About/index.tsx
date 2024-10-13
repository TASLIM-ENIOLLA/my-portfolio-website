import Image from "next/image";

import { techStack, type TechStack } from "./@props/techStack";

import ListItem from "@/components/app/List/Item";

export default function About() {
	return (
		<section id="about" className="py-20">
			<div className="container">
				<div className="grid gap-10 grid-cols-12">
					<div className="col-span-12 md:col-span-7">
						<div className="space-y-10">
							<div className="text-[3rem] text-white font-extrabold">
								About me
							</div>
							<div className="space-y-7">
								<div className="text-lg font-semibold text-gray-500">
									I am MUSA-AZEEZ Taslim Eniola, a passionate Fullstack Software Engineer with expertise in building innovative web and mobile applications.<br /><br />
									With a B.Sc. in Information and Communication Science, I specialize in using modern technologies like Next JS, React JS, Node JS, and MySQL to create efficient and scalable solutions.<br /><br />
									Currently, I serve as a Senior Frontend Engineer at Komunidad World, where I focus on enhancing user experiences and driving system efficiency. I am constantly exploring advancements in Web, AI, and Blockchain technologies to stay at the forefront of the industry.<br /><br />
								</div>
								<div className="grid grid-cols-12 gap-7">
									{techStack.map(({ name }: TechStack, index: number) => (
										<div key={index} className="col-span-6 md:col-span-4">
											<ListItem
												key={index}
												item={name}
												className="text-lg consolab font-bold text-gray-500"
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 md:col-span-5">
						<div className="relative pt-10">
							<Image
								width={0}
								height={0}
								alt="Taslim Eniolla"
								style={{ zIndex: 0 }}
								src="/images/taslim-eniolla.png"
								className="block bg-red-300 w-full rounded-lg min-h-[400px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}