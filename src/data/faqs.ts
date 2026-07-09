export interface FAQItem {
	question: string;
	answer: string;
}

export const homeFaqs: FAQItem[] = [
	{
		question: "Why choose RENOZ over imported battery systems?",
		answer:
			"We're Perth's own battery OEM, designing and engineering systems specifically for Australian conditions. Unlike overseas manufacturers, we understand WA's heat, dust, and isolation challenges. Our systems are built to last in the harshest environments, with local engineering support available to our installer partners.",
	},
	{
		question: "How are RENOZ systems supported after installation?",
		answer:
			"Our Perth-based engineering team provides technical support to our certified installer network throughout each system's lifetime. If you have questions about your installation, contact your installer first—they have direct access to our engineers, firmware updates, and diagnostic tools. We back our partners so they can back you.",
	},
	{
		question: "Can RENOZ batteries work with my existing solar setup?",
		answer:
			"Yes. We offer both AC-coupled and DC-coupled battery solutions, giving installers flexibility to integrate with virtually any solar inverter—Deye, Goodwe, Selectronic, Sungrow, Victron, SMA, and more. Your installer will recommend the best approach for your specific system, whether that's keeping your current inverter or designing a fully integrated DC-coupled solution.",
	},
	{
		question: "What happens if something goes wrong?",
		answer:
			"Our 10-year warranty is backed by our Perth headquarters, not an overseas entity. We stand behind every system we manufacture. If an issue arises, our engineers work directly with your installer to resolve it quickly—local support, no overseas call centers, no runaround.",
	},
	{
		question: "How do RENOZ systems handle WA's extreme conditions?",
		answer:
			"We use tier-one Lithium Iron Phosphate (LFP) cells rated for 6,000+ cycles at 80% depth of discharge. Our enclosures are tested to 55°C ambient temperatures and built to withstand WA's dust and corrosion. Every system includes comprehensive monitoring and remote diagnostics, enabling proactive maintenance through your installer.",
	},
	{
		question: "How do I get a RENOZ battery system?",
		answer:
			"RENOZ batteries are available through our network of certified installer partners across WA. We don't sell direct to homeowners—instead, we focus on manufacturing the best batteries possible and supporting the installers who bring them to you. Contact us to find a certified installer in your area.",
	},
];

export const contactFaqs: FAQItem[] = [
	{
		question: "Where are RENOZ batteries manufactured?",
		answer:
			"RENOZ battery systems are engineered and designed in Perth, Western Australia. We partner with world-class manufacturers to produce our systems to the highest standards. We are proud to be Perth's own battery OEM.",
	},
	{
		question: "What is the warranty period?",
		answer:
			"We offer a standard 10-year performance warranty on all our battery modules, guaranteeing at least 80% capacity retention after 6,000 cycles.",
	},
	{
		question: "Do you sell directly to homeowners?",
		answer:
			"We primarily work through a network of certified installers to ensure safe and compliant installation. However, you can contact us directly for a system sizing consultation, and we can recommend a local partner.",
	},
	{
		question: "Are your systems compatible with existing solar setups?",
		answer:
			"Yes, RENOZ systems are designed to be inverter-agnostic and can be retrofitted to most existing solar PV installations, including AC-coupled and DC-coupled configurations.",
	},
];
