import { Play } from "lucide-react";

import { twMerge } from "tailwind-merge";

type Item = {
	item: string;
	className: string;
}

export default function Item({ item, className }: Item) {
	return (
		<div className={twMerge("flex gap-3", className)}>
			<span>&#10148;</span>
			<div className="flex-1" style={{ fontSize: "inherit" }}>{item}</div>
		</div>
	);
}