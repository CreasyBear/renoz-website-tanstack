# RENOZ Energy Website

A modern, OEM-focused website for RENOZ Energy built with TanStack Start.

## Features

### Core Stack
- **Modern Stack**: TanStack Start (React full-stack framework)
- **Design System**: RENOZ brand colors + authentic brand aesthetic
- **CMS Integration**: Supabase for products, blog, and form management
- **Contact Forms**: Integrated with Supabase + email notifications
- **Responsive**: Mobile-first design with tested breakpoints
- **Performance**: Optimized for Lighthouse scores 95+

### Analytics & Monitoring
- **Plausible Analytics**: Privacy-focused, no cookie banner needed
- **Web Vitals Tracking**: Automatic Core Web Vitals monitoring
- **Vercel Analytics**: Real User Monitoring (optional)
- **Error Tracking**: Built-in logging for debugging

### Security & Performance
- **Content Security Policy**: Comprehensive CSP headers
- **Security Headers**: HSTS, X-Frame-Options, CSP, and more
- **PWA Support**: Service worker for offline fallback
- **Image Optimization**: WebP format, lazy loading, proper caching
- **Code Splitting**: Automatic with TanStack Router
- **Edge Functions**: Server-side form processing

### SEO & Discoverability
- **Meta Tags**: Comprehensive OG and Twitter cards on all pages
- **Structured Data**: Schema.org Organization markup
- **Sitemap**: Auto-generated with all routes
- **Robots.txt**: Configured for optimal crawling
- **Fast Loading**: < 3s on 3G connections

### Developer Experience
- **GitHub Actions**: Automated lint, build, and type checking
- **TypeScript**: Full type safety
- **Biome**: Fast linting and formatting
- **Hot Reload**: Instant feedback in development
- **Dev Tools**: TanStack Router and React devtools integrated

## Getting Started

### Prerequisites

- Node.js 18+ (22.12+ recommended)
- npm or pnpm
- Supabase account

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
# Copy the template to create your .env file
cp env.template .env
```

Edit `.env` and add your credentials. See `env.template` for detailed instructions.

**Required Variables:**

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `VITE_TURNSTILE_SITE_KEY` - Cloudflare Turnstile site key (for spam protection)
- `TURNSTILE_SECRET_KEY` - Cloudflare Turnstile secret key
- `RESEND_API_KEY` - Resend API key (for email notifications)

**Optional Variables (have defaults):**

- `CONTACT_FORM_TO_EMAIL` - Where contact form submissions go (default: <sales@renoz.energy>)
- `WARRANTY_TO_EMAIL` - Where warranty registrations go (default: <support@renoz.energy>)

3. Set up Supabase database:
   - Create a new Supabase project at <https://supabase.com>
   - Run the SQL schema from `supabase-schema.sql` in the SQL Editor
   - Run `setup-storage.sql` to create the warranty uploads bucket and RLS policies
   - This creates tables: `products`, `posts`, `inquiries`, `warranty_registrations`

4. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
src/
├── routes/              # File-based routing
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   ├── contact.tsx     # Contact form
│   ├── homeowners.tsx  # B2C landing page
│   ├── installers.tsx  # B2B installer page
│   ├── admin.tsx       # CMS admin interface
│   └── products/       # Product category pages
├── components/
│   ├── layout/         # Header, Footer
│   ├── ui/             # Button, Card components
│   └── sections/       # Page sections
├── lib/
│   └── supabase.ts     # Supabase client
└── styles.css          # Global styles + CSS variables
```

## Design System

### Colors

- **Primary Green**: `#00B140` (RENOZ brand)
- **Cream**: `#F5F0E8` (section backgrounds)
- **Black**: `#1A1A1A` (hero/dark sections)
- **White**: `#FFFFFF` (content backgrounds)

### Typography

- **Font**: Inter (Light 300, Regular 400, Medium 500, Bold 700)
- **Headlines**: Bold, large sizes (40-64px)
- **Body**: Light/Regular (16-18px), line-height 1.6

## Pages

- **Home** (`/`): Hero, feature panels, product segments, value props, CTA
- **Homeowners** (`/homeowners`): B2C-focused landing page
- **Installers** (`/installers`): B2B technical specs and support
- **Products** (`/products`): Overview and category pages (Residential, Rural, Commercial)
- **About** (`/about`): Company mission and certifications
- **Contact** (`/contact`): Contact form with Supabase integration
- **Warranty** (`/warranty`): Warranty registration form with file uploads
- **Admin** (`/admin`): CMS interface for products and blog posts

