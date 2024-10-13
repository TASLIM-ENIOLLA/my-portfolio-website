"use client"

import Link from "next/link";
import Image from "next/image";

import { getProjects, type Project} from "./props";

import { twMerge } from "tailwind-merge";

type ProjectCard = Project & {
  flipped: boolean;
}

export function ProjectList() {
  const projects = getProjects();

  return (
    <div className="space-y-20">
      {projects.map((props: Project, index: number) => (
        <ProjectCard
          {...props}

          key={index}
          flipped={Boolean(index % 2)}
        />
      ))}
    </div>
  );
}

export function ProjectCard({ type, tags, links, title, flipped, screenshot, description}: ProjectCard) {
	return (
		<div className={twMerge(
			"flex gap-10 flex-wrap md:flex-nowrap",
			flipped ? "flex-row-reverse" : "flex-row"
			)}
		>
			<div className="w-full md:w-6/12">
				<div className={twMerge(
					"space-y-5",
					flipped ? "text-left" : "md:text-right"
				)}>
					<div className="_">
						<div className="consolab text-teal-400 capitalize">{type}</div>
						<div className="font-bold text-slate-300 text-3xl capitalize">{title}</div>
					</div>
					<div className="p-5 rounded-md bg-[#112240] shadow-xl">
						<div className="text-lg font-semibold text-slate-300">{description}</div>
					</div>
					<div className={twMerge(
						"gap-x-5 flex flex-wrap",
						flipped ? "justify-start" : "md:justify-end"
					)}>
						{tags.map((tag: string, index: number) => (
							<span	
								key={index}
								title={tag}
								className="hover:underline consolab inline-block text-slate-500 text-lg capitalize"
							>
								{tag}
							</span>
						))}
					</div>
					<div className={twMerge(
						"gap-x-10 flex flex-wrap",
						flipped ? "justify-start" : "md:justify-end"
					)}>
						{links.map(({ url, icon: Icon }: { url: string, icon: any }, index: number) => (
							<Link href={url} className="inline-block" key={index}>
								<Icon size="20" color="white" />
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="w-full md:w-6/12">
				<div className="relative min-h-96">
					<Link href={links[1].url}>
						<Image
							fill={true}
							objectFit="cover"
							objectPosition="top"
							className="rounded-lg"
							alt="Project screenshot"
							src={screenshot.default.src}
							loader={({ src }) => `${src}?q=100`}
						/>
					</Link>
				</div>
			</div>
		</div>
  );
}