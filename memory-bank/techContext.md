# Tech Context: RENOZ Energy Website

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | TanStack Start | Full-stack React framework with SSR |
| Routing | TanStack Router | File-based routing |
| Styling | Tailwind CSS | Utility-first CSS framework |
| UI Components | Custom + shadcn/ui | Reusable UI components |
| Backend | Supabase | PostgreSQL, Storage, Auth |
| Forms | React Hook Form | Form handling |
| Deployment | Vercel/Netlify | Hosting platform |

## Development Setup

### Prerequisites

- Node.js 22.12.0+ (required for TanStack Start 1.141+)
- npm or pnpm
- Supabase account

### Project Initialization

```bash
npm create @tanstack/start@latest renoz-website-tanstack
cd renoz-website-tanstack
npm install
```

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Dependencies

### Core

- `@tanstack/start` - Framework
- `@tanstack/react-router` - Routing
- `react` - UI library
- `react-dom` - DOM rendering

### Styling

- `tailwindcss` - CSS framework
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing

### Backend

- `@supabase/supabase-js` - Supabase client
- `react-hook-form` - Form handling

### Development

- `@biomejs/biome` - Linting and formatting
- `typescript` - Type safety

## Technical Constraints

1. **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
2. **Mobile:** Responsive design required (320px+)
3. **Performance:** Lighthouse Performance 90+
4. **Accessibility:** WCAG 2.1 AA compliance

## Build & Deployment

### Build Command

```bash
npm run build
```

### Development Server

```bash
npm run dev
# Runs on http://localhost:3000
```

**Note:** If you encounter native binding errors, ensure Node.js version is 22.12.0+ and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Deployment Platforms

- **Vercel:** Recommended for TanStack Start
- **Netlify:** Also supports SSR

## Database Schema (Supabase)

### Tables

1. **products**
   - id (UUID)
   - name (TEXT)
   - category (TEXT: 'residential' | 'commercial')
   - description (TEXT)
   - specs (JSONB)
   - images (TEXT[])
   - featured (BOOLEAN)
   - created_at (TIMESTAMPTZ)

2. **posts** (Blog/Resources)
   - id (UUID)
   - title (TEXT)
   - slug (TEXT, UNIQUE)
   - content (TEXT)
   - excerpt (TEXT)
   - published (BOOLEAN)
   - created_at (TIMESTAMPTZ)

3. **inquiries** (Contact Form) ✅ Schema created
   - id (UUID)
   - name (TEXT)
   - email (TEXT)
   - company (TEXT)
   - message (TEXT)
   - inquiry_type (TEXT)
   - created_at (TIMESTAMPTZ)

4. **warranty_registrations** ✅ Schema created
   - id (UUID)
   - warranty_id (TEXT, UNIQUE)
   - installer_name (TEXT)
   - installer_email (TEXT)
   - homeowner_name (TEXT)
   - battery_model (TEXT)
   - inverter_brand (TEXT)
   - inverter_model (TEXT)
   - evidence_files (JSONB)
   - created_at (TIMESTAMPTZ)

### Storage Buckets

1. **warranty-uploads**
   - Purpose: Store installation evidence (JPEG, PNG, PDF)
   - Path pattern: `warranty-files/${warrantyId}/${timestamp}-${filename}`

## File Structure

```
renoz-website-tanstack/
├── app.config.ts          # TanStack Start config
├── tailwind.config.ts     # Tailwind configuration
├── package.json           # Dependencies
├── .env                   # Environment variables
└── src/
    ├── routes/            # File-based routes
    ├── components/         # React components
    ├── lib/                # Utilities
    └── styles/            # Global styles
```

## Development Workflow

1. ✅ Create route files in `src/routes/` (all routes created)
2. ✅ Build components in `src/components/` (Header, Footer, Button, Card, Image)
3. ✅ Use Supabase client from `src/lib/supabase.ts` (configured)
4. ✅ Style with Tailwind + CSS variables (implemented)
5. ✅ Test locally with `npm run dev` (running on port 3000)
6. ⚠️ Deploy to Vercel/Netlify (pending)

## Current Implementation Status

- ✅ Project initialized and configured
- ✅ All core pages implemented
- ✅ Brand assets integrated
- ✅ Responsive design complete
- ✅ SEO metadata added
- ⚠️ Content population needed
- ⚠️ Production deployment pending
