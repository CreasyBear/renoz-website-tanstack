import { PRODUCT_SEGMENTS } from "./product-catalog";

export type NavLink = {
	hint?: string;
	label: string;
	to: string;
};

export type PrimaryNavItem = {
	children?: readonly NavLink[];
	label: string;
	to?: string;
};

export const PRIMARY_NAV: readonly PrimaryNavItem[] = [
	{
		label: "Products",
		children: [
			{
				to: "/products",
				label: "All systems",
				hint: "Residential, rural, and commercial",
			},
			{
				to: "/products/residential",
				label: "Residential",
				hint: PRODUCT_SEGMENTS.residential.capacityLabel,
			},
			{
				to: "/products/rural",
				label: "Rural",
				hint: PRODUCT_SEGMENTS.rural.capacityLabel,
			},
			{
				to: "/products/commercial",
				label: "Commercial",
				hint: PRODUCT_SEGMENTS.commercial.capacityLabel,
			},
			{
				to: "/homeowners",
				label: "Homeowners",
				hint: "If you are buying for a home",
			},
		],
	},
	{ label: "Partners", to: "/partners" },
	{
		label: "Learn",
		children: [
			{
				to: "/guides",
				label: "Guides",
				hint: "Battery decisions for WA sites",
			},
			{
				to: "/insights",
				label: "Insights",
				hint: "China Battery Desk",
			},
			{
				to: "/case-studies",
				label: "Case studies",
				hint: "Documented WA installations",
			},
			{
				to: "/resources",
				label: "Resources",
				hint: "Datasheets and warranty",
			},
		],
	},
	{ label: "About", to: "/about" },
];

export const NAV_CTA = {
	to: "/contact",
	label: "Talk to us",
} as const;

export function navItemIsActive(item: PrimaryNavItem, pathname: string) {
	if (item.to && pathMatches(pathname, item.to)) {
		return true;
	}
	return (
		item.children?.some((child) => pathMatches(pathname, child.to)) ?? false
	);
}

function pathMatches(pathname: string, to: string) {
	return pathname === to || pathname.startsWith(`${to}/`);
}
