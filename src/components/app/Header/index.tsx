"use client";

import { Menu } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { twMerge } from "tailwind-merge";

import { routes, type Route } from "./@props/routes";
import { Fragment } from "react";

export default function Header() {
	function onLinkClicked(event: any, href: string) {
		event.preventDefault();

		try {
			const section = document.querySelector(href);

			if(section) {
				section.scrollIntoView({
					behavior: "smooth"
				});
			}
		}
		catch(error: any) {
			if(window && typeof href === "string") {
				window.location.href = href;
			}
		}
	}

	return (
		<Fragment>
			<header
				className="top-0 py-3 sticky shadow-md bg-background bg-opacity-75"
				style={{ zIndex: 100, backdropFilter: "blur(8px)" }}>
				<div className="container">
					<div className="flex gap-10 items-center justify-between">
						<Link href="/">
							<Image
								width="47"
								height="47"
								alt="Favicon"
								src="/favicon.ico"
							/>
						</Link>
						<div className="hidden lg:flex">
							<div className="num-links flex items-center justify-content gap-[4rem]">{
								routes.map(({ type, name, href }: Route, index: number) => (
									<Link
										key={index}
										href={href}
										onClick={(event) => onLinkClicked(event, href)}
										className={twMerge(
											"inline-block before:text-teal-400",
											"transition-all", (
												type === "button"
												? "px-5 py-2 group border-2 rounded-lg border-teal-400 hover:bg-teal-400 hover:bg-opacity-25"
												: null
											)
										)}
									>
										<span
											className={twMerge(
												"consolab font-semibold capitalize", (
													type === "button"
													? "text-teal-400"
													: "text-white group-hover:text-teal-400"
												)
											)}
										>
											{name}
										</span>
									</Link>
								))
							}</div>
						</div>
						<div className="lg:hidden">
							<div className="relative">
								<button popoverTarget="mypopupover" className="outline-none border-2 rounded-lg border-teal-400 bg-teal-400 bg-opacity-25 px-3 py-2">
									<Menu
										size="22"
										fill="red"
										className="text-teal-400"
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div
				popover="auto"
				id="mypopupover"
				className="border-2 rounded-lg border-teal-400 bg-background bg-opacity-50 w-96"
				style={{ backdropFilter: "blur(10px)" }}
			>
				<div className="space-y-3 p-3">
					<div className="p-3 bg-teal-400 bg-opacity-25 rounded-md">
						<button popoverTarget="mypopupover" className="w-full text-base text-red-300 text-center font-semibold capitalize">
							close menu
						</button>
					</div>
					<div className="p-3 divide-y divide-teal-400 space-y-5">
						{routes.map(({ type, name, href }: Route, index: number) => (
							<div key={index} className="pt-5 text-center text-teal-400 font-semibold capitalize">
								<Link onClick={(event) => onLinkClicked(event, href)} href={href}>
									{name}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
}