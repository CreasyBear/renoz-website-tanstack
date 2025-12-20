export interface Document {
  id: string
  title: string
  category: 'Datasheet' | 'Manual' | 'Warranty' | 'Guide' | 'Declaration' | 'Technical'
  filename: string
  size: string
  date: string
}

export const documents: Document[] = [
  // Datasheets
  {
    id: 'ds-1',
    title: 'RENOZ Energy LV-5KWH100AH Technical Specifications',
    category: 'Datasheet',
    filename: '/documents/datasheets/[250801] - RENOZ Energy LV-5KWH100AH Technical Specifications.pdf',
    size: '1.2 MB',
    date: '2025-08-01'
  },
  // Installation
  {
    id: 'inst-1',
    title: 'RENOZ Energy LV-5KWH100AH Installation and User Manual',
    category: 'Manual',
    filename: '/documents/installation/[250801] - RENOZ Energy LV-5KWH100AH Installation and User Manual.pdf',
    size: '5.6 MB',
    date: '2025-08-01'
  },
  {
    id: 'guide-1',
    title: 'RENOZ Energy LV Stackable Installation Compliance Guide',
    category: 'Guide',
    filename: '/documents/guides/[250620] - RENOZ Energy LV Stackable Installation Compliance Guide.pdf',
    size: '850 KB',
    date: '2025-06-20'
  },
  // Warranty
  {
    id: 'war-1',
    title: 'RENOZ Energy LV-5KWH100AH Product Warranty',
    category: 'Warranty',
    filename: '/documents/warranty/[250801] - RENOZ Energy LV-5KWH100AH Product Warranty.pdf',
    size: '450 KB',
    date: '2025-08-01'
  },
  // Technical / Declarations
  {
    id: 'tech-1',
    title: 'RENOZ Energy LV-5KWH100AH MSDS',
    category: 'Technical',
    filename: '/documents/technical/RENOZ Energy LV-5KWH100AH MSDS.pdf',
    size: '320 KB',
    date: '2025-06-20'
  },
  {
    id: 'dec-1',
    title: 'Signed Declaration of Compliance',
    category: 'Declaration',
    filename: '/documents/declarations/[250620] - RENOZ Energy Signed Declaration of Compliance.pdf',
    size: '150 KB',
    date: '2025-06-20'
  },
  {
    id: 'dec-2',
    title: 'Signed Inverter Compatibility Statement',
    category: 'Declaration',
    filename: '/documents/declarations/[250620] - RENOZ Energy LV-5KWH100AH Signed Inverter Compatibility Statement.pdf',
    size: '180 KB',
    date: '2025-06-20'
  }
]
