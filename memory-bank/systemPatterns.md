# System Patterns: RENOZ Energy Website

## Architecture Overview

```
Frontend (TanStack Start)
  ├── File-based routing (TanStack Router)
  ├── Server-side rendering (SSR)
  ├── Server functions
  └── Streaming

Backend (Supabase)
  ├── PostgreSQL database (CMS)
  ├── Storage (images, files)
  ├── Auth (optional, for admin)
  └── Edge Functions (optional)
```

## File Structure

```
renoz-website-tanstack/
├── memory-bank/              # Project documentation
├── public/
│   ├── images/               # Static images
│   └── fonts/                # Inter font files
├── src/
│   ├── routes/               # File-based routing
│   ├── components/
│   │   ├── ui/               # Base UI elements
│   │   ├── layout/           # Header, Footer, Nav
│   │   └── sections/         # Page sections
│   ├── lib/
│   │   ├── supabase.ts       # Supabase client
│   │   └── utils.ts          # Helper functions
│   └── styles/
│       └── globals.css        # Tailwind + CSS variables
```

## Design Patterns

### Component Hierarchy

```
__root.tsx (Root Layout)
  ├── Header
  │   ├── Logo
  │   ├── Navigation
  │   └── Mobile Menu
  ├── Page Content (routes)
  └── Footer
      ├── Contact Info
      ├── Quick Links
      └── Partner Logos
```

### Section Patterns

1. **Hero Sections:** Full-width with background image, headline, CTAs
2. **Feature Panels:** Side-by-side cards with photography + text overlays
3. **Product Cards:** Grid layout with icons, specs, CTAs
4. **Testimonial Carousel:** Center-focused with side-peek images
5. **CTA Sections:** Full-bleed photography with overlay text

## Routing Pattern

TanStack Start uses file-based routing:

- `src/routes/index.tsx` → Home page
- `src/routes/about.tsx` → About page
- `src/routes/products/residential.tsx` → Residential products
- `src/routes/products/$slug.tsx` → Dynamic product pages

## Data Flow

1. **Static Content:** Hardcoded in components
2. **Dynamic Content:** Loaded from Supabase via server functions
3. **Forms:** Submit to Supabase `inquiries` table
4. **CMS:** Products and blog posts stored in Supabase

## Component Patterns

### Reusable Components

- `Button` - Primary/secondary/outline variants ✅
- `Card` - Standard card with rounded corners ✅
- `Image` - Optimized image component with WebP/PNG fallback and lazy loading ✅
- `FeaturePanel` - Side-by-side panels with photography (implemented inline)
- `ProductCard` - Product display with icon, specs, CTA (implemented inline)
- `TestimonialCard` - Customer quote with image (case studies implemented)
- `Icon` - Green circular icons with white illustrations (using Lucide icons)

### Layout Components

- `Header` - Logo, navigation, mobile menu
- `Footer` - Contact, links, partners
- `Section` - Wrapper with padding and max-width

## Styling Pattern

- **Tailwind CSS** for utility classes
- **CSS Variables** for brand colors and spacing
- **Component-level styles** for complex patterns
- **Responsive:** Mobile-first approach

## State Management

- **Server State:** TanStack Start server functions
- **Client State:** React hooks (useState, useEffect)
- **Form State:** React Hook Form
- **No global state library needed** (simple app)

## Performance Patterns

- **Image Optimization:** Lazy loading, WebP format with PNG fallback ✅
- **Code Splitting:** Automatic with TanStack Start ✅
- **SSR:** Full-document server-side rendering ✅
- **Streaming:** Progressive page loading ✅
- **Font Loading:** @font-face with Inter font family (Light, Regular, Medium, Bold) ✅

## Image Component Pattern

The `Image` component (`src/components/ui/Image.tsx`) provides:

- WebP format with PNG fallback
- Lazy loading by default
- Optimized image paths (`/images/optimized/`)
- Responsive sizing with Tailwind classes
- Accessibility attributes (alt text, loading="lazy")
