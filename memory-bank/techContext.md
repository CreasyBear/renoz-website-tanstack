# Tech Context: RENOZ Energy Website

## Enterprise Technology Stack

| Layer | Technology | Purpose | Status |
|-------|------------|---------|---------|
| **Framework** | TanStack Start v1.141+ | Full-stack React with SSR | ✅ Production |
| **Routing** | TanStack Router v1.140+ | File-based routing with search params | ✅ Production |
| **Styling** | Tailwind CSS v3.4+ | Utility-first with custom design tokens | ✅ Production |
| **UI Components** | Custom + shadcn/ui | Accessible, reusable components | ✅ Production |
| **Backend** | Supabase | PostgreSQL, Storage, Auth, Edge Functions | ✅ Production |
| **Forms** | TanStack Form | Advanced form handling with validation | ✅ Production |
| **Animation** | Framer Motion v11+ | Smooth animations and transitions | ✅ Production |
| **Security** | Cloudflare Turnstile | Spam protection and bot detection | ✅ Production |
| **Email** | Resend | Transactional email delivery | ✅ Production |
| **Deployment** | Vercel/Netlify | Global CDN with SSR support | ✅ Ready |

## Enterprise Development Setup

### Prerequisites

- **Node.js:** 22.12.0+ (required for TanStack Start 1.141+)
- **Package Manager:** npm/pnpm/bun
- **Database:** Supabase account with project
- **Security:** Cloudflare Turnstile account
- **Email:** Resend account for transactional emails

### Production Environment Variables

```env
# Database
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key

# Security
TURNSTILE_SECRET_KEY=your_turnstile_secret
VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key

# Email
RESEND_API_KEY=your_resend_api_key

# Warranty System
WARRANTY_TO_EMAIL=support@renoz.energy
WARRANTY_FROM_EMAIL=noreply@renoz.energy
```

## Comprehensive Dependencies

### **Core Framework**
- `@tanstack/start` - Full-stack React framework with SSR
- `@tanstack/react-router` - Type-safe routing with search params
- `@tanstack/react-form` - Advanced form handling and validation
- `react` & `react-dom` - UI rendering with concurrent features

### **Performance & Optimization**
- `vite` - Lightning-fast build tool with advanced optimization
- `terser` - Advanced JavaScript minification
- `@vitejs/plugin-legacy` - Legacy browser support
- `rollup` - Advanced bundling with manual chunks

### **Security & Validation**
- `dompurify` - XSS prevention and HTML sanitization
- `@cloudflare/turnstile-types` - Type-safe bot protection
- `zod` - Runtime type validation and schema parsing

### **UI & Animation**
- `tailwindcss` - Utility-first CSS with custom tokens
- `framer-motion` - Production-ready animations
- `@radix-ui/react-*` - Accessible primitive components
- `lucide-react` - Consistent icon system

### **Development & Quality**
- `@biomejs/biome` - Fast linting and formatting
- `typescript` - Strict type checking
- `@types/*` - Comprehensive type definitions
- `autoprefixer` & `postcss` - CSS processing pipeline

## Enterprise Technical Specifications

### **Performance Standards**
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** All "Good" ratings (LCP <2.5s, FID <100ms, CLS <0.1)
- **Bundle Size:** <250KB server bundle with intelligent code splitting
- **Image Optimization:** WebP format with PNG fallbacks, lazy loading

### **Security Standards**
- **XSS Protection:** Input sanitization, Content Security Policy
- **CSRF Protection:** Token-based form validation
- **Rate Limiting:** API endpoint protection, form submission limits
- **Data Validation:** Runtime type checking with Zod schemas

### **Accessibility Standards**
- **WCAG 2.1 AA:** Screen reader support, keyboard navigation, color contrast
- **Touch Targets:** 44px minimum for mobile interactions
- **Focus Management:** Visible focus indicators, logical tab order
- **ARIA Labels:** Comprehensive screen reader support

### **Browser Support**
- **Modern Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Safari:** iOS 14+ with PWA support
- **Progressive Enhancement:** Core functionality without JavaScript
- **Legacy Support:** ES5 transpilation for older browsers

## Advanced Build & Deployment

### **Production Build Configuration**

```typescript
// vite.config.ts - Enterprise optimization
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
      mangle: { safari10: true }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Intelligent code splitting strategy
          if (id.includes('framer-motion')) return 'animation';
          if (id.includes('@supabase')) return 'database';
          if (id.includes('lucide-react')) return 'icons';
        }
      }
    }
  }
});
```

### **Development Workflow**

```bash
# Development
npm run dev          # Hot-reload dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run type-check   # TypeScript validation

# Quality Assurance
npm run lint         # Code linting
npm run format       # Code formatting
npm run test:e2e     # End-to-end testing (when implemented)
```

### **Deployment Strategy**

#### **Primary: Vercel (Recommended)**
```vercel.json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "functions": {
    "dist/server/**/*.js": {
      "runtime": "@vercel/node"
    }
  }
}
```

#### **Alternative: Netlify**
- Automatic SSR support
- Form handling integration
- CDN optimization built-in

### **Environment Management**

#### **Development**
- Hot reload with TanStack DevTools
- TypeScript strict mode enabled
- Comprehensive error overlay

#### **Staging**
- Production build verification
- SEO meta tag validation
- Performance testing

#### **Production**
- Error tracking (Sentry integration ready)
- Performance monitoring (Core Web Vitals)
- CDN asset optimization

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
