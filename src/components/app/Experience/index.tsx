"use client";

import { useMemo, useState, useEffect } from "react";

import { twMerge } from "tailwind-merge";

import ListItem from "@/components/app/List/Item";

import { experiences, type Experience, type Acheivement } from "./@props/experiences";

export default function Experience() {
	const workPlaces = Object.keys(experiences);
	const roles = Object.values(experiences);

	const [sectionName, setSectionName] = useState <string> (workPlaces[0]);

	return (
		<section id="experience" className="py-20">
			<div className="container">
				<div className="space-y-10">
					<div className="text-[3rem] text-white font-extrabold">
						My work experience
					</div>
					<div className="hidden md:grid grid-cols-12 gap-10">
						<div className="col-span-12 md:col-span-4">
							<div className="space-y-3">
								{workPlaces.map((workPlace: string, index: number) => (
									<button
										key={index}
										type="button"
										onClick={() => setSectionName(workPlace)}
										className={twMerge(
											"border-l-4 block w-full border-l-transparent text-teal-400 text-left p-3 outline-none font-semibold consolab transition-all", (
													sectionName === workPlace
													? "border-l-teal-400 bg-teal-400 bg-opacity-25"
													: "hover:bg-teal-400 hover:bg-opacity-10"
												)
										)}>
										{workPlace}
									</button>
								))}
							</div>
						</div>
						<div className="col-span-12 md:col-span-8">
							<ExperienceInfo
								sectionName={sectionName}
								{...experiences[sectionName]}
							/>
						</div>
					</div>
					<div className="md:hidden space-y-10">
						{roles.map((props: any, index: number) => (
							<ExperienceInfo
								key={index}
								sectionName={workPlaces[index]}
								{...props}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function ExperienceInfo({ role, duration, acheivements, sectionName }: Experience) {
	return (
		<div className="space-y-5">
			<div className="space-y-1">
				<div className="capitalize font-semibold">
					<div className="inline text-lg text-white">{role}</div>
					<div className="inline text-lg text-teal-400"> @ {sectionName}</div>
				</div>
				<div className="consolab font-semibold text-gray-500">
					{duration}
				</div>
			</div>
			<div className="space-y-3">
				{acheivements.map((acheivement: Acheivement, index: number) => (
					<ListItem
						key={index}
						item={acheivement}
						className="text-lg font-semibold text-gray-500"
					/>
				))}
			</div>
		</div>
	);
}