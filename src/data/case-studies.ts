export interface CaseStudy {
	id: string;
	slug: string;
	title: string;
	location: string;
	systemSize: string;
	summary: string;
	description: string;
	image: string;
	gallery?: string[];
	challenges: string[];
	solution: string[];
	outcome: string;
	date: string;
	// New Editorial Fields
	quote: string;
	story: {
		challenge: string; // The "Before" / Frustration
		solution: string; // The "After" / Relief
	};
	results: {
		label: string;
		value: string;
		icon: "Zap" | "DollarSign" | "Shield" | "VolumeX" | "Sun";
	}[];
}

export const caseStudies: CaseStudy[] = [
	{
		id: "1",
		slug: "harvey-farm",
		title: "Dream Home Journey: Off-Grid Family Living",
		location: "Western Australia",
		systemSize: "35.8 kWh",
		summary:
			"Discover how a young family turned their construction shed into a comfortable off-grid haven, powered by West State Electrics' thoughtfully designed solar battery system that grows with their dreams.",
		description:
			"A young family needed reliable off-grid power during a 2+ year home construction project, including everyday household loads and a scalable energy solution. Living in their construction shed while building their home, they wanted to reduce generator dependence and retain a pathway for future expansion.",
		image: "/images/case-studies/Harvey-35kWh.webp",
		challenges: [
			"Reliable off-grid power during 2+ year home construction project",
			"Modern conveniences in temporary accommodation",
			"Scalable energy solution for future home expansion",
			"Off-grid power for nominated household loads",
		],
		solution: [
			"RENOZ Energy 35.8kWh LV Stackable System with 7 units",
			"21kWp solar system with AC-coupled Fronius inverters",
			"DC-coupled AERL MPPT charging for black-start capability",
			"Selectronic SPMC482 + Fronius Primo inverter system",
		],
		outcome:
			"The system powered the family's construction-shed accommodation and reduced routine generator use. The Selectronic and AERL design includes black-start capability, while the modular battery can be expanded for the future home subject to system redesign and recommissioning.",
		date: "2025-08-01",
		quote:
			"The RENOZ system transformed our construction shed into a comfortable home. We had reliable power for everything - from running the washing machine to charging our devices. The quiet operation was a game-changer.",
		story: {
			challenge:
				"Living in a construction shed for 2+ years with unreliable generator power that was noisy, expensive, and limited our modern conveniences.",
			solution:
				"RENOZ provided a quiet, scalable battery system that gave us all the power we needed without the generator noise and fumes.",
		},
		results: [
			{ label: "Generator Runtime", value: "Reduced", icon: "VolumeX" },
			{ label: "Battery Capacity", value: "35.8 kWh gross", icon: "Shield" },
			{
				label: "Energy Cost Savings",
				value: "$2,500/year",
				icon: "DollarSign",
			},
		],
	},
	{
		id: "2",
		slug: "bally-bally",
		title: "Bally Bally Off-Grid Case Study",
		location: "Bally Bally, Western Australia",
		systemSize: "30 kWh",
		summary:
			"A remote hobby farm in Bally Bally sought a reliable, low-noise solution to reduce diesel use and avoid high grid connection fees.",
		description:
			"Significant grid-connection fees and high diesel costs created both financial and operational strain for this remote hobby farm. The property required a reliable off-grid solution that could reduce generator dependence while avoiding the substantial costs of grid connection.",
		image: "/images/case-studies/Bally-Bally-LV30kWH.webp",
		challenges: [
			"Significant grid-connection fees and high diesel costs",
			"Remote location requiring reliable off-grid operation",
			"Need for quiet operation without constant generator noise",
			"Financial and operational strain from fuel costs",
		],
		solution: [
			"RENOZ Energy 30 kWh LV Stackable System",
			"Modular LV stackable system with existing solar integration",
			"Diesel generator backup with remote monitoring",
			"Commissioned by WA-certified installer",
		],
		outcome:
			"The battery and solar system reduced generator dependence and avoided the proposed grid-connection pathway. It now supports the farm and residence with generator backup retained for operating conditions outside the solar and battery design envelope.",
		date: "2025-06-01",
		quote:
			"The quiet operation of the RENOZ system was incredible. We went from constant generator noise to peaceful farm living. The reliability during storms has given us complete peace of mind.",
		story: {
			challenge:
				"Constant generator noise, high diesel costs, and unreliable power during storms made farm life stressful and expensive.",
			solution:
				"RENOZ provided a battery system designed to reduce routine generator use, with the generator retained as backup for conditions outside the solar and battery design envelope.",
		},
		results: [
			{ label: "Battery Capacity", value: "30 kWh gross", icon: "DollarSign" },
			{ label: "Generator Runtime", value: "Reduced", icon: "VolumeX" },
			{ label: "System Role", value: "Farm and residence", icon: "Shield" },
		],
	},
	{
		id: "3",
		slug: "simon-oeij",
		title: "Home Energy Power User",
		location: "Perth, Western Australia",
		systemSize: "60 kWh",
		summary:
			"A high-demand household with floor heating and EVs sought energy independence, bill reduction, and reliable backup power.",
		description:
			"High electricity usage from whole-house AC/heating and EV charging drove high bills and exposure during grid events. This high-demand household required a comprehensive energy storage solution to achieve energy independence, reduce electricity costs, and ensure reliable backup power.",
		image: "/images/case-studies/Simon-Oeij-HV60kWh.webp",
		challenges: [
			"High electricity usage from whole-house AC/heating and EV charging",
			"High utility bills and exposure during grid events",
			"Need for energy independence and reliable backup power",
			"Demand for significant energy storage capacity",
		],
		solution: [
			"RENOZ Energy 60 kWh HV Stackable System",
			"Modular battery system integrated with existing large solar array",
			"Remote monitoring by WA-certified installer",
			"Premium installation quality with full regulatory compliance",
		],
		outcome:
			"45-65% average bill reduction achieved with improved self-consumption. Reliable backup capability during peak demand and outages. Premium installation quality with 24/7 system oversight and predictive maintenance.",
		date: "2025-02-01",
		quote:
			"The RENOZ system pays for itself through our energy bill savings alone. During peak summer demand, we stayed cool without worrying about power costs or reliability.",
		story: {
			challenge:
				"Skyrocketing energy bills from whole-house AC/heating and EV charging, with unreliable grid power during peak times and outages.",
			solution:
				"RENOZ provided substantial energy storage capacity designed to reduce peak-grid consumption and support nominated backup loads for our high-energy household.",
		},
		results: [
			{ label: "Bill Reduction", value: "45-65%", icon: "DollarSign" },
			{ label: "Peak Demand Savings", value: "$300/month", icon: "Zap" },
			{ label: "Backup Power", value: "60kWh capacity", icon: "Shield" },
		],
	},
];
