import Link from "next/link";

import { socials, type Social } from "./@props/socials";

export default function SideLiner() {
	return (
		<section className="hidden md:fixed bottom-0 w-full">
			<div className="p-10">
				<div className="flex items-center justify-between">
					<div className="relative">
						<div className="absolute bottom-0 left-0">
							<div className="flex flex-col items-center gap-10">
								{socials.map(({ name, href, icon: Icon }: Social, index: number) => (
									<Link href={href} title={name} key={index}>
										<Icon
											size="20"
											fill="white"
											color="gray"
											strokeWidth={1}
										/>
									</Link>
								))}
								<div className="border w-0 border-white h-[15vh]"></div>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="absolute bottom-0 right-0">
							<div className="flex flex-col items-center gap-10">
								<Link href="mailto://taslim.eniolla@gmail.com">
									<span className="text-white consolab text-lg" style={{
										writingMode: "vertical-lr"
									 }}>
										taslim.eniolla@gmail.com
									</span>
								</Link>
								<div className="border w-0 border-white h-[15vh]"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}