## Supabase Setup

The database schema includes:

1. **products** table: Product catalog with categories
2. **posts** table: Blog/Resources CMS
3. **inquiries** table: Contact form submissions
4. **warranty_registrations** table: Warranty registration submissions

Row Level Security (RLS) is enabled:

- Products: Public read, authenticated write
- Posts: Public read published, authenticated write
- Inquiries: Public insert, authenticated read

## Deployment

### Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to vercel.com → New Project
   - Import GitHub repository
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `.output`

3. **Add Environment Variables** (in Vercel Dashboard)
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_key
   VITE_TURNSTILE_SITE_KEY=your_key
   TURNSTILE_SECRET_KEY=your_key
   RESEND_API_KEY=re_your_key
   ```

4. **Deploy!**

📖 **Comprehensive Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment checklist, post-deployment tasks, SEO setup, and troubleshooting.

### Pre-Deployment Checklist

**Code Quality:**
- [ ] `npm run lint` passes
- [ ] `npm run format` applied
- [ ] `npm run build` succeeds
- [ ] All forms tested locally

**Services Setup:**
- [ ] Supabase database created & schema deployed
- [ ] Cloudflare Turnstile configured
- [ ] Resend account setup & domain verified
- [ ] All environment variables ready

**Content & SEO:**
- [ ] All images optimized (WebP)
- [ ] Meta tags on all pages
- [ ] Sitemap up to date
- [ ] Legal pages reviewed

### Post-Deployment

**Day 1:**
- [ ] Test all forms in production
- [ ] Verify email notifications
- [ ] Check mobile responsiveness
- [ ] Test page load speed

**Week 1:**
- [ ] Enable Vercel Analytics
- [ ] Set up Plausible Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Core Web Vitals

**Month 1:**
- [ ] Review analytics data
- [ ] Check form submissions in Supabase
- [ ] Monitor error logs
- [ ] Update content as needed

## Development

- **Format**: `npm run format` (Biome)
- **Lint**: `npm run lint` (Biome)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Brand Assets

- Logo: RENOZ ENERGY (text-based, green accent on "O")
- Colors: Defined in `src/styles.css` CSS variables
- Font: Inter (Google Fonts)

## Environment Setup Guide

### 1. Supabase Setup

1. Create account at <https://supabase.com>
2. Create new project
3. Go to Settings > API to get URL and anon key
4. Run `supabase-schema.sql` in SQL Editor
5. Run `setup-storage.sql` to create warranty uploads bucket

### 2. Cloudflare Turnstile Setup

1. Sign up at <https://dash.cloudflare.com/sign-up/turnstile>
2. Add a new site (use your domain or 'localhost' for dev)
3. Copy Site Key → `VITE_TURNSTILE_SITE_KEY`
4. Copy Secret Key → `TURNSTILE_SECRET_KEY`

### 3. Resend Email Setup

1. Sign up at <https://resend.com> (free: 100 emails/day)
2. Verify your domain (or use resend.dev for testing)
3. Go to API Keys and create a new key
4. Copy the API key (starts with 're_') → `RESEND_API_KEY`

### 4. Testing Forms Locally

- **Contact Form**: Visit `/contact` and submit a test inquiry
- **Warranty Form**: Visit `/warranty` and submit a test registration
- Check Supabase tables for data
- Check email inbox for notifications

## Features

### Contact Form (`/contact`)

- Turnstile spam protection
- Email notifications via Resend
- Saves to Supabase `inquiries` table
- Query parameter support (e.g., `/contact?type=homeowner`)

### Warranty Registration (`/warranty`)

- Multi-step form with validation
- File uploads (images/PDFs) to Supabase Storage
- Automated emails to:
  - Support team (full details)
  - Installer (confirmation)
  - Homeowner (confirmation, if applicable)
- Generates unique warranty ID
- Saves to `warranty_registrations` table

## Next Steps

1. ✅ Warranty form design aligned with site aesthetic
2. ✅ Turnstile and Resend integration complete
3. ✅ File upload system working
4. Add authentication for admin interface
5. Implement blog post detail pages
6. Add case study detail pages
7. Performance optimization (image lazy loading, etc.)

## License

Private - RENOZ Energy
