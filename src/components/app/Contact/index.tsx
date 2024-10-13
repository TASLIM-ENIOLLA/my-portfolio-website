import Link from "next/link";

export default function Contact() {
	return (
		<section id="contact" className="py-20">
			<div className="container">
				<div className="space-y-1 text-center">
					<div className="consolab text-lg text-teal-400">What&apos;s next?</div>
					<div className="text-[3rem] text-white font-extrabold">
						Get in touch
					</div>
					<div className="text-lg font-semibold text-gray-500">
						You&apos;re only a few clicks from sending me a message. I&apos;ll be happy to hear from you!
					</div>
					<div className="pt-10">
						<Link href="mailto://taslim.eniolla@gmail.com" className="inline-block px-10 py-3 group border-2 rounded-lg border-teal-400 hover:bg-teal-400 hover:bg-opacity-25 text-lg consolab capitalize text-teal-400">
							say hello
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}