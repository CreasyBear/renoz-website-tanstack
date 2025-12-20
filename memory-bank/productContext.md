# Product Context: RENOZ Energy Website

## Why This Project Exists

The existing RENOZ Energy website, built with Next.js, fails to clearly communicate the company's identity as an OEM. Visitors struggle to understand who RENOZ is and what they offer. This rebuild aims to establish clear brand positioning and improve user experience.

## Problems It Solves

1. **Identity Clarity:** Current site doesn't clearly communicate OEM positioning
2. **Architecture Issues:** Next.js architecture doesn't meet expectations
3. **User Confusion:** Hard to distinguish RENOZ from competitors
4. **Content Management:** Need easier way to update products and content

## How It Should Work

### User Journeys

**B2C Path (Homeowners):**
1. Land on homepage → See Perth manufacturing messaging
2. Navigate to Residential products → See 10-50 kWh systems
3. Contact form → Request quote
4. **Warranty:** Register newly installed system via Warranty page

**B2B Path (Installers/Wholesalers):**
1. Land on homepage → See OEM positioning
2. Navigate to Installers page → See technical specs
3. Contact form → Partnership inquiry
4. **Support:** Register warranties on behalf of customers

### Key Pages

- **Home:** Hero with Perth skyline, value props, product segments, case studies
- **Homeowners:** Consumer-focused messaging, savings, rebates
- **Installers:** Technical specs, performance features, support
- **Products:** Residential (10-50 kWh), Rural (50-200 kWh), Commercial (200+ kWh)
- **About:** Mission, Perth manufacturing, certifications
- **Contact:** Form with Supabase, map, contact details
- **Warranty:** Registration form for installers/homeowners

## User Experience Goals

1. **Immediate Clarity:** Visitors understand RENOZ is a Perth OEM within 10 seconds
2. **Trust Building:** Certifications, partners, and case studies visible early
3. **Easy Navigation:** Clear paths for both B2C and B2B audiences
4. **Mobile Excellence:** Feels native on mobile devices
5. **Fast Performance:** Lighthouse Performance 90+

## Target Audiences

1. **Homeowners:** Residential battery system buyers
2. **Installers/Wholesalers:** Trade professionals seeking B2B solutions
3. **Commercial/Rural:** Businesses and rural properties needing larger systems

## Brand Positioning

- "Building Western Australia's Battery Capability"
- "Perth's Own Battery Manufacturer"
- "Engineered for here" - designed for WA conditions
- "Smart. Stackable. Scalable." - modular product design

## Implementation Status

### ✅ Completed Pages
- **Home:** Hero with WA energy background, feature panels, product segments, case studies, CTA, partners
- **About:** Hero, mission, certifications (SEC Gold Member), team section with photos
- **Products:** Overview page + Residential, Rural, Commercial category pages (placeholders)
- **Contact:** Page route created (form integration pending)
- **Warranty:** Full registration flow with file uploads and email notifications
- **Admin:** Interface placeholder created

### ✅ Brand Assets Integrated
- RENOZ logo (white version) in Header and Footer
- Hero images (WA energy, WA roots)
- Case study photos (Harvey 35kWh, Bally Bally 30kWh, Simon Oeij 60kWh)
- Team member photos (5 members)
- Partner logos (Smart Energy Council Gold Member)

### ⚠️ Pending
- Contact form Supabase integration testing
- Product content population
- Blog/resources content
- Dynamic product detail pages
