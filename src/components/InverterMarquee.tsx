import { cn } from "../lib/utils";

interface InverterMarqueeProps {
	className?: string;
}

export function InverterMarquee({ className }: InverterMarqueeProps) {
	const brands = [
		{
			name: "Selectronic",
			logo: "/images/partners/inverters/selectronic-logo.webp",
		},
		{
			name: "Victron Energy",
			logo: "/images/partners/inverters/Victron-logo.webp",
		},
		{ name: "Sungrow", logo: "/images/partners/inverters/sungrow-logo.webp" },
		{ name: "SMA", logo: "/images/partners/inverters/SMA-Logo.webp" },
		{ name: "Deye", logo: "/images/partners/inverters/Deye-Logo.webp" },
		{ name: "GoodWe", logo: "/images/partners/inverters/goodwe-logo.webp" },
		{ name: "Growatt", logo: "/images/partners/inverters/growatt-logo.webp" },
		{ name: "Sinexcel", logo: "/images/partners/inverters/sinexcel-logo.webp" },
		{ name: "CE+T", logo: "/images/partners/inverters/ce-plus-t-logo.webp" },
	];

	return (
		<div className={cn("relative flex overflow-x-hidden group", className)}>
			<div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-16 px-8 pr-20 md:pr-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
				{brands.map((brand, i) => (
					<div
						key={i}
						className="flex-shrink-0 flex items-center justify-center w-[160px] h-20"
					>
						<img
							src={brand.logo}
							alt={`${brand.name} logo`}
							className="max-h-12 max-w-[140px] w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
						/>
					</div>
				))}
			</div>
			<div className="animate-marquee2 whitespace-nowrap flex items-center gap-12 md:gap-16 px-8 pr-20 md:pr-24 absolute top-0 left-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
				{brands.map((brand, i) => (
					<div
						key={i}
						className="flex-shrink-0 flex items-center justify-center w-[160px] h-20"
					>
						<img
							src={brand.logo}
							alt={`${brand.name} logo`}
							className="max-h-12 max-w-[140px] w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
