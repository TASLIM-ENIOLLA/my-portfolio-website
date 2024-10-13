import Link from "next/link";

export default function Intro() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="space-y-7">
					<div className="text-center md:text-left text-lg text-teal-400 consolab">
						Hi, my name is
					</div>
					<div className="text-center md:text-left text-5xl md:text-[5rem] leading-tight font-extrabold">
						<span style={{ fontSize: "inherit" }} className="text-white">
							Musa-Azeez Taslim Eniola. <br className="hidden md:inline" />
						</span>
						<span style={{ fontSize: "inherit" }} className="text-gray-600">
							I develop websites and web applications.
						</span>
					</div>
					<div className="text-center md:text-justify text-lg font-semibold text-gray-500 max-w-[800px]">
						I’m a software engineer specializing in developing exquisite frontend designs as well as creating secure backend APIs. Currently, I’m commited to studying Web 3.0 technology in order to create systems that leverage on the benefits of blockchain technology to add value to the society and invent more efficient processes.
					</div>
					<div className="text-center md:text-left">
						<Link target="blank" href="/resume/download" className="inline-block px-10 py-3 group border-2 rounded-lg border-teal-400 hover:bg-teal-400 hover:bg-opacity-25 text-lg consolab capitalize text-teal-400">
							view resume
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}