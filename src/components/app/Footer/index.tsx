export default function Footer() {
	return (
		<section className="pt-20">
			<div className="container">
				<div className="space-y-3 text-center">
					<div className="consolab text-teal-400">
						&copy;Copyright {new Date().getFullYear()}. Designed and developed by Taslim Eniolla Inc.
					</div>
					<div className="consolab text-gray-500">
						Inspired by Brittany Chiang
					</div>
				</div>
			</div>
		</section>
	);
}