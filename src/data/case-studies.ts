export interface CaseStudy {
  id: string
  slug: string
  title: string
  location: string
  systemSize: string
  summary: string
  description: string
  image: string
  gallery?: string[]
  challenges: string[]
  solution: string[]
  outcome: string
  date: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'harvey-farm',
    title: 'Harvey Farm Installation',
    location: 'Harvey, South West WA',
    systemSize: '35kWh',
    summary: 'A robust off-grid power solution for a rural property plagued by frequent grid outages.',
    description: 'Located in the agricultural heartland of Harvey, this property suffered from frequent brownouts and extended blackouts during storm season. The owners needed a reliable solution to keep essential pumps and refrigeration running without relying on expensive diesel generators.',
    image: '/images/case-studies/Harvey-35kWh.webp',
    challenges: [
      'Frequent grid instability impacting farm operations',
      'High cost of diesel backup generation',
      'Need for silent operation near the main residence'
    ],
    solution: [
      'RENOZ Rural Series 35kWh Battery System',
      'Integrated 3-phase inverter setup',
      'Seamless switchover capability (<10ms)'
    ],
    outcome: 'The property now operates 90% off-grid during summer months and has complete immunity from local grid failures. Diesel consumption has been reduced by almost 100%.',
    date: '2024-02-15'
  },
  {
    id: '2',
    slug: 'bally-bally',
    title: 'Bally Bally Homestead',
    location: 'Bally Bally, Wheatbelt WA',
    systemSize: '30kWh',
    summary: 'Energy independence for a remote homestead at the edge of the grid.',
    description: 'Bally Bally represents the typical challenge of the WA Wheatbelt: end-of-line voltage fluctuations and limited grid capacity. This installation provided a buffer for the homestead, allowing them to run modern appliances without tripping the grid connection.',
    image: '/images/case-studies/Bally-Bally-LV30kWH.webp',
    challenges: [
      'End-of-line grid voltage fluctuations',
      'High summer cooling loads',
      'Dusty environment requiring sealed enclosures'
    ],
    solution: [
      'RENOZ 30kWh LV System',
      'IP65 rated outdoor enclosure',
      'Smart load management integration'
    ],
    outcome: 'Stable voltage for the entire property and the ability to "soak" excess solar during the day for night-time cooling. The owners report zero power interruptions since installation.',
    date: '2023-11-20'
  },
  {
    id: '3',
    slug: 'simon-oeij',
    title: 'Perth Hills Residence',
    location: 'Perth Hills, WA',
    systemSize: '60kWh',
    summary: 'High-capacity residential storage for a large, energy-intensive home.',
    description: 'This architectural home in the Perth Hills required a significant energy store to manage heating, pool pumps, and EV charging. A standard 10kWh battery would have been insufficient. The RENOZ 60kWh system provides ample overhead for days of autonomy.',
    image: '/images/case-studies/Simon-Oeij-HV60kWh.webp',
    challenges: [
      'Large instantaneous power draw (EV + Pool)',
      'Bushfire prone area requiring safe chemistry',
      'Aesthetic integration with modern architecture'
    ],
    solution: [
      'RENOZ High Voltage 60kWh System',
      'LiFePO4 safety-first chemistry',
      'Custom slimline cabinet installation'
    ],
    outcome: 'Complete energy autonomy for 9 months of the year. The system provides peace of mind during bushfire season when grid power is often pre-emptively cut.',
    date: '2024-01-10'
  }
]

