/**
 * Centralized Case Study Images Data
 * Used by all MasonryGallery components for consistent display
 */

export interface CaseStudyImage {
	src: string;
	alt: string;
	caption: string;
	location: string;
	systemSize: string;
}

export const caseStudyImages: CaseStudyImage[] = [
	{
		src: "/images/case-studies/Harvey-35kWh.webp",
		alt: "Harvey Off-Grid Family Living Installation",
		caption: "35kWh Off-Grid Family Living",
		location: "Harvey",
		systemSize: "35kWh"
	},
	{
		src: "/images/case-studies/Bally-Bally-LV30kWH.webp",
		alt: "Bally Bally Remote Farm Installation",
		caption: "30kWh Remote Farm Installation",
		location: "Bally Bally",
		systemSize: "30kWh"
	},
	{
		src: "/images/case-studies/Simon-Oeij-HV60kWh.webp",
		alt: "Bibra Lake High-Energy Household Installation",
		caption: "60kWh High-Energy Household",
		location: "Bibra Lake",
		systemSize: "60kWh"
	},
	{
		src: "/images/case-studies/M-Singh-30kWh.webp",
		alt: "East Fremantle Residential Energy Solution",
		caption: "30kWh Residential Energy Solution",
		location: "East Fremantle",
		systemSize: "30kWh"
	},
	{
		src: "/images/case-studies/R-Woon-LV20kWh.webp",
		alt: "South Perth Compact Residential System",
		caption: "20kWh Compact Residential System",
		location: "South Perth",
		systemSize: "20kWh"
	},
	{
		src: "/images/case-studies/J-Doss-LV35kWh.webp",
		alt: "Perth Metro Family Home Installation",
		caption: "35kWh Family Home Installation",
		location: "Perth Metro",
		systemSize: "35kWh"
	},
	{
		src: "/images/case-studies/K-Fairman 15kWh.webp",
		alt: "Perth Metro Starter Residential System",
		caption: "15kWh Starter Residential System",
		location: "Perth Metro",
		systemSize: "15kWh"
	},
	{
		src: "/images/case-studies/H-Collins-LV-25kWh.webp",
		alt: "Applecross Mid-Size Residential Setup",
		caption: "25kWh Mid-Size Residential Setup",
		location: "Applecross",
		systemSize: "25kWh"
	},
	{
		src: "/images/case-studies/Waroona Reporter.webp",
		alt: "Local Media Coverage - Waroona Installation",
		caption: "Featured in Local Media",
		location: "Waroona",
		systemSize: "35kWh"
	}
];

/**
 * Get a subset of case study images for different gallery sizes
 */
export const getCaseStudySubset = (count: number = 6): CaseStudyImage[] => {
	return caseStudyImages.slice(0, count);
};

/**
 * Get case study images filtered by system type
 */
export const getCaseStudiesByType = (type: 'residential' | 'rural' | 'commercial'): CaseStudyImage[] => {
	const filters = {
		residential: ['15kWh', '20kWh', '25kWh', '30kWh', '35kWh'],
		rural: ['30kWh', '35kWh', '60kWh'],
		commercial: ['60kWh']
	};

	return caseStudyImages.filter(img =>
		filters[type].some(size => img.systemSize.includes(size))
	);
};