/**
 * Typography Scale Constants
 * Mobile-first responsive typography system
 */

export const typography = {
	// Hero headings (largest, most prominent)
	hero: "text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold",

	// Page titles (H1)
	h1: "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold",

	// Section headings (H2)
	h2: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold",

	// Subsection headings (H3)
	h3: "text-2xl md:text-3xl lg:text-4xl font-bold",

	// Card/feature headings (H3 variant)
	h3Card: "text-xl md:text-2xl lg:text-3xl font-bold",

	// Body text
	body: "text-base md:text-lg",
	bodyLarge: "text-lg md:text-xl",

	// Supporting text
	caption: "text-sm",
	label: "text-xs",

	// Special cases
	stat: "text-3xl md:text-4xl lg:text-5xl font-bold",
	quote: "text-xl md:text-2xl lg:text-3xl font-medium",
} as const;

/**
 * Typography utility functions
 */
export const getTypographyClass = (level: keyof typeof typography) =>
	typography[level];

export const combineTypography = (
	...classes: (keyof typeof typography | string)[]
) => {
	return classes
		.map((cls) => (typeof cls === "string" ? cls : typography[cls]))
		.join(" ");
};

/**
 * Spacing scale for typography (consistent margins)
 */
export const typographySpacing = {
	hero: "mb-6 md:mb-8",
	h1: "mb-6",
	h2: "mb-6",
	h3: "mb-4",
	body: "mb-4",
	caption: "mb-2",
} as const;
