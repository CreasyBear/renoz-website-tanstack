/** Shared product facts for pages, SEO, and guides. Quote these; do not invent ranges. */

export const LV_PLATFORM = {
	moduleKwh: 5.12,
	usableKwhPerModule: 4.61,
	approvedModulesPerTower: [8, 10] as const,
	model: "LV-5KWH100AH",
	voltageNominal: "51.2 V",
} as const;

export const HC_PLATFORM = {
	model: "HC-125K-261-02B",
	powerKw: 125,
	nominalKwh: 261.25,
	initialUsableKwh: 235.125,
	cabinetMin: 1,
	cabinetMax: 8,
	scaleLabel: "~200 kWh–2 MWh",
	ratingLabel: "125 kW / 261.25 kWh",
} as const;

export function lvTowerKwh(
	modules: (typeof LV_PLATFORM.approvedModulesPerTower)[number],
) {
	return Number((LV_PLATFORM.moduleKwh * modules).toFixed(2));
}

export const PRODUCT_SEGMENTS = {
	residential: {
		key: "residential",
		name: "RENOZ Residential Battery Storage",
		path: "/products/residential",
		category: "Residential battery energy storage system",
		capacityLabel: "10–50 kWh",
		capacitySeo: "10-50kWh",
		architectureLabel: "LV (48V)",
		seoDescription:
			"Modular 10-50kWh home battery systems for solar self-consumption, backup, and Western Australian homes. Review specifications, compatibility pathways, and support.",
		description:
			"Modular 10-50kWh LiFePO4 home battery systems for solar self-consumption, backup power, and Western Australian homes.",
		keyFacts: [
			"5.12kWh LV-5KWH100AH base module",
			"Approved 8- or 10-module towers",
			"6,000 cycles at 80% depth of discharge",
			"Operates from -10°C to 55°C",
			"10-year product warranty",
		],
		imagePath: "/images/products/RENOZ Energy Garage Render.webp",
	},
	rural: {
		key: "rural",
		name: "RENOZ Rural and Off-Grid Battery Storage",
		path: "/products/rural",
		category: "Rural battery energy storage system",
		capacityLabel: "50–200 kWh+",
		capacitySeo: "50-200kWh+",
		architectureLabel: "LV multi-tower",
		seoDescription:
			"Battery systems for farms, workshops, pumps, and remote properties, with solar, inverter, and generator integration for Western Australian conditions.",
		description:
			"Rural and off-grid battery systems for farms, remote properties, pumps, workshops, and diesel generator displacement.",
		keyFacts: [
			"Engineered multi-tower LV platform",
			"Typical 50-200kWh+ project range",
			"Hybrid solar, battery, and generator integration",
			"High-surge agricultural load support",
			"Remote monitoring and WA installer support",
		],
		imagePath: "/images/stock/homestead-rural.webp",
	},
	commercial: {
		key: "commercial",
		name: "RENOZ Commercial Battery Storage",
		path: "/products/commercial",
		category: "Commercial and industrial battery energy storage system",
		capacityLabel: "~200 kWh–2 MWh",
		capacitySeo: "200kWh to 2MWh",
		architectureLabel: "HC cabinet",
		seoDescription:
			"HC-125K-261-02B commercial BESS: 125 kW / 261.25 kWh cabinets scaling from about 200 kWh to 2 MWh for peak demand, microgrids, and backup.",
		description:
			"Commercial BESS led by the HC-125K-261-02B: 125 kW / 261.25 kWh cabinets that scale from about 200 kWh to 2 MWh.",
		keyFacts: [
			"HC-125K-261-02B lead product",
			"125 kW / 261.25 kWh per cabinet",
			"Scales ~200 kWh to 2 MWh (1–8 cabinets)",
			"Liquid cooling and integrated fire suppression",
			"WA-based project and lifecycle support",
		],
		imagePath: "/images/stock/solar-microgrid-bess-drone-shot.webp",
	},
} as const;

export type ProductSegmentKey = keyof typeof PRODUCT_SEGMENTS;
